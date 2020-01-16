(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.jpeg2000"),p$1={},I$=[[0,'io.scif.media.imageioimpl.plugins.jpeg2000.I18N','java.awt.Rectangle','Boolean','io.scif.jj2000.j2k.util.FacilityManager','io.scif.media.imageioimpl.plugins.jpeg2000.J2KReadState','io.scif.media.imageioimpl.plugins.jpeg2000.J2KImageReadParamJava','java.util.ArrayList','javax.imageio.ImageTypeSpecifier','io.scif.media.imageio.plugins.jpeg2000.J2KImageReadParam','io.scif.media.imageioimpl.plugins.jpeg2000.J2KMetadata','io.scif.media.imageioimpl.plugins.jpeg2000.J2KRenderedImage']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "J2KImageReader", null, 'javax.imageio.ImageReader', 'io.scif.jj2000.j2k.util.MsgLogger');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.iis=null;
this.gotHeader=false;
this.imageMetadata=null;
this.imageMetadataIndex=-1;
this.readState=null;
this.logJJ2000Msg=false;
}, 1);

C$.$fields$=[['Z',['gotHeader','logJJ2000Msg'],'I',['width','height','imageMetadataIndex'],'L',['streamPosition0'],'O',['iis','javax.imageio.stream.ImageInputStream','imageMetadata','io.scif.media.imageioimpl.plugins.jpeg2000.J2KMetadata','hd','io.scif.jj2000.j2k.codestream.reader.HeaderDecoder','readState','io.scif.media.imageioimpl.plugins.jpeg2000.J2KReadState']]]

Clazz.newMeth(C$, 'computeRegionsWrapper$javax_imageio_ImageReadParam$Z$I$I$java_awt_image_BufferedImage$java_awt_Rectangle$java_awt_Rectangle', function (param, allowZeroDestOffset, srcWidth, srcHeight, image, srcRegion, destRegion) {
if (srcRegion == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(1).getString$S("J2KImageReader0")]);
}if (destRegion == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(1).getString$S("J2KImageReader1")]);
}var periodX=1;
var periodY=1;
var gridX=0;
var gridY=0;
if (param != null ) {
var paramSrcRegion=param.getSourceRegion$();
if (paramSrcRegion != null ) {
srcRegion.setBounds$java_awt_Rectangle(srcRegion.intersection$java_awt_Rectangle(paramSrcRegion));
}periodX=param.getSourceXSubsampling$();
periodY=param.getSourceYSubsampling$();
gridX=param.getSubsamplingXOffset$();
gridY=param.getSubsamplingYOffset$();
srcRegion.translate$I$I(gridX, gridY);
srcRegion.width-=gridX;
srcRegion.height-=gridY;
if (allowZeroDestOffset) {
destRegion.setLocation$java_awt_Point(param.getDestinationOffset$());
} else {
var destOffset=param.getDestinationOffset$();
if (destOffset.x != 0 || destOffset.y != 0 ) {
destRegion.setLocation$java_awt_Point(param.getDestinationOffset$());
}}}if (destRegion.x < 0) {
var delta=-destRegion.x * periodX;
srcRegion.x+=delta;
srcRegion.width-=delta;
destRegion.x=0;
}if (destRegion.y < 0) {
var delta=-destRegion.y * periodY;
srcRegion.y+=delta;
srcRegion.height-=delta;
destRegion.y=0;
}var subsampledWidth=((srcRegion.width + periodX - 1)/periodX|0);
var subsampledHeight=((srcRegion.height + periodY - 1)/periodY|0);
destRegion.width=subsampledWidth;
destRegion.height=subsampledHeight;
if (image != null ) {
var destImageRect=Clazz.new_($I$(2,1).c$$I$I$I$I,[0, 0, image.getWidth$(), image.getHeight$()]);
destRegion.setBounds$java_awt_Rectangle(destRegion.intersection$java_awt_Rectangle(destImageRect));
if (destRegion.isEmpty$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(1).getString$S("J2KImageReader2")]);
}var deltaX=destRegion.x + subsampledWidth - image.getWidth$();
if (deltaX > 0) {
srcRegion.width-=deltaX * periodX;
}var deltaY=destRegion.y + subsampledHeight - image.getHeight$();
if (deltaY > 0) {
srcRegion.height-=deltaY * periodY;
}}if (srcRegion.isEmpty$() || destRegion.isEmpty$() ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[$I$(1).getString$S("J2KImageReader3")]);
}}, 1);

Clazz.newMeth(C$, 'checkReadParamBandSettingsWrapper$javax_imageio_ImageReadParam$I$I', function (param, numSrcBands, numDstBands) {
javax.imageio.ImageReader.checkReadParamBandSettings$javax_imageio_ImageReadParam$I$I(param, numSrcBands, numDstBands);
}, 1);

