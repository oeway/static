(function(){var P$=Clazz.newPackage("net.imagej.interval"),p$1={},I$=[[0,'net.imagej.axis.IdentityAxis']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultCalibratedRealInterval", null, 'net.imagej.interval.AbstractCalibratedRealInterval');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RealInterval', function (interval) {
;C$.superclazz.c$$net_imglib2_RealInterval.apply(this,[interval]);C$.$init$.apply(this);
p$1.assignDefaultAxes$I.apply(this, [interval.numDimensions$()]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RealInterval$net_imagej_axis_CalibratedAxisA', function (interval, axes) {
;C$.superclazz.c$$net_imglib2_RealInterval$TAA.apply(this,[interval, axes]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RealInterval$java_util_List', function (interval, axes) {
;C$.superclazz.c$$net_imglib2_RealInterval$java_util_List.apply(this,[interval, axes]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$DA', function (extents) {
;C$.superclazz.c$$DA.apply(this,[extents]);C$.$init$.apply(this);
p$1.assignDefaultAxes$I.apply(this, [extents.length]);
}, 1);

Clazz.newMeth(C$, 'c$$DA$net_imagej_axis_CalibratedAxisA', function (extents, axes) {
;C$.superclazz.c$$DA$TAA.apply(this,[extents, axes]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$DA$java_util_List', function (extents, axes) {
;C$.superclazz.c$$DA$java_util_List.apply(this,[extents, axes]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$DA$DA', function (min, max) {
;C$.superclazz.c$$DA$DA.apply(this,[min, max]);C$.$init$.apply(this);
p$1.assignDefaultAxes$I.apply(this, [min.length]);
}, 1);

Clazz.newMeth(C$, 'c$$DA$DA$net_imagej_axis_CalibratedAxisA', function (min, max, axes) {
;C$.superclazz.c$$DA$DA$TAA.apply(this,[min, max, axes]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$DA$DA$java_util_List', function (min, max, axes) {
;C$.superclazz.c$$DA$DA$java_util_List.apply(this,[min, max, axes]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'assignDefaultAxes$I', function (numDimensions) {
for (var d=0; d < numDimensions; d++) {
this.setAxis$TA$I(Clazz.new_($I$(1,1)), d);
}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:00 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
