(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),p$1={},I$=[[0,'io.scif.media.imageio.plugins.tiff.TIFFImageWriteParam','io.scif.media.imageioimpl.plugins.tiff.TIFFStreamMetadata','java.util.ArrayList','io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','io.scif.media.imageioimpl.plugins.tiff.TIFFImageMetadata','java.util.Arrays','io.scif.media.imageio.plugins.tiff.TIFFField','javax.imageio.ImageWriteParam','io.scif.media.imageioimpl.plugins.tiff.TIFFRLECompressor','io.scif.media.imageioimpl.plugins.tiff.TIFFT4Compressor','io.scif.media.imageioimpl.plugins.tiff.TIFFT6Compressor','io.scif.media.imageioimpl.plugins.tiff.TIFFLZWCompressor','io.scif.media.imageioimpl.plugins.tiff.TIFFEXIFJPEGCompressor','io.scif.media.imageioimpl.plugins.tiff.TIFFJPEGCompressor','io.scif.media.imageioimpl.plugins.tiff.TIFFZLibCompressor','io.scif.media.imageioimpl.plugins.tiff.TIFFPackBitsCompressor','io.scif.media.imageioimpl.plugins.tiff.TIFFDeflateCompressor','io.scif.media.imageioimpl.plugins.tiff.TIFFLSBCompressor','io.scif.media.imageioimpl.plugins.tiff.TIFFNullCompressor','io.scif.media.imageioimpl.plugins.tiff.TIFFYCbCrColorConverter','io.scif.media.imageioimpl.plugins.tiff.TIFFCIELabColorConverter','io.scif.media.imageioimpl.common.ImageUtil','io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','io.scif.media.imageioimpl.plugins.tiff.TIFFIFD','io.scif.media.imageio.plugins.tiff.EXIFParentTIFFTagSet','java.awt.Rectangle','java.awt.image.Raster','java.awt.Point','java.nio.ByteOrder','javax.imageio.ImageTypeSpecifier','io.scif.media.imageioimpl.plugins.tiff.EmptyImage','javax.imageio.IIOImage','io.scif.media.imageioimpl.plugins.tiff.TIFFImageReader','io.scif.media.imageioimpl.plugins.tiff.TIFFImageReaderSpi','io.scif.media.imageioimpl.common.SingleTileRenderedImage']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFImageWriter", null, 'javax.imageio.ImageWriter');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.TIFFCompressionTypes=Clazz.array(String, -1, ["CCITT RLE", "CCITT T.4", "CCITT T.6", "LZW", "JPEG", "ZLib", "PackBits", "Deflate", "EXIF JPEG"]);
C$.compressionTypes=Clazz.array(String, -1, ["CCITT RLE", "CCITT T.4", "CCITT T.6", "LZW", "Old JPEG", "JPEG", "ZLib", "PackBits", "Deflate", "EXIF JPEG"]);
C$.isCompressionLossless=Clazz.array(Boolean.TYPE, -1, [true, true, true, true, false, false, true, true, true, false]);
C$.compressionNumbers=Clazz.array(Integer.TYPE, -1, [2, 3, 4, 5, 6, 7, 8, 32773, 32946, 6]);
}

Clazz.newMeth(C$, '$init$', function () {
this.sampleSize=null;
this.scalingBitDepth=-1;
this.isRescaling=false;
this.sampleFormat=4;
this.scale=null;
this.scale0=null;
this.scaleh=null;
this.scalel=null;
this.nextSpace=0;
this.isWritingSequence=false;
this.isInsertingEmpty=false;
this.isWritingEmpty=false;
this.replacePixelsLock= Clazz.new_();
this.replacePixelsIndex=-1;
this.replacePixelsMetadata=null;
this.replacePixelsTileOffsets=null;
this.replacePixelsByteCounts=null;
this.replacePixelsOffsetsPosition=0;
this.replacePixelsByteCountsPosition=0;
this.replacePixelsRegion=null;
this.inReplacePixelsNest=false;
this.reader=null;
}, 1);

C$.$fields$=[['Z',['isRescaling','isBilevel','isImageSimple','isInverted','isTiled','isWritingSequence','isInsertingEmpty','isWritingEmpty','inReplacePixelsNest'],'I',['sourceXOffset','sourceYOffset','sourceWidth','sourceHeight','periodX','periodY','bitDepth','numBands','tileWidth','tileLength','tilesAcross','tilesDown','scalingBitDepth','nativePhotometricInterpretation','photometricInterpretation','sampleFormat','compression','predictor','totalPixels','pixelsDone','replacePixelsIndex'],'L',['headerPosition','nextIFDPointerPos','nextSpace','replacePixelsOffsetsPosition','replacePixelsByteCountsPosition'],'O',['stream','javax.imageio.stream.ImageOutputStream','image','java.awt.image.RenderedImage','imageType','javax.imageio.ImageTypeSpecifier','byteOrder','java.nio.ByteOrder','param','javax.imageio.ImageWriteParam','compressor','io.scif.media.imageio.plugins.tiff.TIFFCompressor','colorConverter','io.scif.media.imageio.plugins.tiff.TIFFColorConverter','streamMetadata','io.scif.media.imageioimpl.plugins.tiff.TIFFStreamMetadata','imageMetadata','io.scif.media.imageioimpl.plugins.tiff.TIFFImageMetadata','sourceBands','int[]','+sampleSize','bitsPerSample','char[]','scale','byte[][]','scale0','byte[]','scaleh','byte[][]','+scalel','replacePixelsLock','java.lang.Object','replacePixelsMetadata','io.scif.media.imageioimpl.plugins.tiff.TIFFImageMetadata','replacePixelsTileOffsets','long[]','+replacePixelsByteCounts','replacePixelsRegion','java.awt.Rectangle','reader','io.scif.media.imageioimpl.plugins.tiff.TIFFImageReader']]
,['O',['TIFFCompressionTypes','String[]','+compressionTypes','isCompressionLossless','boolean[]','compressionNumbers','int[]']]]

Clazz.newMeth(C$, 'XToTileX$I$I$I', function (x, tileGridXOffset, tileWidth) {
x-=tileGridXOffset;
if (x < 0) {
x+=1 - tileWidth;
}return (x/tileWidth|0);
}, 1);

Clazz.newMeth(C$, 'YToTileY$I$I$I', function (y, tileGridYOffset, tileHeight) {
y-=tileGridYOffset;
if (y < 0) {
y+=1 - tileHeight;
}return (y/tileHeight|0);
}, 1);

Clazz.newMeth(C$, 'c$$javax_imageio_spi_ImageWriterSpi', function (originatingProvider) {
;C$.superclazz.c$$javax_imageio_spi_ImageWriterSpi.apply(this,[originatingProvider]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getDefaultWriteParam$', function () {
return Clazz.new_($I$(1,1).c$$java_util_Locale,[this.getLocale$()]);
});

Clazz.newMeth(C$, 'setOutput$O', function (output) {
C$.superclazz.prototype.setOutput$O.apply(this, [output]);
if (output != null ) {
if (!(Clazz.instanceOf(output, "javax.imageio.stream.ImageOutputStream"))) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["output not an ImageOutputStream!"]);
}this.stream=output;
try {
this.headerPosition=this.stream.getStreamPosition$();
try {
var b=Clazz.array(Byte.TYPE, [4]);
this.stream.readFully$BA(b);
if ((b[0] == 73 && b[1] == 73  && b[2] == 42  && b[3] == 0 ) || (b[0] == 77 && b[1] == 77  && b[2] == 0  && b[3] == 42 ) ) {
this.nextSpace=this.stream.length$();
} else {
this.nextSpace=this.headerPosition;
}} catch (io) {
if (Clazz.exceptionOf(io,"java.io.IOException")){
this.nextSpace=this.headerPosition;
} else {
throw io;
}
}
this.stream.seek$J(this.headerPosition);
} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
this.nextSpace=this.headerPosition=0;
} else {
throw ioe;
}
}
} else {
this.stream=null;
}});

Clazz.newMeth(C$, 'getDefaultStreamMetadata$javax_imageio_ImageWriteParam', function (param) {
return Clazz.new_($I$(2,1));
});

Clazz.newMeth(C$, 'getDefaultImageMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam', function (imageType, param) {
var tagSets=Clazz.new_($I$(3,1).c$$I,[1]);
tagSets.add$TE($I$(4).getInstance$());
var imageMetadata=Clazz.new_($I$(5,1).c$$java_util_List,[tagSets]);
if (imageType != null ) {
var im=this.convertImageMetadata$javax_imageio_metadata_IIOMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam(imageMetadata, imageType, param);
if (im != null ) {
imageMetadata=im;
}}return imageMetadata;
});

Clazz.newMeth(C$, 'convertStreamMetadata$javax_imageio_metadata_IIOMetadata$javax_imageio_ImageWriteParam', function (inData, param) {
if (inData == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["inData == null!"]);
}var outData=null;
if (Clazz.instanceOf(inData, "io.scif.media.imageioimpl.plugins.tiff.TIFFStreamMetadata")) {
outData=Clazz.new_($I$(2,1));
outData.byteOrder=(inData).byteOrder;
return outData;
} else if ($I$(6).asList$TTA(inData.getMetadataFormatNames$()).contains$O("com_sun_media_imageio_plugins_tiff_stream_1.0")) {
outData=Clazz.new_($I$(2,1));
var format="com_sun_media_imageio_plugins_tiff_stream_1.0";
try {
outData.mergeTree$S$org_w3c_dom_Node(format, inData.getAsTree$S(format));
} catch (e) {
if (Clazz.exceptionOf(e,"javax.imageio.metadata.IIOInvalidTreeException")){
} else {
throw e;
}
}
}return outData;
});

Clazz.newMeth(C$, 'convertImageMetadata$javax_imageio_metadata_IIOMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam', function (inData, imageType, param) {
if (inData == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["inData == null!"]);
}if (imageType == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["imageType == null!"]);
}var outData=null;
if (Clazz.instanceOf(inData, "io.scif.media.imageioimpl.plugins.tiff.TIFFImageMetadata")) {
var inIFD=(inData).getRootIFD$();
outData=Clazz.new_($I$(5,1).c$$io_scif_media_imageioimpl_plugins_tiff_TIFFIFD,[inIFD.getShallowClone$()]);
} else if ($I$(6).asList$TTA(inData.getMetadataFormatNames$()).contains$O("com_sun_media_imageio_plugins_tiff_image_1.0")) {
try {
outData=p$1.convertNativeImageMetadata$javax_imageio_metadata_IIOMetadata.apply(this, [inData]);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.imageio.metadata.IIOInvalidTreeException")){
} else {
throw e;
}
}
} else if (inData.isStandardMetadataFormatSupported$()) {
try {
outData=p$1.convertStandardImageMetadata$javax_imageio_metadata_IIOMetadata.apply(this, [inData]);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.imageio.metadata.IIOInvalidTreeException")){
} else {
throw e;
}
}
}if (outData != null ) {
var bogusWriter=Clazz.new_(C$.c$$javax_imageio_spi_ImageWriterSpi,[this.originatingProvider]);
bogusWriter.imageMetadata=outData;
bogusWriter.param=param;
var sm=imageType.getSampleModel$();
try {
bogusWriter.setupMetadata$java_awt_image_ColorModel$java_awt_image_SampleModel$I$I(imageType.getColorModel$(), sm, sm.getWidth$(), sm.getHeight$());
return bogusWriter.imageMetadata;
} catch (e) {
if (Clazz.exceptionOf(e,"javax.imageio.IIOException")){
return null;
} else {
throw e;
}
}
}return outData;
});

