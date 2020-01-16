(function(){var P$=Clazz.newPackage("io.scif.codec"),I$=[[0,'java.util.Arrays','io.scif.codec.CodecOptions']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LZWCodec", null, 'io.scif.codec.AbstractCodec');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.COMPR_MASKS=Clazz.array(Integer.TYPE, -1, [255, 127, 63, 31, 15, 7, 3, 1]);
C$.DECOMPR_MASKS=Clazz.array(Integer.TYPE, -1, [0, 1, 3, 7, 15, 31, 63, 127]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['COMPR_MASKS','int[]','+DECOMPR_MASKS']]]

Clazz.newMeth(C$, 'compress$BA$io_scif_codec_CodecOptions', function (input, options) {
if (input == null  || input.length == 0 ) return input;
var bufferSize=((input.length * 141)/100|0) + 3;
if (bufferSize > 2147483647) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Output buffer is greater than 2 GB"]);
}var output=Clazz.array(Byte.TYPE, [(bufferSize|0)]);
var outSize=0;
output[outSize++]=(-128|0);
var currOutByte=0;
var freeBits=7;
var htKeys=Clazz.array(Integer.TYPE, [7349]);
var htValues=Clazz.array(Integer.TYPE, [7349]);
$I$(1).fill$IA$I(htKeys, -1);
var nextCode=258;
var currCodeLength=9;
var tiffK=input[0] & 255;
var tiffOmega=tiffK;
for (var currInPos=1; currInPos < input.length; currInPos++) {
tiffK=input[currInPos] & 255;
var hashKey=(tiffOmega << 8) | tiffK;
var hashCode=hashKey % 7349;
do {
if (htKeys[hashCode] == hashKey) {
tiffOmega=htValues[hashCode];
break;
} else if (htKeys[hashCode] < 0) {
htKeys[hashCode]=hashKey;
htValues[hashCode]=nextCode++;
var shift=currCodeLength - freeBits;
output[outSize++]=((((currOutByte << freeBits) | (tiffOmega >> shift))|0)|0);
if (shift > 8) {
output[outSize++]=(((tiffOmega >> (shift - 8))|0)|0);
shift-=8;
}freeBits=8 - shift;
currOutByte=tiffOmega & C$.COMPR_MASKS[freeBits];
tiffOmega=tiffK;
break;
} else {
hashCode=(hashCode + 257) % 7349;
}} while (true);
switch (nextCode) {
case 512:
currCodeLength=10;
break;
case 1024:
currCodeLength=11;
break;
case 2048:
currCodeLength=12;
break;
case 4096:
var shift=currCodeLength - freeBits;
output[outSize++]=((((currOutByte << freeBits) | (256 >> shift))|0)|0);
if (shift > 8) {
output[outSize++]=(((256 >> (shift - 8))|0)|0);
shift-=8;
}freeBits=8 - shift;
currOutByte=256 & C$.COMPR_MASKS[freeBits];
$I$(1).fill$IA$I(htKeys, -1);
nextCode=258;
currCodeLength=9;
break;
}
}
{
var shift=currCodeLength - freeBits;
output[outSize++]=((((currOutByte << freeBits) | (tiffOmega >> shift))|0)|0);
if (shift > 8) {
output[outSize++]=(((tiffOmega >> (shift - 8))|0)|0);
shift-=8;
}freeBits=8 - shift;
currOutByte=tiffOmega & C$.COMPR_MASKS[freeBits];
}switch (nextCode) {
case 511:
currCodeLength=10;
break;
case 1023:
currCodeLength=11;
break;
case 2047:
currCodeLength=12;
break;
}
{
var shift=currCodeLength - freeBits;
output[outSize++]=((((currOutByte << freeBits) | (257 >> shift))|0)|0);
if (shift > 8) {
output[outSize++]=(((257 >> (shift - 8))|0)|0);
shift-=8;
}freeBits=8 - shift;
currOutByte=257 & C$.COMPR_MASKS[freeBits];
output[outSize++]=(((currOutByte << freeBits)|0)|0);
}var result=Clazz.array(Byte.TYPE, [outSize]);
System.arraycopy$O$I$O$I$I(output, 0, result, 0, outSize);
return result;
});

Clazz.newMeth(C$, 'decompress$org_scijava_io_handle_DataHandle$io_scif_codec_CodecOptions', function ($in, options) {
if ($in == null  || $in.length$() == 0 ) return null;
if (options == null ) options=$I$(2).getDefaultOptions$();
var output=Clazz.array(Byte.TYPE, [options.maxBytes]);
var currOutPos=0;
var anotherCodes=Clazz.array(Integer.TYPE, [4096]);
var newBytes=Clazz.array(Byte.TYPE, [4096]);
var lengths=Clazz.array(Integer.TYPE, [4096]);
for (var i=0; i < 256; i++) {
newBytes[i]=((i|0)|0);
lengths[i]=1;
}
var currCodeLength=9;
var nextCode=258;
var currRead=0;
var bitsRead=0;
var currCode;
var oldCode=0;
try {
do {
{
var bitsLeft=currCodeLength - bitsRead;
if (bitsLeft > 8) {
currRead=(currRead << 8) | ($in.read$() & 255);
bitsLeft-=8;
}bitsRead=8 - bitsLeft;
var nextByte=$in.read$() & 255;
currCode=(currRead << bitsLeft) | (nextByte >> bitsRead);
currRead=nextByte & C$.DECOMPR_MASKS[bitsRead];
}if (currCode == 257) break;
if (currCode == 256) {
nextCode=258;
currCodeLength=9;
{
var bitsLeft=currCodeLength - bitsRead;
if (bitsLeft > 8) {
currRead=(currRead << 8) | ($in.read$() & 255);
bitsLeft-=8;
}bitsRead=8 - bitsLeft;
var nextByte=$in.read$() & 255;
currCode=(currRead << bitsLeft) | (nextByte >> bitsRead);
currRead=nextByte & C$.DECOMPR_MASKS[bitsRead];
}if (currCode == 257) break;
if (currOutPos >= output.length - 1) break;
output[currOutPos++]=(newBytes[currCode]|0);
oldCode=currCode;
} else if (currCode < nextCode) {
var outLength=lengths[currCode];
var i=currOutPos + outLength;
var tablePos=currCode;
if (i > output.length) break;
while (i > currOutPos){
output[--i]=(newBytes[tablePos]|0);
tablePos=anotherCodes[tablePos];
}
currOutPos+=outLength;
if (nextCode >= anotherCodes.length) break;
anotherCodes[nextCode]=oldCode;
newBytes[nextCode]=(output[i]|0);
lengths[nextCode]=lengths[oldCode] + 1;
oldCode=currCode;
nextCode++;
} else {
var outLength=lengths[oldCode];
var i=currOutPos + outLength;
var tablePos=oldCode;
if (i > output.length) break;
while (i > currOutPos){
output[--i]=(newBytes[tablePos]|0);
tablePos=anotherCodes[tablePos];
}
currOutPos+=outLength;
if (currOutPos >= output.length - 1) break;
output[currOutPos++]=(output[i]|0);
anotherCodes[nextCode]=oldCode;
newBytes[nextCode]=(output[i]|0);
lengths[nextCode]=outLength + 1;
oldCode=currCode;
nextCode++;
}switch (nextCode) {
case 511:
currCodeLength=10;
break;
case 1023:
currCodeLength=11;
break;
case 2047:
currCodeLength=12;
break;
}
} while (currOutPos < output.length && $in.offset$() < $in.length$() );
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S$Throwable,["Invalid LZW data", e]);
} else {
throw e;
}
}
return output;
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.codec.LZWCodec',null,['org.scijava.plugin.Plugin']],['type="io.scif.codec.Codec.class" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:37 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
