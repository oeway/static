(function(){var P$=Clazz.newPackage("io.scif.formats.qt"),p$1={},p$2={},I$=[[0,'net.imagej.axis.Axes','io.scif.util.FormatTools','io.scif.formats.qt.NativeQTFormat','java.util.ArrayList',['io.scif.formats.qt.NativeQTFormat','.NativeQTUtils'],'java.io.File','io.scif.codec.CompressionType','io.scif.util.SCIFIOMetadataTools','io.scif.formats.qt.LegacyQTFormat','io.scif.Metadata',['io.scif.formats.qt.NativeQTFormat','.Metadata'],'io.scif.codec.CodecService','io.scif.codec.ZlibCodec','org.scijava.io.handle.DataHandleService','org.scijava.io.location.BytesLocation','StringBuilder','io.scif.codec.MJPBCodecOptions','io.scif.codec.QTRLECodec','io.scif.codec.MJPBCodec','io.scif.codec.JPEGCodec']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "NativeQTFormat", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.AbstractFormat');
C$.$classes$=[['Metadata',9],['Checker',9],['Parser',9],['Reader',9],['Writer',9],['NativeQTTranslator',9],['NativeQTUtils',10]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.CONTAINER_TYPES=Clazz.array(String, -1, ["moov", "trak", "udta", "tref", "imap", "mdia", "minf", "stbl", "edts", "mdra", "rmra", "imag", "vnrp", "dinf"]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['CONTAINER_TYPES','String[]']]]

Clazz.newMeth(C$, 'makeSuffixArray$', function () {
return Clazz.array(String, -1, ["mov"]);
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.qt.NativeQTFormat',null,['org.scijava.plugin.Plugin']],['type="io.scif.Format.class" name="QuickTime" ']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.NativeQTFormat, "Metadata", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractMetadata');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['canUsePrevious','interlaced','spork','flip'],'I',['bitsPerPixel','rawSize','altPlanes','scale'],'L',['pixelOffset','pixelBytes','prevPlane'],'S',['codec','altCodec'],'O',['offsets','java.util.List','prevPixels','byte[]','chunkSizes','java.util.List']]]

Clazz.newMeth(C$, 'getPixelOffset$', function () {
return this.pixelOffset;
});

Clazz.newMeth(C$, 'setPixelOffset$J', function (pixelOffset) {
this.pixelOffset=pixelOffset;
});

Clazz.newMeth(C$, 'getPixelBytes$', function () {
return this.pixelBytes;
});

Clazz.newMeth(C$, 'setPixelBytes$J', function (pixelBytes) {
this.pixelBytes=pixelBytes;
});

Clazz.newMeth(C$, 'getBitsPerPixel$', function () {
return this.bitsPerPixel;
});

Clazz.newMeth(C$, 'setBitsPerPixel$I', function (bitsPerPixel) {
this.bitsPerPixel=bitsPerPixel;
});

Clazz.newMeth(C$, 'getRawSize$', function () {
return this.rawSize;
});

Clazz.newMeth(C$, 'setRawSize$I', function (rawSize) {
this.rawSize=rawSize;
});

Clazz.newMeth(C$, 'getOffsets$', function () {
return this.offsets;
});

Clazz.newMeth(C$, 'setOffsets$java_util_List', function (offsets) {
this.offsets=offsets;
});

Clazz.newMeth(C$, 'getPrevPixels$', function () {
return this.prevPixels;
});

Clazz.newMeth(C$, 'setPrevPixels$BA', function (prevPixels) {
this.prevPixels=prevPixels;
});

Clazz.newMeth(C$, 'getPrevPlane$', function () {
return this.prevPlane;
});

Clazz.newMeth(C$, 'setPrevPlane$J', function (prevPlane) {
this.prevPlane=prevPlane;
});

Clazz.newMeth(C$, 'isCanUsePrevious$', function () {
return this.canUsePrevious;
});

Clazz.newMeth(C$, 'setCanUsePrevious$Z', function (canUsePrevious) {
this.canUsePrevious=canUsePrevious;
});

Clazz.newMeth(C$, 'getCodec$', function () {
return this.codec;
});

Clazz.newMeth(C$, 'setCodec$S', function (codec) {
this.codec=codec;
});

Clazz.newMeth(C$, 'getAltCodec$', function () {
return this.altCodec;
});

Clazz.newMeth(C$, 'setAltCodec$S', function (altCodec) {
this.altCodec=altCodec;
});

Clazz.newMeth(C$, 'getAltPlanes$', function () {
return this.altPlanes;
});

Clazz.newMeth(C$, 'setAltPlanes$I', function (altPlanes) {
this.altPlanes=altPlanes;
});

Clazz.newMeth(C$, 'getScale$', function () {
return this.scale;
});

Clazz.newMeth(C$, 'setScale$I', function (scale) {
this.scale=scale;
});

Clazz.newMeth(C$, 'getChunkSizes$', function () {
return this.chunkSizes;
});

Clazz.newMeth(C$, 'setChunkSizes$java_util_List', function (chunkSizes) {
this.chunkSizes=chunkSizes;
});

Clazz.newMeth(C$, 'isInterlaced$', function () {
return this.interlaced;
});

Clazz.newMeth(C$, 'setInterlaced$Z', function (interlaced) {
this.interlaced=interlaced;
});

Clazz.newMeth(C$, 'isSpork$', function () {
return this.spork;
});

Clazz.newMeth(C$, 'setSpork$Z', function (spork) {
this.spork=spork;
});

Clazz.newMeth(C$, 'isFlip$', function () {
return this.flip;
});

Clazz.newMeth(C$, 'setFlip$Z', function (flip) {
this.flip=flip;
});

Clazz.newMeth(C$, 'populateImageMetadata$', function () {
var iMeta=this.get$I(0);
if (this.getBitsPerPixel$() < 40) {
iMeta.setPlanarAxisCount$I(3);
iMeta.setAxisTypes$net_imagej_axis_AxisTypeA([$I$(1).CHANNEL, $I$(1).X, $I$(1).Y, $I$(1).TIME]);
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(1).CHANNEL, 3);
}var bytes=((this.getBitsPerPixel$()/8|0)) % 4;
iMeta.setPixelType$I(bytes == 2 ? 3 : 1);
iMeta.setBitsPerPixel$I($I$(2).getBitsPerPixel$I(iMeta.getPixelType$()));
iMeta.setLittleEndian$Z(false);
iMeta.setMetadataComplete$Z(true);
iMeta.setIndexed$Z(false);
iMeta.setFalseColor$Z(false);
});

Clazz.newMeth(C$, 'close$Z', function (fileOnly) {
C$.superclazz.prototype.close$Z.apply(this, [fileOnly]);
if (!fileOnly) {
this.offsets=null;
this.prevPixels=null;
this.codec=this.altCodec=null;
this.pixelOffset=this.pixelBytes=this.bitsPerPixel=this.rawSize=0;
this.prevPlane=this.altPlanes=0;
this.canUsePrevious=false;
this.scale=0;
this.chunkSizes=null;
this.interlaced=this.spork=this.flip=false;
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NativeQTFormat, "Checker", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractChecker');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'suffixNecessary$', function () {
return false;
});

Clazz.newMeth(C$, 'isFormat$org_scijava_io_handle_DataHandle', function (stream) {
var blockLen=64;
if (!$I$(2).validStream$org_scijava_io_handle_DataHandle$I$Z(stream, 64, false)) return false;
var s=stream.readString$I(64);
for (var CONTAINER_TYPE, $CONTAINER_TYPE = 0, $$CONTAINER_TYPE = $I$(3).CONTAINER_TYPES; $CONTAINER_TYPE<$$CONTAINER_TYPE.length&&((CONTAINER_TYPE=($$CONTAINER_TYPE[$CONTAINER_TYPE])),1);$CONTAINER_TYPE++) {
if (s.contains$CharSequence(CONTAINER_TYPE) && !CONTAINER_TYPE.equals$O("imag") ) {
return true;
}}
return s.contains$CharSequence("wide") || s.contains$CharSequence("mdat") || s.contains$CharSequence("ftypqt")  ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NativeQTFormat, "Parser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractParser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['dataHandleService','org.scijava.io.handle.DataHandleService']]]

Clazz.newMeth(C$, ['typedParse$org_scijava_io_handle_DataHandle$io_scif_formats_qt_NativeQTFormat_Metadata$io_scif_config_SCIFIOConfig','typedParse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig'], function (stream, meta, config) {
meta.setSpork$Z(true);
var offsets=Clazz.new_(1,{E:"Integer"},$I$(4,1));
var chunkSizes=Clazz.new_(1,{E:"Integer"},$I$(4,1));
meta.setOffsets$java_util_List(offsets);
meta.setChunkSizes$java_util_List(chunkSizes);
meta.createImageMetadata$I(1);
this.log$().info$O("Parsing tags");
$I$(5).parse$org_scijava_io_handle_DataHandle$io_scif_formats_qt_NativeQTFormat_Metadata$I$J$J$org_scijava_log_LogService(stream, meta, 0, 0, stream.length$(), this.log$());
var iMeta=meta.get$I(0);
iMeta.setPlanarAxisCount$I(2);
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(1).TIME, offsets.size$());
if (chunkSizes.size$() < iMeta.getPlaneCount$() && chunkSizes.size$() > 0 ) {
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(1).TIME, chunkSizes.size$());
}this.log$().info$O("Populating metadata");
var baseLocation=stream.get$();
var id=baseLocation.getName$();
if (meta.isSpork$()) {
var browsableBaseLoc;
if (Clazz.instanceOf(baseLocation, "org.scijava.io.location.BrowsableLocation")) {
browsableBaseLoc=baseLocation;
} else {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Can not open sporked QT file from an not browsable location!"]);
}var base=null;
if (id.contains$CharSequence(".")) {
base=id.substring$I$I(0, id.lastIndexOf$I("."));
} else base=id;
var f=browsableBaseLoc.sibling$S(base + ".qtr");
this.log$().debug$O("Searching for research fork:");
if (this.dataHandleService.exists$org_scijava_io_location_Location(f)) {
this.log$().debug$O("\t Found: " + f);
if (this.getSource$() != null ) this.getSource$().close$();
this.updateSource$org_scijava_io_location_Location(f);
$I$(5).stripHeader$org_scijava_io_handle_DataHandle(stream);
$I$(5).parse$org_scijava_io_handle_DataHandle$io_scif_formats_qt_NativeQTFormat_Metadata$I$J$J$org_scijava_log_LogService(stream, meta, 0, 0, this.getSource$().length$(), this.log$());
meta.get$I(0).setAxisLength$net_imagej_axis_AxisType$J($I$(1).TIME, offsets.size$());
} else {
this.log$().debug$O("\tAbsent: " + f);
f=browsableBaseLoc.sibling$S("._" + base);
if (this.dataHandleService.exists$org_scijava_io_location_Location(f)) {
this.log$().debug$O("\t Found: " + f);
p$1.parseLocation$io_scif_formats_qt_NativeQTFormat_Metadata$java_util_List$org_scijava_io_location_Location.apply(this, [meta, offsets, f]);
} else {
this.log$().debug$O("\tAbsent: " + f);
f=browsableBaseLoc.sibling$S($I$(6).separator + ".." + $I$(6).separator + "namedfork" + $I$(6).separator + "rsrc" );
if (this.dataHandleService.exists$org_scijava_io_location_Location(f)) {
this.log$().debug$O("\t Found: " + f);
p$1.parseLocation$io_scif_formats_qt_NativeQTFormat_Metadata$java_util_List$org_scijava_io_location_Location.apply(this, [meta, offsets, f]);
} else {
this.log$().debug$O("\tAbsent: " + f);
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["QuickTime resource fork not found.  To avoid this issue, please flatten your QuickTime movies before importing with SCIFIO."]);
}}}}});

Clazz.newMeth(C$, 'parseLocation$io_scif_formats_qt_NativeQTFormat_Metadata$java_util_List$org_scijava_io_location_Location', function (meta, offsets, f) {
try {
var tmpStream=this.dataHandleService.create$TD(f);
/*try*/ {
$I$(5).stripHeader$org_scijava_io_handle_DataHandle(tmpStream);
$I$(5).parse$org_scijava_io_handle_DataHandle$io_scif_formats_qt_NativeQTFormat_Metadata$I$J$J$org_scijava_log_LogService(tmpStream, meta, 0, tmpStream.offset$(), tmpStream.length$(), this.log$());
meta.get$I(0).setAxisLength$net_imagej_axis_AxisType$J($I$(1).TIME, offsets.size$());
}
}finally{/*res*/
try{tmpStream&&tmpStream.close$&&tmpStream.close$()}catch(_){}}
}, p$1);
C$.$getAnn$ = function(){ return [
[['dataHandleService','org.scijava.io.handle.DataHandleService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NativeQTFormat, "Reader", function(){
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
var buf=plane.getData$();
$I$(2).checkPlaneForReading$io_scif_Metadata$I$J$I$net_imglib2_Interval(meta, imageIndex, planeIndex, buf.length, bounds);
var code=meta.getCodec$();
if (planeIndex >= meta.get$I(imageIndex).getPlaneCount$() - meta.getAltPlanes$()) code=meta.altCodec;
var offset=meta.getOffsets$().get$I((planeIndex|0)).intValue$();
var nextOffset=(meta.getPixelBytes$()|0);
meta.setScale$I(meta.getOffsets$().get$I(0).intValue$());
offset-=meta.getScale$();
if (planeIndex < meta.getOffsets$().size$() - 1) {
nextOffset=meta.getOffsets$().get$I((planeIndex|0) + 1).intValue$() - meta.getScale$();
}if ((nextOffset - offset) < 0) {
var temp=offset;
offset=nextOffset;
nextOffset=temp;
}var pixs=Clazz.array(Byte.TYPE, [nextOffset - offset]);
this.getHandle$().seek$J(meta.getPixelOffset$() + offset);
this.getHandle$().read$BA(pixs);
meta.setCanUsePrevious$Z((meta.getPrevPixels$() != null ) && (meta.getPrevPlane$() == planeIndex - 1) && !code.equals$O(meta.getAltCodec$())  );
var t=meta.getPrevPlane$() == planeIndex && meta.getPrevPixels$() != null   && !code.equals$O(meta.getAltCodec$())  ? meta.getPrevPixels$() : $I$(5).uncompress$BA$S$io_scif_formats_qt_NativeQTFormat_Metadata(pixs, code, meta);
if (code.equals$O("rpza")) {
for (var i=0; i < t.length; i++) {
t[i]=(((255 - t[i])|0)|0);
}
meta.setPrevPlane$J((planeIndex|0));
return plane;
}if (meta.isCanUsePrevious$() && (meta.getPrevPixels$().length < t.length) ) {
var temp=t;
t=Clazz.array(Byte.TYPE, [meta.getPrevPixels$().length]);
System.arraycopy$O$I$O$I$I(temp, 0, t, 0, t.length);
}meta.setPrevPixels$BA(t);
meta.setPrevPlane$J(planeIndex);
var bytes=meta.getBitsPerPixel$() < 40 ? (meta.getBitsPerPixel$()/8|0) : ((meta.getBitsPerPixel$() - 32)/8|0);
var pad=(4 - ((meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(1).X) % 4)|0)) % 4;
if (meta.getCodec$().equals$O("mjpb")) pad=0;
var expectedSize=($I$(2).getPlaneSize$io_scif_Reader$I(this, imageIndex)|0);
if (meta.getPrevPixels$().length == expectedSize || (meta.getBitsPerPixel$() == 32 && (3 * ((meta.getPrevPixels$().length/4|0))) == expectedSize ) ) {
pad=0;
}if (pad > 0) {
t=Clazz.array(Byte.TYPE, [meta.getPrevPixels$().length - (meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(1).Y)|0) * pad]);
for (var row=0; row < meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(1).Y); row++) {
var sourceIndex=row * (bytes * (meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(1).X)|0) + pad);
var destIndex=row * (meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(1).X)|0) * bytes ;
var length=(meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(1).X)|0) * bytes;
System.arraycopy$O$I$O$I$I(meta.getPrevPixels$(), sourceIndex, t, destIndex, length);
}
}var bpp=$I$(2).getBytesPerPixel$I(meta.get$I(imageIndex).getPixelType$());
var xAxis=meta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(1).X);
var yAxis=meta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(1).Y);
var x=(bounds.min$I(xAxis)|0);
var y=(bounds.min$I(yAxis)|0);
var w=(bounds.dimension$I(xAxis)|0);
var h=(bounds.dimension$I(yAxis)|0);
var srcRowLen=((meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(1).X) * bpp * meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(1).CHANNEL) )|0);
var destRowLen=w * bpp * (meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(1).CHANNEL)|0) ;
for (var row=0; row < h; row++) {
if (meta.getBitsPerPixel$() == 32) {
for (var col=0; col < w; col++) {
var src=(row + y) * (meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(1).X)|0) * bpp * 4  + (x + col) * bpp * 4  + 1;
var dst=row * destRowLen + col * bpp * 3 ;
if (src + 3 <= t.length && dst + 3 <= buf.length ) {
System.arraycopy$O$I$O$I$I(t, src, buf, dst, 3);
}}
} else {
System.arraycopy$O$I$O$I$I(t, row * srcRowLen + x * bpp * (meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(1).CHANNEL)|0) , buf, row * destRowLen, destRowLen);
}}
if ((meta.getBitsPerPixel$() == 40 || meta.getBitsPerPixel$() == 8 ) && !code.equals$O("mjpb") ) {
for (var i=0; i < buf.length; i++) {
buf[i]=(((255 - buf[i])|0)|0);
}
}return plane;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NativeQTFormat, "Writer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractWriter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.codec=0;
this.quality=512;
this.needLegacy=false;
this.numWritten=0;
}, 1);

