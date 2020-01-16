(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.raw"),p$1={},I$=[[0,'io.scif.media.imageioimpl.plugins.raw.I18N','io.scif.media.imageioimpl.plugins.raw.RawImageWriteParam','java.awt.Rectangle','io.scif.media.imageioimpl.common.ImageUtil','java.awt.image.Raster','java.awt.Point']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RawImageWriter", null, 'javax.imageio.ImageWriter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.stream=null;
this.sourceBands=null;
this.destinationRegion=null;
this.noTransform=true;
this.noSubband=true;
this.writeRaster=false;
this.optimal=false;
}, 1);

C$.$fields$=[['Z',['noTransform','noSubband','writeRaster','optimal'],'I',['imageIndex','tileWidth','tileHeight','tileXOffset','tileYOffset','scaleX','scaleY','xOffset','yOffset','numBands','pxlStride','lineStride','bandStride'],'O',['stream','javax.imageio.stream.ImageOutputStream','sourceBands','int[]','input','java.awt.image.RenderedImage','inputRaster','java.awt.image.Raster','destinationRegion','java.awt.Rectangle','sampleModel','java.awt.image.SampleModel']]]

Clazz.newMeth(C$, 'c$$javax_imageio_spi_ImageWriterSpi', function (originator) {
;C$.superclazz.c$$javax_imageio_spi_ImageWriterSpi.apply(this,[originator]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setOutput$O', function (output) {
C$.superclazz.prototype.setOutput$O.apply(this, [output]);
if (output != null ) {
if (!(Clazz.instanceOf(output, "javax.imageio.stream.ImageOutputStream"))) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(1).getString$S("RawImageWriter0")]);
this.stream=output;
} else this.stream=null;
});

Clazz.newMeth(C$, 'getDefaultStreamMetadata$javax_imageio_ImageWriteParam', function (param) {
return null;
});

Clazz.newMeth(C$, 'getDefaultImageMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam', function (imageType, param) {
return null;
});

Clazz.newMeth(C$, 'convertStreamMetadata$javax_imageio_metadata_IIOMetadata$javax_imageio_ImageWriteParam', function (inData, param) {
return null;
});

Clazz.newMeth(C$, 'convertImageMetadata$javax_imageio_metadata_IIOMetadata$javax_imageio_ImageTypeSpecifier$javax_imageio_ImageWriteParam', function (metadata, type, param) {
return null;
});

Clazz.newMeth(C$, 'canWriteRasters$', function () {
return true;
});

Clazz.newMeth(C$, 'getDefaultWriteParam$', function () {
return Clazz.new_($I$(2,1).c$$java_util_Locale,[this.getLocale$()]);
});

