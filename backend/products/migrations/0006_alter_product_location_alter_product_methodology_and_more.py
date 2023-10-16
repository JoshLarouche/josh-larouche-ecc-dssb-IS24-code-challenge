# Generated by Django 4.2.6 on 2023-10-16 05:37

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0005_alter_product_id'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='location',
            field=models.URLField(verbose_name='Location'),
        ),
        migrations.AlterField(
            model_name='product',
            name='methodology',
            field=models.CharField(max_length=20, verbose_name='Methodology'),
        ),
        migrations.AlterField(
            model_name='product',
            name='productOwnerName',
            field=models.CharField(max_length=80, verbose_name='Product Owner Name'),
        ),
        migrations.AlterField(
            model_name='product',
            name='scrumMasterName',
            field=models.CharField(max_length=80, verbose_name='Scrum Master Name'),
        ),
    ]
