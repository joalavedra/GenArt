

var gridInst;

function setup() {
  // build the array
  createCanvas(1500, 500);
  background(220);
  //frameRate(30);
  noStroke();
  rectMode(CENTER)
  // could be also outside?
  gridInst = new Grid(10,30,1500);
}

function draw() {
  //var grid = new Grid(10,30,1500);
  gridInst.draw(); 
}


// CLASSES
class Cell {
  constructor(colorCircle, colorSquare, hp, vp, width){
    this.colorCircle = colorCircle;
    this.colorSquare = colorSquare;
    this.hp = hp;
    this.vp = vp;
    this.width = width;
    this.circwidth = 0.84 * width;
  }
  draw(){
    fill(this.colorSquare);
    rect(this.hp, this.vp, this.width, this.width);
    fill(this.colorCircle);
    circle(this.hp, this.vp,this.circwidth,this.circwidth);
  }
}


class Grid {
  constructor(rows,
              columns, 
              totalWidth, 
              // totalHeight, 
              colorNumMin = 183, // this is orange
              colorNumMax = 280, // this is blue
              limitLeft = 50, // min 50 
              limitRight = 95) { //max 100
    // number of cells horizontally
    width = totalWidth/columns;
    // number of cells vertically
    // height = totalHeight/rows;
    height = width;
    this.grid = [];

    const totalColorLength = limitRight - limitLeft;
    const colorStep = totalColorLength/columns;
    
    for (let i = 0; i < rows; i++) {
      let colorNum = round(random(colorNumMin,colorNumMax));
      console.log(colorNum);
      for (let j = 0; j < columns; j++) {
        //console.log(`${i}`);
        const percentc = limitLeft + (j * colorStep);
        const percents = limitRight - (j * colorStep); 
        const cc = color(`hsl(${colorNum}, 100%, ${percentc}%)`);
        const cs = color(`hsl(${colorNum}, 100%, ${percents}%)`);
        const hp = (j+0.5)*width;
        const vp = (i+0.5)*height;
        // create a new cell
        let cell = new Cell(cc, cs, hp, vp, width);
        // add it to the grid
        this.grid.push(cell);
      }
    }
    //console.log(this.grid);
  }
  draw(){
    for (let i = 0; i < this.grid.length; i++) {
      this.grid[i].draw();
    }
  }
}
