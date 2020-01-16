(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.linsol"),I$=[[0,'org.ejml.alg.block.linsol.chol.BlockCholeskyOuterSolver','org.ejml.data.BlockMatrix64F','org.ejml.alg.block.BlockMatrixOps']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "WrapLinearSolverBlock64", null, null, 'org.ejml.factory.LinearSolver');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.alg=Clazz.new_($I$(1,1));
this.blockA=Clazz.new_($I$(2,1).c$$I$I,[1, 1]);
this.blockB=Clazz.new_($I$(2,1).c$$I$I,[1, 1]);
this.blockX=Clazz.new_($I$(2,1).c$$I$I,[1, 1]);
}, 1);

C$.$fields$=[['O',['alg','org.ejml.factory.LinearSolver','blockA','org.ejml.data.BlockMatrix64F','+blockB','+blockX']]]

Clazz.newMeth(C$, 'c$$org_ejml_factory_LinearSolver', function (alg) {
;C$.$init$.apply(this);
this.alg=alg;
}, 1);

Clazz.newMeth(C$, ['setA$org_ejml_data_DenseMatrix64F','setA$TT'], function (A) {
this.blockA.reshape$I$I$Z(A.numRows, A.numCols, false);
$I$(3).convert$org_ejml_data_DenseMatrix64F$org_ejml_data_BlockMatrix64F(A, this.blockA);
return this.alg.setA$TT(this.blockA);
});

Clazz.newMeth(C$, 'quality$', function () {
return this.alg.quality$();
});

Clazz.newMeth(C$, ['solve$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F','solve$TT$TT'], function (B, X) {
this.blockB.reshape$I$I$Z(B.numRows, B.numCols, false);
this.blockX.reshape$I$I$Z(X.numRows, X.numCols, false);
$I$(3).convert$org_ejml_data_DenseMatrix64F$org_ejml_data_BlockMatrix64F(B, this.blockB);
this.alg.solve$TT$TT(this.blockB, this.blockX);
$I$(3).convert$org_ejml_data_BlockMatrix64F$org_ejml_data_DenseMatrix64F(this.blockX, X);
});

Clazz.newMeth(C$, ['invert$org_ejml_data_DenseMatrix64F','invert$TT'], function (A_inv) {
this.blockB.reshape$I$I$Z(A_inv.numRows, A_inv.numCols, false);
this.alg.invert$TT(this.blockB);
$I$(3).convert$org_ejml_data_BlockMatrix64F$org_ejml_data_DenseMatrix64F(this.blockB, A_inv);
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
