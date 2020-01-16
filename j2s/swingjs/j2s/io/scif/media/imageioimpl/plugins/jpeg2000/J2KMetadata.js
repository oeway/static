(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.jpeg2000"),p$1={},I$=[[0,'java.util.ArrayList','io.scif.media.imageioimpl.plugins.jpeg2000.IISRandomAccessIO','io.scif.jj2000.j2k.fileformat.reader.FileFormatReader','io.scif.media.imageioimpl.plugins.jpeg2000.SignatureBox','io.scif.media.imageioimpl.plugins.jpeg2000.FileTypeBox','io.scif.media.imageioimpl.plugins.jpeg2000.ColorSpecificationBox','io.scif.media.imageioimpl.plugins.jpeg2000.ChannelDefinitionBox','io.scif.media.imageioimpl.plugins.jpeg2000.PaletteBox','io.scif.media.imageioimpl.plugins.jpeg2000.ComponentMappingBox','io.scif.media.imageioimpl.plugins.jpeg2000.HeaderBox','io.scif.media.imageioimpl.plugins.jpeg2000.I18N','javax.imageio.metadata.IIOMetadataNode','io.scif.media.imageioimpl.plugins.jpeg2000.Box','java.awt.image.IndexColorModel','io.scif.media.imageioimpl.plugins.jpeg2000.BitsPerComponentBox','io.scif.media.imageioimpl.plugins.jpeg2000.ResolutionBox','io.scif.media.imageioimpl.plugins.jpeg2000.XMLBox']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "J2KMetadata", null, 'javax.imageio.metadata.IIOMetadata', 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.boxes=Clazz.new_($I$(1,1));
}, 1);

C$.$fields$=[['O',['format','io.scif.media.imageioimpl.plugins.jpeg2000.J2KMetadataFormat','boxes','java.util.ArrayList']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$Z$S$S$SA$SA.apply(this,[true, "com_sun_media_imageio_plugins_jpeg2000_image_1.0", "io.scif.media.imageioimpl.plugins.jpeg2000.J2KMetadataFormat", null, null]);C$.$init$.apply(this);
this.format=this.getMetadataFormat$S("com_sun_media_imageio_plugins_jpeg2000_image_1.0");
}, 1);

Clazz.newMeth(C$, 'c$$javax_imageio_stream_ImageInputStream$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReader', function (iis, reader) {
C$.c$.apply(this, []);
var $in=Clazz.new_($I$(2,1).c$$javax_imageio_stream_ImageInputStream,[iis]);
iis.mark$();
var ff=Clazz.new_($I$(3,1).c$$io_scif_jj2000_j2k_io_RandomAccessIO$io_scif_media_imageioimpl_plugins_jpeg2000_J2KMetadata,[$in, this]);
ff.readFileFormat$();
iis.reset$();
}, 1);

