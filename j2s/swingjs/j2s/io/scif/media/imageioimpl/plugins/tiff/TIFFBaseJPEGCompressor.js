(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),p$1={},I$=[[0,'java.util.ArrayList','java.util.Arrays','javax.imageio.ImageIO','javax.imageio.plugins.jpeg.JPEGImageWriteParam',['io.scif.media.imageioimpl.plugins.tiff.TIFFBaseJPEGCompressor','.IIOByteArrayOutputStream'],'javax.imageio.stream.MemoryCacheImageOutputStream','java.awt.image.DataBufferByte','java.awt.color.ColorSpace','java.awt.image.ComponentColorModel','java.awt.image.PixelInterleavedSampleModel','java.awt.image.Raster','java.awt.Point','java.awt.image.BufferedImage','javax.imageio.IIOImage']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFBaseJPEGCompressor", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFCompressor');
C$.$classes$=[['IIOByteArrayOutputStream',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.param=null;
this.JPEGParam=null;
this.JPEGWriter=null;
this.writeAbbreviatedStream=false;
this.JPEGStreamMetadata=null;
this.JPEGImageMetadata=null;
}, 1);

C$.$fields$=[['Z',['writeAbbreviatedStream','usingCodecLib'],'O',['param','javax.imageio.ImageWriteParam','JPEGParam','javax.imageio.plugins.jpeg.JPEGImageWriteParam','JPEGWriter','javax.imageio.ImageWriter','JPEGStreamMetadata','javax.imageio.metadata.IIOMetadata','+JPEGImageMetadata','baos','io.scif.media.imageioimpl.plugins.tiff.TIFFBaseJPEGCompressor.IIOByteArrayOutputStream']]]

Clazz.newMeth(C$, 'pruneNodes$org_w3c_dom_Node$Z', function (tree, pruneTables) {
if (tree == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["tree == null!"]);
}if (!tree.getNodeName$().equals$O("javax_imageio_jpeg_image_1.0")) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["root node name is not javax_imageio_jpeg_image_1.0!"]);
}if (false) {
System.out.println$S("pruneNodes(" + tree + "," + pruneTables + ")" );
}var wantedNodes=Clazz.new_($I$(1,1));
wantedNodes.addAll$java_util_Collection($I$(2).asList$TTA(Clazz.array(String, -1, ["JPEGvariety", "markerSequence", "sof", "componentSpec", "sos", "scanComponentSpec"])));
if (!pruneTables) {
wantedNodes.add$TE("dht");
wantedNodes.add$TE("dhtable");
wantedNodes.add$TE("dqt");
wantedNodes.add$TE("dqtable");
}var iioTree=tree;
var nodes=C$.getAllNodes$javax_imageio_metadata_IIOMetadataNode$java_util_List(iioTree, null);
var numNodes=nodes.size$();
for (var i=0; i < numNodes; i++) {
var node=nodes.get$I(i);
if (!wantedNodes.contains$O(node.getNodeName$())) {
if (false) {
System.out.println$S("Removing " + node.getNodeName$());
}node.getParentNode$().removeChild$org_w3c_dom_Node(node);
}}
}, 1);

Clazz.newMeth(C$, 'getAllNodes$javax_imageio_metadata_IIOMetadataNode$java_util_List', function (root, nodes) {
if (nodes == null ) nodes=Clazz.new_($I$(1,1));
if (root.hasChildNodes$()) {
var sibling=root.getFirstChild$();
while (sibling != null ){
nodes.add$TE(sibling);
nodes=C$.getAllNodes$javax_imageio_metadata_IIOMetadataNode$java_util_List(sibling, nodes);
sibling=sibling.getNextSibling$();
}
}return nodes;
}, 1);

Clazz.newMeth(C$, 'c$$S$I$Z$javax_imageio_ImageWriteParam', function (compressionType, compressionTagValue, isCompressionLossless, param) {
;C$.superclazz.c$$S$I$Z.apply(this,[compressionType, compressionTagValue, isCompressionLossless]);C$.$init$.apply(this);
this.param=param;
}, 1);

