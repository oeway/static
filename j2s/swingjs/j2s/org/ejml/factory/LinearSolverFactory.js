(function(){var P$=Clazz.newPackage("org.ejml.factory"),I$=[[0,'org.ejml.alg.dense.linsol.lu.LinearSolverLu','org.ejml.alg.dense.decomposition.lu.LUDecompositionAlt','org.ejml.EjmlParameters','org.ejml.alg.dense.linsol.qr.LinearSolverQrHouseCol',['org.ejml.EjmlParameters','.MemoryUsage'],'org.ejml.alg.dense.linsol.qr.LinearSolverQrBlock64','org.ejml.alg.dense.decomposition.chol.CholeskyDecompositionInner','org.ejml.alg.dense.linsol.chol.LinearSolverChol','org.ejml.alg.dense.linsol.chol.LinearSolverCholBlock64','org.ejml.alg.dense.decomposition.qr.QRColPivDecompositionHouseholderColumn','org.ejml.alg.dense.linsol.qr.SolvePseudoInverseQrp','org.ejml.alg.dense.linsol.qr.LinearSolverQrpHouseCol','org.ejml.alg.dense.linsol.svd.SolvePseudoInverseSvd','org.ejml.alg.dense.linsol.qr.AdjLinearSolverQr']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LinearSolverFactory");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'general$I$I', function (numRows, numCols) {
if (numRows == numCols) return C$.linear$I(numRows);
 else return C$.leastSquares$I$I(numRows, numCols);
}, 1);

Clazz.newMeth(C$, 'linear$I', function (matrixSize) {
return Clazz.new_($I$(1,1).c$$org_ejml_alg_dense_decomposition_lu_LUDecompositionBase,[Clazz.new_($I$(2,1))]);
}, 1);

Clazz.newMeth(C$, 'leastSquares$I$I', function (numRows, numCols) {
if (numCols < $I$(3).SWITCH_BLOCK64_QR) {
return Clazz.new_($I$(4,1));
} else {
if ($I$(3).MEMORY === $I$(5).FASTER ) return Clazz.new_($I$(6,1));
 else return Clazz.new_($I$(4,1));
}}, 1);

Clazz.newMeth(C$, 'symmPosDef$I', function (matrixWidth) {
if (matrixWidth < $I$(3).SWITCH_BLOCK64_CHOLESKY) {
var decomp=Clazz.new_($I$(7,1).c$$Z,[true]);
return Clazz.new_($I$(8,1).c$$org_ejml_alg_dense_decomposition_chol_CholeskyDecompositionCommon,[decomp]);
} else {
if ($I$(3).MEMORY === $I$(5).FASTER ) return Clazz.new_($I$(9,1));
 else {
var decomp=Clazz.new_($I$(7,1).c$$Z,[true]);
return Clazz.new_($I$(8,1).c$$org_ejml_alg_dense_decomposition_chol_CholeskyDecompositionCommon,[decomp]);
}}}, 1);

Clazz.newMeth(C$, 'leastSquaresQrPivot$Z$Z', function (computeNorm2, computeQ) {
var decomposition=Clazz.new_($I$(10,1));
if (computeQ) return Clazz.new_($I$(11,1).c$$org_ejml_factory_QRPDecomposition$Z,[decomposition, computeNorm2]);
 else return Clazz.new_($I$(12,1).c$$org_ejml_alg_dense_decomposition_qr_QRColPivDecompositionHouseholderColumn$Z,[decomposition, computeNorm2]);
}, 1);

Clazz.newMeth(C$, 'pseudoInverse$Z', function (useSVD) {
if (useSVD) return Clazz.new_($I$(13,1));
 else return C$.leastSquaresQrPivot$Z$Z(true, false);
}, 1);

Clazz.newMeth(C$, 'adjustable$', function () {
return Clazz.new_($I$(14,1));
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
