(function(){var P$=Clazz.newPackage("net.imagej.axis"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "AbstractCalibratedAxis", null, 'net.imagej.axis.DefaultTypedAxis', 'net.imagej.axis.CalibratedAxis');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['unit']]]

Clazz.newMeth(C$, 'c$$net_imagej_axis_AxisType', function (type) {
;C$.superclazz.c$$net_imagej_axis_AxisType.apply(this,[type]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_axis_AxisType$S', function (type, unit) {
;C$.superclazz.c$$net_imagej_axis_AxisType.apply(this,[type]);C$.$init$.apply(this);
this.setUnit$S(unit);
}, 1);

Clazz.newMeth(C$, 'unit$', function () {
return this.unit;
});

Clazz.newMeth(C$, 'setUnit$S', function (unit) {
this.unit=unit;
});

Clazz.newMeth(C$, 'averageScale$D$D', function (rawValue1, rawValue2) {
return (rawValue2 == rawValue1  ? 1 : (this.calibratedValue$D(rawValue2) - this.calibratedValue$D(rawValue1)) / (rawValue2 - rawValue1));
});

Clazz.newMeth(C$, 'hashCode$', function () {
return p$1.hashString$net_imagej_axis_CalibratedAxis.apply(this, [this]).hashCode$();
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (!(Clazz.instanceOf(o, "net.imagej.axis.CalibratedAxis"))) return false;
var other=o;
return p$1.hashString$net_imagej_axis_CalibratedAxis.apply(this, [this]).equals$O(p$1.hashString$net_imagej_axis_CalibratedAxis.apply(this, [other]));
});

Clazz.newMeth(C$, 'hashString$net_imagej_axis_CalibratedAxis', function (axis) {
return axis.type$().hashCode$() + "\n" + axis.unit$() + "\n" + axis.particularEquation$() ;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:57 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
