(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),p$1={},I$=[[0,'java.util.ArrayList','java.util.HashMap','io.scif.media.imageioimpl.plugins.tiff.TIFFStreamMetadata','java.nio.ByteOrder','io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','io.scif.media.imageioimpl.plugins.tiff.TIFFImageMetadata','javax.imageio.ImageIO','io.scif.media.imageio.plugins.tiff.TIFFDecompressor','java.awt.color.ICC_Profile','java.awt.color.ICC_ColorSpace','java.awt.image.ComponentColorModel','javax.imageio.ImageTypeSpecifier','io.scif.media.imageio.plugins.tiff.TIFFImageReadParam','java.awt.Rectangle','io.scif.media.imageioimpl.common.ImageUtil','io.scif.media.imageioimpl.plugins.tiff.TIFFRenderedImage','io.scif.media.imageioimpl.plugins.tiff.TIFFLSBDecompressor','io.scif.media.imageioimpl.plugins.tiff.TIFFNullDecompressor','io.scif.media.imageioimpl.plugins.tiff.TIFFFaxDecompressor','io.scif.media.imageioimpl.plugins.tiff.TIFFPackBitsDecompressor','io.scif.media.imageioimpl.plugins.tiff.TIFFLZWDecompressor','io.scif.media.imageioimpl.plugins.tiff.TIFFJPEGDecompressor','io.scif.media.imageioimpl.plugins.tiff.TIFFDeflateDecompressor','io.scif.media.imageioimpl.plugins.tiff.TIFFOldJPEGDecompressor','io.scif.media.imageioimpl.plugins.tiff.TIFFYCbCrDecompressor','io.scif.media.imageioimpl.plugins.tiff.TIFFCIELabColorConverter','io.scif.media.imageioimpl.plugins.tiff.TIFFYCbCrColorConverter','io.scif.media.imageioimpl.plugins.tiff.TIFFImageWriter']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFImageReader", null, 'javax.imageio.ImageReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.stream=null;
this.gotHeader=false;
this.imageReadParam=this.getDefaultReadParam$();
this.streamMetadata=null;
this.currIndex=-1;
this.imageMetadata=null;
this.imageStartPosition=Clazz.new_($I$(1,1));
this.numImages=-1;
this.imageTypeMap=Clazz.new_($I$(2,1));
this.theImage=null;
this.width=-1;
this.height=-1;
this.numBands=-1;
this.tileOrStripWidth=-1;
this.tileOrStripHeight=-1;
this.planarConfiguration=1;
this.rowsDone=0;
}, 1);

C$.$fields$=[['Z',['gotHeader'],'I',['currIndex','numImages','width','height','numBands','tileOrStripWidth','tileOrStripHeight','planarConfiguration','rowsDone','compression','photometricInterpretation','samplesPerPixel','sourceXOffset','sourceYOffset','srcXSubsampling','srcYSubsampling','dstWidth','dstHeight','dstMinX','dstMinY','dstXOffset','dstYOffset','tilesAcross','tilesDown','pixelsRead','pixelsToRead'],'O',['stream','javax.imageio.stream.ImageInputStream','imageReadParam','javax.imageio.ImageReadParam','streamMetadata','io.scif.media.imageioimpl.plugins.tiff.TIFFStreamMetadata','imageMetadata','io.scif.media.imageioimpl.plugins.tiff.TIFFImageMetadata','imageStartPosition','java.util.List','imageTypeMap','java.util.HashMap','theImage','java.awt.image.BufferedImage','sampleFormat','int[]','+bitsPerSample','+extraSamples','colorMap','char[]','sourceBands','int[]','+destinationBands','decompressor','io.scif.media.imageio.plugins.tiff.TIFFDecompressor']]]

Clazz.newMeth(C$, 'c$$javax_imageio_spi_ImageReaderSpi', function (originatingProvider) {
;C$.superclazz.c$$javax_imageio_spi_ImageReaderSpi.apply(this,[originatingProvider]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setInput$O$Z$Z', function (input, seekForwardOnly, ignoreMetadata) {
C$.superclazz.prototype.setInput$O$Z$Z.apply(this, [input, seekForwardOnly, ignoreMetadata]);
this.resetLocal$();
if (input != null ) {
if (!(Clazz.instanceOf(input, "javax.imageio.stream.ImageInputStream"))) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["input not an ImageInputStream!"]);
}this.stream=input;
} else {
this.stream=null;
}});

Clazz.newMeth(C$, 'readHeader', function () {
if (this.gotHeader) {
return;
}if (this.stream == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Input not set!"]);
}this.streamMetadata=Clazz.new_($I$(3,1));
try {
var byteOrder=this.stream.readUnsignedShort$();
if (byteOrder == 19789) {
this.streamMetadata.byteOrder=$I$(4).BIG_ENDIAN;
this.stream.setByteOrder$java_nio_ByteOrder($I$(4).BIG_ENDIAN);
} else if (byteOrder == 18761) {
this.streamMetadata.byteOrder=$I$(4).LITTLE_ENDIAN;
this.stream.setByteOrder$java_nio_ByteOrder($I$(4).LITTLE_ENDIAN);
} else {
this.processWarningOccurred$S("Bad byte order in header, assuming little-endian");
this.streamMetadata.byteOrder=$I$(4).LITTLE_ENDIAN;
this.stream.setByteOrder$java_nio_ByteOrder($I$(4).LITTLE_ENDIAN);
}var magic=this.stream.readUnsignedShort$();
if (magic != 42) {
this.processWarningOccurred$S("Bad magic number in header, continuing");
}var offset=this.stream.readUnsignedInt$();
this.imageStartPosition.add$TE( new Long(offset));
this.stream.seek$J(offset);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S$Throwable,["I/O error reading header!", e]);
} else {
throw e;
}
}
this.gotHeader=true;
}, p$1);

