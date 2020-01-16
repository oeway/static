(function(){var P$=Clazz.newPackage("org.scijava.ui"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractUserInterface", null, 'org.scijava.plugin.AbstractRichPlugin', 'org.scijava.ui.UserInterface');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.visible=false;
}, 1);

C$.$fields$=[['Z',['visible'],'O',['displayService','org.scijava.display.DisplayService','log','org.scijava.log.LogService','pluginService','org.scijava.plugin.PluginService','threadService','org.scijava.thread.ThreadService','uiService','org.scijava.ui.UIService','prefService','org.scijava.prefs.PrefService']]]

Clazz.newMeth(C$, 'show$', function () {
this.createUI$();
this.visible=true;
});

Clazz.newMeth(C$, 'isVisible$', function () {
return this.visible;
});

Clazz.newMeth(C$, 'show$S$O', function (name, o) {
var display;
if (Clazz.instanceOf(o, "org.scijava.display.Display")) {
display=o;
} else {
display=this.displayService.createDisplay$S$O(name, o);
}if (!this.isVisible$()) {
this.show$org_scijava_display_Display(display);
}});

Clazz.newMeth(C$, 'show$org_scijava_display_Display', function (display) {
if (this.uiService.getDisplayViewer$org_scijava_display_Display(display) != null ) {
return;
}var viewers=this.uiService.getViewerPlugins$();
var displayViewer=null;
for (var info, $info = viewers.iterator$(); $info.hasNext$()&&((info=($info.next$())),1);) {
var viewer=this.pluginService.createInstance$org_scijava_plugin_PluginInfo(info);
if (viewer == null ) continue;
if (!viewer.canView$org_scijava_display_Display(display)) continue;
if (!viewer.isCompatible$org_scijava_ui_UserInterface(this)) continue;
displayViewer=viewer;
break;
}
if (displayViewer == null ) {
this.log.warn$O("For UI '" + this.getClass$().getName$() + "': no suitable viewer for display: " + display );
return;
}var finalViewer=displayViewer;
this.threadService.queue$Runnable(((P$.AbstractUserInterface$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AbstractUserInterface$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['org.scijava.ui.AbstractUserInterface'].uiService.addDisplayViewer$org_scijava_ui_viewer_DisplayViewer(this.$finals$.finalViewer);
this.$finals$.finalViewer.view$org_scijava_ui_UserInterface$org_scijava_display_Display(this.b$['org.scijava.ui.AbstractUserInterface'], this.$finals$.display);
});
})()
), Clazz.new_(P$.AbstractUserInterface$1.$init$, [this, {display:display,finalViewer:finalViewer}])));
});

Clazz.newMeth(C$, 'saveLocation$', function () {
var appFrame=this.getApplicationFrame$();
if (appFrame != null ) {
this.prefService.put$Class$S$I(this.getClass$(), "lastXLocation", appFrame.getLocationX$());
this.prefService.put$Class$S$I(this.getClass$(), "lastYLocation", appFrame.getLocationY$());
}});

Clazz.newMeth(C$, 'restoreLocation$', function () {
var appFrame=this.getApplicationFrame$();
if (appFrame != null ) {
var lastX=this.prefService.getInt$Class$S$I(this.getClass$(), "lastXLocation", 0);
var lastY=this.prefService.getInt$Class$S$I(this.getClass$(), "lastYLocation", 0);
appFrame.setLocation$I$I(lastX, lastY);
}});

Clazz.newMeth(C$, 'createUI$', function () {
this.restoreLocation$();
});
C$.$getAnn$ = function(){ return [
[['displayService','org.scijava.display.DisplayService',null,['org.scijava.plugin.Parameter']],['']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']],
  [['pluginService','org.scijava.plugin.PluginService',null,['org.scijava.plugin.Parameter']],['']],
  [['threadService','org.scijava.thread.ThreadService',null,['org.scijava.plugin.Parameter']],['']],
  [['uiService','org.scijava.ui.UIService',null,['org.scijava.plugin.Parameter']],['']],
  [['prefService','org.scijava.prefs.PrefService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
