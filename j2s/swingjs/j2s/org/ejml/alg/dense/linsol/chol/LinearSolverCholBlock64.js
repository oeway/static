(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.linsol.chol"),I$=[[0,'org.ejml.alg.block.linsol.chol.BlockCholeskyOuterSolver','org.ejml.alg.block.BlockMatrixOps']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LinearSolverCholBlock64", null, 'org.ejml.alg.dense.linsol.WrapLinearSolverBlock64');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$org_ejml_factory_LinearSolver.apply(this,[Clazz.new_($I$(1,1))]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['solve$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F','solve$TT$TT'], function (B, X) {
this.blockB.reshape$I$I$Z(B.numRows, B.numCols, false);
$I$(2).convert$org_ejml_data_DenseMatrix64F$org_ejml_data_BlockMatrix64F(B, this.blockB);
this.alg.solve$TT$TT(this.blockB, null);
$I$(2).convert$org_ejml_data_BlockMatrix64F$org_ejml_data_DenseMatrix64F(this.blockB, X);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