Clazz.newMeth(C$, 'c$$javax_imageio_ImageWriteParam$javax_imageio_ImageWriter', function (param, writer) {
C$.c$$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam$javax_imageio_ImageWriter.apply(this, [null, param, writer]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam$javax_imageio_ImageWriter', function (imageType, param, writer) {
C$.c$$java_awt_image_ColorModel$java_awt_image_SampleModel$I$I$javax_imageio_ImageWriteParam$javax_imageio_ImageWriter.apply(this, [imageType != null  ? imageType.getColorModel$() : null, imageType != null  ? imageType.getSampleModel$() : null, 0, 0, param, writer]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_image_ColorModel$java_awt_image_SampleModel$I$I$javax_imageio_ImageWriteParam$javax_imageio_ImageWriter', function (colorModel, sampleModel, width, height, param, writer) {
C$.c$.apply(this, []);
this.addNode$io_scif_media_imageioimpl_plugins_jpeg2000_Box(Clazz.new_($I$(4,1)));
this.addNode$io_scif_media_imageioimpl_plugins_jpeg2000_Box(Clazz.new_($I$(5,1).c$$I$I$IA,[1785737760, 0, Clazz.array(Integer.TYPE, -1, [1785737760])]));
var destType=null;
if (param != null ) {
destType=param.getDestinationType$();
if (colorModel == null  && sampleModel == null  ) {
colorModel=destType == null  ? null : destType.getColorModel$();
sampleModel=destType == null  ? null : destType.getSampleModel$();
}}var bitDepths=null;
if (colorModel != null ) {
bitDepths=colorModel.getComponentSize$();
} else if (sampleModel != null ) {
bitDepths=sampleModel.getSampleSize$();
}var bitsPerComponent=255;
if (bitDepths != null ) {
bitsPerComponent=bitDepths[0];
var numComponents=bitDepths.length;
for (var i=1; i < numComponents; i++) {
if (bitDepths[i] > bitsPerComponent) {
bitsPerComponent=bitDepths[i];
}}
}if (colorModel != null ) {
var cs=colorModel.getColorSpace$();
var iccColor=(Clazz.instanceOf(cs, "java.awt.color.ICC_ColorSpace"));
var type=cs.getType$();
if (type == 5) {
this.addNode$io_scif_media_imageioimpl_plugins_jpeg2000_Box(Clazz.new_($I$(6,1).c$$B$B$B$I$java_awt_color_ICC_Profile,[($b$[0] = 1, $b$[0]), ($b$[0] = 0, $b$[0]), ($b$[0] = 0, $b$[0]), 16, null]));
} else if (type == 6) this.addNode$io_scif_media_imageioimpl_plugins_jpeg2000_Box(Clazz.new_($I$(6,1).c$$B$B$B$I$java_awt_color_ICC_Profile,[($b$[0] = 1, $b$[0]), ($b$[0] = 0, $b$[0]), ($b$[0] = 0, $b$[0]), 17, null]));
 else if (Clazz.instanceOf(cs, "java.awt.color.ICC_ColorSpace")) this.addNode$io_scif_media_imageioimpl_plugins_jpeg2000_Box(Clazz.new_($I$(6,1).c$$B$B$B$I$java_awt_color_ICC_Profile,[($b$[0] = 2, $b$[0]), ($b$[0] = 0, $b$[0]), ($b$[0] = 0, $b$[0]), 0, (cs).getProfile$()]));
if (colorModel.hasAlpha$()) {
this.addNode$io_scif_media_imageioimpl_plugins_jpeg2000_Box(Clazz.new_($I$(7,1).c$$java_awt_image_ColorModel,[colorModel]));
}if (Clazz.instanceOf(colorModel, "java.awt.image.IndexColorModel")) {
this.addNode$io_scif_media_imageioimpl_plugins_jpeg2000_Box(Clazz.new_($I$(8,1).c$$java_awt_image_IndexColorModel,[colorModel]));
var numComp=colorModel.getComponentSize$().length;
var channels=Clazz.array(Short.TYPE, [numComp]);
var types=Clazz.array(Byte.TYPE, [numComp]);
var maps=Clazz.array(Byte.TYPE, [numComp]);
for (var i=0; i < numComp; i++) {
channels[i]=(0|0);
types[i]=(1|0);
maps[i]=((i|0)|0);
}
this.addNode$io_scif_media_imageioimpl_plugins_jpeg2000_Box(Clazz.new_($I$(9,1).c$$HA$BA$BA,[channels, types, maps]));
}}if (sampleModel != null ) {
if (width <= 0) width=sampleModel.getWidth$();
if (height <= 0) height=sampleModel.getHeight$();
var bpc=bitsPerComponent == 255 ? 255 : ((bitsPerComponent - 1) | (p$1.isOriginalSigned$java_awt_image_SampleModel.apply(this, [sampleModel]) ? 128 : 0));
this.addNode$io_scif_media_imageioimpl_plugins_jpeg2000_Box(Clazz.new_($I$(10,1).c$$I$I$I$I$I$I$I,[height, width, sampleModel.getNumBands$(), bpc, 7, colorModel == null  ? 1 : 0, this.getElement$S("JPEG2000IntellectualPropertyRightsBox") == null  ? 0 : 1]));
}}, 1);

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
if (this.boxes != null ) {
var numBoxes=this.boxes.size$();
for (var i=0; i < numBoxes; i++) {
theClone.addNode$io_scif_media_imageioimpl_plugins_jpeg2000_Box(this.boxes.get$I(i));
}
}return theClone;
});

Clazz.newMeth(C$, 'getAsTree$S', function (formatName) {
if (formatName == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(11).getString$S("J2KMetadata0")]);
}if (formatName.equals$O("com_sun_media_imageio_plugins_jpeg2000_image_1.0")) {
return this.getNativeTree$();
}if (formatName.equals$O("javax_imageio_1.0")) {
return this.getStandardTree$();
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(11).getString$S("J2KMetadata1") + " " + formatName ]);
});

