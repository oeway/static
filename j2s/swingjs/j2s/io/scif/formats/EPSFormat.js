(function(){var P$=Clazz.newPackage("io.scif.formats"),p$1={},I$=[[0,'io.scif.DefaultImageMetadata','net.imagej.axis.Axes',['org.scijava.io.handle.DataHandle','.ByteOrder'],'org.scijava.io.location.BytesLocation','io.scif.formats.tiff.TiffParser','io.scif.util.FormatTools','io.scif.util.SCIFIOMetadataTools','StringBuilder','io.scif.Metadata',['io.scif.formats.EPSFormat','.Metadata']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EPSFormat", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.AbstractFormat');
C$.$classes$=[['Metadata',9],['Parser',9],['Reader',9],['Writer',9],['EPSTranslator',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'makeSuffixArray$', function () {
return Clazz.array(String, -1, ["eps", "epsi", "ps"]);
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.EPSFormat',null,['org.scijava.plugin.Plugin']],['type="io.scif.Format.class" name="Encapsulated PostScript" ']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.EPSFormat, "Metadata", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractMetadata');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['binary','isTiff'],'I',['start'],'O',['ifds','io.scif.formats.tiff.IFDList']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.add$io_scif_ImageMetadata(Clazz.new_($I$(1,1)));
this.get$I(0).setLittleEndian$Z(true);
}, 1);

Clazz.newMeth(C$, 'getIfds$', function () {
return this.ifds;
});

Clazz.newMeth(C$, 'setIfds$io_scif_formats_tiff_IFDList', function (ifds) {
this.ifds=ifds;
});

Clazz.newMeth(C$, 'getStart$', function () {
return this.start;
});

Clazz.newMeth(C$, 'setStart$I', function (start) {
this.start=start;
});

Clazz.newMeth(C$, 'isBinary$', function () {
return this.binary;
});

Clazz.newMeth(C$, 'setBinary$Z', function (binary) {
this.binary=binary;
});

Clazz.newMeth(C$, 'isTiff$', function () {
return this.isTiff;
});

Clazz.newMeth(C$, 'setTiff$Z', function (isTiff) {
this.isTiff=isTiff;
});

Clazz.newMeth(C$, 'populateImageMetadata$', function () {
if (this.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL) == 0) this.get$I(0).setAxisLength$net_imagej_axis_AxisType$J($I$(2).CHANNEL, 1);
if (this.get$I(0).getPixelType$() == 0) this.get$I(0).setPixelType$I(1);
if (this.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL) != 3) {
this.get$I(0).setPlanarAxisCount$I(2);
this.get$I(0).setAxisTypes$net_imagej_axis_AxisTypeA([$I$(2).X, $I$(2).Y, $I$(2).CHANNEL]);
} else {
this.get$I(0).setPlanarAxisCount$I(3);
this.get$I(0).setAxisTypes$net_imagej_axis_AxisTypeA([$I$(2).CHANNEL, $I$(2).X, $I$(2).Y]);
}});

Clazz.newMeth(C$, 'close$Z', function (fileOnly) {
C$.superclazz.prototype.close$Z.apply(this, [fileOnly]);
if (!fileOnly) {
this.isTiff=false;
this.ifds=null;
this.start=0;
this.binary=false;
}});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EPSFormat, "Parser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractParser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['dataHandleService','org.scijava.io.handle.DataHandleService']]]

Clazz.newMeth(C$, ['typedParse$org_scijava_io_handle_DataHandle$io_scif_formats_EPSFormat_Metadata$io_scif_config_SCIFIOConfig','typedParse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig'], function (stream, meta, config) {
meta.createImageMetadata$I(1);
var m=meta.get$I(0);
var globalTable=meta.getTable$();
this.log$().info$O("Verifying EPS format");
var line=this.getSource$().readLine$();
if (!line.trim$().startsWith$S("%!PS")) {
meta.setTiff$Z(true);
this.getSource$().setOrder$org_scijava_io_handle_DataHandle_ByteOrder($I$(3).LITTLE_ENDIAN);
this.getSource$().seek$J(20);
var offset=this.getSource$().readInt$();
var len=this.getSource$().readInt$();
var b=Clazz.array(Byte.TYPE, [len]);
this.getSource$().seek$J(offset);
this.getSource$().read$BA(b);
var loc=Clazz.new_($I$(4,1).c$$BA,[b]);
var bytes=this.dataHandleService.create$TD(loc);
var tp=Clazz.new_($I$(5,1).c$$org_scijava_Context$org_scijava_io_handle_DataHandle,[this.getContext$(), bytes]);
meta.setIfds$io_scif_formats_tiff_IFDList(tp.getIFDs$());
bytes.close$();
var firstIFD=meta.getIfds$().get$I(0);
m.setAxisLength$net_imagej_axis_AxisType$J($I$(2).CHANNEL, firstIFD.getSamplesPerPixel$());
m.setAxisLength$net_imagej_axis_AxisType$J($I$(2).X, (firstIFD.getImageWidth$()|0));
m.setAxisLength$net_imagej_axis_AxisType$J($I$(2).Y, (firstIFD.getImageLength$()|0));
if (m.getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL) == 2) m.setAxisLength$net_imagej_axis_AxisType$J($I$(2).CHANNEL, 4);
m.setLittleEndian$Z(firstIFD.isLittleEndian$());
m.setPixelType$I(firstIFD.getPixelType$());
m.setMetadataComplete$Z(true);
m.setIndexed$Z(false);
m.setFalseColor$Z(false);
return;
}this.log$().info$O("Finding image data");
meta.setBinary$Z(false);
var image="image";
var lineNum=1;
line=this.getSource$().readLine$().trim$();
m.setAxes$net_imagej_axis_CalibratedAxisA($I$(6).createAxes$net_imagej_axis_AxisTypeA([$I$(2).X, $I$(2).Y, $I$(2).CHANNEL]));
while (line != null  && !line.equals$O("%%EOF") ){
if (line.endsWith$S(image)) {
if (!line.startsWith$S(image)) {
if (line.contains$CharSequence("colorimage")) m.setAxisLength$net_imagej_axis_AxisType$J($I$(2).CHANNEL, 3);
var t=line.split$S(" ");
try {
m.setAxisLength$net_imagej_axis_AxisType$J($I$(2).X, Integer.parseInt$S(t[0]));
m.setAxisLength$net_imagej_axis_AxisType$J($I$(2).Y, Integer.parseInt$S(t[1]));
} catch (exc) {
if (Clazz.exceptionOf(exc,"NumberFormatException")){
this.log$().debug$O$Throwable("Could not parse image dimensions", exc);
m.setAxisLength$net_imagej_axis_AxisType$J($I$(2).CHANNEL, Integer.parseInt$S(t[3]));
} else {
throw exc;
}
}
}meta.setStart$I(lineNum);
break;
} else if (line.startsWith$S("%%")) {
if (line.startsWith$S("%%BoundingBox:")) {
line=line.substring$I(14).trim$();
var t=line.split$S(" ");
try {
var originX=Integer.parseInt$S(t[0].trim$());
var originY=Integer.parseInt$S(t[1].trim$());
m.setAxisLength$net_imagej_axis_AxisType$J($I$(2).X, Integer.parseInt$S(t[2].trim$()) - originY);
m.setAxisLength$net_imagej_axis_AxisType$J($I$(2).Y, Integer.parseInt$S(t[3].trim$()) - originY);
globalTable.put$TK$TV("X-coordinate of origin", new Integer(originX));
globalTable.put$TK$TV("Y-coordinate of origin", new Integer(originY));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Files without image data are not supported."]);
} else {
throw e;
}
}
} else if (line.startsWith$S("%%BeginBinary")) {
meta.setBinary$Z(true);
} else {
var ndx=line.indexOf$S(":");
if (ndx != -1) {
var key=line.substring$I$I(0, ndx);
var value=line.substring$I(ndx + 1);
globalTable.put$TK$TV(key, value);
}}} else if (line.startsWith$S("%ImageData:")) {
line=line.substring$I(11);
var t=line.split$S(" ");
m.setAxisLength$net_imagej_axis_AxisType$J($I$(2).X, Integer.parseInt$S(t[0]));
m.setAxisLength$net_imagej_axis_AxisType$J($I$(2).Y, Integer.parseInt$S(t[1]));
m.setAxisLength$net_imagej_axis_AxisType$J($I$(2).CHANNEL, Integer.parseInt$S(t[3]));
for (var i=4; i < t.length; i++) {
image=t[i].trim$();
if (image.length$() > 1) {
image=image.substring$I$I(1, image.length$() - 1);
}}
}lineNum++;
line=this.getSource$().readLine$().trim$();
}
});
C$.$getAnn$ = function(){ return [
[['dataHandleService','org.scijava.io.handle.DataHandleService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EPSFormat, "Reader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.ByteArrayReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'createDomainArray$', function () {
return Clazz.array(String, -1, ["Graphics"]);
});

Clazz.newMeth(C$, ['openPlane$I$J$io_scif_ByteArrayPlane$net_imglib2_Interval$io_scif_config_SCIFIOConfig','openPlane$I$J$TP$net_imglib2_Interval$io_scif_config_SCIFIOConfig'], function (imageIndex, planeIndex, plane, bounds, config) {
var buf=plane.getData$();
var meta=this.getMetadata$();
var xAxis=meta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(2).X);
var yAxis=meta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(2).Y);
var x=(bounds.min$I(xAxis)|0);
var y=(bounds.min$I(yAxis)|0);
var w=(bounds.dimension$I(xAxis)|0);
var h=(bounds.dimension$I(yAxis)|0);
$I$(6).checkPlaneForReading$io_scif_Metadata$I$J$I$net_imglib2_Interval(meta, imageIndex, planeIndex, buf.length, bounds);
var handle=this.getHandle$();
if (meta.isTiff$()) {
var offsets=meta.getIfds$().get$I(0).getStripOffsets$();
handle.seek$J(offsets[0]);
var map=meta.getIfds$().get$I(0).getIFDIntArray$I(320);
if (map == null ) {
this.readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$TP(handle, imageIndex, bounds, plane);
return plane;
}var b=Clazz.array(Byte.TYPE, [w * h]);
handle.skipBytes$I(2 * y * (meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).X)|0) );
for (var row=0; row < h; row++) {
handle.skipBytes$I(x * 2);
for (var col=0; col < w; col++) {
b[row * w + col]=(((handle.readShort$() & 255)|0)|0);
}
handle.skipBytes$I(2 * ((meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).X) - w - x )|0));
}
for (var i=0; i < b.length; i++) {
var ndx=b[i] & 255;
for (var j=0; j < (meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL)|0); j++) {
if (j < 3) {
buf[i * (meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL)|0) + j]=((map[ndx + j * 256]|0)|0);
} else {
var zero=map[ndx] == 0 && map[ndx + 256] == 0  && map[ndx + 512] == 0 ;
buf[i * (meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL)|0) + j]=(zero ? (0|0) : (-1|0)|0);
}}
}
return plane;
}if (meta.getStart$() == 0) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Vector data not supported."]);
}handle.seek$J(0);
for (var line=0; line <= meta.getStart$(); line++) {
handle.readLine$();
}
var bytes=$I$(6).getBytesPerPixel$I(meta.get$I(imageIndex).getPixelType$());
if (meta.isBinary$()) {
this.readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$TP(handle, imageIndex, bounds, plane);
} else {
var pix=handle.readString$I(((handle.length$() - handle.offset$())|0));
pix=pix.replaceAll$S$S("\n", "");
pix=pix.replaceAll$S$S("\r", "");
var ndx=((meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL) * y * bytes * meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).X) )|0);
var destNdx=0;
for (var row=0; row < h; row++) {
ndx+=x * meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL) * bytes ;
for (var col=0; col < w * meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL) * bytes ; col++) {
buf[destNdx++]=((Integer.parseInt$S$I(pix.substring$I$I(2 * ndx, 2 * (ndx + 1)), 16)|0)|0);
ndx++;
}
ndx+=meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL) * bytes * (meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).X) - w - x ) ;
}
}return plane;
});