C$.$fields$=[['Z',['needLegacy'],'I',['codec','quality','numBytes','created','pad','numWritten'],'O',['qtJavaService','io.scif.formats.qt.QTJavaService','$$formatService','io.scif.services.FormatService','translatorService','io.scif.services.TranslatorService','dataHandleService','org.scijava.io.handle.DataHandleService','offsets','java.util.List','legacy','io.scif.formats.qt.LegacyQTFormat.Writer']]]

Clazz.newMeth(C$, 'makeCompressionTypes$', function () {
if (this.qtJavaService.canDoQT$()) {
return Clazz.array(String, -1, [$I$(7).UNCOMPRESSED.getCompression$(), $I$(7).CINEPAK.getCompression$(), $I$(7).ANIMATION.getCompression$(), $I$(7).H_263.getCompression$(), $I$(7).SORENSON.getCompression$(), $I$(7).SORENSON_3.getCompression$(), $I$(7).MPEG_4.getCompression$()]);
}return Clazz.array(String, -1, [$I$(7).UNCOMPRESSED.getCompression$()]);
});

Clazz.newMeth(C$, 'setCodec$I', function (codec) {
this.codec=codec;
});

Clazz.newMeth(C$, 'setQuality$I', function (quality) {
this.quality=quality;
});

Clazz.newMeth(C$, 'initialize$I$J$net_imglib2_Interval', function (imageIndex, planeIndex, bounds) {
if (!this.isInitialized$I$J(imageIndex, (planeIndex|0))) {
p$2.setCodec.apply(this, []);
var handle=this.getHandle$();
if (this.codec != 0) {
this.needLegacy=true;
this.legacy.setDest$org_scijava_io_handle_DataHandle(handle);
return;
}var meta=this.getMetadata$();
var height=(meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(1).Y)|0);
this.numBytes+=(meta.get$I(imageIndex).getPlaneSize$() + this.pad * height);
handle.seek$J(8);
handle.writeInt$I(this.numBytes + 8);
handle.seek$J((this.offsets.get$I((planeIndex|0))).valueOf());
if (!$I$(8).wholePlane$I$io_scif_Metadata$net_imglib2_Interval(imageIndex, meta, bounds)) {
handle.skipBytes$I(((meta.get$I(imageIndex).getPlaneSize$() + this.pad * height)|0));
}}});

