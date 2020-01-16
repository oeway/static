(function(){var P$=Clazz.newPackage("org.scijava.io"),p$1={},I$=[[0,'org.scijava.io.RecentFileService','java.util.Collections','java.util.HashMap','org.scijava.command.CommandInfo','org.scijava.MenuPath','org.scijava.MenuEntry','org.scijava.util.FileUtils']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultRecentFileService", null, 'org.scijava.service.AbstractService', 'org.scijava.io.RecentFileService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['eventService','org.scijava.event.EventService','moduleService','org.scijava.module.ModuleService','commandService','org.scijava.command.CommandService','prefService','org.scijava.prefs.PrefService','recentFiles','java.util.List','recentModules','java.util.Map']]]

Clazz.newMeth(C$, 'add$S', function (path) {
var present=this.recentModules.containsKey$O(path);
if (present) this.recentFiles.remove$O(path);
this.recentFiles.add$TE(path);
p$1.saveList.apply(this, []);
if (present) {
var info=this.recentModules.get$O(path);
info.update$org_scijava_event_EventService(this.eventService);
} else {
var info=p$1.createInfo$S.apply(this, [path]);
this.recentModules.put$TK$TV(path, info);
this.moduleService.addModule$org_scijava_module_ModuleInfo(info);
}});

Clazz.newMeth(C$, 'remove$S', function (path) {
var success=this.recentFiles.remove$O(path);
p$1.saveList.apply(this, []);
var info=this.recentModules.remove$O(path);
if (info != null ) this.moduleService.removeModule$org_scijava_module_ModuleInfo(info);
return success;
});

Clazz.newMeth(C$, 'clear$', function () {
this.recentFiles.clear$();
this.prefService.clear$Class$S(Clazz.getClass($I$(1),['add$S','clear$','getRecentFiles$','remove$S']), "recentfiles");
this.moduleService.removeModules$java_util_Collection(this.recentModules.values$());
this.recentModules.clear$();
});

Clazz.newMeth(C$, 'getRecentFiles$', function () {
return $I$(2).unmodifiableList$java_util_List(this.recentFiles);
});

Clazz.newMeth(C$, 'initialize$', function () {
p$1.loadList.apply(this, []);
this.recentModules=Clazz.new_(1,{K:"String",V:"org.scijava.module.ModuleInfo"},$I$(3,1));
for (var path, $path = this.recentFiles.iterator$(); $path.hasNext$()&&((path=($path.next$())),1);) {
this.recentModules.put$TK$TV(path, p$1.createInfo$S.apply(this, [path]));
}
this.moduleService.addModules$java_util_Collection(this.recentModules.values$());
});

Clazz.newMeth(C$, 'onEvent$org_scijava_io_event_IOEvent', function (event) {
this.add$S(event.getDescriptor$());
});

Clazz.newMeth(C$, 'loadList', function () {
this.recentFiles=this.prefService.getList$Class$S(Clazz.getClass($I$(1),['add$S','clear$','getRecentFiles$','remove$S']), "recentfiles");
}, p$1);

Clazz.newMeth(C$, 'saveList', function () {
this.prefService.putList$Class$java_util_List$S(Clazz.getClass($I$(1),['add$S','clear$','getRecentFiles$','remove$S']), this.recentFiles, "recentfiles");
}, p$1);

Clazz.newMeth(C$, 'createInfo$S', function (path) {
var commandClassName="org.scijava.plugins.commands.io.OpenFile";
var info=Clazz.new_($I$(4,1).c$$S,["org.scijava.plugins.commands.io.OpenFile"]);
var presets=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(3,1));
presets.put$TK$TV("inputFile", path);
info.setPresets$java_util_Map(presets);
var menuPath=Clazz.new_($I$(5,1));
menuPath.add$TE(Clazz.new_($I$(6,1).c$$S,["File"]));
menuPath.add$TE(Clazz.new_($I$(6,1).c$$S,["Open Recent"]));
var leaf=Clazz.new_($I$(6,1).c$$S,[p$1.shortPath$S.apply(this, [path])]);
menuPath.add$TE(leaf);
info.setMenuPath$org_scijava_MenuPath(menuPath);
leaf.setWeight$D(0);
var fileOpen=this.commandService.getCommand$S("org.scijava.plugins.commands.io.OpenFile");
if (fileOpen != null ) {
var iconPath=fileOpen.getIconPath$();
info.setIconPath$S(iconPath);
}return info;
}, p$1);

Clazz.newMeth(C$, 'shortPath$S', function (path) {
return $I$(7).limitPath$S$I(path, 40);
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.io.DefaultRecentFileService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['eventService','org.scijava.event.EventService',null,['org.scijava.plugin.Parameter']],['']],
  [['moduleService','org.scijava.module.ModuleService',null,['org.scijava.plugin.Parameter']],['']],
  [['commandService','org.scijava.command.CommandService',null,['org.scijava.plugin.Parameter']],['']],
  [['prefService','org.scijava.prefs.PrefService',null,['org.scijava.plugin.Parameter']],['']],
  [['M:onEvent','void','onEvent$org_scijava_io_event_IOEvent',['org.scijava.event.EventHandler']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:25 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
