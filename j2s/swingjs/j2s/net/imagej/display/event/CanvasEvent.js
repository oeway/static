(function(){var P$=Clazz.newPackage("net.imagej.display.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CanvasEvent", null, 'net.imagej.display.event.ImageDisplayEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['canvas','net.imagej.display.ImageCanvas']]]

Clazz.newMeth(C$, 'c$$net_imagej_display_ImageCanvas', function (canvas) {
;C$.superclazz.c$$net_imagej_display_ImageDisplay.apply(this,[canvas.getDisplay$()]);C$.$init$.apply(this);
this.canvas=canvas;
}, 1);

Clazz.newMeth(C$, 'getCanvas$', function () {
return this.canvas;
});

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []) + "\n\tcanvas = " + this.canvas ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:59 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
