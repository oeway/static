(function(){var P$=Clazz.newPackage("org.scijava.ui"),p$1={},I$=[[0,'org.scijava.ui.event.UIShownEvent','Boolean','java.util.Collections','java.util.ArrayList','org.scijava.ui.viewer.DisplayViewer',['org.scijava.ui.DialogPrompt','.MessageType'],['org.scijava.ui.DialogPrompt','.OptionType'],'java.util.HashMap','org.scijava.ui.UserInterface']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultUIService", null, 'org.scijava.service.AbstractService', 'org.scijava.ui.UIService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.activationInvocationPending=false;
}, 1);

C$.$fields$=[['Z',['initialized','disposed','activationInvocationPending'],'O',['log','org.scijava.log.LogService','eventService','org.scijava.event.EventService','statusService','org.scijava.app.StatusService','threadService','org.scijava.thread.ThreadService','appService','org.scijava.app.AppService','pluginService','org.scijava.plugin.PluginService','displayService','org.scijava.display.DisplayService','displayViewers','java.util.List','+uiList','uiMap','java.util.Map','defaultUI','org.scijava.ui.UserInterface']]]

Clazz.newMeth(C$, 'addUI$org_scijava_ui_UserInterface', function (ui) {
this.addUI$S$org_scijava_ui_UserInterface(null, ui);
});

Clazz.newMeth(C$, 'addUI$S$org_scijava_ui_UserInterface', function (name, ui) {
if (!this.initialized) p$1.discoverUIs.apply(this, []);
p$1.addUserInterface$S$org_scijava_ui_UserInterface.apply(this, [name, ui]);
});

Clazz.newMeth(C$, 'showUI$', function () {
if (this.disposed) return;
var ui=this.getDefaultUI$();
if (ui == null ) throw p$1.noUIsAvailableException.apply(this, []);
this.showUI$org_scijava_ui_UserInterface(ui);
});

Clazz.newMeth(C$, 'showUI$S', function (name) {
var ui=p$1.uiMap.apply(this, []).get$O(name);
if (ui == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No such user interface: " + name]);
}this.showUI$org_scijava_ui_UserInterface(ui);
});

Clazz.newMeth(C$, 'showUI$org_scijava_ui_UserInterface', function (ui) {
this.log.debug$O("Launching user interface: " + ui.getClass$().getName$());
ui.show$();
for (var display, $display = this.displayService.getDisplays$().iterator$(); $display.hasNext$()&&((display=($display.next$())),1);) {
ui.show$org_scijava_display_Display(display);
}
this.eventService.publish$TE(Clazz.new_($I$(1,1).c$$org_scijava_ui_UserInterface,[ui]));
});

Clazz.newMeth(C$, 'isVisible$', function () {
var ui=this.getDefaultUI$();
if (ui == null ) throw p$1.noUIsAvailableException.apply(this, []);
return ui.isVisible$();
});

Clazz.newMeth(C$, 'isVisible$S', function (name) {
var ui=p$1.uiMap.apply(this, []).get$O(name);
if (ui == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No such user interface: " + name]);
}return ui.isVisible$();
});

Clazz.newMeth(C$, 'setHeadless$Z', function (headless) {
System.setProperty$S$S("java.awt.headless", String.valueOf$Z(headless));
});

Clazz.newMeth(C$, 'isHeadless$', function () {
return $I$(2).getBoolean$S("java.awt.headless");
});

Clazz.newMeth(C$, 'getDefaultUI$', function () {
if (!this.initialized) p$1.discoverUIs.apply(this, []);
if (this.isHeadless$()) return p$1.uiMap.apply(this, []).get$O("headless");
if (this.defaultUI != null ) return this.defaultUI;
return p$1.uiList.apply(this, []).isEmpty$() ? null : p$1.uiList.apply(this, []).get$I(0);
});

Clazz.newMeth(C$, 'setDefaultUI$org_scijava_ui_UserInterface', function (ui) {
this.defaultUI=ui;
});

Clazz.newMeth(C$, 'isDefaultUI$S', function (name) {
return this.getDefaultUI$() === this.getUI$S(name) ;
});

Clazz.newMeth(C$, 'getUI$S', function (name) {
return p$1.uiMap.apply(this, []).get$O(name);
});

Clazz.newMeth(C$, 'getAvailableUIs$', function () {
return $I$(3).unmodifiableList$java_util_List(p$1.uiList.apply(this, []));
});

Clazz.newMeth(C$, 'getVisibleUIs$', function () {
var uis=Clazz.new_(1,{E:"org.scijava.ui.UserInterface"},$I$(4,1));
for (var ui, $ui = p$1.uiList.apply(this, []).iterator$(); $ui.hasNext$()&&((ui=($ui.next$())),1);) {
if (ui.isVisible$()) uis.add$TE(ui);
}
return uis;
});

Clazz.newMeth(C$, 'getViewerPlugins$', function () {
var viewers=this.pluginService.getPluginsOfType$Class(Clazz.getClass($I$(5),['canView$org_scijava_display_Display','dispose$','getDisplay$','getPanel$','getWindow$','isCompatible$org_scijava_ui_UserInterface','onDisplayActivatedEvent$org_scijava_display_event_DisplayActivatedEvent','onDisplayDeletedEvent$org_scijava_display_event_DisplayDeletedEvent','onDisplayUpdatedEvent$org_scijava_display_event_DisplayUpdatedEvent','setPanel$org_scijava_ui_viewer_DisplayPanel','view$org_scijava_ui_UserInterface$org_scijava_display_Display','view$org_scijava_ui_viewer_DisplayWindow$org_scijava_display_Display']));
return viewers;
});

Clazz.newMeth(C$, 'show$O', function (o) {
this.getDefaultUI$().show$O(o);
});

Clazz.newMeth(C$, 'show$S$O', function (name, o) {
this.getDefaultUI$().show$S$O(name, o);
});

Clazz.newMeth(C$, 'show$org_scijava_display_Display', function (display) {
this.getDefaultUI$().show$org_scijava_display_Display(display);
});

Clazz.newMeth(C$, 'addDisplayViewer$org_scijava_ui_viewer_DisplayViewer', function (viewer) {
p$1.displayViewers.apply(this, []).add$TE(viewer);
});

Clazz.newMeth(C$, 'getDisplayViewer$org_scijava_display_Display', function (display) {
for (var displayViewer, $displayViewer = p$1.displayViewers.apply(this, []).iterator$(); $displayViewer.hasNext$()&&((displayViewer=($displayViewer.next$())),1);) {
if (displayViewer.getDisplay$() === display ) return displayViewer;
}
return null;
});

Clazz.newMeth(C$, 'showDialog$S', function (message) {
return this.showDialog$S$S(message, p$1.getTitle.apply(this, []));
});

Clazz.newMeth(C$, 'showDialog$S$org_scijava_ui_DialogPrompt_MessageType', function (message, messageType) {
return this.showDialog$S$S$org_scijava_ui_DialogPrompt_MessageType(message, p$1.getTitle.apply(this, []), messageType);
});

Clazz.newMeth(C$, 'showDialog$S$org_scijava_ui_DialogPrompt_MessageType$org_scijava_ui_DialogPrompt_OptionType', function (message, messageType, optionType) {
return this.showDialog$S$S$org_scijava_ui_DialogPrompt_MessageType$org_scijava_ui_DialogPrompt_OptionType(message, p$1.getTitle.apply(this, []), messageType, optionType);
});

Clazz.newMeth(C$, 'showDialog$S$S', function (message, title) {
return this.showDialog$S$S$org_scijava_ui_DialogPrompt_MessageType(message, title, $I$(6).INFORMATION_MESSAGE);
});

Clazz.newMeth(C$, 'showDialog$S$S$org_scijava_ui_DialogPrompt_MessageType', function (message, title, messageType) {
return this.showDialog$S$S$org_scijava_ui_DialogPrompt_MessageType$org_scijava_ui_DialogPrompt_OptionType(message, title, messageType, $I$(7).DEFAULT_OPTION);
});

Clazz.newMeth(C$, 'showDialog$S$S$org_scijava_ui_DialogPrompt_MessageType$org_scijava_ui_DialogPrompt_OptionType', function (message, title, messageType, optionType) {
var ui=this.getDefaultUI$();
if (ui == null ) return null;
var dialogPrompt=ui.dialogPrompt$S$S$org_scijava_ui_DialogPrompt_MessageType$org_scijava_ui_DialogPrompt_OptionType(message, title, messageType, optionType);
return dialogPrompt == null  ? null : dialogPrompt.prompt$();
});

Clazz.newMeth(C$, 'chooseFile$java_io_File$S', function (file, style) {
var ui=this.getDefaultUI$();
return ui == null  ? null : ui.chooseFile$java_io_File$S(file, style);
});

Clazz.newMeth(C$, 'chooseFile$S$java_io_File$S', function (title, file, style) {
var ui=this.getDefaultUI$();
return ui == null  ? null : ui.chooseFile$S$java_io_File$S(title, file, style);
});

Clazz.newMeth(C$, 'chooseFiles$java_io_File$java_io_FileA$java_io_FileFilter$S', function (parent, files, filter, style) {
var ui=this.getDefaultUI$();
return ui == null  ? null : ui.chooseFiles$java_io_File$java_io_FileA$java_io_FileFilter$S(parent, files, filter, style);
});

Clazz.newMeth(C$, 'chooseFiles$java_io_File$java_util_List$java_io_FileFilter$S', function (parent, fileList, filter, style) {
var ui=this.getDefaultUI$();
return ui == null  ? null : ui.chooseFiles$java_io_File$java_util_List$java_io_FileFilter$S(parent, fileList, filter, style);
});

Clazz.newMeth(C$, 'showContextMenu$S$org_scijava_display_Display$I$I', function (menuRoot, display, x, y) {
var ui=this.getDefaultUI$();
if (ui != null ) ui.showContextMenu$S$org_scijava_display_Display$I$I(menuRoot, display, x, y);
});

Clazz.newMeth(C$, 'getStatusMessage$org_scijava_app_event_StatusEvent', function (statusEvent) {
var appName=this.appService.getApp$().getInfo$().getName$();
return this.statusService.getStatusMessage$S$org_scijava_app_event_StatusEvent(appName, statusEvent);
});

Clazz.newMeth(C$, 'dispose$', function () {
var viewers=Clazz.new_(1,{E:"org.scijava.ui.viewer.DisplayViewer"},$I$(4,1));
viewers.addAll$java_util_Collection(p$1.displayViewers.apply(this, []));
for (var viewer, $viewer = viewers.iterator$(); $viewer.hasNext$()&&((viewer=($viewer.next$())),1);) {
viewer.dispose$();
}
var uis=this.getAvailableUIs$();
for (var i=uis.size$() - 1; i >= 0; i--) {
uis.get$I(i).dispose$();
}
this.disposed=true;
});

Clazz.newMeth(C$, 'onEvent$org_scijava_display_event_DisplayCreatedEvent', function (e) {
var display=e.getObject$();
for (var ui, $ui = this.getVisibleUIs$().iterator$(); $ui.hasNext$()&&((ui=($ui.next$())),1);) {
ui.show$org_scijava_display_Display(display);
}
});

Clazz.newMeth(C$, 'onEvent$org_scijava_display_event_DisplayDeletedEvent', function (e) {
var display=e.getObject$();
var displayViewer=this.getDisplayViewer$org_scijava_display_Display(display);
if (displayViewer != null ) {
displayViewer.onDisplayDeletedEvent$org_scijava_display_event_DisplayDeletedEvent(e);
p$1.displayViewers.apply(this, []).remove$O(displayViewer);
}});

Clazz.newMeth(C$, 'onEvent$org_scijava_display_event_DisplayUpdatedEvent', function (e) {
var display=e.getDisplay$();
var displayViewer=this.getDisplayViewer$org_scijava_display_Display(display);
if (displayViewer != null ) {
displayViewer.onDisplayUpdatedEvent$org_scijava_display_event_DisplayUpdatedEvent(e);
}});

Clazz.newMeth(C$, 'onEvent$org_scijava_display_event_DisplayActivatedEvent', function (e) {
if (this.activationInvocationPending) return;
this.activationInvocationPending=true;
this.threadService.queue$Runnable(((P$.DefaultUIService$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DefaultUIService$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var activeDisplay=this.b$['org.scijava.ui.DefaultUIService'].displayService.getActiveDisplay$();
if (activeDisplay != null ) {
var displayViewer=this.b$['org.scijava.ui.DefaultUIService'].getDisplayViewer$org_scijava_display_Display.apply(this.b$['org.scijava.ui.DefaultUIService'], [activeDisplay]);
if (displayViewer != null ) displayViewer.onDisplayActivatedEvent$org_scijava_display_event_DisplayActivatedEvent(this.$finals$.e);
}this.b$['org.scijava.ui.DefaultUIService'].activationInvocationPending=false;
});
})()
), Clazz.new_(P$.DefaultUIService$1.$init$, [this, {e:e}])));
});

