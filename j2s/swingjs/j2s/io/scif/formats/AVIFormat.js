(function(){var P$=Clazz.newPackage("io.scif.formats"),p$1={},p$2={},I$=[[0,['io.scif.formats.AVIFormat','.AVIUtils'],'net.imagej.axis.Axes','io.scif.util.FormatTools',['org.scijava.io.handle.DataHandle','.ByteOrder'],'java.util.ArrayList','net.imglib2.display.ColorTable8','io.scif.codec.BitBuffer','io.scif.util.ImageTools','net.imglib2.FinalInterval','io.scif.util.SCIFIOMetadataTools','io.scif.Metadata',['io.scif.formats.AVIFormat','.Metadata'],'io.scif.HasColorTable','io.scif.codec.CodecOptions','io.scif.codec.CodecService','io.scif.codec.MSRLECodec','io.scif.codec.MSVideoCodec','io.scif.codec.JPEGCodec','io.scif.formats.AVIFormat']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AVIFormat", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.AbstractFormat');
C$.$classes$=[['Metadata',9],['Checker',9],['Parser',9],['Reader',9],['Writer',9],['Translator',9],['AVIUtils',10]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.MJPEG_HUFFMAN_TABLE=Clazz.array(Byte.TYPE, -1, [-1, -60, 1, -94, 0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 16, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125, 1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, -127, -111, -95, 8, 35, 66, -79, -63, 21, 82, -47, -16, 36, 51, 98, 114, -126, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, -125, -124, -123, -122, -121, -120, -119, -118, -110, -109, -108, -107, -106, -105, -104, -103, -102, -94, -93, -92, -91, -90, -89, -88, -87, -86, -78, -77, -76, -75, -74, -73, -72, -71, -70, -62, -61, -60, -59, -58, -57, -56, -55, -54, -46, -45, -44, -43, -42, -41, -40, -39, -38, -31, -30, -29, -28, -27, -26, -25, -24, -23, -22, -15, -14, -13, -12, -11, -10, -9, -8, -7, -6, 17, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119, 0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, -127, 8, 20, 66, -111, -95, -79, -63, 9, 35, 51, 82, -16, 21, 98, 114, -47, 10, 22, 36, 52, -31, 37, -15, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, -126, -125, -124, -123, -122, -121, -120, -119, -118, -110, -109, -108, -107, -106, -105, -104, -103, -102, -94, -93, -92, -91, -90, -89, -88, -87, -86, -78, -77, -76, -75, -74, -73, -72, -71, -70, -62, -61, -60, -59, -58, -57, -56, -55, -54, -46, -45, -44, -43, -42, -41, -40, -39, -38, -30, -29, -28, -27, -26, -25, -24, -23, -22, -14, -13, -12, -11, -10, -9, -8, -7, -6]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['MJPEG_HUFFMAN_TABLE','byte[]']]]

Clazz.newMeth(C$, 'makeSuffixArray$', function () {
return Clazz.array(String, -1, ["avi"]);
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.AVIFormat',null,['org.scijava.plugin.Plugin']],['type="io.scif.Format.class" name="Audio Video Interleave" ']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.AVIFormat, "Metadata", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractMetadata', 'io.scif.HasColorTable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['bmpCompression','bmpScanLineSize','bmpColorsUsed','bmpWidth','bytesPerPlane'],'L',['lastPlaneIndex'],'H',['bmpBitsPerPixel'],'O',['offsets','java.util.List','+lengths','lut','net.imglib2.display.ColorTable','lastPlane','io.scif.ByteArrayPlane','lastDims','int[]']]]

Clazz.newMeth(C$, 'getBmpBitsPerPixel$', function () {
return this.bmpBitsPerPixel;
});

Clazz.newMeth(C$, 'setBmpBitsPerPixel$H', function (bmpBitsPerPixel) {
this.bmpBitsPerPixel=bmpBitsPerPixel;
});

Clazz.newMeth(C$, 'getBmpCompression$', function () {
return this.bmpCompression;
});

Clazz.newMeth(C$, 'setBmpCompression$I', function (bmpCompression) {
this.bmpCompression=bmpCompression;
});

Clazz.newMeth(C$, 'getBmpScanLineSize$', function () {
return this.bmpScanLineSize;
});

Clazz.newMeth(C$, 'setBmpScanLineSize$I', function (bmpScanLineSize) {
this.bmpScanLineSize=bmpScanLineSize;
});

Clazz.newMeth(C$, 'getOffsets$', function () {
return this.offsets;
});

Clazz.newMeth(C$, 'setOffsets$java_util_List', function (offsets) {
this.offsets=offsets;
});

Clazz.newMeth(C$, 'getLengths$', function () {
return this.lengths;
});

Clazz.newMeth(C$, 'setLengths$java_util_List', function (lengths) {
this.lengths=lengths;
});

Clazz.newMeth(C$, 'getBmpColorsUsed$', function () {
return this.bmpColorsUsed;
});

Clazz.newMeth(C$, 'setBmpColorsUsed$I', function (bmpColorsUsed) {
this.bmpColorsUsed=bmpColorsUsed;
});

Clazz.newMeth(C$, 'getBmpWidth$', function () {
return this.bmpWidth;
});

Clazz.newMeth(C$, 'setBmpWidth$I', function (bmpWidth) {
this.bmpWidth=bmpWidth;
});

Clazz.newMeth(C$, 'getLastPlane$', function () {
return this.lastPlane;
});

Clazz.newMeth(C$, 'getLastPlaneBytes$', function () {
return this.lastPlane == null  ? null : this.lastPlane.getBytes$();
});

Clazz.newMeth(C$, 'setLastDimensions$IA', function (dims) {
this.lastDims=dims;
});

Clazz.newMeth(C$, 'getLastDimensions$', function () {
return this.lastDims;
});

Clazz.newMeth(C$, 'setLastPlane$io_scif_ByteArrayPlane', function (lastPlane) {
this.lastPlane=lastPlane;
});

Clazz.newMeth(C$, 'getLastPlaneIndex$', function () {
return this.lastPlaneIndex;
});

Clazz.newMeth(C$, 'setLastPlaneIndex$J', function (lastPlaneIndex) {
this.lastPlaneIndex=lastPlaneIndex;
});

Clazz.newMeth(C$, 'getBytesPerPlane$', function () {
return this.bytesPerPlane;
});

Clazz.newMeth(C$, 'setBytesPerPlane$I', function (bytesPerPlane) {
this.bytesPerPlane=bytesPerPlane;
});

Clazz.newMeth(C$, ['getColorTable$I$J','getColorTable$'], function (imageIndex, planeIndex) {
return this.lut;
});

Clazz.newMeth(C$, 'populateImageMetadata$', function () {
var iMeta=this.get$I(0);
iMeta.setLittleEndian$Z(true);
iMeta.setFalseColor$Z(false);
iMeta.setMetadataComplete$Z(true);
var sizeT=this.getOffsets$().size$();
this.getTable$().put$TK$TV("Compression", $I$(1).getCodecName$I(this.getBmpCompression$()));
iMeta.setPlanarAxisCount$I(2);
if (this.getBmpCompression$() == 1196444237) {
var fileOff=this.getOffsets$().get$I(0).longValue$();
var options=$I$(1).createCodecOptions$io_scif_formats_AVIFormat_Metadata$I$J(this, 0, 0);
var nBytes=0;
try {
var x=0;
var y=0;
var w=(iMeta.getAxisLength$net_imagej_axis_AxisType($I$(2).X)|0);
var h=(iMeta.getAxisLength$net_imagej_axis_AxisType($I$(2).Y)|0);
nBytes=($I$(1).extractCompression$io_scif_formats_AVIFormat_Metadata$io_scif_codec_CodecOptions$org_scijava_io_handle_DataHandle$io_scif_ByteArrayPlane$J$IA(this, options, this.getSource$(), null, 0, Clazz.array(Integer.TYPE, -1, [0, 0, w, h])).length/(w * h)|0);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
this.log$().error$O$Throwable("IOException while decompressing", e);
}
} else if (Clazz.exceptionOf(e$$,"io.scif.FormatException")){
var e = e$$;
{
this.log$().error$O$Throwable("FormatException while decompressing", e);
}
} else {
throw e$$;
}
}
try {
this.getSource$().seek$J(fileOff);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.log$().error$O$Throwable("Error seeking to position: " + fileOff, e);
} else {
throw e;
}
}
if (this.getBmpCompression$() == 16) {
nBytes=(nBytes/(2)|0);
}if (nBytes > 1) {
iMeta.addAxis$net_imagej_axis_AxisType$J($I$(2).CHANNEL, nBytes);
iMeta.setPlanarAxisCount$I(3);
}} else if (this.getBmpBitsPerPixel$() == 32) {
iMeta.addAxis$net_imagej_axis_AxisType$J($I$(2).CHANNEL, 4);
iMeta.setPlanarAxisCount$I(3);
} else if (this.getBytesPerPlane$() == 0 || this.getBmpBitsPerPixel$() == 24 ) {
if (this.getBmpBitsPerPixel$() > 8 || (this.getBmpCompression$() != 0 && this.getColorTable$I$J(0, 0) == null  ) ) {
iMeta.addAxis$net_imagej_axis_AxisType$J($I$(2).CHANNEL, 3);
iMeta.setPlanarAxisCount$I(3);
}} else if (this.getBmpCompression$() == 1296126531) {
iMeta.addAxis$net_imagej_axis_AxisType$J($I$(2).CHANNEL, 3);
iMeta.setPlanarAxisCount$I(3);
} else {
var sizeC=(this.getBytesPerPlane$()/(iMeta.getAxisLength$net_imagej_axis_AxisType($I$(2).X) * iMeta.getAxisLength$net_imagej_axis_AxisType($I$(2).Y) * (($s$[0] = this.getBmpBitsPerPixel$()/8, $s$[0])) )|0);
if (sizeC > 1) {
iMeta.addAxis$net_imagej_axis_AxisType$J($I$(2).CHANNEL, sizeC);
iMeta.setPlanarAxisCount$I(3);
}}if (this.getColorTable$I$J(0, 0) != null  && !iMeta.isMultichannel$() ) {
iMeta.setIndexed$Z(true);
iMeta.addAxis$net_imagej_axis_AxisType$J($I$(2).CHANNEL, 1);
iMeta.setPlanarAxisCount$I(3);
iMeta.setAxisType$I$net_imagej_axis_AxisType(2, $I$(2).CHANNEL);
}if (this.getBmpBitsPerPixel$() <= 8) {
iMeta.setPixelType$I(1);
} else if (this.getBmpBitsPerPixel$() == 16) iMeta.setPixelType$I(3);
 else if (this.getBmpBitsPerPixel$() == 24 || this.getBmpBitsPerPixel$() == 32 ) {
iMeta.setPixelType$I(1);
} else {
this.log$().error$O("Unknown matching for pixel bit width of: " + this.getBmpBitsPerPixel$());
}if (this.getBmpCompression$() != 0) iMeta.setPixelType$I(1);
var effectiveWidth=(this.getBmpScanLineSize$()/(($s$[0] = this.getBmpBitsPerPixel$()/8, $s$[0]))|0);
if (effectiveWidth == 0) {
effectiveWidth=(iMeta.getAxisLength$net_imagej_axis_AxisType($I$(2).X)|0);
}if (effectiveWidth < iMeta.getAxisLength$net_imagej_axis_AxisType($I$(2).X)) {
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(2).X, effectiveWidth);
}if (this.getBmpBitsPerPixel$() != 16 && iMeta.isMultichannel$() ) {
iMeta.setAxisTypes$net_imagej_axis_AxisTypeA([$I$(2).CHANNEL, $I$(2).X, $I$(2).Y]);
}iMeta.addAxis$net_imagej_axis_AxisType$J($I$(2).TIME, sizeT);
});

Clazz.newMeth(C$, 'close$Z', function (fileOnly) {
C$.superclazz.prototype.close$Z.apply(this, [fileOnly]);
if (!fileOnly) {
this.lastPlane=null;
this.lastPlaneIndex=-1;
this.bmpColorsUsed=this.bmpWidth=this.bmpCompression=this.bmpScanLineSize=0;
this.bmpBitsPerPixel=($s$[0] = 0, $s$[0]);
this.bytesPerPlane=0;
this.offsets=null;
this.lengths=null;
this.lut=null;
}});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AVIFormat, "Checker", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractChecker');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'suffixNecessary$', function () {
return false;
});

