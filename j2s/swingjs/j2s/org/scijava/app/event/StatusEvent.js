(function(){var P$=Clazz.newPackage("org.scijava.app.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "StatusEvent", null, 'org.scijava.event.SciJavaEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['warning'],'I',['progress','maximum'],'S',['status']]]

Clazz.newMeth(C$, 'c$$S', function (message) {
C$.c$$I$I$S.apply(this, [-1, -1, message]);
}, 1);

Clazz.newMeth(C$, 'c$$S$Z', function (message, warn) {
C$.c$$I$I$S$Z.apply(this, [-1, -1, message, warn]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (progress, maximum) {
C$.c$$I$I$S.apply(this, [progress, maximum, null]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$S', function (progress, maximum, message) {
C$.c$$I$I$S$Z.apply(this, [progress, maximum, message, false]);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$S$Z', function (progress, maximum, message, warn) {
Clazz.super_(C$, this);
this.progress=progress;
this.maximum=maximum;
this.status=message;
this.warning=warn;
}, 1);

Clazz.newMeth(C$, 'getProgressValue$', function () {
return this.progress;
});

Clazz.newMeth(C$, 'getProgressMaximum$', function () {
return this.maximum;
});

Clazz.newMeth(C$, 'getStatusMessage$', function () {
return this.status;
});

Clazz.newMeth(C$, 'isWarning$', function () {
return this.warning;
});

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []) + "\n\tprogress = " + this.progress + "\n\tmaximum = " + this.maximum + "\n\tstatus = " + this.status + "\n\twarning = " + this.warning ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:22 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
