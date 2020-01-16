(function(){var P$=Clazz.newPackage("io.scif.codec"),p$1={},I$=[[0,'io.scif.codec.CodecOptions']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RPZACodec", null, 'io.scif.codec.AbstractCodec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['pixelPtr','rowPtr','stride']]]

Clazz.newMeth(C$, 'compress$BA$io_scif_codec_CodecOptions', function (input, options) {
throw Clazz.new_(Clazz.load('io.scif.UnsupportedCompressionException').c$$S,["RPZA compression not supported."]);
});

Clazz.newMeth(C$, 'decompress$org_scijava_io_handle_DataHandle$io_scif_codec_CodecOptions', function ($in, options) {
if ($in == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No data to decompress."]);
if (options == null ) options=$I$(1).getDefaultOptions$();
$in.skipBytes$I(8);
var plane=options.width * options.height;
this.stride=options.width;
var rowInc=this.stride - 4;
var opcode;
var nBlocks;
var colorA=0;
var colorB;
var color4=Clazz.array(Integer.TYPE, [4]);
var index;
var idx;
var ta;
var tb;
var blockPtr=0;
this.rowPtr=this.pixelPtr=0;
var pixelX;
var pixelY;
var pixels=Clazz.array(Integer.TYPE, [plane]);
var rtn=Clazz.array(Byte.TYPE, [plane * 3]);
while ($in.read$() != -31){
}
$in.skipBytes$I(3);
while ($in.offset$() + 2 < $in.length$()){
opcode=$in.readByte$();
nBlocks=(opcode & 31) + 1;
if ((opcode & 128) == 0) {
if ($in.offset$() >= $in.length$()) break;
colorA=(opcode << 8) | $in.read$();
opcode=($s$[0] = 0, $s$[0]);
if ($in.offset$() >= $in.length$()) break;
if (($in.read$() & 128) != 0) {
opcode=($s$[0] = 32, $s$[0]);
nBlocks=1;
}$in.seek$J($in.offset$() - 1);
}switch (opcode & 224) {
case 128:
while (nBlocks-- > 0){
p$1.updateBlock$I.apply(this, [options.width]);
}
break;
case 160:
if ($in.offset$() + 2 >= $in.length$()) break;
colorA=$in.readShort$();
while (nBlocks-- > 0){
blockPtr=this.rowPtr + this.pixelPtr;
for (pixelY=0; pixelY < 4; pixelY++) {
for (pixelX=0; pixelX < 4; pixelX++) {
if (blockPtr >= pixels.length) break;
pixels[blockPtr]=colorA;
var s=($s$[0] = (pixels[blockPtr] & 32767), $s$[0]);
p$1.unpack$H$BA$I$I.apply(this, [s, rtn, blockPtr, pixels.length]);
blockPtr++;
}
blockPtr+=rowInc;
}
p$1.updateBlock$I.apply(this, [options.width]);
}
break;
case 192:
case 32:
if ($in.offset$() + 2 >= $in.length$()) break;
if ((opcode & 224) == 192) {
colorA=$in.readShort$();
}colorB=$in.readShort$();
color4[0]=colorB;
color4[1]=0;
color4[2]=0;
color4[3]=colorA;
ta=(colorA >> 10) & 31;
tb=(colorB >> 10) & 31;
color4[1]|=((11 * ta + 21 * tb) >> 5) << 10;
color4[2]|=((21 * ta + 11 * tb) >> 5) << 10;
ta=(colorA >> 5) & 31;
tb=(colorB >> 5) & 31;
color4[1]|=((11 * ta + 21 * tb) >> 5) << 5;
color4[2]|=((21 * ta + 11 * tb) >> 5) << 5;
ta=colorA & 31;
tb=colorB & 31;
color4[1]|=(11 * ta + 21 * tb) >> 5;
color4[2]|=(21 * ta + 11 * tb) >> 5;
while (nBlocks-- > 0){
blockPtr=this.rowPtr + this.pixelPtr;
for (pixelY=0; pixelY < 4; pixelY++) {
if ($in.offset$() >= $in.length$()) break;
index=$in.read$();
for (pixelX=0; pixelX < 4; pixelX++) {
idx=(index >> (2 * (3 - pixelX))) & 3;
if (blockPtr >= pixels.length) break;
pixels[blockPtr]=color4[idx];
var s=($s$[0] = (pixels[blockPtr] & 32767), $s$[0]);
p$1.unpack$H$BA$I$I.apply(this, [s, rtn, blockPtr, pixels.length]);
blockPtr++;
}
blockPtr+=rowInc;
}
p$1.updateBlock$I.apply(this, [options.width]);
}
break;
case 0:
blockPtr=this.rowPtr + this.pixelPtr;
for (pixelY=0; pixelY < 4; pixelY++) {
for (pixelX=0; pixelX < 4; pixelX++) {
if ((pixelY != 0) || (pixelX != 0) ) {
if ($in.offset$() + 2 >= $in.length$()) break;
colorA=$in.readShort$();
}if (blockPtr >= pixels.length) break;
pixels[blockPtr]=colorA;
var s=($s$[0] = (pixels[blockPtr] & 32767), $s$[0]);
p$1.unpack$H$BA$I$I.apply(this, [s, rtn, blockPtr, pixels.length]);
blockPtr++;
}
blockPtr+=rowInc;
}
p$1.updateBlock$I.apply(this, [options.width]);
break;
}
}
return rtn;
});

Clazz.newMeth(C$, 'unpack$H$BA$I$I', function (s, array, offset, len) {
array[offset]=(((255 - ((s & 31744) >> 10))|0)|0);
array[offset + len]=(((255 - ((s & 992) >> 5))|0)|0);
array[offset + 2 * len]=(((255 - (s & 31))|0)|0);
}, p$1);

Clazz.newMeth(C$, 'updateBlock$I', function (width) {
this.pixelPtr+=4;
if (this.pixelPtr >= width) {
this.pixelPtr=0;
this.rowPtr+=this.stride * 4;
}}, p$1);
var $s$ = new Int16Array(1);
C$.$getAnn$ = function(){ return [
[[null,'io.scif.codec.RPZACodec',null,['org.scijava.plugin.Plugin']],['type="io.scif.codec.Codec.class" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:38 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
