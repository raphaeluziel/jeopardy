# Generated by Django 4.0.4 on 2022-05-22 15:29

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('jeopardy', '0002_question_value'),
    ]

    operations = [
        migrations.AlterField(
            model_name='answer',
            name='question',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='HHH', to='jeopardy.question'),
        ),
    ]
