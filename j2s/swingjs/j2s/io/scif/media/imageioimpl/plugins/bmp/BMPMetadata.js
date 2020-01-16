(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.bmp"),p$1={},I$=[[0,'java.util.Arrays','io.scif.media.imageioimpl.plugins.bmp.I18N','javax.imageio.metadata.IIOMetadataNode','io.scif.media.imageioimpl.plugins.bmp.BMPConstants','io.scif.media.imageioimpl.plugins.bmp.BMPImageWriter','java.util.ArrayList','java.util.StringTokenizer','io.scif.media.imageioimpl.common.ImageUtil']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BMPMetadata", null, 'javax.imageio.metadata.IIOMetadata', ['Cloneable', 'io.scif.media.imageioimpl.plugins.bmp.BMPConstants']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.palette=null;
this.comments=null;
}, 1);

C$.$fields$=[['D',['redX','redY','redZ','greenX','greenY','greenZ','blueX','blueY','blueZ'],'I',['width','height','compression','imageSize','xPixelsPerMeter','yPixelsPerMeter','colorsUsed','colorsImportant','redMask','greenMask','blueMask','alphaMask','colorSpace','gammaRed','gammaGreen','gammaBlue','intent','paletteSize','red','green','blue'],'H',['bitsPerPixel'],'S',['bmpVersion'],'O',['palette','byte[]','comments','java.util.List']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$Z$S$S$SA$SA.apply(this,[true, "com_sun_media_imageio_plugins_bmp_image_1.0", "io.scif.media.imageioimpl.bmp.BMPMetadataFormat", null, null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$javax_imageio_metadata_IIOMetadata', function (metadata) {
C$.c$.apply(this, []);
if (metadata != null ) {
var formats=$I$(1).asList$TTA(metadata.getMetadataFormatNames$());
if (formats.contains$O("com_sun_media_imageio_plugins_bmp_image_1.0")) {
this.setFromTree$S$org_w3c_dom_Node("com_sun_media_imageio_plugins_bmp_image_1.0", metadata.getAsTree$S("com_sun_media_imageio_plugins_bmp_image_1.0"));
} else if (metadata.isStandardMetadataFormatSupported$()) {
var format="javax_imageio_1.0";
this.setFromTree$S$org_w3c_dom_Node(format, metadata.getAsTree$S(format));
}}}, 1);

Clazz.newMeth(C$, 'isReadOnly$', function () {
return false;
});

Clazz.newMeth(C$, 'clone$', function () {
var metadata;
try {
metadata=Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
return null;
} else {
throw e;
}
}
return metadata;
});

Clazz.newMeth(C$, 'getAsTree$S', function (formatName) {
if (formatName.equals$O("com_sun_media_imageio_plugins_bmp_image_1.0")) {
return p$1.getNativeTree.apply(this, []);
} else if (formatName.equals$O("javax_imageio_1.0")) {
return this.getStandardTree$();
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(2).getString$S("BMPMetadata0")]);
}});

Clazz.newMeth(C$, 'getNativeTree', function () {
var root=Clazz.new_($I$(3,1).c$$S,["com_sun_media_imageio_plugins_bmp_image_1.0"]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [root, "BMPVersion", this.bmpVersion]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [root, "Width",  new Integer(this.width)]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [root, "Height",  new Integer(this.height)]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [root, "BitsPerPixel",  new Short(this.bitsPerPixel)]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [root, "Compression",  new Integer(this.compression)]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [root, "ImageSize",  new Integer(this.imageSize)]);
var node;
if (this.xPixelsPerMeter > 0 && this.yPixelsPerMeter > 0 ) {
node=p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [root, "PixelsPerMeter", null]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [node, "X",  new Integer(this.xPixelsPerMeter)]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [node, "Y",  new Integer(this.yPixelsPerMeter)]);
}p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [root, "ColorsUsed",  new Integer(this.colorsUsed)]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [root, "ColorsImportant",  new Integer(this.colorsImportant)]);
var version=0;
for (var i=0; i < this.bmpVersion.length$(); i++) if (Character.isDigit$C(this.bmpVersion.charAt$I(i))) version=(this.bmpVersion.charCodeAt$I(i)) - 48;

if (version >= 4) {
node=p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [root, "Mask", null]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [node, "Red",  new Integer(this.redMask)]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [node, "Green",  new Integer(this.greenMask)]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [node, "Blue",  new Integer(this.blueMask)]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [node, "Alpha",  new Integer(this.alphaMask)]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [root, "ColorSpaceType",  new Integer(this.colorSpace)]);
node=p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [root, "CIEXYZEndpoints", null]);
p$1.addXYZPoints$javax_imageio_metadata_IIOMetadataNode$S$D$D$D.apply(this, [node, "Red", this.redX, this.redY, this.redZ]);
p$1.addXYZPoints$javax_imageio_metadata_IIOMetadataNode$S$D$D$D.apply(this, [node, "Green", this.greenX, this.greenY, this.greenZ]);
p$1.addXYZPoints$javax_imageio_metadata_IIOMetadataNode$S$D$D$D.apply(this, [node, "Blue", this.blueX, this.blueY, this.blueZ]);
node=p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [root, "Gamma", null]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [node, "Red",  new Integer(this.gammaRed)]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [node, "Green",  new Integer(this.gammaGreen)]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [node, "Blue",  new Integer(this.gammaBlue)]);
node=p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [root, "Intent",  new Integer(this.intent)]);
}if ((this.palette != null ) && (this.paletteSize > 0) ) {
node=p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [root, "Palette", null]);
var isVersion2=this.bmpVersion != null  && this.bmpVersion.equals$O("BMP v. 2.x") ;
for (var i=0, j=0; i < this.paletteSize; i++) {
var entry=p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [node, "PaletteEntry", null]);
this.blue=this.palette[j++] & 255;
this.green=this.palette[j++] & 255;
this.red=this.palette[j++] & 255;
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [entry, "Red",  new Integer(this.red)]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [entry, "Green",  new Integer(this.green)]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [entry, "Blue",  new Integer(this.blue)]);
if (!isVersion2) j++;
}
}return root;
}, p$1);

