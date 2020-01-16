(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.chol"),I$=[[0,'org.ejml.alg.block.decomposition.chol.BlockCholeskyOuterForm','org.ejml.EjmlParameters','org.ejml.data.DenseMatrix64F','org.ejml.alg.block.BlockMatrixOps']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CholeskyDecompositionBlock64", null, 'org.ejml.alg.dense.decomposition.BaseDecompositionBlock64', 'org.ejml.factory.CholeskyDecomposition');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (lower) {
;C$.superclazz.c$$org_ejml_factory_DecompositionInterface$I.apply(this,[Clazz.new_($I$(1,1).c$$Z,[lower]), $I$(2).BLOCK_WIDTH]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isLower$', function () {
return (this.alg).isLower$();
});

Clazz.newMeth(C$, ['getT$org_ejml_data_DenseMatrix64F','getT$TMatrixType'], function (T) {
var T_block=(this.alg).getT$org_ejml_data_BlockMatrix64F(null);
if (T == null ) {
T=Clazz.new_($I$(3,1).c$$I$I,[T_block.numRows, T_block.numCols]);
}$I$(4).convert$org_ejml_data_BlockMatrix64F$org_ejml_data_DenseMatrix64F(T_block, T);
return T;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
