(function(){var P$=Clazz.newPackage("jitk.spline"),p$1={},I$=[[0,'org.ejml.data.DenseMatrix64F','org.ejml.ops.CommonOps','org.ejml.ops.NormOps']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TransformInverseGradientDescent");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.error=9999.0;
this.stepSz=1.0;
this.maxIters=20;
this.eps=1.0E-6;
this.beta=0.7;
}, 1);

C$.$fields$=[['D',['error','stepSz','eps','beta'],'I',['ndims','maxIters'],'O',['xfm','jitk.spline.ThinPlateR2LogRSplineKernelTransform','jacobian','org.ejml.data.DenseMatrix64F','+directionalDeriv','+descentDirectionMag','+dir','+errorV','+estimate','+estimateXfm','+target']]]

Clazz.newMeth(C$, 'c$$I$jitk_spline_ThinPlateR2LogRSplineKernelTransform', function (ndims, xfm) {
;C$.$init$.apply(this);
this.ndims=ndims;
this.xfm=xfm;
this.dir=Clazz.new_($I$(1,1).c$$I$I,[ndims, 1]);
this.errorV=Clazz.new_($I$(1,1).c$$I$I,[ndims, 1]);
this.directionalDeriv=Clazz.new_($I$(1,1).c$$I$I,[ndims, 1]);
this.descentDirectionMag=Clazz.new_($I$(1,1).c$$I$I,[1, 1]);
}, 1);

Clazz.newMeth(C$, 'setEps$D', function (eps) {
this.eps=eps;
});

Clazz.newMeth(C$, 'setStepSize$D', function (stepSize) {
this.stepSz=stepSize;
});

Clazz.newMeth(C$, 'setJacobian$DAA', function (mtx) {
this.jacobian=Clazz.new_($I$(1,1).c$$DAA,[mtx]);
});

Clazz.newMeth(C$, 'setTarget$DA', function (tgt) {
this.target.setData$DA(tgt);
});

Clazz.newMeth(C$, 'getErrorVector$', function () {
return this.errorV;
});

Clazz.newMeth(C$, 'getDirection$', function () {
return this.dir;
});

Clazz.newMeth(C$, 'getJacobian$', function () {
return this.jacobian;
});

Clazz.newMeth(C$, 'setEstimate$DA', function (est) {
this.estimate=Clazz.new_($I$(1,1).c$$I$I,[this.ndims, 1]);
this.estimate.setData$DA(est);
});

Clazz.newMeth(C$, 'setEstimateXfm$DA', function (est) {
this.estimateXfm=Clazz.new_($I$(1,1).c$$I$I,[this.ndims, 1]);
this.estimateXfm.setData$DA(est);
this.updateError$();
});

Clazz.newMeth(C$, 'getEstimate$', function () {
return this.estimate;
});

Clazz.newMeth(C$, 'getError$', function () {
return this.error;
});

Clazz.newMeth(C$, 'oneIteration$', function () {
this.oneIteration$Z(true);
});

Clazz.newMeth(C$, 'oneIteration$Z', function (updateError) {
this.computeDirection$();
this.updateEstimate$D(this.stepSz);
if (updateError) this.updateError$();
});

Clazz.newMeth(C$, 'computeDirectionSteepest$', function () {
var tmp=Clazz.new_($I$(1,1).c$$I$I,[this.ndims, 1]);
$I$(2).mult$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(this.jacobian, this.estimate, tmp);
$I$(2).subEquals$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F(tmp, this.errorV);
$I$(2).multTransA$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(2, this.jacobian, tmp, this.dir);
var norm=$I$(3).normP2$org_ejml_data_DenseMatrix64F(this.dir);
$I$(2).divide$D$org_ejml_data_D1Matrix64F(norm, this.dir);
$I$(2).mult$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(this.jacobian, this.dir, this.directionalDeriv);
$I$(2).scale$D$org_ejml_data_D1Matrix64F(-1, this.dir);
});

Clazz.newMeth(C$, 'computeDirection$', function () {
$I$(2).solve$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F(this.jacobian, this.errorV, this.dir);
var norm=$I$(3).normP2$org_ejml_data_DenseMatrix64F(this.dir);
$I$(2).divide$D$org_ejml_data_D1Matrix64F(norm, this.dir);
$I$(2).mult$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(this.jacobian, this.dir, this.directionalDeriv);
$I$(2).multTransA$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(this.dir, this.directionalDeriv, this.descentDirectionMag);
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
var d=this.dir.data;
var x=this.estimate.data;
var x_ap=Clazz.array(Double.TYPE, [this.ndims]);
for (var i=0; i < this.ndims; i++) x_ap[i]=x[i] + t * d[i];

var phix=this.estimateXfm.data;
var phix_ap=this.xfm.apply$DA(x_ap);
var fx=this.squaredError$DA(phix);
var fx_ap=this.squaredError$DA(phix_ap);
var m=p$1.sumSquaredErrorsDeriv$DA$DA.apply(this, [this.target.data, phix]) * this.descentDirectionMag.get$I(0);
if (fx_ap < fx + c * t * m  ) return true;
 else return false;
});

Clazz.newMeth(C$, 'squaredError$DA', function (x) {
var error=0;
for (var i=0; i < this.ndims; i++) error += (x[i] - this.target.get$I(i)) * (x[i] - this.target.get$I(i));

return error;
});

Clazz.newMeth(C$, 'updateEstimate$D', function (stepSize) {
$I$(2).addEquals$org_ejml_data_D1Matrix64F$D$org_ejml_data_D1Matrix64F(this.estimate, stepSize, this.dir);
});

Clazz.newMeth(C$, 'updateEstimateNormBased$D', function (stepSize) {
var norm=$I$(3).normP2$org_ejml_data_DenseMatrix64F(this.dir);
if (norm > stepSize ) {
$I$(2).scale$D$org_ejml_data_D1Matrix64F(-stepSize / norm, this.dir);
}$I$(2).addEquals$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F(this.estimate, this.dir);
});

Clazz.newMeth(C$, 'updateError$', function () {
if (this.estimate == null  || this.target == null  ) {
System.err.println$S("WARNING: Call to updateError with null target or estimate");
return;
}$I$(2).sub$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F(this.target, this.estimateXfm, this.errorV);
this.error=Math.abs(this.errorV.get$I(0));
for (var i=1; i < this.ndims; i++) {
if (Math.abs(this.errorV.get$I(i)) > this.error ) this.error=Math.abs(this.errorV.get$I(i));
}
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

Clazz.newMeth(C$, 'copyVectorIntoArray$org_ejml_data_DenseMatrix64F$DA', function (vec, array) {
System.arraycopy$O$I$O$I$I(vec.data, 0, array, 0, vec.getNumElements$());
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:27 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
