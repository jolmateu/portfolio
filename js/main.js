const links = [
  {
    label: "Week1 notes",
    url: "week1/index.html"
  },
  {
    label: "Week2 notes",
    url: "week2/index.html"
  },
  {
    label: "Week3 notes",
    url: "week3/index.html"
  },
  {
    label: "Week4 notes",
    url: "week4/index.html"
  },
  {
    label: "Week5 notes",
    url: "week5/index.html"
  },
  {
    label: "Week6 notes",
    url: "week6/index.html"
  },
  {
    label: "Week7 notes",
    url: "week7/index.html"
  },
  {
    label: "Week8 notes",
    url: "week8/index.html"
  }
]

for (let link in links){
    var a = document.createElement("a");
    var olist = document.getElementById("list");
    var newItem = document.createElement("li");

    a.textContent = links[link].label;
    a.setAttribute('href', links[link].url);
    newItem.appendChild(a);
    olist.appendChild(newItem);
}

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
context.strokeStyle = "red";
context.fillStyle = "rgba(0, 0, 255, 0.5)";
context.fillRect(10, 10, 100, 100);   
context.strokeRect(10, 10, 100, 100);

function drawPattern() {
    var canvas = document.getElementById("demo2");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";

    var img = new Image(); 
    img.src = "../images/bike_sprite.png";
    img.onload = function() { 
        var pattern = context.createPattern(img, "repeat"); 
        context.fillStyle = pattern;                        
        context.fillRect(10, 10, 100, 100);                  
        context.strokeRect(10, 10, 100, 100);
    }; 
}

function drawGradient() {
    var canvas = document.getElementById("demo3");
    var context = canvas.getContext("2d");
    context.strokeStyle = "red";
    var gradient = context.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, "blue"); 
    gradient.addColorStop(1, "white"); 
    context.fillStyle = gradient; 
    context.fillRect(10, 10, 100, 100); 
    context.strokeRect(10, 10, 100, 100); 
}

function drawCircle(canvas) {
    var context = canvas.getContext("2d");
    context.beginPath();
    context.arc(100, 100, 50, 0, Math.PI*2, true);
    context.closePath();
    context.strokeStyle = "red";
    context.fillStyle = "blue";
    context.lineWidth = 3;
    context.fill(); 
    context.stroke(); 
}

function saveDrawing() {
    var canvas5 = document.getElementById("demo5");
    window.open(canvas5.toDataURL("image/png"));
}

var button = document.getElementById("saveButton");
button.addEventListener("click", saveDrawing, false);