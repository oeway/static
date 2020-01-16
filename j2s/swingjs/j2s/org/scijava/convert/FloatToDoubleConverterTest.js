(function(){var P$=Clazz.newPackage("org.scijava.convert"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "FloatToDoubleConverterTest");

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getSrc$', function () {
return new Float(7.0);
});

Clazz.newMeth(C$, 'getExpectedValue$', function () {
return new Double(7.0);
});

Clazz.newMeth(C$, 'getInvalidInput$', function () {
return new Integer(394);
});

Clazz.newMeth(C$, 'getInvalidOutput$', function () {
return Clazz.getClass(Byte);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-29 13:41:38 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
