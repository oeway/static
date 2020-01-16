(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.linsol.qr"),I$=[[0,'org.ejml.data.DenseMatrix64F','org.ejml.factory.LinearSolverFactory','org.ejml.alg.dense.linsol.LinearSolverSafe','org.ejml.ops.CommonOps','org.ejml.UtilEjml','org.ejml.alg.dense.decomposition.TriangularSolver','org.ejml.ops.SpecializedOps']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BaseLinearSolverQrp", null, 'org.ejml.alg.dense.linsol.LinearSolverAbstract');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.Y=Clazz.new_($I$(1,1).c$$I$I,[1, 1]);
this.R=Clazz.new_($I$(1,1).c$$I$I,[1, 1]);
this.R11=Clazz.new_($I$(1,1).c$$I$I,[1, 1]);
this.I=Clazz.new_($I$(1,1).c$$I$I,[1, 1]);
this.internalSolver=$I$(2).leastSquares$I$I(1, 1);
this.W=Clazz.new_($I$(1,1).c$$I$I,[1, 1]);
}, 1);

C$.$fields$=[['Z',['norm2Solution'],'I',['rank'],'O',['decomposition','org.ejml.factory.QRPDecomposition','Y','org.ejml.data.DenseMatrix64F','+R','+R11','+I','internalSolver','org.ejml.factory.LinearSolver','W','org.ejml.data.DenseMatrix64F']]]

Clazz.newMeth(C$, 'c$$org_ejml_factory_QRPDecomposition$Z', function (decomposition, norm2Solution) {
Clazz.super_(C$, this);
this.decomposition=decomposition;
this.norm2Solution=norm2Solution;
if (this.internalSolver.modifiesA$()) this.internalSolver=Clazz.new_(1,{T:"org.ejml.data.DenseMatrix64F"},$I$(3,1).c$$org_ejml_factory_LinearSolver,[this.internalSolver]);
}, 1);

Clazz.newMeth(C$, ['setA$org_ejml_data_DenseMatrix64F','setA$TT'], function (A) {
this._setA$org_ejml_data_DenseMatrix64F(A);
this.decomposition.setSingularThreshold$D($I$(4).elementMaxAbs$org_ejml_data_D1Matrix64F(A) * $I$(5).EPS);
if (!this.decomposition.decompose$TT(A)) return false;
this.rank=this.decomposition.getRank$();
this.R.reshape$I$I(this.numRows, this.numCols);
this.decomposition.getR$TT$Z(this.R, false);
this.R11.reshape$I$I(this.rank, this.rank);
$I$(4).extract$org_ejml_data_ReshapeMatrix64F$I$I$I$I$org_ejml_data_ReshapeMatrix64F$I$I(this.R, 0, this.rank, 0, this.rank, this.R11, 0, 0);
if (this.norm2Solution && this.rank < this.numCols ) {
this.W.reshape$I$I(this.rank, this.numCols - this.rank);
$I$(4).extract$org_ejml_data_ReshapeMatrix64F$I$I$I$I$org_ejml_data_ReshapeMatrix64F$I$I(this.R, 0, this.rank, this.rank, this.numCols, this.W, 0, 0);
$I$(6).solveU$DA$I$I$I$DA$I$I$I(this.R11.data, 0, this.R11.numCols, this.R11.numCols, this.W.data, 0, this.W.numCols, this.W.numCols);
this.W.reshape$I$I$Z(this.numCols, this.W.numCols, true);
for (var i=0; i < this.numCols - this.rank; i++) {
for (var j=0; j < this.numCols - this.rank; j++) {
if (i == j) this.W.set$I$I$D(i + this.rank, j, -1);
 else this.W.set$I$I$D(i + this.rank, j, 0);
}
}
}return true;
});

Clazz.newMeth(C$, 'quality$', function () {
return $I$(7).qualityTriangular$Z$org_ejml_data_D1Matrix64F(true, this.R);
});

Clazz.newMeth(C$, 'upgradeSolution$org_ejml_data_DenseMatrix64F', function (X) {
var z=this.Y;
if (!this.internalSolver.setA$TT(this.W)) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["This should never happen.  Is input NaN?"]);
z.reshape$I$I(this.numCols - this.rank, 1);
this.internalSolver.solve$TT$TT(X, z);
$I$(4).multAdd$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(-1, this.W, z, X);
});

Clazz.newMeth(C$, ['invert$org_ejml_data_DenseMatrix64F','invert$TT'], function (A_inv) {
if (A_inv.numCols != this.numRows || A_inv.numRows != this.numCols ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected dimensions for A_inv"]);
this.I.reshape$I$I(this.numRows, this.numRows);
$I$(4).setIdentity$org_ejml_data_RowD1Matrix64F(this.I);
this.solve$TT$TT(this.I, A_inv);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
