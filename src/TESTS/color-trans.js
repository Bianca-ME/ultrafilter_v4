// PURE PROCESSING

// void setup() {
//     size(640, 480);
//   }

//   void draw() {
//     // Map the mouse position on the y-axis to a value between 0 and 1
//     float yPos = map(mouseY, 0, height, 0, 1);

//     // Interpolate between the two colors using the mapped value
//     color bgColor = lerpColor(color(101, 117, 109), color(40, 7, 224), yPos);

//     // Set the background color to the interpolated color
//     background(bgColor);
//   }

// PURE P5JS
// function setup() {
//     createCanvas(640, 480);
// }

// function draw() {
//     // Map the mouse position on the y-axis to a value between 0 and 1
//     let yPos = map(mouseY, 0, height, 0, 1);

//     // Interpolate between the two colors using the mapped value
//     let bgColor = lerpColor(color(101, 117, 109), color(40, 7, 224), yPos);

//     // Set the background color to the interpolated color
//     background(bgColor);
// }

//   instance
export default function sketch2(p) {
    p.setup = function () {
        p.createCanvas(p.windowWidth, p.windowHeight);
    }

    p.draw = function () {
        // Map the mouse position on the y-axis to a value between 0 and 1
        let yPos = p.map(p.mouseY, 0, p.height, 0, 1);

        // Interpolate between the two colors using the mapped value
        let bgColor = p.lerpColor(p.color(101, 117, 109), p.color(40, 7, 224), yPos);

        // Set the background color to the interpolated color
        p.background(bgColor);
    }
}


