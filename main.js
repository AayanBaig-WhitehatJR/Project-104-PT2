Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
})
Webcam.attach(" #camera ")
function capture(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = "<img id = 'image_captured' src = " + data_uri + ">"
    })
}
console.log("Ml5 // Current Version: ", ml5.version)
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/DoSC68vhP/model.json', modelLoaded)
function modelLoaded(){
    console.log("Models are loaded.")
}   