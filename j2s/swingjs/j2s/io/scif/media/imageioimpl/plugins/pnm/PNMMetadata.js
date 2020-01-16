(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.pnm"),p$1={},I$=[[0,'java.util.Arrays','io.scif.media.imageioimpl.plugins.pnm.I18N','javax.imageio.metadata.IIOMetadataNode','io.scif.media.imageioimpl.common.ImageUtil','java.util.ArrayList','java.util.StringTokenizer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PNMMetadata", null, 'javax.imageio.metadata.IIOMetadata', 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['maxSample','width','height','variant','maxSampleSize'],'O',['comments','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$Z$S$S$SA$SA.apply(this,[true, "com_sun_media_imageio_plugins_pnm_image_1.0", "io.scif.media.imageioimpl.plugins.pnm.PNMMetadataFormat", null, null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$javax_imageio_metadata_IIOMetadata', function (metadata) {
C$.c$.apply(this, []);
if (metadata != null ) {
var formats=$I$(1).asList$TTA(metadata.getMetadataFormatNames$());
if (formats.contains$O("com_sun_media_imageio_plugins_pnm_image_1.0")) {
this.setFromTree$S$org_w3c_dom_Node("com_sun_media_imageio_plugins_pnm_image_1.0", metadata.getAsTree$S("com_sun_media_imageio_plugins_pnm_image_1.0"));
} else if (metadata.isStandardMetadataFormatSupported$()) {
var format="javax_imageio_1.0";
this.setFromTree$S$org_w3c_dom_Node(format, metadata.getAsTree$S(format));
}}}, 1);

Clazz.newMeth(C$, 'c$$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam', function (imageType, param) {
C$.c$.apply(this, []);
this.initialize$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam(imageType, param);
}, 1);

Clazz.newMeth(C$, 'initialize$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam', function (imageType, param) {
var destType=null;
if (param != null ) {
destType=param.getDestinationType$();
if (destType == null ) {
destType=imageType;
}} else {
destType=imageType;
}if (destType != null ) {
var sm=destType.getSampleModel$();
var sampleSize=sm.getSampleSize$();
this.width=sm.getWidth$();
this.height=sm.getHeight$();
for (var i=0; i < sampleSize.length; i++) {
if (sampleSize[i] > this.maxSampleSize) {
this.maxSampleSize=sampleSize[i];
}}
this.maxSample=(1 << this.maxSampleSize) - 1;
var isRaw=true;
if (Clazz.instanceOf(param, "io.scif.media.imageio.plugins.pnm.PNMImageWriteParam")) {
isRaw=(param).getRaw$();
}if (this.maxSampleSize == 1) this.variant="1".$c();
 else if (sm.getNumBands$() == 1) {
this.variant="2".$c();
} else if (sm.getNumBands$() == 3) {
this.variant="3".$c();
}if (this.variant <= 51  && isRaw  && this.maxSampleSize <= 8 ) {
this.variant+=3;
}}});

Clazz.newMeth(C$, 'clone$', function () {
var theClone=null;
try {
theClone=Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
} else {
throw e;
}
}
if (this.comments != null ) {
var numComments=this.comments.size$();
for (var i=0; i < numComments; i++) {
theClone.addComment$S(this.comments.get$I(i));
}
}return theClone;
});

Clazz.newMeth(C$, 'getAsTree$S', function (formatName) {
if (formatName == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(2).getString$S("PNMMetadata0")]);
}if (formatName.equals$O("com_sun_media_imageio_plugins_pnm_image_1.0")) {
return this.getNativeTree$();
}if (formatName.equals$O("javax_imageio_1.0")) {
return this.getStandardTree$();
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(2).getString$S("PNMMetadata1") + " " + formatName ]);
});

