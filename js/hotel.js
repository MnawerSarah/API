async function ammanHotel(){
    let base_url="https://hotels4.p.rapidapi.com/";
    let end_point="locations/v2/search";
    let url=base_url+end_point;
    let params="?query=Amman";
    let urlPARAMS=url+params;
    let options={
        method:"GET",
        headers:{
        "X-RapidAPI-Key":"dc0d06c311msh73ddad56bf9fa52p1e7fe1jsncc332b2b67e4",
        "X-RapidAPI-Host":"hotels4.p.rapidapi.com"
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
    let pargraphs='<p>'+data+'</p>';
    let apiDATA =data.suggestions[0].entities[0].caption;
    // let len = apiDATA.length;
    // let table = `<p>Amman Cases</p>
    // <tr>
    // <th>span</th>
    // </tr>`;
    for(let key in data){
        document.getElementById("data1").innerHTML=apiDATA;
        // table+=`<td>`+apiDATA[i]['datetimeStr']+`</td>`;
        // table+=`<td>`+apiDATA[i]['maxt']+`</td>`;
        // table+=`</tr>`;
    }
}

//     let table = `<p>Amman Cases</p>
//     <tr>
//     <th>Temp</th> 
//     <th>Date and Time</th>
//     <th> maxt  </th>

// </tr>`;
    // for(let i = 0; i<len; i++){
    //     table += `<tr>`
    //     table+=`<td>`+apiDATA[i]['temp']+`</td>`;
    //     table+=`<td>`+apiDATA[i]['datetimeStr']+`</td>`;
    //     table+=`<td>`+apiDATA[i]['maxt']+`</td>`;
    //     table+=`</tr>`;
    // }
    
    async function USAHotel(){
        let base_url="https://hotels4.p.rapidapi.com/";
        let end_point="locations/v2/search";
        let url=base_url+end_point;
        let params="?query=USA";
        let urlPARAMS=url+params;
        let options={
            method:"GET",
            headers:{
            "X-RapidAPI-Key":"dc0d06c311msh73ddad56bf9fa52p1e7fe1jsncc332b2b67e4",
            "X-RapidAPI-Host":"hotels4.p.rapidapi.com"
          
          
        }}
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
        let pargraphs='<p>'+data+'</p>';
        let apiDATA =data.suggestions[0].entities[0].caption;
        // let len = apiDATA.length;
        // let table = `<p>Amman Cases</p>
        // <tr>
        // <th>span</th>
        // </tr>`;
        for(let key in data){
            
            document.getElementById("data1").innerHTML=apiDATA}
} 
            async function FranceHotel(){
                let base_url="https://hotels4.p.rapidapi.com/";
                let end_point="locations/v2/search";
                let url=base_url+end_point;
                let params="?query=france";
                let urlPARAMS=url+params;
                let options={
                    method:"GET",
                    headers:{
                    "X-RapidAPI-Key":"dc0d06c311msh73ddad56bf9fa52p1e7fe1jsncc332b2b67e4",
                    "X-RapidAPI-Host":"hotels4.p.rapidapi.com"
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
            
            function showFrance(data){
                let pargraphs='<p>'+data+'</p>';
                // let apiDATA =data.suggestions[0][entities][0][caption];
                let apiDATA =data.suggestions[0].entities[0].caption;
                // let len = apiDATA.length;
                // let table = `<p>Amman Cases</p>
                // <tr>
                // <th>span</th>
                // </tr>`;
                for(let key in data){
                    console.log(key,data[caption])
                    document.getElementById("data1").innerHTML=apiDATA;}}


                    async function TurkeyHotel(){
                        let base_url="https://hotels4.p.rapidapi.com/";
                        let end_point="locations/v2/search";
                        let url=base_url+end_point;
                        let params="?query=Turkey";
                        let urlPARAMS=url+params;
                        let options={
                            method:"GET",
                            headers:{
                            "X-RapidAPI-Key":"dc0d06c311msh73ddad56bf9fa52p1e7fe1jsncc332b2b67e4",
                            "X-RapidAPI-Host":"hotels4.p.rapidapi.com"
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
                        let pargraphs='<p>'+data+'</p>';
                        let apiDATA =data.suggestions[0].entities[0].caption;;
                    
                        for(let key in data){
                            
                            document.getElementById("data1").innerHTML=apiDATA;}
                        }
   
                    