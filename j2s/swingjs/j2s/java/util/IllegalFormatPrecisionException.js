(function(){var P$=java.util,I$=[];
/*c*/var C$=Clazz.newClass(P$, "IllegalFormatPrecisionException", null, 'java.util.IllegalFormatException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['p']]]

Clazz.newMeth(C$, 'c$$I', function (p) {
Clazz.super_(C$, this);
this.p=p;
}, 1);

Clazz.newMeth(C$, 'getPrecision$', function () {
return this.p;
});

Clazz.newMeth(C$, 'getMessage$', function () {
return Integer.toString$I(this.p);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:56 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
