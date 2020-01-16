(function(){var P$=Clazz.newPackage("org.scijava.plugin"),I$=[[0,'org.scijava.plugin.PluginService']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "PTService", null, null, 'org.scijava.service.Service');

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'pluginService$', function () {
return this.context$().getService$Class(Clazz.getClass($I$(1),['addPlugin$org_scijava_plugin_PluginInfo','addPlugins$java_util_Collection','createInstance$org_scijava_plugin_PluginInfo','createInstances$java_util_List','createInstancesOfType$Class','getIndex$','getPlugin$Class','getPlugin$Class$Class','getPlugin$S','getPlugins$','getPluginsOfClass$Class','getPluginsOfClass$Class$Class','getPluginsOfClass$S','getPluginsOfClass$S$Class','getPluginsOfType$Class','reloadPlugins$','removePlugin$org_scijava_plugin_PluginInfo','removePlugins$java_util_Collection','sort$java_util_List$Class']));
});

Clazz.newMeth(C$, 'getPlugins$', function () {
return this.pluginService$().getPluginsOfType$Class(this.getPluginType$());
});

Clazz.newMeth(C$, 'create$Class', function (pluginClass) {
var info=this.pluginService$().getPlugin$Class$Class(pluginClass, this.getPluginType$());
var plugin=this.pluginService$().createInstance$org_scijava_plugin_PluginInfo(info);
return plugin;
});

Clazz.newMeth(C$, 'getPluginService$', function () {
return this.pluginService$();
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
