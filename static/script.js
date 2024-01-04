window.addEventListener('load', function () {
        var text = "Heyyy! ✨ missing ur amazing energy. 🥺 I sense there is something in ur mind and it is okay - u don't want to talk but u are not alone and if kbhi bhi u need someone to talk to, I yhi hoing to support u. 🤗 I know u're incredibly strong and can overcome all of this. 🌟 Sending u the biggest virtual (づ๑•ᴗ•๑)づ 😊🌺";

        var i = 0;
        console.log(text)
        
        function typeWriter() {
            if (i < text.length) {
                document.getElementById("wish").innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 20);
            }
        }
        
        function checkView() {
            var corientation = screen.orientation.type.match(/\w+/)[0];
            const warning = document.getElementById('warning-message');
            
            const message = document.getElementById('wrapper');

            if (corientation === "landscape") {
                message.style.display = "block";
                warning.style.display = "none";
                typeWriter();
            }

            else {
                message.style.display = "none";
                warning.style.display = "block";
            }
        
        }

        checkView();

        screen.orientation.onchange = function (){
            var corientation = screen.orientation.type.match(/\w+/)[0];
            const warning = document.getElementById('warning-message');
            
            const message = document.getElementById('wrapper');

            if (corientation === "landscape") {
                message.style.display = "block";
                warning.style.display = "none";
                typeWriter();
            }

            else {
                message.style.display = "none";
                warning.style.display = "block";
                document.getElementById("wish").innerHTML = "";
                i = 0;
            }
        };
        
})