(function(){var P$=Clazz.newPackage("org.ejml.alg.block"),I$=[[0,'org.ejml.data.DenseMatrix64F','org.ejml.data.D1Submatrix64F','org.ejml.alg.block.BlockMultiplication','org.ejml.data.BlockMatrix64F','org.ejml.ops.RandomMatrices','org.ejml.ops.MatrixFeatures','org.ejml.ops.CommonOps','org.ejml.simple.SimpleMatrix']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BlockMatrixOps");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'convert$org_ejml_data_DenseMatrix64F$org_ejml_data_BlockMatrix64F', function (src, dst) {
if (src.numRows != dst.numRows || src.numCols != dst.numCols ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Must be the same size."]);
for (var i=0; i < dst.numRows; i+=dst.blockLength) {
var blockHeight=Math.min(dst.blockLength, dst.numRows - i);
for (var j=0; j < dst.numCols; j+=dst.blockLength) {
var blockWidth=Math.min(dst.blockLength, dst.numCols - j);
var indexDst=i * dst.numCols + blockHeight * j;
var indexSrcRow=i * dst.numCols + j;
for (var k=0; k < blockHeight; k++) {
System.arraycopy$O$I$O$I$I(src.data, indexSrcRow, dst.data, indexDst, blockWidth);
indexDst+=blockWidth;
indexSrcRow+=dst.numCols;
}
}
}
}, 1);

Clazz.newMeth(C$, 'convertRowToBlock$I$I$I$DA$DA', function (numRows, numCols, blockLength, data, tmp) {
var minLength=Math.min(blockLength, numRows) * numCols;
if (tmp.length < minLength) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["tmp must be at least " + minLength + " long " ]);
}for (var i=0; i < numRows; i+=blockLength) {
var blockHeight=Math.min(blockLength, numRows - i);
System.arraycopy$O$I$O$I$I(data, i * numCols, tmp, 0, blockHeight * numCols);
for (var j=0; j < numCols; j+=blockLength) {
var blockWidth=Math.min(blockLength, numCols - j);
var indexDst=i * numCols + blockHeight * j;
var indexSrcRow=j;
for (var k=0; k < blockHeight; k++) {
System.arraycopy$O$I$O$I$I(tmp, indexSrcRow, data, indexDst, blockWidth);
indexDst+=blockWidth;
indexSrcRow+=numCols;
}
}
}
}, 1);

Clazz.newMeth(C$, 'convert$org_ejml_data_BlockMatrix64F$org_ejml_data_DenseMatrix64F', function (src, dst) {
if (dst != null ) {
if (dst.numRows != src.numRows || dst.numCols != src.numCols ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Must be the same size."]);
} else {
dst=Clazz.new_($I$(1,1).c$$I$I,[src.numRows, src.numCols]);
}for (var i=0; i < src.numRows; i+=src.blockLength) {
var blockHeight=Math.min(src.blockLength, src.numRows - i);
for (var j=0; j < src.numCols; j+=src.blockLength) {
var blockWidth=Math.min(src.blockLength, src.numCols - j);
var indexSrc=i * src.numCols + blockHeight * j;
var indexDstRow=i * dst.numCols + j;
for (var k=0; k < blockHeight; k++) {
System.arraycopy$O$I$O$I$I(src.data, indexSrc, dst.data, indexDstRow, blockWidth);
indexSrc+=blockWidth;
indexDstRow+=dst.numCols;
}
}
}
return dst;
}, 1);

Clazz.newMeth(C$, 'convertBlockToRow$I$I$I$DA$DA', function (numRows, numCols, blockLength, data, tmp) {
var minLength=Math.min(blockLength, numRows) * numCols;
if (tmp.length < minLength) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["tmp must be at least " + minLength + " long and not " + tmp.length ]);
}for (var i=0; i < numRows; i+=blockLength) {
var blockHeight=Math.min(blockLength, numRows - i);
System.arraycopy$O$I$O$I$I(data, i * numCols, tmp, 0, blockHeight * numCols);
for (var j=0; j < numCols; j+=blockLength) {
var blockWidth=Math.min(blockLength, numCols - j);
var indexSrc=blockHeight * j;
var indexDstRow=i * numCols + j;
for (var k=0; k < blockHeight; k++) {
System.arraycopy$O$I$O$I$I(tmp, indexSrc, data, indexDstRow, blockWidth);
indexSrc+=blockWidth;
indexDstRow+=numCols;
}
}
}
}, 1);

