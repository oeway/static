(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.eig"),p$1={},I$=[[0,'org.ejml.alg.dense.decomposition.eig.symm.SymmetricQREigenHelper','org.ejml.alg.dense.decomposition.eig.symm.SymmetricQrAlgorithm','org.ejml.factory.DecompositionFactory','org.ejml.data.Complex64F','org.ejml.ops.CommonOps']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SymmetricQRAlgorithmDecomposition", null, null, 'org.ejml.factory.EigenDecomposition');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.computeVectorsWithValues=false;
}, 1);

C$.$fields$=[['Z',['computeVectorsWithValues','computeVectors'],'O',['decomp','org.ejml.alg.dense.decomposition.hessenberg.TridiagonalSimilarDecomposition','helper','org.ejml.alg.dense.decomposition.eig.symm.SymmetricQREigenHelper','vector','org.ejml.alg.dense.decomposition.eig.symm.SymmetricQrAlgorithm','values','double[]','+diag','+off','+diagSaved','+offSaved','V','org.ejml.data.DenseMatrix64F','eigenvectors','org.ejml.data.DenseMatrix64F[]']]]

Clazz.newMeth(C$, 'c$$org_ejml_alg_dense_decomposition_hessenberg_TridiagonalSimilarDecomposition$Z', function (decomp, computeVectors) {
;C$.$init$.apply(this);
this.decomp=decomp;
this.computeVectors=computeVectors;
this.helper=Clazz.new_($I$(1,1));
this.vector=Clazz.new_($I$(2,1).c$$org_ejml_alg_dense_decomposition_eig_symm_SymmetricQREigenHelper,[this.helper]);
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (computeVectors) {
C$.c$$org_ejml_alg_dense_decomposition_hessenberg_TridiagonalSimilarDecomposition$Z.apply(this, [$I$(3).tridiagonal$I(0), computeVectors]);
}, 1);

Clazz.newMeth(C$, 'setComputeVectorsWithValues$Z', function (computeVectorsWithValues) {
if (!this.computeVectors) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Compute eigenvalues has been set to false"]);
this.computeVectorsWithValues=computeVectorsWithValues;
});

Clazz.newMeth(C$, 'setMaxIterations$I', function (max) {
this.vector.setMaxIterations$I(max);
});

Clazz.newMeth(C$, 'getNumberOfEigenvalues$', function () {
return this.helper.getMatrixSize$();
});

Clazz.newMeth(C$, 'getEigenvalue$I', function (index) {
return Clazz.new_($I$(4,1).c$$D$D,[this.values[index], 0]);
});

Clazz.newMeth(C$, 'getEigenVector$I', function (index) {
return this.eigenvectors[index];
});

Clazz.newMeth(C$, ['decompose$org_ejml_data_DenseMatrix64F','decompose$TT'], function (orig) {
if (orig.numCols != orig.numRows) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Matrix must be square."]);
var N=orig.numRows;
if (!this.decomp.decompose$TT(orig)) return false;
if (this.diag == null  || this.diag.length < N ) {
this.diag=Clazz.array(Double.TYPE, [N]);
this.off=Clazz.array(Double.TYPE, [N - 1]);
}this.decomp.getDiagonal$DA$DA(this.diag, this.off);
this.helper.init$DA$DA$I(this.diag, this.off, N);
if (this.computeVectors) {
if (this.computeVectorsWithValues) {
return p$1.extractTogether.apply(this, []);
} else {
return p$1.extractSeparate$I.apply(this, [N]);
}} else {
return p$1.computeEigenValues.apply(this, []);
}});

Clazz.newMeth(C$, 'inputModified$', function () {
return this.decomp.inputModified$();
});

Clazz.newMeth(C$, 'extractTogether', function () {
this.V=this.decomp.getQ$TMatrixType$Z(this.V, true);
this.helper.setQ$org_ejml_data_DenseMatrix64F(this.V);
this.vector.setFastEigenvalues$Z(false);
if (!this.vector.process$I$DA$DA(-1, null, null)) return false;
this.eigenvectors=$I$(5).rowsToVector$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64FA(this.V, this.eigenvectors);
this.values=this.helper.copyEigenvalues$DA(this.values);
return true;
}, p$1);

Clazz.newMeth(C$, 'extractSeparate$I', function (numCols) {
if (!p$1.computeEigenValues.apply(this, [])) return false;
this.helper.reset$I(numCols);
this.diagSaved=this.helper.swapDiag$DA(this.diagSaved);
this.offSaved=this.helper.swapOff$DA(this.offSaved);
this.V=this.decomp.getQ$TMatrixType$Z(this.V, true);
this.vector.setQ$org_ejml_data_DenseMatrix64F(this.V);
if (!this.vector.process$I$DA$DA$DA(-1, null, null, this.values)) return false;
this.values=this.helper.copyEigenvalues$DA(this.values);
this.eigenvectors=$I$(5).rowsToVector$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64FA(this.V, this.eigenvectors);
return true;
}, p$1);

Clazz.newMeth(C$, 'computeEigenValues', function () {
this.diagSaved=this.helper.copyDiag$DA(this.diagSaved);
this.offSaved=this.helper.copyOff$DA(this.offSaved);
this.vector.setQ$org_ejml_data_DenseMatrix64F(null);
this.vector.setFastEigenvalues$Z(true);
if (!this.vector.process$I$DA$DA(-1, null, null)) return false;
this.values=this.helper.copyEigenvalues$DA(this.values);
return true;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
