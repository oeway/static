(function(){var P$=Clazz.newPackage("io.scif.formats"),I$=[[0,'net.imagej.axis.Axes','io.scif.codec.JPEGTileDecoder','io.scif.util.FormatTools']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JPEGTileFormat", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.AbstractFormat');
C$.$classes$=[['Metadata',9],['Parser',9],['Reader',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'makeSuffixArray$', function () {
return Clazz.array(String, -1, ["jpg", "jpeg"]);
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.JPEGTileFormat',null,['org.scijava.plugin.Plugin']],['type="io.scif.Format.class" name="Tile JPEG" priority="-100.0" ']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.JPEGTileFormat, "Metadata", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractMetadata');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['decoder','io.scif.codec.JPEGTileDecoder']]]

Clazz.newMeth(C$, 'getDecoder$', function () {
return this.decoder;
});

Clazz.newMeth(C$, 'setDecoder$io_scif_codec_JPEGTileDecoder', function (decoder) {
this.decoder=decoder;
});

Clazz.newMeth(C$, 'populateImageMetadata$', function () {
this.createImageMetadata$I(1);
var iMeta=this.get$I(0);
iMeta.setAxisTypes$net_imagej_axis_AxisTypeA([$I$(1).CHANNEL, $I$(1).X, $I$(1).Y]);
iMeta.setPlanarAxisCount$I(3);
iMeta.setLittleEndian$Z(false);
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(1).X, this.decoder.getWidth$());
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(1).Y, this.decoder.getHeight$());
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(1).CHANNEL, (this.decoder.getScanline$I(0).length/iMeta.getAxisLength$net_imagej_axis_AxisType($I$(1).X)|0));
iMeta.setPixelType$I(1);
iMeta.setMetadataComplete$Z(true);
iMeta.setIndexed$Z(false);
});

Clazz.newMeth(C$, 'close$Z', function (fileOnly) {
if (!fileOnly) {
if (this.decoder != null ) {
this.decoder.close$();
}this.decoder=null;
}C$.superclazz.prototype.close$Z.apply(this, [fileOnly]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JPEGTileFormat, "Parser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractParser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['typedParse$org_scijava_io_handle_DataHandle$io_scif_formats_JPEGTileFormat_Metadata$io_scif_config_SCIFIOConfig','typedParse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig'], function (handle, meta, config) {
if (!handle.exists$() || handle.length$() == 0 ) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Trying to read from non-existing file!"]);
}var decoder=Clazz.new_($I$(2,1).c$$org_scijava_Context,[this.getContext$()]);
meta.setDecoder$io_scif_codec_JPEGTileDecoder(decoder);
decoder.initialize$org_scijava_io_handle_DataHandle$I$I(this.getSource$(), 0, 1);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JPEGTileFormat, "Reader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.ByteArrayReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'createDomainArray$', function () {
return Clazz.array(String, -1, ["Graphics"]);
});

Clazz.newMeth(C$, ['openPlane$I$J$io_scif_ByteArrayPlane$net_imglib2_Interval$io_scif_config_SCIFIOConfig','openPlane$I$J$TP$net_imglib2_Interval$io_scif_config_SCIFIOConfig'], function (imageIndex, planeIndex, plane, bounds, config) {
var meta=this.getMetadata$();
var buf=plane.getBytes$();
var xIndex=meta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(1).X);
var yIndex=meta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(1).Y);
var x=(bounds.min$I(xIndex)|0);
var y=(bounds.min$I(yIndex)|0);
var w=(bounds.dimension$I(xIndex)|0);
var h=(bounds.dimension$I(yIndex)|0);
$I$(3).checkPlaneForReading$io_scif_Metadata$I$J$I$net_imglib2_Interval(meta, imageIndex, planeIndex, buf.length, bounds);
var c=(meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(1).CHANNEL)|0);
for (var ty=y; ty < y + h; ty++) {
var scanline=meta.getDecoder$().getScanline$I(ty);
if (scanline == null ) {
meta.getDecoder$().initialize$org_scijava_io_handle_DataHandle$I(this.getHandle$(), 0);
scanline=meta.getDecoder$().getScanline$I(ty);
}System.arraycopy$O$I$O$I$I(scanline, c * x, buf, (ty - y) * c * w , c * w);
}
return plane;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:40 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
