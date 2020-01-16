(function(){var P$=Clazz.newPackage("org.scijava.convert"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "IntegerToLongConverterTest");

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getSrc$', function () {
return new Integer(7);
});

Clazz.newMeth(C$, 'getExpectedValue$', function () {
return new Long(7);
});

Clazz.newMeth(C$, 'getInvalidInput$', function () {
return new Float(7.67);
});

Clazz.newMeth(C$, 'getInvalidOutput$', function () {
return Clazz.getClass(Float);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-29 13:41:39 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
