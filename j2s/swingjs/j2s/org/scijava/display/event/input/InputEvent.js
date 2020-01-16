(function(){var P$=Clazz.newPackage("org.scijava.display.event.input"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "InputEvent", null, 'org.scijava.display.event.DisplayEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['x','y'],'O',['modifiers','org.scijava.input.InputModifiers']]]

Clazz.newMeth(C$, 'c$$org_scijava_display_Display$org_scijava_input_InputModifiers$I$I', function (display, modifiers, x, y) {
;C$.superclazz.c$$org_scijava_display_Display.apply(this,[display]);C$.$init$.apply(this);
this.modifiers=modifiers;
this.x=x;
this.y=y;
}, 1);

Clazz.newMeth(C$, 'getModifiers$', function () {
return this.modifiers;
});

Clazz.newMeth(C$, 'getX$', function () {
return this.x;
});

Clazz.newMeth(C$, 'getY$', function () {
return this.y;
});

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []) + "\n\tmodifiers = " + this.modifiers + "\n\tx = " + this.x + "\n\ty = " + this.y ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:24 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
