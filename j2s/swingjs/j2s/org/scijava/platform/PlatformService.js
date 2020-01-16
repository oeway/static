(function(){var P$=Clazz.newPackage("org.scijava.platform"),I$=[[0,'org.scijava.event.EventService','org.scijava.command.CommandService']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "PlatformService", null, null, ['org.scijava.plugin.SingletonService', 'org.scijava.service.SciJavaService']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'eventService$', function () {
return this.context$().getService$Class(Clazz.getClass($I$(1),['getSubscribers$Class','publish$TE','publishLater$TE','subscribe$O','unsubscribe$java_util_Collection']));
});

Clazz.newMeth(C$, 'commandService$', function () {
return this.context$().getService$Class(Clazz.getClass($I$(2),['eventService$','getCommand$Class','getCommand$S','getCommands$','getCommands$java_util_List','getCommandsOfClass$Class','getCommandsOfClass$S','getCommandsOfType$Class','getEventService$','getModuleService$','moduleService$','run$S$Z$OA','run$S$Z$java_util_Map','run$Class$Z$OA','run$Class$Z$java_util_Map','run$org_scijava_command_CommandInfo$Z$OA','run$org_scijava_command_CommandInfo$Z$java_util_Map']));
});

Clazz.newMeth(C$, 'getEventService$', function () {
return this.eventService$();
});

Clazz.newMeth(C$, 'getCommandService$', function () {
return this.commandService$();
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
