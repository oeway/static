(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.eig.symm"),p$1={},I$=[[0,'org.ejml.alg.dense.decomposition.eig.symm.SymmetricQREigenHelper','org.ejml.ops.CommonOps']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SymmetricQrAlgorithm");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.exceptionalThresh=15;
this.maxIterations=this.exceptionalThresh * 15;
}, 1);

C$.$fields$=[['Z',['fastEigenvalues','followingScript'],'I',['exceptionalThresh','maxIterations'],'O',['helper','org.ejml.alg.dense.decomposition.eig.symm.SymmetricQREigenHelper','Q','org.ejml.data.DenseMatrix64F','eigenvalues','double[]']]]

Clazz.newMeth(C$, 'c$$org_ejml_alg_dense_decomposition_eig_symm_SymmetricQREigenHelper', function (helper) {
;C$.$init$.apply(this);
this.helper=helper;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.helper=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'setMaxIterations$I', function (maxIterations) {
this.maxIterations=maxIterations;
});

Clazz.newMeth(C$, 'getQ$', function () {
return this.Q;
});

Clazz.newMeth(C$, 'setQ$org_ejml_data_DenseMatrix64F', function (q) {
this.Q=q;
});

Clazz.newMeth(C$, 'setFastEigenvalues$Z', function (fastEigenvalues) {
this.fastEigenvalues=fastEigenvalues;
});

Clazz.newMeth(C$, 'getEigenvalue$I', function (index) {
return this.helper.diag[index];
});

Clazz.newMeth(C$, 'getNumberOfEigenvalues$', function () {
return this.helper.N;
});

Clazz.newMeth(C$, 'process$I$DA$DA$DA', function (sideLength, diag, off, eigenvalues) {
if (diag != null ) this.helper.init$DA$DA$I(diag, off, sideLength);
if (this.Q == null ) this.Q=$I$(2).identity$I(this.helper.N);
this.helper.setQ$org_ejml_data_DenseMatrix64F(this.Q);
this.followingScript=true;
this.eigenvalues=eigenvalues;
this.fastEigenvalues=false;
return p$1._process.apply(this, []);
});

Clazz.newMeth(C$, 'process$I$DA$DA', function (sideLength, diag, off) {
if (diag != null ) this.helper.init$DA$DA$I(diag, off, sideLength);
this.followingScript=false;
this.eigenvalues=null;
return p$1._process.apply(this, []);
});

Clazz.newMeth(C$, '_process', function () {
while (this.helper.x2 >= 0){
if (this.helper.steps > this.maxIterations) {
return false;
}if (this.helper.x1 == this.helper.x2) {
this.helper.resetSteps$();
if (!this.helper.nextSplit$()) break;
} else if (this.fastEigenvalues && this.helper.x2 - this.helper.x1 == 1 ) {
this.helper.resetSteps$();
this.helper.eigenvalue2by2$I(this.helper.x1);
this.helper.setSubmatrix$I$I(this.helper.x2, this.helper.x2);
} else if (this.helper.steps - this.helper.lastExceptional > this.exceptionalThresh) {
this.helper.exceptionalShift$();
} else {
this.performStep$();
}this.helper.incrementSteps$();
}
return true;
}, p$1);

Clazz.newMeth(C$, 'performStep$', function () {
for (var i=this.helper.x2 - 1; i >= this.helper.x1; i--) {
if (this.helper.isZero$I(i)) {
this.helper.splits[this.helper.numSplits++]=i;
this.helper.x1=i + 1;
return;
}}
var lambda;
if (this.followingScript) {
if (this.helper.steps > 10) {
this.followingScript=false;
return;
} else {
lambda=this.eigenvalues[this.helper.x2];
}} else {
lambda=this.helper.computeShift$();
}this.helper.performImplicitSingleStep$D$Z(lambda, false);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
