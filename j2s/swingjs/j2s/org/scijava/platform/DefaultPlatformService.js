(function(){var P$=Clazz.newPackage("org.scijava.platform"),I$=[[0,'Runtime','org.scijava.platform.Platform','java.util.Collections']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultPlatformService", null, 'org.scijava.plugin.AbstractSingletonService', 'org.scijava.platform.PlatformService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['$log','org.scijava.log.LogService','eventService','org.scijava.event.EventService','commandService','org.scijava.command.CommandService','appEventService','org.scijava.platform.AppEventService','targetPlatforms','java.util.List']]]

Clazz.newMeth(C$, 'eventService$', function () {
return this.eventService;
});

Clazz.newMeth(C$, 'commandService$', function () {
return this.commandService;
});

Clazz.newMeth(C$, 'getAppEventService$', function () {
return this.appEventService;
});

Clazz.newMeth(C$, 'getTargetPlatforms$', function () {
return this.targetPlatforms;
});

Clazz.newMeth(C$, 'open$java_net_URL', function (url) {
var exception=null;
for (var platform, $platform = this.getTargetPlatforms$().iterator$(); $platform.hasNext$()&&((platform=($platform.next$())),1);) {
try {
platform.open$java_net_URL(url);
return;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
if (exception == null ) exception=e;
} else {
throw e;
}
}
}
if (exception != null ) throw exception;
this.$log.error$O("Could not find a browser; URL=" + url);
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["No browser found"]);
});

Clazz.newMeth(C$, 'exec$SA', function (args) {
var process=$I$(1).getRuntime$().exec$SA(args);
try {
process.waitFor$();
return process.exitValue$();
} catch (ie) {
if (Clazz.exceptionOf(ie,"InterruptedException")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["InterruptedException during execution: " + ie.getMessage$()]);
} else {
throw ie;
}
}
});

Clazz.newMeth(C$, 'registerAppMenus$O', function (menus) {
for (var platform, $platform = this.getTargetPlatforms$().iterator$(); $platform.hasNext$()&&((platform=($platform.next$())),1);) {
if (platform.registerAppMenus$O(menus)) return true;
}
return false;
});

Clazz.newMeth(C$, 'filterInstances$java_util_List', function (list) {
var iter=list.iterator$();
while (iter.hasNext$()){
if (!iter.next$().isTarget$()) {
iter.remove$();
}}
return list;
});

Clazz.newMeth(C$, 'getPluginType$', function () {
return Clazz.getClass($I$(2),['configure$org_scijava_platform_PlatformService','isTarget$','javaVendor$','javaVersion$','open$java_net_URL','osArch$','osName$','osVersion$','registerAppMenus$O']);
});

Clazz.newMeth(C$, 'initialize$', function () {
C$.superclazz.prototype.initialize$.apply(this, []);
var platforms=this.getInstances$();
this.targetPlatforms=$I$(3).unmodifiableList$java_util_List(platforms);
for (var platform, $platform = platforms.iterator$(); $platform.hasNext$()&&((platform=($platform.next$())),1);) {
this.$log.debug$O("Configuring platform: " + platform.getClass$().getName$());
platform.configure$org_scijava_platform_PlatformService(this);
}
if (platforms.size$() == 0) this.$log.debug$O("No platforms to configure.");
});

Clazz.newMeth(C$, 'dispose$', function () {
for (var p, $p = this.targetPlatforms.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
p.dispose$();
}
});

Clazz.newMeth(C$, 'onEvent$org_scijava_platform_event_AppMenusCreatedEvent', function (event) {
if (this.registerAppMenus$O(event.getMenus$())) event.consume$();
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.platform.DefaultPlatformService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['$log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']],
  [['eventService','org.scijava.event.EventService',null,['org.scijava.plugin.Parameter']],['']],
  [['commandService','org.scijava.command.CommandService',null,['org.scijava.plugin.Parameter']],['']],
  [['appEventService','org.scijava.platform.AppEventService',null,['org.scijava.plugin.Parameter']],['']],
  [['M:onEvent','void','onEvent$org_scijava_platform_event_AppMenusCreatedEvent',['org.scijava.event.EventHandler']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
