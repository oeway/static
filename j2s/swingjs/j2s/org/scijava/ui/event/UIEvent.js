(function(){var P$=Clazz.newPackage("org.scijava.ui.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "UIEvent", null, 'org.scijava.event.SciJavaEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['ui','org.scijava.ui.UserInterface']]]

Clazz.newMeth(C$, 'c$$org_scijava_ui_UserInterface', function (ui) {
Clazz.super_(C$, this);
this.ui=ui;
}, 1);

Clazz.newMeth(C$, 'getUI$', function () {
return this.ui;
});

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []) + "\n\tui = " + this.ui ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
