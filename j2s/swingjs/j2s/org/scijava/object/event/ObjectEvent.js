(function(){var P$=Clazz.newPackage("org.scijava.object.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ObjectEvent", null, 'org.scijava.event.SciJavaEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['object','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$O', function (object) {
Clazz.super_(C$, this);
this.object=object;
}, 1);

Clazz.newMeth(C$, 'getObject$', function () {
return this.object;
});

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []) + "\n\tobject = " + this.object ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
