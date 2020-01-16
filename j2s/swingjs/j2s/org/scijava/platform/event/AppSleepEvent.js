(function(){var P$=Clazz.newPackage("org.scijava.platform.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AppSleepEvent", null, 'org.scijava.platform.event.ApplicationEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['sleep']]]

Clazz.newMeth(C$, 'c$$Z', function (sleep) {
Clazz.super_(C$, this);
this.sleep=sleep;
}, 1);

Clazz.newMeth(C$, 'isSleeping$', function () {
return this.sleep;
});

Clazz.newMeth(C$, 'isWaking$', function () {
return !this.sleep;
});

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []) + "\n\tsleep = " + this.sleep ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
