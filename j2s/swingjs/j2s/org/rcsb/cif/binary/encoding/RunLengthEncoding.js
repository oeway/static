(function(){var P$=Clazz.newPackage("org.rcsb.cif.binary.encoding"),I$=[[0,'org.rcsb.cif.binary.codec.Codec']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RunLengthEncoding", null, null, 'org.rcsb.cif.binary.encoding.Encoding');

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.srcType=0;
this.srcSize=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (srcType, srcSize) {
;C$.$init$.apply(this);
this.srcType=srcType;
this.srcSize=srcSize;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map', function (encoding) {
C$.c$$I$I.apply(this, [((encoding.get$O("srcType")).objectValue$()|0), ((encoding.get$O("srcSize")).objectValue$()|0)]);
}, 1);

Clazz.newMeth(C$, 'getSrcType$', function () {
return this.srcType;
});

Clazz.newMeth(C$, 'getSrcSize$', function () {
return this.srcSize;
});

Clazz.newMeth(C$, 'setSrcType$I', function (srcType) {
this.srcType=srcType;
});

Clazz.newMeth(C$, 'setSrcSize$I', function (srcSize) {
this.srcSize=srcSize;
});

Clazz.newMeth(C$, 'getKind$', function () {
return "RunLength";
});

Clazz.newMeth(C$, ['decode$org_rcsb_cif_binary_data_Int32Array','decode$TE'], function (current) {
return $I$(1).RUN_LENGTH_CODEC.decode$org_rcsb_cif_binary_data_Int32Array$org_rcsb_cif_binary_encoding_RunLengthEncoding(current, this);
});

Clazz.newMeth(C$, 'toString', function () {
return "RunLengthEncoding{srcType=" + this.srcType + ", srcSize=" + this.srcSize + '}' ;
});
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:27 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
