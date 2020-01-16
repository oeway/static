(function(){var P$=Clazz.newPackage("org.rcsb.cif.binary.data");
/*c*/var C$=Clazz.newClass(P$, "AbstractEncodedData", null, null, 'org.rcsb.cif.binary.data.EncodedData');

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.data=null;
this.encoding=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$O$java_util_LinkedList', function (data, encoding) {
;C$.$init$.apply(this);
this.data=data;
this.encoding=encoding;
}, 1);

Clazz.newMeth(C$, 'getEncoding$', function () {
return this.encoding;
});

Clazz.newMeth(C$, 'setEncoding$java_util_LinkedList', function (encoding) {
this.encoding=encoding;
});

Clazz.newMeth(C$, 'hasNextDecodingStep$', function () {
return this.getEncoding$().size$() > 0;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:27 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
