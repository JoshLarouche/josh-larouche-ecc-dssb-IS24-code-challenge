from django.db import migrations

def create_data(apps, schema_editor):
    Product = apps.get_model('products', 'Product')
    Product(productName="test", productOwnerName="test", developers="test", scrumMasterName="test", startDate="", methodology="test", location="test").save()

class Migration(migrations.Migration):

    dependencies = [
        ('products', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(create_data),
    ]