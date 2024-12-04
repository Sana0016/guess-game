var y = Math.floor(Math.random() * 10 + 1);

        // Counting the number of guesses
        // made for correct Guess
        var guess = 1;
        document.getElementById("btn").onclick = function(){
            document.getElementById("form").style.display = "block";
            document.getElementById("msg").style.display = "block";
            document.getElementById("select").style.display = "none";
            document.getElementById("btn").style.display = "none";
            document.getElementById("btn1").style.display = "none";
            document.getElementById("btn2").style.display = "none";


        }

        document.getElementById("btn2").onclick = function(){
            document.getElementById("form").style.display = "block";
            document.getElementById("msg").style.display = "block";
            document.getElementById("select").style.display = "none";
            document.getElementById("btn").style.display = "none";
            document.getElementById("btn1").style.display = "none";
            document.getElementById("btn2").style.display = "none";


        }

        document.getElementById("btn1").onclick = function(){
            document.getElementById("form").style.display = "block";
            document.getElementById("msg").style.display = "block";
            document.getElementById("select").style.display = "none";
            document.getElementById("btn").style.display = "none";
            document.getElementById("btn1").style.display = "none";
            document.getElementById("btn2").style.display = "none";


        }

        document.getElementById("submitguess").onclick = function () {

            // Number guessed by user    
            var x = document.getElementById("guessField").value;

            if (x == y) {
                alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN "
                    +  + " GUESS ");
            }

            /* If guessed number is greater than actual number*/
            else if (x > y) {
                guess++;
                alert("OOPS SORRY!! TRY A SMALLER NUMBER");
            }
            else {
                guess++;
                alert("OOPS SORRY!! TRY A GREATER NUMBER")
            }
        }