Clazz.newMeth(C$, 'write$javax_imageio_metadata_IIOMetadata$javax_imageio_IIOImage$javax_imageio_ImageWriteParam', function (streamMetadata, image, param) {
this.clearAbortRequest$();
this.processImageStarted$I(this.imageIndex++);
if (param == null ) param=this.getDefaultWriteParam$();
this.writeRaster=image.hasRaster$();
var sourceRegion=param.getSourceRegion$();
var colorModel=null;
var originalRegion=null;
if (this.writeRaster) {
this.inputRaster=image.getRaster$();
this.sampleModel=this.inputRaster.getSampleModel$();
originalRegion=this.inputRaster.getBounds$();
} else {
this.input=image.getRenderedImage$();
this.sampleModel=this.input.getSampleModel$();
originalRegion=Clazz.new_($I$(3,1).c$$I$I$I$I,[this.input.getMinX$(), this.input.getMinY$(), this.input.getWidth$(), this.input.getHeight$()]);
colorModel=this.input.getColorModel$();
}if (sourceRegion == null ) sourceRegion=originalRegion.clone$();
 else sourceRegion=sourceRegion.intersection$java_awt_Rectangle(originalRegion);
if (sourceRegion.isEmpty$()) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,[$I$(1).getString$S("RawImageWriter1")]);
this.scaleX=param.getSourceXSubsampling$();
this.scaleY=param.getSourceYSubsampling$();
this.xOffset=param.getSubsamplingXOffset$();
this.yOffset=param.getSubsamplingYOffset$();
sourceRegion.translate$I$I(this.xOffset, this.yOffset);
sourceRegion.width-=this.xOffset;
sourceRegion.height-=this.yOffset;
this.xOffset=sourceRegion.x % this.scaleX;
this.yOffset=sourceRegion.y % this.scaleY;
var minX=(sourceRegion.x/this.scaleX|0);
var minY=(sourceRegion.y/this.scaleY|0);
var w=((sourceRegion.width + this.scaleX - 1)/this.scaleX|0);
var h=((sourceRegion.height + this.scaleY - 1)/this.scaleY|0);
this.destinationRegion=Clazz.new_($I$(3,1).c$$I$I$I$I,[minX, minY, w, h]);
this.noTransform=this.destinationRegion.equals$O(originalRegion);
this.tileHeight=this.sampleModel.getHeight$();
this.tileWidth=this.sampleModel.getWidth$();
if (this.noTransform) {
if (this.writeRaster) {
this.tileXOffset=this.inputRaster.getMinX$();
this.tileYOffset=this.inputRaster.getMinY$();
} else {
this.tileXOffset=this.input.getTileGridXOffset$();
this.tileYOffset=this.input.getTileGridYOffset$();
}} else {
this.tileXOffset=this.destinationRegion.x;
this.tileYOffset=this.destinationRegion.y;
}this.sourceBands=param.getSourceBands$();
var noSubband=true;
this.numBands=this.sampleModel.getNumBands$();
if (this.sourceBands != null ) {
this.sampleModel=this.sampleModel.createSubsetSampleModel$IA(this.sourceBands);
colorModel=null;
noSubband=false;
this.numBands=this.sampleModel.getNumBands$();
} else {
this.sourceBands=Clazz.array(Integer.TYPE, [this.numBands]);
for (var i=0; i < this.numBands; i++) this.sourceBands[i]=i;

}if (Clazz.instanceOf(this.sampleModel, "java.awt.image.ComponentSampleModel")) {
var csm=this.sampleModel;
var bandOffsets=csm.getBandOffsets$();
this.bandStride=bandOffsets[0];
for (var i=1; i < bandOffsets.length; i++) if (this.bandStride > bandOffsets[i]) this.bandStride=bandOffsets[i];

var bankIndices=csm.getBankIndices$();
var numBank=bankIndices[0];
for (var i=1; i < bankIndices.length; i++) if (numBank > bankIndices[i]) numBank=bankIndices[i];

this.pxlStride=csm.getPixelStride$();
this.lineStride=csm.getScanlineStride$();
this.optimal=this.bandStride == 0 || (this.pxlStride < this.lineStride && this.pxlStride == this.numBands )  || (this.lineStride < this.pxlStride && this.lineStride == this.numBands )  || (this.pxlStride < this.lineStride && this.lineStride == this.numBands * csm.getWidth$() )  || (this.lineStride < this.pxlStride && this.pxlStride == this.numBands * csm.getHeight$() )  || Clazz.instanceOf(csm, "java.awt.image.BandedSampleModel") ;
} else if (Clazz.instanceOf(this.sampleModel, "java.awt.image.SinglePixelPackedSampleModel") || Clazz.instanceOf(this.sampleModel, "java.awt.image.MultiPixelPackedSampleModel") ) {
this.optimal=true;
}var numXTiles=p$1.getMaxTileX.apply(this, []) - p$1.getMinTileX.apply(this, []) + 1;
var totalTiles=numXTiles * (p$1.getMaxTileY.apply(this, []) - p$1.getMinTileY.apply(this, []) + 1);
for (var y=p$1.getMinTileY.apply(this, []); y <= p$1.getMaxTileY.apply(this, []); y++) {
for (var x=p$1.getMinTileX.apply(this, []); x <= p$1.getMaxTileX.apply(this, []); x++) {
p$1.writeRaster$java_awt_image_Raster.apply(this, [p$1.getTile$I$I.apply(this, [x, y])]);
var percentage=(x + y * numXTiles + 1.0) / totalTiles;
this.processImageProgress$F(percentage * 100.0);
}
}
this.stream.flush$();
if (this.abortRequested$()) this.processWriteAborted$();
 else this.processImageComplete$();
});

