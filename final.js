
var trackerValue=0;
var wrongValue=0;
var background= new Audio('mp3/Detective Conan Sound Theme.mp3');


//first slide
document.querySelector(".start-btn").addEventListener("click", function(){
  background.play();
  //1. write the intro to our story
  document.querySelector(".intro").innerHTML = "<p>1.<br>what's his nationality ?<p><br><img src='images/nationality.png'></img>";
  //2. remove start button
  document.querySelector(".start-btn").classList.add("invisible");
  //3. show our next buttons
  document.querySelector(".next1-btn").classList.remove("invisible");
  document.querySelector(".question1").classList.remove("invisible");
});

document.querySelector(".next1-btn").addEventListener("click", function(){
var answer1 = document.querySelector(".question1").value;
if (answer1 == "japanese"){
  trackerValue = trackerValue + 1;
   document.querySelector(".tracker").innerHTML= trackerValue;
 }else{
   wrongValue = wrongValue+1;
   document.querySelector(".trackerWrong").innerHTML= wrongValue;
 };
});

//second slide
document.querySelector(".next1-btn").addEventListener("click", function(){
  //1. write the intro to our story
  document.querySelector(".intro").innerHTML = "<p>2.<br>what's Conan's true identity ?</p><br><img src='images/identity.jpg'></img>";

  //2. remove start button
  document.querySelector(".next1-btn").classList.add("invisible");
  document.querySelector(".question1").classList.add("invisible");
  //3. show our next buttons
  document.querySelector(".next2-btn").classList.remove("invisible");
  document.querySelector(".question2").classList.remove("invisible");
});

document.querySelector(".next2-btn").addEventListener("click", function(){
var answer2 = document.querySelector(".question2").value;
if (answer2 == "Shinichi"){
  trackerValue = trackerValue + 1;
   document.querySelector(".tracker").innerHTML= trackerValue;
   winSound.play();
  }else{
    wrongValue = wrongValue+1;
    document.querySelector(".trackerWrong").innerHTML= wrongValue;
    loseSound.play();
  };
});


//third
document.querySelector(".next2-btn").addEventListener("click", function(){
  //1. write the intro to our story
  document.querySelector(".intro").innerHTML = "<p>3.<br>who is Shinichi's crush?</p><br><img src='images/crush.png'></img>";

  //2. remove start button
  document.querySelector(".next2-btn").classList.add("invisible");
  document.querySelector(".question2").classList.add("invisible");
  //3. show our next buttons
  document.querySelector(".next3-btn").classList.remove("invisible");
  document.querySelector(".question3").classList.remove("invisible");
});

document.querySelector(".next3-btn").addEventListener("click", function(){
var answer3 = document.querySelector(".question3").value;
if (answer3 == "Ran"){
  trackerValue = trackerValue + 1;
   document.querySelector(".tracker").innerHTML= trackerValue;
   winSound.play();
  }else{
    wrongValue = wrongValue+1;
    document.querySelector(".trackerWrong").innerHTML= wrongValue;
    loseSound.play();
  };
});

//fourth
document.querySelector(".next3-btn").addEventListener("click", function(){
  //1. write the intro to our story
  document.querySelector(".intro").innerHTML = "<p>4.<br>Shinichi's birthday(Month/Date)</p><br><img src='images/birthday.png'></img>";

  //2. remove start button
  document.querySelector(".next3-btn").classList.add("invisible");
  document.querySelector(".question3").classList.add("invisible");
  //3. show our next buttons
  document.querySelector(".next4-btn").classList.remove("invisible");
  document.querySelector(".question4").classList.remove("invisible");
});

document.querySelector(".next4-btn").addEventListener("click", function(){
var answer4 = document.querySelector(".question4").value;
if (answer4 == "5/4"){
  trackerValue = trackerValue + 1;
   document.querySelector(".tracker").innerHTML= trackerValue;
   winSound.play();
  }else{
    wrongValue = wrongValue+1;
    document.querySelector(".trackerWrong").innerHTML= wrongValue;
    loseSound.play();
  };
});

//fifth
document.querySelector(".next4-btn").addEventListener("click", function(){
  //1. write the intro to our story
  document.querySelector(".intro").innerHTML = "<p>5.<br>who is this person? (full name)</p><img src='images/rei.png'></img>";

  //2. remove start button
  document.querySelector(".next4-btn").classList.add("invisible");
  document.querySelector(".question4").classList.add("invisible");
  //3. show our next buttons
  document.querySelector(".next5-btn").classList.remove("invisible");
  document.querySelector(".question5").classList.remove("invisible");
});

document.querySelector(".next5-btn").addEventListener("click", function(){
var answer5 = document.querySelector(".question5").value;
if (answer5 == "Toru Amuro"){
  trackerValue = trackerValue + 1;
   document.querySelector(".tracker").innerHTML= trackerValue;
   winSound.play();
  }else{
    wrongValue = wrongValue+1;
    document.querySelector(".trackerWrong").innerHTML= wrongValue;
    loseSound.play();
  };
});

//sixth
document.querySelector(".next5-btn").addEventListener("click", function(){
  //1. write the intro to our story
  document.querySelector(".intro").innerHTML = "<p>6.<br>Toru Amuro's real name...(first name is fine)</p><img src='images/realToru.jpg'></img>";

  //2. remove start button
  document.querySelector(".next5-btn").classList.add("invisible");
  document.querySelector(".question5").classList.add("invisible");
  //3. show our next buttons
  document.querySelector(".next6-btn").classList.remove("invisible");
  document.querySelector(".question6").classList.remove("invisible");
});