Clazz.newMeth(C$, 'getReducedRect$java_awt_Rectangle$I$I$I$I', function (r, maxLevel, level, subX, subY) {
if (r == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["r == null!"]);
} else if (maxLevel < 0 || level < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["maxLevel < 0 || level < 0!"]);
} else if (level > maxLevel) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["level > maxLevel"]);
}if (level == maxLevel && subX == 1  && subY == 1 ) {
return r;
}var divisor=1 << (maxLevel - level);
var divX=divisor * subX;
var divY=divisor * subY;
var x1=((r.x + divX - 1)/divX|0);
var x2=((r.x + r.width + divX  - 1)/divX|0);
var y1=((r.y + divY - 1)/divY|0);
var y2=((r.y + r.height + divY  - 1)/divY|0);
return Clazz.new_($I$(2,1).c$$I$I$I$I,[x1, y1, x2 - x1, y2 - y1]);
}, 1);

Clazz.newMeth(C$, 'processImageUpdateWrapper$java_awt_image_BufferedImage$I$I$I$I$I$I$IA', function (theImage, minX, minY, width, height, periodX, periodY, bands) {
this.processImageUpdate$java_awt_image_BufferedImage$I$I$I$I$I$I$IA(theImage, minX, minY, width, height, periodX, periodY, bands);
});

Clazz.newMeth(C$, 'processImageProgressWrapper$F', function (percentageDone) {
this.processImageProgress$F(percentageDone);
});

Clazz.newMeth(C$, 'c$$javax_imageio_spi_ImageReaderSpi', function (originator) {
;C$.superclazz.c$$javax_imageio_spi_ImageReaderSpi.apply(this,[originator]);C$.$init$.apply(this);
this.logJJ2000Msg=$I$(3).getBoolean$S("io.scif.jj2000.j2k.decoder.log");
$I$(4).registerMsgLogger$Thread$io_scif_jj2000_j2k_util_MsgLogger(null, this);
}, 1);

Clazz.newMeth(C$, 'setInput$O$Z$Z', function (input, seekForwardOnly, ignoreMetadata) {
C$.superclazz.prototype.setInput$O$Z$Z.apply(this, [input, seekForwardOnly, ignoreMetadata]);
this.ignoreMetadata=ignoreMetadata;
this.iis=input;
this.imageMetadata=null;
try {
this.streamPosition0=this.iis.getStreamPosition$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
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

Clazz.newMeth(C$, 'getTileGridXOffset$I', function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
this.readHeader$();
return this.hd.getTilingOrigin$java_awt_Point(null).x;
});

Clazz.newMeth(C$, 'getTileGridYOffset$I', function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
this.readHeader$();
return this.hd.getTilingOrigin$java_awt_Point(null).y;
});

Clazz.newMeth(C$, 'getTileWidth$I', function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
this.readHeader$();
return this.hd.getNomTileWidth$();
});

Clazz.newMeth(C$, 'getTileHeight$I', function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
this.readHeader$();
return this.hd.getNomTileHeight$();
});

Clazz.newMeth(C$, 'checkIndex$I', function (imageIndex) {
if (imageIndex != 0) {
throw Clazz.new_(Clazz.load('IndexOutOfBoundsException').c$$S,[$I$(1).getString$S("J2KImageReader4")]);
}}, p$1);

Clazz.newMeth(C$, 'readHeader$', function () {
if (this.gotHeader) return;
if (this.readState == null ) {
try {
this.iis.seek$J(this.streamPosition0);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
} else {
throw e;
}
}
this.readState=Clazz.new_($I$(5,1).c$$javax_imageio_stream_ImageInputStream$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReadParamJava$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReader,[this.iis, Clazz.new_($I$(6,1).c$$javax_imageio_ImageReadParam,[this.getDefaultReadParam$()]), this]);
}this.hd=this.readState.getHeader$();
this.gotHeader=true;
this.width=this.hd.getImgWidth$();
this.height=this.hd.getImgHeight$();
});

Clazz.newMeth(C$, 'getImageTypes$I', function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
this.readHeader$();
if (this.readState != null ) {
var list=Clazz.new_($I$(7,1));
list.add$TE(Clazz.new_($I$(8,1).c$$java_awt_image_ColorModel$java_awt_image_SampleModel,[this.readState.getColorModel$(), this.readState.getSampleModel$()]));
return list.iterator$();
}return null;
});

Clazz.newMeth(C$, 'getDefaultReadParam$', function () {
return Clazz.new_($I$(9,1));
});

Clazz.newMeth(C$, 'getImageMetadata$I', function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
if (this.ignoreMetadata) return null;
if (this.imageMetadata == null ) {
this.iis.mark$();
this.imageMetadata=Clazz.new_($I$(10,1).c$$javax_imageio_stream_ImageInputStream$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReader,[this.iis, this]);
this.iis.reset$();
}return this.imageMetadata;
});

Clazz.newMeth(C$, 'getStreamMetadata$', function () {
return null;
});

