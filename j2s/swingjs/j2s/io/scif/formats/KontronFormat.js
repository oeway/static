(function(){var P$=Clazz.newPackage("io.scif.formats"),I$=[[0,'net.imagej.axis.DefaultLinearAxis','net.imagej.axis.Axes',['org.scijava.io.handle.DataHandle','.ByteOrder'],'io.scif.formats.KontronFormat']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "KontronFormat", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.AbstractFormat');
C$.$classes$=[['Metadata',9],['Parser',9],['Checker',9],['Reader',9]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.KONTRON_ID=Clazz.array(Byte.TYPE, -1, [1, 0, 71, 18, 109, -80]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['KONTRON_ID','byte[]']]]

Clazz.newMeth(C$, 'makeSuffixArray$', function () {
return Clazz.array(String, -1, ["img"]);
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.KontronFormat',null,['org.scijava.plugin.Plugin']],['type="io.scif.Format.class" name="Kontron" ']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.KontronFormat, "Metadata", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractMetadata');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['width','height']]]

Clazz.newMeth(C$, 'getWidth$', function () {
return this.width;
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.height;
});

Clazz.newMeth(C$, 'setHeight$J', function (height) {
this.height=height;
});

Clazz.newMeth(C$, 'setWidth$J', function (width) {
this.width=width;
});

Clazz.newMeth(C$, 'populateImageMetadata$', function () {
this.createImageMetadata$I(1);
var metadata=this.get$I(0);
metadata.setLittleEndian$Z(true);
metadata.setBitsPerPixel$I(8);
metadata.setPixelType$I(1);
metadata.setOrderCertain$Z(true);
metadata.setPlanarAxisCount$I(2);
metadata.setAxes$net_imagej_axis_CalibratedAxisA([Clazz.new_($I$(1,1).c$$net_imagej_axis_AxisType,[$I$(2).X]), Clazz.new_($I$(1,1).c$$net_imagej_axis_AxisType,[$I$(2).Y])]);
metadata.setAxisLengths$JA(Clazz.array(Long.TYPE, -1, [this.width, this.height]));
});
C$.$getAnn$ = function(){ return [
[['width','long',null,['io.scif.Field']],['label="Width from file header" ']],
  [['height','.',null,['io.scif.Field']],['label="Height from file header" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.KontronFormat, "Parser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractParser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['typedParse$org_scijava_io_handle_DataHandle$io_scif_formats_KontronFormat_Metadata$io_scif_config_SCIFIOConfig','typedParse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig'], function (stream, meta, config) {
stream.setOrder$org_scijava_io_handle_DataHandle_ByteOrder($I$(3).LITTLE_ENDIAN);
stream.seek$J($I$(4).KONTRON_ID.length);
var width=stream.readShort$();
var height=stream.readShort$();
meta.setWidth$J(width);
meta.setHeight$J(height);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.KontronFormat, "Checker", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractChecker');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'suffixSufficient$', function () {
return false;
});

Clazz.newMeth(C$, 'suffixNecessary$', function () {
return false;
});

Clazz.newMeth(C$, 'isFormat$org_scijava_io_handle_DataHandle', function (stream) {
var fileStart=Clazz.array(Byte.TYPE, [$I$(4).KONTRON_ID.length]);
var read=stream.read$BA(fileStart);
if (read != $I$(4).KONTRON_ID.length) {
return false;
}for (var i=0; i < $I$(4).KONTRON_ID.length; i++) {
if (fileStart[i] != $I$(4).KONTRON_ID[i]) {
return false;
}}
return true;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.KontronFormat, "Reader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.ByteArrayReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'createDomainArray$', function () {
return Clazz.array(String, -1, ["Scanning Electron Microscopy (SEM)"]);
});

Clazz.newMeth(C$, ['openPlane$I$J$io_scif_ByteArrayPlane$net_imglib2_Interval$io_scif_config_SCIFIOConfig','openPlane$I$J$TP$net_imglib2_Interval$io_scif_config_SCIFIOConfig'], function (imageIndex, planeIndex, plane, bounds, config) {
var stream=this.getHandle$();
stream.seek$J(128);
return this.readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$TP(stream, imageIndex, bounds, plane);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:40 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
