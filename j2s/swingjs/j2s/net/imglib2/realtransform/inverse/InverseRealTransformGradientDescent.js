(function(){var P$=Clazz.newPackage("net.imglib2.realtransform.inverse"),p$1={},I$=[[0,'net.imglib2.realtransform.AffineTransform']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "InverseRealTransformGradientDescent", null, null, 'net.imglib2.realtransform.RealTransform');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.fixZ=false;
this.error=9999.0;
this.stepSz=1.0;
this.beta=0.7;
this.tolerance=0.5;
this.c=1.0E-4;
this.maxIters=100;
this.jacobianEstimateStep=1.0;
this.jacobianRegularizationEps=0.1;
this.stepSizeMaxTries=10;
this.maxStepSize=1.7976931348623157E308;
this.minStepSize=1.0E-9;
}, 1);

C$.$fields$=[['Z',['fixZ'],'D',['descentDirectionMag','error','stepSz','beta','tolerance','c','jacobianEstimateStep','jacobianRegularizationEps','maxStepSize','minStepSize'],'I',['ndims','maxIters','stepSizeMaxTries'],'O',['jacobian','net.imglib2.realtransform.AffineTransform','directionalDeriv','double[]','+dir','+errorV','+estimate','+estimateXfm','+target','xfm','net.imglib2.realtransform.inverse.DifferentiableRealTransform','guess','double[]']]]

Clazz.newMeth(C$, 'c$$I$net_imglib2_realtransform_inverse_DifferentiableRealTransform', function (ndims, xfm) {
;C$.$init$.apply(this);
this.ndims=ndims;
this.xfm=xfm;
this.dir=Clazz.array(Double.TYPE, [ndims]);
this.errorV=Clazz.array(Double.TYPE, [ndims]);
this.directionalDeriv=Clazz.array(Double.TYPE, [ndims]);
this.descentDirectionMag=0.0;
this.jacobian=Clazz.new_($I$(1,1).c$$I,[ndims]);
this.target=Clazz.array(Double.TYPE, [ndims]);
this.estimate=Clazz.array(Double.TYPE, [ndims]);
this.estimateXfm=Clazz.array(Double.TYPE, [ndims]);
}, 1);

Clazz.newMeth(C$, 'setBeta$D', function (beta) {
this.beta=beta;
});

Clazz.newMeth(C$, 'setC$D', function (c) {
this.c=c;
});

Clazz.newMeth(C$, 'setTolerance$D', function (tol) {
this.tolerance=tol;
});

Clazz.newMeth(C$, 'setMaxIters$I', function (maxIters) {
this.maxIters=maxIters;
});

Clazz.newMeth(C$, 'setFixZ$Z', function (fixZ) {
this.fixZ=fixZ;
});

Clazz.newMeth(C$, 'setStepSize$D', function (stepSize) {
this.stepSz=stepSize;
});

Clazz.newMeth(C$, 'setMinStep$D', function (minStep) {
this.minStepSize=minStep;
});

Clazz.newMeth(C$, 'setMaxStep$D', function (maxStep) {
this.maxStepSize=maxStep;
});

Clazz.newMeth(C$, 'setJacobianEstimateStep$D', function (jacStep) {
this.jacobianEstimateStep=jacStep;
});

Clazz.newMeth(C$, 'setJacobianRegularizationEps$D', function (e) {
this.jacobianRegularizationEps=e;
});

Clazz.newMeth(C$, 'setStepSizeMaxTries$I', function (stepSizeMaxTries) {
this.stepSizeMaxTries=stepSizeMaxTries;
});

Clazz.newMeth(C$, 'setTarget$DA', function (tgt) {
System.arraycopy$O$I$O$I$I(tgt, 0, this.target, 0, this.ndims);
});

Clazz.newMeth(C$, 'getErrorVector$', function () {
return this.errorV;
});

Clazz.newMeth(C$, 'getDirection$', function () {
return this.dir;
});

Clazz.newMeth(C$, 'setEstimate$DA', function (est) {
System.arraycopy$O$I$O$I$I(est, 0, this.estimate, 0, this.ndims);
});

Clazz.newMeth(C$, 'setEstimateXfm$DA', function (est) {
System.arraycopy$O$I$O$I$I(est, 0, this.estimateXfm, 0, this.ndims);
});

Clazz.newMeth(C$, 'getEstimate$', function () {
return this.estimate;
});

Clazz.newMeth(C$, 'getError$', function () {
return this.error;
});

Clazz.newMeth(C$, 'numSourceDimensions$', function () {
return this.ndims;
});

Clazz.newMeth(C$, 'numTargetDimensions$', function () {
return this.ndims;
});

Clazz.newMeth(C$, 'copy$', function () {
var copy=Clazz.new_(C$.c$$I$net_imglib2_realtransform_inverse_DifferentiableRealTransform,[this.ndims, this.xfm]);
copy.setBeta$D(this.beta);
copy.setC$D(this.c);
copy.setTolerance$D(this.tolerance);
copy.setMaxIters$I(this.maxIters);
return copy;
});

Clazz.newMeth(C$, 'setGuess$DA', function (guess) {
this.guess=guess;
});

