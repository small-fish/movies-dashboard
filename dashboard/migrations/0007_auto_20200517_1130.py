# Generated by Django 3.0.6 on 2020-05-17 11:30

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('dashboard', '0006_auto_20200517_1130'),
    ]

    operations = [
        migrations.AlterField(
            model_name='links',
            name='movieid',
            field=models.ForeignKey(blank=True, db_constraint=False, null=True, on_delete=django.db.models.deletion.SET_NULL, to='dashboard.Movies'),
        ),
    ]