Clazz.newMeth(C$, 'getWidth$', function () {
return this.destinationRegion.width;
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.destinationRegion.height;
});

Clazz.newMeth(C$, 'writeRaster$java_awt_image_Raster', function (raster) {
var numBank=0;
var bandStride=0;
var bankIndices=null;
var bandOffsets=null;
var bandSize=0;
var numBand=this.sampleModel.getNumBands$();
var type=this.sampleModel.getDataType$();
if (Clazz.instanceOf(this.sampleModel, "java.awt.image.ComponentSampleModel")) {
var csm=this.sampleModel;
bandOffsets=csm.getBandOffsets$();
for (var i=0; i < numBand; i++) if (bandStride < bandOffsets[i]) bandStride=bandOffsets[i];

bankIndices=csm.getBankIndices$();
for (var i=0; i < numBand; i++) if (numBank < bankIndices[i]) numBank=bankIndices[i];

bandSize=($I$(4).getBandSize$java_awt_image_SampleModel(this.sampleModel)|0);
}var bdata=null;
var sdata=null;
var idata=null;
var fdata=null;
var ddata=null;
if (raster.getParent$() != null  && !this.sampleModel.equals$O(raster.getParent$().getSampleModel$()) ) {
var ras=$I$(5).createWritableRaster$java_awt_image_SampleModel$java_awt_Point(this.sampleModel, Clazz.new_($I$(6,1).c$$I$I,[raster.getMinX$(), raster.getMinY$()]));
ras.setRect$java_awt_image_Raster(raster);
raster=ras;
}var data=raster.getDataBuffer$();
if (this.optimal) {
if (numBank > 0) {
for (var i=0; i < this.numBands; i++) {
var bank=bankIndices[this.sourceBands[i]];
switch (type) {
case 0:
bdata=(data).getData$I(bank);
this.stream.write$BA$I$I(bdata, 0, bdata.length);
break;
case 2:
sdata=(data).getData$I(bank);
this.stream.writeShorts$HA$I$I(sdata, 0, sdata.length);
break;
case 1:
sdata=(data).getData$I(bank);
this.stream.writeShorts$HA$I$I(sdata, 0, sdata.length);
break;
case 3:
idata=(data).getData$I(bank);
this.stream.writeInts$IA$I$I(idata, 0, idata.length);
break;
case 4:
fdata=(data).getData$I(bank);
this.stream.writeFloats$FA$I$I(fdata, 0, fdata.length);
break;
case 5:
ddata=(data).getData$I(bank);
this.stream.writeDoubles$DA$I$I(ddata, 0, ddata.length);
break;
}
}
} else {
switch (type) {
case 0:
bdata=(data).getData$();
break;
case 2:
sdata=(data).getData$();
break;
case 1:
sdata=(data).getData$();
break;
case 3:
idata=(data).getData$();
break;
case 4:
fdata=(data).getData$();
break;
case 5:
ddata=(data).getData$();
break;
}
if (!this.noSubband && bandStride >= raster.getWidth$() * raster.getHeight$() * (this.numBands - 1)  ) {
for (var i=0; i < this.numBands; i++) {
var offset=bandOffsets[this.sourceBands[i]];
switch (type) {
case 0:
this.stream.write$BA$I$I(bdata, offset, bandSize);
break;
case 2:
case 1:
this.stream.writeShorts$HA$I$I(sdata, offset, bandSize);
break;
case 3:
this.stream.writeInts$IA$I$I(idata, offset, bandSize);
break;
case 4:
this.stream.writeFloats$FA$I$I(fdata, offset, bandSize);
break;
case 5:
this.stream.writeDoubles$DA$I$I(ddata, offset, bandSize);
break;
}
}
} else {
switch (type) {
case 0:
this.stream.write$BA$I$I(bdata, 0, bdata.length);
break;
case 2:
case 1:
this.stream.writeShorts$HA$I$I(sdata, 0, sdata.length);
break;
case 3:
this.stream.writeInts$IA$I$I(idata, 0, idata.length);
break;
case 4:
this.stream.writeFloats$FA$I$I(fdata, 0, fdata.length);
break;
case 5:
this.stream.writeDoubles$DA$I$I(ddata, 0, ddata.length);
break;
}
}}} else if (Clazz.instanceOf(this.sampleModel, "java.awt.image.ComponentSampleModel")) {
switch (type) {
case 0:
bdata=(data).getData$();
break;
case 2:
sdata=(data).getData$();
break;
case 1:
sdata=(data).getData$();
break;
case 3:
idata=(data).getData$();
break;
case 4:
fdata=(data).getData$();
break;
case 5:
ddata=(data).getData$();
break;
}
var csm=this.sampleModel;
var offset=csm.getOffset$I$I(raster.getMinX$() - raster.getSampleModelTranslateX$(), raster.getMinY$() - raster.getSampleModelTranslateY$()) - bandOffsets[0];
var srcSkip=this.pxlStride;
var copyLength=1;
var innerStep=this.pxlStride;
var width=raster.getWidth$();
var height=raster.getHeight$();
var innerBound=width;
var outerBound=height;
if (srcSkip < this.lineStride) {
if (bandStride > this.pxlStride) copyLength=width;
srcSkip=this.lineStride;
} else {
if (bandStride > this.lineStride) copyLength=height;
innerStep=this.lineStride;
innerBound=height;
outerBound=width;
}var writeLength=innerBound * this.numBands;
var destBBuf=null;
var destSBuf=null;
var destIBuf=null;
var destFBuf=null;
var destDBuf=null;
var srcBuf=null;
var dstBuf=null;
switch (type) {
case 0:
srcBuf=bdata;
dstBuf=destBBuf=Clazz.array(Byte.TYPE, [writeLength]);
break;
case 2:
case 1:
srcBuf=sdata;
dstBuf=destSBuf=Clazz.array(Short.TYPE, [writeLength]);
break;
case 3:
srcBuf=idata;
dstBuf=destIBuf=Clazz.array(Integer.TYPE, [writeLength]);
break;
case 4:
srcBuf=fdata;
dstBuf=destFBuf=Clazz.array(Float.TYPE, [writeLength]);
break;
case 5:
srcBuf=ddata;
dstBuf=destDBuf=Clazz.array(Double.TYPE, [writeLength]);
break;
}
if (copyLength > 1) {
for (var i=0; i < outerBound; i++) {
for (var b=0; b < this.numBands; b++) {
var bandOffset=bandOffsets[b];
System.arraycopy$O$I$O$I$I(srcBuf, offset + bandOffset, dstBuf, b * innerBound, innerBound);
}
switch (type) {
case 0:
this.stream.write$BA$I$I(dstBuf, 0, writeLength);
break;
case 2:
case 1:
this.stream.writeShorts$HA$I$I(dstBuf, 0, writeLength);
break;
case 3:
this.stream.writeInts$IA$I$I(dstBuf, 0, writeLength);
break;
case 4:
this.stream.writeFloats$FA$I$I(dstBuf, 0, writeLength);
break;
case 5:
this.stream.writeDoubles$DA$I$I(dstBuf, 0, writeLength);
break;
}
offset+=srcSkip;
}
} else {
switch (type) {
case 0:
{
for (var i=0; i < outerBound; i++) {
for (var b=0, k=0; b < this.numBands; b++) {
var bandOffset=bandOffsets[b];
for (var j=0, m=offset; j < innerBound; j++, m+=innerStep) destBBuf[k++]=(bdata[m + bandOffset]|0);

}
this.stream.write$BA$I$I(destBBuf, 0, writeLength);
offset+=srcSkip;
}
}break;
case 2:
case 1:
{
for (var i=0; i < outerBound; i++) {
for (var b=0, k=0; b < this.numBands; b++) {
var bandOffset=bandOffsets[b];
for (var j=0, m=offset; j < innerBound; j++, m+=innerStep) destSBuf[k++]=sdata[m + bandOffset];

}
this.stream.writeShorts$HA$I$I(destSBuf, 0, writeLength);
offset+=srcSkip;
}
}break;
case 3:
{
for (var i=0; i < outerBound; i++) {
for (var b=0, k=0; b < this.numBands; b++) {
var bandOffset=bandOffsets[b];
for (var j=0, m=offset; j < innerBound; j++, m+=innerStep) destIBuf[k++]=idata[m + bandOffset];

}
this.stream.writeInts$IA$I$I(destIBuf, 0, writeLength);
offset+=srcSkip;
}
}break;
case 4:
{
for (var i=0; i < outerBound; i++) {
for (var b=0, k=0; b < this.numBands; b++) {
var bandOffset=bandOffsets[b];
for (var j=0, m=offset; j < innerBound; j++, m+=innerStep) destFBuf[k++]=fdata[m + bandOffset];

}
this.stream.writeFloats$FA$I$I(destFBuf, 0, writeLength);
offset+=srcSkip;
}
}break;
case 5:
{
for (var i=0; i < outerBound; i++) {
for (var b=0, k=0; b < this.numBands; b++) {
var bandOffset=bandOffsets[b];
for (var j=0, m=offset; j < innerBound; j++, m+=innerStep) destDBuf[k++]=ddata[m + bandOffset];

}
this.stream.writeDoubles$DA$I$I(destDBuf, 0, writeLength);
offset+=srcSkip;
}
}break;
}
}}}, p$1);

