(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.pcx"),p$1={},I$=[[0,'java.nio.ByteOrder','java.util.Collections','javax.imageio.ImageTypeSpecifier','java.awt.Rectangle','java.awt.image.Raster','java.awt.Point','java.awt.image.BufferedImage','io.scif.media.imageioimpl.plugins.pcx.PCXMetadata','java.awt.color.ColorSpace','java.awt.image.ComponentColorModel','java.awt.image.ComponentSampleModel','java.awt.image.IndexColorModel']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PCXImageReader", null, 'javax.imageio.ImageReader', 'io.scif.media.imageioimpl.plugins.pcx.PCXConstants');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.gotHeader=false;
this.smallPalette=Clazz.array(Byte.TYPE, [48]);
this.largePalette=Clazz.array(Byte.TYPE, [768]);
this.noTransform=true;
this.seleBand=false;
}, 1);

C$.$fields$=[['Z',['gotHeader','noTransform','seleBand'],'B',['manufacturer','encoding','colorPlanes'],'I',['width','height','scaleX','scaleY'],'H',['xmax','ymax','bytesPerLine','paletteType'],'O',['iis','javax.imageio.stream.ImageInputStream','smallPalette','byte[]','+largePalette','metadata','io.scif.media.imageioimpl.plugins.pcx.PCXMetadata','sampleModel','java.awt.image.SampleModel','+originalSampleModel','colorModel','java.awt.image.ColorModel','+originalColorModel','destinationRegion','java.awt.Rectangle','+sourceRegion','bi','java.awt.image.BufferedImage','sourceBands','int[]','+destBands']]]

Clazz.newMeth(C$, 'c$$io_scif_media_imageioimpl_plugins_pcx_PCXImageReaderSpi', function (imageReaderSpi) {
;C$.superclazz.c$$javax_imageio_spi_ImageReaderSpi.apply(this,[imageReaderSpi]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setInput$O$Z$Z', function (input, seekForwardOnly, ignoreMetadata) {
C$.superclazz.prototype.setInput$O$Z$Z.apply(this, [input, seekForwardOnly, ignoreMetadata]);
this.iis=input;
if (this.iis != null ) this.iis.setByteOrder$java_nio_ByteOrder($I$(1).LITTLE_ENDIAN);
this.gotHeader=false;
});

Clazz.newMeth(C$, 'getHeight$I', function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
p$1.readHeader.apply(this, []);
return this.height;
});

Clazz.newMeth(C$, 'getImageMetadata$I', function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
p$1.readHeader.apply(this, []);
return this.metadata;
});

Clazz.newMeth(C$, 'getImageTypes$I', function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
p$1.readHeader.apply(this, []);
return $I$(2).singletonList$TT(Clazz.new_($I$(3,1).c$$java_awt_image_ColorModel$java_awt_image_SampleModel,[this.originalColorModel, this.originalSampleModel])).iterator$();
});

Clazz.newMeth(C$, 'getNumImages$Z', function (allowSearch) {
if (this.iis == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["input is null"]);
}if (this.seekForwardOnly && allowSearch ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["cannot search with forward only input"]);
}return 1;
});

Clazz.newMeth(C$, 'getStreamMetadata$', function () {
return null;
});

Clazz.newMeth(C$, 'getWidth$I', function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
p$1.readHeader.apply(this, []);
return this.width;
});

