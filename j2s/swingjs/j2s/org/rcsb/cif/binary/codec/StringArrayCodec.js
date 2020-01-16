(function(){var P$=Clazz.newPackage("org.rcsb.cif.binary.codec"),I$=[[0,'java.util.HashMap','java.util.ArrayList','org.rcsb.cif.binary.data.EncodedDataFactory','org.rcsb.cif.binary.codec.Classifier','java.util.LinkedList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StringArrayCodec");

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'encode$org_rcsb_cif_binary_data_StringArray$org_rcsb_cif_binary_encoding_StringArrayEncoding', function (data, encoding) {
var input=data.getData$();
var map=Clazz.new_($I$(1,1));
var strings=Clazz.new_($I$(2,1));
var outputArray=Clazz.array(Integer.TYPE, [input.length]);
var offsetList=Clazz.new_($I$(2,1));
offsetList.add$TE(new Integer(0));
var accLength=0;
var i=0;
for (var s, $s = 0, $$s = input; $s<$$s.length&&((s=($$s[$s])),1);$s++) {
if (s == null ) {
outputArray[i++]=-1;
continue;
}if (map.containsKey$O(s)) {
var index=(map.get$O(s)).intValue$();
outputArray[i++]=index;
} else {
accLength+=s.length$();
var index=strings.size$();
strings.add$TE(s);
map.put$TK$TV(s, new Integer(index));
offsetList.add$TE(new Integer(accLength));
outputArray[i++]=index;
}}
var offsetPlain=$I$(3).int32Array$IA(offsetList.stream$().mapToInt$java_util_function_ToIntFunction(/*addLambdaReuse org.rcsb.cif.binary.codec.StringArrayCodec$lambda1*/(P$.StringArrayCodec$lambda1$||(P$.StringArrayCodec$lambda1$=(((P$.StringArrayCodec$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "StringArrayCodec$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.ToIntFunction', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'applyAsInt$', function (n) { return (n);});
})()
), Clazz.new_(P$.StringArrayCodec$lambda1.$init$, [this, null])))))).toArray$());
var offsetHint=$I$(4).classify$org_rcsb_cif_binary_data_Int32Array(offsetPlain);
var offsets=$I$(4).encode$org_rcsb_cif_binary_data_Int32Array$S(offsetPlain, offsetHint.getEncoding$());
var outputPlain=$I$(3).int32Array$IA(outputArray);
var outputHint=$I$(4).classify$org_rcsb_cif_binary_data_Int32Array(outputPlain);
var output=$I$(4).encode$org_rcsb_cif_binary_data_Int32Array$S(outputPlain, outputHint.getEncoding$());
var enc=Clazz.new_($I$(5,1).c$$java_util_Collection,[data.getEncoding$()]);
encoding.setOffsets$BA(offsets.getData$());
encoding.setOffsetEncoding$java_util_LinkedList(offsets.getEncoding$());
encoding.setStringData$S(String.join$CharSequence$Iterable("", strings));
encoding.setDataEncoding$java_util_LinkedList(output.getEncoding$());
enc.add$TE(encoding);
return $I$(3).byteArray$BA$java_util_LinkedList(output.getData$(), enc);
});

Clazz.newMeth(C$, 'decode$org_rcsb_cif_binary_data_ByteArray$org_rcsb_cif_binary_encoding_StringArrayEncoding', function (data, encoding) {
var stringData=encoding.getStringData$();
var offsets=$I$(3).byteArray$BA$java_util_LinkedList(encoding.getOffsets$(), encoding.getOffsetEncoding$()).decode$().getData$();
data.setEncoding$java_util_LinkedList(encoding.getDataEncoding$());
var indices=data.decode$().getData$();
var strings=Clazz.array(String, [offsets.length]);
strings[0]="";
for (var i=1; i < offsets.length; i++) {
strings[i]=stringData.substring$I$I(offsets[i - 1], offsets[i]);
}
var offset=0;
var result=Clazz.array(String, [indices.length]);
for (var index, $index = 0, $$index = indices; $index<$$index.length&&((index=($$index[$index])),1);$index++) {
result[offset++]=strings[index + 1];
}
return $I$(3).stringArray$SA$java_util_LinkedList(result, data.getEncoding$());
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:27 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
