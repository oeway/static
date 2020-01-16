(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.wbmp"),p$1={},I$=[[0,'io.scif.media.imageioimpl.plugins.wbmp.I18N','javax.imageio.metadata.IIOMetadataNode','io.scif.media.imageioimpl.common.ImageUtil']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "WBMPMetadata", null, 'javax.imageio.metadata.IIOMetadata');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['wbmpType','width','height']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$Z$S$S$SA$SA.apply(this,[true, "com_sun_media_imageio_plugins_wbmp_image_1.0", "io.scif.media.imageioimpl.plugins.wbmp.WBMPMetadataFormat", null, null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isReadOnly$', function () {
return true;
});

Clazz.newMeth(C$, 'getAsTree$S', function (formatName) {
if (formatName.equals$O("com_sun_media_imageio_plugins_wbmp_image_1.0")) {
return p$1.getNativeTree.apply(this, []);
} else if (formatName.equals$O("javax_imageio_1.0")) {
return this.getStandardTree$();
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(1).getString$S("WBMPMetadata0")]);
}});

Clazz.newMeth(C$, 'getNativeTree', function () {
var root=Clazz.new_($I$(2,1).c$$S,["com_sun_media_imageio_plugins_wbmp_image_1.0"]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [root, "WBMPType",  new Integer(this.wbmpType)]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [root, "Width",  new Integer(this.width)]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [root, "Height",  new Integer(this.height)]);
return root;
}, p$1);

Clazz.newMeth(C$, 'setFromTree$S$org_w3c_dom_Node', function (formatName, root) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[$I$(1).getString$S("WBMPMetadata1")]);
});

Clazz.newMeth(C$, 'mergeTree$S$org_w3c_dom_Node', function (formatName, root) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[$I$(1).getString$S("WBMPMetadata1")]);
});

Clazz.newMeth(C$, 'reset$', function () {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[$I$(1).getString$S("WBMPMetadata1")]);
});

Clazz.newMeth(C$, 'addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O', function (root, name, object) {
var child=Clazz.new_($I$(2,1).c$$S,[name]);
if (object != null ) {
child.setUserObject$O(object);
child.setNodeValue$S($I$(3).convertObjectToString$O(object));
}root.appendChild$org_w3c_dom_Node(child);
return child;
}, p$1);

Clazz.newMeth(C$, 'getStandardChromaNode$', function () {
var node=Clazz.new_($I$(2,1).c$$S,["Chroma"]);
var subNode=Clazz.new_($I$(2,1).c$$S,["ColorSpaceType"]);
subNode.setAttribute$S$S("name", "GRAY");
node.appendChild$org_w3c_dom_Node(subNode);
subNode=Clazz.new_($I$(2,1).c$$S,["NumChannels"]);
subNode.setAttribute$S$S("value", "1");
node.appendChild$org_w3c_dom_Node(subNode);
subNode=Clazz.new_($I$(2,1).c$$S,["BlackIsZero"]);
subNode.setAttribute$S$S("value", "TRUE");
node.appendChild$org_w3c_dom_Node(subNode);
return node;
});

Clazz.newMeth(C$, 'getStandardDataNode$', function () {
var node=Clazz.new_($I$(2,1).c$$S,["Data"]);
var subNode=Clazz.new_($I$(2,1).c$$S,["SampleFormat"]);
subNode.setAttribute$S$S("value", "UnsignedIntegral");
node.appendChild$org_w3c_dom_Node(subNode);
subNode=Clazz.new_($I$(2,1).c$$S,["BitsPerSample"]);
subNode.setAttribute$S$S("value", "1");
node.appendChild$org_w3c_dom_Node(subNode);
return node;
});

Clazz.newMeth(C$, 'getStandardDimensionNode$', function () {
var dimension_node=Clazz.new_($I$(2,1).c$$S,["Dimension"]);
var node=null;
node=Clazz.new_($I$(2,1).c$$S,["ImageOrientation"]);
node.setAttribute$S$S("value", "Normal");
dimension_node.appendChild$org_w3c_dom_Node(node);
return dimension_node;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:21 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
