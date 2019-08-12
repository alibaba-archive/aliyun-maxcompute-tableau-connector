(function dsbuilder(attr) {
  var username = attr["username"];
  var password = attr["password"];
  var connectionString = attr["server"];

  if (!connectionString.endsWith("&")) {
    connectionString += "&";
  }

  var params = ["accessId=" + username, "accessKey=" + password];
  return [connectionString + params.join("&")];
})
