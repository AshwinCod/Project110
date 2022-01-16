Webcam.set({
    width:350,
    height:350,
    format:"jpeg",
    jpeg_quality:90,
    flip_horiz:true
});
camera = document.getElementById("camera");

Webcam.attach("#camera")