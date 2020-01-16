(function(){var P$=Clazz.newPackage("org.scijava.app"),p$1={},I$=[[0,'java.util.HashMap','java.util.Collections']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultAppService", null, 'org.scijava.plugin.AbstractSingletonService', 'org.scijava.app.AppService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['$log','org.scijava.log.LogService','$pluginService','org.scijava.plugin.PluginService','apps','java.util.Map']]]

Clazz.newMeth(C$, 'getApp$S', function (name) {
return p$1.apps.apply(this, []).get$O(name);
});

Clazz.newMeth(C$, 'getApps$', function () {
return p$1.apps.apply(this, []);
});

Clazz.newMeth(C$, 'onEvent$org_scijava_platform_event_AppAboutEvent', function (event) {
this.getApp$().about$();
});

Clazz.newMeth(C$, 'onEvent$org_scijava_platform_event_AppPreferencesEvent', function (event) {
this.getApp$().prefs$();
});

Clazz.newMeth(C$, 'onEvent$org_scijava_platform_event_AppQuitEvent', function (event) {
this.getApp$().quit$();
});

Clazz.newMeth(C$, 'apps', function () {
if (this.apps == null ) p$1.initApps.apply(this, []);
return this.apps;
}, p$1);

Clazz.newMeth(C$, 'initApps', function () {
if (this.apps != null ) return;
var map=Clazz.new_(1,{K:"String",V:"org.scijava.app.App"},$I$(1,1));
for (var app, $app = this.getInstances$().iterator$(); $app.hasNext$()&&((app=($app.next$())),1);) {
var name=app.getInfo$().getName$();
if (!map.containsKey$O(name)) {
map.put$TK$TV(name, app);
}}
this.apps=$I$(2).unmodifiableMap$java_util_Map(map);
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.app.DefaultAppService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['$log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']],
  [['$pluginService','org.scijava.plugin.PluginService',null,['org.scijava.plugin.Parameter']],['']],
  [['M:onEvent','void','onEvent$org_scijava_platform_event_AppAboutEvent',['org.scijava.event.EventHandler']],['key="org.scijava.app.AppService#about" ']],
  [['M:onEvent','.','onEvent$org_scijava_platform_event_AppPreferencesEvent',['org.scijava.event.EventHandler']],['key="org.scijava.app.AppService#prefs" ']],
  [['M:onEvent','.','onEvent$org_scijava_platform_event_AppQuitEvent',['org.scijava.event.EventHandler']],['key="org.scijava.app.AppService#quit" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:22 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
