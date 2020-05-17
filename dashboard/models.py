from django.db import models
from django.db.models import Avg

# db_constraint=False has been set in order to ignore referential integrity issues of input data

class Movies(models.Model):
    id = models.TextField(db_column='movieId', primary_key=True)
    title = models.TextField(blank=True, null=True)
    genres = models.TextField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'movies'

class Links(models.Model):
    id = models.AutoField(primary_key=True)
    movieid = models.ForeignKey(Movies, on_delete=models.SET_NULL, null=True, blank=True, db_constraint=False)
    imdbid = models.TextField(db_column='imdbId', blank=True, null=True)
    tmdbid = models.TextField(db_column='tmdbId', blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'links'


class Ratings(models.Model):
    id = models.AutoField(primary_key=True)
    userid = models.TextField(db_column='userId', blank=True, null=True)
    movieid = models.ForeignKey(Movies, on_delete=models.SET_NULL, null=True, blank=True, db_constraint=False)
    rating = models.TextField(blank=True, null=True)
    timestamp = models.TextField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'ratings'


class Tags(models.Model):
    id = models.AutoField(primary_key=True)
    userid = models.TextField(db_column='userId', blank=True, null=True)
    movieid = models.ForeignKey(Movies, on_delete=models.SET_NULL, null=True, blank=True, db_constraint=False)
    tag = models.TextField(blank=True, null=True)
    timestamp = models.TextField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'tags'

