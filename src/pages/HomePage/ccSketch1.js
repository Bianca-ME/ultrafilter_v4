// export default function sketch1(p) {
//     var step = 125;

//     p.setup = function () {
//         p.createCanvas(500, 500);
//         p.clear();
//         p.background(255, 255, 255, 0);
//         p.stroke(0, 0, 255);
//         p.strokeWeight(5);

//         for (var i = 0; i <= p.width / step; i++) { // note the change in the loop condition
//             p.line(i * step, 0, i * step, p.height);
//         }

//         for (var j = 0; j <= p.height / step; j++) { // add a loop to draw the horizontal lines
//             p.line(0, j * step, p.width, j * step);
//         }
//     };
// }

//Processing

// PFont mono;

// //String txt = "TYPEMACHINES";
// String[] cities = {
//     "Stockholm",
//     "Gothenburg",
//     "Malmö",
//     "Uppsala",
//     "Västerås",
//     "städer i\nSverige"
// };

// color fg = #F0F0D0;
// color bg = #182100;

// float fontSize = 100;

// void setup() {
//     mono = createFont("data/RobotoMono-Regular.ttf", 800);
//     size(700, 700);
//     noStroke();
// }

// void draw() {
//     background(bg);
//     fill(fg);

//   int num = int(map(mouseX, 0, width, 0, cities.length));

//   //char c = cities.charAt(num);
//   String word = cities[num];

//     textFont(mono);
//     textAlign(CENTER, CENTER);
//     textSize(fontSize);
//     textLeading(45);
//     push();
//     translate(width / 2, height / 2 - (fontSize * 0.15));
//     text(word, 0, 0);
//     pop();

//     push();
//     rect(mouseX, 0, 5, height);
//     pop();
// }

//p5.js
// let mono;

// let array = [
//     "Stockholm",
//     "Gothenburg",
//     "Malmö",
//     "Uppsala",
//     "Västerås",
//     "städer i\nSverige"
// ]

// let fg = '#F0F0D0';
// let bg = '#182100';

// let fontSize = 500;

// // function preload() {
// //     mono = loadFont("RobotoMono-Regular.ttf.ttf")
// // }

// function setup() {
//     createCanvas(600, 400);
//     noStroke();
// }

// function draw() {
//     background(bg);
//     fill(fg);

//     let num = int(map(mouseX, 0, width, 0, array.length));

//     let string = array[num];

//     // textFont(mono);
//     textFont("RobotoMono-Regular.ttf.ttf");
//     textAlign(CENTER, CENTER);
//     textSize(fontSize);
//     push();
//     translate(width / 2, height / 2 - (fontSize * 0.15));
//     text(string, 0, 0);
//     pop();

//     push();
//     rect(mouseX, 0, 5, height);
//     pop();
// }

//converted to JS
// import RobotoMonoRegular from './data/RobotoMono-Regular.ttf';
export default function sketch1(p) {
    let mono;

    let array = [
        "filtre industriale",
        "desprafuire",
        "compresoare",
        "uscare\naer comprimat",
        "recipienti stocare\naer comprimat",
        "aspiratoare\nindustriale",
        "proiectare"
    ]

    let fg = '#0000ff';
    // let bg = '#fcfcf5';
    let bg = '#f5f5ed';

    let fontSizePercentage = 0.1;
    let fontSize = p.windowWidth * fontSizePercentage;




    // p.preload = function () {
    //     // mono = p.loadFont("/fonts/Syne-ExtraBold.ttf");
    //     mono = p.loadFont("Syne.ttf");
    // }

    p.setup = function () {
        p.createCanvas(p.windowWidth - 40, p.windowHeight);
        p.noStroke();
        p.textFont("Syne");

        p.canvas.className += " customFont";
        p.canvas.style.fontWeight = "800";


        p.textAlign(p.CENTER, p.CENTER);



        // Update the maximum width for text wrapping


        // p.loadFont(RobotoMonoRegular);
    }

    p.windowResized = function () {
        // console.log("Window resized!");
        p.resizeCanvas(p.windowWidth - 40, p.windowHeight);
        fontSize = p.windowWidth * fontSizePercentage; // Update the font size as well
    };


    p.draw = function () {
        p.background(bg);
        p.fill(fg);

        let num = p.int(p.map(p.mouseX, 0, p.width, 0, array.length));

        let string = array[num];

        // p.textFont("Syne"); //this worked

        p.textSize(fontSize);

        p.push();
        p.translate(p.width / 2, p.height / 2 - (fontSize * 0.15));


        p.text(string, 0, 0);
        p.pop();

        // p.push();
        // p.rect(p.mouseX, 0, 5, p.height);
        // p.pop();

        p.push();
        p.textFont("Syne");
        p.fill(fg);
        p.textSize(20);
        p.text("servicii", p.mouseX, p.mouseY, 200, 50);
        p.pop();
    }
}