(function(){var P$=Clazz.newPackage("java.security.spec"),I$=[[0,'java.math.BigInteger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RSAKeyGenParameterSpec", null, null, 'java.security.spec.AlgorithmParameterSpec');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.F0=$I$(1).valueOf$J(3);
C$.F4=$I$(1).valueOf$J(65537);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['keysize'],'O',['+publicExponent']]
,['O',['F0','java.math.BigInteger','+F4']]]

Clazz.newMeth(C$, 'c$$I$java_math_BigInteger', function (keysize, publicExponent) {
;C$.$init$.apply(this);
this.keysize=keysize;
this.publicExponent=publicExponent;
}, 1);

Clazz.newMeth(C$, 'getKeysize$', function () {
return this.keysize;
});

Clazz.newMeth(C$, 'getPublicExponent$', function () {
return this.publicExponent;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:52 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
