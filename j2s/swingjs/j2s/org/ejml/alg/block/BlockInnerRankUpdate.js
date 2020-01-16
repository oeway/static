(function(){var P$=Clazz.newPackage("org.ejml.alg.block"),I$=[[0,'org.ejml.alg.block.BlockInnerMultiplication']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BlockInnerRankUpdate");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'rankNUpdate$I$D$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F', function (blockLength, alpha, A, B) {
var heightB=B.row1 - B.row0;
if (heightB > blockLength) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Height of B cannot be greater than the block length"]);
var N=B.col1 - B.col0;
if (A.col1 - A.col0 != N) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["A does not have the expected number of columns based on B\'s width"]);
if (A.row1 - A.row0 != N) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["A does not have the expected number of rows based on B\'s width"]);
for (var i=B.col0; i < B.col1; i+=blockLength) {
var indexB_i=B.row0 * B.original.numCols + i * heightB;
var widthB_i=Math.min(blockLength, B.col1 - i);
var rowA=i - B.col0 + A.row0;
var heightA=Math.min(blockLength, A.row1 - rowA);
for (var j=B.col0; j < B.col1; j+=blockLength) {
var widthB_j=Math.min(blockLength, B.col1 - j);
var indexA=rowA * A.original.numCols + (j - B.col0 + A.col0) * heightA;
var indexB_j=B.row0 * B.original.numCols + j * heightB;
$I$(1).blockMultPlusTransA$D$DA$DA$DA$I$I$I$I$I$I(alpha, B.original.data, B.original.data, A.original.data, indexB_i, indexB_j, indexA, heightB, widthB_i, widthB_j);
}
}
}, 1);

Clazz.newMeth(C$, 'symmRankNMinus_U$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F', function (blockLength, A, B) {
var heightB=B.row1 - B.row0;
if (heightB > blockLength) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Height of B cannot be greater than the block length"]);
var N=B.col1 - B.col0;
if (A.col1 - A.col0 != N) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["A does not have the expected number of columns based on B\'s width"]);
if (A.row1 - A.row0 != N) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["A does not have the expected number of rows based on B\'s width"]);
for (var i=B.col0; i < B.col1; i+=blockLength) {
var indexB_i=B.row0 * B.original.numCols + i * heightB;
var widthB_i=Math.min(blockLength, B.col1 - i);
var rowA=i - B.col0 + A.row0;
var heightA=Math.min(blockLength, A.row1 - rowA);
for (var j=i; j < B.col1; j+=blockLength) {
var widthB_j=Math.min(blockLength, B.col1 - j);
var indexA=rowA * A.original.numCols + (j - B.col0 + A.col0) * heightA;
var indexB_j=B.row0 * B.original.numCols + j * heightB;
if (i == j) {
C$.multTransABlockMinus_U$DA$DA$I$I$I$I$I$I(B.original.data, A.original.data, indexB_i, indexB_j, indexA, heightB, widthB_i, widthB_j);
} else {
C$.multTransABlockMinus$DA$DA$I$I$I$I$I$I(B.original.data, A.original.data, indexB_i, indexB_j, indexA, heightB, widthB_i, widthB_j);
}}
}
}, 1);

Clazz.newMeth(C$, 'symmRankNMinus_L$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F', function (blockLength, A, B) {
var widthB=B.col1 - B.col0;
if (widthB > blockLength) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Width of B cannot be greater than the block length"]);
var N=B.row1 - B.row0;
if (A.col1 - A.col0 != N) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["A does not have the expected number of columns based on B\'s height"]);
if (A.row1 - A.row0 != N) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["A does not have the expected number of rows based on B\'s height"]);
for (var i=B.row0; i < B.row1; i+=blockLength) {
var heightB_i=Math.min(blockLength, B.row1 - i);
var indexB_i=i * B.original.numCols + heightB_i * B.col0;
var rowA=i - B.row0 + A.row0;
var heightA=Math.min(blockLength, A.row1 - rowA);
for (var j=B.row0; j <= i; j+=blockLength) {
var widthB_j=Math.min(blockLength, B.row1 - j);
var indexA=rowA * A.original.numCols + (j - B.row0 + A.col0) * heightA;
var indexB_j=j * B.original.numCols + widthB_j * B.col0;
if (i == j) {
C$.multTransBBlockMinus_L$DA$DA$I$I$I$I$I$I(B.original.data, A.original.data, indexB_i, indexB_j, indexA, widthB, heightB_i, widthB_j);
} else {
C$.multTransBBlockMinus$DA$DA$I$I$I$I$I$I(B.original.data, A.original.data, indexB_i, indexB_j, indexA, widthB, heightB_i, widthB_j);
}}
}
}, 1);

Clazz.newMeth(C$, 'multTransABlockMinus$DA$DA$I$I$I$I$I$I', function (dataA, dataC, indexA, indexB, indexC, heightA, widthA, widthC) {
var rowB=indexB;
var endLoopK=rowB + heightA * widthC;
var startA=indexA;
for (; rowB != endLoopK; rowB+=widthC, startA+=widthA) {
var a=startA;
var c=indexC;
var endA=a + widthA;
var endB=rowB + widthC;
while (a != endA){
var valA=dataA[a++];
var b=rowB;
while (b != endB){
dataC[c++] -= valA * dataA[b++];
}
}
}
}, 1);

Clazz.newMeth(C$, 'multTransABlockMinus_U$DA$DA$I$I$I$I$I$I', function (dataA, dataC, indexA, indexB, indexC, heightA, widthA, widthC) {
for (var i=0; i < widthA; i++) {
for (var k=0; k < heightA; k++) {
var valA=dataA[k * widthA + i + indexA];
var b=k * widthC + indexB + i;
var c=i * widthC + indexC + i;
var endC=(c - i) + widthC;
while (c != endC){
dataC[c++] -= valA * dataA[b++];
}
}
}
}, 1);

Clazz.newMeth(C$, 'multTransBBlockMinus$DA$DA$I$I$I$I$I$I', function (dataA, dataC, indexA, indexB, indexC, widthA, heightA, widthC) {
var rowA=indexA;
var c=indexC;
for (var i=0; i < heightA; i++, rowA+=widthA) {
var endA=rowA + widthA;
var rowB=indexB;
var endLoopJ=c + widthC;
while (c != endLoopJ){
var a=rowA;
var b=rowB;
var sum=0;
while (a != endA){
sum += dataA[a++] * dataA[b++];
}
dataC[c++] -= sum;
rowB+=widthA;
}
}
}, 1);

Clazz.newMeth(C$, 'multTransBBlockMinus_L$DA$DA$I$I$I$I$I$I', function (dataA, dataC, indexA, indexB, indexC, widthA, heightA, widthC) {
for (var i=0; i < heightA; i++) {
var rowA=i * widthA + indexA;
var endA=rowA + widthA;
var rowB=indexB;
var rowC=i * widthC + indexC;
for (var j=0; j <= i; j++, rowB+=widthA) {
var sum=0;
var a=rowA;
var b=rowB;
while (a != endA){
sum += dataA[a++] * dataA[b++];
}
dataC[rowC + j] -= sum;
}
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
