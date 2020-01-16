(function(){var P$=Clazz.newPackage("org.ejml.simple"),I$=[[0,'org.ejml.data.DenseMatrix64F','org.ejml.ops.CommonOps','org.ejml.alg.dense.mult.VectorVectorMult','org.ejml.ops.NormOps','org.ejml.data.MatrixIterator','org.ejml.ops.MatrixIO','java.io.ByteArrayOutputStream','java.io.PrintStream','org.ejml.ops.SpecializedOps','org.ejml.ops.MatrixFeatures','org.ejml.simple.SimpleSVD','org.ejml.simple.SimpleEVD','org.ejml.simple.SimpleMatrix']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SimpleBase", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['mat','org.ejml.data.DenseMatrix64F']]]

Clazz.newMeth(C$, 'c$$I$I', function (numRows, numCols) {
;C$.$init$.apply(this);
this.mat=Clazz.new_($I$(1,1).c$$I$I,[numRows, numCols]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getMatrix$', function () {
return this.mat;
});

Clazz.newMeth(C$, 'transpose$', function () {
var ret=this.createMatrix$I$I(this.mat.numCols, this.mat.numRows);
$I$(2).transpose$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F(this.mat, ret.getMatrix$());
return ret;
});

Clazz.newMeth(C$, 'mult$TT', function (b) {
var ret=this.createMatrix$I$I(this.mat.numRows, b.getMatrix$().numCols);
$I$(2).mult$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(this.mat, b.getMatrix$(), ret.getMatrix$());
return ret;
});

Clazz.newMeth(C$, 'kron$TT', function (B) {
var ret=this.createMatrix$I$I(this.mat.numRows * B.numRows$(), this.mat.numCols * B.numCols$());
$I$(2).kron$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F(this.mat, B.getMatrix$(), ret.getMatrix$());
return ret;
});

Clazz.newMeth(C$, 'plus$TT', function (b) {
var ret=this.copy$();
$I$(2).addEquals$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F(ret.getMatrix$(), b.getMatrix$());
return ret;
});

Clazz.newMeth(C$, 'minus$TT', function (b) {
var ret=this.copy$();
$I$(2).subEquals$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F(ret.getMatrix$(), b.getMatrix$());
return ret;
});

Clazz.newMeth(C$, 'plus$D$TT', function (beta, b) {
var ret=this.copy$();
$I$(2).addEquals$org_ejml_data_D1Matrix64F$D$org_ejml_data_D1Matrix64F(ret.getMatrix$(), beta, b.getMatrix$());
return ret;
});

Clazz.newMeth(C$, 'dot$TT', function (v) {
if (!this.isVector$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["\'this\' matrix is not a vector."]);
} else if (!v.isVector$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["\'v\' matrix is not a vector."]);
}return $I$(3).innerProd$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F(this.mat, v.getMatrix$());
});

Clazz.newMeth(C$, 'isVector$', function () {
return this.mat.numRows == 1 || this.mat.numCols == 1 ;
});

Clazz.newMeth(C$, 'scale$D', function (val) {
var ret=this.copy$();
$I$(2).scale$D$org_ejml_data_D1Matrix64F(val, ret.getMatrix$());
return ret;
});

Clazz.newMeth(C$, 'divide$D', function (val) {
var ret=this.copy$();
$I$(2).divide$D$org_ejml_data_D1Matrix64F(val, ret.getMatrix$());
return ret;
});

Clazz.newMeth(C$, 'invert$', function () {
var ret=this.createMatrix$I$I(this.mat.numRows, this.mat.numCols);
if (!$I$(2).invert$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F(this.mat, ret.getMatrix$())) {
throw Clazz.new_(Clazz.load('org.ejml.factory.SingularMatrixException'));
}return ret;
});

Clazz.newMeth(C$, 'pseudoInverse$', function () {
var ret=this.createMatrix$I$I(this.mat.numCols, this.mat.numRows);
$I$(2).pinv$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F(this.mat, ret.getMatrix$());
return ret;
});

Clazz.newMeth(C$, 'solve$TT', function (b) {
var x=this.createMatrix$I$I(this.mat.numCols, b.getMatrix$().numCols);
if (!$I$(2).solve$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F(this.mat, b.getMatrix$(), x.getMatrix$())) throw Clazz.new_(Clazz.load('org.ejml.factory.SingularMatrixException'));
return x;
});

Clazz.newMeth(C$, 'set$TT', function (a) {
this.mat.set$org_ejml_data_D1Matrix64F(a.getMatrix$());
});

Clazz.newMeth(C$, 'set$D', function (val) {
$I$(2).fill$org_ejml_data_D1Matrix64F$D(this.mat, val);
});

Clazz.newMeth(C$, 'zero$', function () {
this.mat.zero$();
});

Clazz.newMeth(C$, 'normF$', function () {
return $I$(4).normF$org_ejml_data_D1Matrix64F(this.mat);
});

Clazz.newMeth(C$, 'conditionP2$', function () {
return $I$(4).conditionP2$org_ejml_data_DenseMatrix64F(this.mat);
});

Clazz.newMeth(C$, 'determinant$', function () {
return $I$(2).det$org_ejml_data_DenseMatrix64F(this.mat);
});

Clazz.newMeth(C$, 'trace$', function () {
return $I$(2).trace$org_ejml_data_RowD1Matrix64F(this.mat);
});

Clazz.newMeth(C$, 'reshape$I$I', function (numRows, numCols) {
this.mat.reshape$I$I$Z(numRows, numCols, false);
});

Clazz.newMeth(C$, 'set$I$I$D', function (row, col, value) {
this.mat.set$I$I$D(row, col, value);
});

Clazz.newMeth(C$, 'set$I$D', function (index, value) {
this.mat.set$I$D(index, value);
});

Clazz.newMeth(C$, 'setRow$I$I$DA', function (row, offset, values) {
for (var i=0; i < values.length; i++) {
this.mat.set$I$I$D(row, offset + i, values[i]);
}
});

Clazz.newMeth(C$, 'setColumn$I$I$DA', function (column, offset, values) {
for (var i=0; i < values.length; i++) {
this.mat.set$I$I$D(offset + i, column, values[i]);
}
});

Clazz.newMeth(C$, 'get$I$I', function (row, col) {
return this.mat.get$I$I(row, col);
});

Clazz.newMeth(C$, 'get$I', function (index) {
return this.mat.data[index];
});

Clazz.newMeth(C$, 'getIndex$I$I', function (row, col) {
return row * this.mat.numCols + col;
});

Clazz.newMeth(C$, 'iterator$Z$I$I$I$I', function (rowMajor, minRow, minCol, maxRow, maxCol) {
return Clazz.new_($I$(5,1).c$$org_ejml_data_ReshapeMatrix64F$Z$I$I$I$I,[this.mat, rowMajor, minRow, minCol, maxRow, maxCol]);
});

Clazz.newMeth(C$, 'copy$', function () {
var ret=this.createMatrix$I$I(this.mat.numRows, this.mat.numCols);
ret.getMatrix$().set$org_ejml_data_D1Matrix64F(this.getMatrix$());
return ret;
});

Clazz.newMeth(C$, 'numRows$', function () {
return this.mat.numRows;
});

Clazz.newMeth(C$, 'numCols$', function () {
return this.mat.numCols;
});

Clazz.newMeth(C$, 'getNumElements$', function () {
return this.mat.getNumElements$();
});

Clazz.newMeth(C$, 'print$', function () {
$I$(6).print$java_io_PrintStream$org_ejml_data_Matrix64F(System.out, this.mat);
});

Clazz.newMeth(C$, 'print$I$I', function (numChar, precision) {
$I$(6).print$java_io_PrintStream$org_ejml_data_Matrix64F$I$I(System.out, this.mat, numChar, precision);
});

Clazz.newMeth(C$, 'print$S', function (format) {
$I$(6).print$java_io_PrintStream$org_ejml_data_Matrix64F$S(System.out, this.mat, format);
});

Clazz.newMeth(C$, 'toString', function () {
var stream=Clazz.new_($I$(7,1));
$I$(6).print$java_io_PrintStream$org_ejml_data_Matrix64F(Clazz.new_($I$(8,1).c$$java_io_OutputStream,[stream]), this.mat);
return stream.toString();
});

Clazz.newMeth(C$, 'extractMatrix$I$I$I$I', function (y0, y1, x0, x1) {
if (y0 == 2147483647) y0=this.mat.numRows;
if (y1 == 2147483647) y1=this.mat.numRows;
if (x0 == 2147483647) x0=this.mat.numCols;
if (x1 == 2147483647) x1=this.mat.numCols;
var ret=this.createMatrix$I$I(y1 - y0, x1 - x0);
$I$(2).extract$org_ejml_data_ReshapeMatrix64F$I$I$I$I$org_ejml_data_ReshapeMatrix64F$I$I(this.mat, y0, y1, x0, x1, ret.getMatrix$(), 0, 0);
return ret;
});

Clazz.newMeth(C$, 'extractVector$Z$I', function (extractRow, element) {
var length=extractRow ? this.mat.numCols : this.mat.numRows;
var ret=extractRow ? this.createMatrix$I$I(1, length) : this.createMatrix$I$I(length, 1);
if (extractRow) {
$I$(9).subvector$org_ejml_data_RowD1Matrix64F$I$I$I$Z$I$org_ejml_data_RowD1Matrix64F(this.mat, element, 0, length, true, 0, ret.getMatrix$());
} else {
$I$(9).subvector$org_ejml_data_RowD1Matrix64F$I$I$I$Z$I$org_ejml_data_RowD1Matrix64F(this.mat, 0, element, length, false, 0, ret.getMatrix$());
}return ret;
});

Clazz.newMeth(C$, 'extractDiag$', function () {
var N=Math.min(this.mat.numCols, this.mat.numRows);
var diag=this.createMatrix$I$I(N, 1);
$I$(2).extractDiag$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F(this.mat, diag.getMatrix$());
return diag;
});

Clazz.newMeth(C$, 'isIdentical$TT$D', function (a, tol) {
return $I$(10).isIdentical$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F$D(this.mat, a.getMatrix$(), tol);
});

Clazz.newMeth(C$, 'hasUncountable$', function () {
return $I$(10).hasUncountable$org_ejml_data_D1Matrix64F(this.mat);
});

Clazz.newMeth(C$, 'svd$', function () {
return Clazz.new_($I$(11,1).c$$org_ejml_data_DenseMatrix64F$Z,[this.mat, false]);
});

Clazz.newMeth(C$, 'svd$Z', function (compact) {
return Clazz.new_($I$(11,1).c$$org_ejml_data_DenseMatrix64F$Z,[this.mat, compact]);
});

Clazz.newMeth(C$, 'eig$', function () {
return Clazz.new_($I$(12,1).c$$org_ejml_data_DenseMatrix64F,[this.mat]);
});

Clazz.newMeth(C$, 'insertIntoThis$I$I$TT', function (insertRow, insertCol, B) {
$I$(2).insert$org_ejml_data_ReshapeMatrix64F$org_ejml_data_ReshapeMatrix64F$I$I(B.getMatrix$(), this.mat, insertRow, insertCol);
});

Clazz.newMeth(C$, 'combine$I$I$TT', function (insertRow, insertCol, B) {
if (insertRow == 2147483647) {
insertRow=this.mat.numRows;
}if (insertCol == 2147483647) {
insertCol=this.mat.numCols;
}var maxRow=insertRow + B.numRows$();
var maxCol=insertCol + B.numCols$();
var ret;
if (maxRow > this.mat.numRows || maxCol > this.mat.numCols ) {
var M=Math.max(maxRow, this.mat.numRows);
var N=Math.max(maxCol, this.mat.numCols);
ret=this.createMatrix$I$I(M, N);
ret.insertIntoThis$I$I$TT(0, 0, this);
} else {
ret=this.copy$();
}ret.insertIntoThis$I$I$TT(insertRow, insertCol, B);
return ret;
});

Clazz.newMeth(C$, 'elementMaxAbs$', function () {
return $I$(2).elementMaxAbs$org_ejml_data_D1Matrix64F(this.mat);
});

Clazz.newMeth(C$, 'elementSum$', function () {
return $I$(2).elementSum$org_ejml_data_D1Matrix64F(this.mat);
});

Clazz.newMeth(C$, 'elementMult$TT', function (b) {
var c=this.createMatrix$I$I(this.mat.numRows, this.mat.numCols);
$I$(2).elementMult$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F(this.mat, b.getMatrix$(), c.getMatrix$());
return c;
});

Clazz.newMeth(C$, 'negative$', function () {
var A=this.copy$();
$I$(2).changeSign$org_ejml_data_D1Matrix64F(A.getMatrix$());
return A;
});

Clazz.newMeth(C$, 'saveToFileBinary$S', function (fileName) {
$I$(6).saveBin$org_ejml_data_ReshapeMatrix64F$S(this.mat, fileName);
});

Clazz.newMeth(C$, 'loadBinary$S', function (fileName) {
var mat=$I$(6).loadBin$S(fileName);
if (Clazz.instanceOf(mat, "org.ejml.data.DenseMatrix64F")) {
return $I$(13).wrap$org_ejml_data_DenseMatrix64F(mat);
} else {
return $I$(13).wrap$org_ejml_data_DenseMatrix64F(Clazz.new_($I$(1,1).c$$org_ejml_data_ReshapeMatrix64F,[mat]));
}}, 1);

Clazz.newMeth(C$, 'saveToFileCSV$S', function (fileName) {
$I$(6).saveCSV$org_ejml_data_ReshapeMatrix64F$S(this.mat, fileName);
});

Clazz.newMeth(C$, 'loadCSV$S', function (fileName) {
var mat=$I$(6).loadCSV$S(fileName);
if (Clazz.instanceOf(mat, "org.ejml.data.DenseMatrix64F")) {
return $I$(13).wrap$org_ejml_data_DenseMatrix64F(mat);
} else {
return $I$(13).wrap$org_ejml_data_DenseMatrix64F(Clazz.new_($I$(1,1).c$$org_ejml_data_ReshapeMatrix64F,[mat]));
}}, 1);

Clazz.newMeth(C$, 'isInBounds$I$I', function (row, col) {
return row >= 0 && col >= 0  && row < this.mat.numRows  && col < this.mat.numCols ;
});

Clazz.newMeth(C$, 'printDimensions$', function () {
System.out.println$S("[rows = " + this.numRows$() + " , cols = " + this.numCols$() + " ]" );
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