Clazz.newMeth(C$, 'getNativeTree$', function () {
var root=Clazz.new_($I$(3,1).c$$S,["com_sun_media_imageio_plugins_pnm_image_1.0"]);
var child=Clazz.new_($I$(3,1).c$$S,["FormatName"]);
child.setUserObject$O(this.getFormatName$());
child.setNodeValue$S(this.getFormatName$());
root.appendChild$org_w3c_dom_Node(child);
child=Clazz.new_($I$(3,1).c$$S,["Variant"]);
child.setUserObject$O(this.getVariant$());
child.setNodeValue$S(this.getVariant$());
root.appendChild$org_w3c_dom_Node(child);
child=Clazz.new_($I$(3,1).c$$S,["Width"]);
var tmp= new Integer(this.width);
child.setUserObject$O(tmp);
child.setNodeValue$S($I$(4).convertObjectToString$O(tmp));
root.appendChild$org_w3c_dom_Node(child);
child=Clazz.new_($I$(3,1).c$$S,["Height"]);
tmp= new Integer(this.height);
child.setUserObject$O(tmp);
child.setNodeValue$S($I$(4).convertObjectToString$O(tmp));
root.appendChild$org_w3c_dom_Node(child);
child=Clazz.new_($I$(3,1).c$$S,["MaximumSample"]);
tmp= new Byte(($b$[0] = (this.maxSample|0), $b$[0]));
child.setUserObject$O(tmp);
child.setNodeValue$S($I$(4).convertObjectToString$O( new Integer(this.maxSample)));
root.appendChild$org_w3c_dom_Node(child);
if (this.comments != null ) {
for (var i=0; i < this.comments.size$(); i++) {
child=Clazz.new_($I$(3,1).c$$S,["Comment"]);
tmp=this.comments.get$I(i);
child.setUserObject$O(tmp);
child.setNodeValue$S($I$(4).convertObjectToString$O(tmp));
root.appendChild$org_w3c_dom_Node(child);
}
}return root;
});

Clazz.newMeth(C$, 'getStandardChromaNode$', function () {
var node=Clazz.new_($I$(3,1).c$$S,["Chroma"]);
var temp=(this.variant - 49) % 3 + 1;
var subNode=Clazz.new_($I$(3,1).c$$S,["ColorSpaceType"]);
if (temp == 3) {
subNode.setAttribute$S$S("name", "RGB");
} else {
subNode.setAttribute$S$S("name", "GRAY");
}node.appendChild$org_w3c_dom_Node(subNode);
subNode=Clazz.new_($I$(3,1).c$$S,["NumChannels"]);
subNode.setAttribute$S$S("value", "" + (temp == 3 ? 3 : 1));
node.appendChild$org_w3c_dom_Node(subNode);
if (temp != 3) {
subNode=Clazz.new_($I$(3,1).c$$S,["BlackIsZero"]);
subNode.setAttribute$S$S("value", "TRUE");
node.appendChild$org_w3c_dom_Node(subNode);
}return node;
});

Clazz.newMeth(C$, 'getStandardDataNode$', function () {
var node=Clazz.new_($I$(3,1).c$$S,["Data"]);
var subNode=Clazz.new_($I$(3,1).c$$S,["SampleFormat"]);
subNode.setAttribute$S$S("value", "UnsignedIntegral");
node.appendChild$org_w3c_dom_Node(subNode);
var temp=(this.variant - 49) % 3 + 1;
subNode=Clazz.new_($I$(3,1).c$$S,["BitsPerSample"]);
if (temp == 1) {
subNode.setAttribute$S$S("value", "1");
} else if (temp == 2) {
subNode.setAttribute$S$S("value", "8");
} else {
subNode.setAttribute$S$S("value", "8 8 8");
}node.appendChild$org_w3c_dom_Node(subNode);
subNode=Clazz.new_($I$(3,1).c$$S,["SignificantBitsPerSample"]);
if (temp == 1 || temp == 2 ) {
subNode.setAttribute$S$S("value", "" + this.maxSampleSize);
} else {
subNode.setAttribute$S$S("value", this.maxSampleSize + " " + this.maxSampleSize + " " + this.maxSampleSize );
}node.appendChild$org_w3c_dom_Node(subNode);
return node;
});

Clazz.newMeth(C$, 'getStandardDimensionNode$', function () {
var node=Clazz.new_($I$(3,1).c$$S,["Dimension"]);
var subNode=Clazz.new_($I$(3,1).c$$S,["ImageOrientation"]);
subNode.setAttribute$S$S("value", "Normal");
node.appendChild$org_w3c_dom_Node(subNode);
return node;
});

Clazz.newMeth(C$, 'getStandardTextNode$', function () {
if (this.comments != null ) {
var node=Clazz.new_($I$(3,1).c$$S,["Text"]);
var iter=this.comments.iterator$();
while (iter.hasNext$()){
var comment=iter.next$();
var subNode=Clazz.new_($I$(3,1).c$$S,["TextEntry"]);
subNode.setAttribute$S$S("keyword", "comment");
subNode.setAttribute$S$S("value", comment);
node.appendChild$org_w3c_dom_Node(subNode);
}
return node;
}return null;
});

