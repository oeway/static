(function(){var P$=Clazz.newPackage("io.scif.formats.qt"),p$1={},I$=[[0,'java.util.ArrayList','net.imagej.axis.Axes','java.util.Vector','net.imglib2.display.ColorTable8','net.imagej.axis.DefaultLinearAxis','org.scijava.util.Bytes','io.scif.codec.PackbitsCodec','io.scif.codec.CodecOptions','io.scif.formats.qt.PICTFormat','io.scif.codec.JPEGCodec','org.scijava.io.location.BytesLocation','io.scif.gui.AWTImageTools']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PICTFormat", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.AbstractFormat');
C$.$classes$=[['Metadata',9],['Parser',9],['Reader',9]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.EXPANSION_TABLE=Clazz.array(Byte.TYPE, [2048]);
{
for (var i=0; i < 256; i++) {
for (var j=0; j < 8; j++) {
C$.EXPANSION_TABLE[i * 8 + j]=((((i & (Math.pow(2, 7 - j)|0)) >> 7 - j)|0)|0);
}
}
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['legacy']]
,['O',['EXPANSION_TABLE','byte[]']]]

Clazz.newMeth(C$, 'setLegacy$Z', function (legacy) {
this.legacy=legacy;
});

Clazz.newMeth(C$, 'isLegacy$', function () {
return this.legacy;
});

Clazz.newMeth(C$, 'makeSuffixArray$', function () {
return Clazz.array(String, -1, ["pict", "pct"]);
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.qt.PICTFormat',null,['org.scijava.plugin.Plugin']],['type="io.scif.Format.class" name="PICT" ']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.PICTFormat, "Metadata", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractMetadata', 'io.scif.HasColorTable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.jpegOffsets=Clazz.new_(1,{E:"Long"},$I$(1,1));
}, 1);

C$.$fields$=[['Z',['versionOne'],'I',['rowBytes'],'O',['strips','java.util.List','lookup','byte[][]','jpegOffsets','java.util.List']]]

Clazz.newMeth(C$, 'getRowBytes$', function () {
return this.rowBytes;
});

Clazz.newMeth(C$, 'setRowBytes$I', function (rowBytes) {
this.rowBytes=rowBytes;
});

Clazz.newMeth(C$, 'getStrips$', function () {
return this.strips;
});

Clazz.newMeth(C$, 'setStrips$java_util_List', function (strips) {
this.strips=strips;
});

Clazz.newMeth(C$, 'isVersionOne$', function () {
return this.versionOne;
});

Clazz.newMeth(C$, 'setVersionOne$Z', function (versionOne) {
this.versionOne=versionOne;
});

Clazz.newMeth(C$, 'getLookup$', function () {
return this.lookup;
});

Clazz.newMeth(C$, 'setLookup$BAA', function (lookup) {
this.lookup=lookup;
});

Clazz.newMeth(C$, 'getJpegOffsets$', function () {
return this.jpegOffsets;
});

Clazz.newMeth(C$, 'setJpegOffsets$java_util_List', function (jpegOffsets) {
this.jpegOffsets=jpegOffsets;
});

Clazz.newMeth(C$, 'populateImageMetadata$', function () {
var iMeta=this.get$I(0);
var planarAxes=2;
if (iMeta.getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL) > 1) planarAxes=3;
iMeta.setPlanarAxisCount$I(planarAxes);
iMeta.setLittleEndian$Z(false);
iMeta.setFalseColor$Z(false);
iMeta.setMetadataComplete$Z(true);
iMeta.setPixelType$I(1);
iMeta.setBitsPerPixel$I(8);
iMeta.setIndexed$Z(!(iMeta.isMultichannel$()) && this.lookup != null  );
});

Clazz.newMeth(C$, 'close$Z', function (fileOnly) {
C$.superclazz.prototype.close$Z.apply(this, [fileOnly]);
if (!fileOnly) {
this.rowBytes=0;
this.strips=null;
this.versionOne=false;
this.lookup=null;
if (this.jpegOffsets != null ) this.jpegOffsets.clear$();
 else this.jpegOffsets=Clazz.new_(1,{E:"Long"},$I$(3,1));
}});

Clazz.newMeth(C$, ['getColorTable$I$J','getColorTable$'], function (imageIndex, planeIndex) {
return this.lookup == null  ? null : Clazz.new_($I$(4,1).c$$BAA,[this.lookup]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PICTFormat, "Parser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractParser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['codecService','io.scif.codec.CodecService']]]

Clazz.newMeth(C$, ['typedParse$org_scijava_io_handle_DataHandle$io_scif_formats_qt_PICTFormat_Metadata$io_scif_config_SCIFIOConfig','typedParse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig'], function (stream, meta, config) {
meta.createImageMetadata$I(1);
var iMeta=meta.get$I(0);
stream.seek$J(518);
var sizeY=stream.readShort$();
var sizeX=stream.readShort$();
var strips=Clazz.new_(1,{E:"java.lang.Object"},$I$(1,1));
var lookup=null;
var versionOne=false;
meta.setStrips$java_util_List(strips);
meta.setLookup$BAA(lookup);
meta.setRowBytes$I(0);
var opcode;
var verOpcode=stream.read$();
var verNumber=stream.read$();
if (verOpcode == 17 && verNumber == 1 ) versionOne=true;
 else if (verOpcode == 0 && verNumber == 17 ) {
versionOne=false;
var verNumber2=stream.readShort$();
if (verNumber2 != 767) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Invalid PICT file : " + verNumber2]);
}stream.skipBytes$I(6);
var pixelsPerInchX=stream.readInt$();
var pixelsPerInchY=stream.readInt$();
iMeta.addAxis$net_imagej_axis_CalibratedAxis(Clazz.new_($I$(5,1).c$$net_imagej_axis_AxisType$S$D,[$I$(2).X, "in", pixelsPerInchX]));
iMeta.addAxis$net_imagej_axis_CalibratedAxis(Clazz.new_($I$(5,1).c$$net_imagej_axis_AxisType$S$D,[$I$(2).Y, "in", pixelsPerInchY]));
stream.skipBytes$I(4);
var y=stream.readShort$();
var x=stream.readShort$();
if (x > 0) sizeX=($s$[0] = x, $s$[0]);
if (y > 0) sizeY=($s$[0] = y, $s$[0]);
stream.skipBytes$I(4);
} else throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Invalid PICT file"]);
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(2).X, sizeX);
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(2).Y, sizeY);
meta.getTable$().put$TK$TV("Version", new Integer(versionOne ? 1 : 2));
meta.setVersionOne$Z(versionOne);
do {
if (versionOne) opcode=stream.read$();
 else {
if ((stream.offset$() & 1) != 0) {
stream.skipBytes$I(1);
}if (stream.offset$() + 2 >= stream.length$()) {
break;
}opcode=stream.readShort$() & 65535;
}} while (p$1.drivePictDecoder$io_scif_formats_qt_PICTFormat_Metadata$I.apply(this, [meta, opcode]));
});

Clazz.newMeth(C$, 'drivePictDecoder$io_scif_formats_qt_PICTFormat_Metadata$I', function (meta, opcode) {
this.log$().debug$O("drivePictDecoder(" + opcode + ") @ " + this.getSource$().offset$() );
switch (opcode) {
case 145:
case 153:
case 144:
case 152:
meta.setRowBytes$I(this.getSource$().readShort$());
if (meta.isVersionOne$() || (meta.getRowBytes$() & 32768) == 0 ) p$1.handleBitmap$io_scif_formats_qt_PICTFormat_Metadata$I.apply(this, [meta, opcode]);
 else p$1.handlePixmap$io_scif_formats_qt_PICTFormat_Metadata$I.apply(this, [meta, opcode]);
break;
case 154:
p$1.handlePixmap$io_scif_formats_qt_PICTFormat_Metadata$I.apply(this, [meta, opcode]);
break;
case 1:
var x=this.getSource$().readShort$();
this.getSource$().skipBytes$I(x - 2);
break;
case 161:
this.getSource$().skipBytes$I(2);
x=this.getSource$().readShort$();
this.getSource$().skipBytes$I(x);
break;
case 255:
return false;
case 2719:
case 37264:
x=this.getSource$().read$();
this.getSource$().skipBytes$I(x);
break;
case 24:
meta.getJpegOffsets$().add$TE(new Long(this.getSource$().offset$() + 2));
meta.get$I(0).setAxisLength$net_imagej_axis_AxisType$J($I$(2).CHANNEL, 3);
while ((this.getSource$().readShort$() & 65535) != 65497 && this.getSource$().offset$() < this.getSource$().length$() ){
}
while (this.getSource$().offset$() < this.getSource$().length$()){
while ((this.getSource$().readShort$() & 65535) != 65496 && this.getSource$().offset$() < this.getSource$().length$() ){
}
if (this.getSource$().offset$() < this.getSource$().length$()) {
meta.getJpegOffsets$().add$TE(new Long(this.getSource$().offset$() - 2));
}}
meta.get$I(0).setAxisTypes$net_imagej_axis_AxisTypeA([$I$(2).CHANNEL, $I$(2).X, $I$(2).Y]);
break;
default:
if (opcode < 0) {
this.log$().warn$O("Invalid opcode: " + opcode);
}}
return this.getSource$().offset$() < this.getSource$().length$();
}, p$1);

Clazz.newMeth(C$, 'handleBitmap$io_scif_formats_qt_PICTFormat_Metadata$I', function (meta, opcode) {
p$1.readImageHeader$io_scif_formats_qt_PICTFormat_Metadata$I.apply(this, [meta, opcode]);
p$1.handlePixmap$io_scif_formats_qt_PICTFormat_Metadata$I$I.apply(this, [meta, 1, 1]);
}, p$1);

Clazz.newMeth(C$, 'handlePixmap$io_scif_formats_qt_PICTFormat_Metadata$I', function (meta, opcode) {
p$1.readImageHeader$io_scif_formats_qt_PICTFormat_Metadata$I.apply(this, [meta, opcode]);
this.log$().debug$O("handlePixmap(" + opcode + ")" );
var pixelSize=this.getSource$().readShort$();
var compCount=this.getSource$().readShort$();
this.getSource$().skipBytes$I(14);
if (opcode == 154) {
switch (pixelSize) {
case 32:
meta.setRowBytes$I((meta.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(2).X)|0) * compCount);
break;
case 16:
meta.setRowBytes$I((meta.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(2).X)|0) * 2);
break;
default:
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Sorry, vector data not supported."]);
}
} else {
this.getSource$().skipBytes$I(4);
this.getSource$().readShort$();
var count=this.getSource$().readShort$();
count++;
var lookup=Clazz.array(Byte.TYPE, [3, count]);
for (var i=0; i < count; i++) {
this.getSource$().skipBytes$I(2);
lookup[0][i]=(this.getSource$().readByte$()|0);
this.getSource$().skipBytes$I(1);
lookup[1][i]=(this.getSource$().readByte$()|0);
this.getSource$().skipBytes$I(1);
lookup[2][i]=(this.getSource$().readByte$()|0);
this.getSource$().skipBytes$I(1);
}
meta.setLookup$BAA(lookup);
}this.getSource$().skipBytes$I(18);
if (opcode == 145 || opcode == 153 ) this.getSource$().skipBytes$I(2);
p$1.handlePixmap$io_scif_formats_qt_PICTFormat_Metadata$I$I.apply(this, [meta, pixelSize, compCount]);
}, p$1);

