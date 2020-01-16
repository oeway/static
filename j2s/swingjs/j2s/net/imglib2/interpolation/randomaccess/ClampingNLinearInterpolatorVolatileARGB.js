(function(){var P$=Clazz.newPackage("net.imglib2.interpolation.randomaccess"),p$1={},I$=[[0,'net.imglib2.util.Util']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ClampingNLinearInterpolatorVolatileARGB", null, 'net.imglib2.interpolation.randomaccess.NLinearInterpolator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['valid'],'D',['accA','accR','accG','accB']]]

Clazz.newMeth(C$, 'c$$net_imglib2_interpolation_randomaccess_ClampingNLinearInterpolatorVolatileARGB', function (interpolator) {
;C$.superclazz.c$$net_imglib2_interpolation_randomaccess_NLinearInterpolator.apply(this,[interpolator]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['c$$net_imglib2_RandomAccessible$TT'], function (randomAccessible, type) {
;C$.superclazz.c$$net_imglib2_RandomAccessible$TT.apply(this,[randomAccessible, type]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessible', function (randomAccessible) {
C$.c$$net_imglib2_RandomAccessible$TT.apply(this, [randomAccessible, randomAccessible.randomAccess$().get$()]);
}, 1);

Clazz.newMeth(C$, 'get$', function () {
this.fillWeights$();
var t=this.target.get$();
var argb=t.get$().get$();
this.valid=t.isValid$();
this.accA=((argb >> 24) & 255) * this.weights[0];
this.accR=((argb >> 16) & 255) * this.weights[0];
this.accG=((argb >> 8) & 255) * this.weights[0];
this.accB=(argb & 255) * this.weights[0];
this.code=0;
p$1.graycodeFwdRecursive$I.apply(this, [this.n - 1]);
this.target.bck$I(this.n - 1);
var a=Math.min(255, ($I$(1).round$D(this.accA)|0));
var r=Math.min(255, ($I$(1).round$D(this.accR)|0));
var g=Math.min(255, ($I$(1).round$D(this.accG)|0));
var b=Math.min(255, ($I$(1).round$D(this.accB)|0));
this.accumulator.get$().set$I((((((a << 8) | r) << 8) | g) << 8) | b);
this.accumulator.setValid$Z(this.valid);
return this.accumulator;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_interpolation_randomaccess_ClampingNLinearInterpolatorVolatileARGB,[this]);
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
var argb=t.get$().get$();
this.valid&=t.isValid$();
this.accA += ((argb >> 24) & 255) * this.weights[this.code];
this.accR += ((argb >> 16) & 255) * this.weights[this.code];
this.accG += ((argb >> 8) & 255) * this.weights[this.code];
this.accB += (argb & 255) * this.weights[this.code];
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:09 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
