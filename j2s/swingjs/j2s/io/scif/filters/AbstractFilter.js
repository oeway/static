(function(){var P$=Clazz.newPackage("io.scif.filters"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractFilter", null, 'io.scif.AbstractSCIFIOPlugin', 'io.scif.filters.Filter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.parent=null;
}, 1);

C$.$fields$=[['O',['parent','<T>','parentClass','Class']]]

Clazz.newMeth(C$, 'c$$Class', function (parentClass) {
Clazz.super_(C$, this);
this.parentClass=parentClass;
}, 1);

Clazz.newMeth(C$, 'enabledDefault$', function () {
return false;
});

Clazz.newMeth(C$, 'getParent$', function () {
return this.parent;
});

Clazz.newMeth(C$, 'setParent$O', function (parent) {
if (this.parentClass.isAssignableFrom$Class(parent.getClass$())) this.parent=parent;
 else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid parent. Provided: " + parent.getClass$() + " Expected: " + this.parentClass ]);
}});

Clazz.newMeth(C$, 'reset$', function () {
this.parent=null;
});

Clazz.newMeth(C$, 'isCompatible$Class', function (c) {
return this.parentClass.isAssignableFrom$Class(c);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:38 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
