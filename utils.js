function removeBlankTextNode(elem) {
    console.log(arguments);
    if (elem == null || elem.childNodes.length == 0) {
        return;
    }
    for (var i = 0; i < elem.childNodes.length; i++) {
        let item = elem.childNodes[i];
        if (1 === item.nodeType) {
            removeBlankTextNode(item);
        } else if (3 === item.nodeType) {
            if (item.nodeValue != null && item.nodeValue.replaceAll(" ", "").replaceAll("\n", "") === "") {
                item.remove();
                i--;
            }
        }
    }
}
function addLoadEvent(onload) {
    let oldOnload = window.onload;
    if (typeof window.onload != "function") {
        window.onload = function () {
            onload.call();
        };
    } else {
        window.onload = function () {
            oldOnload.call();
            onload.call();
        }
    };
}