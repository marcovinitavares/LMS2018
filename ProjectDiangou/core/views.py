from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def index(request):
    context = {
        'title': 'FIT - Faculdade Impacta Tecnologia',
    }
    return render(request,"index.html",context)
    
def paginalogin (request):
    return render(request,'paginalogin.html')

def cursos(request):
        return render(request,'cursos.html')