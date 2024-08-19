//


let poems = [
    "quietly, we'll move\nour bedroom around\nfind new strings\nto attach pictures to\nand eventually pull them back down.\n\na comfort in days that go by\nwith the being, so still\nand guilt so heavy\nwe'll find new people\njust to achingly fall apart. \n\nmoments, sombrely empty\nyears where no one has lived\nthe habitant inside me\nso desperately wants out \nso i can put all those pictures\nback on the strings again \n\n and act like we're still in love",
    "your hands are cold \nthe touch i once knew \na melting crutch, but i need this. \nare you ever coming home? \nand i know that you don't know \nwhat it's like to be inside an empty box \njust waiting for someone to hold you close \ndoes it feel like the teddy bear you chose? \nand does this box remind you of him? \nyour finger and mine, hopelessly betwixt \nexpecting your saviour will be here soon. \nmaybe we're all scared to exist... \nall waiting to be held close \nto be the teddy bear they chose \n maybe that's all life is",
    "today was full of unfiltered confused bliss \ni walked where you've walked \ni saw what you saw \nit was meant to be cathartic. \na release. \nstill i struck myself over the head with a mallet \nput myself where i shouldn't \nput myself in danger of making it worse. \ni saw you \nand you ran to me. \n\nit's been nearly two whole years and i feel no better. \nbut at least we got to talk. \nfor the first time, i was happy to be stupid \neven if it never happens again \ni hope you know that i've loved you all this time. \nso go, be safe, and live your life \ni will be waiting forevermore. \njust waiting, solemnly, until it happens. \nuntil you run to me again. \nand tell me you've loved me all this time.",
    "so it's come to this? \nfinally. \nthe very thing i feared. \ni talked you into leaving \ni walked right into it. \n\nautumn nights are so much colder than i remember. \ni never believed that losing love would kill me like this \ni shiver with ache on nights you're no longer there \nthe warmth from your touch has turned to stone \nand the cold from your hands still bitter atone. \n\ngod what have i done to deserve this?",
    "you said go. \nyou said it like you really meant it. \nlike the fire had finally gone out. \nlike this moment would no longer exist. \nnot ever again. \n\n and i know that you know \nwhat it's like to feel like a broken mirror \nglaring at me hoping i'll change \ni'll stare back in hopes of finding myself \n\nbut only ever finding you. \n\nwhat i've been trying to do this whole time \nis find you. \nand what if i don't? \nwhat if i never find you at all? \n\ni look for it in anyone \nstill \ni look for you in everyone.",
    "my back is flat against this wall \nknees up to my face \nand staring blankly out of a parted curtain. \n\nthere's a dulcet tone of orange that escapes \na shimmer of the morning \ni've been up all night afraid to go to bed. \n\nfor there is another day to live. \n\nand oh my god there's another day to live \ni've been up all night afraid. \ni can't face the sun with tears in my eyes \nblood on my wrists \nanxiety in my heart \nmy fear of speaking \n\n but i'm blessed to be here \nwhatever it means to be here. \ni'm sure i'll figure it out \ni'll figure it out i'm sure",
    "golden. glistening. your eyes full of wonder. \nbut yet your eyes wander... \nlooking around, searching for an escape \nsearching for whatever felt missing \nit's just not right, something's not right. \n\nbut still you do as he says. \nholding. listening. every word he speaks \nyou cling onto his speech. \nit's searching for a place you're hurting \naiming for whatever is missing \nbecause it's just not right, that he could ruin you \nso softly and you can barely defend to attack. \n\nand nothing you do can ever get it back.",
    "there's a weird semblence. \na drifting imbalance. \nquietness. i've never clocked how quiet nighttime can be. \n\n it's strange to notice. \nhow still the room is. \nliminal. your voice used to fill this empty space. \n\nbut despite laying alone on this floor \ni can sense your whispers. so clear. \nasking. ''are you sure you're okay?'' \n\nno... it feels like you're still here...",
    "fuck me with your knuckles \npush them deep into my chest \nmake me feel that heartache \nand bare it down my spine. \n\njust clench tight and don't let go \nand then viscerally rip them out \nhold it in front of my face, even though \ni can't bear to stare back at all. \n\nso glare into my eyes until i drop \nand i fall \ntears will stream down my face \nand i pull \nagainst this know that you're leaving. \nso don't let me go. \ni beg you don't let me know \nthat i will never see you again. \nand i will never hear your voice. \nno matter how much i scream \nyou won't hear me, even then."
  ]; // array of poems
