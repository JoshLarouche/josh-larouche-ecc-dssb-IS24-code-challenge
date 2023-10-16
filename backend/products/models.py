from django.db import models
import uuid

class Product(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    productName = models.CharField("Product Name", max_length=240)
    productOwnerName = models.CharField("Product Owner Name", max_length=80)
    developers = models.CharField("Developers", max_length=240)
    scrumMasterName = models.CharField("Scrum Master Name", max_length=80)
    startDate = models.DateField("Start Date", auto_now_add=True)
    methodology = models.CharField("Methodology", max_length=20)
    location = models.URLField("Location")

    def __str__(self):
        return self.productName