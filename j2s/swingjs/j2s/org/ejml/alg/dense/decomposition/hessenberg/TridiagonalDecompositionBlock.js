(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.hessenberg"),I$=[[0,'org.ejml.EjmlParameters','org.ejml.alg.block.decomposition.hessenberg.TridiagonalDecompositionBlockHouseholder','org.ejml.data.DenseMatrix64F','org.ejml.ops.CommonOps','org.ejml.data.BlockMatrix64F']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TridiagonalDecompositionBlock", null, 'org.ejml.alg.dense.decomposition.BaseDecompositionBlock64', 'org.ejml.alg.dense.decomposition.hessenberg.TridiagonalSimilarDecomposition');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$I.apply(this, [$I$(1).BLOCK_WIDTH]);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (blockSize) {
;C$.superclazz.c$$org_ejml_factory_DecompositionInterface$I.apply(this,[Clazz.new_($I$(2,1)), blockSize]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['getT$org_ejml_data_DenseMatrix64F','getT$TMatrixType'], function (T) {
var N=this.Ablock.numRows;
if (T == null ) {
T=Clazz.new_($I$(3,1).c$$I$I,[N, N]);
} else {
$I$(4).fill$org_ejml_data_D1Matrix64F$D(T, 0);
}var diag=Clazz.array(Double.TYPE, [N]);
var off=Clazz.array(Double.TYPE, [N]);
(this.alg).getDiagonal$DA$DA(diag, off);
T.unsafe_set$I$I$D(0, 0, diag[0]);
for (var i=1; i < N; i++) {
T.unsafe_set$I$I$D(i, i, diag[i]);
T.unsafe_set$I$I$D(i, i - 1, off[i - 1]);
T.unsafe_set$I$I$D(i - 1, i, off[i - 1]);
}
return T;
});

Clazz.newMeth(C$, ['getQ$org_ejml_data_DenseMatrix64F$Z','getQ$TMatrixType$Z'], function (Q, transposed) {
if (Q == null ) {
Q=Clazz.new_($I$(3,1).c$$I$I,[this.Ablock.numRows, this.Ablock.numCols]);
}var Qblock=Clazz.new_($I$(5,1));
Qblock.numRows=Q.numRows;
Qblock.numCols=Q.numCols;
Qblock.blockLength=this.blockLength;
Qblock.data=Q.data;
(this.alg).getQ$org_ejml_data_BlockMatrix64F$Z(Qblock, transposed);
this.convertBlockToRow$I$I$I$DA(Q.numRows, Q.numCols, this.Ablock.blockLength, Q.data);
return Q;
});

Clazz.newMeth(C$, 'getDiagonal$DA$DA', function (diag, off) {
(this.alg).getDiagonal$DA$DA(diag, off);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
