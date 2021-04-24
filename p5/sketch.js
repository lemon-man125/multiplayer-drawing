let labels = [];

let socket;

// let players = [];

// let player;

// let chat;
// let submit;

const hashTable = {

}

function setup() {
  createCanvas(400, 400);
  socket = io.connect(getURL());
  background(51);
  // chat = createInput('');
  // submit = createButton('Sumbit!');
  // submit.mousePressed(() => {
  //   socket.emit("chat", chat.value());
  // })
  // player = new Player(random(width), random(height), color(255));
  socket.on("mouse", data => {
    const { px, py, x, y, id } = data;
  
    // if (id in hashTable) {
    //   stroke(hashTable[id]);
    // } else {
    //   const c = color(random(150), random(150), random(150));
    //   hashTable[id] = c;
    //   stroke(c);
    // }
  
    strokeWeight(16);
    stroke(255, 0, 100);
    line(px, py, x, y);
  })
  // socket.on("pos", data => {
  //   if (data == null) return;
  //   const { x, y, id } = data;
  //   if (id in hashTable) {
  //     hashTable[id].setPos(x, y);
  //   } else {
  //     hashTable[id] = new Player(x, y, color(0, 0, 255));
  //     players.push(hashTable[id]);
  //   }
  // })

  // socket.on("chat", async data => {
  //   const { msg, id } = data;
  //   const player = hashTable[id];
  //   labels.push({
  //     label: msg,
  //     x: player.pos.x,S
  //     y: player.pos.y - player.r*2
  //   });
  //   await delay(6);
  //   let message;
  //   for (const label of labels) {
  //     if (label.id === id) {
  //       message = label;
  //     }
  //   }

  //   labels.splice(labels.indexOf(message), 1);
  // })
}


// function delay(s) {
//   return new Promise((res, rej) => {
//     setTimeout(res, s * 1000)
//   })
// }

// function keyReleased() {
//   player.move(0, 0);
// }

// function keyPressed() {
//   switch(keyCode) {
//     case UP_ARROW: {
//       player.move(0, -1);
//       socket.emit("pos", player.getData());
//       break;
//     }
//     case DOWN_ARROW: {
//       player.move(0, 1);
//       socket.emit("pos", player.getData());
//       break;
//     }
//     case LEFT_ARROW: {
//       player.move(-1, 0);
//       socket.emit("pos", player.getData());
//       break;
//     }
//     case RIGHT_ARROW: {
//       player.move(1, 0);
//       socket.emit("pos", player.getData());
//       break;
//     }
//   }
// }

function draw() {
  if (mouseIsPressed) {
    strokeWeight(16);
    stroke(255);
    line(pmouseX, pmouseY, mouseX, mouseY);
    const data = {
      px: pmouseX,
      py: pmouseY,
      x: mouseX,
      y: mouseY,
    };
    socket.emit("mouse", data);
  }
}
