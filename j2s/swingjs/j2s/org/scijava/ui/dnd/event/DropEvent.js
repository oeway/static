(function(){var P$=Clazz.newPackage("org.scijava.ui.dnd.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DropEvent", null, 'org.scijava.ui.dnd.event.DragAndDropEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['successful']]]

Clazz.newMeth(C$, 'c$$org_scijava_display_Display$org_scijava_input_InputModifiers$I$I$org_scijava_ui_dnd_DragAndDropData', function (display, modifiers, x, y, data) {
;C$.superclazz.c$$org_scijava_display_Display$org_scijava_input_InputModifiers$I$I$org_scijava_ui_dnd_DragAndDropData.apply(this,[display, modifiers, x, y, data]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isSuccessful$', function () {
return this.successful;
});

Clazz.newMeth(C$, 'setSuccessful$Z', function (successful) {
this.successful=successful;
});

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []) + "\n\tsuccessful = " + this.successful ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1