Clazz.newMeth(C$, 'isFormat$org_scijava_io_handle_DataHandle', function (handle) {
var blockLen=12;
if (!$I$(3).validStream$org_scijava_io_handle_DataHandle$I$Z(handle, 12, false)) return false;
var type=handle.readString$I(4);
handle.skipBytes$I(4);
var format=handle.readString$I(4);
return type.equals$O("RIFF") && format.equals$O("AVI ") ;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AVIFormat, "Parser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractParser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.type="error";
this.fcc="error";
this.size=-1;
}, 1);

C$.$fields$=[['I',['size'],'S',['type','fcc']]]

Clazz.newMeth(C$, ['typedParse$org_scijava_io_handle_DataHandle$io_scif_formats_AVIFormat_Metadata$io_scif_config_SCIFIOConfig','typedParse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig'], function (handle, meta, config) {
handle.setOrder$org_scijava_io_handle_DataHandle_ByteOrder($I$(4).LITTLE_ENDIAN);
this.log$().info$O("Verifying AVI format");
meta.setLastPlaneIndex$J(-1);
meta.setLengths$java_util_List(Clazz.new_(1,{E:"Long"},$I$(5,1)));
meta.setOffsets$java_util_List(Clazz.new_(1,{E:"Long"},$I$(5,1)));
meta.createImageMetadata$I(1);
while (handle.offset$() < handle.length$() - 8){
p$1.readChunk$io_scif_formats_AVIFormat_Metadata.apply(this, [meta]);
}
this.log$().info$O("Populating metadata");
});