Clazz.newMeth(C$, 'getNativeTree$', function () {
var root=Clazz.new_($I$(12,1).c$$S,["com_sun_media_imageio_plugins_jpeg2000_image_1.0"]);
var signatureBox=null;
var fileTypeBox=null;
var headerBox=null;
var signatureIndex=-1;
var fileTypeIndex=-1;
var headerIndex=-1;
var numBoxes=this.boxes.size$();
var found=0;
for (var i=0; i < numBoxes && found < 3 ; i++) {
var box=this.boxes.get$I(i);
if ($I$(13).getName$I(box.getType$()).equals$O("JPEG2000SignatureBox")) {
signatureBox=box;
signatureIndex=i;
found++;
} else if ($I$(13).getName$I(box.getType$()).equals$O("JPEG2000FileTypeBox")) {
fileTypeBox=box;
fileTypeIndex=i;
found++;
} else if ($I$(13).getName$I(box.getType$()).equals$O("JPEG2000HeaderBox")) {
headerBox=box;
headerIndex=i;
found++;
}}
if (signatureBox != null ) {
p$1.insertNodeIntoTree$javax_imageio_metadata_IIOMetadataNode$javax_imageio_metadata_IIOMetadataNode.apply(this, [root, signatureBox.getNativeNode$()]);
}if (fileTypeBox != null ) {
p$1.insertNodeIntoTree$javax_imageio_metadata_IIOMetadataNode$javax_imageio_metadata_IIOMetadataNode.apply(this, [root, fileTypeBox.getNativeNode$()]);
}if (headerBox != null ) {
p$1.insertNodeIntoTree$javax_imageio_metadata_IIOMetadataNode$javax_imageio_metadata_IIOMetadataNode.apply(this, [root, headerBox.getNativeNode$()]);
}for (var i=0; i < numBoxes; i++) {
if (i == signatureIndex || i == fileTypeIndex  || i == headerIndex ) continue;
var box=this.boxes.get$I(i);
var node=box.getNativeNode$();
p$1.insertNodeIntoTree$javax_imageio_metadata_IIOMetadataNode$javax_imageio_metadata_IIOMetadataNode.apply(this, [root, node]);
}
return root;
});

Clazz.newMeth(C$, 'getStandardChromaNode$', function () {
var header=this.getElement$S("JPEG2000HeaderBox");
var palette=this.getElement$S("JPEG2000PaletteBox");
var color=this.getElement$S("JPEG2000ColorSpecificationBox");
var node=Clazz.new_($I$(12,1).c$$S,["Chroma"]);
var subNode=null;
if (header != null ) {
if (header.getUnknownColorspace$() == 0) {
if (color != null  && color.getMethod$() == 1 ) {
subNode=Clazz.new_($I$(12,1).c$$S,["ColorSpaceType"]);
var ecs=color.getEnumeratedColorSpace$();
if (ecs == 16) subNode.setAttribute$S$S("name", "RGB");
if (ecs == 17) subNode.setAttribute$S$S("name", "GRAY");
node.appendChild$org_w3c_dom_Node(subNode);
}}subNode=Clazz.new_($I$(12,1).c$$S,["NumChannels"]);
subNode.setAttribute$S$S("value", "" + header.getNumComponents$());
node.appendChild$org_w3c_dom_Node(subNode);
if (palette != null ) {
subNode.setAttribute$S$S("value", "" + palette.getNumComp$());
subNode=Clazz.new_($I$(12,1).c$$S,["Palette"]);
var lut=palette.getLUT$();
var size=lut[0].length;
var numComp=lut.length;
for (var i=0; i < size; i++) {
var subNode1=Clazz.new_($I$(12,1).c$$S,["PaletteEntry"]);
subNode1.setAttribute$S$S("index", "" + i);
subNode1.setAttribute$S$S("red", "" + (lut[0][i] & 255));
subNode1.setAttribute$S$S("green", "" + (lut[1][i] & 255));
subNode1.setAttribute$S$S("blue", "" + (lut[2][i] & 255));
if (numComp == 4) subNode1.setAttribute$S$S("alpha", "" + (lut[3][i] & 255));
subNode.appendChild$org_w3c_dom_Node(subNode1);
}
node.appendChild$org_w3c_dom_Node(subNode);
}}return node;
});

Clazz.newMeth(C$, 'getStandardCompressionNode$', function () {
var node=Clazz.new_($I$(12,1).c$$S,["Compression"]);
var subNode=Clazz.new_($I$(12,1).c$$S,["CompressionTypeName"]);
subNode.setAttribute$S$S("value", "JPEG2000");
node.appendChild$org_w3c_dom_Node(subNode);
return node;
});

