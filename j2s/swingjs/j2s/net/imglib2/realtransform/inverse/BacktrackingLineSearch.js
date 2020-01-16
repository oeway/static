(function(){var P$=Clazz.newPackage("net.imglib2.realtransform.inverse"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "BacktrackingLineSearch");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.maxIters=1000;
this.eps=0.1;
this.epsSquared=this.eps * this.eps;
this.c=0.5;
this.beta=0.5;
this.initStepSize=10;
this.lineSearchMaxTries=16;
}, 1);

C$.$fields$=[['D',['fx','currentSquaredError','eps','epsSquared','c','beta','initStepSize'],'I',['nd','maxIters','lineSearchMaxTries'],'O',['target','double[]','+x','+y','+x_ap','+y_ap','+dir','fwdXfm','net.imglib2.realtransform.inverse.DifferentiableRealTransform']]]

Clazz.newMeth(C$, 'c$$I', function (nd) {
;C$.$init$.apply(this);
this.nd=nd;
this.y=Clazz.array(Double.TYPE, [nd]);
this.x_ap=Clazz.array(Double.TYPE, [nd]);
this.y_ap=Clazz.array(Double.TYPE, [nd]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_realtransform_inverse_DifferentiableRealTransform', function (fwdXfm) {
;C$.$init$.apply(this);
this.fwdXfm=fwdXfm;
this.nd=fwdXfm.numSourceDimensions$();
this.y=Clazz.array(Double.TYPE, [this.nd]);
this.x_ap=Clazz.array(Double.TYPE, [this.nd]);
this.y_ap=Clazz.array(Double.TYPE, [this.nd]);
}, 1);

Clazz.newMeth(C$, 'setForwardTransform$net_imglib2_realtransform_inverse_DifferentiableRealTransform', function (fwdXfm) {
Clazz.assert(C$, this, function(){return (fwdXfm.numSourceDimensions$() == this.nd)});
this.fwdXfm=fwdXfm;
});

Clazz.newMeth(C$, 'setC$D', function (c) {
this.c=c;
});

Clazz.newMeth(C$, 'setBeta$D', function (beta) {
this.beta=beta;
});

Clazz.newMeth(C$, 'setInitStep$D', function (initStepSize) {
this.initStepSize=initStepSize;
});

Clazz.newMeth(C$, 'setMaxIterations$I', function (maxIters) {
this.maxIters=maxIters;
});

Clazz.newMeth(C$, 'setMaxLineSearchTries$I', function (lineSearchMaxTries) {
this.lineSearchMaxTries=lineSearchMaxTries;
});

Clazz.newMeth(C$, 'setEpsilon$D', function (eps) {
this.eps=eps;
this.epsSquared=eps * eps;
});

Clazz.newMeth(C$, 'setEstimate$DA', function (est) {
this.x=est;
this.fwdXfm.apply$DA$DA(this.x, this.y);
this.fx=this.squaredError$DA(this.y);
});

Clazz.newMeth(C$, 'setTarget$DA', function (tgt) {
this.target=tgt;
});

Clazz.newMeth(C$, 'setDirection$DA', function (dir) {
this.dir=dir;
var mag=this.dirMag$();
for (var i=0; i < this.nd; i++) dir[i]=dir[i] / mag;

});

Clazz.newMeth(C$, 'squaredError$DA', function (estimate) {
var squaredError=0;
for (var d=0; d < this.nd; d++) {
squaredError += (estimate[d] - this.target[d]) * (estimate[d] - this.target[d]);
}
return squaredError;
});

Clazz.newMeth(C$, 'squaredErrorAt$DA', function (source) {
var srcXfm=Clazz.array(Double.TYPE, [this.nd]);
this.fwdXfm.apply$DA$DA(source, srcXfm);
var squaredError=0;
for (var d=0; d < this.nd; d++) {
squaredError += (srcXfm[d] - this.target[d]) * (srcXfm[d] - this.target[d]);
}
return squaredError;
});

Clazz.newMeth(C$, 'dirMag$', function () {
var mag=0;
for (var i=0; i < this.nd; i++) mag += this.dir[i] * this.dir[i];

return Math.sqrt(mag);
});

Clazz.newMeth(C$, 'backtrackingLineSearch$D$D$I$D', function (c, beta, maxtries, t0) {
var t=t0;
var k=0;
while (k < maxtries){
if (p$1.armijoCondition$D$D.apply(this, [c, t])) {
break;
} else t *= beta;
k++;
}
return t;
});

Clazz.newMeth(C$, 'sumSquaredErrorsDeriv$DA$DA', function (y, x) {
var errDeriv=0.0;
for (var i=0; i < this.nd; i++) errDeriv += (y[i] - x[i]) * (y[i] - x[i]);

return 2 * errDeriv;
}, p$1);

Clazz.newMeth(C$, 'armijoCondition$D$D', function (c, t) {
for (var i=0; i < this.x.length; i++) this.x_ap[i]=this.x[i] + t * this.dir[i];

this.fwdXfm.apply$DA$DA(this.x_ap, this.y_ap);
var fx_ap=this.squaredError$DA(this.y_ap);
var m=1;
if (fx_ap < this.fx - c * t * m  ) {
this.currentSquaredError=fx_ap;
return true;
} else return false;
}, p$1);

Clazz.newMeth(C$, 'iterativeInverse$DA$DA', function (source, destination) {
this.target=destination;
var stepSize=this.initStepSize;
var tmp=Clazz.array(Double.TYPE, [this.nd]);
var tmpsrc=Clazz.array(Double.TYPE, [this.nd]);
var displacement=Clazz.array(Double.TYPE, [this.nd]);
var olderror=1.7976931348623157E308;
var currentError=0;
var i=0;
while (i < this.maxIters){
stepSize=this.initStepSize;
this.setEstimate$DA(source);
this.fwdXfm.directionToward$DA$DA$DA(displacement, source, destination);
this.setDirection$DA(displacement);
stepSize=this.backtrackingLineSearch$D$D$I$D(this.c, this.beta, this.lineSearchMaxTries, stepSize);
for (var d=0; d < this.nd; d++) {
tmpsrc[d]=source[d] + stepSize * displacement[d];
}
this.fwdXfm.apply$DA$DA(tmpsrc, tmp);
currentError=this.squaredError$DA(tmp);
if (currentError > olderror ) {
return Math.sqrt(currentError);
} else {
System.arraycopy$O$I$O$I$I(tmpsrc, 0, source, 0, source.length);
}olderror=currentError;
if (currentError < this.epsSquared ) {
break;
}i++;
}
this.currentSquaredError=currentError;
return Math.sqrt(currentError);
});

Clazz.newMeth(C$, 'getLastSquaredError$', function () {
return this.currentSquaredError;
});

Clazz.newMeth(C$, 'getLastError$', function () {
return Math.sqrt(this.currentSquaredError);
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:56 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
