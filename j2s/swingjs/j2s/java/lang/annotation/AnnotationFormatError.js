(function(){var P$=Clazz.newPackage("java.lang.annotation"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AnnotationFormatError", null, 'Error');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (message) {
;C$.superclazz.c$$S.apply(this,[message]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S$Throwable', function (message, cause) {
;C$.superclazz.c$$S$Throwable.apply(this,[message, cause]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$Throwable', function (cause) {
;C$.superclazz.c$$S$Throwable.apply(this,[cause == null  ? null : cause.toString(), cause]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:35 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1