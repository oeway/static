(function(){var P$=Clazz.newPackage("org.scijava.display.event.input"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MsWheelEvent", null, 'org.scijava.display.event.input.MsEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['wheelRotation']]]

Clazz.newMeth(C$, 'c$$org_scijava_display_Display$org_scijava_input_InputModifiers$I$I$I', function (display, modifiers, x, y, wheelRotation) {
;C$.superclazz.c$$org_scijava_display_Display$org_scijava_input_InputModifiers$I$I.apply(this,[display, modifiers, x, y]);C$.$init$.apply(this);
this.wheelRotation=wheelRotation;
}, 1);

Clazz.newMeth(C$, 'getWheelRotation$', function () {
return this.wheelRotation;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:24 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
