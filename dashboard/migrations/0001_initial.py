# Generated by Django 3.0.6 on 2020-05-16 21:49

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Links',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('movieid', models.TextField(blank=True, db_column='movieId', null=True)),
                ('imdbid', models.TextField(blank=True, db_column='imdbId', null=True)),
                ('tmdbid', models.TextField(blank=True, db_column='tmdbId', null=True)),
            ],
            options={
                'db_table': 'links',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Movies',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('movieid', models.TextField(blank=True, db_column='movieId', null=True)),
                ('title', models.TextField(blank=True, null=True)),
                ('genres', models.TextField(blank=True, null=True)),
            ],
            options={
                'db_table': 'movies',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Ratings',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('userid', models.TextField(blank=True, db_column='userId', null=True)),
                ('movieid', models.TextField(blank=True, db_column='movieId', null=True)),
                ('rating', models.TextField(blank=True, null=True)),
                ('timestamp', models.TextField(blank=True, null=True)),
            ],
            options={
                'db_table': 'ratings',
                'managed': False,
            },
        ),
        migrations.CreateModel(
            name='Tags',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('userid', models.TextField(blank=True, db_column='userId', null=True)),
                ('movieid', models.TextField(blank=True, db_column='movieId', null=True)),
                ('tag', models.TextField(blank=True, null=True)),
                ('timestamp', models.TextField(blank=True, null=True)),
            ],
            options={
                'db_table': 'tags',
                'managed': False,
            },
        ),
    ]
