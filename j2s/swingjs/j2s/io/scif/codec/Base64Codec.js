(function(){var P$=Clazz.newPackage("io.scif.codec"),I$=[[0,'io.scif.codec.ByteVector']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Base64Codec", null, 'io.scif.codec.AbstractCodec');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.base64Alphabet=Clazz.array(Byte.TYPE, [255]);
C$.lookupBase64Alphabet=Clazz.array(Byte.TYPE, [255]);
{
for (var i=0; i < 255; i++) {
C$.base64Alphabet[i]=(-1|0);
}
for (var i="Z".$c(); i >= 65 ; i--) {
C$.base64Alphabet[i]=(((i - 65)|0)|0);
C$.lookupBase64Alphabet[i - 65]=((i|0)|0);
}
for (var i="z".$c(); i >= 97 ; i--) {
C$.base64Alphabet[i]=(((i - 97 + 26)|0)|0);
C$.lookupBase64Alphabet[i - 97 + 26]=((i|0)|0);
}
for (var i="9".$c(); i >= 48 ; i--) {
C$.base64Alphabet[i]=(((i - 48 + 52)|0)|0);
C$.lookupBase64Alphabet[i - 48 + 52]=((i|0)|0);
}
C$.base64Alphabet[43]=(62|0);
C$.base64Alphabet[47]=(63|0);
C$.lookupBase64Alphabet[62]=(43|0);
C$.lookupBase64Alphabet[63]=(47|0);
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['base64Alphabet','byte[]','+lookupBase64Alphabet']]]

Clazz.newMeth(C$, 'compress$BA$io_scif_codec_CodecOptions', function (input, options) {
if (input == null  || input.length == 0 ) return null;
var dataBits=input.length * 8;
var fewerThan24=dataBits % 24;
var numTriples=(dataBits/24|0);
var encoded=Clazz.new_($I$(1,1));
var k;
var l;
var b1;
var b2;
var b3;
var dataIndex=0;
for (var i=0; i < numTriples; i++) {
dataIndex=i * 3;
b1=($b$[0] = input[dataIndex], $b$[0]);
b2=($b$[0] = input[dataIndex + 1], $b$[0]);
b3=($b$[0] = input[dataIndex + 2], $b$[0]);
l=($b$[0] = ((b2 & 15)|0), $b$[0]);
k=($b$[0] = ((b1 & 3)|0), $b$[0]);
var v1=($b$[0] = ((b1 & -128) == 0) ? (((b1 >> 2)|0)|0) : ((((b1) >> 2 ^ 192)|0)|0), $b$[0]);
var v2=($b$[0] = ((b2 & -128) == 0) ? (((b2 >> 4)|0)|0) : ((((b2) >> 4 ^ 240)|0)|0), $b$[0]);
var v3=($b$[0] = ((b3 & -128) == 0) ? (((b3 >> 6)|0)|0) : ((((b3) >> 6 ^ 252)|0)|0), $b$[0]);
encoded.add$B(($b$[0] = C$.lookupBase64Alphabet[v1], $b$[0]));
encoded.add$B(($b$[0] = C$.lookupBase64Alphabet[v2 | (k << 4)], $b$[0]));
encoded.add$B(($b$[0] = C$.lookupBase64Alphabet[(l << 2) | v3], $b$[0]));
encoded.add$B(($b$[0] = C$.lookupBase64Alphabet[b3 & 63], $b$[0]));
}
dataIndex=numTriples * 3;
if (fewerThan24 == 8) {
b1=($b$[0] = input[dataIndex], $b$[0]);
k=($b$[0] = ((b1 & 3)|0), $b$[0]);
var v=($b$[0] = ((b1 & -128) == 0) ? (((b1 >> 2)|0)|0) : ((((b1) >> 2 ^ 192)|0)|0), $b$[0]);
encoded.add$B(($b$[0] = C$.lookupBase64Alphabet[v], $b$[0]));
encoded.add$B(($b$[0] = C$.lookupBase64Alphabet[k << 4], $b$[0]));
encoded.add$B(($b$[0] = 61, $b$[0]));
encoded.add$B(($b$[0] = 61, $b$[0]));
} else if (fewerThan24 == 16) {
b1=($b$[0] = input[dataIndex], $b$[0]);
b2=($b$[0] = input[dataIndex + 1], $b$[0]);
l=($b$[0] = ((b2 & 15)|0), $b$[0]);
k=($b$[0] = ((b1 & 3)|0), $b$[0]);
var v1=($b$[0] = ((b1 & -128) == 0) ? (((b1 >> 2)|0)|0) : ((((b1) >> 2 ^ 192)|0)|0), $b$[0]);
var v2=($b$[0] = ((b2 & -128) == 0) ? (((b2 >> 4)|0)|0) : ((((b2) >> 4 ^ 240)|0)|0), $b$[0]);
encoded.add$B(($b$[0] = C$.lookupBase64Alphabet[v1], $b$[0]));
encoded.add$B(($b$[0] = C$.lookupBase64Alphabet[v2 | (k << 4)], $b$[0]));
encoded.add$B(($b$[0] = C$.lookupBase64Alphabet[l << 2], $b$[0]));
encoded.add$B(($b$[0] = 61, $b$[0]));
}return encoded.toByteArray$();
});

Clazz.newMeth(C$, 'decompress$org_scijava_io_handle_DataHandle$io_scif_codec_CodecOptions', function ($in, options) {
if ($in == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No data to decompress."]);
if ($in.length$() == 0) return Clazz.array(Byte.TYPE, [0]);
var b3=($b$[0] = 0, $b$[0]);
var b4=($b$[0] = 0, $b$[0]);
var marker0=($b$[0] = 0, $b$[0]);
var marker1=($b$[0] = 0, $b$[0]);
var decodedData=Clazz.new_($I$(1,1));
var block=Clazz.array(Byte.TYPE, [8192]);
var nRead=$in.read$BA(block);
var p=0;
var b1=($b$[0] = C$.base64Alphabet[block[p++]], $b$[0]);
var b2=($b$[0] = C$.base64Alphabet[block[p++]], $b$[0]);
while (b1 != -1 && b2 != -1  && ($in.offset$() - nRead + p < $in.length$()) ){
marker0=($b$[0] = block[p++], $b$[0]);
marker1=($b$[0] = block[p++], $b$[0]);
if (p == block.length) {
nRead=$in.read$BA(block);
p=0;
}decodedData.add$B(($b$[0] = ((b1 << 2 | b2 >> 4)|0), $b$[0]));
if (p >= nRead && $in.offset$() >= $in.length$() ) break;
if (marker0 != 61 && marker1 != 61 ) {
b3=($b$[0] = C$.base64Alphabet[marker0], $b$[0]);
b4=($b$[0] = C$.base64Alphabet[marker1], $b$[0]);
decodedData.add$B(($b$[0] = ((((b2 & 15) << 4) | ((b3 >> 2) & 15))|0), $b$[0]));
decodedData.add$B(($b$[0] = ((b3 << 6 | b4)|0), $b$[0]));
} else if (marker0 == 61) {
decodedData.add$B(($b$[0] = 0, $b$[0]));
decodedData.add$B(($b$[0] = 0, $b$[0]));
} else if (marker1 == 61) {
b3=($b$[0] = C$.base64Alphabet[marker0], $b$[0]);
decodedData.add$B(($b$[0] = ((((b2 & 15) << 4) | ((b3 >> 2) & 15))|0), $b$[0]));
decodedData.add$B(($b$[0] = 0, $b$[0]));
}b1=($b$[0] = C$.base64Alphabet[block[p++]], $b$[0]);
b2=($b$[0] = C$.base64Alphabet[block[p++]], $b$[0]);
}
return decodedData.toByteArray$();
});
var $b$ = new Int8Array(1);
C$.$getAnn$ = function(){ return [
[[null,'io.scif.codec.Base64Codec',null,['org.scijava.plugin.Plugin']],['type="io.scif.codec.Codec.class" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:37 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
