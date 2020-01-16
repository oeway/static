(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.raw"),p$1={},I$=[[0,'io.scif.media.imageioimpl.common.ImageUtil','java.awt.Rectangle','io.scif.media.imageioimpl.plugins.raw.RawImageReader','java.awt.Point','io.scif.media.imageioimpl.plugins.raw.I18N','java.awt.image.Raster','java.awt.image.DataBuffer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RawRenderedImage", null, 'io.scif.media.imageioimpl.common.SimpleRenderedImage');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.iis=null;
this.param=null;
this.destinationBands=null;
this.sourceBands=null;
this.noTransform=true;
}, 1);

C$.$fields$=[['Z',['noTransform'],'I',['imageIndex','maxXTile','maxYTile','scaleX','scaleY','xOffset','yOffset','nComp','originalNumXTiles'],'L',['position','tileDataSize'],'O',['originalSampleModel','java.awt.image.SampleModel','currentTile','java.awt.image.Raster','currentTileGrid','java.awt.Point','iis','io.scif.media.imageio.stream.RawImageInputStream','reader','io.scif.media.imageioimpl.plugins.raw.RawImageReader','param','javax.imageio.ImageReadParam','destinationRegion','java.awt.Rectangle','+originalRegion','sourceOrigin','java.awt.Point','originalDimension','java.awt.Dimension','destinationBands','int[]','+sourceBands','rasForATile','java.awt.image.WritableRaster','destImage','java.awt.image.BufferedImage']]]

Clazz.newMeth(C$, 'c$$io_scif_media_imageio_stream_RawImageInputStream$io_scif_media_imageioimpl_plugins_raw_RawImageReader$javax_imageio_ImageReadParam$I', function (iis, reader, param, imageIndex) {
Clazz.super_(C$, this);
this.iis=iis;
this.reader=reader;
this.param=param;
this.imageIndex=imageIndex;
this.position=iis.getImageOffset$I(imageIndex);
this.originalDimension=iis.getImageDimension$I(imageIndex);
var type=iis.getImageType$();
this.sampleModel=this.originalSampleModel=type.getSampleModel$();
this.colorModel=type.getColorModel$();
this.sourceBands=(param == null ) ? null : param.getSourceBands$();
if (this.sourceBands == null ) {
this.nComp=this.originalSampleModel.getNumBands$();
this.sourceBands=Clazz.array(Integer.TYPE, [this.nComp]);
for (var i=0; i < this.nComp; i++) this.sourceBands[i]=i;

} else {
this.sampleModel=this.originalSampleModel.createSubsetSampleModel$IA(this.sourceBands);
this.colorModel=$I$(1).createColorModel$java_awt_color_ColorSpace$java_awt_image_SampleModel(null, this.sampleModel);
}this.nComp=this.sourceBands.length;
this.destinationBands=(param == null ) ? null : param.getDestinationBands$();
if (this.destinationBands == null ) {
this.destinationBands=Clazz.array(Integer.TYPE, [this.nComp]);
for (var i=0; i < this.nComp; i++) this.destinationBands[i]=i;

}var dim=iis.getImageDimension$I(imageIndex);
this.width=dim.width;
this.height=dim.height;
var sourceRegion=Clazz.new_($I$(2,1).c$$I$I$I$I,[0, 0, this.width, this.height]);
this.originalRegion=sourceRegion.clone$();
this.destinationRegion=sourceRegion.clone$();
if (param != null ) {
$I$(3).computeRegionsWrapper$javax_imageio_ImageReadParam$I$I$java_awt_image_BufferedImage$java_awt_Rectangle$java_awt_Rectangle(param, this.width, this.height, param.getDestination$(), sourceRegion, this.destinationRegion);
this.scaleX=param.getSourceXSubsampling$();
this.scaleY=param.getSourceYSubsampling$();
this.xOffset=param.getSubsamplingXOffset$();
this.yOffset=param.getSubsamplingYOffset$();
}this.sourceOrigin=Clazz.new_($I$(4,1).c$$I$I,[sourceRegion.x, sourceRegion.y]);
if (!this.destinationRegion.equals$O(sourceRegion)) this.noTransform=false;
this.tileDataSize=$I$(1).getTileSize$java_awt_image_SampleModel(this.originalSampleModel);
this.tileWidth=this.originalSampleModel.getWidth$();
this.tileHeight=this.originalSampleModel.getHeight$();
this.tileGridXOffset=this.destinationRegion.x;
this.tileGridYOffset=this.destinationRegion.y;
this.originalNumXTiles=this.getNumXTiles$();
this.width=this.destinationRegion.width;
this.height=this.destinationRegion.height;
this.minX=this.destinationRegion.x;
this.minY=this.destinationRegion.y;
this.sampleModel=this.sampleModel.createCompatibleSampleModel$I$I(this.tileWidth, this.tileHeight);
this.maxXTile=(this.originalDimension.width/this.tileWidth|0);
this.maxYTile=(this.originalDimension.height/this.tileHeight|0);
}, 1);

