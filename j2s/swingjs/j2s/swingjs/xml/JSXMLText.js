(function(){var P$=Clazz.newPackage("swingjs.xml"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "JSXMLText", null, 'swingjs.xml.JSXMLCharData', 'org.w3c.dom.Text');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'splitText$I', function (offset) {
try {
return node.splitText(offset) ||null;
} catch (t) {
throw Clazz.new_(Clazz.load('org.w3c.dom.DOMException').c$$H$S,[2, t.toString()]);
}
});

Clazz.newMeth(C$, 'getNodeValue$', function () {
return 1 ? this.node.data :null;
});

Clazz.newMeth(C$, 'getIsWhitespaceInElementContent$', function () {
return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:51:22 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1