(function(){var P$=Clazz.newPackage("net.imglib2.type"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractNativeType", null, null, 'net.imglib2.type.NativeType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.i=0;
}, 1);

C$.$fields$=[['I',['i']]]

Clazz.newMeth(C$, 'updateIndex$I', function (j) {
this.i=j;
});

Clazz.newMeth(C$, 'getIndex$', function () {
return this.i;
});

Clazz.newMeth(C$, 'incIndex$', function () {
++this.i;
});

Clazz.newMeth(C$, 'incIndex$I', function (increment) {
this.i+=increment;
});

Clazz.newMeth(C$, 'decIndex$', function () {
--this.i;
});

Clazz.newMeth(C$, 'decIndex$I', function (decrement) {
this.i-=decrement;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:11 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
