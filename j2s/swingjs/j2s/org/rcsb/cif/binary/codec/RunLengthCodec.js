(function(){var P$=Clazz.newPackage("org.rcsb.cif.binary.codec"),I$=[[0,'java.util.LinkedList','org.rcsb.cif.binary.data.EncodedDataFactory']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RunLengthCodec");

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'encode$org_rcsb_cif_binary_data_IntArray$org_rcsb_cif_binary_encoding_RunLengthEncoding', function (data, encoding) {
var input=data.getData$();
if (input.length == 0) {
var enc=Clazz.new_($I$(1,1).c$$java_util_Collection,[data.getEncoding$()]);
encoding.setSrcType$I(3);
encoding.setSrcSize$I(0);
enc.add$TE(encoding);
return $I$(2).int32Array$IA$java_util_LinkedList(Clazz.array(Integer.TYPE, [0]), enc);
}var fullLength=2;
for (var i=1; i < input.length; i++) {
if (input[i - 1] != input[i]) {
fullLength+=2;
}}
var output=Clazz.array(Integer.TYPE, [fullLength]);
var offset=0;
var runLength=1;
for (var i=1; i < input.length; i++) {
if (input[i - 1] != input[i]) {
output[offset]=input[i - 1];
output[offset + 1]=runLength;
runLength=1;
offset+=2;
} else {
++runLength;
}}
output[offset]=input[input.length - 1];
output[offset + 1]=runLength;
var enc=Clazz.new_($I$(1,1).c$$java_util_Collection,[data.getEncoding$()]);
encoding.setSrcType$I(3);
encoding.setSrcSize$I(input.length);
enc.add$TE(encoding);
return $I$(2).int32Array$IA$java_util_LinkedList(output, enc);
});

Clazz.newMeth(C$, 'decode$org_rcsb_cif_binary_data_Int32Array$org_rcsb_cif_binary_encoding_RunLengthEncoding', function (data, encoding) {
var srcType=encoding.getSrcType$();
var srcSize=encoding.getSrcSize$();
var input=data.getData$();
if (input.length == 0) {
return data;
}var dataOffset=0;
var output=$I$(2).intArray$I$I(srcType, srcSize);
output.setEncoding$java_util_LinkedList(data.getEncoding$());
var outputArray=output.getData$();
for (var i=0; i < data.length$(); i+=2) {
var value=input[i];
var length=input[i + 1];
for (var j=0; j < length; ++j) {
outputArray[dataOffset++]=value;
}
}
return output;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:27 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
