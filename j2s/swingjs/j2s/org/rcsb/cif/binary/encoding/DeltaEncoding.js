(function(){var P$=Clazz.newPackage("org.rcsb.cif.binary.encoding"),I$=[[0,'org.rcsb.cif.binary.codec.Codec']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DeltaEncoding", null, null, 'org.rcsb.cif.binary.encoding.Encoding');

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.origin=0;
this.srcType=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (origin, srcType) {
;C$.$init$.apply(this);
this.origin=origin;
this.srcType=srcType;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map', function (encoding) {
C$.c$$I$I.apply(this, [((encoding.get$O("origin")).objectValue$()|0), ((encoding.get$O("srcType")).objectValue$()|0)]);
}, 1);

Clazz.newMeth(C$, 'getOrigin$', function () {
return this.origin;
});

Clazz.newMeth(C$, 'getSrcType$', function () {
return this.srcType;
});

Clazz.newMeth(C$, 'setOrigin$I', function (origin) {
this.origin=origin;
});

Clazz.newMeth(C$, 'setSrcType$I', function (srcType) {
this.srcType=srcType;
});

Clazz.newMeth(C$, 'getKind$', function () {
return "Delta";
});

Clazz.newMeth(C$, ['decode$org_rcsb_cif_binary_data_SignedIntArray','decode$TE'], function (current) {
return $I$(1).DELTA_CODEC.decode$TT$org_rcsb_cif_binary_encoding_DeltaEncoding(current, this);
});

Clazz.newMeth(C$, 'toString', function () {
return "DeltaEncoding{origin=" + this.origin + ", srcType=" + this.srcType + '}' ;
});
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:27 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
