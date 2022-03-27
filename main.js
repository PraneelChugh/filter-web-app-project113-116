mustacheX = 0;
mustacheY = 0;

function preload(){
    mustache_img = loadImage('https://i.postimg.cc/6pCbsZxK/mustache.png')
}

function setup(){
    canvas= createCanvas(300,300)
    canvas.center();
    video = createCapture(VIDEO)
    video.size(300,300)
    video.hide();

    poseNet = ml5.poseNet(video,modelLoad)
    poseNet.on('pose',gotPoses)
}

function draw(){
    image(video,0,0,300,300)
    image(mustache_img,mustacheX,mustacheY,80,35) 
}

function take_snapshot(){
    save('FilterImage.png')
}

function modelLoad(){
    console.log('PoseNet Is Initialised')
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results)
        mustacheX = results[0].pose.nose.x -40
        mustacheY = results[0].pose.nose.y
        console.log("mustache x = " +mustacheX)
        console.log("mustache y = " +mustacheY )
    }
}
