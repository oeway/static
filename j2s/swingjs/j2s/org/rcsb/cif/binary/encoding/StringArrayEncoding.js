(function(){var P$=Clazz.newPackage("org.rcsb.cif.binary.encoding"),I$=[[0,'org.rcsb.cif.binary.codec.Codec','java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StringArrayEncoding", null, null, 'org.rcsb.cif.binary.encoding.Encoding');

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.dataEncoding=null;
this.stringData=null;
this.offsetEncoding=null;
this.offsets=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$BA$java_util_LinkedList$java_util_LinkedList', function (stringData, offsets, outputEncoding, offsetEncoding) {
;C$.$init$.apply(this);
this.dataEncoding=outputEncoding;
this.stringData=stringData;
this.offsetEncoding=offsetEncoding;
this.offsets=offsets;
}, 1);

Clazz.newMeth(C$, 'c$$java_util_Map$java_util_LinkedList$java_util_LinkedList', function (encoding, outputEncoding, offsetEncoding) {
C$.c$$S$BA$java_util_LinkedList$java_util_LinkedList.apply(this, [$I$(1).getStringFromBytes$BA(encoding.get$O("stringData")), encoding.get$O("offsets"), outputEncoding, offsetEncoding]);
}, 1);

Clazz.newMeth(C$, 'getDataEncoding$', function () {
return this.dataEncoding;
});

Clazz.newMeth(C$, 'getStringData$', function () {
return this.stringData;
});

Clazz.newMeth(C$, 'getOffsetEncoding$', function () {
return this.offsetEncoding;
});

Clazz.newMeth(C$, 'getOffsets$', function () {
return this.offsets;
});

Clazz.newMeth(C$, 'setDataEncoding$java_util_LinkedList', function (dataEncoding) {
this.dataEncoding=dataEncoding;
});

Clazz.newMeth(C$, 'setStringData$S', function (stringData) {
this.stringData=stringData;
});

Clazz.newMeth(C$, 'setOffsetEncoding$java_util_LinkedList', function (offsetEncoding) {
this.offsetEncoding=offsetEncoding;
});

Clazz.newMeth(C$, 'setOffsets$BA', function (offsets) {
this.offsets=offsets;
});

Clazz.newMeth(C$, 'getKind$', function () {
return "StringArray";
});

Clazz.newMeth(C$, ['decode$org_rcsb_cif_binary_data_ByteArray','decode$TE'], function (current) {
return $I$(1).STRING_ARRAY_CODEC.decode$org_rcsb_cif_binary_data_ByteArray$org_rcsb_cif_binary_encoding_StringArrayEncoding(current, this);
});

Clazz.newMeth(C$, 'toString', function () {
return "StringArrayEncoding{dataEncoding=" + this.dataEncoding + ", stringData='" + this.stringData + '\'' + ", offsetEncoding=" + this.offsetEncoding + ", offsets=" + $I$(2).toString$BA(this.offsets) + '}' ;
});
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:27 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
