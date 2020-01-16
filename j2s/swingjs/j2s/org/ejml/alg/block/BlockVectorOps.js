(function(){var P$=Clazz.newPackage("org.ejml.alg.block"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "BlockVectorOps");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'scale_row$I$org_ejml_data_D1Submatrix64F$I$D$org_ejml_data_D1Submatrix64F$I$I$I', function (blockLength, A, rowA, alpha, B, rowB, offset, end) {
var dataA=A.original.data;
var dataB=B.original.data;
var startI=offset - offset % blockLength;
offset=offset % blockLength;
var rowBlockA=A.row0 + rowA - rowA % blockLength;
rowA=rowA % blockLength;
var rowBlockB=B.row0 + rowB - rowB % blockLength;
rowB=rowB % blockLength;
var heightA=Math.min(blockLength, A.row1 - rowBlockA);
var heightB=Math.min(blockLength, B.row1 - rowBlockB);
for (var i=startI; i < end; i+=blockLength) {
var segment=Math.min(blockLength, end - i);
var widthA=Math.min(blockLength, A.col1 - A.col0 - i );
var widthB=Math.min(blockLength, B.col1 - B.col0 - i );
var indexA=rowBlockA * A.original.numCols + (A.col0 + i) * heightA + rowA * widthA;
var indexB=rowBlockB * B.original.numCols + (B.col0 + i) * heightB + rowB * widthB;
if (i == startI) {
indexA+=offset;
indexB+=offset;
for (var j=offset; j < segment; j++) {
dataB[indexB++]=alpha * dataA[indexA++];
}
} else {
for (var j=0; j < segment; j++) {
dataB[indexB++]=alpha * dataA[indexA++];
}
}}
}, 1);

Clazz.newMeth(C$, 'div_row$I$org_ejml_data_D1Submatrix64F$I$D$org_ejml_data_D1Submatrix64F$I$I$I', function (blockLength, A, rowA, alpha, B, rowB, offset, end) {
var dataA=A.original.data;
var dataB=B.original.data;
var startI=offset - offset % blockLength;
offset=offset % blockLength;
var rowBlockA=A.row0 + rowA - rowA % blockLength;
rowA=rowA % blockLength;
var rowBlockB=B.row0 + rowB - rowB % blockLength;
rowB=rowB % blockLength;
var heightA=Math.min(blockLength, A.row1 - rowBlockA);
var heightB=Math.min(blockLength, B.row1 - rowBlockB);
for (var i=startI; i < end; i+=blockLength) {
var segment=Math.min(blockLength, end - i);
var widthA=Math.min(blockLength, A.col1 - A.col0 - i );
var widthB=Math.min(blockLength, B.col1 - B.col0 - i );
var indexA=rowBlockA * A.original.numCols + (A.col0 + i) * heightA + rowA * widthA;
var indexB=rowBlockB * B.original.numCols + (B.col0 + i) * heightB + rowB * widthB;
if (i == startI) {
indexA+=offset;
indexB+=offset;
for (var j=offset; j < segment; j++) {
dataB[indexB++]=dataA[indexA++] / alpha;
}
} else {
for (var j=0; j < segment; j++) {
dataB[indexB++]=dataA[indexA++] / alpha;
}
}}
}, 1);

Clazz.newMeth(C$, 'add_row$I$org_ejml_data_D1Submatrix64F$I$D$org_ejml_data_D1Submatrix64F$I$D$org_ejml_data_D1Submatrix64F$I$I$I', function (blockLength, A, rowA, alpha, B, rowB, beta, C, rowC, offset, end) {
var heightA=Math.min(blockLength, A.row1 - A.row0);
var heightB=Math.min(blockLength, B.row1 - B.row0);
var heightC=Math.min(blockLength, C.row1 - C.row0);
var startI=offset - offset % blockLength;
offset=offset % blockLength;
var dataA=A.original.data;
var dataB=B.original.data;
var dataC=C.original.data;
for (var i=startI; i < end; i+=blockLength) {
var segment=Math.min(blockLength, end - i);
var widthA=Math.min(blockLength, A.col1 - A.col0 - i );
var widthB=Math.min(blockLength, B.col1 - B.col0 - i );
var widthC=Math.min(blockLength, C.col1 - C.col0 - i );
var indexA=A.row0 * A.original.numCols + (A.col0 + i) * heightA + rowA * widthA;
var indexB=B.row0 * B.original.numCols + (B.col0 + i) * heightB + rowB * widthB;
var indexC=C.row0 * C.original.numCols + (C.col0 + i) * heightC + rowC * widthC;
if (i == startI) {
indexA+=offset;
indexB+=offset;
indexC+=offset;
for (var j=offset; j < segment; j++) {
dataC[indexC++]=alpha * dataA[indexA++] + beta * dataB[indexB++];
}
} else {
for (var j=0; j < segment; j++) {
dataC[indexC++]=alpha * dataA[indexA++] + beta * dataB[indexB++];
}
}}
}, 1);

Clazz.newMeth(C$, 'dot_row$I$org_ejml_data_D1Submatrix64F$I$org_ejml_data_D1Submatrix64F$I$I$I', function (blockLength, A, rowA, B, rowB, offset, end) {
var startI=offset - offset % blockLength;
offset=offset % blockLength;
var dataA=A.original.data;
var dataB=B.original.data;
var total=0;
var rowBlockA=A.row0 + rowA - rowA % blockLength;
rowA=rowA % blockLength;
var rowBlockB=B.row0 + rowB - rowB % blockLength;
rowB=rowB % blockLength;
var heightA=Math.min(blockLength, A.row1 - rowBlockA);
var heightB=Math.min(blockLength, B.row1 - rowBlockB);
if (A.col1 - A.col0 != B.col1 - B.col0) throw Clazz.new_(Clazz.load('RuntimeException'));
for (var i=startI; i < end; i+=blockLength) {
var segment=Math.min(blockLength, end - i);
var widthA=Math.min(blockLength, A.col1 - A.col0 - i );
var widthB=Math.min(blockLength, B.col1 - B.col0 - i );
var indexA=rowBlockA * A.original.numCols + (A.col0 + i) * heightA + rowA * widthA;
var indexB=rowBlockB * B.original.numCols + (B.col0 + i) * heightB + rowB * widthB;
if (i == startI) {
indexA+=offset;
indexB+=offset;
for (var j=offset; j < segment; j++) {
total += dataB[indexB++] * dataA[indexA++];
}
} else {
for (var j=0; j < segment; j++) {
total += dataB[indexB++] * dataA[indexA++];
}
}}
return total;
}, 1);

Clazz.newMeth(C$, 'dot_row_col$I$org_ejml_data_D1Submatrix64F$I$org_ejml_data_D1Submatrix64F$I$I$I', function (blockLength, A, rowA, B, colB, offset, end) {
var startI=offset - offset % blockLength;
offset=offset % blockLength;
var dataA=A.original.data;
var dataB=B.original.data;
var total=0;
var rowBlockA=A.row0 + rowA - rowA % blockLength;
rowA=rowA % blockLength;
var colBlockB=B.col0 + colB - colB % blockLength;
colB=colB % blockLength;
var heightA=Math.min(blockLength, A.row1 - rowBlockA);
var widthB=Math.min(blockLength, B.col1 - colBlockB);
if (A.col1 - A.col0 != B.col1 - B.col0) throw Clazz.new_(Clazz.load('RuntimeException'));
for (var i=startI; i < end; i+=blockLength) {
var segment=Math.min(blockLength, end - i);
var widthA=Math.min(blockLength, A.col1 - A.col0 - i );
var heightB=Math.min(blockLength, B.row1 - B.row0 - i );
var indexA=rowBlockA * A.original.numCols + (A.col0 + i) * heightA + rowA * widthA;
var indexB=(B.row0 + i) * B.original.numCols + colBlockB * heightB + colB;
if (i == startI) {
indexA+=offset;
indexB+=offset * widthB;
for (var j=offset; j < segment; j++, indexB+=widthB) {
total += dataB[indexB] * dataA[indexA++];
}
} else {
for (var j=0; j < segment; j++, indexB+=widthB) {
total += dataB[indexB] * dataA[indexA++];
}
}}
return total;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
