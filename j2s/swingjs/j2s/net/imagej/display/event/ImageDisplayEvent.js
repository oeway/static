(function(){var P$=Clazz.newPackage("net.imagej.display.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ImageDisplayEvent", null, 'org.scijava.display.event.DisplayEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['$display','net.imagej.display.ImageDisplay']]]

Clazz.newMeth(C$, 'c$$net_imagej_display_ImageDisplay', function (display) {
;C$.superclazz.c$$org_scijava_display_Display.apply(this,[display]);C$.$init$.apply(this);
this.$display=display;
}, 1);

Clazz.newMeth(C$, 'getDisplay$', function () {
return this.$display;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:59 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
