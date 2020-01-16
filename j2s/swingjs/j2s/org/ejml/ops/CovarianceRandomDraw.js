(function(){var P$=Clazz.newPackage("org.ejml.ops"),I$=[[0,'org.ejml.data.DenseMatrix64F','org.ejml.alg.dense.decomposition.chol.CholeskyDecompositionInner']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CovarianceRandomDraw");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['A','org.ejml.data.DenseMatrix64F','rand','java.util.Random','r','org.ejml.data.DenseMatrix64F']]]

Clazz.newMeth(C$, 'c$$java_util_Random$org_ejml_data_DenseMatrix64F', function (rand, cov) {
;C$.$init$.apply(this);
this.r=Clazz.new_($I$(1,1).c$$I$I,[cov.numRows, 1]);
var choleky=Clazz.new_($I$(2,1).c$$Z,[true]);
choleky.decompose$org_ejml_data_DenseMatrix64F(cov);
this.A=choleky.getT$();
this.rand=rand;
}, 1);

Clazz.newMeth(C$, 'next$org_ejml_data_DenseMatrix64F', function (x) {
for (var i=0; i < this.r.numRows; i++) {
this.r.set$I$I$D(i, 0, this.rand.nextGaussian$());
}
P$.CommonOps.multAdd$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(this.A, this.r, x);
});

Clazz.newMeth(C$, 'computeLikelihoodP$', function () {
var ret=1.0;
for (var i=0; i < this.r.numRows; i++) {
var a=this.r.get$I$I(i, 0);
ret *= Math.exp(-a * a / 2.0);
}
return ret;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