Clazz.newMeth(C$, 'getStandardDataNode$', function () {
var node=Clazz.new_($I$(12,1).c$$S,["Data"]);
var palette=this.getElement$S("JPEG2000PaletteBox");
var sampleFormat=false;
if (palette != null ) {
var subNode=Clazz.new_($I$(12,1).c$$S,["SampleFormat"]);
subNode.setAttribute$S$S("value", "Index");
node.appendChild$org_w3c_dom_Node(subNode);
sampleFormat=true;
}var bitDepth=this.getElement$S("JPEG2000BitsPerComponentBox");
var value="";
var signed=false;
var gotSampleInfo=false;
if (bitDepth != null ) {
var bits=bitDepth.getBitDepth$();
if ((bits[0] & 128) == 128) signed=true;
var numComp=bits.length;
for (var i=0; i < numComp; i++) {
value += (bits[i] & 127) + 1;
if (i != numComp - 1) value += " ";
}
gotSampleInfo=true;
} else {
var header=this.getElement$S("JPEG2000HeaderBox");
if (header != null ) {
var bits=header.getBitDepth$();
if ((bits & 128) == 128) signed=true;
bits=(bits & 127) + 1;
var numComp=header.getNumComponents$();
for (var i=0; i < numComp; i++) {
value += bits;
if (i != numComp - 1) value += " ";
}
gotSampleInfo=true;
}}var subNode=null;
if (gotSampleInfo) {
subNode=Clazz.new_($I$(12,1).c$$S,["BitsPerSample"]);
subNode.setAttribute$S$S("value", value);
node.appendChild$org_w3c_dom_Node(subNode);
}subNode=Clazz.new_($I$(12,1).c$$S,["PlanarConfiguration"]);
subNode.setAttribute$S$S("value", "TileInterleaved");
node.appendChild$org_w3c_dom_Node(subNode);
if (!sampleFormat && gotSampleInfo ) {
subNode=Clazz.new_($I$(12,1).c$$S,["SampleFormat"]);
subNode.setAttribute$S$S("value", signed ? "SignedIntegral" : "UnsignedIntegral");
node.appendChild$org_w3c_dom_Node(subNode);
}return node;
});

Clazz.newMeth(C$, 'getStandardDimensionNode$', function () {
var box=this.getElement$S("JPEG2000CaptureResolutionBox");
if (box != null ) {
var node=Clazz.new_($I$(12,1).c$$S,["Dimension"]);
var hRes=box.getHorizontalResolution$();
var vRes=box.getVerticalResolution$();
var ratio=vRes / hRes;
var subNode=Clazz.new_($I$(12,1).c$$S,["PixelAspectRatio"]);
subNode.setAttribute$S$S("value", "" + new Float(ratio).toString());
node.appendChild$org_w3c_dom_Node(subNode);
subNode=Clazz.new_($I$(12,1).c$$S,["HorizontalPixelSize"]);
subNode.setAttribute$S$S("value", "" + (new Float(1000 / hRes).toString()));
node.appendChild$org_w3c_dom_Node(subNode);
subNode=Clazz.new_($I$(12,1).c$$S,["VerticalPixelSize"]);
subNode.setAttribute$S$S("value", "" + (new Float(1000 / vRes).toString()));
node.appendChild$org_w3c_dom_Node(subNode);
return node;
}return null;
});

Clazz.newMeth(C$, 'getStandardTransparencyNode$', function () {
var channel=this.getElement$S("JPEG2000ChannelDefinitionBox");
if (channel != null ) {
var node=Clazz.new_($I$(12,1).c$$S,["Transparency"]);
var hasAlpha=false;
var isPremultiplied=false;
var type=channel.getTypes$();
for (var i=0; i < type.length; i++) {
if (type[i] == 1) hasAlpha=true;
if (type[i] == 2) isPremultiplied=true;
}
var value="none";
if (isPremultiplied) value="premultiplied";
 else if (hasAlpha) value="nonpremultiplied";
var subNode=Clazz.new_($I$(12,1).c$$S,["Alpha"]);
subNode.setAttribute$S$S("value", value);
node.appendChild$org_w3c_dom_Node(subNode);
return node;
}var node=Clazz.new_($I$(12,1).c$$S,["Transparency"]);
var subNode=Clazz.new_($I$(12,1).c$$S,["Alpha"]);
subNode.setAttribute$S$S("value", "none");
node.appendChild$org_w3c_dom_Node(subNode);
return null;
});

Clazz.newMeth(C$, 'getStandardTextNode$', function () {
if (this.boxes == null ) return null;
var text=null;
var iterator=this.boxes.iterator$();
while (iterator.hasNext$()){
var box=iterator.next$();
if (Clazz.instanceOf(box, "io.scif.media.imageioimpl.plugins.jpeg2000.XMLBox")) {
if (text == null ) text=Clazz.new_($I$(12,1).c$$S,["Text"]);
var subNode=Clazz.new_($I$(12,1).c$$S,["TextEntry"]);
var content= String.instantialize(box.getContent$());
subNode.setAttribute$S$S("value", content);
text.appendChild$org_w3c_dom_Node(subNode);
}}
return text;
});

Clazz.newMeth(C$, 'isReadOnly$', function () {
return false;
});

