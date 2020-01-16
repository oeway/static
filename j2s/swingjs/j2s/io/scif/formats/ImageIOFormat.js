(function(){var P$=Clazz.newPackage("io.scif.formats"),I$=[[0,'net.imagej.axis.Axes','io.scif.gui.AWTImageTools','java.io.DataInputStream','org.scijava.io.handle.DataHandleInputStream','javax.imageio.ImageIO','io.scif.util.SCIFIOMetadataTools','io.scif.util.FormatTools','org.scijava.io.handle.DataHandleOutputStream','io.scif.Metadata',['io.scif.formats.ImageIOFormat','.Metadata']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ImageIOFormat", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.AbstractFormat');
C$.$classes$=[['Metadata',9],['Parser',9],['Reader',9],['Writer',9],['ImageIOTranslator',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImageIOFormat, "Metadata", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractMetadata');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['img','java.awt.image.BufferedImage']]]

Clazz.newMeth(C$, 'getImg$', function () {
return this.img;
});

Clazz.newMeth(C$, 'setImg$java_awt_image_BufferedImage', function (img) {
this.img=img;
});

Clazz.newMeth(C$, 'populateImageMetadata$', function () {
var iMeta=this.get$I(0);
if (this.img != null ) {
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(1).X, this.img.getWidth$());
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(1).Y, this.img.getHeight$());
iMeta.setPlanarAxisCount$I(2);
var channels=this.img.getRaster$().getNumBands$();
if (channels > 1) {
iMeta.setPlanarAxisCount$I(3);
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(1).CHANNEL, this.img.getRaster$().getNumBands$());
}iMeta.setPixelType$I($I$(2).getPixelType$java_awt_image_BufferedImage(this.img));
}iMeta.setLittleEndian$Z(false);
iMeta.setMetadataComplete$Z(true);
iMeta.setIndexed$Z(false);
iMeta.setFalseColor$Z(false);
});

Clazz.newMeth(C$, 'close$Z', function (fileOnly) {
C$.superclazz.prototype.close$Z.apply(this, [fileOnly]);
if (!fileOnly) {
this.img=null;
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImageIOFormat, "Parser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractParser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['typedParse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig'], function (handle, meta, config) {
this.log$().info$O("Populating metadata");
var dis=Clazz.new_($I$(3,1).c$$java_io_InputStream,[Clazz.new_(1,{L:"org.scijava.io.location.Location"},$I$(4,1).c$$org_scijava_io_handle_DataHandle,[handle])]);
var img=$I$(5).read$java_io_InputStream(dis);
if (img == null ) throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Invalid image stream"]);
meta.setImg$java_awt_image_BufferedImage(img);
meta.createImageMetadata$I(1);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImageIOFormat, "Reader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.gui.BufferedImageReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'createDomainArray$', function () {
return Clazz.array(String, -1, ["Graphics"]);
});

Clazz.newMeth(C$, ['openPlane$I$J$io_scif_BufferedImagePlane$net_imglib2_Interval$io_scif_config_SCIFIOConfig','openPlane$I$J$TP$net_imglib2_Interval$io_scif_config_SCIFIOConfig'], function (imageIndex, planeIndex, plane, bounds, config) {
var meta=this.getMetadata$();
plane.setData$java_awt_image_BufferedImage($I$(2).getSubimage$java_awt_image_BufferedImage$Z$net_imglib2_Interval(meta.getImg$(), meta.get$I(imageIndex).isLittleEndian$(), bounds));
return plane;
});

Clazz.newMeth(C$, 'getOptimalTileHeight$I', function (imageIndex) {
return this.getMetadata$().get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(1).Y);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImageIOFormat, "Writer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractWriter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['kind']]]

Clazz.newMeth(C$, 'c$$S', function (kind) {
Clazz.super_(C$, this);
this.kind=kind;
}, 1);

Clazz.newMeth(C$, 'makeCompressionTypes$', function () {
return Clazz.array(String, [0]);
});

Clazz.newMeth(C$, 'writePlane$I$J$io_scif_Plane$net_imglib2_Interval', function (imageIndex, planeIndex, plane, bounds) {
var meta=this.getMetadata$();
if (!$I$(6).wholePlane$I$io_scif_Metadata$net_imglib2_Interval(imageIndex, meta, bounds)) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["ImageIOWriter does not support writing tiles"]);
}var img=null;
if (!(Clazz.instanceOf(plane, "io.scif.BufferedImagePlane"))) {
var imageMetadata=meta.get$I(imageIndex);
var type=imageMetadata.getPixelType$();
img=$I$(2).makeImage$BA$I$I$I$Z$I$Z$Z$Z(plane.getBytes$(), (imageMetadata.getAxisLength$net_imagej_axis_AxisType($I$(1).X)|0), (imageMetadata.getAxisLength$net_imagej_axis_AxisType($I$(1).Y)|0), (imageMetadata.getAxisLength$net_imagej_axis_AxisType($I$(1).CHANNEL)|0), plane.getImageMetadata$().getInterleavedAxisCount$() > 0, $I$(7).getBytesPerPixel$I(type), $I$(7).isFloatingPoint$I(type), imageMetadata.isLittleEndian$(), $I$(7).isSigned$I(type));
} else {
img=(plane).getData$();
}$I$(5).write$java_awt_image_RenderedImage$S$java_io_OutputStream(img, this.kind, Clazz.new_(1,{L:"org.scijava.io.location.Location"},$I$(8,1).c$$org_scijava_io_handle_DataHandle,[this.getHandle$()]));
});

Clazz.newMeth(C$, 'getPixelTypes$S', function (codec) {
return Clazz.array(Integer.TYPE, -1, [1, 3]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ImageIOFormat, "ImageIOTranslator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractTranslator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'source$', function () {
return Clazz.getClass($I$(9),['add$io_scif_ImageMetadata','createImageMetadata$I','get$I','getAll$','getDatasetName$','getDatasetSize$','getDestinationLocation$','getImageCount$','getSource$','getSourceLocation$','isFiltered$','populateImageMetadata$','setDatasetName$S','setDestinationLocation$org_scijava_io_location_Location','setFiltered$Z','setSource$org_scijava_io_handle_DataHandle','setSourceLocation$org_scijava_io_location_Location']);
});

Clazz.newMeth(C$, 'dest$', function () {
return Clazz.getClass($I$(10));
});

Clazz.newMeth(C$, ['translateImageMetadata$java_util_List$io_scif_formats_ImageIOFormat_Metadata','translateImageMetadata$java_util_List$TN'], function (source, dest) {
dest.createImageMetadata$I(1);
var imgMeta=source.get$I(0);
dest.setImg$java_awt_image_BufferedImage($I$(2).blankImage$io_scif_ImageMetadata$JA$I(imgMeta, imgMeta.getAxesLengthsPlanar$(), imgMeta.getPixelType$()));
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.ImageIOFormat.ImageIOTranslator',null,['org.scijava.plugin.Plugin']],['type="io.scif.Translator.class" priority="-100.0" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:40 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
