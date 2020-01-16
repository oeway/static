(function(){var P$=Clazz.newPackage("swingjs.xml"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "JSXMLElement", null, 'swingjs.xml.JSXMLNode', 'org.w3c.dom.Element');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getTagName$', function () {
return 1 ? this.node.tagName :"";
});

Clazz.newMeth(C$, 'getNodeName$', function () {
return this.getTagName$();
});

Clazz.newMeth(C$, 'getAttribute$S', function (name) {
return 1 ? this.node.getAttribute(name) :"";
});

Clazz.newMeth(C$, 'setAttribute$S$S', function (name, value) {

this.node.setAttribute(name, value)
});

Clazz.newMeth(C$, 'removeAttribute$S', function (name) {

this.node.removeAttribute(name)
});

Clazz.newMeth(C$, 'getAttributeNode$S', function (name) {
return P$.JSXMLNode.newNode$swingjs_api_js_DOMNode(this.node.getAttributeNode(name)||null);
});

Clazz.newMeth(C$, 'setAttributeNode$org_w3c_dom_Attr', function (newAttr) {

this.node.setAttributeNode(newAttr.node);
return newAttr;
});

Clazz.newMeth(C$, 'removeAttributeNode$org_w3c_dom_Attr', function (oldAttr) {

this.node.removeAttributeNode(oldAttr.node);
return oldAttr;
});

Clazz.newMeth(C$, 'getAttributeNS$S$S', function (namespaceURI, localName) {
return this.node.getAttributeNS(namespaceURI, localName)||null;
});

Clazz.newMeth(C$, 'setAttributeNS$S$S$S', function (namespaceURI, qualifiedName, value) {

this.node.setAttributeNS(namespaceURI, localName)
});

Clazz.newMeth(C$, 'removeAttributeNS$S$S', function (namespaceURI, localName) {

this.node.removeAttributeNS(namespaceURI, localName)
});

Clazz.newMeth(C$, 'getAttributeNodeNS$S$S', function (namespaceURI, localName) {
return P$.JSXMLNode.newNode$swingjs_api_js_DOMNode(this.node.getAttributeNS(namespaceURI, localName) ||null);
});

Clazz.newMeth(C$, 'setAttributeNodeNS$org_w3c_dom_Attr', function (newAttr) {
return P$.JSXMLNode.newNode$swingjs_api_js_DOMNode(this.node.seAttributeNS(newAttr.node) ||null);
});

Clazz.newMeth(C$, 'hasAttribute$S', function (name) {
return 1 ? this.node.hasAttribute(name) :false;
});

Clazz.newMeth(C$, 'hasAttributeNS$S$S', function (namespaceURI, localName) {
return 1 ? this.node.hasAttributeNS(namespaceURI, localName) :false;
});

Clazz.newMeth(C$, 'isDefaultNamespace$S', function (namespaceURI) {
return 1 ? this.node.isDefaultNamespace(namespaceURI) :false;
});

Clazz.newMeth(C$, 'lookupPrefix$S', function (namespaceURI) {
return 1 ? this.node.lookupPrefix(namespaceURI) :"";
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:51:22 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