Clazz.newMeth(C$, 'convertStandardImageMetadata$javax_imageio_metadata_IIOMetadata', function (inData) {
if (inData == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["inData == null!"]);
} else if (!inData.isStandardMetadataFormatSupported$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["inData does not support standard metadata format!"]);
}var outData=null;
var formatName="javax_imageio_1.0";
var tree=inData.getAsTree$S(formatName);
if (tree != null ) {
var tagSets=Clazz.new_($I$(3,1).c$$I,[1]);
tagSets.add$TE($I$(4).getInstance$());
outData=Clazz.new_($I$(5,1).c$$java_util_List,[tagSets]);
outData.setFromTree$S$org_w3c_dom_Node(formatName, tree);
}return outData;
}, p$1);

Clazz.newMeth(C$, 'convertNativeImageMetadata$javax_imageio_metadata_IIOMetadata', function (inData) {
if (inData == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["inData == null!"]);
} else if (!$I$(6).asList$TTA(inData.getMetadataFormatNames$()).contains$O("com_sun_media_imageio_plugins_tiff_image_1.0")) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["inData does not support native metadata format!"]);
}var outData=null;
var formatName="com_sun_media_imageio_plugins_tiff_image_1.0";
var tree=inData.getAsTree$S(formatName);
if (tree != null ) {
var tagSets=Clazz.new_($I$(3,1).c$$I,[1]);
tagSets.add$TE($I$(4).getInstance$());
outData=Clazz.new_($I$(5,1).c$$java_util_List,[tagSets]);
outData.setFromTree$S$org_w3c_dom_Node(formatName, tree);
}return outData;
}, p$1);

