(function(){var P$=Clazz.newPackage("net.imglib2.interpolation.randomaccess"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "ClampingNLinearInterpolatorVolatileRealType", null, 'net.imglib2.interpolation.randomaccess.NLinearInterpolator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['valid'],'D',['acc','clampMin','clampMax']]]

Clazz.newMeth(C$, 'c$$net_imglib2_interpolation_randomaccess_ClampingNLinearInterpolatorVolatileRealType', function (interpolator) {
;C$.superclazz.c$$net_imglib2_interpolation_randomaccess_NLinearInterpolator.apply(this,[interpolator]);C$.$init$.apply(this);
this.clampMin=interpolator.clampMin;
this.clampMax=interpolator.clampMax;
}, 1);

Clazz.newMeth(C$, ['c$$net_imglib2_RandomAccessible$TT'], function (randomAccessible, type) {
;C$.superclazz.c$$net_imglib2_RandomAccessible$TT.apply(this,[randomAccessible, type]);C$.$init$.apply(this);
this.clampMin=type.getMinValue$();
this.clampMax=type.getMaxValue$();
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessible', function (randomAccessible) {
C$.c$$net_imglib2_RandomAccessible$TT.apply(this, [randomAccessible, randomAccessible.randomAccess$().get$()]);
}, 1);

Clazz.newMeth(C$, 'get$', function () {
this.fillWeights$();
var t=this.target.get$();
this.acc=t.getRealDouble$() * this.weights[0];
this.valid=t.isValid$();
this.code=0;
p$1.graycodeFwdRecursive$I.apply(this, [this.n - 1]);
this.target.bck$I(this.n - 1);
this.accumulator.setReal$D(Math.max(this.clampMin, Math.min(this.clampMax, this.acc)));
this.accumulator.setValid$Z(this.valid);
return this.accumulator;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{R:"Object",T:"Object"},C$.c$$net_imglib2_interpolation_randomaccess_ClampingNLinearInterpolatorVolatileRealType,[this]);
});

Clazz.newMeth(C$, 'copyRealRandomAccess$', function () {
return this.copy$();
});

Clazz.newMeth(C$, 'graycodeFwdRecursive$I', function (dimension) {
if (dimension == 0) {
this.target.fwd$I(0);
this.code+=1;
p$1.accumulate.apply(this, []);
} else {
p$1.graycodeFwdRecursive$I.apply(this, [dimension - 1]);
this.target.fwd$I(dimension);
this.code+=1 << dimension;
p$1.accumulate.apply(this, []);
p$1.graycodeBckRecursive$I.apply(this, [dimension - 1]);
}}, p$1);

Clazz.newMeth(C$, 'graycodeBckRecursive$I', function (dimension) {
if (dimension == 0) {
this.target.bck$I(0);
this.code-=1;
p$1.accumulate.apply(this, []);
} else {
p$1.graycodeFwdRecursive$I.apply(this, [dimension - 1]);
this.target.bck$I(dimension);
this.code-=1 << dimension;
p$1.accumulate.apply(this, []);
p$1.graycodeBckRecursive$I.apply(this, [dimension - 1]);
}}, p$1);

Clazz.newMeth(C$, 'accumulate', function () {
var t=this.target.get$();
this.acc += t.getRealDouble$() * this.weights[this.code];
this.valid&=t.isValid$();
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:09 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
