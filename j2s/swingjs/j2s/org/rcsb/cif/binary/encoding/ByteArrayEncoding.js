(function(){var P$=Clazz.newPackage("org.rcsb.cif.binary.encoding"),I$=[[0,'org.rcsb.cif.binary.codec.Codec']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ByteArrayEncoding", null, null, 'org.rcsb.cif.binary.encoding.Encoding');

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.type=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (type) {
;C$.$init$.apply(this);
this.type=type;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map', function (encoding) {
C$.c$$I.apply(this, [((encoding.get$O("type")).objectValue$()|0)]);
}, 1);

Clazz.newMeth(C$, 'getType$', function () {
return this.type;
});

Clazz.newMeth(C$, 'setType$I', function (type) {
this.type=type;
});

Clazz.newMeth(C$, 'getKind$', function () {
return "ByteArray";
});

Clazz.newMeth(C$, ['decode$org_rcsb_cif_binary_data_ByteArray','decode$TE'], function (current) {
return $I$(1).BYTE_ARRAY_CODEC.decode$org_rcsb_cif_binary_data_ByteArray$org_rcsb_cif_binary_encoding_ByteArrayEncoding(current, this);
});

Clazz.newMeth(C$, 'toString', function () {
return "ByteArrayEncoding{type=" + this.type + '}' ;
});
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:27 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
