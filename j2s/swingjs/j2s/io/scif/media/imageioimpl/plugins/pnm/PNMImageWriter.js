(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.pnm"),p$1={},I$=[[0,'java.security.AccessController','sun.security.action.GetPropertyAction','io.scif.media.imageioimpl.plugins.pnm.I18N','io.scif.media.imageio.plugins.pnm.PNMImageWriteParam','io.scif.media.imageioimpl.plugins.pnm.PNMMetadata','java.awt.Rectangle','io.scif.media.imageioimpl.common.ImageUtil','javax.imageio.ImageTypeSpecifier','java.awt.color.ColorSpace']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PNMImageWriter", null, 'javax.imageio.ImageWriter');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
{
if (C$.lineSeparator == null ) {
var ls=$I$(1).doPrivileged$java_security_PrivilegedAction(Clazz.new_($I$(2,1).c$$S,["line.separator"]));
C$.lineSeparator=ls.getBytes$();
}};
}

Clazz.newMeth(C$, '$init$', function () {
this.stream=null;
}, 1);

C$.$fields$=[['I',['variant','maxValue'],'O',['stream','javax.imageio.stream.ImageOutputStream']]
,['O',['lineSeparator','byte[]']]]

Clazz.newMeth(C$, 'c$$javax_imageio_spi_ImageWriterSpi', function (originator) {
;C$.superclazz.c$$javax_imageio_spi_ImageWriterSpi.apply(this,[originator]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setOutput$O', function (output) {
C$.superclazz.prototype.setOutput$O.apply(this, [output]);
if (output != null ) {
if (!(Clazz.instanceOf(output, "javax.imageio.stream.ImageOutputStream"))) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(3).getString$S("PNMImageWriter0")]);
this.stream=output;
} else this.stream=null;
});

Clazz.newMeth(C$, 'getDefaultWriteParam$', function () {
return Clazz.new_($I$(4,1));
});

Clazz.newMeth(C$, 'getDefaultStreamMetadata$javax_imageio_ImageWriteParam', function (param) {
return null;
});

Clazz.newMeth(C$, 'getDefaultImageMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam', function (imageType, param) {
return Clazz.new_($I$(5,1).c$$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam,[imageType, param]);
});

Clazz.newMeth(C$, 'convertStreamMetadata$javax_imageio_metadata_IIOMetadata$javax_imageio_ImageWriteParam', function (inData, param) {
return null;
});

Clazz.newMeth(C$, 'convertImageMetadata$javax_imageio_metadata_IIOMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam', function (inData, imageType, param) {
if (inData == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["inData == null!"]);
}if (imageType == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["imageType == null!"]);
}var outData=null;
if (Clazz.instanceOf(inData, "io.scif.media.imageioimpl.plugins.pnm.PNMMetadata")) {
outData=(inData).clone$();
} else {
try {
outData=Clazz.new_($I$(5,1).c$$javax_imageio_metadata_IIOMetadata,[inData]);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.imageio.metadata.IIOInvalidTreeException")){
outData=Clazz.new_($I$(5,1));
} else {
throw e;
}
}
}outData.initialize$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam(imageType, param);
return outData;
});

Clazz.newMeth(C$, 'canWriteRasters$', function () {
return true;
});