Clazz.newMeth(C$, 'onEvent$org_scijava_platform_event_AppQuitEvent', function (event) {
for (var ui, $ui = this.getVisibleUIs$().iterator$(); $ui.hasNext$()&&((ui=($ui.next$())),1);) {
ui.saveLocation$();
}
});

Clazz.newMeth(C$, 'onEvent$org_scijava_app_event_StatusEvent', function (event) {
if (event.isWarning$()) {
var message=event.getStatusMessage$();
if (message != null  && !message.isEmpty$() ) {
this.showDialog$S$org_scijava_ui_DialogPrompt_MessageType(message, $I$(6).WARNING_MESSAGE);
}} else {
var val=event.getProgressValue$();
var max=event.getProgressMaximum$();
var message=this.getStatusMessage$org_scijava_app_event_StatusEvent(event);
if (max < 0 && message == null  ) return;
for (var ui, $ui = this.getAvailableUIs$().iterator$(); $ui.hasNext$()&&((ui=($ui.next$())),1);) {
var statusBar=ui.getStatusBar$();
if (statusBar != null ) {
if (max >= 0) {
statusBar.setProgress$I$I(val, max);
}if (message != null ) {
statusBar.setStatus$S(message);
}}}
}});

Clazz.newMeth(C$, 'displayViewers', function () {
if (!this.initialized) p$1.discoverUIs.apply(this, []);
return this.displayViewers;
}, p$1);

