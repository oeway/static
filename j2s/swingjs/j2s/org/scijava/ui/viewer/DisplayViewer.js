(function(){var P$=Clazz.newPackage("org.scijava.ui.viewer"),I$=[[0,['org.scijava.display.event.DisplayUpdatedEvent','.DisplayUpdateLevel']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "DisplayViewer", null, null, ['org.scijava.plugin.RichPlugin', 'org.scijava.Disposable']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'view$org_scijava_ui_UserInterface$org_scijava_display_Display', function (ui, d) {
var w=ui.createDisplayWindow$org_scijava_display_Display(d);
w.setTitle$S(d.getName$());
this.view$org_scijava_ui_viewer_DisplayWindow$org_scijava_display_Display(w, d);
w.showDisplay$Z(true);
d.update$();
});

Clazz.newMeth(C$, 'onDisplayUpdatedEvent$org_scijava_display_event_DisplayUpdatedEvent', function (e) {
if (this.getPanel$() == null ) return;
if (e.getLevel$() === $I$(1).REBUILD ) {
this.getPanel$().redoLayout$();
}this.getPanel$().redraw$();
});

Clazz.newMeth(C$, 'onDisplayDeletedEvent$org_scijava_display_event_DisplayDeletedEvent', function (e) {
if (this.getPanel$() == null  || this.getPanel$().getWindow$() == null  ) return;
this.getPanel$().getWindow$().close$();
});

Clazz.newMeth(C$, 'onDisplayActivatedEvent$org_scijava_display_event_DisplayActivatedEvent', function (e) {
if (this.getPanel$() == null  || this.getPanel$().getWindow$() == null  ) return;
this.getPanel$().getWindow$().requestFocus$();
});

Clazz.newMeth(C$, 'dispose$', function () {
var w=this.getWindow$();
if (w != null ) w.close$();
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
