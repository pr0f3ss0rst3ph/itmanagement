var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(); //Gets a full format of the date for provisioning purposes
var hour = today.getHours(); //Get hours to determine the hour of the day

if(hour<12){ //Hours below 12 are morning hours (This includes 0 and 1 which refers to midnight)
    document.querySelector('#greeting').innerHTML="Good Morning! IT Support";
}
else if(hour>=12 && hour <= 18){ //These hours are the afternoon period
    document.querySelector('#greeting').innerHTML = "Good Afternoon! IT Support";
}
else{
    document.querySelector('#greeting').innerHTML = "Good Evening! IT Support";
}

/*
var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds(); //Gets a full format of the date for provisioning purposes
var hour = today.getHours(); //Get hours to determine the hour of the day

if(hour<12){ //Hours below 12 are morning hours (This includes 0 and 1 which refers to midnight)
    console.log("Good Morning! IT Support");
}
else if(hour>=12 && hour <= 18){ //These hours are the afternoon period
    console.log("Good Afternoon! IT Support");
}
else{
    console.log("Good Evening! IT Support");
}
*/