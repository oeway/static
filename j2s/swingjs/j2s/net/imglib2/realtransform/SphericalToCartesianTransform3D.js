(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),I$=[[0,'net.imglib2.realtransform.InverseRealTransform']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SphericalToCartesianTransform3D", null, null, 'net.imglib2.realtransform.InvertibleRealTransform');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.instance=Clazz.new_(C$);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['inverse','net.imglib2.realtransform.InverseRealTransform']]
,['O',['instance','net.imglib2.realtransform.SphericalToCartesianTransform3D']]]

Clazz.newMeth(C$, 'getInstance$', function () {
return C$.instance;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.inverse=Clazz.new_($I$(1,1).c$$net_imglib2_realtransform_InvertibleRealTransform,[this]);
}, 1);

Clazz.newMeth(C$, 'x$D$D$D', function (r, inclination, azimuth) {
return r * Math.sin(inclination) * Math.cos(azimuth) ;
}, 1);

Clazz.newMeth(C$, 'y$D$D$D', function (r, inclination, azimuth) {
return r * Math.sin(inclination) * Math.sin(azimuth) ;
}, 1);

Clazz.newMeth(C$, 'z$D$D', function (r, inclination) {
return r * Math.cos(inclination);
}, 1);

Clazz.newMeth(C$, 'r$D$D$D', function (x, y, z) {
return Math.sqrt(x * x + y * y + z * z);
}, 1);

Clazz.newMeth(C$, 'inclination$D$D$D', function (x, y, z) {
return Math.acos(z / C$.r$D$D$D(x, y, z));
}, 1);

Clazz.newMeth(C$, 'azimuth$D$D', function (x, y) {
return Math.atan2(y, x);
}, 1);

Clazz.newMeth(C$, 'numSourceDimensions$', function () {
return 3;
});

Clazz.newMeth(C$, 'numTargetDimensions$', function () {
return 3;
});

Clazz.newMeth(C$, 'apply$DA$DA', function (source, target) {
var r=source[0];
var inclination=source[1];
var azimuth=source[2];
target[0]=C$.x$D$D$D(r, inclination, azimuth);
target[1]=C$.y$D$D$D(r, inclination, azimuth);
target[2]=C$.z$D$D(r, inclination);
});

Clazz.newMeth(C$, 'apply$FA$FA', function (source, target) {
var r=source[0];
var inclination=source[1];
var azimuth=source[2];
target[0]=C$.x$D$D$D(r, inclination, azimuth);
target[1]=C$.y$D$D$D(r, inclination, azimuth);
target[2]=C$.z$D$D(r, inclination);
});

Clazz.newMeth(C$, 'apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable', function (source, target) {
var r=source.getDoublePosition$I(0);
var inclination=source.getDoublePosition$I(1);
var azimuth=source.getDoublePosition$I(2);
target.setPosition$D$I(C$.x$D$D$D(r, inclination, azimuth), 0);
target.setPosition$D$I(C$.y$D$D$D(r, inclination, azimuth), 1);
target.setPosition$D$I(C$.z$D$D(r, inclination), 2);
});

Clazz.newMeth(C$, 'applyInverse$DA$DA', function (source, target) {
var x=target[0];
var y=target[1];
var z=target[2];
source[0]=C$.r$D$D$D(x, y, z);
source[1]=C$.inclination$D$D$D(x, y, z);
source[2]=C$.azimuth$D$D(x, y);
});

Clazz.newMeth(C$, 'applyInverse$FA$FA', function (source, target) {
var x=target[0];
var y=target[1];
var z=target[2];
source[0]=C$.r$D$D$D(x, y, z);
source[1]=C$.inclination$D$D$D(x, y, z);
source[2]=C$.azimuth$D$D(x, y);
});

Clazz.newMeth(C$, 'applyInverse$net_imglib2_RealPositionable$net_imglib2_RealLocalizable', function (source, target) {
var x=target.getDoublePosition$I(0);
var y=target.getDoublePosition$I(1);
var z=target.getDoublePosition$I(2);
source.setPosition$D$I(C$.r$D$D$D(x, y, z), 0);
source.setPosition$D$I(C$.inclination$D$D$D(x, y, z), 1);
source.setPosition$D$I(C$.azimuth$D$D(x, y), 2);
});

Clazz.newMeth(C$, 'inverse$', function () {
return this.inverse;
});

Clazz.newMeth(C$, 'copy$', function () {
return this;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:56 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
