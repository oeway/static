(function(){var P$=Clazz.newPackage("org.scijava.plugin"),p$1={},I$=[[0,'java.util.Collections','java.util.ArrayList','java.util.HashMap']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractSingletonService", null, 'org.scijava.plugin.AbstractPTService', 'org.scijava.plugin.SingletonService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['log','org.scijava.log.LogService','objectService','org.scijava.object.ObjectService','instances','java.util.List','instanceMap','java.util.Map']]]

Clazz.newMeth(C$, 'objectService$', function () {
return this.objectService;
});

Clazz.newMeth(C$, 'getInstances$', function () {
if (this.instances == null ) p$1.initInstances.apply(this, []);
return $I$(1).unmodifiableList$java_util_List(this.instances);
});

Clazz.newMeth(C$, 'getInstance$Class', function (pluginClass) {
if (this.instanceMap == null ) p$1.initInstances.apply(this, []);
return this.instanceMap.get$O(pluginClass);
});

Clazz.newMeth(C$, 'onEvent$org_scijava_plugin_event_PluginsRemovedEvent', function (event) {
if (this.instanceMap == null ) return;
for (var info, $info = event.getItems$().iterator$(); $info.hasNext$()&&((info=($info.next$())),1);) {
var obj=this.instanceMap.remove$O(info.getPluginClass$());
if (obj != null ) {
this.instances.remove$O(obj);
this.objectService.removeObject$O(obj);
}}
});

Clazz.newMeth(C$, 'onEvent$org_scijava_plugin_event_PluginsAddedEvent', function (event) {
if (this.instanceMap == null ) return;
var singletons=Clazz.new_(1,{E:"org.scijava.plugin.PluginInfo"},$I$(2,1));
for (var pluginInfo, $pluginInfo = event.getItems$().iterator$(); $pluginInfo.hasNext$()&&((pluginInfo=($pluginInfo.next$())),1);) {
if (this.getPluginType$().isAssignableFrom$Class(pluginInfo.getPluginType$())) {
var plugin=this.pluginService$().createInstance$org_scijava_plugin_PluginInfo(pluginInfo);
var pluginClass=plugin.getClass$();
this.instanceMap.put$TK$TV(pluginClass, plugin);
this.instances.add$TE(plugin);
}}
for (var pluginInfo, $pluginInfo = singletons.iterator$(); $pluginInfo.hasNext$()&&((pluginInfo=($pluginInfo.next$())),1);) {
var plugin=this.pluginService$().createInstance$org_scijava_plugin_PluginInfo(pluginInfo);
var pluginClass=plugin.getClass$();
this.instanceMap.put$TK$TV(pluginClass, plugin);
this.instances.add$TE(plugin);
}
});

Clazz.newMeth(C$, 'initInstances', function () {
if (this.instances != null ) return;
var list=this.filterInstances$java_util_List(this.pluginService$().createInstancesOfType$Class(this.getPluginType$()));
var map=Clazz.new_(1,{K:"Class",V:"Object"},$I$(3,1));
for (var plugin, $plugin = list.iterator$(); $plugin.hasNext$()&&((plugin=($plugin.next$())),1);) {
var ptClass=plugin.getClass$();
map.put$TK$TV(ptClass, plugin);
}
this.log.debug$O("Found " + list.size$() + " " + this.getPluginType$().getSimpleName$() + " plugins." );
this.instanceMap=map;
this.instances=list;
}, p$1);
C$.$getAnn$ = function(){ return [
[['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']],
  [['objectService','org.scijava.object.ObjectService',null,['org.scijava.plugin.Parameter']],['']],
  [['M:onEvent','void','onEvent$org_scijava_plugin_event_PluginsRemovedEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$org_scijava_plugin_event_PluginsAddedEvent',['org.scijava.event.EventHandler']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
