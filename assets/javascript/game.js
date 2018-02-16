(function () {
	// list of last 15 presidents
	var americanPresidents = {
		presidents: [{
			name:"donald trump"
		},
		{
			name:"barack obama"
		},
		{
			name:"george w bush"
		},
		{
			name:"bill clinton"
		},
		{
			name:"george h w bush"
		},
		{
			name:"ronald reagan"
		},
		{
			name:"jimmy carter"
		},
		{
			name:"gerald ford"
		},
		{
			name:"richard nixon"
		},
		{
			name:"lyndon b johnson"
		},
		{
			name:"john f kennedy"
		},
		{
			name:"dwight d eisenhower"
		},
		{
			name:"harry s truman"
		},
		{
			name:"franklin d roosevelt"
		},
		{
			name:"herbert hoover"
		}

		]
		};

		// game variables
		var alphabet = "abcdefghijklmnopqrstuvwxyz";
		var random;
		var presidentRandom;
		var presidentDisplay = [];
		var wins = 0;
		var guessedLetters;
		var guessesLeft;

		// container for letters of random president

		var nameHold = document.getElementById("hold");

		// unordered list for letters

		var letterList = document.createElement("ul");

		// new game function

		function newGame() {


			// numbers of guesses
			guessesLeft = 10;

			// array to store already guessed letters
			guessedLetters = [];

			// random # generator
			random = Math.floor(Math.random() * americanPresidents.presidents.length);

			// random variable for name
			presidentRandom = americanPresidents.presidents[random].name;

			// array to contain letters from president name
			presidentDisplay = [];

			// create list for president's name characters
			for (var i = 0; i < presidentRandom.length; i++) {

				// give letterList an id
				letterList.setAttribute("id", "name-list");
				var letter = document.createElement("li");

				// each li gets class
				letter.setAttribute("class", "letter");

				// making spaces show as spaces and letters as underscores
				if (presidentRandom[i] === " ") {
					letter.innerHTML = " ";
					letter.classList.add("space");

				} else {
					letter.innerHTML = "_";
				}

				// pushing letters into display array
				presidentDisplay.push(letter);
				nameHold.appendChild(letterList);
				letterList.appendChild(letter);

				// display of updated wins and guesses
				document.querySelector("#wins").innerHTML = "Patriotism Level = " + wins;
				document.querySelector("#guessesRemaining").innerHTML = "<p>Redemption Opportunities: " + guessesLeft + "</p>";
			}
		}

		// keyup function for input
		document.onkeyup = function(event) {

			// keys pressed are stored as lower case variables
			var userGuess = event.key.toLowerCase();

			// anti-duplicates
			for (var i = 0; i <= guessedLetters.length - 1; i++) {
				if (guessedLetters[i].indexOf(userGuess) != -1) {
					return false;
				}
			}

			// incorrect letters *not duplicates*
			if (presidentRandom.indexOf === -1) {
				guessedLetters.push(userGuess);
			}

			// updating presdient name with correct guesses
			for (var i = 0; i < presidentRandom.length; i++) {
				if ((presidentRandom[i] === userGuess) && (userGuess != " ")) {
					presidentDisplay[i].innerHTML = userGuess;
				}
			}

			document.querySelector("#usedLetters").innerHTML = guessedLetters.join(" ");

			// wrong guess substraction
			if (presidentRandom.indexOf(userGuess) === -1) {
				--guessesLeft;
			}

			// updated guesses remainding
			document.querySelector("#guessesRemaining").innerHTML = "<p>Redemption Opportunities: " + guessesLeft + "</p>";

			// if no more guesses, loser display
			if (guessesLeft === 0) {

				document.querySelector("#gamestatus").innerHTML = "<p>You have failed your country!<p/>";

				//resets
				document.querySelector("#name-list").innerHTML = "";
				document.querySelector("#usedLetters").innerHTML = "";

				newGame();

			} else {
				document.querySelector("#gamestatus").innerHTML = "<p></p>"
			}
			// win check
			var winCheck = "";

			// displayed text is made into string and checked against correct answer
			for (var j = 0; j < presidentRandom.length; j++) {
				winCheck = winCheck + document.getElementByClassName("letter")[j].textContent;
			}

			if (winCheck = presidentRandom) {
				wins++;

				document.querySelector("#gamestatus").innerHTML = "<p>You have made your country proud!</p>"
				//resets
				document.querySelector("#name-list").innerHTML = "";
				document.querySelector("#usedLetters").innerHTML = "";
				newGame();
			} else {
				document.querySelector("#gamestatus").innerHTML = "<p></p>"
			}

			// update win total
			document.querySelector("#wins").innerHTML = "Wins: " + wins;
			
		}

		newGame();
})();
