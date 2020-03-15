from django.db import models

# Create your models here.

def directorio(instance, filename):
    # El script de la prueba sera subido a la carpeta archivos/scripts/(id de la estrategia)_(nombre del archivo)
    return '{0}'.format(filename)

class Reporte(models.Model):
    
    fecha = models.DateTimeField(null=True)
    imagen_base = models.ImageField(upload_to=directorio, null=True)
    imagen_modificada = models.ImageField(upload_to=directorio, null=True)
    imagen_diferencias = models.ImageField(upload_to=directorio, null=True)
    informacion = models.CharField(max_length=200, null=True)

