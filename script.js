getApiData=function(method,url,bool){
 var promise=new Promise(function(resolve,reject){
 var xhr=new XMLHttpRequest();
  xhr.open(method,url,bool);

 xhr.onload=function(){
        var res=JSON.parse(xhr.response)
        var data=res.data;
        resolve(data)
        var output='';
           for(i=0;i<data.length;i++){
            output+= `
          
            <tr>
             <td>${data[i].id}</td>
            <td>${data[i].email}</td>
            <td>${data[i].first_name}</td>
            </tr>
           `
        }  
document.getElementById('num1').innerHTML=`<thead><th>id</th><th>email</th><th>name</th></thead>`+output        
 }
 xhr.send();
 })

 return promise;

 }


getApiData('GET','https://reqres.in/api/users',true).then(function(result){
   console.log(result);
});
  
