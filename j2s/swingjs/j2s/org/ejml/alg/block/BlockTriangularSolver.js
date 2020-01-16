(function(){var P$=Clazz.newPackage("org.ejml.alg.block"),I$=[[0,'org.ejml.alg.block.BlockInnerTriangularSolver','org.ejml.data.D1Submatrix64F','org.ejml.alg.block.BlockMultiplication']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BlockTriangularSolver");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'invert$I$Z$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$DA', function (blockLength, upper, T, T_inv, temp) {
if (upper) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Upper triangular matrices not supported yet"]);
if (temp.length < blockLength * blockLength) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Temp must be at least blockLength*blockLength long."]);
if (T.row0 != T_inv.row0 || T.row1 != T_inv.row1  || T.col0 != T_inv.col0  || T.col1 != T_inv.col1 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["T and T_inv must be at the same elements in the matrix"]);
var M=T.row1 - T.row0;
var dataT=T.original.data;
var dataX=T_inv.original.data;
var offsetT=T.row0 * T.original.numCols + M * T.col0;
for (var i=0; i < M; i+=blockLength) {
var heightT=Math.min(T.row1 - (i + T.row0), blockLength);
var indexII=offsetT + T.original.numCols * (i + T.row0) + heightT * (i + T.col0);
for (var j=0; j < i; j+=blockLength) {
var widthX=Math.min(T.col1 - (j + T.col0), blockLength);
for (var w=0; w < temp.length; w++) {
temp[w]=0;
}
for (var k=j; k < i; k+=blockLength) {
var widthT=Math.min(T.col1 - (k + T.col0), blockLength);
var indexL=offsetT + T.original.numCols * (i + T.row0) + heightT * (k + T.col0);
var indexX=offsetT + T.original.numCols * (k + T.row0) + widthT * (j + T.col0);
P$.BlockInnerMultiplication.blockMultMinus$DA$DA$DA$I$I$I$I$I$I(dataT, dataX, temp, indexL, indexX, 0, heightT, widthT, widthX);
}
var indexX=offsetT + T.original.numCols * (i + T.row0) + heightT * (j + T.col0);
$I$(1).solveL$DA$DA$I$I$I$I$I(dataT, temp, heightT, widthX, heightT, indexII, 0);
System.arraycopy$O$I$O$I$I(temp, 0, dataX, indexX, widthX * heightT);
}
$I$(1).invertLower$DA$DA$I$I$I(dataT, dataX, heightT, indexII, indexII);
}
}, 1);

Clazz.newMeth(C$, 'invert$I$Z$org_ejml_data_D1Submatrix64F$DA', function (blockLength, upper, T, temp) {
if (upper) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Upper triangular matrices not supported yet"]);
if (temp.length < blockLength * blockLength) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Temp must be at least blockLength*blockLength long."]);
var M=T.row1 - T.row0;
var dataT=T.original.data;
var offsetT=T.row0 * T.original.numCols + M * T.col0;
for (var i=0; i < M; i+=blockLength) {
var heightT=Math.min(T.row1 - (i + T.row0), blockLength);
var indexII=offsetT + T.original.numCols * (i + T.row0) + heightT * (i + T.col0);
for (var j=0; j < i; j+=blockLength) {
var widthX=Math.min(T.col1 - (j + T.col0), blockLength);
for (var w=0; w < temp.length; w++) {
temp[w]=0;
}
for (var k=j; k < i; k+=blockLength) {
var widthT=Math.min(T.col1 - (k + T.col0), blockLength);
var indexL=offsetT + T.original.numCols * (i + T.row0) + heightT * (k + T.col0);
var indexX=offsetT + T.original.numCols * (k + T.row0) + widthT * (j + T.col0);
P$.BlockInnerMultiplication.blockMultMinus$DA$DA$DA$I$I$I$I$I$I(dataT, dataT, temp, indexL, indexX, 0, heightT, widthT, widthX);
}
var indexX=offsetT + T.original.numCols * (i + T.row0) + heightT * (j + T.col0);
$I$(1).solveL$DA$DA$I$I$I$I$I(dataT, temp, heightT, widthX, heightT, indexII, 0);
System.arraycopy$O$I$O$I$I(temp, 0, dataT, indexX, widthX * heightT);
}
$I$(1).invertLower$DA$I$I(dataT, heightT, indexII);
}
}, 1);

Clazz.newMeth(C$, 'solve$I$Z$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$Z', function (blockLength, upper, T, B, transT) {
if (upper) {
C$.solveR$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$Z(blockLength, T, B, transT);
} else {
C$.solveL$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$Z(blockLength, T, B, transT);
}}, 1);

Clazz.newMeth(C$, 'solveBlock$I$Z$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$Z$Z', function (blockLength, upper, T, B, transT, transB) {
var Trows=T.row1 - T.row0;
if (Trows > blockLength) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["T can be at most the size of a block"]);
var blockT_rows=Math.min(blockLength, T.original.numRows - T.row0);
var blockT_cols=Math.min(blockLength, T.original.numCols - T.col0);
var offsetT=T.row0 * T.original.numCols + blockT_rows * T.col0;
var dataT=T.original.data;
var dataB=B.original.data;
if (transB) {
if (upper) {
if (transT) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Operation not yet supported"]);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Operation not yet supported"]);
}} else {
if (transT) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Operation not yet supported"]);
} else {
for (var i=B.row0; i < B.row1; i+=blockLength) {
var N=Math.min(B.row1, i + blockLength) - i;
var offsetB=i * B.original.numCols + N * B.col0;
$I$(1).solveLTransB$DA$DA$I$I$I$I$I(dataT, dataB, blockT_rows, N, blockT_rows, offsetT, offsetB);
}
}}} else {
if (Trows != B.row1 - B.row0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["T and B must have the same number of rows."]);
if (upper) {
if (transT) {
for (var i=B.col0; i < B.col1; i+=blockLength) {
var offsetB=B.row0 * B.original.numCols + Trows * i;
var N=Math.min(B.col1, i + blockLength) - i;
$I$(1).solveTransU$DA$DA$I$I$I$I$I(dataT, dataB, Trows, N, Trows, offsetT, offsetB);
}
} else {
for (var i=B.col0; i < B.col1; i+=blockLength) {
var offsetB=B.row0 * B.original.numCols + Trows * i;
var N=Math.min(B.col1, i + blockLength) - i;
$I$(1).solveU$DA$DA$I$I$I$I$I(dataT, dataB, Trows, N, Trows, offsetT, offsetB);
}
}} else {
if (transT) {
for (var i=B.col0; i < B.col1; i+=blockLength) {
var offsetB=B.row0 * B.original.numCols + Trows * i;
var N=Math.min(B.col1, i + blockLength) - i;
$I$(1).solveTransL$DA$DA$I$I$I$I$I(dataT, dataB, Trows, N, blockT_cols, offsetT, offsetB);
}
} else {
for (var i=B.col0; i < B.col1; i+=blockLength) {
var offsetB=B.row0 * B.original.numCols + Trows * i;
var N=Math.min(B.col1, i + blockLength) - i;
$I$(1).solveL$DA$DA$I$I$I$I$I(dataT, dataB, Trows, N, blockT_cols, offsetT, offsetB);
}
}}}}, 1);

