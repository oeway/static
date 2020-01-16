(function(){var P$=Clazz.newPackage("org.ejml.alg.block.decomposition.qr"),I$=[[0,'org.ejml.alg.block.BlockVectorOps','org.ejml.alg.block.BlockInnerMultiplication']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BlockHouseHolder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'decomposeQR_block_col$I$org_ejml_data_D1Submatrix64F$DA', function (blockLength, Y, gamma) {
var width=Y.col1 - Y.col0;
var height=Y.row1 - Y.row0;
var min=Math.min(width, height);
for (var i=0; i < min; i++) {
if (!C$.computeHouseHolderCol$I$org_ejml_data_D1Submatrix64F$DA$I(blockLength, Y, gamma, i)) return false;
C$.rank1UpdateMultR_Col$I$org_ejml_data_D1Submatrix64F$I$D(blockLength, Y, i, gamma[Y.col0 + i]);
}
return true;
}, 1);

Clazz.newMeth(C$, 'computeHouseHolderCol$I$org_ejml_data_D1Submatrix64F$DA$I', function (blockLength, Y, gamma, i) {
var max=C$.findMaxCol$I$org_ejml_data_D1Submatrix64F$I(blockLength, Y, i);
if (max == 0.0 ) {
return false;
} else {
var tau=C$.computeTauAndDivideCol$I$org_ejml_data_D1Submatrix64F$I$D(blockLength, Y, i, max);
var u_0=Y.get$I$I(i, i) + tau;
C$.divideElementsCol$I$org_ejml_data_D1Submatrix64F$I$D(blockLength, Y, i, u_0);
gamma[Y.col0 + i]=u_0 / tau;
tau *= max;
Y.set$I$I$D(i, i, -tau);
}return true;
}, 1);

Clazz.newMeth(C$, 'computeHouseHolderRow$I$org_ejml_data_D1Submatrix64F$DA$I', function (blockLength, Y, gamma, i) {
var max=C$.findMaxRow$I$org_ejml_data_D1Submatrix64F$I$I(blockLength, Y, i, i + 1);
if (max == 0.0 ) {
return false;
} else {
var tau=C$.computeTauAndDivideRow$I$org_ejml_data_D1Submatrix64F$I$I$D(blockLength, Y, i, i + 1, max);
var u_0=Y.get$I$I(i, i + 1) + tau;
$I$(1).div_row$I$org_ejml_data_D1Submatrix64F$I$D$org_ejml_data_D1Submatrix64F$I$I$I(blockLength, Y, i, u_0, Y, i, i + 1, Y.col1 - Y.col0);
gamma[Y.row0 + i]=u_0 / tau;
Y.set$I$I$D(i, i + 1, -tau * max);
}return true;
}, 1);

Clazz.newMeth(C$, 'rank1UpdateMultR_Col$I$org_ejml_data_D1Submatrix64F$I$D', function (blockLength, A, col, gamma) {
var width=Math.min(blockLength, A.col1 - A.col0);
var dataA=A.original.data;
for (var j=col + 1; j < width; j++) {
var total=C$.innerProdCol$I$org_ejml_data_D1Submatrix64F$I$I$I$I(blockLength, A, col, width, j, width);
total *= gamma;
for (var i=A.row0; i < A.row1; i+=blockLength) {
var height=Math.min(blockLength, A.row1 - i);
var indexU=i * A.original.numCols + height * A.col0 + col;
var indexA=i * A.original.numCols + height * A.col0 + j;
if (i == A.row0) {
indexU+=width * (col + 1);
indexA+=width * col;
dataA[indexA] -= total;
indexA+=width;
for (var k=col + 1; k < height; k++, indexU+=width, indexA+=width) {
dataA[indexA] -= total * dataA[indexU];
}
} else {
var endU=indexU + width * height;
for (; indexU != endU; indexU+=width, indexA+=width) {
dataA[indexA] -= total * dataA[indexU];
}
}}
}
}, 1);

Clazz.newMeth(C$, 'rank1UpdateMultR_TopRow$I$org_ejml_data_D1Submatrix64F$I$D', function (blockLength, A, col, gamma) {
var dataA=A.original.data;
var widthCol=Math.min(blockLength, A.col1 - col);
for (var colStartJ=A.col0 + blockLength; colStartJ < A.col1; colStartJ+=blockLength) {
var widthJ=Math.min(blockLength, A.col1 - colStartJ);
for (var j=0; j < widthJ; j++) {
var total=C$.innerProdCol$I$org_ejml_data_D1Submatrix64F$I$I$I$I(blockLength, A, col, widthCol, (colStartJ - A.col0) + j, widthJ) * gamma;
var i=A.row0;
var height=Math.min(blockLength, A.row1 - i);
var indexU=i * A.original.numCols + height * A.col0 + col;
var indexA=i * A.original.numCols + height * colStartJ + j;
indexU+=widthCol * (col + 1);
indexA+=widthJ * col;
dataA[indexA] -= total;
indexA+=widthJ;
for (var k=col + 1; k < height; k++, indexU+=widthCol, indexA+=widthJ) {
dataA[indexA] -= total * dataA[indexU];
}
}
}
}, 1);

Clazz.newMeth(C$, 'rank1UpdateMultL_Row$I$org_ejml_data_D1Submatrix64F$I$I$D', function (blockLength, A, row, colStart, gamma) {
var height=Math.min(blockLength, A.row1 - A.row0);
var dataA=A.original.data;
var zeroOffset=colStart - row;
for (var i=row + 1; i < height; i++) {
var total=C$.innerProdRow$I$org_ejml_data_D1Submatrix64F$I$org_ejml_data_D1Submatrix64F$I$I(blockLength, A, row, A, i, zeroOffset);
total *= gamma;
for (var j=A.col0; j < A.col1; j+=blockLength) {
var width=Math.min(blockLength, A.col1 - j);
var indexU=A.row0 * A.original.numCols + height * j + row * width;
var indexA=A.row0 * A.original.numCols + height * j + i * width;
if (j == A.col0) {
indexU+=colStart + 1;
indexA+=colStart;
dataA[indexA++] -= total;
for (var k=colStart + 1; k < width; k++) {
dataA[indexA++] -= total * dataA[indexU++];
}
} else {
for (var k=0; k < width; k++) {
dataA[indexA++] -= total * dataA[indexU++];
}
}}
}
}, 1);

Clazz.newMeth(C$, 'rank1UpdateMultL_LeftCol$I$org_ejml_data_D1Submatrix64F$I$D$I', function (blockLength, A, row, gamma, zeroOffset) {
var heightU=Math.min(blockLength, A.row1 - A.row0);
var width=Math.min(blockLength, A.col1 - A.col0);
var data=A.original.data;
for (var blockStart=A.row0 + blockLength; blockStart < A.row1; blockStart+=blockLength) {
var heightA=Math.min(blockLength, A.row1 - blockStart);
for (var i=0; i < heightA; i++) {
var total=C$.innerProdRow$I$org_ejml_data_D1Submatrix64F$I$org_ejml_data_D1Submatrix64F$I$I(blockLength, A, row, A, i + (blockStart - A.row0), zeroOffset);
total *= gamma;
var indexU=A.row0 * A.original.numCols + heightU * A.col0 + row * width;
var indexA=blockStart * A.original.numCols + heightA * A.col0 + i * width;
indexU+=zeroOffset + 1;
indexA+=zeroOffset;
data[indexA++] -= total;
for (var k=zeroOffset + 1; k < width; k++) {
data[indexA++] -= total * data[indexU++];
}
}
}
}, 1);

Clazz.newMeth(C$, 'innerProdCol$I$org_ejml_data_D1Submatrix64F$I$I$I$I', function (blockLength, A, colA, widthA, colB, widthB) {
var total=0;
var data=A.original.data;
var colBlockA=A.col0 + colA - colA % blockLength;
var colBlockB=A.col0 + colB - colB % blockLength;
colA=colA % blockLength;
colB=colB % blockLength;
for (var i=A.row0; i < A.row1; i+=blockLength) {
var height=Math.min(blockLength, A.row1 - i);
var indexA=i * A.original.numCols + height * colBlockA + colA;
var indexB=i * A.original.numCols + height * colBlockB + colB;
if (i == A.row0) {
indexA+=widthA * (colA + 1);
indexB+=widthB * colA;
total=data[indexB];
indexB+=widthB;
var endA=indexA + (height - colA - 1 ) * widthA;
for (; indexA != endA; indexA+=widthA, indexB+=widthB) {
total += data[indexA] * data[indexB];
}
} else {
var endA=indexA + widthA * height;
for (; indexA != endA; indexA+=widthA, indexB+=widthB) {
total += data[indexA] * data[indexB];
}
}}
return total;
}, 1);

Clazz.newMeth(C$, 'innerProdRow$I$org_ejml_data_D1Submatrix64F$I$org_ejml_data_D1Submatrix64F$I$I', function (blockLength, A, rowA, B, rowB, zeroOffset) {
var offset=rowA + zeroOffset;
if (offset + B.col0 >= B.col1) return 0;
var total=B.get$I$I(rowB, offset);
total += $I$(1).dot_row$I$org_ejml_data_D1Submatrix64F$I$org_ejml_data_D1Submatrix64F$I$I$I(blockLength, A, rowA, B, rowB, offset + 1, A.col1 - A.col0);
return total;
}, 1);

Clazz.newMeth(C$, 'add_row$I$org_ejml_data_D1Submatrix64F$I$D$org_ejml_data_D1Submatrix64F$I$D$org_ejml_data_D1Submatrix64F$I$I$I', function (blockLength, A, rowA, alpha, B, rowB, beta, C, rowC, zeroOffset, end) {
var offset=rowA + zeroOffset;
if (C.col0 + offset >= C.col1) return;
C.set$I$I$D(rowC, offset, alpha + B.get$I$I(rowB, offset) * beta);
$I$(1).add_row$I$org_ejml_data_D1Submatrix64F$I$D$org_ejml_data_D1Submatrix64F$I$D$org_ejml_data_D1Submatrix64F$I$I$I(blockLength, A, rowA, alpha, B, rowB, beta, C, rowC, offset + 1, end);
}, 1);

Clazz.newMeth(C$, 'divideElementsCol$I$org_ejml_data_D1Submatrix64F$I$D', function (blockLength, Y, col, val) {
var width=Math.min(blockLength, Y.col1 - Y.col0);
var dataY=Y.original.data;
for (var i=Y.row0; i < Y.row1; i+=blockLength) {
var height=Math.min(blockLength, Y.row1 - i);
var index=i * Y.original.numCols + height * Y.col0 + col;
if (i == Y.row0) {
index+=width * (col + 1);
for (var k=col + 1; k < height; k++, index+=width) {
dataY[index] /= val;
}
} else {
var endIndex=index + width * height;
for (; index != endIndex; index+=width) {
dataY[index] /= val;
}
}}
}, 1);

Clazz.newMeth(C$, 'scale_row$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$I$I$D', function (blockLength, Y, W, row, zeroOffset, val) {
var offset=row + zeroOffset;
if (offset >= W.col1 - W.col0) return;
W.set$I$I$D(row, offset, val);
$I$(1).scale_row$I$org_ejml_data_D1Submatrix64F$I$D$org_ejml_data_D1Submatrix64F$I$I$I(blockLength, Y, row, val, W, row, offset + 1, Y.col1 - Y.col0);
}, 1);

Clazz.newMeth(C$, 'computeTauAndDivideCol$I$org_ejml_data_D1Submatrix64F$I$D', function (blockLength, Y, col, max) {
var width=Math.min(blockLength, Y.col1 - Y.col0);
var dataY=Y.original.data;
var top=0;
var norm2=0;
for (var i=Y.row0; i < Y.row1; i+=blockLength) {
var height=Math.min(blockLength, Y.row1 - i);
var index=i * Y.original.numCols + height * Y.col0 + col;
if (i == Y.row0) {
index+=width * col;
top=dataY[index] /= max;
norm2 += top * top;
index+=width;
for (var k=col + 1; k < height; k++, index+=width) {
var val=dataY[index] /= max;
norm2 += val * val;
}
} else {
for (var k=0; k < height; k++, index+=width) {
var val=dataY[index] /= max;
norm2 += val * val;
}
}}
norm2=Math.sqrt(norm2);
if (top < 0 ) norm2=-norm2;
return norm2;
}, 1);

Clazz.newMeth(C$, 'computeTauAndDivideRow$I$org_ejml_data_D1Submatrix64F$I$I$D', function (blockLength, Y, row, colStart, max) {
var height=Math.min(blockLength, Y.row1 - Y.row0);
var dataY=Y.original.data;
var top=0;
var norm2=0;
var startJ=Y.col0 + colStart - colStart % blockLength;
colStart=colStart % blockLength;
for (var j=startJ; j < Y.col1; j+=blockLength) {
var width=Math.min(blockLength, Y.col1 - j);
var index=Y.row0 * Y.original.numCols + height * j + row * width;
if (j == startJ) {
index+=colStart;
top=dataY[index] /= max;
norm2 += top * top;
index++;
for (var k=colStart + 1; k < width; k++) {
var val=dataY[index++] /= max;
norm2 += val * val;
}
} else {
for (var k=0; k < width; k++) {
var val=dataY[index++] /= max;
norm2 += val * val;
}
}}
norm2=Math.sqrt(norm2);
if (top < 0 ) norm2=-norm2;
return norm2;
}, 1);

Clazz.newMeth(C$, 'findMaxCol$I$org_ejml_data_D1Submatrix64F$I', function (blockLength, Y, col) {
var width=Math.min(blockLength, Y.col1 - Y.col0);
var dataY=Y.original.data;
var max=0;
for (var i=Y.row0; i < Y.row1; i+=blockLength) {
var height=Math.min(blockLength, Y.row1 - i);
var index=i * Y.original.numCols + height * Y.col0 + col;
if (i == Y.row0) {
index+=width * col;
for (var k=col; k < height; k++, index+=width) {
var v=Math.abs(dataY[index]);
if (v > max ) {
max=v;
}}
} else {
for (var k=0; k < height; k++, index+=width) {
var v=Math.abs(dataY[index]);
if (v > max ) {
max=v;
}}
}}
return max;
}, 1);

Clazz.newMeth(C$, 'findMaxRow$I$org_ejml_data_D1Submatrix64F$I$I', function (blockLength, Y, row, colStart) {
var height=Math.min(blockLength, Y.row1 - Y.row0);
var dataY=Y.original.data;
var max=0;
for (var j=Y.col0; j < Y.col1; j+=blockLength) {
var width=Math.min(blockLength, Y.col1 - j);
var index=Y.row0 * Y.original.numCols + height * j + row * width;
if (j == Y.col0) {
index+=colStart;
for (var k=colStart; k < width; k++) {
var v=Math.abs(dataY[index++]);
if (v > max ) {
max=v;
}}
} else {
for (var k=0; k < width; k++) {
var v=Math.abs(dataY[index++]);
if (v > max ) {
max=v;
}}
}}
return max;
}, 1);

Clazz.newMeth(C$, 'computeW_Column$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$DA$DA$I', function (blockLength, Y, W, temp, beta, betaIndex) {
var widthB=W.col1 - W.col0;
C$.initializeW$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$I$D(blockLength, W, Y, widthB, beta[betaIndex++]);
var min=Math.min(widthB, W.row1 - W.row0);
for (var j=1; j < min; j++) {
C$.computeY_t_V$I$org_ejml_data_D1Submatrix64F$I$DA(blockLength, Y, j, temp);
C$.computeZ$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$I$DA$D(blockLength, Y, W, j, temp, beta[betaIndex++]);
}
}, 1);

Clazz.newMeth(C$, 'initializeW$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$I$D', function (blockLength, W, Y, widthB, b) {
var dataW=W.original.data;
var dataY=Y.original.data;
for (var i=W.row0; i < W.row1; i+=blockLength) {
var heightW=Math.min(blockLength, W.row1 - i);
var indexW=i * W.original.numCols + heightW * W.col0;
var indexY=i * Y.original.numCols + heightW * Y.col0;
if (i == W.row0) {
dataW[indexW]=-b;
indexW+=widthB;
indexY+=widthB;
for (var k=1; k < heightW; k++, indexW+=widthB, indexY+=widthB) {
dataW[indexW]=-b * dataY[indexY];
}
} else {
for (var k=0; k < heightW; k++, indexW+=widthB, indexY+=widthB) {
dataW[indexW]=-b * dataY[indexY];
}
}}
}, 1);

Clazz.newMeth(C$, 'computeZ$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$I$DA$D', function (blockLength, Y, W, col, temp, beta) {
var width=Y.col1 - Y.col0;
var dataW=W.original.data;
var dataY=Y.original.data;
var colsW=W.original.numCols;
var beta_neg=-beta;
for (var i=Y.row0; i < Y.row1; i+=blockLength) {
var heightW=Math.min(blockLength, Y.row1 - i);
var indexW=i * colsW + heightW * W.col0;
var indexZ=i * colsW + heightW * W.col0 + col;
var indexV=i * Y.original.numCols + heightW * Y.col0 + col;
if (i == Y.row0) {
for (var k=0; k < heightW; k++, indexZ+=width, indexW+=width, indexV+=width) {
var total=0;
for (var j=0; j < col; j++) {
total += dataW[indexW + j] * temp[j];
}
if (k < col) {
dataW[indexZ]=-beta * total;
} else if (k == col) {
dataW[indexZ]=beta_neg * (1.0 + total);
} else {
dataW[indexZ]=beta_neg * (dataY[indexV] + total);
}}
} else {
var endZ=indexZ + width * heightW;
while (indexZ != endZ){
var total=0;
for (var j=0; j < col; j++) {
total += dataW[indexW + j] * temp[j];
}
dataW[indexZ]=beta_neg * (dataY[indexV] + total);
indexZ+=width;
indexW+=width;
indexV+=width;
}
}}
}, 1);

Clazz.newMeth(C$, 'computeY_t_V$I$org_ejml_data_D1Submatrix64F$I$DA', function (blockLength, Y, col, temp) {
var widthB=Y.col1 - Y.col0;
for (var j=0; j < col; j++) {
temp[j]=C$.innerProdCol$I$org_ejml_data_D1Submatrix64F$I$I$I$I(blockLength, Y, col, widthB, j, widthB);
}
}, 1);

Clazz.newMeth(C$, 'multAdd_zeros$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F', function (blockLength, Y, B, C) {
var widthY=Y.col1 - Y.col0;
for (var i=Y.row0; i < Y.row1; i+=blockLength) {
var heightY=Math.min(blockLength, Y.row1 - i);
for (var j=B.col0; j < B.col1; j+=blockLength) {
var widthB=Math.min(blockLength, B.col1 - j);
var indexC=(i - Y.row0 + C.row0) * C.original.numCols + (j - B.col0 + C.col0) * heightY;
for (var k=Y.col0; k < Y.col1; k+=blockLength) {
var indexY=i * Y.original.numCols + k * heightY;
var indexB=(k - Y.col0 + B.row0) * B.original.numCols + j * widthY;
if (i == Y.row0) {
C$.multBlockAdd_zerosone$DA$DA$DA$I$I$I$I$I$I(Y.original.data, B.original.data, C.original.data, indexY, indexB, indexC, heightY, widthY, widthB);
} else {
$I$(2).blockMultPlus$DA$DA$DA$I$I$I$I$I$I(Y.original.data, B.original.data, C.original.data, indexY, indexB, indexC, heightY, widthY, widthB);
}}
}
}
}, 1);

Clazz.newMeth(C$, 'multBlockAdd_zerosone$DA$DA$DA$I$I$I$I$I$I', function (dataA, dataB, dataC, indexA, indexB, indexC, heightA, widthA, widthC) {
for (var i=0; i < heightA; i++) {
for (var j=0; j < widthC; j++) {
var val=i < widthA ? dataB[i * widthC + j + indexB] : 0;
var end=Math.min(i, widthA);
for (var k=0; k < end; k++) {
val += dataA[i * widthA + k + indexA] * dataB[k * widthC + j + indexB];
}
dataC[i * widthC + j + indexC] += val;
}
}
}, 1);

Clazz.newMeth(C$, 'multTransA_vecCol$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F', function (blockLength, A, B, C) {
var widthA=A.col1 - A.col0;
if (widthA > blockLength) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["A is expected to be at most one block wide."]);
for (var j=B.col0; j < B.col1; j+=blockLength) {
var widthB=Math.min(blockLength, B.col1 - j);
var indexC=C.row0 * C.original.numCols + (j - B.col0 + C.col0) * widthA;
for (var k=A.row0; k < A.row1; k+=blockLength) {
var heightA=Math.min(blockLength, A.row1 - k);
var indexA=k * A.original.numCols + A.col0 * heightA;
var indexB=(k - A.row0 + B.row0) * B.original.numCols + j * heightA;
if (k == A.row0) C$.multTransABlockSet_lowerTriag$DA$DA$DA$I$I$I$I$I$I(A.original.data, B.original.data, C.original.data, indexA, indexB, indexC, heightA, widthA, widthB);
 else $I$(2).blockMultPlusTransA$DA$DA$DA$I$I$I$I$I$I(A.original.data, B.original.data, C.original.data, indexA, indexB, indexC, heightA, widthA, widthB);
}
}
}, 1);

Clazz.newMeth(C$, 'multTransABlockSet_lowerTriag$DA$DA$DA$I$I$I$I$I$I', function (dataA, dataB, dataC, indexA, indexB, indexC, heightA, widthA, widthC) {
for (var i=0; i < widthA; i++) {
for (var j=0; j < widthC; j++) {
var val=i < heightA ? dataB[i * widthC + j + indexB] : 0;
for (var k=i + 1; k < heightA; k++) {
val += dataA[k * widthA + i + indexA] * dataB[k * widthC + j + indexB];
}
dataC[i * widthC + j + indexC]=val;
}
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