Clazz.newMeth(C$, 'setupMetadata$java_awt_image_ColorModel$java_awt_image_SampleModel$I$I', function (cm, sm, destWidth, destHeight) {
var rootIFD=this.imageMetadata.getRootIFD$();
var base=$I$(4).getInstance$();
var f=rootIFD.getTIFFField$I(284);
if (f != null  && f.getAsInt$I(0) != 1 ) {
var planarConfigurationField=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I,[base.getTag$I(284), 1]);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(planarConfigurationField);
}var extraSamples=null;
this.photometricInterpretation=-1;
var forcePhotometricInterpretation=false;
f=rootIFD.getTIFFField$I(262);
if (f != null ) {
this.photometricInterpretation=f.getAsInt$I(0);
if (this.photometricInterpretation == 3 && !(Clazz.instanceOf(cm, "java.awt.image.IndexColorModel")) ) {
this.photometricInterpretation=-1;
} else {
forcePhotometricInterpretation=true;
}}var sampleSize=sm.getSampleSize$();
var numBands=sm.getNumBands$();
var numExtraSamples=0;
if (numBands > 1 && cm != null   && cm.hasAlpha$() ) {
--numBands;
numExtraSamples=1;
extraSamples=Clazz.array(Character.TYPE, [1]);
if (cm.isAlphaPremultiplied$()) {
extraSamples[0]=String.fromCharCode(1);
} else {
extraSamples[0]=String.fromCharCode(2);
}}if (numBands == 3) {
this.nativePhotometricInterpretation=2;
if (this.photometricInterpretation == -1) {
this.photometricInterpretation=2;
}} else if (sm.getNumBands$() == 1 && Clazz.instanceOf(cm, "java.awt.image.IndexColorModel") ) {
var icm=cm;
var r0=icm.getRed$I(0);
var r1=icm.getRed$I(1);
if (icm.getMapSize$() == 2 && (r0 == icm.getGreen$I(0))  && (r0 == icm.getBlue$I(0))  && (r1 == icm.getGreen$I(1))  && (r1 == icm.getBlue$I(1))  && (r0 == 0 || r0 == 255 )  && (r1 == 0 || r1 == 255 )  && (r0 != r1) ) {
if (r0 == 0) {
this.nativePhotometricInterpretation=1;
} else {
this.nativePhotometricInterpretation=0;
}if (this.photometricInterpretation != 1 && this.photometricInterpretation != 0 ) {
this.photometricInterpretation=r0 == 0 ? 1 : 0;
}} else {
this.nativePhotometricInterpretation=this.photometricInterpretation=3;
}} else {
if (cm != null ) {
switch (cm.getColorSpace$().getType$()) {
case 1:
this.nativePhotometricInterpretation=8;
break;
case 3:
this.nativePhotometricInterpretation=6;
break;
case 9:
this.nativePhotometricInterpretation=5;
break;
default:
this.nativePhotometricInterpretation=1;
}
} else {
this.nativePhotometricInterpretation=1;
}if (this.photometricInterpretation == -1) {
this.photometricInterpretation=this.nativePhotometricInterpretation;
}}this.compressor=null;
this.colorConverter=null;
if (Clazz.instanceOf(this.param, "io.scif.media.imageio.plugins.tiff.TIFFImageWriteParam")) {
var tparam=this.param;
if (tparam.getCompressionMode$() == $I$(8).MODE_EXPLICIT) {
this.compressor=tparam.getTIFFCompressor$();
var compressionType=this.param.getCompressionType$();
if (this.compressor != null  && !this.compressor.getCompressionType$().equals$O(compressionType) ) {
this.compressor=null;
}} else {
this.compressor=null;
}this.colorConverter=tparam.getColorConverter$();
if (this.colorConverter != null ) {
this.photometricInterpretation=tparam.getPhotometricInterpretation$();
}}var compressionMode=Clazz.instanceOf(this.param, "io.scif.media.imageio.plugins.tiff.TIFFImageWriteParam") ? this.param.getCompressionMode$() : 1;
switch (compressionMode) {
case 2:
{
var compressionType=this.param.getCompressionType$();
if (compressionType == null ) {
this.compression=1;
} else {
var len=C$.compressionTypes.length;
for (var i=0; i < len; i++) {
if (compressionType.equals$O(C$.compressionTypes[i])) {
this.compression=C$.compressionNumbers[i];
}}
}if (this.compressor != null  && this.compressor.getCompressionTagValue$() != this.compression ) {
this.compressor=null;
}}break;
case 3:
{
var compField=rootIFD.getTIFFField$I(259);
if (compField != null ) {
this.compression=compField.getAsInt$I(0);
break;
}}case 1:
case 0:
default:
this.compression=1;
}
var predictorField=rootIFD.getTIFFField$I(317);
if (predictorField != null ) {
this.predictor=predictorField.getAsInt$I(0);
if (sampleSize[0] != 8 || (this.predictor != 1 && this.predictor != 2 ) ) {
this.predictor=1;
var newPredictorField=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I,[base.getTag$I(317), this.predictor]);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(newPredictorField);
}}var compressionField=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I,[base.getTag$I(259), this.compression]);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(compressionField);
var isEXIF=false;
if (numBands == 3 && sampleSize[0] == 8  && sampleSize[1] == 8  && sampleSize[2] == 8 ) {
if (rootIFD.getTIFFField$I(34665) != null ) {
if (this.compression == 1 && (this.photometricInterpretation == 2 || this.photometricInterpretation == 6 ) ) {
isEXIF=true;
} else if (this.compression == 6) {
isEXIF=true;
}} else if (compressionMode == 2 && "EXIF JPEG".equals$O(this.param.getCompressionType$()) ) {
isEXIF=true;
}}var isJPEGInterchange=isEXIF && this.compression == 6 ;
if (this.compressor == null ) {
if (this.compression == 2) {
if (this.compressor == null ) {
this.compressor=Clazz.new_($I$(9,1));
if (false) {
System.out.println$S("Using Java RLE compressor");
}}if (!forcePhotometricInterpretation) {
this.photometricInterpretation=0;
}} else if (this.compression == 3) {
if (this.compressor == null ) {
this.compressor=Clazz.new_($I$(10,1));
if (false) {
System.out.println$S("Using Java T.4 compressor");
}}if (!forcePhotometricInterpretation) {
this.photometricInterpretation=0;
}} else if (this.compression == 4) {
if (this.compressor == null ) {
this.compressor=Clazz.new_($I$(11,1));
if (false) {
System.out.println$S("Using Java T.6 compressor");
}}if (!forcePhotometricInterpretation) {
this.photometricInterpretation=0;
}} else if (this.compression == 5) {
this.compressor=Clazz.new_($I$(12,1).c$$I,[this.predictor]);
} else if (this.compression == 6) {
if (isEXIF) {
this.compressor=Clazz.new_($I$(13,1).c$$javax_imageio_ImageWriteParam,[this.param]);
} else {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Old JPEG compression not supported!"]);
}} else if (this.compression == 7) {
if (numBands == 3 && sampleSize[0] == 8  && sampleSize[1] == 8  && sampleSize[2] == 8 ) {
this.photometricInterpretation=6;
} else if (numBands == 1 && sampleSize[0] == 8 ) {
this.photometricInterpretation=1;
} else {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["JPEG compression supported for 1- and 3-band byte images only!"]);
}this.compressor=Clazz.new_($I$(14,1).c$$javax_imageio_ImageWriteParam,[this.param]);
} else if (this.compression == 8) {
this.compressor=Clazz.new_($I$(15,1).c$$javax_imageio_ImageWriteParam$I,[this.param, this.predictor]);
} else if (this.compression == 32773) {
this.compressor=Clazz.new_($I$(16,1));
} else if (this.compression == 32946) {
this.compressor=Clazz.new_($I$(17,1).c$$javax_imageio_ImageWriteParam$I,[this.param, this.predictor]);
} else {
f=rootIFD.getTIFFField$I(266);
var inverseFill=(f != null  && f.getAsInt$I(0) == 2 );
if (inverseFill) {
this.compressor=Clazz.new_($I$(18,1));
} else {
this.compressor=Clazz.new_($I$(19,1));
}}}if (false) {
if (this.param != null  && this.param.getCompressionMode$() == $I$(8).MODE_EXPLICIT ) {
System.out.println$S("compressionType = " + this.param.getCompressionType$());
}if (this.compressor != null ) {
System.out.println$S("compressor = " + this.compressor.getClass$().getName$());
}}if (this.colorConverter == null ) {
if (cm != null  && cm.getColorSpace$().getType$() == 5 ) {
if (this.photometricInterpretation == 6 && this.compression != 7 ) {
this.colorConverter=Clazz.new_($I$(20,1).c$$io_scif_media_imageioimpl_plugins_tiff_TIFFImageMetadata,[this.imageMetadata]);
} else if (this.photometricInterpretation == 8) {
this.colorConverter=Clazz.new_($I$(21,1));
}}}if (this.photometricInterpretation == 6 && this.compression != 7 ) {
rootIFD.removeTIFFField$I(530);
rootIFD.removeTIFFField$I(531);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[base.getTag$I(530), 3, 2, Clazz.array(Character.TYPE, -1, ["\u0001", "\u0001"])]));
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[base.getTag$I(531), 3, 1, Clazz.array(Character.TYPE, -1, ["\u0002"])]));
}var photometricInterpretationField=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I,[base.getTag$I(262), this.photometricInterpretation]);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(photometricInterpretationField);
this.bitsPerSample=Clazz.array(Character.TYPE, [numBands + numExtraSamples]);
this.bitDepth=0;
for (var i=0; i < numBands; i++) {
this.bitDepth=Math.max(this.bitDepth, sampleSize[i]);
}
if (this.bitDepth == 3) {
this.bitDepth=4;
} else if (this.bitDepth > 4 && this.bitDepth < 8 ) {
this.bitDepth=8;
} else if (this.bitDepth > 8 && this.bitDepth < 16 ) {
this.bitDepth=16;
} else if (this.bitDepth > 16) {
this.bitDepth=32;
}for (var i=0; i < this.bitsPerSample.length; i++) {
this.bitsPerSample[i]=String.fromCharCode(this.bitDepth);
}
if (this.bitsPerSample.length != 1 || (this.bitsPerSample[0]).$c() != 1  ) {
var bitsPerSampleField=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[base.getTag$I(258), 3, this.bitsPerSample.length, this.bitsPerSample]);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(bitsPerSampleField);
} else {
var bitsPerSampleField=rootIFD.getTIFFField$I(258);
if (bitsPerSampleField != null ) {
var bps=bitsPerSampleField.getAsInts$();
if (bps == null  || bps.length != 1  || bps[0] != 1 ) {
rootIFD.removeTIFFField$I(258);
}}}f=rootIFD.getTIFFField$I(339);
if (f == null  && (this.bitDepth == 16 || this.bitDepth == 32 ) ) {
var sampleFormatValue;
var dataType=sm.getDataType$();
if (this.bitDepth == 16 && dataType == 1 ) {
sampleFormatValue="\u0001";
} else if (this.bitDepth == 32 && dataType == 4 ) {
sampleFormatValue="\u0003";
} else {
sampleFormatValue=String.fromCharCode(2);
}this.sampleFormat=sampleFormatValue.$c();
var sampleFormatArray=Clazz.array(Character.TYPE, [this.bitsPerSample.length]);
$I$(6).fill$CA$C(sampleFormatArray, sampleFormatValue);
var sampleFormatTag=base.getTag$I(339);
var sampleFormatField=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[sampleFormatTag, 3, sampleFormatArray.length, sampleFormatArray]);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(sampleFormatField);
} else if (f != null ) {
this.sampleFormat=f.getAsInt$I(0);
} else {
this.sampleFormat=4;
}if (extraSamples != null ) {
var extraSamplesField=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[base.getTag$I(338), 3, extraSamples.length, extraSamples]);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(extraSamplesField);
} else {
rootIFD.removeTIFFField$I(338);
}var samplesPerPixelField=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I,[base.getTag$I(277), this.bitsPerSample.length]);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(samplesPerPixelField);
if (this.photometricInterpretation == 3 && Clazz.instanceOf(cm, "java.awt.image.IndexColorModel") ) {
var colorMap=Clazz.array(Character.TYPE, [3 * (1 << (this.bitsPerSample[0]).$c())]);
var icm=cm;
var mapSize=1 << (this.bitsPerSample[0]).$c();
var indexBound=Math.min(mapSize, icm.getMapSize$());
for (var i=0; i < indexBound; i++) {
colorMap[i]=String.fromCharCode((((icm.getRed$I(i) * 65535)/255|0)));
colorMap[mapSize + i]=String.fromCharCode((((icm.getGreen$I(i) * 65535)/255|0)));
colorMap[2 * mapSize + i]=String.fromCharCode((((icm.getBlue$I(i) * 65535)/255|0)));
}
var colorMapField=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[base.getTag$I(320), 3, colorMap.length, colorMap]);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(colorMapField);
} else {
rootIFD.removeTIFFField$I(320);
}if (cm != null  && rootIFD.getTIFFField$I(34675) == null   && $I$(22).isNonStandardICCColorSpace$java_awt_color_ColorSpace(cm.getColorSpace$()) ) {
var iccColorSpace=cm.getColorSpace$();
var iccProfileData=iccColorSpace.getProfile$().getData$();
var iccProfileField=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[base.getTag$I(34675), 7, iccProfileData.length, iccProfileData]);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(iccProfileField);
}var XResolutionField=rootIFD.getTIFFField$I(282);
var YResolutionField=rootIFD.getTIFFField$I(283);
if (XResolutionField == null  && YResolutionField == null  ) {
var resRational=Clazz.array(Long.TYPE, [1, 2]);
resRational[0]=Clazz.array(Long.TYPE, [2]);
var ResolutionUnitField=rootIFD.getTIFFField$I(296);
if (ResolutionUnitField == null  && rootIFD.getTIFFField$I(286) == null   && rootIFD.getTIFFField$I(287) == null  ) {
resRational[0][0]=1;
resRational[0][1]=1;
ResolutionUnitField=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I,[rootIFD.getTag$I(296), 1]);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(ResolutionUnitField);
} else {
var resolutionUnit=ResolutionUnitField != null  ? ResolutionUnitField.getAsInt$I(0) : 2;
var maxDimension=Math.max(destWidth, destHeight);
switch (resolutionUnit) {
case 2:
resRational[0][0]=maxDimension;
resRational[0][1]=4;
break;
case 3:
resRational[0][0]=100 * maxDimension;
resRational[0][1]=1016;
break;
default:
resRational[0][0]=1;
resRational[0][1]=1;
}
}XResolutionField=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[rootIFD.getTag$I(282), 5, 1, resRational]);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(XResolutionField);
YResolutionField=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[rootIFD.getTag$I(283), 5, 1, resRational]);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(YResolutionField);
} else if (XResolutionField == null  && YResolutionField != null  ) {
var yResolution=YResolutionField.getAsRational$I(0).clone$();
XResolutionField=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[rootIFD.getTag$I(282), 5, 1, yResolution]);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(XResolutionField);
} else if (XResolutionField != null  && YResolutionField == null  ) {
var xResolution=XResolutionField.getAsRational$I(0).clone$();
YResolutionField=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[rootIFD.getTag$I(283), 5, 1, xResolution]);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(YResolutionField);
}var width=destWidth;
var imageWidthField=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I,[base.getTag$I(256), width]);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(imageWidthField);
var height=destHeight;
var imageLengthField=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I,[base.getTag$I(257), height]);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(imageLengthField);
var rowsPerStrip;
var rowsPerStripField=rootIFD.getTIFFField$I(278);
if (rowsPerStripField != null ) {
rowsPerStrip=rowsPerStripField.getAsInt$I(0);
if (rowsPerStrip < 0) {
rowsPerStrip=height;
}} else {
var bitsPerPixel=this.bitDepth * (numBands + numExtraSamples);
var bytesPerRow=((bitsPerPixel * width + 7)/8|0);
rowsPerStrip=Math.max(Math.max((8192/bytesPerRow|0), 1), 8);
}rowsPerStrip=Math.min(rowsPerStrip, height);
var useTiling=false;
var tilingMode=Clazz.instanceOf(this.param, "io.scif.media.imageio.plugins.tiff.TIFFImageWriteParam") ? this.param.getTilingMode$() : 1;
if (tilingMode == 0 || tilingMode == 1 ) {
this.tileWidth=width;
this.tileLength=rowsPerStrip;
useTiling=false;
} else if (tilingMode == 2) {
this.tileWidth=this.param.getTileWidth$();
this.tileLength=this.param.getTileHeight$();
useTiling=true;
} else if (tilingMode == 3) {
f=rootIFD.getTIFFField$I(322);
if (f == null ) {
this.tileWidth=width;
useTiling=false;
} else {
this.tileWidth=f.getAsInt$I(0);
useTiling=true;
}f=rootIFD.getTIFFField$I(323);
if (f == null ) {
this.tileLength=rowsPerStrip;
} else {
this.tileLength=f.getAsInt$I(0);
useTiling=true;
}} else {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Illegal value of tilingMode!"]);
}if (this.compression == 7) {
var subX;
var subY;
if (numBands == 1) {
subX=subY=1;
} else {
subX=subY=2;
}if (useTiling) {
var MCUMultipleX=8 * subX;
var MCUMultipleY=8 * subY;
this.tileWidth=Math.max(MCUMultipleX * (((this.tileWidth + (MCUMultipleX/2|0))/MCUMultipleX|0)), MCUMultipleX);
this.tileLength=Math.max(MCUMultipleY * (((this.tileLength + (MCUMultipleY/2|0))/MCUMultipleY|0)), MCUMultipleY);
} else if (rowsPerStrip < height) {
var MCUMultiple=8 * Math.max(subX, subY);
rowsPerStrip=this.tileLength=Math.max(MCUMultiple * (((this.tileLength + (MCUMultiple/2|0))/MCUMultiple|0)), MCUMultiple);
}} else if (isJPEGInterchange) {
this.tileWidth=width;
this.tileLength=height;
} else if (useTiling) {
var tileWidthRemainder=this.tileWidth % 16;
if (tileWidthRemainder != 0) {
this.tileWidth=Math.max(16 * (((this.tileWidth + 8)/16|0)), 16);
}var tileLengthRemainder=this.tileLength % 16;
if (tileLengthRemainder != 0) {
this.tileLength=Math.max(16 * (((this.tileLength + 8)/16|0)), 16);
}}this.tilesAcross=((width + this.tileWidth - 1)/this.tileWidth|0);
this.tilesDown=((height + this.tileLength - 1)/this.tileLength|0);
if (!useTiling) {
this.isTiled=false;
rootIFD.removeTIFFField$I(322);
rootIFD.removeTIFFField$I(323);
rootIFD.removeTIFFField$I(324);
rootIFD.removeTIFFField$I(325);
rowsPerStripField=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I,[base.getTag$I(278), rowsPerStrip]);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(rowsPerStripField);
var stripOffsetsField=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I,[base.getTag$I(273), 4, this.tilesDown]);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(stripOffsetsField);
var stripByteCountsField=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I,[base.getTag$I(279), 4, this.tilesDown]);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(stripByteCountsField);
} else {
this.isTiled=true;
rootIFD.removeTIFFField$I(278);
rootIFD.removeTIFFField$I(273);
rootIFD.removeTIFFField$I(279);
var tileWidthField=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I,[base.getTag$I(322), this.tileWidth]);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(tileWidthField);
var tileLengthField=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I,[base.getTag$I(323), this.tileLength]);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(tileLengthField);
var tileOffsetsField=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I,[base.getTag$I(324), 4, this.tilesDown * this.tilesAcross]);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(tileOffsetsField);
var tileByteCountsField=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I,[base.getTag$I(325), 4, this.tilesDown * this.tilesAcross]);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(tileByteCountsField);
}if (isEXIF) {
var isPrimaryIFD=p$1.isEncodingEmpty.apply(this, []);
if (this.compression == 6) {
rootIFD.removeTIFFField$I(256);
rootIFD.removeTIFFField$I(257);
rootIFD.removeTIFFField$I(258);
if (isPrimaryIFD) {
rootIFD.removeTIFFField$I(259);
}rootIFD.removeTIFFField$I(262);
rootIFD.removeTIFFField$I(273);
rootIFD.removeTIFFField$I(277);
rootIFD.removeTIFFField$I(278);
rootIFD.removeTIFFField$I(279);
rootIFD.removeTIFFField$I(284);
if (rootIFD.getTIFFField$I(296) == null ) {
f=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I,[base.getTag$I(296), 2]);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
}if (isPrimaryIFD) {
rootIFD.removeTIFFField$I(513);
rootIFD.removeTIFFField$I(514);
rootIFD.removeTIFFField$I(530);
if (rootIFD.getTIFFField$I(531) == null ) {
f=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[base.getTag$I(531), 3, 1, Clazz.array(Character.TYPE, -1, ["\u0001"])]);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
}} else {
f=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I,[base.getTag$I(513), 4, 1]);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
f=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I,[base.getTag$I(514), 4, 1]);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
rootIFD.removeTIFFField$I(530);
}} else {
if (rootIFD.getTIFFField$I(296) == null ) {
f=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I,[base.getTag$I(296), 2]);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
}rootIFD.removeTIFFField$I(513);
rootIFD.removeTIFFField$I(514);
if (this.photometricInterpretation == 2) {
rootIFD.removeTIFFField$I(529);
rootIFD.removeTIFFField$I(530);
rootIFD.removeTIFFField$I(531);
}}var exifTags=$I$(23).getInstance$();
var exifIFD=null;
f=rootIFD.getTIFFField$I(34665);
if (f != null ) {
exifIFD=f.getData$();
} else if (isPrimaryIFD) {
var exifTagSets=Clazz.new_($I$(3,1).c$$I,[1]);
exifTagSets.add$TE(exifTags);
exifIFD=Clazz.new_($I$(24,1).c$$java_util_List,[exifTagSets]);
var tagSet=$I$(25).getInstance$();
var exifIFDTag=tagSet.getTag$I(34665);
rootIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[exifIFDTag, 4, 1, exifIFD]));
}if (exifIFD != null ) {
if (exifIFD.getTIFFField$I(36864) == null ) {
f=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[exifTags.getTag$I(36864), 7, 4, $I$(23).EXIF_VERSION_2_2]);
exifIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
}if (this.compression == 6) {
if (exifIFD.getTIFFField$I(37121) == null ) {
f=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[exifTags.getTag$I(37121), 7, 4, Clazz.array(Byte.TYPE, -1, [1, 2, 3, 0])]);
exifIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
}} else {
exifIFD.removeTIFFField$I(37121);
exifIFD.removeTIFFField$I(37122);
}if (exifIFD.getTIFFField$I(40960) == null ) {
f=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[exifTags.getTag$I(40960), 7, 4, Clazz.array(Byte.TYPE, -1, [48, 49, 48, 48])]);
exifIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
}if (exifIFD.getTIFFField$I(40961) == null ) {
f=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I$I$O,[exifTags.getTag$I(40961), 3, 1, Clazz.array(Character.TYPE, -1, ["\u0001"])]);
exifIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
}if (this.compression == 6) {
if (exifIFD.getTIFFField$I(40962) == null ) {
f=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I,[exifTags.getTag$I(40962), width]);
exifIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
}if (exifIFD.getTIFFField$I(40963) == null ) {
f=Clazz.new_($I$(7,1).c$$io_scif_media_imageio_plugins_tiff_TIFFTag$I,[exifTags.getTag$I(40963), height]);
exifIFD.addTIFFField$io_scif_media_imageio_plugins_tiff_TIFFField(f);
}} else {
exifIFD.removeTIFFField$I(40965);
}}}});

