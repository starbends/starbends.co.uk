let introtext = `
there's something i find incredibly beautiful about poems
maybe it's simply the raw emotion
or something much deeper in meaning. 

either way, you can read some of mine by clicking the button below

when you get there...
there's a purple button in the top left; this toggles a 
piece of music i made entitled "i won't disappear" 

in the top right, you can switch between different poems i've written. 
as i write more, they will be the first to show up.

in the bottom right is a super special feature that allows you to jumble 
lines from my poems, into completely randomly generated order. 
most of the time, it's pure gibberish but
other times, it's almost beautifully profound. 

it reminds me of blackout poetry. and i really like it. 
maybe it'll even inspire your own desire to write.
otherwise, please do click around on the site and see what you can find. 

lovingly, always
-luna. [aka starbends.]
`;

function setup() {
    createCanvas(windowWidth, windowHeight);
    textAlign(CENTER, CENTER);
    textSize(20);
    fill(64); // Light gray color for the text
    noLoop(); // static text doesn't need continuous draw
}

function draw() {
    // skyblue-to-white gradient
    for (let y = 0; y < height; y++) {
        let inter = map(y, 0, height, 0, 1);
        let c = lerpColor(color('skyblue'), color('white'), inter);
        stroke(c);
        line(0, y, width, y);
    }

    // dimension calculations
    let textBoxWidth = width * 0.8; // 80% canvas width
    let textBoxHeight = height * 0.8; // 80% canvas height
    let textBoxX = (width - textBoxWidth) / 2; // Center horz
    let textBoxY = (height - textBoxHeight) / 2; // Center vert

    // display the text
    textSize(20);
    fill(64); // light grey text
    textAlign(CENTER, CENTER); // align text to top left
    text(introtext, textBoxX, textBoxY, textBoxWidth, textBoxHeight);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    redraw();
}