Clazz.newMeth(C$, 'getStandardChromaNode$', function () {
var node=Clazz.new_($I$(3,1).c$$S,["Chroma"]);
var subNode=Clazz.new_($I$(3,1).c$$S,["ColorSpaceType"]);
var colorSpaceType;
if (((this.palette != null ) && (this.paletteSize > 0) ) || (this.redMask != 0 || this.greenMask != 0  || this.blueMask != 0 ) || this.bitsPerPixel > 8  ) {
colorSpaceType="RGB";
} else {
colorSpaceType="GRAY";
}subNode.setAttribute$S$S("name", colorSpaceType);
node.appendChild$org_w3c_dom_Node(subNode);
subNode=Clazz.new_($I$(3,1).c$$S,["NumChannels"]);
var numChannels;
if (((this.palette != null ) && (this.paletteSize > 0) ) || (this.redMask != 0 || this.greenMask != 0  || this.blueMask != 0 ) || this.bitsPerPixel > 8  ) {
if (this.alphaMask != 0) {
numChannels="4";
} else {
numChannels="3";
}} else {
numChannels="1";
}subNode.setAttribute$S$S("value", numChannels);
node.appendChild$org_w3c_dom_Node(subNode);
if (this.gammaRed != 0 && this.gammaGreen != 0  && this.gammaBlue != 0 ) {
subNode=Clazz.new_($I$(3,1).c$$S,["Gamma"]);
var gamma= new Double((this.gammaRed + this.gammaGreen + this.gammaBlue ) / 3.0);
subNode.setAttribute$S$S("value", gamma.toString());
node.appendChild$org_w3c_dom_Node(subNode);
}if (numChannels.equals$O("1") && (this.palette == null  || this.paletteSize == 0 ) ) {
subNode=Clazz.new_($I$(3,1).c$$S,["BlackIsZero"]);
subNode.setAttribute$S$S("value", "TRUE");
node.appendChild$org_w3c_dom_Node(subNode);
}if ((this.palette != null ) && (this.paletteSize > 0) ) {
subNode=Clazz.new_($I$(3,1).c$$S,["Palette"]);
var isVersion2=this.bmpVersion != null  && this.bmpVersion.equals$O("BMP v. 2.x") ;
for (var i=0, j=0; i < this.paletteSize; i++) {
var subNode1=Clazz.new_($I$(3,1).c$$S,["PaletteEntry"]);
subNode1.setAttribute$S$S("index", "" + i);
subNode1.setAttribute$S$S("blue", "" + (this.palette[j++] & 255));
subNode1.setAttribute$S$S("green", "" + (this.palette[j++] & 255));
subNode1.setAttribute$S$S("red", "" + (this.palette[j++] & 255));
if (!isVersion2) j++;
subNode.appendChild$org_w3c_dom_Node(subNode1);
}
node.appendChild$org_w3c_dom_Node(subNode);
}return node;
});

Clazz.newMeth(C$, 'getStandardCompressionNode$', function () {
var node=Clazz.new_($I$(3,1).c$$S,["Compression"]);
var subNode=Clazz.new_($I$(3,1).c$$S,["CompressionTypeName"]);
subNode.setAttribute$S$S("value", $I$(4).compressionTypeNames[this.compression]);
node.appendChild$org_w3c_dom_Node(subNode);
subNode=Clazz.new_($I$(3,1).c$$S,["Lossless"]);
subNode.setAttribute$S$S("value", this.compression == 4 ? "FALSE" : "TRUE");
node.appendChild$org_w3c_dom_Node(subNode);
return node;
});

Clazz.newMeth(C$, 'getStandardDataNode$', function () {
var node=Clazz.new_($I$(3,1).c$$S,["Data"]);
var sampleFormat=(this.palette != null ) && (this.paletteSize > 0)  ? "Index" : "UnsignedIntegral";
var subNode=Clazz.new_($I$(3,1).c$$S,["SampleFormat"]);
subNode.setAttribute$S$S("value", sampleFormat);
node.appendChild$org_w3c_dom_Node(subNode);
var bits="";
if (this.redMask != 0 || this.greenMask != 0  || this.blueMask != 0 ) {
bits=p$1.countBits$I.apply(this, [this.redMask]) + " " + p$1.countBits$I.apply(this, [this.greenMask]) + " " + p$1.countBits$I.apply(this, [this.blueMask]) ;
if (this.alphaMask != 0) {
bits += " " + p$1.countBits$I.apply(this, [this.alphaMask]);
}} else if (this.palette != null  && this.paletteSize > 0 ) {
for (var i=1; i <= 3; i++) {
bits += this.bitsPerPixel;
if (i != 3) {
bits += " ";
}}
} else {
if (this.bitsPerPixel == 1) {
bits="1";
} else if (this.bitsPerPixel == 4) {
bits="4";
} else if (this.bitsPerPixel == 8) {
bits="8";
} else if (this.bitsPerPixel == 16) {
bits="5 6 5";
} else if (this.bitsPerPixel == 24) {
bits="8 8 8";
} else if (this.bitsPerPixel == 32) {
bits="8 8 8 8";
}}if (!bits.equals$O("")) {
subNode=Clazz.new_($I$(3,1).c$$S,["BitsPerSample"]);
subNode.setAttribute$S$S("value", bits);
node.appendChild$org_w3c_dom_Node(subNode);
}return node;
});