Clazz.newMeth(C$, 'isReadOnly$', function () {
return false;
});

Clazz.newMeth(C$, 'mergeTree$S$org_w3c_dom_Node', function (formatName, root) {
if (formatName == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(2).getString$S("PNMMetadata0")]);
}if (root == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(2).getString$S("PNMMetadata2")]);
}if (formatName.equals$O("com_sun_media_imageio_plugins_pnm_image_1.0") && root.getNodeName$().equals$O("com_sun_media_imageio_plugins_pnm_image_1.0") ) {
p$1.mergeNativeTree$org_w3c_dom_Node.apply(this, [root]);
} else if (formatName.equals$O("javax_imageio_1.0")) {
p$1.mergeStandardTree$org_w3c_dom_Node.apply(this, [root]);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(2).getString$S("PNMMetadata1") + " " + formatName ]);
}});

Clazz.newMeth(C$, 'setFromTree$S$org_w3c_dom_Node', function (formatName, root) {
if (formatName == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(2).getString$S("PNMMetadata0")]);
}if (root == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(2).getString$S("PNMMetadata2")]);
}if (formatName.equals$O("com_sun_media_imageio_plugins_pnm_image_1.0") && root.getNodeName$().equals$O("com_sun_media_imageio_plugins_pnm_image_1.0") ) {
p$1.mergeNativeTree$org_w3c_dom_Node.apply(this, [root]);
} else if (formatName.equals$O("javax_imageio_1.0")) {
p$1.mergeStandardTree$org_w3c_dom_Node.apply(this, [root]);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(2).getString$S("PNMMetadata2") + " " + formatName ]);
}});

Clazz.newMeth(C$, 'reset$', function () {
this.maxSample=this.width=this.height=this.variant=this.maxSampleSize=0;
this.comments=null;
});

Clazz.newMeth(C$, 'getFormatName$', function () {
var v=(this.variant - 49) % 3 + 1;
if (v == 1) return "PBM";
if (v == 2) return "PGM";
if (v == 3) return "PPM";
return null;
});

Clazz.newMeth(C$, 'getVariant$', function () {
if (this.variant > 51 ) return "RAWBITS";
return "ASCII";
});

Clazz.newMeth(C$, 'isRaw$', function () {
return this.getVariant$().equals$O("RAWBITS");
});

Clazz.newMeth(C$, 'setVariant$I', function (v) {
this.variant=v;
});

Clazz.newMeth(C$, 'setWidth$I', function (w) {
this.width=w;
});

Clazz.newMeth(C$, 'setHeight$I', function (h) {
this.height=h;
});

Clazz.newMeth(C$, 'getMaxBitDepth$', function () {
return this.maxSampleSize;
});

Clazz.newMeth(C$, 'getMaxValue$', function () {
return this.maxSample;
});

Clazz.newMeth(C$, 'setMaxBitDepth$I', function (maxValue) {
this.maxSample=maxValue;
this.maxSampleSize=0;
while (maxValue > 0){
maxValue>>>=1;
this.maxSampleSize++;
}
});

Clazz.newMeth(C$, 'addComment$S', function (comment) {
if (this.comments == null ) {
this.comments=Clazz.new_($I$(5,1));
}comment=comment.replaceAll$S$S("[\n\r\f]", " ");
this.comments.add$TE(comment);
});

Clazz.newMeth(C$, 'getComments$', function () {
return this.comments == null  ? null : this.comments.iterator$();
});

Clazz.newMeth(C$, 'mergeNativeTree$org_w3c_dom_Node', function (root) {
var list=root.getChildNodes$();
var format=null;
var $var=null;
for (var i=list.getLength$() - 1; i >= 0; i--) {
var node=list.item$I(i);
var name=node.getNodeName$();
if (name.equals$O("Comment")) {
this.addComment$S(node.getUserObject$());
} else if (name.equals$O("Width")) {
this.width=(node.getUserObject$()).intValue$();
} else if (name.equals$O("Height")) {
this.width=(node.getUserObject$()).intValue$();
} else if (name.equals$O("MaximumSample")) {
var maxValue=(node.getUserObject$()).intValue$();
this.setMaxBitDepth$I(maxValue);
} else if (name.equals$O("FormatName")) {
format=node.getUserObject$();
} else if (name.equals$O("Variant")) {
$var=node.getUserObject$();
}}
if (format.equals$O("PBM")) this.variant="1".$c();
 else if (format.equals$O("PGM")) this.variant="2".$c();
 else if (format.equals$O("PPM")) this.variant="3".$c();
if ($var.equals$O("RAWBITS")) this.variant+=3;
}, p$1);