Clazz.newMeth(C$, 'getTile$I$I', function (tileX, tileY) {
var sx=this.tileXOffset + tileX * this.tileWidth;
var sy=this.tileYOffset + tileY * this.tileHeight;
var bounds=Clazz.new_($I$(3,1).c$$I$I$I$I,[sx, sy, this.tileWidth, this.tileHeight]);
if (this.writeRaster) {
bounds=bounds.intersection$java_awt_Rectangle(this.destinationRegion);
if (this.noTransform) {
return this.inputRaster.createChild$I$I$I$I$I$I$IA(bounds.x, bounds.y, bounds.width, bounds.height, bounds.x, bounds.y, this.sourceBands);
}sx=bounds.x;
sy=bounds.y;
var ras=$I$(5).createWritableRaster$java_awt_image_SampleModel$java_awt_Point(this.sampleModel, Clazz.new_($I$(6,1).c$$I$I,[sx, sy]));
var x=p$1.mapToSourceX$I.apply(this, [sx]);
var y=p$1.mapToSourceY$I.apply(this, [sy]);
var minY=this.inputRaster.getMinY$();
var maxY=this.inputRaster.getMinY$() + this.inputRaster.getHeight$();
var cTileWidth=bounds.width;
var length=(cTileWidth - 1) * this.scaleX + 1;
for (var j=0; j < bounds.height; j++, sy++, y+=this.scaleY) {
if (y < minY || y >= maxY ) continue;
var source=this.inputRaster.createChild$I$I$I$I$I$I$IA(x, y, length, 1, x, y, null);
var tempX=sx;
for (var i=0, offset=x; i < cTileWidth; i++, tempX++, offset+=this.scaleX) {
for (var k=0; k < this.numBands; k++) {
var p=source.getSample$I$I$I(offset, y, this.sourceBands[k]);
ras.setSample$I$I$I$I(tempX, sy, k, p);
}
}
}
return ras;
} else {
if (this.noTransform) {
var ras=this.input.getTile$I$I(tileX, tileY);
if (this.destinationRegion.contains$java_awt_Rectangle(bounds) && this.noSubband ) return ras;
 else {
bounds=bounds.intersection$java_awt_Rectangle(this.destinationRegion);
return ras.createChild$I$I$I$I$I$I$IA(bounds.x, bounds.y, bounds.width, bounds.height, bounds.x, bounds.y, this.sourceBands);
}}bounds=bounds.intersection$java_awt_Rectangle(this.destinationRegion);
sx=bounds.x;
sy=bounds.y;
var ras=$I$(5).createWritableRaster$java_awt_image_SampleModel$java_awt_Point(this.sampleModel, Clazz.new_($I$(6,1).c$$I$I,[sx, sy]));
var x=p$1.mapToSourceX$I.apply(this, [sx]);
var y=p$1.mapToSourceY$I.apply(this, [sy]);
var minY=this.input.getMinY$();
var maxY=this.input.getMinY$() + this.input.getHeight$();
var cTileWidth=bounds.width;
var length=(cTileWidth - 1) * this.scaleX + 1;
for (var j=0; j < bounds.height; j++, sy++, y+=this.scaleY) {
if (y < minY || y >= maxY ) continue;
var source=this.input.getData$java_awt_Rectangle(Clazz.new_($I$(3,1).c$$I$I$I$I,[x, y, length, 1]));
var tempX=sx;
for (var i=0, offset=x; i < cTileWidth; i++, tempX++, offset+=this.scaleX) {
for (var k=0; k < this.numBands; k++) {
var p=source.getSample$I$I$I(offset, y, this.sourceBands[k]);
ras.setSample$I$I$I$I(tempX, sy, k, p);
}
}
}
return ras;
}}, p$1);

