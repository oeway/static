(function(){var P$=Clazz.newPackage("org.scijava.display.event.input"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MsButtonEvent", null, 'org.scijava.display.event.input.MsEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['isPopupTrigger'],'I',['button','numClicks']]]

Clazz.newMeth(C$, 'c$$org_scijava_display_Display$org_scijava_input_InputModifiers$I$I$I$I$Z', function (display, modifiers, x, y, button, numClicks, isPopupTrigger) {
;C$.superclazz.c$$org_scijava_display_Display$org_scijava_input_InputModifiers$I$I.apply(this,[display, modifiers, x, y]);C$.$init$.apply(this);
this.button=button;
this.numClicks=numClicks;
this.isPopupTrigger=isPopupTrigger;
}, 1);

Clazz.newMeth(C$, 'getButton$', function () {
return this.button;
});

Clazz.newMeth(C$, 'getNumClicks$', function () {
return this.numClicks;
});

Clazz.newMeth(C$, 'isPopupTrigger$', function () {
return this.isPopupTrigger;
});

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []) + "\n\tbutton = " + this.button + "\n\tnumClicks = " + this.numClicks + "\n\tisPopupTrigger = " + this.isPopupTrigger ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:24 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
