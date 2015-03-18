
// This example demonstrates a Class and using of its instances.
// This is the main class Circle which contains the future properties of each circle from the array!
function Circle(x, y, radius, color) {
	this.x = x;
	this.y = y;
	this.radius = radius;
	this.color = color;
};

// In this array will be all the circles. I don't know how many they will be.
var circles = [];
var canvas; // here I declare the variable for the canvas
var context;  // here is the variable for the context
window.onload = function() {
  canvas = document.getElementById("myCanvas"); // here I initialize the canvas, by getting it by its ID.
  context = canvas.getContext("2d");
};


// This is the main function wich creates new circles.
function addCircle(){
	var radius = randomFromTo(10, 60);
	var x = randomFromTo(0, canvas.width);
	var y = randomFromTo(0, canvas.height);
	var colors = ["#33CC33", "#3399FF", "#FF0000", "#FFFF00", "#FF6600", "#CC33FF", "#00FFFF", "#993333"];
	// the idea here is to take random element from colors array
	var color = colors[randomFromTo(0, (colors.length - 1))];
	var circle = new Circle(x, y, radius, color);
	circles.push(circle);
	drawCanvasCircles();
}
// Here is the function which clears all the created circles and gives us a blank canvas to draw new ones.
function clearAllCircles() {
  circles = [];
  drawCanvasCircles();
};
// This is where the drawing of the circle happens:
function drawCanvasCircles(){
	 context.clearRect(0, 0, canvas.width, canvas.height);
	 for(var i=0; i<circles.length; i++) {
    	var currentCircle = circles[i];
    context.globalAlpha = 0.85;
    context.beginPath();
    context.arc(currentCircle.x, currentCircle.y, currentCircle.radius, 0, Math.PI*2);
    context.fillStyle = currentCircle.color;
    context.strokeStyle = "black";
	context.fill();
    context.stroke(); 
    };

};
function randomFromTo(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}