let currentPoemIndex = 0; //index of the currently displayed poem
let lines = poems[currentPoemIndex].split('\n'); //split the current poem into lines
let particles = [];
let stars = [];
let audio;
let sounds = [];
let isAudioPlaying = false;
let isLoading = true;
let buttonSize = 30; //smaller size of the circular music button
let buttonX = 20; // x coord of the music button
let buttonY = 20; // y coord of the music button
let buttonRadius = buttonSize / 2; //radius of the music button
let buttonColor; //color of the music button
let poemButton; //arrow button to cycle through poems
let poembuttonSize = 30; //size of the arrow button
let poembuttonX, poembuttonY; //position of the arrow button
let poembuttonColor; //color of the arrow button
let jpbutton; //button to jumble the displayed text
let jpbuttonX; //= 1670; //jumble button x coord
let jpbuttonY; //=  850; //jumble button y coord
let jpbuttonSize = 30; //jumble button size
let jpbuttonRadius = jpbuttonSize / 2; //radius of the jumble button
let jpbuttonColor; //jumble button color

function preload() {
    //load background audio
    audio = loadSound('drone.mp3', loaded);

    //load sound files
    for (let i = 1; i <= 15; i++) {
        let sound = loadSound('trig' + i + '.mp3');
        sounds.push(sound);
    }
}

function loaded() {
    isLoading = false;
}

function setup() {
    createCanvas(windowWidth, windowHeight); //can use displayWidth, displayHeight -and it functions a little better but then will need to fuck with coords and won't be as adaptive for button placement
//                                          the other thing is that then if you leave the buttons being adaptive, you have to scroll to get to the ones on the bottom. easier solution is to move text up but that doesn't
//                                          solve the issue for anyone on a smaller monitor. could also put all buttons at top of page, but this still would not solve the issue of smaller monitors and text sizing.
    textSize(20);
    textAlign(CENTER, CENTER);
    fill(255);
    noStroke();

    buttonColor = color(200, 150, 255); //pastel-purple color
    poembuttonColor = color(144, 238, 144); //pastel green color
    poembuttonX = width - 50; //x-coord of the button
    poembuttonY = 20; //y-coord of the button
    jpbuttonColor = color(140,210,255); 
    jpbuttonX = width - 50;
    jpbuttonY = height - 50;//850;

    // Initialize stars
    for (let i = 0; i < 100; i++) {
        stars.push(new Star());
    }

    //create particles for each character in the poem
    initializeParticles();

    //create the button to jumble text
    //jpbutton = createButton('Jumble');
    //jpbutton.position(width - 120, height - 40);
    //jpbutton.mousePressed(jumbleText);
}

function draw() {
    if (isLoading) {
        background(0);
        fill(255);
        text("Loading...", width / 2, height / 2);
        return; //exits draw loop if still loading
    }

    background(0);
    stars.forEach(star => {
        star.followMouse();
        star.update();
        star.display();
    });
    particles.forEach(particle => {
        particle.behave();
        particle.display();
    });

    //draw circular music button
    fill(buttonColor);
    ellipse(buttonX + buttonRadius, buttonY + buttonRadius, buttonSize, buttonSize);

    //draw next poem arrow button
    fill(poembuttonColor);
    noStroke();
    triangle(
        poembuttonX, poembuttonY, //top corner
        poembuttonX, poembuttonY + poembuttonSize, //bottom corner
        poembuttonX + poembuttonSize, poembuttonY + poembuttonSize / 2 //right corner
    );

    //draw jumble (square) button
    fill(jpbuttonColor);
    square(jpbuttonX, jpbuttonY, jpbuttonSize);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
      //adjust canvas container size
  //select('#canvas-container').style('width', windowWidth + 'px');
  //select('#canvas-container').style('height', canvasHeight + 'px');
    adjustLayout()
}

function adjustLayout() {
    let maxTextHeight = lines.length * 32; //maximum height of the poem text
    let canvasHeight = maxTextHeight + 300; //add some padding for other elements
    if (canvasHeight < windowHeight) {
        canvasHeight = windowHeight; //ensure canvas height is at least window height
    }
    resizeCanvas(windowWidth, canvasHeight);

    //update button positions
    poembuttonX = width - 50;
    poembuttonY = 20;
    //calculate jumble button position relative canvas size
    let margin = 20; //margin from the edge of the window
    jpbuttonX = windowWidth - jpbuttonSize - margin;
    jpbuttonY = windowHeight - jpbuttonSize - margin;

    //reinitialize particles based on the new window size
    initializeParticles();
}


function toggleAudio() {
    if (isAudioPlaying) {
        audio.pause();
    } else {
        audio.loop();
    }
    isAudioPlaying = !isAudioPlaying;
}

function playRandomSound() {
    //play random sound
    let randomIndex = floor(random(sounds.length));
    sounds[randomIndex].play();
}

