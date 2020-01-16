(function(){var P$=Clazz.newPackage("net.imagej.display.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DataViewEvent", null, 'org.scijava.event.SciJavaEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['view','net.imagej.display.DataView']]]

Clazz.newMeth(C$, 'c$$net_imagej_display_DataView', function (view) {
Clazz.super_(C$, this);
this.view=view;
}, 1);

Clazz.newMeth(C$, 'getView$', function () {
return this.view;
});

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []) + "\n\tview = " + this.view ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:59 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
