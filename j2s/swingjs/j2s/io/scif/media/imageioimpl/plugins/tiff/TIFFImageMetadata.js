(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),p$1={},I$=[[0,'io.scif.media.imageioimpl.plugins.tiff.TIFFIFD','io.scif.media.imageio.plugins.tiff.TIFFField','javax.imageio.metadata.IIOMetadataNode','io.scif.media.imageioimpl.plugins.tiff.TIFFImageWriter','StringBuffer','java.util.StringTokenizer','java.util.ArrayList','java.util.HashMap','java.util.Arrays','io.scif.media.imageio.plugins.tiff.TIFFTag']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFImageMetadata", null, 'javax.imageio.metadata.IIOMetadata');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.colorSpaceNames=Clazz.array(String, -1, ["GRAY", "GRAY", "RGB", "RGB", "GRAY", "CMYK", "YCbCr", "Lab", "Lab"]);
C$.orientationNames=Clazz.array(String, -1, [null, "Normal", "FlipH", "Rotate180", "FlipV", "FlipHRotate90", "Rotate270", "FlipVRotate90", "Rotate90"]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['tagSets','java.util.List','rootIFD','io.scif.media.imageioimpl.plugins.tiff.TIFFIFD']]
,['O',['colorSpaceNames','String[]','+orientationNames']]]

Clazz.newMeth(C$, 'c$$java_util_List', function (tagSets) {
;C$.superclazz.c$$Z$S$S$SA$SA.apply(this,[true, "com_sun_media_imageio_plugins_tiff_image_1.0", "io.scif.media.imageioimpl.plugins.tiff.TIFFImageMetadataFormat", null, null]);C$.$init$.apply(this);
this.tagSets=tagSets;
this.rootIFD=Clazz.new_($I$(1,1).c$$java_util_List,[tagSets]);
}, 1);

Clazz.newMeth(C$, 'c$$io_scif_media_imageioimpl_plugins_tiff_TIFFIFD', function (ifd) {
;C$.superclazz.c$$Z$S$S$SA$SA.apply(this,[true, "com_sun_media_imageio_plugins_tiff_image_1.0", "io.scif.media.imageioimpl.plugins.tiff.TIFFImageMetadataFormat", null, null]);C$.$init$.apply(this);
this.tagSets=ifd.getTagSetList$();
this.rootIFD=ifd;
}, 1);

Clazz.newMeth(C$, 'initializeFromStream$javax_imageio_stream_ImageInputStream$Z', function (stream, ignoreUnknownFields) {
this.rootIFD.initialize$javax_imageio_stream_ImageInputStream$Z(stream, ignoreUnknownFields);
});