Clazz.newMeth(C$, 'uiList', function () {
if (!this.initialized) p$1.discoverUIs.apply(this, []);
return this.uiList;
}, p$1);

Clazz.newMeth(C$, 'uiMap', function () {
if (!this.initialized) p$1.discoverUIs.apply(this, []);
return this.uiMap;
}, p$1);

Clazz.newMeth(C$, 'discoverUIs', function () {
if (this.initialized) return;
this.displayViewers=Clazz.new_(1,{E:"org.scijava.ui.viewer.DisplayViewer"},$I$(4,1));
this.uiList=Clazz.new_(1,{E:"org.scijava.ui.UserInterface"},$I$(4,1));
this.uiMap=Clazz.new_(1,{K:"String",V:"org.scijava.ui.UserInterface"},$I$(8,1));
var infos=this.pluginService.getPluginsOfType$Class(Clazz.getClass($I$(9),['chooseFile$java_io_File$S','chooseFile$S$java_io_File$S','chooseFiles$java_io_File$java_io_FileA$java_io_FileFilter$S','chooseFiles$java_io_File$java_util_List$java_io_FileFilter$S','createDisplayWindow$org_scijava_display_Display','dialogPrompt$S$S$org_scijava_ui_DialogPrompt_MessageType$org_scijava_ui_DialogPrompt_OptionType','getApplicationFrame$','getConsolePane$','getDesktop$','getStatusBar$','getSystemClipboard$','getToolBar$','isVisible$','requiresEDT$','restoreLocation$','saveLocation$','show$','show$O','show$S$O','show$org_scijava_display_Display','showContextMenu$S$org_scijava_display_Display$I$I']));
for (var info, $info = infos.iterator$(); $info.hasNext$()&&((info=($info.next$())),1);) {
var ui=this.pluginService.createInstance$org_scijava_plugin_PluginInfo(info);
if (ui == null ) continue;
this.log.debug$O("Discovered user interface: " + ui.getClass$().getName$());
p$1.addUserInterface$S$org_scijava_ui_UserInterface.apply(this, [info.getName$(), ui]);
}
var uiProp=System.getProperty$S("scijava.ui");
var ui=this.uiMap.get$O(uiProp);
if (ui != null ) {
this.setDefaultUI$org_scijava_ui_UserInterface(ui);
}this.initialized=true;
}, p$1);

