function  preload(){

}
function  setup(){
canavas=createCanvas(640,480);
canavas.position(110,250);
video=createCapture(VIDEO);
video.hide();
tint_color="";
}
function draw(){
image(video,0,0,640,480);
}
function filter_tint(){
tint_color=document.getElementById("color_name").value;
}
function take_snapshot(){
   save('picture');
}