Clazz.newMeth(C$, 'getStandardDimensionNode$', function () {
if (this.yPixelsPerMeter > 0 && this.xPixelsPerMeter > 0 ) {
var node=Clazz.new_($I$(3,1).c$$S,["Dimension"]);
var ratio=this.yPixelsPerMeter / this.xPixelsPerMeter;
var subNode=Clazz.new_($I$(3,1).c$$S,["PixelAspectRatio"]);
subNode.setAttribute$S$S("value", "" + new Float(ratio).toString());
node.appendChild$org_w3c_dom_Node(subNode);
subNode=Clazz.new_($I$(3,1).c$$S,["HorizontalPixelSize"]);
subNode.setAttribute$S$S("value", "" + (new Float(1000.0 / this.xPixelsPerMeter).toString()));
node.appendChild$org_w3c_dom_Node(subNode);
subNode=Clazz.new_($I$(3,1).c$$S,["VerticalPixelSize"]);
subNode.setAttribute$S$S("value", "" + (new Float(1000.0 / this.yPixelsPerMeter).toString()));
node.appendChild$org_w3c_dom_Node(subNode);
subNode=Clazz.new_($I$(3,1).c$$S,["HorizontalPhysicalPixelSpacing"]);
subNode.setAttribute$S$S("value", "" + (new Float(1000.0 / this.xPixelsPerMeter).toString()));
node.appendChild$org_w3c_dom_Node(subNode);
subNode=Clazz.new_($I$(3,1).c$$S,["VerticalPhysicalPixelSpacing"]);
subNode.setAttribute$S$S("value", "" + (new Float(1000.0 / this.yPixelsPerMeter).toString()));
node.appendChild$org_w3c_dom_Node(subNode);
return node;
}return null;
});

Clazz.newMeth(C$, 'getStandardDocumentNode$', function () {
if (this.bmpVersion != null ) {
var node=Clazz.new_($I$(3,1).c$$S,["Document"]);
var subNode=Clazz.new_($I$(3,1).c$$S,["FormatVersion"]);
subNode.setAttribute$S$S("value", this.bmpVersion);
node.appendChild$org_w3c_dom_Node(subNode);
return node;
}return null;
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

Clazz.newMeth(C$, 'getStandardTransparencyNode$', function () {
var node=Clazz.new_($I$(3,1).c$$S,["Transparency"]);
var subNode=Clazz.new_($I$(3,1).c$$S,["Alpha"]);
var alpha;
if (this.alphaMask != 0) {
alpha="nonpremultiplied";
} else {
alpha="none";
}subNode.setAttribute$S$S("value", alpha);
node.appendChild$org_w3c_dom_Node(subNode);
return node;
});

Clazz.newMeth(C$, 'fatal$org_w3c_dom_Node$S', function (node, reason) {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,[reason, node]);
}, p$1);

Clazz.newMeth(C$, 'getIntAttribute$org_w3c_dom_Node$S$I$Z', function (node, name, defaultValue, required) {
var value=p$1.getAttribute$org_w3c_dom_Node$S$S$Z.apply(this, [node, name, null, required]);
if (value == null ) {
return defaultValue;
}return Integer.parseInt$S(value);
}, p$1);

Clazz.newMeth(C$, 'getDoubleAttribute$org_w3c_dom_Node$S$D$Z', function (node, name, defaultValue, required) {
var value=p$1.getAttribute$org_w3c_dom_Node$S$S$Z.apply(this, [node, name, null, required]);
if (value == null ) {
return defaultValue;
}return Double.parseDouble$S(value);
}, p$1);

Clazz.newMeth(C$, 'getIntAttribute$org_w3c_dom_Node$S', function (node, name) {
return p$1.getIntAttribute$org_w3c_dom_Node$S$I$Z.apply(this, [node, name, -1, true]);
}, p$1);

Clazz.newMeth(C$, 'getDoubleAttribute$org_w3c_dom_Node$S', function (node, name) {
return p$1.getDoubleAttribute$org_w3c_dom_Node$S$D$Z.apply(this, [node, name, -1.0, true]);
}, p$1);

Clazz.newMeth(C$, 'getAttribute$org_w3c_dom_Node$S$S$Z', function (node, name, defaultValue, required) {
var attr=node.getAttributes$().getNamedItem$S(name);
if (attr == null ) {
if (!required) {
return defaultValue;
} else {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Required attribute " + name + " not present!" ]);
}}return attr.getNodeValue$();
}, p$1);

Clazz.newMeth(C$, 'getAttribute$org_w3c_dom_Node$S', function (node, name) {
return p$1.getAttribute$org_w3c_dom_Node$S$S$Z.apply(this, [node, name, null, true]);
}, p$1);

Clazz.newMeth(C$, 'initialize$java_awt_image_ColorModel$java_awt_image_SampleModel$javax_imageio_ImageWriteParam', function (cm, sm, param) {
if (param != null ) {
this.bmpVersion="BMP v. 3.x";
if (param.getCompressionMode$() == 2) {
var compressionType=param.getCompressionType$();
this.compression=$I$(5).getCompressionType$S(compressionType);
}} else {
this.bmpVersion="BMP v. 3.x";
this.compression=$I$(5).getPreferredCompressionType$java_awt_image_ColorModel$java_awt_image_SampleModel(cm, sm);
}this.width=sm.getWidth$();
this.height=sm.getHeight$();
this.bitsPerPixel=($s$[0] = cm.getPixelSize$(), $s$[0]);
if (Clazz.instanceOf(cm, "java.awt.image.DirectColorModel")) {
var dcm=cm;
this.redMask=dcm.getRedMask$();
this.greenMask=dcm.getGreenMask$();
this.blueMask=dcm.getBlueMask$();
this.alphaMask=dcm.getAlphaMask$();
}if (Clazz.instanceOf(cm, "java.awt.image.IndexColorModel")) {
var icm=cm;
this.paletteSize=icm.getMapSize$();
var r=Clazz.array(Byte.TYPE, [this.paletteSize]);
var g=Clazz.array(Byte.TYPE, [this.paletteSize]);
var b=Clazz.array(Byte.TYPE, [this.paletteSize]);
icm.getReds$BA(r);
icm.getGreens$BA(g);
icm.getBlues$BA(b);
var isVersion2=this.bmpVersion != null  && this.bmpVersion.equals$O("BMP v. 2.x") ;
this.palette=Clazz.array(Byte.TYPE, [(isVersion2 ? 3 : 4) * this.paletteSize]);
for (var i=0, j=0; i < this.paletteSize; i++) {
this.palette[j++]=(b[i]|0);
this.palette[j++]=(g[i]|0);
this.palette[j++]=(r[i]|0);
if (!isVersion2) j++;
}
}});

Clazz.newMeth(C$, 'mergeTree$S$org_w3c_dom_Node', function (formatName, root) {
if (formatName.equals$O("com_sun_media_imageio_plugins_bmp_image_1.0")) {
if (root == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["root == null!"]);
}p$1.mergeNativeTree$org_w3c_dom_Node.apply(this, [root]);
} else if (formatName.equals$O("javax_imageio_1.0")) {
if (root == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["root == null!"]);
}p$1.mergeStandardTree$org_w3c_dom_Node.apply(this, [root]);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not a recognized format!"]);
}});

