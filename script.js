let cont = document.createElement('div');
cont.setAttribute('class', 'container-lg');

let row = document.createElement('div');
row.setAttribute('class', 'row');

let col1 = document.createElement('div');
col1.setAttribute('class', 'col-lg-12');
col1.setAttribute('id', 'row1')

let para1 = document.createElement('p');
para1.setAttribute('id', 'para1');
para1.innerHTML = "Welcome to Tanglish Portal !!!";
col1.append(para1);

let col2 = document.createElement('div');
col2.setAttribute('class', 'col-lg-4');
col2.setAttribute('id', 'row2');

let img1 = document.createElement('img');
img1.setAttribute('src', 'https://d18x2uyjeekruj.cloudfront.net/wp-content/uploads/2021/01/th.jpg');
img1.setAttribute('alt', '#');
img1.setAttribute('id', 'img1');
col2.append(img1);

let col3 = document.createElement('div');
col3.setAttribute('class', 'col-lg-6');
col3.setAttribute('id', 'row2');

let para2 = document.createElement('p');
para2.innerHTML = "Learn Thirukkural easily in English from our portal!";
para2.setAttribute("id", 'para2');
col3.append(para2);

let para3 = document.createElement('p');
para3.innerHTML = "Create your new account here and get our free app now!";
para3.setAttribute("id", 'para3');
col3.append(para3);

let but1 = document.createElement('button');
but1.setAttribute('type', 'button');
but1.setAttribute('id', 'button');
but1.setAttribute('class', 'btn btn-primary');
but1.innerHTML = "Login";
col3.append(but1);

let but2 = document.createElement('button');
but2.setAttribute('type', 'button');
but2.setAttribute('id', 'button');
but2.setAttribute('class', 'btn btn-success');
but2.innerHTML = "Signup";
col3.append(but2);

let but3 = document.createElement('button');
but3.setAttribute('type', 'button');
but3.setAttribute('id', 'button');
but3.setAttribute('class', 'btn btn-danger');
but3.innerHTML = "Get app";
col3.append(but3);

let col4 = document.createElement('div');
col4.setAttribute('class', 'col-lg-2');
col4.setAttribute('id', 'row2');

let col5 = document.createElement('div');
col5.setAttribute('class', 'col-lg-12');
col5.setAttribute('id', 'row3');

let para4 = document.createElement('p');
para4.innerHTML = "The Thirukkural or shortly the Kural, is a classic Tamil language text consisting of 1,330 short couplets, or kurals, of seven words each. The text is divided into three books with aphoristic teachings on virtue (aram), wealth (porul) and love (inbam), respectively. Considered one of the greatest works ever written on ethics and morality, it is known for its universality and secular nature. Its authorship is traditionally attributed to Valluvar, also known in full as Thiruvalluvar. The text has been dated variously from 300 BCE to 5th century CE. The traditional accounts describe it as the last work of the third Sangam, but linguistic analysis suggests a later date of 450 to 500 CE and that it was composed after the Sangam period.";
col5.append(para4);

let col6 = document.createElement('div');
col6.setAttribute('class', 'col-lg-12');
col6.setAttribute('id', 'row4');

let input = document.createElement('input');
input.setAttribute('type', 'number');
input.setAttribute('name', 'input');
input.setAttribute('id', 'input');
input.setAttribute('class', 'form-control');
input.setAttribute('placeholder', 'Enter a number to search for a quote (Max: 1330)');
col6.append(input);

let col7 = document.createElement('div');
col7.setAttribute('class', 'col-lg-12');
col7.setAttribute('id', 'row5');

let but4 = document.createElement('button');
but4.setAttribute('type', 'button');
but4.setAttribute('id', 'button1');
but4.addEventListener('click', getdata);
but4.setAttribute('class', 'btn btn-warning');
but4.innerHTML = "Search";
col7.append(but4);

let col8 = document.createElement('div');
col8.setAttribute('class', 'col-lg-12');
col8.setAttribute('id', 'row6');

let para5 = document.createElement('p');
para5.setAttribute('id', 'para5');
col8.append(para5);

let para6 = document.createElement('p');
para6.setAttribute('id', 'para6');
col8.append(para6);

let para7 = document.createElement('p');
para7.setAttribute('id', 'para7');
col8.append(para7);

let para8 = document.createElement('p');
para8.setAttribute('id', 'para8');
col8.append(para8);

let col9 = document.createElement('div');
col9.setAttribute('class', 'col-lg-12');
col9.setAttribute('id', 'row7'); 

var table1 = document.createElement('table');
table1.setAttribute('class', 'table table-striped');
table1.setAttribute('id', 'table1');

var thead1 = document.createElement('thead');
thead1.setAttribute('class', 'thead');

var tr1 = document.createElement('tr');
var th1 = createelement('th', 'th1', '');
var th2 = createelement('th', 'th2', '');
var th3 = createelement('th', 'th3', '');
var th4 = createelement('th', 'th4', '');
tr1.append(th1, th2, th3, th4);
thead1.append(tr1);

var tbody1 = document.createElement('tbody');
var tr2 = document.createElement('tr');
var td1 = createelement('td', 'td1', '');
var td2 = createelement('td', 'td2', '');
var td3 = createelement('td', 'td3', '');
var td4 = createelement('td', 'td4', '');
tr2.append(td1, td2, td3, td4);
tbody1.append(tr2);
table1.append(thead1, tbody1);
col9.append(table1);

let col10 = document.createElement('div');
col10.setAttribute('class', 'col-lg-12');
col10.setAttribute('id', 'row8'); 

let para9 = document.createElement('p');
para9.setAttribute('id', 'para9');
col10.append(para9);

let para10 = document.createElement('p');
para10.setAttribute('id', 'para10');
col10.append(para10);

