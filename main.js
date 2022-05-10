function setup(){
    video = createCapture(VIDEO);
    video.size(450,450);

    canvas = createCanvas(500,500);
    canvas.position(center);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on("pose" , gotPoses);
}
function draw(){
    backgound("#7FFFFF");
}

function modelLoaded(){
    console.log("HURAAAAAAAAAAAY model loaded!")
}

function gotPoses(results){
    if(result.length > 0){
        console.log(results);
    }
}