Clazz.newMeth(C$, 'mergeNativeTree$org_w3c_dom_Node', function (root) {
var node=root;
if (!node.getNodeName$().equals$O("com_sun_media_imageio_plugins_bmp_image_1.0")) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Root must be com_sun_media_imageio_plugins_bmp_image_1.0"]);
}var r=null;
var g=null;
var b=null;
var maxIndex=-1;
node=node.getFirstChild$();
while (node != null ){
var name=node.getNodeName$();
if (name.equals$O("BMPVersion")) {
var value=p$1.getStringValue$org_w3c_dom_Node.apply(this, [node]);
if (value != null ) this.bmpVersion=value;
} else if (name.equals$O("Width")) {
var value=p$1.getIntegerValue$org_w3c_dom_Node.apply(this, [node]);
if (value != null ) this.width=value.intValue$();
} else if (name.equals$O("Height")) {
var value=p$1.getIntegerValue$org_w3c_dom_Node.apply(this, [node]);
if (value != null ) this.height=value.intValue$();
} else if (name.equals$O("BitsPerPixel")) {
var value=p$1.getShortValue$org_w3c_dom_Node.apply(this, [node]);
if (value != null ) this.bitsPerPixel=value.shortValue$();
} else if (name.equals$O("Compression")) {
var value=p$1.getIntegerValue$org_w3c_dom_Node.apply(this, [node]);
if (value != null ) this.compression=value.intValue$();
} else if (name.equals$O("ImageSize")) {
var value=p$1.getIntegerValue$org_w3c_dom_Node.apply(this, [node]);
if (value != null ) this.imageSize=value.intValue$();
} else if (name.equals$O("PixelsPerMeter")) {
var subNode=node.getFirstChild$();
while (subNode != null ){
var subName=subNode.getNodeName$();
if (subName.equals$O("X")) {
var value=p$1.getIntegerValue$org_w3c_dom_Node.apply(this, [subNode]);
if (value != null ) this.xPixelsPerMeter=value.intValue$();
} else if (subName.equals$O("Y")) {
var value=p$1.getIntegerValue$org_w3c_dom_Node.apply(this, [subNode]);
if (value != null ) this.yPixelsPerMeter=value.intValue$();
}subNode=subNode.getNextSibling$();
}
} else if (name.equals$O("ColorsUsed")) {
var value=p$1.getIntegerValue$org_w3c_dom_Node.apply(this, [node]);
if (value != null ) this.colorsUsed=value.intValue$();
} else if (name.equals$O("ColorsImportant")) {
var value=p$1.getIntegerValue$org_w3c_dom_Node.apply(this, [node]);
if (value != null ) this.colorsImportant=value.intValue$();
} else if (name.equals$O("Mask")) {
var subNode=node.getFirstChild$();
while (subNode != null ){
var subName=subNode.getNodeName$();
if (subName.equals$O("Red")) {
var value=p$1.getIntegerValue$org_w3c_dom_Node.apply(this, [subNode]);
if (value != null ) this.redMask=value.intValue$();
} else if (subName.equals$O("Green")) {
var value=p$1.getIntegerValue$org_w3c_dom_Node.apply(this, [subNode]);
if (value != null ) this.greenMask=value.intValue$();
} else if (subName.equals$O("Blue")) {
var value=p$1.getIntegerValue$org_w3c_dom_Node.apply(this, [subNode]);
if (value != null ) this.blueMask=value.intValue$();
} else if (subName.equals$O("Alpha")) {
var value=p$1.getIntegerValue$org_w3c_dom_Node.apply(this, [subNode]);
if (value != null ) this.alphaMask=value.intValue$();
}subNode=subNode.getNextSibling$();
}
} else if (name.equals$O("ColorSpace")) {
var value=p$1.getIntegerValue$org_w3c_dom_Node.apply(this, [node]);
if (value != null ) this.colorSpace=value.intValue$();
} else if (name.equals$O("CIEXYZEndpoints")) {
var subNode=node.getFirstChild$();
while (subNode != null ){
var subName=subNode.getNodeName$();
if (subName.equals$O("Red")) {
var subNode1=subNode.getFirstChild$();
while (subNode1 != null ){
var subName1=subNode1.getNodeName$();
if (subName1.equals$O("X")) {
var value=p$1.getDoubleValue$org_w3c_dom_Node.apply(this, [subNode1]);
if (value != null ) this.redX=value.doubleValue$();
} else if (subName1.equals$O("Y")) {
var value=p$1.getDoubleValue$org_w3c_dom_Node.apply(this, [subNode1]);
if (value != null ) this.redY=value.doubleValue$();
} else if (subName1.equals$O("Z")) {
var value=p$1.getDoubleValue$org_w3c_dom_Node.apply(this, [subNode1]);
if (value != null ) this.redZ=value.doubleValue$();
}subNode1=subNode1.getNextSibling$();
}
} else if (subName.equals$O("Green")) {
var subNode1=subNode.getFirstChild$();
while (subNode1 != null ){
var subName1=subNode1.getNodeName$();
if (subName1.equals$O("X")) {
var value=p$1.getDoubleValue$org_w3c_dom_Node.apply(this, [subNode1]);
if (value != null ) this.greenX=value.doubleValue$();
} else if (subName1.equals$O("Y")) {
var value=p$1.getDoubleValue$org_w3c_dom_Node.apply(this, [subNode1]);
if (value != null ) this.greenY=value.doubleValue$();
} else if (subName1.equals$O("Z")) {
var value=p$1.getDoubleValue$org_w3c_dom_Node.apply(this, [subNode1]);
if (value != null ) this.greenZ=value.doubleValue$();
}subNode1=subNode1.getNextSibling$();
}
} else if (subName.equals$O("Blue")) {
var subNode1=subNode.getFirstChild$();
while (subNode1 != null ){
var subName1=subNode1.getNodeName$();
if (subName1.equals$O("X")) {
var value=p$1.getDoubleValue$org_w3c_dom_Node.apply(this, [subNode1]);
if (value != null ) this.blueX=value.doubleValue$();
} else if (subName1.equals$O("Y")) {
var value=p$1.getDoubleValue$org_w3c_dom_Node.apply(this, [subNode1]);
if (value != null ) this.blueY=value.doubleValue$();
} else if (subName1.equals$O("Z")) {
var value=p$1.getDoubleValue$org_w3c_dom_Node.apply(this, [subNode1]);
if (value != null ) this.blueZ=value.doubleValue$();
}subNode1=subNode1.getNextSibling$();
}
}subNode=subNode.getNextSibling$();
}
} else if (name.equals$O("Gamma")) {
var subNode=node.getFirstChild$();
while (subNode != null ){
var subName=subNode.getNodeName$();
if (subName.equals$O("Red")) {
var value=p$1.getIntegerValue$org_w3c_dom_Node.apply(this, [subNode]);
if (value != null ) this.gammaRed=value.intValue$();
} else if (subName.equals$O("Green")) {
var value=p$1.getIntegerValue$org_w3c_dom_Node.apply(this, [subNode]);
if (value != null ) this.gammaGreen=value.intValue$();
} else if (subName.equals$O("Blue")) {
var value=p$1.getIntegerValue$org_w3c_dom_Node.apply(this, [subNode]);
if (value != null ) this.gammaBlue=value.intValue$();
}subNode=subNode.getNextSibling$();
}
} else if (name.equals$O("Intent")) {
var value=p$1.getIntegerValue$org_w3c_dom_Node.apply(this, [node]);
if (value != null ) this.intent=value.intValue$();
} else if (name.equals$O("Palette")) {
this.paletteSize=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [node, "sizeOfPalette"]);
r=Clazz.array(Byte.TYPE, [this.paletteSize]);
g=Clazz.array(Byte.TYPE, [this.paletteSize]);
b=Clazz.array(Byte.TYPE, [this.paletteSize]);
maxIndex=-1;
var paletteEntry=node.getFirstChild$();
if (paletteEntry == null ) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Palette has no entries!"]);
}var numPaletteEntries=0;
while (paletteEntry != null ){
if (!paletteEntry.getNodeName$().equals$O("PaletteEntry")) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Only a PaletteEntry may be a child of a Palette!"]);
}var index=-1;
var subNode=paletteEntry.getFirstChild$();
while (subNode != null ){
var subName=subNode.getNodeName$();
if (subName.equals$O("Index")) {
var value=p$1.getIntegerValue$org_w3c_dom_Node.apply(this, [subNode]);
if (value != null ) index=value.intValue$();
if (index < 0 || index > this.paletteSize - 1 ) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Bad value for PaletteEntry attribute index!"]);
}} else if (subName.equals$O("Red")) {
var value=p$1.getIntegerValue$org_w3c_dom_Node.apply(this, [subNode]);
if (value != null ) this.red=value.intValue$();
} else if (subName.equals$O("Green")) {
var value=p$1.getIntegerValue$org_w3c_dom_Node.apply(this, [subNode]);
if (value != null ) this.green=value.intValue$();
} else if (subName.equals$O("Blue")) {
var value=p$1.getIntegerValue$org_w3c_dom_Node.apply(this, [subNode]);
if (value != null ) this.blue=value.intValue$();
}subNode=subNode.getNextSibling$();
}
if (index == -1) {
index=numPaletteEntries;
}if (index > maxIndex) {
maxIndex=index;
}r[index]=((this.red|0)|0);
g[index]=((this.green|0)|0);
b[index]=((this.blue|0)|0);
numPaletteEntries++;
paletteEntry=paletteEntry.getNextSibling$();
}
} else if (name.equals$O("CommentExtensions")) {
var commentExtension=node.getFirstChild$();
if (commentExtension == null ) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "CommentExtensions has no entries!"]);
}if (this.comments == null ) {
this.comments=Clazz.new_($I$(6,1));
}while (commentExtension != null ){
if (!commentExtension.getNodeName$().equals$O("CommentExtension")) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Only a CommentExtension may be a child of a CommentExtensions!"]);
}this.comments.add$TE(p$1.getAttribute$org_w3c_dom_Node$S.apply(this, [commentExtension, "value"]));
commentExtension=commentExtension.getNextSibling$();
}
} else {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Unknown child of root node!"]);
}node=node.getNextSibling$();
}
if (r != null  && g != null   && b != null  ) {
var isVersion2=this.bmpVersion != null  && this.bmpVersion.equals$O("BMP v. 2.x") ;
var numEntries=maxIndex + 1;
this.palette=Clazz.array(Byte.TYPE, [(isVersion2 ? 3 : 4) * numEntries]);
for (var i=0, j=0; i < numEntries; i++) {
this.palette[j++]=(b[i]|0);
this.palette[j++]=(g[i]|0);
this.palette[j++]=(r[i]|0);
if (!isVersion2) j++;
}
}}, p$1);

