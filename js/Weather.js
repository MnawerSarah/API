async function ammanWeather(){
    let base_url="https://visual-crossing-weather.p.rapidapi.com/";
    let end_point="forecast";
    let url=base_url+end_point;
    let params="?aggregateHours=24&location=amman&contentType=json";
    let urlPARAMS=url+params;
    let options={
        method:"GET",
        headers:{
        "X-RapidAPI-Key":"dc0d06c311msh73ddad56bf9fa52p1e7fe1jsncc332b2b67e4",
        "X-RapidAPI-Host":"visual-crossing-weather.p.rapidapi.com"
        }
    }
    let data = await getDATA(urlPARAMS, options);
    if(data == 0){
        let error = "no data";
        document.getElementById("data1").innerHTML=error;
    }
    else{
        showAmman(data);
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

function showAmman(data){
    let apiDATA = data.locations.amman.values;
    let len = apiDATA.length;
    let table = `<p>Amman Cases</p>
    <tr>
    <th>Temp</th>
    <th>Date and Time</th>
    <th> maxt  </th>

</tr>`;
    for(let i = 0; i<len; i++){
        table += `<tr>`
        table+=`<td>`+apiDATA[i]['temp']+`</td>`;
        table+=`<td>`+apiDATA[i]['datetimeStr']+`</td>`;
        table+=`<td>`+apiDATA[i]['maxt']+`</td>`;
        table+=`</tr>`;
    }
    
     document.getElementById("data1").innerHTML=table;
    }
    async function TurkeyWeather(){
        let base_url="https://visual-crossing-weather.p.rapidapi.com/";
        let end_point="forecast";
        let url=base_url+end_point;
        let params="?aggregateHours=24&location=Turkey&contentType=json";
        let urlPARAMS=url+params;
        let options={
            method:"GET",
            headers:{
            "X-RapidAPI-Key":"dc0d06c311msh73ddad56bf9fa52p1e7fe1jsncc332b2b67e4",
            "X-RapidAPI-Host":"visual-crossing-weather.p.rapidapi.com"
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
    
    function showTurkey(data){
        let apiDATA = data.locations.Turkey.values;
        let len = apiDATA.length;
        let table = `<p>Turkey Cases</p>
        <tr>
        <th>Temp</th>
        <th>Date and Time</th>
        <th> maxt  </th>
    
           </tr>`;
        for(let i = 0; i<len; i++){
            table += `<tr>`
            table+=`<td>`+apiDATA[i]['temp']+`</td>`;
            table+=`<td>`+apiDATA[i]['datetimeStr']+`</td>`;
            table+=`<td>`+apiDATA[i]['maxt']+`</td>`;
            table+=`</tr>`;
        }
        
         document.getElementById("data1").innerHTML=table;
        }
        async function USAWeather(){
            let base_url="https://visual-crossing-weather.p.rapidapi.com/";
            let end_point="forecast";
            let url=base_url+end_point;
            let params="?aggregateHours=24&location=USA&contentType=json";
            let urlPARAMS=url+params;
            let options={
                method:"GET",
                headers:{
                "X-RapidAPI-Key":"dc0d06c311msh73ddad56bf9fa52p1e7fe1jsncc332b2b67e4",
                "X-RapidAPI-Host":"visual-crossing-weather.p.rapidapi.com"
                }
            }
            let data = await getDATA(urlPARAMS, options);
            if(data == 0){
                let error = "no data";
                document.getElementById("data1").innerHTML=error;
            }
            else{
                showUSA(data);
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
        
        function showUSA(data){
            let apiDATA = data.locations.USA.values;
            let len = apiDATA.length;
            let table = `<p>USA Cases</p>
            <tr>
            <th>Temp</th>
            <th>Date and Time</th>
            <th> maxt  </th>
        
               </tr>`;
            for(let i = 0; i<len; i++){
                table += `<tr>`
                table+=`<td>`+apiDATA[i]['temp']+`</td>`;
                table+=`<td>`+apiDATA[i]['datetimeStr']+`</td>`;
                table+=`<td>`+apiDATA[i]['maxt']+`</td>`;
                table+=`</tr>`;
            }
            
             document.getElementById("data1").innerHTML=table;
            }
            
            async function FranceWeather(){
                let base_url="https://visual-crossing-weather.p.rapidapi.com/";
                let end_point="forecast";
                let url=base_url+end_point;
                let params="?aggregateHours=24&location=France&contentType=json";
                let urlPARAMS=url+params;
                let options={
                    method:"GET",
                    headers:{
                    "X-RapidAPI-Key":"dc0d06c311msh73ddad56bf9fa52p1e7fe1jsncc332b2b67e4",
                    "X-RapidAPI-Host":"visual-crossing-weather.p.rapidapi.com"
                    }
                }
                let data = await getDATA(urlPARAMS, options);
                if(data == 0){
                    let error = "no data";
                    document.getElementById("data1").innerHTML=error;
                }
                else{
                    showFrance(data);
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
            
            function showFrance(data){
                let apiDATA = data.locations.France.values;
                let len = apiDATA.length;
                let table = `<p>France Cases</p>
                <tr>
                <th>Temp</th>
                <th>Date and Time</th>
                <th> maxt  </th>
            
                   </tr>`;
                for(let i = 0; i<len; i++){
                    table += `<tr>`
                    table+=`<td>`+apiDATA[i]['temp']+`</td>`;
                    table+=`<td>`+apiDATA[i]['datetimeStr']+`</td>`;
                    table+=`<td>`+apiDATA[i]['maxt']+`</td>`;
                    table+=`</tr>`;
                }
                
                 document.getElementById("data1").innerHTML=table;
                }