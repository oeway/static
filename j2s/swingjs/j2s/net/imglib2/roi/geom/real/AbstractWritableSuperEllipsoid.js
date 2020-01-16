(function(){var P$=Clazz.newPackage("net.imglib2.roi.geom.real"),I$=[[0,['net.imglib2.roi.geom.real.AbstractWritableSuperEllipsoid','.SuperEllipsoidCenter'],'net.imglib2.roi.geom.real.SuperEllipsoid']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractWritableSuperEllipsoid", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imglib2.AbstractEuclideanSpace', 'net.imglib2.roi.geom.real.WritableSuperEllipsoid');
C$.$classes$=[['SuperEllipsoidCenter',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['D',['exponent'],'O',['center','double[]','+semiAxisLengths']]]

Clazz.newMeth(C$, 'c$$DA$DA$D', function (center, semiAxisLengths, exponent) {
;C$.superclazz.c$$I.apply(this,[Math.min(center.length, semiAxisLengths.length)]);C$.$init$.apply(this);
if (exponent <= 0 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["exponent must be positve and non-zero"]);
this.exponent=exponent;
this.semiAxisLengths=Clazz.array(Double.TYPE, [this.n]);
this.center=Clazz.array(Double.TYPE, [this.n]);
for (var i=0; i < this.n; i++) {
var val=semiAxisLengths[i];
if (val <= 0 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Semi-axis lengths must be positive and non-zero"]);
this.semiAxisLengths[i]=val;
this.center[i]=center[i];
}
}, 1);

Clazz.newMeth(C$, 'realMin$I', function (d) {
return this.center[d] - this.semiAxisLengths[d];
});

Clazz.newMeth(C$, 'realMax$I', function (d) {
return this.center[d] + this.semiAxisLengths[d];
});

Clazz.newMeth(C$, 'exponent$', function () {
return this.exponent;
});

Clazz.newMeth(C$, 'semiAxisLength$I', function (d) {
return this.semiAxisLengths[d];
});

Clazz.newMeth(C$, 'center$', function () {
return Clazz.new_($I$(1,1).c$$DA, [this, null, this.center]);
});

Clazz.newMeth(C$, 'setExponent$D', function (exponent) {
if (exponent <= 0 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["exponent must be positve and non-zero"]);
this.exponent=exponent;
});

Clazz.newMeth(C$, 'setSemiAxisLength$I$D', function (d, length) {
if (length <= 0 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Semi-axis length must be positive and non-zero"]);
this.semiAxisLengths[d]=length;
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
for (var d=0; d < this.n; d++) distancePowered += Math.pow(Math.abs((l.getDoublePosition$I(d) - this.center[d]) / this.semiAxisLengths[d]), this.exponent);

return distancePowered;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
;
(function(){/*c*/var C$=Clazz.newClass(P$.AbstractWritableSuperEllipsoid, "SuperEllipsoidCenter", function(){
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
