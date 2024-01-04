window.addEventListener('load', function () {
        var text = "Heyyy! ✨ I miss kring ur 🐣🐳. 🥺 If there is something in ur mind, it is okay - u don't wanna talk (bs agr ye msg padh lena to '👍' react kr dena). I know u bht strong hoing and can overcome all of this but in case u ever need someone to talk to, u not alone hoing I am there for u. 🤗 Sending u a huge virtual (づ๑•ᴗ•๑)づ [green pattiyo wala gulabi fool]";

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
