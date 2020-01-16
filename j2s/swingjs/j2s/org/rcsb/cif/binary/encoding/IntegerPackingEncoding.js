(function(){var P$=Clazz.newPackage("org.rcsb.cif.binary.encoding"),I$=[[0,'org.rcsb.cif.binary.codec.Codec']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IntegerPackingEncoding", null, null, 'org.rcsb.cif.binary.encoding.Encoding');

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.byteCount=0;
this.isUnsigned=false;
this.srcSize=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$Z$I', function (byteCount, isUnsigned, srcSize) {
;C$.$init$.apply(this);
this.byteCount=byteCount;
this.isUnsigned=isUnsigned;
this.srcSize=srcSize;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map', function (encoding) {
C$.c$$I$Z$I.apply(this, [((encoding.get$O("byteCount")).objectValue$()|0), (encoding.get$O("isUnsigned")).objectValue$(), ((encoding.get$O("srcSize")).objectValue$()|0)]);
}, 1);

Clazz.newMeth(C$, 'getByteCount$', function () {
return this.byteCount;
});

Clazz.newMeth(C$, 'isUnsigned$', function () {
return this.isUnsigned;
});

Clazz.newMeth(C$, 'getSrcSize$', function () {
return this.srcSize;
});

Clazz.newMeth(C$, 'setByteCount$I', function (byteCount) {
this.byteCount=byteCount;
});

Clazz.newMeth(C$, 'setUnsigned$Z', function (unsigned) {
this.isUnsigned=unsigned;
});

Clazz.newMeth(C$, 'setSrcSize$I', function (srcSize) {
this.srcSize=srcSize;
});

Clazz.newMeth(C$, 'getKind$', function () {
return "IntegerPacking";
});

Clazz.newMeth(C$, ['decode$org_rcsb_cif_binary_data_IntArray','decode$TE'], function (current) {
return $I$(1).INTEGER_PACKING_CODEC.decode$org_rcsb_cif_binary_data_IntArray$org_rcsb_cif_binary_encoding_IntegerPackingEncoding(current, this);
});

Clazz.newMeth(C$, 'toString', function () {
return "IntegerPackingEncoding{byteCount=" + this.byteCount + ", isUnsigned=" + this.isUnsigned + ", srcSize=" + this.srcSize + '}' ;
});
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:27 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
