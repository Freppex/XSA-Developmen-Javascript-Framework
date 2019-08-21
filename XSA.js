var elements = document.querySelectorAll("*");
elements.forEach(element => {
    var attributes = element.attributes;
    for (var i = 0; i < attributes.length; i++) {
        var attribute = attributes[i];
        if (window.matchMedia("(min-width: 1200px)").matches) {
            if (attribute.localName.startsWith("xl-")) {
                console.log(attribute.localName.split("xl-")[1] + " / " + attribute.nodeValue);
                element.style[attribute.localName.split("xl-")[1]] = attribute.nodeValue;
            } else if (attribute.localName.startsWith("lg-")) {
                console.log(attribute.localName.split("lg-")[1] + " / " + attribute.nodeValue);
                element.style[attribute.localName.split("lg-")[1]] = attribute.nodeValue;
            } else if (attribute.localName.startsWith("md-")) {
                console.log(attribute.localName.split("md-")[1] + " / " + attribute.nodeValue);
                element.style[attribute.localName.split("md-")[1]] = attribute.nodeValue;
            } else if (attribute.localName.startsWith("sm-")) {
                console.log(attribute.localName.split("sm-")[1] + " / " + attribute.nodeValue);
                element.style[attribute.localName.split("sm-")[1]] = attribute.nodeValue;
            } else {
                element.style[attribute.localName] = attribute.nodeValue;
            }
        }
        else if (window.matchMedia("(min-width: 992px)").matches) {
            if (attribute.localName.startsWith("lg-")) {
                console.log(attribute.localName.split("lg-")[1] + " / " + attribute.nodeValue);
                element.style[attribute.localName.split("lg-")[1]] = attribute.nodeValue;
            } else if (attribute.localName.startsWith("md-")) {
                console.log(attribute.localName.split("md-")[1] + " / " + attribute.nodeValue);
                element.style[attribute.localName.split("md-")[1]] = attribute.nodeValue;
            } else if (attribute.localName.startsWith("sm-")) {
                console.log(attribute.localName.split("sm-")[1] + " / " + attribute.nodeValue);
                element.style[attribute.localName.split("sm-")[1]] = attribute.nodeValue;
            } else {
                element.style[attribute.localName] = attribute.nodeValue;
            }
        }
        else if (window.matchMedia("(min-width: 768px)").matches) {
            if (attribute.localName.startsWith("md-")) {
                console.log(attribute.localName.split("md-")[1] + " / " + attribute.nodeValue);
                element.style[attribute.localName.split("md-")[1]] = attribute.nodeValue;
            } else if (attribute.localName.startsWith("sm-")) {
                console.log(attribute.localName.split("sm-")[1] + " / " + attribute.nodeValue);
                element.style[attribute.localName.split("sm-")[1]] = attribute.nodeValue;
            } else {
                element.style[attribute.localName] = attribute.nodeValue;
            }
        }
        else if (window.matchMedia("(min-width: 576px)").matches) {
            if (attribute.localName.startsWith("sm-")) {
                console.log(attribute.localName.split("sm-")[1] + " / " + attribute.nodeValue);
                element.style[attribute.localName.split("sm-")[1]] = attribute.nodeValue;
            } else {
                element.style[attribute.localName] = attribute.nodeValue;
            }
        }
        else {
            element.style[attribute.localName] = attribute.nodeValue;
        }
    }
});