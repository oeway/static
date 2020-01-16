(function(){var P$=Clazz.newPackage("net.imagej.axis"),I$=[[0,'net.imagej.axis.Axes']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultTypedAxis", null, null, 'net.imagej.axis.TypedAxis');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['type','net.imagej.axis.AxisType']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$net_imagej_axis_AxisType.apply(this, [$I$(1).unknown$()]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_axis_AxisType', function (type) {
;C$.$init$.apply(this);
this.setType$net_imagej_axis_AxisType(type);
}, 1);

Clazz.newMeth(C$, 'type$', function () {
return this.type;
});

Clazz.newMeth(C$, 'setType$net_imagej_axis_AxisType', function (type) {
this.type=type;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:57 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
