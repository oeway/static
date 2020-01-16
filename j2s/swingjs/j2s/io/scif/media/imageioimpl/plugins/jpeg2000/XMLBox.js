(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.jpeg2000"),I$=[[0,'javax.imageio.metadata.IIOMetadataNode','io.scif.media.imageioimpl.plugins.jpeg2000.Box','io.scif.media.imageioimpl.plugins.jpeg2000.I18N']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "XMLBox", null, 'io.scif.media.imageioimpl.plugins.jpeg2000.Box');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.elementNames=Clazz.array(String, -1, ["Content"]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['elementNames','String[]']]]

Clazz.newMeth(C$, 'getElementNames$', function () {
return C$.elementNames;
}, 1);

Clazz.newMeth(C$, 'c$$BA', function (data) {
;C$.superclazz.c$$I$I$BA.apply(this,[8 + data.length, 2020437024, data]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_w3c_dom_Node', function (node) {
;C$.superclazz.c$$org_w3c_dom_Node.apply(this,[node]);C$.$init$.apply(this);
var children=node.getChildNodes$();
for (var i=0; i < children.getLength$(); i++) {
var child=children.item$I(i);
var name=child.getNodeName$();
if ("Content".equals$O(name)) {
var value=child.getNodeValue$();
if (value != null ) this.data=value.getBytes$();
 else if (Clazz.instanceOf(child, "javax.imageio.metadata.IIOMetadataNode")) {
value=(child).getUserObject$();
if (value != null ) this.data=value.getBytes$();
}}}
}, 1);

Clazz.newMeth(C$, 'getNativeNode$', function () {
try {
var node=Clazz.new_($I$(1,1).c$$S,[$I$(2).getName$I(this.getType$())]);
this.setDefaultAttributes$javax_imageio_metadata_IIOMetadataNode(node);
var child=Clazz.new_($I$(1,1).c$$S,["Content"]);
var value=null;
if (this.data != null ) value= String.instantialize(this.data);
child.setUserObject$O(value);
child.setNodeValue$S(value);
node.appendChild$org_w3c_dom_Node(child);
return node;
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(3).getString$S("Box0")]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:19 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
