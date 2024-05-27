import Pusher from "pusher";
import PusherClient from "pusher-js";

// useTLS: true, // optional, defaults to false

export const pusher = new Pusher({
  appId: "1804517",
  key: "84d3a6e9e9abc371e5fa",
  secret: "9dc38885f97877b043f3",
  cluster: "ap3",
  useTLS: true,
});

PusherClient.logToConsole = false;

export const pusherClient = new PusherClient("84d3a6e9e9abc371e5fa", {
  cluster: "ap3",
});
// cli