Clazz.newMeth(C$, 'readChunkHeader', function () {
p$1.readTypeAndSize.apply(this, []);
this.fcc=this.getSource$().readString$I(4);
}, p$1);

Clazz.newMeth(C$, 'readTypeAndSize', function () {
this.type=this.getSource$().readString$I(4);
this.size=this.getSource$().readInt$();
}, p$1);

Clazz.newMeth(C$, 'readChunk$io_scif_formats_AVIFormat_Metadata', function (meta) {
var listString;
var pos;
p$1.readChunkHeader.apply(this, []);
var m=meta.get$I(0);
var globalTable=meta.getTable$();
var source=this.getSource$();
if (this.type.equals$O("RIFF")) {
if (!this.fcc.startsWith$S("AVI")) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Sorry, AVI RIFF format not found."]);
}} else if (source.offset$() == 12) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Not an AVI file"]);
} else {
if (source.offset$() + this.size - 4 <= source.length$()) {
source.skipBytes$I(this.size - 4);
}return;
}pos=source.offset$();
var spos=pos;
this.log$().info$O("Searching for image data");
while ((source.length$() - source.offset$()) > 4){
listString=source.readString$I(4);
if (listString.equals$O("RIFF")) {
source.seek$J(source.offset$() - 4);
return;
}source.seek$J(pos);
if (listString.equals$O(" JUN")) {
source.skipBytes$I(1);
pos++;
}if (listString.equals$O("JUNK")) {
p$1.readTypeAndSize.apply(this, []);
if (this.type.equals$O("JUNK")) {
source.skipBytes$I(this.size);
}} else if (listString.equals$O("LIST")) {
spos=source.offset$();
p$1.readChunkHeader.apply(this, []);
source.seek$J(spos);
if (this.fcc.equals$O("hdrl")) {
p$1.readChunkHeader.apply(this, []);
if (this.type.equals$O("LIST")) {
if (this.fcc.equals$O("hdrl")) {
p$1.readTypeAndSize.apply(this, []);
if (this.type.equals$O("avih")) {
spos=source.offset$();
globalTable.put$TK$TV("Microseconds per frame", new Integer(source.readInt$()));
globalTable.put$TK$TV("Max. bytes per second", new Integer(source.readInt$()));
source.skipBytes$I(8);
globalTable.put$TK$TV("Total frames", new Integer(source.readInt$()));
globalTable.put$TK$TV("Initial frames", new Integer(source.readInt$()));
source.skipBytes$I(8);
m.addAxis$net_imagej_axis_AxisType$J($I$(2).X, source.readInt$());
globalTable.put$TK$TV("Frame height", new Integer(source.readInt$()));
globalTable.put$TK$TV("Scale factor", new Integer(source.readInt$()));
globalTable.put$TK$TV("Frame rate", new Integer(source.readInt$()));
globalTable.put$TK$TV("Start time", new Integer(source.readInt$()));
globalTable.put$TK$TV("Length", new Integer(source.readInt$()));
globalTable.put$TK$TV("Frame width", new Long(m.getAxisLength$net_imagej_axis_AxisType($I$(2).X)));
if (spos + this.size <= source.length$()) {
source.seek$J(spos + this.size);
}}}}} else if (this.fcc.equals$O("strl")) {
var startPos=source.offset$();
var streamSize=this.size;
p$1.readChunkHeader.apply(this, []);
if (this.type.equals$O("LIST")) {
if (this.fcc.equals$O("strl")) {
p$1.readTypeAndSize.apply(this, []);
if (this.type.equals$O("strh")) {
spos=source.offset$();
source.skipBytes$I(40);
globalTable.put$TK$TV("Stream quality", new Integer(source.readInt$()));
meta.setBytesPerPlane$I(source.readInt$());
globalTable.put$TK$TV("Stream sample size", new Integer(meta.getBytesPerPlane$()));
if (spos + this.size <= source.length$()) {
source.seek$J(spos + this.size);
}}p$1.readTypeAndSize.apply(this, []);
if (this.type.equals$O("strf")) {
spos=source.offset$();
if (meta.get$I(0).getAxisIndex$net_imagej_axis_AxisType($I$(2).Y) != -1) {
source.skipBytes$I(this.size);
p$1.readTypeAndSize.apply(this, []);
while (this.type.equals$O("indx")){
source.skipBytes$I(this.size);
p$1.readTypeAndSize.apply(this, []);
}
pos=source.offset$() - 4;
source.seek$J(pos - 4);
continue;
}source.skipBytes$I(4);
meta.setBmpWidth$I(source.readInt$());
m.addAxis$net_imagej_axis_AxisType$J($I$(2).Y, source.readInt$());
source.skipBytes$I(2);
meta.setBmpBitsPerPixel$H(source.readShort$());
meta.setBmpCompression$I(source.readInt$());
source.skipBytes$I(4);
globalTable.put$TK$TV("Horizontal resolution", new Integer(source.readInt$()));
globalTable.put$TK$TV("Vertical resolution", new Integer(source.readInt$()));
meta.setBmpColorsUsed$I(source.readInt$());
source.skipBytes$I(4);
globalTable.put$TK$TV("Bitmap compression value", new Integer(meta.getBmpCompression$()));
globalTable.put$TK$TV("Number of colors used", new Integer(meta.getBmpColorsUsed$()));
globalTable.put$TK$TV("Bits per pixel", new Short(meta.getBmpBitsPerPixel$()));
var npad=meta.getBmpWidth$() % 4;
if (npad > 0) npad=4 - npad;
meta.setBmpScanLineSize$I((meta.getBmpWidth$() + npad) * (($s$[0] = meta.getBmpBitsPerPixel$()/8, $s$[0])));
var bmpActualColorsUsed=0;
if (meta.getBmpColorsUsed$() != 0) {
bmpActualColorsUsed=meta.getBmpColorsUsed$();
} else if (meta.getBmpBitsPerPixel$() < 16) {
bmpActualColorsUsed=1 << meta.getBmpBitsPerPixel$();
meta.setBmpColorsUsed$I(bmpActualColorsUsed);
}if (meta.getBmpCompression$() != 1 && meta.getBmpCompression$() != 0  && meta.getBmpCompression$() != 1296126531  && meta.getBmpCompression$() != 1196444237  && meta.getBmpCompression$() != 538982489 ) {
throw Clazz.new_(Clazz.load('io.scif.UnsupportedCompressionException').c$$S,[meta.getBmpCompression$() + " not supported"]);
}if (!(meta.getBmpBitsPerPixel$() == 4 || meta.getBmpBitsPerPixel$() == 8  || meta.getBmpBitsPerPixel$() == 24  || meta.getBmpBitsPerPixel$() == 16  || meta.getBmpBitsPerPixel$() == 32 )) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,[meta.getBmpBitsPerPixel$() + " bits per pixel not supported"]);
}if (bmpActualColorsUsed != 0) {
var lut=Clazz.array(Byte.TYPE, [3, meta.getBmpColorsUsed$()]);
for (var i=0; i < meta.getBmpColorsUsed$(); i++) {
if (meta.getBmpCompression$() != 538982489) {
lut[2][i]=(source.readByte$()|0);
lut[1][i]=(source.readByte$()|0);
lut[0][i]=(source.readByte$()|0);
source.skipBytes$I(1);
} else {
lut[0][i]=((i|0)|0);
lut[1][i]=((i|0)|0);
lut[2][i]=((i|0)|0);
}}
meta.lut=Clazz.new_($I$(6,1).c$$BAA,[[lut[0], lut[1], lut[2]]]);
}source.seek$J(spos + this.size);
}}spos=source.offset$();
p$1.readTypeAndSize.apply(this, []);
if (this.type.equals$O("strd")) {
source.skipBytes$I(this.size);
} else {
source.seek$J(spos);
}spos=source.offset$();
p$1.readTypeAndSize.apply(this, []);
if (this.type.equals$O("strn") || this.type.equals$O("indx") ) {
source.skipBytes$I(this.size);
} else {
source.seek$J(spos);
}}if (startPos + streamSize + 8  <= source.length$()) {
source.seek$J(startPos + 8 + streamSize );
}} else if (this.fcc.equals$O("movi")) {
p$1.readChunkHeader.apply(this, []);
if (this.type.equals$O("LIST")) {
if (this.fcc.equals$O("movi")) {
spos=source.offset$();
if (spos >= source.length$() - 12) break;
p$1.readChunkHeader.apply(this, []);
if (!(this.type.equals$O("LIST") && (this.fcc.equals$O("rec ") || this.fcc.equals$O("movi") ) )) {
source.seek$J(spos);
}spos=source.offset$();
var end=false;
while (!end){
p$1.readTypeAndSize.apply(this, []);
var oldType=this.type;
while (this.type.startsWith$S("ix") || this.type.endsWith$S("tx") || this.type.equals$O("JUNK")  ){
source.skipBytes$I(this.size);
p$1.readTypeAndSize.apply(this, []);
}
var check=this.type.substring$I(2);
var foundPixels=false;
while (check.equals$O("db") || check.equals$O("dc") || check.equals$O("wb")  ){
foundPixels=true;
if (check.startsWith$S("d")) {
if (this.size > 0 || meta.getBmpCompression$() != 0 ) {
meta.getOffsets$().add$TE(new Long(source.offset$()));
meta.getLengths$().add$TE(new Long(this.size));
source.skipBytes$I(this.size);
}}spos=source.offset$();
if (spos + 8 >= source.length$()) return;
p$1.readTypeAndSize.apply(this, []);
if (this.type.equals$O("JUNK")) {
source.skipBytes$I(this.size);
spos=source.offset$();
if (spos + 8 >= source.length$()) return;
p$1.readTypeAndSize.apply(this, []);
}check=this.type.substring$I(2);
if (check.equals$O("0d")) {
source.seek$J(spos + 1);
p$1.readTypeAndSize.apply(this, []);
check=this.type.substring$I(2);
}}
source.seek$J(spos);
if (!oldType.startsWith$S("ix") && !foundPixels ) {
end=true;
}}
}}} else {
var oldSize=this.size;
this.size=source.readInt$() - 8;
if (this.size > oldSize) {
this.size=oldSize;
source.seek$J(source.offset$() - 4);
}if (this.size + 8 >= 0) source.skipBytes$I(8 + this.size);
}} else {
p$1.readTypeAndSize.apply(this, []);
if (source.offset$() + 8 < source.length$() && !this.type.equals$O("idx1") ) {
p$1.readTypeAndSize.apply(this, []);
} else if (!this.type.equals$O("idx1")) break;
if (source.offset$() + this.size + 4  <= source.length$()) {
source.skipBytes$I(this.size);
}if (this.type.equals$O("idx1")) break;
}pos=source.offset$();
}
}, p$1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AVIFormat, "Reader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.ByteArrayReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'createDomainArray$', function () {
return Clazz.array(String, -1, ["Graphics"]);
});

