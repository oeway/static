(function(){var P$=Clazz.newPackage("org.rcsb.cif.binary.codec"),p$1={},I$=[[0,'java.nio.ByteOrder','java.util.LinkedList','org.rcsb.cif.binary.data.EncodedDataFactory']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ByteArrayCodec");
C$.IS_NATIVE_LITTLE_ENDIAN=false;

C$.$clinit$=1;

C$.$static$ = function() {C$.$static$=0;
C$.IS_NATIVE_LITTLE_ENDIAN=$I$(1).nativeOrder$().equals$O($I$(1).LITTLE_ENDIAN);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'encode$org_rcsb_cif_binary_data_NumberArray$org_rcsb_cif_binary_encoding_ByteArrayEncoding', function (data, encoding) {
var type=p$1.determineType$org_rcsb_cif_binary_data_NumberArray.apply(this, [data]);
var bytes=C$.ensureOrder$BA$I(data.toByteArray$(), data.getNumberOfBytes$());
var enc=Clazz.new_($I$(2,1).c$$java_util_Collection,[data.getEncoding$()]);
encoding.setType$I(type);
enc.add$TE(encoding);
return $I$(3).byteArray$BA$java_util_LinkedList(bytes, enc);
});

Clazz.newMeth(C$, 'determineType$org_rcsb_cif_binary_data_NumberArray', function (data) {
if (Clazz.instanceOf(data, "org.rcsb.cif.binary.data.Int8Array")) {
return 1;
} else if (Clazz.instanceOf(data, "org.rcsb.cif.binary.data.Int16Array")) {
return 2;
} else if (Clazz.instanceOf(data, "org.rcsb.cif.binary.data.Int32Array")) {
return 3;
} else if (Clazz.instanceOf(data, "org.rcsb.cif.binary.data.Uint8Array")) {
return 4;
} else if (Clazz.instanceOf(data, "org.rcsb.cif.binary.data.Uint16Array")) {
return 5;
} else if (Clazz.instanceOf(data, "org.rcsb.cif.binary.data.Uint32Array")) {
return 6;
} else if (Clazz.instanceOf(data, "org.rcsb.cif.binary.data.Float32Array")) {
return 32;
} else {
return 33;
}}, p$1);

Clazz.newMeth(C$, 'flipByteOrder$BA$I', function (data, bytes) {
var buffer=Clazz.array(Byte.TYPE, [data.length]);
for (var i=0, n=data.length; i < n; i+=bytes) {
for (var j=0; j < bytes; j++) {
buffer[i + bytes - j - 1]=(data[i + j]|0);
}
}
return buffer;
}, 1);

Clazz.newMeth(C$, 'ensureOrder$BA$I', function (bytes, numberOfBytes) {
if (!C$.IS_NATIVE_LITTLE_ENDIAN) {
bytes=C$.flipByteOrder$BA$I(bytes, numberOfBytes);
}return bytes;
}, 1);

Clazz.newMeth(C$, 'decode$org_rcsb_cif_binary_data_ByteArray$org_rcsb_cif_binary_encoding_ByteArrayEncoding', function (data, encoding) {
var type=encoding.getType$();
switch (type) {
case 1:
return data.toInt8Array$java_util_LinkedList(data.getEncoding$());
case 2:
return data.toInt16Array$java_util_LinkedList(data.getEncoding$());
case 3:
return data.toInt32Array$java_util_LinkedList(data.getEncoding$());
case 4:
return data.toUint8Array$java_util_LinkedList(data.getEncoding$());
case 5:
return data.toUint16Array$java_util_LinkedList(data.getEncoding$());
case 6:
return data.toUint32Array$java_util_LinkedList(data.getEncoding$());
case 32:
return data.toFloat32Array$java_util_LinkedList(data.getEncoding$());
case 33:
return data.toFloat64Array$java_util_LinkedList(data.getEncoding$());
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unsupported byte type " + type]);
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:26 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
