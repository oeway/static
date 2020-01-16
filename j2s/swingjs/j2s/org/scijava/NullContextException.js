(function(){var P$=Clazz.newPackage("org.scijava"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "NullContextException", null, 'RuntimeException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$S.apply(this, ["Before attempting to use this object, please set its context by calling the setContext(...) method."]);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (s) {
;C$.superclazz.c$$S.apply(this,[s]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$Throwable', function (s, cause) {
;C$.superclazz.c$$S$Throwable.apply(this,[s, cause]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$Throwable', function (cause) {
C$.c$$S$Throwable.apply(this, ["Before attempting to use this object, please set its context by calling the setContext(...) method.", cause]);
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:21 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
