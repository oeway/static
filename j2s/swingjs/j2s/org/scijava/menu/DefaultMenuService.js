(function(){var P$=Clazz.newPackage("org.scijava.menu"),p$1={},I$=[[0,'java.util.HashMap','java.util.ArrayList','org.scijava.menu.ShadowMenu']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultMenuService", null, 'org.scijava.service.AbstractService', 'org.scijava.menu.MenuService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['eventService','org.scijava.event.EventService','moduleService','org.scijava.module.ModuleService','rootMenus','java.util.HashMap']]]

Clazz.newMeth(C$, 'getMenu$S', function (menuRoot) {
return p$1.rootMenus.apply(this, []).get$O(menuRoot);
});

Clazz.newMeth(C$, 'onEvent$org_scijava_module_event_ModulesAddedEvent', function (event) {
if (this.rootMenus == null ) return;
p$1.addModules$java_util_Collection.apply(this, [event.getItems$()]);
});

Clazz.newMeth(C$, 'onEvent$org_scijava_module_event_ModulesRemovedEvent', function (event) {
if (this.rootMenus == null ) return;
for (var menu, $menu = p$1.rootMenus.apply(this, []).values$().iterator$(); $menu.hasNext$()&&((menu=($menu.next$())),1);) {
menu.removeAll$java_util_Collection(event.getItems$());
}
});

Clazz.newMeth(C$, 'onEvent$org_scijava_module_event_ModulesUpdatedEvent', function (event) {
if (this.rootMenus == null ) return;
for (var menu, $menu = p$1.rootMenus.apply(this, []).values$().iterator$(); $menu.hasNext$()&&((menu=($menu.next$())),1);) {
menu.updateAll$java_util_Collection(event.getItems$());
}
});

Clazz.newMeth(C$, 'addModules$java_util_Collection', function (items) {
p$1.addModules$java_util_Collection$java_util_Map.apply(this, [items, p$1.rootMenus.apply(this, [])]);
}, p$1);

Clazz.newMeth(C$, 'addModules$java_util_Collection$java_util_Map', function (items, rootMenu) {
var modulesByMenuRoot=Clazz.new_(1,{K:"String",V:"java.util.ArrayList"},$I$(1,1));
for (var info, $info = items.iterator$(); $info.hasNext$()&&((info=($info.next$())),1);) {
var menuRoot=info.getMenuRoot$();
var modules=modulesByMenuRoot.get$O(menuRoot);
if (modules == null ) {
modules=Clazz.new_(1,{E:"org.scijava.module.ModuleInfo"},$I$(2,1));
modulesByMenuRoot.put$TK$TV(menuRoot, modules);
}modules.add$TE(info);
}
for (var menuRoot, $menuRoot = modulesByMenuRoot.keySet$().iterator$(); $menuRoot.hasNext$()&&((menuRoot=($menuRoot.next$())),1);) {
var modules=modulesByMenuRoot.get$O(menuRoot);
var menu=rootMenu.get$O(menuRoot);
if (menu == null ) {
menu=Clazz.new_($I$(3,1).c$$org_scijava_Context$java_util_Collection,[this.getContext$(), modules]);
rootMenu.put$TK$TV(menuRoot, menu);
} else {
menu.addAll$java_util_Collection(modules);
}}
}, p$1);

Clazz.newMeth(C$, 'rootMenus', function () {
if (this.rootMenus == null ) p$1.initRootMenus.apply(this, []);
return this.rootMenus;
}, p$1);

Clazz.newMeth(C$, 'initRootMenus', function () {
if (this.rootMenus != null ) return;
var map=Clazz.new_(1,{K:"String",V:"org.scijava.menu.ShadowMenu"},$I$(1,1));
var allModules=this.moduleService.getModules$();
p$1.addModules$java_util_Collection$java_util_Map.apply(this, [allModules, map]);
this.rootMenus=map;
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.menu.DefaultMenuService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['eventService','org.scijava.event.EventService',null,['org.scijava.plugin.Parameter']],['']],
  [['moduleService','org.scijava.module.ModuleService',null,['org.scijava.plugin.Parameter']],['']],
  [['M:onEvent','void','onEvent$org_scijava_module_event_ModulesAddedEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$org_scijava_module_event_ModulesRemovedEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$org_scijava_module_event_ModulesUpdatedEvent',['org.scijava.event.EventHandler']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:26 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