Clazz.newMeth(C$, 'writeTile$java_awt_Rectangle$io_scif_media_imageio_plugins_tiff_TIFFCompressor', function (tileRect, compressor) {
var activeRect;
var isPadded;
var imageBounds=Clazz.new_($I$(26,1).c$$I$I$I$I,[this.image.getMinX$(), this.image.getMinY$(), this.image.getWidth$(), this.image.getHeight$()]);
if (!this.isTiled) {
activeRect=tileRect.intersection$java_awt_Rectangle(imageBounds);
tileRect=activeRect;
isPadded=false;
} else if (imageBounds.contains$java_awt_Rectangle(tileRect)) {
activeRect=tileRect;
isPadded=false;
} else {
activeRect=imageBounds.intersection$java_awt_Rectangle(tileRect);
isPadded=true;
}if (activeRect.isEmpty$()) {
return 0;
}var minX=tileRect.x;
var minY=tileRect.y;
var width=tileRect.width;
var height=tileRect.height;
if (this.isImageSimple) {
var sm=this.image.getSampleModel$();
var raster=this.image.getData$java_awt_Rectangle(activeRect);
if (isPadded) {
var wr=raster.createCompatibleWritableRaster$I$I$I$I(minX, minY, width, height);
wr.setRect$java_awt_image_Raster(raster);
raster=wr;
}if (this.isBilevel) {
var buf=$I$(22).getPackedBinaryData$java_awt_image_Raster$java_awt_Rectangle(raster, tileRect);
if (this.isInverted) {
var dbb=raster.getDataBuffer$();
if (Clazz.instanceOf(dbb, "java.awt.image.DataBufferByte") && buf === (dbb).getData$()  ) {
var bbuf=Clazz.array(Byte.TYPE, [buf.length]);
var len=buf.length;
for (var i=0; i < len; i++) {
bbuf[i]=(((buf[i] ^ 255)|0)|0);
}
buf=bbuf;
} else {
var len=buf.length;
for (var i=0; i < len; i++) {
buf[i]=(buf[i]^(255)|0);
}
}}if (false) {
System.out.println$S("Optimized bilevel case");
}return compressor.encode$BA$I$I$I$IA$I(buf, 0, width, height, this.sampleSize, ((tileRect.width + 7)/8|0));
} else if (this.bitDepth == 8 && sm.getDataType$() == 0 ) {
var csm=raster.getSampleModel$();
var buf=(raster.getDataBuffer$()).getData$();
var off=csm.getOffset$I$I(minX - raster.getSampleModelTranslateX$(), minY - raster.getSampleModelTranslateY$());
if (false) {
System.out.println$S("Optimized component case");
}return compressor.encode$BA$I$I$I$IA$I(buf, off, width, height, this.sampleSize, csm.getScanlineStride$());
}}var xOffset=minX;
var xSkip=this.periodX;
var yOffset=minY;
var ySkip=this.periodY;
var hpixels=((width + xSkip - 1)/xSkip|0);
var vpixels=((height + ySkip - 1)/ySkip|0);
if (hpixels == 0 || vpixels == 0 ) {
return 0;
}xOffset*=this.numBands;
xSkip*=this.numBands;
var samplesPerByte=(8/this.bitDepth|0);
var numSamples=width * this.numBands;
var bytesPerRow=hpixels * this.numBands;
if (this.bitDepth < 8) {
bytesPerRow=((bytesPerRow + samplesPerByte - 1)/samplesPerByte|0);
} else if (this.bitDepth == 16) {
bytesPerRow*=2;
} else if (this.bitDepth == 32) {
bytesPerRow*=4;
}var samples=null;
var fsamples=null;
if (this.sampleFormat == 3) {
fsamples=Clazz.array(Float.TYPE, [numSamples]);
} else {
samples=Clazz.array(Integer.TYPE, [numSamples]);
}var currTile=Clazz.array(Byte.TYPE, [bytesPerRow * vpixels]);
if (!this.isInverted && !this.isRescaling && this.sourceBands == null    && this.periodX == 1  && this.periodY == 1  && this.colorConverter == null  ) {
var sm=this.image.getSampleModel$();
if (Clazz.instanceOf(sm, "java.awt.image.ComponentSampleModel") && this.bitDepth == 8  && sm.getDataType$() == 0 ) {
if (false) {
System.out.println$S("Sub-optimal byte component case");
System.out.println$S(sm.getClass$().getName$());
}var raster=this.image.getData$java_awt_Rectangle(activeRect);
if (isPadded) {
var wr=raster.createCompatibleWritableRaster$I$I$I$I(minX, minY, width, height);
wr.setRect$java_awt_image_Raster(raster);
raster=wr;
}var csm=raster.getSampleModel$();
var bankIndices=csm.getBankIndices$();
var bankData=(raster.getDataBuffer$()).getBankData$();
var lineStride=csm.getScanlineStride$();
var pixelStride=csm.getPixelStride$();
for (var k=0; k < this.numBands; k++) {
var bandData=bankData[bankIndices[k]];
var lineOffset=csm.getOffset$I$I$I(raster.getMinX$() - raster.getSampleModelTranslateX$(), raster.getMinY$() - raster.getSampleModelTranslateY$(), k);
var idx=k;
for (var j=0; j < vpixels; j++) {
var offset=lineOffset;
for (var i=0; i < hpixels; i++) {
currTile[idx]=(bandData[offset]|0);
idx+=this.numBands;
offset+=pixelStride;
}
lineOffset+=lineStride;
}
}
return compressor.encode$BA$I$I$I$IA$I(currTile, 0, width, height, this.sampleSize, width * this.numBands);
}}if (false) {
System.out.println$S("Unoptimized case for bit depth " + this.bitDepth);
var sm=this.image.getSampleModel$();
System.out.println$S("isRescaling = " + this.isRescaling);
System.out.println$S("sourceBands = " + this.sourceBands);
System.out.println$S("periodX = " + this.periodX);
System.out.println$S("periodY = " + this.periodY);
System.out.println$S(sm.getClass$().getName$());
System.out.println$I(sm.getDataType$());
if (Clazz.instanceOf(sm, "java.awt.image.ComponentSampleModel")) {
var csm=sm;
System.out.println$I(csm.getNumBands$());
System.out.println$I(csm.getPixelStride$());
var bankIndices=csm.getBankIndices$();
for (var b=0; b < this.numBands; b++) {
System.out.print$S(bankIndices[b] + " ");
}
var bandOffsets=csm.getBandOffsets$();
for (var b=0; b < this.numBands; b++) {
System.out.print$S(bandOffsets[b] + " ");
}
System.out.println$S("");
}}var tcount=0;
var activeMinX=activeRect.x;
var activeMinY=activeRect.y;
var activeMaxY=activeMinY + activeRect.height - 1;
var activeWidth=activeRect.width;
var rowSampleModel=null;
if (isPadded) {
rowSampleModel=this.image.getSampleModel$().createCompatibleSampleModel$I$I(width, 1);
}for (var row=yOffset; row < yOffset + height; row+=ySkip) {
var ras=null;
if (isPadded) {
var wr=$I$(27).createWritableRaster$java_awt_image_SampleModel$java_awt_Point(rowSampleModel, Clazz.new_($I$(28,1).c$$I$I,[minX, row]));
if (row >= activeMinY && row <= activeMaxY ) {
var rect=Clazz.new_($I$(26,1).c$$I$I$I$I,[activeMinX, row, activeWidth, 1]);
ras=this.image.getData$java_awt_Rectangle(rect);
wr.setRect$java_awt_image_Raster(ras);
}ras=wr;
} else {
var rect=Clazz.new_($I$(26,1).c$$I$I$I$I,[minX, row, width, 1]);
ras=this.image.getData$java_awt_Rectangle(rect);
}if (this.sourceBands != null ) {
ras=ras.createChild$I$I$I$I$I$I$IA(minX, row, width, 1, minX, row, this.sourceBands);
}if (this.sampleFormat == 3) {
ras.getPixels$I$I$I$I$FA(minX, row, width, 1, fsamples);
} else {
ras.getPixels$I$I$I$I$IA(minX, row, width, 1, samples);
if ((this.nativePhotometricInterpretation == 1 && this.photometricInterpretation == 0 ) || (this.nativePhotometricInterpretation == 0 && this.photometricInterpretation == 1 ) ) {
var bitMask=(1 << this.bitDepth) - 1;
for (var s=0; s < numSamples; s++) {
samples[s]^=bitMask;
}
}}if (this.colorConverter != null ) {
var idx=0;
var result=Clazz.array(Float.TYPE, [3]);
if (this.sampleFormat == 3) {
for (var i=0; i < width; i++) {
var r=fsamples[idx];
var g=fsamples[idx + 1];
var b=fsamples[idx + 2];
this.colorConverter.fromRGB$F$F$F$FA(r, g, b, result);
fsamples[idx]=result[0];
fsamples[idx + 1]=result[1];
fsamples[idx + 2]=result[2];
idx+=3;
}
} else {
for (var i=0; i < width; i++) {
var r=samples[idx];
var g=samples[idx + 1];
var b=samples[idx + 2];
this.colorConverter.fromRGB$F$F$F$FA(r, g, b, result);
samples[idx]=((result[0])|0);
samples[idx + 1]=((result[1])|0);
samples[idx + 2]=((result[2])|0);
idx+=3;
}
}}var tmp=0;
var pos=0;
switch (this.bitDepth) {
case 1:
case 2:
case 4:
if (this.isRescaling) {
for (var s=0; s < numSamples; s+=xSkip) {
var val=($b$[0] = this.scale0[samples[s]], $b$[0]);
tmp=(tmp << this.bitDepth) | val;
if (++pos == samplesPerByte) {
currTile[tcount++]=((tmp|0)|0);
tmp=0;
pos=0;
}}
} else {
for (var s=0; s < numSamples; s+=xSkip) {
var val=($b$[0] = (samples[s]|0), $b$[0]);
tmp=(tmp << this.bitDepth) | val;
if (++pos == samplesPerByte) {
currTile[tcount++]=((tmp|0)|0);
tmp=0;
pos=0;
}}
}if (pos != 0) {
tmp<<=(((8/this.bitDepth|0)) - pos) * this.bitDepth;
currTile[tcount++]=((tmp|0)|0);
}break;
case 8:
if (this.numBands == 1) {
if (this.isRescaling) {
for (var s=0; s < numSamples; s+=xSkip) {
currTile[tcount++]=(this.scale0[samples[s]]|0);
}
} else {
for (var s=0; s < numSamples; s+=xSkip) {
currTile[tcount++]=((samples[s]|0)|0);
}
}} else {
if (this.isRescaling) {
for (var s=0; s < numSamples; s+=xSkip) {
for (var b=0; b < this.numBands; b++) {
currTile[tcount++]=(this.scale[b][samples[s + b]]|0);
}
}
} else {
for (var s=0; s < numSamples; s+=xSkip) {
for (var b=0; b < this.numBands; b++) {
currTile[tcount++]=((samples[s + b]|0)|0);
}
}
}}break;
case 16:
if (this.isRescaling) {
if (this.stream.getByteOrder$() === $I$(29).BIG_ENDIAN ) {
for (var s=0; s < numSamples; s+=xSkip) {
for (var b=0; b < this.numBands; b++) {
var sample=samples[s + b];
currTile[tcount++]=(this.scaleh[b][sample]|0);
currTile[tcount++]=(this.scalel[b][sample]|0);
}
}
} else {
for (var s=0; s < numSamples; s+=xSkip) {
for (var b=0; b < this.numBands; b++) {
var sample=samples[s + b];
currTile[tcount++]=(this.scalel[b][sample]|0);
currTile[tcount++]=(this.scaleh[b][sample]|0);
}
}
}} else {
if (this.stream.getByteOrder$() === $I$(29).BIG_ENDIAN ) {
for (var s=0; s < numSamples; s+=xSkip) {
for (var b=0; b < this.numBands; b++) {
var sample=samples[s + b];
currTile[tcount++]=((((sample >>> 8) & 255)|0)|0);
currTile[tcount++]=(((sample & 255)|0)|0);
}
}
} else {
for (var s=0; s < numSamples; s+=xSkip) {
for (var b=0; b < this.numBands; b++) {
var sample=samples[s + b];
currTile[tcount++]=(((sample & 255)|0)|0);
currTile[tcount++]=((((sample >>> 8) & 255)|0)|0);
}
}
}}break;
case 32:
if (this.sampleFormat == 3) {
if (this.stream.getByteOrder$() === $I$(29).BIG_ENDIAN ) {
for (var s=0; s < numSamples; s+=xSkip) {
for (var b=0; b < this.numBands; b++) {
var fsample=fsamples[s + b];
var isample=Float.floatToIntBits$F(fsample);
currTile[tcount++]=((((isample & -16777216) >> 24)|0)|0);
currTile[tcount++]=((((isample & 16711680) >> 16)|0)|0);
currTile[tcount++]=((((isample & 65280) >> 8)|0)|0);
currTile[tcount++]=(((isample & 255)|0)|0);
}
}
} else {
for (var s=0; s < numSamples; s+=xSkip) {
for (var b=0; b < this.numBands; b++) {
var fsample=fsamples[s + b];
var isample=Float.floatToIntBits$F(fsample);
currTile[tcount++]=(((isample & 255)|0)|0);
currTile[tcount++]=((((isample & 65280) >> 8)|0)|0);
currTile[tcount++]=((((isample & 16711680) >> 16)|0)|0);
currTile[tcount++]=((((isample & -16777216) >> 24)|0)|0);
}
}
}} else {
if (this.isRescaling) {
var maxIn=Clazz.array(Long.TYPE, [this.numBands]);
var halfIn=Clazz.array(Long.TYPE, [this.numBands]);
var maxOut=(1 << this.bitDepth) - 1;
for (var b=0; b < this.numBands; b++) {
maxIn[b]=((1 << this.sampleSize[b]) - 1);
halfIn[b]=(maxIn[b]/2|0);
}
if (this.stream.getByteOrder$() === $I$(29).BIG_ENDIAN ) {
for (var s=0; s < numSamples; s+=xSkip) {
for (var b=0; b < this.numBands; b++) {
var sampleOut=((samples[s + b] * maxOut + halfIn[b])/maxIn[b]|0);
currTile[tcount++]=((((sampleOut & -16777216) >> 24)|0)|0);
currTile[tcount++]=((((sampleOut & 16711680) >> 16)|0)|0);
currTile[tcount++]=((((sampleOut & 65280) >> 8)|0)|0);
currTile[tcount++]=(((sampleOut & 255)|0)|0);
}
}
} else {
for (var s=0; s < numSamples; s+=xSkip) {
for (var b=0; b < this.numBands; b++) {
var sampleOut=((samples[s + b] * maxOut + halfIn[b])/maxIn[b]|0);
currTile[tcount++]=(((sampleOut & 255)|0)|0);
currTile[tcount++]=((((sampleOut & 65280) >> 8)|0)|0);
currTile[tcount++]=((((sampleOut & 16711680) >> 16)|0)|0);
currTile[tcount++]=((((sampleOut & -16777216) >> 24)|0)|0);
}
}
}} else {
if (this.stream.getByteOrder$() === $I$(29).BIG_ENDIAN ) {
for (var s=0; s < numSamples; s+=xSkip) {
for (var b=0; b < this.numBands; b++) {
var isample=samples[s + b];
currTile[tcount++]=((((isample & -16777216) >> 24)|0)|0);
currTile[tcount++]=((((isample & 16711680) >> 16)|0)|0);
currTile[tcount++]=((((isample & 65280) >> 8)|0)|0);
currTile[tcount++]=(((isample & 255)|0)|0);
}
}
} else {
for (var s=0; s < numSamples; s+=xSkip) {
for (var b=0; b < this.numBands; b++) {
var isample=samples[s + b];
currTile[tcount++]=(((isample & 255)|0)|0);
currTile[tcount++]=((((isample & 65280) >> 8)|0)|0);
currTile[tcount++]=((((isample & 16711680) >> 16)|0)|0);
currTile[tcount++]=((((isample & -16777216) >> 24)|0)|0);
}
}
}}}break;
}
}
var bitsPerSample=Clazz.array(Integer.TYPE, [this.numBands]);
for (var i=0; i < bitsPerSample.length; i++) {
bitsPerSample[i]=this.bitDepth;
}
var byteCount=compressor.encode$BA$I$I$I$IA$I(currTile, 0, hpixels, vpixels, bitsPerSample, bytesPerRow);
return byteCount;
}, p$1);

