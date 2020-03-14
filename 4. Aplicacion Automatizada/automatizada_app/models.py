from django.db import models

# Create your models here.

def directorio(instance, filename):
    # El script de la prueba sera subido a la carpeta archivos/scripts/(id de la estrategia)_(nombre del archivo)
    return '{0}'.format(filename)

class Design(models.Model):
    
    fecha = models.DateTimeField()
    imagen_base = models.ImageField(upload_to=directorio)
    imagen_modificada = models.ImageField(upload_to=directorio)
    imagen_diferencias = models.ImageField(upload_to=directorio)
    informacion = models.CharField(max_length=200)