Clazz.newMeth(C$, 'getTile$I$I', function (tileX, tileY) {
if (this.currentTile != null  && this.currentTileGrid.x == tileX  && this.currentTileGrid.y == tileY ) return this.currentTile;
if (tileX >= this.getNumXTiles$() || tileY >= this.getNumYTiles$() ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(5).getString$S("RawRenderedImage0")]);
try {
this.iis.seek$J(this.position + (tileY * this.originalNumXTiles + tileX) * this.tileDataSize);
var x=this.tileXToX$I(tileX);
var y=this.tileYToY$I(tileY);
this.currentTile=$I$(6).createWritableRaster$java_awt_image_SampleModel$java_awt_Point(this.sampleModel, Clazz.new_($I$(4,1).c$$I$I,[x, y]));
if (this.noTransform) {
switch (this.sampleModel.getDataType$()) {
case 0:
var buf=(this.currentTile.getDataBuffer$()).getBankData$();
for (var i=0; i < buf.length; i++) this.iis.readFully$BA$I$I(buf[i], 0, buf[i].length);

break;
case 2:
var sbuf=(this.currentTile.getDataBuffer$()).getBankData$();
for (var i=0; i < sbuf.length; i++) this.iis.readFully$HA$I$I(sbuf[i], 0, sbuf[i].length);

break;
case 1:
var usbuf=(this.currentTile.getDataBuffer$()).getBankData$();
for (var i=0; i < usbuf.length; i++) this.iis.readFully$HA$I$I(usbuf[i], 0, usbuf[i].length);

break;
case 3:
var ibuf=(this.currentTile.getDataBuffer$()).getBankData$();
for (var i=0; i < ibuf.length; i++) this.iis.readFully$IA$I$I(ibuf[i], 0, ibuf[i].length);

break;
case 4:
var fbuf=(this.currentTile.getDataBuffer$()).getBankData$();
for (var i=0; i < fbuf.length; i++) this.iis.readFully$FA$I$I(fbuf[i], 0, fbuf[i].length);

break;
case 5:
var dbuf=(this.currentTile.getDataBuffer$()).getBankData$();
for (var i=0; i < dbuf.length; i++) this.iis.readFully$DA$I$I(dbuf[i], 0, dbuf[i].length);

break;
}
} else {
this.currentTile=p$1.readSubsampledRaster$java_awt_image_WritableRaster.apply(this, [this.currentTile]);
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
} else {
throw e;
}
}
if (this.currentTileGrid == null ) this.currentTileGrid=Clazz.new_($I$(4,1).c$$I$I,[tileX, tileY]);
 else {
this.currentTileGrid.x=tileX;
this.currentTileGrid.y=tileY;
}return this.currentTile;
});

Clazz.newMeth(C$, 'readAsRaster$java_awt_image_WritableRaster', function (raster) {
p$1.readSubsampledRaster$java_awt_image_WritableRaster.apply(this, [raster]);
});