Clazz.newMeth(C$, ['openPlane$I$J$io_scif_ByteArrayPlane$net_imglib2_Interval$io_scif_config_SCIFIOConfig','openPlane$I$J$TP$net_imglib2_Interval$io_scif_config_SCIFIOConfig'], function (imageIndex, planeIndex, plane, bounds, config) {
var buf=plane.getBytes$();
var meta=this.getMetadata$();
$I$(3).checkPlaneForReading$io_scif_Metadata$I$J$I$net_imglib2_Interval(meta, imageIndex, planeIndex, buf.length, bounds);
plane.setColorTable$net_imglib2_display_ColorTable(meta.getColorTable$I$J(0, 0));
var bytes=$I$(3).getBytesPerPixel$I(meta.get$I(imageIndex).getPixelType$());
var p=(meta.getBmpScanLineSize$()) / meta.getBmpBitsPerPixel$();
var effectiveWidth=((meta.getBmpScanLineSize$() / p)|0);
if (effectiveWidth == 0 || effectiveWidth < meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).X) ) {
effectiveWidth=(meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).X)|0);
}var xAxis=meta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(2).X);
var yAxis=meta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(2).Y);
var x=(bounds.min$I(xAxis)|0);
var y=(bounds.min$I(yAxis)|0);
var w=(bounds.dimension$I(xAxis)|0);
var h=(bounds.dimension$I(yAxis)|0);
var fileOff=meta.getOffsets$().get$I((planeIndex|0)).longValue$();
var end=planeIndex < meta.getOffsets$().size$() - 1 ? (meta.getOffsets$().get$I((planeIndex|0) + 1)).valueOf() : this.getHandle$().length$();
var maxBytes=end - fileOff;
this.getHandle$().seek$J(fileOff);
if (meta.getBmpCompression$() != 0 && meta.getBmpCompression$() != 538982489 ) {
p$2.uncompress$I$J$io_scif_ByteArrayPlane$I$I$I$I.apply(this, [imageIndex, planeIndex, plane, x, y, w, h]);
return plane;
}if (meta.getBmpBitsPerPixel$() < 8) {
var rawSize=($I$(3).getPlaneSize$io_scif_Metadata$I$I$I(meta, effectiveWidth, (meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).Y)|0), imageIndex)|0);
rawSize=(rawSize/(((8/meta.getBmpBitsPerPixel$()|0)))|0);
var b=Clazz.array(Byte.TYPE, [rawSize]);
var len=(rawSize/(meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).Y)|0)|0);
this.getHandle$().read$BA(b);
var bb=Clazz.new_($I$(7,1).c$$BA,[b]);
bb.skipBits$J(meta.getBmpBitsPerPixel$() * len * (meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).Y) - h - y ) );
for (var row=h; row >= y; row--) {
bb.skipBits$J(meta.getBmpBitsPerPixel$() * x);
for (var col=0; col < len; col++) {
buf[(row - y) * len + col]=((bb.getBits$I(meta.getBmpBitsPerPixel$())|0)|0);
}
bb.skipBits$J(meta.getBmpBitsPerPixel$() * (meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).X)) - w - x);
}
return plane;
}var pad=((((meta.getBmpScanLineSize$()/meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL)|0)) - meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).X) * bytes)|0);
var scanline=w * bytes * ((meta.get$I(imageIndex).getInterleavedAxisCount$() > 0 ? meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL) : 1)|0) ;
this.getHandle$().skipBytes$I((((meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).X) + pad) * (($s$[0] = meta.getBmpBitsPerPixel$()/8, $s$[0])) * (meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).Y) - h - y ) )|0));
if (meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).X) == w && pad == 0 ) {
for (var row=0; row < meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).Y); row++) {
var outputRow=((meta.getBmpCompression$() == 538982489 ? row : meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).Y) - row - 1 )|0);
this.getHandle$().read$BA$I$I(buf, outputRow * scanline, scanline);
}
if (meta.getBmpBitsPerPixel$() == 24 || meta.getBmpBitsPerPixel$() == 32 ) {
for (var i=0; i < (buf.length/meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL)|0); i++) {
var r=($b$[0] = buf[i * (meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL)|0) + 2], $b$[0]);
buf[i * (meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL)|0) + 2]=(buf[i * (meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL)|0)]|0);
buf[i * (meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL)|0)]=(r|0);
}
}} else {
var skip=($I$(3).getPlaneSize$io_scif_Metadata$I$I$I(meta, (meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).X)|0) - w - x  + pad, 1, imageIndex)|0);
if ((meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).X) + pad) * meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).Y) * meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL)  > maxBytes) {
skip=(skip/(meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL))|0);
}for (var i=h - 1; i >= 0; i--) {
this.getHandle$().skipBytes$I(x * (($s$[0] = meta.getBmpBitsPerPixel$()/8, $s$[0])));
this.getHandle$().read$BA$I$I(buf, i * scanline, scanline);
if (meta.getBmpBitsPerPixel$() == 24) {
for (var j=0; j < w; j++) {
var r=($b$[0] = buf[i * scanline + j * 3 + 2], $b$[0]);
buf[i * scanline + j * 3 + 2]=(buf[i * scanline + j * 3]|0);
buf[i * scanline + j * 3]=(r|0);
}
}if (i > 0) this.getHandle$().skipBytes$I(skip);
}
}if (meta.getBmpBitsPerPixel$() == 16 && meta.get$I(imageIndex).isMultichannel$() ) {
$I$(8).bgrToRgb$BA$Z$I$I(plane.getBytes$(), meta.get$I(imageIndex).getInterleavedAxisCount$() > 0, 2, (meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL)|0));
}return plane;
});