Clazz.newMeth(C$, 'getOptimalTileWidth$I', function (imageIndex) {
try {
if (this.getMetadata$().isTiff) {
return (this.getMetadata$().getIfds$().get$I(0).getTileWidth$()|0);
}} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.FormatException")){
this.log$().debug$O$Throwable("Could not retrieve tile width", e);
} else {
throw e;
}
}
return C$.superclazz.prototype.getOptimalTileWidth$I.apply(this, [imageIndex]);
});

Clazz.newMeth(C$, 'getOptimalTileHeight$I', function (imageIndex) {
try {
if (this.getMetadata$().isTiff$()) {
return (this.getMetadata$().getIfds$().get$I(0).getTileLength$()|0);
}} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.FormatException")){
this.log$().debug$O$Throwable("Could not retrieve tile height", e);
} else {
throw e;
}
}
return C$.superclazz.prototype.getOptimalTileHeight$I.apply(this, [imageIndex]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EPSFormat, "Writer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractWriter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.planeOffset=0;
}, 1);

C$.$fields$=[['L',['planeOffset']]]

Clazz.newMeth(C$, 'makeCompressionTypes$', function () {
return Clazz.array(String, [0]);
});

Clazz.newMeth(C$, 'initialize$I$J$net_imglib2_Interval', function (imageIndex, planeIndex, bounds) {
if (!this.isInitialized$I$J(imageIndex, (planeIndex|0))) {
p$1.writeHeader$I.apply(this, [imageIndex]);
if (!$I$(7).wholePlane$I$io_scif_Metadata$net_imglib2_Interval(imageIndex, this.getMetadata$(), bounds)) {
var xAxis=this.getMetadata$().get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(2).X);
var yAxis=this.getMetadata$().get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(2).Y);
var w=(bounds.dimension$I(xAxis)|0);
var h=(bounds.dimension$I(yAxis)|0);
var nChannels=(this.getMetadata$().get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL)|0);
var planeSize=w * h * nChannels ;
for (var i=0; i < planeSize; i++) {
this.getHandle$().writeBytes$S("00");
}
}}C$.superclazz.prototype.initialize$I$J$net_imglib2_Interval.apply(this, [imageIndex, planeIndex, bounds]);
});

