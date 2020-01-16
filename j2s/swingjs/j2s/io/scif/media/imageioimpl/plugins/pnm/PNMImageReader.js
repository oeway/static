(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.pnm"),p$1={},I$=[[0,'java.security.AccessController','sun.security.action.GetPropertyAction','io.scif.media.imageioimpl.plugins.pnm.I18N','io.scif.media.imageioimpl.plugins.pnm.PNMMetadata','java.util.ArrayList','java.awt.image.MultiPixelPackedSampleModel','java.awt.image.IndexColorModel','java.awt.image.PixelInterleavedSampleModel','io.scif.media.imageioimpl.common.ImageUtil','javax.imageio.ImageTypeSpecifier','javax.imageio.ImageReadParam','java.awt.Rectangle','java.awt.image.Raster','java.awt.Point','java.awt.image.BufferedImage','java.util.StringTokenizer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PNMImageReader", null, 'javax.imageio.ImageReader');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
{
if (C$.lineSeparator == null ) {
var ls=$I$(1).doPrivileged$java_security_PrivilegedAction(Clazz.new_($I$(2,1).c$$S,["line.separator"]));
C$.lineSeparator=ls.getBytes$();
}};
}

Clazz.newMeth(C$, '$init$', function () {
this.iis=null;
this.gotHeader=false;
}, 1);

C$.$fields$=[['Z',['gotHeader'],'I',['variant','maxValue','width','height'],'L',['imageDataOffset'],'S',['aLine'],'O',['iis','javax.imageio.stream.ImageInputStream','token','java.util.StringTokenizer','metadata','io.scif.media.imageioimpl.plugins.pnm.PNMMetadata']]
,['O',['lineSeparator','byte[]']]]

Clazz.newMeth(C$, 'c$$javax_imageio_spi_ImageReaderSpi', function (originator) {
;C$.superclazz.c$$javax_imageio_spi_ImageReaderSpi.apply(this,[originator]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setInput$O$Z$Z', function (input, seekForwardOnly, ignoreMetadata) {
C$.superclazz.prototype.setInput$O$Z$Z.apply(this, [input, seekForwardOnly, ignoreMetadata]);
this.iis=input;
});

Clazz.newMeth(C$, 'getNumImages$Z', function (allowSearch) {
return 1;
});

Clazz.newMeth(C$, 'getWidth$I', function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
this.readHeader$();
return this.width;
});

Clazz.newMeth(C$, 'getHeight$I', function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
this.readHeader$();
return this.height;
});

Clazz.newMeth(C$, 'getVariant$', function () {
return this.variant;
});

Clazz.newMeth(C$, 'getMaxValue$', function () {
return this.maxValue;
});

Clazz.newMeth(C$, 'checkIndex$I', function (imageIndex) {
if (imageIndex != 0) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[$I$(3).getString$S("PNMImageReader1")]);
}}, p$1);

Clazz.newMeth(C$, 'readHeader$', function () {
if (this.gotHeader) {
this.iis.seek$J(this.imageDataOffset);
return;
}if (this.iis != null ) {
if (this.iis.readByte$() != 80 ) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,[$I$(3).getString$S("PNMImageReader0")]);
}this.variant=this.iis.readByte$();
if ((this.variant < 49) || (this.variant > 54) ) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,[$I$(3).getString$S("PNMImageReader0")]);
}this.metadata=Clazz.new_($I$(4,1));
this.metadata.setVariant$I(this.variant);
this.iis.readLine$();
p$1.readComments$javax_imageio_stream_ImageInputStream$io_scif_media_imageioimpl_plugins_pnm_PNMMetadata.apply(this, [this.iis, this.metadata]);
this.width=p$1.readInteger$javax_imageio_stream_ImageInputStream.apply(this, [this.iis]);
this.height=p$1.readInteger$javax_imageio_stream_ImageInputStream.apply(this, [this.iis]);
if (this.variant == 49 || this.variant == 52 ) {
this.maxValue=1;
} else {
this.maxValue=p$1.readInteger$javax_imageio_stream_ImageInputStream.apply(this, [this.iis]);
}this.metadata.setWidth$I(this.width);
this.metadata.setHeight$I(this.height);
this.metadata.setMaxBitDepth$I(this.maxValue);
this.gotHeader=true;
this.imageDataOffset=this.iis.getStreamPosition$();
}});

