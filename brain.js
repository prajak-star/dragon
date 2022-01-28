var SpeechRecognition= window.webkitSpeechRecognition;      
var some = new SpeechRecognition();

var x = 0;
var y = 0;
var sw = 0;
var sh = 0 ;
var draw = " ";
Posie=" ";
nore = 0;
var text =  " ";

function setup(){
    sw=window.innerWidth;
    sh=window.innerHeight-100;
    canvas= createCanvas(sw,sh);
    canvas.position(0,145);
}

function preload(){
   Posie=loadImage("dragon.png");
}

function stat(){
 document.getElementById("status").innerHTML=" we are hearing now speak a number and for your army we will lend you that many dragons ";
 some.start();
}

some.onresult=function(event){
    console.log(event);
    var sky=event.results[0][0].transcript;
    console.log(sky);
    nore=Number(sky);
    document.getElementById("status").innerHTML=nore + " is the number of dragons you asked for ";
    if (Number.isInteger(nore)) {
        console.log(nore);
        draw="true";
        document.getElementById("status").innerHTML= " giving you the dragons ";
    }else{
        document.getElementById("status").innerHTML= " my old ears are weak can you please repeat it again ?! ";
    }
}

function speak(){
    var speaker=window.speechSynthesis;
    text= nore + " we have given you " + nore + " Dragons now go and win your war. Good luck ";
    var say=new SpeechSynthesisUtterance(text);
     speaker.speak(say);
    text=" ";
}

function draw(){
    if (nore>=0){
        if (draw == "true"){
         for (let i = 0; i < nore; i++) {
            x= Math.floor(Math.random()*600);
            y=Math.floor(Math.random()*400);
          
            image(posie,x,y,50,60);
         }   
         document.getElementById("status").innerHTML= " we have given you " + nore + " Dragons now go and win your war. Good luck ";
         speak();
         draw=" ";
        }
    } 
}

