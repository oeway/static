(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.linsol.qr"),I$=[[0,'org.ejml.data.DenseMatrix64F','org.ejml.alg.dense.decomposition.qr.QRDecompositionHouseholderColumn','org.ejml.ops.SpecializedOps','org.ejml.alg.dense.decomposition.qr.QrHelperFunctions','org.ejml.alg.dense.decomposition.TriangularSolver']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LinearSolverQrHouseCol", null, 'org.ejml.alg.dense.linsol.LinearSolverAbstract');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.a=Clazz.new_($I$(1,1).c$$I$I,[1, 1]);
this.temp=Clazz.new_($I$(1,1).c$$I$I,[1, 1]);
this.maxRows=-1;
this.maxCols=-1;
this.R=Clazz.new_($I$(1,1).c$$I$I,[1, 1]);
}, 1);

C$.$fields$=[['I',['maxRows','maxCols'],'O',['decomposer','org.ejml.alg.dense.decomposition.qr.QRDecompositionHouseholderColumn','a','org.ejml.data.DenseMatrix64F','+temp','QR','double[][]','R','org.ejml.data.DenseMatrix64F','gammas','double[]']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.decomposer=Clazz.new_($I$(2,1));
}, 1);

Clazz.newMeth(C$, 'setMaxSize$I$I', function (maxRows, maxCols) {
this.maxRows=maxRows;
this.maxCols=maxCols;
});

Clazz.newMeth(C$, ['setA$org_ejml_data_DenseMatrix64F','setA$TT'], function (A) {
if (A.numRows > this.maxRows || A.numCols > this.maxCols ) this.setMaxSize$I$I(A.numRows, A.numCols);
this.R.reshape$I$I(A.numCols, A.numCols);
this.a.reshape$I$I(A.numRows, 1);
this.temp.reshape$I$I(A.numRows, 1);
this._setA$org_ejml_data_DenseMatrix64F(A);
if (!this.decomposer.decompose$org_ejml_data_DenseMatrix64F(A)) return false;
this.gammas=this.decomposer.getGammas$();
this.QR=this.decomposer.getQR$();
this.decomposer.getR$org_ejml_data_DenseMatrix64F$Z(this.R, true);
return true;
});

Clazz.newMeth(C$, 'quality$', function () {
return $I$(3).qualityTriangular$Z$org_ejml_data_D1Matrix64F(true, this.R);
});

Clazz.newMeth(C$, ['solve$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F','solve$TT$TT'], function (B, X) {
if (X.numRows != this.numCols) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected dimensions for X: X rows = " + X.numRows + " expected = " + this.numCols ]);
 else if (B.numRows != this.numRows || B.numCols != X.numCols ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected dimensions for B"]);
var BnumCols=B.numCols;
for (var colB=0; colB < BnumCols; colB++) {
for (var i=0; i < this.numRows; i++) {
this.a.data[i]=B.data[i * BnumCols + colB];
}
for (var n=0; n < this.numCols; n++) {
var u=this.QR[n];
var vv=u[n];
u[n]=1;
$I$(4).rank1UpdateMultR$org_ejml_data_DenseMatrix64F$DA$D$I$I$I$DA(this.a, u, this.gammas[n], 0, n, this.numRows, this.temp.data);
u[n]=vv;
}
$I$(5).solveU$DA$DA$I(this.R.data, this.a.data, this.numCols);
for (var i=0; i < this.numCols; i++) {
X.data[i * X.numCols + colB]=this.a.data[i];
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