Clazz.newMeth(C$, 'uncompress$I$J$io_scif_ByteArrayPlane$I$I$I$I', function (imageIndex, planeIndex, plane, x, y, w, h) {
var meta=this.getMetadata$();
var buf=null;
if (p$2.haveCached$io_scif_formats_AVIFormat_Metadata$J$I$I$I$I.apply(this, [meta, planeIndex, x, y, w, h])) {
buf=meta.getLastPlane$().getBytes$();
} else {
var options=$I$(1).createCodecOptions$io_scif_formats_AVIFormat_Metadata$I$J(meta, imageIndex, planeIndex);
var bounds=Clazz.new_($I$(9,1).c$$JA,[meta.get$I(imageIndex).getAxesLengthsPlanar$()]);
var tmpPlane=this.createPlane$net_imglib2_Interval(bounds);
if (meta.getLastDimensions$() != null  && !p$2.sufficientRegion$io_scif_formats_AVIFormat_Metadata$I$I$I$I.apply(this, [meta, x, y, w, h]) ) {
var lastPlane=meta.getLastPlaneIndex$();
meta.setLastDimensions$IA(null);
meta.setLastPlane$io_scif_ByteArrayPlane(null);
meta.setLastPlaneIndex$J(-1);
this.openPlane$I$J$TP(imageIndex, lastPlane, tmpPlane);
options.previousImage=meta.getLastPlaneBytes$();
}if (options.previousImage == null  && meta.getBmpCompression$() != 1196444237 ) {
while (meta.getLastPlaneIndex$() < planeIndex - 1){
this.openPlane$I$J$TP(imageIndex, meta.getLastPlaneIndex$() + 1, tmpPlane);
}
options.previousImage=meta.getLastPlaneBytes$();
}buf=$I$(1).extractCompression$io_scif_formats_AVIFormat_Metadata$io_scif_codec_CodecOptions$org_scijava_io_handle_DataHandle$io_scif_ByteArrayPlane$J$IA(meta, options, this.getHandle$(), tmpPlane, planeIndex, Clazz.array(Integer.TYPE, -1, [x, y, w, h]));
}var rowLen=($I$(3).getPlaneSize$io_scif_Metadata$I$I$I(meta, w, 1, imageIndex)|0);
var bytes=$I$(3).getBytesPerPixel$I(meta.get$I(imageIndex).getPixelType$());
var inputRowLen=($I$(3).getPlaneSize$io_scif_Metadata$I$I$I(meta, (meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).X)|0), 1, imageIndex)|0);
for (var row=0; row < h; row++) {
System.arraycopy$O$I$O$I$I(buf, (row + y) * inputRowLen + x * bytes, plane.getBytes$(), row * rowLen, rowLen);
}
return plane;
}, p$2);

Clazz.newMeth(C$, 'sufficientRegion$io_scif_formats_AVIFormat_Metadata$I$I$I$I', function (meta, x, y, w, h) {
var cached=true;
var dims=meta.getLastDimensions$();
if (dims == null ) {
cached=false;
} else {
cached=cached && dims[0] <= x ;
cached=cached && dims[1] <= y ;
cached=cached && dims[2] + dims[0] >= x + w ;
cached=cached && dims[3] + dims[1] >= y + h ;
}return cached;
}, p$2);

