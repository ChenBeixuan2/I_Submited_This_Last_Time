This_Game=""
One_Hundred_Memes_In_One_Song="";
rightWrist_x = 0;
rightWrist_y = 0;
leftWrist_x = 0;
leftWrist_y = 0;
scoreleftWrist = 0;
scorerightWrist = 0;
song_status1 = "";
song_status2= "";

function setup(){
    canvas = createCanvas(600,530);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotposes);
}

function preload(){
    This_Game = loadSound("music2.mp3");
    One_Hundred_Memes_In_One_Song = loadSound("music1.mp3");
}

function draw(){
    image(video,0,0,600,530);

    fill("#ff0000");
    stroke("#ff0000");

    song_status1 = This_Game.isPlaying();
    song_status2 = One_Hundred_Memes_In_One_Song.isPlaying();
    fill("#ff0000");
    stroke("#ff0000");
    if(scoreleftWrist > 0.2){
        circle(leftWrist_x,leftWrist_y,20);
        One_Hundred_Memes_In_One_Song.stop();
        if(song_status2 == false){
            This_Game.play();
        }
    }
}

    if(scorerightWrist > 0.2){
        circle(rightWrist_x,rightWrist_y,20);
        This_Game.stop();
        if(song_Harry_potter_theme == false){
            One_Hundred_Memes_In_One_Song.play();
        }
    }

function modelLoaded(){
    console.log("poseNet Is Initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        scoreleftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreleftWrist" + scoreleftWrist);

        scorerightWrist = results[0].pose.keypoints[10].score;
        console.log("scorerightWrist" + scorerightWrist);

        leftWrist_x = results[0].pose.leftWrist.x;
        leftWrist_y = results[0].pose.leftWrist.y;
        console.log("leftWrist_x = "+leftWrist_x+" leftWrist_y = "+leftWrist_y);

        rightWrist_x = results[0].pose.rightWrist.x;
        rightWrist_y = results[0].pose.rightWrist.y;
        console.log("rightWrist_x = "+rightWrist_x+" rightWrist_y = "+rightWrist_y);
    }
}

function play(){
    song.setVolume(1);
    song.rate(1);
    song.play();
}