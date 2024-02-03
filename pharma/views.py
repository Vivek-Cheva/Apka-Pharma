from django.shortcuts import render
from django.http import HttpResponse
from pharma.models import medicines
import json
def home(request):
    return render(request,'index.html')
def contact(request):
    return render(request,'contact_us.html')
def portfolio(request):
    
    return render(request,'about.html')
def stock_add(request):
    from datetime import date
    if request.method == 'POST':
        med_id  = request.POST['med_id'] 
        med     = request.POST['medicine'] 
        sym  = request.POST['symptoms'] 
        com  = request.POST['Components'] 
        pr  = request.POST['price'] 
        nw_med = medicines(sno=med_id,symptoms=sym,medicines=med,components=com,price=pr,date=date.today())
        nw_med.save()
    med_list = medicines.objects.all().order_by('sno')
    return render( request ,'stock_list.html',{'med_list':med_list})
def stock(request):
    # med1 = medicines(sno=1,symptoms='fever',medicines='paracetamol',components='paracetamol',price=100,date='27/10/2004')
    # med1.save()
    # import pandas as pd
    # from datetime import date
    # data =  pd.read_csv('updated_dataset.csv')
    # df = pd.DataFrame(data)
    # for index, row in df.iterrows():
    #     print(row.medicine)
    #     med1 = medicines(sno=row.sno,symptoms=row.symptoms,medicines=row.medicine,components=row.components,price=row.price,date=date.today())
    #     med1.save()
    # medicines.objects.all().delete()

    med_list = medicines.objects.all().order_by('sno')
    # med_list = medicines.objects.all()
    
    
        
    return render( request ,'stock_list.html',{'med_list':med_list})
def update(request,sno):
    to_up = medicines.objects.get(sno=sno)
    if request.method == 'POST':
        to_up.medicines = request.POST['medicine']
        to_up.symptoms = request.POST['symptoms']
        to_up.components = request.POST['Components']
        to_up.price = request.POST['price']
        to_up.save()
        med_list = medicines.objects.all().order_by('sno')
        return render(request,'stock_list.html',{'med_list':med_list})

    
    return render(request,'update.html',{'med':to_up})

def results(request):
    if request.method == 'POST':
        elements = request.POST['elements']
        print(elements)
    import pandas as pd
    import numpy as np
    df = pd.read_csv('med_data_set.csv')

    # filename = 'med_data_set.csv'
    # url = url_for('static', filename=filename)
    # df = pd.read_csv(url)
    ls = []
    # return elements
    # elements = json.load(elements)
    # return elements[0]
    # elements = elements.split(',')
    elements = json.loads(elements)
    # return elements
    for ele in elements:
        print(ele)
        print('helo')
        arr = (df['Symptoms'].loc[df['Symptoms'].str.contains(ele)].index.values)
        ls.append(arr.tolist())
    # return ls
    # lss= np.array(ls)
    ash = np.zeros(50) 
    for i in range(len(ls)):
        for ele in ls[i]:
            ash[ele] = ash[ele]+1

    ans = []
    x = ash.max()
    while(x!=0):
        y = ash.argmax()
        ans.append(ash.argmax())
        for i in range(len(ls)):
            if y in ls[i]:
                ash[ls[i]]=0
        x = ash.max()
    ans = [int(x) for x in ans]  
    med = []
    for ele in ans:
        sub_med = []
        sub_med.append(df.Medicines[ele].split(',')[0])
        sub_med.append(df.Symptoms[ele])
        sub_med.append(''.join(df.Medicines[ele].split(',')[1:]))
        # print('*****************************')
        # print(df.Symptoms[ele])
        # print(df.Medicines[ele].split(',')[1:])
        # print('********************************')
        # print(df.Medicines[ele].split(',')[0])
    # return render_template('medicine.html', elementss=med)
        med.append(sub_med)

        print('*************************')
        print(type(sub_med[0]))
        print(type(sub_med[1]))
        print(type(sub_med[2]))
       
        print('***************************')
    print(med[0][1])
    
    return render(request,'medicine.html',{'elements':med})

# Create your views here.