Clazz.newMeth(C$, 'read$I$javax_imageio_ImageReadParam', function (imageIndex, param) {
p$1.checkIndex$I.apply(this, [imageIndex]);
p$1.readHeader.apply(this, []);
if (this.iis == null ) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["input is null"]);
var img;
this.clearAbortRequest$();
this.processImageStarted$I(imageIndex);
if (param == null ) param=this.getDefaultReadParam$();
this.sourceRegion=Clazz.new_($I$(4,1).c$$I$I$I$I,[0, 0, 0, 0]);
this.destinationRegion=Clazz.new_($I$(4,1).c$$I$I$I$I,[0, 0, 0, 0]);
javax.imageio.ImageReader.computeRegions$javax_imageio_ImageReadParam$I$I$java_awt_image_BufferedImage$java_awt_Rectangle$java_awt_Rectangle(param, this.width, this.height, param.getDestination$(), this.sourceRegion, this.destinationRegion);
this.scaleX=param.getSourceXSubsampling$();
this.scaleY=param.getSourceYSubsampling$();
this.sourceBands=param.getSourceBands$();
this.destBands=param.getDestinationBands$();
this.seleBand=(this.sourceBands != null ) && (this.destBands != null ) ;
this.noTransform=this.destinationRegion.equals$O(Clazz.new_($I$(4,1).c$$I$I$I$I,[0, 0, this.width, this.height])) || this.seleBand ;
if (!this.seleBand) {
this.sourceBands=Clazz.array(Integer.TYPE, [this.colorPlanes]);
this.destBands=Clazz.array(Integer.TYPE, [this.colorPlanes]);
for (var i=0; i < this.colorPlanes; i++) this.destBands[i]=this.sourceBands[i]=i;

}this.bi=param.getDestination$();
var raster=null;
if (this.bi == null ) {
if (this.sampleModel != null  && this.colorModel != null  ) {
this.sampleModel=this.sampleModel.createCompatibleSampleModel$I$I(this.destinationRegion.width + this.destinationRegion.x, this.destinationRegion.height + this.destinationRegion.y);
if (this.seleBand) this.sampleModel=this.sampleModel.createSubsetSampleModel$IA(this.sourceBands);
raster=$I$(5).createWritableRaster$java_awt_image_SampleModel$java_awt_Point(this.sampleModel, Clazz.new_($I$(6,1).c$$I$I,[0, 0]));
this.bi=Clazz.new_($I$(7,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[this.colorModel, raster, false, null]);
}} else {
raster=this.bi.getWritableTile$I$I(0, 0);
this.sampleModel=this.bi.getSampleModel$();
this.colorModel=this.bi.getColorModel$();
this.noTransform&=this.destinationRegion.equals$O(raster.getBounds$());
}var bdata=null;
if (this.sampleModel.getDataType$() == 0) bdata=(raster.getDataBuffer$()).getData$();
p$1.readImage$BA.apply(this, [bdata]);
if (this.abortRequested$()) this.processReadAborted$();
 else this.processImageComplete$();
return this.bi;
});

Clazz.newMeth(C$, 'readImage$BA', function (data) {
var scanline=Clazz.array(Byte.TYPE, [this.bytesPerLine * this.colorPlanes]);
if (this.noTransform) {
try {
var offset=0;
var nbytes=((this.width * this.metadata.bitsPerPixel + 8 - this.metadata.bitsPerPixel)/8|0);
for (var line=0; line < this.height; line++) {
p$1.readScanLine$BA.apply(this, [scanline]);
for (var band=0; band < this.colorPlanes; band++) {
System.arraycopy$O$I$O$I$I(scanline, this.bytesPerLine * band, data, offset, nbytes);
offset+=nbytes;
}
this.processImageProgress$F(100.0 * line / this.height);
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.EOFException")){
} else {
throw e;
}
}
} else {
if (this.metadata.bitsPerPixel == 1) p$1.read1Bit$BA.apply(this, [data]);
 else if (this.metadata.bitsPerPixel == 4) p$1.read4Bit$BA.apply(this, [data]);
 else p$1.read8Bit$BA.apply(this, [data]);
}}, p$1);

