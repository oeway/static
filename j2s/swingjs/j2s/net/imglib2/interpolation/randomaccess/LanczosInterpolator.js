(function(){var P$=Clazz.newPackage("net.imglib2.interpolation.randomaccess"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "LanczosInterpolator", null, 'net.imglib2.position.transform.FloorOffset', 'net.imglib2.RealRandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['clip'],'D',['minValue','maxValue'],'I',['alpha'],'O',['interpolatedValue','<T extends RealType<T>>','size','long[]','+max','lut','double[]','+products']]]

Clazz.newMeth(C$, 'createOffset$I$I', function (a, n) {
var offset=Clazz.array(Long.TYPE, [n]);
for (var d=0; d < n; ++d) offset[d]=-a + 1;

return offset;
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessible$I$Z$D$D', function (randomAccessible, alpha, clip, min, max) {
;C$.superclazz.c$$TLocalizablePositionable$JA.apply(this,[randomAccessible.randomAccess$(), C$.createOffset$I$I(alpha, randomAccessible.numDimensions$())]);C$.$init$.apply(this);
this.alpha=alpha;
this.lut=C$.createLanczosLUT$I$I(alpha, 10);
this.products=Clazz.array(Double.TYPE, [this.n + 1]);
this.products[this.n]=1.0;
this.size=Clazz.array(Long.TYPE, [this.n]);
this.max=Clazz.array(Long.TYPE, [this.n]);
for (var d=0; d < this.n; ++d) this.size[d]=alpha * 2;

this.clip=clip;
this.interpolatedValue=this.target.get$().createVariable$();
if (min == max ) {
this.minValue=this.interpolatedValue.getMinValue$();
this.maxValue=this.interpolatedValue.getMaxValue$();
} else {
this.minValue=min;
this.maxValue=max;
}}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_interpolation_randomaccess_LanczosInterpolator', function (interpolator) {
;C$.superclazz.c$$TLocalizablePositionable$JA.apply(this,[interpolator.target.copyRandomAccess$(), interpolator.offset]);C$.$init$.apply(this);
this.alpha=interpolator.alpha;
this.lut=interpolator.lut.clone$();
this.products=interpolator.products.clone$();
this.size=interpolator.size.clone$();
this.max=interpolator.max.clone$();
this.clip=interpolator.clip;
this.interpolatedValue=interpolator.interpolatedValue.copy$();
this.minValue=interpolator.minValue;
this.maxValue=interpolator.maxValue;
}, 1);

Clazz.newMeth(C$, 'createLanczosLUT$I$I', function (max, scale) {
var lut=Clazz.array(Double.TYPE, [max * scale + 2]);
for (var i=0; i < lut.length; ++i) {
var x=i / 10.0;
lut[i]=C$.lanczos$D$D(x, max);
}
return lut;
}, 1);

Clazz.newMeth(C$, 'resetKernel$', function () {
for (var d=this.n - 1; d >= 0; --d) {
var p=this.target.getLongPosition$I(d);
this.max[d]=p + this.size[d];
this.products[d]=p$1.lookUpLanczos$D.apply(this, [this.position[d] - p]) * this.products[d + 1];
}
});

Clazz.newMeth(C$, 'accumulate$I', function (d) {
for (var e=d; e >= 0; --e) this.products[e]=p$1.lookUpLanczos$D.apply(this, [this.position[e] - this.target.getLongPosition$I(e)]) * this.products[e + 1];

});

Clazz.newMeth(C$, 'get$', function () {
var convolved=0;
this.resetKernel$();
var proceed=true;
 A : while (proceed){
convolved += this.target.get$().getRealDouble$() * this.products[0];
for (var d=0; d < this.n; ++d) {
this.target.fwd$I(d);
var p=this.target.getLongPosition$I(d);
if (p < this.max[d]) {
this.products[d]=p$1.lookUpLanczos$D.apply(this, [this.position[d] - p]) * this.products[++d];
continue A;
}this.target.move$J$I(-this.size[d], d);
this.accumulate$I(d);
}
proceed=false;
}
if (this.clip) {
if (convolved < this.minValue ) convolved=this.minValue;
 else if (convolved > this.maxValue ) convolved=this.maxValue;
}this.interpolatedValue.setReal$D(convolved);
return this.interpolatedValue;
});

Clazz.newMeth(C$, 'lanczos$D$D', function (x, a) {
if (x == 0 ) return 1;
return ((a * Math.sin(3.141592653589793 * x) * Math.sin(3.141592653589793 * x / a) ) / (9.869604401089358 * x * x ));
}, 1);

Clazz.newMeth(C$, 'lookUpLanczos$D', function (x) {
var y=x < 0  ? -10 * x : 10 * x;
var yi=(y|0);
var d=y - yi;
return (this.lut[yi + 1] - this.lut[yi]) * d + this.lut[yi];
}, p$1);

Clazz.newMeth(C$, 'copy$', function () {
return this.copy$();
});

Clazz.newMeth(C$, 'copyRealRandomAccess$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_interpolation_randomaccess_LanczosInterpolator,[this]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:09 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
