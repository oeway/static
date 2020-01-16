(function(){var P$=Clazz.newPackage("net.imagej.axis"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Variable3Axis", null, 'net.imagej.axis.Variable2Axis');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_axis_AxisType', function (type) {
;C$.superclazz.c$$net_imagej_axis_AxisType.apply(this,[type]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_axis_AxisType$S$D$D$D', function (type, unit, a, b, c) {
;C$.superclazz.c$$net_imagej_axis_AxisType$S$D$D.apply(this,[type, unit, a, b]);C$.$init$.apply(this);
this.setC$D(c);
}, 1);

Clazz.newMeth(C$, 'c$$', function () {
return (this.get$S("c")).valueOf();
});

Clazz.newMeth(C$, 'setC$D', function (c) {
this.set$S$Double("c", new Double(c));
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:58 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