Clazz.newMeth(C$, 'handlePixmap$io_scif_formats_qt_PICTFormat_Metadata$I$I', function (meta, pixelSize, compCount) {
this.log$().debug$O("handlePixmap(" + meta.getRowBytes$() + ", " + pixelSize + ", " + compCount + ")" );
var rawLen;
var buf;
var uBuf=null;
var uBufI=null;
var bufSize=meta.getRowBytes$();
var outBufSize=(meta.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(2).X)|0);
var outBuf=null;
var compressed=(meta.getRowBytes$() >= 8) || (pixelSize == 32) ;
switch (pixelSize) {
case 32:
if (!compressed) uBufI=Clazz.array(Integer.TYPE, [(meta.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(2).X)|0)]);
 else uBuf=Clazz.array(Byte.TYPE, [bufSize]);
break;
case 16:
uBufI=Clazz.array(Integer.TYPE, [(meta.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(2).X)|0)]);
break;
case 8:
uBuf=Clazz.array(Byte.TYPE, [bufSize]);
break;
default:
outBuf=Clazz.array(Byte.TYPE, [outBufSize]);
uBuf=Clazz.array(Byte.TYPE, [bufSize]);
break;
}
if (!compressed) {
this.log$().debug$O("Pixel data is uncompressed (pixelSize=" + pixelSize + ")." );
buf=Clazz.array(Byte.TYPE, [bufSize]);
for (var row=0; row < meta.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(2).X); row++) {
this.getSource$().read$BA$I$I(buf, 0, meta.getRowBytes$());
switch (pixelSize) {
case 16:
for (var i=0; i < meta.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(2).X); i++) {
uBufI[i]=$I$(6).toShort$BA$I$I$Z(buf, i * 2, 2, false);
}
meta.getStrips$().add$TE(uBufI);
buf=null;
meta.get$I(0).setAxisLength$net_imagej_axis_AxisType$J($I$(2).CHANNEL, 3);
break;
case 8:
meta.getStrips$().add$TE(buf);
break;
default:
p$1.expandPixels$I$BA$BA$I.apply(this, [pixelSize, buf, outBuf, outBuf.length]);
meta.getStrips$().add$TE(outBuf);
buf=null;
}
}
} else {
this.log$().debug$O("Pixel data is compressed (pixelSize=" + pixelSize + "; compCount=" + compCount + ")." );
buf=Clazz.array(Byte.TYPE, [bufSize + 1 + (bufSize/128|0) ]);
for (var row=0; row < meta.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(2).Y); row++) {
if (meta.getRowBytes$() > 250) rawLen=this.getSource$().readShort$();
 else rawLen=this.getSource$().read$();
if (rawLen > buf.length) rawLen=buf.length;
if ((this.getSource$().length$() - this.getSource$().offset$()) <= rawLen) {
rawLen=((this.getSource$().length$() - this.getSource$().offset$() - 1 )|0);
}if (rawLen < 0) {
rawLen=0;
this.getSource$().seek$J(this.getSource$().length$() - 1);
}this.getSource$().read$BA$I$I(buf, 0, rawLen);
if (pixelSize == 16) {
uBufI=Clazz.array(Integer.TYPE, [(meta.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(2).X)|0)]);
p$1.unpackBits$BA$IA.apply(this, [buf, uBufI]);
meta.getStrips$().add$TE(uBufI);
meta.get$I(0).setAxisLength$net_imagej_axis_AxisType$J($I$(2).CHANNEL, 3);
} else {
var c=this.codecService.getCodec$Class(Clazz.getClass($I$(7)));
var options=Clazz.new_($I$(8,1));
options.maxBytes=(meta.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(2).X)|0) * 4;
uBuf=c.decompress$BA$io_scif_codec_CodecOptions(buf, options);
}if (pixelSize < 8) {
p$1.expandPixels$I$BA$BA$I.apply(this, [pixelSize, uBuf, outBuf, outBuf.length]);
meta.getStrips$().add$TE(outBuf);
} else if (pixelSize == 8) {
meta.getStrips$().add$TE(uBuf);
} else if (pixelSize == 24 || pixelSize == 32 ) {
var newBuf=null;
for (var q=0; q < compCount; q++) {
var offset=q * (meta.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(2).X)|0);
var len=Math.min((meta.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(2).X)|0), uBuf.length - offset);
newBuf=Clazz.array(Byte.TYPE, [(meta.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(2).X)|0)]);
if (offset < uBuf.length) {
System.arraycopy$O$I$O$I$I(uBuf, offset, newBuf, 0, len);
}meta.getStrips$().add$TE(newBuf);
}
meta.get$I(0).setAxisLength$net_imagej_axis_AxisType$J($I$(2).CHANNEL, 3);
}}
}}, p$1);

