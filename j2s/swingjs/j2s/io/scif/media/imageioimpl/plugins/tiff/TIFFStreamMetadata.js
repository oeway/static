(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),p$1={},I$=[[0,'java.nio.ByteOrder','javax.imageio.metadata.IIOMetadataNode']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFStreamMetadata", null, 'javax.imageio.metadata.IIOMetadata');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.bigEndianString=$I$(1).BIG_ENDIAN.toString();
C$.littleEndianString=$I$(1).LITTLE_ENDIAN.toString();
}

Clazz.newMeth(C$, '$init$', function () {
this.byteOrder=$I$(1).BIG_ENDIAN;
}, 1);

C$.$fields$=[['O',['byteOrder','java.nio.ByteOrder']]
,['S',['bigEndianString','littleEndianString']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$Z$S$S$SA$SA.apply(this,[false, "com_sun_media_imageio_plugins_tiff_stream_1.0", "io.scif.media.imageioimpl.plugins.tiff.TIFFStreamMetadataFormat", null, null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isReadOnly$', function () {
return false;
});

Clazz.newMeth(C$, 'fatal$org_w3c_dom_Node$S', function (node, reason) {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,[reason, node]);
}, 1);

Clazz.newMeth(C$, 'getAsTree$S', function (formatName) {
var root=Clazz.new_($I$(2,1).c$$S,["com_sun_media_imageio_plugins_tiff_stream_1.0"]);
var byteOrderNode=Clazz.new_($I$(2,1).c$$S,["ByteOrder"]);
byteOrderNode.setAttribute$S$S("value", this.byteOrder.toString());
root.appendChild$org_w3c_dom_Node(byteOrderNode);
return root;
});

Clazz.newMeth(C$, 'mergeNativeTree$org_w3c_dom_Node', function (root) {
var node=root;
if (!node.getNodeName$().equals$O("com_sun_media_imageio_plugins_tiff_stream_1.0")) {
C$.fatal$org_w3c_dom_Node$S(node, "Root must be com_sun_media_imageio_plugins_tiff_stream_1.0");
}node=node.getFirstChild$();
if (node == null  || !node.getNodeName$().equals$O("ByteOrder") ) {
C$.fatal$org_w3c_dom_Node$S(node, "Root must have \"ByteOrder\" child");
}var attrs=node.getAttributes$();
var order=attrs.getNamedItem$S("value").getNodeValue$();
if (order == null ) {
C$.fatal$org_w3c_dom_Node$S(node, "ByteOrder node must have a \"value\" attribute");
}if (order.equals$O(C$.bigEndianString)) {
this.byteOrder=$I$(1).BIG_ENDIAN;
} else if (order.equals$O(C$.littleEndianString)) {
this.byteOrder=$I$(1).LITTLE_ENDIAN;
} else {
C$.fatal$org_w3c_dom_Node$S(node, "Incorrect value for ByteOrder \"value\" attribute");
}}, p$1);

Clazz.newMeth(C$, 'mergeTree$S$org_w3c_dom_Node', function (formatName, root) {
if (formatName.equals$O("com_sun_media_imageio_plugins_tiff_stream_1.0")) {
if (root == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["root == null!"]);
}p$1.mergeNativeTree$org_w3c_dom_Node.apply(this, [root]);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not a recognized format!"]);
}});

Clazz.newMeth(C$, 'reset$', function () {
this.byteOrder=$I$(1).BIG_ENDIAN;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
