// import express from "express";
// import { socket } from "socket.io";

const express = require("express");
const socket = require("socket.io");
require('dotenv').config();

const PORT = process.env.PORT || 7000;

const app = express();
const server = app.listen(PORT, () => console.log(`listening at port ${PORT}`));

app.use(express.static('p5'));

const io = socket(server);

io.on("connection", (socket) => {
  console.log(`New connection: ${socket.id}`);

  socket.on("mouse", data => {
    data.id = socket.id;
    socket.broadcast.emit("mouse", data);
  })

  // socket.on("pos", data => {
  //   //console.log(data);

  //   if (data != null) {
  //     data.id = socket.id;
  //   }

  //   socket.broadcast.emit("pos", data);
  // })

  // socket.on("chat", msg => {
  //   const data = {
  //     msg,
  //     id: socket.id
  //   };
  //   socket.broadcast.emit("chat", data);
  // })
})
