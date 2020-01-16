(function(){var P$=Clazz.newPackage("jitk.spline"),p$1={},I$=[[0,'org.ejml.data.DenseMatrix64F','org.ejml.ops.CommonOps','org.ejml.factory.LinearSolverFactory','java.util.Arrays',['jitk.spline.ThinPlateR2LogRSplineKernelTransform','.IndexDistancePair'],'jitk.spline.TransformInverseGradientDescent']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ThinPlateR2LogRSplineKernelTransform", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.io.Serializable');
C$.$classes$=[['IndexDistancePair',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.stiffness=0.0;
this.wMatrixComputeD=false;
this.computeAffine=true;
}, 1);

C$.$fields$=[['Z',['wMatrixComputeD','computeAffine'],'D',['stiffness'],'I',['ndims','nLandmarks'],'O',['dMatrix','org.ejml.data.DenseMatrix64F','aMatrix','double[][]','bVector','double[]','sourceLandmarks','double[][]','weights','double[]','+tmpDisplacement']]]

Clazz.newMeth(C$, 'c$$I', function (ndims) {
;C$.$init$.apply(this);
this.ndims=ndims;
this.sourceLandmarks=null;
this.nLandmarks=0;
this.tmpDisplacement=Clazz.array(Double.TYPE, [ndims]);
}, 1);

Clazz.newMeth(C$, 'c$$I$DAA$DAA', function (ndims, srcPts, tgtPts) {
C$.c$$I$DAA$DAA$Z.apply(this, [ndims, srcPts, tgtPts, true]);
}, 1);

Clazz.newMeth(C$, 'c$$I$FAA$FAA', function (ndims, srcPts, tgtPts) {
C$.c$$I$FAA$FAA$Z.apply(this, [ndims, srcPts, tgtPts, true]);
}, 1);

Clazz.newMeth(C$, 'c$$I$DAA$DAA$Z', function (ndims, srcPts, tgtPts, computeAffine) {
;C$.$init$.apply(this);
this.ndims=ndims;
this.sourceLandmarks=srcPts;
this.computeAffine=computeAffine;
if (this.sourceLandmarks != null  && this.sourceLandmarks.length > 0 ) this.nLandmarks=srcPts[0].length;
 else this.nLandmarks=0;
this.computeW$org_ejml_data_DenseMatrix64F(this.buildDisplacements$DAA(tgtPts));
}, 1);

Clazz.newMeth(C$, 'c$$I$FAA$FAA$Z', function (ndims, srcPts, tgtPts, computeAffine) {
;C$.$init$.apply(this);
this.ndims=ndims;
this.computeAffine=computeAffine;
this.sourceLandmarks=Clazz.array(Double.TYPE, [ndims, this.nLandmarks]);
if (this.sourceLandmarks != null  && this.sourceLandmarks.length > 0 ) this.nLandmarks=srcPts[0].length;
 else this.nLandmarks=0;
for (var i=0; i < this.nLandmarks; ++i) {
for (var d=0; d < ndims; ++d) {
this.sourceLandmarks[d][i]=srcPts[d][i];
}
}
this.computeW$org_ejml_data_DenseMatrix64F(this.buildDisplacements$FAA(tgtPts));
}, 1);

Clazz.newMeth(C$, 'c$$I$DAA$DAA$DA', function (ndims, srcPts, tgtPts, weights) {
C$.c$$I$DAA$DAA.apply(this, [ndims, srcPts, tgtPts]);
p$1.setWeights$DA.apply(this, [weights]);
}, 1);

Clazz.newMeth(C$, 'c$$DAA$DAA$DA$DA', function (srcPts, aMatrix, bVector, dMatrixData) {
;C$.$init$.apply(this);
this.ndims=srcPts.length;
if (srcPts != null  && srcPts.length > 0 ) this.nLandmarks=srcPts[0].length;
 else this.nLandmarks=0;
this.sourceLandmarks=srcPts;
this.aMatrix=aMatrix;
this.bVector=bVector;
this.dMatrix=Clazz.new_($I$(1,1).c$$I$I,[this.ndims, this.nLandmarks]);
this.dMatrix.setData$DA(dMatrixData);
}, 1);

Clazz.newMeth(C$, 'getNumLandmarks$', function () {
return this.nLandmarks;
});

Clazz.newMeth(C$, 'getNumDims$', function () {
return this.ndims;
});

Clazz.newMeth(C$, 'getSourceLandmarks$', function () {
return this.sourceLandmarks;
});

Clazz.newMeth(C$, 'getAffine$', function () {
return this.aMatrix;
});

Clazz.newMeth(C$, 'getTranslation$', function () {
return this.bVector;
});

Clazz.newMeth(C$, 'getKnotWeights$', function () {
return this.dMatrix.getData$();
});

Clazz.newMeth(C$, 'setWeights$DA', function (weights) {
if (weights == null ) {
return;
}if (weights.length != this.nLandmarks) {
this.weights=weights;
} else {
}}, p$1);

Clazz.newMeth(C$, 'setDoAffine$Z', function (estimateAffine) {
this.computeAffine=estimateAffine;
});

Clazz.newMeth(C$, 'computeReflexiveG$', function () {
var gMatrix=Clazz.new_($I$(1,1).c$$I$I,[this.ndims, this.ndims]);
$I$(2).fill$org_ejml_data_D1Matrix64F$D(gMatrix, 0);
for (var i=0; i < this.ndims; i++) {
gMatrix.set$I$I$D(i, i, this.stiffness);
}
return gMatrix;
});

Clazz.newMeth(C$, 'normSqrd$DA', function (v) {
var nrm=0;
for (var i=0; i < v.length; i++) {
nrm += v[i] * v[i];
}
return nrm;
}, 1);

Clazz.newMeth(C$, 'buildDisplacements$DAA', function (targetLandmarks) {
var yMatrix;
if (this.computeAffine) yMatrix=Clazz.new_($I$(1,1).c$$I$I,[this.ndims * (this.nLandmarks + this.ndims + 1 ), 1]);
 else yMatrix=Clazz.new_($I$(1,1).c$$I$I,[this.ndims * this.nLandmarks, 1]);
var i=0;
while (i < this.nLandmarks){
for (var j=0; j < this.ndims; j++) {
yMatrix.set$I$I$D(i * this.ndims + j, 0, (targetLandmarks[j][i] - this.sourceLandmarks[j][i]));
}
i++;
}
if (this.computeAffine) {
for (i=0; i < this.ndims * (this.ndims + 1); i++) {
yMatrix.set$I$I$D(this.nLandmarks * this.ndims + i, 0, 0);
}
}return yMatrix;
});

Clazz.newMeth(C$, 'buildDisplacements$FAA', function (targetLandmarks) {
var yMatrix;
if (this.computeAffine) yMatrix=Clazz.new_($I$(1,1).c$$I$I,[this.ndims * (this.nLandmarks + this.ndims + 1 ), 1]);
 else yMatrix=Clazz.new_($I$(1,1).c$$I$I,[this.ndims * this.nLandmarks, 1]);
var i=0;
while (i < this.nLandmarks){
for (var j=0; j < this.ndims; j++) {
yMatrix.set$I$I$D(i * this.ndims + j, 0, (targetLandmarks[j][i] - this.sourceLandmarks[j][i]));
}
i++;
}
if (this.computeAffine) {
for (i=0; i < this.ndims * (this.ndims + 1); i++) {
yMatrix.set$I$I$D(this.nLandmarks * this.ndims + i, 0, 0);
}
}return yMatrix;
});

Clazz.newMeth(C$, 'computeW$org_ejml_data_DenseMatrix64F', function (yMatrix) {
var kMatrix;
var pMatrix;
var wMatrix;
this.dMatrix=Clazz.new_($I$(1,1).c$$I$I,[this.ndims, this.nLandmarks]);
kMatrix=Clazz.new_($I$(1,1).c$$I$I,[this.ndims * this.nLandmarks, this.ndims * this.nLandmarks]);
if (this.computeAffine) {
this.aMatrix=Clazz.array(Double.TYPE, [this.ndims, this.ndims]);
this.bVector=Clazz.array(Double.TYPE, [this.ndims]);
pMatrix=Clazz.new_($I$(1,1).c$$I$I,[(this.ndims * this.nLandmarks), (this.ndims * (this.ndims + 1))]);
wMatrix=Clazz.new_($I$(1,1).c$$I$I,[(this.ndims * this.nLandmarks) + this.ndims * (this.ndims + 1), 1]);
} else {
wMatrix=Clazz.new_($I$(1,1).c$$I$I,[this.ndims * this.nLandmarks, 1]);
pMatrix=null;
}var lMatrix=this.computeL$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F(kMatrix, pMatrix);
var solver;
if (this.nLandmarks < this.ndims * this.ndims) {
solver=$I$(3).pseudoInverse$Z(false);
} else {
solver=$I$(3).linear$I(lMatrix.numCols);
}solver.setA$TT(lMatrix);
solver.solve$TT$TT(yMatrix, wMatrix);
this.reorganizeW$org_ejml_data_DenseMatrix64F(wMatrix);
});

Clazz.newMeth(C$, 'computeL$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F', function (kMatrix, pMatrix) {
this.computeK$org_ejml_data_DenseMatrix64F(kMatrix);
if (this.computeAffine) {
this.computeP$org_ejml_data_DenseMatrix64F(pMatrix);
var lMatrix=Clazz.new_($I$(1,1).c$$I$I,[this.ndims * (this.nLandmarks + this.ndims + 1 ), this.ndims * (this.nLandmarks + this.ndims + 1 )]);
$I$(2).insert$org_ejml_data_ReshapeMatrix64F$org_ejml_data_ReshapeMatrix64F$I$I(kMatrix, lMatrix, 0, 0);
$I$(2).insert$org_ejml_data_ReshapeMatrix64F$org_ejml_data_ReshapeMatrix64F$I$I(pMatrix, lMatrix, 0, kMatrix.getNumCols$());
$I$(2).transpose$org_ejml_data_DenseMatrix64F(pMatrix);
$I$(2).insert$org_ejml_data_ReshapeMatrix64F$org_ejml_data_ReshapeMatrix64F$I$I(pMatrix, lMatrix, kMatrix.getNumRows$(), 0);
$I$(2).insert$org_ejml_data_ReshapeMatrix64F$org_ejml_data_ReshapeMatrix64F$I$I(kMatrix, lMatrix, 0, 0);
return lMatrix;
} else {
return kMatrix;
}});

Clazz.newMeth(C$, 'computeP$org_ejml_data_DenseMatrix64F', function (pMatrix) {
var tmp=Clazz.new_($I$(1,1).c$$I$I,[this.ndims, this.ndims]);
var I=Clazz.new_($I$(1,1).c$$I$I,[this.ndims, this.ndims]);
$I$(2).setIdentity$org_ejml_data_RowD1Matrix64F(I);
var i=0;
while (i < this.nLandmarks){
for (var d=0; d < this.ndims; d++) {
$I$(2).scale$D$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F(this.sourceLandmarks[d][i], I, tmp);
$I$(2).insert$org_ejml_data_ReshapeMatrix64F$org_ejml_data_ReshapeMatrix64F$I$I(tmp, pMatrix, i * this.ndims, d * this.ndims);
}
$I$(2).insert$org_ejml_data_ReshapeMatrix64F$org_ejml_data_ReshapeMatrix64F$I$I(I, pMatrix, i * this.ndims, this.ndims * this.ndims);
i++;
}
});

Clazz.newMeth(C$, 'computeK$org_ejml_data_DenseMatrix64F', function (kMatrix) {
var res=Clazz.array(Double.TYPE, [this.ndims]);
var i=0;
var Gbase=this.computeReflexiveG$();
var G=Gbase.copy$();
while (i < this.nLandmarks){
$I$(2).insert$org_ejml_data_ReshapeMatrix64F$org_ejml_data_ReshapeMatrix64F$I$I(Gbase, kMatrix, i * this.ndims, i * this.ndims);
var j=i + 1;
while (j < this.nLandmarks){
this.srcPtDisplacement$I$I$DA(i, j, res);
this.computeG$DA$org_ejml_data_DenseMatrix64F(res, G);
$I$(2).insert$org_ejml_data_ReshapeMatrix64F$org_ejml_data_ReshapeMatrix64F$I$I(G, kMatrix, i * this.ndims, j * this.ndims);
$I$(2).insert$org_ejml_data_ReshapeMatrix64F$org_ejml_data_ReshapeMatrix64F$I$I(G, kMatrix, j * this.ndims, i * this.ndims);
j++;
}
i++;
}
});

Clazz.newMeth(C$, 'reorganizeW$org_ejml_data_DenseMatrix64F', function (wMatrix) {
var ci=0;
var i=0;
while (i < this.nLandmarks){
for (var d=0; d < this.ndims; d++) {
this.dMatrix.set$I$I$D(d, i, wMatrix.get$I$I(ci, 0));
ci++;
}
i++;
}
if (this.computeAffine) {
for (var j=0; j < this.ndims; j++) for (i=0; i < this.ndims; i++) {
this.aMatrix[i][j]=wMatrix.get$I$I(ci, 0);
ci++;
}

for (var k=0; k < this.ndims; k++) {
this.bVector[k]=wMatrix.get$I$I(ci, 0);
ci++;
}
}wMatrix=null;
});

Clazz.newMeth(C$, 'computeG$DA$org_ejml_data_DenseMatrix64F', function (pt, mtx) {
var r=Math.sqrt(C$.normSqrd$DA(pt));
var nrm=C$.r2Logr$D(r);
$I$(2).setIdentity$org_ejml_data_RowD1Matrix64F(mtx);
$I$(2).scale$D$org_ejml_data_D1Matrix64F(nrm, mtx);
});

Clazz.newMeth(C$, 'computeG$DA$org_ejml_data_DenseMatrix64F$D', function (pt, mtx, w) {
this.computeG$DA$org_ejml_data_DenseMatrix64F(pt, mtx);
$I$(2).scale$D$org_ejml_data_D1Matrix64F(w, mtx);
});

Clazz.newMeth(C$, 'computeDeformationContribution$DA$DA', function (thispt, result) {
var tmpDisplacement=Clazz.array(Double.TYPE, [this.ndims]);
for (var i=0; i < this.ndims; ++i) {
result[i]=0;
tmpDisplacement[i]=0;
}
var di=0;
for (var lnd=0; lnd < this.nLandmarks; lnd++) {
this.srcPtDisplacement$I$DA$DA(lnd, thispt, tmpDisplacement);
var nrm=C$.r2LogrFromDisplacement$DA(tmpDisplacement);
for (var d=0; d < this.ndims; d++) result[d] += nrm * this.dMatrix.get$I$I(d, di);

di++;
}
});

Clazz.newMeth(C$, 'r2LogrDerivative$DA', function (p) {
var derivativeMatrix=Clazz.array(Double.TYPE, [this.ndims, this.ndims]);
var tmpDisplacement=Clazz.array(Double.TYPE, [this.ndims]);
$I$(4).fill$DA$D(tmpDisplacement, 0);
var lmi=0;
for (var lnd=0; lnd < this.nLandmarks; lnd++) {
this.srcPtDisplacement$I$DA$DA(lnd, p, tmpDisplacement);
var r2=C$.normSqrd$DA(tmpDisplacement);
var r=Math.sqrt(r2);
var term1;
if (r < 1.0E-8 ) continue;
 else term1=r * (2 * Math.log(r) + 1) / Math.sqrt(r2);
for (var d=0; d < this.ndims; d++) {
for (var j=0; j < this.ndims; j++) {
var multiplier=term1 * (-tmpDisplacement[j]);
derivativeMatrix[j][d] += multiplier * this.dMatrix.get$I$I(d, lmi);
}
}
lmi++;
}
return derivativeMatrix;
});

Clazz.newMeth(C$, 'jacobian$DA', function (p) {
var D=this.r2LogrDerivative$DA(p);
if (this.aMatrix != null ) {
for (var i=0; i < this.ndims; i++) for (var j=0; j < this.ndims; j++) if (i == j) D[i][j] += 1 + this.aMatrix[i][j];
 else D[i][j] += this.aMatrix[i][j];


}return D;
});

Clazz.newMeth(C$, 'stepInDerivativeDirection$DAA$DA$DA$D', function (derivative, start, dest, stepLength) {
for (var i=0; i < this.ndims; i++) {
dest[i]=start[i];
for (var j=0; j < this.ndims; j++) {
dest[i]=derivative[i][j] * stepLength;
}
}
});

Clazz.newMeth(C$, 'printXfmBacks2d$I$I$I$I', function (maxx, maxy, delx, dely) {
var pt=Clazz.array(Double.TYPE, [2]);
var result=Clazz.array(Double.TYPE, [2]);
for (var x=0; x < maxx; x+=delx) for (var y=0; y < maxy; y+=dely) {
pt[0]=x;
pt[1]=y;
this.apply$DA$DA(pt, result);
System.out.println$S("( " + x + ", " + y + " )  ->  ( " + new Double(result[0]).toString() + ", " + new Double(result[0]).toString() + " )" );
}

});

Clazz.newMeth(C$, 'transformPointAffine$DA', function (pt) {
var result=Clazz.array(Double.TYPE, [this.ndims]);
for (var i=0; i < this.ndims; i++) {
for (var j=0; j < this.ndims; j++) {
result[i] += this.aMatrix[i][j] * pt[j];
}
}
for (var i=0; i < this.ndims; i++) {
result[i] += this.bVector[i] + pt[i];
}
return result;
});

Clazz.newMeth(C$, 'apply$DA$DA', function (pt, result) {
this.apply$DA$DA$Z(pt, result, false);
});

Clazz.newMeth(C$, 'apply$DA$DA$Z', function (pt, result, debug) {
if (this.dMatrix == null ) {
for (var j=0; j < this.ndims; j++) result[j]=pt[j];

return;
}this.computeDeformationContribution$DA$DA(pt, result);
if (this.aMatrix != null ) {
for (var i=0; i < this.ndims; i++) for (var j=0; j < this.ndims; j++) {
result[i] += this.aMatrix[i][j] * pt[j];
}

} else {
for (var i=0; i < this.ndims; i++) {
result[i] += pt[i];
}
}if (this.bVector != null ) {
for (var i=0; i < this.ndims; i++) {
result[i] += this.bVector[i] + pt[i];
}
}});

Clazz.newMeth(C$, 'apply$DA', function (pt) {
var result=Clazz.array(Double.TYPE, [this.ndims]);
this.apply$DA$DA(pt, result);
return result;
});

Clazz.newMeth(C$, 'applyInPlace$DA', function (pt) {
var tmp=Clazz.array(Double.TYPE, [this.ndims]);
this.apply$DA$DA(pt, tmp);
for (var i=0; i < this.ndims; ++i) {
pt[i]=tmp[i];
}
});

Clazz.newMeth(C$, 'closestTargetLandmarkAndDistance$DA', function (target) {
var idx=-1;
var distSqr=1.7976931348623157E308;
var thisDist=0.0;
var err=Clazz.array(Double.TYPE, [this.ndims]);
for (var l=0; l < this.nLandmarks; l++) {
this.tgtPtDisplacement$I$DA$DA(l, target, err);
thisDist=C$.normSqrd$DA(err);
if (thisDist < distSqr ) {
distSqr=thisDist;
idx=l;
}}
return Clazz.new_($I$(5,1).c$$I$D,[idx, distSqr]);
});

Clazz.newMeth(C$, 'initialGuessAtInverse$DA', function (target) {
var lmAndDist=this.closestTargetLandmarkAndDistance$DA(target);
var initialGuess;
var idx=lmAndDist.index;
initialGuess=Clazz.array(Double.TYPE, [this.ndims]);
for (var i=0; i < this.ndims; i++) initialGuess[i]=this.sourceLandmarks[i][idx];

var initialGuessAffine;
if (this.aMatrix != null ) initialGuessAffine=this.inverseGuessAffineInv$DA(target);
 else initialGuessAffine=target;
var resL=this.apply$DA(initialGuess);
var resA=this.apply$DA(initialGuessAffine);
for (var i=0; i < this.ndims; i++) {
resL[i] -= target[i];
resA[i] -= target[i];
}
var errL=C$.normSqrd$DA(resL);
var errA=C$.normSqrd$DA(resA);
if (errA < errL ) {
initialGuess=initialGuessAffine;
} else {
}return initialGuess;
});

Clazz.newMeth(C$, 'inverseGuessAffineInv$DA', function (target) {
var mtx=Clazz.new_($I$(1,1).c$$I$I,[this.ndims + 1, this.ndims + 1]);
var vec=Clazz.new_($I$(1,1).c$$I$I,[this.ndims + 1, 1]);
for (var i=0; i < this.ndims; i++) {
for (var j=0; j < this.ndims; j++) {
if (i == j) mtx.set$I$I$D(i, j, 1 + this.aMatrix[i][j]);
 else mtx.set$I$I$D(i, j, this.aMatrix[i][j]);
}
mtx.set$I$I$D(i, this.ndims, this.bVector[i]);
vec.set$I$I$D(i, 0, target[i]);
}
mtx.set$I$I$D(this.ndims, this.ndims, 1.0);
vec.set$I$I$D(this.ndims, 0, 1.0);
var res=Clazz.new_($I$(1,1).c$$I$I,[this.ndims + 1, 1]);
$I$(2).solve$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F(mtx, vec, res);
var test=Clazz.new_($I$(1,1).c$$I$I,[this.ndims + 1, 1]);
$I$(2).mult$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(mtx, res, test);
var resOut=Clazz.array(Double.TYPE, [this.ndims]);
System.arraycopy$O$I$O$I$I(res.data, 0, resOut, 0, this.ndims);
return resOut;
});

Clazz.newMeth(C$, 'inverse$DA$DA$D$I', function (target, result, tolerance, maxIters) {
Clazz.assert(C$, this, function(){return tolerance > 0.0 });
var guess=this.initialGuessAtInverse$DA(target);
var error=this.inverseTol$DA$DA$D$I(target, guess, tolerance, maxIters);
for (var d=0; d < this.ndims; d++) result[d]=guess[d];

return error;
});

Clazz.newMeth(C$, 'inverse$DA$D', function (target, tolerance) {
var out=Clazz.array(Double.TYPE, [this.ndims]);
this.inverse$DA$DA$D$I(target, out, tolerance, 100000);
return out;
});

Clazz.newMeth(C$, 'inverseTol$DA$DA$D$I', function (target, guess, tolerance, maxIters) {
var c=1.0E-4;
var beta=0.7;
var error=999 * tolerance;
var mtx;
var guessXfm=Clazz.array(Double.TYPE, [this.ndims]);
this.apply$DA$DA(guess, guessXfm);
mtx=this.jacobian$DA(guess);
var inv=Clazz.new_($I$(6,1).c$$I$jitk_spline_ThinPlateR2LogRSplineKernelTransform,[this.ndims, this]);
inv.setTarget$DA(target);
inv.setEstimate$DA(guess);
inv.setEstimateXfm$DA(guessXfm);
inv.setJacobian$DAA(mtx);
error=inv.getError$();
var t0=error;
var t=1.0;
var k=0;
while (error >= tolerance  && k < maxIters ){
mtx=this.jacobian$DA(guess);
inv.setJacobian$DAA(mtx);
inv.computeDirection$();
t=inv.backtrackingLineSearch$D$D$I$D(1.0E-4, 0.7, 15, t0);
if (t == 0.0 ) break;
inv.updateEstimate$D(t);
inv.updateError$();
$I$(6).copyVectorIntoArray$org_ejml_data_DenseMatrix64F$DA(inv.getEstimate$(), guess);
this.apply$DA$DA(guess, guessXfm);
t0=error;
inv.setEstimateXfm$DA(guessXfm);
error=inv.getError$();
k++;
}
return error;
});

Clazz.newMeth(C$, 'srcPtDisplacement$I$I$DA', function (i, j, res) {
for (var d=0; d < this.ndims; d++) {
res[d]=this.sourceLandmarks[d][i] - this.sourceLandmarks[d][j];
}
});

Clazz.newMeth(C$, 'srcPtDisplacement$I$DA$DA', function (i, pt, res) {
for (var d=0; d < this.ndims; d++) {
res[d]=this.sourceLandmarks[d][i] - pt[d];
}
});

Clazz.newMeth(C$, 'tgtPtDisplacement$I$DA$DA', function (i, pt, res) {
this.apply$DA$DA(pt, res);
for (var d=0; d < this.ndims; d++) {
res[d] -= pt[d];
}
});

Clazz.newMeth(C$, 'r2Logr$D', function (r) {
var nrm=0;
if (r > 1.0E-8 ) {
nrm=r * r * Math.log(r) ;
}return nrm;
}, 1);

Clazz.newMeth(C$, 'r2LogrFromDisplacement$DA', function (displacement) {
var s=0;
for (var d=0; d < displacement.length; d++) s += displacement[d] * displacement[d];

if (s <= 1.0E-8 ) return 0;
return 0.5 * s * Math.log(s) ;
}, 1);
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ThinPlateR2LogRSplineKernelTransform, "IndexDistancePair", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['D',['distance'],'I',['index']]]

Clazz.newMeth(C$, 'c$$I$D', function (i, d) {
;C$.$init$.apply(this);
this.index=i;
this.distance=d;
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:27 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