Clazz.newMeth(C$, 'write$javax_imageio_metadata_IIOMetadata$javax_imageio_IIOImage$javax_imageio_ImageWriteParam', function (streamMetadata, image, param) {
this.clearAbortRequest$();
this.processImageStarted$I(0);
if (param == null ) param=this.getDefaultWriteParam$();
var input=null;
var inputRaster=null;
var writeRaster=image.hasRaster$();
var sourceRegion=param.getSourceRegion$();
var sampleModel=null;
var colorModel=null;
if (writeRaster) {
inputRaster=image.getRaster$();
sampleModel=inputRaster.getSampleModel$();
if (sourceRegion == null ) sourceRegion=inputRaster.getBounds$();
 else sourceRegion=sourceRegion.intersection$java_awt_Rectangle(inputRaster.getBounds$());
} else {
input=image.getRenderedImage$();
sampleModel=input.getSampleModel$();
colorModel=input.getColorModel$();
var rect=Clazz.new_($I$(6,1).c$$I$I$I$I,[input.getMinX$(), input.getMinY$(), input.getWidth$(), input.getHeight$()]);
if (sourceRegion == null ) sourceRegion=rect;
 else sourceRegion=sourceRegion.intersection$java_awt_Rectangle(rect);
}if (sourceRegion.isEmpty$()) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,[$I$(3).getString$S("PNMImageWrite1")]);
$I$(7).canEncodeImage$javax_imageio_ImageWriter$java_awt_image_ColorModel$java_awt_image_SampleModel(this, colorModel, sampleModel);
var scaleX=param.getSourceXSubsampling$();
var scaleY=param.getSourceYSubsampling$();
var xOffset=param.getSubsamplingXOffset$();
var yOffset=param.getSubsamplingYOffset$();
sourceRegion.translate$I$I(xOffset, yOffset);
sourceRegion.width-=xOffset;
sourceRegion.height-=yOffset;
var minX=(sourceRegion.x/scaleX|0);
var minY=(sourceRegion.y/scaleY|0);
var w=((sourceRegion.width + scaleX - 1)/scaleX|0);
var h=((sourceRegion.height + scaleY - 1)/scaleY|0);
var destinationRegion=Clazz.new_($I$(6,1).c$$I$I$I$I,[minX, minY, w, h]);
var tileHeight=sampleModel.getHeight$();
var tileWidth=sampleModel.getWidth$();
var sampleSize=sampleModel.getSampleSize$();
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

}var reds=null;
var greens=null;
var blues=null;
var isPBMInverted=false;
if (numBands == 1) {
if (Clazz.instanceOf(colorModel, "java.awt.image.IndexColorModel")) {
var icm=colorModel;
var mapSize=icm.getMapSize$();
if (mapSize < (1 << sampleSize[0])) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,[$I$(3).getString$S("PNMImageWrite2")]);
if (sampleSize[0] == 1) {
this.variant=52;
isPBMInverted=icm.getRed$I(1) > icm.getRed$I(0);
} else {
this.variant=54;
reds=Clazz.array(Byte.TYPE, [mapSize]);
greens=Clazz.array(Byte.TYPE, [mapSize]);
blues=Clazz.array(Byte.TYPE, [mapSize]);
icm.getReds$BA(reds);
icm.getGreens$BA(greens);
icm.getBlues$BA(blues);
}} else if (sampleSize[0] == 1) {
this.variant=52;
} else if (sampleSize[0] <= 8) {
this.variant=53;
} else {
this.variant=50;
}} else if (numBands == 3) {
if (sampleSize[0] <= 8 && sampleSize[1] <= 8  && sampleSize[2] <= 8 ) {
this.variant=54;
} else {
this.variant=51;
}} else {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,[$I$(3).getString$S("PNMImageWrite3")]);
}var inputMetadata=image.getMetadata$();
var imageType;
if (colorModel != null ) {
imageType=Clazz.new_($I$(8,1).c$$java_awt_image_ColorModel$java_awt_image_SampleModel,[colorModel, sampleModel]);
} else {
var dataType=sampleModel.getDataType$();
switch (numBands) {
case 1:
imageType=$I$(8).createGrayscale$I$I$Z(sampleSize[0], dataType, false);
break;
case 3:
var cs=$I$(9).getInstance$I(1000);
imageType=$I$(8).createInterleaved$java_awt_color_ColorSpace$IA$I$Z$Z(cs, Clazz.array(Integer.TYPE, -1, [0, 1, 2]), dataType, false, false);
break;
default:
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Cannot encode image with " + numBands + " bands!" ]);
}
}var metadata;
if (inputMetadata != null ) {
metadata=this.convertImageMetadata$javax_imageio_metadata_IIOMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam(inputMetadata, imageType, param);
} else {
metadata=this.getDefaultImageMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam(imageType, param);
}var isRawPNM;
if (Clazz.instanceOf(param, "io.scif.media.imageio.plugins.pnm.PNMImageWriteParam")) {
isRawPNM=(param).getRaw$();
} else {
isRawPNM=metadata.isRaw$();
}this.maxValue=metadata.getMaxValue$();
for (var i=0; i < sampleSize.length; i++) {
var v=(1 << sampleSize[i]) - 1;
if (v > this.maxValue) {
this.maxValue=v;
}}
if (isRawPNM) {
var maxBitDepth=metadata.getMaxBitDepth$();
if (!p$1.isRaw$I.apply(this, [this.variant]) && maxBitDepth <= 8 ) {
this.variant+=3;
} else if (p$1.isRaw$I.apply(this, [this.variant]) && maxBitDepth > 8 ) {
this.variant-=3;
}} else if (p$1.isRaw$I.apply(this, [this.variant])) {
this.variant-=3;
}this.stream.writeByte$I("P".$c());
this.stream.writeByte$I(this.variant);
this.stream.write$BA(C$.lineSeparator);
this.stream.write$BA("# written by io.scif.media.imageioimpl.PNMImageWriter".getBytes$());
var comments=metadata.getComments$();
if (comments != null ) {
while (comments.hasNext$()){
this.stream.write$BA(C$.lineSeparator);
var comment="# " + comments.next$();
this.stream.write$BA(comment.getBytes$());
}
}this.stream.write$BA(C$.lineSeparator);
p$1.writeInteger$javax_imageio_stream_ImageOutputStream$I.apply(this, [this.stream, w]);
this.stream.write$I(32);
p$1.writeInteger$javax_imageio_stream_ImageOutputStream$I.apply(this, [this.stream, h]);
if ((this.variant != 52) && (this.variant != 49) ) {
this.stream.write$BA(C$.lineSeparator);
p$1.writeInteger$javax_imageio_stream_ImageOutputStream$I.apply(this, [this.stream, this.maxValue]);
}if (this.variant == 52 || this.variant == 53  || this.variant == 54 ) {
this.stream.write$I("\n".$c());
}var writeOptimal=false;
if (this.variant == 52 && sampleModel.getTransferType$() == 0  && Clazz.instanceOf(sampleModel, "java.awt.image.MultiPixelPackedSampleModel") ) {
var mppsm=sampleModel;
var originX=0;
if (writeRaster) originX=inputRaster.getMinX$();
 else originX=input.getMinX$();
if (mppsm.getBitOffset$I((sourceRegion.x - originX) % tileWidth) == 0 && mppsm.getPixelBitStride$() == 1  && scaleX == 1 ) writeOptimal=true;
} else if ((this.variant == 53 || this.variant == 54 ) && Clazz.instanceOf(sampleModel, "java.awt.image.ComponentSampleModel") && !(Clazz.instanceOf(colorModel, "java.awt.image.IndexColorModel"))  ) {
var csm=sampleModel;
if (csm.getPixelStride$() == numBands && scaleX == 1 ) {
writeOptimal=true;
if (this.variant == 54) {
var bandOffsets=csm.getBandOffsets$();
for (var b=0; b < numBands; b++) {
if (bandOffsets[b] != b) {
writeOptimal=false;
break;
}}
}}}if (writeOptimal) {
var bytesPerRow=this.variant == 52 ? ((w + 7)/8|0) : w * sampleModel.getNumBands$();
var bdata=null;
var invertedData=Clazz.array(Byte.TYPE, [bytesPerRow]);
for (var j=0; j < sourceRegion.height; j++) {
if (this.abortRequested$()) break;
var lineRaster=null;
if (writeRaster) {
lineRaster=inputRaster.createChild$I$I$I$I$I$I$IA(sourceRegion.x, j, sourceRegion.width, 1, 0, 0, null);
} else {
lineRaster=input.getData$java_awt_Rectangle(Clazz.new_($I$(6,1).c$$I$I$I$I,[sourceRegion.x, sourceRegion.y + j, w, 1]));
lineRaster=lineRaster.createTranslatedChild$I$I(0, 0);
}bdata=(lineRaster.getDataBuffer$()).getData$();
sampleModel=lineRaster.getSampleModel$();
var offset=0;
if (Clazz.instanceOf(sampleModel, "java.awt.image.ComponentSampleModel")) {
offset=(sampleModel).getOffset$I$I(lineRaster.getMinX$() - lineRaster.getSampleModelTranslateX$(), lineRaster.getMinY$() - lineRaster.getSampleModelTranslateY$());
} else if (Clazz.instanceOf(sampleModel, "java.awt.image.MultiPixelPackedSampleModel")) {
offset=(sampleModel).getOffset$I$I(lineRaster.getMinX$() - lineRaster.getSampleModelTranslateX$(), lineRaster.getMinX$() - lineRaster.getSampleModelTranslateY$());
}if (isPBMInverted) {
for (var k=offset, m=0; m < bytesPerRow; k++, m++) invertedData[m]=((~bdata[k]|0)|0);

bdata=invertedData;
offset=0;
}this.stream.write$BA$I$I(bdata, offset, bytesPerRow);
this.processImageProgress$F(100.0 * j / sourceRegion.height);
}
this.stream.flush$();
if (this.abortRequested$()) this.processWriteAborted$();
 else this.processImageComplete$();
return;
}var size=sourceRegion.width * numBands;
var pixels=Clazz.array(Integer.TYPE, [size]);
var bpixels=reds == null  ? Clazz.array(Byte.TYPE, [w * numBands]) : Clazz.array(Byte.TYPE, [w * 3]);
var count=0;
var lastRow=sourceRegion.y + sourceRegion.height;
for (var row=sourceRegion.y; row < lastRow; row+=scaleY) {
if (this.abortRequested$()) break;
var src=null;
if (writeRaster) src=inputRaster.createChild$I$I$I$I$I$I$IA(sourceRegion.x, row, sourceRegion.width, 1, sourceRegion.x, row, sourceBands);
 else src=input.getData$java_awt_Rectangle(Clazz.new_($I$(6,1).c$$I$I$I$I,[sourceRegion.x, row, sourceRegion.width, 1]));
src.getPixels$I$I$I$I$IA(sourceRegion.x, row, sourceRegion.width, 1, pixels);
if (isPBMInverted) for (var i=0; i < size; i+=scaleX) bpixels[i]=(bpixels[i]^(1)|0);

switch (this.variant) {
case 49:
case 50:
for (var i=0; i < size; i+=scaleX) {
if ((count++ % 16) == 0) this.stream.write$BA(C$.lineSeparator);
 else this.stream.write$I(32);
p$1.writeInteger$javax_imageio_stream_ImageOutputStream$I.apply(this, [this.stream, pixels[i]]);
}
this.stream.write$BA(C$.lineSeparator);
break;
case 51:
if (reds == null ) {
var bandOffset=(sampleModel).getBandOffsets$();
for (var i=0; i < size; i+=scaleX * numBands) {
for (var j=0; j < numBands; j++) {
if ((count++ % 16) == 0) this.stream.write$BA(C$.lineSeparator);
 else this.stream.write$I(32);
p$1.writeInteger$javax_imageio_stream_ImageOutputStream$I.apply(this, [this.stream, pixels[i + j]]);
}
}
} else {
for (var i=0; i < size; i+=scaleX) {
if ((count++ % 5) == 0) this.stream.write$BA(C$.lineSeparator);
 else this.stream.write$I(32);
p$1.writeInteger$javax_imageio_stream_ImageOutputStream$I.apply(this, [this.stream, (reds[pixels[i]] & 255)]);
this.stream.write$I(32);
p$1.writeInteger$javax_imageio_stream_ImageOutputStream$I.apply(this, [this.stream, (greens[pixels[i]] & 255)]);
this.stream.write$I(32);
p$1.writeInteger$javax_imageio_stream_ImageOutputStream$I.apply(this, [this.stream, (blues[pixels[i]] & 255)]);
}
}this.stream.write$BA(C$.lineSeparator);
break;
case 52:
var kdst=0;
var ksrc=0;
var b=0;
var pos=7;
for (var i=0; i < size; i+=scaleX) {
b|=pixels[i] << pos;
pos--;
if (pos == -1) {
bpixels[kdst++]=((b|0)|0);
b=0;
pos=7;
}}
if (pos != 7) bpixels[kdst++]=((b|0)|0);
this.stream.write$BA$I$I(bpixels, 0, kdst);
break;
case 53:
for (var i=0, j=0; i < size; i+=scaleX) {
bpixels[j++]=(((pixels[i])|0)|0);
}
this.stream.write$BA$I$I(bpixels, 0, w);
break;
case 54:
if (reds == null ) {
for (var i=0, k=0; i < size; i+=scaleX * numBands) {
for (var j=0; j < numBands; j++) bpixels[k++]=(((pixels[i + j] & 255)|0)|0);

}
} else {
for (var i=0, j=0; i < size; i+=scaleX) {
bpixels[j++]=(reds[pixels[i]]|0);
bpixels[j++]=(greens[pixels[i]]|0);
bpixels[j++]=(blues[pixels[i]]|0);
}
}this.stream.write$BA$I$I(bpixels, 0, bpixels.length);
break;
}
this.processImageProgress$F(100.0 * (row - sourceRegion.y) / sourceRegion.height);
}
this.stream.flush$();
if (this.abortRequested$()) this.processWriteAborted$();
 else this.processImageComplete$();
});

Clazz.newMeth(C$, 'reset$', function () {
C$.superclazz.prototype.reset$.apply(this, []);
this.stream=null;
});

Clazz.newMeth(C$, 'writeInteger$javax_imageio_stream_ImageOutputStream$I', function (output, i) {
output.write$BA(Integer.toString$I(i).getBytes$());
}, p$1);

Clazz.newMeth(C$, 'writeByte$javax_imageio_stream_ImageOutputStream$B', function (output, b) {
output.write$BA(Byte.toString$B(($b$[0] = b, $b$[0])).getBytes$());
}, p$1);

Clazz.newMeth(C$, 'isRaw$I', function (v) {
return (v >= 52);
}, p$1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:19 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
