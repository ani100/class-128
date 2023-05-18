song_perfect = "";
song_night_c = "";

right_wristX = 0;
right_wristY = 0;

left_wristX = 0;
left_wristY = 0;
 
function preload() {

    song_perfect = loadSound("Ed_Sheeran_-_Perfect.mp3");
    song_night_c = loadSound("Night-Changes(PagalWorld).mp3");

}

function setup() {

canvas = createCanvas(550,450);
canvas.position(480,270);
video = createCapture(VIDEO);
video.hide();
tm = ml5.poseNet(video,modelloaded);
tm.on("pose",getresults);

}

function draw() {

    background("black");
    image(video,10,10,530,430);
    fill("red");
    stroke("yellow");
    circle(right_wristX,right_wristY,20);
    circle(left_wristX,left_wristY,20);
}

function modelloaded() {
    console.log("The posenet is initialised");
}

function getresults(result,error) {

    if (result) {
      
        if (result.length > 0) {

            console.log(result);
            right_wristX = result[0].pose.rightWrist.x;
            right_wristY = result[0].pose.rightWrist.y;
            left_wristX = result[0].pose.leftWrist.x;
            left_wristY = result[0].pose.leftWrist.y;

        }

    }

    else {
        console.error(error);
    }

}