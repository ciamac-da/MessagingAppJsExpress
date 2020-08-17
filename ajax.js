//import { json } from "body-parser";
const input1 = document.querySelector(".input1")
const input2 = document.querySelector(".input2")
const send = document.querySelector(".send")
const output = document.querySelector(".output")

const fetchJSON = async (mytext,body)=>{
      let response = await fetch(
'http://localhost:9922' + mytext,{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(body)
});
return await response.json()
};

const torecieve = async () =>{
      let data = await fetchJSON('/mymessage',{});
      datarecieve(data.msgs);
};
const datarecieve = (msgs) =>{
      output.innerHTML ="";
      for (let message of msgs){
            output.innerHTML += message + '<br/>';
      }
};

send.onclick = async e =>{
      let inputName = input1.value;
      let inputMessage = input2.value;
      let data = await fetchJSON(
            //this is how to make more names
            '/mymessage', { msg:inputMessage, name: inputName}
            );
            datarecieve(data.msgs);
            //more names
            input1.value ='';
            input2.value ='';
      };
      setInterval(torecieve,900);
      torecieve()
    
      const inputOnKey = document.querySelectorAll("input")
      for(i = 0; i < inputOnKey.length;i++){
            inputOnKey[i].addEventListener("click", e =>{
                  e.target.style.backgroundColor ="red";
                  e.target.style.color ="black !important";
            })
            inputOnKey[i].addEventListener("blur", e =>{
                  e.target.style.backgroundColor ="white";
            })
            
              }

function giveMeCurrentTime(){  
    let currentTime = new Date();
    let day = currentTime.getDate() + "." + (currentTime.getMonth()+1) + "." + currentTime.getFullYear();
    let mins = currentTime.getMinutes();
    let hours = currentTime.getHours();
    let time = hours + ":" + mins;  
    if(mins < 10){
mins = "0" + mins
    }
    let todaytime = day + " " + time
    document.querySelector("#spantime").innerHTML = todaytime;
}
giveMeCurrentTime()