Clazz.newMeth(C$, 'mergeStandardTree$org_w3c_dom_Node', function (root) {
var children=root.getChildNodes$();
var colorSpace=null;
var numComps=0;
var bitsPerSample=null;
for (var i=0; i < children.getLength$(); i++) {
var node=children.item$I(i);
var name=node.getNodeName$();
if (name.equals$O("Chroma")) {
var children1=node.getChildNodes$();
for (var j=0; j < children1.getLength$(); j++) {
var child=children1.item$I(j);
var name1=child.getNodeName$();
if (name1.equals$O("NumChannels")) {
var s=this.getAttribute$org_w3c_dom_Node$S(child, "value");
numComps= new Integer(s).intValue$();
} else if (name1.equals$O("ColorSpaceType")) {
colorSpace=this.getAttribute$org_w3c_dom_Node$S(child, "name");
}}
} else if (name.equals$O("Compression")) {
} else if (name.equals$O("Data")) {
var children1=node.getChildNodes$();
var maxBitDepth=-1;
for (var j=0; j < children1.getLength$(); j++) {
var child=children1.item$I(j);
var name1=child.getNodeName$();
if (name1.equals$O("BitsPerSample")) {
var bps=Clazz.new_($I$(5,1).c$$I,[3]);
var s=this.getAttribute$org_w3c_dom_Node$S(child, "value");
var t=Clazz.new_($I$(6,1).c$$S,[s]);
while (t.hasMoreTokens$()){
bps.add$TE(Integer.valueOf$S(t.nextToken$()));
}
bitsPerSample=Clazz.array(Integer.TYPE, [bps.size$()]);
for (var k=0; k < bitsPerSample.length; k++) {
bitsPerSample[k]=(bps.get$I(k)).intValue$();
}
} else if (name1.equals$O("SignificantBitsPerSample")) {
var s=this.getAttribute$org_w3c_dom_Node$S(child, "value");
var t=Clazz.new_($I$(6,1).c$$S,[s]);
while (t.hasMoreTokens$()){
var sbps=Integer.valueOf$S(t.nextToken$()).intValue$();
maxBitDepth=Math.max(sbps, maxBitDepth);
}
}}
if (maxBitDepth > 0) {
this.setMaxBitDepth$I((1 << maxBitDepth) - 1);
} else if (bitsPerSample != null ) {
for (var k=0; k < bitsPerSample.length; k++) {
if (bitsPerSample[k] > maxBitDepth) {
maxBitDepth=bitsPerSample[k];
}}
this.setMaxBitDepth$I((1 << maxBitDepth) - 1);
}} else if (name.equals$O("Dimension")) {
} else if (name.equals$O("Document")) {
} else if (name.equals$O("Text")) {
var children1=node.getChildNodes$();
for (var j=0; j < children1.getLength$(); j++) {
var child=children1.item$I(j);
var name1=child.getNodeName$();
if (name1.equals$O("TextEntry")) {
this.addComment$S(this.getAttribute$org_w3c_dom_Node$S(child, "value"));
}}
} else if (name.equals$O("Transparency")) {
} else {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,[$I$(2).getString$S("PNMMetadata3") + " " + name , node]);
}}
if ((colorSpace != null  && colorSpace.equals$O("RGB") ) || numComps > 1  || bitsPerSample.length > 1 ) {
this.variant="3".$c();
} else if (this.maxSampleSize > 1) {
this.variant="2".$c();
} else {
this.variant="1".$c();
}}, p$1);

Clazz.newMeth(C$, 'getAttribute$org_w3c_dom_Node$S', function (node, name) {
var map=node.getAttributes$();
node=map.getNamedItem$S(name);
return (node != null ) ? node.getNodeValue$() : null;
});
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:19 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
