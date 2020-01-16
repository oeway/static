(function(){var P$=Clazz.newPackage("org.scijava.display.event.window"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "WinEvent", null, 'org.scijava.display.event.DisplayEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['window','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$org_scijava_display_Display$O', function (display, window) {
;C$.superclazz.c$$org_scijava_display_Display.apply(this,[display]);C$.$init$.apply(this);
this.window=window;
}, 1);

Clazz.newMeth(C$, 'getWindow$', function () {
return this.window;
});

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []) + "\n\twindow = " + this.window ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:24 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
