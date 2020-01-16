(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.eig"),I$=[[0,'org.ejml.alg.dense.decomposition.hessenberg.HessenbergSimilarDecomposition','org.ejml.alg.dense.decomposition.eig.watched.WatchedDoubleStepQREigenvalue','org.ejml.alg.dense.decomposition.eig.watched.WatchedDoubleStepQREigenvector']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "WatchedDoubleStepQRDecomposition", null, null, 'org.ejml.factory.EigenDecomposition');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['computeVectors'],'O',['hessenberg','org.ejml.alg.dense.decomposition.hessenberg.HessenbergSimilarDecomposition','algValue','org.ejml.alg.dense.decomposition.eig.watched.WatchedDoubleStepQREigenvalue','algVector','org.ejml.alg.dense.decomposition.eig.watched.WatchedDoubleStepQREigenvector','H','org.ejml.data.DenseMatrix64F']]]

Clazz.newMeth(C$, 'c$$Z', function (computeVectors) {
;C$.$init$.apply(this);
this.hessenberg=Clazz.new_($I$(1,1).c$$I,[10]);
this.algValue=Clazz.new_($I$(2,1));
this.algVector=Clazz.new_($I$(3,1));
this.computeVectors=computeVectors;
}, 1);

Clazz.newMeth(C$, ['decompose$org_ejml_data_DenseMatrix64F','decompose$TT'], function (A) {
if (!this.hessenberg.decompose$org_ejml_data_DenseMatrix64F(A)) return false;
this.H=this.hessenberg.getH$org_ejml_data_DenseMatrix64F(null);
this.algValue.getImplicitQR$().createR=false;
if (!this.algValue.process$org_ejml_data_DenseMatrix64F(this.H)) return false;
this.algValue.getImplicitQR$().createR=true;
if (this.computeVectors) return this.algVector.process$org_ejml_alg_dense_decomposition_eig_watched_WatchedDoubleStepQREigen$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F(this.algValue.getImplicitQR$(), this.H, this.hessenberg.getQ$org_ejml_data_DenseMatrix64F(null));
 else return true;
});

Clazz.newMeth(C$, 'inputModified$', function () {
return this.hessenberg.inputModified$();
});

Clazz.newMeth(C$, 'getNumberOfEigenvalues$', function () {
return this.algValue.getEigenvalues$().length;
});

Clazz.newMeth(C$, 'getEigenvalue$I', function (index) {
return this.algValue.getEigenvalues$()[index];
});

Clazz.newMeth(C$, 'getEigenVector$I', function (index) {
return this.algVector.getEigenvectors$()[index];
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
