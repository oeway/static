(function(){var P$=Clazz.newPackage("net.imagej.axis"),I$=[[0,'net.imagej.axis.Axes']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PowerAxis", null, 'net.imagej.axis.Variable3Axis');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$D', function (power) {
C$.c$$net_imagej_axis_AxisType$D.apply(this, [$I$(1).unknown$(), power]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_axis_AxisType$D', function (type, power) {
C$.c$$net_imagej_axis_AxisType$S$D$D$D.apply(this, [type, null, 0, 1, power]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_axis_AxisType$S$D$D$D', function (type, unit, a, b, c) {
;C$.superclazz.c$$net_imagej_axis_AxisType$S$D$D$D.apply(this,[type, unit, a, b, c]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'calibratedValue$D', function (rawValue) {
return this.a$() + this.b$() * Math.pow(rawValue, this.c$$());
});

Clazz.newMeth(C$, 'rawValue$D', function (calibratedValue) {
return Math.pow(((calibratedValue - this.a$()) / this.b$()), (1.0 / this.c$$()));
});

Clazz.newMeth(C$, 'generalEquation$', function () {
return "y = a + b*x^c";
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$net_imagej_axis_AxisType$S$D$D$D,[this.type$(), this.unit$(), this.a$(), this.b$(), this.c$$()]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:57 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
