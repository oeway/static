(function(){var P$=Clazz.newPackage("org.rcsb.cif.binary.data"),I$=[[0,'org.rcsb.cif.binary.data.ByteArray','org.rcsb.cif.binary.data.Float32Array','org.rcsb.cif.binary.data.Float64Array','org.rcsb.cif.binary.data.Int8Array','org.rcsb.cif.binary.data.Int16Array','org.rcsb.cif.binary.data.Int32Array','org.rcsb.cif.binary.data.Uint8Array','org.rcsb.cif.binary.data.Uint16Array','org.rcsb.cif.binary.data.Uint32Array','org.rcsb.cif.binary.data.StringArray','java.util.LinkedList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EncodedDataFactory");

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'byteArray$BA', function (bytes) {
return Clazz.new_($I$(1,1).c$$BA,[bytes]);
}, 1);

Clazz.newMeth(C$, 'float32Array$DA', function (floats) {
return Clazz.new_($I$(2,1).c$$DA,[floats]);
}, 1);

Clazz.newMeth(C$, 'float64Array$DA', function (floats) {
return Clazz.new_($I$(3,1).c$$DA,[floats]);
}, 1);

Clazz.newMeth(C$, 'int8Array$IA', function (ints) {
return Clazz.new_($I$(4,1).c$$IA,[ints]);
}, 1);

Clazz.newMeth(C$, 'int16Array$IA', function (ints) {
return Clazz.new_($I$(5,1).c$$IA,[ints]);
}, 1);

Clazz.newMeth(C$, 'int32Array$IA', function (ints) {
return Clazz.new_($I$(6,1).c$$IA,[ints]);
}, 1);

Clazz.newMeth(C$, 'uint8Array$IA', function (ints) {
return Clazz.new_($I$(7,1).c$$IA,[ints]);
}, 1);

Clazz.newMeth(C$, 'uint16Array$IA', function (ints) {
return Clazz.new_($I$(8,1).c$$IA,[ints]);
}, 1);

Clazz.newMeth(C$, 'uint32Array$IA', function (ints) {
return Clazz.new_($I$(9,1).c$$IA,[ints]);
}, 1);

Clazz.newMeth(C$, 'stringArray$SA', function (strings) {
return Clazz.new_($I$(10,1).c$$SA,[strings]);
}, 1);

Clazz.newMeth(C$, 'byteArray$BA$java_util_LinkedList', function (bytes, encoding) {
return Clazz.new_($I$(1,1).c$$BA$java_util_LinkedList,[bytes, encoding]);
}, 1);

Clazz.newMeth(C$, 'float32Array$DA$java_util_LinkedList', function (floats, encoding) {
return Clazz.new_($I$(2,1).c$$DA$java_util_LinkedList,[floats, encoding]);
}, 1);

Clazz.newMeth(C$, 'float64Array$DA$java_util_LinkedList', function (floats, encoding) {
return Clazz.new_($I$(3,1).c$$DA$java_util_LinkedList,[floats, encoding]);
}, 1);

Clazz.newMeth(C$, 'int8Array$IA$java_util_LinkedList', function (ints, encoding) {
return Clazz.new_($I$(4,1).c$$IA$java_util_LinkedList,[ints, encoding]);
}, 1);

Clazz.newMeth(C$, 'int16Array$IA$java_util_LinkedList', function (ints, encoding) {
return Clazz.new_($I$(5,1).c$$IA$java_util_LinkedList,[ints, encoding]);
}, 1);

Clazz.newMeth(C$, 'int32Array$IA$java_util_LinkedList', function (ints, encoding) {
return Clazz.new_($I$(6,1).c$$IA$java_util_LinkedList,[ints, encoding]);
}, 1);

Clazz.newMeth(C$, 'uint8Array$IA$java_util_LinkedList', function (ints, encoding) {
return Clazz.new_($I$(7,1).c$$IA$java_util_LinkedList,[ints, encoding]);
}, 1);

Clazz.newMeth(C$, 'uint16Array$IA$java_util_LinkedList', function (ints, encoding) {
return Clazz.new_($I$(8,1).c$$IA$java_util_LinkedList,[ints, encoding]);
}, 1);

Clazz.newMeth(C$, 'uint32Array$IA$java_util_LinkedList', function (ints, encoding) {
return Clazz.new_($I$(9,1).c$$IA$java_util_LinkedList,[ints, encoding]);
}, 1);

Clazz.newMeth(C$, 'stringArray$SA$java_util_LinkedList', function (strings, encoding) {
return Clazz.new_($I$(10,1).c$$SA$java_util_LinkedList,[strings, encoding]);
}, 1);

Clazz.newMeth(C$, 'byteArray$BA$org_rcsb_cif_binary_encoding_Encoding', function (bytes, enc) {
var encoding=Clazz.new_($I$(11,1));
encoding.add$TE(enc);
return Clazz.new_($I$(1,1).c$$BA$java_util_LinkedList,[bytes, encoding]);
}, 1);

Clazz.newMeth(C$, 'float32Array$DA$org_rcsb_cif_binary_encoding_Encoding', function (floats, enc) {
var encoding=Clazz.new_($I$(11,1));
encoding.add$TE(enc);
return Clazz.new_($I$(2,1).c$$DA$java_util_LinkedList,[floats, encoding]);
}, 1);

Clazz.newMeth(C$, 'float64Array$DA$org_rcsb_cif_binary_encoding_Encoding', function (floats, enc) {
var encoding=Clazz.new_($I$(11,1));
encoding.add$TE(enc);
return Clazz.new_($I$(3,1).c$$DA$java_util_LinkedList,[floats, encoding]);
}, 1);

Clazz.newMeth(C$, 'int8Array$IA$org_rcsb_cif_binary_encoding_Encoding', function (ints, enc) {
var encoding=Clazz.new_($I$(11,1));
encoding.add$TE(enc);
return Clazz.new_($I$(4,1).c$$IA$java_util_LinkedList,[ints, encoding]);
}, 1);

Clazz.newMeth(C$, 'int16Array$IA$org_rcsb_cif_binary_encoding_Encoding', function (ints, enc) {
var encoding=Clazz.new_($I$(11,1));
encoding.add$TE(enc);
return Clazz.new_($I$(5,1).c$$IA$java_util_LinkedList,[ints, encoding]);
}, 1);

Clazz.newMeth(C$, 'int32Array$IA$org_rcsb_cif_binary_encoding_Encoding', function (ints, enc) {
var encoding=Clazz.new_($I$(11,1));
encoding.add$TE(enc);
return Clazz.new_($I$(6,1).c$$IA$java_util_LinkedList,[ints, encoding]);
}, 1);

Clazz.newMeth(C$, 'uint8Array$IA$org_rcsb_cif_binary_encoding_Encoding', function (ints, enc) {
var encoding=Clazz.new_($I$(11,1));
encoding.add$TE(enc);
return Clazz.new_($I$(7,1).c$$IA$java_util_LinkedList,[ints, encoding]);
}, 1);

Clazz.newMeth(C$, 'uint16Array$IA$org_rcsb_cif_binary_encoding_Encoding', function (ints, enc) {
var encoding=Clazz.new_($I$(11,1));
encoding.add$TE(enc);
return Clazz.new_($I$(8,1).c$$IA$java_util_LinkedList,[ints, encoding]);
}, 1);

Clazz.newMeth(C$, 'uint32Array$IA$org_rcsb_cif_binary_encoding_Encoding', function (ints, enc) {
var encoding=Clazz.new_($I$(11,1));
encoding.add$TE(enc);
return Clazz.new_($I$(9,1).c$$IA$java_util_LinkedList,[ints, encoding]);
}, 1);

Clazz.newMeth(C$, 'stringArray$SA$org_rcsb_cif_binary_encoding_Encoding', function (strings, enc) {
var encoding=Clazz.new_($I$(11,1));
encoding.add$TE(enc);
return Clazz.new_($I$(10,1).c$$SA$java_util_LinkedList,[strings, encoding]);
}, 1);

Clazz.newMeth(C$, 'floatArray$I$I', function (type, size) {
var data=Clazz.array(Double.TYPE, [size]);
return type == 32 ? Clazz.new_($I$(2,1).c$$DA,[data]) : Clazz.new_($I$(3,1).c$$DA,[data]);
}, 1);

Clazz.newMeth(C$, 'intArray$I$I', function (type, size) {
var data=Clazz.array(Integer.TYPE, [size]);
switch (type) {
case 1:
return Clazz.new_($I$(4,1).c$$IA,[data]);
case 2:
return Clazz.new_($I$(5,1).c$$IA,[data]);
case 3:
return Clazz.new_($I$(6,1).c$$IA,[data]);
case 4:
return Clazz.new_($I$(7,1).c$$IA,[data]);
case 5:
return Clazz.new_($I$(8,1).c$$IA,[data]);
case 6:
return Clazz.new_($I$(9,1).c$$IA,[data]);
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown IntArray type " + type]);
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:27 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
