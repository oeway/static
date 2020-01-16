(function(){var P$=Clazz.newPackage("org.scijava.ui.dnd");
/*c*/var C$=Clazz.newClass(P$, "DefaultDragAndDropService", null, 'org.scijava.plugin.AbstractHandlerService', 'org.scijava.ui.dnd.DragAndDropService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['statusService','org.scijava.app.StatusService']]]

Clazz.newMeth(C$, 'onEvent$org_scijava_ui_dnd_event_DragEnterEvent', function (e) {
var compatible=this.supports$org_scijava_ui_dnd_DragAndDropData$org_scijava_display_Display(e.getData$(), e.getDisplay$());
var message=compatible ? "Drag and Drop" : "Unsupported Object";
this.statusService.showStatus$S("< <" + message + "> >" );
if (compatible) e.setAccepted$Z(true);
});

Clazz.newMeth(C$, 'onEvent$org_scijava_ui_dnd_event_DragExitEvent', function (e) {
this.statusService.clearStatus$();
});

Clazz.newMeth(C$, 'onEvent$org_scijava_ui_dnd_event_DragOverEvent', function (e) {
});

Clazz.newMeth(C$, 'onEvent$org_scijava_ui_dnd_event_DropEvent', function (e) {
if (!this.supports$org_scijava_ui_dnd_DragAndDropData$org_scijava_display_Display(e.getData$(), e.getDisplay$())) return;
var success=this.drop$org_scijava_ui_dnd_DragAndDropData$org_scijava_display_Display(e.getData$(), e.getDisplay$());
e.setSuccessful$Z(success);
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.ui.dnd.DefaultDragAndDropService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['statusService','org.scijava.app.StatusService',null,['org.scijava.plugin.Parameter']],['']],
  [['M:onEvent','void','onEvent$org_scijava_ui_dnd_event_DragEnterEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$org_scijava_ui_dnd_event_DragExitEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$org_scijava_ui_dnd_event_DragOverEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$org_scijava_ui_dnd_event_DropEvent',['org.scijava.event.EventHandler']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
