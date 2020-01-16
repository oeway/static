(function(){var P$=Clazz.newPackage("net.imagej.axis"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Variable1Axis", null, 'net.imagej.axis.VariableAxis');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_axis_AxisType', function (type) {
;C$.superclazz.c$$net_imagej_axis_AxisType.apply(this,[type]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_axis_AxisType$S$D', function (type, unit, a) {
;C$.superclazz.c$$net_imagej_axis_AxisType$S.apply(this,[type, unit]);C$.$init$.apply(this);
this.setA$D(a);
}, 1);

Clazz.newMeth(C$, 'a$', function () {
return (this.get$S("a")).valueOf();
});

Clazz.newMeth(C$, 'setA$D', function (a) {
this.set$S$Double("a", new Double(a));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:57 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
