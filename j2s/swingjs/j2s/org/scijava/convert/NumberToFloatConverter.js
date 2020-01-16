(function(){var P$=Clazz.newPackage("org.scijava.convert"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "NumberToFloatConverter", null, 'org.scijava.convert.NumberToNumberConverter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'convert$Number', function (n) {
return new Float(n.floatValue$());
});

Clazz.newMeth(C$, 'getOutputType$', function () {
return Clazz.getClass(Float);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:23 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