Clazz.newMeth(C$, 'addShortOrLongField$I$I', function (tagNumber, value) {
var field=Clazz.new_($I$(2,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I,[this.rootIFD.getTag$I(tagNumber), value]);
this.rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(field);
});

Clazz.newMeth(C$, 'isReadOnly$', function () {
return false;
});

Clazz.newMeth(C$, 'getIFDAsTree$io_scif_media_imageioimpl_plugins_tiff_TIFFIFD$S$I', function (ifd, parentTagName, parentTagNumber) {
var IFDRoot=Clazz.new_($I$(3,1).c$$S,["TIFFIFD"]);
if (parentTagNumber != 0) {
IFDRoot.setAttribute$S$S("parentTagNumber", Integer.toString$I(parentTagNumber));
}if (parentTagName != null ) {
IFDRoot.setAttribute$S$S("parentTagName", parentTagName);
}var tagSets=ifd.getTagSetList$();
if (tagSets.size$() > 0) {
var iter=tagSets.iterator$();
var tagSetNames="";
while (iter.hasNext$()){
var tagSet=iter.next$();
tagSetNames += tagSet.getClass$().getName$();
if (iter.hasNext$()) {
tagSetNames += ",";
}}
IFDRoot.setAttribute$S$S("tagSets", tagSetNames);
}var iter=ifd.iterator$();
while (iter.hasNext$()){
var f=iter.next$();
var tagNumber=f.getTagNumber$();
var tag=$I$(1).getTag$I$java_util_List(tagNumber, tagSets);
var node=null;
if (tag == null ) {
node=f.getAsNativeNode$();
} else if (tag.isIFDPointer$()) {
var subIFD=f.getData$();
node=p$1.getIFDAsTree$io_scif_media_imageioimpl_plugins_tiff_TIFFIFD$S$I.apply(this, [subIFD, tag.getName$(), tag.getNumber$()]);
} else {
node=f.getAsNativeNode$();
}if (node != null ) {
IFDRoot.appendChild$org_w3c_dom_Node(node);
}}
return IFDRoot;
}, p$1);

Clazz.newMeth(C$, 'getAsTree$S', function (formatName) {
if (formatName.equals$O("com_sun_media_imageio_plugins_tiff_image_1.0")) {
return p$1.getNativeTree.apply(this, []);
} else if (formatName.equals$O("javax_imageio_1.0")) {
return this.getStandardTree$();
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not a recognized format!"]);
}});

Clazz.newMeth(C$, 'getNativeTree', function () {
var root=Clazz.new_($I$(3,1).c$$S,["com_sun_media_imageio_plugins_tiff_image_1.0"]);
var IFDNode=p$1.getIFDAsTree$io_scif_media_imageioimpl_plugins_tiff_TIFFIFD$S$I.apply(this, [this.rootIFD, null, 0]);
root.appendChild$org_w3c_dom_Node(IFDNode);
return root;
}, p$1);

Clazz.newMeth(C$, 'getStandardChromaNode$', function () {
var chroma_node=Clazz.new_($I$(3,1).c$$S,["Chroma"]);
var node=null;
var f;
var photometricInterpretation=-1;
var isPaletteColor=false;
f=this.getTIFFField$I(262);
if (f != null ) {
photometricInterpretation=f.getAsInt$I(0);
isPaletteColor=photometricInterpretation == 3;
}var numChannels=-1;
if (isPaletteColor) {
numChannels=3;
} else {
f=this.getTIFFField$I(277);
if (f != null ) {
numChannels=f.getAsInt$I(0);
} else {
f=this.getTIFFField$I(258);
if (f != null ) {
numChannels=f.getCount$();
}}}if (photometricInterpretation != -1) {
if (photometricInterpretation >= 0 && photometricInterpretation < C$.colorSpaceNames.length ) {
node=Clazz.new_($I$(3,1).c$$S,["ColorSpaceType"]);
var csName;
if (photometricInterpretation == 5 && numChannels == 3 ) {
csName="CMY";
} else {
csName=C$.colorSpaceNames[photometricInterpretation];
}node.setAttribute$S$S("name", csName);
chroma_node.appendChild$org_w3c_dom_Node(node);
}node=Clazz.new_($I$(3,1).c$$S,["BlackIsZero"]);
node.setAttribute$S$S("value", (photometricInterpretation == 0) ? "FALSE" : "TRUE");
chroma_node.appendChild$org_w3c_dom_Node(node);
}if (numChannels != -1) {
node=Clazz.new_($I$(3,1).c$$S,["NumChannels"]);
node.setAttribute$S$S("value", Integer.toString$I(numChannels));
chroma_node.appendChild$org_w3c_dom_Node(node);
}f=this.getTIFFField$I(320);
if (f != null ) {
var hasAlpha=false;
node=Clazz.new_($I$(3,1).c$$S,["Palette"]);
var len=(f.getCount$()/(hasAlpha ? 4 : 3)|0);
for (var i=0; i < len; i++) {
var entry=Clazz.new_($I$(3,1).c$$S,["PaletteEntry"]);
entry.setAttribute$S$S("index", Integer.toString$I(i));
var r=((f.getAsInt$I(i) * 255)/65535|0);
var g=((f.getAsInt$I(len + i) * 255)/65535|0);
var b=((f.getAsInt$I(2 * len + i) * 255)/65535|0);
entry.setAttribute$S$S("red", Integer.toString$I(r));
entry.setAttribute$S$S("green", Integer.toString$I(g));
entry.setAttribute$S$S("blue", Integer.toString$I(b));
if (hasAlpha) {
var alpha=0;
entry.setAttribute$S$S("alpha", Integer.toString$I(alpha));
}node.appendChild$org_w3c_dom_Node(entry);
}
chroma_node.appendChild$org_w3c_dom_Node(node);
}return chroma_node;
});

Clazz.newMeth(C$, 'getStandardCompressionNode$', function () {
var compression_node=Clazz.new_($I$(3,1).c$$S,["Compression"]);
var node=null;
var f;
f=this.getTIFFField$I(259);
if (f != null ) {
var compressionTypeName=null;
var compression=f.getAsInt$I(0);
var isLossless=true;
if (compression == 1) {
compressionTypeName="None";
isLossless=true;
} else {
var compressionNumbers=$I$(4).compressionNumbers;
for (var i=0; i < compressionNumbers.length; i++) {
if (compression == compressionNumbers[i]) {
compressionTypeName=$I$(4).compressionTypes[i];
isLossless=$I$(4).isCompressionLossless[i];
break;
}}
}if (compressionTypeName != null ) {
node=Clazz.new_($I$(3,1).c$$S,["CompressionTypeName"]);
node.setAttribute$S$S("value", compressionTypeName);
compression_node.appendChild$org_w3c_dom_Node(node);
node=Clazz.new_($I$(3,1).c$$S,["Lossless"]);
node.setAttribute$S$S("value", isLossless ? "TRUE" : "FALSE");
compression_node.appendChild$org_w3c_dom_Node(node);
}}node=Clazz.new_($I$(3,1).c$$S,["NumProgressiveScans"]);
node.setAttribute$S$S("value", "1");
compression_node.appendChild$org_w3c_dom_Node(node);
return compression_node;
});

Clazz.newMeth(C$, 'repeat$S$I', function (s, times) {
if (times == 1) {
return s;
}var sb=Clazz.new_($I$(5,1).c$$I,[(s.length$() + 1) * times - 1]);
sb.append$S(s);
for (var i=1; i < times; i++) {
sb.append$S(" ");
sb.append$S(s);
}
return sb.toString();
}, p$1);

Clazz.newMeth(C$, 'getStandardDataNode$', function () {
var data_node=Clazz.new_($I$(3,1).c$$S,["Data"]);
var node=null;
var f;
var isPaletteColor=false;
f=this.getTIFFField$I(262);
if (f != null ) {
isPaletteColor=f.getAsInt$I(0) == 3;
}f=this.getTIFFField$I(284);
var planarConfiguration="PixelInterleaved";
if (f != null  && f.getAsInt$I(0) == 2 ) {
planarConfiguration="PlaneInterleaved";
}node=Clazz.new_($I$(3,1).c$$S,["PlanarConfiguration"]);
node.setAttribute$S$S("value", planarConfiguration);
data_node.appendChild$org_w3c_dom_Node(node);
f=this.getTIFFField$I(262);
if (f != null ) {
var photometricInterpretation=f.getAsInt$I(0);
var sampleFormat="UnsignedIntegral";
if (photometricInterpretation == 3) {
sampleFormat="Index";
} else {
f=this.getTIFFField$I(339);
if (f != null ) {
var format=f.getAsInt$I(0);
if (format == 2) {
sampleFormat="SignedIntegral";
} else if (format == 1) {
sampleFormat="UnsignedIntegral";
} else if (format == 3) {
sampleFormat="Real";
} else {
sampleFormat=null;
}}}if (sampleFormat != null ) {
node=Clazz.new_($I$(3,1).c$$S,["SampleFormat"]);
node.setAttribute$S$S("value", sampleFormat);
data_node.appendChild$org_w3c_dom_Node(node);
}}f=this.getTIFFField$I(258);
var bitsPerSample=null;
if (f != null ) {
bitsPerSample=f.getAsInts$();
} else {
f=this.getTIFFField$I(259);
var compression=f != null  ? f.getAsInt$I(0) : 1;
if (this.getTIFFField$I(34665) != null  || compression == 7  || compression == 6  || this.getTIFFField$I(513) != null  ) {
f=this.getTIFFField$I(262);
if (f != null  && (f.getAsInt$I(0) == 0 || f.getAsInt$I(0) == 1 ) ) {
bitsPerSample=Clazz.array(Integer.TYPE, -1, [8]);
} else {
bitsPerSample=Clazz.array(Integer.TYPE, -1, [8, 8, 8]);
}} else {
bitsPerSample=Clazz.array(Integer.TYPE, -1, [1]);
}}var sb=Clazz.new_($I$(5,1));
for (var i=0; i < bitsPerSample.length; i++) {
if (i > 0) {
sb.append$S(" ");
}sb.append$S(Integer.toString$I(bitsPerSample[i]));
}
node=Clazz.new_($I$(3,1).c$$S,["BitsPerSample"]);
if (isPaletteColor) {
node.setAttribute$S$S("value", p$1.repeat$S$I.apply(this, [sb.toString(), 3]));
} else {
node.setAttribute$S$S("value", sb.toString());
}data_node.appendChild$org_w3c_dom_Node(node);
f=this.getTIFFField$I(266);
var fillOrder=f != null  ? f.getAsInt$I(0) : 1;
sb=Clazz.new_($I$(5,1));
for (var i=0; i < bitsPerSample.length; i++) {
if (i > 0) {
sb.append$S(" ");
}var maxBitIndex=bitsPerSample[i] == 1 ? 7 : bitsPerSample[i] - 1;
var msb=fillOrder == 1 ? maxBitIndex : 0;
sb.append$S(Integer.toString$I(msb));
}
node=Clazz.new_($I$(3,1).c$$S,["SampleMSB"]);
if (isPaletteColor) {
node.setAttribute$S$S("value", p$1.repeat$S$I.apply(this, [sb.toString(), 3]));
} else {
node.setAttribute$S$S("value", sb.toString());
}data_node.appendChild$org_w3c_dom_Node(node);
return data_node;
});

Clazz.newMeth(C$, 'getStandardDimensionNode$', function () {
var dimension_node=Clazz.new_($I$(3,1).c$$S,["Dimension"]);
var node=null;
var f;
var xres=null;
var yres=null;
f=this.getTIFFField$I(282);
if (f != null ) {
xres=f.getAsRational$I(0).clone$();
}f=this.getTIFFField$I(283);
if (f != null ) {
yres=f.getAsRational$I(0).clone$();
}if (xres != null  && yres != null  ) {
node=Clazz.new_($I$(3,1).c$$S,["PixelAspectRatio"]);
var ratio=(xres[1] * yres[0]) / (xres[0] * yres[1]);
node.setAttribute$S$S("value", Float.toString$F(ratio));
dimension_node.appendChild$org_w3c_dom_Node(node);
}if (xres != null  || yres != null  ) {
f=this.getTIFFField$I(296);
var resolutionUnit=f != null  ? f.getAsInt$I(0) : 2;
var gotPixelSize=resolutionUnit != 1;
if (resolutionUnit == 2) {
if (xres != null ) {
xres[0]*=100;
xres[1]*=254;
}if (yres != null ) {
yres[0]*=100;
yres[1]*=254;
}}if (gotPixelSize) {
if (xres != null ) {
var horizontalPixelSize=(10.0 * xres[1] / xres[0]);
node=Clazz.new_($I$(3,1).c$$S,["HorizontalPixelSize"]);
node.setAttribute$S$S("value", Float.toString$F(horizontalPixelSize));
dimension_node.appendChild$org_w3c_dom_Node(node);
}if (yres != null ) {
var verticalPixelSize=(10.0 * yres[1] / yres[0]);
node=Clazz.new_($I$(3,1).c$$S,["VerticalPixelSize"]);
node.setAttribute$S$S("value", Float.toString$F(verticalPixelSize));
dimension_node.appendChild$org_w3c_dom_Node(node);
}}}f=this.getTIFFField$I(296);
var resolutionUnit=f != null  ? f.getAsInt$I(0) : 2;
if (resolutionUnit == 2 || resolutionUnit == 3 ) {
f=this.getTIFFField$I(286);
if (f != null ) {
var xpos=f.getAsRational$I(0);
var xPosition=xpos[0] / xpos[1];
if (resolutionUnit == 2) {
xPosition *= 254.0;
} else {
xPosition *= 10.0;
}node=Clazz.new_($I$(3,1).c$$S,["HorizontalPosition"]);
node.setAttribute$S$S("value", Float.toString$F(xPosition));
dimension_node.appendChild$org_w3c_dom_Node(node);
}f=this.getTIFFField$I(287);
if (f != null ) {
var ypos=f.getAsRational$I(0);
var yPosition=ypos[0] / ypos[1];
if (resolutionUnit == 2) {
yPosition *= 254.0;
} else {
yPosition *= 10.0;
}node=Clazz.new_($I$(3,1).c$$S,["VerticalPosition"]);
node.setAttribute$S$S("value", Float.toString$F(yPosition));
dimension_node.appendChild$org_w3c_dom_Node(node);
}}f=this.getTIFFField$I(274);
if (f != null ) {
var o=f.getAsInt$I(0);
if (o >= 0 && o < C$.orientationNames.length ) {
node=Clazz.new_($I$(3,1).c$$S,["ImageOrientation"]);
node.setAttribute$S$S("value", C$.orientationNames[o]);
dimension_node.appendChild$org_w3c_dom_Node(node);
}}return dimension_node;
});

Clazz.newMeth(C$, 'getStandardDocumentNode$', function () {
var document_node=Clazz.new_($I$(3,1).c$$S,["Document"]);
var node=null;
var f;
node=Clazz.new_($I$(3,1).c$$S,["FormatVersion"]);
node.setAttribute$S$S("value", "6.0");
document_node.appendChild$org_w3c_dom_Node(node);
f=this.getTIFFField$I(254);
if (f != null ) {
var newSubFileType=f.getAsInt$I(0);
var value=null;
if ((newSubFileType & 4) != 0) {
value="TransparencyMask";
} else if ((newSubFileType & 1) != 0) {
value="ReducedResolution";
} else if ((newSubFileType & 2) != 0) {
value="SinglePage";
}if (value != null ) {
node=Clazz.new_($I$(3,1).c$$S,["SubimageInterpretation"]);
node.setAttribute$S$S("value", value);
document_node.appendChild$org_w3c_dom_Node(node);
}}f=this.getTIFFField$I(306);
if (f != null ) {
var s=f.getAsString$I(0);
if (s.length$() == 19) {
node=Clazz.new_($I$(3,1).c$$S,["ImageCreationTime"]);
var appendNode;
try {
node.setAttribute$S$S("year", s.substring$I$I(0, 4));
node.setAttribute$S$S("month", s.substring$I$I(5, 7));
node.setAttribute$S$S("day", s.substring$I$I(8, 10));
node.setAttribute$S$S("hour", s.substring$I$I(11, 13));
node.setAttribute$S$S("minute", s.substring$I$I(14, 16));
node.setAttribute$S$S("second", s.substring$I$I(17, 19));
appendNode=true;
} catch (e) {
if (Clazz.exceptionOf(e,"IndexOutOfBoundsException")){
appendNode=false;
} else {
throw e;
}
}
if (appendNode) {
document_node.appendChild$org_w3c_dom_Node(node);
}}}return document_node;
});

Clazz.newMeth(C$, 'getStandardTextNode$', function () {
var text_node=null;
var node=null;
var f;
var textFieldTagNumbers=Clazz.array(Integer.TYPE, -1, [269, 270, 271, 272, 285, 305, 315, 316, 333, 33432]);
for (var i=0; i < textFieldTagNumbers.length; i++) {
f=this.getTIFFField$I(textFieldTagNumbers[i]);
if (f != null ) {
var value=f.getAsString$I(0);
if (text_node == null ) {
text_node=Clazz.new_($I$(3,1).c$$S,["Text"]);
}node=Clazz.new_($I$(3,1).c$$S,["TextEntry"]);
node.setAttribute$S$S("keyword", f.getTag$().getName$());
node.setAttribute$S$S("value", value);
text_node.appendChild$org_w3c_dom_Node(node);
}}
return text_node;
});

Clazz.newMeth(C$, 'getStandardTransparencyNode$', function () {
var transparency_node=Clazz.new_($I$(3,1).c$$S,["Transparency"]);
var node=null;
var f;
node=Clazz.new_($I$(3,1).c$$S,["Alpha"]);
var value="none";
f=this.getTIFFField$I(338);
if (f != null ) {
var extraSamples=f.getAsInts$();
for (var i=0; i < extraSamples.length; i++) {
if (extraSamples[i] == 1) {
value="premultiplied";
break;
} else if (extraSamples[i] == 2) {
value="nonpremultiplied";
break;
}}
}node.setAttribute$S$S("value", value);
transparency_node.appendChild$org_w3c_dom_Node(node);
return transparency_node;
});

Clazz.newMeth(C$, 'fatal$org_w3c_dom_Node$S', function (node, reason) {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,[reason, node]);
}, 1);

