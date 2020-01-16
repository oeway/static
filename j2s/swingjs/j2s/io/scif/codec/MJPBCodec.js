(function(){var P$=Clazz.newPackage("io.scif.codec"),I$=[[0,'io.scif.codec.CodecOptions','io.scif.codec.ByteVector','io.scif.codec.JPEGCodec']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MJPBCodec", null, 'io.scif.codec.AbstractCodec');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.HEADER=Clazz.array(Byte.TYPE, -1, [-1, -40, 0, 16, 74, 70, 73, 70, 0, 1, 1, 0, 72, 72, 0, 0]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['codecService','io.scif.codec.CodecService']]
,['O',['HEADER','byte[]']]]

Clazz.newMeth(C$, 'compress$BA$io_scif_codec_CodecOptions', function (data, options) {
throw Clazz.new_(Clazz.load('io.scif.UnsupportedCompressionException').c$$S,["Motion JPEG-B compression not supported."]);
});

Clazz.newMeth(C$, 'decompress$org_scijava_io_handle_DataHandle$io_scif_codec_CodecOptions', function ($in, options) {
if (options == null ) options=$I$(1).getDefaultOptions$();
if (!(Clazz.instanceOf(options, "io.scif.codec.MJPBCodecOptions"))) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Options must be an instance of loci.formats.codec.MJPBCodecOptions"]);
}var raw=null;
var raw2=null;
var fp=$in.offset$();
try {
$in.skipBytes$I(4);
var lumDcBits=null;
var lumAcBits=null;
var lumDc=null;
var lumAc=null;
var quant=null;
var s1=$in.readString$I(4);
$in.skipBytes$I(12);
var s2=$in.readString$I(4);
$in.seek$J($in.offset$() - 4);
if (s1.equals$O("mjpg") || s2.equals$O("mjpg") ) {
var extra=16;
if (s1.startsWith$S("m")) {
extra=0;
$in.seek$J(fp + 4);
}$in.skipBytes$I(12);
var offset=$in.readInt$() + extra;
var quantOffset=$in.readInt$() + extra;
var huffmanOffset=$in.readInt$() + extra;
var sof=$in.readInt$() + extra;
var sos=$in.readInt$() + extra;
var sod=$in.readInt$() + extra;
if (quantOffset != 0 && quantOffset + fp < $in.length$() ) {
$in.seek$J(fp + quantOffset);
$in.skipBytes$I(3);
quant=Clazz.array(Byte.TYPE, [64]);
$in.read$BA(quant);
} else {
quant=Clazz.array(Byte.TYPE, -1, [7, 5, 5, 6, 5, 5, 7, 6, 6, 6, 8, 7, 7, 8, 10, 17, 11, 10, 9, 9, 10, 20, 15, 15, 12, 17, 24, 21, 25, 25, 23, 21, 23, 23, 26, 29, 37, 32, 26, 28, 35, 28, 23, 23, 33, 44, 33, 35, 39, 40, 42, 42, 42, 25, 31, 46, 49, 45, 41, 49, 37, 41, 42, 40]);
}if (huffmanOffset != 0 && huffmanOffset + fp < $in.length$() ) {
$in.seek$J(fp + huffmanOffset);
$in.skipBytes$I(3);
lumDcBits=Clazz.array(Byte.TYPE, [16]);
$in.read$BA(lumDcBits);
lumDc=Clazz.array(Byte.TYPE, [12]);
$in.read$BA(lumDc);
$in.skipBytes$I(1);
lumAcBits=Clazz.array(Byte.TYPE, [16]);
$in.read$BA(lumAcBits);
var sum=0;
for (var lumAcBit, $lumAcBit = 0, $$lumAcBit = lumAcBits; $lumAcBit<$$lumAcBit.length&&((lumAcBit=($$lumAcBit[$lumAcBit])),1);$lumAcBit++) {
sum+=lumAcBit & 255;
}
lumAc=Clazz.array(Byte.TYPE, [sum]);
$in.read$BA(lumAc);
}$in.seek$J(fp + sof + 7 );
var channels=$in.read$() & 255;
var sampling=Clazz.array(Integer.TYPE, [channels]);
for (var i=0; i < channels; i++) {
$in.skipBytes$I(1);
sampling[i]=$in.read$();
$in.skipBytes$I(1);
}
$in.seek$J(fp + sos + 3 );
var tables=Clazz.array(Integer.TYPE, [channels]);
for (var i=0; i < channels; i++) {
$in.skipBytes$I(1);
tables[i]=$in.read$();
}
$in.seek$J(fp + sod);
var numBytes=((offset - $in.offset$())|0);
if (offset == 0) numBytes=(($in.length$() - $in.offset$())|0);
raw=Clazz.array(Byte.TYPE, [numBytes]);
$in.read$BA(raw);
if (offset != 0) {
$in.seek$J(fp + offset + 36 );
var n=$in.readInt$();
$in.skipBytes$I(n);
$in.seek$J($in.offset$() - 40);
numBytes=(($in.length$() - $in.offset$())|0);
raw2=Clazz.array(Byte.TYPE, [numBytes]);
$in.read$BA(raw2);
}}var b=Clazz.new_($I$(2,1));
for (var rawByte, $rawByte = 0, $$rawByte = raw; $rawByte<$$rawByte.length&&((rawByte=($$rawByte[$rawByte])),1);$rawByte++) {
b.add$B(($b$[0] = rawByte, $b$[0]));
if (rawByte == -1) {
b.add$B(($b$[0] = 0, $b$[0]));
}}
if (raw2 == null ) raw2=Clazz.array(Byte.TYPE, [0]);
var b2=Clazz.new_($I$(2,1));
for (var rawByte, $rawByte = 0, $$rawByte = raw2; $rawByte<$$rawByte.length&&((rawByte=($$rawByte[$rawByte])),1);$rawByte++) {
b2.add$B(($b$[0] = rawByte, $b$[0]));
if (rawByte == -1) {
b2.add$B(($b$[0] = 0, $b$[0]));
}}
var v=Clazz.new_($I$(2,1).c$$I,[1000]);
v.add$BA(C$.HEADER);
v.add$BA(Clazz.array(Byte.TYPE, -1, [-1, -37]));
var length=4 + quant.length * 2;
v.add$B(($b$[0] = (((length >>> 8) & 255)|0), $b$[0]));
v.add$B(($b$[0] = ((length & 255)|0), $b$[0]));
v.add$B(($b$[0] = 0, $b$[0]));
v.add$BA(quant);
v.add$B(($b$[0] = 1, $b$[0]));
v.add$BA(quant);
v.add$BA(Clazz.array(Byte.TYPE, -1, [-1, -60]));
length=(lumDcBits.length + lumDc.length + lumAcBits.length + lumAc.length ) * 2 + 6;
v.add$B(($b$[0] = (((length >>> 8) & 255)|0), $b$[0]));
v.add$B(($b$[0] = ((length & 255)|0), $b$[0]));
v.add$B(($b$[0] = 0, $b$[0]));
v.add$BA(lumDcBits);
v.add$BA(lumDc);
v.add$B(($b$[0] = 1, $b$[0]));
v.add$BA(lumDcBits);
v.add$BA(lumDc);
v.add$B(($b$[0] = 16, $b$[0]));
v.add$BA(lumAcBits);
v.add$BA(lumAc);
v.add$B(($b$[0] = 17, $b$[0]));
v.add$BA(lumAcBits);
v.add$BA(lumAc);
v.add$B(($b$[0] = -1, $b$[0]));
v.add$B(($b$[0] = -64, $b$[0]));
length=(options.bitsPerSample >= 40) ? 11 : 17;
v.add$B(($b$[0] = (((length >>> 8) & 255)|0), $b$[0]));
v.add$B(($b$[0] = ((length & 255)|0), $b$[0]));
var fieldHeight=options.height;
if ((options).interlaced) fieldHeight=(fieldHeight/(2)|0);
if (options.height % 2 == 1) fieldHeight++;
var c=options.bitsPerSample == 24 ? 3 : (options.bitsPerSample == 32 ? 4 : 1);
v.add$B(($b$[0] = options.bitsPerSample >= 40 ? (((options.bitsPerSample - 32)|0)|0) : ((((options.bitsPerSample/c|0))|0)|0), $b$[0]));
v.add$B(($b$[0] = (((fieldHeight >>> 8) & 255)|0), $b$[0]));
v.add$B(($b$[0] = ((fieldHeight & 255)|0), $b$[0]));
v.add$B(($b$[0] = (((options.width >>> 8) & 255)|0), $b$[0]));
v.add$B(($b$[0] = ((options.width & 255)|0), $b$[0]));
v.add$B(($b$[0] = (options.bitsPerSample >= 40) ? (1|0) : (3|0), $b$[0]));
v.add$B(($b$[0] = 1, $b$[0]));
v.add$B(($b$[0] = 33, $b$[0]));
v.add$B(($b$[0] = 0, $b$[0]));
if (options.bitsPerSample < 40) {
v.add$B(($b$[0] = 2, $b$[0]));
v.add$B(($b$[0] = 17, $b$[0]));
v.add$B(($b$[0] = 1, $b$[0]));
v.add$B(($b$[0] = 3, $b$[0]));
v.add$B(($b$[0] = 17, $b$[0]));
v.add$B(($b$[0] = 1, $b$[0]));
}v.add$B(($b$[0] = -1, $b$[0]));
v.add$B(($b$[0] = -38, $b$[0]));
length=(options.bitsPerSample >= 40) ? 8 : 12;
v.add$B(($b$[0] = (((length >>> 8) & 255)|0), $b$[0]));
v.add$B(($b$[0] = ((length & 255)|0), $b$[0]));
v.add$B(($b$[0] = (options.bitsPerSample >= 40) ? (1|0) : (3|0), $b$[0]));
v.add$B(($b$[0] = 1, $b$[0]));
v.add$B(($b$[0] = 0, $b$[0]));
if (options.bitsPerSample < 40) {
v.add$B(($b$[0] = 2, $b$[0]));
v.add$B(($b$[0] = 1, $b$[0]));
v.add$B(($b$[0] = 3, $b$[0]));
v.add$B(($b$[0] = 1, $b$[0]));
}v.add$B(($b$[0] = 0, $b$[0]));
v.add$B(($b$[0] = 63, $b$[0]));
v.add$B(($b$[0] = 0, $b$[0]));
if ((options).interlaced) {
var v2=Clazz.new_($I$(2,1).c$$I,[v.size$()]);
v2.add$BA(v.toByteArray$());
v.add$BA(b.toByteArray$());
v.add$B(($b$[0] = -1, $b$[0]));
v.add$B(($b$[0] = -39, $b$[0]));
v2.add$BA(b2.toByteArray$());
v2.add$B(($b$[0] = -1, $b$[0]));
v2.add$B(($b$[0] = -39, $b$[0]));
var jpeg=this.codecService.getCodec$Class(Clazz.getClass($I$(3)));
var top=jpeg.decompress$BA$io_scif_codec_CodecOptions(v.toByteArray$(), options);
var bottom=jpeg.decompress$BA$io_scif_codec_CodecOptions(v2.toByteArray$(), options);
var bpp=options.bitsPerSample < 40 ? (options.bitsPerSample/8|0) : ((options.bitsPerSample - 32)/8|0);
var ch=options.bitsPerSample < 40 ? 3 : 1;
var result=Clazz.array(Byte.TYPE, [options.width * options.height * bpp * ch ]);
var topNdx=0;
var bottomNdx=0;
var row=options.width * bpp;
for (var yy=0; yy < options.height; yy++) {
if (yy % 2 == 0 && (topNdx + 1) * row <= top.length ) {
System.arraycopy$O$I$O$I$I(top, topNdx * row, result, yy * row, row);
topNdx++;
} else {
if ((bottomNdx + 1) * row <= bottom.length) {
System.arraycopy$O$I$O$I$I(bottom, bottomNdx * row, result, yy * row, row);
}bottomNdx++;
}}
return result;
}v.add$BA(b.toByteArray$());
v.add$B(($b$[0] = -1, $b$[0]));
v.add$B(($b$[0] = -39, $b$[0]));
var jpeg=this.codecService.getCodec$Class(Clazz.getClass($I$(3)));
return jpeg.decompress$BA$io_scif_codec_CodecOptions(v.toByteArray$(), options);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$Throwable,[e]);
} else {
throw e;
}
}
});
var $b$ = new Int8Array(1);
C$.$getAnn$ = function(){ return [
[[null,'io.scif.codec.MJPBCodec',null,['org.scijava.plugin.Plugin']],['type="io.scif.codec.Codec.class" ']],
  [['codecService','io.scif.codec.CodecService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:37 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
