(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.pcx"),p$1={},I$=[[0,'java.nio.ByteOrder','io.scif.media.imageioimpl.plugins.pcx.PCXMetadata','io.scif.media.imageioimpl.common.ImageUtil','java.awt.Rectangle','javax.imageio.ImageTypeSpecifier']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PCXImageWriter", null, 'javax.imageio.ImageWriter', 'io.scif.media.imageioimpl.plugins.pcx.PCXConstants');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.inputRaster=null;
}, 1);

C$.$fields$=[['I',['colorPlanes','bytesPerLine','scaleX','scaleY'],'O',['ios','javax.imageio.stream.ImageOutputStream','sourceRegion','java.awt.Rectangle','+destinationRegion','inputRaster','java.awt.image.Raster']]]

Clazz.newMeth(C$, 'c$$io_scif_media_imageioimpl_plugins_pcx_PCXImageWriterSpi', function (imageWriterSpi) {
;C$.superclazz.c$$javax_imageio_spi_ImageWriterSpi.apply(this,[imageWriterSpi]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setOutput$O', function (output) {
C$.superclazz.prototype.setOutput$O.apply(this, [output]);
if (output != null ) {
if (!(Clazz.instanceOf(output, "javax.imageio.stream.ImageOutputStream"))) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["output not instance of ImageOutputStream"]);
this.ios=output;
this.ios.setByteOrder$java_nio_ByteOrder($I$(1).LITTLE_ENDIAN);
} else this.ios=null;
});

Clazz.newMeth(C$, 'convertImageMetadata$javax_imageio_metadata_IIOMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam', function (inData, imageType, param) {
if (Clazz.instanceOf(inData, "io.scif.media.imageioimpl.plugins.pcx.PCXMetadata")) return inData;
return null;
});

Clazz.newMeth(C$, 'convertStreamMetadata$javax_imageio_metadata_IIOMetadata$javax_imageio_ImageWriteParam', function (inData, param) {
return null;
});

Clazz.newMeth(C$, 'getDefaultImageMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam', function (imageType, param) {
var md=Clazz.new_($I$(2,1));
md.bitsPerPixel=($b$[0] = (imageType.getSampleModel$().getSampleSize$()[0]|0), $b$[0]);
return md;
});

Clazz.newMeth(C$, 'getDefaultStreamMetadata$javax_imageio_ImageWriteParam', function (param) {
return null;
});

