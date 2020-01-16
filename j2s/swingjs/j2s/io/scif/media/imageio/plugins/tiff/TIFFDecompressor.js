(function(){var P$=Clazz.newPackage("io.scif.media.imageio.plugins.tiff"),I$=[[0,'java.awt.image.PixelInterleavedSampleModel','java.awt.image.ComponentColorModel','java.io.ByteArrayInputStream','javax.imageio.stream.MemoryCacheImageInputStream','javax.imageio.ImageTypeSpecifier','java.awt.color.ColorSpace','io.scif.media.imageioimpl.common.SimpleCMYKColorSpace','io.scif.media.imageioimpl.common.BogusColorSpace','java.awt.image.IndexColorModel','java.awt.image.MultiPixelPackedSampleModel','java.nio.ByteOrder','io.scif.media.imageioimpl.common.ImageUtil','java.awt.Rectangle']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFDecompressor");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.sampleFormat=Clazz.array(Integer.TYPE, -1, [1]);
this.isFirstBitDepthTable=true;
this.planarCache=false;
this.destBitsPerSampleCache=null;
this.sourceBandsCache=null;
this.bitsPerSampleCache=null;
this.destinationBandsCache=null;
}, 1);

C$.$fields$=[['Z',['planar','isBilevel','isContiguous','isImageSimple','adjustBitDepths','isFirstBitDepthTable','planarCache'],'I',['photometricInterpretation','compression','samplesPerPixel','byteCount','srcMinX','srcMinY','srcWidth','srcHeight','sourceXOffset','dstXOffset','sourceYOffset','dstYOffset','subsampleX','subsampleY','dstMinX','dstMinY','dstWidth','dstHeight','activeSrcMinX','activeSrcMinY','activeSrcWidth','activeSrcHeight'],'L',['offset'],'O',['reader','javax.imageio.ImageReader','metadata','javax.imageio.metadata.IIOMetadata','bitsPerSample','int[]','+sampleFormat','+extraSamples','colorMap','char[]','stream','javax.imageio.stream.ImageInputStream','sourceBands','int[]','+destinationBands','rawImage','java.awt.image.BufferedImage','+image','colorConverter','io.scif.media.imageio.plugins.tiff.TIFFColorConverter','bitDepthScale','int[][]','destBitsPerSampleCache','int[]','+sourceBandsCache','+bitsPerSampleCache','+destinationBandsCache']]]

Clazz.newMeth(C$, 'createInterleavedSM$I$I', function (dataType, numBands) {
var bandOffsets=Clazz.array(Integer.TYPE, [numBands]);
for (var i=0; i < numBands; i++) {
bandOffsets[i]=i;
}
return Clazz.new_($I$(1,1).c$$I$I$I$I$I$IA,[dataType, 1, 1, numBands, numBands, bandOffsets]);
}, 1);

Clazz.newMeth(C$, 'createComponentCM$java_awt_color_ColorSpace$I$I$Z$Z', function (colorSpace, numBands, dataType, hasAlpha, isAlphaPremultiplied) {
var transparency=hasAlpha ? 3 : 1;
var colorModel;
if (dataType == 4 || dataType == 5 ) {
colorModel=Clazz.new_($I$(2,1).c$$java_awt_color_ColorSpace$Z$Z$I$I,[colorSpace, hasAlpha, isAlphaPremultiplied, transparency, dataType]);
} else {
var numBits=Clazz.array(Integer.TYPE, [numBands]);
var bits;
if (dataType == 0) {
bits=8;
} else if (dataType == 2 || dataType == 1 ) {
bits=16;
} else if (dataType == 3) {
bits=32;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["dataType = " + dataType]);
}for (var i=0; i < numBands; i++) {
numBits[i]=bits;
}
colorModel=Clazz.new_($I$(2,1).c$$java_awt_color_ColorSpace$IA$Z$Z$I$I,[colorSpace, numBits, hasAlpha, isAlphaPremultiplied, transparency, dataType]);
}return colorModel;
}, 1);

Clazz.newMeth(C$, 'createMask$IA$I', function (bitsPerSample, band) {
var mask=(1 << bitsPerSample[band]) - 1;
for (var i=band + 1; i < bitsPerSample.length; i++) {
mask<<=bitsPerSample[i];
}
return mask;
}, 1);

Clazz.newMeth(C$, 'getDataTypeFromNumBits$I$Z', function (numBits, isSigned) {
var dataType;
if (numBits <= 8) {
dataType=0;
} else if (numBits <= 16) {
dataType=isSigned ? 2 : 1;
} else {
dataType=3;
}return dataType;
}, 1);

Clazz.newMeth(C$, 'areIntArraysEqual$IA$IA', function (a, b) {
if (a == null  || b == null  ) {
if (a == null  && b == null  ) {
return true;
} else {
return false;
}}if (a.length != b.length) {
return false;
}var length=a.length;
for (var i=0; i < length; i++) {
if (a[i] != b[i]) {
return false;
}}
return true;
}, 1);

Clazz.newMeth(C$, 'getDataTypeSize$I', function (dataType) {
var dataTypeSize=0;
switch (dataType) {
case 0:
dataTypeSize=8;
break;
case 2:
case 1:
dataTypeSize=16;
break;
case 3:
case 4:
dataTypeSize=32;
break;
case 5:
dataTypeSize=64;
break;
default:
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Unknown data type " + dataType]);
}
return dataTypeSize;
}, 1);

Clazz.newMeth(C$, 'getBitsPerPixel$java_awt_image_SampleModel', function (sm) {
var bitsPerPixel=0;
var sampleSize=sm.getSampleSize$();
var numBands=sampleSize.length;
for (var i=0; i < numBands; i++) {
bitsPerPixel+=sampleSize[i];
}
return bitsPerPixel;
}, 1);

Clazz.newMeth(C$, 'areSampleSizesEqual$java_awt_image_SampleModel', function (sm) {
var allSameSize=true;
var sampleSize=sm.getSampleSize$();
var sampleSize0=sampleSize[0];
var numBands=sampleSize.length;
for (var i=1; i < numBands; i++) {
if (sampleSize[i] != sampleSize0) {
allSameSize=false;
break;
}}
return allSameSize;
}, 1);

Clazz.newMeth(C$, 'isDataBufferBitContiguous$java_awt_image_SampleModel', function (sm) {
var dataTypeSize=C$.getDataTypeSize$I(sm.getDataType$());
if (Clazz.instanceOf(sm, "java.awt.image.ComponentSampleModel")) {
var numBands=sm.getNumBands$();
for (var i=0; i < numBands; i++) {
if (sm.getSampleSize$I(i) != dataTypeSize) {
return false;
}}
} else if (Clazz.instanceOf(sm, "java.awt.image.MultiPixelPackedSampleModel")) {
var mppsm=sm;
if (dataTypeSize % mppsm.getPixelBitStride$() != 0) {
return false;
}} else if (Clazz.instanceOf(sm, "java.awt.image.SinglePixelPackedSampleModel")) {
var sppsm=sm;
var numBands=sm.getNumBands$();
var numBits=0;
for (var i=0; i < numBands; i++) {
numBits+=sm.getSampleSize$I(i);
}
if (numBits != dataTypeSize) {
return false;
}} else {
return false;
}return true;
}, 1);

