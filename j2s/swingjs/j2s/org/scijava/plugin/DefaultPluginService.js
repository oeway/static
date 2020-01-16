(function(){var P$=Clazz.newPackage("org.scijava.plugin"),p$1={},I$=[[0,'org.scijava.plugin.event.PluginsRemovedEvent','org.scijava.plugin.event.PluginsAddedEvent','org.scijava.util.ListUtils','org.scijava.plugin.SciJavaPlugin','java.util.ArrayList','org.scijava.plugin.Plugin']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultPluginService", null, 'org.scijava.service.AbstractService', 'org.scijava.plugin.PluginService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['log','org.scijava.log.LogService','eventService','org.scijava.event.EventService','pluginIndex','org.scijava.plugin.PluginIndex']]]

Clazz.newMeth(C$, 'getIndex$', function () {
return this.pluginIndex;
});

Clazz.newMeth(C$, 'reloadPlugins$', function () {
var oldPlugins=this.pluginIndex.getAll$();
this.pluginIndex.clear$();
if (oldPlugins.size$() > 0) {
this.eventService.publish$TE(Clazz.new_($I$(1,1).c$$java_util_Collection,[oldPlugins]));
}this.pluginIndex.discover$();
var newPlugins=this.pluginIndex.getAll$();
if (newPlugins.size$() > 0) {
this.eventService.publish$TE(Clazz.new_($I$(2,1).c$$java_util_Collection,[newPlugins]));
}p$1.logExceptions.apply(this, []);
});

Clazz.newMeth(C$, 'addPlugin$org_scijava_plugin_PluginInfo', function (plugin) {
if (this.pluginIndex.add$TE(plugin)) {
this.eventService.publish$TE(Clazz.new_($I$(2,1).c$$org_scijava_plugin_PluginInfo,[plugin]));
}});

Clazz.newMeth(C$, 'addPlugins$java_util_Collection', function (plugins) {
if (this.pluginIndex.addAll$java_util_Collection(plugins)) {
this.eventService.publish$TE(Clazz.new_($I$(2,1).c$$java_util_Collection,[plugins]));
}});

Clazz.newMeth(C$, 'removePlugin$org_scijava_plugin_PluginInfo', function (plugin) {
if (this.pluginIndex.remove$O(plugin)) {
this.eventService.publish$TE(Clazz.new_($I$(1,1).c$$org_scijava_plugin_PluginInfo,[plugin]));
}});

Clazz.newMeth(C$, 'removePlugins$java_util_Collection', function (plugins) {
if (this.pluginIndex.removeAll$java_util_Collection(plugins)) {
this.eventService.publish$TE(Clazz.new_($I$(1,1).c$$java_util_Collection,[plugins]));
}});

Clazz.newMeth(C$, 'getPlugins$', function () {
return this.pluginIndex.getAll$();
});

Clazz.newMeth(C$, 'getPlugin$Class', function (pluginClass) {
return $I$(3).first$java_util_List(this.getPluginsOfClass$Class(pluginClass));
});

Clazz.newMeth(C$, 'getPlugin$Class$Class', function (pluginClass, type) {
return $I$(3).first$java_util_List(this.getPluginsOfClass$Class$Class(pluginClass, type));
});

Clazz.newMeth(C$, 'getPlugin$S', function (className) {
return $I$(3).first$java_util_List(this.getPluginsOfClass$S(className));
});

Clazz.newMeth(C$, 'getPluginsOfType$Class', function (type) {
return this.pluginIndex.getPlugins$Class(type);
});

Clazz.newMeth(C$, 'getPluginsOfClass$Class', function (pluginClass) {
return this.getPluginsOfClass$Class$Class(pluginClass, Clazz.getClass($I$(4),[]));
});

Clazz.newMeth(C$, 'getPluginsOfClass$Class$Class', function (pluginClass, type) {
var result=Clazz.new_(1,{E:"org.scijava.plugin.PluginInfo"},$I$(5,1));
p$1.findPluginsOfClass$Class$java_util_List$java_util_List.apply(this, [pluginClass, this.getPluginsOfType$Class(type), result]);
p$1.filterNonmatchingClasses$Class$java_util_ArrayList.apply(this, [pluginClass, result]);
return result;
});

Clazz.newMeth(C$, 'getPluginsOfClass$S', function (className) {
return this.getPluginsOfClass$S$Class(className, Clazz.getClass($I$(4),[]));
});

Clazz.newMeth(C$, 'getPluginsOfClass$S$Class', function (className, type) {
var result=Clazz.new_(1,{E:"org.scijava.plugin.PluginInfo"},$I$(5,1));
C$.findPluginsOfClass$S$java_util_List$java_util_List(className, this.getPluginsOfType$Class(type), result);
return result;
});

Clazz.newMeth(C$, 'createInstancesOfType$Class', function (type) {
var plugins=this.getPluginsOfType$Class(type);
return this.createInstances$java_util_List(plugins);
});

Clazz.newMeth(C$, 'createInstances$java_util_List', function (infos) {
var list=Clazz.new_(1,{E:"Object"},$I$(5,1));
for (var info, $info = infos.iterator$(); $info.hasNext$()&&((info=($info.next$())),1);) {
var p=this.createInstance$org_scijava_plugin_PluginInfo(info);
if (p != null ) list.add$TE(p);
}
return list;
});

Clazz.newMeth(C$, 'createInstance$org_scijava_plugin_PluginInfo', function (info) {
try {
var p=info.createInstance$();
this.context$().inject$O(p);
return p;
} catch (t) {
this.log.error$O$Throwable("Cannot create plugin: " + info, t);
}
return null;
});

Clazz.newMeth(C$, 'initialize$', function () {
this.pluginIndex=this.context$().getPluginIndex$();
this.log.debug$O("Found " + this.pluginIndex.size$() + " plugins." );
if (this.log.isDebug$()) {
for (var info, $info = this.pluginIndex.iterator$(); $info.hasNext$()&&((info=($info.next$())),1);) {
this.log.debug$O("- " + info);
}
}p$1.logExceptions.apply(this, []);
C$.superclazz.prototype.initialize$.apply(this, []);
});

Clazz.newMeth(C$, 'findPluginsOfClass$S$java_util_List$java_util_List', function (className, srcList, destList) {
for (var info, $info = srcList.iterator$(); $info.hasNext$()&&((info=($info.next$())),1);) {
if (info.getClassName$().equals$O(className)) {
var match=info;
destList.add$TE(match);
}}
}, 1);

Clazz.newMeth(C$, 'getPluginType$Class', function (pluginClass) {
var annotation=pluginClass.getAnnotation$Class(Clazz.getClass($I$(6),['attrs','description','enabled','headless','iconPath','initializer','label','menu','menuPath','menuRoot','name','priority','selectable','selectionGroup','type','visible']));
if (annotation == null ) return null;
var type=annotation.type$();
return type;
}, 1);

Clazz.newMeth(C$, 'findPluginsOfClass$Class$java_util_List$java_util_List', function (pluginClass, srcList, destList) {
var className=pluginClass.getName$();
for (var info, $info = srcList.iterator$(); $info.hasNext$()&&((info=($info.next$())),1);) {
try {
var clazz2=info.getPluginClass$();
if (clazz2 === pluginClass  || (info.getClassName$().equals$O(className) && info.loadClass$() === pluginClass  ) ) {
var match=info;
destList.add$TE(match);
}} catch (exc) {
if (Clazz.exceptionOf(exc,"org.scijava.InstantiableException")){
this.log.debug$O$Throwable("Ignoring plugin: " + info, exc);
} else {
throw exc;
}
}
}
}, p$1);

Clazz.newMeth(C$, 'filterNonmatchingClasses$Class$java_util_ArrayList', function (pluginClass, result) {
for (var iter=result.iterator$(); iter.hasNext$(); ) {
try {
if (iter.next$().loadClass$() !== pluginClass ) iter.remove$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"org.scijava.InstantiableException")){
this.log.debug$Throwable(exc);
iter.remove$();
} else {
throw exc;
}
}
}
}, p$1);

Clazz.newMeth(C$, 'logExceptions', function () {
var exceptions=this.pluginIndex.getExceptions$();
var excCount=exceptions.size$();
if (excCount > 0) {
this.log.warn$O(excCount + " exceptions occurred during plugin discovery.");
if (this.log.isDebug$()) {
for (var name, $name = exceptions.keySet$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
var t=exceptions.get$O(name);
this.log.debug$O$Throwable(name, t);
}
}}}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.plugin.DefaultPluginService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']],
  [['eventService','org.scijava.event.EventService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
