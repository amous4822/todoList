import React from 'react'



class Timer extends React.Component {

    // constructor(props){
    //     super(props)

    //     const key = "container"+ this.props.keyId;
    //     setupKey(key)
    // }



    
    render(){
        return(
            <React.Fragment>

                <div id={"container"+ this.props.keyId} contentEditable="true">
                </div>
                
                <button onClick={() => start(this.props.keyId)}>start</button>
                <button onClick={() => stop()}>stop</button>

            </React.Fragment>
        )
    }
}

export default Timer

let container;


let time=null,hours,minutes,min,hrs,flag


function validateFormat(text){

    if(!text.includes(':')){
        alert("Invalid time format");
        flag=0;        
    } else {
        flag=1;
    }
}




function start (id) {

    console.log(id)

    const key = "container"+ id;

    container = document.getElementById(key)
    let text = container.textContent;

    validateFormat(text)  
    
    hours = text.split(':')[0] 
    minutes = text.split(':')[1]

    min = parseInt(minutes)
    hrs =  parseInt(hours)

    validateTime()
    
    if(time === null && flag===1){
        time = setInterval(timer,10)
    }
}

function validateTime() {
    
    
    const testStr = /\d/
    if(!testStr.test(hrs) || !testStr.test(min) 
            || (min<=0 && hrs<=0)){
        container.innerHTML = "12 : 00"
        alert("invalid time")
        flag=0;
        //console.log(this.hrs, this.min)
    }
}
    
function stop () {
    
    if(time!==null){
        clearInterval(time)
        time=null;
    }        
    
}

function timer () {

    if(min === 0){
        hrs = hrs-1;
        min = 59
    } else {
        min=min-1;
    }

    if(Math.floor(min / 10) === 0){
        minutes = "0"+min;
    } else {
        minutes = `${min}`
    }

    if(Math.floor(hrs / 10) === 0){
        hours = "0"+ hrs;
    } else {
        hours = `${hrs}`  
    }

    if(hrs<=-1){
        stop()
    } else {
        container.innerHTML = `${hours} : ${minutes}`
    }
}











//const container = document.getElementById("container")

    


    
    
    

    // function onClick() {
    //     stop();
    //     //props.setTime("hi3")
    // }





// let hours ="01"
// let minutes = "06"