Clazz.newMeth(C$, 'mergeStandardTree$org_w3c_dom_Node', function (root) {
var node=root;
if (!node.getNodeName$().equals$O("javax_imageio_1.0")) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Root must be javax_imageio_1.0"]);
}var colorSpaceType=null;
var numChannels=0;
var bitsPerSample=null;
var hasAlpha=false;
var r=null;
var g=null;
var b=null;
var maxIndex=-1;
node=node.getFirstChild$();
while (node != null ){
var name=node.getNodeName$();
if (name.equals$O("Chroma")) {
var child=node.getFirstChild$();
while (child != null ){
var childName=child.getNodeName$();
if (childName.equals$O("ColorSpaceType")) {
colorSpaceType=p$1.getAttribute$org_w3c_dom_Node$S.apply(this, [child, "name"]);
} else if (childName.equals$O("NumChannels")) {
numChannels=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [child, "value"]);
} else if (childName.equals$O("Gamma")) {
this.gammaRed=this.gammaGreen=this.gammaBlue=((p$1.getDoubleAttribute$org_w3c_dom_Node$S.apply(this, [child, "value"]) + 0.5)|0);
} else if (childName.equals$O("Palette")) {
r=Clazz.array(Byte.TYPE, [256]);
g=Clazz.array(Byte.TYPE, [256]);
b=Clazz.array(Byte.TYPE, [256]);
maxIndex=-1;
var paletteEntry=child.getFirstChild$();
if (paletteEntry == null ) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Palette has no entries!"]);
}while (paletteEntry != null ){
if (!paletteEntry.getNodeName$().equals$O("PaletteEntry")) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Only a PaletteEntry may be a child of a Palette!"]);
}var index=p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [paletteEntry, "index"]);
if (index < 0 || index > 255 ) {
p$1.fatal$org_w3c_dom_Node$S.apply(this, [node, "Bad value for PaletteEntry attribute index!"]);
}if (index > maxIndex) {
maxIndex=index;
}r[index]=((p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [paletteEntry, "red"])|0)|0);
g[index]=((p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [paletteEntry, "green"])|0)|0);
b[index]=((p$1.getIntAttribute$org_w3c_dom_Node$S.apply(this, [paletteEntry, "blue"])|0)|0);
paletteEntry=paletteEntry.getNextSibling$();
}
}child=child.getNextSibling$();
}
} else if (name.equals$O("Compression")) {
var child=node.getFirstChild$();
while (child != null ){
var childName=child.getNodeName$();
if (childName.equals$O("CompressionTypeName")) {
var compressionName=p$1.getAttribute$org_w3c_dom_Node$S.apply(this, [child, "value"]);
this.compression=$I$(5).getCompressionType$S(compressionName);
}child=child.getNextSibling$();
}
} else if (name.equals$O("Data")) {
var child=node.getFirstChild$();
while (child != null ){
var childName=child.getNodeName$();
if (childName.equals$O("BitsPerSample")) {
var bps=Clazz.new_($I$(6,1).c$$I,[4]);
var s=p$1.getAttribute$org_w3c_dom_Node$S.apply(this, [child, "value"]);
var t=Clazz.new_($I$(7,1).c$$S,[s]);
while (t.hasMoreTokens$()){
bps.add$TE(Integer.valueOf$S(t.nextToken$()));
}
bitsPerSample=Clazz.array(Integer.TYPE, [bps.size$()]);
for (var i=0; i < bitsPerSample.length; i++) {
bitsPerSample[i]=(bps.get$I(i)).intValue$();
}
break;
}child=child.getNextSibling$();
}
} else if (name.equals$O("Dimension")) {
var gotWidth=false;
var gotHeight=false;
var gotAspectRatio=false;
var gotSpaceX=false;
var gotSpaceY=false;
var width=-1.0;
var height=-1.0;
var aspectRatio=-1.0;
var spaceX=-1.0;
var spaceY=-1.0;
var child=node.getFirstChild$();
while (child != null ){
var childName=child.getNodeName$();
if (childName.equals$O("PixelAspectRatio")) {
aspectRatio=p$1.getDoubleAttribute$org_w3c_dom_Node$S.apply(this, [child, "value"]);
gotAspectRatio=true;
} else if (childName.equals$O("HorizontalPixelSize")) {
width=p$1.getDoubleAttribute$org_w3c_dom_Node$S.apply(this, [child, "value"]);
gotWidth=true;
} else if (childName.equals$O("VerticalPixelSize")) {
height=p$1.getDoubleAttribute$org_w3c_dom_Node$S.apply(this, [child, "value"]);
gotHeight=true;
} else if (childName.equals$O("HorizontalPhysicalPixelSpacing")) {
spaceX=p$1.getDoubleAttribute$org_w3c_dom_Node$S.apply(this, [child, "value"]);
gotSpaceX=true;
} else if (childName.equals$O("VerticalPhysicalPixelSpacing")) {
spaceY=p$1.getDoubleAttribute$org_w3c_dom_Node$S.apply(this, [child, "value"]);
gotSpaceY=true;
}child=child.getNextSibling$();
}
if (!(gotWidth || gotHeight ) && (gotSpaceX || gotSpaceY ) ) {
width=spaceX;
gotWidth=gotSpaceX;
height=spaceY;
gotHeight=gotSpaceY;
}if (gotWidth && gotHeight ) {
this.xPixelsPerMeter=((1000.0 / width + 0.5)|0);
this.yPixelsPerMeter=((1000.0 / height + 0.5)|0);
} else if (gotAspectRatio && aspectRatio != 0.0  ) {
if (gotWidth) {
this.xPixelsPerMeter=((1000.0 / width + 0.5)|0);
this.yPixelsPerMeter=((aspectRatio * (1000.0 / width) + 0.5)|0);
} else if (gotHeight) {
this.xPixelsPerMeter=((1000.0 / height / aspectRatio  + 0.5)|0);
this.yPixelsPerMeter=((1000.0 / height + 0.5)|0);
}}} else if (name.equals$O("Document")) {
var child=node.getFirstChild$();
while (child != null ){
var childName=child.getNodeName$();
if (childName.equals$O("FormatVersion")) {
this.bmpVersion=p$1.getAttribute$org_w3c_dom_Node$S.apply(this, [child, "value"]);
break;
}child=child.getNextSibling$();
}
} else if (name.equals$O("Text")) {
var child=node.getFirstChild$();
while (child != null ){
var childName=child.getNodeName$();
if (childName.equals$O("TextEntry")) {
if (this.comments == null ) {
this.comments=Clazz.new_($I$(6,1));
}this.comments.add$TE(p$1.getAttribute$org_w3c_dom_Node$S.apply(this, [child, "value"]));
}child=child.getNextSibling$();
}
} else if (name.equals$O("Transparency")) {
var child=node.getFirstChild$();
while (child != null ){
var childName=child.getNodeName$();
if (childName.equals$O("Alpha")) {
hasAlpha=!p$1.getAttribute$org_w3c_dom_Node$S.apply(this, [child, "value"]).equals$O("none");
break;
}child=child.getNextSibling$();
}
} else {
}node=node.getNextSibling$();
}
if (bitsPerSample != null ) {
if (this.palette != null  && this.paletteSize > 0 ) {
this.bitsPerPixel=($s$[0] = bitsPerSample[0], $s$[0]);
} else {
this.bitsPerPixel=($s$[0] = 0, $s$[0]);
for (var i=0; i < bitsPerSample.length; i++) {
this.bitsPerPixel=($s$[0] = this.bitsPerPixel+(bitsPerSample[i]), $s$[0]);
}
}} else if (this.palette != null ) {
this.bitsPerPixel=($s$[0] = 8, $s$[0]);
} else if (numChannels == 1) {
this.bitsPerPixel=($s$[0] = 8, $s$[0]);
} else if (numChannels == 3) {
this.bitsPerPixel=($s$[0] = 24, $s$[0]);
} else if (numChannels == 4) {
this.bitsPerPixel=($s$[0] = 32, $s$[0]);
} else if (colorSpaceType.equals$O("GRAY")) {
this.bitsPerPixel=($s$[0] = 8, $s$[0]);
} else if (colorSpaceType.equals$O("RGB")) {
this.bitsPerPixel=($s$[0] = (hasAlpha ? 32 : 24), $s$[0]);
}if ((bitsPerSample != null  && bitsPerSample.length == 4 ) || this.bitsPerPixel >= 24 ) {
this.redMask=16711680;
this.greenMask=65280;
this.blueMask=255;
}if ((bitsPerSample != null  && bitsPerSample.length == 4 ) || this.bitsPerPixel > 24 ) {
this.alphaMask=-16777216;
}if (r != null  && g != null   && b != null  ) {
var isVersion2=this.bmpVersion != null  && this.bmpVersion.equals$O("BMP v. 2.x") ;
this.paletteSize=maxIndex + 1;
this.palette=Clazz.array(Byte.TYPE, [(isVersion2 ? 3 : 4) * this.paletteSize]);
for (var i=0, j=0; i < this.paletteSize; i++) {
this.palette[j++]=(b[i]|0);
this.palette[j++]=(g[i]|0);
this.palette[j++]=(r[i]|0);
if (!isVersion2) j++;
}
}}, p$1);

