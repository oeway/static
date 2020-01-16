(function(){var P$=Clazz.newPackage("io.scif.gui"),I$=[[0,'net.imagej.axis.Axes']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "XYCTuple");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['x','y','c']]]

Clazz.newMeth(C$, 'c$$io_scif_ImageMetadata$JA', function (meta, axisLengths) {
;C$.$init$.apply(this);
this.x=1;
this.y=1;
this.c=1;
if (meta.getInterleavedAxisCount$() > 0) {
for (var i=0; i < axisLengths.length; i++) {
if (meta.getAxisIndex$net_imagej_axis_AxisType($I$(1).X) == i) {
this.x=axisLengths[i];
} else if (meta.getAxisIndex$net_imagej_axis_AxisType($I$(1).Y) == i) {
this.y=axisLengths[i];
} else {
this.c*=axisLengths[i];
}}
} else {
this.x=axisLengths[meta.getAxisIndex$net_imagej_axis_AxisType($I$(1).X)];
this.y=axisLengths[meta.getAxisIndex$net_imagej_axis_AxisType($I$(1).Y)];
var cIndex=meta.getAxisIndex$net_imagej_axis_AxisType($I$(1).CHANNEL);
if (cIndex < meta.getPlanarAxisCount$() && cIndex >= 0 ) {
this.c=axisLengths[meta.getAxisIndex$net_imagej_axis_AxisType($I$(1).CHANNEL)];
}if (this.c <= 0) this.c=1;
}}, 1);

Clazz.newMeth(C$, 'c$$J$J$J', function (x, y, c) {
;C$.$init$.apply(this);
this.x=x;
this.y=y;
this.c=c;
}, 1);

Clazz.newMeth(C$, 'x$', function () {
return (this.x|0);
});

Clazz.newMeth(C$, 'y$', function () {
return (this.y|0);
});

Clazz.newMeth(C$, 'c$$', function () {
return (this.c|0);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
