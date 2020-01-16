(function(){var P$=Clazz.newPackage("net.imagej.display.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AxisEvent", null, 'net.imagej.display.event.ImageDisplayEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['axis','net.imagej.axis.AxisType']]]

Clazz.newMeth(C$, 'c$$net_imagej_display_ImageDisplay', function (display) {
C$.c$$net_imagej_display_ImageDisplay$net_imagej_axis_AxisType.apply(this, [display, display.getActiveAxis$()]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_display_ImageDisplay$net_imagej_axis_AxisType', function (display, axis) {
;C$.superclazz.c$$net_imagej_display_ImageDisplay.apply(this,[display]);C$.$init$.apply(this);
if (display.dimensionIndex$net_imagej_axis_AxisType(axis) < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid axis: " + axis]);
}this.axis=axis;
}, 1);

Clazz.newMeth(C$, 'getAxis$', function () {
return this.axis;
});

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []) + "\n\taxis = " + this.axis ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:59 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
