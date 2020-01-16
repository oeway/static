(function(){var P$=Clazz.newPackage("org.ejml.alg.block"),I$=[[0,'org.ejml.alg.block.BlockMatrixOps']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BlockMultiplication");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'mult$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F', function (blockLength, A, B, C) {
for (var i=A.row0; i < A.row1; i+=blockLength) {
var heightA=Math.min(blockLength, A.row1 - i);
for (var j=B.col0; j < B.col1; j+=blockLength) {
var widthB=Math.min(blockLength, B.col1 - j);
var indexC=(i - A.row0 + C.row0) * C.original.numCols + (j - B.col0 + C.col0) * heightA;
for (var k=A.col0; k < A.col1; k+=blockLength) {
var widthA=Math.min(blockLength, A.col1 - k);
var indexA=i * A.original.numCols + k * heightA;
var indexB=(k - A.col0 + B.row0) * B.original.numCols + j * widthA;
if (k == A.col0) P$.BlockInnerMultiplication.blockMultSet$DA$DA$DA$I$I$I$I$I$I(A.original.data, B.original.data, C.original.data, indexA, indexB, indexC, heightA, widthA, widthB);
 else P$.BlockInnerMultiplication.blockMultPlus$DA$DA$DA$I$I$I$I$I$I(A.original.data, B.original.data, C.original.data, indexA, indexB, indexC, heightA, widthA, widthB);
}
}
}
}, 1);

Clazz.newMeth(C$, 'multPlus$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F', function (blockLength, A, B, C) {
for (var i=A.row0; i < A.row1; i+=blockLength) {
var heightA=Math.min(blockLength, A.row1 - i);
for (var j=B.col0; j < B.col1; j+=blockLength) {
var widthB=Math.min(blockLength, B.col1 - j);
var indexC=(i - A.row0 + C.row0) * C.original.numCols + (j - B.col0 + C.col0) * heightA;
for (var k=A.col0; k < A.col1; k+=blockLength) {
var widthA=Math.min(blockLength, A.col1 - k);
var indexA=i * A.original.numCols + k * heightA;
var indexB=(k - A.col0 + B.row0) * B.original.numCols + j * widthA;
P$.BlockInnerMultiplication.blockMultPlus$DA$DA$DA$I$I$I$I$I$I(A.original.data, B.original.data, C.original.data, indexA, indexB, indexC, heightA, widthA, widthB);
}
}
}
}, 1);

Clazz.newMeth(C$, 'multMinus$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F', function (blockLength, A, B, C) {
C$.checkInput$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F(blockLength, A, B, C);
for (var i=A.row0; i < A.row1; i+=blockLength) {
var heightA=Math.min(blockLength, A.row1 - i);
for (var j=B.col0; j < B.col1; j+=blockLength) {
var widthB=Math.min(blockLength, B.col1 - j);
var indexC=(i - A.row0 + C.row0) * C.original.numCols + (j - B.col0 + C.col0) * heightA;
for (var k=A.col0; k < A.col1; k+=blockLength) {
var widthA=Math.min(blockLength, A.col1 - k);
var indexA=i * A.original.numCols + k * heightA;
var indexB=(k - A.col0 + B.row0) * B.original.numCols + j * widthA;
P$.BlockInnerMultiplication.blockMultMinus$DA$DA$DA$I$I$I$I$I$I(A.original.data, B.original.data, C.original.data, indexA, indexB, indexC, heightA, widthA, widthB);
}
}
}
}, 1);

Clazz.newMeth(C$, 'checkInput$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F', function (blockLength, A, B, C) {
var Arow=A.getRows$();
var Acol=A.getCols$();
var Brow=B.getRows$();
var Bcol=B.getCols$();
var Crow=C.getRows$();
var Ccol=C.getCols$();
if (Arow != Crow) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Mismatch A and C rows"]);
if (Bcol != Ccol) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Mismatch B and C columns"]);
if (Acol != Brow) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Mismatch A columns and B rows"]);
if (!$I$(1).blockAligned$I$org_ejml_data_D1Submatrix64F(blockLength, A)) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Sub-Matrix A is not block aligned"]);
if (!$I$(1).blockAligned$I$org_ejml_data_D1Submatrix64F(blockLength, B)) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Sub-Matrix B is not block aligned"]);
if (!$I$(1).blockAligned$I$org_ejml_data_D1Submatrix64F(blockLength, C)) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Sub-Matrix C is not block aligned"]);
}, 1);

Clazz.newMeth(C$, 'multTransA$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F', function (blockLength, A, B, C) {
for (var i=A.col0; i < A.col1; i+=blockLength) {
var widthA=Math.min(blockLength, A.col1 - i);
for (var j=B.col0; j < B.col1; j+=blockLength) {
var widthB=Math.min(blockLength, B.col1 - j);
var indexC=(i - A.col0 + C.row0) * C.original.numCols + (j - B.col0 + C.col0) * widthA;
for (var k=A.row0; k < A.row1; k+=blockLength) {
var heightA=Math.min(blockLength, A.row1 - k);
var indexA=k * A.original.numCols + i * heightA;
var indexB=(k - A.row0 + B.row0) * B.original.numCols + j * heightA;
if (k == A.row0) P$.BlockInnerMultiplication.blockMultSetTransA$DA$DA$DA$I$I$I$I$I$I(A.original.data, B.original.data, C.original.data, indexA, indexB, indexC, heightA, widthA, widthB);
 else P$.BlockInnerMultiplication.blockMultPlusTransA$DA$DA$DA$I$I$I$I$I$I(A.original.data, B.original.data, C.original.data, indexA, indexB, indexC, heightA, widthA, widthB);
}
}
}
}, 1);

Clazz.newMeth(C$, 'multPlusTransA$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F', function (blockLength, A, B, C) {
for (var i=A.col0; i < A.col1; i+=blockLength) {
var widthA=Math.min(blockLength, A.col1 - i);
for (var j=B.col0; j < B.col1; j+=blockLength) {
var widthB=Math.min(blockLength, B.col1 - j);
var indexC=(i - A.col0 + C.row0) * C.original.numCols + (j - B.col0 + C.col0) * widthA;
for (var k=A.row0; k < A.row1; k+=blockLength) {
var heightA=Math.min(blockLength, A.row1 - k);
var indexA=k * A.original.numCols + i * heightA;
var indexB=(k - A.row0 + B.row0) * B.original.numCols + j * heightA;
P$.BlockInnerMultiplication.blockMultPlusTransA$DA$DA$DA$I$I$I$I$I$I(A.original.data, B.original.data, C.original.data, indexA, indexB, indexC, heightA, widthA, widthB);
}
}
}
}, 1);

Clazz.newMeth(C$, 'multMinusTransA$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F', function (blockLength, A, B, C) {
for (var i=A.col0; i < A.col1; i+=blockLength) {
var widthA=Math.min(blockLength, A.col1 - i);
for (var j=B.col0; j < B.col1; j+=blockLength) {
var widthB=Math.min(blockLength, B.col1 - j);
var indexC=(i - A.col0 + C.row0) * C.original.numCols + (j - B.col0 + C.col0) * widthA;
for (var k=A.row0; k < A.row1; k+=blockLength) {
var heightA=Math.min(blockLength, A.row1 - k);
var indexA=k * A.original.numCols + i * heightA;
var indexB=(k - A.row0 + B.row0) * B.original.numCols + j * heightA;
P$.BlockInnerMultiplication.blockMultMinusTransA$DA$DA$DA$I$I$I$I$I$I(A.original.data, B.original.data, C.original.data, indexA, indexB, indexC, heightA, widthA, widthB);
}
}
}
}, 1);

Clazz.newMeth(C$, 'multTransB$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F', function (blockLength, A, B, C) {
for (var i=A.row0; i < A.row1; i+=blockLength) {
var heightA=Math.min(blockLength, A.row1 - i);
for (var j=B.row0; j < B.row1; j+=blockLength) {
var widthC=Math.min(blockLength, B.row1 - j);
var indexC=(i - A.row0 + C.row0) * C.original.numCols + (j - B.row0 + C.col0) * heightA;
for (var k=A.col0; k < A.col1; k+=blockLength) {
var widthA=Math.min(blockLength, A.col1 - k);
var indexA=i * A.original.numCols + k * heightA;
var indexB=j * B.original.numCols + (k - A.col0 + B.col0) * widthC;
if (k == A.col0) P$.BlockInnerMultiplication.blockMultSetTransB$DA$DA$DA$I$I$I$I$I$I(A.original.data, B.original.data, C.original.data, indexA, indexB, indexC, heightA, widthA, widthC);
 else P$.BlockInnerMultiplication.blockMultPlusTransB$DA$DA$DA$I$I$I$I$I$I(A.original.data, B.original.data, C.original.data, indexA, indexB, indexC, heightA, widthA, widthC);
}
}
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
