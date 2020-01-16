(function(){var P$=Clazz.newPackage("org.rcsb.cif.binary.codec"),I$=[[0,'org.rcsb.cif.binary.data.EncodedDataFactory','java.util.LinkedList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DeltaCodec");

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'encode$TT$org_rcsb_cif_binary_encoding_DeltaEncoding', function (data, encoding) {
var srcType=data.getType$();
var inputArray=data.getData$();
if (inputArray.length == 0) {
var output=$I$(1).intArray$I$I(srcType, 0);
var enc=Clazz.new_($I$(2,1).c$$java_util_Collection,[data.getEncoding$()]);
encoding.setOrigin$I(0);
encoding.setSrcType$I(srcType);
enc.add$TE(encoding);
output.setEncoding$java_util_LinkedList(enc);
return output;
}var output=$I$(1).intArray$I$I(srcType, inputArray.length);
var outputArray=output.getData$();
var origin=inputArray[0];
outputArray[0]=inputArray[0];
for (var i=1; i < inputArray.length; i++) {
outputArray[i]=inputArray[i] - inputArray[i - 1];
}
outputArray[0]=0;
var enc=Clazz.new_($I$(2,1).c$$java_util_Collection,[data.getEncoding$()]);
encoding.setOrigin$I(origin);
encoding.setSrcType$I(srcType);
enc.add$TE(encoding);
output.setEncoding$java_util_LinkedList(enc);
return output;
});

Clazz.newMeth(C$, 'decode$TT$org_rcsb_cif_binary_encoding_DeltaEncoding', function (data, encoding) {
var input=data.getData$();
var origin=encoding.getOrigin$();
var srcType=encoding.getSrcType$();
var output=$I$(1).intArray$I$I(srcType, input.length);
output.setEncoding$java_util_LinkedList(data.getEncoding$());
var n=input.length;
if (n == 0) {
return output;
}var outputArray=output.getData$();
outputArray[0]=input[0] + origin;
for (var i=1; i < n; ++i) {
outputArray[i]=input[i] + outputArray[i - 1];
}
return output;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:26 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