Clazz.newMeth(C$, 'locateImage$I', function (imageIndex) {
p$1.readHeader.apply(this, []);
try {
var index=Math.min(imageIndex, this.imageStartPosition.size$() - 1);
var l=this.imageStartPosition.get$I(index);
this.stream.seek$J(l.longValue$());
while (index < imageIndex){
var count=this.stream.readUnsignedShort$();
this.stream.skipBytes$I(12 * count);
var offset=this.stream.readUnsignedInt$();
if (offset == 0) {
return index;
}this.imageStartPosition.add$TE( new Long(offset));
this.stream.seek$J(offset);
++index;
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S$Throwable,["Couldn\'t seek!", e]);
} else {
throw e;
}
}
if (this.currIndex != imageIndex) {
this.imageMetadata=null;
}this.currIndex=imageIndex;
return imageIndex;
}, p$1);

Clazz.newMeth(C$, 'getNumImages$Z', function (allowSearch) {
if (this.stream == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Input not set!"]);
}if (this.seekForwardOnly && allowSearch ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["seekForwardOnly and allowSearch can\'t both be true!"]);
}if (this.numImages > 0) {
return this.numImages;
}if (allowSearch) {
this.numImages=p$1.locateImage$I.apply(this, [2147483647]) + 1;
}return this.numImages;
});

Clazz.newMeth(C$, 'getStreamMetadata$', function () {
p$1.readHeader.apply(this, []);
return this.streamMetadata;
});

Clazz.newMeth(C$, 'checkIndex$I', function (imageIndex) {
if (imageIndex < this.minIndex) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["imageIndex < minIndex!"]);
}if (this.seekForwardOnly) {
this.minIndex=imageIndex;
}}, p$1);

Clazz.newMeth(C$, 'seekToImage$I', function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
var index=p$1.locateImage$I.apply(this, [imageIndex]);
if (index != imageIndex) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["imageIndex out of bounds!"]);
}p$1.readMetadata.apply(this, []);
p$1.initializeFromMetadata.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'readMetadata', function () {
if (this.stream == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Input not set!"]);
}if (this.imageMetadata != null ) {
return;
}try {
var tagSets;
if (Clazz.instanceOf(this.imageReadParam, "io.scif.media.imageio.plugins.tiff.TIFFImageReadParam")) {
tagSets=(this.imageReadParam).getAllowedTagSets$();
} else {
tagSets=Clazz.new_($I$(1,1).c$$I,[1]);
tagSets.add$TE($I$(5).getInstance$());
}this.imageMetadata=Clazz.new_($I$(6,1).c$$java_util_List,[tagSets]);
this.imageMetadata.initializeFromStream$javax_imageio_stream_ImageInputStream$Z(this.stream, this.ignoreMetadata);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"javax.imageio.IIOException")){
var iioe = e$$;
{
throw iioe;
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var ioe = e$$;
{
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S$Throwable,["I/O error reading image metadata!", ioe]);
}
} else {
throw e$$;
}
}
}, p$1);

Clazz.newMeth(C$, 'getWidth', function () {
return this.width;
}, p$1);

Clazz.newMeth(C$, 'getHeight', function () {
return this.height;
}, p$1);

Clazz.newMeth(C$, 'getNumBands', function () {
return this.numBands;
}, p$1);

Clazz.newMeth(C$, 'getTileOrStripWidth', function () {
var f=this.imageMetadata.getTIFFField$I(322);
return (f == null ) ? p$1.getWidth.apply(this, []) : f.getAsInt$I(0);
}, p$1);

Clazz.newMeth(C$, 'getTileOrStripHeight', function () {
var f=this.imageMetadata.getTIFFField$I(323);
if (f != null ) {
return f.getAsInt$I(0);
}f=this.imageMetadata.getTIFFField$I(278);
var h=(f == null ) ? -1 : f.getAsInt$I(0);
return (h == -1) ? p$1.getHeight.apply(this, []) : h;
}, p$1);

Clazz.newMeth(C$, 'getPlanarConfiguration', function () {
var f=this.imageMetadata.getTIFFField$I(284);
if (f != null ) {
var planarConfigurationValue=f.getAsInt$I(0);
if (planarConfigurationValue == 2) {
if (p$1.getCompression.apply(this, []) == 6 && this.imageMetadata.getTIFFField$I(513) != null  ) {
this.processWarningOccurred$S("PlanarConfiguration \"Planar\" value inconsistent with JPEGInterchangeFormat; resetting to \"Chunky\".");
planarConfigurationValue=1;
} else {
var offsetField=this.imageMetadata.getTIFFField$I(324);
if (offsetField == null ) {
offsetField=this.imageMetadata.getTIFFField$I(273);
var tw=p$1.getTileOrStripWidth.apply(this, []);
var th=p$1.getTileOrStripHeight.apply(this, []);
var tAcross=((p$1.getWidth.apply(this, []) + tw - 1)/tw|0);
var tDown=((p$1.getHeight.apply(this, []) + th - 1)/th|0);
var tilesPerImage=tAcross * tDown;
var offsetArray=offsetField.getAsLongs$();
if (offsetArray != null  && offsetArray.length == tilesPerImage ) {
this.processWarningOccurred$S("PlanarConfiguration \"Planar\" value inconsistent with TileOffsets field value count; resetting to \"Chunky\".");
planarConfigurationValue=1;
}} else {
var rowsPerStrip=p$1.getTileOrStripHeight.apply(this, []);
var stripsPerImage=((p$1.getHeight.apply(this, []) + rowsPerStrip - 1)/rowsPerStrip|0);
var offsetArray=offsetField.getAsLongs$();
if (offsetArray != null  && offsetArray.length == stripsPerImage ) {
this.processWarningOccurred$S("PlanarConfiguration \"Planar\" value inconsistent with StripOffsets field value count; resetting to \"Chunky\".");
planarConfigurationValue=1;
}}}}return planarConfigurationValue;
}return 1;
}, p$1);

