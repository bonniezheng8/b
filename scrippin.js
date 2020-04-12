//drop down details  
          
        var toggler = document.getElementsByClassName("caret");
        var i;
        for (i = 0; i < toggler.length; i++) {
          toggler[i].addEventListener("click", function() {
            this.parentElement.querySelector(".nested").classList.toggle("active");
            this.classList.toggle("caret-down");
          });
        }
          
        
//dark mode babyyy
          
        const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme) {
            document.documentElement.setAttribute('data-theme', currentTheme);
            if (currentTheme === 'dark') {
                toggleSwitch.checked = true;
            }
        }
        function switchTheme(e) {
            if (e.target.checked) {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('theme', 'dark');
            }
            else {        document.documentElement.setAttribute('data-theme', 'light');
                  localStorage.setItem('theme', 'light');
            }    
        }
        toggleSwitch.addEventListener('change', switchTheme, false);
          
          
//typewriting header

        document.addEventListener('DOMContentLoaded', function(event){
        // array with texts to type in typewriter
        var dataText = [ "Bonnie Zheng"];

        // type one text in the typwriter
        // keeps calling itself until the text is finished
        function typeWriter(text, i, fnCallback) {
        // chekc if text isn't finished yet
        if (i < (text.length)) {
          // add next character to p
         document.querySelector("p").innerHTML = text.substring(0, i+1) +'<span aria-hidden="true"></span>';

          // wait for a while and call this function again for next character
          setTimeout(function() {
            typeWriter(text, i + 1, fnCallback)
          }, 130);
        }
        // text finished, call callback if there is a callback function
        else if (typeof fnCallback == 'function') {
          // call callback after timeout
          setTimeout(fnCallback, 700);
        }
        }
        // start a typewriter animation for a text in the dataText array
        function StartTextAnimation(i) {
         if (typeof dataText[i] == 'undefined'){
            setTimeout(function() {
              StartTextAnimation(0);
            }, 1000);
         }
         // check if dataText[i] exists
        if (i < dataText[i].length) {
          // text exists! start typewriter animation
         typeWriter(dataText[i], 0, function(){
           // after callback (and whole text has been animated), start next text
           StartTextAnimation(i + 1);
         });
        }
        }
        // start the text animation
        StartTextAnimation(0);
        });
          
