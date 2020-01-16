(function(){var P$=Clazz.newPackage("org.scijava.display"),I$=[[0,'java.util.LinkedList','org.scijava.display.event.DisplayActivatedEvent','org.scijava.display.Display','java.util.ArrayList','org.scijava.display.event.DisplayCreatedEvent']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultDisplayService", null, 'org.scijava.service.AbstractService', 'org.scijava.display.DisplayService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.displayList=Clazz.new_(1,{E:"org.scijava.display.Display"},$I$(1,1));
}, 1);

C$.$fields$=[['O',['log','org.scijava.log.LogService','eventService','org.scijava.event.EventService','objectService','org.scijava.object.ObjectService','pluginService','org.scijava.plugin.PluginService','displayList','java.util.LinkedList']]]

Clazz.newMeth(C$, 'eventService$', function () {
return this.eventService;
});

Clazz.newMeth(C$, 'objectService$', function () {
return this.objectService;
});

Clazz.newMeth(C$, 'pluginService$', function () {
return this.pluginService;
});

Clazz.newMeth(C$, 'getActiveDisplay$', function () {
if (this.displayList.size$() == 0) return null;
return this.displayList.get$I(0);
});

Clazz.newMeth(C$, 'getActiveDisplay$Class', function (displayClass) {
for (var disp, $disp = this.displayList.iterator$(); $disp.hasNext$()&&((disp=($disp.next$())),1);) {
if (displayClass.isAssignableFrom$Class(disp.getClass$())) return disp;
}
return null;
});

Clazz.newMeth(C$, 'setActiveDisplay$org_scijava_display_Display', function (display) {
if (display != null ) {
this.displayList.remove$O(display);
this.displayList.addFirst$TE(display);
this.eventService.publish$TE(Clazz.new_($I$(2,1).c$$org_scijava_display_Display,[display]));
}});

Clazz.newMeth(C$, 'getDisplayPlugins$', function () {
return this.pluginService.getPluginsOfType$Class(Clazz.getClass($I$(3),['canDisplay$Class','canDisplay$O','close$','display$O','isDisplaying$O','update$']));
});

Clazz.newMeth(C$, 'getDisplayPlugin$Class', function (pluginClass) {
var displayPlugin=this.pluginService.getPlugin$Class$Class(pluginClass, Clazz.getClass($I$(3),['canDisplay$Class','canDisplay$O','close$','display$O','isDisplaying$O','update$']));
return displayPlugin;
});

Clazz.newMeth(C$, 'getDisplayPlugin$S', function (className) {
return this.pluginService.getPlugin$S(className);
});

Clazz.newMeth(C$, 'getDisplayPluginsOfType$Class', function (type) {
return this.pluginService.getPluginsOfType$Class(type);
});

Clazz.newMeth(C$, 'getDisplays$', function () {
return this.objectService.getObjects$Class(Clazz.getClass($I$(3),['canDisplay$Class','canDisplay$O','close$','display$O','isDisplaying$O','update$']));
});

Clazz.newMeth(C$, 'getDisplaysOfType$Class', function (type) {
return this.objectService.getObjects$Class(type);
});

Clazz.newMeth(C$, 'getDisplay$S', function (name) {
for (var display, $display = this.getDisplays$().iterator$(); $display.hasNext$()&&((display=($display.next$())),1);) {
if (name.equalsIgnoreCase$S(display.getName$())) {
return display;
}}
return null;
});

Clazz.newMeth(C$, 'getDisplays$O', function (o) {
var displays=Clazz.new_(1,{E:"org.scijava.display.Display"},$I$(4,1));
for (var display, $display = this.getDisplays$().iterator$(); $display.hasNext$()&&((display=($display.next$())),1);) {
if (display.isDisplaying$O(o)) displays.add$TE(display);
}
return displays;
});

Clazz.newMeth(C$, 'isUniqueName$S', function (name) {
for (var display, $display = this.getDisplays$().iterator$(); $display.hasNext$()&&((display=($display.next$())),1);) {
if (name.equalsIgnoreCase$S(display.getName$())) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'createDisplay$O', function (o) {
return this.createDisplay$S$O(null, o);
});

Clazz.newMeth(C$, 'createDisplay$S$O', function (name, o) {
var display=this.createDisplayQuietly$O(o);
if (display == null ) return null;
if (name != null ) display.setName$S(name);
this.eventService.publish$TE(Clazz.new_($I$(5,1).c$$org_scijava_display_Display,[display]));
return display;
});

Clazz.newMeth(C$, 'createDisplayQuietly$O', function (o) {
var displayPlugins=this.getDisplayPlugins$();
for (var info, $info = displayPlugins.iterator$(); $info.hasNext$()&&((info=($info.next$())),1);) {
var display=this.pluginService.createInstance$org_scijava_plugin_PluginInfo(info);
if (display == null ) continue;
if (display.canDisplay$O(o)) {
display.display$O(o);
return display;
}}
return null;
});

Clazz.newMeth(C$, 'onEvent$org_scijava_display_event_window_WinClosedEvent', function (event) {
var display=event.getDisplay$();
if (display != null ) display.close$();
});

Clazz.newMeth(C$, 'onEvent$org_scijava_display_event_window_WinActivatedEvent', function (event) {
var display=event.getDisplay$();
if (display != null ) this.setActiveDisplay$org_scijava_display_Display(display);
});

Clazz.newMeth(C$, 'onEvent$org_scijava_display_event_DisplayDeletedEvent', function (evt) {
this.displayList.remove$O(evt.getObject$());
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.display.DefaultDisplayService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']],
  [['eventService','org.scijava.event.EventService',null,['org.scijava.plugin.Parameter']],['']],
  [['objectService','org.scijava.object.ObjectService',null,['org.scijava.plugin.Parameter']],['']],
  [['pluginService','org.scijava.plugin.PluginService',null,['org.scijava.plugin.Parameter']],['']],
  [['M:onEvent','void','onEvent$org_scijava_display_event_window_WinClosedEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$org_scijava_display_event_window_WinActivatedEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$org_scijava_display_event_DisplayDeletedEvent',['org.scijava.event.EventHandler']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:24 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
