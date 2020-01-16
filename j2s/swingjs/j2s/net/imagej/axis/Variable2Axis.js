(function(){var P$=Clazz.newPackage("net.imagej.axis"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Variable2Axis", null, 'net.imagej.axis.Variable1Axis');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_axis_AxisType', function (type) {
;C$.superclazz.c$$net_imagej_axis_AxisType.apply(this,[type]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_axis_AxisType$S$D$D', function (type, unit, a, b) {
;C$.superclazz.c$$net_imagej_axis_AxisType$S$D.apply(this,[type, unit, a]);C$.$init$.apply(this);
this.setB$D(b);
}, 1);

Clazz.newMeth(C$, 'b$', function () {
return (this.get$S("b")).valueOf();
});

Clazz.newMeth(C$, 'setB$D', function (b) {
this.set$S$Double("b", new Double(b));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:57 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
