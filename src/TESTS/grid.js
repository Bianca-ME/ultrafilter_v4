// export default function sketch(p) {
//     var step = 125;

//     p.setup = function() {
//      p.createCanvas(500, 500);
//     //   canvas.parent("#sketch2");
//     p.clear();
//       p.background(255,255,255,0);
//       p.stroke(0,0,255);
//       p.strokeWeight(5);
  
//       for(var i = 0; i < p.width/step; i++ ) {
//         p.line(i*step, 0, i*step, p.height);
//         p.line(0, i*step, p.width, i*step);
//       } 
//     }
// }

export default function sketch(p) {
    var step = 125;

    p.setup = function() {
      p.createCanvas(500, 500);
      p.clear();
      p.background(255, 255, 255, 0);
      p.stroke(0, 0, 255);
      p.strokeWeight(5);
  
      for (var i = 0; i <= p.width / step; i++) { // note the change in the loop condition
        p.line(i * step, 0, i * step, p.height);
      }
      
      // for (var j = 0; j <= p.height / step; j++) { // add a loop to draw the horizontal lines
      //   p.line(0, j * step, p.width, j * step);
      // }
    };
}