Clazz.newMeth(C$, 'listToIntArray$S', function (list) {
var st=Clazz.new_($I$(6,1).c$$S$S,[list, " "]);
var intList=Clazz.new_($I$(7,1));
while (st.hasMoreTokens$()){
var nextInteger=st.nextToken$();
var nextInt= new Integer(nextInteger);
intList.add$TE(nextInt);
}
var intArray=Clazz.array(Integer.TYPE, [intList.size$()]);
for (var i=0; i < intArray.length; i++) {
intArray[i]=(intList.get$I(i)).intValue$();
}
return intArray;
}, p$1);

Clazz.newMeth(C$, 'listToCharArray$S', function (list) {
var st=Clazz.new_($I$(6,1).c$$S$S,[list, " "]);
var intList=Clazz.new_($I$(7,1));
while (st.hasMoreTokens$()){
var nextInteger=st.nextToken$();
var nextInt= new Integer(nextInteger);
intList.add$TE(nextInt);
}
var charArray=Clazz.array(Character.TYPE, [intList.size$()]);
for (var i=0; i < charArray.length; i++) {
charArray[i]=String.fromCharCode((intList.get$I(i)).intValue$());
}
return charArray;
}, p$1);

Clazz.newMeth(C$, 'mergeStandardTree$org_w3c_dom_Node', function (root) {
var f;
var tag;
var node=root;
if (!node.getNodeName$().equals$O("javax_imageio_1.0")) {
C$.fatal$org_w3c_dom_Node$S(node, "Root must be javax_imageio_1.0");
}var sampleFormat=null;
var dataNode=p$1.getChildNode$org_w3c_dom_Node$S.apply(this, [root, "Data"]);
var isPaletteColor=false;
if (dataNode != null ) {
var sampleFormatNode=p$1.getChildNode$org_w3c_dom_Node$S.apply(this, [dataNode, "SampleFormat"]);
if (sampleFormatNode != null ) {
sampleFormat=C$.getAttribute$org_w3c_dom_Node$S(sampleFormatNode, "value");
isPaletteColor=sampleFormat.equals$O("Index");
}}if (!isPaletteColor) {
var chromaNode=p$1.getChildNode$org_w3c_dom_Node$S.apply(this, [root, "Chroma"]);
if (chromaNode != null  && p$1.getChildNode$org_w3c_dom_Node$S.apply(this, [chromaNode, "Palette"]) != null  ) {
isPaletteColor=true;
}}node=node.getFirstChild$();
while (node != null ){
var name=node.getNodeName$();
if (name.equals$O("Chroma")) {
var colorSpaceType=null;
var blackIsZero=null;
var gotPalette=false;
var child=node.getFirstChild$();
while (child != null ){
var childName=child.getNodeName$();
if (childName.equals$O("ColorSpaceType")) {
colorSpaceType=C$.getAttribute$org_w3c_dom_Node$S(child, "name");
} else if (childName.equals$O("NumChannels")) {
tag=this.rootIFD.getTag$I(277);
var samplesPerPixel=isPaletteColor ? 1 : Integer.parseInt$S(C$.getAttribute$org_w3c_dom_Node$S(child, "value"));
f=Clazz.new_($I$(2,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I,[tag, samplesPerPixel]);
this.rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
} else if (childName.equals$O("BlackIsZero")) {
blackIsZero=C$.getAttribute$org_w3c_dom_Node$S(child, "value");
} else if (childName.equals$O("Palette")) {
var entry=child.getFirstChild$();
var palette=Clazz.new_($I$(8,1));
var maxIndex=-1;
while (entry != null ){
var entryName=entry.getNodeName$();
if (entryName.equals$O("PaletteEntry")) {
var idx=C$.getAttribute$org_w3c_dom_Node$S(entry, "index");
var id=Integer.parseInt$S(idx);
if (id > maxIndex) {
maxIndex=id;
}var red=String.fromCharCode(Integer.parseInt$S(C$.getAttribute$org_w3c_dom_Node$S(entry, "red")));
var green=String.fromCharCode(Integer.parseInt$S(C$.getAttribute$org_w3c_dom_Node$S(entry, "green")));
var blue=String.fromCharCode(Integer.parseInt$S(C$.getAttribute$org_w3c_dom_Node$S(entry, "blue")));
palette.put$TK$TV( new Integer(id), Clazz.array(Character.TYPE, -1, [red, green, blue]));
gotPalette=true;
}entry=entry.getNextSibling$();
}
if (gotPalette) {
var mapSize=maxIndex + 1;
var paletteLength=3 * mapSize;
var paletteEntries=Clazz.array(Character.TYPE, [paletteLength]);
var paletteIter=palette.keySet$().iterator$();
while (paletteIter.hasNext$()){
var index=paletteIter.next$();
var rgb=palette.get$O(index);
var idx=index.intValue$();
paletteEntries[idx]=String.fromCharCode(((((rgb[0]).$c() * 65535)/255|0)));
paletteEntries[mapSize + idx]=String.fromCharCode(((((rgb[1]).$c() * 65535)/255|0)));
paletteEntries[2 * mapSize + idx]=String.fromCharCode(((((rgb[2]).$c() * 65535)/255|0)));
}
tag=this.rootIFD.getTag$I(320);
f=Clazz.new_($I$(2,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[tag, 3, paletteLength, paletteEntries]);
this.rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
}}child=child.getNextSibling$();
}
var photometricInterpretation=-1;
if ((colorSpaceType == null  || colorSpaceType.equals$O("GRAY") ) && blackIsZero != null   && blackIsZero.equalsIgnoreCase$S("FALSE") ) {
photometricInterpretation=0;
} else if (colorSpaceType != null ) {
if (colorSpaceType.equals$O("GRAY")) {
var isTransparency=false;
if (Clazz.instanceOf(root, "javax.imageio.metadata.IIOMetadataNode")) {
var iioRoot=root;
var siNodeList=iioRoot.getElementsByTagName$S("SubimageInterpretation");
if (siNodeList.getLength$() == 1) {
var siNode=siNodeList.item$I(0);
var value=C$.getAttribute$org_w3c_dom_Node$S(siNode, "value");
if (value.equals$O("TransparencyMask")) {
isTransparency=true;
}}}if (isTransparency) {
photometricInterpretation=4;
} else {
photometricInterpretation=1;
}} else if (colorSpaceType.equals$O("RGB")) {
photometricInterpretation=gotPalette ? 3 : 2;
} else if (colorSpaceType.equals$O("YCbCr")) {
photometricInterpretation=6;
} else if (colorSpaceType.equals$O("CMYK")) {
photometricInterpretation=5;
} else if (colorSpaceType.equals$O("Lab")) {
photometricInterpretation=8;
}}if (photometricInterpretation != -1) {
tag=this.rootIFD.getTag$I(262);
f=Clazz.new_($I$(2,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I,[tag, photometricInterpretation]);
this.rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
}} else if (name.equals$O("Compression")) {
var child=node.getFirstChild$();
while (child != null ){
var childName=child.getNodeName$();
if (childName.equals$O("CompressionTypeName")) {
var compression=-1;
var compressionTypeName=C$.getAttribute$org_w3c_dom_Node$S(child, "value");
if (compressionTypeName.equalsIgnoreCase$S("None")) {
compression=1;
} else {
var compressionNames=$I$(4).compressionTypes;
for (var i=0; i < compressionNames.length; i++) {
if (compressionNames[i].equalsIgnoreCase$S(compressionTypeName)) {
compression=$I$(4).compressionNumbers[i];
break;
}}
}if (compression != -1) {
tag=this.rootIFD.getTag$I(259);
f=Clazz.new_($I$(2,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I,[tag, compression]);
this.rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
}}child=child.getNextSibling$();
}
} else if (name.equals$O("Data")) {
var child=node.getFirstChild$();
while (child != null ){
var childName=child.getNodeName$();
if (childName.equals$O("PlanarConfiguration")) {
var pc=C$.getAttribute$org_w3c_dom_Node$S(child, "value");
var planarConfiguration=-1;
if (pc.equals$O("PixelInterleaved")) {
planarConfiguration=1;
} else if (pc.equals$O("PlaneInterleaved")) {
planarConfiguration=2;
}if (planarConfiguration != -1) {
tag=this.rootIFD.getTag$I(284);
f=Clazz.new_($I$(2,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I,[tag, planarConfiguration]);
this.rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
}} else if (childName.equals$O("BitsPerSample")) {
var bps=C$.getAttribute$org_w3c_dom_Node$S(child, "value");
var bitsPerSample=p$1.listToCharArray$S.apply(this, [bps]);
tag=this.rootIFD.getTag$I(258);
if (isPaletteColor) {
f=Clazz.new_($I$(2,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[tag, 3, 1, Clazz.array(Character.TYPE, -1, [bitsPerSample[0]])]);
} else {
f=Clazz.new_($I$(2,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[tag, 3, bitsPerSample.length, bitsPerSample]);
}this.rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
} else if (childName.equals$O("SampleMSB")) {
var sMSB=C$.getAttribute$org_w3c_dom_Node$S(child, "value");
var sampleMSB=p$1.listToIntArray$S.apply(this, [sMSB]);
var isRightToLeft=true;
for (var i=0; i < sampleMSB.length; i++) {
if (sampleMSB[i] != 0) {
isRightToLeft=false;
break;
}}
var fillOrder=isRightToLeft ? 2 : 1;
tag=this.rootIFD.getTag$I(266);
f=Clazz.new_($I$(2,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I,[tag, fillOrder]);
this.rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
}child=child.getNextSibling$();
}
} else if (name.equals$O("Dimension")) {
var pixelAspectRatio=-1.0;
var gotPixelAspectRatio=false;
var horizontalPixelSize=-1.0;
var gotHorizontalPixelSize=false;
var verticalPixelSize=-1.0;
var gotVerticalPixelSize=false;
var sizeIsAbsolute=false;
var horizontalPosition=-1.0;
var gotHorizontalPosition=false;
var verticalPosition=-1.0;
var gotVerticalPosition=false;
var child=node.getFirstChild$();
while (child != null ){
var childName=child.getNodeName$();
if (childName.equals$O("PixelAspectRatio")) {
var par=C$.getAttribute$org_w3c_dom_Node$S(child, "value");
pixelAspectRatio=Float.parseFloat$S(par);
gotPixelAspectRatio=true;
} else if (childName.equals$O("ImageOrientation")) {
var orientation=C$.getAttribute$org_w3c_dom_Node$S(child, "value");
for (var i=0; i < C$.orientationNames.length; i++) {
if (orientation.equals$O(C$.orientationNames[i])) {
var oData=Clazz.array(Character.TYPE, [1]);
oData[0]=String.fromCharCode(i);
f=Clazz.new_($I$(2,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[this.rootIFD.getTag$I(274), 3, 1, oData]);
this.rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
break;
}}
} else if (childName.equals$O("HorizontalPixelSize")) {
var hps=C$.getAttribute$org_w3c_dom_Node$S(child, "value");
horizontalPixelSize=Float.parseFloat$S(hps);
gotHorizontalPixelSize=true;
} else if (childName.equals$O("VerticalPixelSize")) {
var vps=C$.getAttribute$org_w3c_dom_Node$S(child, "value");
verticalPixelSize=Float.parseFloat$S(vps);
gotVerticalPixelSize=true;
} else if (childName.equals$O("HorizontalPosition")) {
var hp=C$.getAttribute$org_w3c_dom_Node$S(child, "value");
horizontalPosition=Float.parseFloat$S(hp);
gotHorizontalPosition=true;
} else if (childName.equals$O("VerticalPosition")) {
var vp=C$.getAttribute$org_w3c_dom_Node$S(child, "value");
verticalPosition=Float.parseFloat$S(vp);
gotVerticalPosition=true;
}child=child.getNextSibling$();
}
sizeIsAbsolute=gotHorizontalPixelSize || gotVerticalPixelSize ;
if (gotPixelAspectRatio) {
if (gotHorizontalPixelSize && !gotVerticalPixelSize ) {
verticalPixelSize=horizontalPixelSize / pixelAspectRatio;
gotVerticalPixelSize=true;
} else if (gotVerticalPixelSize && !gotHorizontalPixelSize ) {
horizontalPixelSize=verticalPixelSize * pixelAspectRatio;
gotHorizontalPixelSize=true;
} else if (!gotHorizontalPixelSize && !gotVerticalPixelSize ) {
horizontalPixelSize=pixelAspectRatio;
verticalPixelSize=1.0;
gotHorizontalPixelSize=true;
gotVerticalPixelSize=true;
}}if (gotHorizontalPixelSize) {
var xResolution=(sizeIsAbsolute ? 10.0 : 1.0) / horizontalPixelSize;
var hData=Clazz.array(Long.TYPE, [1, 2]);
hData[0]=Clazz.array(Long.TYPE, [2]);
hData[0][0]=((xResolution * 10000.0)|0);
hData[0][1]=10000;
f=Clazz.new_($I$(2,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[this.rootIFD.getTag$I(282), 5, 1, hData]);
this.rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
}if (gotVerticalPixelSize) {
var yResolution=(sizeIsAbsolute ? 10.0 : 1.0) / verticalPixelSize;
var vData=Clazz.array(Long.TYPE, [1, 2]);
vData[0]=Clazz.array(Long.TYPE, [2]);
vData[0][0]=((yResolution * 10000.0)|0);
vData[0][1]=10000;
f=Clazz.new_($I$(2,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[this.rootIFD.getTag$I(283), 5, 1, vData]);
this.rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
}var res=Clazz.array(Character.TYPE, [1]);
res[0]=String.fromCharCode((sizeIsAbsolute ? 3 : 1));
f=Clazz.new_($I$(2,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[this.rootIFD.getTag$I(296), 3, 1, res]);
this.rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
if (sizeIsAbsolute) {
if (gotHorizontalPosition) {
var hData=Clazz.array(Long.TYPE, [1, 2]);
hData[0][0]=((horizontalPosition * 10000.0)|0);
hData[0][1]=100000;
f=Clazz.new_($I$(2,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[this.rootIFD.getTag$I(286), 5, 1, hData]);
this.rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
}if (gotVerticalPosition) {
var vData=Clazz.array(Long.TYPE, [1, 2]);
vData[0][0]=((verticalPosition * 10000.0)|0);
vData[0][1]=100000;
f=Clazz.new_($I$(2,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[this.rootIFD.getTag$I(287), 5, 1, vData]);
this.rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
}}} else if (name.equals$O("Document")) {
var child=node.getFirstChild$();
while (child != null ){
var childName=child.getNodeName$();
if (childName.equals$O("SubimageInterpretation")) {
var si=C$.getAttribute$org_w3c_dom_Node$S(child, "value");
var newSubFileType=-1;
if (si.equals$O("TransparencyMask")) {
newSubFileType=4;
} else if (si.equals$O("ReducedResolution")) {
newSubFileType=1;
} else if (si.equals$O("SinglePage")) {
newSubFileType=2;
}if (newSubFileType != -1) {
tag=this.rootIFD.getTag$I(254);
f=Clazz.new_($I$(2,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I,[tag, newSubFileType]);
this.rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
}}if (childName.equals$O("ImageCreationTime")) {
var year=C$.getAttribute$org_w3c_dom_Node$S(child, "year");
var month=C$.getAttribute$org_w3c_dom_Node$S(child, "month");
var day=C$.getAttribute$org_w3c_dom_Node$S(child, "day");
var hour=C$.getAttribute$org_w3c_dom_Node$S(child, "hour");
var minute=C$.getAttribute$org_w3c_dom_Node$S(child, "minute");
var second=C$.getAttribute$org_w3c_dom_Node$S(child, "second");
var sb=Clazz.new_($I$(5,1));
sb.append$S(year);
sb.append$S(":");
if (month.length$() == 1) {
sb.append$S("0");
}sb.append$S(month);
sb.append$S(":");
if (day.length$() == 1) {
sb.append$S("0");
}sb.append$S(day);
sb.append$S(" ");
if (hour.length$() == 1) {
sb.append$S("0");
}sb.append$S(hour);
sb.append$S(":");
if (minute.length$() == 1) {
sb.append$S("0");
}sb.append$S(minute);
sb.append$S(":");
if (second.length$() == 1) {
sb.append$S("0");
}sb.append$S(second);
var dt=Clazz.array(String, [1]);
dt[0]=sb.toString();
f=Clazz.new_($I$(2,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[this.rootIFD.getTag$I(306), 2, 1, dt]);
this.rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
}child=child.getNextSibling$();
}
} else if (name.equals$O("Text")) {
var child=node.getFirstChild$();
var theAuthor=null;
var theDescription=null;
var theTitle=null;
while (child != null ){
var childName=child.getNodeName$();
if (childName.equals$O("TextEntry")) {
var tagNumber=-1;
var childAttrs=child.getAttributes$();
var keywordNode=childAttrs.getNamedItem$S("keyword");
if (keywordNode != null ) {
var keyword=keywordNode.getNodeValue$();
var value=C$.getAttribute$org_w3c_dom_Node$S(child, "value");
if (!keyword.equals$O("") && !value.equals$O("") ) {
if (keyword.equalsIgnoreCase$S("DocumentName")) {
tagNumber=269;
} else if (keyword.equalsIgnoreCase$S("ImageDescription")) {
tagNumber=270;
} else if (keyword.equalsIgnoreCase$S("Make")) {
tagNumber=271;
} else if (keyword.equalsIgnoreCase$S("Model")) {
tagNumber=272;
} else if (keyword.equalsIgnoreCase$S("PageName")) {
tagNumber=285;
} else if (keyword.equalsIgnoreCase$S("Software")) {
tagNumber=305;
} else if (keyword.equalsIgnoreCase$S("Artist")) {
tagNumber=315;
} else if (keyword.equalsIgnoreCase$S("HostComputer")) {
tagNumber=316;
} else if (keyword.equalsIgnoreCase$S("InkNames")) {
tagNumber=333;
} else if (keyword.equalsIgnoreCase$S("Copyright")) {
tagNumber=33432;
} else if (keyword.equalsIgnoreCase$S("author")) {
theAuthor=value;
} else if (keyword.equalsIgnoreCase$S("description")) {
theDescription=value;
} else if (keyword.equalsIgnoreCase$S("title")) {
theTitle=value;
}if (tagNumber != -1) {
f=Clazz.new_($I$(2,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[this.rootIFD.getTag$I(tagNumber), 2, 1, Clazz.array(String, -1, [value])]);
this.rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
}}}}child=child.getNextSibling$();
}
if (theAuthor != null  && this.getTIFFField$I(315) == null  ) {
f=Clazz.new_($I$(2,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[this.rootIFD.getTag$I(315), 2, 1, Clazz.array(String, -1, [theAuthor])]);
this.rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
}if (theDescription != null  && this.getTIFFField$I(270) == null  ) {
f=Clazz.new_($I$(2,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[this.rootIFD.getTag$I(270), 2, 1, Clazz.array(String, -1, [theDescription])]);
this.rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
}if (theTitle != null  && this.getTIFFField$I(269) == null  ) {
f=Clazz.new_($I$(2,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[this.rootIFD.getTag$I(269), 2, 1, Clazz.array(String, -1, [theTitle])]);
this.rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
}} else if (name.equals$O("Transparency")) {
var child=node.getFirstChild$();
while (child != null ){
var childName=child.getNodeName$();
if (childName.equals$O("Alpha")) {
var alpha=C$.getAttribute$org_w3c_dom_Node$S(child, "value");
f=null;
if (alpha.equals$O("premultiplied")) {
f=Clazz.new_($I$(2,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I,[this.rootIFD.getTag$I(338), 1]);
} else if (alpha.equals$O("nonpremultiplied")) {
f=Clazz.new_($I$(2,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I,[this.rootIFD.getTag$I(338), 2]);
}if (f != null ) {
this.rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
}}child=child.getNextSibling$();
}
}node=node.getNextSibling$();
}
if (sampleFormat != null ) {
var sf=-1;
if (sampleFormat.equals$O("SignedIntegral")) {
sf=2;
} else if (sampleFormat.equals$O("UnsignedIntegral")) {
sf=1;
} else if (sampleFormat.equals$O("Real")) {
sf=3;
} else if (sampleFormat.equals$O("Index")) {
sf=1;
}if (sf != -1) {
var count=1;
f=this.getTIFFField$I(277);
if (f != null ) {
count=f.getAsInt$I(0);
} else {
f=this.getTIFFField$I(258);
if (f != null ) {
count=f.getCount$();
}}var sampleFormatArray=Clazz.array(Character.TYPE, [count]);
$I$(9).fill$CA$C(sampleFormatArray, String.fromCharCode(sf));
tag=this.rootIFD.getTag$I(339);
f=Clazz.new_($I$(2,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[tag, 3, sampleFormatArray.length, sampleFormatArray]);
this.rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
}}}, p$1);

Clazz.newMeth(C$, 'getAttribute$org_w3c_dom_Node$S', function (node, attrName) {
var attrs=node.getAttributes$();
var attr=attrs.getNamedItem$S(attrName);
return attr != null  ? attr.getNodeValue$() : null;
}, 1);

Clazz.newMeth(C$, 'getChildNode$org_w3c_dom_Node$S', function (node, childName) {
var childNode=null;
if (node.hasChildNodes$()) {
var childNodes=node.getChildNodes$();
var length=childNodes.getLength$();
for (var i=0; i < length; i++) {
var item=childNodes.item$I(i);
if (item.getNodeName$().equals$O(childName)) {
childNode=item;
break;
}}
}return childNode;
}, p$1);

Clazz.newMeth(C$, 'parseIFD$org_w3c_dom_Node', function (node) {
if (!node.getNodeName$().equals$O("TIFFIFD")) {
C$.fatal$org_w3c_dom_Node$S(node, "Expected \"TIFFIFD\" node");
}var tagSetNames=C$.getAttribute$org_w3c_dom_Node$S(node, "tagSets");
var tagSets=Clazz.new_($I$(7,1).c$$I,[5]);
if (tagSetNames != null ) {
var st=Clazz.new_($I$(6,1).c$$S$S,[tagSetNames, ","]);
while (st.hasMoreTokens$()){
var className=st.nextToken$();
var o=null;
try {
var setClass=Clazz.forName(className);
var getInstanceMethod=setClass.getMethod$S$ClassA("getInstance", null);
o=getInstanceMethod.invoke$O$OA(null, null);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"NoSuchMethodException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
}
} else if (Clazz.exceptionOf(e$$,"ClassNotFoundException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
}
} else {
throw e$$;
}
}
if (!(Clazz.instanceOf(o, "io.scif.media.imageio.plugins.tiff.TIFFTagSet"))) {
C$.fatal$org_w3c_dom_Node$S(node, "Specified tag set class \"" + className + "\" is not an instance of TIFFTagSet" );
} else {
tagSets.add$TE(o);
}}
}var ifd=Clazz.new_($I$(1,1).c$$java_util_List,[tagSets]);
node=node.getFirstChild$();
while (node != null ){
var name=node.getNodeName$();
var f=null;
if (name.equals$O("TIFFIFD")) {
var subIFD=C$.parseIFD$org_w3c_dom_Node(node);
var parentTagName=C$.getAttribute$org_w3c_dom_Node$S(node, "parentTagName");
var parentTagNumber=C$.getAttribute$org_w3c_dom_Node$S(node, "parentTagNumber");
var tag=null;
if (parentTagName != null ) {
tag=$I$(1).getTag$S$java_util_List(parentTagName, tagSets);
} else if (parentTagNumber != null ) {
var tagNumber=Integer.valueOf$S(parentTagNumber).intValue$();
tag=$I$(1).getTag$I$java_util_List(tagNumber, tagSets);
}if (tag == null ) {
tag=Clazz.new_($I$(10,1).c$$S$I$I$io_scif_media_imageio_plugins_tiff_TIFFTagSet,["unknown", 0, 0, null]);
}var type;
if (tag.isDataTypeOK$I(13)) {
type=13;
} else {
type=4;
}f=Clazz.new_($I$(2,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[tag, type, 1, subIFD]);
} else if (name.equals$O("TIFFField")) {
var number=Integer.parseInt$S(C$.getAttribute$org_w3c_dom_Node$S(node, "number"));
var tagSet=null;
var iter=tagSets.iterator$();
while (iter.hasNext$()){
var t=iter.next$();
if (t.getTag$I(number) != null ) {
tagSet=t;
break;
}}
f=$I$(2).createFromMetadataNode$io_scif_media_imageio_plugins_tiff_TIFFTagSet$org_w3c_dom_Node(tagSet, node);
} else {
C$.fatal$org_w3c_dom_Node$S(node, "Expected either \"TIFFIFD\" or \"TIFFField\" node, got " + name);
}ifd.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
node=node.getNextSibling$();
}
return ifd;
}, 1);

Clazz.newMeth(C$, 'mergeNativeTree$org_w3c_dom_Node', function (root) {
var node=root;
if (!node.getNodeName$().equals$O("com_sun_media_imageio_plugins_tiff_image_1.0")) {
C$.fatal$org_w3c_dom_Node$S(node, "Root must be com_sun_media_imageio_plugins_tiff_image_1.0");
}node=node.getFirstChild$();
if (node == null  || !node.getNodeName$().equals$O("TIFFIFD") ) {
C$.fatal$org_w3c_dom_Node$S(root, "Root must have \"TIFFIFD\" child");
}var ifd=C$.parseIFD$org_w3c_dom_Node(node);
var rootIFDTagSets=this.rootIFD.getTagSetList$();
var tagSetIter=ifd.getTagSetList$().iterator$();
while (tagSetIter.hasNext$()){
var o=tagSetIter.next$();
if (Clazz.instanceOf(o, "io.scif.media.imageio.plugins.tiff.TIFFTagSet") && !rootIFDTagSets.contains$O(o) ) {
this.rootIFD.addTagSet$io_scif_media_imageio_plugins_tiff_TIFFTagSet(o);
}}
var ifdIter=ifd.iterator$();
while (ifdIter.hasNext$()){
var field=ifdIter.next$();
this.rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(field);
}
}, p$1);

Clazz.newMeth(C$, 'mergeTree$S$org_w3c_dom_Node', function (formatName, root) {
if (formatName.equals$O("com_sun_media_imageio_plugins_tiff_image_1.0")) {
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

Clazz.newMeth(C$, 'reset$', function () {
this.rootIFD=Clazz.new_($I$(1,1).c$$java_util_List,[this.tagSets]);
});

Clazz.newMeth(C$, 'getRootIFD$', function () {
return this.rootIFD;
});

Clazz.newMeth(C$, 'getTIFFField$I', function (tagNumber) {
return this.rootIFD.getTIFFField$I(tagNumber);
});

Clazz.newMeth(C$, 'removeTIFFField$I', function (tagNumber) {
this.rootIFD.removeTIFFField$I(tagNumber);
});

Clazz.newMeth(C$, 'getShallowClone$', function () {
return Clazz.new_(C$.c$$io_scif_media_imageioimpl_plugins_tiff_TIFFIFD,[this.rootIFD.getShallowClone$()]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
