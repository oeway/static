(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.raw"),p$1={},I$=[[0,'io.scif.media.imageioimpl.plugins.raw.I18N','java.util.ArrayList','javax.imageio.ImageReadParam','io.scif.media.imageioimpl.plugins.raw.RawRenderedImage','java.awt.image.Raster','java.awt.Point','java.awt.image.BufferedImage','java.util.Hashtable']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RawImageReader", null, 'javax.imageio.ImageReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.iis=null;
}, 1);

C$.$fields$=[['O',['iis','io.scif.media.imageio.stream.RawImageInputStream']]]

Clazz.newMeth(C$, 'computeRegionsWrapper$javax_imageio_ImageReadParam$I$I$java_awt_image_BufferedImage$java_awt_Rectangle$java_awt_Rectangle', function (param, srcWidth, srcHeight, image, srcRegion, destRegion) {
javax.imageio.ImageReader.computeRegions$javax_imageio_ImageReadParam$I$I$java_awt_image_BufferedImage$java_awt_Rectangle$java_awt_Rectangle(param, srcWidth, srcHeight, image, srcRegion, destRegion);
}, 1);

Clazz.newMeth(C$, 'c$$javax_imageio_spi_ImageReaderSpi', function (originator) {
;C$.superclazz.c$$javax_imageio_spi_ImageReaderSpi.apply(this,[originator]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setInput$O$Z$Z', function (input, seekForwardOnly, ignoreMetadata) {
C$.superclazz.prototype.setInput$O$Z$Z.apply(this, [input, seekForwardOnly, ignoreMetadata]);
this.iis=input;
});

Clazz.newMeth(C$, 'getNumImages$Z', function (allowSearch) {
return this.iis.getNumImages$();
});

Clazz.newMeth(C$, 'getWidth$I', function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
return this.iis.getImageDimension$I(imageIndex).width;
});

Clazz.newMeth(C$, 'getHeight$I', function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
return this.iis.getImageDimension$I(imageIndex).height;
});

Clazz.newMeth(C$, 'getTileWidth$I', function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
return this.iis.getImageType$().getSampleModel$().getWidth$();
});

Clazz.newMeth(C$, 'getTileHeight$I', function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
return this.iis.getImageType$().getSampleModel$().getHeight$();
});

Clazz.newMeth(C$, 'checkIndex$I', function (imageIndex) {
if (imageIndex < 0 || imageIndex >= this.getNumImages$Z(true) ) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[$I$(1).getString$S("RawImageReader0")]);
}}, p$1);

Clazz.newMeth(C$, 'getImageTypes$I', function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
var list=Clazz.new_($I$(2,1).c$$I,[1]);
list.add$TE(this.iis.getImageType$());
return list.iterator$();
});

Clazz.newMeth(C$, 'getDefaultReadParam$', function () {
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'getImageMetadata$I', function (imageIndex) {
return null;
});

Clazz.newMeth(C$, 'getStreamMetadata$', function () {
return null;
});

Clazz.newMeth(C$, 'isRandomAccessEasy$I', function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
return true;
});

Clazz.newMeth(C$, 'read$I$javax_imageio_ImageReadParam', function (imageIndex, param) {
if (param == null ) param=this.getDefaultReadParam$();
p$1.checkIndex$I.apply(this, [imageIndex]);
this.clearAbortRequest$();
this.processImageStarted$I(imageIndex);
var bi=param.getDestination$();
var image=Clazz.new_($I$(4,1).c$$io_scif_media_imageio_stream_RawImageInputStream$io_scif_media_imageioimpl_plugins_raw_RawImageReader$javax_imageio_ImageReadParam$I,[this.iis, this, param, imageIndex]);
var offset=param.getDestinationOffset$();
var raster;
if (bi == null ) {
var colorModel=image.getColorModel$();
var sampleModel=image.getSampleModel$();
var type=param.getDestinationType$();
if (type != null ) colorModel=type.getColorModel$();
raster=$I$(5).createWritableRaster$java_awt_image_SampleModel$java_awt_Point(sampleModel.createCompatibleSampleModel$I$I(image.getMinX$() + image.getWidth$(), image.getMinY$() + image.getHeight$()), Clazz.new_($I$(6,1).c$$I$I,[0, 0]));
bi=Clazz.new_($I$(7,1).c$$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable,[colorModel, raster, colorModel != null  ? colorModel.isAlphaPremultiplied$() : false, Clazz.new_($I$(8,1))]);
} else {
raster=bi.getWritableTile$I$I(0, 0);
}image.setDestImage$java_awt_image_BufferedImage(bi);
image.readAsRaster$java_awt_image_WritableRaster(raster);
image.clearDestImage$();
if (this.abortRequested$()) this.processReadAborted$();
 else this.processImageComplete$();
return bi;
});

Clazz.newMeth(C$, 'readAsRenderedImage$I$javax_imageio_ImageReadParam', function (imageIndex, param) {
if (param == null ) param=this.getDefaultReadParam$();
p$1.checkIndex$I.apply(this, [imageIndex]);
this.clearAbortRequest$();
this.processImageStarted$I(0);
var image=Clazz.new_($I$(4,1).c$$io_scif_media_imageio_stream_RawImageInputStream$io_scif_media_imageioimpl_plugins_raw_RawImageReader$javax_imageio_ImageReadParam$I,[this.iis, this, param, imageIndex]);
if (this.abortRequested$()) this.processReadAborted$();
 else this.processImageComplete$();
return image;
});

Clazz.newMeth(C$, 'readRaster$I$javax_imageio_ImageReadParam', function (imageIndex, param) {
var bi=this.read$I$javax_imageio_ImageReadParam(imageIndex, param);
return bi.getData$();
});

Clazz.newMeth(C$, 'canReadRaster$', function () {
return true;
});

Clazz.newMeth(C$, 'reset$', function () {
C$.superclazz.prototype.reset$.apply(this, []);
this.iis=null;
});

Clazz.newMeth(C$, 'processImageUpdateWrapper$java_awt_image_BufferedImage$I$I$I$I$I$I$IA', function (theImage, minX, minY, width, height, periodX, periodY, bands) {
this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(theImage, minX, minY, width, height, periodX, periodY, bands);
});

Clazz.newMeth(C$, 'processImageProgressWrapper$F', function (percentageDone) {
this.processImageProgress$F(percentageDone);
});

Clazz.newMeth(C$, 'getAbortRequest$', function () {
return this.abortRequested$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:19 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
