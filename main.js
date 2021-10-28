Song = "";
leftwristx = 0;
leftwristy = 0;
rightwristx = 0;
rightwristy = 0;

function preload() {

Song = loadSound("music.mp3")

}

function setup() {

Canvas = createCanvas(600,500);
Canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotposes);

}
function modelloaded() {

console.log("success posenet");

}
function gotposes(results) {

if( results.length > 0) 
{
  console.log(results);
  leftwristx = results[0].pose.leftWrist.x;
  leftwristy = results[0].pose.leftWrist.y;
  rightwristx = results[0].pose.rightWrist.x;
  rightwristy = results[0].pose.rightWrist.y;
} 



}
function draw() {

image(video,0,0,600,500);
fill('red');
stroke('red');
circle(leftwristx-60,leftwristy,20)

}
function play() {
Song.play();

}