Clazz.newMeth(C$, 'getImageTypes$I', function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
this.readHeader$();
var tmp=(this.variant - 49) % 3;
var list=Clazz.new_($I$(5,1).c$$I,[1]);
var dataType=3;
if (this.maxValue < 256) {
dataType=0;
} else if (this.maxValue < 65536) {
dataType=1;
}var sampleModel=null;
var colorModel=null;
if ((this.variant == 49) || (this.variant == 52) ) {
sampleModel=Clazz.new_($I$(6,1).c$$I$I$I$I,[0, this.width, this.height, 1]);
var color=Clazz.array(Byte.TYPE, -1, [-1, 0]);
colorModel=Clazz.new_($I$(7,1).c$$I$I$BA$BA$BA,[1, 2, color, color, color]);
} else {
sampleModel=Clazz.new_($I$(8,1).c$$I$I$I$I$I$IA,[dataType, this.width, this.height, tmp == 1 ? 1 : 3, this.width * (tmp == 1 ? 1 : 3), tmp == 1 ? Clazz.array(Integer.TYPE, -1, [0]) : Clazz.array(Integer.TYPE, -1, [0, 1, 2])]);
colorModel=$I$(9).createColorModel$java_awt_color_ColorSpace$java_awt_image_SampleModel(null, sampleModel);
}list.add$TE(Clazz.new_($I$(10,1).c$$java_awt_image_ColorModel$java_awt_image_SampleModel,[colorModel, sampleModel]));
return list.iterator$();
});

Clazz.newMeth(C$, 'getDefaultReadParam$', function () {
return Clazz.new_($I$(11,1));
});

Clazz.newMeth(C$, 'getImageMetadata$I', function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
this.readHeader$();
return this.metadata;
});

Clazz.newMeth(C$, 'getStreamMetadata$', function () {
return null;
});

Clazz.newMeth(C$, 'isRandomAccessEasy$I', function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
return true;
});

