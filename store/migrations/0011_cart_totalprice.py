# Generated by Django 3.2 on 2021-05-02 20:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('store', '0010_remove_cart_totalprice'),
    ]

    operations = [
        migrations.AddField(
            model_name='cart',
            name='totalPrice',
            field=models.FloatField(default=1),
            preserve_default=False,
        ),
    ]
