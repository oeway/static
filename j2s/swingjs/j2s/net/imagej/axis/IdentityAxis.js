(function(){var P$=Clazz.newPackage("net.imagej.axis"),I$=[[0,'net.imagej.axis.Axes']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IdentityAxis", null, 'net.imagej.axis.VariableAxis');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$net_imagej_axis_AxisType.apply(this, [$I$(1).unknown$()]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_axis_AxisType', function (type) {
;C$.superclazz.c$$net_imagej_axis_AxisType.apply(this,[type]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_axis_AxisType$S', function (type, unit) {
;C$.superclazz.c$$net_imagej_axis_AxisType$S.apply(this,[type, unit]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'calibratedValue$D', function (rawValue) {
return rawValue;
});

Clazz.newMeth(C$, 'rawValue$D', function (calibratedValue) {
return calibratedValue;
});

Clazz.newMeth(C$, 'generalEquation$', function () {
return "y = x";
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$net_imagej_axis_AxisType$S,[this.type$(), this.unit$()]);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:57 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