Clazz.newMeth(C$, 'getTileOrStripOffset$I', function (tileIndex) {
var f=this.imageMetadata.getTIFFField$I(324);
if (f == null ) {
f=this.imageMetadata.getTIFFField$I(273);
}if (f == null ) {
f=this.imageMetadata.getTIFFField$I(513);
}if (f == null ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Missing required strip or tile offsets field."]);
}return f.getAsLong$I(tileIndex);
}, p$1);

Clazz.newMeth(C$, 'getTileOrStripByteCount$I', function (tileIndex) {
var f=this.imageMetadata.getTIFFField$I(325);
if (f == null ) {
f=this.imageMetadata.getTIFFField$I(279);
}if (f == null ) {
f=this.imageMetadata.getTIFFField$I(514);
}var tileOrStripByteCount;
if (f != null ) {
tileOrStripByteCount=f.getAsLong$I(tileIndex);
} else {
this.processWarningOccurred$S("TIFF directory contains neither StripByteCounts nor TileByteCounts field: attempting to calculate from strip or tile width and height.");
var bitsPerPixel=this.bitsPerSample[0];
for (var i=1; i < this.samplesPerPixel; i++) {
bitsPerPixel+=this.bitsPerSample[i];
}
var bytesPerRow=((p$1.getTileOrStripWidth.apply(this, []) * bitsPerPixel + 7)/8|0);
tileOrStripByteCount=bytesPerRow * p$1.getTileOrStripHeight.apply(this, []);
var streamLength=this.stream.length$();
if (streamLength != -1) {
tileOrStripByteCount=Math.min(tileOrStripByteCount, streamLength - p$1.getTileOrStripOffset$I.apply(this, [tileIndex]));
} else {
this.processWarningOccurred$S("Stream length is unknown: cannot clamp estimated strip or tile byte count to EOF.");
}}return tileOrStripByteCount;
}, p$1);

Clazz.newMeth(C$, 'getCompression', function () {
var f=this.imageMetadata.getTIFFField$I(259);
if (f == null ) {
return 1;
} else {
return f.getAsInt$I(0);
}}, p$1);

Clazz.newMeth(C$, 'getWidth$I', function (imageIndex) {
p$1.seekToImage$I.apply(this, [imageIndex]);
return p$1.getWidth.apply(this, []);
});

Clazz.newMeth(C$, 'getHeight$I', function (imageIndex) {
p$1.seekToImage$I.apply(this, [imageIndex]);
return p$1.getHeight.apply(this, []);
});

