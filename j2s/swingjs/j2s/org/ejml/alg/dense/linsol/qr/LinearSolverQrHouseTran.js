(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.linsol.qr"),I$=[[0,'org.ejml.alg.dense.decomposition.qr.QRDecompositionHouseholderTran','org.ejml.ops.SpecializedOps','org.ejml.alg.dense.decomposition.TriangularSolver']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LinearSolverQrHouseTran", null, 'org.ejml.alg.dense.linsol.LinearSolverAbstract');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.maxRows=-1;
this.maxCols=-1;
}, 1);

C$.$fields$=[['I',['maxRows','maxCols'],'O',['decomposer','org.ejml.alg.dense.decomposition.qr.QRDecompositionHouseholderTran','a','double[]','QR','org.ejml.data.DenseMatrix64F','+U']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.decomposer=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'setMaxSize$I$I', function (maxRows, maxCols) {
this.maxRows=maxRows;
this.maxCols=maxCols;
this.a=Clazz.array(Double.TYPE, [maxRows]);
});

Clazz.newMeth(C$, ['setA$org_ejml_data_DenseMatrix64F','setA$TT'], function (A) {
if (A.numRows > this.maxRows || A.numCols > this.maxCols ) this.setMaxSize$I$I(A.numRows, A.numCols);
this._setA$org_ejml_data_DenseMatrix64F(A);
if (!this.decomposer.decompose$org_ejml_data_DenseMatrix64F(A)) return false;
this.QR=this.decomposer.getQR$();
return true;
});

Clazz.newMeth(C$, 'quality$', function () {
return $I$(2).qualityTriangular$Z$org_ejml_data_D1Matrix64F(true, this.QR);
});

Clazz.newMeth(C$, ['solve$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F','solve$TT$TT'], function (B, X) {
if (X.numRows != this.numCols) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected dimensions for X: X rows = " + X.numRows + " expected = " + this.numCols ]);
 else if (B.numRows != this.numRows || B.numCols != X.numCols ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected dimensions for B"]);
this.U=this.decomposer.getR$org_ejml_data_DenseMatrix64F$Z(this.U, true);
var gammas=this.decomposer.getGammas$();
var dataQR=this.QR.data;
var BnumCols=B.numCols;
for (var colB=0; colB < BnumCols; colB++) {
for (var i=0; i < this.numRows; i++) {
this.a[i]=B.data[i * BnumCols + colB];
}
for (var n=0; n < this.numCols; n++) {
var indexU=n * this.numRows + n + 1;
var ub=this.a[n];
for (var i=n + 1; i < this.numRows; i++, indexU++) {
ub += dataQR[indexU] * this.a[i];
}
ub *= gammas[n];
this.a[n] -= ub;
indexU=n * this.numRows + n + 1;
for (var i=n + 1; i < this.numRows; i++, indexU++) {
this.a[i] -= dataQR[indexU] * ub;
}
}
$I$(3).solveU$DA$DA$I(this.U.data, this.a, this.numCols);
for (var i=0; i < this.numCols; i++) {
X.data[i * X.numCols + colB]=this.a[i];
}
}
});

Clazz.newMeth(C$, 'modifiesA$', function () {
return this.decomposer.inputModified$();
});

Clazz.newMeth(C$, 'modifiesB$', function () {
return false;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
