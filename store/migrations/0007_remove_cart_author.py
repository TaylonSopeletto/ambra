# Generated by Django 3.2 on 2021-05-01 14:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0006_auto_20210501_1130'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cart',
            name='author',
        ),
    ]
