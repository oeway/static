(function(){var P$=Clazz.newPackage("org.rcsb.cif.binary.data"),I$=[[0,'java.util.LinkedList','java.util.Arrays','org.rcsb.cif.binary.codec.Codec']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StringArray", null, 'org.rcsb.cif.binary.data.AbstractEncodedData');

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$O$java_util_LinkedList', function (data, encoding) {
;C$.superclazz.c$$O$java_util_LinkedList.apply(this, [data, encoding]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$SA', function (data) {
C$.c$$SA$java_util_LinkedList.apply(this, [data, Clazz.new_($I$(1,1))]);
}, 1);

Clazz.newMeth(C$, 'c$$SA$java_util_LinkedList', function (data, encoding) {
;C$.superclazz.c$$O$java_util_LinkedList.apply(this, [data, encoding]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getData$', function () {
return this.data;
});

Clazz.newMeth(C$, 'length$', function () {
return this.getData$().length;
});

Clazz.newMeth(C$, 'toString', function () {
return this.getClass$().getSimpleName$() + ": " + $I$(2).toString$OA(this.getData$()) ;
});

Clazz.newMeth(C$, 'encode$org_rcsb_cif_binary_encoding_StringArrayEncoding', function (encoding) {
return $I$(3).STRING_ARRAY_CODEC.encode$org_rcsb_cif_binary_data_StringArray$org_rcsb_cif_binary_encoding_StringArrayEncoding(this, encoding);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:27 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