Clazz.newMeth(C$, 'equals$IA$IA', function (s0, s1) {
if (s0 == null  || s1 == null  ) {
return false;
}if (s0.length != s1.length) {
return false;
}for (var i=0; i < s0.length; i++) {
if (s0[i] != s1[i]) {
return false;
}}
return true;
}, p$1);

Clazz.newMeth(C$, 'initializeScaleTables$IA', function (sampleSize) {
if (this.bitDepth == this.scalingBitDepth && p$1.equals$IA$IA.apply(this, [sampleSize, this.sampleSize]) ) {
if (false) {
System.out.println$S("Returning from initializeScaleTables()");
}return;
}this.isRescaling=false;
this.scalingBitDepth=-1;
this.scale=this.scalel=this.scaleh=null;
this.scale0=null;
this.sampleSize=sampleSize;
if (this.bitDepth <= 16) {
for (var b=0; b < this.numBands; b++) {
if (sampleSize[b] != this.bitDepth) {
this.isRescaling=true;
break;
}}
}if (false) {
System.out.println$S("isRescaling = " + this.isRescaling);
}if (!this.isRescaling) {
return;
}this.scalingBitDepth=this.bitDepth;
var maxOutSample=(1 << this.bitDepth) - 1;
if (this.bitDepth <= 8) {
this.scale=Clazz.array(Byte.TYPE, [this.numBands, null]);
for (var b=0; b < this.numBands; b++) {
var maxInSample=(1 << sampleSize[b]) - 1;
var halfMaxInSample=(maxInSample/2|0);
this.scale[b]=Clazz.array(Byte.TYPE, [maxInSample + 1]);
for (var s=0; s <= maxInSample; s++) {
this.scale[b][s]=(((((s * maxOutSample + halfMaxInSample)/maxInSample|0))|0)|0);
}
}
this.scale0=this.scale[0];
this.scaleh=this.scalel=null;
} else if (this.bitDepth <= 16) {
this.scaleh=Clazz.array(Byte.TYPE, [this.numBands, null]);
this.scalel=Clazz.array(Byte.TYPE, [this.numBands, null]);
for (var b=0; b < this.numBands; b++) {
var maxInSample=(1 << sampleSize[b]) - 1;
var halfMaxInSample=(maxInSample/2|0);
this.scaleh[b]=Clazz.array(Byte.TYPE, [maxInSample + 1]);
this.scalel[b]=Clazz.array(Byte.TYPE, [maxInSample + 1]);
for (var s=0; s <= maxInSample; s++) {
var val=((s * maxOutSample + halfMaxInSample)/maxInSample|0);
this.scaleh[b][s]=(((val >> 8)|0)|0);
this.scalel[b][s]=(((val & 255)|0)|0);
}
}
this.scale=null;
this.scale0=null;
}}, p$1);

Clazz.newMeth(C$, 'write$javax_imageio_metadata_IIOMetadata$javax_imageio_IIOImage$javax_imageio_ImageWriteParam', function (sm, iioimage, p) {
p$1.write$javax_imageio_metadata_IIOMetadata$javax_imageio_IIOImage$javax_imageio_ImageWriteParam$Z$Z.apply(this, [sm, iioimage, p, true, true]);
});

Clazz.newMeth(C$, 'writeHeader', function () {
if (this.streamMetadata != null ) {
this.byteOrder=this.streamMetadata.byteOrder;
} else {
this.byteOrder=$I$(29).BIG_ENDIAN;
}this.stream.setByteOrder$java_nio_ByteOrder(this.byteOrder);
if (this.byteOrder === $I$(29).BIG_ENDIAN ) {
this.stream.writeShort$I(19789);
} else {
this.stream.writeShort$I(18761);
}this.stream.writeShort$I(42);
this.stream.writeInt$I(0);
this.nextSpace=this.stream.getStreamPosition$();
this.headerPosition=this.nextSpace - 8;
}, p$1);

