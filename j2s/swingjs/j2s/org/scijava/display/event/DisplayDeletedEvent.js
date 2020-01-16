(function(){var P$=Clazz.newPackage("org.scijava.display.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DisplayDeletedEvent", null, 'org.scijava.object.event.ObjectDeletedEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['display','org.scijava.display.Display']]]

Clazz.newMeth(C$, 'c$$org_scijava_display_Display', function (display) {
;C$.superclazz.c$$O.apply(this,[display]);C$.$init$.apply(this);
this.display=display;
}, 1);

Clazz.newMeth(C$, 'getObject$', function () {
return this.display;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:24 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