Clazz.newMeth(C$, 'initializeFromMetadata', function () {
var f;
f=this.imageMetadata.getTIFFField$I(259);
if (f == null ) {
this.processWarningOccurred$S("Compression field is missing; assuming no compression");
this.compression=1;
} else {
this.compression=f.getAsInt$I(0);
}var isMissingDimension=false;
f=this.imageMetadata.getTIFFField$I(256);
if (f != null ) {
this.width=f.getAsInt$I(0);
} else {
this.processWarningOccurred$S("ImageWidth field is missing.");
isMissingDimension=true;
}f=this.imageMetadata.getTIFFField$I(257);
if (f != null ) {
this.height=f.getAsInt$I(0);
} else {
this.processWarningOccurred$S("ImageLength field is missing.");
isMissingDimension=true;
}f=this.imageMetadata.getTIFFField$I(277);
if (f != null ) {
this.samplesPerPixel=f.getAsInt$I(0);
} else {
this.samplesPerPixel=1;
isMissingDimension=true;
}var defaultBitDepth=1;
if (isMissingDimension && (f=this.imageMetadata.getTIFFField$I(513)) != null  ) {
var iter=$I$(7).getImageReadersByFormatName$S("JPEG");
if (iter != null  && iter.hasNext$() ) {
var jreader=iter.next$();
try {
this.stream.mark$();
this.stream.seek$J(f.getAsLong$I(0));
jreader.setInput$O(this.stream);
if (this.imageMetadata.getTIFFField$I(256) == null ) {
this.width=jreader.getWidth$I(0);
}if (this.imageMetadata.getTIFFField$I(257) == null ) {
this.height=jreader.getHeight$I(0);
}var imageType=jreader.getRawImageType$I(0);
if (this.imageMetadata.getTIFFField$I(277) == null ) {
this.samplesPerPixel=imageType.getSampleModel$().getNumBands$();
}this.stream.reset$();
defaultBitDepth=imageType.getColorModel$().getComponentSize$I(0);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
jreader.dispose$();
}}if (this.samplesPerPixel < 1) {
this.processWarningOccurred$S("Samples per pixel < 1!");
}this.numBands=this.samplesPerPixel;
this.colorMap=null;
f=this.imageMetadata.getTIFFField$I(320);
if (f != null ) {
this.colorMap=f.getAsChars$();
}f=this.imageMetadata.getTIFFField$I(262);
if (f == null ) {
if (this.compression == 2 || this.compression == 3  || this.compression == 4 ) {
this.processWarningOccurred$S("PhotometricInterpretation field is missing; assuming WhiteIsZero");
this.photometricInterpretation=0;
} else if (this.colorMap != null ) {
this.photometricInterpretation=3;
} else if (this.samplesPerPixel == 3 || this.samplesPerPixel == 4 ) {
this.photometricInterpretation=2;
} else {
this.processWarningOccurred$S("PhotometricInterpretation field is missing; assuming BlackIsZero");
this.photometricInterpretation=1;
}} else {
this.photometricInterpretation=f.getAsInt$I(0);
}var replicateFirst=false;
var first=-1;
f=this.imageMetadata.getTIFFField$I(339);
this.sampleFormat=Clazz.array(Integer.TYPE, [this.samplesPerPixel]);
replicateFirst=false;
if (f == null ) {
replicateFirst=true;
first=4;
} else if (f.getCount$() != this.samplesPerPixel) {
replicateFirst=true;
first=f.getAsInt$I(0);
}for (var i=0; i < this.samplesPerPixel; i++) {
this.sampleFormat[i]=replicateFirst ? first : f.getAsInt$I(i);
if (this.sampleFormat[i] != 1 && this.sampleFormat[i] != 2  && this.sampleFormat[i] != 3  && this.sampleFormat[i] != 4 ) {
this.processWarningOccurred$S("Illegal value for SAMPLE_FORMAT, assuming SAMPLE_FORMAT_UNDEFINED");
this.sampleFormat[i]=4;
}}
f=this.imageMetadata.getTIFFField$I(258);
this.bitsPerSample=Clazz.array(Integer.TYPE, [this.samplesPerPixel]);
replicateFirst=false;
if (f == null ) {
replicateFirst=true;
first=defaultBitDepth;
} else if (f.getCount$() != this.samplesPerPixel) {
replicateFirst=true;
first=f.getAsInt$I(0);
}for (var i=0; i < this.samplesPerPixel; i++) {
this.bitsPerSample[i]=replicateFirst ? first : f.getAsInt$I(i);
if (false) {
System.out.println$S("bitsPerSample[" + i + "] = " + this.bitsPerSample[i] );
}}
this.extraSamples=null;
f=this.imageMetadata.getTIFFField$I(338);
if (f != null ) {
this.extraSamples=f.getAsInts$();
}}, p$1);

Clazz.newMeth(C$, 'getImageTypes$I', function (imageIndex) {
var l;
var imageIndexInteger= new Integer(imageIndex);
if (this.imageTypeMap.containsKey$O(imageIndexInteger)) {
l=this.imageTypeMap.get$O(imageIndexInteger);
} else {
l=Clazz.new_($I$(1,1).c$$I,[1]);
p$1.seekToImage$I.apply(this, [imageIndex]);
var itsRaw=$I$(8).getRawImageTypeSpecifier$I$I$I$IA$IA$IA$CA(this.photometricInterpretation, this.compression, this.samplesPerPixel, this.bitsPerSample, this.sampleFormat, this.extraSamples, this.colorMap);
var iccProfileField=this.imageMetadata.getTIFFField$I(34675);
if (iccProfileField != null  && Clazz.instanceOf(itsRaw.getColorModel$(), "java.awt.image.ComponentColorModel") ) {
var iccProfileValue=iccProfileField.getAsBytes$();
var iccProfile=$I$(9).getInstance$BA(iccProfileValue);
var iccColorSpace=Clazz.new_($I$(10,1).c$$java_awt_color_ICC_Profile,[iccProfile]);
var cmRaw=itsRaw.getColorModel$();
var csRaw=cmRaw.getColorSpace$();
var smRaw=itsRaw.getSampleModel$();
var numBands=smRaw.getNumBands$();
var numComponents=iccColorSpace.getNumComponents$();
if (numBands == numComponents || numBands == numComponents + 1 ) {
var hasAlpha=numComponents != numBands;
var isAlphaPre=hasAlpha && cmRaw.isAlphaPremultiplied$() ;
var iccColorModel=Clazz.new_($I$(11,1).c$$java_awt_color_ColorSpace$IA$Z$Z$I$I,[iccColorSpace, cmRaw.getComponentSize$(), hasAlpha, isAlphaPre, cmRaw.getTransparency$(), cmRaw.getTransferType$()]);
l.add$TE(Clazz.new_($I$(12,1).c$$java_awt_image_ColorModel$java_awt_image_SampleModel,[iccColorModel, smRaw]));
if (csRaw.getType$() == iccColorSpace.getType$() && csRaw.getNumComponents$() == iccColorSpace.getNumComponents$() ) {
l.add$TE(itsRaw);
}} else {
l.add$TE(itsRaw);
}} else {
l.add$TE(itsRaw);
}this.imageTypeMap.put$TK$TV(imageIndexInteger, l);
}return l.iterator$();
});

Clazz.newMeth(C$, 'getImageMetadata$I', function (imageIndex) {
p$1.seekToImage$I.apply(this, [imageIndex]);
var im=Clazz.new_($I$(6,1).c$$java_util_List,[this.imageMetadata.getRootIFD$().getTagSetList$()]);
var root=this.imageMetadata.getAsTree$S("com_sun_media_imageio_plugins_tiff_image_1.0");
im.setFromTree$S$org_w3c_dom_Node("com_sun_media_imageio_plugins_tiff_image_1.0", root);
return im;
});

Clazz.newMeth(C$, 'getStreamMetadata$I', function (imageIndex) {
p$1.readHeader.apply(this, []);
var sm=Clazz.new_($I$(3,1));
var root=sm.getAsTree$S("com_sun_media_imageio_plugins_tiff_stream_1.0");
sm.setFromTree$S$org_w3c_dom_Node("com_sun_media_imageio_plugins_tiff_stream_1.0", root);
return sm;
});

Clazz.newMeth(C$, 'isRandomAccessEasy$I', function (imageIndex) {
if (this.currIndex != -1) {
p$1.seekToImage$I.apply(this, [this.currIndex]);
return p$1.getCompression.apply(this, []) == 1;
} else {
return false;
}});

Clazz.newMeth(C$, 'readSupportsThumbnails$', function () {
return false;
});

Clazz.newMeth(C$, 'hasThumbnails$I', function (imageIndex) {
return false;
});

Clazz.newMeth(C$, 'getNumThumbnails$I', function (imageIndex) {
return 0;
});

Clazz.newMeth(C$, 'getDefaultReadParam$', function () {
return Clazz.new_($I$(13,1));
});

Clazz.newMeth(C$, 'isImageTiled$I', function (imageIndex) {
p$1.seekToImage$I.apply(this, [imageIndex]);
var f=this.imageMetadata.getTIFFField$I(322);
return f != null ;
});

Clazz.newMeth(C$, 'getTileWidth$I', function (imageIndex) {
p$1.seekToImage$I.apply(this, [imageIndex]);
return p$1.getTileOrStripWidth.apply(this, []);
});

Clazz.newMeth(C$, 'getTileHeight$I', function (imageIndex) {
p$1.seekToImage$I.apply(this, [imageIndex]);
return p$1.getTileOrStripHeight.apply(this, []);
});

Clazz.newMeth(C$, 'readTile$I$I$I', function (imageIndex, tileX, tileY) {
var w=this.getWidth$I(imageIndex);
var h=this.getHeight$I(imageIndex);
var tw=this.getTileWidth$I(imageIndex);
var th=this.getTileHeight$I(imageIndex);
var x=tw * tileX;
var y=th * tileY;
if (tileX < 0 || tileY < 0  || x >= w  || y >= h ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Tile indices are out of bounds!"]);
}if (x + tw > w) {
tw=w - x;
}if (y + th > h) {
th=h - y;
}var param=this.getDefaultReadParam$();
var tileRect=Clazz.new_($I$(14,1).c$$I$I$I$I,[x, y, tw, th]);
param.setSourceRegion$java_awt_Rectangle(tileRect);
return this.read$I$javax_imageio_ImageReadParam(imageIndex, param);
});

Clazz.newMeth(C$, 'canReadRaster$', function () {
return false;
});

Clazz.newMeth(C$, 'readRaster$I$javax_imageio_ImageReadParam', function (imageIndex, param) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'ifloor$I$I', function (num, den) {
if (num < 0) {
num-=den - 1;
}return (num/den|0);
}, 1);

Clazz.newMeth(C$, 'iceil$I$I', function (num, den) {
if (num > 0) {
num+=den - 1;
}return (num/den|0);
}, 1);

Clazz.newMeth(C$, 'prepareRead$I$javax_imageio_ImageReadParam', function (imageIndex, param) {
if (this.stream == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["Input not set!"]);
}if (param == null ) {
param=this.getDefaultReadParam$();
}this.imageReadParam=param;
p$1.seekToImage$I.apply(this, [imageIndex]);
this.tileOrStripWidth=p$1.getTileOrStripWidth.apply(this, []);
this.tileOrStripHeight=p$1.getTileOrStripHeight.apply(this, []);
this.planarConfiguration=p$1.getPlanarConfiguration.apply(this, []);
this.sourceBands=param.getSourceBands$();
if (this.sourceBands == null ) {
this.sourceBands=Clazz.array(Integer.TYPE, [this.numBands]);
for (var i=0; i < this.numBands; i++) {
this.sourceBands[i]=i;
}
}var imageTypes=this.getImageTypes$I(imageIndex);
var theImageType=$I$(15).getDestinationType$javax_imageio_ImageReadParam$java_util_Iterator(param, imageTypes);
var destNumBands=theImageType.getSampleModel$().getNumBands$();
this.destinationBands=param.getDestinationBands$();
if (this.destinationBands == null ) {
this.destinationBands=Clazz.array(Integer.TYPE, [destNumBands]);
for (var i=0; i < destNumBands; i++) {
this.destinationBands[i]=i;
}
}if (this.sourceBands.length != this.destinationBands.length) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["sourceBands.length != destinationBands.length"]);
}for (var i=0; i < this.sourceBands.length; i++) {
var sb=this.sourceBands[i];
if (sb < 0 || sb >= this.numBands ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Source band out of range!"]);
}var db=this.destinationBands[i];
if (db < 0 || db >= destNumBands ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Destination band out of range!"]);
}}
}, p$1);