Clazz.newMeth(C$, 'writePlane$I$J$io_scif_Plane$net_imglib2_Interval', function (imageIndex, planeIndex, plane, bounds) {
var buf=plane.getBytes$();
this.checkParams$I$J$BA$net_imglib2_Interval(imageIndex, planeIndex, buf, bounds);
if (this.needLegacy) {
this.legacy.savePlane$I$J$io_scif_Plane$net_imglib2_Interval(imageIndex, planeIndex, plane, bounds);
return;
}var meta=this.getMetadata$();
var interleaved=plane.getImageMetadata$().getInterleavedAxisCount$() > 0;
var width=(meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(1).X)|0);
var nChannels=(meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(1).CHANNEL)|0);
var xIndex=meta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(1).X);
var yIndex=meta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(1).Y);
var x=(bounds.min$I(xIndex)|0);
var y=(bounds.min$I(yIndex)|0);
var w=(bounds.dimension$I(xIndex)|0);
var h=(bounds.dimension$I(yIndex)|0);
this.getHandle$().seek$J((this.offsets.get$I((planeIndex|0))).valueOf() + y * (nChannels * width + this.pad));
var tmp=Clazz.array(Byte.TYPE, [buf.length]);
if (nChannels == 1 && !this.needLegacy ) {
for (var i=0; i < buf.length; i++) {
tmp[i]=(((255 - buf[i])|0)|0);
}
} else System.arraycopy$O$I$O$I$I(buf, 0, tmp, 0, buf.length);
if (!interleaved) {
var tmp2=Clazz.array(Byte.TYPE, [tmp.length]);
System.arraycopy$O$I$O$I$I(tmp, 0, tmp2, 0, tmp.length);
for (var i=0; i < tmp.length; i++) {
var c=(i/(w * h)|0);
var index=i % (w * h);
tmp[index * nChannels + c]=(tmp2[i]|0);
}
}var rowLen=(tmp.length/h|0);
for (var row=0; row < h; row++) {
this.getHandle$().skipBytes$I(nChannels * x);
this.getHandle$().write$BA$I$I(tmp, row * rowLen, rowLen);
for (var i=0; i < this.pad; i++) {
this.getHandle$().writeByte$I(0);
}
if (row < h - 1) {
this.getHandle$().skipBytes$I(nChannels * (width - w - x ));
}}
this.numWritten++;
});

