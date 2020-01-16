(function(){var P$=Clazz.newPackage("io.scif.formats"),I$=[[0,'net.imagej.axis.Axes','io.scif.util.FormatTools',['org.scijava.io.handle.DataHandle','.ByteOrder'],'net.imglib2.display.ColorTable8']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PCXFormat", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.AbstractFormat');
C$.$classes$=[['Metadata',9],['Checker',9],['Parser',9],['Reader',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'makeSuffixArray$', function () {
return Clazz.array(String, -1, ["pcx"]);
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.PCXFormat',null,['org.scijava.plugin.Plugin']],['type="io.scif.Format.class" name="PCX" ']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.PCXFormat, "Metadata", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractMetadata', 'io.scif.HasColorTable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['bytesPerLine','nColorPlanes'],'L',['offset'],'O',['lut','net.imglib2.display.ColorTable8']]]

Clazz.newMeth(C$, 'getOffset$', function () {
return this.offset;
});

Clazz.newMeth(C$, 'setOffset$J', function (offset) {
this.offset=offset;
});

Clazz.newMeth(C$, 'getBytesPerLine$', function () {
return this.bytesPerLine;
});

Clazz.newMeth(C$, 'setBytesPerLine$I', function (bytesPerLine) {
this.bytesPerLine=bytesPerLine;
});

Clazz.newMeth(C$, 'getnColorPlanes$', function () {
return this.nColorPlanes;
});

Clazz.newMeth(C$, 'setnColorPlanes$I', function (nColorPlanes) {
this.nColorPlanes=nColorPlanes;
});

Clazz.newMeth(C$, 'populateImageMetadata$', function () {
var iMeta=this.get$I(0);
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(1).CHANNEL, this.nColorPlanes);
iMeta.setPlanarAxisCount$I(iMeta.getAxisLength$net_imagej_axis_AxisType($I$(1).CHANNEL) > 1 ? 3 : 2);
iMeta.setPixelType$I(1);
});

Clazz.newMeth(C$, 'close$Z', function (fileOnly) {
C$.superclazz.prototype.close$Z.apply(this, [fileOnly]);
if (!fileOnly) {
this.offset=0;
this.bytesPerLine=0;
this.nColorPlanes=0;
this.lut=null;
}});

Clazz.newMeth(C$, ['getColorTable$I$J','getColorTable$'], function (imageIndex, planeIndex) {
return this.lut;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PCXFormat, "Checker", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractChecker');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isFormat$org_scijava_io_handle_DataHandle', function (stream) {
var blockLen=1;
if (!$I$(2).validStream$org_scijava_io_handle_DataHandle$I$Z(stream, 1, false)) return false;
return stream.read$() == 10;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PCXFormat, "Parser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractParser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['typedParse$org_scijava_io_handle_DataHandle$io_scif_formats_PCXFormat_Metadata$io_scif_config_SCIFIOConfig','typedParse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig'], function (stream, meta, config) {
this.log$().info$O("Reading file header");
meta.createImageMetadata$I(1);
var iMeta=meta.get$I(0);
iMeta.setLittleEndian$Z(true);
stream.setOrder$org_scijava_io_handle_DataHandle_ByteOrder($I$(3).LITTLE_ENDIAN);
stream.seek$J(1);
var version=stream.read$();
stream.skipBytes$I(1);
iMeta.setBitsPerPixel$I(stream.read$());
var xMin=stream.readShort$();
var yMin=stream.readShort$();
var xMax=stream.readShort$();
var yMax=stream.readShort$();
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(1).X, xMax - xMin);
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(1).Y, yMax - yMin);
stream.skipBytes$I(version == 5 ? 53 : 51);
meta.setnColorPlanes$I(stream.read$());
meta.setBytesPerLine$I(stream.readShort$());
var paletteType=stream.readShort$();
meta.setOffset$J(stream.offset$() + 58);
if (version == 5 && meta.getnColorPlanes$() == 1 ) {
stream.seek$J(stream.length$() - 768);
var lut=Clazz.array(Byte.TYPE, [3, 256]);
for (var i=0; i < lut[0].length; i++) {
for (var j=0; j < lut.length; j++) {
lut[j][i]=(stream.readByte$()|0);
}
}
meta.lut=Clazz.new_($I$(4,1).c$$BAA,[lut]);
iMeta.setIndexed$Z(true);
}meta.getTable$().put$TK$TV("Palette type", new Integer(paletteType));
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PCXFormat, "Reader", function(){
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
plane.setColorTable$net_imglib2_display_ColorTable(meta.getColorTable$I$J(imageIndex, planeIndex));
var buf=plane.getData$();
$I$(2).checkPlaneForReading$io_scif_Metadata$I$J$I$net_imglib2_Interval(meta, imageIndex, planeIndex, buf.length, bounds);
this.getHandle$().seek$J(meta.getOffset$());
var b=Clazz.array(Byte.TYPE, [meta.getBytesPerLine$() * (meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(1).Y)|0) * meta.getnColorPlanes$() ]);
var pt=0;
while (pt < b.length){
var val=this.getHandle$().read$() & 255;
if (((val & 192) >> 6) == 3) {
var len=val & 63;
val=this.getHandle$().read$() & 255;
for (var q=0; q < len; q++) {
b[pt++]=((val|0)|0);
if ((pt % meta.getBytesPerLine$()) == 0) {
break;
}}
} else b[pt++]=(((val & 255)|0)|0);
}
var xIndex=meta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(1).X);
var yIndex=meta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(1).Y);
var x=(bounds.min$I(xIndex)|0);
var y=(bounds.min$I(yIndex)|0);
var w=(bounds.dimension$I(xIndex)|0);
var h=(bounds.dimension$I(yIndex)|0);
var src=y * meta.getnColorPlanes$() * meta.getBytesPerLine$() ;
for (var row=0; row < h; row++) {
var rowOffset=row * meta.getnColorPlanes$() * meta.getBytesPerLine$() ;
for (var c=0; c < meta.getnColorPlanes$(); c++) {
System.arraycopy$O$I$O$I$I(b, src + rowOffset + x , buf, c * w * h  + row * w, w);
rowOffset+=meta.getBytesPerLine$();
}
}
return plane;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:40 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