Clazz.newMeth(C$, 'reformatData$BA$I$I$HA$IA$I$I', function (buf, bytesPerRow, numRows, shortData, intData, outOffset, outStride) {
if (shortData != null ) {
if (false) {
System.out.println$S("Reformatting data to short");
}var inOffset=0;
var shortsPerRow=(bytesPerRow/2|0);
var numExtraBytes=bytesPerRow % 2;
for (var j=0; j < numRows; j++) {
var k=outOffset;
for (var i=0; i < shortsPerRow; i++) {
shortData[k++]=((((buf[inOffset++] & 255) << 8) | (buf[inOffset++] & 255))|0);
}
if (numExtraBytes != 0) {
shortData[k++]=(((buf[inOffset++] & 255) << 8)|0);
}outOffset+=outStride;
}
} else if (intData != null ) {
if (false) {
System.out.println$S("Reformatting data to int");
}var inOffset=0;
var intsPerRow=(bytesPerRow/4|0);
var numExtraBytes=bytesPerRow % 4;
for (var j=0; j < numRows; j++) {
var k=outOffset;
for (var i=0; i < intsPerRow; i++) {
intData[k++]=((buf[inOffset++] & 255) << 24) | ((buf[inOffset++] & 255) << 16) | ((buf[inOffset++] & 255) << 8) | (buf[inOffset++] & 255) ;
}
if (numExtraBytes != 0) {
var shift=24;
var ival=0;
for (var b=0; b < numExtraBytes; b++) {
ival|=(buf[inOffset++] & 255) << shift;
shift-=8;
}
intData[k++]=ival;
}outOffset+=outStride;
}
} else {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["shortData == null && intData == null!"]);
}}, 1);

Clazz.newMeth(C$, 'reformatDiscontiguousData$BA$I$I$I$java_awt_image_WritableRaster', function (buf, stride, w, h, raster) {
if (false) {
System.out.println$S("Reformatting discontiguous data");
}var sm=raster.getSampleModel$();
var numBands=sm.getNumBands$();
var sampleSize=sm.getSampleSize$();
var is=Clazz.new_($I$(3,1).c$$BA,[buf]);
var iis=Clazz.new_($I$(4,1).c$$java_io_InputStream,[is]);
var iisPosition=0;
var y=raster.getMinY$();
for (var j=0; j < h; j++, y++) {
iis.seek$J(iisPosition);
var x=raster.getMinX$();
for (var i=0; i < w; i++, x++) {
for (var b=0; b < numBands; b++) {
var bits=iis.readBits$I(sampleSize[b]);
raster.setSample$I$I$I$I(x, y, b, (bits|0));
}
}
iisPosition+=stride;
}
}, 1);

