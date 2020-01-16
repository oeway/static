(function(){var P$=Clazz.newPackage("io.scif.formats"),I$=[[0,'net.imagej.axis.Axes','io.scif.util.FormatTools',['org.scijava.io.handle.DataHandle','.ByteOrder'],'net.imglib2.display.ColorTable8','io.scif.MetadataLevel','io.scif.codec.BitBuffer','io.scif.util.ImageTools']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BMPFormat", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.AbstractFormat');
C$.$classes$=[['Metadata',9],['Checker',9],['Parser',9],['Reader',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'makeSuffixArray$', function () {
return Clazz.array(String, -1, ["bmp"]);
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.BMPFormat',null,['org.scijava.plugin.Plugin']],['type="io.scif.Format.class" name="Windows Bitmap" ']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.BMPFormat, "Metadata", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractMetadata', 'io.scif.HasColorTable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.invertY=false;
}, 1);

C$.$fields$=[['Z',['invertY'],'I',['compression'],'L',['global'],'O',['palette','net.imglib2.display.ColorTable8']]]

Clazz.newMeth(C$, 'getCompression$', function () {
return this.compression;
});

Clazz.newMeth(C$, 'setCompression$I', function (compression) {
this.compression=compression;
});

Clazz.newMeth(C$, 'getGlobal$', function () {
return this.global;
});

Clazz.newMeth(C$, 'setGlobal$J', function (global) {
this.global=global;
});

Clazz.newMeth(C$, 'isInvertY$', function () {
return this.invertY;
});

Clazz.newMeth(C$, 'setInvertY$Z', function (invertY) {
this.invertY=invertY;
});

Clazz.newMeth(C$, 'populateImageMetadata$', function () {
this.log$().info$O("Populating metadata");
var bpp=this.get$I(0).getBitsPerPixel$();
var iMeta=this.get$I(0);
iMeta.setAxisTypes$net_imagej_axis_AxisTypeA([$I$(1).X, $I$(1).Y]);
iMeta.setPlanarAxisCount$I(2);
var sizeC=bpp != 24 ? 1 : 3;
if (bpp == 32) sizeC=4;
if (bpp > 8) bpp=(bpp/(sizeC)|0);
iMeta.setBitsPerPixel$I(bpp);
switch (bpp) {
case 16:
iMeta.setPixelType$I(3);
break;
case 32:
iMeta.setPixelType$I(5);
break;
default:
iMeta.setPixelType$I(1);
}
iMeta.setLittleEndian$Z(true);
iMeta.setMetadataComplete$Z(true);
iMeta.setIndexed$Z(this.getColorTable$I$J(0, 0) != null );
if (iMeta.isIndexed$()) {
sizeC=1;
}if (sizeC > 1 || iMeta.isIndexed$() ) {
iMeta.addAxis$net_imagej_axis_AxisType$J($I$(1).CHANNEL, sizeC);
if (sizeC > 1) iMeta.setAxisTypes$net_imagej_axis_AxisTypeA([$I$(1).CHANNEL, $I$(1).X, $I$(1).Y]);
iMeta.setPlanarAxisCount$I(3);
}iMeta.setFalseColor$Z(false);
});

Clazz.newMeth(C$, 'close$Z', function (fileOnly) {
C$.superclazz.prototype.close$Z.apply(this, [fileOnly]);
if (!fileOnly) {
this.compression=0;
this.global=0;
this.palette=null;
this.invertY=false;
}});

Clazz.newMeth(C$, ['getColorTable$I$J','getColorTable$'], function (imageIndex, planeIndex) {
return this.palette;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BMPFormat, "Checker", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractChecker');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isFormat$org_scijava_io_handle_DataHandle', function (stream) {
var blockLen=2;
if (!$I$(2).validStream$org_scijava_io_handle_DataHandle$I$Z(stream, 2, false)) return false;
return stream.readString$I(2).startsWith$S("BM");
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BMPFormat, "Parser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractParser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['typedParse$org_scijava_io_handle_DataHandle$io_scif_formats_BMPFormat_Metadata$io_scif_config_SCIFIOConfig','typedParse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig'], function (stream, meta, config) {
meta.createImageMetadata$I(1);
var iMeta=meta.get$I(0);
var globalTable=meta.getTable$();
stream.setOrder$org_scijava_io_handle_DataHandle_ByteOrder($I$(3).LITTLE_ENDIAN);
globalTable.put$TK$TV("Magic identifier", this.getSource$().readString$I(2));
globalTable.put$TK$TV("File size (in bytes)", new Integer(this.getSource$().readInt$()));
this.getSource$().skipBytes$I(4);
meta.setGlobal$J(this.getSource$().readInt$());
this.getSource$().skipBytes$I(4);
var sizeX=0;
var sizeY=0;
sizeX=this.getSource$().readInt$();
sizeY=this.getSource$().readInt$();
iMeta.addAxis$net_imagej_axis_AxisType$J($I$(1).X, sizeX);
iMeta.addAxis$net_imagej_axis_AxisType$J($I$(1).Y, sizeY);
if (sizeX < 1) {
this.log$().trace$O("Invalid width: " + sizeX + "; using the absolute value" );
sizeX=Math.abs(sizeX);
}if (sizeY < 1) {
this.log$().trace$O("Invalid height: " + sizeY + "; using the absolute value" );
sizeY=Math.abs(sizeY);
meta.setInvertY$Z(true);
}globalTable.put$TK$TV("Color planes", new Short(this.getSource$().readShort$()));
var bpp=this.getSource$().readShort$();
iMeta.setBitsPerPixel$I(bpp);
meta.setCompression$I(this.getSource$().readInt$());
this.getSource$().skipBytes$I(4);
var pixelSizeX=this.getSource$().readInt$();
var pixelSizeY=this.getSource$().readInt$();
var nColors=this.getSource$().readInt$();
if (nColors == 0 && bpp != 32  && bpp != 24 ) {
nColors=bpp < 8 ? 1 << bpp : 256;
}this.getSource$().skipBytes$I(4);
if (nColors != 0 && bpp == 8 ) {
var palette=Clazz.array(Byte.TYPE, [3, 256]);
for (var i=0; i < nColors; i++) {
for (var j=palette.length - 1; j >= 0; j--) {
palette[j][i]=(this.getSource$().readByte$()|0);
}
this.getSource$().skipBytes$I(1);
}
meta.palette=Clazz.new_($I$(4,1).c$$BAA,[palette]);
} else if (nColors != 0) this.getSource$().skipBytes$I(nColors * 4);
if (config.parserGetLevel$() !== $I$(5).MINIMUM ) {
globalTable.put$TK$TV("Indexed color", new Boolean(meta.getColorTable$I$J(0, 0) != null ));
globalTable.put$TK$TV("Image width", new Integer(sizeX));
globalTable.put$TK$TV("Image height", new Integer(sizeY));
globalTable.put$TK$TV("Bits per pixel", new Short(bpp));
var comp="invalid";
switch (meta.getCompression$()) {
case 0:
comp="None";
break;
case 1:
comp="8 bit run length encoding";
break;
case 2:
comp="4 bit run length encoding";
break;
case 3:
comp="RGB bitmap with mask";
break;
}
globalTable.put$TK$TV("Compression type", comp);
globalTable.put$TK$TV("X resolution", new Integer(pixelSizeX));
globalTable.put$TK$TV("Y resolution", new Integer(pixelSizeY));
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BMPFormat, "Reader", function(){
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
var imageMeta=meta.get$I(imageIndex);
var xIndex=imageMeta.getAxisIndex$net_imagej_axis_AxisType($I$(1).X);
var yIndex=imageMeta.getAxisIndex$net_imagej_axis_AxisType($I$(1).Y);
var x=(bounds.min$I(xIndex)|0);
var y=(bounds.min$I(yIndex)|0);
var w=(bounds.dimension$I(xIndex)|0);
var h=(bounds.dimension$I(yIndex)|0);
var buf=plane.getData$();
var compression=meta.getCompression$();
var bpp=imageMeta.getBitsPerPixel$();
var sizeX=(imageMeta.getAxisLength$net_imagej_axis_AxisType($I$(1).X)|0);
var sizeY=(imageMeta.getAxisLength$net_imagej_axis_AxisType($I$(1).Y)|0);
var sizeC=(imageMeta.getAxisLength$net_imagej_axis_AxisType($I$(1).CHANNEL)|0);
$I$(2).checkPlaneForReading$io_scif_Metadata$I$J$I$net_imglib2_Interval(meta, imageIndex, planeIndex, buf.length, bounds);
if (compression != 0 && this.getHandle$().length$() < $I$(2).getPlaneSize$io_scif_Reader$I(this, imageIndex) ) {
throw Clazz.new_(Clazz.load('io.scif.UnsupportedCompressionException').c$$S,[compression + " not supported"]);
}var rowsToSkip=meta.isInvertY$() ? y : sizeY - (h + y);
var rowLength=sizeX * (imageMeta.isIndexed$() ? 1 : sizeC);
this.getHandle$().seek$J(meta.getGlobal$() + rowsToSkip * rowLength);
var pad=(((rowLength * bpp)/8|0)) % 2;
if (pad == 0) {
pad=(((rowLength * bpp)/8|0)) % 4;
} else {
pad*=sizeC;
}var planeSize=sizeX * sizeC * h ;
if (bpp >= 8) planeSize*=((bpp/8|0));
 else planeSize=(planeSize/(((8/bpp|0)))|0);
planeSize+=pad * h;
if (planeSize + this.getHandle$().offset$() > this.getHandle$().length$()) {
planeSize-=(pad * h);
if (planeSize + sizeY + this.getHandle$().offset$()  <= this.getHandle$().length$()) {
pad=1;
planeSize+=h;
} else {
pad=0;
}}this.getHandle$().skipBytes$I(rowsToSkip * pad);
var rawPlane=Clazz.array(Byte.TYPE, [planeSize]);
this.getHandle$().read$BA(rawPlane);
var bb=Clazz.new_($I$(6,1).c$$BA,[rawPlane]);
var palette=meta.getColorTable$I$J(0, 0);
plane.setColorTable$net_imglib2_display_ColorTable(palette);
var effectiveC=palette != null  && palette.getLength$() > 0  ? 1 : sizeC;
for (var row=h - 1; row >= 0; row--) {
var rowIndex=meta.isInvertY$() ? h - 1 - row  : row;
bb.skipBits$J(x * bpp * effectiveC );
for (var i=0; i < w * effectiveC; i++) {
if (bpp <= 8) {
buf[rowIndex * w * effectiveC  + i]=(((bb.getBits$I(bpp) & 255)|0)|0);
} else {
for (var b=0; b < (bpp/8|0); b++) {
buf[((bpp/8|0)) * (rowIndex * w * effectiveC  + i) + b]=(((bb.getBits$I(8) & 255)|0)|0);
}
}}
if (row > 0) {
bb.skipBits$J((sizeX - w - x ) * bpp * effectiveC  + pad * 8);
}}
if (imageMeta.getAxisLength$net_imagej_axis_AxisType($I$(1).CHANNEL) > 1) {
$I$(7).bgrToRgb$BA$Z$I$I(buf, imageMeta.getInterleavedAxisCount$() > 0, 1, (imageMeta.getAxisLength$net_imagej_axis_AxisType($I$(1).CHANNEL)|0));
}return plane;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:39 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