Clazz.newMeth(C$, 'apply$DA$DA', function (s, t) {
this.inverseTol$DA$DA$D$I(s, s, this.tolerance, this.maxIters);
System.arraycopy$O$I$O$I$I(this.estimate, 0, t, 0, t.length);
});

Clazz.newMeth(C$, 'apply$FA$FA', function (src, tgt) {
var srcd=Clazz.array(Double.TYPE, [src.length]);
var tgtd=Clazz.array(Double.TYPE, [tgt.length]);
for (var i=0; i < src.length; i++) srcd[i]=src[i];

this.apply$DA$DA(srcd, tgtd);
for (var i=0; i < tgt.length; i++) tgt[i]=tgtd[i];

});

Clazz.newMeth(C$, 'apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable', function (src, tgt) {
var srcd=Clazz.array(Double.TYPE, [src.numDimensions$()]);
var tgtd=Clazz.array(Double.TYPE, [tgt.numDimensions$()]);
src.localize$DA(srcd);
this.apply$DA$DA(srcd, tgtd);
tgt.setPosition$DA(tgtd);
});

Clazz.newMeth(C$, 'inverseTol$DA$DA$D$I', function (target, guess, tolerance, maxIters) {
this.target=target;
this.error=999 * tolerance;
this.setEstimate$DA(guess);
this.xfm.apply$DA$DA(this.estimate, this.estimateXfm);
this.updateError$();
var t=1.0;
var k=0;
while (this.error >= tolerance  && k < maxIters ){
this.xfm.directionToward$DA$DA$DA(this.dir, this.estimateXfm, target);
t=this.backtrackingLineSearch$D(this.error);
if (t == 0.0 ) break;
this.updateEstimate$D(t);
this.xfm.apply$DA$DA(this.estimate, this.estimateXfm);
this.updateError$();
this.error=this.getError$();
k++;
}
return this.error;
});

Clazz.newMeth(C$, 'regularizeJacobian$', function () {
for (var i=0; i < this.ndims; i++) {
this.jacobian.set$D$I$I(this.jacobianRegularizationEps + this.jacobian.get$I$I(i, i), i, i);
}
});

Clazz.newMeth(C$, 'backtrackingLineSearch$D', function (t0) {
var t=t0;
var k=0;
while (k < this.stepSizeMaxTries){
if (this.armijoCondition$D$D(this.c, t)) {
break;
} else t *= this.beta;
k++;
}
if (t < this.minStepSize ) return this.minStepSize;
if (t > this.maxStepSize ) return this.maxStepSize;
return t;
});

Clazz.newMeth(C$, 'backtrackingLineSearch$D$D$I$D', function (c, beta, maxtries, t0) {
var t=t0;
var k=0;
while (k < maxtries){
if (this.armijoCondition$D$D(c, t)) {
break;
} else t *= beta;
k++;
}
return t;
});

Clazz.newMeth(C$, 'armijoCondition$D$D', function (c, t) {
var d=this.dir;
var x=this.estimate;
var x_ap=Clazz.array(Double.TYPE, [this.ndims]);
for (var i=0; i < this.ndims; i++) x_ap[i]=x[i] + t * d[i];

var phix=this.estimateXfm;
var phix_ap=Clazz.array(Double.TYPE, [this.ndims]);
this.xfm.apply$DA$DA(x_ap, phix_ap);
var fx=this.squaredError$DA(phix);
var fx_ap=this.squaredError$DA(phix_ap);
var m=p$1.sumSquaredErrorsDeriv$DA$DA.apply(this, [this.target, phix]) * this.descentDirectionMag;
if (fx_ap < fx + c * t * m  ) return true;
 else return false;
});

Clazz.newMeth(C$, 'squaredError$DA', function (x) {
var error=0;
for (var i=0; i < this.ndims; i++) error += (x[i] - this.target[i]) * (x[i] - this.target[i]);

return error;
});

Clazz.newMeth(C$, 'updateEstimate$D', function (stepSize) {
for (var i=0; i < this.ndims; i++) this.estimate[i] += stepSize * this.dir[i];

});

Clazz.newMeth(C$, 'updateError$', function () {
if (this.estimate == null  || this.target == null  ) {
System.err.println$S("WARNING: Call to updateError with null target or estimate");
return;
}for (var i=0; i < this.ndims; i++) this.errorV[i]=this.target[i] - this.estimateXfm[i];

this.error=0.0;
for (var i=0; i < this.ndims; i++) {
this.error += this.errorV[i] * this.errorV[i];
}
this.error=Math.sqrt(this.error);
});

Clazz.newMeth(C$, 'sumSquaredErrorsDeriv$DA$DA', function (y, x) {
var errDeriv=0.0;
for (var i=0; i < this.ndims; i++) errDeriv += (y[i] - x[i]) * (y[i] - x[i]);

return 2 * errDeriv;
}, p$1);

Clazz.newMeth(C$, 'sumSquaredErrors$DA$DA', function (y, x) {
var ndims=y.length;
var err=0.0;
for (var i=0; i < ndims; i++) err += (y[i] - x[i]) * (y[i] - x[i]);

return err;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:56 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
