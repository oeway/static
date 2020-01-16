(function(){var P$=Clazz.newPackage("net.imagej.display.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MouseCursorEvent", null, 'net.imagej.display.event.CanvasEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_display_ImageCanvas', function (canvas) {
;C$.superclazz.c$$net_imagej_display_ImageCanvas.apply(this,[canvas]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []) + "\n\tcursor = " + this.getCanvas$().getCursor$() ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:59 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
