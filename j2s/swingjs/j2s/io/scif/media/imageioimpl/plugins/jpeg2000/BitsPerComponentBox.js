(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.jpeg2000"),I$=[[0,'io.scif.media.imageioimpl.plugins.jpeg2000.Box']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BitsPerComponentBox", null, 'io.scif.media.imageioimpl.plugins.jpeg2000.Box');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$BA', function (bitDepth) {
;C$.superclazz.c$$I$I$BA.apply(this,[8 + bitDepth.length, 1651532643, null]);C$.$init$.apply(this);
this.data=bitDepth;
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node', function (node) {
;C$.superclazz.c$$org_w3c_dom_Node.apply(this,[node]);C$.$init$.apply(this);
var children=node.getChildNodes$();
for (var i=0; i < children.getLength$(); i++) {
var child=children.item$I(i);
var name=child.getNodeName$();
if ("BitDepth".equals$O(name)) {
this.data=$I$(1).getByteArrayElementValue$org_w3c_dom_Node(child);
}}
}, 1);

Clazz.newMeth(C$, 'getBitDepth$', function () {
return this.data;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:18 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