Clazz.newMeth(C$, 'read$I$javax_imageio_ImageReadParam', function (imageIndex, param) {
p$1.checkIndex$I.apply(this, [imageIndex]);
this.clearAbortRequest$();
this.processImageStarted$I(imageIndex);
if (param == null ) param=this.getDefaultReadParam$();
this.readHeader$();
var sourceRegion=Clazz.new_($I$(12,1).c$$I$I$I$I,[0, 0, 0, 0]);
var destinationRegion=Clazz.new_($I$(12,1).c$$I$I$I$I,[0, 0, 0, 0]);
javax.imageio.ImageReader.computeRegions$javax_imageio_ImageReadParam$I$I$java_awt_image_BufferedImage$java_awt_Rectangle$java_awt_Rectangle(param, this.width, this.height, param.getDestination$(), sourceRegion, destinationRegion);
var scaleX=param.getSourceXSubsampling$();
var scaleY=param.getSourceYSubsampling$();
var sourceBands=param.getSourceBands$();
var destBands=param.getDestinationBands$();
var seleBand=(sourceBands != null ) && (destBands != null ) ;
var noTransform=destinationRegion.equals$O(Clazz.new_($I$(12,1).c$$I$I$I$I,[0, 0, this.width, this.height])) || seleBand ;
if (p$1.isRaw$I.apply(this, [this.variant]) && this.maxValue >= 256 ) {
this.maxValue=255;
}var numBands=1;
if (this.variant == 51 || this.variant == 54 ) {
numBands=3;
}if (!seleBand) {
sourceBands=Clazz.array(Integer.TYPE, [numBands]);
destBands=Clazz.array(Integer.TYPE, [numBands]);
for (var i=0; i < numBands; i++) destBands[i]=sourceBands[i]=i;

}var dataType=3;
if (this.maxValue < 256) {
dataType=0;
} else if (this.maxValue < 65536) {
dataType=1;
}var sampleModel=null;
var colorModel=null;
if ((this.variant == 49) || (this.variant == 52) ) {
sampleModel=Clazz.new_($I$(6,1).c$$I$I$I$I,[0, destinationRegion.width, destinationRegion.height, 1]);
var color=Clazz.array(Byte.TYPE, -1, [-1, 0]);
colorModel=Clazz.new_($I$(7,1).c$$I$I$BA$BA$BA,[1, 2, color, color, color]);
} else {
sampleModel=Clazz.new_($I$(8,1).c$$I$I$I$I$I$IA,[dataType, destinationRegion.width, destinationRegion.height, sourceBands.length, destinationRegion.width * sourceBands.length, destBands]);
colorModel=$I$(9).createColorModel$java_awt_color_ColorSpace$java_awt_image_SampleModel(null, sampleModel);
}var bi=param.getDestination$();
var raster=null;
if (bi == null ) {
sampleModel=sampleModel.createCompatibleSampleModel$I$I(destinationRegion.x + destinationRegion.width, destinationRegion.y + destinationRegion.height);
if (seleBand) sampleModel=sampleModel.createSubsetSampleModel$IA(sourceBands);
raster=$I$(13).createWritableRaster$java_awt_image_SampleModel$java_awt_Point(sampleModel, Clazz.new_($I$(14,1)));
bi=Clazz.new_($I$(15,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[colorModel, raster, false, null]);
} else {
raster=bi.getWritableTile$I$I(0, 0);
sampleModel=bi.getSampleModel$();
colorModel=bi.getColorModel$();
noTransform&=destinationRegion.equals$O(raster.getBounds$());
}switch (this.variant) {
case 52:
{
var dataBuffer=raster.getDataBuffer$();
var buf=(dataBuffer).getData$();
if (noTransform) {
this.iis.readFully$BA$I$I(buf, 0, buf.length);
this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(bi, 0, 0, this.width, this.height, 1, 1, destBands);
this.processImageProgress$F(100.0);
} else if (scaleX == 1 && sourceRegion.x % 8 == 0 ) {
var skip=sourceRegion.x >> 3;
var originalLS=this.width + 7 >> 3;
var destLS=raster.getWidth$() + 7 >> 3;
var readLength=sourceRegion.width + 7 >> 3;
var offset=sourceRegion.y * originalLS;
this.iis.skipBytes$I(offset + skip);
offset=originalLS * (scaleY - 1) + originalLS - readLength;
var lineData=Clazz.array(Byte.TYPE, [readLength]);
var bitoff=destinationRegion.x & 7;
var reformat=!(bitoff == 0);
for (var i=0, j=0, k=destinationRegion.y * destLS + (destinationRegion.x >> 3); i < destinationRegion.height; i++, j+=scaleY) {
if (reformat) {
this.iis.read$BA$I$I(lineData, 0, readLength);
var mask1=(255 << bitoff) & 255;
var mask2=~mask1 & 255;
var shift=8 - bitoff;
var n=0;
var m=k;
for (; n < readLength - 1; n++, m++) buf[m]=(((((lineData[n] & mask2) << shift) | (lineData[n + 1] & mask1) >> bitoff)|0)|0);

buf[m]=((((lineData[n] & mask2) << shift)|0)|0);
} else {
this.iis.read$BA$I$I(buf, k, readLength);
}this.iis.skipBytes$I(offset);
k+=destLS;
this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(bi, 0, i, destinationRegion.width, 1, 1, 1, destBands);
this.processImageProgress$F(100.0 * i / destinationRegion.height);
}
} else {
var originalLS=this.width + 7 >> 3;
var data=Clazz.array(Byte.TYPE, [originalLS]);
this.iis.skipBytes$I(sourceRegion.y * originalLS);
var destLS=bi.getWidth$() + 7 >> 3;
var offset=originalLS * (scaleY - 1);
var dsx=destLS * destinationRegion.y + (destinationRegion.x >> 3);
for (var i=0, j=0, n=dsx; i < destinationRegion.height; i++, j+=scaleY) {
this.iis.read$BA$I$I(data, 0, originalLS);
this.iis.skipBytes$I(offset);
var b=0;
var pos=7 - (destinationRegion.x & 7);
for (var m=sourceRegion.x; m < sourceRegion.x + sourceRegion.width; m+=scaleX) {
b|=(data[m >> 3] >> (7 - (m & 7)) & 1) << pos;
pos--;
if (pos == -1) {
buf[n++]=((b|0)|0);
b=0;
pos=7;
}}
if (pos != 7) buf[n++]=((b|0)|0);
n+=destinationRegion.x >> 3;
this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(bi, 0, i, destinationRegion.width, 1, 1, 1, destBands);
this.processImageProgress$F(100.0 * i / destinationRegion.height);
}
}break;
}case 49:
{
var dataBuffer=raster.getDataBuffer$();
var buf=(dataBuffer).getData$();
if (noTransform) for (var i=0, n=0; i < this.height; i++) {
var b=0;
var pos=7;
for (var j=0; j < this.width; j++) {
b|=(p$1.readInteger$javax_imageio_stream_ImageInputStream.apply(this, [this.iis]) & 1) << pos;
pos--;
if (pos == -1) {
buf[n++]=((b|0)|0);
b=0;
pos=7;
}}
if (pos != 7) buf[n++]=((b|0)|0);
this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(bi, 0, i, this.width, 1, 1, 1, destBands);
this.processImageProgress$F(100.0 * i / this.height);
}
 else {
p$1.skipInteger$javax_imageio_stream_ImageInputStream$I.apply(this, [this.iis, sourceRegion.y * this.width + sourceRegion.x]);
var skipX=scaleX - 1;
var skipY=(scaleY - 1) * this.width + this.width - destinationRegion.width * scaleX;
var dsx=(bi.getWidth$() + 7 >> 3) * destinationRegion.y + (destinationRegion.x >> 3);
for (var i=0, n=dsx; i < destinationRegion.height; i++) {
var b=0;
var pos=7 - (destinationRegion.x & 7);
for (var j=0; j < destinationRegion.width; j++) {
b|=(p$1.readInteger$javax_imageio_stream_ImageInputStream.apply(this, [this.iis]) & 1) << pos;
pos--;
if (pos == -1) {
buf[n++]=((b|0)|0);
b=0;
pos=7;
}p$1.skipInteger$javax_imageio_stream_ImageInputStream$I.apply(this, [this.iis, skipX]);
}
if (pos != 7) buf[n++]=((b|0)|0);
n+=destinationRegion.x >> 3;
p$1.skipInteger$javax_imageio_stream_ImageInputStream$I.apply(this, [this.iis, skipY]);
this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(bi, 0, i, destinationRegion.width, 1, 1, 1, destBands);
this.processImageProgress$F(100.0 * i / destinationRegion.height);
}
}break;
}case 50:
case 53:
case 51:
case 54:
var skipX=(scaleX - 1) * numBands;
var skipY=(scaleY * this.width - destinationRegion.width * scaleX) * numBands;
var dsx=(bi.getWidth$() * destinationRegion.y + destinationRegion.x) * numBands;
switch (dataType) {
case 0:
var bbuf=raster.getDataBuffer$();
var byteArray=bbuf.getData$();
if (p$1.isRaw$I.apply(this, [this.variant])) {
if (noTransform) {
this.iis.readFully$BA(byteArray);
this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(bi, 0, 0, this.width, this.height, 1, 1, destBands);
this.processImageProgress$F(100.0);
} else {
this.iis.skipBytes$I(sourceRegion.y * this.width * numBands );
var skip=(scaleY - 1) * this.width * numBands ;
var data=Clazz.array(Byte.TYPE, [this.width * numBands]);
var pixelStride=scaleX * numBands;
var sx=sourceRegion.x * numBands;
var ex=this.width;
for (var i=0, n=dsx; i < destinationRegion.height; i++) {
this.iis.read$BA(data);
for (var j=sourceRegion.x, k=sx; j < sourceRegion.x + sourceRegion.width; j+=scaleX, k+=pixelStride) {
for (var m=0; m < sourceBands.length; m++) byteArray[n + destBands[m]]=(data[k + sourceBands[m]]|0);

n+=sourceBands.length;
}
n+=destinationRegion.x * numBands;
this.iis.skipBytes$I(skip);
this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(bi, 0, i, destinationRegion.width, 1, 1, 1, destBands);
this.processImageProgress$F(100.0 * i / destinationRegion.height);
}
}} else {
p$1.skipInteger$javax_imageio_stream_ImageInputStream$I.apply(this, [this.iis, (sourceRegion.y * this.width + sourceRegion.x) * numBands]);
if (seleBand) {
var data=Clazz.array(Byte.TYPE, [numBands]);
for (var i=0, n=dsx; i < destinationRegion.height; i++) {
for (var j=0; j < destinationRegion.width; j++) {
for (var k=0; k < numBands; k++) data[k]=((p$1.readInteger$javax_imageio_stream_ImageInputStream.apply(this, [this.iis])|0)|0);

for (var k=0; k < sourceBands.length; k++) byteArray[n + destBands[k]]=(data[sourceBands[k]]|0);

n+=sourceBands.length;
p$1.skipInteger$javax_imageio_stream_ImageInputStream$I.apply(this, [this.iis, skipX]);
}
n+=destinationRegion.x * sourceBands.length;
p$1.skipInteger$javax_imageio_stream_ImageInputStream$I.apply(this, [this.iis, skipY]);
this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(bi, 0, i, destinationRegion.width, 1, 1, 1, destBands);
this.processImageProgress$F(100.0 * i / destinationRegion.height);
}
} else for (var i=0, n=dsx; i < destinationRegion.height; i++) {
for (var j=0; j < destinationRegion.width; j++) {
for (var k=0; k < numBands; k++) byteArray[n++]=((p$1.readInteger$javax_imageio_stream_ImageInputStream.apply(this, [this.iis])|0)|0);

p$1.skipInteger$javax_imageio_stream_ImageInputStream$I.apply(this, [this.iis, skipX]);
}
n+=destinationRegion.x * sourceBands.length;
p$1.skipInteger$javax_imageio_stream_ImageInputStream$I.apply(this, [this.iis, skipY]);
this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(bi, 0, i, destinationRegion.width, 1, 1, 1, destBands);
this.processImageProgress$F(100.0 * i / destinationRegion.height);
}
}break;
case 1:
var sbuf=raster.getDataBuffer$();
var shortArray=sbuf.getData$();
p$1.skipInteger$javax_imageio_stream_ImageInputStream$I.apply(this, [this.iis, sourceRegion.y * this.width * numBands  + sourceRegion.x]);
if (seleBand) {
var data=Clazz.array(Short.TYPE, [numBands]);
for (var i=0, n=dsx; i < destinationRegion.height; i++) {
for (var j=0; j < destinationRegion.width; j++) {
for (var k=0; k < numBands; k++) data[k]=(p$1.readInteger$javax_imageio_stream_ImageInputStream.apply(this, [this.iis])|0);

for (var k=0; k < sourceBands.length; k++) shortArray[n + destBands[k]]=data[sourceBands[k]];

n+=sourceBands.length;
p$1.skipInteger$javax_imageio_stream_ImageInputStream$I.apply(this, [this.iis, skipX]);
}
n+=destinationRegion.x * sourceBands.length;
p$1.skipInteger$javax_imageio_stream_ImageInputStream$I.apply(this, [this.iis, skipY]);
this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(bi, 0, i, destinationRegion.width, 1, 1, 1, destBands);
this.processImageProgress$F(100.0 * i / destinationRegion.height);
}
} else for (var i=0, n=dsx; i < destinationRegion.height; i++) {
for (var j=0; j < destinationRegion.width; j++) {
for (var k=0; k < numBands; k++) shortArray[n++]=(p$1.readInteger$javax_imageio_stream_ImageInputStream.apply(this, [this.iis])|0);

p$1.skipInteger$javax_imageio_stream_ImageInputStream$I.apply(this, [this.iis, skipX]);
}
n+=destinationRegion.x * sourceBands.length;
p$1.skipInteger$javax_imageio_stream_ImageInputStream$I.apply(this, [this.iis, skipY]);
this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(bi, 0, i, destinationRegion.width, 1, 1, 1, destBands);
this.processImageProgress$F(100.0 * i / destinationRegion.height);
}
break;
case 3:
var ibuf=raster.getDataBuffer$();
var intArray=ibuf.getData$();
p$1.skipInteger$javax_imageio_stream_ImageInputStream$I.apply(this, [this.iis, sourceRegion.y * this.width * numBands  + sourceRegion.x]);
if (seleBand) {
var data=Clazz.array(Integer.TYPE, [numBands]);
for (var i=0, n=dsx; i < destinationRegion.height; i++) {
for (var j=0; j < destinationRegion.width; j++) {
for (var k=0; k < numBands; k++) data[k]=p$1.readInteger$javax_imageio_stream_ImageInputStream.apply(this, [this.iis]);

for (var k=0; k < sourceBands.length; k++) intArray[n + destBands[k]]=data[sourceBands[k]];

n+=sourceBands.length;
p$1.skipInteger$javax_imageio_stream_ImageInputStream$I.apply(this, [this.iis, skipX]);
}
n+=destinationRegion.x * sourceBands.length;
p$1.skipInteger$javax_imageio_stream_ImageInputStream$I.apply(this, [this.iis, skipY]);
this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(bi, 0, i, destinationRegion.width, 1, 1, 1, destBands);
this.processImageProgress$F(100.0 * i / destinationRegion.height);
}
} else for (var i=0, n=dsx; i < destinationRegion.height; i++) {
for (var j=0; j < destinationRegion.width; j++) {
for (var k=0; k < numBands; k++) intArray[n++]=p$1.readInteger$javax_imageio_stream_ImageInputStream.apply(this, [this.iis]);

p$1.skipInteger$javax_imageio_stream_ImageInputStream$I.apply(this, [this.iis, skipX]);
}
n+=destinationRegion.x * sourceBands.length;
p$1.skipInteger$javax_imageio_stream_ImageInputStream$I.apply(this, [this.iis, skipY]);
this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(bi, 0, i, destinationRegion.width, 1, 1, 1, destBands);
this.processImageProgress$F(100.0 * i / destinationRegion.height);
}
break;
}
break;
}
if (this.abortRequested$()) this.processReadAborted$();
 else this.processImageComplete$();
return bi;
});

Clazz.newMeth(C$, 'canReadRaster$', function () {
return true;
});

Clazz.newMeth(C$, 'readRaster$I$javax_imageio_ImageReadParam', function (imageIndex, param) {
var bi=this.read$I$javax_imageio_ImageReadParam(imageIndex, param);
return bi.getData$();
});

Clazz.newMeth(C$, 'reset$', function () {
C$.superclazz.prototype.reset$.apply(this, []);
this.iis=null;
this.gotHeader=false;
System.gc$();
});

Clazz.newMeth(C$, 'isRaw$I', function (v) {
return (v >= 52);
}, p$1);

Clazz.newMeth(C$, 'readComments$javax_imageio_stream_ImageInputStream$io_scif_media_imageioimpl_plugins_pnm_PNMMetadata', function (stream, metadata) {
var line=null;
var pos=-1;
stream.mark$();
while ((line=stream.readLine$()) != null  && (pos=line.indexOf$S("#")) >= 0 ){
metadata.addComment$S(line.substring$I(pos + 1).trim$());
}
stream.reset$();
}, p$1);

Clazz.newMeth(C$, 'readInteger$javax_imageio_stream_ImageInputStream', function (stream) {
var foundDigit=false;
while (this.aLine == null ){
this.aLine=stream.readLine$();
if (this.aLine == null ) return 0;
var pos=this.aLine.indexOf$S("#");
if (pos == 0) this.aLine=null;
 else if (pos > 0) this.aLine=this.aLine.substring$I$I(0, pos - 1);
if (this.aLine != null ) this.token=Clazz.new_($I$(16,1).c$$S,[this.aLine]);
}
while (this.token.hasMoreTokens$()){
var s=this.token.nextToken$();
try {
return  new Integer(s).intValue$();
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
continue;
} else {
throw e;
}
}
}
if (!foundDigit) {
this.aLine=null;
return p$1.readInteger$javax_imageio_stream_ImageInputStream.apply(this, [stream]);
}return 0;
}, p$1);

Clazz.newMeth(C$, 'skipInteger$javax_imageio_stream_ImageInputStream$I', function (stream, num) {
for (var i=0; i < num; i++) p$1.readInteger$javax_imageio_stream_ImageInputStream.apply(this, [stream]);

}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:19 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
