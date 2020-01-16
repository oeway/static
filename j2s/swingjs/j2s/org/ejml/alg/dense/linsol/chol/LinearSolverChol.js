(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.linsol.chol"),p$1={},I$=[[0,'org.ejml.ops.SpecializedOps','org.ejml.alg.dense.decomposition.TriangularSolver']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LinearSolverChol", null, 'org.ejml.alg.dense.linsol.LinearSolverAbstract');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['n'],'O',['decomp','org.ejml.alg.dense.decomposition.chol.CholeskyDecompositionCommon','vv','double[]','+t']]]

Clazz.newMeth(C$, 'c$$org_ejml_alg_dense_decomposition_chol_CholeskyDecompositionCommon', function (decomp) {
Clazz.super_(C$, this);
this.decomp=decomp;
}, 1);

Clazz.newMeth(C$, ['setA$org_ejml_data_DenseMatrix64F','setA$TT'], function (A) {
this._setA$org_ejml_data_DenseMatrix64F(A);
if (this.decomp.decompose$org_ejml_data_DenseMatrix64F(A)) {
this.n=A.numCols;
this.vv=this.decomp._getVV$();
this.t=this.decomp.getT$().data;
return true;
} else {
return false;
}});

Clazz.newMeth(C$, 'quality$', function () {
return $I$(1).qualityTriangular$Z$org_ejml_data_D1Matrix64F(true, this.decomp.getT$());
});

Clazz.newMeth(C$, ['solve$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F','solve$TT$TT'], function (B, X) {
if (B.numCols != X.numCols && B.numRows != this.n  && X.numRows != this.n ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected matrix size"]);
}var numCols=B.numCols;
var dataB=B.data;
var dataX=X.data;
if (this.decomp.isLower$()) {
for (var j=0; j < numCols; j++) {
for (var i=0; i < this.n; i++) this.vv[i]=dataB[i * numCols + j];

p$1.solveInternalL.apply(this, []);
for (var i=0; i < this.n; i++) dataX[i * numCols + j]=this.vv[i];

}
} else {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Implement"]);
}});

Clazz.newMeth(C$, 'solveInternalL', function () {
$I$(2).solveL$DA$DA$I(this.t, this.vv, this.n);
$I$(2).solveTranL$DA$DA$I(this.t, this.vv, this.n);
}, p$1);

Clazz.newMeth(C$, ['invert$org_ejml_data_DenseMatrix64F','invert$TT'], function (inv) {
if (inv.numRows != this.n || inv.numCols != this.n ) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Unexpected matrix dimension"]);
}if (inv.data === this.t ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Passing in the same matrix that was decomposed."]);
}var a=inv.data;
if (this.decomp.isLower$()) {
this.setToInverseL$DA(a);
} else {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Implement"]);
}});

Clazz.newMeth(C$, 'setToInverseL$DA', function (a) {
for (var i=0; i < this.n; i++) {
var el_ii=this.t[i * this.n + i];
for (var j=0; j <= i; j++) {
var sum=(i == j) ? 1.0 : 0;
for (var k=i - 1; k >= j; k--) {
sum -= this.t[i * this.n + k] * a[j * this.n + k];
}
a[j * this.n + i]=sum / el_ii;
}
}
for (var i=this.n - 1; i >= 0; i--) {
var el_ii=this.t[i * this.n + i];
for (var j=0; j <= i; j++) {
var sum=(i < j) ? 0 : a[j * this.n + i];
for (var k=i + 1; k < this.n; k++) {
sum -= this.t[k * this.n + i] * a[j * this.n + k];
}
a[i * this.n + j]=a[j * this.n + i]=sum / el_ii;
}
}
});

Clazz.newMeth(C$, 'modifiesA$', function () {
return this.decomp.inputModified$();
});

Clazz.newMeth(C$, 'modifiesB$', function () {
return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
