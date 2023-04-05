function addTeacher() {
    var input = document.getElementById("teacherInput");
    var ul = document.getElementById("teacherList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
  }
  
  function addAdmin() {
    var input = document.getElementById("adminInput");
    var ul = document.getElementById("adminList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
  }

  const photos = ['photo.jpg', 'photo2.jpg', 'photo3.jpg', 'photo4.jpg'];
let currentPhotoIndex = 0;
const photo = document.getElementById('photo');

function changePhoto() {
  currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
  photo.src = photos[currentPhotoIndex];
}

  (function($) {
    "use strict";

    
    var path = window.location.href; 
        $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function() {
            if (this.href === path) {
                $(this).addClass("active");
            }
        });

    
    $("#sidebarToggle").on("click", function(e) {
        e.preventDefault();
        $("body").toggleClass("sb-sidenav-toggled");
    });
})(jQuery);


function setBackground() {
    var file = $("#singleUpload")[0].files[0];
    var canvas = document.getElementById("background");
    var context = canvas.getContext("2d");
    var reader = new FileReader();
    reader.addEventListener("load", function () {
        var backgroundImage = new Image();
        backgroundImage.src = this.result;
        backgroundImage.onload = function () {
            context.drawImage(backgroundImage, 0, 0, 600, 600);      

        };
    }, false);
    reader.readAsDataURL(file);
}

$("#singleUpload").val("");                
$("#modelSelect").val("");                 

document.getElementById("background").style.visibility = "hidden";              


var link = document.getElementById('btn-download');
link.addEventListener('click', function (e) {

    var canvas = document.createElement('canvas');
    var context = canvas.getContext("2d");
    canvas.width = 605;
    canvas.height = 605;

    
    $('#photo').children('canvas').each(function () {
        var image = this;
        
        context.beginPath();      

        context.rect((image.offsetLeft - 480), (image.offsetTop - 76), image.width, 
        image.height);
        context.fillStyle = "white";
        context.fill();
        
        context.drawImage(image, (image.offsetLeft - 480 + 5), (image.offsetTop - 76 + 5), 
        (image.width - 10), (image.height - 10));    
    });

    link.href = canvas.toDataURL();   
    link.download = "photo.png";      
}, false);


function modelSelect() {

    var background = document.getElementById("background"); 

    var photo = document.getElementById("photo");
    while (photo.firstChild) {                              
        photo.removeChild(photo.firstChild);
    }
    photo.appendChild(background);                          

    var selectedModel = document.getElementById("modelSelect").value;    

    switch (selectedModel) {

        case "model1":             

            document.getElementById("background").style.visibility = "visible"; 

            var layer1 = document.createElement('canvas'); 
            programmatically
            layer1.className = "layer";
            layer1.width = 200;                   
            layer1.height = 200;                  
            layer1.style.top = "130px";           
            layer1.style.left = "540px";          
            layer1.style.visibility = "visible";

            var body = document.getElementById("photo");
            body.appendChild(layer1); 
            registerEvents(layer1); 

            var layer2 = document.createElement('canvas');      

            layer2.className = "layer";
            layer2.width = 110;
            layer2.height = 110;
            layer2.style.top = "180px";
            layer2.style.left = "840px";
            layer2.style.visibility = "visible";

            var body = document.getElementById("photo");
            body.appendChild(layer2);
            registerEvents(layer2);

            var layer3 = document.createElement('canvas');
            layer3.className = "layer";
            layer3.width = 340;
            layer3.height = 230;
            layer3.style.top = "400px";
            layer3.style.left = "670px";
            layer3.style.visibility = "visible";

            var body = document.getElementById("photo");
            body.appendChild(layer3);
            registerEvents(layer3);

            break;

        case "model2":  


            document.getElementById("background").style.visibility = "visible";

            var layer1 = document.createElement('canvas');
            layer1.className = "layer";
            layer1.width = 250;
            layer1.height = 250;
            layer1.style.top = "81px";
            layer1.style.left = "485px";
            layer1.style.visibility = "visible";

            var body = document.getElementById("photo");
            body.appendChild(layer1);
            registerEvents(layer1);

            var layer2 = document.createElement('canvas');
            layer2.className = "layer";
            layer2.width = 150;
            layer2.height = 600;
            layer2.style.top = "81px";
            layer2.style.left = "785px";
            layer2.style.visibility = "visible";

            var body = document.getElementById("photo");
            body.appendChild(layer2);
            registerEvents(layer2);

            break;

        case "model3":  

            document.getElementById("background").style.visibility = "visible";

            var layer1 = document.createElement('canvas');
            layer1.className = "layer";
            layer1.width = 250;
            layer1.height = 250;
            layer1.style.top = "81px";
            layer1.style.left = "485px";
            layer1.style.visibility = "visible";

            var body = document.getElementById("photo");
            body.appendChild(layer1);
            registerEvents(layer1);

            var layer2 = document.createElement('canvas');
            layer2.className = "layer";
            layer2.width = 300;
            layer2.height = 600;
            layer2.style.top = "81px";
            layer2.style.left = "785px";
            layer2.style.visibility = "visible";

            var body = document.getElementById("photo");
            body.appendChild(layer2);
            registerEvents(layer2);

            break;

        default:
            document.getElementById("background").style.visibility = "hidden";  

    }
}


function registerEvents(canvas) {

    canvas.ondragenter = function () {
        canvas.style.border = "dashed 2px #555";  
    };
    canvas.ondragleave = function () {
        canvas.style.border = "none";    
    };
    canvas.ondragover = function (e) {
        e.preventDefault();
    };
    canvas.ondrop = function (e) {
        e.preventDefault();
        var id = e.dataTransfer.getData("text");
        var dropImage = document.getElementById(id);
        canvas.style.border = "none";              

        var context = canvas.getContext("2d");
        context.drawImage(dropImage, 0, 0, canvas.width, canvas.height);     
    };
}
