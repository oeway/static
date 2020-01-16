(function(){var P$=Clazz.newPackage("org.ejml.ops"),I$=[[0,'org.ejml.ops.MatrixFeatures','org.ejml.alg.dense.misc.UnrolledInverseFromMinor','org.ejml.factory.LinearSolverFactory','org.ejml.alg.dense.linsol.LinearSolverSafe','org.ejml.ops.CovarianceRandomDraw']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CovarianceOps");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.TOL=1.0E-9;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['D',['TOL']]]

Clazz.newMeth(C$, 'isValidFast$org_ejml_data_DenseMatrix64F', function (cov) {
return $I$(1).isDiagonalPositive$org_ejml_data_DenseMatrix64F(cov);
}, 1);

Clazz.newMeth(C$, 'isValid$org_ejml_data_DenseMatrix64F', function (cov) {
if (!$I$(1).isDiagonalPositive$org_ejml_data_DenseMatrix64F(cov)) return 1;
if (!$I$(1).isSymmetric$org_ejml_data_DenseMatrix64F$D(cov, C$.TOL)) return 2;
if (!$I$(1).isPositiveSemidefinite$org_ejml_data_DenseMatrix64F(cov)) return 3;
return 0;
}, 1);

Clazz.newMeth(C$, 'invert$org_ejml_data_DenseMatrix64F', function (cov) {
return C$.invert$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F(cov, cov);
}, 1);

Clazz.newMeth(C$, 'invert$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F', function (cov, cov_inv) {
if (cov.numCols <= 4) {
if (cov.numCols != cov.numRows) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Must be a square matrix."]);
}if (cov.numCols >= 2) $I$(2).inv$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F(cov, cov_inv);
 else cov_inv.data[0]=1.0 / cov_inv.data[0];
} else {
var solver=$I$(3).symmPosDef$I(cov.numRows);
solver=Clazz.new_(1,{T:"org.ejml.data.DenseMatrix64F"},$I$(4,1).c$$org_ejml_factory_LinearSolver,[solver]);
if (!solver.setA$TT(cov)) return false;
solver.invert$TT(cov_inv);
}return true;
}, 1);

Clazz.newMeth(C$, 'randomVector$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$java_util_Random', function (cov, vector, rand) {
var rng=Clazz.new_($I$(5,1).c$$java_util_Random$org_ejml_data_DenseMatrix64F,[rand, cov]);
rng.next$org_ejml_data_DenseMatrix64F(vector);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
