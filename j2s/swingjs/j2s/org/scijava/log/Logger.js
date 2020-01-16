(function(){var P$=Clazz.newPackage("org.scijava.log"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "Logger");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'debug$O', function (msg) {
this.log$I$O(4, msg);
});

Clazz.newMeth(C$, 'debug$Throwable', function (t) {
this.log$I$Throwable(4, t);
});

Clazz.newMeth(C$, 'debug$O$Throwable', function (msg, t) {
this.log$I$O$Throwable(4, msg, t);
});

Clazz.newMeth(C$, 'error$O', function (msg) {
this.log$I$O(1, msg);
});

Clazz.newMeth(C$, 'error$Throwable', function (t) {
this.log$I$Throwable(1, t);
});

Clazz.newMeth(C$, 'error$O$Throwable', function (msg, t) {
this.log$I$O$Throwable(1, msg, t);
});

Clazz.newMeth(C$, 'info$O', function (msg) {
this.log$I$O(3, msg);
});

Clazz.newMeth(C$, 'info$Throwable', function (t) {
this.log$I$Throwable(3, t);
});

Clazz.newMeth(C$, 'info$O$Throwable', function (msg, t) {
this.log$I$O$Throwable(3, msg, t);
});

Clazz.newMeth(C$, 'trace$O', function (msg) {
this.log$I$O(5, msg);
});

Clazz.newMeth(C$, 'trace$Throwable', function (t) {
this.log$I$Throwable(5, t);
});

Clazz.newMeth(C$, 'trace$O$Throwable', function (msg, t) {
this.log$I$O$Throwable(5, msg, t);
});

Clazz.newMeth(C$, 'warn$O', function (msg) {
this.log$I$O(2, msg);
});

Clazz.newMeth(C$, 'warn$Throwable', function (t) {
this.log$I$Throwable(2, t);
});

Clazz.newMeth(C$, 'warn$O$Throwable', function (msg, t) {
this.log$I$O$Throwable(2, msg, t);
});

Clazz.newMeth(C$, 'isDebug$', function () {
return this.isLevel$I(4);
});

Clazz.newMeth(C$, 'isError$', function () {
return this.isLevel$I(1);
});

Clazz.newMeth(C$, 'isInfo$', function () {
return this.isLevel$I(3);
});

Clazz.newMeth(C$, 'isTrace$', function () {
return this.isLevel$I(5);
});

Clazz.newMeth(C$, 'isWarn$', function () {
return this.isLevel$I(2);
});

Clazz.newMeth(C$, 'isLevel$I', function (level) {
return this.getLevel$() >= level;
});

Clazz.newMeth(C$, 'log$I$O', function (level, msg) {
this.log$I$O$Throwable(level, msg, null);
});

Clazz.newMeth(C$, 'log$I$Throwable', function (level, t) {
this.log$I$O$Throwable(level, null, t);
});

Clazz.newMeth(C$, 'log$I$O$Throwable', function (level, msg, t) {
if (this.isLevel$I(level)) this.alwaysLog$I$O$Throwable(level, msg, t);
});

Clazz.newMeth(C$, 'getName$', function () {
return this.getSource$().name$();
});

Clazz.newMeth(C$, 'subLogger$S', function (name) {
return this.subLogger$S$I(name, this.getLevel$());
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:26 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