Clazz.newMeth(C$, 'getRawImageTypeSpecifier$I$I$I$IA$IA$IA$CA', function (photometricInterpretation, compression, samplesPerPixel, bitsPerSample, sampleFormat, extraSamples, colorMap) {
if (false) {
System.out.println$S("\n ---- samplesPerPixel = " + samplesPerPixel + "\n ---- bitsPerSample[0] = " + bitsPerSample[0] + "\n ---- sampleFormat[0] = " + sampleFormat[0] );
}if (samplesPerPixel == 1 && (bitsPerSample[0] == 1 || bitsPerSample[0] == 2  || bitsPerSample[0] == 4  || bitsPerSample[0] == 8  || bitsPerSample[0] == 16 ) ) {
if (colorMap == null ) {
var isSigned=(sampleFormat[0] == 2);
var dataType;
if (bitsPerSample[0] <= 8) {
dataType=0;
} else {
dataType=sampleFormat[0] == 2 ? 2 : 1;
}return $I$(5).createGrayscale$I$I$Z(bitsPerSample[0], dataType, isSigned);
} else {
var mapSize=1 << bitsPerSample[0];
var redLut=Clazz.array(Byte.TYPE, [mapSize]);
var greenLut=Clazz.array(Byte.TYPE, [mapSize]);
var blueLut=Clazz.array(Byte.TYPE, [mapSize]);
var alphaLut=null;
var idx=0;
for (var i=0; i < mapSize; i++) {
redLut[i]=((((((colorMap[i]).$c() * 255)/65535|0))|0)|0);
greenLut[i]=((((((colorMap[mapSize + i]).$c() * 255)/65535|0))|0)|0);
blueLut[i]=((((((colorMap[2 * mapSize + i]).$c() * 255)/65535|0))|0)|0);
}
var dataType=bitsPerSample[0] == 8 ? 0 : 1;
return $I$(5).createIndexed$BA$BA$BA$BA$I$I(redLut, greenLut, blueLut, alphaLut, bitsPerSample[0], dataType);
}}if (samplesPerPixel == 2 && bitsPerSample[0] == 8  && bitsPerSample[1] == 8 ) {
var dataType=0;
var alphaPremultiplied=false;
if (extraSamples != null  && extraSamples[0] == 1 ) {
alphaPremultiplied=true;
}return $I$(5).createGrayscale$I$I$Z$Z(8, dataType, false, alphaPremultiplied);
}if (samplesPerPixel == 2 && bitsPerSample[0] == 16  && bitsPerSample[1] == 16 ) {
var dataType=sampleFormat[0] == 2 ? 2 : 1;
var alphaPremultiplied=false;
if (extraSamples != null  && extraSamples[0] == 1 ) {
alphaPremultiplied=true;
}var isSigned=dataType == 2;
return $I$(5).createGrayscale$I$I$Z$Z(16, dataType, isSigned, alphaPremultiplied);
}var rgb=$I$(6).getInstance$I(1000);
if (samplesPerPixel == 3 && bitsPerSample[0] == 8  && bitsPerSample[1] == 8  && bitsPerSample[2] == 8 ) {
var bandOffsets=Clazz.array(Integer.TYPE, [3]);
bandOffsets[0]=0;
bandOffsets[1]=1;
bandOffsets[2]=2;
var dataType=0;
var theColorSpace;
if ((photometricInterpretation == 6 && compression != 7  && compression != 6 ) || photometricInterpretation == 8 ) {
theColorSpace=$I$(6).getInstance$I(1004);
} else {
theColorSpace=rgb;
}return $I$(5).createInterleaved$java_awt_color_ColorSpace$IA$I$Z$Z(theColorSpace, bandOffsets, dataType, false, false);
}if (samplesPerPixel == 4 && bitsPerSample[0] == 8  && bitsPerSample[1] == 8  && bitsPerSample[2] == 8  && bitsPerSample[3] == 8 ) {
var bandOffsets=Clazz.array(Integer.TYPE, [4]);
bandOffsets[0]=0;
bandOffsets[1]=1;
bandOffsets[2]=2;
bandOffsets[3]=3;
var dataType=0;
var theColorSpace;
var hasAlpha;
var alphaPremultiplied=false;
if (photometricInterpretation == 5) {
theColorSpace=$I$(7).getInstance$();
hasAlpha=false;
} else {
theColorSpace=rgb;
hasAlpha=true;
if (extraSamples != null  && extraSamples[0] == 1 ) {
alphaPremultiplied=true;
}}return $I$(5).createInterleaved$java_awt_color_ColorSpace$IA$I$Z$Z(theColorSpace, bandOffsets, dataType, hasAlpha, alphaPremultiplied);
}if (samplesPerPixel == 3 && bitsPerSample[0] == 16  && bitsPerSample[1] == 16  && bitsPerSample[2] == 16 ) {
var bandOffsets=Clazz.array(Integer.TYPE, [3]);
bandOffsets[0]=0;
bandOffsets[1]=1;
bandOffsets[2]=2;
var dataType=sampleFormat[0] == 2 ? 2 : 1;
return $I$(5).createInterleaved$java_awt_color_ColorSpace$IA$I$Z$Z(rgb, bandOffsets, dataType, false, false);
}if (samplesPerPixel == 4 && bitsPerSample[0] == 16  && bitsPerSample[1] == 16  && bitsPerSample[2] == 16  && bitsPerSample[3] == 16 ) {
var bandOffsets=Clazz.array(Integer.TYPE, [4]);
bandOffsets[0]=0;
bandOffsets[1]=1;
bandOffsets[2]=2;
bandOffsets[3]=3;
var dataType=sampleFormat[0] == 2 ? 2 : 1;
var alphaPremultiplied=false;
if (extraSamples != null  && extraSamples[0] == 1 ) {
alphaPremultiplied=true;
}return $I$(5).createInterleaved$java_awt_color_ColorSpace$IA$I$Z$Z(rgb, bandOffsets, dataType, true, alphaPremultiplied);
}if ((photometricInterpretation == 5) && (bitsPerSample[0] == 1 || bitsPerSample[0] == 2  || bitsPerSample[0] == 4 ) ) {
var cs=null;
if (samplesPerPixel == 4) cs=$I$(7).getInstance$();
 else cs=Clazz.new_($I$(8,1).c$$I,[samplesPerPixel]);
var cm=Clazz.new_($I$(2,1).c$$java_awt_color_ColorSpace$IA$Z$Z$I$I,[cs, bitsPerSample, false, false, 1, 0]);
return Clazz.new_($I$(5,1).c$$java_awt_image_ColorModel$java_awt_image_SampleModel,[cm, cm.createCompatibleSampleModel$I$I(1, 1)]);
}var totalBits=0;
for (var i=0; i < bitsPerSample.length; i++) {
totalBits+=bitsPerSample[i];
}
if ((samplesPerPixel == 3 || samplesPerPixel == 4 ) && (totalBits == 8 || totalBits == 16 ) ) {
var redMask=C$.createMask$IA$I(bitsPerSample, 0);
var greenMask=C$.createMask$IA$I(bitsPerSample, 1);
var blueMask=C$.createMask$IA$I(bitsPerSample, 2);
var alphaMask=(samplesPerPixel == 4) ? C$.createMask$IA$I(bitsPerSample, 3) : 0;
var transferType=totalBits == 8 ? 0 : 1;
var alphaPremultiplied=false;
if (extraSamples != null  && extraSamples[0] == 1 ) {
alphaPremultiplied=true;
}return $I$(5).createPacked$java_awt_color_ColorSpace$I$I$I$I$I$Z(rgb, redMask, greenMask, blueMask, alphaMask, transferType, alphaPremultiplied);
}if (bitsPerSample[0] % 8 == 0) {
var allSameBitDepth=true;
for (var i=1; i < bitsPerSample.length; i++) {
if (bitsPerSample[i] != bitsPerSample[i - 1]) {
allSameBitDepth=false;
break;
}}
if (allSameBitDepth) {
var dataType=-1;
var isDataTypeSet=false;
switch (bitsPerSample[0]) {
case 8:
if (sampleFormat[0] != 3) {
dataType=0;
isDataTypeSet=true;
}break;
case 16:
if (sampleFormat[0] != 3) {
if (sampleFormat[0] == 2) {
dataType=2;
} else {
dataType=1;
}isDataTypeSet=true;
}break;
case 32:
if (sampleFormat[0] == 3) {
dataType=4;
} else {
dataType=3;
}isDataTypeSet=true;
break;
}
if (isDataTypeSet) {
var sm=C$.createInterleavedSM$I$I(dataType, samplesPerPixel);
var cm;
if (samplesPerPixel >= 1 && samplesPerPixel <= 4  && (dataType == 3 || dataType == 4 ) ) {
var cs=samplesPerPixel <= 2 ? $I$(6).getInstance$I(1003) : rgb;
var hasAlpha=((samplesPerPixel % 2) == 0);
var alphaPremultiplied=false;
if (hasAlpha && extraSamples != null   && extraSamples[0] == 1 ) {
alphaPremultiplied=true;
}cm=C$.createComponentCM$java_awt_color_ColorSpace$I$I$Z$Z(cs, samplesPerPixel, dataType, hasAlpha, alphaPremultiplied);
} else {
var cs=Clazz.new_($I$(8,1).c$$I,[samplesPerPixel]);
cm=C$.createComponentCM$java_awt_color_ColorSpace$I$I$Z$Z(cs, samplesPerPixel, dataType, false, false);
}return Clazz.new_($I$(5,1).c$$java_awt_image_ColorModel$java_awt_image_SampleModel,[cm, sm]);
}}}if (colorMap == null  && sampleFormat[0] != 3 ) {
var maxBitsPerSample=0;
for (var i=0; i < bitsPerSample.length; i++) {
if (bitsPerSample[i] > maxBitsPerSample) {
maxBitsPerSample=bitsPerSample[i];
}}
var isSigned=(sampleFormat[0] == 2);
if (samplesPerPixel == 1) {
var dataType=C$.getDataTypeFromNumBits$I$Z(maxBitsPerSample, isSigned);
return $I$(5).createGrayscale$I$I$Z(maxBitsPerSample, dataType, isSigned);
}if (samplesPerPixel == 2) {
var alphaPremultiplied=false;
if (extraSamples != null  && extraSamples[0] == 1 ) {
alphaPremultiplied=true;
}var dataType=C$.getDataTypeFromNumBits$I$Z(maxBitsPerSample, isSigned);
return $I$(5).createGrayscale$I$I$Z$Z(maxBitsPerSample, dataType, false, alphaPremultiplied);
}if (samplesPerPixel == 3 || samplesPerPixel == 4 ) {
if (totalBits <= 32 && !isSigned ) {
var redMask=C$.createMask$IA$I(bitsPerSample, 0);
var greenMask=C$.createMask$IA$I(bitsPerSample, 1);
var blueMask=C$.createMask$IA$I(bitsPerSample, 2);
var alphaMask=(samplesPerPixel == 4) ? C$.createMask$IA$I(bitsPerSample, 3) : 0;
var transferType=C$.getDataTypeFromNumBits$I$Z(totalBits, false);
var alphaPremultiplied=false;
if (extraSamples != null  && extraSamples[0] == 1 ) {
alphaPremultiplied=true;
}return $I$(5).createPacked$java_awt_color_ColorSpace$I$I$I$I$I$Z(rgb, redMask, greenMask, blueMask, alphaMask, transferType, alphaPremultiplied);
} else if (samplesPerPixel == 3) {
var bandOffsets=Clazz.array(Integer.TYPE, -1, [0, 1, 2]);
var dataType=C$.getDataTypeFromNumBits$I$Z(maxBitsPerSample, isSigned);
return $I$(5).createInterleaved$java_awt_color_ColorSpace$IA$I$Z$Z(rgb, bandOffsets, dataType, false, false);
} else if (samplesPerPixel == 4) {
var bandOffsets=Clazz.array(Integer.TYPE, -1, [0, 1, 2, 3]);
var dataType=C$.getDataTypeFromNumBits$I$Z(maxBitsPerSample, isSigned);
var alphaPremultiplied=false;
if (extraSamples != null  && extraSamples[0] == 1 ) {
alphaPremultiplied=true;
}return $I$(5).createInterleaved$java_awt_color_ColorSpace$IA$I$Z$Z(rgb, bandOffsets, dataType, true, alphaPremultiplied);
}} else {
var dataType=C$.getDataTypeFromNumBits$I$Z(maxBitsPerSample, isSigned);
var sm=C$.createInterleavedSM$I$I(dataType, samplesPerPixel);
var cs=Clazz.new_($I$(8,1).c$$I,[samplesPerPixel]);
var cm=C$.createComponentCM$java_awt_color_ColorSpace$I$I$Z$Z(cs, samplesPerPixel, dataType, false, false);
return Clazz.new_($I$(5,1).c$$java_awt_image_ColorModel$java_awt_image_SampleModel,[cm, sm]);
}}if (false) {
System.out.println$S("\nNo raw ITS available:");
System.out.println$S("photometricInterpretation = " + photometricInterpretation);
System.out.println$S("compression = " + compression);
System.out.println$S("samplesPerPixel = " + samplesPerPixel);
if (bitsPerSample != null ) {
for (var i=0; i < bitsPerSample.length; i++) {
System.out.println$S("bitsPerSample[" + i + "] = " + bitsPerSample[i] );
}
}if (sampleFormat != null ) {
for (var i=0; i < sampleFormat.length; i++) {
System.out.println$S("sampleFormat[" + i + "] = " + sampleFormat[i] );
}
}if (extraSamples != null ) {
for (var i=0; i < extraSamples.length; i++) {
System.out.println$S("extraSamples[" + i + "] = " + extraSamples[i] );
}
}System.out.println$S("colorMap = " + colorMap);
if (colorMap != null ) {
System.out.println$S("colorMap.length = " + colorMap.length);
}throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Unable to create an ImageTypeSpecifier"]);
}return null;
}, 1);

