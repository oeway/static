(function(){var P$=Clazz.newPackage("org.rcsb.cif.binary.encoding"),I$=[[0,'org.rcsb.cif.binary.codec.Codec']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FixedPointEncoding", null, null, 'org.rcsb.cif.binary.encoding.Encoding');

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.factor=0;
this.srcType=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (factor) {
;C$.$init$.apply(this);
this.factor=factor;
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (factor, srcType) {
;C$.$init$.apply(this);
this.factor=factor;
this.srcType=srcType;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map', function (encoding) {
C$.c$$I$I.apply(this, [((encoding.get$O("factor")).objectValue$()|0), ((encoding.get$O("srcType")).objectValue$()|0)]);
}, 1);

Clazz.newMeth(C$, 'getFactor$', function () {
return this.factor;
});

Clazz.newMeth(C$, 'getSrcType$', function () {
return this.srcType;
});

Clazz.newMeth(C$, 'setSrcType$I', function (srcType) {
this.srcType=srcType;
});

Clazz.newMeth(C$, 'getKind$', function () {
return "FixedPoint";
});

Clazz.newMeth(C$, ['decode$org_rcsb_cif_binary_data_Int32Array','decode$TE'], function (current) {
return $I$(1).FIXED_POINT_CODEC.decode$org_rcsb_cif_binary_data_Int32Array$org_rcsb_cif_binary_encoding_FixedPointEncoding(current, this);
});

Clazz.newMeth(C$, 'toString', function () {
return "FixedPointEncoding{factor=" + this.factor + ", srcType=" + this.srcType + '}' ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:27 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
