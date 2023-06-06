Peter_pan ="";
Harry_potter ="";

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function preload(){

    Peter_pan = loadSound("music2.mp3");
    Harry_potter = loadSound("music.mp3");
}

function draw(){
    image(video,0,0,600,500);
}