Clazz.newMeth(C$, 'write$javax_imageio_metadata_IIOMetadata$javax_imageio_IIOImage$javax_imageio_ImageWriteParam', function (streamMetadata, image, param) {
if (this.ios == null ) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["output stream is null"]);
}if (image == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["image is null"]);
}this.clearAbortRequest$();
this.processImageStarted$I(0);
if (param == null ) param=this.getDefaultWriteParam$();
var writeRaster=image.hasRaster$();
this.sourceRegion=param.getSourceRegion$();
var sampleModel=null;
var colorModel=null;
if (writeRaster) {
this.inputRaster=image.getRaster$();
sampleModel=this.inputRaster.getSampleModel$();
colorModel=$I$(3).createColorModel$java_awt_color_ColorSpace$java_awt_image_SampleModel(null, sampleModel);
if (this.sourceRegion == null ) this.sourceRegion=this.inputRaster.getBounds$();
 else this.sourceRegion=this.sourceRegion.intersection$java_awt_Rectangle(this.inputRaster.getBounds$());
} else {
var input=image.getRenderedImage$();
this.inputRaster=input.getData$();
sampleModel=input.getSampleModel$();
colorModel=input.getColorModel$();
var rect=Clazz.new_($I$(4,1).c$$I$I$I$I,[input.getMinX$(), input.getMinY$(), input.getWidth$(), input.getHeight$()]);
if (this.sourceRegion == null ) this.sourceRegion=rect;
 else this.sourceRegion=this.sourceRegion.intersection$java_awt_Rectangle(rect);
}if (this.sourceRegion.isEmpty$()) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["source region is empty"]);
var imageMetadata=image.getMetadata$();
var pcxImageMetadata=null;
var imageType=Clazz.new_($I$(5,1).c$$java_awt_image_ColorModel$java_awt_image_SampleModel,[colorModel, sampleModel]);
if (imageMetadata != null ) {
pcxImageMetadata=this.convertImageMetadata$javax_imageio_metadata_IIOMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam(imageMetadata, imageType, param);
} else {
pcxImageMetadata=this.getDefaultImageMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam(imageType, param);
}this.scaleX=param.getSourceXSubsampling$();
this.scaleY=param.getSourceYSubsampling$();
var xOffset=param.getSubsamplingXOffset$();
var yOffset=param.getSubsamplingYOffset$();
var dataType=sampleModel.getDataType$();
this.sourceRegion.translate$I$I(xOffset, yOffset);
this.sourceRegion.width-=xOffset;
this.sourceRegion.height-=yOffset;
var minX=(this.sourceRegion.x/this.scaleX|0);
var minY=(this.sourceRegion.y/this.scaleY|0);
var w=((this.sourceRegion.width + this.scaleX - 1)/this.scaleX|0);
var h=((this.sourceRegion.height + this.scaleY - 1)/this.scaleY|0);
xOffset=this.sourceRegion.x % this.scaleX;
yOffset=this.sourceRegion.y % this.scaleY;
this.destinationRegion=Clazz.new_($I$(4,1).c$$I$I$I$I,[minX, minY, w, h]);
var noTransform=this.destinationRegion.equals$O(this.sourceRegion);
var sourceBands=param.getSourceBands$();
var noSubband=true;
var numBands=sampleModel.getNumBands$();
if (sourceBands != null ) {
sampleModel=sampleModel.createSubsetSampleModel$IA(sourceBands);
colorModel=null;
noSubband=false;
numBands=sampleModel.getNumBands$();
} else {
sourceBands=Clazz.array(Integer.TYPE, [numBands]);
for (var i=0; i < numBands; i++) sourceBands[i]=i;

}this.ios.writeByte$I(10);
this.ios.writeByte$I(5);
this.ios.writeByte$I(1);
var bitsPerPixel=sampleModel.getSampleSize$I(0);
this.ios.writeByte$I(bitsPerPixel);
this.ios.writeShort$I(this.destinationRegion.x);
this.ios.writeShort$I(this.destinationRegion.y);
this.ios.writeShort$I(this.destinationRegion.x + this.destinationRegion.width - 1);
this.ios.writeShort$I(this.destinationRegion.y + this.destinationRegion.height - 1);
this.ios.writeShort$I(pcxImageMetadata.hdpi);
this.ios.writeShort$I(pcxImageMetadata.vdpi);
var smallpalette=p$1.createSmallPalette$java_awt_image_ColorModel.apply(this, [colorModel]);
this.ios.write$BA(smallpalette);
this.ios.writeByte$I(0);
this.colorPlanes=sampleModel.getNumBands$();
this.ios.writeByte$I(this.colorPlanes);
this.bytesPerLine=(this.destinationRegion.width * bitsPerPixel/8|0);
this.bytesPerLine+=this.bytesPerLine % 2;
this.ios.writeShort$I(this.bytesPerLine);
if (colorModel.getColorSpace$().getType$() == 6) this.ios.writeShort$I(2);
 else this.ios.writeShort$I(1);
this.ios.writeShort$I(pcxImageMetadata.hsize);
this.ios.writeShort$I(pcxImageMetadata.vsize);
for (var i=0; i < 54; i++) this.ios.writeByte$I(0);

if (this.colorPlanes == 1 && bitsPerPixel == 1 ) {
p$1.write1Bit.apply(this, []);
} else if (this.colorPlanes == 1 && bitsPerPixel == 4 ) {
p$1.write4Bit.apply(this, []);
} else {
p$1.write8Bit.apply(this, []);
}if (this.colorPlanes == 1 && bitsPerPixel == 8  && colorModel.getColorSpace$().getType$() != 6 ) {
this.ios.writeByte$I(12);
this.ios.write$BA(p$1.createLargePalette$java_awt_image_ColorModel.apply(this, [colorModel]));
}if (this.abortRequested$()) {
this.processWriteAborted$();
} else {
this.processImageComplete$();
}});

Clazz.newMeth(C$, 'write4Bit', function () {
var unpacked=Clazz.array(Integer.TYPE, [this.sourceRegion.width]);
var samples=Clazz.array(Integer.TYPE, [this.bytesPerLine]);
for (var line=0; line < this.sourceRegion.height; line+=this.scaleY) {
this.inputRaster.getSamples$I$I$I$I$I$IA(this.sourceRegion.x, line + this.sourceRegion.y, this.sourceRegion.width, 1, 0, unpacked);
var val=0;
var dst=0;
for (var x=0, nibble=0; x < this.sourceRegion.width; x+=this.scaleX) {
val=val | (unpacked[x] & 15);
if (nibble == 1) {
samples[dst++]=val;
nibble=0;
val=0;
} else {
nibble=1;
val=val << 4;
}}
var last=samples[0];
var count=0;
for (var x=0; x < this.bytesPerLine; x+=this.scaleX) {
var sample=samples[x];
if (sample != last || count == 63 ) {
p$1.writeRLE$I$I.apply(this, [last, count]);
count=1;
last=sample;
} else count++;
}
if (count >= 1) {
p$1.writeRLE$I$I.apply(this, [last, count]);
}this.processImageProgress$F(100.0 * line / this.sourceRegion.height);
}
}, p$1);

