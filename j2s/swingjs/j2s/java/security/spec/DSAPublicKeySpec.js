(function(){var P$=Clazz.newPackage("java.security.spec"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DSAPublicKeySpec", null, null, 'java.security.spec.KeySpec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['y','java.math.BigInteger','+p','+q','+g']]]

Clazz.newMeth(C$, 'c$$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger$java_math_BigInteger', function (y, p, q, g) {
;C$.$init$.apply(this);
this.y=y;
this.p=p;
this.q=q;
this.g=g;
}, 1);

Clazz.newMeth(C$, 'getY$', function () {
return this.y;
});

Clazz.newMeth(C$, 'getP$', function () {
return this.p;
});

Clazz.newMeth(C$, 'getQ$', function () {
return this.q;
});

Clazz.newMeth(C$, 'getG$', function () {
return this.g;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:51 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
