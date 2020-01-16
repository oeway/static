(function(){var P$=Clazz.newPackage("org.rcsb.cif.binary.data"),I$=[[0,'java.util.LinkedList','java.util.Arrays','org.rcsb.cif.binary.codec.Codec','java.nio.ByteBuffer','org.rcsb.cif.binary.data.Int8Array','org.rcsb.cif.binary.data.Int16Array','org.rcsb.cif.binary.data.Int32Array','org.rcsb.cif.binary.data.Uint8Array','java.nio.ByteOrder','org.rcsb.cif.binary.data.Uint16Array','org.rcsb.cif.binary.data.Uint32Array','org.rcsb.cif.binary.data.Float32Array','org.rcsb.cif.binary.data.Float64Array']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ByteArray", null, 'org.rcsb.cif.binary.data.AbstractEncodedData');

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$BA', function (data) {
C$.c$$BA$java_util_LinkedList.apply(this, [data, Clazz.new_($I$(1,1))]);
}, 1);

Clazz.newMeth(C$, 'c$$BA$java_util_LinkedList', function (data, encoding) {
;C$.superclazz.c$$O$java_util_LinkedList.apply(this, [data, encoding]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getData$', function () {
return this.data;
});

Clazz.newMeth(C$, 'length$', function () {
return this.getData$().length;
});

Clazz.newMeth(C$, 'toString', function () {
return this.getClass$().getSimpleName$() + ": " + $I$(2).toString$BA(this.getData$()) ;
});

Clazz.newMeth(C$, 'decode$org_rcsb_cif_binary_encoding_ByteArrayEncoding', function (encoding) {
return $I$(3).BYTE_ARRAY_CODEC.decode$org_rcsb_cif_binary_data_ByteArray$org_rcsb_cif_binary_encoding_ByteArrayEncoding(this, encoding);
});

Clazz.newMeth(C$, 'decode$org_rcsb_cif_binary_encoding_StringArrayEncoding', function (encoding) {
return $I$(3).STRING_ARRAY_CODEC.decode$org_rcsb_cif_binary_data_ByteArray$org_rcsb_cif_binary_encoding_StringArrayEncoding(this, encoding);
});

Clazz.newMeth(C$, 'toInt8Array$java_util_LinkedList', function (encoding) {
var ints=Clazz.array(Integer.TYPE, [this.length$()]);
var byteBuffer=$I$(4).wrap$BA(this.getData$());
for (var i=0; i < ints.length; i++) {
ints[i]=byteBuffer.get$();
}
return Clazz.new_($I$(5,1).c$$IA$java_util_LinkedList,[ints, encoding]);
});

Clazz.newMeth(C$, 'toInt16Array$java_util_LinkedList', function (encoding) {
var data=this.getData$();
var ints;
{
ints=java.nio.Bits._toInt16$BA(data);
}
return Clazz.new_($I$(6,1).c$$IA$java_util_LinkedList,[ints, encoding]);
});

Clazz.newMeth(C$, 'toInt32Array$java_util_LinkedList', function (encoding) {
var data=this.getData$();
var ints;
{
ints=java.nio.Bits._toInt32$BA(data);
}
return Clazz.new_($I$(7,1).c$$IA$java_util_LinkedList,[ints, encoding]);
});

Clazz.newMeth(C$, 'toUint8Array$java_util_LinkedList', function (encoding) {
var ints=Clazz.array(Integer.TYPE, [this.length$()]);
var byteBuffer=$I$(4).wrap$BA(this.getData$());
for (var i=0; i < ints.length; i++) {
ints[i]=byteBuffer.get$() & 255;
}
return Clazz.new_($I$(8,1).c$$IA$java_util_LinkedList,[ints, encoding]);
});

Clazz.newMeth(C$, 'toUint16Array$java_util_LinkedList', function (encoding) {
var ints=Clazz.array(Integer.TYPE, [(this.length$()/2|0)]);
var byteBuffer=$I$(4).wrap$BA(this.getData$()).order$java_nio_ByteOrder($I$(9).LITTLE_ENDIAN);
for (var i=0; i < ints.length; i++) {
ints[i]=byteBuffer.getShort$() & 65535;
}
return Clazz.new_($I$(10,1).c$$IA$java_util_LinkedList,[ints, encoding]);
});

Clazz.newMeth(C$, 'toUint32Array$java_util_LinkedList', function (encoding) {
var ints=Clazz.array(Integer.TYPE, [(this.length$()/4|0)]);
var byteBuffer=$I$(4).wrap$BA(this.getData$()).order$java_nio_ByteOrder($I$(9).LITTLE_ENDIAN);
for (var i=0; i < ints.length; i++) {
ints[i]=((byteBuffer.getInt$() & 4294967295)|0);
}
return Clazz.new_($I$(11,1).c$$IA$java_util_LinkedList,[ints, encoding]);
});

Clazz.newMeth(C$, 'toFloat32Array$java_util_LinkedList', function (encoding) {
var data=this.getData$();
var doubles;
{
doubles=java.nio.Bits._toFloat32$BA(data);
}
return Clazz.new_($I$(12,1).c$$DA$java_util_LinkedList,[doubles, encoding]);
});

Clazz.newMeth(C$, 'toFloat64Array$java_util_LinkedList', function (encoding) {
var data=this.getData$();
var doubles;
{
doubles=java.nio.Bits._toFloat64$BA(data);
}
return Clazz.new_($I$(13,1).c$$DA$java_util_LinkedList,[doubles, encoding]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:27 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