Clazz.newMeth(C$, 'reset$', function () {
this.bmpVersion=null;
this.width=0;
this.height=0;
this.bitsPerPixel=($s$[0] = 0, $s$[0]);
this.compression=0;
this.imageSize=0;
this.xPixelsPerMeter=0;
this.yPixelsPerMeter=0;
this.colorsUsed=0;
this.colorsImportant=0;
this.redMask=0;
this.greenMask=0;
this.blueMask=0;
this.alphaMask=0;
this.colorSpace=0;
this.redX=0;
this.redY=0;
this.redZ=0;
this.greenX=0;
this.greenY=0;
this.greenZ=0;
this.blueX=0;
this.blueY=0;
this.blueZ=0;
this.gammaRed=0;
this.gammaGreen=0;
this.gammaBlue=0;
this.intent=0;
this.palette=null;
this.paletteSize=0;
this.red=0;
this.green=0;
this.blue=0;
this.comments=null;
});

Clazz.newMeth(C$, 'countBits$I', function (num) {
var count=0;
while (num != 0){
if ((num & 1) == 1) count++;
num>>>=1;
}
return count == 0 ? "0" : "" + count;
}, p$1);

Clazz.newMeth(C$, 'addXYZPoints$javax_imageio_metadata_IIOMetadataNode$S$D$D$D', function (root, name, x, y, z) {
var node=p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [root, name, null]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [node, "X",  new Double(x)]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [node, "Y",  new Double(y)]);
p$1.addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O.apply(this, [node, "Z",  new Double(z)]);
}, p$1);

