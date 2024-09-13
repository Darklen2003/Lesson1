
function setup()
{
	createCanvas(1024, 576);
}

function draw()
{
	background(100, 155, 255); 

	Tree();
	Cloud();
	Mountain();

}
function Tree()
{
	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); 
	fill(150, 75, 0);
	rect(305,400,10,50);
	fill(0,155,0);
	circle(310,400,40)
	fill(150, 75, 0);
	rect(240,400,10,50);
	fill(0,155,0);
	circle(245,400,40);
	fill(150, 75, 0);
	rect(180,400,10,50);
	fill(0,155,0);
	circle(185,400,40);
}
function Cloud()
{
	noStroke();
	fill(128,128,128);
	ellipse(400,50,120,60);
	circle(400,50,80);
	fill(255, 255, 0);
	circle(100,100,100);
}
function Mountain()
{
	noStroke();
	fill(150, 75, 0);
	triangle(350,500,900,500,600,200);
	fill(255, 255, 255);
	triangle(565,240,640,240,600,200);
}
