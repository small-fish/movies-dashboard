from django.http import HttpResponse
from django.shortcuts import render
from django.db.models import Q

from .models import Ratings, Movies, Tags, Links;


def index(request):
    ratings_list = Ratings.objects.filter(userid='1')
    # ratings_list = Q(rating__startswith='4')
    print("111111111111111111111111")
    print(ratings_list)
    print("222222222222222")

    context = {'ratings_list': ratings_list}
    return render(request, 'index.html', context)

#from django.shortcuts import render

# Create your views here.