Clazz.newMeth(C$, 'initJPEGWriter$Z$Z', function (supportsStreamMetadata, supportsImageMetadata) {
if (this.JPEGWriter != null  && (supportsStreamMetadata || supportsImageMetadata ) ) {
var spi=this.JPEGWriter.getOriginatingProvider$();
if (supportsStreamMetadata) {
var smName=spi.getNativeStreamMetadataFormatName$();
if (smName == null  || !smName.equals$O("javax_imageio_jpeg_stream_1.0") ) {
this.JPEGWriter=null;
}}if (this.JPEGWriter != null  && supportsImageMetadata ) {
var imName=spi.getNativeImageMetadataFormatName$();
if (imName == null  || !imName.equals$O("javax_imageio_jpeg_image_1.0") ) {
this.JPEGWriter=null;
}}}if (this.JPEGWriter == null ) {
var iter=$I$(3).getImageWritersByFormatName$S("jpeg");
while (iter.hasNext$()){
var writer=iter.next$();
if (supportsStreamMetadata || supportsImageMetadata ) {
var spi=writer.getOriginatingProvider$();
if (supportsStreamMetadata) {
var smName=spi.getNativeStreamMetadataFormatName$();
if (smName == null  || !smName.equals$O("javax_imageio_jpeg_stream_1.0") ) {
continue;
}}if (supportsImageMetadata) {
var imName=spi.getNativeImageMetadataFormatName$();
if (imName == null  || !imName.equals$O("javax_imageio_jpeg_image_1.0") ) {
continue;
}}}this.JPEGWriter=writer;
break;
}
if (this.JPEGWriter == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["No appropriate JPEG writers found!"]);
}}this.usingCodecLib=this.JPEGWriter.getClass$().getName$().startsWith$S("io.scif.media");
if (false) System.out.println$S("usingCodecLib = " + this.usingCodecLib);
if (this.JPEGParam == null ) {
if (this.param != null  && Clazz.instanceOf(this.param, "javax.imageio.plugins.jpeg.JPEGImageWriteParam") ) {
this.JPEGParam=this.param;
} else {
this.JPEGParam=Clazz.new_($I$(4,1).c$$java_util_Locale,[this.writer != null  ? this.writer.getLocale$() : null]);
if (this.param.getCompressionMode$() == 2) {
this.JPEGParam.setCompressionMode$I(2);
this.JPEGParam.setCompressionQuality$F(this.param.getCompressionQuality$());
}}}});

Clazz.newMeth(C$, 'getImageMetadata$Z', function (pruneTables) {
if (false) {
System.out.println$S("getImageMetadata(" + pruneTables + ")" );
}if (this.JPEGImageMetadata == null  && "javax_imageio_jpeg_image_1.0".equals$O(this.JPEGWriter.getOriginatingProvider$().getNativeImageMetadataFormatName$()) ) {
var tiffWriter=this.writer;
this.JPEGImageMetadata=this.JPEGWriter.getDefaultImageMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam(tiffWriter.imageType, this.JPEGParam);
var tree=this.JPEGImageMetadata.getAsTree$S("javax_imageio_jpeg_image_1.0");
try {
C$.pruneNodes$org_w3c_dom_Node$Z(tree, pruneTables);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S$Throwable,["Error pruning unwanted nodes", e]);
} else {
throw e;
}
}
try {
this.JPEGImageMetadata.setFromTree$S$org_w3c_dom_Node("javax_imageio_jpeg_image_1.0", tree);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.imageio.metadata.IIOInvalidTreeException")){
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S$Throwable,["Cannot set pruned image metadata!", e]);
} else {
throw e;
}
}
}return this.JPEGImageMetadata;
}, p$1);