Clazz.newMeth(C$, 'writePlane$I$J$io_scif_Plane$net_imglib2_Interval', function (imageIndex, planeIndex, plane, bounds) {
var buf=plane.getBytes$();
var interleaved=plane.getImageMetadata$().getInterleavedAxisCount$() > 0;
this.checkParams$I$J$BA$net_imglib2_Interval(imageIndex, planeIndex, buf, bounds);
var imageMetadata=this.getMetadata$().get$I(imageIndex);
var xAxis=imageMetadata.getAxisIndex$net_imagej_axis_AxisType($I$(2).X);
var yAxis=imageMetadata.getAxisIndex$net_imagej_axis_AxisType($I$(2).Y);
var x=(bounds.min$I(xAxis)|0);
var y=(bounds.min$I(yAxis)|0);
var w=(bounds.dimension$I(xAxis)|0);
var h=(bounds.dimension$I(yAxis)|0);
var sizeX=(imageMetadata.getAxisLength$net_imagej_axis_AxisType($I$(2).X)|0);
var nChannels=(imageMetadata.getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL)|0);
var planeSize=((bounds.max$I(xAxis) * bounds.max$I(yAxis))|0);
var buffer=Clazz.new_($I$(8,1));
var offset=y * sizeX * nChannels * 2 ;
var handle=this.getHandle$();
handle.seek$J(this.planeOffset + offset);
for (var row=0; row < h; row++) {
handle.skipBytes$I(nChannels * x * 2 );
for (var col=0; col < w * nChannels; col++) {
var i=row * w * nChannels  + col;
var index=interleaved || nChannels == 1  ? i : (i % nChannels) * planeSize + ((i/nChannels|0));
var s=Integer.toHexString$I(buf[index]);
if (s.length$() > 1) buffer.append$S(s.substring$I(s.length$() - 2));
 else {
buffer.append$S("0");
buffer.append$S(s);
}}
buffer.append$C("\n");
handle.writeBytes$S(buffer.toString());
buffer.delete$I$I(0, buffer.length$());
handle.skipBytes$I(nChannels * (sizeX - w - x ) * 2 );
}
handle.seek$J(handle.length$());
handle.writeBytes$S("\nshowpage\n");
});

