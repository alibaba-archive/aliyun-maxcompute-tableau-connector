(function propertiesbuilder(attr) {
    var props = [];  
    props["accessId"] = attr[connectionHelper.attributeUsername];
    props["accessKey"] = attr[connectionHelper.attributePassword];
    
    var formattedProps = [];
    for (var key in props)
    {
        formattedProps.push(connectionHelper.FormatKeyValuePair(key, props[key]));
    }
    
    return formattedProps;
})