Clazz.newMeth(C$, 'mergeTree$S$org_w3c_dom_Node', function (formatName, root) {
if (formatName == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(11).getString$S("J2KMetadata0")]);
}if (root == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(11).getString$S("J2KMetadata2")]);
}if (formatName.equals$O("com_sun_media_imageio_plugins_jpeg2000_image_1.0") && root.getNodeName$().equals$O("com_sun_media_imageio_plugins_jpeg2000_image_1.0") ) {
p$1.mergeNativeTree$org_w3c_dom_Node.apply(this, [root]);
} else if (formatName.equals$O("javax_imageio_1.0")) {
p$1.mergeStandardTree$org_w3c_dom_Node.apply(this, [root]);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(11).getString$S("J2KMetadata1") + " " + formatName ]);
}});

Clazz.newMeth(C$, 'setFromTree$S$org_w3c_dom_Node', function (formatName, root) {
if (formatName == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(11).getString$S("J2KMetadata0")]);
}if (root == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(11).getString$S("J2KMetadata2")]);
}if (formatName.equals$O("com_sun_media_imageio_plugins_jpeg2000_image_1.0") && root.getNodeName$().equals$O("com_sun_media_imageio_plugins_jpeg2000_image_1.0") ) {
this.boxes=Clazz.new_($I$(1,1));
p$1.mergeNativeTree$org_w3c_dom_Node.apply(this, [root]);
} else if (formatName.equals$O("javax_imageio_1.0")) {
this.boxes=Clazz.new_($I$(1,1));
p$1.mergeStandardTree$org_w3c_dom_Node.apply(this, [root]);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(11).getString$S("J2KMetadata1") + " " + formatName ]);
}});

Clazz.newMeth(C$, 'reset$', function () {
this.boxes.clear$();
});

Clazz.newMeth(C$, 'addNode$io_scif_media_imageioimpl_plugins_jpeg2000_Box', function (node) {
if (this.boxes == null ) this.boxes=Clazz.new_($I$(1,1));
p$1.replace$S$io_scif_media_imageioimpl_plugins_jpeg2000_Box.apply(this, [$I$(13).getName$I(node.getType$()), node]);
});

Clazz.newMeth(C$, 'getElement$S', function (name) {
for (var i=this.boxes.size$() - 1; i >= 0; i--) {
var box=this.boxes.get$I(i);
if (name.equals$O($I$(13).getName$I(box.getType$()))) return box;
}
return null;
});

Clazz.newMeth(C$, 'mergeNativeTree$org_w3c_dom_Node', function (root) {
var list=root.getChildNodes$();
for (var i=list.getLength$() - 1; i >= 0; i--) {
var node=list.item$I(i);
var name=node.getNodeName$();
if (this.format.getParent$S(name) != null ) {
if (this.format.isLeaf$S(name)) {
var s=$I$(13).getAttribute$org_w3c_dom_Node$S(node, "Type");
var box=$I$(13).createBox$I$org_w3c_dom_Node($I$(13).getTypeInt$S(s), node);
if (this.format.singleInstance$S(name) && this.getElement$S(name) != null  ) {
p$1.replace$S$io_scif_media_imageioimpl_plugins_jpeg2000_Box.apply(this, [name, box]);
} else this.boxes.add$TE(box);
} else {
p$1.mergeNativeTree$org_w3c_dom_Node.apply(this, [node]);
}}}
}, p$1);

Clazz.newMeth(C$, 'mergeStandardTree$org_w3c_dom_Node', function (root) {
var children=root.getChildNodes$();
var numComps=0;
for (var i=0; i < children.getLength$(); i++) {
var node=children.item$I(i);
var name=node.getNodeName$();
if (name.equals$O("Chroma")) {
var children1=node.getChildNodes$();
for (var j=0; j < children1.getLength$(); j++) {
var child=children1.item$I(j);
var name1=child.getNodeName$();
if (name1.equals$O("NumChannels")) {
var s=$I$(13).getAttribute$org_w3c_dom_Node$S(child, "value");
numComps= new Integer(s).intValue$();
}if (name1.equals$O("ColorSpaceType")) p$1.createColorSpecificationBoxFromStandardNode$org_w3c_dom_Node.apply(this, [child]);
if (name1.equals$O("Palette")) {
p$1.createPaletteBoxFromStandardNode$org_w3c_dom_Node.apply(this, [child]);
}}
} else if (name.equals$O("Compression")) {
} else if (name.equals$O("Data")) {
p$1.createBitsPerComponentBoxFromStandardNode$org_w3c_dom_Node.apply(this, [node]);
p$1.createHeaderBoxFromStandardNode$org_w3c_dom_Node$I.apply(this, [node, numComps]);
} else if (name.equals$O("Dimension")) {
p$1.createResolutionBoxFromStandardNode$org_w3c_dom_Node.apply(this, [node]);
} else if (name.equals$O("Document")) {
p$1.createXMLBoxFromStandardNode$org_w3c_dom_Node.apply(this, [node]);
} else if (name.equals$O("Text")) {
p$1.createXMLBoxFromStandardNode$org_w3c_dom_Node.apply(this, [node]);
} else if (name.equals$O("Transparency")) {
p$1.createChannelDefinitionFromStandardNode$org_w3c_dom_Node.apply(this, [node]);
} else {
throw Clazz.new_(Clazz.load('javax.imageio.metadata.IIOInvalidTreeException').c$$S$org_w3c_dom_Node,[$I$(11).getString$S("J2KMetadata3") + " " + name , node]);
}}
}, p$1);

