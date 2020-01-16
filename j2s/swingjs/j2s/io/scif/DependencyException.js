(function(){var P$=Clazz.newPackage("io.scif"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DependencyException", null, 'Exception');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['failureClass','Class']]]

Clazz.newMeth(C$, 'c$$S', function (message) {
;C$.superclazz.c$$S.apply(this,[message]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$Class', function (message, klass) {
;C$.superclazz.c$$S.apply(this,[message]);C$.$init$.apply(this);
this.failureClass=klass;
}, 1);

Clazz.newMeth(C$, 'c$$S$Class$Throwable', function (message, klass, cause) {
;C$.superclazz.c$$S$Throwable.apply(this,[message, cause]);C$.$init$.apply(this);
this.failureClass=klass;
}, 1);

Clazz.newMeth(C$, 'c$$Throwable', function (cause) {
;C$.superclazz.c$$Throwable.apply(this,[cause]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getFailureClass$', function () {
return this.failureClass;
});

Clazz.newMeth(C$, 'toString', function () {
if (this.failureClass == null ) {
return this.getMessage$();
}return this.getMessage$() + " for " + this.failureClass ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:36 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