Clazz.newMeth(C$, 'canDoStacks$', function () {
return true;
});

Clazz.newMeth(C$, 'getPixelTypes$S', function (codec) {
return Clazz.array(Integer.TYPE, -1, [1]);
});

Clazz.newMeth(C$, 'close$', function () {
if (this.getHandle$() != null ) p$2.writeFooter.apply(this, []);
C$.superclazz.prototype.close$.apply(this, []);
this.numBytes=0;
this.created=0;
this.offsets=null;
this.pad=0;
this.numWritten=0;
});

Clazz.newMeth(C$, 'setDest$org_scijava_io_handle_DataHandle$I$io_scif_config_SCIFIOConfig', function (stream, imageIndex, config) {
C$.superclazz.prototype.setDest$org_scijava_io_handle_DataHandle$I$io_scif_config_SCIFIOConfig.apply(this, [stream, imageIndex, config]);
var meta=this.getMetadata$();
$I$(8).verifyMinimumPopulated$io_scif_Metadata$org_scijava_io_handle_DataHandle(meta, stream);
var width=(meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(1).X)|0);
var height=(meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(1).Y)|0);
var nChannels=(meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(1).CHANNEL)|0);
var planeSize=width * height * nChannels ;
this.pad=nChannels > 1 ? 0 : (4 - (width % 4)) % 4;
if (this.legacy == null ) {
var legacyFormat=this.$$formatService.getFormatFromClass$Class(Clazz.getClass($I$(9)));
this.legacy=legacyFormat.createWriter$();
var legacyMeta=legacyFormat.createMetadata$();
this.translatorService.translate$io_scif_Metadata$io_scif_Metadata$Z(meta, legacyMeta, false);
this.legacy.setMetadata$io_scif_Metadata(legacyMeta);
this.legacy.setCodec$I(this.codec);
}this.offsets=Clazz.new_(1,{E:"Integer"},$I$(4,1));
this.created=(System.currentTimeMillis$()|0);
this.numBytes=0;
if (this.getHandle$().length$() == 0) {
p$2.writeAtom$I$S.apply(this, [8, "wide"]);
p$2.writeAtom$I$S.apply(this, [this.numBytes + 8, "mdat"]);
} else {
this.getHandle$().seek$J(8);
try {
var tmp=this.dataHandleService.create$TD(stream.get$());
/*try*/ {
tmp.seek$J(8);
this.numBytes=tmp.readInt$() - 8;
}
}finally{/*res*/
try{tmp&&tmp.close$&&tmp.close$()}catch(_){}}
}for (var i=0; i < meta.get$I(0).getPlaneCount$(); i++) {
this.offsets.add$TE(new Integer(16 + i * (planeSize + this.pad * height)));
}
});