Clazz.newMeth(C$, 'createColorSpecificationBoxFromStandardNode$org_w3c_dom_Node', function (node) {
if (node.getNodeName$() != "ColorSpaceType") throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(11).getString$S("J2KMetadata4")]);
var name=$I$(13).getAttribute$org_w3c_dom_Node$S(node, "name");
var ecs=name.equals$O("RGB") ? 16 : (name.equals$O("Gray") ? 17 : 0);
if (ecs == 16 || ecs == 17 ) {
p$1.replace$S$io_scif_media_imageioimpl_plugins_jpeg2000_Box.apply(this, ["JPEG2000ColorSpecificationBox", Clazz.new_($I$(6,1).c$$B$B$B$I$java_awt_color_ICC_Profile,[($b$[0] = 1, $b$[0]), ($b$[0] = 0, $b$[0]), ($b$[0] = 0, $b$[0]), ecs, null])]);
}}, p$1);

Clazz.newMeth(C$, 'createPaletteBoxFromStandardNode$org_w3c_dom_Node', function (node) {
if (node.getNodeName$() != "Palette") throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(11).getString$S("J2KMetadata5")]);
var children=node.getChildNodes$();
var maxIndex=-1;
var hasAlpha=false;
for (var i=0; i < children.getLength$(); i++) {
var child=children.item$I(i);
var name=child.getNodeName$();
if (name.equals$O("PaletteEntry")) {
var s=$I$(13).getAttribute$org_w3c_dom_Node$S(child, "index");
var index= new Integer(s).intValue$();
if (index > maxIndex) {
maxIndex=index;
}if ($I$(13).getAttribute$org_w3c_dom_Node$S(child, "alpha") != null ) {
hasAlpha=true;
}}}
var numBits=32;
var mask=-2147483648;
while (mask != 0 && (maxIndex & mask) == 0 ){
numBits--;
mask>>>=1;
}
var size=1 << numBits;
var red=Clazz.array(Byte.TYPE, [size]);
var green=Clazz.array(Byte.TYPE, [size]);
var blue=Clazz.array(Byte.TYPE, [size]);
var alpha=hasAlpha ? Clazz.array(Byte.TYPE, [size]) : null;
for (var i=0; i < children.getLength$(); i++) {
var child=children.item$I(i);
var name=child.getNodeName$();
if (name.equals$O("PaletteEntry")) {
var s=$I$(13).getAttribute$org_w3c_dom_Node$S(child, "index");
var index= new Integer(s).intValue$();
s=$I$(13).getAttribute$org_w3c_dom_Node$S(child, "red");
red[index]=((( new Integer(s).intValue$())|0)|0);
s=$I$(13).getAttribute$org_w3c_dom_Node$S(child, "green");
green[index]=((( new Integer(s).intValue$())|0)|0);
s=$I$(13).getAttribute$org_w3c_dom_Node$S(child, "blue");
blue[index]=((( new Integer(s).intValue$())|0)|0);
var t=($b$[0] = -1, $b$[0]);
s=$I$(13).getAttribute$org_w3c_dom_Node$S(child, "alpha");
if (s != null ) {
t=($b$[0] = (( new Integer(s).intValue$())|0), $b$[0]);
}if (alpha != null ) {
alpha[index]=(t|0);
}}}
var icm;
if (alpha == null ) icm=Clazz.new_($I$(14,1).c$$I$I$BA$BA$BA,[numBits, size, red, green, blue]);
 else icm=Clazz.new_($I$(14,1).c$$I$I$BA$BA$BA$BA,[numBits, size, red, green, blue, alpha]);
p$1.replace$S$io_scif_media_imageioimpl_plugins_jpeg2000_Box.apply(this, ["JPEG2000PaletteBox", Clazz.new_($I$(8,1).c$$java_awt_image_IndexColorModel,[icm])]);
}, p$1);

