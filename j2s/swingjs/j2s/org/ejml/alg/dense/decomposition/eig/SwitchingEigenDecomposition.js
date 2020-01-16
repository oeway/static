(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.eig"),I$=[[0,'org.ejml.data.DenseMatrix64F','org.ejml.factory.DecompositionFactory','org.ejml.ops.MatrixFeatures']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SwitchingEigenDecomposition", null, null, 'org.ejml.factory.EigenDecomposition');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.A=Clazz.new_($I$(1,1).c$$I$I,[1, 1]);
}, 1);

C$.$fields$=[['Z',['symmetric','computeVectors'],'D',['tol'],'O',['symmetricAlg','org.ejml.factory.EigenDecomposition','+generalAlg','A','org.ejml.data.DenseMatrix64F']]]

Clazz.newMeth(C$, 'c$$I$Z$D', function (matrixSize, computeVectors, tol) {
;C$.$init$.apply(this);
this.symmetricAlg=$I$(2).eig$I$Z$Z(matrixSize, computeVectors, true);
this.generalAlg=$I$(2).eig$I$Z$Z(matrixSize, computeVectors, false);
this.computeVectors=computeVectors;
this.tol=tol;
}, 1);

Clazz.newMeth(C$, 'c$$I', function (matrixSize) {
C$.c$$I$Z$D.apply(this, [matrixSize, true, 1.0E-8]);
}, 1);

Clazz.newMeth(C$, 'getNumberOfEigenvalues$', function () {
return this.symmetric ? this.symmetricAlg.getNumberOfEigenvalues$() : this.generalAlg.getNumberOfEigenvalues$();
});

Clazz.newMeth(C$, 'getEigenvalue$I', function (index) {
return this.symmetric ? this.symmetricAlg.getEigenvalue$I(index) : this.generalAlg.getEigenvalue$I(index);
});

Clazz.newMeth(C$, 'getEigenVector$I', function (index) {
if (!this.computeVectors) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Configured to not compute eignevectors"]);
return this.symmetric ? this.symmetricAlg.getEigenVector$I(index) : this.generalAlg.getEigenVector$I(index);
});

Clazz.newMeth(C$, ['decompose$org_ejml_data_DenseMatrix64F','decompose$TT'], function (orig) {
this.A.setReshape$org_ejml_data_DenseMatrix64F(orig);
this.symmetric=$I$(3).isSymmetric$org_ejml_data_DenseMatrix64F$D(this.A, this.tol);
return this.symmetric ? this.symmetricAlg.decompose$TT(this.A) : this.generalAlg.decompose$TT(this.A);
});

Clazz.newMeth(C$, 'inputModified$', function () {
return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