Clazz.newMeth(C$, 'setCodec', function () {
if (this.getCompression$() == null ) return;
if (this.getCompression$().equals$O("Uncompressed")) this.codec=0;
 else if (this.getCompression$().equals$O("Motion JPEG-B")) this.codec=1835692130;
 else if (this.getCompression$().equals$O("Cinepak")) this.codec=1668704612;
 else if (this.getCompression$().equals$O("Animation")) this.codec=1919706400;
 else if (this.getCompression$().equals$O("H.263")) this.codec=1748121139;
 else if (this.getCompression$().equals$O("Sorenson")) this.codec=1398165809;
 else if (this.getCompression$().equals$O("Sorenson 3")) this.codec=1398165811;
 else if (this.getCompression$().equals$O("MPEG 4")) this.codec=1836070006;
}, p$2);

Clazz.newMeth(C$, 'writeFooter', function () {
this.getHandle$().seek$J(this.getHandle$().length$());
var meta=this.getMetadata$();
var width=(meta.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(1).X)|0);
var height=(meta.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(1).Y)|0);
var nChannels=(meta.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(1).CHANNEL)|0);
var timeScale=1000;
var duration=((this.numWritten * (1000.0 / this.getFramesPerSecond$()))|0);
var bitsPerPixel=(nChannels > 1) ? 24 : 40;
var channels=(bitsPerPixel >= 40) ? 1 : 3;
var atomLength=685 + 8 * this.numWritten;
p$2.writeAtom$I$S.apply(this, [atomLength, "moov"]);
p$2.writeAtom$I$S.apply(this, [108, "mvhd"]);
this.getHandle$().writeShort$I(0);
this.getHandle$().writeShort$I(0);
this.getHandle$().writeInt$I(this.created);
this.getHandle$().writeInt$I((System.currentTimeMillis$()|0));
this.getHandle$().writeInt$I(1000);
this.getHandle$().writeInt$I(duration);
this.getHandle$().write$BA(Clazz.array(Byte.TYPE, -1, [0, 1, 0, 0]));
this.getHandle$().write$BA(Clazz.array(Byte.TYPE, -1, [0, -1, 0, 0, 0, 0, 0, 0, 0, 0]));
p$2.writeRotationMatrix.apply(this, []);
this.getHandle$().writeShort$I(0);
this.getHandle$().writeInt$I(0);
this.getHandle$().writeInt$I(0);
this.getHandle$().writeInt$I(0);
this.getHandle$().writeInt$I(0);
this.getHandle$().writeInt$I(0);
this.getHandle$().writeInt$I(0);
this.getHandle$().writeInt$I(2);
atomLength-=116;
p$2.writeAtom$I$S.apply(this, [atomLength, "trak"]);
p$2.writeAtom$I$S.apply(this, [92, "tkhd"]);
this.getHandle$().writeShort$I(0);
this.getHandle$().writeShort$I(15);
this.getHandle$().writeInt$I(this.created);
this.getHandle$().writeInt$I((System.currentTimeMillis$()|0));
this.getHandle$().writeInt$I(1);
this.getHandle$().writeInt$I(0);
this.getHandle$().writeInt$I(duration);
this.getHandle$().writeInt$I(0);
this.getHandle$().writeInt$I(0);
this.getHandle$().writeShort$I(0);
this.getHandle$().writeInt$I(0);
p$2.writeRotationMatrix.apply(this, []);
this.getHandle$().writeInt$I(width);
this.getHandle$().writeInt$I(height);
this.getHandle$().writeShort$I(0);
p$2.writeAtom$I$S.apply(this, [36, "edts"]);
p$2.writeAtom$I$S.apply(this, [28, "elst"]);
this.getHandle$().writeShort$I(0);
this.getHandle$().writeShort$I(0);
this.getHandle$().writeInt$I(1);
this.getHandle$().writeInt$I(duration);
this.getHandle$().writeShort$I(0);
this.getHandle$().writeInt$I(1);
this.getHandle$().writeShort$I(0);
atomLength-=136;
p$2.writeAtom$I$S.apply(this, [atomLength, "mdia"]);
p$2.writeAtom$I$S.apply(this, [32, "mdhd"]);
this.getHandle$().writeShort$I(0);
this.getHandle$().writeShort$I(0);
this.getHandle$().writeInt$I(this.created);
this.getHandle$().writeInt$I((System.currentTimeMillis$()|0));
this.getHandle$().writeInt$I(1000);
this.getHandle$().writeInt$I(duration);
this.getHandle$().writeShort$I(0);
this.getHandle$().writeShort$I(0);
p$2.writeAtom$I$S.apply(this, [58, "hdlr"]);
this.getHandle$().writeShort$I(0);
this.getHandle$().writeShort$I(0);
this.getHandle$().writeBytes$S("mhlr");
this.getHandle$().writeBytes$S("vide");
this.getHandle$().writeBytes$S("appl");
this.getHandle$().write$BA(Clazz.array(Byte.TYPE, -1, [16, 0, 0, 0, 0, 1, 1, 11, 25]));
this.getHandle$().writeBytes$S("Apple Video Media Handler");
atomLength-=98;
p$2.writeAtom$I$S.apply(this, [atomLength, "minf"]);
p$2.writeAtom$I$S.apply(this, [20, "vmhd"]);
this.getHandle$().writeShort$I(0);
this.getHandle$().writeShort$I(1);
this.getHandle$().writeShort$I(64);
this.getHandle$().writeShort$I(32768);
this.getHandle$().writeShort$I(32768);
this.getHandle$().writeShort$I(32768);
p$2.writeAtom$I$S.apply(this, [57, "hdlr"]);
this.getHandle$().writeShort$I(0);
this.getHandle$().writeShort$I(0);
this.getHandle$().writeBytes$S("dhlr");
this.getHandle$().writeBytes$S("alis");
this.getHandle$().writeBytes$S("appl");
this.getHandle$().write$BA(Clazz.array(Byte.TYPE, -1, [16, 0, 0, 1, 0, 1, 1, 31, 24]));
this.getHandle$().writeBytes$S("Apple Alias Data Handler");
p$2.writeAtom$I$S.apply(this, [36, "dinf"]);
p$2.writeAtom$I$S.apply(this, [28, "dref"]);
this.getHandle$().writeShort$I(0);
this.getHandle$().writeShort$I(0);
this.getHandle$().writeShort$I(0);
this.getHandle$().writeShort$I(1);
this.getHandle$().write$BA(Clazz.array(Byte.TYPE, -1, [0, 0, 0, 12]));
this.getHandle$().writeBytes$S("alis");
this.getHandle$().writeShort$I(0);
this.getHandle$().writeShort$I(1);
atomLength-=121;
p$2.writeAtom$I$S.apply(this, [atomLength, "stbl"]);
p$2.writeAtom$I$S.apply(this, [118, "stsd"]);
this.getHandle$().writeShort$I(0);
this.getHandle$().writeShort$I(0);
this.getHandle$().writeInt$I(1);
this.getHandle$().write$BA(Clazz.array(Byte.TYPE, -1, [0, 0, 0, 102]));
this.getHandle$().writeBytes$S("raw ");
this.getHandle$().write$BA(Clazz.array(Byte.TYPE, -1, [0, 0, 0, 0, 0, 0]));
this.getHandle$().writeShort$I(1);
this.getHandle$().writeShort$I(1);
this.getHandle$().writeShort$I(1);
this.getHandle$().writeBytes$S("appl");
this.getHandle$().writeInt$I(0);
this.getHandle$().writeInt$I(768);
this.getHandle$().writeShort$I(width);
this.getHandle$().writeShort$I(height);
var dpi=Clazz.array(Byte.TYPE, -1, [0, 72, 0, 0]);
this.getHandle$().write$BA(dpi);
this.getHandle$().write$BA(dpi);
this.getHandle$().writeInt$I(0);
this.getHandle$().writeShort$I(1);
this.getHandle$().writeShort$I(12);
this.getHandle$().writeBytes$S("Uncompressed");
this.getHandle$().writeInt$I(bitsPerPixel);
this.getHandle$().writeInt$I(bitsPerPixel);
this.getHandle$().writeInt$I(bitsPerPixel);
this.getHandle$().writeInt$I(bitsPerPixel);
this.getHandle$().writeInt$I(bitsPerPixel);
this.getHandle$().writeShort$I(bitsPerPixel);
this.getHandle$().writeInt$I(65535);
this.getHandle$().write$BA(Clazz.array(Byte.TYPE, -1, [12, 103, 97, 108]));
this.getHandle$().write$BA(Clazz.array(Byte.TYPE, -1, [97, 1, -52, -52, 0, 0, 0, 0]));
p$2.writeAtom$I$S.apply(this, [24, "stts"]);
this.getHandle$().writeShort$I(0);
this.getHandle$().writeShort$I(0);
this.getHandle$().writeInt$I(1);
this.getHandle$().writeInt$I(this.numWritten);
this.getHandle$().writeInt$I(((1000.0 / this.getFramesPerSecond$())|0));
p$2.writeAtom$I$S.apply(this, [28, "stsc"]);
this.getHandle$().writeShort$I(0);
this.getHandle$().writeShort$I(0);
this.getHandle$().writeInt$I(1);
this.getHandle$().writeInt$I(1);
this.getHandle$().writeInt$I(1);
this.getHandle$().writeInt$I(1);
p$2.writeAtom$I$S.apply(this, [20 + 4 * this.numWritten, "stsz"]);
this.getHandle$().writeShort$I(0);
this.getHandle$().writeShort$I(0);
this.getHandle$().writeInt$I(0);
this.getHandle$().writeInt$I(this.numWritten);
for (var i=0; i < this.numWritten; i++) {
this.getHandle$().writeInt$I(channels * height * (width + this.pad) );
}
p$2.writeAtom$I$S.apply(this, [16 + 4 * this.numWritten, "stco"]);
this.getHandle$().writeShort$I(0);
this.getHandle$().writeShort$I(0);
this.getHandle$().writeInt$I(this.numWritten);
for (var i=0; i < this.numWritten; i++) {
this.getHandle$().writeInt$I((this.offsets.get$I(i)).valueOf());
}
}, p$2);

