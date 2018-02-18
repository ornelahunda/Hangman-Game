var dances = [
    "TANGO",
    "BALLET",
    "SALSA",
    ];
 

    // Pick a random word
    var dance = dances [Math.floor(Math.random() * dances.length)];

    // Set up the answer array
    var answerArray = [];
    
    for (var i = 0; i < dance.length; i++) {
    answerArray[i] = "_";
}
//     }
    var remainingLetters = dance.length;
//     // The game loop
    while (remainingLetters > 0) {
     var answer = document.getElementById("current-word");
     answer.innerHTML = answerArray.join(" ");

     var Userguess = function () { 
  var x= event.keyCode;
  document.getElementById("num-wins").innerHTML= x;
     }
    }
// prompt('Press any key to get started!');

// // Array with some dancing generes
// var winCount, loseCount;

//   var  danceArray=["BALLET", "TANGO", "QUICKSTEP", 
//     "WALTZ", "JIVE","CHARLESTON", "BELLY DANCE", 
//     "POLE DANCE", "CONTEMPORARY", "ZUMBA", 
//     "CHA CHA CHA", "FOLK", "HOUSE", "SALSA",
//     "SAMBA", "COUNTRY", "BACHATA", "FOXTROT", 
//     "RHUMBA", "FLAMENCO", "JAZZ", "MAMBO", "BOLERO",
//     "FUNK", "LAMBADA", "TAP DANCE",
//      "MODERN", "FREESTYLE HIP HOP",
// 	 "SAMBA"];
//    var	letters= ['A', 'B', 'C', 'D', 'E',
//         'F', 'G', 'H', 'I', 'J', 'K',
//         'L', 'M', 'N', 'O', 'P', 'Q',
//         'R', 'S', 'T', 'U', 'V', 'W',
//         'X', 'Y', 'Z'  ];
  
// 	var randomWord;
// 	var underscoresArray=[];
// 	var count;
// 	var answer;
// 	var letter;
//     var answerArray= []; 
// 	var wrongLetter= [];

 


// // This function pics random word from danceArray
//  var randomWord = danceArray[Math.floor(Math.random()*danceArray.length)];
//  console.log(randomWord);


//  // filling the answer array with underscores as required
//  // number of underscores correlates to the randomly selected word in the array
// function start(){

// for (i=0; i<randomWord.length; i++){
// 	answerArray[i]="_";
// }
// answer=answerArray.join(" ");
// document.getElementById("current-word").innerHTML=answer;
//  }

// start();

// function letter() {
// 	var l  = document.getElementById("letters-guessed").value;

// 	if (l.length > 0) {

// 		for (var i = 0; i < sharkType.length; i ++) {
// 		  if (danceArray[i] === l) {
// 			answerArray[i] = l;
// 		  }
// 		}
  
   



// //} 	randomWord: "",

// // 	danceLetters:[],

// // 	isMatch: null,
// // 	isRepeat: null,

// // 	guessesRemaining: 10,
// //     loseCount: 0,
// // 	winCount:0,

// // // This function generates a random number from 0-29
// //     generateWord: function(){
// // 		var random = Math.random() * 29;
// // 		random = Math.floor(random);


// // this.randomWord = this.dancesArray[random];
// // this.letters = this.randomWord.split("");

// // //Shows that a randomly chosen band name was converted
// // //  into an array containing each of its letters.
// // console.log(this.randomWord + " " + this.letters);

// // 	}}