function loadJson() {
    var url = "http://orfi.uwm.edu.pl/~s145850/projekt2/ajaxy/dane.json";
    var ajax = new XMLHttpRequest();

    ajax.onload = function() {
        if (ajax.status == 200) {
            displayResult(ajax.responseText);
        }
    };

    ajax.open("GET","http://orfi.uwm.edu.pl/~s145850/projekt2/ajaxy/dane.json");
    ajax.send(null);
}

function loadXml() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            dspRes(this);
        }
    };
    xhttp.open("GET", "http://orfi.uwm.edu.pl/~s145850/projekt2/ajaxy/dane.xml", true);
    xhttp.send();
}

function loadTxt() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
            document.getElementById("dane3").innerHTML = this.responseText;
    };
    xhttp.open("GET","http://orfi.uwm.edu.pl/~s145850/projekt2/ajaxy/dane.txt");
    xhttp.send();
}

function displayResult(responseText) {
    var daneDiv = document.getElementById('dane');
    var TabRejestr = JSON.parse(responseText);
    for (var i=0;i<TabRejestr.length;i++) {
        var dane = TabRejestr[i];
        var div = document.createElement("div");
        div.setAttribute("class","daneItem");
        div.innerHTML = dane.nick+" - miasto: "+dane.miasto;
        daneDiv.appendChild(div);
    }
}

function dspRes(xml) {
    var xmlDoc = xml.responseXML;
    var table = "<tr><th>Nick&nbsp;&nbsp;&nbsp;&nbsp;</th><th>Miasto&nbsp;&nbsp;&nbsp;&nbsp;</th><th>Liczba&nbsp;&nbsp;&nbsp;&nbsp;</th><th>Czas&nbsp;&nbsp;&nbsp;&nbsp;</th><br>";
    var x = xmlDoc.getElementsByTagName("row");
    for (var i=0; i< x.length; i++) {
        table += "<tr><td>" + x[i].getElementsByTagName("nick")[0].childNodes[0].nodeValue + "&nbsp;&nbsp;&nbsp;&nbsp;</td><td>" + x[i].getElementsByTagName("miasto")[0].childNodes[0].nodeValue + "&nbsp;&nbsp;&nbsp;&nbsp;</td><td>" + x[i].getElementsByTagName("liczba")[0].childNodes[0].nodeValue + "&nbsp;&nbsp;&nbsp;&nbsp;</td><td>" + x[i].getElementsByTagName("time")[0].childNodes[0].nodeValue+"</td></tr><br>"
    }
    document.getElementById("dane2").innerHTML = table;
}