Clazz.newMeth(C$, 'write$javax_imageio_metadata_IIOMetadata$javax_imageio_IIOImage$javax_imageio_ImageWriteParam$Z$Z', function (sm, iioimage, p, writeHeader, writeData) {
if (this.stream == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["output == null!"]);
}if (iioimage == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["image == null!"]);
}if (iioimage.hasRaster$() && !this.canWriteRasters$() ) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["TIFF ImageWriter cannot write Rasters!"]);
}this.image=iioimage.getRenderedImage$();
var sampleModel=this.image.getSampleModel$();
this.sourceXOffset=this.image.getMinX$();
this.sourceYOffset=this.image.getMinY$();
this.sourceWidth=this.image.getWidth$();
this.sourceHeight=this.image.getHeight$();
var imageBounds=Clazz.new_($I$(26,1).c$$I$I$I$I,[this.sourceXOffset, this.sourceYOffset, this.sourceWidth, this.sourceHeight]);
var colorModel=null;
if (p == null ) {
this.param=this.getDefaultWriteParam$();
this.sourceBands=null;
this.periodX=1;
this.periodY=1;
this.numBands=sampleModel.getNumBands$();
colorModel=this.image.getColorModel$();
} else {
this.param=p;
var sourceRegion=this.param.getSourceRegion$();
if (sourceRegion != null ) {
sourceRegion=sourceRegion.intersection$java_awt_Rectangle(imageBounds);
this.sourceXOffset=sourceRegion.x;
this.sourceYOffset=sourceRegion.y;
this.sourceWidth=sourceRegion.width;
this.sourceHeight=sourceRegion.height;
}var gridX=this.param.getSubsamplingXOffset$();
var gridY=this.param.getSubsamplingYOffset$();
this.sourceXOffset+=gridX;
this.sourceYOffset+=gridY;
this.sourceWidth-=gridX;
this.sourceHeight-=gridY;
this.periodX=this.param.getSourceXSubsampling$();
this.periodY=this.param.getSourceYSubsampling$();
var sBands=this.param.getSourceBands$();
if (sBands != null ) {
this.sourceBands=sBands;
this.numBands=this.sourceBands.length;
} else {
this.numBands=sampleModel.getNumBands$();
}var destType=p.getDestinationType$();
if (destType != null ) {
var cm=destType.getColorModel$();
if (cm.getNumComponents$() == this.numBands) {
colorModel=cm;
}}if (colorModel == null ) {
colorModel=this.image.getColorModel$();
}}this.imageType=Clazz.new_($I$(30,1).c$$java_awt_image_ColorModel$java_awt_image_SampleModel,[colorModel, sampleModel]);
$I$(22).canEncodeImage$javax_imageio_ImageWriter$javax_imageio_ImageTypeSpecifier(this, this.imageType);
var destWidth=((this.sourceWidth + this.periodX - 1)/this.periodX|0);
var destHeight=((this.sourceHeight + this.periodY - 1)/this.periodY|0);
if (destWidth <= 0 || destHeight <= 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Empty source region!"]);
}this.clearAbortRequest$();
this.processImageStarted$I(0);
if (writeHeader) {
this.streamMetadata=null;
if (sm != null ) {
this.streamMetadata=this.convertStreamMetadata$javax_imageio_metadata_IIOMetadata$javax_imageio_ImageWriteParam(sm, this.param);
}if (this.streamMetadata == null ) {
this.streamMetadata=this.getDefaultStreamMetadata$javax_imageio_ImageWriteParam(this.param);
}p$1.writeHeader.apply(this, []);
this.stream.seek$J(this.headerPosition + 4);
this.nextSpace=(this.nextSpace + 3) & ~3;
this.stream.writeInt$I((this.nextSpace|0));
}this.imageMetadata=null;
var im=iioimage.getMetadata$();
if (im != null ) {
if (Clazz.instanceOf(im, "io.scif.media.imageioimpl.plugins.tiff.TIFFImageMetadata")) {
this.imageMetadata=(im).getShallowClone$();
} else if ($I$(6).asList$TTA(im.getMetadataFormatNames$()).contains$O("com_sun_media_imageio_plugins_tiff_image_1.0")) {
this.imageMetadata=p$1.convertNativeImageMetadata$javax_imageio_metadata_IIOMetadata.apply(this, [im]);
} else if (im.isStandardMetadataFormatSupported$()) {
try {
this.imageMetadata=p$1.convertStandardImageMetadata$javax_imageio_metadata_IIOMetadata.apply(this, [im]);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.imageio.metadata.IIOInvalidTreeException")){
} else {
throw e;
}
}
}}if (this.imageMetadata == null ) {
this.imageMetadata=this.getDefaultImageMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam(this.imageType, this.param);
}this.setupMetadata$java_awt_image_ColorModel$java_awt_image_SampleModel$I$I(colorModel, sampleModel, destWidth, destHeight);
this.compressor.setWriter$javax_imageio_ImageWriter(this);
this.compressor.setMetadata$javax_imageio_metadata_IIOMetadata(this.imageMetadata);
this.compressor.setStream$javax_imageio_stream_ImageOutputStream(this.stream);
var sampleSize=sampleModel.getSampleSize$();
p$1.initializeScaleTables$IA.apply(this, [sampleModel.getSampleSize$()]);
this.isBilevel=$I$(22).isBinary$java_awt_image_SampleModel(this.image.getSampleModel$());
this.isInverted=(this.nativePhotometricInterpretation == 1 && this.photometricInterpretation == 0 ) || (this.nativePhotometricInterpretation == 0 && this.photometricInterpretation == 1 ) ;
this.isImageSimple=(this.isBilevel || (!this.isInverted && $I$(22).imageIsContiguous$java_awt_image_RenderedImage(this.image) ) ) && !this.isRescaling && this.sourceBands == null    && this.periodX == 1  && this.periodY == 1  && this.colorConverter == null  ;
var rootIFD=this.imageMetadata.getRootIFD$();
rootIFD.writeToStream$javax_imageio_stream_ImageOutputStream(this.stream);
this.nextIFDPointerPos=this.stream.getStreamPosition$();
this.stream.writeInt$I(0);
var lastIFDPosition=rootIFD.getLastPosition$();
this.stream.seek$J(lastIFDPosition);
if (lastIFDPosition > this.nextSpace) {
this.nextSpace=lastIFDPosition;
}if (!writeData) {
return;
}var stripOrTileByteCountsPosition=rootIFD.getStripOrTileByteCountsPosition$();
var stripOrTileOffsetsPosition=rootIFD.getStripOrTileOffsetsPosition$();
this.totalPixels=this.tileWidth * this.tileLength * this.tilesDown * this.tilesAcross ;
this.pixelsDone=0;
for (var tj=0; tj < this.tilesDown; tj++) {
for (var ti=0; ti < this.tilesAcross; ti++) {
var pos=this.stream.getStreamPosition$();
var tileRect=Clazz.new_($I$(26,1).c$$I$I$I$I,[this.sourceXOffset + ti * this.tileWidth * this.periodX , this.sourceYOffset + tj * this.tileLength * this.periodY , this.tileWidth * this.periodX, this.tileLength * this.periodY]);
try {
var byteCount=p$1.writeTile$java_awt_Rectangle$io_scif_media_imageio_plugins_tiff_TIFFCompressor.apply(this, [tileRect, this.compressor]);
if (pos + byteCount > this.nextSpace) {
this.nextSpace=pos + byteCount;
}this.pixelsDone+=tileRect.width * tileRect.height;
this.processImageProgress$F(100.0 * this.pixelsDone / this.totalPixels);
this.stream.mark$();
this.stream.seek$J(stripOrTileOffsetsPosition);
this.stream.writeInt$I((pos|0));
stripOrTileOffsetsPosition+=4;
this.stream.seek$J(stripOrTileByteCountsPosition);
this.stream.writeInt$I(byteCount);
stripOrTileByteCountsPosition+=4;
this.stream.reset$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S$Throwable,["I/O error writing TIFF file!", e]);
} else {
throw e;
}
}
if (this.abortRequested$()) {
this.processWriteAborted$();
return;
}}
}
this.processImageComplete$();
}, p$1);

Clazz.newMeth(C$, 'canWriteSequence$', function () {
return true;
});

Clazz.newMeth(C$, 'prepareWriteSequence$javax_imageio_metadata_IIOMetadata', function (streamMetadata) {
if (this.getOutput$() == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["getOutput() == null!"]);
}if (streamMetadata != null ) {
streamMetadata=this.convertStreamMetadata$javax_imageio_metadata_IIOMetadata$javax_imageio_ImageWriteParam(streamMetadata, null);
}if (streamMetadata == null ) {
streamMetadata=this.getDefaultStreamMetadata$javax_imageio_ImageWriteParam(null);
}this.streamMetadata=streamMetadata;
p$1.writeHeader.apply(this, []);
this.isWritingSequence=true;
});

Clazz.newMeth(C$, 'writeToSequence$javax_imageio_IIOImage$javax_imageio_ImageWriteParam', function (image, param) {
if (!this.isWritingSequence) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["prepareWriteSequence() has not been called!"]);
}this.writeInsert$I$javax_imageio_IIOImage$javax_imageio_ImageWriteParam(-1, image, param);
});

Clazz.newMeth(C$, 'endWriteSequence$', function () {
if (this.getOutput$() == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["getOutput() == null!"]);
}if (!this.isWritingSequence) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["prepareWriteSequence() has not been called!"]);
}this.isWritingSequence=false;
});

Clazz.newMeth(C$, 'canInsertImage$I', function (imageIndex) {
if (this.getOutput$() == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["getOutput() == null!"]);
}this.stream.mark$();
var ifdpos=Clazz.array(Long.TYPE, [1]);
var ifd=Clazz.array(Long.TYPE, [1]);
p$1.locateIFD$I$JA$JA.apply(this, [imageIndex, ifdpos, ifd]);
this.stream.reset$();
return true;
});

Clazz.newMeth(C$, 'locateIFD$I$JA$JA', function (imageIndex, ifdpos, ifd) {
if (imageIndex < -1) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["imageIndex < -1!"]);
}var startPos=this.stream.getStreamPosition$();
this.stream.seek$J(this.headerPosition);
var byteOrder=this.stream.readUnsignedShort$();
if (byteOrder == 19789) {
this.stream.setByteOrder$java_nio_ByteOrder($I$(29).BIG_ENDIAN);
} else if (byteOrder == 18761) {
this.stream.setByteOrder$java_nio_ByteOrder($I$(29).LITTLE_ENDIAN);
} else {
this.stream.seek$J(startPos);
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Illegal byte order"]);
}if (this.stream.readUnsignedShort$() != 42) {
this.stream.seek$J(startPos);
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Illegal magic number"]);
}ifdpos[0]=this.stream.getStreamPosition$();
ifd[0]=this.stream.readUnsignedInt$();
if (ifd[0] == 0) {
if (imageIndex > 0) {
this.stream.seek$J(startPos);
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["imageIndex is greater than the largest available index!"]);
}return;
}this.stream.seek$J(ifd[0]);
for (var i=0; imageIndex == -1 || i < imageIndex ; i++) {
var numFields;
try {
numFields=this.stream.readShort$();
} catch (eof) {
if (Clazz.exceptionOf(eof,"java.io.EOFException")){
this.stream.seek$J(startPos);
ifd[0]=0;
return;
} else {
throw eof;
}
}
this.stream.skipBytes$I(12 * numFields);
ifdpos[0]=this.stream.getStreamPosition$();
ifd[0]=this.stream.readUnsignedInt$();
if (ifd[0] == 0) {
if (imageIndex != -1 && i < imageIndex - 1 ) {
this.stream.seek$J(startPos);
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["imageIndex is greater than the largest available index!"]);
}break;
}this.stream.seek$J(ifd[0]);
}
}, p$1);

Clazz.newMeth(C$, 'writeInsert$I$javax_imageio_IIOImage$javax_imageio_ImageWriteParam', function (imageIndex, image, param) {
p$1.insert$I$javax_imageio_IIOImage$javax_imageio_ImageWriteParam$Z.apply(this, [imageIndex, image, param, true]);
});

Clazz.newMeth(C$, 'insert$I$javax_imageio_IIOImage$javax_imageio_ImageWriteParam$Z', function (imageIndex, image, param, writeData) {
if (this.stream == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Output not set!"]);
}if (image == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["image == null!"]);
}var ifdpos=Clazz.array(Long.TYPE, [1]);
var ifd=Clazz.array(Long.TYPE, [1]);
p$1.locateIFD$I$JA$JA.apply(this, [imageIndex, ifdpos, ifd]);
this.stream.seek$J(ifdpos[0]);
if (ifdpos[0] + 4 > this.nextSpace) {
this.nextSpace=ifdpos[0] + 4;
}this.nextSpace=(this.nextSpace + 3) & ~3;
this.stream.writeInt$I((this.nextSpace|0));
this.stream.seek$J(this.nextSpace);
p$1.write$javax_imageio_metadata_IIOMetadata$javax_imageio_IIOImage$javax_imageio_ImageWriteParam$Z$Z.apply(this, [null, image, param, false, writeData]);
this.stream.seek$J(this.nextIFDPointerPos);
this.stream.writeInt$I((ifd[0]|0));
}, p$1);

Clazz.newMeth(C$, 'isEncodingEmpty', function () {
return this.isInsertingEmpty || this.isWritingEmpty ;
}, p$1);

Clazz.newMeth(C$, 'canInsertEmpty$I', function (imageIndex) {
return this.canInsertImage$I(imageIndex);
});

Clazz.newMeth(C$, 'canWriteEmpty$', function () {
if (this.getOutput$() == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["getOutput() == null!"]);
}return true;
});