Clazz.newMeth(C$, 'solveL$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$Z', function (blockLength, L, B, transL) {
var Y=Clazz.new_($I$(2,1).c$$org_ejml_data_D1Matrix64F,[B.original]);
var Linner=Clazz.new_($I$(2,1).c$$org_ejml_data_D1Matrix64F,[L.original]);
var Binner=Clazz.new_($I$(2,1).c$$org_ejml_data_D1Matrix64F,[B.original]);
var lengthL=B.row1 - B.row0;
var startI;
var stepI;
if (transL) {
startI=lengthL - lengthL % blockLength;
if (startI == lengthL && lengthL >= blockLength ) startI-=blockLength;
stepI=-blockLength;
} else {
startI=0;
stepI=blockLength;
}for (var i=startI; ; i+=stepI) {
if (transL) {
if (i < 0) break;
} else {
if (i >= lengthL) break;
}var widthT=Math.min(blockLength, lengthL - i);
Linner.col0=L.col0 + i;
Linner.col1=Linner.col0 + widthT;
Linner.row0=L.row0 + i;
Linner.row1=Linner.row0 + widthT;
Binner.col0=B.col0;
Binner.col1=B.col1;
Binner.row0=B.row0 + i;
Binner.row1=Binner.row0 + widthT;
C$.solveBlock$I$Z$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$Z$Z(blockLength, false, Linner, Binner, transL, false);
var updateY;
if (transL) {
updateY=Linner.row0 > 0;
} else {
updateY=Linner.row1 < L.row1;
}if (updateY) {
if (transL) {
Linner.col1=Linner.col0;
Linner.col0=Linner.col1 - blockLength;
Linner.row1=L.row1;
Binner.row1=B.row1;
Y.row0=Binner.row0 - blockLength;
Y.row1=Binner.row0;
} else {
Linner.row0=Linner.row1;
Linner.row1=Math.min(Linner.row0 + blockLength, L.row1);
Linner.col0=L.col0;
Binner.row0=B.row0;
Y.row0=Binner.row1;
Y.row1=Math.min(Y.row0 + blockLength, B.row1);
}for (var k=B.col0; k < B.col1; k+=blockLength) {
Binner.col0=k;
Binner.col1=Math.min(k + blockLength, B.col1);
Y.col0=Binner.col0;
Y.col1=Binner.col1;
if (transL) {
$I$(3).multMinusTransA$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F(blockLength, Linner, Binner, Y);
} else {
$I$(3).multMinus$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F(blockLength, Linner, Binner, Y);
}}
}}
}, 1);

