(function(){var P$=Clazz.newPackage("org.ejml.alg.block.decomposition.hessenberg"),I$=[[0,'org.ejml.ops.CommonOps','org.ejml.alg.block.decomposition.qr.BlockHouseHolder','org.ejml.alg.block.BlockVectorOps']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TridiagonalBlockHelper");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'tridiagUpperRow$I$org_ejml_data_D1Submatrix64F$DA$org_ejml_data_D1Submatrix64F', function (blockLength, A, gammas, V) {
var blockHeight=Math.min(blockLength, A.row1 - A.row0);
if (blockHeight <= 1) return;
var width=A.col1 - A.col0;
var num=Math.min(width - 1, blockHeight);
var applyIndex=Math.min(width, blockHeight);
for (var i=0; i < num; i++) {
org.ejml.alg.block.decomposition.qr.BlockHouseHolder.computeHouseHolderRow$I$org_ejml_data_D1Submatrix64F$DA$I(blockLength, A, gammas, i);
var gamma=gammas[A.row0 + i];
C$.computeY$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$I$D(blockLength, A, V, i, gamma);
C$.computeRowOfV$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$I$D(blockLength, A, V, i, gamma);
if (i + 1 < applyIndex) {
C$.applyReflectorsToRow$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$I(blockLength, A, V, i + 1);
}}
}, 1);

Clazz.newMeth(C$, 'computeW_row$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$DA$I', function (blockLength, Y, W, beta, betaIndex) {
var heightY=Y.row1 - Y.row0;
$I$(1).fill$org_ejml_data_D1Matrix64F$D(W.original, 0);
$I$(2).scale_row$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$I$I$D(blockLength, Y, W, 0, 1, -beta[betaIndex++]);
var min=Math.min(heightY, W.col1 - W.col0);
for (var i=1; i < min; i++) {
var b=-beta[betaIndex++];
for (var j=0; j < i; j++) {
var yv=$I$(2).innerProdRow$I$org_ejml_data_D1Submatrix64F$I$org_ejml_data_D1Submatrix64F$I$I(blockLength, Y, i, Y, j, 1);
$I$(3).add_row$I$org_ejml_data_D1Submatrix64F$I$D$org_ejml_data_D1Submatrix64F$I$D$org_ejml_data_D1Submatrix64F$I$I$I(blockLength, W, i, 1, W, j, b * yv, W, i, 1, Y.col1 - Y.col0);
}
$I$(2).add_row$I$org_ejml_data_D1Submatrix64F$I$D$org_ejml_data_D1Submatrix64F$I$D$org_ejml_data_D1Submatrix64F$I$I$I(blockLength, Y, i, b, W, i, 1, W, i, 1, Y.col1 - Y.col0);
}
}, 1);

Clazz.newMeth(C$, 'computeV_blockVector$I$org_ejml_data_D1Submatrix64F$DA$org_ejml_data_D1Submatrix64F', function (blockLength, A, gammas, V) {
var blockHeight=Math.min(blockLength, A.row1 - A.row0);
if (blockHeight <= 1) return;
var width=A.col1 - A.col0;
var num=Math.min(width - 1, blockHeight);
for (var i=0; i < num; i++) {
var gamma=gammas[A.row0 + i];
C$.computeY$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$I$D(blockLength, A, V, i, gamma);
C$.computeRowOfV$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$I$D(blockLength, A, V, i, gamma);
}
}, 1);

Clazz.newMeth(C$, 'applyReflectorsToRow$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$I', function (blockLength, A, V, row) {
var height=Math.min(blockLength, A.row1 - A.row0);
var dataA=A.original.data;
var dataV=V.original.data;
var indexU;
var indexV;
for (var i=0; i < row; i++) {
var width=Math.min(blockLength, A.col1 - A.col0);
indexU=A.original.numCols * A.row0 + height * A.col0 + i * width + row;
indexV=V.original.numCols * V.row0 + height * V.col0 + i * width + row;
var u_row=(i + 1 == row) ? 1.0 : dataA[indexU];
var v_row=dataV[indexV];
var before=A.get$I$I(i, i + 1);
A.set$I$I$D(i, i + 1, 1);
$I$(3).add_row$I$org_ejml_data_D1Submatrix64F$I$D$org_ejml_data_D1Submatrix64F$I$D$org_ejml_data_D1Submatrix64F$I$I$I(blockLength, A, row, 1, V, i, u_row, A, row, row, A.col1 - A.col0);
$I$(3).add_row$I$org_ejml_data_D1Submatrix64F$I$D$org_ejml_data_D1Submatrix64F$I$D$org_ejml_data_D1Submatrix64F$I$I$I(blockLength, A, row, 1, A, i, v_row, A, row, row, A.col1 - A.col0);
A.set$I$I$D(i, i + 1, before);
}
}, 1);

Clazz.newMeth(C$, 'computeY$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$I$D', function (blockLength, A, V, row, gamma) {
C$.multA_u$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$I(blockLength, A, V, row);
for (var i=0; i < row; i++) {
var dot_v_u=$I$(2).innerProdRow$I$org_ejml_data_D1Submatrix64F$I$org_ejml_data_D1Submatrix64F$I$I(blockLength, A, row, V, i, 1);
var dot_u_u=$I$(2).innerProdRow$I$org_ejml_data_D1Submatrix64F$I$org_ejml_data_D1Submatrix64F$I$I(blockLength, A, row, A, i, 1);
$I$(3).add_row$I$org_ejml_data_D1Submatrix64F$I$D$org_ejml_data_D1Submatrix64F$I$D$org_ejml_data_D1Submatrix64F$I$I$I(blockLength, V, row, 1, A, i, dot_v_u, V, row, row + 1, A.col1 - A.col0);
$I$(3).add_row$I$org_ejml_data_D1Submatrix64F$I$D$org_ejml_data_D1Submatrix64F$I$D$org_ejml_data_D1Submatrix64F$I$I$I(blockLength, V, row, 1, V, i, dot_u_u, V, row, row + 1, A.col1 - A.col0);
}
$I$(3).scale_row$I$org_ejml_data_D1Submatrix64F$I$D$org_ejml_data_D1Submatrix64F$I$I$I(blockLength, V, row, -gamma, V, row, row + 1, V.col1 - V.col0);
}, 1);

Clazz.newMeth(C$, 'multA_u$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$I', function (blockLength, A, V, row) {
var heightMatA=A.row1 - A.row0;
for (var i=row + 1; i < heightMatA; i++) {
var val=C$.innerProdRowSymm$I$org_ejml_data_D1Submatrix64F$I$org_ejml_data_D1Submatrix64F$I$I(blockLength, A, row, A, i, 1);
V.set$I$I$D(row, i, val);
}
}, 1);

Clazz.newMeth(C$, 'innerProdRowSymm$I$org_ejml_data_D1Submatrix64F$I$org_ejml_data_D1Submatrix64F$I$I', function (blockLength, A, rowA, B, rowB, zeroOffset) {
var offset=rowA + zeroOffset;
if (offset + B.col0 >= B.col1) return 0;
if (offset < rowB) {
var total=B.get$I$I(offset, rowB);
total += $I$(3).dot_row_col$I$org_ejml_data_D1Submatrix64F$I$org_ejml_data_D1Submatrix64F$I$I$I(blockLength, A, rowA, B, rowB, offset + 1, rowB);
total += $I$(3).dot_row$I$org_ejml_data_D1Submatrix64F$I$org_ejml_data_D1Submatrix64F$I$I$I(blockLength, A, rowA, B, rowB, rowB, A.col1 - A.col0);
return total;
} else {
var total=B.get$I$I(rowB, offset);
total += $I$(3).dot_row$I$org_ejml_data_D1Submatrix64F$I$org_ejml_data_D1Submatrix64F$I$I$I(blockLength, A, rowA, B, rowB, offset + 1, A.col1 - A.col0);
return total;
}}, 1);

Clazz.newMeth(C$, 'computeRowOfV$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$I$D', function (blockLength, A, V, row, gamma) {
var val=$I$(2).innerProdRow$I$org_ejml_data_D1Submatrix64F$I$org_ejml_data_D1Submatrix64F$I$I(blockLength, A, row, V, row, 1);
var before=A.get$I$I(row, row + 1);
A.set$I$I$D(row, row + 1, 1);
$I$(3).add_row$I$org_ejml_data_D1Submatrix64F$I$D$org_ejml_data_D1Submatrix64F$I$D$org_ejml_data_D1Submatrix64F$I$I$I(blockLength, V, row, 1, A, row, -0.5 * gamma * val , V, row, row + 1, A.col1 - A.col0);
A.set$I$I$D(row, row + 1, before);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
