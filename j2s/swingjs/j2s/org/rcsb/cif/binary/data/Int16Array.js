(function(){var P$=Clazz.newPackage("org.rcsb.cif.binary.data"),I$=[[0,'java.util.LinkedList','java.nio.ByteBuffer','java.nio.ByteOrder','java.util.stream.IntStream','java.util.Arrays','org.rcsb.cif.binary.codec.Codec']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Int16Array", null, 'org.rcsb.cif.binary.data.AbstractEncodedData', 'org.rcsb.cif.binary.data.SignedIntArray');

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$IA', function (data) {
C$.c$$IA$java_util_LinkedList.apply(this, [data, Clazz.new_($I$(1,1))]);
}, 1);

Clazz.newMeth(C$, 'c$$IA$java_util_LinkedList', function (data, encoding) {
;C$.superclazz.c$$O$java_util_LinkedList.apply(this, [data, encoding]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getData$', function () {
return this.data;
});

Clazz.newMeth(C$, 'length$', function () {
return this.getData$().length;
});

Clazz.newMeth(C$, 'toByteArray$', function () {
return C$.int16ToByteArray$IA(this.getData$());
});

Clazz.newMeth(C$, 'int16ToByteArray$IA', function (data) {
var buffer=$I$(2).allocate$I(data.length * 2);
buffer.order$java_nio_ByteOrder($I$(3).LITTLE_ENDIAN);
$I$(4).of$IA(data).forEach$java_util_function_IntConsumer(((P$.Int16Array$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Int16Array$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntConsumer', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$', function (i) { return (this.$finals$.buffer.putShort$H(($s$[0] = i, $s$[0])));});
var $s$ = new Int16Array(1);
})()
), Clazz.new_(P$.Int16Array$lambda1.$init$, [this, {buffer:buffer}])));
return buffer.array$();
}, 1);

Clazz.newMeth(C$, 'getNumberOfBytes$', function () {
return 2;
});

Clazz.newMeth(C$, 'getType$', function () {
return 2;
});

Clazz.newMeth(C$, 'toString', function () {
return this.getClass$().getSimpleName$() + ": " + $I$(5).toString$IA(this.getData$()) ;
});

Clazz.newMeth(C$, 'encode$org_rcsb_cif_binary_encoding_DeltaEncoding', function (encoding) {
return $I$(6).DELTA_CODEC.encode$TT$org_rcsb_cif_binary_encoding_DeltaEncoding(this, encoding);
});

Clazz.newMeth(C$, 'decode$org_rcsb_cif_binary_encoding_DeltaEncoding', function (encoding) {
return $I$(6).DELTA_CODEC.decode$TT$org_rcsb_cif_binary_encoding_DeltaEncoding(this, encoding);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:27 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
