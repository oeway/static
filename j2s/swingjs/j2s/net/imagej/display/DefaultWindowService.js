(function(){var P$=Clazz.newPackage("net.imagej.display"),p$1={},I$=[[0,'java.util.Collections','java.util.ArrayList','java.util.HashMap','org.scijava.command.CommandInfo','net.imagej.display.SelectWindow','org.scijava.MenuPath','org.scijava.MenuEntry']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultWindowService", null, 'org.scijava.service.AbstractService', 'net.imagej.display.WindowService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.order=1000;
}, 1);

C$.$fields$=[['I',['order'],'O',['menuService','org.scijava.menu.MenuService','moduleService','org.scijava.module.ModuleService','eventService','org.scijava.event.EventService','openWindows','java.util.List','windowModules','java.util.Map']]]

Clazz.newMeth(C$, 'getMenuService$', function () {
return this.menuService;
});

Clazz.newMeth(C$, 'getModuleService$', function () {
return this.moduleService;
});

Clazz.newMeth(C$, 'getEventService$', function () {
return this.eventService;
});

Clazz.newMeth(C$, 'add$S', function (displayName) {
var info=this.windowModules.get$O(displayName);
if (info != null ) {
p$1.updateInfo$S.apply(this, [displayName]);
} else {
this.windowModules.put$TK$TV(displayName, p$1.createInfo$S.apply(this, [displayName]));
this.openWindows.add$TE(displayName);
}});

Clazz.newMeth(C$, 'remove$S', function (displayName) {
var info=this.windowModules.remove$O(displayName);
if (info != null ) {
this.moduleService.removeModule$org_scijava_module_ModuleInfo(info);
}return this.openWindows.remove$O(displayName);
});

Clazz.newMeth(C$, 'clear$', function () {
this.openWindows.clear$();
this.moduleService.removeModules$java_util_Collection(this.windowModules.values$());
this.windowModules.clear$();
});

Clazz.newMeth(C$, 'getOpenWindows$', function () {
return $I$(1).unmodifiableList$java_util_List(this.openWindows);
});

Clazz.newMeth(C$, 'initialize$', function () {
this.openWindows=Clazz.new_(1,{E:"String"},$I$(2,1));
this.windowModules=Clazz.new_(1,{K:"String",V:"org.scijava.module.ModuleInfo"},$I$(3,1));
});

Clazz.newMeth(C$, 'onEvent$org_scijava_display_event_DisplayCreatedEvent', function (event) {
var display=event.getObject$();
this.add$S(display.getName$());
});

Clazz.newMeth(C$, 'onEvent$org_scijava_display_event_DisplayActivatedEvent', function (event) {
var display=event.getDisplay$();
});

Clazz.newMeth(C$, 'onEvent$org_scijava_display_event_DisplayDeletedEvent', function (event) {
var display=event.getObject$();
this.remove$S(display.getName$());
});

Clazz.newMeth(C$, 'createInfo$S', function (displayName) {
var info=Clazz.new_($I$(4,1).c$$S,[Clazz.getClass($I$(5)).getName$()]);
var presets=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(3,1));
presets.put$TK$TV("displayToSelect", displayName);
info.setPresets$java_util_Map(presets);
var menuPath=Clazz.new_($I$(6,1));
menuPath.add$TE(Clazz.new_($I$(7,1).c$$S,["Window"]));
var leaf=Clazz.new_($I$(7,1).c$$S,[p$1.shortPath$S.apply(this, [displayName])]);
menuPath.add$TE(leaf);
info.setMenuPath$org_scijava_MenuPath(menuPath);
leaf.setWeight$D(this.order++);
this.moduleService.addModule$org_scijava_module_ModuleInfo(info);
return info;
}, p$1);

Clazz.newMeth(C$, 'updateInfo$S', function (path) {
var info=this.windowModules.get$O(path);
info.update$org_scijava_event_EventService(this.eventService);
}, p$1);

Clazz.newMeth(C$, 'shortPath$S', function (path) {
var newPath=path;
if (path != null  && path.length$() > 39 ) {
newPath=path.substring$I$I(0, 10);
newPath += "...";
var p=path.length$() - 26 - 1 ;
newPath += path.substring$I$I(p, p + 26);
}return newPath;
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.display.DefaultWindowService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['menuService','org.scijava.menu.MenuService',null,['org.scijava.plugin.Parameter']],['']],
  [['moduleService','org.scijava.module.ModuleService',null,['org.scijava.plugin.Parameter']],['']],
  [['eventService','org.scijava.event.EventService',null,['org.scijava.plugin.Parameter']],['']],
  [['M:onEvent','void','onEvent$org_scijava_display_event_DisplayCreatedEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$org_scijava_display_event_DisplayActivatedEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$org_scijava_display_event_DisplayDeletedEvent',['org.scijava.event.EventHandler']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:59 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
