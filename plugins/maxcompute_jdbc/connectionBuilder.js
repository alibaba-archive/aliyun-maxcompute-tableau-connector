(function dsbuilder(attr) {
    var connectionString = "jdbc:odps:" + attr[connectionHelper.attributeServer];
  
    return [connectionString];
})