(function(){var P$=Clazz.newPackage("org.apache.commons.logging"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "LogConfigurationException", null, 'RuntimeException');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.$cause=null;
}, 1);

C$.$fields$=[['O',['$cause','Throwable']]
,['L',['serialVersionUID']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this, []);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (message) {
;C$.superclazz.c$$S.apply(this, [message]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$Throwable', function (cause) {
C$.c$$S$Throwable.apply(this, [cause == null  ? null : cause.toString(), cause]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Throwable', function (message, cause) {
;C$.superclazz.c$$S.apply(this, [message + " (Caused by " + cause + ")" ]);C$.$init$.apply(this);
this.$cause=cause;
}, 1);

Clazz.newMeth(C$, 'getCause$', function () {
return this.$cause;
});
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 23:15:18 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
