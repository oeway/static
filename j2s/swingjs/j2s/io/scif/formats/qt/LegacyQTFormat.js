(function(){var P$=Clazz.newPackage("io.scif.formats.qt"),I$=[[0,'io.scif.gui.AWTImageTools','net.imagej.axis.Axes','java.awt.Dimension','java.awt.Toolkit','java.util.Vector','io.scif.util.FormatTools','org.scijava.util.Bytes','io.scif.Metadata',['io.scif.formats.qt.LegacyQTFormat','.Metadata']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LegacyQTFormat", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.AbstractFormat');
C$.$classes$=[['Metadata',9],['Parser',9],['Reader',9],['Writer',9],['LegacyQTTranslator',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'makeSuffixArray$', function () {
return Clazz.array(String, -1, ["mov"]);
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.qt.LegacyQTFormat',null,['org.scijava.plugin.Plugin']],['type="io.scif.Format.class" name="QuickTime" priority="-100.0" ']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.LegacyQTFormat, "Metadata", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractMetadata');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['qtJavaService','io.scif.formats.qt.QTJavaService','times','int[]','image','java.awt.Image']]]

Clazz.newMeth(C$, 'getTimes$', function () {
return this.times;
});

Clazz.newMeth(C$, 'setTimes$IA', function (times) {
this.times=times;
});

Clazz.newMeth(C$, 'getImage$', function () {
return this.image;
});

Clazz.newMeth(C$, 'setImage$java_awt_Image', function (image) {
this.image=image;
});

Clazz.newMeth(C$, 'populateImageMetadata$', function () {
var img=$I$(1).makeBuffered$java_awt_Image(this.image);
var iMeta=this.get$I(0);
iMeta.setAxisTypes$net_imagej_axis_AxisTypeA([$I$(2).X, $I$(2).Y, $I$(2).CHANNEL, $I$(2).TIME]);
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(2).X, img.getWidth$());
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(2).Y, img.getHeight$());
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(2).CHANNEL, img.getRaster$().getNumBands$());
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(2).TIME, iMeta.getPlaneCount$());
iMeta.setPixelType$I($I$(1).getPixelType$java_awt_image_BufferedImage(img));
iMeta.setLittleEndian$Z(false);
iMeta.setIndexed$Z(false);
iMeta.setFalseColor$Z(false);
});

