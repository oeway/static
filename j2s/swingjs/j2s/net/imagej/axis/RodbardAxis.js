(function(){var P$=Clazz.newPackage("net.imagej.axis"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "RodbardAxis", null, 'net.imagej.axis.Variable4Axis');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_axis_AxisType$S$D$D$D$D', function (type, unit, a, b, c, d) {
;C$.superclazz.c$$net_imagej_axis_AxisType$S$D$D$D$D.apply(this,[type, unit, a, b, c, d]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'calibratedValue$D', function (rawValue) {
return this.a$() + (this.b$() - this.a$()) / (1 + Math.pow((rawValue / this.c$$()), this.d$()));
});

Clazz.newMeth(C$, 'rawValue$D', function (calibratedValue) {
return Math.pow(((this.b$() - calibratedValue) / (calibratedValue - this.a$())), 1 / this.d$()) * this.c$$();
});

Clazz.newMeth(C$, 'generalEquation$', function () {
return "y = a + (b-a) / (1 + (x/c)^d)";
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$net_imagej_axis_AxisType$S$D$D$D$D,[this.type$(), this.unit$(), this.a$(), this.b$(), this.c$$(), this.d$()]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:57 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
