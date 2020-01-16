(function(){var P$=Clazz.newPackage("io.scif.formats"),I$=[[0,'net.imagej.axis.Axes','io.scif.util.FormatTools','org.scijava.util.ArrayUtils']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FITSFormat", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.AbstractFormat');
C$.$classes$=[['Metadata',9],['Parser',9],['Reader',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'makeSuffixArray$', function () {
return Clazz.array(String, -1, ["fits", "fts"]);
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.FITSFormat',null,['org.scijava.plugin.Plugin']],['type="io.scif.Format.class" name="Flexible Image Transport System" ']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.FITSFormat, "Metadata", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractMetadata');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['pixelOffset']]]

Clazz.newMeth(C$, 'getPixelOffset$', function () {
return this.pixelOffset;
});

Clazz.newMeth(C$, 'setPixelOffset$J', function (pixelOffset) {
this.pixelOffset=pixelOffset;
});

Clazz.newMeth(C$, 'populateImageMetadata$', function () {
var iMeta=this.get$I(0);
if (iMeta.getAxisLength$net_imagej_axis_AxisType($I$(1).Z) == 0) iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(1).Z, 1);
var planeSize=(iMeta.getAxisLength$net_imagej_axis_AxisType($I$(1).X)|0) * (iMeta.getAxisLength$net_imagej_axis_AxisType($I$(1).Y)|0) * $I$(2).getBytesPerPixel$I(iMeta.getPixelType$()) ;
try {
if ($I$(3).safeMultiply64$JA([planeSize, iMeta.getAxisLength$net_imagej_axis_AxisType($I$(1).Z)]) > (this.getSource$().length$() - this.pixelOffset)) {
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(1).Z, ((((this.getSource$().length$() - this.pixelOffset)/planeSize|0))|0));
}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.log$().error$O$Throwable("Failed to determine input stream length", e);
} else {
throw e;
}
}
iMeta.setAxisTypes$net_imagej_axis_AxisTypeA([$I$(1).X, $I$(1).Y, $I$(1).Z]);
iMeta.setPlanarAxisCount$I(2);
iMeta.setLittleEndian$Z(false);
iMeta.setIndexed$Z(false);
iMeta.setFalseColor$Z(false);
iMeta.setMetadataComplete$Z(true);
});

Clazz.newMeth(C$, 'close$', function () {
this.pixelOffset=0;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.FITSFormat, "Parser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractParser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['typedParse$org_scijava_io_handle_DataHandle$io_scif_formats_FITSFormat_Metadata$io_scif_config_SCIFIOConfig','typedParse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig'], function (stream, meta, config) {
meta.createImageMetadata$I(1);
var iMeta=meta.get$I(0);
var line=this.getSource$().readString$I(80);
if (!line.startsWith$S("SIMPLE")) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Unsupported FITS file."]);
}var key="";
var value="";
while (true){
line=this.getSource$().readString$I(80);
var ndx=line.indexOf$S("=");
var comment=line.indexOf$S$I("/", ndx);
if (comment < 0) comment=line.length$();
if (ndx >= 0) {
key=line.substring$I$I(0, ndx).trim$();
value=line.substring$I$I(ndx + 1, comment).trim$();
} else key=line.trim$();
if (key.equals$O("END") && iMeta.getAxisLength$net_imagej_axis_AxisType($I$(1).X) > 0 ) break;
if (key.equals$O("BITPIX")) {
var bits=Integer.parseInt$S(value);
var fp=bits < 0;
var signed=bits != 8;
var bytes=(Math.abs(bits)/8|0);
iMeta.setPixelType$I($I$(2).pixelTypeFromBytes$I$Z$Z(bytes, signed, fp));
iMeta.setBitsPerPixel$I(Math.abs(bits));
} else if (key.equals$O("NAXIS1")) iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(1).X, Integer.parseInt$S(value));
 else if (key.equals$O("NAXIS2")) iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(1).Y, Integer.parseInt$S(value));
 else if (key.equals$O("NAXIS3")) iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(1).Z, Integer.parseInt$S(value));
meta.getTable$().put$TK$TV(key, value);
}
while (this.getSource$().read$() == 32){
}
meta.setPixelOffset$J(this.getSource$().offset$() - 1);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.FITSFormat, "Reader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.ByteArrayReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'createDomainArray$', function () {
return Clazz.array(String, -1, ["Astronomy", "Unknown"]);
});

Clazz.newMeth(C$, ['openPlane$I$J$io_scif_ByteArrayPlane$net_imglib2_Interval$io_scif_config_SCIFIOConfig','openPlane$I$J$TP$net_imglib2_Interval$io_scif_config_SCIFIOConfig'], function (imageIndex, planeIndex, plane, bounds, config) {
var buf=plane.getData$();
$I$(2).checkPlaneForReading$io_scif_Metadata$I$J$I$net_imglib2_Interval(this.getMetadata$(), imageIndex, planeIndex, buf.length, bounds);
this.getHandle$().seek$J(this.getMetadata$().getPixelOffset$() + planeIndex * $I$(2).getPlaneSize$io_scif_Reader$I(this, imageIndex));
return this.readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$TP(this.getHandle$(), imageIndex, bounds, plane);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:39 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
