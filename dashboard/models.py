from django.db import models

class Links(models.Model):
    id = models.AutoField(primary_key=True)
    movieid = models.TextField(db_column='movieId', blank=True, null=True)  # Field name made lowercase.
    imdbid = models.TextField(db_column='imdbId', blank=True, null=True)  # Field name made lowercase.
    tmdbid = models.TextField(db_column='tmdbId', blank=True, null=True)  # Field name made lowercase.

    class Meta:
        managed = True
        db_table = 'links'


class Movies(models.Model):
    id = models.AutoField(primary_key=True)
    movieid = models.TextField(db_column='movieId', blank=True, null=True)  # Field name made lowercase.
    title = models.TextField(blank=True, null=True)
    genres = models.TextField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'movies'


class Ratings(models.Model):
    id = models.AutoField(primary_key=True)
    userid = models.TextField(db_column='userId', blank=True, null=True)  # Field name made lowercase.
    movieid = models.TextField(db_column='movieId', blank=True, null=True)  # Field name made lowercase.
    rating = models.TextField(blank=True, null=True)
    timestamp = models.TextField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'ratings'


class Tags(models.Model):
    id = models.AutoField(primary_key=True)
    userid = models.TextField(db_column='userId', blank=True, null=True)  # Field name made lowercase.
    movieid = models.TextField(db_column='movieId', blank=True, null=True)  # Field name made lowercase.
    tag = models.TextField(blank=True, null=True)
    timestamp = models.TextField(blank=True, null=True)

    class Meta:
        managed = True
        db_table = 'tags'

