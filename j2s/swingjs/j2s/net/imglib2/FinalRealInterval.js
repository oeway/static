(function(){var P$=Clazz.newPackage("net.imglib2"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "FinalRealInterval", null, 'net.imglib2.AbstractRealInterval');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RealInterval', function (interval) {
;C$.superclazz.c$$net_imglib2_RealInterval.apply(this,[interval]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$DA$DA', function (min, max) {
;C$.superclazz.c$$DA$DA.apply(this,[min, max]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createMinSize$DA', function (minsize) {
var n=(minsize.length/2|0);
var min=Clazz.array(Double.TYPE, [n]);
var max=Clazz.array(Double.TYPE, [n]);
for (var d=0; d < n; ++d) {
min[d]=minsize[d];
max[d]=min[d] + minsize[d + n] - 1;
}
return Clazz.new_(C$.c$$DA$DA,[min, max]);
}, 1);

Clazz.newMeth(C$, 'createMinMax$DA', function (minmax) {
var n=(minmax.length/2|0);
var min=Clazz.array(Double.TYPE, [n]);
var max=Clazz.array(Double.TYPE, [n]);
for (var d=0; d < n; ++d) {
min[d]=minmax[d];
max[d]=minmax[d + n];
}
return Clazz.new_(C$.c$$DA$DA,[min, max]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:04 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
