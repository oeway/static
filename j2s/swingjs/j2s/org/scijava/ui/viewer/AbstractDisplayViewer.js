(function(){var P$=Clazz.newPackage("org.scijava.ui.viewer"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractDisplayViewer", null, 'org.scijava.plugin.AbstractRichPlugin', 'org.scijava.ui.viewer.DisplayViewer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['display','org.scijava.display.Display','window','org.scijava.ui.viewer.DisplayWindow','panel','org.scijava.ui.viewer.DisplayPanel']]]

Clazz.newMeth(C$, 'view$org_scijava_ui_viewer_DisplayWindow$org_scijava_display_Display', function (w, d) {
if (!this.canView$org_scijava_display_Display(d)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Incompatible display: " + d]);
}var typedDisplay=d;
this.display=typedDisplay;
this.window=w;
});

Clazz.newMeth(C$, 'getDisplay$', function () {
return this.display;
});

Clazz.newMeth(C$, 'getWindow$', function () {
return this.window;
});

Clazz.newMeth(C$, 'setPanel$org_scijava_ui_viewer_DisplayPanel', function (panel) {
this.panel=panel;
});

Clazz.newMeth(C$, 'getPanel$', function () {
return this.panel;
});

Clazz.newMeth(C$, 'updateTitle$', function () {
var name=this.getDisplay$().getName$();
if (name == null ) name="";
this.getWindow$().setTitle$S(name);
});

Clazz.newMeth(C$, 'onEvent$org_scijava_display_event_DisplayCreatedEvent', function (event) {
if (event.getObject$() !== this.getDisplay$() ) return;
this.updateTitle$();
});

Clazz.newMeth(C$, 'onEvent$org_scijava_display_event_DisplayUpdatedEvent', function (event) {
if (event.getDisplay$() !== this.getDisplay$() ) return;
this.updateTitle$();
});
C$.$getAnn$ = function(){ return [
[['M:onEvent','void','onEvent$org_scijava_display_event_DisplayCreatedEvent',['org.scijava.event.EventHandler']],['']],
  [['M:onEvent','.','onEvent$org_scijava_display_event_DisplayUpdatedEvent',['org.scijava.event.EventHandler']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
