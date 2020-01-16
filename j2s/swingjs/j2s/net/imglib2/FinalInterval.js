(function(){var P$=Clazz.newPackage("net.imglib2"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "FinalInterval", null, 'net.imglib2.AbstractInterval');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_Interval', function (interval) {
;C$.superclazz.c$$net_imglib2_Interval.apply(this,[interval]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_Dimensions', function (dimensions) {
;C$.superclazz.c$$net_imglib2_Dimensions.apply(this,[dimensions]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$JA$JA', function (min, max) {
;C$.superclazz.c$$JA$JA.apply(this,[min, max]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$JA', function (dimensions) {
;C$.superclazz.c$$JA.apply(this,[dimensions]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createMinSize$JA', function (minsize) {
var n=(minsize.length/2|0);
var min=Clazz.array(Long.TYPE, [n]);
var max=Clazz.array(Long.TYPE, [n]);
for (var d=0; d < n; ++d) {
min[d]=minsize[d];
max[d]=min[d] + minsize[d + n] - 1;
}
return Clazz.new_(C$.c$$JA$JA,[min, max]);
}, 1);

Clazz.newMeth(C$, 'createMinMax$JA', function (minmax) {
var n=(minmax.length/2|0);
var min=Clazz.array(Long.TYPE, [n]);
var max=Clazz.array(Long.TYPE, [n]);
for (var d=0; d < n; ++d) {
min[d]=minmax[d];
max[d]=minmax[d + n];
}
return Clazz.new_(C$.c$$JA$JA,[min, max]);
}, 1);

Clazz.newMeth(C$, 'createMinSize$JA$JA', function (min, size) {
var n=min.length;
Clazz.assert(C$, this, function(){return n == size.length});
var max=Clazz.array(Long.TYPE, [n]);
for (var d=0; d < n; ++d) {
max[d]=min[d] + size[d] - 1;
}
return Clazz.new_(C$.c$$JA$JA,[min, max]);
}, 1);
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
