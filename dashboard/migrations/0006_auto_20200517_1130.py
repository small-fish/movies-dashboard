# Generated by Django 3.0.6 on 2020-05-17 11:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0005_auto_20200516_2359'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='movies',
            name='movieid',
        ),
        migrations.AlterField(
            model_name='movies',
            name='id',
            field=models.TextField(db_column='movieId', primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='ratings',
            name='movieid',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.SET_NULL, to='dashboard.Movies'),
        ),
        migrations.AlterField(
            model_name='tags',
            name='movieid',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.SET_NULL, to='dashboard.Movies'),
        ),
    ]
