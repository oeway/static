(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),p$1={},I$=[[0,'java.awt.image.BufferedImage','java.io.ByteArrayInputStream','javax.imageio.stream.MemoryCacheImageInputStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFYCbCrDecompressor", null, 'io.scif.media.imageio.plugins.tiff.TIFFDecompressor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.LumaRed=0.299;
this.LumaGreen=0.587;
this.LumaBlue=0.114;
this.referenceBlackY=0.0;
this.referenceWhiteY=255.0;
this.referenceBlackCb=128.0;
this.referenceWhiteCb=255.0;
this.referenceBlackCr=128.0;
this.referenceWhiteCr=255.0;
this.codingRangeY=255.0;
this.iYTab=Clazz.array(Integer.TYPE, [256]);
this.iCbTab=Clazz.array(Integer.TYPE, [256]);
this.iCrTab=Clazz.array(Integer.TYPE, [256]);
this.iGYTab=Clazz.array(Integer.TYPE, [256]);
this.iGCbTab=Clazz.array(Integer.TYPE, [256]);
this.iGCrTab=Clazz.array(Integer.TYPE, [256]);
this.chromaSubsampleH=2;
this.chromaSubsampleV=2;
}, 1);

C$.$fields$=[['Z',['colorConvert'],'F',['LumaRed','LumaGreen','LumaBlue','referenceBlackY','referenceWhiteY','referenceBlackCb','referenceWhiteCb','referenceBlackCr','referenceWhiteCr','codingRangeY'],'I',['chromaSubsampleH','chromaSubsampleV'],'O',['iYTab','int[]','+iCbTab','+iCrTab','+iGYTab','+iGCbTab','+iGCrTab','decompressor','io.scif.media.imageio.plugins.tiff.TIFFDecompressor','tmpImage','java.awt.image.BufferedImage']]]

Clazz.newMeth(C$, 'c$$io_scif_media_imageio_plugins_tiff_TIFFDecompressor$Z', function (decompressor, colorConvert) {
Clazz.super_(C$, this);
this.decompressor=decompressor;
this.colorConvert=colorConvert;
}, 1);

Clazz.newMeth(C$, 'warning$S', function (message) {
if (Clazz.instanceOf(this.reader, "io.scif.media.imageioimpl.plugins.tiff.TIFFImageReader")) {
(this.reader).forwardWarningMessage$S(message);
}}, p$1);

Clazz.newMeth(C$, 'setReader$javax_imageio_ImageReader', function (reader) {
if (this.decompressor != null ) {
this.decompressor.setReader$javax_imageio_ImageReader(reader);
}C$.superclazz.prototype.setReader$javax_imageio_ImageReader.apply(this, [reader]);
});

Clazz.newMeth(C$, 'setMetadata$javax_imageio_metadata_IIOMetadata', function (metadata) {
if (this.decompressor != null ) {
this.decompressor.setMetadata$javax_imageio_metadata_IIOMetadata(metadata);
}C$.superclazz.prototype.setMetadata$javax_imageio_metadata_IIOMetadata.apply(this, [metadata]);
});

Clazz.newMeth(C$, 'setPhotometricInterpretation$I', function (photometricInterpretation) {
if (this.decompressor != null ) {
this.decompressor.setPhotometricInterpretation$I(photometricInterpretation);
}C$.superclazz.prototype.setPhotometricInterpretation$I.apply(this, [photometricInterpretation]);
});

Clazz.newMeth(C$, 'setCompression$I', function (compression) {
if (this.decompressor != null ) {
this.decompressor.setCompression$I(compression);
}C$.superclazz.prototype.setCompression$I.apply(this, [compression]);
});

Clazz.newMeth(C$, 'setPlanar$Z', function (planar) {
if (this.decompressor != null ) {
this.decompressor.setPlanar$Z(planar);
}C$.superclazz.prototype.setPlanar$Z.apply(this, [planar]);
});

