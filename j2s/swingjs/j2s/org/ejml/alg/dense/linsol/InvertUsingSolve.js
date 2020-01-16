(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.linsol"),I$=[[0,'org.ejml.ops.CommonOps']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "InvertUsingSolve");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'invert$org_ejml_factory_LinearSolver$org_ejml_data_RowD1Matrix64F$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F', function (solver, A, A_inv, storage) {
if (A.numRows != A_inv.numRows || A.numCols != A_inv.numCols ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["A and A_inv must have the same dimensions"]);
}$I$(1).setIdentity$org_ejml_data_RowD1Matrix64F(storage);
solver.solve$TT$TT(storage, A_inv);
}, 1);

Clazz.newMeth(C$, 'invert$org_ejml_factory_LinearSolver$org_ejml_data_RowD1Matrix64F$org_ejml_data_DenseMatrix64F', function (solver, A, A_inv) {
if (A.numRows != A_inv.numRows || A.numCols != A_inv.numCols ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["A and A_inv must have the same dimensions"]);
}$I$(1).setIdentity$org_ejml_data_RowD1Matrix64F(A_inv);
solver.solve$TT$TT(A_inv, A_inv);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
