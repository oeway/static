(function(){var P$=Clazz.newPackage("org.scijava.plugin"),I$=[[0,'org.scijava.plugin.DefaultPluginFinder','org.scijava.plugin.PluginInfo','java.util.ArrayList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PluginIndex", null, 'org.scijava.object.SortedObjectIndex');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['pluginFinder','org.scijava.plugin.PluginFinder','exceptions','java.util.Map']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$org_scijava_plugin_PluginFinder.apply(this, [Clazz.new_($I$(1,1))]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_plugin_PluginFinder', function (pluginFinder) {
;C$.superclazz.c$$Class.apply(this,[Clazz.getClass($I$(2))]);C$.$init$.apply(this);
this.pluginFinder=pluginFinder;
}, 1);

Clazz.newMeth(C$, 'discover$', function () {
if (this.pluginFinder == null ) return;
var plugins=Clazz.new_(1,{E:"org.scijava.plugin.PluginInfo"},$I$(3,1));
this.exceptions=this.pluginFinder.findPlugins$(plugins);
System.out.println$S("PluginIndex found " + plugins.size$());
this.addAll$java_util_Collection(plugins);
});

Clazz.newMeth(C$, 'getExceptions$', function () {
return this.exceptions;
});

Clazz.newMeth(C$, 'getPlugins$Class', function (type) {
var list=this.get$Class(type);
var result=list;
return result;
});

Clazz.newMeth(C$, ['getType$org_scijava_plugin_PluginInfo','getType$TE'], function (info) {
return info.getPluginType$();
});

Clazz.newMeth(C$, 'remove$O$Z', function (o, batch) {
if (!(Clazz.instanceOf(o, "org.scijava.plugin.PluginInfo"))) return false;
var info=o;
return this.remove$O$Class$Z(info, info.getPluginType$(), batch);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