Clazz.newMeth(C$, 'read$I$javax_imageio_ImageReadParam', function (imageIndex, param) {
p$1.checkIndex$I.apply(this, [imageIndex]);
this.clearAbortRequest$();
this.processImageStarted$I(imageIndex);
if (param == null ) param=this.getDefaultReadParam$();
param=Clazz.new_($I$(6,1).c$$javax_imageio_ImageReadParam,[param]);
if (!this.ignoreMetadata) {
this.imageMetadata=Clazz.new_($I$(10,1));
this.iis.seek$J(this.streamPosition0);
this.readState=Clazz.new_($I$(5,1).c$$javax_imageio_stream_ImageInputStream$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReadParamJava$io_scif_media_imageioimpl_plugins_jpeg2000_J2KMetadata$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReader,[this.iis, param, this.imageMetadata, this]);
} else {
this.iis.seek$J(this.streamPosition0);
this.readState=Clazz.new_($I$(5,1).c$$javax_imageio_stream_ImageInputStream$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReadParamJava$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReader,[this.iis, param, this]);
}var bi=this.readState.readBufferedImage$();
if (this.abortRequested$()) this.processReadAborted$();
 else this.processImageComplete$();
return bi;
});

Clazz.newMeth(C$, 'readAsRenderedImage$I$javax_imageio_ImageReadParam', function (imageIndex, param) {
p$1.checkIndex$I.apply(this, [imageIndex]);
var ri=null;
this.clearAbortRequest$();
this.processImageStarted$I(imageIndex);
if (param == null ) param=this.getDefaultReadParam$();
param=Clazz.new_($I$(6,1).c$$javax_imageio_ImageReadParam,[param]);
if (!this.ignoreMetadata) {
if (this.imageMetadata == null ) this.imageMetadata=Clazz.new_($I$(10,1));
ri=Clazz.new_($I$(11,1).c$$javax_imageio_stream_ImageInputStream$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReadParamJava$io_scif_media_imageioimpl_plugins_jpeg2000_J2KMetadata$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReader,[this.iis, param, this.imageMetadata, this]);
} else ri=Clazz.new_($I$(11,1).c$$javax_imageio_stream_ImageInputStream$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReadParamJava$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReader,[this.iis, param, this]);
if (this.abortRequested$()) this.processReadAborted$();
 else this.processImageComplete$();
return ri;
});

Clazz.newMeth(C$, 'canReadRaster$', function () {
return true;
});

Clazz.newMeth(C$, 'isRandomAccessEasy$I', function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
return false;
});

Clazz.newMeth(C$, 'readRaster$I$javax_imageio_ImageReadParam', function (imageIndex, param) {
p$1.checkIndex$I.apply(this, [imageIndex]);
this.processImageStarted$I(imageIndex);
if (param == null ) {
param=this.getDefaultReadParam$();
}param=Clazz.new_($I$(6,1).c$$javax_imageio_ImageReadParam,[param]);
if (!this.ignoreMetadata) {
this.imageMetadata=Clazz.new_($I$(10,1));
this.iis.seek$J(this.streamPosition0);
this.readState=Clazz.new_($I$(5,1).c$$javax_imageio_stream_ImageInputStream$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReadParamJava$io_scif_media_imageioimpl_plugins_jpeg2000_J2KMetadata$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReader,[this.iis, param, this.imageMetadata, this]);
} else {
this.iis.seek$J(this.streamPosition0);
this.readState=Clazz.new_($I$(5,1).c$$javax_imageio_stream_ImageInputStream$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReadParamJava$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageReader,[this.iis, param, this]);
}var ras=this.readState.readAsRaster$();
if (this.abortRequested$()) this.processReadAborted$();
 else this.processImageComplete$();
return ras;
});

Clazz.newMeth(C$, 'isImageTiled$I', function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
this.readHeader$();
if (this.readState != null ) {
var image=Clazz.new_($I$(11,1).c$$io_scif_media_imageioimpl_plugins_jpeg2000_J2KReadState,[this.readState]);
if (image.getNumXTiles$() * image.getNumYTiles$() > 0) return true;
return false;
}return false;
});

Clazz.newMeth(C$, 'reset$', function () {
C$.superclazz.prototype.reset$.apply(this, []);
this.iis=null;
this.gotHeader=false;
this.imageMetadata=null;
this.readState=null;
System.gc$();
});

Clazz.newMeth(C$, 'getAbortRequest$', function () {
return this.abortRequested$();
});

Clazz.newMeth(C$, 'getImageType$I', function (imageIndex) {
p$1.checkIndex$I.apply(this, [imageIndex]);
this.readHeader$();
if (this.readState != null ) {
return Clazz.new_($I$(8,1).c$$java_awt_image_ColorModel$java_awt_image_SampleModel,[this.readState.getColorModel$(), this.readState.getSampleModel$()]);
}return null;
}, p$1);

Clazz.newMeth(C$, 'flush$', function () {
});

Clazz.newMeth(C$, 'println$S$I$I', function (str, flind, ind) {
this.printmsg$I$S(1, str);
});

Clazz.newMeth(C$, 'printmsg$I$S', function (sev, msg) {
if (this.logJJ2000Msg) {
var msgSev;
switch (sev) {
case 3:
msgSev="ERROR";
break;
case 1:
msgSev="INFO";
break;
case 0:
msgSev="LOG";
break;
case 2:
default:
msgSev="WARNING";
break;
}
this.processWarningOccurred$S("[JJ2000 " + msgSev + "] " + msg );
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:19 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
