(function(){var P$=Clazz.newPackage("org.scijava.convert"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ByteToIntegerConverterTest");

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getSrc$', function () {
return new Byte(($b$[0] = 7, $b$[0]));
});

Clazz.newMeth(C$, 'getExpectedValue$', function () {
return new Integer(7);
});

Clazz.newMeth(C$, 'getInvalidInput$', function () {
return new Long(12);
});

Clazz.newMeth(C$, 'getInvalidOutput$', function () {
return Clazz.getClass(Short);
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-29 13:41:38 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
