(function(){var P$=Clazz.newPackage("org.scijava.platform"),I$=[[0,'java.util.Collections']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultAppEventService", null, 'org.scijava.service.AbstractService', 'org.scijava.platform.AppEventService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['appService','org.scijava.app.AppService']]]

Clazz.newMeth(C$, 'about$', function () {
this.appService.getApp$().about$();
});

Clazz.newMeth(C$, 'prefs$', function () {
this.appService.getApp$().prefs$();
});

Clazz.newMeth(C$, 'quit$', function () {
this.appService.getApp$().quit$();
});

Clazz.newMeth(C$, 'getCommands$', function () {
return $I$(1).emptyList$();
});

Clazz.newMeth(C$, 'onEvent$org_scijava_platform_event_AppAboutEvent', function (event) {
this.about$();
});

Clazz.newMeth(C$, 'onEvent$org_scijava_platform_event_AppPreferencesEvent', function (event) {
this.prefs$();
});

Clazz.newMeth(C$, 'onEvent$org_scijava_platform_event_AppQuitEvent', function (event) {
this.quit$();
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.platform.DefaultAppEventService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" priority="-100.0" ']],
  [['appService','org.scijava.app.AppService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
