(function(){var P$=Clazz.newPackage("org.scijava.log"),I$=[[0,'java.util.concurrent.CopyOnWriteArrayList','org.scijava.log.LogMessage']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultLogger", null, null, ['org.scijava.log.Logger', 'org.scijava.log.LogListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.listeners=Clazz.new_(1,{E:"org.scijava.log.LogListener"},$I$(1,1));
}, 1);

C$.$fields$=[['I',['level'],'O',['destination','org.scijava.log.LogListener','source','org.scijava.log.LogSource','listeners','java.util.List']]]

Clazz.newMeth(C$, 'c$$org_scijava_log_LogListener$org_scijava_log_LogSource$I', function (destination, source, level) {
;C$.$init$.apply(this);
this.destination=destination;
this.source=source;
this.level=level;
}, 1);

Clazz.newMeth(C$, 'getSource$', function () {
return this.source;
});

Clazz.newMeth(C$, 'getLevel$', function () {
return this.level;
});

Clazz.newMeth(C$, 'alwaysLog$I$O$Throwable', function (level, msg, t) {
this.messageLogged$org_scijava_log_LogMessage(Clazz.new_($I$(2,1).c$$org_scijava_log_LogSource$I$O$Throwable,[this.source, level, msg, t]));
});

Clazz.newMeth(C$, 'subLogger$S$I', function (name, level) {
var source=this.getSource$().subSource$S(name);
var actualLevel=source.hasLogLevel$() ? source.logLevel$() : level;
return Clazz.new_(C$.c$$org_scijava_log_LogListener$org_scijava_log_LogSource$I,[this, source, actualLevel]);
});

Clazz.newMeth(C$, 'addLogListener$org_scijava_log_LogListener', function (listener) {
this.listeners.add$TE(listener);
});

Clazz.newMeth(C$, 'removeLogListener$org_scijava_log_LogListener', function (listener) {
this.listeners.remove$O(listener);
});

Clazz.newMeth(C$, 'notifyListeners$org_scijava_log_LogMessage', function (message) {
for (var listener, $listener = this.listeners.iterator$(); $listener.hasNext$()&&((listener=($listener.next$())),1);) listener.messageLogged$(message);

});

Clazz.newMeth(C$, ['messageLogged$org_scijava_log_LogMessage','messageLogged$'], function (message) {
this.notifyListeners$org_scijava_log_LogMessage(message);
this.destination.messageLogged$(message);
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.log.DefaultLogger',null,['org.scijava.log.IgnoreAsCallingClass']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:26 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