Clazz.newMeth(C$, 'haveCached$io_scif_formats_AVIFormat_Metadata$J$I$I$I$I', function (meta, planeIndex, x, y, w, h) {
var cached=true;
cached=cached && meta.getLastPlaneIndex$() == planeIndex ;
cached=cached && p$2.sufficientRegion$io_scif_formats_AVIFormat_Metadata$I$I$I$I.apply(this, [meta, x, y, w, h]) ;
return cached;
}, p$2);
var $s$ = new Int16Array(1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AVIFormat, "Writer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractWriter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.planesWritten=0;
}, 1);

C$.$fields$=[['I',['planesWritten','bytesPerPixel','xDim','yDim','zDim','tDim','xPad','microSecPerFrame'],'L',['idx1Pos','endPos','saveidx1Length'],'O',['savedbLength','java.util.List','dataHandleService','org.scijava.io.handle.DataHandleService']]]

Clazz.newMeth(C$, 'makeCompressionTypes$', function () {
return Clazz.array(String, [0]);
});

Clazz.newMeth(C$, 'writePlane$I$J$io_scif_Plane$net_imglib2_Interval', function (imageIndex, planeIndex, plane, bounds) {
var meta=this.getMetadata$();
var buf=plane.getBytes$();
var interleaved=plane.getImageMetadata$().getInterleavedAxisCount$() > 0;
this.checkParams$I$J$BA$net_imglib2_Interval(imageIndex, planeIndex, buf, bounds);
if (!$I$(10).wholePlane$I$io_scif_Metadata$net_imglib2_Interval(imageIndex, meta, bounds)) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["AVIWriter does not yet support saving image tiles."]);
}var nChannels=(plane.getImageMetadata$().getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL)|0);
var width=this.xDim - this.xPad;
var height=(buf.length/(width * this.bytesPerPixel)|0);
var handle=this.getHandle$();
handle.seek$J(this.idx1Pos);
handle.writeBytes$S("00db");
this.savedbLength.add$TE(new Long(handle.offset$()));
handle.writeInt$I(this.bytesPerPixel * this.xDim * this.yDim );
var rowPad=this.xPad * this.bytesPerPixel;
var rowBuffer=Clazz.array(Byte.TYPE, [width * this.bytesPerPixel + rowPad]);
for (var row=height - 1; row >= 0; row--) {
for (var col=0; col < width; col++) {
var offset=row * width + col;
if (interleaved) offset*=nChannels;
var r=($b$[0] = buf[offset], $b$[0]);
if (nChannels > 1) {
var g=($b$[0] = buf[offset + (interleaved ? 1 : width * height)], $b$[0]);
var b=($b$[0] = 0, $b$[0]);
if (nChannels > 2) {
b=($b$[0] = buf[offset + (interleaved ? 2 : 2 * width * height )], $b$[0]);
}rowBuffer[col * this.bytesPerPixel]=(b|0);
rowBuffer[col * this.bytesPerPixel + 1]=(g|0);
}rowBuffer[col * this.bytesPerPixel + this.bytesPerPixel - 1]=(r|0);
}
handle.write$BA(rowBuffer);
}
this.planesWritten++;
this.idx1Pos=handle.offset$();
handle.seek$J(4088);
handle.writeInt$I(((this.idx1Pos - (4092))|0));
handle.seek$J(this.idx1Pos);
handle.writeBytes$S("idx1");
this.saveidx1Length=handle.offset$();
handle.writeInt$I(4 + (this.planesWritten * 16));
for (var z=0; z < this.planesWritten; z++) {
handle.writeBytes$S("00db");
if (z == 0) handle.writeInt$I(16);
 else handle.writeInt$I(0);
handle.writeInt$I((((this.savedbLength.get$I(z)).valueOf() - 4 - 4092 )|0));
handle.writeInt$I(this.bytesPerPixel * this.xDim * this.yDim );
}
this.endPos=handle.offset$();
handle.seek$J(4);
handle.writeInt$I(((this.endPos - (8))|0));
handle.seek$J(this.saveidx1Length);
handle.writeInt$I(((this.endPos - (this.saveidx1Length + 4))|0));
handle.seek$J(48);
handle.writeInt$I(this.planesWritten);
handle.seek$J(140);
handle.writeInt$I(this.planesWritten);
});

Clazz.newMeth(C$, 'canDoStacks$', function () {
return true;
});

Clazz.newMeth(C$, 'getPixelTypes$S', function (codec) {
return Clazz.array(Integer.TYPE, -1, [1]);
});

Clazz.newMeth(C$, 'close$', function () {
C$.superclazz.prototype.close$.apply(this, []);
this.planesWritten=0;
this.bytesPerPixel=0;
this.xDim=this.yDim=this.zDim=this.tDim=this.xPad=0;
this.microSecPerFrame=0;
this.savedbLength=null;
this.idx1Pos=0;
this.endPos=0;
this.saveidx1Length=0;
});

