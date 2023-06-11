async function jordanCovid(){
    let baseURL = "https://covid-193.p.rapidapi.com/";
    let endPOINT = "statistics";
    let url = baseURL+endPOINT;
    let params = "?country=jordan";
    let urlPARAMS = url + params;
    let options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":"9f41f01bfdmsh16e047a61a35fa1p17ea67jsne2a5b69545c0",
            "X-RapidAPI-Host":"covid-193.p.rapidapi.com"
        }
    }
    let data = await getDATA(urlPARAMS, options);
    if(data == 0){
        let error = "no data";
        document.getElementById("data1").innerHTML=error;
    }
    else{
        showJordan(data);
    }

}

async function getDATA(url, options){
    let statusCode, json_data;
    let api_data = await fetch(url, options);
    statusCode= api_data.status;
    if(statusCode == 200){
    json_data = await api_data.json();
}
else{
    json_data = {};
}
    return json_data;
}

function showJordan(data){
    let apiDATA = data.response;
    let len = apiDATA.length;
    let table = `<p>Jordan Cases</p>
    <tr>
    <th>Active</th>
    <th>Critical</th>
    <th>Recovered</th>
    <th>Total Cases</th>
</tr>`;
    for(let i = 0; i<len; i++){
        table += `<tr>`
        table+=`<td>`+apiDATA[i].cases["active"]+`</td>`;
        table+=`<td>`+apiDATA[i].cases["critical"]+`</td>`;
        table+=`<td>`+apiDATA[i].cases["recovered"]+`</td>`;
        table+=`<td>`+apiDATA[i].cases["total"]+`</td>`;
        table+=`</tr>`;
    }
    
     document.getElementById("data1").innerHTML=table;}

     async function turkeyCovid(){
        let baseURL = "https://covid-193.p.rapidapi.com/";
        let endPOINT = "statistics";
        let url = baseURL+endPOINT;
        let params = "?country=turkey";
        let urlPARAMS = url + params;
        let options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key":"9f41f01bfdmsh16e047a61a35fa1p17ea67jsne2a5b69545c0",
                "X-RapidAPI-Host":"covid-193.p.rapidapi.com"
            }
        }
        let data = await getDATA(urlPARAMS, options);
        if(data == 0){
            let error = "no data";
            document.getElementById("data1").innerHTML=error;
        }
        else{
            showTurkey(data);
        }
    
    }

    function showTurkey(data){
        let apiDATA = data.response;
        let len = apiDATA.length;
        let table = `<p>Turkey Cases</p>
        <tr>
        <th>Active</th>
        <th>Critical</th>
        <th>Recovered</th>
        <th>Total Cases</th>
    </tr>`;
        for(let i = 0; i<len; i++){
            table += `<tr>`
            table+=`<td>`+apiDATA[i].cases["active"]+`</td>`;
            table+=`<td>`+apiDATA[i].cases["critical"]+`</td>`;
            table+=`<td>`+apiDATA[i].cases["recovered"]+`</td>`;
            table+=`<td>`+apiDATA[i].cases["total"]+`</td>`;
            table+=`</tr>`;
        }
        
         document.getElementById("data1").innerHTML=table;}

         async function usaCovid(){
            let baseURL = "https://covid-193.p.rapidapi.com/";
            let endPOINT = "statistics";
            let url = baseURL+endPOINT;
            let params = "?country=usa";
            let urlPARAMS = url + params;
            let options = {
                method: "GET",
                headers: {
                    "X-RapidAPI-Key":"9f41f01bfdmsh16e047a61a35fa1p17ea67jsne2a5b69545c0",
                    "X-RapidAPI-Host":"covid-193.p.rapidapi.com"
                }
            }
            let data = await getDATA(urlPARAMS, options);
            let error = "no data";
            if(data == 0){
                document.getElementById("data1").innerHTML=error;
            }
            else{
                showUSA(data);
            }
        
        }
    
        function showUSA(data){
            let apiDATA = data.response;
            let len = apiDATA.length;
            let table = `<p>USA Cases</p>
            <tr>
            <th>Active</th>
            <th>Critical</th>
            <th>Recovered</th>
            <th>Total Cases</th>
        </tr>`;
            for(let i = 0; i<len; i++){
                table += `<tr>`
                table+=`<td>`+apiDATA[i].cases["active"]+`</td>`;
                table+=`<td>`+apiDATA[i].cases["critical"]+`</td>`;
                table+=`<td>`+apiDATA[i].cases["recovered"]+`</td>`;
                table+=`<td>`+apiDATA[i].cases["total"]+`</td>`;
                table+=`</tr>`;
            }
            
             document.getElementById("data1").innerHTML=table;}

             async function FranceCovid(){
                let baseURL = "https://covid-193.p.rapidapi.com/";
                let endPOINT = "statistics";
                let url = baseURL+endPOINT;
                let params = "?country=France";
                let urlPARAMS = url + params;
                let options = {
                    method: "GET",
                    headers: {
                        "X-RapidAPI-Key":"9f41f01bfdmsh16e047a61a35fa1p17ea67jsne2a5b69545c0",
                        "X-RapidAPI-Host":"covid-193.p.rapidapi.com"
                    }
                }
                let data = await getDATA(urlPARAMS, options);
                let error = "no data";
                if(data == 0){
                    document.getElementById("data1").innerHTML=error;
                }
                else{
                    showFrance(data);
                }
            
            }
        
            function showFrance(data){
                let apiDATA = data.response;
                let len = apiDATA.length;
                let table = `<p>France Cases</p>
                <tr>
                <th>Active</th>
                <th>Critical</th>
                <th>Recovered</th>
                <th>Total Cases</th>
            </tr>`;
                for(let i = 0; i<len; i++){
                    table += `<tr>`
                    table+=`<td>`+apiDATA[i].cases["active"]+`</td>`;
                    table+=`<td>`+apiDATA[i].cases["critical"]+`</td>`;
                    table+=`<td>`+apiDATA[i].cases["recovered"]+`</td>`;
                    table+=`<td>`+apiDATA[i].cases["total"]+`</td>`;
                    table+=`</tr>`;
                    document.getElementById("data1").innerHTML=table; 
                }}