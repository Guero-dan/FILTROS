var orjizqx=0
var orjizqy=0
var ojizqx=0
var ojizqy=0
var orjderx=0
var orjdery=0
var ojderx=0
var ojdery=0
function setup(){
    canvas=createCanvas(914.64566929134, 623.62204724409);
    background("blue");
    video=createCapture(VIDEO);
    video.hide();
    iaai=ml5.poseNet(video,liiiiiisto)
    iaai.on("pose",liiiiiisto0)
};
function preload(){
    dormienndo=loadImage("dormienndo.png")
    Robots=loadImage("Robots.webp")
    yochi_der=loadImage("yochi der.png")
    yochi_izq=loadImage("yochi izq.webp")
}
function liiiiiisto(){
    console.log ("liiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiiisto")
}
function liiiiiisto0 (answer){
    if (answer[0]){
        console.log(answer);
        orjizqx=answer[0].pose.leftEar.x
        orjizqy=answer[0].pose.leftEar.y
        ojizqx=answer[0].pose.leftEye.x
        ojizqy=answer[0].pose.leftEye.y
        orjderx=answer[0].pose.rightEar.x
        orjdery=answer[0].pose.rightEar.y
        ojderx=answer[0].pose.rightEye.x
        ojdery=answer[0].pose.rightEye.y
    }
}
function draw(){
    image(video,0,0,914.64566929134,623.62204724408);
    if (document.getElementById("listas").value=="0"){
        image(dormienndo,orjizqx-200,orjizqy-175,500,500);
    }
    if (document.getElementById("listas").value=="1"){
        image(Robots,orjizqx+50,orjizqy-175,500,500);
    }
    if (document.getElementById("listas").value=="2"){
        image(yochi_der,orjizqx+150,orjizqy+75,200,200);
    }
    if (document.getElementById("listas").value=="3"){
        image(yochi_izq,orjizqx-170,orjizqy+75,200,200);
    }
}