Clazz.newMeth(C$, 'setDest$org_scijava_io_handle_DataHandle$I$io_scif_config_SCIFIOConfig', function (out, imageIndex, config) {
C$.superclazz.prototype.setDest$org_scijava_io_handle_DataHandle$I$io_scif_config_SCIFIOConfig.apply(this, [out, imageIndex, config]);
this.savedbLength=Clazz.new_(1,{E:"Long"},$I$(5,1));
var meta=this.getMetadata$();
if (out.length$() > 0) {
var $in=this.dataHandleService.create$TD(out.get$());
$in.setOrder$org_scijava_io_handle_DataHandle_ByteOrder($I$(4).LITTLE_ENDIAN);
$in.seek$J(48);
this.planesWritten=$in.readInt$();
$in.seek$J(4);
this.endPos=$in.readInt$() + 4 + 4 ;
$in.seek$J(4088);
this.idx1Pos=$in.readInt$() + 4088 + 4 ;
this.saveidx1Length=this.idx1Pos + 4;
if (this.planesWritten > 0) $in.seek$J(this.saveidx1Length + 4);
for (var z=0; z < this.planesWritten; z++) {
$in.skipBytes$I(8);
this.savedbLength.add$TE(new Long($in.readInt$() + 4 + 4092 ));
$in.skipBytes$I(4);
}
$in.close$();
out.seek$J(this.idx1Pos);
}out.setOrder$org_scijava_io_handle_DataHandle_ByteOrder($I$(4).LITTLE_ENDIAN);
var imageMetadata=meta.get$I(imageIndex);
this.tDim=(imageMetadata.getAxisLength$net_imagej_axis_AxisType($I$(2).Z)|0);
this.zDim=(imageMetadata.getAxisLength$net_imagej_axis_AxisType($I$(2).TIME)|0);
this.yDim=(imageMetadata.getAxisLength$net_imagej_axis_AxisType($I$(2).Y)|0);
this.xDim=(imageMetadata.getAxisLength$net_imagej_axis_AxisType($I$(2).X)|0);
var type=$I$(3).getPixelTypeString$I(imageMetadata.getPixelType$());
var pixelType=$I$(3).pixelTypeFromString$S(type);
this.bytesPerPixel=$I$(3).getBytesPerPixel$I(pixelType);
this.bytesPerPixel*=imageMetadata.getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL);
this.xPad=0;
var xMod=this.xDim % 4;
if (xMod != 0) {
this.xPad=4 - xMod;
this.xDim+=this.xPad;
}var lut=null;
if (Clazz.instanceOf(this.getColorModel$(), "java.awt.image.IndexColorModel")) {
lut=Clazz.array(Byte.TYPE, [4, 256]);
var model=this.getColorModel$();
model.getReds$BA(lut[0]);
model.getGreens$BA(lut[1]);
model.getBlues$BA(lut[2]);
model.getAlphas$BA(lut[3]);
}if (out.length$() == 0) {
out.writeBytes$S("RIFF");
out.writeInt$I(0);
out.writeBytes$S("AVI ");
out.writeBytes$S("LIST");
out.writeInt$I((this.bytesPerPixel == 1) ? 1240 : 216);
out.writeBytes$S("hdrl");
out.writeBytes$S("avih");
out.writeInt$I(56);
this.microSecPerFrame=((1.0 / this.getFramesPerSecond$() * 1000000.0)|0);
out.writeInt$I(this.microSecPerFrame);
out.writeInt$I(0);
out.writeInt$I(0);
out.writeInt$I(16);
out.writeInt$I(0);
out.writeInt$I(0);
out.writeInt$I(1);
out.writeInt$I(0);
out.writeInt$I(this.xDim - this.xPad);
out.writeInt$I(this.yDim);
out.writeInt$I(0);
out.writeInt$I(0);
out.writeInt$I(0);
out.writeInt$I(0);
out.writeBytes$S("LIST");
out.writeInt$I((this.bytesPerPixel == 1) ? 1164 : 140);
out.writeBytes$S("strl");
out.writeBytes$S("strh");
out.writeInt$I(56);
out.writeBytes$S("vids");
out.writeBytes$S("DIB ");
out.writeInt$I(0);
out.writeInt$I(0);
out.writeInt$I(0);
out.writeInt$I(1);
out.writeInt$I(this.getFramesPerSecond$());
out.writeInt$I(0);
out.writeInt$I(this.tDim * this.zDim);
out.writeInt$I(0);
out.writeInt$I(-1);
out.writeInt$I(0);
out.writeShort$I(0);
out.writeShort$I(0);
out.writeShort$I(0);
out.writeShort$I(0);
out.writeBytes$S("strf");
out.writeInt$I((this.bytesPerPixel == 1) ? 1068 : 44);
out.writeInt$I(40);
out.writeInt$I(this.xDim);
out.writeInt$I(this.yDim);
out.writeShort$I(1);
var bitsPerPixel=(this.bytesPerPixel == 3) ? 24 : 8;
out.writeShort$I(($s$[0] = bitsPerPixel, $s$[0]));
out.writeInt$I(0);
out.writeInt$I(0);
out.writeInt$I(0);
out.writeInt$I(0);
var nColors=256;
out.writeInt$I(256);
out.writeInt$I(0);
if (this.bytesPerPixel == 1) {
if (lut != null ) {
for (var i=0; i < 256; i++) {
out.write$I(lut[2][i]);
out.write$I(lut[1][i]);
out.write$I(lut[0][i]);
out.write$I(lut[3][i]);
}
} else {
var lutWrite=Clazz.array(Byte.TYPE, [1024]);
for (var i=0; i < 256; i++) {
lutWrite[4 * i]=((i|0)|0);
lutWrite[4 * i + 1]=((i|0)|0);
lutWrite[4 * i + 2]=((i|0)|0);
lutWrite[4 * i + 3]=(0|0);
}
out.write$BA(lutWrite);
}}out.seek$J(168);
out.writeInt$I(1064);
out.seek$J(1236);
out.writeBytes$S("strn");
out.writeInt$I(16);
out.writeBytes$S("FileAVI write  ");
out.seek$J(16);
out.writeInt$I(1240);
out.seek$J(92);
out.writeInt$I(1164);
out.seek$J(1260);
out.writeBytes$S("JUNK");
out.writeInt$I(2816);
for (var i=0; i < 1408; i++) {
out.writeShort$I(0);
}
out.writeBytes$S("LIST");
out.writeInt$I(4);
out.writeBytes$S("movi");
this.idx1Pos=out.offset$();
}});
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);
C$.$getAnn$ = function(){ return [
[['dataHandleService','org.scijava.io.handle.DataHandleService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AVIFormat, "Translator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractTranslator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'source$', function () {
return Clazz.getClass($I$(11),['add$io_scif_ImageMetadata','createImageMetadata$I','get$I','getAll$','getDatasetName$','getDatasetSize$','getDestinationLocation$','getImageCount$','getSource$','getSourceLocation$','isFiltered$','populateImageMetadata$','setDatasetName$S','setDestinationLocation$org_scijava_io_location_Location','setFiltered$Z','setSource$org_scijava_io_handle_DataHandle','setSourceLocation$org_scijava_io_location_Location']);
});

Clazz.newMeth(C$, 'dest$', function () {
return Clazz.getClass($I$(12));
});

Clazz.newMeth(C$, ['translateImageMetadata$java_util_List$io_scif_formats_AVIFormat_Metadata','translateImageMetadata$java_util_List$TN'], function (source, dest) {
var offsets=Clazz.new_(1,{E:"Long"},$I$(5,1));
var lengths=Clazz.new_(1,{E:"Long"},$I$(5,1));
dest.setOffsets$java_util_List(offsets);
dest.setLengths$java_util_List(lengths);
dest.add$io_scif_ImageMetadata(source.get$I(0).copy$());
var sizeX=(source.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(2).X)|0);
var sizeY=(source.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(2).Y)|0);
var bpp=source.get$I(0).getBitsPerPixel$();
var length=bpp;
for (var l, $l = 0, $$l = source.get$I(0).getAxesLengthsPlanar$(); $l<$$l.length&&((l=($$l[$l])),1);$l++) {
length*=l;
}
var offset=0;
var npad=sizeX % 4;
if (npad != 0) sizeX+=(4 - npad);
var numChannels=(source.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL)|0);
dest.setBmpBitsPerPixel$H(($s$[0] = (bpp * numChannels), $s$[0]));
dest.setBmpWidth$I(sizeX * ((bpp/8|0)));
dest.setBmpScanLineSize$I(dest.getBmpWidth$() * numChannels);
try {
if (dest.getSource$() == null ) offset=0;
 else offset=dest.getSource$().offset$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.log$().error$O$Throwable("Error retrieving AVI plane offset", e);
} else {
throw e;
}
}
var destImageMeta=dest.get$I(0);
var nonplanarChannels=1;
if (!destImageMeta.isMultichannel$()) {
nonplanarChannels=numChannels;
length*=numChannels;
}for (var i=0; i < (source.get$I(0).getPlaneCount$()/nonplanarChannels|0); i++) {
offsets.add$TE(new Long(offset));
lengths.add$TE(new Long(length));
offset+=length;
}
if (numChannels > 1) {
dest.setBmpColorsUsed$I((Math.pow(2.0, bpp)|0));
}dest.setBmpCompression$I(0);
if (Clazz.getClass($I$(13),['getColorTable$I$J']).isAssignableFrom$Class(source.getClass$())) {
var ct=(source).getColorTable$(0, 0);
dest.setBmpColorsUsed$I(ct.getLength$());
}dest.setBytesPerPlane$I(((length|0)/8|0));
});
var $s$ = new Int16Array(1);
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.AVIFormat.Translator',null,['org.scijava.plugin.Plugin']],['type="io.scif.Translator.class" priority="-100.0" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.AVIFormat, "AVIUtils", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'createCodecOptions$io_scif_formats_AVIFormat_Metadata$I$J', function (meta, imageIndex, planeIndex) {
var options=Clazz.new_($I$(14,1));
options.width=(meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).X)|0);
options.height=(meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).Y)|0);
options.previousImage=(meta.getLastPlaneIndex$() == planeIndex - 1) ? meta.getLastPlaneBytes$() : null;
options.bitsPerSample=meta.getBmpBitsPerPixel$();
options.interleaved=meta.get$I(imageIndex).getInterleavedAxisCount$() > 0;
options.littleEndian=meta.get$I(imageIndex).isLittleEndian$();
return options;
}, 1);