Clazz.newMeth(C$, 'createBitsPerComponentBoxFromStandardNode$org_w3c_dom_Node', function (node) {
if (node.getNodeName$() != "Data") throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(11).getString$S("J2KMetadata6")]);
var children=node.getChildNodes$();
var bits=null;
var isSigned=false;
for (var i=0; i < children.getLength$(); i++) {
var child=children.item$I(i);
var name=child.getNodeName$();
if (name.equals$O("BitsPerSample")) {
var s=$I$(13).getAttribute$org_w3c_dom_Node$S(child, "value");
bits=$I$(13).parseByteArray$S(s).clone$();
} else if (name.equals$O("SampleFormat")) {
var s=$I$(13).getAttribute$org_w3c_dom_Node$S(child, "value");
isSigned=s.equals$O("SignedIntegral");
}}
if (bits != null ) {
for (var i=0; i < bits.length; i++) {
bits[i]=((((bits[i] & 255) - 1)|0)|0);
if (isSigned) {
bits[i]=(bits[i]|(128)|0);
}}
p$1.replace$S$io_scif_media_imageioimpl_plugins_jpeg2000_Box.apply(this, ["JPEG2000BitsPerComponent", Clazz.new_($I$(15,1).c$$BA,[bits])]);
}}, p$1);

Clazz.newMeth(C$, 'createResolutionBoxFromStandardNode$org_w3c_dom_Node', function (node) {
if (node.getNodeName$() != "Dimension") throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(11).getString$S("J2KMetadata7")]);
var children=node.getChildNodes$();
var hRes=0.0;
var vRes=0.0;
var gotH=false;
var gotV=false;
for (var i=0; i < children.getLength$(); i++) {
var child=children.item$I(i);
var name=child.getNodeName$();
if (name.equals$O("HorizontalPixelSize")) {
var s=$I$(13).getAttribute$org_w3c_dom_Node$S(child, "value");
hRes= new Float(s).floatValue$();
hRes=1000 / hRes;
gotH=true;
}if (name.equals$O("VerticalPixelSize")) {
var s=$I$(13).getAttribute$org_w3c_dom_Node$S(child, "value");
vRes= new Float(s).floatValue$();
vRes=1000 / vRes;
gotV=true;
}}
if (gotH && !gotV ) {
vRes=hRes;
} else if (gotV && !gotH ) {
hRes=vRes;
}if (gotH || gotV ) {
p$1.replace$S$io_scif_media_imageioimpl_plugins_jpeg2000_Box.apply(this, ["JPEG2000CaptureResolutionBox", Clazz.new_($I$(16,1).c$$I$F$F,[1919251299, hRes, vRes])]);
}}, p$1);

Clazz.newMeth(C$, 'createXMLBoxFromStandardNode$org_w3c_dom_Node', function (node) {
var children=node.getChildNodes$();
var value="<" + node.getNodeName$() + ">" ;
for (var i=0; i < children.getLength$(); i++) {
var child=children.item$I(i);
var name=child.getNodeName$();
value += "<" + name + " " ;
var map=child.getAttributes$();
for (var j=0; j < map.getLength$(); j++) {
var att=map.item$I(j);
value += att.getNodeName$() + "=\"" + att.getNodeValue$() + "\" " ;
}
value += " />";
}
value += "</" + node.getNodeName$() + ">" ;
this.boxes.add$TE(Clazz.new_($I$(17,1).c$$BA,[value.getBytes$()]));
}, p$1);

Clazz.newMeth(C$, 'createHeaderBoxFromStandardNode$org_w3c_dom_Node$I', function (node, numComps) {
var header=this.getElement$S("JPEG2000HeaderBox");
var unknownColor=($b$[0] = ((this.getElement$S("JPEG2000ColorSpecificationBox") == null  ? 1 : 0)|0), $b$[0]);
if (header != null ) {
if (numComps == 0) ;numComps=header.getNumComponents$();
header=Clazz.new_($I$(10,1).c$$I$I$I$I$I$I$I,[header.getHeight$(), header.getWidth$(), numComps, header.getBitDepth$(), header.getCompressionType$(), unknownColor, header.getIntellectualProperty$()]);
} else {
header=Clazz.new_($I$(10,1).c$$I$I$I$I$I$I$I,[0, 0, numComps, 0, 0, unknownColor, 0]);
}p$1.replace$S$io_scif_media_imageioimpl_plugins_jpeg2000_Box.apply(this, ["JPEG2000HeaderBox", header]);
}, p$1);