let para11 = document.createElement('p');
para11.setAttribute('id', 'para11');
col10.append(para11);

let col11 = document.createElement('div');
col11.setAttribute('class', 'col-lg-12');
col11.setAttribute('id', 'row9'); 

var table2 = document.createElement('table');
table2.setAttribute('class', 'table table-striped');
table2.setAttribute('id', 'table2');

var thead2 = document.createElement('thead');
thead2.setAttribute('class', 'thead');

var tr3 = document.createElement('tr');
var th5 = createelement('th', 'th5', '');
var th6 = createelement('th', 'th6', '');
var th7 = createelement('th', 'th7', '');
var th8 = createelement('th', 'th8', '');
tr3.append(th5, th6, th7, th8);
thead2.append(tr3);

var tbody2 = document.createElement('tbody');
var tr4 = document.createElement('tr');
var td5 = createelement('td', 'td5', '');
var td6 = createelement('td', 'td6', '');
var td7 = createelement('td', 'td7', '');
var td8 = createelement('td', 'td8', '');
tr4.append(td5, td6, td7, td8);
tbody2.append(tr4);
table2.append(thead2, tbody2);
col11.append(table2);

let col12 = document.createElement('div');
col12.setAttribute('class', 'col-lg-12');
col12.setAttribute('id', 'row10'); 

let para12 = document.createElement('p');
para12.innerHTML = "Follow us at";
para12.setAttribute('id', 'para12');
col12.append(para12);

let col13 = document.createElement('div');
col13.setAttribute('class', 'col-lg-12');
col13.setAttribute('id', 'row11'); 

let icon1 = document.createElement('i');
icon1.setAttribute('class', 'fa fa-facebook fa-2x text-white');
icon1.innerHTML = "&nbsp; &nbsp;";

let icon2 = document.createElement('i');
icon2.setAttribute('class', 'fa fa-twitter fa-2x text-white');
icon2.innerHTML = "&nbsp; &nbsp;";

let icon3 = document.createElement('i');
icon3.setAttribute('class', 'fa fa-instagram fa-2x text-white');
icon3.innerHTML = "&nbsp; &nbsp;";

let icon4 = document.createElement('i');
icon4.setAttribute('class', 'fa fa-youtube-play fa-2x text-white');
icon4.innerHTML = "&nbsp; &nbsp;";

let icon5 = document.createElement('i');
icon5.setAttribute('class', 'fa fa-pinterest-p fa-2x text-white');
icon5.innerHTML = "&nbsp; &nbsp;";

let icon6 = document.createElement('i');
icon6.setAttribute('class', 'fa fa-telegram fa-2x text-white');
icon6.innerHTML = "";
col13.append(icon1, icon2, icon3, icon4, icon5, icon6);

let col14 = document.createElement('div');
col14.setAttribute('class', 'col-lg-12');
col14.setAttribute('id', 'row12'); 

let para13 = document.createElement('p');
para13.innerHTML = "About &nbsp; &nbsp; &nbsp; Careers &nbsp; &nbsp; &nbsp; Contact Us &nbsp; &nbsp; &nbsp; Privacy & Terms";
para13.setAttribute('id', 'para13');
col14.append(para13);


row.append(col1, col2, col3, col4, col5, col6, col7, col8, col9, col10, col11, col12, col13, col14);
cont.append(row);
document.body.append(cont);










async function getdata(){
    var x = document.getElementById("input").value;
    
    try {

        let s1 = await fetch(`https://api-thirukkural.vercel.app/api?num=${x}`);
        let s2 = await s1.json();
        console.log(s2);

        let s3 = await fetch("https://api-thirukkural.vercel.app/api?num=414");
        let s4 = await s3.json();
        //console.log(s4);

        const myjson = JSON.stringify(s4);
        localStorage.setItem("testJSON",myjson);
        let text  = localStorage.getItem("testJSON");
        let obj = JSON.parse(text);
        //console.log(obj);

        document.getElementById("para5").innerHTML = `குறள் எண்: ${x}`;
        document.getElementById("para6").innerHTML = s2.line1;
        document.getElementById("para7").innerHTML = s2.line2;
        document.getElementById("para8").innerHTML = "- திருவள்ளுவர்";

        document.getElementById("th1").innerHTML = "அதிகாரம்";
        document.getElementById("th2").innerHTML = "இயல்";
        document.getElementById("th3").innerHTML = "பிரிவு";
        document.getElementById("th4").innerHTML = "விளக்கம்";

        document.getElementById("td1").innerHTML = s2.chap_tam;
        document.getElementById("td2").innerHTML = s2.chapgrp_tam;
        document.getElementById("td3").innerHTML = s2.sect_tam;
        document.getElementById("td4").innerHTML = s2.tam_exp;

        document.getElementById("para9").innerHTML = `Quote No: ${x}`;
        document.getElementById("para10").innerHTML = `${s2.eng}.`;
        document.getElementById("para11").innerHTML = "- Thiruvalluvar";

        document.getElementById("th5").innerHTML = "Chapter";
        document.getElementById("th6").innerHTML = "Chapter Group";
        document.getElementById("th7").innerHTML = "Division";
        document.getElementById("th8").innerHTML = "Explanation";

        document.getElementById("td5").innerHTML = s2.chap_eng;
        document.getElementById("td6").innerHTML = s2.chapgrp_eng;
        document.getElementById("td7").innerHTML = s2.sect_eng;
        document.getElementById("td8").innerHTML = s2.eng_exp;

    } catch (error) {
        console.log(error);
    }  
}

function createelement(elename, id, value){
    var element = document.createElement(elename);
    element.setAttribute('id', id);
    element.innerHTML = value;
    return element;
}

