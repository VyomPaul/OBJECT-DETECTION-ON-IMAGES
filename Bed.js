var status = "";
results = [];

function preload() {
    image = loadImage('BED.jpg');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("BedStatus").innerHTML = "Status = Detecting Obects";
}

function modelLoaded() {
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult() {
    if (error) {
        console.log(error);
    }
    console.log(results);
}

function draw() {
    if(status != "") 
    {
        for(var i = 0; i < objects.length; i++) {
            text(objects[i].label + " " + percent +"%", objects[i].x, objects[i].y);
            percent = floor(objects[i].confidence * 100);
        }
    }
}

