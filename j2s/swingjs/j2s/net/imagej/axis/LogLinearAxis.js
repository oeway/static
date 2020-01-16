(function(){var P$=Clazz.newPackage("net.imagej.axis"),I$=[[0,'net.imagej.axis.Axes']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LogLinearAxis", null, 'net.imagej.axis.Variable4Axis');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$net_imagej_axis_AxisType.apply(this, [$I$(1).unknown$()]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_axis_AxisType', function (type) {
C$.c$$net_imagej_axis_AxisType$S.apply(this, [type, null]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_axis_AxisType$S', function (type, unit) {
C$.c$$net_imagej_axis_AxisType$S$D$D$D$D.apply(this, [type, unit, 0, 1, 1, 1]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_axis_AxisType$S$D$D$D$D', function (type, unit, a, b, c, d) {
;C$.superclazz.c$$net_imagej_axis_AxisType$S$D$D$D$D.apply(this,[type, unit, a, b, c, d]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'calibratedValue$D', function (rawValue) {
return this.a$() + this.b$() * Math.log(this.c$$() + this.d$() * rawValue);
});

Clazz.newMeth(C$, 'rawValue$D', function (calibratedValue) {
return ((Math.exp((calibratedValue - this.a$()) / this.b$())) - this.c$$()) / this.d$();
});

Clazz.newMeth(C$, 'generalEquation$', function () {
return "y = a + b * ln(c + d * x)";
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$net_imagej_axis_AxisType$S$D$D$D$D,[this.type$(), this.unit$(), this.a$(), this.b$(), this.c$$(), this.d$()]);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:57 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
