(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.gif"),I$=[[0,'io.scif.media.imageioimpl.plugins.gif.GIFStreamMetadata']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "GIFWritableStreamMetadata", null, 'io.scif.media.imageioimpl.plugins.gif.GIFStreamMetadata');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$Z$S$S$SA$SA.apply(this,[true, "javax_imageio_gif_stream_1.0", "io.scif.media.imageioimpl.plugins.gif.GIFStreamMetadataFormat", null, null]);C$.$init$.apply(this);
this.reset$();
}, 1);

Clazz.newMeth(C$, 'isReadOnly$', function () {
return false;
});

Clazz.newMeth(C$, 'mergeTree$S$org_w3c_dom_Node', function (formatName, root) {
if (formatName.equals$O("javax_imageio_gif_stream_1.0")) {
if (root == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["root == null!"]);
}this.mergeNativeTree$org_w3c_dom_Node(root);
} else if (formatName.equals$O("javax_imageio_1.0")) {
if (root == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["root == null!"]);
}this.mergeStandardTree$org_w3c_dom_Node(root);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not a recognized format!"]);
}});

Clazz.newMeth(C$, 'reset$', function () {
this.version=null;
this.logicalScreenWidth=-1;
this.logicalScreenHeight=-1;
this.colorResolution=-1;
this.pixelAspectRatio=0;
this.backgroundColorIndex=0;
this.sortFlag=false;
this.globalColorTable=null;
});

Clazz.newMeth(C$, 'mergeNativeTree$org_w3c_dom_Node', function (root) {
var node=root;
if (!node.getNodeName$().equals$O("javax_imageio_gif_stream_1.0")) {
P$.GIFMetadata.fatal$org_w3c_dom_Node$S(node, "Root must be javax_imageio_gif_stream_1.0");
}node=node.getFirstChild$();
while (node != null ){
var name=node.getNodeName$();
if (name.equals$O("Version")) {
this.version=P$.GIFMetadata.getStringAttribute$org_w3c_dom_Node$S$S$Z$SA(node, "value", null, true, $I$(1).versionStrings);
} else if (name.equals$O("LogicalScreenDescriptor")) {
this.logicalScreenWidth=P$.GIFMetadata.getIntAttribute$org_w3c_dom_Node$S$I$Z$Z$I$I(node, "logicalScreenWidth", -1, true, true, 1, 65535);
this.logicalScreenHeight=P$.GIFMetadata.getIntAttribute$org_w3c_dom_Node$S$I$Z$Z$I$I(node, "logicalScreenHeight", -1, true, true, 1, 65535);
this.colorResolution=P$.GIFMetadata.getIntAttribute$org_w3c_dom_Node$S$I$Z$Z$I$I(node, "colorResolution", -1, true, true, 1, 8);
this.pixelAspectRatio=P$.GIFMetadata.getIntAttribute$org_w3c_dom_Node$S$I$Z$Z$I$I(node, "pixelAspectRatio", 0, true, true, 0, 255);
} else if (name.equals$O("GlobalColorTable")) {
var sizeOfGlobalColorTable=P$.GIFMetadata.getIntAttribute$org_w3c_dom_Node$S$Z$I$I(node, "sizeOfGlobalColorTable", true, 2, 256);
if (sizeOfGlobalColorTable != 2 && sizeOfGlobalColorTable != 4  && sizeOfGlobalColorTable != 8  && sizeOfGlobalColorTable != 16  && sizeOfGlobalColorTable != 32  && sizeOfGlobalColorTable != 64  && sizeOfGlobalColorTable != 128  && sizeOfGlobalColorTable != 256 ) {
P$.GIFMetadata.fatal$org_w3c_dom_Node$S(node, "Bad value for GlobalColorTable attribute sizeOfGlobalColorTable!");
}this.backgroundColorIndex=P$.GIFMetadata.getIntAttribute$org_w3c_dom_Node$S$I$Z$Z$I$I(node, "backgroundColorIndex", 0, true, true, 0, 255);
this.sortFlag=P$.GIFMetadata.getBooleanAttribute$org_w3c_dom_Node$S$Z$Z(node, "sortFlag", false, true);
this.globalColorTable=this.getColorTable$org_w3c_dom_Node$S$Z$I(node, "ColorTableEntry", true, sizeOfGlobalColorTable);
} else {
P$.GIFMetadata.fatal$org_w3c_dom_Node$S(node, "Unknown child of root node!");
}node=node.getNextSibling$();
}
});