Clazz.newMeth(C$, 'setSamplesPerPixel$I', function (samplesPerPixel) {
if (this.decompressor != null ) {
this.decompressor.setSamplesPerPixel$I(samplesPerPixel);
}C$.superclazz.prototype.setSamplesPerPixel$I.apply(this, [samplesPerPixel]);
});

Clazz.newMeth(C$, 'setBitsPerSample$IA', function (bitsPerSample) {
if (this.decompressor != null ) {
this.decompressor.setBitsPerSample$IA(bitsPerSample);
}C$.superclazz.prototype.setBitsPerSample$IA.apply(this, [bitsPerSample]);
});

Clazz.newMeth(C$, 'setSampleFormat$IA', function (sampleFormat) {
if (this.decompressor != null ) {
this.decompressor.setSampleFormat$IA(sampleFormat);
}C$.superclazz.prototype.setSampleFormat$IA.apply(this, [sampleFormat]);
});

Clazz.newMeth(C$, 'setExtraSamples$IA', function (extraSamples) {
if (this.decompressor != null ) {
this.decompressor.setExtraSamples$IA(extraSamples);
}C$.superclazz.prototype.setExtraSamples$IA.apply(this, [extraSamples]);
});

Clazz.newMeth(C$, 'setColorMap$CA', function (colorMap) {
if (this.decompressor != null ) {
this.decompressor.setColorMap$CA(colorMap);
}C$.superclazz.prototype.setColorMap$CA.apply(this, [colorMap]);
});

Clazz.newMeth(C$, 'setStream$javax_imageio_stream_ImageInputStream', function (stream) {
if (this.decompressor != null ) {
this.decompressor.setStream$javax_imageio_stream_ImageInputStream(stream);
} else {
C$.superclazz.prototype.setStream$javax_imageio_stream_ImageInputStream.apply(this, [stream]);
}});

Clazz.newMeth(C$, 'setOffset$J', function (offset) {
if (this.decompressor != null ) {
this.decompressor.setOffset$J(offset);
}C$.superclazz.prototype.setOffset$J.apply(this, [offset]);
});

Clazz.newMeth(C$, 'setByteCount$I', function (byteCount) {
if (this.decompressor != null ) {
this.decompressor.setByteCount$I(byteCount);
}C$.superclazz.prototype.setByteCount$I.apply(this, [byteCount]);
});

Clazz.newMeth(C$, 'setSrcMinX$I', function (srcMinX) {
if (this.decompressor != null ) {
this.decompressor.setSrcMinX$I(srcMinX);
}C$.superclazz.prototype.setSrcMinX$I.apply(this, [srcMinX]);
});

Clazz.newMeth(C$, 'setSrcMinY$I', function (srcMinY) {
if (this.decompressor != null ) {
this.decompressor.setSrcMinY$I(srcMinY);
}C$.superclazz.prototype.setSrcMinY$I.apply(this, [srcMinY]);
});

Clazz.newMeth(C$, 'setSrcWidth$I', function (srcWidth) {
if (this.decompressor != null ) {
this.decompressor.setSrcWidth$I(srcWidth);
}C$.superclazz.prototype.setSrcWidth$I.apply(this, [srcWidth]);
});

Clazz.newMeth(C$, 'setSrcHeight$I', function (srcHeight) {
if (this.decompressor != null ) {
this.decompressor.setSrcHeight$I(srcHeight);
}C$.superclazz.prototype.setSrcHeight$I.apply(this, [srcHeight]);
});

Clazz.newMeth(C$, 'setSourceXOffset$I', function (sourceXOffset) {
if (this.decompressor != null ) {
this.decompressor.setSourceXOffset$I(sourceXOffset);
}C$.superclazz.prototype.setSourceXOffset$I.apply(this, [sourceXOffset]);
});

Clazz.newMeth(C$, 'setDstXOffset$I', function (dstXOffset) {
if (this.decompressor != null ) {
this.decompressor.setDstXOffset$I(dstXOffset);
}C$.superclazz.prototype.setDstXOffset$I.apply(this, [dstXOffset]);
});