Clazz.newMeth(C$, 'readImageHeader$io_scif_formats_qt_PICTFormat_Metadata$I', function (meta, opcode) {
var rowBytes=meta.getRowBytes$();
if (opcode == 154) this.getSource$().skipBytes$I(6);
 else rowBytes&=16383;
meta.setRowBytes$I(rowBytes);
var tlY=this.getSource$().readShort$();
var tlX=this.getSource$().readShort$();
var brY=this.getSource$().readShort$();
var brX=this.getSource$().readShort$();
if (brX - tlX > 0) meta.get$I(0).setAxisLength$net_imagej_axis_AxisType$J($I$(2).X, brX - tlX);
if (brY - tlY > 0) meta.get$I(0).setAxisLength$net_imagej_axis_AxisType$J($I$(2).Y, brY - tlY);
this.getSource$().skipBytes$I(18);
}, p$1);

Clazz.newMeth(C$, 'expandPixels$I$BA$BA$I', function (bitSize, ib, ob, outLen) {
this.log$().debug$O("expandPixels(" + bitSize + ", " + ib.length + ", " + ob.length + ", " + outLen + ")" );
if (bitSize == 1) {
var remainder=outLen % 8;
var max=(outLen/8|0);
for (var i=0; i < max; i++) {
if (i < ib.length) {
var look=(ib[i] & 255) * 8;
System.arraycopy$O$I$O$I$I($I$(9).EXPANSION_TABLE, look, ob, i * 8, 8);
} else i=max;
}
if (remainder != 0) {
if (max < ib.length) {
System.arraycopy$O$I$O$I$I($I$(9).EXPANSION_TABLE, (ib[max] & 255) * 8, ob, max * 8, remainder);
}}return;
}var v;
var count=(8/bitSize|0);
var maskshift=bitSize;
var pixelshift=8 - bitSize;
var tpixelshift=0;
var pixelshiftdelta=bitSize;
var tmask;
if (bitSize != 1 && bitSize != 2  && bitSize != 4 ) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Can only expand 1, 2, and 4 bit values"]);
}var mask=((Math.pow(2, bitSize)|0) - 1) << (8 - bitSize);
var i=0;
for (var o=0; o < ob.length; i++) {
tmask=mask;
tpixelshift=pixelshift;
v=($b$[0] = ib[i], $b$[0]);
for (var t=0; t < count && o < ob.length ; t++, o++) {
ob[o]=(((((v & tmask) >>> tpixelshift) & 255)|0)|0);
tmask=($b$[0] = ((tmask & 255) >>> maskshift), $b$[0]);
tpixelshift-=pixelshiftdelta;
}
}
}, p$1);

