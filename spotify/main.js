console.log("Welcome to spotify");
// let audioElement= new Audio('My_Heart_Will_Go_On_Whistle_W_13.mp3');

//intialzing the variables
let songindex= 0;
let audioElement= new Audio('My_Heart_Will_Go_On_Whistle_W_13.mp3');
// let masterplays=document.getElementById("masterplay");
// let progress= Document.getElementById('myprogressbar');
// let song=[
//     {songName:"salam-e-ishq",filPath:"  ",coverPath:"  "},
//     {songName:"salam-e-ishq",filPath:"  ",coverPath:"  "},
//     {songName:"salam-e-ishq",filPath:"  ",coverPath:"  "},
//     {songName:"salam-e-ishq",filPath:"  ",coverPath:"  "}
// ]

function play(){
    audioElement.play();
}
// handel play/pause click
// function play() {
//     if(audioElement.paused || audioElement.currentTime<=0){
//         audioElement.play();
//        masterplay..remove('fa-solid fa-play');
//        masterplay.classlist.add('fa-solid fa-pause');
//     }
//     else{
//         audioElement.pause();
//         Document.getElementById('masterplay').classlist.remove("fa-solid fa-play");
//         Document.getElementById('masterplay').add("fa-solid fa-pause");
//     }
// }
// //listen to events 
// progress.addEventListener('timeupdate',()=>{
//     console.log('timeupdate');
// })