Clazz.newMeth(C$, 'readSubsampledRaster$java_awt_image_WritableRaster', function (raster) {
if (raster == null ) raster=$I$(6).createWritableRaster$java_awt_image_SampleModel$java_awt_Point(this.sampleModel.createCompatibleSampleModel$I$I(this.destinationRegion.x + this.destinationRegion.width, this.destinationRegion.y + this.destinationRegion.height), Clazz.new_($I$(4,1).c$$I$I,[this.destinationRegion.x, this.destinationRegion.y]));
var numBands=this.sourceBands.length;
var dataType=this.sampleModel.getDataType$();
var sampleSizeBit=$I$(7).getDataTypeSize$I(dataType);
var sampleSizeByte=((sampleSizeBit + 7)/8|0);
var destRect=raster.getBounds$().intersection$java_awt_Rectangle(this.destinationRegion);
var offx=this.destinationRegion.x;
var offy=this.destinationRegion.y;
var sourceSX=(destRect.x - offx) * this.scaleX + this.sourceOrigin.x;
var sourceSY=(destRect.y - offy) * this.scaleY + this.sourceOrigin.y;
var sourceEX=(destRect.width - 1) * this.scaleX + sourceSX;
var sourceEY=(destRect.height - 1) * this.scaleY + sourceSY;
var startXTile=(sourceSX/this.tileWidth|0);
var startYTile=(sourceSY/this.tileHeight|0);
var endXTile=(sourceEX/this.tileWidth|0);
var endYTile=(sourceEY/this.tileHeight|0);
startXTile=p$1.clip$I$I$I.apply(this, [startXTile, 0, this.maxXTile]);
startYTile=p$1.clip$I$I$I.apply(this, [startYTile, 0, this.maxYTile]);
endXTile=p$1.clip$I$I$I.apply(this, [endXTile, 0, this.maxXTile]);
endYTile=p$1.clip$I$I$I.apply(this, [endYTile, 0, this.maxYTile]);
var totalXTiles=this.getNumXTiles$();
var totalYTiles=this.getNumYTiles$();
var totalTiles=totalXTiles * totalYTiles;
var pixbuf=null;
var spixbuf=null;
var ipixbuf=null;
var fpixbuf=null;
var dpixbuf=null;
var singleBank=true;
var pixelStride=0;
var scanlineStride=0;
var bandStride=0;
var bandOffsets=null;
var bankIndices=null;
if (Clazz.instanceOf(this.originalSampleModel, "java.awt.image.ComponentSampleModel")) {
var csm=this.originalSampleModel;
bankIndices=csm.getBankIndices$();
var maxBank=0;
for (var i=0; i < bankIndices.length; i++) if (maxBank > bankIndices[i]) maxBank=bankIndices[i];

if (maxBank > 0) singleBank=false;
pixelStride=csm.getPixelStride$();
scanlineStride=csm.getScanlineStride$();
bandOffsets=csm.getBandOffsets$();
for (var i=0; i < bandOffsets.length; i++) if (bandStride < bandOffsets[i]) bandStride=bandOffsets[i];

} else if (Clazz.instanceOf(this.originalSampleModel, "java.awt.image.MultiPixelPackedSampleModel")) {
scanlineStride=(this.originalSampleModel).getScanlineStride$();
} else if (Clazz.instanceOf(this.originalSampleModel, "java.awt.image.SinglePixelPackedSampleModel")) {
pixelStride=1;
scanlineStride=(this.originalSampleModel).getScanlineStride$();
}var destPixbuf=null;
var destSPixbuf=null;
var destIPixbuf=null;
var destFPixbuf=null;
var destDPixbuf=null;
var destBandOffsets=null;
var destPixelStride=0;
var destScanlineStride=0;
var destSX=0;
if (Clazz.instanceOf(raster.getSampleModel$(), "java.awt.image.ComponentSampleModel")) {
var csm=raster.getSampleModel$();
bankIndices=csm.getBankIndices$();
destBandOffsets=csm.getBandOffsets$();
destPixelStride=csm.getPixelStride$();
destScanlineStride=csm.getScanlineStride$();
destSX=csm.getOffset$I$I(raster.getMinX$() - raster.getSampleModelTranslateX$(), raster.getMinY$() - raster.getSampleModelTranslateY$()) - destBandOffsets[0];
switch (dataType) {
case 0:
destPixbuf=(raster.getDataBuffer$()).getData$();
break;
case 2:
destSPixbuf=(raster.getDataBuffer$()).getData$();
break;
case 1:
destSPixbuf=(raster.getDataBuffer$()).getData$();
break;
case 3:
destIPixbuf=(raster.getDataBuffer$()).getData$();
break;
case 4:
destFPixbuf=(raster.getDataBuffer$()).getData$();
break;
case 5:
destDPixbuf=(raster.getDataBuffer$()).getData$();
break;
}
} else if (Clazz.instanceOf(raster.getSampleModel$(), "java.awt.image.SinglePixelPackedSampleModel")) {
numBands=1;
bankIndices=Clazz.array(Integer.TYPE, -1, [0]);
destBandOffsets=Clazz.array(Integer.TYPE, [numBands]);
for (var i=0; i < numBands; i++) destBandOffsets[i]=0;

destPixelStride=1;
destScanlineStride=(raster.getSampleModel$()).getScanlineStride$();
}for (var y=startYTile; y <= endYTile; y++) {
if (this.reader.getAbortRequest$()) break;
for (var x=startXTile; x <= endXTile; x++) {
if (this.reader.getAbortRequest$()) break;
var tilePosition=this.position + (y * this.originalNumXTiles + x) * this.tileDataSize;
this.iis.seek$J(tilePosition);
var percentage=((x - startXTile + y * totalXTiles)/totalXTiles|0);
var startX=x * this.tileWidth;
var startY=y * this.tileHeight;
var cTileHeight=this.tileHeight;
var cTileWidth=this.tileWidth;
if (startY + cTileHeight >= this.originalDimension.height) cTileHeight=this.originalDimension.height - startY;
if (startX + cTileWidth >= this.originalDimension.width) cTileWidth=this.originalDimension.width - startX;
var tx=startX;
var ty=startY;
if (sourceSX > startX) {
cTileWidth+=startX - sourceSX;
tx=sourceSX;
startX=sourceSX;
}if (sourceSY > startY) {
cTileHeight+=startY - sourceSY;
ty=sourceSY;
startY=sourceSY;
}if (sourceEX < startX + cTileWidth - 1) {
cTileWidth+=sourceEX - startX - cTileWidth  + 1;
}if (sourceEY < startY + cTileHeight - 1) {
cTileHeight+=sourceEY - startY - cTileHeight  + 1;
}var x1=((startX + this.scaleX - 1 - this.sourceOrigin.x)/this.scaleX|0);
var x2=((startX + this.scaleX - 1 + cTileWidth - this.sourceOrigin.x)/this.scaleX|0);
var lineLength=x2 - x1;
x2=(x2 - 1) * this.scaleX + this.sourceOrigin.x;
var y1=((startY + this.scaleY - 1 - this.sourceOrigin.y)/this.scaleY|0);
startX=x1 * this.scaleX + this.sourceOrigin.x;
startY=y1 * this.scaleY + this.sourceOrigin.y;
x1+=offx;
y1+=offy;
tx-=x * this.tileWidth;
ty-=y * this.tileHeight;
if (Clazz.instanceOf(this.sampleModel, "java.awt.image.MultiPixelPackedSampleModel")) {
var mppsm=this.originalSampleModel;
this.iis.skipBytes$I(mppsm.getOffset$I$I(tx, ty) * sampleSizeByte);
var readBytes=(mppsm.getOffset$I$I(x2, 0) - mppsm.getOffset$I$I(startX, 0) + 1) * sampleSizeByte;
var skipLength=(scanlineStride * this.scaleY - readBytes) * sampleSizeByte;
readBytes*=sampleSizeByte;
if (pixbuf == null  || pixbuf.length < readBytes ) pixbuf=Clazz.array(Byte.TYPE, [readBytes]);
var bitoff=mppsm.getBitOffset$I(tx);
for (var l=0, m=y1; l < cTileHeight; l+=this.scaleY, m++) {
if (this.reader.getAbortRequest$()) break;
this.iis.readFully$BA$I$I(pixbuf, 0, readBytes);
if (this.scaleX == 1) {
if (bitoff != 0) {
var mask1=(255 << bitoff) & 255;
var mask2=~mask1 & 255;
var shift=8 - bitoff;
var n=0;
for (; n < readBytes - 1; n++) pixbuf[n]=(((((pixbuf[n] & mask2) << shift) | (pixbuf[n + 1] & mask1) >> bitoff)|0)|0);

pixbuf[n]=((((pixbuf[n] & mask2) << shift)|0)|0);
}} else {
var bit=7;
var pos=0;
var mask=128;
for (var n=0, n1=startX & 7; n < lineLength; n++, n1+=this.scaleX) {
pixbuf[pos]=((((pixbuf[pos] & ~(1 << bit)) | (((pixbuf[n1 >> 3] >> (7 - (n1 & 7))) & 1) << bit))|0)|0);
bit--;
if (bit == -1) {
bit=7;
pos++;
}}
}$I$(1).setPackedBinaryData$BA$java_awt_image_WritableRaster$java_awt_Rectangle(pixbuf, raster, Clazz.new_($I$(2,1).c$$I$I$I$I,[x1, m, lineLength, 1]));
this.iis.skipBytes$I(skipLength);
if (this.destImage != null ) this.reader.processImageUpdateWrapper$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(this.destImage, x1, m, cTileWidth, 1, 1, 1, this.destinationBands);
this.reader.processImageProgressWrapper$F(percentage + (l - startY + 1.0) / cTileHeight / totalTiles );
}
} else {
var readLength;
var skipLength;
if (pixelStride < scanlineStride) {
readLength=cTileWidth * pixelStride;
skipLength=(scanlineStride * this.scaleY - readLength) * sampleSizeByte;
} else {
readLength=cTileHeight * scanlineStride;
skipLength=(pixelStride * this.scaleX - readLength) * sampleSizeByte;
}switch (this.sampleModel.getDataType$()) {
case 0:
if (pixbuf == null  || pixbuf.length < readLength ) pixbuf=Clazz.array(Byte.TYPE, [readLength]);
break;
case 2:
case 1:
if (spixbuf == null  || spixbuf.length < readLength ) spixbuf=Clazz.array(Short.TYPE, [readLength]);
break;
case 3:
if (ipixbuf == null  || ipixbuf.length < readLength ) ipixbuf=Clazz.array(Integer.TYPE, [readLength]);
break;
case 4:
if (fpixbuf == null  || fpixbuf.length < readLength ) fpixbuf=Clazz.array(Float.TYPE, [readLength]);
break;
case 5:
if (dpixbuf == null  || dpixbuf.length < readLength ) dpixbuf=Clazz.array(Double.TYPE, [readLength]);
break;
}
if (Clazz.instanceOf(this.sampleModel, "java.awt.image.PixelInterleavedSampleModel")) {
this.iis.skipBytes$I((tx * pixelStride + ty * scanlineStride) * sampleSizeByte);
var outerFirst;
var outerSecond;
var outerStep;
var outerBound;
var innerStep;
var innerStep1;
var outerStep1;
if (pixelStride < scanlineStride) {
outerFirst=0;
outerSecond=y1;
outerStep=this.scaleY;
outerBound=cTileHeight;
innerStep=this.scaleX * pixelStride;
innerStep1=destPixelStride;
outerStep1=destScanlineStride;
} else {
outerFirst=0;
outerSecond=x1;
outerStep=this.scaleX;
outerBound=cTileWidth;
innerStep=this.scaleY * scanlineStride;
innerStep1=destScanlineStride;
outerStep1=destPixelStride;
}var destPos=destSX + (y1 - raster.getSampleModelTranslateY$()) * destScanlineStride + (x1 - raster.getSampleModelTranslateX$()) * destPixelStride;
for (var l=outerFirst, m=outerSecond; l < outerBound; l+=outerStep, m++) {
if (this.reader.getAbortRequest$()) break;
switch (dataType) {
case 0:
if (innerStep == numBands && innerStep1 == numBands ) this.iis.readFully$BA$I$I(destPixbuf, destPos, readLength);
 else this.iis.readFully$BA$I$I(pixbuf, 0, readLength);
break;
case 2:
case 1:
if (innerStep == numBands && innerStep1 == numBands ) {
this.iis.readFully$HA$I$I(destSPixbuf, destPos, readLength);
} else this.iis.readFully$HA$I$I(spixbuf, 0, readLength);
break;
case 3:
if (innerStep == numBands && innerStep1 == numBands ) this.iis.readFully$IA$I$I(destIPixbuf, destPos, readLength);
 else this.iis.readFully$IA$I$I(ipixbuf, 0, readLength);
break;
case 4:
if (innerStep == numBands && innerStep1 == numBands ) this.iis.readFully$FA$I$I(destFPixbuf, destPos, readLength);
 else this.iis.readFully$FA$I$I(fpixbuf, 0, readLength);
break;
case 5:
if (innerStep == numBands && innerStep1 == numBands ) this.iis.readFully$DA$I$I(destDPixbuf, destPos, readLength);
 else this.iis.readFully$DA$I$I(dpixbuf, 0, readLength);
break;
}
if (innerStep != numBands || innerStep1 != numBands ) for (var b=0; b < numBands; b++) {
var destBandOffset=destBandOffsets[this.destinationBands[b]];
destPos+=destBandOffset;
var sourceBandOffset=bandOffsets[this.sourceBands[b]];
switch (dataType) {
case 0:
for (var m1=0, n=destPos; m1 < readLength; m1+=innerStep, n+=innerStep1) {
destPixbuf[n]=(pixbuf[m1 + sourceBandOffset]|0);
}
break;
case 2:
case 1:
for (var m1=0, n=destPos; m1 < readLength; m1+=innerStep, n+=innerStep1) {
destSPixbuf[n]=spixbuf[m1 + sourceBandOffset];
}
break;
case 3:
for (var m1=0, n=destPos; m1 < readLength; m1+=innerStep, n+=innerStep1) {
destIPixbuf[n]=ipixbuf[m1 + sourceBandOffset];
}
break;
case 4:
for (var m1=0, n=destPos; m1 < readLength; m1+=innerStep, n+=innerStep1) {
destFPixbuf[n]=fpixbuf[m1 + sourceBandOffset];
}
break;
case 5:
for (var m1=0, n=destPos; m1 < readLength; m1+=innerStep, n+=innerStep1) {
destDPixbuf[n]=dpixbuf[m1 + sourceBandOffset];
}
break;
}
destPos-=destBandOffset;
}
this.iis.skipBytes$I(skipLength);
destPos+=outerStep1;
if (this.destImage != null ) if (pixelStride < scanlineStride) this.reader.processImageUpdateWrapper$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(this.destImage, x1, m, outerBound, 1, 1, 1, this.destinationBands);
 else this.reader.processImageUpdateWrapper$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(this.destImage, m, y1, 1, outerBound, 1, 1, this.destinationBands);
this.reader.processImageProgressWrapper$F(percentage + (l + 1.0) / outerBound / totalTiles );
}
} else if (Clazz.instanceOf(this.sampleModel, "java.awt.image.BandedSampleModel") || Clazz.instanceOf(this.sampleModel, "java.awt.image.SinglePixelPackedSampleModel") || bandStride == 0  ) {
var isBanded=Clazz.instanceOf(this.sampleModel, "java.awt.image.BandedSampleModel");
var bandSize=($I$(1).getBandSize$java_awt_image_SampleModel(this.originalSampleModel)|0);
for (var b=0; b < numBands; b++) {
this.iis.seek$J(tilePosition + bandSize * this.sourceBands[b] * sampleSizeByte );
var destBandOffset=destBandOffsets[this.destinationBands[b]];
this.iis.skipBytes$I((ty * scanlineStride + tx * pixelStride) * sampleSizeByte);
var outerFirst;
var outerSecond;
var outerStep;
var outerBound;
var innerStep;
var innerStep1;
var outerStep1;
if (pixelStride < scanlineStride) {
outerFirst=0;
outerSecond=y1;
outerStep=this.scaleY;
outerBound=cTileHeight;
innerStep=this.scaleX * pixelStride;
innerStep1=destPixelStride;
outerStep1=destScanlineStride;
} else {
outerFirst=0;
outerSecond=x1;
outerStep=this.scaleX;
outerBound=cTileWidth;
innerStep=this.scaleY * scanlineStride;
innerStep1=destScanlineStride;
outerStep1=destPixelStride;
}var destPos=destSX + (y1 - raster.getSampleModelTranslateY$()) * destScanlineStride + (x1 - raster.getSampleModelTranslateX$()) * destPixelStride + destBandOffset;
var bank=bankIndices[this.destinationBands[b]];
switch (dataType) {
case 0:
destPixbuf=(raster.getDataBuffer$()).getData$I(bank);
break;
case 2:
destSPixbuf=(raster.getDataBuffer$()).getData$I(bank);
break;
case 1:
destSPixbuf=(raster.getDataBuffer$()).getData$I(bank);
break;
case 3:
destIPixbuf=(raster.getDataBuffer$()).getData$I(bank);
break;
case 4:
destFPixbuf=(raster.getDataBuffer$()).getData$I(bank);
break;
case 5:
destDPixbuf=(raster.getDataBuffer$()).getData$I(bank);
break;
}
for (var l=outerFirst, m=outerSecond; l < outerBound; l+=outerStep, m++) {
if (this.reader.getAbortRequest$()) break;
switch (dataType) {
case 0:
if (innerStep == 1 && innerStep1 == 1 ) {
this.iis.readFully$BA$I$I(destPixbuf, destPos, readLength);
} else {
this.iis.readFully$BA$I$I(pixbuf, 0, readLength);
for (var m1=0, n=destPos; m1 < readLength; m1+=innerStep, n+=innerStep1) {
destPixbuf[n]=(pixbuf[m1]|0);
}
}break;
case 2:
case 1:
if (innerStep == 1 && innerStep1 == 1 ) {
this.iis.readFully$HA$I$I(destSPixbuf, destPos, readLength);
} else {
this.iis.readFully$HA$I$I(spixbuf, 0, readLength);
for (var m1=0, n=destPos; m1 < readLength; m1+=innerStep, n+=innerStep1) {
destSPixbuf[n]=spixbuf[m1];
}
}break;
case 3:
if (innerStep == 1 && innerStep1 == 1 ) {
this.iis.readFully$IA$I$I(destIPixbuf, destPos, readLength);
} else {
this.iis.readFully$IA$I$I(ipixbuf, 0, readLength);
for (var m1=0, n=destPos; m1 < readLength; m1+=innerStep, n+=innerStep1) {
destIPixbuf[n]=ipixbuf[m1];
}
}break;
case 4:
if (innerStep == 1 && innerStep1 == 1 ) {
this.iis.readFully$FA$I$I(destFPixbuf, destPos, readLength);
} else {
this.iis.readFully$FA$I$I(fpixbuf, 0, readLength);
for (var m1=0, n=destPos; m1 < readLength; m1+=innerStep, n+=innerStep1) {
destFPixbuf[n]=fpixbuf[m1];
}
}break;
case 5:
if (innerStep == 1 && innerStep1 == 1 ) {
this.iis.readFully$DA$I$I(destDPixbuf, destPos, readLength);
} else {
this.iis.readFully$DA$I$I(dpixbuf, 0, readLength);
for (var m1=0, n=destPos; m1 < readLength; m1+=innerStep, n+=innerStep1) {
destDPixbuf[n]=dpixbuf[m1];
}
}break;
}
this.iis.skipBytes$I(skipLength);
destPos+=outerStep1;
if (this.destImage != null ) {
var destBands=Clazz.array(Integer.TYPE, -1, [this.destinationBands[b]]);
if (pixelStride < scanlineStride) this.reader.processImageUpdateWrapper$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(this.destImage, x1, m, outerBound, 1, 1, 1, destBands);
 else this.reader.processImageUpdateWrapper$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(this.destImage, m, y1, 1, outerBound, 1, 1, destBands);
}this.reader.processImageProgressWrapper$F((percentage + (l + 1.0) / outerBound / numBands / totalTiles ) * 100.0);
}
}
} else if (Clazz.instanceOf(this.sampleModel, "java.awt.image.ComponentSampleModel")) {
var bufferSize=(this.tileDataSize|0);
switch (this.sampleModel.getDataType$()) {
case 0:
if (pixbuf == null  || pixbuf.length < this.tileDataSize ) pixbuf=Clazz.array(Byte.TYPE, [(this.tileDataSize|0)]);
this.iis.readFully$BA$I$I(pixbuf, 0, (this.tileDataSize|0));
break;
case 2:
case 1:
bufferSize=(bufferSize/(2)|0);
if (spixbuf == null  || spixbuf.length < bufferSize ) spixbuf=Clazz.array(Short.TYPE, [bufferSize]);
this.iis.readFully$HA$I$I(spixbuf, 0, bufferSize);
break;
case 3:
bufferSize=(bufferSize/(4)|0);
if (ipixbuf == null  || ipixbuf.length < bufferSize ) ipixbuf=Clazz.array(Integer.TYPE, [bufferSize]);
this.iis.readFully$IA$I$I(ipixbuf, 0, bufferSize);
break;
case 4:
bufferSize=(bufferSize/(4)|0);
if (fpixbuf == null  || fpixbuf.length < bufferSize ) fpixbuf=Clazz.array(Float.TYPE, [bufferSize]);
this.iis.readFully$FA$I$I(fpixbuf, 0, bufferSize);
break;
case 5:
bufferSize=(bufferSize/(8)|0);
if (dpixbuf == null  || dpixbuf.length < bufferSize ) dpixbuf=Clazz.array(Double.TYPE, [bufferSize]);
this.iis.readFully$DA$I$I(dpixbuf, 0, bufferSize);
break;
}
for (var b=0; b < numBands; b++) {
var destBandOffset=destBandOffsets[this.destinationBands[b]];
var destPos=(raster.getSampleModel$()).getOffset$I$I$I(x1 - raster.getSampleModelTranslateX$(), y1 - raster.getSampleModelTranslateY$(), this.destinationBands[b]);
var bank=bankIndices[this.destinationBands[b]];
switch (dataType) {
case 0:
destPixbuf=(raster.getDataBuffer$()).getData$I(bank);
break;
case 2:
destSPixbuf=(raster.getDataBuffer$()).getData$I(bank);
break;
case 1:
destSPixbuf=(raster.getDataBuffer$()).getData$I(bank);
break;
case 3:
destIPixbuf=(raster.getDataBuffer$()).getData$I(bank);
break;
case 4:
destFPixbuf=(raster.getDataBuffer$()).getData$I(bank);
break;
case 5:
destDPixbuf=(raster.getDataBuffer$()).getData$I(bank);
break;
}
var srcPos=(this.originalSampleModel).getOffset$I$I$I(tx, ty, this.sourceBands[b]);
var skipX=this.scaleX * pixelStride;
;for (var l=0, m=y1; l < cTileHeight; l+=this.scaleY, m++) {
if (this.reader.getAbortRequest$()) break;
switch (dataType) {
case 0:
for (var n=0, m1=srcPos, m2=destPos; n < lineLength; n++, m1+=skipX, m2+=destPixelStride) destPixbuf[m2]=(pixbuf[m1]|0);

break;
case 2:
case 1:
for (var n=0, m1=srcPos, m2=destPos; n < lineLength; n++, m1+=skipX, m2+=destPixelStride) destSPixbuf[m2]=spixbuf[m1];

break;
case 3:
for (var n=0, m1=srcPos, m2=destPos; n < lineLength; n++, m1+=skipX, m2+=destPixelStride) destIPixbuf[m2]=ipixbuf[m1];

break;
case 4:
for (var n=0, m1=srcPos, m2=destPos; n < lineLength; n++, m1+=skipX, m2+=destPixelStride) destFPixbuf[m2]=fpixbuf[m1];

break;
case 5:
for (var n=0, m1=srcPos, m2=destPos; n < lineLength; n++, m1+=skipX, m2+=destPixelStride) destDPixbuf[m2]=dpixbuf[m1];

break;
}
destPos+=destScanlineStride;
srcPos+=scanlineStride * this.scaleY;
if (this.destImage != null ) {
var destBands=Clazz.array(Integer.TYPE, -1, [this.destinationBands[b]]);
this.reader.processImageUpdateWrapper$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(this.destImage, x1, m, cTileHeight, 1, 1, 1, destBands);
}this.reader.processImageProgressWrapper$F(percentage + (l + 1.0) / cTileHeight / numBands / totalTiles );
}
}
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(5).getString$S("RawRenderedImage1")]);
}}}
}
return raster;
}, p$1);

Clazz.newMeth(C$, 'setDestImage$java_awt_image_BufferedImage', function (image) {
this.destImage=image;
});

Clazz.newMeth(C$, 'clearDestImage$', function () {
this.destImage=null;
});

Clazz.newMeth(C$, 'getTileNum$I$I', function (x, y) {
var num=(y - this.getMinTileY$()) * this.getNumXTiles$() + x - this.getMinTileX$();
if (num < 0 || num >= this.getNumXTiles$() * this.getNumYTiles$() ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(5).getString$S("RawRenderedImage0")]);
return num;
}, p$1);

Clazz.newMeth(C$, 'clip$I$I$I', function (value, min, max) {
if (value < min) value=min;
if (value > max) value=max;
return value;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:19 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
