var v = [];

ls = ['sneezing', 'cough', 'cold', 'difficulty breathing', 'bodypains', 'inflammation', 'headache', 'fever', 'mild fever', 'high fever', 'watery eyes', 'ear pain', 'vomiting', 'motions', 'diarrhea', 'high BP', 'sleep illness', 'joint pain', 'swelling', 'nausea', 'runny nose', 'skin rash', 'allergies', 'sore throat', 'throat infection', 'muscle contraction', 'skin redness', 'dry skin', 'constipation', 'back pain', 'throat infection', 'mouth ulcer', 'hair fall', 'dandruff', 'eye redness', 'dry eyes', 'low immunity', 'energy++', 'weakness', 'stomach pain', 'stuffed nose', 'nose blockage', 'wounds', 'cracked heels', 'firstaid']
var selected_syms = [];

var ele = document.querySelector('.mainbar')
function hel(a) {
    var se_ele = document.querySelector('.ser');
    se_ele.style.borderBottomRightRadius = "20px";
    selected_syms.push(a.innerText);a
    elementsInput.value = selected_syms;

    ele.style.borderBottomLeftRadius = "20px";
    var l = document.createElement('li')
    l.setAttribute('class', 'addedsy');
    l.innerHTML = a.innerText + ' <i class="fa-solid sym_cancel fa-x"></i>';
    var d = document.querySelector('.eleme');
    d.appendChild(l);
    l.addEventListener('click', () => {
        v.push(l.innerText);
        l.style.display = 'none';

    })
    var ee = document.querySelector('#mainadd');
    ee.value = '';
    var list_ele = document.querySelector('#mainlist')
    if (list_ele) list_ele.remove();
}
ele.addEventListener('keyup', () => {

    var list_ele = document.querySelector('#mainlist');
    if (list_ele) list_ele.remove();
    var ee = document.querySelector('#mainadd').value;
    var se_ele = document.querySelector('.ser');
    se_ele.style.borderBottomRightRadius = "0px";

    ele.style.borderBottomLeftRadius = "0px";
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
            if (ct > 5) break;
            var ll = document.createElement('li')
            ll.setAttribute("class", "updt")
            ll.innerHTML = ls[i];
            ull.append(ll);

        }

    }
    if (ct > 0) {
        ull.style.border = "1.6px solid black"
        ull.style.borderTop = "0.5px solid black"
    } else {

        let liss = document.querySelector('.mainbar');
        let sse = document.querySelector('.ser');
        liss.style.borderBottomLeftRadius = "20px";
        liss.style.bordertopLeftRadius = "20px";
        sse.style.bordertopRightRadius = "20px";
        sse.style.borderBottomRightRadius = "20px";


        ull.style.border = "none"

    }

    var addons = document.querySelectorAll('.updt');
    var n = addons.length;




    if (n > 0) {

        addons[n - 1].style.borderBottomLeftRadius = "7px";
        addons[n - 1].style.borderBottomRightRadius = "7px";
    }

    addons.forEach(button => button.addEventListener('click', () => {

        hel(button);
    }));

    console.log('******', selected_syms, '********');
    elementsInput.value = selected_syms;




})

// function comp( a, b){
//     k=1;
// if(a.length+1!==b.length) {

//     console.log(a.length,b.length,'length');
//     console.log(a);
//     console.log(b);
//     return 0;
// }

// else{
//     for(let i=0;i<a.length;i++){
//         if(a[0]!==b[0]) {
//             k=0;
//             console.log('char ,ismatch')
//             return 0;
//         }
//     }

// }
// return 1;
// }
let ser_btn = document.querySelector('.ser');
ser_btn.addEventListener('click', () => {
    const filteredSyms = selected_syms.filter(sym => !v.includes(sym + ' '));
    selected_syms = filteredSyms;
    const elementsInput = document.getElementById("elementsInput");

    const elementsArrayString = JSON.stringify(selected_syms);
    // console.log(selected_syms,'last');
    // console.log(filteredSyms,'last_fil');
    // console.log(typeof(selected_syms[0]),typeof(v[0]),comp(selected_syms[0],v[0]));
    // console.log(v,'last');  
    console.log(elementsArrayString, 'last');
    elementsInput.value = elementsArrayString;
})
