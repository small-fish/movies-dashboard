from django.http import HttpResponse
from django.shortcuts import render
from django.db.models import Q, Avg
import json
from django.core import serializers
from django.core.serializers.json import DjangoJSONEncoder

from .models import Ratings, Movies, Tags, Links;


def index(request):
    movies_list = Movies.objects.all()

    movies = Movies.objects.order_by().annotate(avg_rating=Avg('ratings__rating')).order_by('-avg_rating').values('id', 'title', 'avg_rating', 'genres')
    movies_rating_5 = movies.filter(avg_rating__startswith=5)
    movies_rating_4 = movies.filter(avg_rating__startswith=4)
    movies_rating_3 = movies.filter(avg_rating__startswith=3)
    movies_rating_2 = movies.filter(avg_rating__startswith=2)
    movies_rating_1 = movies.filter(avg_rating__startswith=1)
    movies_total = movies.count

    movies_sorted = [
        movies_rating_1,
        movies_rating_2,
        movies_rating_3,
        movies_rating_4,
        movies_rating_5
    ]

    pageData =  json.dumps(list(movies_rating_5), cls=DjangoJSONEncoder)

    context = {
        'movies_total': movies_total,
        'pageData': pageData,
        'movies_sorted': movies_sorted,
        }

    return render(request, 'dashboard.html', context)
