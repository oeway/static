(function(){var P$=Clazz.newPackage("org.rcsb.cif.binary.codec"),I$=[[0,'org.rcsb.cif.binary.codec.ByteArrayCodec','org.rcsb.cif.binary.codec.DeltaCodec','org.rcsb.cif.binary.codec.FixedPointCodec','org.rcsb.cif.binary.codec.IntegerPackingCodec','org.rcsb.cif.binary.codec.IntervalQuantizationCodec','org.rcsb.cif.binary.codec.RunLengthCodec','org.rcsb.cif.binary.codec.StringArrayCodec','org.rcsb.cif.binary.codec.MessagePackCodec','org.rcsb.cif.binary.data.EncodedDataFactory','org.rcsb.cif.binary.encoding.ByteArrayEncoding','org.rcsb.cif.binary.encoding.FixedPointEncoding','org.rcsb.cif.binary.encoding.RunLengthEncoding','org.rcsb.cif.binary.encoding.DeltaEncoding','org.rcsb.cif.binary.encoding.IntervalQuantizationEncoding','org.rcsb.cif.binary.encoding.IntegerPackingEncoding','org.rcsb.cif.binary.encoding.StringArrayEncoding','java.util.LinkedList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Codec");
C$.BYTE_ARRAY_CODEC=null;
C$.DELTA_CODEC=null;
C$.FIXED_POINT_CODEC=null;
C$.INTEGER_PACKING_CODEC=null;
C$.INTERVAL_QUANTIZATION_CODEC=null;
C$.RUN_LENGTH_CODEC=null;
C$.STRING_ARRAY_CODEC=null;
C$.MESSAGE_PACK_CODEC=null;

C$.$clinit$=1;

C$.$static$ = function() {C$.$static$=0;
C$.BYTE_ARRAY_CODEC=Clazz.new_($I$(1,1));
C$.DELTA_CODEC=Clazz.new_($I$(2,1));
C$.FIXED_POINT_CODEC=Clazz.new_($I$(3,1));
C$.INTEGER_PACKING_CODEC=Clazz.new_($I$(4,1));
C$.INTERVAL_QUANTIZATION_CODEC=Clazz.new_($I$(5,1));
C$.RUN_LENGTH_CODEC=Clazz.new_($I$(6,1));
C$.STRING_ARRAY_CODEC=Clazz.new_($I$(7,1));
C$.MESSAGE_PACK_CODEC=Clazz.new_($I$(8,1));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'decode$org_rcsb_cif_binary_data_EncodedData', function (encodedData) {
var current=encodedData;
while (current.hasNextDecodingStep$()){
var encoding=current.getEncoding$().removeLast$();
current=encoding.decode$TE(current);
}
return current;
}, 1);

Clazz.newMeth(C$, 'decode$java_util_Map', function (encodedData) {
var current=$I$(9).byteArray$BA(encodedData.get$O("data"));
var encodings=C$.getListReversed$OA(encodedData.get$O("encoding"));
for (var encoding, $encoding = encodings.iterator$(); $encoding.hasNext$()&&((encoding=($encoding.next$())),1);) {
current=encoding.decode$TE(current);
}
return current.getData$();
}, 1);

Clazz.newMeth(C$, 'wrap$java_util_Map', function (encoding) {
var kind=encoding.get$O("kind");
switch (kind[0]) {
case 66:
return Clazz.new_($I$(10,1).c$$java_util_Map,[encoding]);
case 70:
return Clazz.new_($I$(11,1).c$$java_util_Map,[encoding]);
case 82:
return Clazz.new_($I$(12,1).c$$java_util_Map,[encoding]);
case 68:
return Clazz.new_($I$(13,1).c$$java_util_Map,[encoding]);
case 73:
return (kind[8] == 81  ? Clazz.new_($I$(14,1).c$$java_util_Map,[encoding]) : Clazz.new_($I$(15,1).c$$java_util_Map,[encoding]));
case 83:
var outputEncoding=C$.getList$OA(encoding.get$O("dataEncoding"));
var offsetEncoding=C$.getList$OA(encoding.get$O("offsetEncoding"));
return Clazz.new_($I$(16,1).c$$java_util_Map$java_util_LinkedList$java_util_LinkedList,[encoding, outputEncoding, offsetEncoding]);
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unsupported Encoding kind: " + C$.getStringFromBytes$BA(kind)]);
}
}, 1);

Clazz.newMeth(C$, 'getList$OA', function (a) {
var list=Clazz.new_($I$(17,1));
for (var i=0, n=a.length; i < n; i++) list.add$TE(C$.wrap$java_util_Map(a[i]));

return list;
}, 1);

Clazz.newMeth(C$, 'getListReversed$OA', function (a) {
var list=Clazz.new_($I$(17,1));
for (var i=a.length; --i >= 0; ) list.add$TE(C$.wrap$java_util_Map(a[i]));

return list;
}, 1);

Clazz.newMeth(C$, 'getStringFromBytes$BA', function (bytes) {
try {
return  String.instantialize(bytes, "UTF-8");
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.UnsupportedEncodingException")){
return null;
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:26 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
