(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),p$1={},I$=[[0,'io.scif.media.imageio.plugins.tiff.TIFFImageReadParam','java.awt.Image','java.awt.Rectangle']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFRenderedImage", null, null, 'java.awt.image.RenderedImage');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['isSubsampling'],'I',['imageIndex','subsampleX','subsampleY','width','height','tileWidth','tileHeight'],'O',['reader','io.scif.media.imageioimpl.plugins.tiff.TIFFImageReader','tileParam','javax.imageio.ImageReadParam','its','javax.imageio.ImageTypeSpecifier']]]

Clazz.newMeth(C$, 'c$$io_scif_media_imageioimpl_plugins_tiff_TIFFImageReader$I$javax_imageio_ImageReadParam$I$I', function (reader, imageIndex, readParam, width, height) {
;C$.$init$.apply(this);
this.reader=reader;
this.imageIndex=imageIndex;
this.tileParam=p$1.cloneImageReadParam$javax_imageio_ImageReadParam$Z.apply(this, [readParam, false]);
this.subsampleX=this.tileParam.getSourceXSubsampling$();
this.subsampleY=this.tileParam.getSourceYSubsampling$();
this.isSubsampling=this.subsampleX != 1 || this.subsampleY != 1 ;
this.width=(width/this.subsampleX|0);
this.height=(height/this.subsampleY|0);
this.tileWidth=(reader.getTileWidth$I(imageIndex)/this.subsampleX|0);
this.tileHeight=(reader.getTileHeight$I(imageIndex)/this.subsampleY|0);
var iter=reader.getImageTypes$I(imageIndex);
this.its=iter.next$();
this.tileParam.setDestinationType$javax_imageio_ImageTypeSpecifier(this.its);
}, 1);

Clazz.newMeth(C$, 'cloneImageReadParam$javax_imageio_ImageReadParam$Z', function (param, copyTagSets) {
var newParam=Clazz.new_($I$(1,1));
newParam.setSourceSubsampling$I$I$I$I(param.getSourceXSubsampling$(), param.getSourceYSubsampling$(), param.getSubsamplingXOffset$(), param.getSubsamplingYOffset$());
newParam.setSourceBands$IA(param.getSourceBands$());
newParam.setDestinationBands$IA(param.getDestinationBands$());
newParam.setDestinationOffset$java_awt_Point(param.getDestinationOffset$());
if (Clazz.instanceOf(param, "io.scif.media.imageio.plugins.tiff.TIFFImageReadParam")) {
var tparam=param;
newParam.setTIFFDecompressor$io_scif_media_imageio_plugins_tiff_TIFFDecompressor(tparam.getTIFFDecompressor$());
newParam.setColorConverter$io_scif_media_imageio_plugins_tiff_TIFFColorConverter(tparam.getColorConverter$());
if (copyTagSets) {
var tagSets=tparam.getAllowedTagSets$();
if (tagSets != null ) {
var tagSetIter=tagSets.iterator$();
if (tagSetIter != null ) {
while (tagSetIter.hasNext$()){
var tagSet=tagSetIter.next$();
newParam.addAllowedTagSet$io_scif_media_imageio_plugins_tiff_TIFFTagSet(tagSet);
}
}}}} else {
newParam.setTIFFDecompressor$io_scif_media_imageio_plugins_tiff_TIFFDecompressor(null);
newParam.setColorConverter$io_scif_media_imageio_plugins_tiff_TIFFColorConverter(null);
}return newParam;
}, p$1);

Clazz.newMeth(C$, 'getSources$', function () {
return null;
});

Clazz.newMeth(C$, 'getProperty$S', function (name) {
return $I$(2).UndefinedProperty;
});

Clazz.newMeth(C$, 'getPropertyNames$', function () {
return null;
});

Clazz.newMeth(C$, 'getColorModel$', function () {
return this.its.getColorModel$();
});

Clazz.newMeth(C$, 'getSampleModel$', function () {
return this.its.getSampleModel$();
});

Clazz.newMeth(C$, 'getWidth$', function () {
return this.width;
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.height;
});

Clazz.newMeth(C$, 'getMinX$', function () {
return 0;
});

Clazz.newMeth(C$, 'getMinY$', function () {
return 0;
});

Clazz.newMeth(C$, 'getNumXTiles$', function () {
return ((this.width + this.tileWidth - 1)/this.tileWidth|0);
});

Clazz.newMeth(C$, 'getNumYTiles$', function () {
return ((this.height + this.tileHeight - 1)/this.tileHeight|0);
});

Clazz.newMeth(C$, 'getMinTileX$', function () {
return 0;
});

Clazz.newMeth(C$, 'getMinTileY$', function () {
return 0;
});

Clazz.newMeth(C$, 'getTileWidth$', function () {
return this.tileWidth;
});

Clazz.newMeth(C$, 'getTileHeight$', function () {
return this.tileHeight;
});

Clazz.newMeth(C$, 'getTileGridXOffset$', function () {
return 0;
});

Clazz.newMeth(C$, 'getTileGridYOffset$', function () {
return 0;
});

Clazz.newMeth(C$, 'getTile$I$I', function (tileX, tileY) {
var tileRect=Clazz.new_($I$(3,1).c$$I$I$I$I,[tileX * this.tileWidth, tileY * this.tileHeight, this.tileWidth, this.tileHeight]);
return this.getData$java_awt_Rectangle(tileRect);
});

Clazz.newMeth(C$, 'getData$', function () {
return this.read$java_awt_Rectangle(Clazz.new_($I$(3,1).c$$I$I$I$I,[0, 0, this.getWidth$(), this.getHeight$()]));
});

Clazz.newMeth(C$, 'getData$java_awt_Rectangle', function (rect) {
return this.read$java_awt_Rectangle(rect);
});

Clazz.newMeth(C$, 'read$java_awt_Rectangle', function (rect) {
this.tileParam.setSourceRegion$java_awt_Rectangle(this.isSubsampling ? Clazz.new_($I$(3,1).c$$I$I$I$I,[this.subsampleX * rect.x, this.subsampleY * rect.y, this.subsampleX * rect.width, this.subsampleY * rect.height]) : rect);
try {
var bi=this.reader.read$I$javax_imageio_ImageReadParam(this.imageIndex, this.tileParam);
var ras=bi.getRaster$();
return ras.createWritableChild$I$I$I$I$I$I$IA(0, 0, ras.getWidth$(), ras.getHeight$(), rect.x, rect.y, null);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'copyData$java_awt_image_WritableRaster', function (raster) {
if (raster == null ) {
return this.read$java_awt_Rectangle(Clazz.new_($I$(3,1).c$$I$I$I$I,[0, 0, this.getWidth$(), this.getHeight$()]));
} else {
var src=this.read$java_awt_Rectangle(raster.getBounds$());
raster.setRect$java_awt_image_Raster(src);
return raster;
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