Clazz.newMeth(C$, 'addUserInterface$S$org_scijava_ui_UserInterface', function (name, ui) {
this.uiList.add$TE(ui);
this.uiMap.put$TK$TV(ui.getClass$().getName$(), ui);
if (name != null  && !name.isEmpty$() ) this.uiMap.put$TK$TV(name, ui);
}, p$1);

Clazz.newMeth(C$, 'getTitle', function () {
return this.appService.getApp$().getTitle$();
}, p$1);

Clazz.newMeth(C$, 'noUIsAvailableException', function () {
return Clazz.new_(Clazz.load('IllegalStateException').c$$S,["No UIs available. Please add a component containing a UIPlugin (e.g., scijava-ui-swing) to your class-path."]);
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.ui.DefaultUIService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']],
  [['eventService','org.scijava.event.EventService',null,['org.scijava.plugin.Parameter']],['']],
  [['statusService','org.scijava.app.StatusService',null,['org.scijava.plugin.Parameter']],['']],
  [['threadService','org.scijava.thread.ThreadService',null,['org.scijava.plugin.Parameter']],['']],
  [['appService','org.scijava.app.AppService',null,['org.scijava.plugin.Parameter']],['']],
  [['pluginService','org.scijava.plugin.PluginService',null,['org.scijava.plugin.Parameter']],['']],
  [['displayService','org.scijava.display.DisplayService',null,['org.scijava.plugin.Parameter']],['']],
  [['M:onEvent','void','onEvent$org_scijava_display_event_DisplayCreatedEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$org_scijava_display_event_DisplayDeletedEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$org_scijava_display_event_DisplayUpdatedEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$org_scijava_display_event_DisplayActivatedEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$org_scijava_platform_event_AppQuitEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$org_scijava_app_event_StatusEvent',['org.scijava.event.EventHandler']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
