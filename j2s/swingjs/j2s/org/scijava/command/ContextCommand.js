(function(){var P$=Clazz.newPackage("org.scijava.command"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ContextCommand", null, 'org.scijava.AbstractContextual', ['org.scijava.Cancelable', 'org.scijava.command.Command']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['cancelReason']]]

Clazz.newMeth(C$, 'isCanceled$', function () {
return this.cancelReason != null ;
});

Clazz.newMeth(C$, 'cancel$S', function (reason) {
this.cancelReason=reason == null  ? "" : reason;
});

Clazz.newMeth(C$, 'getCancelReason$', function () {
return this.cancelReason;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:22 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