Clazz.newMeth(C$, 'getPixelTypes$S', function (codec) {
return Clazz.array(Integer.TYPE, -1, [1]);
});

Clazz.newMeth(C$, 'writeHeader$I', function (imageIndex) {
var imageMetadata=this.getMetadata$().get$I(imageIndex);
var width=(imageMetadata.getAxisLength$net_imagej_axis_AxisType($I$(2).X)|0);
var height=(imageMetadata.getAxisLength$net_imagej_axis_AxisType($I$(2).Y)|0);
var nChannels=(imageMetadata.getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL)|0);
var handle=this.getHandle$();
handle.writeBytes$S("%!PS-Adobe-2.0 EPSF-1.2\n");
handle.writeBytes$S("%%Title: " + this.getMetadata$().getDatasetName$() + "\n" );
handle.writeBytes$S("%%Creator: SCIFIO\n");
handle.writeBytes$S("%%Pages: 1\n");
handle.writeBytes$S("%%BoundingBox: 0 0 " + width + " " + height + "\n" );
handle.writeBytes$S("%%EndComments\n\n");
handle.writeBytes$S("/ld {load def} bind def\n");
handle.writeBytes$S("/s /stroke ld /f /fill ld /m /moveto ld /l /lineto ld /c /curveto ld /rgb {255 div 3 1 roll 255 div 3 1 roll 255 div 3 1 roll setrgbcolor} def\n");
handle.writeBytes$S("0 0 translate\n");
handle.writeBytes$S((new Float(width).toString()) + " " + new Float((height)).toString() + " scale\n" );
handle.writeBytes$S("/picstr 40 string def\n");
handle.writeBytes$S(width + " " + height + " 8 [" + width + " 0 0 " + (-1 * height) + " 0 " + height + "] {currentfile picstr readhexstring pop} " );
if (nChannels == 1) {
handle.writeBytes$S("image\n");
} else {
handle.writeBytes$S("false 3 colorimage\n");
}this.planeOffset=handle.offset$();
}, p$1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EPSFormat, "EPSTranslator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.DefaultTranslator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'source$', function () {
return Clazz.getClass($I$(9),['add$io_scif_ImageMetadata','createImageMetadata$I','get$I','getAll$','getDatasetName$','getDatasetSize$','getDestinationLocation$','getImageCount$','getSource$','getSourceLocation$','isFiltered$','populateImageMetadata$','setDatasetName$S','setDestinationLocation$org_scijava_io_location_Location','setFiltered$Z','setSource$org_scijava_io_handle_DataHandle','setSourceLocation$org_scijava_io_location_Location']);
});

Clazz.newMeth(C$, 'dest$', function () {
return Clazz.getClass($I$(10));
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.EPSFormat.EPSTranslator',null,['org.scijava.plugin.Plugin']],['type="io.scif.Translator.class" priority="-100.0" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:39 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
