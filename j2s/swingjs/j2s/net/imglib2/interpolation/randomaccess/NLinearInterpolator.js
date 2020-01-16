(function(){var P$=Clazz.newPackage("net.imglib2.interpolation.randomaccess"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "NLinearInterpolator", null, 'net.imglib2.position.transform.Floor', 'net.imglib2.RealRandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['code'],'O',['weights','double[]','accumulator','<T extends NumericType<T>>','+tmp']]]

Clazz.newMeth(C$, 'c$$net_imglib2_interpolation_randomaccess_NLinearInterpolator', function (interpolator) {
;C$.superclazz.c$$TLocalizablePositionable.apply(this,[interpolator.target.copyRandomAccess$()]);C$.$init$.apply(this);
this.weights=interpolator.weights.clone$();
this.code=interpolator.code;
this.accumulator=interpolator.accumulator.createVariable$();
this.tmp=interpolator.tmp.createVariable$();
for (var d=0; d < this.n; ++d) {
this.position[d]=interpolator.position[d];
this.discrete[d]=interpolator.discrete[d];
}
}, 1);

Clazz.newMeth(C$, ['c$$net_imglib2_RandomAccessible$TT'], function (randomAccessible, type) {
;C$.superclazz.c$$TLocalizablePositionable.apply(this,[randomAccessible.randomAccess$()]);C$.$init$.apply(this);
this.weights=Clazz.array(Double.TYPE, [1 << this.n]);
this.code=0;
this.accumulator=type.createVariable$();
this.tmp=type.createVariable$();
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessible', function (randomAccessible) {
C$.c$$net_imglib2_RandomAccessible$TT.apply(this, [randomAccessible, randomAccessible.randomAccess$().get$()]);
}, 1);

Clazz.newMeth(C$, 'fillWeights$', function () {
this.weights[0]=1.0;
for (var d=this.n - 1; d >= 0; --d) {
var w=this.position[d] - this.target.getLongPosition$I(d);
var wInv=1.0 - w;
var wInvIndexIncrement=1 << d;
var loopCount=1 << (this.n - 1 - d );
var baseIndexIncrement=wInvIndexIncrement * 2;
var baseIndex=0;
for (var i=0; i < loopCount; ++i) {
this.weights[baseIndex + wInvIndexIncrement]=this.weights[baseIndex] * w;
this.weights[baseIndex] *= wInv;
baseIndex+=baseIndexIncrement;
}
}
});

Clazz.newMeth(C$, 'get$', function () {
this.fillWeights$();
this.accumulator.set$TT(this.target.get$());
this.accumulator.mul$D(this.weights[0]);
this.code=0;
p$1.graycodeFwdRecursive$I.apply(this, [this.n - 1]);
this.target.bck$I(this.n - 1);
return this.accumulator;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_interpolation_randomaccess_NLinearInterpolator,[this]);
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
this.tmp.set$TT(this.target.get$());
this.tmp.mul$D(this.weights[this.code]);
this.accumulator.add$(this.tmp);
}, p$1);

Clazz.newMeth(C$, 'printWeights', function () {
for (var i=0; i < this.weights.length; ++i) System.out.printf$S$OA("weights [ %2d ] = %f\n", [new Integer(i), new Double(this.weights[i])]);

}, p$1);

Clazz.newMeth(C$, 'printCode', function () {
var maxbits=4;
var binary=Integer.toBinaryString$I(this.code);
for (var i=binary.length$(); i < 4; ++i) System.out.print$S("0");

System.out.print$S(binary);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:09 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
