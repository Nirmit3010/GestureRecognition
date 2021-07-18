prediction1= ""
prediction2= ""
Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90

});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_image' src='"+data_uri+"'/>"
    });
}
console.log("ml5 version:", ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/rBKos4edp/model.json', modelLoaded);
function modelLoaded(){
    console.log("model loaded");
}
function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img, gotResult);
}
function gotResult(error, results){
    if (error){
        console.error(error);
    }
    else {
        console.log(results);
        document.getElementById("result_gesture_name").innerHTML=results[0].label;
        document.getElementById("result_gesture_accuracy").innerHTML=results[0].confidence.toFixed(3);
        document.getElementById("result_gesture_name2").innerHTML= results[1].label;
        document.getElementById("result_gesture_accuracy2").innerHTML=results[1].confidence.toFixed(3);
        prediction1=results[0].label;
        prediction2=results[1].label;
        speak();
        if (results[0].label=="Victory"){
            document.getElementById("update_emoji").innerHTML= "&#9996;";
        }
        else if (results[0].label=="Ok"){
            document.getElementById("update_emoji").innerHTML="&#128076;";
        }
        else if (results[0].label=="Vulcan Salute"){
            document.getElementById("update_emoji").innerHTML="&#128406;";
        }
        else if (results[0].label=="Saranghae"){
            document.getElementById("update_emoji").innerHTML="&#x1F497;";
        }
        else if (results[0].label=="Thumbs Up"){
            document.getElementById("update_emoji").innerHTML="&#128077;";
        }
        else if (results[0].label=="Cross"){
            document.getElementById("update_emoji").innerHTML="&#129310;";
        }
        if (results[1].label=="Victory"){
            document.getElementById("update_emoji2").innerHTML= "&#9996;";
        }
        else if (results[1].label=="Ok"){
            document.getElementById("update_emoji2").innerHTML="&#128076;";
        }
        else if (results[1].label=="Vulcan Salute"){
            document.getElementById("update_emoji2").innerHTML="&#128406;";
        }
        else if (results[1].label=="Saranghae"){
            document.getElementById("update_emoji2").innerHTML="&#x1F497;";
        }
        else if (results[1].label=="Thumbs Up"){
            document.getElementById("update_emoji2").innerHTML="&#128077;";
        }
        else if (results[1].label=="Cross"){
            document.getElementById("update_emoji2").innerHTML="&#129310;";
        }
    }
}
