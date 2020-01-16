(function(){var P$=Clazz.newPackage("org.scijava"),I$=[[0,'org.scijava.platform.AppEventService','org.scijava.app.AppService','org.scijava.command.CommandService','org.scijava.console.ConsoleService','org.scijava.convert.ConvertService','org.scijava.display.DisplayService','org.scijava.event.EventHistory','org.scijava.event.EventService','org.scijava.tool.IconService','org.scijava.input.InputService','org.scijava.io.IOService','org.scijava.log.LogService','org.scijava.main.MainService','org.scijava.menu.MenuService','org.scijava.module.ModuleService','org.scijava.object.ObjectService','org.scijava.options.OptionsService','org.scijava.platform.PlatformService','org.scijava.plugin.PluginService','org.scijava.prefs.PrefService','org.scijava.io.RecentFileService','org.scijava.script.ScriptService','org.scijava.startup.StartupService','org.scijava.app.StatusService','org.scijava.text.TextService','org.scijava.thread.ThreadService','org.scijava.tool.ToolService','org.scijava.ui.UIService','org.scijava.widget.WidgetService']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractGateway", null, 'org.scijava.plugin.AbstractRichPlugin', 'org.scijava.Gateway');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['appName']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$S$org_scijava_Context.apply(this, ["SciJava", null]);
}, 1);

Clazz.newMeth(C$, 'c$$S$org_scijava_Context', function (appName, context) {
Clazz.super_(C$, this);
this.appName=appName;
if (context != null ) this.setContext$org_scijava_Context(context);
}, 1);

Clazz.newMeth(C$, 'launch$SA', function (args) {
this.console$().processArgs$SA(args);
var mainCount=this.main$().execMains$();
if (mainCount == 0) this.ui$().showUI$();
this.startup$().executeOperations$();
if (this.ui$().isHeadless$()) {
this.getContext$().dispose$();
}});

Clazz.newMeth(C$, 'getShortName$', function () {
return this.getClass$().getSimpleName$().toLowerCase$();
});

Clazz.newMeth(C$, 'get$Class', function (serviceClass) {
return this.context$().service$Class(serviceClass);
});

Clazz.newMeth(C$, 'get$S', function (serviceClassName) {
return this.context$().service$S(serviceClassName);
});

Clazz.newMeth(C$, 'appEvent$', function () {
return this.get$Class(Clazz.getClass($I$(1),['about$','getCommands$','prefs$','quit$']));
});

Clazz.newMeth(C$, 'app$', function () {
return this.get$Class(Clazz.getClass($I$(2),['getApp$','getApp$S','getApps$','getPluginType$']));
});

Clazz.newMeth(C$, 'command$', function () {
return this.get$Class(Clazz.getClass($I$(3),['eventService$','getCommand$Class','getCommand$S','getCommands$','getCommands$java_util_List','getCommandsOfClass$Class','getCommandsOfClass$S','getCommandsOfType$Class','getEventService$','getModuleService$','moduleService$','run$S$Z$OA','run$S$Z$java_util_Map','run$Class$Z$OA','run$Class$Z$java_util_Map','run$org_scijava_command_CommandInfo$Z$OA','run$org_scijava_command_CommandInfo$Z$java_util_Map']));
});

Clazz.newMeth(C$, 'console$', function () {
return this.get$Class(Clazz.getClass($I$(4),['addOutputListener$org_scijava_console_OutputListener','getPluginType$','getType$','notifyListeners$org_scijava_console_OutputEvent','processArgs$SA','removeOutputListener$org_scijava_console_OutputListener']));
});

Clazz.newMeth(C$, 'convert$', function () {
return this.get$Class(Clazz.getClass($I$(5),['convert$O$reflect_Type','convert$O$Class','convert$org_scijava_convert_ConversionRequest','getCompatibleInputClasses$Class','getCompatibleInputs$Class','getCompatibleOutputClasses$Class','getHandler$O$Class','getHandler$O$reflect_Type','getHandler$Class$Class','getHandler$Class$reflect_Type','supports$O$Class','supports$O$reflect_Type','supports$Class$Class','supports$Class$reflect_Type']));
});

Clazz.newMeth(C$, 'display$', function () {
return this.get$Class(Clazz.getClass($I$(6),['createDisplay$O','createDisplay$S$O','createDisplayQuietly$O','eventService$','getActiveDisplay$','getActiveDisplay$Class','getDisplay$S','getDisplayPlugin$Class','getDisplayPlugin$S','getDisplayPlugins$','getDisplayPluginsOfType$Class','getDisplays$','getDisplays$O','getDisplaysOfType$Class','getEventService$','getObjectService$','getPluginService$','isUniqueName$S','objectService$','pluginService$','setActiveDisplay$org_scijava_display_Display']));
});

Clazz.newMeth(C$, 'eventHistory$', function () {
return this.get$Class(Clazz.getClass($I$(7),['addListener$org_scijava_event_EventHistoryListener','clear$','isActive$','removeListener$org_scijava_event_EventHistoryListener','setActive$Z','toHTML$java_util_Set$java_util_Set']));
});

Clazz.newMeth(C$, 'event$', function () {
return this.get$Class(Clazz.getClass($I$(8),['getSubscribers$Class','publish$TE','publishLater$TE','subscribe$O','unsubscribe$java_util_Collection']));
});

Clazz.newMeth(C$, 'icon$', function () {
return this.get$Class(Clazz.getClass($I$(9),['acquireDrawer$org_scijava_tool_Tool']));
});

Clazz.newMeth(C$, 'input$', function () {
return this.get$Class(Clazz.getClass($I$(10),['eventService$','getDisplay$','getEventService$','getModifiers$','getX$','getY$','isAltDown$','isAltGrDown$','isButtonDown$I','isCtrlDown$','isKeyDown$org_scijava_input_KeyCode','isMetaDown$','isShiftDown$']));
});

Clazz.newMeth(C$, 'io$', function () {
return this.get$Class(Clazz.getClass($I$(11),['getOpener$S','getPluginType$','getSaver$TD$S','getType$','open$S','save$O$S']));
});

Clazz.newMeth(C$, 'log$', function () {
return this.get$Class(Clazz.getClass($I$(12),['setLevel$I','setLevel$S$I','setLevelForLogger$S$I']));
});

Clazz.newMeth(C$, 'main$', function () {
return this.get$Class(Clazz.getClass($I$(13),['addMain$S$SA','execMains$','getMains$']));
});

Clazz.newMeth(C$, 'menu$', function () {
return this.get$Class(Clazz.getClass($I$(14),['createMenus$org_scijava_menu_MenuCreator$TT','createMenus$S$org_scijava_menu_MenuCreator$TT','getMenu$','getMenu$S']));
});

Clazz.newMeth(C$, 'module$', function () {
return this.get$Class(Clazz.getClass($I$(15),['addModule$org_scijava_module_ModuleInfo','addModules$java_util_Collection','createModule$org_scijava_module_ModuleInfo','getDefaultValue$org_scijava_module_ModuleItem','getIndex$','getModuleById$S','getModuleForAccelerator$org_scijava_input_Accelerator','getModules$','getSingleInput$org_scijava_module_Module$Class','getSingleInput$org_scijava_module_Module$java_util_Collection','getSingleOutput$org_scijava_module_Module$Class','getSingleOutput$org_scijava_module_Module$java_util_Collection','load$org_scijava_module_ModuleItem','removeModule$org_scijava_module_ModuleInfo','removeModules$java_util_Collection','run$org_scijava_module_ModuleInfo$Z$OA','run$org_scijava_module_ModuleInfo$Z$java_util_Map','run$org_scijava_module_ModuleInfo$java_util_List$java_util_List$OA','run$org_scijava_module_ModuleInfo$java_util_List$java_util_List$java_util_Map','run$TM$Z$OA','run$TM$Z$java_util_Map','run$TM$java_util_List$java_util_List$OA','run$TM$java_util_List$java_util_List$java_util_Map','save$org_scijava_module_ModuleItem$TT','waitFor$java_util_concurrent_Future']));
});

Clazz.newMeth(C$, 'object$', function () {
return this.get$Class(Clazz.getClass($I$(16),['addObject$O','eventService$','getEventService$','getIndex$','getObjects$Class','removeObject$O']));
});

Clazz.newMeth(C$, 'options$', function () {
return this.get$Class(Clazz.getClass($I$(17),['getOptions$Class','getPluginType$','reset$']));
});

Clazz.newMeth(C$, 'platform$', function () {
return this.get$Class(Clazz.getClass($I$(18),['commandService$','eventService$','exec$SA','getAppEventService$','getCommandService$','getEventService$','getTargetPlatforms$','open$java_net_URL','registerAppMenus$O']));
});

Clazz.newMeth(C$, 'plugin$', function () {
return this.get$Class(Clazz.getClass($I$(19),['addPlugin$org_scijava_plugin_PluginInfo','addPlugins$java_util_Collection','createInstance$org_scijava_plugin_PluginInfo','createInstances$java_util_List','createInstancesOfType$Class','getIndex$','getPlugin$Class','getPlugin$Class$Class','getPlugin$S','getPlugins$','getPluginsOfClass$Class','getPluginsOfClass$Class$Class','getPluginsOfClass$S','getPluginsOfClass$S$Class','getPluginsOfType$Class','reloadPlugins$','removePlugin$org_scijava_plugin_PluginInfo','removePlugins$java_util_Collection','sort$java_util_List$Class']));
});

Clazz.newMeth(C$, 'prefs$', function () {
return this.get$Class(Clazz.getClass($I$(20),['clear$Class','clear$S','clear$S$S','clear$Class$S','clearAll$','get$Class$S','get$Class$S$S','get$S','get$S$S','getBoolean$Class$S$Z','getBoolean$S$Z','getDouble$Class$S$D','getDouble$S$D','getFloat$Class$S$F','getFloat$S$F','getInt$Class$S$I','getInt$S$I','getIterable$Class$S','getIterable$S','getList$Class$S','getList$Class','getList$S','getList$S$S','getLong$Class$S$J','getLong$S$J','getMap$Class$S','getMap$Class','getMap$S','getMap$S$S','put$Class$S$S','put$Class$S$Z','put$Class$S$D','put$Class$S$F','put$Class$S$I','put$Class$S$J','put$Class$S$java_util_Map','put$Class$S$Iterable','put$S$S','put$S$Z','put$S$D','put$S$F','put$S$I','put$S$J','putIterable$Class$Iterable$S','putIterable$Iterable$S','putList$Class$java_util_List$S','putList$Class$java_util_List','putList$java_util_List$S','putList$S$java_util_List$S','putList$S$java_util_List','putMap$Class$java_util_Map$S','putMap$Class$java_util_Map','putMap$java_util_Map$S','putMap$S$java_util_Map','putMap$S$java_util_Map$S','remove$Class$S','remove$S$S']));
});

Clazz.newMeth(C$, 'recentFile$', function () {
return this.get$Class(Clazz.getClass($I$(21),['add$S','clear$','getRecentFiles$','remove$S']));
});

Clazz.newMeth(C$, 'script$', function () {
return this.get$Class(Clazz.getClass($I$(22),['addAlias$Class','addAlias$S$Class','addScriptDirectory$java_io_File','addScriptDirectory$java_io_File$org_scijava_MenuPath','canHandleFile$java_io_File','canHandleFile$S','getAliases$','getIndex$','getLanguageByExtension$S','getLanguageByName$S','getLanguages$','getMenuPrefix$java_io_File','getPluginType$','getScript$java_io_File','getScriptDirectories$','getScripts$','lookupClass$S','removeScriptDirectory$java_io_File','run$java_io_File$Z$OA','run$java_io_File$Z$java_util_Map','run$S$S$Z$OA','run$S$S$Z$java_util_Map','run$S$java_io_Reader$Z$OA','run$S$java_io_Reader$Z$java_util_Map','run$org_scijava_script_ScriptInfo$Z$OA','run$org_scijava_script_ScriptInfo$Z$java_util_Map']));
});

Clazz.newMeth(C$, 'startup$', function () {
return this.get$Class(Clazz.getClass($I$(23),['addOperation$Runnable','executeOperations$']));
});

Clazz.newMeth(C$, 'status$', function () {
return this.get$Class(Clazz.getClass($I$(24),['clearStatus$','getStatusMessage$S$org_scijava_app_event_StatusEvent','showProgress$I$I','showStatus$S','showStatus$I$I$S','showStatus$I$I$S$Z','warn$S']));
});

Clazz.newMeth(C$, 'text$', function () {
return this.get$Class(Clazz.getClass($I$(25),['asHTML$java_io_File','getHandler$java_io_File','getInstances$','open$java_io_File','supports$java_io_File']));
});

Clazz.newMeth(C$, 'thread$', function () {
return this.get$Class(Clazz.getClass($I$(26),['getExecutorService$','getParent$Thread','getThreadContext$Thread','invoke$Runnable','isDispatchThread$','queue$Runnable','queue$S$Runnable','queue$S$java_util_concurrent_Callable','run$java_util_concurrent_Callable','run$Runnable','setExecutorService$java_util_concurrent_ExecutorService']));
});

Clazz.newMeth(C$, 'tool$', function () {
return this.get$Class(Clazz.getClass($I$(27),['getActiveTool$','getAlwaysActiveTools$','getPluginType$','getTool$S','getTool$Class','getTools$','isSeparatorNeeded$org_scijava_tool_Tool$org_scijava_tool_Tool','reportLine$D$D$D$D','reportLine$org_scijava_util_RealCoords$org_scijava_util_RealCoords','reportPoint$D$D','reportPoint$org_scijava_util_RealCoords','reportRectangle$D$D$D$D','reportRectangle$org_scijava_util_RealCoords$org_scijava_util_RealCoords','setActiveTool$org_scijava_tool_Tool']));
});

Clazz.newMeth(C$, 'ui$', function () {
return this.get$Class(Clazz.getClass($I$(28),['addDisplayViewer$org_scijava_ui_viewer_DisplayViewer','addUI$org_scijava_ui_UserInterface','addUI$S$org_scijava_ui_UserInterface','chooseFile$java_io_File$S','chooseFile$S$java_io_File$S','chooseFiles$java_io_File$java_io_FileA$java_io_FileFilter$S','chooseFiles$java_io_File$java_util_List$java_io_FileFilter$S','getAvailableUIs$','getDefaultUI$','getDisplayViewer$org_scijava_display_Display','getStatusMessage$org_scijava_app_event_StatusEvent','getUI$S','getViewerPlugins$','getVisibleUIs$','isDefaultUI$S','isHeadless$','isVisible$','isVisible$S','setDefaultUI$org_scijava_ui_UserInterface','setHeadless$Z','show$O','show$S$O','show$org_scijava_display_Display','showContextMenu$S$org_scijava_display_Display$I$I','showDialog$S','showDialog$S$org_scijava_ui_DialogPrompt_MessageType','showDialog$S$org_scijava_ui_DialogPrompt_MessageType$org_scijava_ui_DialogPrompt_OptionType','showDialog$S$S','showDialog$S$S$org_scijava_ui_DialogPrompt_MessageType','showDialog$S$S$org_scijava_ui_DialogPrompt_MessageType$org_scijava_ui_DialogPrompt_OptionType','showUI$','showUI$S','showUI$org_scijava_ui_UserInterface']));
});

Clazz.newMeth(C$, 'widget$', function () {
return this.get$Class(Clazz.getClass($I$(29),['createModel$org_scijava_widget_InputPanel$org_scijava_module_Module$org_scijava_module_ModuleItem$java_util_List','getPluginType$','getType$']));
});

Clazz.newMeth(C$, 'getApp$', function () {
return this.app$().getApp$S(this.appName);
});

Clazz.newMeth(C$, 'getTitle$', function () {
return this.getApp$().getTitle$();
});

Clazz.newMeth(C$, 'getInfo$Z', function (mem) {
return this.getApp$().getInfo$Z(mem);
});

Clazz.newMeth(C$, 'getVersion$', function () {
return this.getApp$().getVersion$();
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:21 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
