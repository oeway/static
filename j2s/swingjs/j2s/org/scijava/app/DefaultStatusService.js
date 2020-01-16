(function(){var P$=Clazz.newPackage("org.scijava.app"),I$=[[0,'org.scijava.app.event.StatusEvent']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultStatusService", null, 'org.scijava.service.AbstractService', 'org.scijava.app.StatusService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['eventService','org.scijava.event.EventService','appService','org.scijava.app.AppService']]]

Clazz.newMeth(C$, 'showProgress$I$I', function (value, maximum) {
this.publish$org_scijava_app_event_StatusEvent(Clazz.new_($I$(1,1).c$$I$I,[value, maximum]));
});

Clazz.newMeth(C$, 'showStatus$S', function (message) {
this.publish$org_scijava_app_event_StatusEvent(Clazz.new_($I$(1,1).c$$S,[message]));
});

Clazz.newMeth(C$, 'showStatus$I$I$S', function (progress, maximum, message) {
this.publish$org_scijava_app_event_StatusEvent(Clazz.new_($I$(1,1).c$$I$I$S,[progress, maximum, message]));
});

Clazz.newMeth(C$, 'warn$S', function (message) {
this.publish$org_scijava_app_event_StatusEvent(Clazz.new_($I$(1,1).c$$S$Z,[message, true]));
});

Clazz.newMeth(C$, 'showStatus$I$I$S$Z', function (progress, maximum, message, warn) {
this.publish$org_scijava_app_event_StatusEvent(Clazz.new_($I$(1,1).c$$I$I$S$Z,[progress, maximum, message, warn]));
});

Clazz.newMeth(C$, 'clearStatus$', function () {
this.publish$org_scijava_app_event_StatusEvent(Clazz.new_($I$(1,1).c$$S,[""]));
});

Clazz.newMeth(C$, 'getStatusMessage$S$org_scijava_app_event_StatusEvent', function (appName, statusEvent) {
var message=statusEvent.getStatusMessage$();
if (!"".equals$O(message)) return message;
return this.appService.getApp$S(appName).getInfo$Z(false);
});

Clazz.newMeth(C$, 'publish$org_scijava_app_event_StatusEvent', function (statusEvent) {
System.out.println$S("DefaultStatusService.publish " + statusEvent.getStatusMessage$());
this.eventService.publishLater$TE(statusEvent);
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.app.DefaultStatusService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['eventService','org.scijava.event.EventService',null,['org.scijava.plugin.Parameter']],['']],
  [['appService','org.scijava.app.AppService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:22 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
