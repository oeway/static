(function(){var P$=Clazz.newPackage("Jama.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Maths");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'hypot$D$D', function (a, b) {
var r;
if (Math.abs(a) > Math.abs(b) ) {
r=b / a;
r=Math.abs(a) * Math.sqrt(1 + r * r);
} else if (b != 0 ) {
r=a / b;
r=Math.abs(b) * Math.sqrt(1 + r * r);
} else {
r=0.0;
}return r;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
