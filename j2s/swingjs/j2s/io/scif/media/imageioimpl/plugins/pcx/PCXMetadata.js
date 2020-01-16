(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.pcx"),p$1={},I$=[[0,'javax.imageio.metadata.IIOMetadataNode']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PCXMetadata", null, 'javax.imageio.metadata.IIOMetadata', ['Cloneable', 'io.scif.media.imageioimpl.plugins.pcx.PCXConstants']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['gotxmin','gotymin'],'B',['bitsPerPixel'],'I',['vdpi','hdpi','hsize','vsize'],'H',['version','xmin','ymin']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$Z$S$S$SA$SA.apply(this,[true, null, null, null, null]);C$.$init$.apply(this);
this.reset$();
}, 1);

Clazz.newMeth(C$, 'getAsTree$S', function (formatName) {
if (formatName.equals$O("javax_imageio_1.0")) {
return this.getStandardTree$();
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not a recognized format!"]);
}});

Clazz.newMeth(C$, 'isReadOnly$', function () {
return false;
});

Clazz.newMeth(C$, 'mergeTree$S$org_w3c_dom_Node', function (formatName, root) {
if (formatName.equals$O("javax_imageio_1.0")) {
if (root == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["root == null!"]);
}p$1.mergeStandardTree$org_w3c_dom_Node.apply(this, [root]);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not a recognized format!"]);
}});

Clazz.newMeth(C$, 'reset$', function () {
this.version=5;
this.bitsPerPixel=($b$[0] = 0, $b$[0]);
this.gotxmin=false;
this.gotymin=false;
this.xmin=($s$[0] = 0, $s$[0]);
this.ymin=($s$[0] = 0, $s$[0]);
this.vdpi=72;
this.hdpi=72;
this.hsize=0;
this.vsize=0;
});

Clazz.newMeth(C$, 'getStandardDocumentNode$', function () {
var versionString;
switch (this.version) {
case 0:
versionString="2.5";
break;
case 2:
versionString="2.8 with palette";
break;
case 3:
versionString="2.8 without palette";
break;
case 4:
versionString="PC Paintbrush for Windows";
break;
case 5:
versionString="3.0";
break;
default:
versionString=null;
}
var documentNode=null;
if (versionString != null ) {
documentNode=Clazz.new_($I$(1,1).c$$S,["Document"]);
var node=Clazz.new_($I$(1,1).c$$S,["FormatVersion"]);
node.setAttribute$S$S("value", versionString);
documentNode.appendChild$org_w3c_dom_Node(node);
}return documentNode;
});

Clazz.newMeth(C$, 'getStandardDimensionNode$', function () {
var dimensionNode=Clazz.new_($I$(1,1).c$$S,["Dimension"]);
var node=null;
node=Clazz.new_($I$(1,1).c$$S,["HorizontalPixelOffset"]);
node.setAttribute$S$S("value", String.valueOf$I(this.xmin));
dimensionNode.appendChild$org_w3c_dom_Node(node);
node=Clazz.new_($I$(1,1).c$$S,["VerticalPixelOffset"]);
node.setAttribute$S$S("value", String.valueOf$I(this.ymin));
dimensionNode.appendChild$org_w3c_dom_Node(node);
node=Clazz.new_($I$(1,1).c$$S,["HorizontalPixelSize"]);
node.setAttribute$S$S("value", String.valueOf$D(254.0 / this.hdpi));
dimensionNode.appendChild$org_w3c_dom_Node(node);
node=Clazz.new_($I$(1,1).c$$S,["VerticalPixelSize"]);
node.setAttribute$S$S("value", String.valueOf$D(254.0 / this.vdpi));
dimensionNode.appendChild$org_w3c_dom_Node(node);
if (this.hsize != 0) {
node=Clazz.new_($I$(1,1).c$$S,["HorizontalScreenSize"]);
node.setAttribute$S$S("value", String.valueOf$I(this.hsize));
dimensionNode.appendChild$org_w3c_dom_Node(node);
}if (this.vsize != 0) {
node=Clazz.new_($I$(1,1).c$$S,["VerticalScreenSize"]);
node.setAttribute$S$S("value", String.valueOf$I(this.vsize));
dimensionNode.appendChild$org_w3c_dom_Node(node);
}return dimensionNode;
});

Clazz.newMeth(C$, 'mergeStandardTree$org_w3c_dom_Node', function (root) {
var node=root;
if (!node.getNodeName$().equals$O("javax_imageio_1.0")) throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,["Root must be javax_imageio_1.0", node]);
node=node.getFirstChild$();
while (node != null ){
var name=node.getNodeName$();
if (name.equals$O("Dimension")) {
var child=node.getFirstChild$();
while (child != null ){
var childName=child.getNodeName$();
if (childName.equals$O("HorizontalPixelOffset")) {
var hpo=C$.getAttribute$org_w3c_dom_Node$S(child, "value");
this.xmin=Short.valueOf$S(hpo).shortValue$();
this.gotxmin=true;
} else if (childName.equals$O("VerticalPixelOffset")) {
var vpo=C$.getAttribute$org_w3c_dom_Node$S(child, "value");
this.ymin=Short.valueOf$S(vpo).shortValue$();
this.gotymin=true;
} else if (childName.equals$O("HorizontalPixelSize")) {
var hps=C$.getAttribute$org_w3c_dom_Node$S(child, "value");
this.hdpi=((254.0 / Float.parseFloat$S(hps) + 0.5)|0);
} else if (childName.equals$O("VerticalPixelSize")) {
var vps=C$.getAttribute$org_w3c_dom_Node$S(child, "value");
this.vdpi=((254.0 / Float.parseFloat$S(vps) + 0.5)|0);
} else if (childName.equals$O("HorizontalScreenSize")) {
var hss=C$.getAttribute$org_w3c_dom_Node$S(child, "value");
this.hsize=Integer.valueOf$S(hss).intValue$();
} else if (childName.equals$O("VerticalScreenSize")) {
var vss=C$.getAttribute$org_w3c_dom_Node$S(child, "value");
this.vsize=Integer.valueOf$S(vss).intValue$();
}child=child.getNextSibling$();
}
}node=node.getNextSibling$();
}
}, p$1);

Clazz.newMeth(C$, 'getAttribute$org_w3c_dom_Node$S', function (node, attrName) {
var attrs=node.getAttributes$();
var attr=attrs.getNamedItem$S(attrName);
return attr != null  ? attr.getNodeValue$() : null;
}, 1);
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:19 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
