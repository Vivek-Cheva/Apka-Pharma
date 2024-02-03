from django.db import models
class medicines(models.Model):
    sno = models.IntegerField()
    symptoms = models.CharField(max_length=500)
    medicines = models.CharField(max_length=500)
    components = models.CharField(max_length=500)
    
    price = models.IntegerField()
    date = models.CharField(max_length=500)

# Create your models here.