Clazz.newMeth(C$, 'mapToSourceX$I', function (x) {
return x * this.scaleX + this.xOffset;
}, p$1);

Clazz.newMeth(C$, 'mapToSourceY$I', function (y) {
return y * this.scaleY + this.yOffset;
}, p$1);

Clazz.newMeth(C$, 'getMinTileX', function () {
return C$.ToTile$I$I$I(this.destinationRegion.x, this.tileXOffset, this.tileWidth);
}, p$1);

Clazz.newMeth(C$, 'getMaxTileX', function () {
return C$.ToTile$I$I$I(this.destinationRegion.x + this.destinationRegion.width - 1, this.tileXOffset, this.tileWidth);
}, p$1);

Clazz.newMeth(C$, 'getMinTileY', function () {
return C$.ToTile$I$I$I(this.destinationRegion.y, this.tileYOffset, this.tileHeight);
}, p$1);

Clazz.newMeth(C$, 'getMaxTileY', function () {
return C$.ToTile$I$I$I(this.destinationRegion.y + this.destinationRegion.height - 1, this.tileYOffset, this.tileHeight);
}, p$1);

Clazz.newMeth(C$, 'ToTile$I$I$I', function (pos, tileOffset, tileSize) {
pos-=tileOffset;
if (pos < 0) {
pos+=1 - tileSize;
}return (pos/tileSize|0);
}, 1);

Clazz.newMeth(C$, 'reset$', function () {
C$.superclazz.prototype.reset$.apply(this, []);
this.stream=null;
this.optimal=false;
this.sourceBands=null;
this.destinationRegion=null;
this.noTransform=true;
this.noSubband=true;
this.writeRaster=false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:19 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