Clazz.newMeth(C$, 'getCodecName$I', function (bmpCompression) {
switch (bmpCompression) {
case 0:
return "Raw (uncompressed)";
case 1:
return "Microsoft Run-Length Encoding (MSRLE)";
case 1296126531:
return "Microsoft Video (MSV1)";
case 1196444237:
return "JPEG";
default:
return "Unknown";
}
}, 1);

Clazz.newMeth(C$, 'extractCompression$io_scif_formats_AVIFormat_Metadata$io_scif_codec_CodecOptions$org_scijava_io_handle_DataHandle$io_scif_ByteArrayPlane$J$IA', function (meta, options, stream, plane, planeIndex, dims) {
var bmpCompression=meta.getBmpCompression$();
var fileOff=meta.getOffsets$().get$I((planeIndex|0)).longValue$();
var filePointer=stream.offset$();
stream.seek$J(fileOff);
var buf=null;
var codecService=meta.context$().service$Class(Clazz.getClass($I$(15),['getCodec$Class']));
if (bmpCompression == 1) {
var b=Clazz.array(Byte.TYPE, [(meta.getLengths$().get$I((planeIndex|0)).longValue$()|0)]);
stream.read$BA(b);
var codec=codecService.getCodec$Class(Clazz.getClass($I$(16)));
buf=codec.decompress$BA$io_scif_codec_CodecOptions(b, options);
plane.setData$TT(buf);
if (C$.updateLastPlane$io_scif_formats_AVIFormat_Metadata$J$IA(meta, planeIndex, dims)) {
meta.setLastPlane$io_scif_ByteArrayPlane(plane);
meta.setLastPlaneIndex$J(planeIndex);
meta.setLastDimensions$IA(dims);
}} else if (bmpCompression == 1296126531) {
var codec=codecService.getCodec$Class(Clazz.getClass($I$(17)));
buf=codec.decompress$org_scijava_io_handle_DataHandle$io_scif_codec_CodecOptions(stream, options);
plane.setData$TT(buf);
if (C$.updateLastPlane$io_scif_formats_AVIFormat_Metadata$J$IA(meta, planeIndex, dims)) {
meta.setLastPlane$io_scif_ByteArrayPlane(plane);
meta.setLastPlaneIndex$J(planeIndex);
meta.setLastDimensions$IA(dims);
}} else if (bmpCompression == 1196444237) {
var codec=codecService.getCodec$Class(Clazz.getClass($I$(18)));
var tmpPlane=Clazz.array(Byte.TYPE, [(meta.getLengths$().get$I((planeIndex|0)).longValue$()|0)]);
stream.read$BA(tmpPlane);
var motionJPEG= String.instantialize(tmpPlane, 6, 4, "UTF-8").equals$O("AVI1");
if (motionJPEG) {
var fixedPlane=Clazz.array(Byte.TYPE, [tmpPlane.length + $I$(19).MJPEG_HUFFMAN_TABLE.length]);
System.arraycopy$O$I$O$I$I(plane.getBytes$(), 0, fixedPlane, 0, 20);
System.arraycopy$O$I$O$I$I($I$(19).MJPEG_HUFFMAN_TABLE, 0, fixedPlane, 20, $I$(19).MJPEG_HUFFMAN_TABLE.length);
System.arraycopy$O$I$O$I$I(plane.getBytes$(), 20, fixedPlane, 20 + $I$(19).MJPEG_HUFFMAN_TABLE.length, tmpPlane.length - 20);
tmpPlane=fixedPlane;
}buf=codec.decompress$BA$io_scif_codec_CodecOptions(tmpPlane, options);
if (motionJPEG) {
buf=plane.getBytes$();
for (var i=0; i < buf.length; i+=3) {
var y=buf[i] & 255;
var cb=(buf[i + 1] & 255) - 128;
var cr=(buf[i + 2] & 255) - 128;
var red=((y + 1.402 * cr)|0);
var green=((y - 0.34414 * cb - 0.71414 * cr)|0);
var blue=((y + 1.772 * cb)|0);
if (red < 0) {
red=0;
} else if (red > 255) {
red=255;
}if (green < 0) {
green=0;
} else if (green > 255) {
green=255;
}if (blue < 0) {
blue=0;
} else if (blue > 255) {
blue=255;
}buf[i]=(((red & 255)|0)|0);
buf[i + 1]=(((green & 255)|0)|0);
buf[i + 2]=(((blue & 255)|0)|0);
}
}} else {
throw Clazz.new_(Clazz.load('io.scif.UnsupportedCompressionException').c$$S,[bmpCompression + " not supported"]);
}stream.seek$J(filePointer);
return buf;
}, 1);

Clazz.newMeth(C$, 'updateLastPlane$io_scif_formats_AVIFormat_Metadata$J$IA', function (meta, planeIndex, dims) {
if (meta.getLastPlaneIndex$() != planeIndex) return true;
var lastDims=meta.getLastDimensions$();
var smaller=dims[0] > lastDims[0] && dims[1] > lastDims[1]  && dims[2] < lastDims[2]  && dims[3] < lastDims[3] ;
return !smaller;
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:39 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
