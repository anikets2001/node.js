// events and eventsEmitter in nodejs

// think it like an event in js
// and event emitter is that emit the event, like button in html

// case1: count how many api are hitting in the project

const express = require("express");
const EventEmitter = require("events"); //EventEmitter is a class

const app = express();

const event = new EventEmitter();

let count = 0;
event.on("countApi", () => {
  count++;
  console.log("event called", count);
});

app.get("/", (req, res) => {
  res.send("api called...");
  event.emit("countApi");
});

app.get("/search", (req, res) => {
  res.send("search api call...");
  event.emit("countApi");
});

app.get("/update", (req, res) => {
  res.send("update api call...");
  event.emit("countApi");
});

app.listen(5000);
