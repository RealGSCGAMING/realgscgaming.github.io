// scripts for card 1
{
    let mdcButton = document.getElementById("mdcButton")
    mdcButton.addEventListener("click", function () {
        window.open("https://realgscgaming.github.io/mdc", "_blank")
    })
}

// scripts for card 2
{
    let grgButton = document.getElementById("grgButton");
    let grgText = document.getElementById("grgText");
    let grgRolls = 0;

    grgButton.addEventListener("click", function () {

        grgRolls++;

        let random = Math.floor(Math.random() * 4);

        if (grgRolls == 1) {
            random = 1;
        }

        if (random == 0) {
            grgText.textContent = "Click a button to unlock divs with numbers and colors. Critically acclaimed*!";
        }

        else if (random == 1) {
            grgText.innerHTML = "Click <a href=\"https://realgscgaming.github.io/rng\" target=\"_blank\">here</a> to play.";
        }

        else if (random == 2) {
            if (grgRolls > 10) {
                grgText.innerHTML = "You've clicked the button " + grgRolls + " times. You might as well just play the game...";
            }
            else {
                grgText.innerHTML = "You've clicked the button " + grgRolls + " times."
            }
        }

        else if (random == 3) {
            grgText.textContent = "You found the super ultra rare secret!!!!! Congratulations!!!!";
            grgText.style.borderColor = "blue";
            grgText.style.backgroundColor = "rgb(200, 200, 255)";
        }

        if (random != 3) {
            grgText.style.borderColor = "black";
            grgText.style.backgroundColor = "white";
        }

        grgText.style.transform = "scale(1.1)";
        setTimeout(() => {
            grgText.style.transform = 'scale(1)';
        }, 100);

    });
}

// scripts for card 3
{
    let myocstCard = document.getElementById("myocstCard")
    let myocstButton1 = document.getElementById("myocstButton1");
    let myocstButton2 = document.getElementById("myocstButton2");
    let myocstButton3 = document.getElementById("myocstButton3");
    let myocstFrame = document.getElementById("myocstFrame");
    let myocstText = document.getElementById("myocstText");

    myocstButton1.addEventListener("click", function () {
        myocstText.style.display = "none";
        myocstButton1.style.display = "none";
        myocstButton2.style.display = "none";
        myocstFrame.style.display = "";
        myocstButton3.style.display = "";
        myocstCard.style.backgroundColor = "#1c1c1e";
        myocstCard.style.borderColor = "lightgoldenrodyellow";
    });

    myocstButton2.addEventListener("click", function () {
        window.open("https://realgscgaming.github.io/mayocast/platforms", "_blank")
    });

    myocstButton3.addEventListener("click", function () {
        myocstText.style.display = "";
        myocstButton1.style.display = "";
        myocstButton2.style.display = "";
        myocstFrame.style.display = "none";
        myocstButton3.style.display = "none";
        myocstCard.style.backgroundColor = "lightgoldenrodyellow";
        myocstCard.style.borderColor = "black";
    });
}

// scripts for card 4
{
    let benButton1 = document.getElementById("benButton1");
    let benButton2 = document.getElementById("benButton2");
    let benOverlay = document.getElementById("benOverlay");
    let benOverlayShown = false;
    let benPlayingSound = false;

    benButton1.addEventListener("click", function () {

        if (!benPlayingSound) {
            benPlayingSound = true;

            let random = Math.floor(Math.random() * 4);
            let baseUrl = "https://realgscgaming.github.io/talking-ben/Sounds/";
            let audio;

            if (random == 0) {
                audio = new Audio(baseUrl + "Yes.mp3");
            }
            else if (random == 1) {
                audio = new Audio(baseUrl + "No.mp3");
            }
            else if (random == 2) {
                audio = new Audio(baseUrl + "Laugh.mp3");
            }
            else if (random == 3) {
                audio = new Audio(baseUrl + "Ugh.mp3");
            }

            if (!benOverlayShown) {
                benOverlayShown = true;
                benOverlay.style.display = "block";

                setTimeout(() => {
                    benOverlay.style.opacity = "100%";
                }, 1);

                setTimeout(() => {
                    benOverlay.style.opacity = "0%";

                    setTimeout(() => {
                        benOverlay.style.display = "none";
                    }, 300);

                }, 3000);
            }

            audio.play();

            setTimeout(() => {
                benPlayingSound = false;
            }, 2000);
        }
    });

    benButton2.addEventListener("click", function () {
        window.open("https://realgscgaming.github.io/talking-ben", "_blank");
    });
}

// scripts for card 5
{
    let ffnButton = document.getElementById("ffnButton");

    ffnButton.addEventListener("click", function () {
        window.open("https://sites.google.com/view/fastfoodnews", "_blank");
    });
}

// scripts for card 6
{
    let ytButton = document.getElementById("ytButton");

    ytButton.addEventListener("click", function () {
        window.open("https://youtube.com/@ggscgaming", "_blank")
    });
}