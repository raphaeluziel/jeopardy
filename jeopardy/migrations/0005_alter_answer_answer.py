# Generated by Django 4.0.4 on 2022-05-14 22:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jeopardy', '0004_alter_player_questions_answered'),
    ]

    operations = [
        migrations.AlterField(
            model_name='answer',
            name='answer',
            field=models.CharField(max_length=200),
        ),
    ]
