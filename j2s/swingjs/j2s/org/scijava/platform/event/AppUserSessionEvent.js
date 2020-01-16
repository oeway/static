(function(){var P$=Clazz.newPackage("org.scijava.platform.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AppUserSessionEvent", null, 'org.scijava.platform.event.ApplicationEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['activated']]]

Clazz.newMeth(C$, 'c$$Z', function (activated) {
Clazz.super_(C$, this);
this.activated=activated;
}, 1);

Clazz.newMeth(C$, 'isActivated$', function () {
return this.activated;
});

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []) + "\n\tactivated = " + this.activated ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
