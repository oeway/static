(function(){var P$=Clazz.newPackage("io.scif.codec"),I$=[[0,'io.scif.codec.CodecOptions','io.scif.codec.ByteVector','io.scif.codec.BitBuffer','io.scif.codec.HuffmanCodec','io.scif.codec.HuffmanCodecOptions','org.scijava.util.Bytes','org.scijava.util.ShortArray']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LosslessJPEGCodec", null, 'io.scif.codec.AbstractCodec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['codecService','io.scif.codec.CodecService']]]

Clazz.newMeth(C$, 'compress$BA$io_scif_codec_CodecOptions', function (data, options) {
throw Clazz.new_(Clazz.load('io.scif.UnsupportedCompressionException').c$$S,["Lossless JPEG compression not supported"]);
});

Clazz.newMeth(C$, 'decompress$org_scijava_io_handle_DataHandle$io_scif_codec_CodecOptions', function ($in, options) {
if ($in == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No data to decompress."]);
if (options == null ) options=$I$(1).getDefaultOptions$();
var buf=Clazz.array(Byte.TYPE, [0]);
var width=0;
var height=0;
var bitsPerSample=0;
var nComponents=0;
var bytesPerSample=0;
var horizontalSampling=null;
var verticalSampling=null;
var quantizationTable=null;
var huffmanTables=null;
var startPredictor=0;
var dcTable=null;
var acTable=null;
while ($in.offset$() < $in.length$() - 1){
var code=$in.readShort$() & 65535;
var length=$in.readShort$() & 65535;
var fp=$in.offset$();
if (length > 65280) {
length=0;
$in.seek$J(fp - 2);
} else if (code == 65498) {
nComponents=$in.read$();
dcTable=Clazz.array(Integer.TYPE, [nComponents]);
acTable=Clazz.array(Integer.TYPE, [nComponents]);
for (var i=0; i < nComponents; i++) {
$in.read$();
var tableSelector=$in.read$();
dcTable[i]=(tableSelector & 240) >> 4;
acTable[i]=tableSelector & 15;
}
startPredictor=$in.read$();
$in.read$();
$in.read$();
var toDecode=Clazz.array(Byte.TYPE, [(($in.length$() - $in.offset$())|0)]);
$in.read$BA(toDecode);
var b=Clazz.new_($I$(2,1));
for (var i=0; i < toDecode.length; i++) {
b.add$B(($b$[0] = toDecode[i], $b$[0]));
if (toDecode[i] == -1 && toDecode[i + 1] == 0 ) i++;
}
toDecode=b.toByteArray$();
var bb=Clazz.new_($I$(3,1).c$$BA,[toDecode]);
var huffman=this.codecService.getCodec$Class(Clazz.getClass($I$(4)));
var huffmanOptions=Clazz.new_($I$(5,1));
huffmanOptions.bitsPerSample=bitsPerSample;
huffmanOptions.maxBytes=(buf.length/nComponents|0);
var nextSample=0;
while (nextSample < (buf.length/nComponents|0)){
for (var i=0; i < nComponents; i++) {
if (huffmanTables != null ) {
huffmanOptions.table=huffmanTables[dcTable[i]];
}var v=0;
if (huffmanOptions.table != null ) {
v=huffman.getSample$io_scif_codec_BitBuffer$io_scif_codec_CodecOptions(bb, huffmanOptions);
if (nextSample == 0) {
v+=(Math.pow(2, bitsPerSample - 1)|0);
}} else {
throw Clazz.new_(Clazz.load('io.scif.UnsupportedCompressionException').c$$S,["Arithmetic coding not supported"]);
}var predictor=startPredictor;
if (nextSample < width * bytesPerSample) predictor=1;
 else if ((nextSample % (width * bytesPerSample)) == 0) {
predictor=2;
}var componentOffset=i * ((buf.length/nComponents|0));
var indexA=nextSample - bytesPerSample + componentOffset;
var indexB=nextSample - width * bytesPerSample + componentOffset;
var indexC=nextSample - (width + 1) * bytesPerSample + componentOffset;
var sampleA=indexA < 0 ? 0 : $I$(6).toInt$BA$I$I$Z(buf, indexA, bytesPerSample, false);
var sampleB=indexB < 0 ? 0 : $I$(6).toInt$BA$I$I$Z(buf, indexB, bytesPerSample, false);
var sampleC=indexC < 0 ? 0 : $I$(6).toInt$BA$I$I$Z(buf, indexC, bytesPerSample, false);
if (nextSample > 0) {
var pred=0;
switch (predictor) {
case 1:
pred=sampleA;
break;
case 2:
pred=sampleB;
break;
case 3:
pred=sampleC;
break;
case 4:
pred=sampleA + sampleB + sampleC ;
break;
case 5:
pred=sampleA + (((sampleB - sampleC)/2|0));
break;
case 6:
pred=sampleB + (((sampleA - sampleC)/2|0));
break;
case 7:
pred=((sampleA + sampleB)/2|0);
break;
}
v+=pred;
}var offset=componentOffset + nextSample;
$I$(6).unpack$J$BA$I$I$Z(v, buf, offset, bytesPerSample, false);
}
nextSample+=bytesPerSample;
}
} else {
length-=2;
if (length == 0) continue;
if (code == 65497) {
} else if (code == 65475) {
bitsPerSample=$in.read$();
height=$in.readShort$();
width=$in.readShort$();
nComponents=$in.read$();
horizontalSampling=Clazz.array(Integer.TYPE, [nComponents]);
verticalSampling=Clazz.array(Integer.TYPE, [nComponents]);
quantizationTable=Clazz.array(Integer.TYPE, [nComponents]);
for (var i=0; i < nComponents; i++) {
$in.skipBytes$I(1);
var s=$in.read$();
horizontalSampling[i]=(s & 240) >> 4;
verticalSampling[i]=s & 15;
quantizationTable[i]=$in.read$();
}
bytesPerSample=(bitsPerSample/8|0);
if ((bitsPerSample % 8) != 0) bytesPerSample++;
buf=Clazz.array(Byte.TYPE, [width * height * nComponents * bytesPerSample ]);
} else if (code == 65483) {
throw Clazz.new_(Clazz.load('io.scif.UnsupportedCompressionException').c$$S,["Arithmetic coding is not yet supported"]);
} else if (code == 65476) {
if (huffmanTables == null ) {
huffmanTables=Clazz.array(Short.TYPE, [4, null]);
}var s=$in.read$();
var destination=($b$[0] = ((s & 15)|0), $b$[0]);
var nCodes=Clazz.array(Integer.TYPE, [16]);
var table=Clazz.new_($I$(7,1));
for (var i=0; i < nCodes.length; i++) {
nCodes[i]=$in.read$();
table.add$TE(new Short(($s$[0] = nCodes[i], $s$[0])));
}
for (var i=0; i < nCodes.length; i++) {
for (var j=0; j < nCodes[i]; j++) {
table.add$TE( new Short(($s$[0] = ($in.read$() & 255), $s$[0])));
}
}
huffmanTables[destination]=Clazz.array(Short.TYPE, [table.size$()]);
for (var i=0; i < huffmanTables[destination].length; i++) {
huffmanTables[destination][i]=table.getValue$I(i);
}
}$in.seek$J(fp + length);
}}
if (options.interleaved && nComponents > 1 ) {
var newBuf=Clazz.array(Byte.TYPE, [buf.length]);
for (var i=0; i < buf.length; i+=nComponents * bytesPerSample) {
for (var c=0; c < nComponents; c++) {
var src=c * ((buf.length/nComponents|0)) + ((i/nComponents|0));
var dst=i + c * bytesPerSample;
System.arraycopy$O$I$O$I$I(buf, src, newBuf, dst, bytesPerSample);
}
}
buf=newBuf;
}if (options.littleEndian && bytesPerSample > 1 ) {
var newBuf=Clazz.array(Byte.TYPE, [buf.length]);
for (var i=0; i < buf.length; i+=bytesPerSample) {
for (var q=0; q < bytesPerSample; q++) {
newBuf[i + bytesPerSample - q - 1]=(buf[i + q]|0);
}
}
buf=newBuf;
}return buf;
});
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);
C$.$getAnn$ = function(){ return [
[[null,'io.scif.codec.LosslessJPEGCodec',null,['org.scijava.plugin.Plugin']],['type="io.scif.codec.Codec.class" ']],
  [['codecService','io.scif.codec.CodecService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:37 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