Clazz.newMeth(C$, 'readAsRenderedImage$I$javax_imageio_ImageReadParam', function (imageIndex, param) {
p$1.prepareRead$I$javax_imageio_ImageReadParam.apply(this, [imageIndex, param]);
return Clazz.new_($I$(16,1).c$$io_scif_media_imageioimpl_plugins_tiff_TIFFImageReader$I$javax_imageio_ImageReadParam$I$I,[this, imageIndex, this.imageReadParam, this.width, this.height]);
});

Clazz.newMeth(C$, 'decodeTile$I$I$I', function (ti, tj, band) {
if (false) {
System.out.println$S("decodeTile(" + ti + "," + tj + "," + band + ")" );
}var tileRect=Clazz.new_($I$(14,1).c$$I$I$I$I,[ti * this.tileOrStripWidth, tj * this.tileOrStripHeight, this.tileOrStripWidth, this.tileOrStripHeight]);
if (!this.isImageTiled$I(this.currIndex)) {
tileRect=tileRect.intersection$java_awt_Rectangle(Clazz.new_($I$(14,1).c$$I$I$I$I,[0, 0, this.width, this.height]));
}if (tileRect.width <= 0 || tileRect.height <= 0 ) {
return;
}var srcMinX=tileRect.x;
var srcMinY=tileRect.y;
var srcWidth=tileRect.width;
var srcHeight=tileRect.height;
this.dstMinX=C$.iceil$I$I(srcMinX - this.sourceXOffset, this.srcXSubsampling);
var dstMaxX=C$.ifloor$I$I(srcMinX + srcWidth - 1 - this.sourceXOffset, this.srcXSubsampling);
this.dstMinY=C$.iceil$I$I(srcMinY - this.sourceYOffset, this.srcYSubsampling);
var dstMaxY=C$.ifloor$I$I(srcMinY + srcHeight - 1 - this.sourceYOffset, this.srcYSubsampling);
this.dstWidth=dstMaxX - this.dstMinX + 1;
this.dstHeight=dstMaxY - this.dstMinY + 1;
this.dstMinX+=this.dstXOffset;
this.dstMinY+=this.dstYOffset;
var dstRect=Clazz.new_($I$(14,1).c$$I$I$I$I,[this.dstMinX, this.dstMinY, this.dstWidth, this.dstHeight]);
dstRect=dstRect.intersection$java_awt_Rectangle(this.theImage.getRaster$().getBounds$());
this.dstMinX=dstRect.x;
this.dstMinY=dstRect.y;
this.dstWidth=dstRect.width;
this.dstHeight=dstRect.height;
if (this.dstWidth <= 0 || this.dstHeight <= 0 ) {
return;
}var activeSrcMinX=(this.dstMinX - this.dstXOffset) * this.srcXSubsampling + this.sourceXOffset;
var sxmax=(this.dstMinX + this.dstWidth - 1 - this.dstXOffset) * this.srcXSubsampling + this.sourceXOffset;
var activeSrcWidth=sxmax - activeSrcMinX + 1;
var activeSrcMinY=(this.dstMinY - this.dstYOffset) * this.srcYSubsampling + this.sourceYOffset;
var symax=(this.dstMinY + this.dstHeight - 1 - this.dstYOffset) * this.srcYSubsampling + this.sourceYOffset;
var activeSrcHeight=symax - activeSrcMinY + 1;
this.decompressor.setSrcMinX$I(srcMinX);
this.decompressor.setSrcMinY$I(srcMinY);
this.decompressor.setSrcWidth$I(srcWidth);
this.decompressor.setSrcHeight$I(srcHeight);
this.decompressor.setDstMinX$I(this.dstMinX);
this.decompressor.setDstMinY$I(this.dstMinY);
this.decompressor.setDstWidth$I(this.dstWidth);
this.decompressor.setDstHeight$I(this.dstHeight);
this.decompressor.setActiveSrcMinX$I(activeSrcMinX);
this.decompressor.setActiveSrcMinY$I(activeSrcMinY);
this.decompressor.setActiveSrcWidth$I(activeSrcWidth);
this.decompressor.setActiveSrcHeight$I(activeSrcHeight);
var tileIndex=tj * this.tilesAcross + ti;
if (this.planarConfiguration == 2) {
tileIndex+=band * this.tilesAcross * this.tilesDown ;
}var offset=p$1.getTileOrStripOffset$I.apply(this, [tileIndex]);
var byteCount=p$1.getTileOrStripByteCount$I.apply(this, [tileIndex]);
var streamLength=this.stream.length$();
if (streamLength > 0 && offset + byteCount > streamLength ) {
this.processWarningOccurred$S("Attempting to process truncated stream.");
if (Math.max(byteCount=streamLength - offset, 0) == 0) {
this.processWarningOccurred$S("No bytes in strip/tile: skipping.");
return;
}}this.decompressor.setStream$javax_imageio_stream_ImageInputStream(this.stream);
this.decompressor.setOffset$J(offset);
this.decompressor.setByteCount$I((byteCount|0));
this.decompressor.beginDecoding$();
this.stream.mark$();
this.decompressor.decode$();
this.stream.reset$();
}, p$1);

