(function(){var P$=Clazz.newPackage("net.imglib2.roi.geom.real"),I$=[[0,['net.imglib2.roi.geom.real.AbstractWritableSphere','.SphereCenter'],'net.imglib2.roi.geom.real.SuperEllipsoid']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractWritableSphere", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imglib2.AbstractEuclideanSpace', 'net.imglib2.roi.geom.real.WritableSphere');
C$.$classes$=[['SphereCenter',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['D',['radius'],'O',['center','double[]']]]

Clazz.newMeth(C$, 'c$$DA$D', function (center, radius) {
;C$.superclazz.c$$I.apply(this,[center.length]);C$.$init$.apply(this);
if (radius <= 0 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Radius must be positive and non-zero."]);
this.center=center.clone$();
this.radius=radius;
}, 1);

Clazz.newMeth(C$, 'realMin$I', function (d) {
return this.center[d] - this.radius;
});

Clazz.newMeth(C$, 'realMax$I', function (d) {
return this.center[d] + this.radius;
});

Clazz.newMeth(C$, 'exponent$', function () {
return 2;
});

Clazz.newMeth(C$, 'semiAxisLength$I', function (d) {
return this.radius;
});

Clazz.newMeth(C$, 'center$', function () {
return Clazz.new_($I$(1,1).c$$DA, [this, null, this.center]);
});

Clazz.newMeth(C$, 'radius$', function () {
return this.radius;
});

Clazz.newMeth(C$, 'setSemiAxisLength$I$D', function (d, length) {
this.setRadius$D(length);
});

Clazz.newMeth(C$, 'setRadius$D', function (radius) {
if (radius <= 0 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Radius must be positive and non-zero."]);
this.radius=radius;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
return Clazz.instanceOf(obj, "net.imglib2.roi.geom.real.SuperEllipsoid") && $I$(2).equals$net_imglib2_roi_geom_real_SuperEllipsoid$net_imglib2_roi_geom_real_SuperEllipsoid(this, obj) ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return $I$(2).hashCode$net_imglib2_roi_geom_real_SuperEllipsoid(this);
});

Clazz.newMeth(C$, 'distancePowered$net_imglib2_RealLocalizable', function (l) {
Clazz.assert(C$, this, function(){return (l.numDimensions$() >= this.n)}, function(){return "l must have no less than " + this.n + " dimensions" });
var distancePowered=0;
for (var d=0; d < this.n; d++) distancePowered += (l.getDoublePosition$I(d) - this.center[d]) * (l.getDoublePosition$I(d) - this.center[d]);

return distancePowered;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractWritableSphere, "SphereCenter", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'net.imglib2.roi.util.AbstractRealMaskPoint');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$DA', function (pos) {
;C$.superclazz.c$$DA.apply(this,[pos]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'updateBounds$', function () {
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:53 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
