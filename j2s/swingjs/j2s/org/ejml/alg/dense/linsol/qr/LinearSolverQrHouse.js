(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.linsol.qr"),I$=[[0,'org.ejml.alg.dense.decomposition.qr.QRDecompositionHouseholder','org.ejml.ops.SpecializedOps','org.ejml.alg.dense.decomposition.TriangularSolver']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LinearSolverQrHouse", null, 'org.ejml.alg.dense.linsol.LinearSolverAbstract');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.maxRows=-1;
}, 1);

C$.$fields$=[['I',['maxRows'],'O',['decomposer','org.ejml.alg.dense.decomposition.qr.QRDecompositionHouseholder','a','double[]','+u','QR','org.ejml.data.DenseMatrix64F','gammas','double[]']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.decomposer=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'setMaxSize$I', function (maxRows) {
this.maxRows=maxRows;
this.a=Clazz.array(Double.TYPE, [maxRows]);
this.u=Clazz.array(Double.TYPE, [maxRows]);
});

Clazz.newMeth(C$, ['setA$org_ejml_data_DenseMatrix64F','setA$TT'], function (A) {
if (A.numRows > this.maxRows) {
this.setMaxSize$I(A.numRows);
}this._setA$org_ejml_data_DenseMatrix64F(A);
if (!this.decomposer.decompose$org_ejml_data_DenseMatrix64F(A)) return false;
this.gammas=this.decomposer.getGammas$();
this.QR=this.decomposer.getQR$();
return true;
});

Clazz.newMeth(C$, 'quality$', function () {
return $I$(2).qualityTriangular$Z$org_ejml_data_D1Matrix64F(true, this.QR);
});

Clazz.newMeth(C$, ['solve$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F','solve$TT$TT'], function (B, X) {
if (X.numRows != this.numCols) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected dimensions for X"]);
 else if (B.numRows != this.numRows || B.numCols != X.numCols ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected dimensions for B"]);
var BnumCols=B.numCols;
for (var colB=0; colB < BnumCols; colB++) {
for (var i=0; i < this.numRows; i++) {
this.a[i]=B.data[i * BnumCols + colB];
}
for (var n=0; n < this.numCols; n++) {
this.u[n]=1;
var ub=this.a[n];
for (var i=n + 1; i < this.numRows; i++) {
ub += (this.u[i]=this.QR.unsafe_get$I$I(i, n)) * this.a[i];
}
ub *= this.gammas[n];
for (var i=n; i < this.numRows; i++) {
this.a[i] -= this.u[i] * ub;
}
}
$I$(3).solveU$DA$DA$I(this.QR.data, this.a, this.numCols);
for (var i=0; i < this.numCols; i++) {
X.data[i * X.numCols + colB]=this.a[i];
}
}
});

Clazz.newMeth(C$, 'modifiesA$', function () {
return false;
});

Clazz.newMeth(C$, 'modifiesB$', function () {
return false;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