Clazz.newMeth(C$, 'close$Z', function (fileOnly) {
C$.superclazz.prototype.close$Z.apply(this, [fileOnly]);
if (!fileOnly) {
this.times=null;
this.image=null;
}});
C$.$getAnn$ = function(){ return [
[['qtJavaService','io.scif.formats.qt.QTJavaService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LegacyQTFormat, "Parser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractParser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['qtJavaService','io.scif.formats.qt.QTJavaService']]]

Clazz.newMeth(C$, ['typedParse$org_scijava_io_handle_DataHandle$io_scif_formats_qt_LegacyQTFormat_Metadata$io_scif_config_SCIFIOConfig','typedParse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig'], function (stream, meta, config) {
this.log$().info$O("Checking for QuickTime Java");
var r=this.qtJavaService.getUniverse$();
this.qtJavaService.checkQTLibrary$();
this.log$().info$O("Reading movie dimensions");
try {
r.exec$S("QTSession.open()");
var file=stream.get$();
if (!(Clazz.instanceOf(file, "org.scijava.io.location.FileLocation"))) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Legacy QTFormat can only read from local disks!"]);
}r.setVar$S$O("path", (file).getFile$().getAbsolutePath$());
r.exec$S("qtf = new QTFile(path)");
r.exec$S("openMovieFile = OpenMovieFile.asRead(qtf)");
r.exec$S("m = Movie.fromFile(openMovieFile)");
var numTracks=(r.exec$S("m.getTrackCount()")).intValue$();
var trackMostLikely=0;
var trackNum=0;
while (++trackNum <= numTracks && trackMostLikely == 0 ){
r.setVar$S$I("trackNum", trackNum);
r.exec$S("imageTrack = m.getTrack(trackNum)");
r.exec$S("d = imageTrack.getSize()");
var w=r.exec$S("d.getWidth()");
if (w.intValue$() > 0) trackMostLikely=trackNum;
}
r.setVar$S$I("trackMostLikely", trackMostLikely);
r.exec$S("imageTrack = m.getTrack(trackMostLikely)");
r.exec$S("d = imageTrack.getSize()");
var w=r.exec$S("d.getWidth()");
var h=r.exec$S("d.getHeight()");
r.exec$S("moviePlayer = new MoviePlayer(m)");
r.setVar$S$O("dim", Clazz.new_($I$(3,1).c$$I$I,[w.intValue$(), h.intValue$()]));
var qtip=r.exec$S("qtip = new QTImageProducer(moviePlayer, dim)");
meta.setImage$java_awt_Image($I$(4).getDefaultToolkit$().createImage$java_awt_image_ImageProducer(qtip));
r.setVar$S$I("zero", 0);
r.setVar$S$F("one", 1.0);
r.exec$S("timeInfo = new TimeInfo(zero, zero)");
r.exec$S("moviePlayer.setTime(zero)");
var v=Clazz.new_(1,{E:"Integer"},$I$(5,1));
var time=0;
var q= new Integer(time);
do {
v.add$TE(q);
r.exec$S("timeInfo = imageTrack.getNextInterestingTime(StdQTConstants.nextTimeMediaSample, timeInfo.time, one)");
q=r.getVar$S("timeInfo.time");
time=q.intValue$();
} while (time >= 0);
meta.createImageMetadata$I(1);
var iMeta=meta.get$I(0);
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(2).TIME, v.size$());
var times=Clazz.array(Integer.TYPE, [(iMeta.getPlaneCount$()|0)]);
for (var i=0; i < times.length; i++) {
q=v.elementAt$I(i);
times[i]=q.intValue$();
}
meta.setTimes$IA(times);
} catch (e) {
if (Clazz.exceptionOf(e,"org.scijava.util.ReflectException")){
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S$Throwable,["Open movie failed", e]);
} else {
throw e;
}
}
});
C$.$getAnn$ = function(){ return [
[['qtJavaService','io.scif.formats.qt.QTJavaService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LegacyQTFormat, "Reader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.gui.BufferedImageReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['qtJavaService','io.scif.formats.qt.QTJavaService']]]

Clazz.newMeth(C$, 'createDomainArray$', function () {
return Clazz.array(String, -1, ["Graphics"]);
});

Clazz.newMeth(C$, ['openPlane$I$J$io_scif_BufferedImagePlane$net_imglib2_Interval$io_scif_config_SCIFIOConfig','openPlane$I$J$TP$net_imglib2_Interval$io_scif_config_SCIFIOConfig'], function (imageIndex, planeIndex, plane, bounds, config) {
var r=this.qtJavaService.getUniverse$();
var meta=this.getMetadata$();
try {
r.setVar$S$I("time", meta.getTimes$()[(planeIndex|0)]);
r.exec$S("moviePlayer.setTime(time)");
r.exec$S("qtip.redraw(null)");
r.exec$S("qtip.updateConsumers(null)");
} catch (re) {
if (Clazz.exceptionOf(re,"org.scijava.util.ReflectException")){
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S$Throwable,["Open movie failed", re]);
} else {
throw re;
}
}
var bimg=$I$(1).getSubimage$java_awt_image_BufferedImage$Z$net_imglib2_Interval($I$(1).makeBuffered$java_awt_Image(meta.getImage$()), meta.get$I(imageIndex).isLittleEndian$(), bounds);
plane.populate$io_scif_ImageMetadata$TT$net_imglib2_Interval(meta.get$I(imageIndex), bimg, bounds);
return plane;
});

Clazz.newMeth(C$, 'close$Z', function (fileOnly) {
try {
var r=this.qtJavaService.getUniverse$();
if (r != null  && r.getVar$S("openMovieFile") != null  ) {
r.exec$S("openMovieFile.close()");
if (!fileOnly) {
r.exec$S("m.disposeQTObject()");
r.exec$S("imageTrack.disposeQTObject()");
r.exec$S("QTSession.close()");
}}} catch (e) {
if (Clazz.exceptionOf(e,"org.scijava.util.ReflectException")){
this.log$().debug$O$Throwable("Failed to close QuickTime session", e);
} else {
throw e;
}
}
});
C$.$getAnn$ = function(){ return [
[['qtJavaService','io.scif.formats.qt.QTJavaService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LegacyQTFormat, "Writer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractWriter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.codec=0;
this.quality=512;
this.pixels2=null;
}, 1);

C$.$fields$=[['I',['codec','quality','width','height'],'O',['qtJavaService','io.scif.formats.qt.QTJavaService','r','org.scijava.util.ReflectedUniverse','pixels2','int[]']]]

Clazz.newMeth(C$, 'setCodec$I', function (codec) {
this.codec=codec;
});

Clazz.newMeth(C$, 'setQuality$I', function (quality) {
this.quality=quality;
});

Clazz.newMeth(C$, 'makeCompressionTypes$', function () {
return Clazz.array(String, [0]);
});

Clazz.newMeth(C$, 'initialize$I$J$net_imglib2_Interval', function (imageIndex, planeIndex, bounds) {
if (!this.isInitialized$I$J(imageIndex, (planeIndex|0))) {
if (this.r == null ) {
this.r=this.qtJavaService.getUniverse$();
}try {
this.r.exec$S("QTSession.open()");
this.width=(this.getMetadata$().get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).X)|0);
this.height=(this.getMetadata$().get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).Y)|0);
this.r.setVar$S$O("path", this.getMetadata$().getDatasetName$());
this.r.setVar$S$F("width", this.width);
this.r.setVar$S$F("height", this.height);
this.r.exec$S("movFile = new QTFile(path)");
this.r.exec$S("kMoviePlayer = StdQTConstants.kMoviePlayer");
var resFlag=(this.r.exec$S("StdQTConstants.createMovieFileDontCreateResFile")).intValue$();
this.r.setVar$S$I("flags", resFlag);
this.r.exec$S("movie = Movie.createMovieFile(movFile, kMoviePlayer, flags)");
this.r.setVar$S$I("timeScale", 600);
this.r.setVar$S$I("zero", 0);
this.r.setVar$S$F("zeroFloat", 0.0);
this.r.exec$S("videoTrack = movie.addTrack(width, height, zeroFloat)");
this.r.exec$S("videoMedia = new VideoMedia(videoTrack, timeScale)");
this.r.exec$S("videoMedia.beginEdits()");
this.r.setVar$S$I("width", this.width);
this.r.setVar$S$I("height", this.height);
this.r.exec$S("bounds = new QDRect(zero, zero, width, height)");
this.r.exec$S("gw = new QDGraphics(bounds)");
this.r.exec$S("pixMap = gw.getPixMap()");
this.r.exec$S("pixSize = pixMap.getPixelSize()");
this.r.setVar$S$I("codec", this.codec);
this.r.setVar$S$I("quality", this.quality);
var rawImageSize=this.width * this.height * 4 ;
this.r.setVar$S$I("rawImageSize", rawImageSize);
this.r.setVar$S$Z("boolTrue", true);
this.r.exec$S("imageHandle = new QTHandle(rawImageSize, boolTrue)");
this.r.exec$S("imageHandle.lock()");
this.r.exec$S("compressedImage = RawEncodedImage.fromQTHandle(imageHandle)");
this.r.setVar$S$I("rate", 30);
this.r.exec$S("seq = new CSequence(gw, bounds, pixSize, codec, CodecComponent.bestFidelityCodec, quality, quality, rate, null, zero)");
this.r.exec$S("imgDesc = seq.getDescription()");
} catch (e) {
if (Clazz.exceptionOf(e,"org.scijava.util.ReflectException")){
this.log$().debug$O$Throwable("", e);
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S$Throwable,["Legacy QuickTime writer failed", e]);
} else {
throw e;
}
}
}C$.superclazz.prototype.initialize$I$J$net_imglib2_Interval.apply(this, [imageIndex, planeIndex, bounds]);
});

Clazz.newMeth(C$, 'writePlane$I$J$io_scif_Plane$net_imglib2_Interval', function (imageIndex, planeIndex, plane, bounds) {
var img=null;
var meta=this.getMetadata$();
if (!(Clazz.instanceOf(plane, "io.scif.BufferedImagePlane"))) {
var type=meta.get$I(imageIndex).getPixelType$();
img=$I$(1).makeImage$BA$I$I$I$Z$I$Z$Z$Z(plane.getBytes$(), (meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).X)|0), (meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).Y)|0), (meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL)|0), meta.get$I(imageIndex).getInterleavedAxisCount$() > 0, $I$(6).getBytesPerPixel$I(type), $I$(6).isFloatingPoint$I(type), meta.get$I(imageIndex).isLittleEndian$(), $I$(6).isSigned$I(type));
} else {
img=(plane).getData$();
}if (this.r == null ) {
this.r=this.qtJavaService.getUniverse$();
}this.qtJavaService.checkQTLibrary$();
try {
this.r.exec$S("pixelData = pixMap.getPixelData()");
this.r.exec$S("intsPerRow = pixelData.getRowBytes()");
var intsPerRow=((this.r.getVar$S("intsPerRow")).intValue$()/4|0);
var px=$I$(1).getBytes$java_awt_image_BufferedImage(img);
var pixels=Clazz.array(Integer.TYPE, [px[0].length]);
for (var i=0; i < pixels.length; i++) {
var b=Clazz.array(Byte.TYPE, [4]);
for (var j=0; j < px.length; j++) {
b[j]=(px[j][i]|0);
}
for (var j=px.length; j < 4; j++) {
b[j]=(px[j % px.length][i]|0);
}
pixels[i]=$I$(7).toInt$BA$Z(b, true);
}
if (this.pixels2 == null ) this.pixels2=Clazz.array(Integer.TYPE, [intsPerRow * this.height]);
this.r.exec$S("nativeLittle = EndianOrder.isNativeLittleEndian()");
var nativeLittle=(this.r.getVar$S("nativeLittle")).booleanValue$();
if (nativeLittle) {
var offset1;
var offset2;
for (var row=0; row < this.height; row++) {
offset1=row * this.width;
offset2=row * intsPerRow;
for (var col=0; col < this.width; col++) {
this.r.setVar$S$I("thisByte", pixels[offset1++]);
this.r.exec$S("b = EndianOrder.flipBigEndianToNative32(thisByte)");
this.pixels2[offset2++]=(this.r.getVar$S("b")).intValue$();
}
}
} else {
for (var i=0; i < this.height; i++) {
System.arraycopy$O$I$O$I$I(pixels, i * this.width, this.pixels2, i * intsPerRow, this.width);
}
}this.r.setVar$S$O("pixels2", this.pixels2);
this.r.setVar$S$I("len", intsPerRow * this.height);
this.r.exec$S("pixelData.copyFromArray(zero, pixels2, zero, len)");
this.r.exec$S("flags = StdQTConstants.codecFlagUpdatePrevious");
this.r.exec$S("cfInfo = seq.compressFrame(gw, bounds, flags, compressedImage)");
this.r.exec$S("similarity = cfInfo.getSimilarity()");
var sim=(this.r.getVar$S("similarity")).intValue$();
var sync=sim == 0;
this.r.exec$S("dataSize = cfInfo.getDataSize()");
this.r.setVar$S$I("fps", this.getFramesPerSecond$());
this.r.setVar$S$I("frameRate", 600);
this.r.setVar$S$I("rate", (600/this.getFramesPerSecond$()|0));
if (sync) {
this.r.setVar$S$I("sync", 0);
} else this.r.exec$S("sync = StdQTConstants.mediaSampleNotSync");
this.r.setVar$S$I("one", 1);
this.r.exec$S("videoMedia.addSample(imageHandle, zero, dataSize, rate, imgDesc, one, sync)");
} catch (e) {
if (Clazz.exceptionOf(e,"org.scijava.util.ReflectException")){
this.log$().debug$O$Throwable("", e);
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S$Throwable,["Legacy QuickTime writer failed", e]);
} else {
throw e;
}
}
if (planeIndex == this.getMetadata$().get$I(imageIndex).getPlaneCount$() - 1) {
try {
this.r.exec$S("videoMedia.endEdits()");
this.r.exec$S("duration = videoMedia.getDuration()");
this.r.setVar$S$F("floatOne", 1.0);
this.r.exec$S("videoTrack.insertMedia(zero, zero, duration, floatOne)");
this.r.exec$S("omf = OpenMovieFile.asWrite(movFile)");
this.r.exec$S("name = movFile.getName()");
this.r.exec$S("flags = StdQTConstants.movieInDataForkResID");
this.r.exec$S("movie.addResource(omf, flags, name)");
this.r.exec$S("QTSession.close()");
} catch (e) {
if (Clazz.exceptionOf(e,"org.scijava.util.ReflectException")){
this.log$().debug$O$Throwable("", e);
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S$Throwable,["Legacy QuickTime writer failed", e]);
} else {
throw e;
}
}
this.close$();
}});