Clazz.newMeth(C$, 'setReader$javax_imageio_ImageReader', function (reader) {
this.reader=reader;
});

Clazz.newMeth(C$, 'setMetadata$javax_imageio_metadata_IIOMetadata', function (metadata) {
this.metadata=metadata;
});

Clazz.newMeth(C$, 'setPhotometricInterpretation$I', function (photometricInterpretation) {
this.photometricInterpretation=photometricInterpretation;
});

Clazz.newMeth(C$, 'setCompression$I', function (compression) {
this.compression=compression;
});

Clazz.newMeth(C$, 'setPlanar$Z', function (planar) {
this.planar=planar;
});

Clazz.newMeth(C$, 'setSamplesPerPixel$I', function (samplesPerPixel) {
this.samplesPerPixel=samplesPerPixel;
});

Clazz.newMeth(C$, 'setBitsPerSample$IA', function (bitsPerSample) {
this.bitsPerSample=bitsPerSample == null  ? null : bitsPerSample.clone$();
});

Clazz.newMeth(C$, 'setSampleFormat$IA', function (sampleFormat) {
this.sampleFormat=sampleFormat == null  ? Clazz.array(Integer.TYPE, -1, [1]) : sampleFormat.clone$();
});

Clazz.newMeth(C$, 'setExtraSamples$IA', function (extraSamples) {
this.extraSamples=extraSamples == null  ? null : extraSamples.clone$();
});

Clazz.newMeth(C$, 'setColorMap$CA', function (colorMap) {
this.colorMap=colorMap == null  ? null : colorMap.clone$();
});

Clazz.newMeth(C$, 'setStream$javax_imageio_stream_ImageInputStream', function (stream) {
this.stream=stream;
});

Clazz.newMeth(C$, 'setOffset$J', function (offset) {
this.offset=offset;
});

Clazz.newMeth(C$, 'setByteCount$I', function (byteCount) {
this.byteCount=byteCount;
});

Clazz.newMeth(C$, 'setSrcMinX$I', function (srcMinX) {
this.srcMinX=srcMinX;
});

Clazz.newMeth(C$, 'setSrcMinY$I', function (srcMinY) {
this.srcMinY=srcMinY;
});

Clazz.newMeth(C$, 'setSrcWidth$I', function (srcWidth) {
this.srcWidth=srcWidth;
});

Clazz.newMeth(C$, 'setSrcHeight$I', function (srcHeight) {
this.srcHeight=srcHeight;
});

Clazz.newMeth(C$, 'setSourceXOffset$I', function (sourceXOffset) {
this.sourceXOffset=sourceXOffset;
});

Clazz.newMeth(C$, 'setDstXOffset$I', function (dstXOffset) {
this.dstXOffset=dstXOffset;
});

Clazz.newMeth(C$, 'setSourceYOffset$I', function (sourceYOffset) {
this.sourceYOffset=sourceYOffset;
});

Clazz.newMeth(C$, 'setDstYOffset$I', function (dstYOffset) {
this.dstYOffset=dstYOffset;
});

Clazz.newMeth(C$, 'setSubsampleX$I', function (subsampleX) {
if (subsampleX <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["subsampleX <= 0!"]);
}this.subsampleX=subsampleX;
});

Clazz.newMeth(C$, 'setSubsampleY$I', function (subsampleY) {
if (subsampleY <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["subsampleY <= 0!"]);
}this.subsampleY=subsampleY;
});

Clazz.newMeth(C$, 'setSourceBands$IA', function (sourceBands) {
this.sourceBands=sourceBands == null  ? null : sourceBands.clone$();
});

