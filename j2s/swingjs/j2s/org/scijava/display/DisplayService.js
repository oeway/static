(function(){var P$=Clazz.newPackage("org.scijava.display"),I$=[[0,'org.scijava.event.EventService','org.scijava.object.ObjectService','org.scijava.plugin.PluginService']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "DisplayService", null, null, 'org.scijava.service.SciJavaService');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'eventService$', function () {
return this.context$().getService$Class(Clazz.getClass($I$(1),['getSubscribers$Class','publish$TE','publishLater$TE','subscribe$O','unsubscribe$java_util_Collection']));
});

Clazz.newMeth(C$, 'objectService$', function () {
return this.context$().getService$Class(Clazz.getClass($I$(2),['addObject$O','eventService$','getEventService$','getIndex$','getObjects$Class','removeObject$O']));
});

Clazz.newMeth(C$, 'pluginService$', function () {
return this.context$().getService$Class(Clazz.getClass($I$(3),['addPlugin$org_scijava_plugin_PluginInfo','addPlugins$java_util_Collection','createInstance$org_scijava_plugin_PluginInfo','createInstances$java_util_List','createInstancesOfType$Class','getIndex$','getPlugin$Class','getPlugin$Class$Class','getPlugin$S','getPlugins$','getPluginsOfClass$Class','getPluginsOfClass$Class$Class','getPluginsOfClass$S','getPluginsOfClass$S$Class','getPluginsOfType$Class','reloadPlugins$','removePlugin$org_scijava_plugin_PluginInfo','removePlugins$java_util_Collection','sort$java_util_List$Class']));
});

Clazz.newMeth(C$, 'getEventService$', function () {
return this.eventService$();
});

Clazz.newMeth(C$, 'getObjectService$', function () {
return this.objectService$();
});

Clazz.newMeth(C$, 'getPluginService$', function () {
return this.pluginService$();
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:24 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
