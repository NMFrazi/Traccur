function Game() {
     let container = document.getElementById("container");
     let square = document.getElementById("animation");
     let button = document.getElementById("startBtnWrap");
     function start() {
          //Remove button
          button.parentNode.removeChild(button);
          //Render animated object
          square.style.visibility = "visible";
          function runIntro() {
               //Instruction step counter
               let step = 0;
               let introTextTopArray = ['<div class="fade-in"><p id="introTop">Place your cursor on the <span class="yellowHighlight">square</span> below</p></div>',
                    '<div class="fade-in"><br><p id="introTop">GREAT!</p></div>',
                    '<div class="fade-in"><br><p id="introTop">We\'ll start off slow</p></div>',
                    '<div class="fade-in"><br><p id="introTop">GOT IT?</p></div>'];
               let introTextBottomArray = ['<div class="fade-in"><p id="arrow" class="yellowHighlight">↑</p><p id="introBottom"><span class="red">HINT!</span> IT\'S RIGHT HERE</p></div>',
                    '<br><br><br><br><div class="fade-in"><p id="introBottom">NOW <span class="red">KEEP</span> IT THERE!</p></div>',
                    '<br><br><br><br><div class="fade-in"><p id="introBottom">TRACK THE <span class="red">BOX</span> WITH YOUR CURSOR!</p></div>',
                    '<br><br><br><br><div class="fade-in"><p id="introBottom">I <span class="yellow">HOPE</span> SO, BECAUSE IT GETS <span class="red">FASTER</span>!</p></div>'];
               let splash = document.getElementById("splashWrap");
               let introDivTop = document.createElement("div");
               let introDivBottom = document.createElement("div");
               splash.parentNode.removeChild(splash);
               introDivTop.setAttribute('id', 'introWrap');
               container.prepend(introDivTop);
               container.append(introDivBottom);
               introDivBottom.setAttribute('id', 'introWrapBottom');
               displayIntro();
               function displayIntro() {
                    function revealBottomText(text, timer) {
                         introDivBottom.innerHTML = text;
                         clearTimeout(timer);
                    }
                    function appendIntroText() {
                         let introTextTop = introTextTopArray[step];
                         let introTextBottom = introTextBottomArray[step];
                         introDivTop.innerHTML = introTextTop;
                         introDivBottom.innerHTML = "";
                         let bottomTextTimer = setTimeout(function () { revealBottomText(introTextBottom, bottomTextTimer) }, 3000);
                    }
                    if (step === 0) {
                         square.addEventListener("mouseover", displayIntro);
                    }
                    if (step === 1) {
                         square.removeEventListener("mouseover", displayIntro);
                         let displayTimer = setTimeout(function () { displayIntro(); }, 7000);
                    }
                    appendIntroText();
                    step++;
               }
          }
          //Run intro function
          runIntro();
     }
     start();
}