Clazz.newMeth(C$, 'setDestinationBands$IA', function (destinationBands) {
this.destinationBands=destinationBands == null  ? null : destinationBands.clone$();
});

Clazz.newMeth(C$, 'setImage$java_awt_image_BufferedImage', function (image) {
this.image=image;
});

Clazz.newMeth(C$, 'setDstMinX$I', function (dstMinX) {
this.dstMinX=dstMinX;
});

Clazz.newMeth(C$, 'setDstMinY$I', function (dstMinY) {
this.dstMinY=dstMinY;
});

Clazz.newMeth(C$, 'setDstWidth$I', function (dstWidth) {
this.dstWidth=dstWidth;
});

Clazz.newMeth(C$, 'setDstHeight$I', function (dstHeight) {
this.dstHeight=dstHeight;
});

Clazz.newMeth(C$, 'setActiveSrcMinX$I', function (activeSrcMinX) {
this.activeSrcMinX=activeSrcMinX;
});

Clazz.newMeth(C$, 'setActiveSrcMinY$I', function (activeSrcMinY) {
this.activeSrcMinY=activeSrcMinY;
});

Clazz.newMeth(C$, 'setActiveSrcWidth$I', function (activeSrcWidth) {
this.activeSrcWidth=activeSrcWidth;
});

Clazz.newMeth(C$, 'setActiveSrcHeight$I', function (activeSrcHeight) {
this.activeSrcHeight=activeSrcHeight;
});

Clazz.newMeth(C$, 'setColorConverter$io_scif_media_imageio_plugins_tiff_TIFFColorConverter', function (colorConverter) {
this.colorConverter=colorConverter;
});

Clazz.newMeth(C$, 'getRawImageType$', function () {
var its=C$.getRawImageTypeSpecifier$I$I$I$IA$IA$IA$CA(this.photometricInterpretation, this.compression, this.samplesPerPixel, this.bitsPerSample, this.sampleFormat, this.extraSamples, this.colorMap);
return its;
});

Clazz.newMeth(C$, 'createRawImage$', function () {
if (this.planar) {
var bps=this.bitsPerSample[this.sourceBands[0]];
var dataType;
if (this.sampleFormat[0] == 3) {
dataType=4;
} else if (bps <= 8) {
dataType=0;
} else if (bps <= 16) {
if (this.sampleFormat[0] == 2) {
dataType=2;
} else {
dataType=1;
}} else {
dataType=3;
}var csGray=$I$(6).getInstance$I(1003);
var its=null;
if (bps == 1 || bps == 2  || bps == 4 ) {
var bits=bps;
var size=1 << bits;
var r=Clazz.array(Byte.TYPE, [size]);
var g=Clazz.array(Byte.TYPE, [size]);
var b=Clazz.array(Byte.TYPE, [size]);
for (var j=0; j < r.length; j++) {
r[j]=(0|0);
g[j]=(0|0);
b[j]=(0|0);
}
var cmGray=Clazz.new_($I$(9,1).c$$I$I$BA$BA$BA,[bits, size, r, g, b]);
var smGray=Clazz.new_($I$(10,1).c$$I$I$I$I,[0, 1, 1, bits]);
its=Clazz.new_($I$(5,1).c$$java_awt_image_ColorModel$java_awt_image_SampleModel,[cmGray, smGray]);
} else {
its=$I$(5).createInterleaved$java_awt_color_ColorSpace$IA$I$Z$Z(csGray, Clazz.array(Integer.TYPE, -1, [0]), dataType, false, false);
}return its.createBufferedImage$I$I(this.srcWidth, this.srcHeight);
} else {
var its=this.getRawImageType$();
if (its == null ) {
return null;
}var bi=its.createBufferedImage$I$I(this.srcWidth, this.srcHeight);
return bi;
}});

Clazz.newMeth(C$, 'decodeRaw$HA$I$I$I', function (s, dstOffset, bitsPerPixel, scanlineStride) {
var bytesPerRow=((this.srcWidth * bitsPerPixel + 7)/8|0);
var shortsPerRow=(bytesPerRow/2|0);
var b=Clazz.array(Byte.TYPE, [bytesPerRow * this.srcHeight]);
this.decodeRaw$BA$I$I$I(b, 0, bitsPerPixel, bytesPerRow);
var bOffset=0;
if (this.stream.getByteOrder$() === $I$(11).BIG_ENDIAN ) {
for (var j=0; j < this.srcHeight; j++) {
for (var i=0; i < shortsPerRow; i++) {
var hiVal=b[bOffset++];
var loVal=b[bOffset++];
var sval=($s$[0] = ((hiVal << 8) | (loVal & 255)), $s$[0]);
s[dstOffset + i]=sval;
}
dstOffset+=scanlineStride;
}
} else {
for (var j=0; j < this.srcHeight; j++) {
for (var i=0; i < shortsPerRow; i++) {
var loVal=b[bOffset++];
var hiVal=b[bOffset++];
var sval=($s$[0] = ((hiVal << 8) | (loVal & 255)), $s$[0]);
s[dstOffset + i]=sval;
}
dstOffset+=scanlineStride;
}
}});

Clazz.newMeth(C$, 'decodeRaw$IA$I$I$I', function (i, dstOffset, bitsPerPixel, scanlineStride) {
var numBands=(bitsPerPixel/32|0);
var intsPerRow=this.srcWidth * numBands;
var bytesPerRow=intsPerRow * 4;
var b=Clazz.array(Byte.TYPE, [bytesPerRow * this.srcHeight]);
this.decodeRaw$BA$I$I$I(b, 0, bitsPerPixel, bytesPerRow);
var bOffset=0;
if (this.stream.getByteOrder$() === $I$(11).BIG_ENDIAN ) {
for (var j=0; j < this.srcHeight; j++) {
for (var k=0; k < intsPerRow; k++) {
var v0=b[bOffset++] & 255;
var v1=b[bOffset++] & 255;
var v2=b[bOffset++] & 255;
var v3=b[bOffset++] & 255;
var ival=(v0 << 24) | (v1 << 16) | (v2 << 8) | v3 ;
i[dstOffset + k]=ival;
}
dstOffset+=scanlineStride;
}
} else {
for (var j=0; j < this.srcHeight; j++) {
for (var k=0; k < intsPerRow; k++) {
var v3=b[bOffset++] & 255;
var v2=b[bOffset++] & 255;
var v1=b[bOffset++] & 255;
var v0=b[bOffset++] & 255;
var ival=(v0 << 24) | (v1 << 16) | (v2 << 8) | v3 ;
i[dstOffset + k]=ival;
}
dstOffset+=scanlineStride;
}
}});

