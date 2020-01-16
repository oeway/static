(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.linsol.qr"),I$=[[0,'org.ejml.data.DenseMatrix64F','org.ejml.ops.CommonOps','org.ejml.alg.dense.decomposition.TriangularSolver']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SolvePseudoInverseQrp", null, 'org.ejml.alg.dense.linsol.qr.BaseLinearSolverQrp');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.Q=Clazz.new_($I$(1,1).c$$I$I,[1, 1]);
this.x_basic=Clazz.new_($I$(1,1).c$$I$I,[1, 1]);
}, 1);

C$.$fields$=[['O',['Q','org.ejml.data.DenseMatrix64F','+x_basic']]]

Clazz.newMeth(C$, 'c$$org_ejml_factory_QRPDecomposition$Z', function (decomposition, norm2Solution) {
;C$.superclazz.c$$org_ejml_factory_QRPDecomposition$Z.apply(this,[decomposition, norm2Solution]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['setA$org_ejml_data_DenseMatrix64F','setA$TT'], function (A) {
if (!C$.superclazz.prototype.setA$org_ejml_data_DenseMatrix64F.apply(this, [A])) return false;
this.Q.reshape$I$I(A.numRows, A.numRows);
this.decomposition.getQ$TT$Z(this.Q, false);
return true;
});

Clazz.newMeth(C$, ['solve$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F','solve$TT$TT'], function (B, X) {
if (X.numRows != this.numCols) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected dimensions for X"]);
 else if (B.numRows != this.numRows || B.numCols != X.numCols ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected dimensions for B"]);
var BnumCols=B.numCols;
var pivots=this.decomposition.getPivots$();
for (var colB=0; colB < BnumCols; colB++) {
this.x_basic.reshape$I$I(this.numRows, 1);
this.Y.reshape$I$I(this.numRows, 1);
for (var i=0; i < this.numRows; i++) {
this.Y.data[i]=B.get$I$I(i, colB);
}
$I$(2).multTransA$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(this.Q, this.Y, this.x_basic);
$I$(3).solveU$DA$DA$I(this.R11.data, this.x_basic.data, this.rank);
this.x_basic.reshape$I$I$Z(this.numCols, 1, true);
for (var i=this.rank; i < this.numCols; i++) this.x_basic.data[i]=0;

if (this.norm2Solution && this.rank < this.numCols ) this.upgradeSolution$org_ejml_data_DenseMatrix64F(this.x_basic);
for (var i=0; i < this.numCols; i++) {
X.set$I$I$D(pivots[i], colB, this.x_basic.data[i]);
}
}
});

Clazz.newMeth(C$, 'modifiesA$', function () {
return this.decomposition.inputModified$();
});

Clazz.newMeth(C$, 'modifiesB$', function () {
return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
