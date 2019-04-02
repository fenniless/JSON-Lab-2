// fetch("https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD")
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (jsonResponse) {
//
//     });

let request = new XMLHttpRequest();
let output = "";
let data_json;

request.open('GET','https://data.sfgov.org/api/views/yitu-d5am/rows.json?accessType=DOWNLOAD');

request.onreadystatechange = function(){
    data_json = JSON.parse(request.response);
        for(let data in data_json){
            for(let i = 0; i < data_json[data].length; i++){
                if(data_json[data][i][10] == "Golden Gate Bridge"){
                    output += data_json[data][i][8]+"<br>";
                    output += data_json[data][i][9]+"<br>";
                    output += data_json[data][i][13]+"<br>"+"<br>";
                }
                document.getElementById("result").innerHTML = output;}}
}
request.send();
