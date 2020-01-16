(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.svd"),I$=[[0,'org.ejml.data.DenseMatrix64F']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SafeSvd", null, null, 'org.ejml.factory.SingularValueDecomposition');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.work=Clazz.new_($I$(1,1).c$$I$I,[1, 1]);
}, 1);

C$.$fields$=[['O',['alg','org.ejml.factory.SingularValueDecomposition','work','org.ejml.data.DenseMatrix64F']]]

Clazz.newMeth(C$, 'c$$org_ejml_factory_SingularValueDecomposition', function (alg) {
;C$.$init$.apply(this);
this.alg=alg;
}, 1);

Clazz.newMeth(C$, 'getSingularValues$', function () {
return this.alg.getSingularValues$();
});

Clazz.newMeth(C$, 'numberOfSingularValues$', function () {
return this.alg.numberOfSingularValues$();
});

Clazz.newMeth(C$, 'isCompact$', function () {
return this.alg.isCompact$();
});

Clazz.newMeth(C$, ['getU$org_ejml_data_DenseMatrix64F$Z','getU$TT$Z'], function (U, transposed) {
return this.alg.getU$TT$Z(U, transposed);
});

Clazz.newMeth(C$, ['getV$org_ejml_data_DenseMatrix64F$Z','getV$TT$Z'], function (V, transposed) {
return this.alg.getV$TT$Z(V, transposed);
});

Clazz.newMeth(C$, ['getW$org_ejml_data_DenseMatrix64F','getW$TT'], function (W) {
return this.alg.getW$TT(W);
});

Clazz.newMeth(C$, 'numRows$', function () {
return this.alg.numRows$();
});

Clazz.newMeth(C$, 'numCols$', function () {
return this.alg.numCols$();
});

Clazz.newMeth(C$, ['decompose$org_ejml_data_DenseMatrix64F','decompose$TT'], function (orig) {
if (this.alg.inputModified$()) {
this.work.reshape$I$I(orig.numRows, orig.numCols);
this.work.set$org_ejml_data_D1Matrix64F(orig);
return this.alg.decompose$TT(this.work);
} else {
return this.alg.decompose$TT(orig);
}});

Clazz.newMeth(C$, 'inputModified$', function () {
return false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
