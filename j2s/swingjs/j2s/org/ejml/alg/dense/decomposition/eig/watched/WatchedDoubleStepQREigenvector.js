(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.eig.watched"),p$1={},I$=[[0,'org.ejml.data.DenseMatrix64F','org.ejml.data.Complex64F','org.ejml.factory.LinearSolverFactory','org.ejml.UtilEjml','org.ejml.ops.CommonOps','org.ejml.ops.NormOps','org.ejml.ops.SpecializedOps','org.ejml.alg.dense.decomposition.TriangularSolver']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "WatchedDoubleStepQREigenvector");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['onscript'],'I',['N','numSplits','x1','x2','indexVal'],'O',['implicit','org.ejml.alg.dense.decomposition.eig.watched.WatchedDoubleStepQREigen','Q','org.ejml.data.DenseMatrix64F','eigenvectors','org.ejml.data.DenseMatrix64F[]','eigenvectorTemp','org.ejml.data.DenseMatrix64F','solver','org.ejml.factory.LinearSolver','origEigenvalues','org.ejml.data.Complex64F[]','splits','int[]']]]

Clazz.newMeth(C$, 'process$org_ejml_alg_dense_decomposition_eig_watched_WatchedDoubleStepQREigen$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F', function (implicit, A, Q_h) {
this.implicit=implicit;
if (this.N != A.numRows) {
this.N=A.numRows;
this.Q=Clazz.new_($I$(1,1).c$$I$I,[this.N, this.N]);
this.splits=Clazz.array(Integer.TYPE, [this.N]);
this.origEigenvalues=Clazz.array($I$(2), [this.N]);
this.eigenvectors=Clazz.array($I$(1), [this.N]);
this.eigenvectorTemp=Clazz.new_($I$(1,1).c$$I$I,[this.N, 1]);
this.solver=$I$(3).linear$I(0);
} else {
this.eigenvectors=Clazz.array($I$(1), [this.N]);
}System.arraycopy$O$I$O$I$I(implicit.eigenvalues, 0, this.origEigenvalues, 0, this.N);
implicit.setup$org_ejml_data_DenseMatrix64F(A);
implicit.setQ$org_ejml_data_DenseMatrix64F(this.Q);
this.numSplits=0;
this.onscript=true;
if (!this.findQandR$()) return false;
return this.extractVectors$org_ejml_data_DenseMatrix64F(Q_h);
});

Clazz.newMeth(C$, 'extractVectors$org_ejml_data_DenseMatrix64F', function (Q_h) {
$I$(4).memset$DA$D(this.eigenvectorTemp.data, 0);
var triangular=true;
for (var i=0; i < this.N; i++) {
var c=this.implicit.eigenvalues[this.N - i - 1 ];
if (triangular && !c.isReal$() ) triangular=false;
if (c.isReal$() && this.eigenvectors[this.N - i - 1 ] == null  ) {
p$1.solveEigenvectorDuplicateEigenvalue$D$I$Z.apply(this, [c.real, i, triangular]);
}}
if (Q_h != null ) {
var temp=Clazz.new_($I$(1,1).c$$I$I,[this.N, 1]);
for (var i=0; i < this.N; i++) {
var v=this.eigenvectors[i];
if (v != null ) {
$I$(5).mult$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(Q_h, v, temp);
this.eigenvectors[i]=temp;
temp=v;
}}
}return true;
});

Clazz.newMeth(C$, 'solveEigenvectorDuplicateEigenvalue$D$I$Z', function (real, first, isTriangle) {
var scale=Math.abs(real);
if (scale == 0 ) scale=1;
this.eigenvectorTemp.reshape$I$I$Z(this.N, 1, false);
this.eigenvectorTemp.zero$();
if (first > 0) {
if (isTriangle) {
p$1.solveUsingTriangle$D$I$org_ejml_data_DenseMatrix64F.apply(this, [real, first, this.eigenvectorTemp]);
} else {
p$1.solveWithLU$D$I$org_ejml_data_DenseMatrix64F.apply(this, [real, first, this.eigenvectorTemp]);
}}this.eigenvectorTemp.reshape$I$I$Z(this.N, 1, false);
for (var i=first; i < this.N; i++) {
var c=this.implicit.eigenvalues[this.N - i - 1 ];
if (c.isReal$() && Math.abs(c.real - real) / scale < 100.0 * $I$(4).EPS  ) {
this.eigenvectorTemp.data[i]=1;
var v=Clazz.new_($I$(1,1).c$$I$I,[this.N, 1]);
$I$(5).multTransA$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(this.Q, this.eigenvectorTemp, v);
this.eigenvectors[this.N - i - 1 ]=v;
$I$(6).normalizeF$org_ejml_data_DenseMatrix64F(v);
this.eigenvectorTemp.data[i]=0;
}}
}, p$1);

Clazz.newMeth(C$, 'solveUsingTriangle$D$I$org_ejml_data_DenseMatrix64F', function (real, index, r) {
for (var i=0; i < index; i++) {
this.implicit.A.add$I$I$D(i, i, -real);
}
$I$(7).subvector$org_ejml_data_RowD1Matrix64F$I$I$I$Z$I$org_ejml_data_RowD1Matrix64F(this.implicit.A, 0, index, index, false, 0, r);
$I$(5).changeSign$org_ejml_data_D1Matrix64F(r);
$I$(8).solveU$DA$DA$I$I$I(this.implicit.A.data, r.data, this.implicit.A.numRows, 0, index);
for (var i=0; i < index; i++) {
this.implicit.A.add$I$I$D(i, i, real);
}
}, p$1);

Clazz.newMeth(C$, 'solveWithLU$D$I$org_ejml_data_DenseMatrix64F', function (real, index, r) {
var A=Clazz.new_($I$(1,1).c$$I$I,[index, index]);
$I$(5).extract$org_ejml_data_ReshapeMatrix64F$I$I$I$I$org_ejml_data_ReshapeMatrix64F$I$I(this.implicit.A, 0, index, 0, index, A, 0, 0);
for (var i=0; i < index; i++) {
A.add$I$I$D(i, i, -real);
}
r.reshape$I$I$Z(index, 1, false);
$I$(7).subvector$org_ejml_data_RowD1Matrix64F$I$I$I$Z$I$org_ejml_data_RowD1Matrix64F(this.implicit.A, 0, index, index, false, 0, r);
$I$(5).changeSign$org_ejml_data_D1Matrix64F(r);
if (!this.solver.setA$TT(A)) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Solve failed"]);
this.solver.solve$TT$TT(r, r);
}, p$1);

Clazz.newMeth(C$, 'findQandR$', function () {
$I$(5).setIdentity$org_ejml_data_RowD1Matrix64F(this.Q);
this.x1=0;
this.x2=this.N - 1;
this.indexVal=0;
while (this.indexVal < this.N){
if (!p$1.findNextEigenvalue.apply(this, [])) {
return false;
}}
return true;
});

Clazz.newMeth(C$, 'findNextEigenvalue', function () {
var foundEigen=false;
while (!foundEigen && this.implicit.steps < this.implicit.maxIterations ){
this.implicit.incrementSteps$();
if (this.x2 < this.x1) {
p$1.moveToNextSplit.apply(this, []);
} else if (this.x2 - this.x1 == 0) {
this.implicit.addEigenAt$I(this.x1);
this.x2--;
this.indexVal++;
foundEigen=true;
} else if (this.x2 - this.x1 == 1 && !this.implicit.isReal2x2$I$I(this.x1, this.x2) ) {
this.implicit.addComputedEigen2x2$I$I(this.x1, this.x2);
this.x2-=2;
this.indexVal+=2;
foundEigen=true;
} else if (this.implicit.steps - this.implicit.lastExceptional > this.implicit.exceptionalThreshold) {
this.implicit.exceptionalShift$I$I(this.x1, this.x2);
this.implicit.lastExceptional=this.implicit.steps;
} else if (this.implicit.isZero$I$I(this.x2, this.x2 - 1)) {
this.implicit.addEigenAt$I(this.x2);
foundEigen=true;
this.x2--;
this.indexVal++;
} else {
p$1.checkSplitPerformImplicit.apply(this, []);
}}
return foundEigen;
}, p$1);

Clazz.newMeth(C$, 'checkSplitPerformImplicit', function () {
for (var i=this.x2; i > this.x1; i--) {
if (this.implicit.isZero$I$I(i, i - 1)) {
this.x1=i;
this.splits[this.numSplits++]=i - 1;
return;
}}
if (this.onscript) {
if (this.implicit.steps > (this.implicit.exceptionalThreshold/2|0)) {
this.onscript=false;
} else {
var a=this.origEigenvalues[this.indexVal];
if (a.isReal$()) {
this.implicit.performImplicitSingleStep$I$I$D(this.x1, this.x2, a.getReal$());
} else if (this.x2 < this.N - 2) {
this.implicit.performImplicitDoubleStep$I$I$D$D(this.x1, this.x2, a.real, a.imaginary);
} else {
this.onscript=false;
}}} else {
if (this.x2 - this.x1 >= 1 && this.x2 < this.N - 2 ) this.implicit.implicitDoubleStep$I$I(this.x1, this.x2);
 else this.implicit.performImplicitSingleStep$I$I$D(this.x1, this.x2, this.implicit.A.get$I$I(this.x2, this.x2));
}}, p$1);

Clazz.newMeth(C$, 'moveToNextSplit', function () {
if (this.numSplits <= 0) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["bad"]);
this.x2=this.splits[--this.numSplits];
if (this.numSplits > 0) {
this.x1=this.splits[this.numSplits - 1] + 1;
} else {
this.x1=0;
}}, p$1);

Clazz.newMeth(C$, 'getQ$', function () {
return this.Q;
});

Clazz.newMeth(C$, 'getImplicit$', function () {
return this.implicit;
});

Clazz.newMeth(C$, 'getEigenvectors$', function () {
return this.eigenvectors;
});

Clazz.newMeth(C$, 'getEigenvalues$', function () {
return this.implicit.eigenvalues;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