function mousePressed() {
    //check if mouse is inside the circular music button
    let d = dist(mouseX, mouseY, buttonX + buttonRadius, buttonY + buttonRadius);
    if (d < buttonRadius) {
        toggleAudio();
    }
    playRandomSound();
    if (mouseX > poembuttonX && mouseX < poembuttonX + poembuttonSize && mouseY > poembuttonY && mouseY < poembuttonY + poembuttonSize) {
        nextPoem();
    }
    if (mouseX > jpbuttonX && mouseX < jpbuttonX + jpbuttonSize && mouseY > jpbuttonY && mouseY < jpbuttonY + jpbuttonSize) {
        jumbleText();
    }
    //trigger scatter effect for particles near the mouse click
    particles.forEach(particle => {
        let d = dist(mouseX, mouseY, particle.x, particle.y);
        if (d < 75) { // Radius of 75 pixels --change this value if you're looking to make-different the distance they scatter
            particle.scatter();
        }
    });
}

class Star {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.size = random(1, 5);
        this.speed = random(0.1, 0.5);
    }

    update() {
        this.x -= this.speed; //move stars slowly from right to left
        if (this.x < -this.size) {
            this.x = width + this.size;
            this.y = random(height);
            this.size = random(1, 5);
            this.speed = random(0.1, 0.5); //reset stars at random position and speed
        }
    }

    display() {
        fill(255);
        noStroke();
        ellipse(this.x, this.y, this.size, this.size);
        fill(0, 0, 0, 150);
        ellipse(this.x + this.size * 0.25, this.y - this.size * 0.25, this.size * 0.5);
    }

    followMouse() {
        //calculates direction vector from star to mouse
        let dx = mouseX - this.x;
        let dy = mouseY - this.y;
        let distance = sqrt(dx * dx + dy * dy);
        let maxDistance = 150; //maximum distance for stars to be influenced or connected by mouse

        if (distance < maxDistance) {
            let moveFactor = map(distance, 0, maxDistance, 2, 0); //stars closer to the mouse move more... cool as fuck
            this.x += dx * 0.01 * moveFactor; //adjust these values for sensitivity options.. or don't 
            this.y += dy * 0.01 * moveFactor;
        }
    }
}

class Particle {
    constructor(x, y, char, color) {
        this.x = x;
        this.y = y;
        this.char = char;
        this.color = color; //store the color
        this.origX = x;
        this.origY = y;
        this.angle = random(TWO_PI);
        this.angleVelocity = random(-0.05, 0.05);
        this.radius = 1;
        this.scattering = false;
        this.scatterTime = 0;
    }

    behave() {
        if (this.scattering) {
            this.scatterTime++;
            if (this.scatterTime < 30) {
                this.x += random(-8, 8); //CHANGE THIS X,Y FOR HOW MUCH THEY SCATTER.
                this.y += random(-8, 8);
            } else {
                this.scattering = false;
                this.scatterTime = 0;
            }
        } else {
            this.angle += this.angleVelocity;
            this.x = lerp(this.x, this.origX + this.radius * cos(this.angle), 0.1);
            this.y = lerp(this.y, this.origY + this.radius * sin(this.angle), 0.1);
        }
    }

    //this is the display of text
    display() {
        fill(this.color); //use the pre-calculated color
        noStroke();
        text(this.char, this.x, this.y);
    }

    interact() {
        let d = dist(mouseX, mouseY, this.x, this.y);
        if (d < 50) {
            this.radius = 10; //disperse characters
        } else {
            this.radius = 1; //return to normal jiggle-jugglin' radius
        }
    }
    scatter() {
        this.scattering = true;
    }
}

function mouseMoved() {
    particles.forEach(particle => {
        particle.interact();
    });
}

function nextPoem() {
    currentPoemIndex = (currentPoemIndex + 1) % poems.length; //increment the counter and wrap around if need be
    lines = poems[currentPoemIndex].split('\n'); //split the new poem into lines
    initializeParticles();
}

function jumbleText() {
    let allLines = [];
    poems.forEach(poem => {
        let poemLines = poem.split('\n');
        allLines = allLines.concat(poemLines);
    });

    let newTextArray = [];
    for (let i = 0; i < lines.length; i++) {
        let randomIndex = floor(random(allLines.length));
        newTextArray.push(allLines[randomIndex]);
    }

    lines = newTextArray; //update the lines array with the jumbled lines
    initializeParticles();
}

function initializeParticles() {
    particles = []; //clear existing particles
    let x, y = (height - lines.length * 32) / 2; //center vertic
    lines.forEach((line) => {
        x = width / 2 - textWidth(line) / 2; //center align the line
        for (let char of line) {
            let charWidth = textWidth(char);
            //calculate the color based on the y position
            let inter = map(y, 0, height, 0, 1);
            let c = lerpColor(color('skyblue'), color('white'), inter);
            particles.push(new Particle(x + charWidth / 2, y, char, c));
            x += charWidth;
        }
        y += 32; //adjust y for the next line
    });
}