Clazz.newMeth(C$, 'read1Bit$BA', function (data) {
var scanline=Clazz.array(Byte.TYPE, [this.bytesPerLine]);
try {
for (var line=0; line < this.sourceRegion.y; line++) {
p$1.readScanLine$BA.apply(this, [scanline]);
}
var lineStride=(this.sampleModel).getScanlineStride$();
var srcOff=Clazz.array(Integer.TYPE, [this.destinationRegion.width]);
var destOff=Clazz.array(Integer.TYPE, [this.destinationRegion.width]);
var srcPos=Clazz.array(Integer.TYPE, [this.destinationRegion.width]);
var destPos=Clazz.array(Integer.TYPE, [this.destinationRegion.width]);
for (var i=this.destinationRegion.x, x=this.sourceRegion.x, j=0; i < this.destinationRegion.x + this.destinationRegion.width; i++, j++, x+=this.scaleX) {
srcPos[j]=x >> 3;
srcOff[j]=7 - (x & 7);
destPos[j]=i >> 3;
destOff[j]=7 - (i & 7);
}
var k=this.destinationRegion.y * lineStride;
for (var line=0; line < this.sourceRegion.height; line++) {
p$1.readScanLine$BA.apply(this, [scanline]);
if (line % this.scaleY == 0) {
for (var i=0; i < this.destinationRegion.width; i++) {
var v=(scanline[srcPos[i]] >> srcOff[i]) & 1;
data[$k$=k + destPos[i]]=(data[$k$]|(v << destOff[i])|0);
}
k+=lineStride;
}this.processImageProgress$F(100.0 * line / this.sourceRegion.height);
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.EOFException")){
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'read4Bit$BA', function (data) {
var scanline=Clazz.array(Byte.TYPE, [this.bytesPerLine]);
try {
var lineStride=(this.sampleModel).getScanlineStride$();
var srcOff=Clazz.array(Integer.TYPE, [this.destinationRegion.width]);
var destOff=Clazz.array(Integer.TYPE, [this.destinationRegion.width]);
var srcPos=Clazz.array(Integer.TYPE, [this.destinationRegion.width]);
var destPos=Clazz.array(Integer.TYPE, [this.destinationRegion.width]);
for (var i=this.destinationRegion.x, x=this.sourceRegion.x, j=0; i < this.destinationRegion.x + this.destinationRegion.width; i++, j++, x+=this.scaleX) {
srcPos[j]=x >> 1;
srcOff[j]=(1 - (x & 1)) << 2;
destPos[j]=i >> 1;
destOff[j]=(1 - (i & 1)) << 2;
}
var k=this.destinationRegion.y * lineStride;
for (var line=0; line < this.sourceRegion.height; line++) {
p$1.readScanLine$BA.apply(this, [scanline]);
if (this.abortRequested$()) break;
if (line % this.scaleY == 0) {
for (var i=0; i < this.destinationRegion.width; i++) {
var v=(scanline[srcPos[i]] >> srcOff[i]) & 15;
data[$k$=k + destPos[i]]=(data[$k$]|(v << destOff[i])|0);
}
k+=lineStride;
}this.processImageProgress$F(100.0 * line / this.sourceRegion.height);
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.EOFException")){
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'read8Bit$BA', function (data) {
var scanline=Clazz.array(Byte.TYPE, [this.colorPlanes * this.bytesPerLine]);
try {
for (var line=0; line < this.sourceRegion.y; line++) {
p$1.readScanLine$BA.apply(this, [scanline]);
}
var dstOffset=this.destinationRegion.y * (this.destinationRegion.x + this.destinationRegion.width) * this.colorPlanes ;
for (var line=0; line < this.sourceRegion.height; line++) {
p$1.readScanLine$BA.apply(this, [scanline]);
if (line % this.scaleY == 0) {
var srcOffset=this.sourceRegion.x;
for (var band=0; band < this.colorPlanes; band++) {
dstOffset+=this.destinationRegion.x;
for (var x=0; x < this.destinationRegion.width; x+=this.scaleX) {
data[dstOffset++]=(scanline[srcOffset + x]|0);
}
srcOffset+=this.bytesPerLine;
}
}this.processImageProgress$F(100.0 * line / this.sourceRegion.height);
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.EOFException")){
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'readScanLine$BA', function (buffer) {
var max=this.bytesPerLine * this.colorPlanes;
for (var j=0; j < max; ) {
var val=this.iis.readUnsignedByte$();
if ((val & 192) == 192) {
var count=val & ~192;
val=this.iis.readUnsignedByte$();
for (var k=0; k < count && j < max ; k++) {
buffer[j++]=(((val & 255)|0)|0);
}
} else {
buffer[j++]=(((val & 255)|0)|0);
}}
}, p$1);

Clazz.newMeth(C$, 'checkIndex$I', function (imageIndex) {
if (imageIndex != 0) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,["only one image exists in the stream"]);
}}, p$1);

Clazz.newMeth(C$, 'readHeader', function () {
if (this.gotHeader) {
this.iis.seek$J(128);
return;
}this.metadata=Clazz.new_($I$(8,1));
this.manufacturer=($b$[0] = this.iis.readByte$(), $b$[0]);
if (this.manufacturer != 10) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["image is not a PCX file"]);
this.metadata.version=this.iis.readByte$();
this.encoding=($b$[0] = this.iis.readByte$(), $b$[0]);
if (this.encoding != 1) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["image is not a PCX file, invalid encoding " + this.encoding]);
this.metadata.bitsPerPixel=($b$[0] = this.iis.readByte$(), $b$[0]);
this.metadata.xmin=this.iis.readShort$();
this.metadata.ymin=this.iis.readShort$();
this.xmax=this.iis.readShort$();
this.ymax=this.iis.readShort$();
this.metadata.hdpi=this.iis.readShort$();
this.metadata.vdpi=this.iis.readShort$();
this.iis.readFully$BA(this.smallPalette);
this.iis.readByte$();
this.colorPlanes=($b$[0] = this.iis.readByte$(), $b$[0]);
this.bytesPerLine=this.iis.readShort$();
this.paletteType=this.iis.readShort$();
this.metadata.hsize=this.iis.readShort$();
this.metadata.vsize=this.iis.readShort$();
this.iis.skipBytes$I(54);
this.width=this.xmax - this.metadata.xmin + 1;
this.height=this.ymax - this.metadata.ymin + 1;
if (this.colorPlanes == 1) {
if (this.paletteType == 2) {
var cs=$I$(9).getInstance$I(1003);
var nBits=Clazz.array(Integer.TYPE, -1, [8]);
this.colorModel=Clazz.new_($I$(10,1).c$$java_awt_color_ColorSpace$IA$Z$Z$I$I,[cs, nBits, false, false, 1, 0]);
this.sampleModel=Clazz.new_($I$(11,1).c$$I$I$I$I$I$IA,[0, this.width, this.height, 1, this.width, Clazz.array(Integer.TYPE, -1, [0])]);
} else {
if (this.metadata.bitsPerPixel == 8) {
this.iis.mark$();
if (this.iis.length$() == -1) {
while (this.iis.read$() != -1);
this.iis.seek$J(this.iis.getStreamPosition$() - 768 - 1);
} else {
this.iis.seek$J(this.iis.length$() - 768 - 1);
}var palletteMagic=this.iis.read$();
if (palletteMagic != 12) this.processWarningOccurred$S("Expected palette magic number 12; instead read " + palletteMagic + " from this image." );
this.iis.readFully$BA(this.largePalette);
this.iis.reset$();
this.colorModel=Clazz.new_($I$(12,1).c$$I$I$BA$I$Z,[this.metadata.bitsPerPixel, 256, this.largePalette, 0, false]);
this.sampleModel=this.colorModel.createCompatibleSampleModel$I$I(this.width, this.height);
} else {
var msize=this.metadata.bitsPerPixel == 1 ? 2 : 16;
this.colorModel=Clazz.new_($I$(12,1).c$$I$I$BA$I$Z,[this.metadata.bitsPerPixel, msize, this.smallPalette, 0, false]);
this.sampleModel=this.colorModel.createCompatibleSampleModel$I$I(this.width, this.height);
}}} else {
var cs=$I$(9).getInstance$I(1000);
var nBits=Clazz.array(Integer.TYPE, -1, [8, 8, 8]);
this.colorModel=Clazz.new_($I$(10,1).c$$java_awt_color_ColorSpace$IA$Z$Z$I$I,[cs, nBits, false, false, 1, 0]);
this.sampleModel=Clazz.new_($I$(11,1).c$$I$I$I$I$I$IA,[0, this.width, this.height, 1, this.width * this.colorPlanes, Clazz.array(Integer.TYPE, -1, [0, this.width, this.width * 2])]);
}this.originalSampleModel=this.sampleModel;
this.originalColorModel=this.colorModel;
this.gotHeader=true;
}, p$1);
var $k$;
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:19 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