Clazz.newMeth(C$, 'addChildNode$javax_imageio_metadata_IIOMetadataNode$S$O', function (root, name, object) {
var child=Clazz.new_($I$(3,1).c$$S,[name]);
if (object != null ) {
child.setUserObject$O(object);
child.setNodeValue$S($I$(8).convertObjectToString$O(object));
}root.appendChild$org_w3c_dom_Node(child);
return child;
}, p$1);

Clazz.newMeth(C$, 'getObjectValue$org_w3c_dom_Node', function (node) {
var tmp=node.getNodeValue$();
if (tmp == null  && Clazz.instanceOf(node, "javax.imageio.metadata.IIOMetadataNode") ) {
tmp=(node).getUserObject$();
}return tmp;
}, p$1);

Clazz.newMeth(C$, 'getStringValue$org_w3c_dom_Node', function (node) {
var tmp=p$1.getObjectValue$org_w3c_dom_Node.apply(this, [node]);
return Clazz.instanceOf(tmp, "java.lang.String") ? tmp : null;
}, p$1);

Clazz.newMeth(C$, 'getByteValue$org_w3c_dom_Node', function (node) {
var tmp=p$1.getObjectValue$org_w3c_dom_Node.apply(this, [node]);
var value=null;
if (Clazz.instanceOf(tmp, "java.lang.String")) {
value=Byte.valueOf$S(tmp);
} else if (Clazz.instanceOf(tmp, "java.lang.Byte")) {
value=tmp;
}return value;
}, p$1);

