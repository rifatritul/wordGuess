var words = ["Human", "Organ", "Great", "Opera", "Found", "Round", "Tired","Bully"];
var random = Math.floor(Math.random() * words.length);

var pick = (words[random]);
var pickArray=pick.split('');
var attempt = 10;
var match = 0;
console.log(pickArray);

function setLetter(clicked){
     var letter= clicked;
     console.log(letter);
if (attempt>1){
        if (letter===pickArray[0].toUpperCase()){
            document.getElementById('letter1').innerHTML=letter;
            match++;
        }if (letter===pickArray[1].toUpperCase()){
            document.getElementById('letter2').innerHTML=letter;
            match++;
        }if (letter===pickArray[2].toUpperCase()){
            document.getElementById('letter3').innerHTML=letter;
            match++;
        }if (letter===pickArray[3].toUpperCase()){
            document.getElementById('letter4').innerHTML=letter;
            match++;
        }if (letter===pickArray[4].toUpperCase()){
            document.getElementById('letter5').innerHTML=letter;
            match++;
        }
            attempt--;
            document.getElementById('attmpt').innerHTML="Attempts Left : "+ attempt;
        if (match==5) {
            window.alert("Congratulations!! The Word was: "+pick);
            location.reload();
        }
} else{
    window.alert("Game Over. The Word was: "+pick);
    location.reload();
}
}