Clazz.newMeth(C$, 'setSourceYOffset$I', function (sourceYOffset) {
if (this.decompressor != null ) {
this.decompressor.setSourceYOffset$I(sourceYOffset);
}C$.superclazz.prototype.setSourceYOffset$I.apply(this, [sourceYOffset]);
});

Clazz.newMeth(C$, 'setDstYOffset$I', function (dstYOffset) {
if (this.decompressor != null ) {
this.decompressor.setDstYOffset$I(dstYOffset);
}C$.superclazz.prototype.setDstYOffset$I.apply(this, [dstYOffset]);
});

Clazz.newMeth(C$, 'setSourceBands$IA', function (sourceBands) {
if (this.decompressor != null ) {
this.decompressor.setSourceBands$IA(sourceBands);
}C$.superclazz.prototype.setSourceBands$IA.apply(this, [sourceBands]);
});

Clazz.newMeth(C$, 'setDestinationBands$IA', function (destinationBands) {
if (this.decompressor != null ) {
this.decompressor.setDestinationBands$IA(destinationBands);
}C$.superclazz.prototype.setDestinationBands$IA.apply(this, [destinationBands]);
});

Clazz.newMeth(C$, 'setImage$java_awt_image_BufferedImage', function (image) {
if (this.decompressor != null ) {
var cm=image.getColorModel$();
this.tmpImage=Clazz.new_($I$(1,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[cm, image.getRaster$().createCompatibleWritableRaster$I$I(1, 1), cm.isAlphaPremultiplied$(), null]);
this.decompressor.setImage$java_awt_image_BufferedImage(this.tmpImage);
}C$.superclazz.prototype.setImage$java_awt_image_BufferedImage.apply(this, [image]);
});

Clazz.newMeth(C$, 'setDstMinX$I', function (dstMinX) {
if (this.decompressor != null ) {
this.decompressor.setDstMinX$I(dstMinX);
}C$.superclazz.prototype.setDstMinX$I.apply(this, [dstMinX]);
});

Clazz.newMeth(C$, 'setDstMinY$I', function (dstMinY) {
if (this.decompressor != null ) {
this.decompressor.setDstMinY$I(dstMinY);
}C$.superclazz.prototype.setDstMinY$I.apply(this, [dstMinY]);
});

Clazz.newMeth(C$, 'setDstWidth$I', function (dstWidth) {
if (this.decompressor != null ) {
this.decompressor.setDstWidth$I(dstWidth);
}C$.superclazz.prototype.setDstWidth$I.apply(this, [dstWidth]);
});

Clazz.newMeth(C$, 'setDstHeight$I', function (dstHeight) {
if (this.decompressor != null ) {
this.decompressor.setDstHeight$I(dstHeight);
}C$.superclazz.prototype.setDstHeight$I.apply(this, [dstHeight]);
});

Clazz.newMeth(C$, 'setActiveSrcMinX$I', function (activeSrcMinX) {
if (this.decompressor != null ) {
this.decompressor.setActiveSrcMinX$I(activeSrcMinX);
}C$.superclazz.prototype.setActiveSrcMinX$I.apply(this, [activeSrcMinX]);
});

Clazz.newMeth(C$, 'setActiveSrcMinY$I', function (activeSrcMinY) {
if (this.decompressor != null ) {
this.decompressor.setActiveSrcMinY$I(activeSrcMinY);
}C$.superclazz.prototype.setActiveSrcMinY$I.apply(this, [activeSrcMinY]);
});

Clazz.newMeth(C$, 'setActiveSrcWidth$I', function (activeSrcWidth) {
if (this.decompressor != null ) {
this.decompressor.setActiveSrcWidth$I(activeSrcWidth);
}C$.superclazz.prototype.setActiveSrcWidth$I.apply(this, [activeSrcWidth]);
});

Clazz.newMeth(C$, 'setActiveSrcHeight$I', function (activeSrcHeight) {
if (this.decompressor != null ) {
this.decompressor.setActiveSrcHeight$I(activeSrcHeight);
}C$.superclazz.prototype.setActiveSrcHeight$I.apply(this, [activeSrcHeight]);
});

Clazz.newMeth(C$, 'clamp$I', function (f) {
if (f < 0) {
return $b$[0] = 0, $b$[0];
} else if (f > 16711680) {
return $b$[0] = -1, $b$[0];
} else {
return $b$[0] = ((f >> 16)|0), $b$[0];
}}, p$1);

Clazz.newMeth(C$, 'beginDecoding$', function () {
if (this.decompressor != null ) {
this.decompressor.beginDecoding$();
}var tmetadata=this.metadata;
var f;
f=tmetadata.getTIFFField$I(530);
if (f != null ) {
if (f.getCount$() == 2) {
this.chromaSubsampleH=f.getAsInt$I(0);
this.chromaSubsampleV=f.getAsInt$I(1);
if (this.chromaSubsampleH != 1 && this.chromaSubsampleH != 2  && this.chromaSubsampleH != 4 ) {
p$1.warning$S.apply(this, ["Y_CB_CR_SUBSAMPLING[0] has illegal value " + this.chromaSubsampleH + " (should be 1, 2, or 4), setting to 1" ]);
this.chromaSubsampleH=1;
}if (this.chromaSubsampleV != 1 && this.chromaSubsampleV != 2  && this.chromaSubsampleV != 4 ) {
p$1.warning$S.apply(this, ["Y_CB_CR_SUBSAMPLING[1] has illegal value " + this.chromaSubsampleV + " (should be 1, 2, or 4), setting to 1" ]);
this.chromaSubsampleV=1;
}} else {
p$1.warning$S.apply(this, ["Y_CB_CR_SUBSAMPLING count != 2, assuming no subsampling"]);
}}f=tmetadata.getTIFFField$I(529);
if (f != null ) {
if (f.getCount$() == 3) {
this.LumaRed=f.getAsFloat$I(0);
this.LumaGreen=f.getAsFloat$I(1);
this.LumaBlue=f.getAsFloat$I(2);
} else {
p$1.warning$S.apply(this, ["Y_CB_CR_COEFFICIENTS count != 3, assuming default values for CCIR 601-1"]);
}}f=tmetadata.getTIFFField$I(532);
if (f != null ) {
if (f.getCount$() == 6) {
this.referenceBlackY=f.getAsFloat$I(0);
this.referenceWhiteY=f.getAsFloat$I(1);
this.referenceBlackCb=f.getAsFloat$I(2);
this.referenceWhiteCb=f.getAsFloat$I(3);
this.referenceBlackCr=f.getAsFloat$I(4);
this.referenceWhiteCr=f.getAsFloat$I(5);
} else {
p$1.warning$S.apply(this, ["REFERENCE_BLACK_WHITE count != 6, ignoring it"]);
}} else {
p$1.warning$S.apply(this, ["REFERENCE_BLACK_WHITE not found, assuming 0-255/128-255/128-255"]);
}this.colorConvert=true;
var BCb=(2.0 - 2.0 * this.LumaBlue);
var RCr=(2.0 - 2.0 * this.LumaRed);
var GY=(1.0 - this.LumaBlue - this.LumaRed ) / this.LumaGreen;
var GCb=2.0 * this.LumaBlue * (this.LumaBlue - 1.0)  / this.LumaGreen;
var GCr=2.0 * this.LumaRed * (this.LumaRed - 1.0)  / this.LumaGreen;
for (var i=0; i < 256; i++) {
var fY=(i - this.referenceBlackY) * this.codingRangeY / (this.referenceWhiteY - this.referenceBlackY);
var fCb=(i - this.referenceBlackCb) * 127.0 / (this.referenceWhiteCb - this.referenceBlackCb);
var fCr=(i - this.referenceBlackCr) * 127.0 / (this.referenceWhiteCr - this.referenceBlackCr);
this.iYTab[i]=((fY * 65536.0)|0);
this.iCbTab[i]=((fCb * BCb * 65536.0 )|0);
this.iCrTab[i]=((fCr * RCr * 65536.0 )|0);
this.iGYTab[i]=((fY * GY * 65536.0 )|0);
this.iGCbTab[i]=((fCb * GCb * 65536.0 )|0);
this.iGCrTab[i]=((fCr * GCr * 65536.0 )|0);
}
});

Clazz.newMeth(C$, 'decodeRaw$BA$I$I$I', function (buf, dstOffset, bitsPerPixel, scanlineStride) {
var rows=Clazz.array(Byte.TYPE, [3 * this.srcWidth * this.chromaSubsampleV ]);
var elementsPerPacket=this.chromaSubsampleH * this.chromaSubsampleV + 2;
var packet=Clazz.array(Byte.TYPE, [elementsPerPacket]);
if (this.decompressor != null ) {
var bytesPerRow=3 * this.srcWidth;
var tmpBuf=Clazz.array(Byte.TYPE, [bytesPerRow * this.srcHeight]);
this.decompressor.decodeRaw$BA$I$I$I(tmpBuf, dstOffset, bitsPerPixel, bytesPerRow);
var byteStream=Clazz.new_($I$(2,1).c$$BA,[tmpBuf]);
this.stream=Clazz.new_($I$(3,1).c$$java_io_InputStream,[byteStream]);
} else {
this.stream.seek$J(this.offset);
}for (var y=this.srcMinY; y < this.srcMinY + this.srcHeight; y+=this.chromaSubsampleV) {
for (var x=this.srcMinX; x < this.srcMinX + this.srcWidth; x+=this.chromaSubsampleH) {
try {
this.stream.readFully$BA(packet);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.EOFException")){
System.out.println$S("e = " + e);
return;
} else {
throw e;
}
}
var Cb=($b$[0] = packet[elementsPerPacket - 2], $b$[0]);
var Cr=($b$[0] = packet[elementsPerPacket - 1], $b$[0]);
var iCb=0;
var iCr=0;
var iGCb=0;
var iGCr=0;
if (this.colorConvert) {
var Cbp=Cb & 255;
var Crp=Cr & 255;
iCb=this.iCbTab[Cbp];
iCr=this.iCrTab[Crp];
iGCb=this.iGCbTab[Cbp];
iGCr=this.iGCrTab[Crp];
}var yIndex=0;
for (var v=0; v < this.chromaSubsampleV; v++) {
var idx=dstOffset + 3 * (x - this.srcMinX) + scanlineStride * (y - this.srcMinY + v);
if (y + v >= this.srcMinY + this.srcHeight) {
break;
}for (var h=0; h < this.chromaSubsampleH; h++) {
if (x + h >= this.srcMinX + this.srcWidth) {
break;
}var Y=($b$[0] = packet[yIndex++], $b$[0]);
if (this.colorConvert) {
var Yp=Y & 255;
var iY=this.iYTab[Yp];
var iGY=this.iGYTab[Yp];
var iR=iY + iCr;
var iG=iGY + iGCb + iGCr ;
var iB=iY + iCb;
var r=($b$[0] = p$1.clamp$I.apply(this, [iR]), $b$[0]);
var g=($b$[0] = p$1.clamp$I.apply(this, [iG]), $b$[0]);
var b=($b$[0] = p$1.clamp$I.apply(this, [iB]), $b$[0]);
buf[idx]=(r|0);
buf[idx + 1]=(g|0);
buf[idx + 2]=(b|0);
} else {
buf[idx]=(Y|0);
buf[idx + 1]=(Cb|0);
buf[idx + 2]=(Cr|0);
}idx+=3;
}
}
}
}
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
