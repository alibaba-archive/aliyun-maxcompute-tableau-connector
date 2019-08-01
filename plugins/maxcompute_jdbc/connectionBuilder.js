(function dsbuilder(attr) {

  return [attr["server"]];

  // var endpoint = "https://service.odps.aliyun.com/api";
  // if (attr["server"].startsWith("https://") || attr["server"].startsWith("http://")) {
  //   endpoint = attr["server"];
  // } else {
  //   endpoint = "https://" + attr["server"];
  // }

  // var urlBuilder = "jdbc:odps:" + endpoint + (endpoint.includes("?") ? "&" : "?");

  // var params = [];
  // params["project"] = attr["dbname"];
  // params["accessId"] = attr["username"];
  // params["accessKey"] = attr["password"];

  // var formattedParams = [];

  // for (var key in params) {
  //   formattedParams.push(connectionHelper.formatKeyValuePair(key, params[key]));
  // }

  // urlBuilder += formattedParams.join("&")

  // return [urlBuilder];
})
