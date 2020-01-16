(function(){var P$=Clazz.newPackage("io.scif.codec"),I$=[[0,'io.scif.codec.CodecOptions',['org.scijava.io.handle.DataHandle','.ByteOrder']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MSVideoCodec", null, 'io.scif.codec.AbstractCodec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'compress$BA$io_scif_codec_CodecOptions', function (data, options) {
throw Clazz.new_(Clazz.load('io.scif.UnsupportedCompressionException').c$$S,["MS Video 1 compression not supported."]);
});

Clazz.newMeth(C$, 'decompress$org_scijava_io_handle_DataHandle$io_scif_codec_CodecOptions', function ($in, options) {
if ($in == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No data to decompress."]);
if (options == null ) options=$I$(1).getDefaultOptions$();
var order=$in.getOrder$();
$in.setOrder$org_scijava_io_handle_DataHandle_ByteOrder($I$(2).LITTLE_ENDIAN);
var row=0;
var column=0;
var plane=options.width * options.height;
var bytes=Clazz.array(Byte.TYPE, [plane]);
var shorts=Clazz.array(Short.TYPE, [plane]);
while (true){
if ($in.offset$() >= $in.length$() || row >= options.width  || column >= options.height ) {
break;
}var a=($s$[0] = ($in.read$() & 255), $s$[0]);
var b=($s$[0] = ($in.read$() & 255), $s$[0]);
if (a == 0 && b == 0  && $in.offset$() >= $in.length$() ) break;
if (b >= 132 && b < 136 ) {
var skip=(b - 132) * 256 + a;
for (var i=0; i < skip; i++) {
if (options.previousImage != null ) {
for (var y=0; y < 4; y++) {
for (var x=0; x < 4; x++) {
if (row + x >= options.width) break;
if (column + y >= options.height) break;
var ndx=options.width * (column + y) + row + x;
var oldNdx=options.width * (options.height - 1 - y - column ) + row + x;
if (options.bitsPerSample == 8) {
bytes[ndx]=(options.previousImage[oldNdx]|0);
} else {
var red=($b$[0] = options.previousImage[oldNdx], $b$[0]);
var green=($b$[0] = options.previousImage[oldNdx + plane], $b$[0]);
var blue=($b$[0] = options.previousImage[oldNdx + 2 * plane], $b$[0]);
shorts[ndx]=((((blue & 31) << 10) | ((green & 31) << 5) | (red & 31) )|0);
}}
}
}row+=4;
if (row >= options.width) {
row=0;
column+=4;
}}
} else if (b >= 0 && b < 128 ) {
if (options.bitsPerSample == 8) {
var colorA=($b$[0] = $in.readByte$(), $b$[0]);
var colorB=($b$[0] = $in.readByte$(), $b$[0]);
for (var y=0; y < 4; y++) {
for (var x=3; x >= 0; x--) {
var ndx=options.width * (column + (3 - y)) + row + x;
var flag=y < 2 ? b : a;
var shift=4 - 4 * (y % 2) + x;
var cmp=1 << shift;
if ((flag & cmp) == cmp) bytes[ndx]=(colorA|0);
 else bytes[ndx]=(colorB|0);
}
}
} else {
var check1=$in.readShort$();
var check2=$in.readShort$();
if ((check1 & 32768) == 32768) {
var q1a=check1;
var q1b=check2;
var q2a=$in.readShort$();
var q2b=$in.readShort$();
var q3a=$in.readShort$();
var q3b=$in.readShort$();
var q4a=$in.readShort$();
var q4b=$in.readShort$();
for (var y=0; y < 4; y++) {
for (var x=3; x >= 0; x--) {
var ndx=options.width * (column + (3 - y)) + row + x;
var colorA=x < 2 ? (y < 2 ? q3a : q1a) : (y < 2 ? q4a : q2a);
var colorB=x < 2 ? (y < 2 ? q3b : q1b) : (y < 2 ? q4b : q2b);
var flag=y < 2 ? b : a;
var shift=4 - 4 * (y % 2) + x;
var cmp=1 << shift;
if (ndx < shorts.length) {
if ((flag & cmp) == cmp) shorts[ndx]=colorA;
 else shorts[ndx]=colorB;
}}
}
} else {
var colorA=check1;
var colorB=check2;
for (var y=0; y < 4; y++) {
for (var x=3; x >= 0; x--) {
var ndx=options.width * (column + (3 - y)) + row + x;
if (ndx >= shorts.length) break;
var flag=y < 2 ? b : a;
var shift=4 - 4 * (y % 2) + x;
var cmp=1 << shift;
if ((flag & cmp) == cmp) shorts[ndx]=colorA;
 else shorts[ndx]=colorB;
}
}
}}row+=4;
if (row >= options.width) {
row=0;
column+=4;
}} else if (options.bitsPerSample == 8 && 144 < b ) {
var colors=Clazz.array(Byte.TYPE, [8]);
$in.read$BA(colors);
for (var y=0; y < 4; y++) {
for (var x=3; x >= 0; x--) {
var ndx=options.width * (column + (3 - y)) + row + x;
var colorA=($b$[0] = y < 2 ? ((x < 2 ? (colors[4]|0) : (colors[6]|0))|0) : ((x < 2 ? (colors[0]|0) : (colors[2]|0))|0), $b$[0]);
var colorB=($b$[0] = y < 2 ? ((x < 2 ? (colors[5]|0) : (colors[7]|0))|0) : ((x < 2 ? (colors[1]|0) : (colors[3]|0))|0), $b$[0]);
var flag=y < 2 ? b : a;
var shift=4 - 4 * (y % 2) + x;
var cmp=1 << shift;
if ((flag & cmp) == cmp) bytes[ndx]=(colorA|0);
 else bytes[ndx]=(colorB|0);
}
}
row+=4;
if (row >= options.width) {
row=0;
column+=4;
}} else {
for (var y=0; y < 4; y++) {
for (var x=0; x < 4; x++) {
var ndx=options.width * (column + (3 - y)) + row + x;
if (options.bitsPerSample == 8) {
if (ndx < bytes.length) {
bytes[ndx]=(((a & 255)|0)|0);
}} else {
if (ndx < shorts.length) {
shorts[ndx]=((((b << 8) | a) & 65535)|0);
}}}
}
row+=4;
if (row >= options.width) {
row=0;
column+=4;
}}}
if (options.bitsPerSample == 8) {
var tmp=bytes;
bytes=Clazz.array(Byte.TYPE, [tmp.length]);
for (var y=0; y < options.height; y++) {
System.arraycopy$O$I$O$I$I(tmp, y * options.width, bytes, (options.height - y - 1 ) * options.width, options.width);
}
return bytes;
}var b=Clazz.array(Byte.TYPE, [plane * 3]);
for (var y=0; y < options.height; y++) {
for (var x=0; x < options.width; x++) {
var off=y * options.width + x;
var dest=(options.height - y - 1 ) * options.width + x;
b[dest + 2 * plane]=((((shorts[off] & 31744) >> 10)|0)|0);
b[dest + plane]=((((shorts[off] & 992) >> 5)|0)|0);
b[dest]=(((shorts[off] & 31)|0)|0);
}
}
$in.setOrder$org_scijava_io_handle_DataHandle_ByteOrder(order);
return b;
});
var $s$ = new Int16Array(1);
var $b$ = new Int8Array(1);
C$.$getAnn$ = function(){ return [
[[null,'io.scif.codec.MSVideoCodec',null,['org.scijava.plugin.Plugin']],['type="io.scif.codec.Codec.class" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:37 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
