all_syms_list = ['sneezing', 'cough', 'cold', 'difficulty breathing', 'bodypains', 'inflammation', 'headache', 'fever', 'mild fever', 'high fever', 'watery eyes', 'ear pain', 'vomiting', 'motions', 'diarrhea', 'high BP', 'sleep illness', 'joint pain', 'swelling', 'nausea', 'runny nose', 'skin rash', 'allergies', 'sore throat', 'throat infection', 'muscle contraction', 'skin redness', 'dry skin', 'constipation', 'back pain', 'throat infection', 'mouth ulcer', 'hair fall', 'dandruff', 'eye redness', 'dry eyes', 'low immunity', 'energy++', 'weakness', 'stomach pain', 'stuffed nose', 'nose blockage', 'wounds', 'cracked heels', 'firstaid']
var syms_deleted = [];
var selected_syms = [];

var search_bar = document.querySelector('.mainbar')
function hel(a) {
    var search_btn = document.querySelector('.ser');
    search_btn.style.borderBottomRightRadius = "20px";
    selected_syms.push(a.innerText); a
    elementsInput.value = selected_syms;

    search_bar.style.borderBottomLeftRadius = "20px";
    var added_li = document.createElement('li')
    added_li.setAttribute('class', 'addedsy');
    added_li.innerHTML = a.innerText + ' <i class="fa-solid sym_cancel fa-x"></i>';
    var par_ul = document.querySelector('.eleme');
    par_ul.appendChild(added_li);
    added_li.addEventListener('click', () => {
        syms_deleted.push(added_li.innerText);
        added_li.style.display = 'none';

    })
    var search_bar = document.querySelector('#mainadd');
    search_bar.value = '';
    var list_ele = document.querySelector('#mainlist')
    if (list_ele) list_ele.remove();
}
search_bar.addEventListener('keyup', () => {

    var list_ele = document.querySelector('#mainlist');
    if (list_ele) list_ele.remove();
    var search_bar_val = document.querySelector('#mainadd').value;
    var search_btn = document.querySelector('.ser');
    search_btn.style.borderBottomRightRadius = "0px";

    search_bar.style.borderBottomLeftRadius = "0px";
    var format_ls = search_bar_val.toLowerCase()
    var matched_sym_ct = 0;
    for (var i = 0; i < all_syms_list.length; i++) {
        if (all_syms_list[i].startsWith(format_ls) == true && format_ls != '') {
            matched_sym_ct++;
            if (matched_sym_ct == 1) {
                var ull = document.createElement('ul')
                ull.setAttribute("id", "mainlist")
                var div = document.querySelector('.entire_box')
                div.append(ull);
            }
            if (matched_sym_ct > 5) break;
            var ll = document.createElement('li')
            ll.setAttribute("class", "updt")
            ll.innerHTML = all_syms_list[i];
            ull.append(ll);

        }

    }
    if (matched_sym_ct > 0) {
        ull.style.border = "1.6px solid black"
        ull.style.borderTop = "0.5px solid black"
    } else {

        let search_bar = document.querySelector('.mainbar');
        let search_btn = document.querySelector('.ser');
        search_bar.style.borderBottomLeftRadius = "20px";
        search_bar.style.bordertopLeftRadius = "20px";
        search_btn.style.bordertopRightRadius = "20px";
        search_btn.style.borderBottomRightRadius = "20px";


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


let ser_btn = document.querySelector('.ser');
ser_btn.addEventListener('click', () => {
    const filteredSyms = selected_syms.filter(sym => !syms_deleted.includes(sym + ' '));
    selected_syms = filteredSyms;
    const elementsInput = document.getElementById("elementsInput");

    const elementsArrayString = JSON.stringify(selected_syms);
    
    console.log(elementsArrayString, 'last');
    elementsInput.value = elementsArrayString;
})
