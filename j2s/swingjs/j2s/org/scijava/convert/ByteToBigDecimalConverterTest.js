(function(){var P$=Clazz.newPackage("org.scijava.convert"),I$=[[0,'org.scijava.util.NumberUtils']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ByteToBigDecimalConverterTest");

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getSrc$', function () {
return new Byte(($b$[0] = 7, $b$[0]));
});

Clazz.newMeth(C$, 'getExpectedValue$', function () {
return $I$(1).asBigDecimal$Number(new Double(7.0));
});

Clazz.newMeth(C$, 'getInvalidInput$', function () {
return new Short(($s$[0] = 101, $s$[0]));
});

Clazz.newMeth(C$, 'getInvalidOutput$', function () {
return Clazz.getClass(Float);
});
var $b$ = new Int8Array(1);
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-29 13:41:38 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
