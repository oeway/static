(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),I$=[[0,'net.imglib2.realtransform.InverseRealTransform']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PolarToCartesianTransform2D", null, null, 'net.imglib2.realtransform.InvertibleRealTransform');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['inverse','net.imglib2.realtransform.InverseRealTransform']]]

Clazz.newMeth(C$, 'x$D$D', function (r, t) {
return r * Math.cos(t);
}, 1);

Clazz.newMeth(C$, 'y$D$D', function (r, t) {
return r * Math.sin(t);
}, 1);

Clazz.newMeth(C$, 'r$D$D', function (x, y) {
return Math.sqrt(x * x + y * y);
}, 1);

Clazz.newMeth(C$, 't$D$D', function (x, y) {
return Math.atan2(y, x);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.inverse=Clazz.new_($I$(1,1).c$$net_imglib2_realtransform_InvertibleRealTransform,[this]);
}, 1);

Clazz.newMeth(C$, 'numSourceDimensions$', function () {
return 2;
});

Clazz.newMeth(C$, 'numTargetDimensions$', function () {
return 2;
});

Clazz.newMeth(C$, 'apply$DA$DA', function (source, target) {
var r=source[0];
var t=source[1];
target[0]=C$.x$D$D(r, t);
target[1]=C$.y$D$D(r, t);
});

Clazz.newMeth(C$, 'apply$FA$FA', function (source, target) {
var r=source[0];
var t=source[1];
target[0]=C$.x$D$D(r, t);
target[1]=C$.y$D$D(r, t);
});

Clazz.newMeth(C$, 'apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable', function (source, target) {
var r=source.getDoublePosition$I(0);
var t=source.getDoublePosition$I(1);
target.setPosition$D$I(C$.x$D$D(r, t), 0);
target.setPosition$D$I(C$.y$D$D(r, t), 1);
});

Clazz.newMeth(C$, 'applyInverse$DA$DA', function (source, target) {
var x=target[0];
var y=target[1];
source[0]=C$.r$D$D(x, y);
source[1]=C$.t$D$D(x, y);
});

Clazz.newMeth(C$, 'applyInverse$FA$FA', function (source, target) {
var x=target[0];
var y=target[1];
source[0]=C$.r$D$D(x, y);
source[1]=C$.t$D$D(x, y);
});

Clazz.newMeth(C$, 'applyInverse$net_imglib2_RealPositionable$net_imglib2_RealLocalizable', function (source, target) {
var x=target.getDoublePosition$I(0);
var y=target.getDoublePosition$I(1);
source.setPosition$D$I(C$.r$D$D(x, y), 0);
source.setPosition$D$I(C$.t$D$D(x, y), 1);
});

Clazz.newMeth(C$, 'inverse$', function () {
return this.inverse;
});

Clazz.newMeth(C$, 'copy$', function () {
return this;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
