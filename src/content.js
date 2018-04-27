var elements = document.getElementsByTagName('*');
var replacements = ['"The Franchise"', 'MK Who ?', 'MK', 'Milton Keynes'];
for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    for (var j = 0; j < element.childNodes.length; j++) {
        var node = element.childNodes[j];
        var text = node.nodeValue;
        if (text) {
            var replacedText = text.replace(/(Milton Keynes|MK) Dons( F\.C\.| FC| Football Club)?/gi, replacements[Math.floor(Math.random() * replacements.length)]);
            if (replacedText !== text) {
                element.replaceChild(document.createTextNode(replacedText), node);
            }
        }
    }
}