Clazz.newMeth(C$, 'checkParamsEmpty$javax_imageio_ImageTypeSpecifier$I$I$java_util_List', function (imageType, width, height, thumbnails) {
if (this.getOutput$() == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["getOutput() == null!"]);
}if (imageType == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["imageType == null!"]);
}if (width < 1 || height < 1 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["width < 1 || height < 1!"]);
}if (thumbnails != null ) {
var numThumbs=thumbnails.size$();
for (var i=0; i < numThumbs; i++) {
var thumb=thumbnails.get$I(i);
if (thumb == null  || !(Clazz.instanceOf(thumb, "java.awt.image.BufferedImage")) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["thumbnails contains null references or objects other than BufferedImages!"]);
}}
}if (this.isInsertingEmpty) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Previous call to prepareInsertEmpty() without corresponding call to endInsertEmpty()!"]);
}if (this.isWritingEmpty) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Previous call to prepareWriteEmpty() without corresponding call to endWriteEmpty()!"]);
}}, p$1);

Clazz.newMeth(C$, 'prepareInsertEmpty$I$javax_imageio_ImageTypeSpecifier$I$I$javax_imageio_metadata_IIOMetadata$java_util_List$javax_imageio_ImageWriteParam', function (imageIndex, imageType, width, height, imageMetadata, thumbnails, param) {
p$1.checkParamsEmpty$javax_imageio_ImageTypeSpecifier$I$I$java_util_List.apply(this, [imageType, width, height, thumbnails]);
this.isInsertingEmpty=true;
var emptySM=imageType.getSampleModel$();
var emptyImage=Clazz.new_($I$(31,1).c$$I$I$I$I$I$I$I$I$java_awt_image_SampleModel$java_awt_image_ColorModel,[0, 0, width, height, 0, 0, emptySM.getWidth$(), emptySM.getHeight$(), emptySM, imageType.getColorModel$()]);
p$1.insert$I$javax_imageio_IIOImage$javax_imageio_ImageWriteParam$Z.apply(this, [imageIndex, Clazz.new_($I$(32,1).c$$java_awt_image_RenderedImage$java_util_List$javax_imageio_metadata_IIOMetadata,[emptyImage, null, imageMetadata]), param, false]);
});

Clazz.newMeth(C$, 'prepareWriteEmpty$javax_imageio_metadata_IIOMetadata$javax_imageio_ImageTypeSpecifier$I$I$javax_imageio_metadata_IIOMetadata$java_util_List$javax_imageio_ImageWriteParam', function (streamMetadata, imageType, width, height, imageMetadata, thumbnails, param) {
p$1.checkParamsEmpty$javax_imageio_ImageTypeSpecifier$I$I$java_util_List.apply(this, [imageType, width, height, thumbnails]);
this.isWritingEmpty=true;
var emptySM=imageType.getSampleModel$();
var emptyImage=Clazz.new_($I$(31,1).c$$I$I$I$I$I$I$I$I$java_awt_image_SampleModel$java_awt_image_ColorModel,[0, 0, width, height, 0, 0, emptySM.getWidth$(), emptySM.getHeight$(), emptySM, imageType.getColorModel$()]);
p$1.write$javax_imageio_metadata_IIOMetadata$javax_imageio_IIOImage$javax_imageio_ImageWriteParam$Z$Z.apply(this, [streamMetadata, Clazz.new_($I$(32,1).c$$java_awt_image_RenderedImage$java_util_List$javax_imageio_metadata_IIOMetadata,[emptyImage, null, imageMetadata]), param, true, false]);
});

Clazz.newMeth(C$, 'endInsertEmpty$', function () {
if (this.getOutput$() == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["getOutput() == null!"]);
}if (!this.isInsertingEmpty) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["No previous call to prepareInsertEmpty()!"]);
}if (this.isWritingEmpty) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Previous call to prepareWriteEmpty() without corresponding call to endWriteEmpty()!"]);
}if (this.inReplacePixelsNest) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["In nested call to prepareReplacePixels!"]);
}this.isInsertingEmpty=false;
});

Clazz.newMeth(C$, 'endWriteEmpty$', function () {
if (this.getOutput$() == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["getOutput() == null!"]);
}if (!this.isWritingEmpty) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["No previous call to prepareWriteEmpty()!"]);
}if (this.isInsertingEmpty) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Previous call to prepareInsertEmpty() without corresponding call to endInsertEmpty()!"]);
}if (this.inReplacePixelsNest) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["In nested call to prepareReplacePixels!"]);
}this.isWritingEmpty=false;
});

Clazz.newMeth(C$, 'readIFD$I', function (imageIndex) {
if (this.stream == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Output not set!"]);
}if (imageIndex < 0) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["imageIndex < 0!"]);
}this.stream.mark$();
var ifdpos=Clazz.array(Long.TYPE, [1]);
var ifd=Clazz.array(Long.TYPE, [1]);
p$1.locateIFD$I$JA$JA.apply(this, [imageIndex, ifdpos, ifd]);
if (ifd[0] == 0) {
this.stream.reset$();
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["imageIndex out of bounds!"]);
}var tagSets=Clazz.new_($I$(3,1).c$$I,[1]);
tagSets.add$TE($I$(4).getInstance$());
var rootIFD=Clazz.new_($I$(24,1).c$$java_util_List,[tagSets]);
rootIFD.initialize$javax_imageio_stream_ImageInputStream$Z(this.stream, true);
this.stream.reset$();
return rootIFD;
}, p$1);

Clazz.newMeth(C$, 'canReplacePixels$I', function (imageIndex) {
if (this.getOutput$() == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["getOutput() == null!"]);
}var rootIFD=p$1.readIFD$I.apply(this, [imageIndex]);
var f=rootIFD.getTIFFField$I(259);
var compression=f.getAsInt$I(0);
return compression == 1;
});

Clazz.newMeth(C$, 'prepareReplacePixels$I$java_awt_Rectangle', function (imageIndex, region) {
{
if (this.stream == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Output not set!"]);
}if (region == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["region == null!"]);
}if (region.getWidth$() < 1 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["region.getWidth() < 1!"]);
}if (region.getHeight$() < 1 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["region.getHeight() < 1!"]);
}if (this.inReplacePixelsNest) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["In nested call to prepareReplacePixels!"]);
}var replacePixelsIFD=p$1.readIFD$I.apply(this, [imageIndex]);
var f=replacePixelsIFD.getTIFFField$I(259);
var compression=f.getAsInt$I(0);
if (compression != 1) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["canReplacePixels(imageIndex) == false!"]);
}f=replacePixelsIFD.getTIFFField$I(256);
if (f == null ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Cannot read ImageWidth field."]);
}var w=f.getAsInt$I(0);
f=replacePixelsIFD.getTIFFField$I(257);
if (f == null ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Cannot read ImageHeight field."]);
}var h=f.getAsInt$I(0);
var bounds=Clazz.new_($I$(26,1).c$$I$I$I$I,[0, 0, w, h]);
region=region.intersection$java_awt_Rectangle(bounds);
if (region.isEmpty$()) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Region does not intersect image bounds"]);
}this.replacePixelsRegion=region;
f=replacePixelsIFD.getTIFFField$I(324);
if (f == null ) {
f=replacePixelsIFD.getTIFFField$I(273);
}this.replacePixelsTileOffsets=f.getAsLongs$();
f=replacePixelsIFD.getTIFFField$I(325);
if (f == null ) {
f=replacePixelsIFD.getTIFFField$I(279);
}this.replacePixelsByteCounts=f.getAsLongs$();
this.replacePixelsOffsetsPosition=replacePixelsIFD.getStripOrTileOffsetsPosition$();
this.replacePixelsByteCountsPosition=replacePixelsIFD.getStripOrTileByteCountsPosition$();
this.replacePixelsMetadata=Clazz.new_($I$(5,1).c$$io_scif_media_imageioimpl_plugins_tiff_TIFFIFD,[replacePixelsIFD]);
this.replacePixelsIndex=imageIndex;
this.inReplacePixelsNest=true;
}});

Clazz.newMeth(C$, 'subsample$java_awt_image_Raster$IA$I$I$I$I$I$I$java_awt_Rectangle', function (raster, sourceBands, subOriginX, subOriginY, subPeriodX, subPeriodY, dstOffsetX, dstOffsetY, target) {
var x=raster.getMinX$();
var y=raster.getMinY$();
var w=raster.getWidth$();
var h=raster.getHeight$();
var b=raster.getSampleModel$().getNumBands$();
var t=raster.getSampleModel$().getDataType$();
var outMinX=C$.XToTileX$I$I$I(x, subOriginX, subPeriodX) + dstOffsetX;
var outMinY=C$.YToTileY$I$I$I(y, subOriginY, subPeriodY) + dstOffsetY;
var outMaxX=C$.XToTileX$I$I$I(x + w - 1, subOriginX, subPeriodX) + dstOffsetX;
var outMaxY=C$.YToTileY$I$I$I(y + h - 1, subOriginY, subPeriodY) + dstOffsetY;
var outWidth=outMaxX - outMinX + 1;
var outHeight=outMaxY - outMinY + 1;
if (outWidth <= 0 || outHeight <= 0 ) return null;
var inMinX=(outMinX - dstOffsetX) * subPeriodX + subOriginX;
var inMaxX=(outMaxX - dstOffsetX) * subPeriodX + subOriginX;
var inWidth=inMaxX - inMinX + 1;
var inMinY=(outMinY - dstOffsetY) * subPeriodY + subOriginY;
var inMaxY=(outMaxY - dstOffsetY) * subPeriodY + subOriginY;
var inHeight=inMaxY - inMinY + 1;
var wr=raster.createCompatibleWritableRaster$I$I$I$I(outMinX, outMinY, outWidth, outHeight);
var jMax=inMinY + inHeight;
if (t == 4 || t == 5 ) {
var fsamples=Clazz.array(Float.TYPE, [inWidth]);
var fsubsamples=Clazz.array(Float.TYPE, [outWidth]);
for (var k=0; k < b; k++) {
var outY=outMinY;
for (var j=inMinY; j < jMax; j+=subPeriodY) {
raster.getSamples$I$I$I$I$I$FA(inMinX, j, inWidth, 1, k, fsamples);
var s=0;
for (var i=0; i < inWidth; i+=subPeriodX) {
fsubsamples[s++]=fsamples[i];
}
wr.setSamples$I$I$I$I$I$FA(outMinX, outY++, outWidth, 1, k, fsubsamples);
}
}
} else {
var samples=Clazz.array(Integer.TYPE, [inWidth]);
var subsamples=Clazz.array(Integer.TYPE, [outWidth]);
for (var k=0; k < b; k++) {
var outY=outMinY;
for (var j=inMinY; j < jMax; j+=subPeriodY) {
raster.getSamples$I$I$I$I$I$IA(inMinX, j, inWidth, 1, k, samples);
var s=0;
for (var i=0; i < inWidth; i+=subPeriodX) {
subsamples[s++]=samples[i];
}
wr.setSamples$I$I$I$I$I$IA(outMinX, outY++, outWidth, 1, k, subsamples);
}
}
}return wr.createChild$I$I$I$I$I$I$IA(outMinX, outMinY, target.width, target.height, target.x, target.y, sourceBands);
}, p$1);