Clazz.newMeth(C$, 'canDoStacks$', function () {
return true;
});

Clazz.newMeth(C$, 'close$', function () {
C$.superclazz.prototype.close$.apply(this, []);
this.r=null;
this.width=0;
this.height=0;
this.pixels2=null;
});
C$.$getAnn$ = function(){ return [
[['qtJavaService','io.scif.formats.qt.QTJavaService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LegacyQTFormat, "LegacyQTTranslator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractTranslator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['qtJavaService','io.scif.formats.qt.QTJavaService','$log','org.scijava.log.LogService']]]

Clazz.newMeth(C$, 'source$', function () {
return Clazz.getClass($I$(8),['add$io_scif_ImageMetadata','createImageMetadata$I','get$I','getAll$','getDatasetName$','getDatasetSize$','getDestinationLocation$','getImageCount$','getSource$','getSourceLocation$','isFiltered$','populateImageMetadata$','setDatasetName$S','setDestinationLocation$org_scijava_io_location_Location','setFiltered$Z','setSource$org_scijava_io_handle_DataHandle','setSourceLocation$org_scijava_io_location_Location']);
});

Clazz.newMeth(C$, 'dest$', function () {
return Clazz.getClass($I$(9));
});

Clazz.newMeth(C$, ['translateImageMetadata$java_util_List$io_scif_formats_qt_LegacyQTFormat_Metadata','translateImageMetadata$java_util_List$TN'], function (source, dest) {
dest.createImageMetadata$I(1);
dest.get$I(0).setAxisLength$net_imagej_axis_AxisType$J($I$(2).TIME, source.get$I(0).getPlaneCount$());
var w=(source.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(2).X)|0);
var h=(source.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(2).Y)|0);
var bpp=(source.get$I(0).getBitsPerPixel$()/8|0);
var data=Clazz.array(Byte.TYPE, [(source.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL)|0), w * h * bpp ]);
var fp=$I$(6).isFloatingPoint$I(source.get$I(0).getPixelType$());
var little=source.get$I(0).isLittleEndian$();
var signed=$I$(6).isSigned$I(source.get$I(0).getPixelType$());
var img=$I$(1).makeImage$BAA$I$I$I$Z$Z$Z(data, w, h, bpp, fp, little, signed);
dest.setImage$java_awt_Image(img);
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.qt.LegacyQTFormat.LegacyQTTranslator',null,['org.scijava.plugin.Plugin']],['type="io.scif.Translator.class" priority="-100.0" ']],
  [['qtJavaService','io.scif.formats.qt.QTJavaService',null,['org.scijava.plugin.Parameter']],['']],
  [['$log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:41 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