Clazz.newMeth(C$, 'decodeRaw$FA$I$I$I', function (f, dstOffset, bitsPerPixel, scanlineStride) {
var numBands=(bitsPerPixel/32|0);
var floatsPerRow=this.srcWidth * numBands;
var bytesPerRow=floatsPerRow * 4;
var b=Clazz.array(Byte.TYPE, [bytesPerRow * this.srcHeight]);
this.decodeRaw$BA$I$I$I(b, 0, bitsPerPixel, bytesPerRow);
var bOffset=0;
if (this.stream.getByteOrder$() === $I$(11).BIG_ENDIAN ) {
for (var j=0; j < this.srcHeight; j++) {
for (var i=0; i < floatsPerRow; i++) {
var v0=b[bOffset++] & 255;
var v1=b[bOffset++] & 255;
var v2=b[bOffset++] & 255;
var v3=b[bOffset++] & 255;
var ival=(v0 << 24) | (v1 << 16) | (v2 << 8) | v3 ;
var fval=Float.intBitsToFloat$I(ival);
f[dstOffset + i]=fval;
}
dstOffset+=scanlineStride;
}
} else {
for (var j=0; j < this.srcHeight; j++) {
for (var i=0; i < floatsPerRow; i++) {
var v3=b[bOffset++] & 255;
var v2=b[bOffset++] & 255;
var v1=b[bOffset++] & 255;
var v0=b[bOffset++] & 255;
var ival=(v0 << 24) | (v1 << 16) | (v2 << 8) | v3 ;
var fval=Float.intBitsToFloat$I(ival);
f[dstOffset + i]=fval;
}
dstOffset+=scanlineStride;
}
}});

Clazz.newMeth(C$, 'beginDecoding$', function () {
this.adjustBitDepths=false;
var numBands=this.destinationBands.length;
var destBitsPerSample=null;
if (this.planar) {
var totalNumBands=this.bitsPerSample.length;
destBitsPerSample=Clazz.array(Integer.TYPE, [totalNumBands]);
var dbps=this.image.getSampleModel$().getSampleSize$I(0);
for (var b=0; b < totalNumBands; b++) {
destBitsPerSample[b]=dbps;
}
} else {
destBitsPerSample=this.image.getSampleModel$().getSampleSize$();
}if (this.photometricInterpretation != 5 || this.bitsPerSample[0] != 1 && this.bitsPerSample[0] != 2  && this.bitsPerSample[0] != 4  ) {
for (var b=0; b < numBands; b++) {
if (destBitsPerSample[this.destinationBands[b]] != this.bitsPerSample[this.sourceBands[b]]) {
this.adjustBitDepths=true;
break;
}}
}if (this.adjustBitDepths) {
if (this.isFirstBitDepthTable || this.planar != this.planarCache   || !C$.areIntArraysEqual$IA$IA(destBitsPerSample, this.destBitsPerSampleCache)  || !C$.areIntArraysEqual$IA$IA(this.sourceBands, this.sourceBandsCache)  || !C$.areIntArraysEqual$IA$IA(this.bitsPerSample, this.bitsPerSampleCache)  || !C$.areIntArraysEqual$IA$IA(this.destinationBands, this.destinationBandsCache) ) {
this.isFirstBitDepthTable=false;
this.planarCache=this.planar;
this.destBitsPerSampleCache=destBitsPerSample.clone$();
this.sourceBandsCache=this.sourceBands == null  ? null : this.sourceBands.clone$();
this.bitsPerSampleCache=this.bitsPerSample == null  ? null : this.bitsPerSample.clone$();
this.destinationBandsCache=this.destinationBands == null  ? null : this.destinationBands.clone$();
this.bitDepthScale=Clazz.array(Integer.TYPE, [numBands, null]);
for (var b=0; b < numBands; b++) {
var maxInSample=(1 << this.bitsPerSample[this.sourceBands[b]]) - 1;
var halfMaxInSample=(maxInSample/2|0);
var maxOutSample=(1 << destBitsPerSample[this.destinationBands[b]]) - 1;
this.bitDepthScale[b]=Clazz.array(Integer.TYPE, [maxInSample + 1]);
for (var s=0; s <= maxInSample; s++) {
this.bitDepthScale[b][s]=((s * maxOutSample + halfMaxInSample)/maxInSample|0);
}
}
}} else {
this.bitDepthScale=null;
}var sourceBandsNormal=false;
var destinationBandsNormal=false;
if (numBands == this.samplesPerPixel) {
sourceBandsNormal=true;
destinationBandsNormal=true;
for (var i=0; i < numBands; i++) {
if (this.sourceBands[i] != i) {
sourceBandsNormal=false;
}if (this.destinationBands[i] != i) {
destinationBandsNormal=false;
}}
}this.isBilevel=$I$(12).isBinary$java_awt_image_SampleModel(this.image.getRaster$().getSampleModel$());
this.isContiguous=this.isBilevel ? true : $I$(12).imageIsContiguous$java_awt_image_RenderedImage(this.image);
this.isImageSimple=(this.colorConverter == null ) && (this.subsampleX == 1) && (this.subsampleY == 1) && (this.srcWidth == this.dstWidth) && (this.srcHeight == this.dstHeight) && ((this.dstMinX + this.dstWidth) <= this.image.getWidth$()) && ((this.dstMinY + this.dstHeight) <= this.image.getHeight$()) && sourceBandsNormal && destinationBandsNormal && !this.adjustBitDepths  ;
});