Clazz.newMeth(C$, 'replacePixels$java_awt_image_RenderedImage$javax_imageio_ImageWriteParam', function (image, param) {
{
if (this.stream == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["stream == null!"]);
}if (image == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["image == null!"]);
}if (!this.inReplacePixelsNest) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["No previous call to prepareReplacePixels!"]);
}var stepX=1;
var stepY=1;
var gridX=0;
var gridY=0;
if (param == null ) {
param=this.getDefaultWriteParam$();
} else {
var paramCopy=this.getDefaultWriteParam$();
paramCopy.setCompressionMode$I(0);
paramCopy.setTilingMode$I(3);
paramCopy.setDestinationOffset$java_awt_Point(param.getDestinationOffset$());
paramCopy.setSourceBands$IA(param.getSourceBands$());
paramCopy.setSourceRegion$java_awt_Rectangle(param.getSourceRegion$());
stepX=param.getSourceXSubsampling$();
stepY=param.getSourceYSubsampling$();
gridX=param.getSubsamplingXOffset$();
gridY=param.getSubsamplingYOffset$();
param=paramCopy;
}var f=this.replacePixelsMetadata.getTIFFField$I(258);
if (f == null ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Cannot read destination BitsPerSample"]);
}var dstBitsPerSample=f.getAsInts$();
var srcBitsPerSample=image.getSampleModel$().getSampleSize$();
var sourceBands=param.getSourceBands$();
if (sourceBands != null ) {
if (sourceBands.length != dstBitsPerSample.length) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Source and destination have different SamplesPerPixel"]);
}for (var i=0; i < sourceBands.length; i++) {
if (dstBitsPerSample[i] != srcBitsPerSample[sourceBands[i]]) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Source and destination have different BitsPerSample"]);
}}
} else {
var srcNumBands=image.getSampleModel$().getNumBands$();
if (srcNumBands != dstBitsPerSample.length) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Source and destination have different SamplesPerPixel"]);
}for (var i=0; i < srcNumBands; i++) {
if (dstBitsPerSample[i] != srcBitsPerSample[i]) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Source and destination have different BitsPerSample"]);
}}
}var srcImageBounds=Clazz.new_($I$(26,1).c$$I$I$I$I,[image.getMinX$(), image.getMinY$(), image.getWidth$(), image.getHeight$()]);
var srcRect=param.getSourceRegion$();
if (srcRect == null ) {
srcRect=srcImageBounds;
}var subPeriodX=stepX;
var subPeriodY=stepY;
var subOriginX=gridX + srcRect.x;
var subOriginY=gridY + srcRect.y;
if (!srcRect.equals$O(srcImageBounds)) {
srcRect=srcRect.intersection$java_awt_Rectangle(srcImageBounds);
if (srcRect.isEmpty$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Source region does not intersect source image!"]);
}}var dstOffset=param.getDestinationOffset$();
var dMinX=C$.XToTileX$I$I$I(srcRect.x, subOriginX, subPeriodX) + dstOffset.x;
var dMinY=C$.YToTileY$I$I$I(srcRect.y, subOriginY, subPeriodY) + dstOffset.y;
var dMaxX=C$.XToTileX$I$I$I(srcRect.x + srcRect.width, subOriginX, subPeriodX) + dstOffset.x;
var dMaxY=C$.YToTileY$I$I$I(srcRect.y + srcRect.height, subOriginY, subPeriodY) + dstOffset.y;
var dstRect=Clazz.new_($I$(26,1).c$$I$I$I$I,[dstOffset.x, dstOffset.y, dMaxX - dMinX, dMaxY - dMinY]);
dstRect=dstRect.intersection$java_awt_Rectangle(this.replacePixelsRegion);
if (dstRect.isEmpty$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Forward mapped source region does not intersect destination region!"]);
}var activeSrcMinX=(dstRect.x - dstOffset.x) * subPeriodX + subOriginX;
var sxmax=(dstRect.x + dstRect.width - 1 - dstOffset.x) * subPeriodX + subOriginX;
var activeSrcWidth=sxmax - activeSrcMinX + 1;
var activeSrcMinY=(dstRect.y - dstOffset.y) * subPeriodY + subOriginY;
var symax=(dstRect.y + dstRect.height - 1 - dstOffset.y) * subPeriodY + subOriginY;
var activeSrcHeight=symax - activeSrcMinY + 1;
var activeSrcRect=Clazz.new_($I$(26,1).c$$I$I$I$I,[activeSrcMinX, activeSrcMinY, activeSrcWidth, activeSrcHeight]);
if (activeSrcRect.intersection$java_awt_Rectangle(srcImageBounds).isEmpty$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Backward mapped destination region does not intersect source image!"]);
}if (this.reader == null ) {
this.reader=Clazz.new_($I$(33,1).c$$javax_imageio_spi_ImageReaderSpi,[Clazz.new_($I$(34,1))]);
} else {
this.reader.reset$();
}this.stream.mark$();
try {
this.stream.seek$J(this.headerPosition);
this.reader.setInput$O(this.stream);
this.imageMetadata=this.replacePixelsMetadata;
this.param=param;
var sm=image.getSampleModel$();
var cm=image.getColorModel$();
this.numBands=sm.getNumBands$();
this.imageType=Clazz.new_($I$(30,1).c$$java_awt_image_RenderedImage,[image]);
this.periodX=param.getSourceXSubsampling$();
this.periodY=param.getSourceYSubsampling$();
this.sourceBands=null;
var sBands=param.getSourceBands$();
if (sBands != null ) {
this.sourceBands=sBands;
this.numBands=sourceBands.length;
}this.setupMetadata$java_awt_image_ColorModel$java_awt_image_SampleModel$I$I(cm, sm, this.reader.getWidth$I(this.replacePixelsIndex), this.reader.getHeight$I(this.replacePixelsIndex));
var scaleSampleSize=sm.getSampleSize$();
p$1.initializeScaleTables$IA.apply(this, [scaleSampleSize]);
this.isBilevel=$I$(22).isBinary$java_awt_image_SampleModel(image.getSampleModel$());
this.isInverted=(this.nativePhotometricInterpretation == 1 && this.photometricInterpretation == 0 ) || (this.nativePhotometricInterpretation == 0 && this.photometricInterpretation == 1 ) ;
this.isImageSimple=(this.isBilevel || (!this.isInverted && $I$(22).imageIsContiguous$java_awt_image_RenderedImage(image) ) ) && !this.isRescaling && sourceBands == null    && this.periodX == 1  && this.periodY == 1  && this.colorConverter == null  ;
var minTileX=C$.XToTileX$I$I$I(dstRect.x, 0, this.tileWidth);
var minTileY=C$.YToTileY$I$I$I(dstRect.y, 0, this.tileLength);
var maxTileX=C$.XToTileX$I$I$I(dstRect.x + dstRect.width - 1, 0, this.tileWidth);
var maxTileY=C$.YToTileY$I$I$I(dstRect.y + dstRect.height - 1, 0, this.tileLength);
var encoder=Clazz.new_($I$(19,1));
encoder.setWriter$javax_imageio_ImageWriter(this);
encoder.setStream$javax_imageio_stream_ImageOutputStream(this.stream);
encoder.setMetadata$javax_imageio_metadata_IIOMetadata(this.imageMetadata);
var tileRect=Clazz.new_($I$(26,1));
for (var ty=minTileY; ty <= maxTileY; ty++) {
for (var tx=minTileX; tx <= maxTileX; tx++) {
var tileIndex=ty * this.tilesAcross + tx;
var isEmpty=this.replacePixelsByteCounts[tileIndex] == 0;
var raster;
if (isEmpty) {
var tileSM=sm.createCompatibleSampleModel$I$I(this.tileWidth, this.tileLength);
raster=$I$(27).createWritableRaster$java_awt_image_SampleModel$java_awt_Point(tileSM, null);
} else {
var tileImage=this.reader.readTile$I$I$I(this.replacePixelsIndex, tx, ty);
raster=tileImage.getRaster$();
}tileRect.setLocation$I$I(tx * this.tileWidth, ty * this.tileLength);
tileRect.setSize$I$I(raster.getWidth$(), raster.getHeight$());
raster=raster.createWritableTranslatedChild$I$I(tileRect.x, tileRect.y);
var replacementRect=tileRect.intersection$java_awt_Rectangle(dstRect);
var srcMinX=(replacementRect.x - dstOffset.x) * subPeriodX + subOriginX;
var srcXmax=(replacementRect.x + replacementRect.width - 1 - dstOffset.x) * subPeriodX + subOriginX;
var srcWidth=srcXmax - srcMinX + 1;
var srcMinY=(replacementRect.y - dstOffset.y) * subPeriodY + subOriginY;
var srcYMax=(replacementRect.y + replacementRect.height - 1 - dstOffset.y) * subPeriodY + subOriginY;
var srcHeight=srcYMax - srcMinY + 1;
var srcTileRect=Clazz.new_($I$(26,1).c$$I$I$I$I,[srcMinX, srcMinY, srcWidth, srcHeight]);
var replacementData=image.getData$java_awt_Rectangle(srcTileRect);
if (subPeriodX == 1 && subPeriodY == 1  && subOriginX == 0  && subOriginY == 0 ) {
replacementData=replacementData.createChild$I$I$I$I$I$I$IA(srcTileRect.x, srcTileRect.y, srcTileRect.width, srcTileRect.height, replacementRect.x, replacementRect.y, sourceBands);
} else {
replacementData=p$1.subsample$java_awt_image_Raster$IA$I$I$I$I$I$I$java_awt_Rectangle.apply(this, [replacementData, sourceBands, subOriginX, subOriginY, subPeriodX, subPeriodY, dstOffset.x, dstOffset.y, replacementRect]);
if (replacementData == null ) {
continue;
}}raster.setRect$java_awt_image_Raster(replacementData);
if (isEmpty) {
this.stream.seek$J(this.nextSpace);
} else {
this.stream.seek$J(this.replacePixelsTileOffsets[tileIndex]);
}this.image=Clazz.new_($I$(35,1).c$$java_awt_image_Raster$java_awt_image_ColorModel,[raster, cm]);
var numBytes=p$1.writeTile$java_awt_Rectangle$io_scif_media_imageio_plugins_tiff_TIFFCompressor.apply(this, [tileRect, encoder]);
if (isEmpty) {
this.stream.mark$();
this.stream.seek$J(this.replacePixelsOffsetsPosition + 4 * tileIndex);
this.stream.writeInt$I((this.nextSpace|0));
this.stream.seek$J(this.replacePixelsByteCountsPosition + 4 * tileIndex);
this.stream.writeInt$I(numBytes);
this.stream.reset$();
this.nextSpace+=numBytes;
}}
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw e;
} else {
throw e;
}
} finally {
this.stream.reset$();
}
}});

Clazz.newMeth(C$, 'replacePixels$java_awt_image_Raster$javax_imageio_ImageWriteParam', function (raster, param) {
if (raster == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["raster == null!"]);
}this.replacePixels$java_awt_image_RenderedImage$javax_imageio_ImageWriteParam(Clazz.new_($I$(35,1).c$$java_awt_image_Raster$java_awt_image_ColorModel,[raster, this.image.getColorModel$()]), param);
});

Clazz.newMeth(C$, 'endReplacePixels$', function () {
{
if (!this.inReplacePixelsNest) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["No previous call to prepareReplacePixels()!"]);
}this.replacePixelsIndex=-1;
this.replacePixelsMetadata=null;
this.replacePixelsTileOffsets=null;
this.replacePixelsByteCounts=null;
this.replacePixelsOffsetsPosition=0;
this.replacePixelsByteCountsPosition=0;
this.replacePixelsRegion=null;
this.inReplacePixelsNest=false;
}});

Clazz.newMeth(C$, 'reset$', function () {
C$.superclazz.prototype.reset$.apply(this, []);
this.stream=null;
this.image=null;
this.imageType=null;
this.byteOrder=null;
this.param=null;
this.compressor=null;
this.colorConverter=null;
this.streamMetadata=null;
this.imageMetadata=null;
this.isWritingSequence=false;
this.isWritingEmpty=false;
this.isInsertingEmpty=false;
this.replacePixelsIndex=-1;
this.replacePixelsMetadata=null;
this.replacePixelsTileOffsets=null;
this.replacePixelsByteCounts=null;
this.replacePixelsOffsetsPosition=0;
this.replacePixelsByteCountsPosition=0;
this.replacePixelsRegion=null;
this.inReplacePixelsNest=false;
});

Clazz.newMeth(C$, 'dispose$', function () {
this.reset$();
C$.superclazz.prototype.dispose$.apply(this, []);
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