Clazz.newMeth(C$, 'getShortValue$org_w3c_dom_Node', function (node) {
var tmp=p$1.getObjectValue$org_w3c_dom_Node.apply(this, [node]);
var value=null;
if (Clazz.instanceOf(tmp, "java.lang.String")) {
value=Short.valueOf$S(tmp);
} else if (Clazz.instanceOf(tmp, "java.lang.Short")) {
value=tmp;
}return value;
}, p$1);

Clazz.newMeth(C$, 'getIntegerValue$org_w3c_dom_Node', function (node) {
var tmp=p$1.getObjectValue$org_w3c_dom_Node.apply(this, [node]);
var value=null;
if (Clazz.instanceOf(tmp, "java.lang.String")) {
value=Integer.valueOf$S(tmp);
} else if (Clazz.instanceOf(tmp, "java.lang.Integer")) {
value=tmp;
} else if (Clazz.instanceOf(tmp, "java.lang.Byte")) {
value= new Integer((tmp).byteValue$() & 255);
}return value;
}, p$1);

Clazz.newMeth(C$, 'getDoubleValue$org_w3c_dom_Node', function (node) {
var tmp=p$1.getObjectValue$org_w3c_dom_Node.apply(this, [node]);
var value=null;
if (Clazz.instanceOf(tmp, "java.lang.String")) {
value=Double.valueOf$S(tmp);
} else if (Clazz.instanceOf(tmp, "java.lang.Double")) {
value=tmp;
}return value;
}, p$1);
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:18 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
