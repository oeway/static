(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.linsol.lu"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "LinearSolverLuBase", null, 'org.ejml.alg.dense.linsol.LinearSolverAbstract');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['decomp','org.ejml.alg.dense.decomposition.lu.LUDecompositionBase']]]

Clazz.newMeth(C$, 'c$$org_ejml_alg_dense_decomposition_lu_LUDecompositionBase', function (decomp) {
Clazz.super_(C$, this);
this.decomp=decomp;
}, 1);

Clazz.newMeth(C$, ['setA$org_ejml_data_DenseMatrix64F','setA$TT'], function (A) {
this._setA$org_ejml_data_DenseMatrix64F(A);
return this.decomp.decompose$TT(A);
});

Clazz.newMeth(C$, 'quality$', function () {
return this.decomp.quality$();
});

Clazz.newMeth(C$, ['invert$org_ejml_data_DenseMatrix64F','invert$TT'], function (A_inv) {
var vv=this.decomp._getVV$();
var LU=this.decomp.getLU$();
if (A_inv.numCols != LU.numCols || A_inv.numRows != LU.numRows ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected matrix dimension"]);
var n=this.A.numCols;
var dataInv=A_inv.data;
for (var j=0; j < n; j++) {
for (var i=0; i < n; i++) vv[i]=i == j ? 1 : 0;

this.decomp._solveVectorInternal$DA(vv);
var index=j;
for (var i=0; i < n; i++, index+=n) dataInv[index]=vv[i];

}
});

Clazz.newMeth(C$, 'improveSol$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F', function (b, x) {
if (b.numCols != x.numCols) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["bad shapes"]);
}var dataA=this.A.data;
var dataB=b.data;
var dataX=x.data;
var nc=b.numCols;
var n=b.numCols;
var vv=this.decomp._getVV$();
var LU=this.decomp.getLU$();
for (var k=0; k < nc; k++) {
for (var i=0; i < n; i++) {
var sdp=-dataB[i * nc + k];
for (var j=0; j < n; j++) {
sdp += dataA[i * n + j] * dataX[j * nc + k];
}
vv[i]=sdp;
}
this.decomp._solveVectorInternal$DA(vv);
for (var i=0; i < n; i++) {
dataX[i * nc + k] -= vv[i];
}
}
});

Clazz.newMeth(C$, 'modifiesA$', function () {
return false;
});

Clazz.newMeth(C$, 'modifiesB$', function () {
return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
