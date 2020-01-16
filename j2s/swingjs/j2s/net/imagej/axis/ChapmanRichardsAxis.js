(function(){var P$=Clazz.newPackage("net.imagej.axis"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ChapmanRichardsAxis", null, 'net.imagej.axis.Variable3Axis');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_axis_AxisType$S$D$D$D', function (type, unit, a, b, c) {
;C$.superclazz.c$$net_imagej_axis_AxisType$S$D$D$D.apply(this,[type, unit, a, b, c]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'calibratedValue$D', function (rawValue) {
return Math.pow(this.a$() * (1 - Math.exp(-this.b$() * rawValue)), this.c$$());
});

Clazz.newMeth(C$, 'rawValue$D', function (calibratedValue) {
return Math.log(1 - Math.pow(calibratedValue / this.a$(), 1 / this.c$$())) / -this.b$();
});

Clazz.newMeth(C$, 'generalEquation$', function () {
return "a*(1-exp(-b*x))^c";
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$net_imagej_axis_AxisType$S$D$D$D,[this.type$(), this.unit$(), this.a$(), this.b$(), this.c$$()]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:57 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