Clazz.newMeth(C$, 'writeRotationMatrix', function () {
this.getHandle$().writeInt$I(1);
this.getHandle$().writeInt$I(0);
this.getHandle$().writeInt$I(0);
this.getHandle$().writeInt$I(0);
this.getHandle$().writeInt$I(1);
this.getHandle$().writeInt$I(0);
this.getHandle$().writeInt$I(0);
this.getHandle$().writeInt$I(0);
this.getHandle$().writeInt$I(16384);
}, p$2);

Clazz.newMeth(C$, 'writeAtom$I$S', function (length, type) {
this.getHandle$().writeInt$I(length);
this.getHandle$().writeBytes$S(type);
}, p$2);
C$.$getAnn$ = function(){ return [
[['qtJavaService','io.scif.formats.qt.QTJavaService',null,['org.scijava.plugin.Parameter']],['']],
  [['$$formatService','io.scif.services.FormatService',null,['org.scijava.plugin.Parameter']],['']],
  [['translatorService','io.scif.services.TranslatorService',null,['org.scijava.plugin.Parameter']],['']],
  [['dataHandleService','org.scijava.io.handle.DataHandleService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NativeQTFormat, "NativeQTTranslator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractTranslator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'source$', function () {
return Clazz.getClass($I$(10),['add$io_scif_ImageMetadata','createImageMetadata$I','get$I','getAll$','getDatasetName$','getDatasetSize$','getDestinationLocation$','getImageCount$','getSource$','getSourceLocation$','isFiltered$','populateImageMetadata$','setDatasetName$S','setDestinationLocation$org_scijava_io_location_Location','setFiltered$Z','setSource$org_scijava_io_handle_DataHandle','setSourceLocation$org_scijava_io_location_Location']);
});

Clazz.newMeth(C$, 'dest$', function () {
return Clazz.getClass($I$(11));
});

Clazz.newMeth(C$, ['translateImageMetadata$java_util_List$io_scif_formats_qt_NativeQTFormat_Metadata','translateImageMetadata$java_util_List$TN'], function (source, dest) {
dest.createImageMetadata$I(1);
dest.get$I(0).setAxisLength$net_imagej_axis_AxisType$J($I$(1).X, source.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(1).X));
dest.get$I(0).setAxisLength$net_imagej_axis_AxisType$J($I$(1).Y, source.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(1).Y));
dest.get$I(0).setAxisLength$net_imagej_axis_AxisType$J($I$(1).TIME, source.get$I(0).getPlaneCount$());
var bpp=$I$(2).getBitsPerPixel$I(source.get$I(0).getPixelType$()) == 8 ? 8 : 16;
dest.setBitsPerPixel$I(source.get$I(0).isMultichannel$() ? bpp : (bpp * 5));
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.qt.NativeQTFormat.NativeQTTranslator',null,['org.scijava.plugin.Plugin']],['type="io.scif.Translator.class" priority="-100.0" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NativeQTFormat, "NativeQTUtils", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'parse$org_scijava_io_handle_DataHandle$io_scif_formats_qt_NativeQTFormat_Metadata$I$J$J$org_scijava_log_LogService', function (stream, meta, depth, offset, length, log) {
var dataHandleService=null;
while (offset < length){
stream.seek$J(offset);
var atomSize=stream.readInt$() & 4294967295;
var atomType=stream.readString$I(4);
if (atomSize == 1) {
atomSize=stream.readLong$();
}if (atomSize < 0) {
log.warn$O("QTReader: invalid atom size: " + atomSize);
}log.debug$O("Seeking to " + offset + "; atomType=" + atomType + "; atomSize=" + atomSize );
if (C$.isContainer$S(atomType)) {
C$.parse$org_scijava_io_handle_DataHandle$io_scif_formats_qt_NativeQTFormat_Metadata$I$J$J$org_scijava_log_LogService(stream, meta, depth++, stream.offset$(), offset + atomSize, log);
} else {
if (atomSize == 0) atomSize=stream.length$();
var oldpos=stream.offset$();
if (atomType.equals$O("mdat")) {
meta.setPixelOffset$J(stream.offset$());
meta.setPixelBytes$J(atomSize - 8);
if (meta.getPixelBytes$() > (stream.length$() - meta.getPixelOffset$())) {
meta.setPixelBytes$J(stream.length$() - meta.getPixelOffset$());
}} else if (atomType.equals$O("tkhd")) {
stream.skipBytes$I(38);
var matrix=Clazz.array(Integer.TYPE, [3, 3]);
for (var i=0; i < matrix.length; i++) {
for (var j=0; j < matrix[0].length; j++) {
matrix[i][j]=stream.readInt$();
}
}
meta.setFlip$Z(matrix[0][0] == 0 && matrix[1][0] != 0 );
if (meta.get$I(0).getAxisIndex$net_imagej_axis_AxisType($I$(1).X) == -1) meta.get$I(0).setAxisLength$net_imagej_axis_AxisType$J($I$(1).X, stream.readInt$());
if (meta.get$I(0).getAxisIndex$net_imagej_axis_AxisType($I$(1).Y) == -1) meta.get$I(0).setAxisLength$net_imagej_axis_AxisType$J($I$(1).Y, stream.readInt$());
} else if (atomType.equals$O("cmov")) {
stream.skipBytes$I(8);
if ("zlib".equals$O(stream.readString$I(4))) {
atomSize=stream.readInt$();
stream.skipBytes$I(4);
stream.readInt$();
var b=Clazz.array(Byte.TYPE, [((atomSize - 12)|0)]);
stream.read$BA(b);
var codecService=meta.context$().service$Class(Clazz.getClass($I$(12),['getCodec$Class']));
var codec=codecService.getCodec$Class(Clazz.getClass($I$(13)));
var output=codec.decompress$BA$io_scif_codec_CodecOptions(b, null);
if (dataHandleService == null ) {
dataHandleService=meta.getContext$().getService$Class(Clazz.getClass($I$(14),['exists$org_scijava_io_location_Location','getPluginType$','getType$','readBuffer$org_scijava_io_handle_DataHandle','readBuffer$org_scijava_io_location_Location','writeBuffer$org_scijava_io_handle_DataHandle']));
}try {
var tmpStream=dataHandleService.create$TD(Clazz.new_($I$(15,1).c$$BA,[output]));
/*try*/ {
C$.parse$org_scijava_io_handle_DataHandle$io_scif_formats_qt_NativeQTFormat_Metadata$I$J$J$org_scijava_log_LogService(tmpStream, meta, 0, 0, output.length, log);
}
}finally{/*res*/
try{tmpStream&&tmpStream.close$&&tmpStream.close$()}catch(_){}}
} else {
throw Clazz.new_(Clazz.load('io.scif.UnsupportedCompressionException').c$$S,["Compressed header not supported."]);
}} else if (atomType.equals$O("stco")) {
if (meta.getOffsets$().size$() > 0) break;
meta.setSpork$Z(false);
stream.skipBytes$I(4);
var planeCount=(meta.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(1).TIME)|0);
var numPlanes=stream.readInt$();
if (numPlanes != planeCount) {
stream.seek$J(stream.offset$() - 4);
var off=stream.readInt$();
meta.getOffsets$().add$TE(new Integer(off));
for (var i=1; i < planeCount; i++) {
if ((meta.getChunkSizes$().isEmpty$()) && (i < meta.getChunkSizes$().size$()) ) {
meta.setRawSize$I(meta.getChunkSizes$().get$I(i).intValue$());
} else i=planeCount;
off+=meta.getRawSize$();
meta.getOffsets$().add$TE(new Integer(off));
}
} else {
for (var i=0; i < numPlanes; i++) {
meta.getOffsets$().add$TE(new Integer(stream.readInt$()));
}
}} else if (atomType.equals$O("stsd")) {
stream.skipBytes$I(4);
var numEntries=stream.readInt$();
stream.skipBytes$I(4);
for (var i=0; i < numEntries; i++) {
if (i == 0) {
meta.setCodec$S(stream.readString$I(4));
if (!meta.getCodec$().equals$O("raw ") && !meta.getCodec$().equals$O("rle ") && !meta.getCodec$().equals$O("rpza") && !meta.getCodec$().equals$O("mjpb") && !meta.getCodec$().equals$O("jpeg")  ) {
throw Clazz.new_(Clazz.load('io.scif.UnsupportedCompressionException').c$$S,["Unsupported codec: " + meta.getCodec$()]);
}stream.skipBytes$I(16);
if (stream.readShort$() == 0) {
stream.skipBytes$I(56);
meta.setBitsPerPixel$I(stream.readShort$());
if (meta.getCodec$().equals$O("rpza")) meta.setBitsPerPixel$I(8);
stream.skipBytes$I(10);
meta.setInterlaced$Z(stream.read$() == 2);
meta.getTable$().put$TK$TV("Codec", meta.getCodec$());
meta.getTable$().put$TK$TV("Bits per pixel", new Integer(meta.getBitsPerPixel$()));
stream.skipBytes$I(9);
}} else {
meta.setAltCodec$S(stream.readString$I(4));
meta.getTable$().put$TK$TV("Second codec", meta.getAltCodec$());
}}
} else if (atomType.equals$O("stsz")) {
stream.skipBytes$I(4);
meta.setRawSize$I(stream.readInt$());
meta.get$I(0).setAxisLength$net_imagej_axis_AxisType$J($I$(1).TIME, stream.readInt$());
if (meta.getRawSize$() == 0) {
stream.seek$J(stream.offset$() - 4);
for (var b=0; b < meta.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(1).TIME); b++) {
meta.getChunkSizes$().add$TE(new Integer(stream.readInt$()));
}
}} else if (atomType.equals$O("stsc")) {
stream.skipBytes$I(4);
var numChunks=stream.readInt$();
if (meta.getAltCodec$() != null ) {
var prevChunk=0;
for (var i=0; i < numChunks; i++) {
var chunk=stream.readInt$();
var planesPerChunk=stream.readInt$();
var id=stream.readInt$();
if (id == 2) meta.setAltPlanes$I(meta.getAltPlanes$() + planesPerChunk * (chunk - prevChunk));
prevChunk=chunk;
}
}} else if (atomType.equals$O("stts")) {
stream.skipBytes$I(12);
var fps=stream.readInt$();
meta.getTable$().put$TK$TV("Frames per second", new Integer(fps));
}if (oldpos + atomSize < stream.length$()) {
stream.seek$J(oldpos + atomSize);
} else break;
}if (atomSize == 0) offset=stream.length$();
 else offset+=atomSize;
if (atomType.equals$O("udta")) offset+=4;
C$.print$I$J$S$org_scijava_log_LogService(depth, atomSize, atomType, log);
}
}, 1);

