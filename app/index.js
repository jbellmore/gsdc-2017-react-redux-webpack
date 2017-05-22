function component () {
    var element = document.createElement("div");
    element.innerHTML = "<span>Hello Guardian!</span>"
    return element;
}

document.body.appendChild(component());