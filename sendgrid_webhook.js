var localtunnel = require("localtunnel");

localtunnel(5000, { subdomain: "ihcgniwkam" }, function(err, tunnel) {
  console.log("LT running");
})