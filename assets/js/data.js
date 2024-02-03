const elementsArray = [
    "hello",
    "Ehi",
    "kalyan",
    "Element 4",
    // Add more elements here
];
// const elementList = document.getElementById("elementList");
            // const elementsInput = document.getElementById("elementsInput");
            // const elementsArrayString = JSON.stringify(selected_syms);
            // elementsInput.value = elementsArrayString;
            // Access the JavaScript array and display elements
            // const elementList = document.getElementById("elementList");
            // const dataarr = document.getElementById("dataarr");
            // const elementsArrayString = JSON.stringify(elementsArray);
            // dataarr.value = elementsArrayString;
    
            // elementsArray.forEach(element => {
            //     const li = document.createElement("li");
            //     li.textContent = element;
            //     elementList.appendChild(li);
            // });

// // data.js
// const elementsArray = [
//     "Element 1",
//     "Element 2",
//     "Element 3",
//     // Add more elements here
// ];

// // Send the array to a Flask route using a POST request
// fetch('/submit_elements', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(elementsArray)
// });


    // ls = ['hello', 'hi', 'how', 'are', 'you', 'love', 'you', 'two', 'hwy', 'idiot']
ls = ['sneezing', 'cough', 'cold', 'difficulty breathing', 'bodypains', 'inflammation', 'headache', 'fever', 'mild fever', 'high fever', 'watery eyes', 'ear pain', 'vomiting', 'motions', 'diarrhea', 'high BP', 'sleep illness', 'joint pain', 'swelling', 'nausea', 'runny nose', 'skin rash', 'allergies', 'sore throat', 'throat infection', 'muscle contraction', 'skin redness', 'dry skin', 'constipation', 'back pain', 'throat infection', 'mouth ulcer', 'hair fall', 'dandruff', 'eye redness', 'dry eyes', 'low immunity', 'energy++', 'weakness', 'stomach pain', 'stuffed nose', 'nose blockage', 'wounds', 'cracked heels', 'firstaid']
const selected_syms= [];
window.onload = function () {
    var ele = document.querySelector('.mainbar')
    ele.addEventListener('keyup', () => {
        // ele.style.border-radius:0px;
        var list_ele = document.querySelector('#mainlist')
        if (list_ele) list_ele.remove();
        var ee = document.querySelector('#mainadd').value
        // if(ee!=null)
        // ele.style.borderRadius = "0px";
        var se_ele = document.querySelector('.ser');
        se_ele.style.borderBottomRightRadius = "0px";

        ele.style.borderBottomLeftRadius = "0px";
        // else
    // ele.style.borderRadius = "7px";
        var format_ls = ee.toLowerCase()
        var ct = 0;
        for (var i = 0; i < ls.length; i++) {
            if (ls[i].startsWith(format_ls) == true && format_ls != '') {
                ct++;
                if (ct == 1) {
                    var ull = document.createElement('ul')
                    ull.setAttribute("id", "mainlist")
                    var div = document.querySelector('.entire_box')
                    div.append(ull);
                }
                if(ct>5) break;
                var ll = document.createElement('li')
                ll.setAttribute("class", "updt")
                ll.innerHTML = ls[i];
                ull.append(ll);

            }

        }
        
        var addons = document.querySelectorAll('.updt');
        var n = addons.length;
function hel (a){
    se_ele.style.borderBottomRightRadius = "10px";
    selected_syms.push(a.innerText);
    elementsInput.value = selected_syms;
    ele.style.borderBottomLeftRadius = "10px";
    // selected_syms = selected_syms+ a.innerText;
var l = document.createElement('li')
l.setAttribute('class','addedsy');
l.innerHTML = a.innerHTML;
var d = document.querySelector('.eleme');
d.append(l);
var ee = document.querySelector('#mainadd');
ee.value='';
var list_ele = document.querySelector('#mainlist')
        if (list_ele) list_ele.remove();
}
if(n>0){

    addons[n-1].style.borderBottomLeftRadius = "7px";       
    addons[n-1].style.borderBottomRightRadius = "7px";       
}
if (n>0 &&addons[0] )
addons[0].addEventListener('click',()=>{
    // selected_syms.push(addons[0].innerText);
    
    hel(addons[0]);
});
if (n>1&&addons[1])
addons[1].addEventListener('click',()=>{
    // selected_syms.push(addons[1].innerText);
    hel(addons[1]);
});
if (n>2&&addons[2])
addons[2].addEventListener('click',()=>{
    // selected_syms.push(addons[2].innerText);
    hel(addons[2]);
});
if (n>3&&addons[3])
addons[3].addEventListener('click',()=>{
    // selected_syms.push(addons[3].innerText);
    hel(addons[3]);
});
if (n>4&&addons[4])
addons[4].addEventListener('click',()=>{
        // selected_syms.push(addons[4].innerText);
        hel(addons[4]);

    });
    console.log('******',selected_syms,'********');
    elementsInput.value = selected_syms;
})

}