document.querySelector(".next6-btn").addEventListener("click", function(){
var answer6 = document.querySelector(".question6").value;
if (answer6 == "Rei"){
  trackerValue = trackerValue + 1;
   document.querySelector(".tracker").innerHTML= trackerValue;
   winSound.play();
  }else{
    wrongValue = wrongValue+1;
    document.querySelector(".trackerWrong").innerHTML= wrongValue;
    loseSound.play();
  };
});

//seventh
document.querySelector(".next6-btn").addEventListener("click", function(){
  //1. write the intro to our story
  document.querySelector(".intro").innerHTML = "<p>7.<br>who calls himself the Detective from the West?</p><img src='images/heiji.png'></img>";

  //2. remove start button
  document.querySelector(".next6-btn").classList.add("invisible");
  document.querySelector(".question6").classList.add("invisible");
  //3. show our next buttons
  document.querySelector(".next7-btn").classList.remove("invisible");
  document.querySelector(".question7").classList.remove("invisible");
});

document.querySelector(".next7-btn").addEventListener("click", function(){
var answer7 = document.querySelector(".question7").value;
if (answer7 == "Heiji Hattori"){
  trackerValue = trackerValue + 1;
   document.querySelector(".tracker").innerHTML= trackerValue;
   winSound.play();
  }else{
    wrongValue = wrongValue+1;
    document.querySelector(".trackerWrong").innerHTML= wrongValue;
    loseSound.play();
  };
});


//eighth
document.querySelector(".next7-btn").addEventListener("click", function(){
  //1. write the intro to our story
  document.querySelector(".intro").innerHTML = "<p>8.<br>Which city is Heiji from?</p><img src='images/osaka.jpg'></img>";

  //2. remove start button
  document.querySelector(".next7-btn").classList.add("invisible");
  document.querySelector(".question7").classList.add("invisible");
  //3. show our next buttons
  document.querySelector(".next8-btn").classList.remove("invisible");
  document.querySelector(".question8").classList.remove("invisible");
});

document.querySelector(".next8-btn").addEventListener("click", function(){
var answer8 = document.querySelector(".question8").value;
if (answer8 == "Osaka"){
  trackerValue = trackerValue + 1;
   document.querySelector(".tracker").innerHTML= trackerValue;
   winSound.play();
  }else{
    wrongValue = wrongValue+1;
    document.querySelector(".trackerWrong").innerHTML= wrongValue;
    loseSound.play();
  };
});

//nineth
document.querySelector(".next8-btn").addEventListener("click", function(){
  //1. write the intro to our story
  document.querySelector(".intro").innerHTML = "<p>9.<br>How many members are in the Junior Detective League?</p><img src='images/league.jpg'></img>";

  //2. remove start button
  document.querySelector(".next8-btn").classList.add("invisible");
  document.querySelector(".question8").classList.add("invisible");
  //3. show our next buttons
  document.querySelector(".next9-btn").classList.remove("invisible");
  document.querySelector(".question9").classList.remove("invisible");
});

document.querySelector(".next9-btn").addEventListener("click", function(){
var answer9 = document.querySelector(".question9").value;
if (answer9 == "5"){
  trackerValue = trackerValue + 1;
   document.querySelector(".tracker").innerHTML= trackerValue;
   winSound.play();
  }else{
    wrongValue = wrongValue+1;
    document.querySelector(".trackerWrong").innerHTML= wrongValue;
    loseSound.play();
  };
});

//tenth
document.querySelector(".next9-btn").addEventListener("click", function(){
  //1. write the intro to our story
  document.querySelector(".intro").innerHTML = "<p>10.<br>Who is the professor that live besides Shinichi's house?</p><img src='images/prof.jpg'></img>";

  //2. remove start button
  document.querySelector(".next9-btn").classList.add("invisible");
  document.querySelector(".question9").classList.add("invisible");
  //3. show our next buttons
  document.querySelector(".next10-btn").classList.remove("invisible");
  document.querySelector(".question10").classList.remove("invisible");
});

document.querySelector(".next10-btn").addEventListener("click", function(){
var answer10 = document.querySelector(".question10").value;
if (answer10 == "Hiroshi Agasa"){
  trackerValue = trackerValue + 1;
   document.querySelector(".tracker").innerHTML= trackerValue;
   winSound.play();
  }else{
    wrongValue = wrongValue+1;
    document.querySelector(".trackerWrong").innerHTML= wrongValue;
    loseSound.play();
  };
});


//tenth
document.querySelector(".next10-btn").addEventListener("click", function(){
  //1. write the intro to our story
  document.querySelector(".intro").innerHTML = "<p>check your score now!</p><br><img src='images/bye.gif'></img>";
  if (trackerValue >= 6){
    document.querySelector(".results-display").innerHTML="<p>you have a score of </p>"+ trackerValue +"<p>true Conan lover!</p>";
  } else{
    document.querySelector(".results-display").innerHTML="<p>you have a score of </p>"+ trackerValue +"<p>try harder next time!</p>";
  };

  //2. remove start button
  document.querySelector(".next10-btn").classList.add("invisible");
  document.querySelector(".question10").classList.add("invisible");
  //3. show our next buttons
  document.querySelector(".results-display").classList.remove("invisible");
});
