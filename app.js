var irc = require("tmi.js");
var api = require("twitchapi\twitchapi.js");

var options = {
    options: {
        debug: true
    },
    connection: {
        cluster: "chat",
        reconnect: true
    },
    identity: {
        username: "zzz_bot",
        password: "oauth:kk94gsyux89tdu6tyqhjw65ed5e61d"
    },
    channels: ["#yeahrightxd"]
};

// commands

event.on("chat", function (username))

var client = new irc.client(options);

// Connect the client to the server..
console.log("connecting!");
client.connect();
console.log("Connected!")

// Exiting
//console.log("Im Now leaving");
//client.disconnect();
