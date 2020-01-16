(function(){var P$=Clazz.newPackage("org.ejml.factory"),I$=[[0,'org.ejml.EjmlParameters','org.ejml.alg.dense.decomposition.chol.CholeskyDecompositionInner',['org.ejml.EjmlParameters','.MemoryUsage'],'org.ejml.alg.dense.decomposition.chol.CholeskyDecompositionBlock64','org.ejml.alg.dense.decomposition.chol.CholeskyDecompositionBlock','org.ejml.alg.dense.decomposition.chol.CholeskyDecompositionLDL','org.ejml.alg.dense.decomposition.lu.LUDecompositionAlt','org.ejml.alg.dense.decomposition.svd.SvdImplicitQrDecompose','org.ejml.alg.dense.decomposition.qr.QRDecompositionHouseholderColumn','org.ejml.alg.dense.decomposition.qr.QRColPivDecompositionHouseholderColumn','org.ejml.alg.dense.decomposition.eig.SwitchingEigenDecomposition','org.ejml.alg.dense.decomposition.eig.SymmetricQRAlgorithmDecomposition','org.ejml.alg.dense.decomposition.eig.WatchedDoubleStepQRDecomposition','org.ejml.simple.SimpleMatrix','org.ejml.ops.SpecializedOps','org.ejml.ops.EigenOps','org.ejml.alg.dense.decomposition.hessenberg.TridiagonalDecompositionBlock','org.ejml.alg.dense.decomposition.hessenberg.TridiagonalDecompositionHouseholder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DecompositionFactory");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'chol$I$Z', function (matrixSize, lower) {
if (matrixSize < $I$(1).SWITCH_BLOCK64_CHOLESKY) {
return Clazz.new_($I$(2,1).c$$Z,[lower]);
} else if ($I$(1).MEMORY === $I$(3).FASTER ) {
return Clazz.new_($I$(4,1).c$$Z,[lower]);
} else {
return Clazz.new_($I$(5,1).c$$I,[$I$(1).BLOCK_WIDTH_CHOL]);
}}, 1);

Clazz.newMeth(C$, 'cholLDL$I', function (matrixSize) {
return Clazz.new_($I$(6,1));
}, 1);

Clazz.newMeth(C$, 'lu$I$I', function (numRows, numCol) {
return Clazz.new_($I$(7,1));
}, 1);

Clazz.newMeth(C$, 'svd$I$I$Z$Z$Z', function (numRows, numCols, needU, needV, compact) {
return Clazz.new_($I$(8,1).c$$Z$Z$Z$Z,[compact, needU, needV, false]);
}, 1);

Clazz.newMeth(C$, 'qr$I$I', function (numRows, numCols) {
return Clazz.new_($I$(9,1));
}, 1);

Clazz.newMeth(C$, 'qrp$I$I', function (numRows, numCols) {
return Clazz.new_($I$(10,1));
}, 1);

Clazz.newMeth(C$, 'eig$I$Z', function (matrixSize, needVectors) {
return Clazz.new_($I$(11,1).c$$I$Z$D,[matrixSize, needVectors, 1.0E-8]);
}, 1);

Clazz.newMeth(C$, 'eig$I$Z$Z', function (matrixSize, computeVectors, isSymmetric) {
if (isSymmetric) {
var decomp=C$.tridiagonal$I(matrixSize);
return Clazz.new_($I$(12,1).c$$org_ejml_alg_dense_decomposition_hessenberg_TridiagonalSimilarDecomposition$Z,[decomp, computeVectors]);
} else return Clazz.new_($I$(13,1).c$$Z,[computeVectors]);
}, 1);

Clazz.newMeth(C$, 'quality$org_ejml_data_DenseMatrix64F$org_ejml_factory_SingularValueDecomposition', function (orig, svd) {
return C$.quality$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F(orig, svd.getU$TT$Z(null, false), svd.getW$TT(null), svd.getV$TT$Z(null, true));
}, 1);

Clazz.newMeth(C$, 'quality$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F', function (orig, U, W, Vt) {
var _U=$I$(14).wrap$org_ejml_data_DenseMatrix64F(U);
var _W=$I$(14).wrap$org_ejml_data_DenseMatrix64F(W);
var _Vt=$I$(14).wrap$org_ejml_data_DenseMatrix64F(Vt);
var foundA=_U.mult$TT(_W).mult$TT(_Vt);
return $I$(15).diffNormF$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F(orig, foundA.getMatrix$()) / foundA.normF$();
}, 1);

Clazz.newMeth(C$, 'quality$org_ejml_data_DenseMatrix64F$org_ejml_factory_EigenDecomposition', function (orig, eig) {
var A=$I$(14).wrap$org_ejml_data_DenseMatrix64F(orig);
var V=$I$(14).wrap$org_ejml_data_DenseMatrix64F($I$(16).createMatrixV$org_ejml_factory_EigenDecomposition(eig));
var D=$I$(14).wrap$org_ejml_data_DenseMatrix64F($I$(16).createMatrixD$org_ejml_factory_EigenDecomposition(eig));
var L=A.mult$TT(V);
var R=V.mult$TT(D);
var diff=L.minus$TT(R);
var top=diff.normF$();
var bottom=L.normF$();
var error=top / bottom;
return error;
}, 1);

Clazz.newMeth(C$, 'tridiagonal$I', function (matrixSize) {
if (matrixSize >= 1800) {
return Clazz.new_($I$(17,1));
} else {
return Clazz.new_($I$(18,1));
}}, 1);

Clazz.newMeth(C$, 'decomposeSafe$org_ejml_factory_DecompositionInterface$TT', function (decomp, M) {
if (decomp.inputModified$()) {
return decomp.decompose$TT(M.copy$());
} else {
return decomp.decompose$TT(M);
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