Clazz.newMeth(C$, 'encode$BA$I$I$I$IA$I', function (b, off, width, height, bitsPerSample, scanlineStride) {
if (this.JPEGWriter == null ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["JPEG writer has not been initialized!"]);
}if (!((bitsPerSample.length == 3 && bitsPerSample[0] == 8  && bitsPerSample[1] == 8  && bitsPerSample[2] == 8 ) || (bitsPerSample.length == 1 && bitsPerSample[0] == 8 ) )) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Can only JPEG compress 8- and 24-bit images!"]);
}var ios;
var initialStreamPosition;
if (this.usingCodecLib && !this.writeAbbreviatedStream ) {
ios=this.stream;
initialStreamPosition=this.stream.getStreamPosition$();
} else {
if (this.baos == null ) {
this.baos=Clazz.new_($I$(5,1));
} else {
this.baos.reset$();
}ios=Clazz.new_($I$(6,1).c$$java_io_OutputStream,[this.baos]);
initialStreamPosition=0;
}this.JPEGWriter.setOutput$O(ios);
var dbb;
if (off == 0 || this.usingCodecLib ) {
dbb=Clazz.new_($I$(7,1).c$$BA$I,[b, b.length]);
} else {
var bytesPerSegment=scanlineStride * height;
var btmp=Clazz.array(Byte.TYPE, [bytesPerSegment]);
System.arraycopy$O$I$O$I$I(b, off, btmp, 0, bytesPerSegment);
dbb=Clazz.new_($I$(7,1).c$$BA$I,[btmp, bytesPerSegment]);
off=0;
}var offsets;
var cs;
if (bitsPerSample.length == 3) {
offsets=Clazz.array(Integer.TYPE, -1, [off, off + 1, off + 2]);
cs=$I$(8).getInstance$I(1000);
} else {
offsets=Clazz.array(Integer.TYPE, -1, [off]);
cs=$I$(8).getInstance$I(1003);
}var cm=Clazz.new_($I$(9,1).c$$java_awt_color_ColorSpace$Z$Z$I$I,[cs, false, false, 1, 0]);
var sm=Clazz.new_($I$(10,1).c$$I$I$I$I$I$IA,[0, width, height, bitsPerSample.length, scanlineStride, offsets]);
var wras=$I$(11).createWritableRaster$java_awt_image_SampleModel$java_awt_image_DataBuffer$java_awt_Point(sm, dbb, Clazz.new_($I$(12,1).c$$I$I,[0, 0]));
var bi=Clazz.new_($I$(13,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[cm, wras, false, null]);
var imageMetadata=p$1.getImageMetadata$Z.apply(this, [this.writeAbbreviatedStream]);
var compDataLength;
if (this.usingCodecLib && !this.writeAbbreviatedStream ) {
this.JPEGWriter.write$javax_imageio_metadata_IIOMetadata$javax_imageio_IIOImage$javax_imageio_ImageWriteParam(null, Clazz.new_($I$(14,1).c$$java_awt_image_RenderedImage$java_util_List$javax_imageio_metadata_IIOMetadata,[bi, null, imageMetadata]), this.JPEGParam);
compDataLength=((this.stream.getStreamPosition$() - initialStreamPosition)|0);
} else {
if (this.writeAbbreviatedStream) {
this.JPEGWriter.prepareWriteSequence$javax_imageio_metadata_IIOMetadata(this.JPEGStreamMetadata);
ios.flush$();
this.baos.reset$();
var image=Clazz.new_($I$(14,1).c$$java_awt_image_RenderedImage$java_util_List$javax_imageio_metadata_IIOMetadata,[bi, null, imageMetadata]);
this.JPEGWriter.writeToSequence$javax_imageio_IIOImage$javax_imageio_ImageWriteParam(image, this.JPEGParam);
this.JPEGWriter.endWriteSequence$();
} else {
this.JPEGWriter.write$javax_imageio_metadata_IIOMetadata$javax_imageio_IIOImage$javax_imageio_ImageWriteParam(null, Clazz.new_($I$(14,1).c$$java_awt_image_RenderedImage$java_util_List$javax_imageio_metadata_IIOMetadata,[bi, null, imageMetadata]), this.JPEGParam);
}compDataLength=this.baos.size$();
this.baos.writeTo$javax_imageio_stream_ImageOutputStream(this.stream);
this.baos.reset$();
}return compDataLength;
});

Clazz.newMeth(C$, 'finalize$', function () {
C$.superclazz.prototype.finalize$.apply(this, []);
if (this.JPEGWriter != null ) {
this.JPEGWriter.dispose$();
}});
;
(function(){/*c*/var C$=Clazz.newClass(P$.TIFFBaseJPEGCompressor, "IIOByteArrayOutputStream", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'java.io.ByteArrayOutputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (size) {
;C$.superclazz.c$$I.apply(this,[size]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'writeTo$javax_imageio_stream_ImageOutputStream', function (ios) {
ios.write$BA$I$I(this.buf, 0, this.count);
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:19 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