Clazz.newMeth(C$, 'mergeStandardTree$org_w3c_dom_Node', function (root) {
var node=root;
if (!node.getNodeName$().equals$O("javax_imageio_1.0")) {
P$.GIFMetadata.fatal$org_w3c_dom_Node$S(node, "Root must be javax_imageio_1.0");
}node=node.getFirstChild$();
while (node != null ){
var name=node.getNodeName$();
if (name.equals$O("Chroma")) {
var childNode=node.getFirstChild$();
while (childNode != null ){
var childName=childNode.getNodeName$();
if (childName.equals$O("Palette")) {
this.globalColorTable=this.getColorTable$org_w3c_dom_Node$S$Z$I(childNode, "PaletteEntry", false, -1);
} else if (childName.equals$O("BackgroundIndex")) {
this.backgroundColorIndex=P$.GIFMetadata.getIntAttribute$org_w3c_dom_Node$S$I$Z$Z$I$I(childNode, "value", -1, true, true, 0, 255);
}childNode=childNode.getNextSibling$();
}
} else if (name.equals$O("Data")) {
var childNode=node.getFirstChild$();
while (childNode != null ){
var childName=childNode.getNodeName$();
if (childName.equals$O("BitsPerSample")) {
this.colorResolution=P$.GIFMetadata.getIntAttribute$org_w3c_dom_Node$S$I$Z$Z$I$I(childNode, "value", -1, true, true, 1, 8);
break;
}childNode=childNode.getNextSibling$();
}
} else if (name.equals$O("Dimension")) {
var childNode=node.getFirstChild$();
while (childNode != null ){
var childName=childNode.getNodeName$();
if (childName.equals$O("PixelAspectRatio")) {
var aspectRatio=P$.GIFMetadata.getFloatAttribute$org_w3c_dom_Node$S(childNode, "value");
if (aspectRatio == 1.0 ) {
this.pixelAspectRatio=0;
} else {
var ratio=((aspectRatio * 64.0 - 15.0)|0);
this.pixelAspectRatio=Math.max(Math.min(ratio, 255), 0);
}} else if (childName.equals$O("HorizontalScreenSize")) {
this.logicalScreenWidth=P$.GIFMetadata.getIntAttribute$org_w3c_dom_Node$S$I$Z$Z$I$I(childNode, "value", -1, true, true, 1, 65535);
} else if (childName.equals$O("VerticalScreenSize")) {
this.logicalScreenHeight=P$.GIFMetadata.getIntAttribute$org_w3c_dom_Node$S$I$Z$Z$I$I(childNode, "value", -1, true, true, 1, 65535);
}childNode=childNode.getNextSibling$();
}
} else if (name.equals$O("Document")) {
var childNode=node.getFirstChild$();
while (childNode != null ){
var childName=childNode.getNodeName$();
if (childName.equals$O("FormatVersion")) {
var formatVersion=P$.GIFMetadata.getStringAttribute$org_w3c_dom_Node$S$S$Z$SA(childNode, "value", null, true, null);
for (var i=0; i < $I$(1).versionStrings.length; i++) {
if (formatVersion.equals$O($I$(1).versionStrings[i])) {
this.version=formatVersion;
break;
}}
break;
}childNode=childNode.getNextSibling$();
}
}node=node.getNextSibling$();
}
});

Clazz.newMeth(C$, 'setFromTree$S$org_w3c_dom_Node', function (formatName, root) {
this.reset$();
this.mergeTree$S$org_w3c_dom_Node(formatName, root);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:18 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
