from django.db import models
from django.utils import timezone

# Create your models here.
class Translation(models.Model):
    date = models.DateTimeField(default=timezone.now),
    source_text = models.CharField('変換元', max_length=3000)
    target_text = models.CharField('変換後', max_length=3000)

    def __str__(self):
        return "date: {}, source: {}, target: {}".format(date, source_text, target_text)