Clazz.newMeth(C$, 'isContainer$S', function (type) {
for (var CONTAINER_TYPE, $CONTAINER_TYPE = 0, $$CONTAINER_TYPE = $I$(3).CONTAINER_TYPES; $CONTAINER_TYPE<$$CONTAINER_TYPE.length&&((CONTAINER_TYPE=($$CONTAINER_TYPE[$CONTAINER_TYPE])),1);$CONTAINER_TYPE++) {
if (type.equals$O(CONTAINER_TYPE)) return true;
}
return false;
}, 1);

Clazz.newMeth(C$, 'print$I$J$S$org_scijava_log_LogService', function (depth, size, type, log) {
var sb=Clazz.new_($I$(16,1));
for (var i=0; i < depth; i++) sb.append$S(" ");

sb.append$S(type + " : [" + size + "]" );
log.debug$O(sb.toString());
}, 1);

Clazz.newMeth(C$, 'uncompress$BA$S$io_scif_formats_qt_NativeQTFormat_Metadata', function (pixs, code, meta) {
var codecService=meta.context$().service$Class(Clazz.getClass($I$(12),['getCodec$Class']));
var options=Clazz.new_($I$(17,1));
options.width=(meta.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(1).X)|0);
options.height=(meta.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(1).Y)|0);
options.bitsPerSample=meta.getBitsPerPixel$();
options.channels=meta.getBitsPerPixel$() < 40 ? (meta.getBitsPerPixel$()/8|0) : ((meta.getBitsPerPixel$() - 32)/8|0);
options.previousImage=meta.isCanUsePrevious$() ? meta.getPrevPixels$() : null;
options.littleEndian=meta.get$I(0).isLittleEndian$();
options.interleaved=meta.get$I(0).isMultichannel$();
var codec;
if (code.equals$O("raw ")) return pixs;
 else if (code.equals$O("rle ")) {
codec=codecService.getCodec$Class(Clazz.getClass($I$(18)));
} else if (code.equals$O("rpza")) {
codec=codecService.getCodec$Class(Clazz.getClass($I$(18)));
} else if (code.equals$O("mjpb")) {
(options).interlaced=meta.isInterlaced$();
codec=codecService.getCodec$Class(Clazz.getClass($I$(19)));
} else if (code.equals$O("jpeg")) {
codec=codecService.getCodec$Class(Clazz.getClass($I$(20)));
} else {
throw Clazz.new_(Clazz.load('io.scif.UnsupportedCompressionException').c$$S,["Unsupported codec : " + code]);
}return codec.decompress$BA$io_scif_codec_CodecOptions(pixs, options);
}, 1);

Clazz.newMeth(C$, 'stripHeader$org_scijava_io_handle_DataHandle', function (stream) {
stream.seek$J(0);
while (!stream.readString$I(4).equals$O("moov")){
stream.seek$J(stream.offset$() - 2);
}
stream.seek$J(stream.offset$() - 8);
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:41 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
