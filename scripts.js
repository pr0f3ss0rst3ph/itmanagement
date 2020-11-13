var today = new Date();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
var hour = today.getHours();

if(hour<12){
    document.getElementById('greeting').innerHTML="Good Morning! IT Support";
}
else if(hour>=12 && hour <= 18){
    document.getElementById('greeting').innerHTML = "Good Afternoon! IT Support";
}
else{
    document.getElementById('greeting').innerHTML = "Good Evening! IT Support";
}