Clazz.newMeth(C$, 'reportProgress', function () {
this.pixelsRead+=this.dstWidth * this.dstHeight;
this.processImageProgress$F(100.0 * this.pixelsRead / this.pixelsToRead);
this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(this.theImage, this.dstMinX, this.dstMinY, this.dstWidth, this.dstHeight, 1, 1, this.destinationBands);
}, p$1);

Clazz.newMeth(C$, 'read$I$javax_imageio_ImageReadParam', function (imageIndex, param) {
p$1.prepareRead$I$javax_imageio_ImageReadParam.apply(this, [imageIndex, param]);
this.theImage=C$.getDestination$javax_imageio_ImageReadParam$java_util_Iterator$I$I(param, this.getImageTypes$I(imageIndex), this.width, this.height);
this.srcXSubsampling=this.imageReadParam.getSourceXSubsampling$();
this.srcYSubsampling=this.imageReadParam.getSourceYSubsampling$();
var p=this.imageReadParam.getDestinationOffset$();
this.dstXOffset=p.x;
this.dstYOffset=p.y;
var srcRegion=Clazz.new_($I$(14,1).c$$I$I$I$I,[0, 0, 0, 0]);
var destRegion=Clazz.new_($I$(14,1).c$$I$I$I$I,[0, 0, 0, 0]);
javax.imageio.ImageReader.computeRegions$javax_imageio_ImageReadParam$I$I$java_awt_image_BufferedImage$java_awt_Rectangle$java_awt_Rectangle(this.imageReadParam, this.width, this.height, this.theImage, srcRegion, destRegion);
this.sourceXOffset=srcRegion.x;
this.sourceYOffset=srcRegion.y;
this.pixelsToRead=destRegion.width * destRegion.height;
this.pixelsRead=0;
this.processImageStarted$I(imageIndex);
this.processImageProgress$F(0.0);
this.tilesAcross=((this.width + this.tileOrStripWidth - 1)/this.tileOrStripWidth|0);
this.tilesDown=((this.height + this.tileOrStripHeight - 1)/this.tileOrStripHeight|0);
var compression=p$1.getCompression.apply(this, []);
var colorConverter=null;
if (Clazz.instanceOf(this.imageReadParam, "io.scif.media.imageio.plugins.tiff.TIFFImageReadParam")) {
var tparam=this.imageReadParam;
this.decompressor=tparam.getTIFFDecompressor$();
colorConverter=tparam.getColorConverter$();
}if (this.decompressor == null ) {
if (compression == 1) {
var fillOrderField=this.imageMetadata.getTIFFField$I(266);
if (fillOrderField != null  && fillOrderField.getAsInt$I(0) == 2 ) {
this.decompressor=Clazz.new_($I$(17,1));
} else {
this.decompressor=Clazz.new_($I$(18,1));
}} else if (compression == 4) {
if (this.decompressor == null ) {
if (false) {
System.out.println$S("Using Java T.6 decompressor");
}this.decompressor=Clazz.new_($I$(19,1));
}} else if (compression == 3) {
if (this.decompressor == null ) {
if (false) {
System.out.println$S("Using Java T.4 decompressor");
}this.decompressor=Clazz.new_($I$(19,1));
}} else if (compression == 2) {
this.decompressor=Clazz.new_($I$(19,1));
} else if (compression == 32773) {
if (false) {
System.out.println$S("Using TIFFPackBitsDecompressor");
}this.decompressor=Clazz.new_($I$(20,1));
} else if (compression == 5) {
if (false) {
System.out.println$S("Using TIFFLZWDecompressor");
}var predictorField=this.imageMetadata.getTIFFField$I(317);
var predictor=((predictorField == null ) ? 1 : predictorField.getAsInt$I(0));
this.decompressor=Clazz.new_($I$(21,1).c$$I,[predictor]);
} else if (compression == 7) {
this.decompressor=Clazz.new_($I$(22,1));
} else if (compression == 8 || compression == 32946 ) {
var predictorField=this.imageMetadata.getTIFFField$I(317);
var predictor=((predictorField == null ) ? 1 : predictorField.getAsInt$I(0));
this.decompressor=Clazz.new_($I$(23,1).c$$I,[predictor]);
} else if (compression == 6) {
var JPEGProcField=this.imageMetadata.getTIFFField$I(512);
if (JPEGProcField == null ) {
this.processWarningOccurred$S("JPEGProc field missing; assuming baseline sequential JPEG process.");
} else if (JPEGProcField.getAsInt$I(0) != 1) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Old-style JPEG supported for baseline sequential JPEG process only!"]);
}this.decompressor=Clazz.new_($I$(24,1));
} else {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Unsupported compression type (tag number = " + compression + ")!" ]);
}if (this.photometricInterpretation == 6 && compression != 7  && compression != 6 ) {
var convertYCbCrToRGB=this.theImage.getColorModel$().getColorSpace$().getType$() == 5;
var wrappedDecompressor=Clazz.instanceOf(this.decompressor, "io.scif.media.imageioimpl.plugins.tiff.TIFFNullDecompressor") ? null : this.decompressor;
this.decompressor=Clazz.new_($I$(25,1).c$$io_scif_media_imageio_plugins_tiff_TIFFDecompressor$Z,[wrappedDecompressor, convertYCbCrToRGB]);
}}if (false) {
System.out.println$S("\nDecompressor class = " + this.decompressor.getClass$().getName$() + "\n" );
}if (colorConverter == null ) {
if (this.photometricInterpretation == 8 && this.theImage.getColorModel$().getColorSpace$().getType$() == 5 ) {
colorConverter=Clazz.new_($I$(26,1));
} else if (this.photometricInterpretation == 6 && !(Clazz.instanceOf(this.decompressor, "io.scif.media.imageioimpl.plugins.tiff.TIFFYCbCrDecompressor"))  && compression != 7  && compression != 6 ) {
colorConverter=Clazz.new_($I$(27,1).c$$io_scif_media_imageioimpl_plugins_tiff_TIFFImageMetadata,[this.imageMetadata]);
}}this.decompressor.setReader$javax_imageio_ImageReader(this);
this.decompressor.setMetadata$javax_imageio_metadata_IIOMetadata(this.imageMetadata);
this.decompressor.setImage$java_awt_image_BufferedImage(this.theImage);
this.decompressor.setPhotometricInterpretation$I(this.photometricInterpretation);
this.decompressor.setCompression$I(compression);
this.decompressor.setSamplesPerPixel$I(this.samplesPerPixel);
this.decompressor.setBitsPerSample$IA(this.bitsPerSample);
this.decompressor.setSampleFormat$IA(this.sampleFormat);
this.decompressor.setExtraSamples$IA(this.extraSamples);
this.decompressor.setColorMap$CA(this.colorMap);
this.decompressor.setColorConverter$io_scif_media_imageio_plugins_tiff_TIFFColorConverter(colorConverter);
this.decompressor.setSourceXOffset$I(this.sourceXOffset);
this.decompressor.setSourceYOffset$I(this.sourceYOffset);
this.decompressor.setSubsampleX$I(this.srcXSubsampling);
this.decompressor.setSubsampleY$I(this.srcYSubsampling);
this.decompressor.setDstXOffset$I(this.dstXOffset);
this.decompressor.setDstYOffset$I(this.dstYOffset);
this.decompressor.setSourceBands$IA(this.sourceBands);
this.decompressor.setDestinationBands$IA(this.destinationBands);
var minTileX=$I$(28).XToTileX$I$I$I(srcRegion.x, 0, this.tileOrStripWidth);
var minTileY=$I$(28).YToTileY$I$I$I(srcRegion.y, 0, this.tileOrStripHeight);
var maxTileX=$I$(28).XToTileX$I$I$I(srcRegion.x + srcRegion.width - 1, 0, this.tileOrStripWidth);
var maxTileY=$I$(28).YToTileY$I$I$I(srcRegion.y + srcRegion.height - 1, 0, this.tileOrStripHeight);
var isAbortRequested=false;
if (this.planarConfiguration == 2) {
this.decompressor.setPlanar$Z(true);
var sb=Clazz.array(Integer.TYPE, [1]);
var db=Clazz.array(Integer.TYPE, [1]);
for (var tj=minTileY; tj <= maxTileY; tj++) {
for (var ti=minTileX; ti <= maxTileX; ti++) {
for (var band=0; band < this.numBands; band++) {
sb[0]=this.sourceBands[band];
this.decompressor.setSourceBands$IA(sb);
db[0]=this.destinationBands[band];
this.decompressor.setDestinationBands$IA(db);
if (this.abortRequested$()) {
isAbortRequested=true;
break;
}p$1.decodeTile$I$I$I.apply(this, [ti, tj, band]);
}
if (isAbortRequested) break;
p$1.reportProgress.apply(this, []);
}
if (isAbortRequested) break;
}
} else {
for (var tj=minTileY; tj <= maxTileY; tj++) {
for (var ti=minTileX; ti <= maxTileX; ti++) {
if (this.abortRequested$()) {
isAbortRequested=true;
break;
}p$1.decodeTile$I$I$I.apply(this, [ti, tj, -1]);
p$1.reportProgress.apply(this, []);
}
if (isAbortRequested) break;
}
}if (isAbortRequested) {
this.processReadAborted$();
} else {
this.processImageComplete$();
}return this.theImage;
});