Clazz.newMeth(C$, 'convertTranSrc$org_ejml_data_DenseMatrix64F$org_ejml_data_BlockMatrix64F', function (src, dst) {
if (src.numRows != dst.numCols || src.numCols != dst.numRows ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Incompatible matrix shapes."]);
for (var i=0; i < dst.numRows; i+=dst.blockLength) {
var blockHeight=Math.min(dst.blockLength, dst.numRows - i);
for (var j=0; j < dst.numCols; j+=dst.blockLength) {
var blockWidth=Math.min(dst.blockLength, dst.numCols - j);
var indexDst=i * dst.numCols + blockHeight * j;
var indexSrc=j * src.numCols + i;
for (var l=0; l < blockWidth; l++) {
var rowSrc=indexSrc + l * src.numCols;
var rowDst=indexDst + l;
for (var k=0; k < blockHeight; k++, rowDst+=blockWidth) {
dst.data[rowDst]=src.data[rowSrc++];
}
}
}
}
}, 1);

Clazz.newMeth(C$, 'mult$org_ejml_data_BlockMatrix64F$org_ejml_data_BlockMatrix64F$org_ejml_data_BlockMatrix64F', function (A, B, C) {
if (A.numCols != B.numRows) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Columns in A are incompatible with rows in B"]);
if (A.numRows != C.numRows) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Rows in A are incompatible with rows in C"]);
if (B.numCols != C.numCols) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Columns in B are incompatible with columns in C"]);
if (A.blockLength != B.blockLength || A.blockLength != C.blockLength ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Block lengths are not all the same."]);
var blockLength=A.blockLength;
var Asub=Clazz.new_($I$(2,1).c$$org_ejml_data_D1Matrix64F$I$I$I$I,[A, 0, A.numRows, 0, A.numCols]);
var Bsub=Clazz.new_($I$(2,1).c$$org_ejml_data_D1Matrix64F$I$I$I$I,[B, 0, B.numRows, 0, B.numCols]);
var Csub=Clazz.new_($I$(2,1).c$$org_ejml_data_D1Matrix64F$I$I$I$I,[C, 0, C.numRows, 0, C.numCols]);
$I$(3).mult$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F(blockLength, Asub, Bsub, Csub);
}, 1);

Clazz.newMeth(C$, 'multTransA$org_ejml_data_BlockMatrix64F$org_ejml_data_BlockMatrix64F$org_ejml_data_BlockMatrix64F', function (A, B, C) {
if (A.numRows != B.numRows) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Rows in A are incompatible with rows in B"]);
if (A.numCols != C.numRows) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Columns in A are incompatible with rows in C"]);
if (B.numCols != C.numCols) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Columns in B are incompatible with columns in C"]);
if (A.blockLength != B.blockLength || A.blockLength != C.blockLength ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Block lengths are not all the same."]);
var blockLength=A.blockLength;
var Asub=Clazz.new_($I$(2,1).c$$org_ejml_data_D1Matrix64F$I$I$I$I,[A, 0, A.numRows, 0, A.numCols]);
var Bsub=Clazz.new_($I$(2,1).c$$org_ejml_data_D1Matrix64F$I$I$I$I,[B, 0, B.numRows, 0, B.numCols]);
var Csub=Clazz.new_($I$(2,1).c$$org_ejml_data_D1Matrix64F$I$I$I$I,[C, 0, C.numRows, 0, C.numCols]);
$I$(3).multTransA$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F(blockLength, Asub, Bsub, Csub);
}, 1);

Clazz.newMeth(C$, 'multTransB$org_ejml_data_BlockMatrix64F$org_ejml_data_BlockMatrix64F$org_ejml_data_BlockMatrix64F', function (A, B, C) {
if (A.numCols != B.numCols) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Columns in A are incompatible with columns in B"]);
if (A.numRows != C.numRows) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Rows in A are incompatible with rows in C"]);
if (B.numRows != C.numCols) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Rows in B are incompatible with columns in C"]);
if (A.blockLength != B.blockLength || A.blockLength != C.blockLength ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Block lengths are not all the same."]);
var blockLength=A.blockLength;
var Asub=Clazz.new_($I$(2,1).c$$org_ejml_data_D1Matrix64F$I$I$I$I,[A, 0, A.numRows, 0, A.numCols]);
var Bsub=Clazz.new_($I$(2,1).c$$org_ejml_data_D1Matrix64F$I$I$I$I,[B, 0, B.numRows, 0, B.numCols]);
var Csub=Clazz.new_($I$(2,1).c$$org_ejml_data_D1Matrix64F$I$I$I$I,[C, 0, C.numRows, 0, C.numCols]);
$I$(3).multTransB$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F(blockLength, Asub, Bsub, Csub);
}, 1);

Clazz.newMeth(C$, 'transpose$org_ejml_data_BlockMatrix64F$org_ejml_data_BlockMatrix64F', function (A, A_tran) {
if (A_tran != null ) {
if (A.numRows != A_tran.numCols || A.numCols != A_tran.numRows ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Incompatible dimensions."]);
if (A.blockLength != A_tran.blockLength) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Incompatible block size."]);
} else {
A_tran=Clazz.new_($I$(4,1).c$$I$I$I,[A.numCols, A.numRows, A.blockLength]);
}for (var i=0; i < A.numRows; i+=A.blockLength) {
var blockHeight=Math.min(A.blockLength, A.numRows - i);
for (var j=0; j < A.numCols; j+=A.blockLength) {
var blockWidth=Math.min(A.blockLength, A.numCols - j);
var indexA=i * A.numCols + blockHeight * j;
var indexC=j * A_tran.numCols + blockWidth * i;
C$.transposeBlock$org_ejml_data_BlockMatrix64F$org_ejml_data_BlockMatrix64F$I$I$I$I(A, A_tran, indexA, indexC, blockWidth, blockHeight);
}
}
return A_tran;
}, 1);

Clazz.newMeth(C$, 'transposeBlock$org_ejml_data_BlockMatrix64F$org_ejml_data_BlockMatrix64F$I$I$I$I', function (A, A_tran, indexA, indexC, width, height) {
for (var i=0; i < height; i++) {
var rowIndexC=indexC + i;
var rowIndexA=indexA + width * i;
var end=rowIndexA + width;
for (; rowIndexA < end; rowIndexC+=height, rowIndexA++) {
A_tran.data[rowIndexC]=A.data[rowIndexA];
}
}
}, 1);

Clazz.newMeth(C$, 'createRandom$I$I$D$D$java_util_Random', function (numRows, numCols, min, max, rand) {
var ret=Clazz.new_($I$(4,1).c$$I$I,[numRows, numCols]);
$I$(5).setRandom$org_ejml_data_D1Matrix64F$D$D$java_util_Random(ret, min, max, rand);
return ret;
}, 1);

Clazz.newMeth(C$, 'createRandom$I$I$D$D$java_util_Random$I', function (numRows, numCols, min, max, rand, blockLength) {
var ret=Clazz.new_($I$(4,1).c$$I$I$I,[numRows, numCols, blockLength]);
$I$(5).setRandom$org_ejml_data_D1Matrix64F$D$D$java_util_Random(ret, min, max, rand);
return ret;
}, 1);

Clazz.newMeth(C$, 'convert$org_ejml_data_DenseMatrix64F$I', function (A, blockLength) {
var ret=Clazz.new_($I$(4,1).c$$I$I$I,[A.numRows, A.numCols, blockLength]);
C$.convert$org_ejml_data_DenseMatrix64F$org_ejml_data_BlockMatrix64F(A, ret);
return ret;
}, 1);

Clazz.newMeth(C$, 'convert$org_ejml_data_DenseMatrix64F', function (A) {
var ret=Clazz.new_($I$(4,1).c$$I$I,[A.numRows, A.numCols]);
C$.convert$org_ejml_data_DenseMatrix64F$org_ejml_data_BlockMatrix64F(A, ret);
return ret;
}, 1);

Clazz.newMeth(C$, 'isEquals$org_ejml_data_BlockMatrix64F$org_ejml_data_BlockMatrix64F', function (A, B) {
if (A.blockLength != B.blockLength) return false;
return $I$(6).isEquals$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F(A, B);
}, 1);

Clazz.newMeth(C$, 'isEquals$org_ejml_data_BlockMatrix64F$org_ejml_data_BlockMatrix64F$D', function (A, B, tol) {
if (A.blockLength != B.blockLength) return false;
return $I$(6).isEquals$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F$D(A, B, tol);
}, 1);

Clazz.newMeth(C$, 'zeroTriangle$Z$org_ejml_data_BlockMatrix64F', function (upper, A) {
var blockLength=A.blockLength;
if (upper) {
for (var i=0; i < A.numRows; i+=blockLength) {
var h=Math.min(blockLength, A.numRows - i);
for (var j=i; j < A.numCols; j+=blockLength) {
var w=Math.min(blockLength, A.numCols - j);
var index=i * A.numCols + h * j;
if (j == i) {
for (var k=0; k < h; k++) {
for (var l=k + 1; l < w; l++) {
A.data[index + w * k + l]=0;
}
}
} else {
for (var k=0; k < h; k++) {
for (var l=0; l < w; l++) {
A.data[index + w * k + l]=0;
}
}
}}
}
} else {
for (var i=0; i < A.numRows; i+=blockLength) {
var h=Math.min(blockLength, A.numRows - i);
for (var j=0; j <= i; j+=blockLength) {
var w=Math.min(blockLength, A.numCols - j);
var index=i * A.numCols + h * j;
if (j == i) {
for (var k=0; k < h; k++) {
var z=Math.min(k, w);
for (var l=0; l < z; l++) {
A.data[index + w * k + l]=0;
}
}
} else {
for (var k=0; k < h; k++) {
for (var l=0; l < w; l++) {
A.data[index + w * k + l]=0;
}
}
}}
}
}}, 1);

Clazz.newMeth(C$, 'copyTriangle$Z$org_ejml_data_BlockMatrix64F$org_ejml_data_BlockMatrix64F', function (upper, src, dst) {
if (src.blockLength != dst.blockLength) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Block size is different"]);
if (src.numRows < dst.numRows) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The src has fewer rows than dst"]);
if (src.numCols < dst.numCols) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The src has fewer columns than dst"]);
var blockLength=src.blockLength;
var numRows=Math.min(src.numRows, dst.numRows);
var numCols=Math.min(src.numCols, dst.numCols);
if (upper) {
for (var i=0; i < numRows; i+=blockLength) {
var heightSrc=Math.min(blockLength, src.numRows - i);
var heightDst=Math.min(blockLength, dst.numRows - i);
for (var j=i; j < numCols; j+=blockLength) {
var widthSrc=Math.min(blockLength, src.numCols - j);
var widthDst=Math.min(blockLength, dst.numCols - j);
var indexSrc=i * src.numCols + heightSrc * j;
var indexDst=i * dst.numCols + heightDst * j;
if (j == i) {
for (var k=0; k < heightDst; k++) {
for (var l=k; l < widthDst; l++) {
dst.data[indexDst + widthDst * k + l]=src.data[indexSrc + widthSrc * k + l];
}
}
} else {
for (var k=0; k < heightDst; k++) {
System.arraycopy$O$I$O$I$I(src.data, indexSrc + widthSrc * k, dst.data, indexDst + widthDst * k, widthDst);
}
}}
}
} else {
for (var i=0; i < numRows; i+=blockLength) {
var heightSrc=Math.min(blockLength, src.numRows - i);
var heightDst=Math.min(blockLength, dst.numRows - i);
for (var j=0; j <= i; j+=blockLength) {
var widthSrc=Math.min(blockLength, src.numCols - j);
var widthDst=Math.min(blockLength, dst.numCols - j);
var indexSrc=i * src.numCols + heightSrc * j;
var indexDst=i * dst.numCols + heightDst * j;
if (j == i) {
for (var k=0; k < heightDst; k++) {
var z=Math.min(k + 1, widthDst);
for (var l=0; l < z; l++) {
dst.data[indexDst + widthDst * k + l]=src.data[indexSrc + widthSrc * k + l];
}
}
} else {
for (var k=0; k < heightDst; k++) {
System.arraycopy$O$I$O$I$I(src.data, indexSrc + widthSrc * k, dst.data, indexDst + widthDst * k, widthDst);
}
}}
}
}}, 1);

Clazz.newMeth(C$, 'set$org_ejml_data_BlockMatrix64F$D', function (A, value) {
$I$(7).fill$org_ejml_data_D1Matrix64F$D(A, value);
}, 1);

Clazz.newMeth(C$, 'setIdentity$org_ejml_data_BlockMatrix64F', function (A) {
var minLength=Math.min(A.numRows, A.numCols);
$I$(7).fill$org_ejml_data_D1Matrix64F$D(A, 0);
var blockLength=A.blockLength;
for (var i=0; i < minLength; i+=blockLength) {
var h=Math.min(blockLength, A.numRows - i);
var w=Math.min(blockLength, A.numCols - i);
var index=i * A.numCols + h * i;
var m=Math.min(h, w);
for (var k=0; k < m; k++) {
A.data[index + k * w + k]=1;
}
}
}, 1);

Clazz.newMeth(C$, 'convertSimple$org_ejml_data_BlockMatrix64F', function (A) {
var B=C$.convert$org_ejml_data_BlockMatrix64F$org_ejml_data_DenseMatrix64F(A, null);
return $I$(8).wrap$org_ejml_data_DenseMatrix64F(B);
}, 1);

Clazz.newMeth(C$, 'identity$I$I$I', function (numRows, numCols, blockLength) {
var A=Clazz.new_($I$(4,1).c$$I$I$I,[numRows, numCols, blockLength]);
var minLength=Math.min(numRows, numCols);
for (var i=0; i < minLength; i+=blockLength) {
var h=Math.min(blockLength, A.numRows - i);
var w=Math.min(blockLength, A.numCols - i);
var index=i * A.numCols + h * i;
var m=Math.min(h, w);
for (var k=0; k < m; k++) {
A.data[index + k * w + k]=1;
}
}
return A;
}, 1);

Clazz.newMeth(C$, 'checkIdenticalShape$org_ejml_data_BlockMatrix64F$org_ejml_data_BlockMatrix64F', function (A, B) {
if (A.blockLength != B.blockLength) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Block size is different"]);
if (A.numRows != B.numRows) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of rows is different"]);
if (A.numCols != B.numCols) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["NUmber of columns is different"]);
}, 1);

Clazz.newMeth(C$, 'extractAligned$org_ejml_data_BlockMatrix64F$org_ejml_data_BlockMatrix64F', function (src, dst) {
if (src.blockLength != dst.blockLength) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Block size is different"]);
if (src.numRows < dst.numRows) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The src has fewer rows than dst"]);
if (src.numCols < dst.numCols) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The src has fewer columns than dst"]);
var blockLength=src.blockLength;
var numRows=Math.min(src.numRows, dst.numRows);
var numCols=Math.min(src.numCols, dst.numCols);
for (var i=0; i < numRows; i+=blockLength) {
var heightSrc=Math.min(blockLength, src.numRows - i);
var heightDst=Math.min(blockLength, dst.numRows - i);
for (var j=0; j < numCols; j+=blockLength) {
var widthSrc=Math.min(blockLength, src.numCols - j);
var widthDst=Math.min(blockLength, dst.numCols - j);
var indexSrc=i * src.numCols + heightSrc * j;
var indexDst=i * dst.numCols + heightDst * j;
for (var k=0; k < heightDst; k++) {
System.arraycopy$O$I$O$I$I(src.data, indexSrc + widthSrc * k, dst.data, indexDst + widthDst * k, widthDst);
}
}
}
}, 1);

Clazz.newMeth(C$, 'blockAligned$I$org_ejml_data_D1Submatrix64F', function (blockLength, A) {
if (A.col0 % blockLength != 0) return false;
if (A.row0 % blockLength != 0) return false;
if (A.col1 % blockLength != 0 && A.col1 != A.original.numCols ) {
return false;
}if (A.row1 % blockLength != 0 && A.row1 != A.original.numRows ) {
return false;
}return true;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
