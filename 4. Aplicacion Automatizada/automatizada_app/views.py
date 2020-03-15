from django.shortcuts import render
import datetime
from django.http import HttpResponse, HttpResponseRedirect
import subprocess
from aplicacion_automatizada import settings
from .models import Reporte
from datetime import datetime
from django.urls import reverse
import os
import shutil

def home(request):
    reportes = Reporte.objects.all()
    for r in reportes:
        print(r.imagen_base)
    return render(request, 'automatizada_app/index.html', {'reportes': reportes})

def agregar_reporte(request):
    subprocess.call(['npx', 'cypress', 'run'], shell=True, cwd=settings.CYPRESS_PATH)

    reporte = Reporte()
    reporte.save()
    imagen1 = settings.CYPRESS_PATH+'//cypress//screenshots//test.js//pantallazo1.png'
    imagen1_1 = settings.RUTA_IMAGENES+'//'+str(reporte.id)+'_1.png'
    shutil.copy(imagen1,imagen1_1)
    imagen2 = settings.CYPRESS_PATH+'//cypress//screenshots//test.js//pantallazo2.png'
    imagen2_2 = settings.RUTA_IMAGENES+'//'+str(reporte.id)+'_2.png'
    shutil.copy(imagen2,imagen2_2)
    os.remove(imagen1)
    os.remove(imagen2)

    imagen3 = settings.RUTA_IMAGENES+'//'+str(reporte.id)+'_3.png'
    """     print("1", imagen1_1)
    print("2", imagen2_2)
    print("3", imagen3) """

    #salida = subprocess.call(['node', 'index.js',imagen1_1, imagen2_2, imagen3], shell=True, cwd=settings.RESEMBLE_PATH)
    salida = subprocess.run(['node', 'index.js',imagen1_1, imagen2_2, imagen3], shell=True, cwd=settings.RESEMBLE_PATH, stdout=subprocess.PIPE)
    print ("la salida es:", salida.stdout)

    reporte.imagen_base = imagen1_1
    reporte.imagen_modificada = imagen2_2
    reporte.imagen_diferencias = imagen3
    reporte.fecha = datetime.now()
    reporte.informacion = salida.stdout.decode('utf-8')
    reporte.save()
    return HttpResponseRedirect(reverse('home'))