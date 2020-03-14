from django.shortcuts import render
import datetime
from django.http import HttpResponse
import subprocess

def home(request):
    return render(request, 'automatizada_app/index.html', {})

def agregar_reporte(request):
    subprocess.call(['npx', 'cypress', 'run', 'cypress:run', '--spec'], shell=True, cwd='')
    pass