Clazz.newMeth(C$, 'write1Bit', function () {
var unpacked=Clazz.array(Integer.TYPE, [this.sourceRegion.width]);
var samples=Clazz.array(Integer.TYPE, [this.bytesPerLine]);
for (var line=0; line < this.sourceRegion.height; line+=this.scaleY) {
this.inputRaster.getSamples$I$I$I$I$I$IA(this.sourceRegion.x, line + this.sourceRegion.y, this.sourceRegion.width, 1, 0, unpacked);
var val=0;
var dst=0;
for (var x=0, bit=128; x < this.sourceRegion.width; x+=this.scaleX) {
if (unpacked[x] > 0) val=val | bit;
if (bit == 1) {
samples[dst++]=val;
bit=128;
val=0;
} else {
bit=bit >> 1;
}}
var last=samples[0];
var count=0;
for (var x=0; x < this.bytesPerLine; x+=this.scaleX) {
var sample=samples[x];
if (sample != last || count == 63 ) {
p$1.writeRLE$I$I.apply(this, [last, count]);
count=1;
last=sample;
} else count++;
}
if (count >= 1) {
p$1.writeRLE$I$I.apply(this, [last, count]);
}this.processImageProgress$F(100.0 * line / this.sourceRegion.height);
}
}, p$1);

Clazz.newMeth(C$, 'write8Bit', function () {
var samples=Clazz.array(Integer.TYPE, [this.colorPlanes, this.bytesPerLine]);
for (var line=0; line < this.sourceRegion.height; line+=this.scaleY) {
for (var band=0; band < this.colorPlanes; band++) {
this.inputRaster.getSamples$I$I$I$I$I$IA(this.sourceRegion.x, line + this.sourceRegion.y, this.sourceRegion.width, 1, band, samples[band]);
}
var last=samples[0][0];
var count=0;
for (var band=0; band < this.colorPlanes; band++) {
for (var x=0; x < this.bytesPerLine; x+=this.scaleX) {
var sample=samples[band][x];
if (sample != last || count == 63 ) {
p$1.writeRLE$I$I.apply(this, [last, count]);
count=1;
last=sample;
} else count++;
}
}
if (count >= 1) {
p$1.writeRLE$I$I.apply(this, [last, count]);
}this.processImageProgress$F(100.0 * line / this.sourceRegion.height);
}
}, p$1);

Clazz.newMeth(C$, 'writeRLE$I$I', function (val, count) {
if (count == 1 && (val & 192) != 192 ) {
this.ios.writeByte$I(val);
} else {
this.ios.writeByte$I(192 | count);
this.ios.writeByte$I(val);
}}, p$1);

Clazz.newMeth(C$, 'createSmallPalette$java_awt_image_ColorModel', function (cm) {
var palette=Clazz.array(Byte.TYPE, [48]);
if (!(Clazz.instanceOf(cm, "java.awt.image.IndexColorModel"))) return palette;
var icm=cm;
if (icm.getMapSize$() > 16) return palette;
for (var i=0, offset=0; i < icm.getMapSize$(); i++) {
palette[offset++]=((icm.getRed$I(i)|0)|0);
palette[offset++]=((icm.getGreen$I(i)|0)|0);
palette[offset++]=((icm.getBlue$I(i)|0)|0);
}
return palette;
}, p$1);

Clazz.newMeth(C$, 'createLargePalette$java_awt_image_ColorModel', function (cm) {
var palette=Clazz.array(Byte.TYPE, [768]);
if (!(Clazz.instanceOf(cm, "java.awt.image.IndexColorModel"))) return palette;
var icm=cm;
for (var i=0, offset=0; i < icm.getMapSize$(); i++) {
palette[offset++]=((icm.getRed$I(i)|0)|0);
palette[offset++]=((icm.getGreen$I(i)|0)|0);
palette[offset++]=((icm.getBlue$I(i)|0)|0);
}
return palette;
}, p$1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:19 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
