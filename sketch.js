function setup() {
	// define artboard size
	createCanvas(500,500);
}

function draw() {
	colorMode(RGB);
	background(241,139,91);

	//bgmovement
	fill(255,255,255,20);
	quad(0, mouseY, 60, mouseY, 60, 500, 0, 500);
	quad(110, mouseY, 170, mouseY, 170, 500, 110, 500);
	quad(330, mouseY, 390, mouseY, 390, 500, 330, 500);
	quad(440, mouseY, 500, mouseY, 500, 500, 440, 500);

	//ears
	strokeWeight(4);
	stroke(187,67,37);
	fill(127,22,9);
	ellipseMode(CENTER);
	ellipse(175,150,50,50);
	ellipse(325,150,50,50);

	//Neck
	fill(127,22,9);
	rectMode(CORNER);
	rect(225, 200, 50, 25);

	//ombra
	strokeWeight(0);
	stroke(44,28,247);
	fill(208,104,55);
	ellipseMode(CENTER);
	ellipse(250,470,250,50);

	//leg
	strokeWeight(4);
	stroke(8,115,104)
	fill(15,167,151);
	rectMode(CENTER);
	rect(250, 400, 60, 50);
	strokeWeight(10);
	stroke(42,61,75)
	fill(76,99,115);
	ellipseMode(CENTER);
	ellipse(250,440,80,80);
	strokeWeight(0);
	fill(208,215,224);
	ellipse(250,440,40,40);

	//shoulders
	strokeWeight(4);
	stroke(8,115,104)
	fill(187,67,37);
	rectMode(CORNER);
	rect(125,250,25,50);
	rect(350,250,25,50);

	//body
	strokeWeight(8);
	stroke(8,115,104)
	fill(187,67,37);
	rectMode(CORNER);
	rect(175,350,150,25);
	strokeWeight(8);
	stroke(8,115,104);
	fill(15,167,151);
	rect(150, 225, 200, 125);

	//display
	strokeWeight(0);
	fill(9,85,83);
	rect(175,250,150,50);
	fill(244,205,47);
	rect(175,275,10,25);
	rect(195,260,10,40);
	rect(215,270,10,30);
	rect(235,275,10,25);
	rect(255,270,10,30);
	rect(275,260,10,40);
	rect(295,270,10,30);
	rect(315,275,10,25);

	//buttons
	strokeWeight(0);
	stroke(8,115,104);
	fill(244,205,47);
  rect(175,310,25,25);
	rect(300,310,25,25);
	rect(225,310,50,25);
	strokeWeight(0);
	fill(255,255,255,100);
	rect(180,310,20,20);
	rect(305,310,20,20);
	rect(230,310,45,20);


	//fingers
	strokeWeight(4);
	stroke(187,67,37);
	line(75,325,75,360);
	line(75,325,50,350);
	line(75,325,100,350);
	line(425,225,425,190);
	line(425,225,400,200);
	line(425,225,450,200);
	strokeWeight(4);
	stroke(127,22,9);
	fill(222,92,70);
	ellipseMode(CENTER);
	ellipse(75,360,10,10);
	ellipse(50,350,10,10);
	ellipse(100,350,10,10);
	ellipse(425,190,10,10);
	ellipse(400,200,10,10);
	ellipse(450,200,10,10);

	//armright
	strokeWeight(4);
	stroke(187,67,37);
	line(125,275,75,275);
	line(75,275,75,325);
	strokeWeight(4);
	stroke(15,167,151);
	fill(222,92,70);
	ellipseMode(CENTER);
	ellipse(125,275,25,25);
	ellipse(75,325,25,25);
	fill(187,67,37);
	ellipse(75,275,25,25);


	//armleft
	strokeWeight(4);
	stroke(187,67,37);
	line(375,275,425,275);
	line(425,275,425,225);
	strokeWeight(4);
	stroke(15,167,151);
	fill(222,92,70);
	ellipseMode(CENTER);
	ellipse(375,275,25,25);
	ellipse(425,225,25,25);
	fill(187,67,37);
	ellipse(425,275,25,25);

	//antennas
	strokeWeight(4);
	stroke(244,205,47);
	fill(244,205,47);
	line(200, 25, 225, 100);
	line(275,100,325,50);
	strokeWeight(4);
	stroke(243,226,155);
	ellipseMode(CENTER);
	ellipse(200,25,20,20);
	ellipse(325,50,20,20);

	//radio
	strokeWeight(1);
	stroke(243,226,155);
	noFill();
	ellipseMode(CENTER);
	ellipse(200,25,40,40);
	ellipse(325,50,40,40);

	//head
	strokeWeight(8);
	stroke(8,115,104);
	fill(15,167,151);
	rect(175,100,150,100);

	//mouth
	strokeWeight(4);
	stroke(83,26,26);
	fill(127,22,9);
	ellipse(250,175,30,20);
	fill(255,255,255);
	rectMode(CENTER);
	rect(250,168,30,8);

	//eyes
	strokeWeight(6);
	stroke(227,71,5);
	fill(255,255,255);
	ellipseMode(CORNER);
	ellipse(200,125,30,30);
	ellipse(275,125,30,30);

	//pupils
	strokeWeight(0);
	fill(0,0,0);
	ellipseMode(CENTER);
	//ellipse(212,137,15,15);
	//ellipse(287,137,15,15);
	ellipse(((mouseX/4000)*15+212),((mouseY/4000)*15+137),15,15);
	ellipse(((mouseX/4000)*15+287),((mouseY/4000)*15+137),15,15);

	//light
	strokeWeight(0);
	fill(255,255,255,200);
	ellipseMode(CORNER);
	ellipse(205,125,12,12);
	ellipse(280,125,12,12);

	//blush
	strokeWeight(0);
	fill(247,152,165,180);
	ellipse(190,160,25,12);
	ellipse(285,160,25,12);

}
