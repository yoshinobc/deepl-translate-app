from django.shortcuts import render
from django.http import HttpResponse
from datetime import datetime
# Create your views here.

def index(request):
    return HttpResponse("index !: ")

def index_render(request):
    return render(request, 'index.html')

def index_dict(request):
    d = {
            'hour': datetime.now().hour,
            'message': 'Sample message',
        }
    return render(request, 'index_dict.html',d)