Clazz.newMeth(C$, 'createChannelDefinitionFromStandardNode$org_w3c_dom_Node', function (node) {
if (node.getNodeName$() != "Transparency") throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(11).getString$S("J2KMetadata8")]);
var header=this.getElement$S("JPEG2000HeaderBox");
var numComps=3;
if (header != null ) {
numComps=header.getNumComponents$();
}var children=node.getChildNodes$();
var hasAlpha=false;
var isPremultiplied=false;
for (var i=0; i < children.getLength$(); i++) {
var child=children.item$I(i);
var name=child.getNodeName$();
if (name.equals$O("Alpha")) {
var value=$I$(13).getAttribute$org_w3c_dom_Node$S(child, "value");
if (value.equals$O("premultiplied")) isPremultiplied=true;
if (value.equals$O("nonpremultiplied")) hasAlpha=true;
}}
if (!hasAlpha) return;
var num=($s$[0] = (numComps * (isPremultiplied ? 3 : 2)), $s$[0]);
var channels=Clazz.array(Short.TYPE, [num]);
var types=Clazz.array(Short.TYPE, [num]);
var associations=Clazz.array(Short.TYPE, [num]);
$I$(7).fillBasedOnBands$I$Z$HA$HA$HA(numComps, isPremultiplied, channels, types, associations);
p$1.replace$S$io_scif_media_imageioimpl_plugins_jpeg2000_Box.apply(this, ["JPEG2000ChannelDefinitionBox", Clazz.new_($I$(7,1).c$$HA$HA$HA,[channels, types, associations])]);
}, p$1);

Clazz.newMeth(C$, 'replace$S$io_scif_media_imageioimpl_plugins_jpeg2000_Box', function (name, box) {
for (var i=this.boxes.size$() - 1; i >= 0; i--) {
var box1=this.boxes.get$I(i);
if (name.equals$O($I$(13).getName$I(box1.getType$()))) {
this.boxes.set$I$TE(i, box);
return;
}}
this.boxes.add$TE(box);
}, p$1);

Clazz.newMeth(C$, 'insertNodeIntoTree$javax_imageio_metadata_IIOMetadataNode$javax_imageio_metadata_IIOMetadataNode', function (root, node) {
var name=node.getNodeName$();
var parent=this.format.getParent$S(name);
if (parent == null ) return false;
var parentNode=p$1.getNodeFromTree$javax_imageio_metadata_IIOMetadataNode$S$S.apply(this, [root, parent, name]);
if (parentNode == null ) parentNode=p$1.createNodeIntoTree$javax_imageio_metadata_IIOMetadataNode$S.apply(this, [root, parent]);
parentNode.appendChild$org_w3c_dom_Node(node);
return true;
}, p$1);

Clazz.newMeth(C$, 'getNodeFromTree$javax_imageio_metadata_IIOMetadataNode$S$S', function (root, name, childName) {
if (name.equals$O(root.getNodeName$())) return root;
var list=root.getChildNodes$();
for (var i=0; i < list.getLength$(); i++) {
var node=list.item$I(i);
if (node.getNodeName$().equals$O(name)) {
if (name.equals$O("JPEG2000UUIDInfoBox") && p$1.checkUUIDInfoBox$org_w3c_dom_Node$S.apply(this, [node, childName]) ) continue;
 else return node;
}node=p$1.getNodeFromTree$javax_imageio_metadata_IIOMetadataNode$S$S.apply(this, [node, name, childName]);
if (node != null ) return node;
}
return null;
}, p$1);

Clazz.newMeth(C$, 'createNodeIntoTree$javax_imageio_metadata_IIOMetadataNode$S', function (root, name) {
var node=p$1.getNodeFromTree$javax_imageio_metadata_IIOMetadataNode$S$S.apply(this, [root, name, null]);
if (node != null ) return node;
node=Clazz.new_($I$(12,1).c$$S,[name]);
var parent=this.format.getParent$S(name);
var parentNode=p$1.createNodeIntoTree$javax_imageio_metadata_IIOMetadataNode$S.apply(this, [root, parent]);
parentNode.appendChild$org_w3c_dom_Node(node);
return node;
}, p$1);

Clazz.newMeth(C$, 'isOriginalSigned$java_awt_image_SampleModel', function (sampleModel) {
var type=sampleModel.getDataType$();
if (type == 0 || type == 1 ) return false;
return true;
}, p$1);

Clazz.newMeth(C$, 'checkUUIDInfoBox$org_w3c_dom_Node$S', function (node, childName) {
var list=node.getChildNodes$();
for (var i=0; i < list.getLength$(); i++) {
var child=list.item$I(i);
var name=child.getNodeName$();
if (name.equals$O(childName)) return true;
}
return false;
}, p$1);
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:19 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
