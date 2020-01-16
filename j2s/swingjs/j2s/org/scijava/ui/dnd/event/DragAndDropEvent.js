(function(){var P$=Clazz.newPackage("org.scijava.ui.dnd.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DragAndDropEvent", null, 'org.scijava.display.event.input.InputEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['data','org.scijava.ui.dnd.DragAndDropData']]]

Clazz.newMeth(C$, 'c$$org_scijava_display_Display', function (display) {
C$.c$$org_scijava_display_Display$org_scijava_ui_dnd_DragAndDropData.apply(this, [display, null]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_display_Display$org_scijava_ui_dnd_DragAndDropData', function (display, data) {
C$.c$$org_scijava_display_Display$org_scijava_input_InputModifiers$I$I$org_scijava_ui_dnd_DragAndDropData.apply(this, [display, null, -1, -1, data]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_display_Display$org_scijava_input_InputModifiers$I$I$org_scijava_ui_dnd_DragAndDropData', function (display, modifiers, x, y, data) {
;C$.superclazz.c$$org_scijava_display_Display$org_scijava_input_InputModifiers$I$I.apply(this,[display, modifiers, x, y]);C$.$init$.apply(this);
this.data=data;
}, 1);

Clazz.newMeth(C$, 'getData$', function () {
return this.data;
});

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []) + "\n\tdata = " + this.data ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
