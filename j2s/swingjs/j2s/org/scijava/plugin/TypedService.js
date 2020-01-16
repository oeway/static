(function(){var P$=Clazz.newPackage("org.scijava.plugin"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "TypedService", null, null, ['org.scijava.plugin.PTService', 'org.scijava.Typed']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, ['find$TDT'], function (data) {
for (var plugin, $plugin = this.getPlugins$().iterator$(); $plugin.hasNext$()&&((plugin=($plugin.next$())),1);) {
try {
var instance=this.pluginService$().createInstance$org_scijava_plugin_PluginInfo(plugin);
if (instance != null  && instance.supports$TT(data) ) return instance;
} catch (t) {
this.log$().error$O$Throwable("Malfunctioning plugin: " + plugin.getClassName$(), t);
}
}
return null;
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
