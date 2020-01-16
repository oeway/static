(function(){var P$=Clazz.newPackage("net.imagej.axis"),I$=[[0,'net.imagej.axis.Axes']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultLinearAxis", null, 'net.imagej.axis.Variable2Axis', 'net.imagej.axis.LinearAxis');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$net_imagej_axis_AxisType.apply(this, [$I$(1).unknown$()]);
}, 1);

Clazz.newMeth(C$, 'c$$D', function (scale) {
C$.c$$net_imagej_axis_AxisType$D.apply(this, [$I$(1).unknown$(), scale]);
}, 1);

Clazz.newMeth(C$, 'c$$D$D', function (scale, origin) {
C$.c$$net_imagej_axis_AxisType$D$D.apply(this, [$I$(1).unknown$(), scale, origin]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_axis_AxisType', function (type) {
C$.c$$net_imagej_axis_AxisType$D$D.apply(this, [type, 1, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_axis_AxisType$D', function (type, scale) {
C$.c$$net_imagej_axis_AxisType$D$D.apply(this, [type, scale, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_axis_AxisType$D$D', function (type, scale, origin) {
;C$.superclazz.c$$net_imagej_axis_AxisType.apply(this,[type]);C$.$init$.apply(this);
this.setScale$D(scale);
this.setOrigin$D(origin);
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_axis_AxisType$S', function (type, unit) {
C$.c$$net_imagej_axis_AxisType$S$D$D.apply(this, [type, unit, 1, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_axis_AxisType$S$D', function (type, unit, scale) {
C$.c$$net_imagej_axis_AxisType$S$D$D.apply(this, [type, unit, scale, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_axis_AxisType$S$D$D', function (type, unit, scale, origin) {
;C$.superclazz.c$$net_imagej_axis_AxisType.apply(this,[type]);C$.$init$.apply(this);
this.setUnit$S(unit);
this.setScale$D(scale);
this.setOrigin$D(origin);
}, 1);

Clazz.newMeth(C$, 'slope$D$D$D$D', function (x1, y1, x2, y2) {
return (y2 - y1) / (x2 - x1);
}, 1);

Clazz.newMeth(C$, 'intercept$D$D$D$D', function (x1, y1, x2, y2) {
return (y1 + y2 + (y1 - y2) * (x1 + x2) / (x2 - x1) ) / 2;
}, 1);

Clazz.newMeth(C$, 'setScale$D', function (scale) {
this.setB$D(scale);
});

Clazz.newMeth(C$, 'scale$', function () {
return this.b$();
});

Clazz.newMeth(C$, 'setOrigin$D', function (origin) {
this.setA$D(origin);
});

Clazz.newMeth(C$, 'origin$', function () {
return this.a$();
});

Clazz.newMeth(C$, 'calibratedValue$D', function (rawValue) {
return this.scale$() * rawValue + this.origin$();
});

Clazz.newMeth(C$, 'rawValue$D', function (calibratedValue) {
return (calibratedValue - this.origin$()) / this.scale$();
});

Clazz.newMeth(C$, 'generalEquation$', function () {
return "y = a + b*x";
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$net_imagej_axis_AxisType$S$D$D,[this.type$(), this.unit$(), this.scale$(), this.origin$()]);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:57 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
