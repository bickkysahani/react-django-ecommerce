# Generated by Django 4.1 on 2022-08-26 16:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0002_product_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]