Clazz.newMeth(C$, 'solveR$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$Z', function (blockLength, R, B, transR) {
var lengthR=B.row1 - B.row0;
if (R.getCols$() != lengthR) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of columns in R must be equal to the number of rows in B"]);
} else if (R.getRows$() != lengthR) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of rows in R must be equal to the number of rows in B"]);
}var Y=Clazz.new_($I$(2,1).c$$org_ejml_data_D1Matrix64F,[B.original]);
var Rinner=Clazz.new_($I$(2,1).c$$org_ejml_data_D1Matrix64F,[R.original]);
var Binner=Clazz.new_($I$(2,1).c$$org_ejml_data_D1Matrix64F,[B.original]);
var startI;
var stepI;
if (transR) {
startI=0;
stepI=blockLength;
} else {
startI=lengthR - lengthR % blockLength;
if (startI == lengthR && lengthR >= blockLength ) startI-=blockLength;
stepI=-blockLength;
}for (var i=startI; ; i+=stepI) {
if (transR) {
if (i >= lengthR) break;
} else {
if (i < 0) break;
}var widthT=Math.min(blockLength, lengthR - i);
Rinner.col0=R.col0 + i;
Rinner.col1=Rinner.col0 + widthT;
Rinner.row0=R.row0 + i;
Rinner.row1=Rinner.row0 + widthT;
Binner.col0=B.col0;
Binner.col1=B.col1;
Binner.row0=B.row0 + i;
Binner.row1=Binner.row0 + widthT;
C$.solveBlock$I$Z$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$Z$Z(blockLength, true, Rinner, Binner, transR, false);
var updateY;
if (transR) {
updateY=Rinner.row1 < R.row1;
} else {
updateY=Rinner.row0 > 0;
}if (updateY) {
if (transR) {
Rinner.col0=Rinner.col1;
Rinner.col1=Math.min(Rinner.col0 + blockLength, R.col1);
Rinner.row0=R.row0;
Binner.row0=B.row0;
Y.row0=Binner.row1;
Y.row1=Math.min(Y.row0 + blockLength, B.row1);
} else {
Rinner.row1=Rinner.row0;
Rinner.row0=Rinner.row1 - blockLength;
Rinner.col1=R.col1;
Binner.row1=B.row1;
Y.row0=Binner.row0 - blockLength;
Y.row1=Binner.row0;
}for (var k=B.col0; k < B.col1; k+=blockLength) {
Binner.col0=k;
Binner.col1=Math.min(k + blockLength, B.col1);
Y.col0=Binner.col0;
Y.col1=Binner.col1;
if (transR) {
$I$(3).multMinusTransA$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F(blockLength, Rinner, Binner, Y);
} else {
$I$(3).multMinus$I$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F$org_ejml_data_D1Submatrix64F(blockLength, Rinner, Binner, Y);
}}
}}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
