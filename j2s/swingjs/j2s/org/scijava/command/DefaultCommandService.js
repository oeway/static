(function(){var P$=Clazz.newPackage("org.scijava.command"),p$1={},I$=[[0,'org.scijava.command.Command','org.scijava.util.ListUtils','java.util.HashMap','java.util.ArrayList','org.scijava.command.CommandInfo','org.scijava.module.Module']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultCommandService", null, 'org.scijava.plugin.AbstractPTService', 'org.scijava.command.CommandService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['log','org.scijava.log.LogService','eventService','org.scijava.event.EventService','$pluginService','org.scijava.plugin.PluginService','moduleService','org.scijava.module.ModuleService','commandMap','java.util.HashMap']]]

Clazz.newMeth(C$, 'eventService$', function () {
return this.eventService;
});

Clazz.newMeth(C$, 'pluginService$', function () {
return this.$pluginService;
});

Clazz.newMeth(C$, 'moduleService$', function () {
return this.moduleService;
});

Clazz.newMeth(C$, 'getCommands$', function () {
return this.getCommandsOfType$Class(Clazz.getClass($I$(1),[]));
});

Clazz.newMeth(C$, 'getCommands$java_util_List', function (plugins) {
var commands=p$1.getCommandsUnknown$java_util_List.apply(this, [p$1.downcast$java_util_List.apply(this, [plugins])]);
return commands;
});

Clazz.newMeth(C$, 'getCommandsOfType$Class', function (type) {
return this.getCommands$java_util_List(this.$pluginService.getPluginsOfType$Class(type));
});

Clazz.newMeth(C$, 'getCommand$Class', function (commandClass) {
return $I$(2).first$java_util_List(this.getCommandsOfClass$Class(commandClass));
});

Clazz.newMeth(C$, 'getCommand$S', function (className) {
return $I$(2).first$java_util_List(this.getCommandsOfClass$S(className));
});

Clazz.newMeth(C$, 'getCommandsOfClass$Class', function (commandClass) {
var plugins=this.$pluginService.getPluginsOfClass$Class$Class(commandClass, Clazz.getClass($I$(1),[]));
var commands=this.getCommands$java_util_List(plugins);
return commands;
});

Clazz.newMeth(C$, 'getCommandsOfClass$S', function (className) {
var plugins=this.$pluginService.getPluginsOfClass$S(className);
var commands=p$1.getCommandsUnknown$java_util_List.apply(this, [p$1.downcast$java_util_List.apply(this, [plugins])]);
return commands;
});

Clazz.newMeth(C$, 'run$S$Z$OA', function (className, process, inputs) {
return this.run$org_scijava_command_CommandInfo$Z$OA(p$1.getOrCreate$S.apply(this, [className]), process, inputs);
});

Clazz.newMeth(C$, 'run$S$Z$java_util_Map', function (className, process, inputMap) {
return this.run$org_scijava_command_CommandInfo$Z$java_util_Map(p$1.getOrCreate$S.apply(this, [className]), process, inputMap);
});

Clazz.newMeth(C$, 'run$Class$Z$OA', function (commandClass, process, inputs) {
return this.run$org_scijava_command_CommandInfo$Z$OA(p$1.getOrCreate$Class.apply(this, [commandClass]), process, inputs);
});

Clazz.newMeth(C$, 'run$Class$Z$java_util_Map', function (commandClass, process, inputMap) {
return this.run$org_scijava_command_CommandInfo$Z$java_util_Map(p$1.getOrCreate$Class.apply(this, [commandClass]), process, inputMap);
});

Clazz.newMeth(C$, 'run$org_scijava_command_CommandInfo$Z$OA', function (info, process, inputs) {
var future=this.moduleService.run$org_scijava_module_ModuleInfo$Z$OA(info, process, inputs);
return p$1.validateFuture$java_util_concurrent_Future$org_scijava_command_CommandInfo.apply(this, [future, info]);
});

Clazz.newMeth(C$, 'run$org_scijava_command_CommandInfo$Z$java_util_Map', function (info, process, inputMap) {
var future=this.moduleService.run$org_scijava_module_ModuleInfo$Z$java_util_Map(info, process, inputMap);
return p$1.validateFuture$java_util_concurrent_Future$org_scijava_command_CommandInfo.apply(this, [future, info]);
});

Clazz.newMeth(C$, 'getPluginType$', function () {
return Clazz.getClass($I$(1),[]);
});

Clazz.newMeth(C$, 'initialize$', function () {
this.commandMap=Clazz.new_(1,{K:"org.scijava.plugin.PluginInfo",V:"org.scijava.command.CommandInfo"},$I$(3,1));
var plugins=this.$pluginService.getPluginsOfType$Class(Clazz.getClass($I$(1),[]));
p$1.addCommands$java_util_List.apply(this, [plugins]);
});

Clazz.newMeth(C$, 'onEvent$org_scijava_plugin_event_PluginsRemovedEvent', function (event) {
p$1.removeCommands$java_util_List.apply(this, [event.getItems$()]);
});

Clazz.newMeth(C$, 'onEvent$org_scijava_plugin_event_PluginsAddedEvent', function (event) {
var commands=Clazz.new_(1,{E:"org.scijava.plugin.PluginInfo"},$I$(4,1));
p$1.findCommandPlugins$java_util_List$java_util_List.apply(this, [event.getItems$(), commands]);
p$1.addCommands$java_util_List.apply(this, [commands]);
});

Clazz.newMeth(C$, 'getOrCreate$S', function (className) {
var command=this.getCommand$S(className);
if (command != null ) return command;
return Clazz.new_($I$(5,1).c$$S,[className]);
}, p$1);

Clazz.newMeth(C$, 'getOrCreate$Class', function (commandClass) {
var command=this.getCommand$Class(commandClass);
if (command != null ) return command;
return Clazz.new_($I$(5,1).c$$Class,[commandClass]);
}, p$1);

Clazz.newMeth(C$, 'addCommands$java_util_List', function (plugins) {
var commands=Clazz.new_(1,{E:"org.scijava.command.CommandInfo"},$I$(4,1));
for (var info, $info = plugins.iterator$(); $info.hasNext$()&&((info=($info.next$())),1);) {
var commandInfo=p$1.wrapAsCommand$org_scijava_plugin_PluginInfo.apply(this, [info]);
commands.add$TE(commandInfo);
this.commandMap.put$TK$TV(info, commandInfo);
}
this.moduleService.addModules$java_util_Collection(commands);
}, p$1);

Clazz.newMeth(C$, 'removeCommands$java_util_List', function (plugins) {
var commands=p$1.getCommandsUnknown$java_util_List.apply(this, [plugins]);
for (var info, $info = commands.iterator$(); $info.hasNext$()&&((info=($info.next$())),1);) {
this.commandMap.remove$O(info);
}
this.moduleService.removeModules$java_util_Collection(commands);
}, p$1);

Clazz.newMeth(C$, 'getCommandsUnknown$java_util_List', function (plugins) {
var commands=Clazz.new_(1,{E:"org.scijava.command.CommandInfo"},$I$(4,1));
for (var info, $info = plugins.iterator$(); $info.hasNext$()&&((info=($info.next$())),1);) {
var commandInfo=this.commandMap.get$O(info);
if (commandInfo == null ) continue;
commands.add$TE(commandInfo);
}
return commands;
}, p$1);

Clazz.newMeth(C$, 'findCommandPlugins$java_util_List$java_util_List', function (srcList, destList) {
for (var info, $info = srcList.iterator$(); $info.hasNext$()&&((info=($info.next$())),1);) {
if (p$1.isCommand$org_scijava_plugin_PluginInfo.apply(this, [info])) {
var match=info;
destList.add$TE(match);
}}
}, p$1);

Clazz.newMeth(C$, 'isCommand$org_scijava_plugin_PluginInfo', function (info) {
return Clazz.getClass($I$(1),[]).isAssignableFrom$Class(info.getPluginType$());
}, p$1);

Clazz.newMeth(C$, 'wrapAsCommand$org_scijava_plugin_PluginInfo', function (pluginInfo) {
if (Clazz.instanceOf(pluginInfo, "org.scijava.command.CommandInfo")) {
return pluginInfo;
}System.out.println$S("DefaultCommandService wrapping " + pluginInfo);
return Clazz.new_($I$(5,1).c$$org_scijava_plugin_PluginInfo,[pluginInfo]);
}, p$1);

Clazz.newMeth(C$, 'downcast$java_util_List', function (plugins) {
var typedPlugins=plugins;
return typedPlugins;
}, p$1);

Clazz.newMeth(C$, 'validateFuture$java_util_concurrent_Future$org_scijava_command_CommandInfo', function (future, info) {
try {
var commandClass=info.loadDelegateClass$();
if (Clazz.getClass($I$(6),['cancel$','getDelegateObject$','getInfo$','getInput$S','getInputs$','getOutput$S','getOutputs$','initialize$','isInputResolved$S','isOutputResolved$S','isResolved$S','preview$','resolveInput$S','resolveOutput$S','setInput$S$O','setInputs$java_util_Map','setOutput$S$O','setOutputs$java_util_Map','setResolved$S$Z','unresolveInput$S','unresolveOutput$S']).isAssignableFrom$Class(commandClass)) {
this.log.debug$O("The command '" + info.getIdentifier$() + "' extends Module directly. Due to a design flaw in the " + "CommandService API, the result cannot be coerced to a " + "Future<CommandModule>, so null will be returned instead. " + "If you need the resulting module, please instead call " + "moduleService.run(commandService.getCommand(commandClass), ...)." );
return null;
}} catch (exc) {
if (Clazz.exceptionOf(exc,"ClassNotFoundException")){
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S$Throwable,["Command class unavailable: " + info.getDelegateClassName$(), exc]);
} else {
throw exc;
}
}
var result=future;
return result;
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.command.DefaultCommandService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']],
  [['eventService','org.scijava.event.EventService',null,['org.scijava.plugin.Parameter']],['']],
  [['$pluginService','org.scijava.plugin.PluginService',null,['org.scijava.plugin.Parameter']],['']],
  [['moduleService','org.scijava.module.ModuleService',null,['org.scijava.plugin.Parameter']],['']],
  [['M:onEvent','void','onEvent$org_scijava_plugin_event_PluginsRemovedEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$org_scijava_plugin_event_PluginsAddedEvent',['org.scijava.event.EventHandler']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:22 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
