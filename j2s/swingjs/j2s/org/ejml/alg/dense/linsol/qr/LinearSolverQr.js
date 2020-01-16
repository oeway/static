(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.linsol.qr"),I$=[[0,'org.ejml.data.DenseMatrix64F','org.ejml.ops.SpecializedOps','org.ejml.ops.CommonOps','org.ejml.alg.dense.decomposition.TriangularSolver']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LinearSolverQr", null, 'org.ejml.alg.dense.linsol.LinearSolverAbstract');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.maxRows=-1;
this.maxCols=-1;
}, 1);

C$.$fields$=[['I',['maxRows','maxCols'],'O',['decomposer','org.ejml.factory.QRDecomposition','Q','org.ejml.data.DenseMatrix64F','+R','+Y','+Z']]]

Clazz.newMeth(C$, 'c$$org_ejml_factory_QRDecomposition', function (decomposer) {
Clazz.super_(C$, this);
this.decomposer=decomposer;
}, 1);

Clazz.newMeth(C$, 'setMaxSize$I$I', function (maxRows, maxCols) {
this.maxRows=maxRows;
this.maxCols=maxCols;
this.Q=Clazz.new_($I$(1,1).c$$I$I,[maxRows, maxRows]);
this.R=Clazz.new_($I$(1,1).c$$I$I,[maxRows, maxCols]);
this.Y=Clazz.new_($I$(1,1).c$$I$I,[maxRows, 1]);
this.Z=Clazz.new_($I$(1,1).c$$I$I,[maxRows, 1]);
});

Clazz.newMeth(C$, ['setA$org_ejml_data_DenseMatrix64F','setA$TT'], function (A) {
if (A.numRows > this.maxRows || A.numCols > this.maxCols ) {
this.setMaxSize$I$I(A.numRows, A.numCols);
}this._setA$org_ejml_data_DenseMatrix64F(A);
if (!this.decomposer.decompose$TT(A)) return false;
this.Q.reshape$I$I$Z(this.numRows, this.numRows, false);
this.R.reshape$I$I$Z(this.numRows, this.numCols, false);
this.decomposer.getQ$TT$Z(this.Q, false);
this.decomposer.getR$TT$Z(this.R, false);
return true;
});

Clazz.newMeth(C$, 'quality$', function () {
return $I$(2).qualityTriangular$Z$org_ejml_data_D1Matrix64F(true, this.R);
});

Clazz.newMeth(C$, ['solve$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F','solve$TT$TT'], function (B, X) {
if (X.numRows != this.numCols) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected dimensions for X"]);
 else if (B.numRows != this.numRows || B.numCols != X.numCols ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected dimensions for B"]);
var BnumCols=B.numCols;
this.Y.reshape$I$I$Z(this.numRows, 1, false);
this.Z.reshape$I$I$Z(this.numRows, 1, false);
for (var colB=0; colB < BnumCols; colB++) {
for (var i=0; i < this.numRows; i++) {
this.Y.data[i]=B.get$I$I(i, colB);
}
$I$(3).multTransA$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(this.Q, this.Y, this.Z);
$I$(4).solveU$DA$DA$I(this.R.data, this.Z.data, this.numCols);
for (var i=0; i < this.numCols; i++) {
X.set$I$I$D(i, colB, this.Z.data[i]);
}
}
});

Clazz.newMeth(C$, 'modifiesA$', function () {
return this.decomposer.inputModified$();
});

Clazz.newMeth(C$, 'modifiesB$', function () {
return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
