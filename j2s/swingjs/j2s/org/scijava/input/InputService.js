(function(){var P$=Clazz.newPackage("org.scijava.input"),I$=[[0,'org.scijava.event.EventService']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "InputService", null, null, 'org.scijava.service.SciJavaService');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'eventService$', function () {
return this.context$().getService$Class(Clazz.getClass($I$(1),['getSubscribers$Class','publish$TE','publishLater$TE','subscribe$O','unsubscribe$java_util_Collection']));
});

Clazz.newMeth(C$, 'getEventService$', function () {
return this.eventService$();
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:25 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