Clazz.newMeth(C$, 'decode$', function () {
var byteData=null;
var shortData=null;
var intData=null;
var floatData=null;
var dstOffset=0;
var pixelBitStride=1;
var scanlineStride=0;
this.rawImage=null;
if (this.isImageSimple) {
if (this.isBilevel) {
this.rawImage=this.image;
} else if (this.isContiguous) {
this.rawImage=this.image.getSubimage$I$I$I$I(this.dstMinX, this.dstMinY, this.dstWidth, this.dstHeight);
}}var isDirectCopy=this.rawImage != null ;
if (this.rawImage == null ) {
this.rawImage=this.createRawImage$();
if (this.rawImage == null ) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Couldn\'t create image buffer!"]);
}}var ras=this.rawImage.getRaster$();
if (this.isBilevel) {
var rect=this.isImageSimple ? Clazz.new_($I$(13,1).c$$I$I$I$I,[this.dstMinX, this.dstMinY, this.dstWidth, this.dstHeight]) : ras.getBounds$();
byteData=$I$(12).getPackedBinaryData$java_awt_image_Raster$java_awt_Rectangle(ras, rect);
dstOffset=0;
pixelBitStride=1;
scanlineStride=((rect.width + 7)/8|0);
} else {
var sm=ras.getSampleModel$();
var db=ras.getDataBuffer$();
var isSupportedType=false;
if (Clazz.instanceOf(sm, "java.awt.image.ComponentSampleModel")) {
var csm=sm;
dstOffset=csm.getOffset$I$I(-ras.getSampleModelTranslateX$(), -ras.getSampleModelTranslateY$());
scanlineStride=csm.getScanlineStride$();
if (Clazz.instanceOf(db, "java.awt.image.DataBufferByte")) {
var dbb=db;
byteData=dbb.getData$();
pixelBitStride=csm.getPixelStride$() * 8;
isSupportedType=true;
} else if (Clazz.instanceOf(db, "java.awt.image.DataBufferUShort")) {
var dbus=db;
shortData=dbus.getData$();
pixelBitStride=csm.getPixelStride$() * 16;
isSupportedType=true;
} else if (Clazz.instanceOf(db, "java.awt.image.DataBufferShort")) {
var dbs=db;
shortData=dbs.getData$();
pixelBitStride=csm.getPixelStride$() * 16;
isSupportedType=true;
} else if (Clazz.instanceOf(db, "java.awt.image.DataBufferInt")) {
var dbi=db;
intData=dbi.getData$();
pixelBitStride=csm.getPixelStride$() * 32;
isSupportedType=true;
} else if (Clazz.instanceOf(db, "java.awt.image.DataBufferFloat")) {
var dbf=db;
floatData=dbf.getData$();
pixelBitStride=csm.getPixelStride$() * 32;
isSupportedType=true;
}} else if (Clazz.instanceOf(sm, "java.awt.image.MultiPixelPackedSampleModel")) {
var mppsm=sm;
dstOffset=mppsm.getOffset$I$I(-ras.getSampleModelTranslateX$(), -ras.getSampleModelTranslateY$());
pixelBitStride=mppsm.getPixelBitStride$();
scanlineStride=mppsm.getScanlineStride$();
if (Clazz.instanceOf(db, "java.awt.image.DataBufferByte")) {
var dbb=db;
byteData=dbb.getData$();
isSupportedType=true;
} else if (Clazz.instanceOf(db, "java.awt.image.DataBufferUShort")) {
var dbus=db;
shortData=dbus.getData$();
isSupportedType=true;
} else if (Clazz.instanceOf(db, "java.awt.image.DataBufferInt")) {
var dbi=db;
intData=dbi.getData$();
isSupportedType=true;
}} else if (Clazz.instanceOf(sm, "java.awt.image.SinglePixelPackedSampleModel")) {
var sppsm=sm;
dstOffset=sppsm.getOffset$I$I(-ras.getSampleModelTranslateX$(), -ras.getSampleModelTranslateY$());
scanlineStride=sppsm.getScanlineStride$();
if (Clazz.instanceOf(db, "java.awt.image.DataBufferByte")) {
var dbb=db;
byteData=dbb.getData$();
pixelBitStride=8;
isSupportedType=true;
} else if (Clazz.instanceOf(db, "java.awt.image.DataBufferUShort")) {
var dbus=db;
shortData=dbus.getData$();
pixelBitStride=16;
isSupportedType=true;
} else if (Clazz.instanceOf(db, "java.awt.image.DataBufferInt")) {
var dbi=db;
intData=dbi.getData$();
pixelBitStride=32;
isSupportedType=true;
}}if (!isSupportedType) {
throw Clazz.new_(Clazz.load('javax.imageio.IIOException').c$$S,["Unsupported raw image type: SampleModel = " + sm + "; DataBuffer = " + db ]);
}}if (this.isBilevel) {
this.decodeRaw$BA$I$I$I(byteData, dstOffset, pixelBitStride, scanlineStride);
} else {
var sm=ras.getSampleModel$();
if (C$.isDataBufferBitContiguous$java_awt_image_SampleModel(sm)) {
if (byteData != null ) {
if (false) {
System.out.println$S("Decoding bytes directly");
}this.decodeRaw$BA$I$I$I(byteData, dstOffset, pixelBitStride, scanlineStride);
} else if (floatData != null ) {
if (false) {
System.out.println$S("Decoding floats directly");
}this.decodeRaw$FA$I$I$I(floatData, dstOffset, pixelBitStride, scanlineStride);
} else {
if (shortData != null ) {
if (C$.areSampleSizesEqual$java_awt_image_SampleModel(sm) && sm.getSampleSize$I(0) == 16 ) {
if (false) {
System.out.println$S("Decoding shorts directly");
}this.decodeRaw$HA$I$I$I(shortData, dstOffset, pixelBitStride, scanlineStride);
} else {
if (false) {
System.out.println$S("Decoding bytes->shorts");
}var bpp=C$.getBitsPerPixel$java_awt_image_SampleModel(sm);
var bytesPerRow=((bpp * this.srcWidth + 7)/8|0);
var buf=Clazz.array(Byte.TYPE, [bytesPerRow * this.srcHeight]);
this.decodeRaw$BA$I$I$I(buf, 0, bpp, bytesPerRow);
C$.reformatData$BA$I$I$HA$IA$I$I(buf, bytesPerRow, this.srcHeight, shortData, null, dstOffset, scanlineStride);
}} else if (intData != null ) {
if (C$.areSampleSizesEqual$java_awt_image_SampleModel(sm) && sm.getSampleSize$I(0) == 32 ) {
if (false) {
System.out.println$S("Decoding ints directly");
}this.decodeRaw$IA$I$I$I(intData, dstOffset, pixelBitStride, scanlineStride);
} else {
if (false) {
System.out.println$S("Decoding bytes->ints");
}var bpp=C$.getBitsPerPixel$java_awt_image_SampleModel(sm);
var bytesPerRow=((bpp * this.srcWidth + 7)/8|0);
var buf=Clazz.array(Byte.TYPE, [bytesPerRow * this.srcHeight]);
this.decodeRaw$BA$I$I$I(buf, 0, bpp, bytesPerRow);
C$.reformatData$BA$I$I$HA$IA$I$I(buf, bytesPerRow, this.srcHeight, null, intData, dstOffset, scanlineStride);
}}}} else {
if (false) {
System.out.println$S("Decoding discontiguous data");
}var bpp=C$.getBitsPerPixel$java_awt_image_SampleModel(sm);
var bytesPerRow=((bpp * this.srcWidth + 7)/8|0);
var buf=Clazz.array(Byte.TYPE, [bytesPerRow * this.srcHeight]);
this.decodeRaw$BA$I$I$I(buf, 0, bpp, bytesPerRow);
C$.reformatDiscontiguousData$BA$I$I$I$java_awt_image_WritableRaster(buf, bytesPerRow, this.srcWidth, this.srcHeight, ras);
}}if (this.colorConverter != null ) {
var rgb=Clazz.array(Float.TYPE, [3]);
if (byteData != null ) {
for (var j=0; j < this.dstHeight; j++) {
var idx=dstOffset;
for (var i=0; i < this.dstWidth; i++) {
var x0=(byteData[idx] & 255);
var x1=(byteData[idx + 1] & 255);
var x2=(byteData[idx + 2] & 255);
this.colorConverter.toRGB$F$F$F$FA(x0, x1, x2, rgb);
byteData[idx]=(((rgb[0])|0)|0);
byteData[idx + 1]=(((rgb[1])|0)|0);
byteData[idx + 2]=(((rgb[2])|0)|0);
idx+=3;
}
dstOffset+=scanlineStride;
}
} else if (shortData != null ) {
if (this.sampleFormat[0] == 2) {
for (var j=0; j < this.dstHeight; j++) {
var idx=dstOffset;
for (var i=0; i < this.dstWidth; i++) {
var x0=shortData[idx];
var x1=shortData[idx + 1];
var x2=shortData[idx + 2];
this.colorConverter.toRGB$F$F$F$FA(x0, x1, x2, rgb);
shortData[idx]=((rgb[0])|0);
shortData[idx + 1]=((rgb[1])|0);
shortData[idx + 2]=((rgb[2])|0);
idx+=3;
}
dstOffset+=scanlineStride;
}
} else {
for (var j=0; j < this.dstHeight; j++) {
var idx=dstOffset;
for (var i=0; i < this.dstWidth; i++) {
var x0=(shortData[idx] & 65535);
var x1=(shortData[idx + 1] & 65535);
var x2=(shortData[idx + 2] & 65535);
this.colorConverter.toRGB$F$F$F$FA(x0, x1, x2, rgb);
shortData[idx]=((rgb[0])|0);
shortData[idx + 1]=((rgb[1])|0);
shortData[idx + 2]=((rgb[2])|0);
idx+=3;
}
dstOffset+=scanlineStride;
}
}} else if (intData != null ) {
for (var j=0; j < this.dstHeight; j++) {
var idx=dstOffset;
for (var i=0; i < this.dstWidth; i++) {
var x0=intData[idx];
var x1=intData[idx + 1];
var x2=intData[idx + 2];
this.colorConverter.toRGB$F$F$F$FA(x0, x1, x2, rgb);
intData[idx]=((rgb[0])|0);
intData[idx + 1]=((rgb[1])|0);
intData[idx + 2]=((rgb[2])|0);
idx+=3;
}
dstOffset+=scanlineStride;
}
} else if (floatData != null ) {
for (var j=0; j < this.dstHeight; j++) {
var idx=dstOffset;
for (var i=0; i < this.dstWidth; i++) {
var x0=floatData[idx];
var x1=floatData[idx + 1];
var x2=floatData[idx + 2];
this.colorConverter.toRGB$F$F$F$FA(x0, x1, x2, rgb);
floatData[idx]=rgb[0];
floatData[idx + 1]=rgb[1];
floatData[idx + 2]=rgb[2];
idx+=3;
}
dstOffset+=scanlineStride;
}
}}if (this.photometricInterpretation == 0) {
if (byteData != null ) {
var bytesPerRow=((this.srcWidth * pixelBitStride + 7)/8|0);
for (var y=0; y < this.srcHeight; y++) {
var offset=dstOffset + y * scanlineStride;
for (var i=0; i < bytesPerRow; i++) {
byteData[$k$=offset + i]=(byteData[$k$]^(255)|0);
}
}
} else if (shortData != null ) {
var shortsPerRow=((this.srcWidth * pixelBitStride + 15)/16|0);
if (this.sampleFormat[0] == 2) {
for (var y=0; y < this.srcHeight; y++) {
var offset=dstOffset + y * scanlineStride;
for (var i=0; i < shortsPerRow; i++) {
var shortOffset=offset + i;
shortData[shortOffset]=((32767 - shortData[shortOffset])|0);
}
}
} else {
for (var y=0; y < this.srcHeight; y++) {
var offset=dstOffset + y * scanlineStride;
for (var i=0; i < shortsPerRow; i++) {
shortData[$k$=offset + i]=(shortData[$k$]^(65535)|0);
}
}
}} else if (intData != null ) {
var intsPerRow=((this.srcWidth * pixelBitStride + 15)/16|0);
for (var y=0; y < this.srcHeight; y++) {
var offset=dstOffset + y * scanlineStride;
for (var i=0; i < intsPerRow; i++) {
var intOffset=offset + i;
intData[intOffset]=2147483647 - intData[intOffset];
}
}
} else if (floatData != null ) {
var floatsPerRow=((this.srcWidth * pixelBitStride + 15)/16|0);
for (var y=0; y < this.srcHeight; y++) {
var offset=dstOffset + y * scanlineStride;
for (var i=0; i < floatsPerRow; i++) {
var floatOffset=offset + i;
floatData[floatOffset]=1.0 - floatData[floatOffset];
}
}
}}if (this.isBilevel) {
var rect=this.isImageSimple ? Clazz.new_($I$(13,1).c$$I$I$I$I,[this.dstMinX, this.dstMinY, this.dstWidth, this.dstHeight]) : ras.getBounds$();
$I$(12).setPackedBinaryData$BA$java_awt_image_WritableRaster$java_awt_Rectangle(byteData, ras, rect);
}if (isDirectCopy) {
return;
}var src=this.rawImage.getRaster$();
var srcChild=src.createChild$I$I$I$I$I$I$IA(0, 0, this.srcWidth, this.srcHeight, this.srcMinX, this.srcMinY, this.planar ? null : this.sourceBands);
var dst=this.image.getRaster$();
var dstChild=dst.createWritableChild$I$I$I$I$I$I$IA(this.dstMinX, this.dstMinY, this.dstWidth, this.dstHeight, this.dstMinX, this.dstMinY, this.destinationBands);
if (this.subsampleX == 1 && this.subsampleY == 1  && !this.adjustBitDepths ) {
srcChild=srcChild.createChild$I$I$I$I$I$I$IA(this.activeSrcMinX, this.activeSrcMinY, this.activeSrcWidth, this.activeSrcHeight, this.dstMinX, this.dstMinY, null);
dstChild.setRect$java_awt_image_Raster(srcChild);
} else if (this.subsampleX == 1 && !this.adjustBitDepths ) {
var sy=this.activeSrcMinY;
var dy=this.dstMinY;
while (sy < this.srcMinY + this.srcHeight){
var srcRow=srcChild.createChild$I$I$I$I$I$I$IA(this.activeSrcMinX, sy, this.activeSrcWidth, 1, this.dstMinX, dy, null);
dstChild.setRect$java_awt_image_Raster(srcRow);
sy+=this.subsampleY;
++dy;
}
} else {
var p=srcChild.getPixel$I$I$IA(this.srcMinX, this.srcMinY, null);
var numBands=p.length;
var sy=this.activeSrcMinY;
var dy=this.dstMinY;
while (sy < this.activeSrcMinY + this.activeSrcHeight){
var sx=this.activeSrcMinX;
var dx=this.dstMinX;
while (sx < this.activeSrcMinX + this.activeSrcWidth){
srcChild.getPixel$I$I$IA(sx, sy, p);
if (this.adjustBitDepths) {
for (var band=0; band < numBands; band++) {
p[band]=this.bitDepthScale[band][p[band]];
}
}dstChild.setPixel$I$I$IA(dx, dy, p);
sx+=this.subsampleX;
++dx;
}
sy+=this.subsampleY;
++dy;
}
}});
var $s$ = new Int16Array(1);
var $k$;

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