Clazz.newMeth(C$, 'unpackBits$BA$IA', function (ib, ob) {
this.log$().debug$O("unpackBits(...)");
var i=0;
var b;
var rep;
var end;
for (var o=0; o < ob.length; ) {
if (i + 1 < ib.length) {
b=ib[i++];
if (b >= 0) {
end=o + b + 1 ;
while (o < end && o < ob.length  && (i + 1) < ib.length ){
ob[o++]=$I$(6).toShort$BA$I$I$Z(ib, i, 2, false);
i+=2;
}
} else if (b != -128) {
rep=$I$(6).toShort$BA$I$I$Z(ib, i, 2, false);
i+=2;
end=o - b + 1;
while (o < end && o < ob.length ){
ob[o++]=rep;
}
}} else o=ob.length;
}
}, p$1);
var $s$ = new Int16Array(1);
var $b$ = new Int8Array(1);
C$.$getAnn$ = function(){ return [
[['codecService','io.scif.codec.CodecService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.PICTFormat, "Reader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.ByteArrayReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['qtJavaService','io.scif.formats.qt.QTJavaService','codecService','io.scif.codec.CodecService','dataHandleService','org.scijava.io.handle.DataHandleService']]]

Clazz.newMeth(C$, 'createDomainArray$', function () {
return Clazz.array(String, -1, ["Graphics"]);
});

Clazz.newMeth(C$, ['openPlane$I$J$io_scif_ByteArrayPlane$net_imglib2_Interval$io_scif_config_SCIFIOConfig','openPlane$I$J$TP$net_imglib2_Interval$io_scif_config_SCIFIOConfig'], function (imageIndex, planeIndex, plane, bounds, config) {
var meta=this.getMetadata$();
plane.setColorTable$net_imglib2_display_ColorTable(meta.getColorTable$I$J(imageIndex, planeIndex));
var buf=plane.getBytes$();
if (meta.getJpegOffsets$().size$() > 0) {
this.getHandle$().seek$J((meta.getJpegOffsets$().get$I(0)).valueOf());
var b=Clazz.array(Byte.TYPE, [((this.getHandle$().length$() - this.getHandle$().offset$())|0)]);
this.getHandle$().read$BA(b);
try {
var compressedImages=this.dataHandleService.create$TD(Clazz.new_($I$(11,1).c$$BA,[b]));
var decompressedImages=this.dataHandleService.create$TD(Clazz.new_($I$(11,1).c$$I,[b.length]));
/*try*/ {
for (var jpegOffset, $jpegOffset = meta.getJpegOffsets$().iterator$(); $jpegOffset.hasNext$()&&((jpegOffset=($jpegOffset.next$()).objectValue$()),1);) {
compressedImages.seek$J(jpegOffset - (meta.getJpegOffsets$().get$I(0)).valueOf());
var options=Clazz.new_($I$(8,1));
options.interleaved=meta.get$I(0).getInterleavedAxisCount$() > 0;
options.littleEndian=meta.get$I(0).isLittleEndian$();
var codec=this.codecService.getCodec$Class(Clazz.getClass($I$(10)));
decompressedImages.write$BA(codec.decompress$org_scijava_io_handle_DataHandle$io_scif_codec_CodecOptions(compressedImages, options));
}
decompressedImages.seek$J(0);
this.readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$TP(decompressedImages, imageIndex, bounds, plane);
}
}finally{/*res*/
try{decompressedImages&&decompressedImages.close$&&decompressedImages.close$()}catch(_){}
try{compressedImages&&compressedImages.close$&&compressedImages.close$()}catch(_){}}
return plane;
}if ((this.getFormat$()).isLegacy$() || meta.getStrips$().isEmpty$() ) {
this.getHandle$().seek$J(512);
var pix=Clazz.array(Byte.TYPE, [((this.getHandle$().length$() - this.getHandle$().offset$())|0)]);
this.getHandle$().read$BA(pix);
var b=$I$(12).getBytes$java_awt_image_BufferedImage($I$(12).makeBuffered$java_awt_Image(this.qtJavaService.pictToImage$BA(pix)));
pix=null;
for (var i=0; i < b.length; i++) {
System.arraycopy$O$I$O$I$I(b[i], 0, buf, i * b[i].length, b[i].length);
}
b=null;
return plane;
}if ((meta.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(2).Y) * 4 < meta.getStrips$().size$()) && ((((meta.getStrips$().size$()/3|0)) % meta.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(2).Y)) != 0) ) {
meta.get$I(0).setAxisLength$net_imagej_axis_AxisType$J($I$(2).Y, meta.getStrips$().size$());
}var xAxis=meta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(2).X);
var yAxis=meta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(2).Y);
var x=(bounds.min$I(xAxis)|0);
var y=(bounds.min$I(yAxis)|0);
var w=(bounds.dimension$I(xAxis)|0);
var h=(bounds.dimension$I(yAxis)|0);
var planeSize=w * h;
if (meta.getLookup$() != null ) {
var row;
for (var i=y; i < y + h; i++) {
row=meta.getStrips$().get$I(i);
var len=Math.min(row.length, w);
System.arraycopy$O$I$O$I$I(row, x, buf, (i - y) * w, len);
}
} else if (meta.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(2).Y) * 3 == meta.getStrips$().size$() || meta.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(2).Y) * 4 == meta.getStrips$().size$() ) {
var nc=(meta.getStrips$().size$()/(meta.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(2).Y)|0)|0);
var c0=null;
var c1=null;
var c2=null;
for (var i=y; i < h + y; i++) {
c0=meta.getStrips$().get$I(i * nc + nc - 3);
c1=meta.getStrips$().get$I(i * nc + nc - 2);
c2=meta.getStrips$().get$I(i * nc + nc - 1);
var baseOffset=(i - y) * w;
System.arraycopy$O$I$O$I$I(c0, x, buf, baseOffset, w);
System.arraycopy$O$I$O$I$I(c1, x, buf, planeSize + baseOffset, w);
System.arraycopy$O$I$O$I$I(c2, x, buf, 2 * planeSize + baseOffset, w);
}
} else {
var row=null;
for (var i=y; i < h + y; i++) {
row=meta.getStrips$().get$I(i);
for (var j=x; j < w + x; j++) {
var base=(i - y) * w + (j - x);
buf[base]=((((row[j] & 31744) >> 10)|0)|0);
buf[planeSize + base]=((((row[j] & 992) >> 5)|0)|0);
buf[2 * planeSize + base]=(((row[j] & 31)|0)|0);
}
}
}return plane;
});
C$.$getAnn$ = function(){ return [
[['qtJavaService','io.scif.formats.qt.QTJavaService',null,['org.scijava.plugin.Parameter']],['']],
  [['codecService','io.scif.codec.CodecService',null,['org.scijava.plugin.Parameter']],['']],
  [['dataHandleService','org.scijava.io.handle.DataHandleService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:41 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