Clazz.newMeth(C$, 'reset$', function () {
C$.superclazz.prototype.reset$.apply(this, []);
this.resetLocal$();
});

Clazz.newMeth(C$, 'resetLocal$', function () {
this.stream=null;
this.gotHeader=false;
this.imageReadParam=this.getDefaultReadParam$();
this.streamMetadata=null;
this.currIndex=-1;
this.imageMetadata=null;
this.imageStartPosition=Clazz.new_($I$(1,1));
this.numImages=-1;
this.imageTypeMap=Clazz.new_($I$(2,1));
this.width=-1;
this.height=-1;
this.numBands=-1;
this.tileOrStripWidth=-1;
this.tileOrStripHeight=-1;
this.planarConfiguration=1;
this.rowsDone=0;
});

Clazz.newMeth(C$, 'forwardWarningMessage$S', function (warning) {
this.processWarningOccurred$S(warning);
});

Clazz.newMeth(C$, 'getDestination$javax_imageio_ImageReadParam$java_util_Iterator$I$I', function (param, imageTypes, width, height) {
if (imageTypes == null  || !imageTypes.hasNext$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["imageTypes null or empty!"]);
}var dest=null;
var imageType=null;
if (param != null ) {
dest=param.getDestination$();
if (dest != null ) {
return dest;
}imageType=param.getDestinationType$();
}if (imageType == null ) {
var o=imageTypes.next$();
if (!(Clazz.instanceOf(o, "javax.imageio.ImageTypeSpecifier"))) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Non-ImageTypeSpecifier retrieved from imageTypes!"]);
}imageType=o;
} else {
var foundIt=false;
while (imageTypes.hasNext$()){
var type=imageTypes.next$();
if (type.equals$O(imageType)) {
foundIt=true;
break;
}}
if (!foundIt) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Destination type from ImageReadParam does not match!"]);
}}var srcRegion=Clazz.new_($I$(14,1).c$$I$I$I$I,[0, 0, 0, 0]);
var destRegion=Clazz.new_($I$(14,1).c$$I$I$I$I,[0, 0, 0, 0]);
javax.imageio.ImageReader.computeRegions$javax_imageio_ImageReadParam$I$I$java_awt_image_BufferedImage$java_awt_Rectangle$java_awt_Rectangle(param, width, height, null, srcRegion, destRegion);
var destWidth=destRegion.x + destRegion.width;
var destHeight=destRegion.y + destRegion.height;
if (destWidth * destHeight > 2147483647) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["width*height > Integer.MAX_VALUE!"]);
}return imageType.createBufferedImage$I$I(destWidth, destHeight);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
