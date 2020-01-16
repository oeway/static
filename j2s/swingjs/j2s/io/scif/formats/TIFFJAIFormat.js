(function(){var P$=Clazz.newPackage("io.scif.formats"),I$=[[0,'net.imagej.axis.Axes','io.scif.gui.AWTImageTools','org.scijava.util.ReflectedUniverse','java.io.RandomAccessFile','io.scif.util.FormatTools','io.scif.formats.TIFFFormat']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFJAIFormat", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.AbstractFormat');
C$.$classes$=[['Metadata',9],['Parser',9],['Reader',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['$formatService','io.scif.services.FormatService']]]

Clazz.newMeth(C$, 'makeSuffixArray$', function () {
return this.$formatService.getFormatFromClass$Class(Clazz.getClass($I$(6))).getSuffixes$();
});

Clazz.newMeth(C$, 'openBufferedImage$io_scif_formats_TIFFJAIFormat_Metadata$J', function (meta, planeIndex) {
meta.universe$().setVar$S$J("planeIndex", planeIndex);
var img;
try {
meta.universe$().exec$S("img = dec.decodeAsRenderedImage(planeIndex)");
img=meta.universe$().exec$S("new NullOpImage(img, null, OpImage.OP_IO_BOUND, null)");
} catch (exc) {
if (Clazz.exceptionOf(exc,"org.scijava.util.ReflectException")){
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$Throwable,[exc]);
} else {
throw exc;
}
}
return $I$(2).convertRenderedImage$java_awt_image_RenderedImage(img);
}, 1);
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.TIFFJAIFormat',null,['org.scijava.plugin.Plugin']],['type="io.scif.Format.class" name="Tagged Image File Format" priority="-10001.0" ']],
  [['$formatService','io.scif.services.FormatService',null,['org.scijava.plugin.Parameter']],['']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.TIFFJAIFormat, "Metadata", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractMetadata');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['numPages'],'O',['r','org.scijava.util.ReflectedUniverse']]]

Clazz.newMeth(C$, 'universe$', function () {
return this.r;
});

Clazz.newMeth(C$, 'setUniverse$org_scijava_util_ReflectedUniverse', function (r) {
this.r=r;
});

Clazz.newMeth(C$, 'getNumPages$', function () {
return this.numPages;
});

Clazz.newMeth(C$, 'setNumPages$I', function (numPages) {
this.numPages=numPages;
});

Clazz.newMeth(C$, 'populateImageMetadata$', function () {
this.createImageMetadata$I(1);
var m=this.get$I(0);
var img=null;
try {
img=P$.TIFFJAIFormat.openBufferedImage$io_scif_formats_TIFFJAIFormat_Metadata$J(this, 0);
} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.FormatException")){
this.log$().error$O$Throwable("Invalid image stream", e);
return;
} else {
throw e;
}
}
m.setAxisLength$net_imagej_axis_AxisType$J($I$(1).CHANNEL, img.getSampleModel$().getNumBands$());
m.setAxisLength$net_imagej_axis_AxisType$J($I$(1).X, img.getWidth$());
m.setAxisLength$net_imagej_axis_AxisType$J($I$(1).Y, img.getHeight$());
m.setAxisLength$net_imagej_axis_AxisType$J($I$(1).TIME, this.numPages);
m.setPlanarAxisCount$I(3);
m.setPixelType$I($I$(2).getPixelType$java_awt_image_BufferedImage(img));
m.setLittleEndian$Z(false);
m.setMetadataComplete$Z(true);
m.setIndexed$Z(false);
m.setFalseColor$Z(false);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TIFFJAIFormat, "Parser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractParser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['typedParse$org_scijava_io_handle_DataHandle$io_scif_formats_TIFFJAIFormat_Metadata$io_scif_config_SCIFIOConfig','typedParse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig'], function (stream, meta, config) {
this.log$().info$O("Checking for JAI");
var r=null;
try {
r=Clazz.new_($I$(3,1));
r.exec$S("import javax.media.jai.NullOpImage");
r.exec$S("import javax.media.jai.OpImage");
r.exec$S("import com.sun.media.jai.codec.FileSeekableStream");
r.exec$S("import com.sun.media.jai.codec.ImageDecoder");
r.exec$S("import com.sun.media.jai.codec.ImageCodec");
} catch (exc) {
if (Clazz.exceptionOf(exc,"org.scijava.util.ReflectException")){
throw Clazz.new_(Clazz.load('io.scif.MissingLibraryException').c$$S$Throwable,["Java Advanced Imaging (JAI) is required to read some TIFF files. Please install JAI from https://jai.dev.java.net/", exc]);
} else {
throw exc;
}
}
meta.setUniverse$org_scijava_util_ReflectedUniverse(r);
this.log$().info$O("Reading movie dimensions");
var location=stream.get$();
if (Clazz.instanceOf(location, "org.scijava.io.location.FileLocation")) {
var fl=location;
r.setVar$S$O("file", Clazz.new_($I$(4,1).c$$java_io_File$S,[fl.getFile$(), "r"]));
} else {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Unsupported Location type" + location.getClass$().getName$()]);
}r.setVar$S$O("tiff", "tiff");
r.setVar$S$O("param", null);
var numPages;
try {
r.exec$S("s = new FileSeekableStream(file)");
r.exec$S("dec = ImageCodec.createImageDecoder(tiff, s, param)");
numPages=(r.exec$S("dec.getNumPages()")).intValue$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"org.scijava.util.ReflectException")){
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$Throwable,[exc]);
} else {
throw exc;
}
}
if (numPages < 0) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Invalid page count: " + numPages]);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TIFFJAIFormat, "Reader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.gui.BufferedImageReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'createDomainArray$', function () {
return Clazz.array(String, -1, ["Graphics"]);
});

Clazz.newMeth(C$, ['openPlane$I$J$io_scif_BufferedImagePlane$net_imglib2_Interval$io_scif_config_SCIFIOConfig','openPlane$I$J$TP$net_imglib2_Interval$io_scif_config_SCIFIOConfig'], function (imageIndex, planeIndex, plane, bounds, config) {
$I$(5).checkPlaneForReading$io_scif_Metadata$I$J$I$net_imglib2_Interval(this.getMetadata$(), imageIndex, planeIndex, -1, bounds);
var img=P$.TIFFJAIFormat.openBufferedImage$io_scif_formats_TIFFJAIFormat_Metadata$J(this.getMetadata$(), planeIndex);
plane.setData$java_awt_image_BufferedImage($I$(2).getSubimage$java_awt_image_BufferedImage$Z$net_imglib2_Interval(img, this.getMetadata$().get$I(imageIndex).isLittleEndian$(), bounds));
return plane;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:41 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
