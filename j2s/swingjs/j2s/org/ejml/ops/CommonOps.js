(function(){var P$=Clazz.newPackage("org.ejml.ops"),I$=[[0,'org.ejml.alg.dense.mult.MatrixVectorMult','org.ejml.EjmlParameters','org.ejml.alg.dense.mult.MatrixMatrixMult','org.ejml.alg.dense.mult.MatrixMultProduct','org.ejml.factory.LinearSolverFactory','org.ejml.alg.dense.linsol.LinearSolverSafe','org.ejml.alg.dense.misc.TransposeAlgs','org.ejml.data.DenseMatrix64F','org.ejml.alg.dense.misc.UnrolledDeterminantFromMinor','org.ejml.alg.dense.decomposition.lu.LUDecompositionAlt','org.ejml.alg.dense.misc.UnrolledInverseFromMinor','org.ejml.alg.dense.linsol.lu.LinearSolverLu','org.ejml.alg.dense.misc.ImplCommonOps_DenseMatrix64F','org.ejml.alg.dense.misc.ImplCommonOps_Matrix64F','org.ejml.ops.MatrixFeatures','org.ejml.alg.dense.misc.RrefGaussJordanRowPivot','org.ejml.UtilEjml']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CommonOps");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'mult$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (a, b, c) {
if (b.numCols == 1) {
$I$(1).mult$org_ejml_data_RowD1Matrix64F$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F(a, b, c);
} else if (b.numCols >= $I$(2).MULT_COLUMN_SWITCH) {
$I$(3).mult_reorder$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(a, b, c);
} else {
$I$(3).mult_small$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(a, b, c);
}}, 1);

Clazz.newMeth(C$, 'mult$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (alpha, a, b, c) {
if (b.numCols >= $I$(2).MULT_COLUMN_SWITCH) {
$I$(3).mult_reorder$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(alpha, a, b, c);
} else {
$I$(3).mult_small$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(alpha, a, b, c);
}}, 1);

Clazz.newMeth(C$, 'multTransA$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (a, b, c) {
if (b.numCols == 1) {
if (a.numCols >= $I$(2).MULT_COLUMN_SWITCH) {
$I$(1).multTransA_reorder$org_ejml_data_RowD1Matrix64F$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F(a, b, c);
} else {
$I$(1).multTransA_small$org_ejml_data_RowD1Matrix64F$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F(a, b, c);
}} else if (a.numCols >= $I$(2).MULT_COLUMN_SWITCH || b.numCols >= $I$(2).MULT_COLUMN_SWITCH ) {
$I$(3).multTransA_reorder$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(a, b, c);
} else {
$I$(3).multTransA_small$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(a, b, c);
}}, 1);

Clazz.newMeth(C$, 'multTransA$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (alpha, a, b, c) {
if (a.numCols >= $I$(2).MULT_COLUMN_SWITCH || b.numCols >= $I$(2).MULT_COLUMN_SWITCH ) {
$I$(3).multTransA_reorder$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(alpha, a, b, c);
} else {
$I$(3).multTransA_small$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(alpha, a, b, c);
}}, 1);

Clazz.newMeth(C$, 'multTransB$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (a, b, c) {
if (b.numRows == 1) {
$I$(1).mult$org_ejml_data_RowD1Matrix64F$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F(a, b, c);
} else {
$I$(3).multTransB$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(a, b, c);
}}, 1);

Clazz.newMeth(C$, 'multTransB$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (alpha, a, b, c) {
$I$(3).multTransB$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(alpha, a, b, c);
}, 1);

Clazz.newMeth(C$, 'multTransAB$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (a, b, c) {
if (b.numRows == 1) {
if (a.numCols >= $I$(2).MULT_COLUMN_SWITCH) {
$I$(1).multTransA_reorder$org_ejml_data_RowD1Matrix64F$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F(a, b, c);
} else {
$I$(1).multTransA_small$org_ejml_data_RowD1Matrix64F$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F(a, b, c);
}} else if (a.numCols >= $I$(2).MULT_TRANAB_COLUMN_SWITCH) {
$I$(3).multTransAB_aux$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$DA(a, b, c, null);
} else {
$I$(3).multTransAB$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(a, b, c);
}}, 1);

Clazz.newMeth(C$, 'multTransAB$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (alpha, a, b, c) {
if (a.numCols >= $I$(2).MULT_TRANAB_COLUMN_SWITCH) {
$I$(3).multTransAB_aux$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$DA(alpha, a, b, c, null);
} else {
$I$(3).multTransAB$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(alpha, a, b, c);
}}, 1);

Clazz.newMeth(C$, 'multInner$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (a, c) {
if (a.numCols != c.numCols || a.numCols != c.numRows ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Rows and columns of \'c\' must be the same as the columns in \'a\'"]);
if (a.numCols >= $I$(2).MULT_INNER_SWITCH) {
$I$(4).inner_small$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(a, c);
} else {
$I$(4).inner_reorder$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(a, c);
}}, 1);

Clazz.newMeth(C$, 'multOuter$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (a, c) {
if (a.numRows != c.numCols || a.numRows != c.numRows ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Rows and columns of \'c\' must be the same as the rows in \'a\'"]);
$I$(4).outer$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(a, c);
}, 1);

Clazz.newMeth(C$, 'multAdd$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (a, b, c) {
if (b.numCols == 1) {
$I$(1).multAdd$org_ejml_data_RowD1Matrix64F$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F(a, b, c);
} else {
if (b.numCols >= $I$(2).MULT_COLUMN_SWITCH) {
$I$(3).multAdd_reorder$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(a, b, c);
} else {
$I$(3).multAdd_small$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(a, b, c);
}}}, 1);

Clazz.newMeth(C$, 'multAdd$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (alpha, a, b, c) {
if (b.numCols >= $I$(2).MULT_COLUMN_SWITCH) {
$I$(3).multAdd_reorder$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(alpha, a, b, c);
} else {
$I$(3).multAdd_small$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(alpha, a, b, c);
}}, 1);

Clazz.newMeth(C$, 'multAddTransA$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (a, b, c) {
if (b.numCols == 1) {
if (a.numCols >= $I$(2).MULT_COLUMN_SWITCH) {
$I$(1).multAddTransA_reorder$org_ejml_data_RowD1Matrix64F$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F(a, b, c);
} else {
$I$(1).multAddTransA_small$org_ejml_data_RowD1Matrix64F$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F(a, b, c);
}} else {
if (a.numCols >= $I$(2).MULT_COLUMN_SWITCH || b.numCols >= $I$(2).MULT_COLUMN_SWITCH ) {
$I$(3).multAddTransA_reorder$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(a, b, c);
} else {
$I$(3).multAddTransA_small$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(a, b, c);
}}}, 1);

Clazz.newMeth(C$, 'multAddTransA$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (alpha, a, b, c) {
if (a.numCols >= $I$(2).MULT_COLUMN_SWITCH || b.numCols >= $I$(2).MULT_COLUMN_SWITCH ) {
$I$(3).multAddTransA_reorder$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(alpha, a, b, c);
} else {
$I$(3).multAddTransA_small$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(alpha, a, b, c);
}}, 1);

Clazz.newMeth(C$, 'multAddTransB$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (a, b, c) {
$I$(3).multAddTransB$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(a, b, c);
}, 1);

Clazz.newMeth(C$, 'multAddTransB$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (alpha, a, b, c) {
$I$(3).multAddTransB$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(alpha, a, b, c);
}, 1);

Clazz.newMeth(C$, 'multAddTransAB$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (a, b, c) {
if (b.numRows == 1) {
if (a.numCols >= $I$(2).MULT_COLUMN_SWITCH) {
$I$(1).multAddTransA_reorder$org_ejml_data_RowD1Matrix64F$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F(a, b, c);
} else {
$I$(1).multAddTransA_small$org_ejml_data_RowD1Matrix64F$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F(a, b, c);
}} else if (a.numCols >= $I$(2).MULT_TRANAB_COLUMN_SWITCH) {
$I$(3).multAddTransAB_aux$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$DA(a, b, c, null);
} else {
$I$(3).multAddTransAB$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(a, b, c);
}}, 1);

Clazz.newMeth(C$, 'multAddTransAB$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (alpha, a, b, c) {
if (a.numCols >= $I$(2).MULT_TRANAB_COLUMN_SWITCH) {
$I$(3).multAddTransAB_aux$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$DA(alpha, a, b, c, null);
} else {
$I$(3).multAddTransAB$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(alpha, a, b, c);
}}, 1);

Clazz.newMeth(C$, 'solve$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F', function (a, b, x) {
var solver=$I$(5).general$I$I(a.numRows, a.numCols);
solver=Clazz.new_(1,{T:"org.ejml.data.DenseMatrix64F"},$I$(6,1).c$$org_ejml_factory_LinearSolver,[solver]);
if (!solver.setA$TT(a)) return false;
solver.solve$TT$TT(b, x);
return true;
}, 1);

Clazz.newMeth(C$, 'transpose$org_ejml_data_DenseMatrix64F', function (mat) {
if (mat.numCols == mat.numRows) {
$I$(7).square$org_ejml_data_RowD1Matrix64F(mat);
} else {
var b=Clazz.new_($I$(8,1).c$$I$I,[mat.numCols, mat.numRows]);
C$.transpose$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F(mat, b);
mat.setReshape$org_ejml_data_DenseMatrix64F(b);
}}, 1);

Clazz.newMeth(C$, 'transpose$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F', function (A, A_tran) {
if (A_tran == null ) {
A_tran=Clazz.new_($I$(8,1).c$$I$I,[A.numCols, A.numRows]);
} else {
if (A.numRows != A_tran.numCols || A.numCols != A_tran.numRows ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Incompatible matrix dimensions"]);
}}if (A.numRows > $I$(2).TRANSPOSE_SWITCH && A.numCols > $I$(2).TRANSPOSE_SWITCH ) $I$(7).block$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$I(A, A_tran, $I$(2).BLOCK_WIDTH);
 else $I$(7).standard$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(A, A_tran);
return A_tran;
}, 1);

Clazz.newMeth(C$, 'trace$org_ejml_data_RowD1Matrix64F', function (a) {
if (a.numRows != a.numCols) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The matrix must be square"]);
}var sum=0;
var index=0;
for (var i=0; i < a.numRows; i++) {
sum += a.get$I(index);
index+=1 + a.numCols;
}
return sum;
}, 1);

Clazz.newMeth(C$, 'det$org_ejml_data_DenseMatrix64F', function (mat) {
var numCol=mat.getNumCols$();
var numRow=mat.getNumRows$();
if (numCol != numRow) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Must be a square matrix."]);
} else if (numCol <= 6) {
if (numCol >= 2) {
return $I$(9).det$org_ejml_data_RowD1Matrix64F(mat);
} else {
return mat.get$I(0);
}} else {
var alg=Clazz.new_($I$(10,1));
if (alg.inputModified$()) {
mat=mat.copy$();
}if (!alg.decompose$org_ejml_data_DenseMatrix64F(mat)) return 0.0;
return alg.computeDeterminant$();
}}, 1);

Clazz.newMeth(C$, 'invert$org_ejml_data_DenseMatrix64F', function (mat) {
if (mat.numCols <= 5) {
if (mat.numCols != mat.numRows) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Must be a square matrix."]);
}if (mat.numCols >= 2) {
$I$(11).inv$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F(mat, mat);
} else {
mat.set$I$D(0, 1.0 / mat.get$I(0));
}} else {
var alg=Clazz.new_($I$(10,1));
var solver=Clazz.new_($I$(12,1).c$$org_ejml_alg_dense_decomposition_lu_LUDecompositionBase,[alg]);
if (solver.setA$org_ejml_data_DenseMatrix64F(mat)) {
solver.invert$org_ejml_data_DenseMatrix64F(mat);
} else {
return false;
}}return true;
}, 1);

Clazz.newMeth(C$, 'invert$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F', function (mat, result) {
if (mat.numCols <= 5) {
if (mat.numCols != mat.numRows) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Must be a square matrix."]);
}if (result.numCols >= 2) {
$I$(11).inv$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F(mat, result);
} else {
result.set$I$D(0, 1.0 / mat.get$I(0));
}} else {
var alg=Clazz.new_($I$(10,1));
var solver=Clazz.new_($I$(12,1).c$$org_ejml_alg_dense_decomposition_lu_LUDecompositionBase,[alg]);
if (solver.modifiesA$()) mat=mat.copy$();
if (!solver.setA$org_ejml_data_DenseMatrix64F(mat)) return false;
solver.invert$org_ejml_data_DenseMatrix64F(result);
}return true;
}, 1);

Clazz.newMeth(C$, 'pinv$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F', function (A, invA) {
var solver=$I$(5).pseudoInverse$Z(true);
if (solver.modifiesA$()) A=A.copy$();
if (!solver.setA$TT(A)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invert failed, maybe a bug?"]);
solver.invert$TT(invA);
}, 1);

Clazz.newMeth(C$, 'columnsToVector$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64FA', function (A, v) {
var ret;
if (v == null  || v.length < A.numCols ) {
ret=Clazz.array($I$(8), [A.numCols]);
} else {
ret=v;
}for (var i=0; i < ret.length; i++) {
if (ret[i] == null ) {
ret[i]=Clazz.new_($I$(8,1).c$$I$I,[A.numRows, 1]);
} else {
ret[i].reshape$I$I$Z(A.numRows, 1, false);
}var u=ret[i];
for (var j=0; j < A.numRows; j++) {
u.set$I$I$D(j, 0, A.get$I$I(j, i));
}
}
return ret;
}, 1);

Clazz.newMeth(C$, 'rowsToVector$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64FA', function (A, v) {
var ret;
if (v == null  || v.length < A.numRows ) {
ret=Clazz.array($I$(8), [A.numRows]);
} else {
ret=v;
}for (var i=0; i < ret.length; i++) {
if (ret[i] == null ) {
ret[i]=Clazz.new_($I$(8,1).c$$I$I,[A.numCols, 1]);
} else {
ret[i].reshape$I$I$Z(A.numCols, 1, false);
}var u=ret[i];
for (var j=0; j < A.numCols; j++) {
u.set$I$I$D(j, 0, A.get$I$I(i, j));
}
}
return ret;
}, 1);

Clazz.newMeth(C$, 'setIdentity$org_ejml_data_RowD1Matrix64F', function (mat) {
var width=mat.numRows < mat.numCols ? mat.numRows : mat.numCols;
var length=mat.getNumElements$();
for (var i=0; i < length; i++) {
mat.set$I$D(i, 0);
}
var index=0;
for (var i=0; i < width; i++, index+=mat.numCols + 1) {
mat.set$I$D(index, 1);
}
}, 1);

Clazz.newMeth(C$, 'identity$I', function (width) {
var ret=Clazz.new_($I$(8,1).c$$I$I,[width, width]);
for (var i=0; i < width; i++) {
ret.set$I$I$D(i, i, 1.0);
}
return ret;
}, 1);

Clazz.newMeth(C$, 'identity$I$I', function (numRows, numCols) {
var ret=Clazz.new_($I$(8,1).c$$I$I,[numRows, numCols]);
var small=numRows < numCols ? numRows : numCols;
for (var i=0; i < small; i++) {
ret.set$I$I$D(i, i, 1.0);
}
return ret;
}, 1);

Clazz.newMeth(C$, 'diag$DA', function (diagEl) {
return C$.diag$org_ejml_data_DenseMatrix64F$I$DA(null, diagEl.length, diagEl);
}, 1);

Clazz.newMeth(C$, 'diag$org_ejml_data_DenseMatrix64F$I$DA', function (ret, width, diagEl) {
if (ret == null ) {
ret=Clazz.new_($I$(8,1).c$$I$I,[width, width]);
} else {
if (ret.numRows != width || ret.numCols != width ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected matrix size"]);
C$.fill$org_ejml_data_D1Matrix64F$D(ret, 0);
}for (var i=0; i < width; i++) {
ret.set$I$I$D(i, i, diagEl[i]);
}
return ret;
}, 1);

Clazz.newMeth(C$, 'diagR$I$I$DA', function (numRows, numCols, diagEl) {
var ret=Clazz.new_($I$(8,1).c$$I$I,[numRows, numCols]);
var o=Math.min(numRows, numCols);
for (var i=0; i < o; i++) {
ret.set$I$I$D(i, i, diagEl[i]);
}
return ret;
}, 1);

Clazz.newMeth(C$, 'kron$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F', function (A, B, C) {
var numColsC=A.numCols * B.numCols;
var numRowsC=A.numRows * B.numRows;
if (C.numCols != numColsC || C.numRows != numRowsC ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["C does not have the expected dimensions"]);
}for (var i=0; i < A.numRows; i++) {
for (var j=0; j < A.numCols; j++) {
var a=A.get$I$I(i, j);
for (var rowB=0; rowB < B.numRows; rowB++) {
for (var colB=0; colB < B.numCols; colB++) {
var val=a * B.get$I$I(rowB, colB);
C.set$I$I$D(i * B.numRows + rowB, j * B.numCols + colB, val);
}
}
}
}
}, 1);

Clazz.newMeth(C$, 'extract$org_ejml_data_ReshapeMatrix64F$I$I$I$I$org_ejml_data_ReshapeMatrix64F$I$I', function (src, srcY0, srcY1, srcX0, srcX1, dst, dstY0, dstX0) {
if (srcY1 < srcY0 || srcY0 < 0  || srcY1 > src.numRows ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["srcY1 < srcY0 || srcY0 < 0 || srcY1 > src.numRows"]);
if (srcX1 < srcX0 || srcX0 < 0  || srcX1 > src.numCols ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["srcX1 < srcX0 || srcX0 < 0 || srcX1 > src.numCols"]);
var w=srcX1 - srcX0;
var h=srcY1 - srcY0;
if (dstY0 + h > dst.numRows) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["dst is too small in rows"]);
if (dstX0 + w > dst.numCols) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["dst is too small in columns"]);
if (Clazz.instanceOf(src, "org.ejml.data.DenseMatrix64F") && Clazz.instanceOf(dst, "org.ejml.data.DenseMatrix64F") ) {
$I$(13).extract$org_ejml_data_DenseMatrix64F$I$I$org_ejml_data_DenseMatrix64F$I$I$I$I(src, srcY0, srcX0, dst, dstY0, dstX0, h, w);
} else {
$I$(14).extract$org_ejml_data_Matrix64F$I$I$org_ejml_data_Matrix64F$I$I$I$I(src, srcY0, srcX0, dst, dstY0, dstX0, h, w);
}}, 1);

Clazz.newMeth(C$, 'extract$org_ejml_data_DenseMatrix64F$I$I$I$I', function (src, srcY0, srcY1, srcX0, srcX1) {
if (srcY1 <= srcY0 || srcY0 < 0  || srcY1 > src.numRows ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["srcY1 <= srcY0 || srcY0 < 0 || srcY1 > src.numRows"]);
if (srcX1 <= srcX0 || srcX0 < 0  || srcX1 > src.numCols ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["srcX1 <= srcX0 || srcX0 < 0 || srcX1 > src.numCols"]);
var w=srcX1 - srcX0;
var h=srcY1 - srcY0;
var dst=Clazz.new_($I$(8,1).c$$I$I,[h, w]);
$I$(13).extract$org_ejml_data_DenseMatrix64F$I$I$org_ejml_data_DenseMatrix64F$I$I$I$I(src, srcY0, srcX0, dst, 0, 0, h, w);
return dst;
}, 1);

Clazz.newMeth(C$, 'extractDiag$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F', function (src, dst) {
var N=Math.min(src.numRows, src.numCols);
if (!$I$(15).isVector$org_ejml_data_D1Matrix64F(dst)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Expected a vector for dst."]);
} else if (dst.getNumElements$() != N) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Expected " + N + " elements in dst." ]);
}for (var i=0; i < N; i++) {
dst.set$I$D(i, src.unsafe_get$I$I(i, i));
}
}, 1);

Clazz.newMeth(C$, 'insert$org_ejml_data_ReshapeMatrix64F$org_ejml_data_ReshapeMatrix64F$I$I', function (src, dest, destY0, destX0) {
C$.extract$org_ejml_data_ReshapeMatrix64F$I$I$I$I$org_ejml_data_ReshapeMatrix64F$I$I(src, 0, src.numRows, 0, src.numCols, dest, destY0, destX0);
}, 1);

Clazz.newMeth(C$, 'elementMax$org_ejml_data_D1Matrix64F', function (a) {
var size=a.getNumElements$();
var max=a.get$I(0);
for (var i=1; i < size; i++) {
var val=a.get$I(i);
if (val >= max ) {
max=val;
}}
return max;
}, 1);

Clazz.newMeth(C$, 'elementMaxAbs$org_ejml_data_D1Matrix64F', function (a) {
var size=a.getNumElements$();
var max=0;
for (var i=0; i < size; i++) {
var val=Math.abs(a.get$I(i));
if (val > max ) {
max=val;
}}
return max;
}, 1);

Clazz.newMeth(C$, 'elementMin$org_ejml_data_D1Matrix64F', function (a) {
var size=a.getNumElements$();
var min=a.get$I(0);
for (var i=1; i < size; i++) {
var val=a.get$I(i);
if (val < min ) {
min=val;
}}
return min;
}, 1);

Clazz.newMeth(C$, 'elementMinAbs$org_ejml_data_D1Matrix64F', function (a) {
var size=a.getNumElements$();
var min=1.7976931348623157E308;
for (var i=0; i < size; i++) {
var val=Math.abs(a.get$I(i));
if (val < min ) {
min=val;
}}
return min;
}, 1);

Clazz.newMeth(C$, 'elementMult$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F', function (a, b) {
if (a.numCols != b.numCols || a.numRows != b.numRows ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The \'a\' and \'b\' matrices do not have compatable dimensions"]);
}var length=a.getNumElements$();
for (var i=0; i < length; i++) {
a.times$I$D(i, b.get$I(i));
}
}, 1);

Clazz.newMeth(C$, 'elementMult$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F', function (a, b, c) {
if (a.numCols != b.numCols || a.numRows != b.numRows  || a.numRows != c.numRows  || a.numCols != c.numCols ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
}var length=a.getNumElements$();
for (var i=0; i < length; i++) {
c.set$I$D(i, a.get$I(i) * b.get$I(i));
}
}, 1);

Clazz.newMeth(C$, 'elementDiv$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F', function (a, b) {
if (a.numCols != b.numCols || a.numRows != b.numRows ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The \'a\' and \'b\' matrices do not have compatable dimensions"]);
}var length=a.getNumElements$();
for (var i=0; i < length; i++) {
a.div$I$D(i, b.get$I(i));
}
}, 1);

Clazz.newMeth(C$, 'elementDiv$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F', function (a, b, c) {
if (a.numCols != b.numCols || a.numRows != b.numRows  || a.numRows != c.numRows  || a.numCols != c.numCols ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
}var length=a.getNumElements$();
for (var i=0; i < length; i++) {
c.set$I$D(i, a.get$I(i) / b.get$I(i));
}
}, 1);

Clazz.newMeth(C$, 'elementSum$org_ejml_data_D1Matrix64F', function (mat) {
var total=0;
var size=mat.getNumElements$();
for (var i=0; i < size; i++) {
total += mat.get$I(i);
}
return total;
}, 1);

Clazz.newMeth(C$, 'elementSumAbs$org_ejml_data_D1Matrix64F', function (mat) {
var total=0;
var size=mat.getNumElements$();
for (var i=0; i < size; i++) {
total += Math.abs(mat.get$I(i));
}
return total;
}, 1);

Clazz.newMeth(C$, 'sumRows$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F', function (input, output) {
if (output == null ) {
output=Clazz.new_($I$(8,1).c$$I$I,[input.numRows, 1]);
} else if (output.getNumElements$() != input.numRows) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Output does not have enough elements to store the results"]);
for (var row=0; row < input.numRows; row++) {
var total=0;
var end=(row + 1) * input.numCols;
for (var index=row * input.numCols; index < end; index++) {
total += input.data[index];
}
output.set$I$D(row, total);
}
return output;
}, 1);

Clazz.newMeth(C$, 'sumCols$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F', function (input, output) {
if (output == null ) {
output=Clazz.new_($I$(8,1).c$$I$I,[1, input.numCols]);
} else if (output.getNumElements$() != input.numCols) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Output does not have enough elements to store the results"]);
for (var cols=0; cols < input.numCols; cols++) {
var total=0;
var index=cols;
var end=index + input.numCols * input.numRows;
for (; index < end; index+=input.numCols) {
total += input.data[index];
}
output.set$I$D(cols, total);
}
return output;
}, 1);

Clazz.newMeth(C$, 'addEquals$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F', function (a, b) {
if (a.numCols != b.numCols || a.numRows != b.numRows ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
}var length=a.getNumElements$();
for (var i=0; i < length; i++) {
a.plus$I$D(i, b.get$I(i));
}
}, 1);

Clazz.newMeth(C$, 'addEquals$org_ejml_data_D1Matrix64F$D$org_ejml_data_D1Matrix64F', function (a, beta, b) {
if (a.numCols != b.numCols || a.numRows != b.numRows ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
}var length=a.getNumElements$();
for (var i=0; i < length; i++) {
a.plus$I$D(i, beta * b.get$I(i));
}
}, 1);

Clazz.newMeth(C$, 'add$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F', function (a, b, c) {
if (a.numCols != b.numCols || a.numRows != b.numRows  || a.numCols != c.numCols  || a.numRows != c.numRows ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The matrices are not all the same dimension."]);
}var length=a.getNumElements$();
for (var i=0; i < length; i++) {
c.set$I$D(i, a.get$I(i) + b.get$I(i));
}
}, 1);

Clazz.newMeth(C$, 'add$org_ejml_data_D1Matrix64F$D$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F', function (a, beta, b, c) {
if (a.numCols != b.numCols || a.numRows != b.numRows  || a.numCols != c.numCols  || a.numRows != c.numRows ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The matrices are not all the same dimension."]);
}var length=a.getNumElements$();
for (var i=0; i < length; i++) {
c.set$I$D(i, a.get$I(i) + beta * b.get$I(i));
}
}, 1);

Clazz.newMeth(C$, 'add$D$org_ejml_data_D1Matrix64F$D$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F', function (alpha, a, beta, b, c) {
if (a.numCols != b.numCols || a.numRows != b.numRows  || a.numCols != c.numCols  || a.numRows != c.numRows ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The matrices are not all the same dimension."]);
}var length=a.getNumElements$();
for (var i=0; i < length; i++) {
c.set$I$D(i, alpha * a.get$I(i) + beta * b.get$I(i));
}
}, 1);

Clazz.newMeth(C$, 'add$D$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F', function (alpha, a, b, c) {
if (a.numCols != b.numCols || a.numRows != b.numRows  || a.numCols != c.numCols  || a.numRows != c.numRows ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The matrices are not all the same dimension."]);
}var length=a.getNumElements$();
for (var i=0; i < length; i++) {
c.set$I$D(i, alpha * a.get$I(i) + b.get$I(i));
}
}, 1);

Clazz.newMeth(C$, 'add$org_ejml_data_D1Matrix64F$D', function (a, val) {
var length=a.getNumElements$();
for (var i=0; i < length; i++) {
a.plus$I$D(i, val);
}
}, 1);

Clazz.newMeth(C$, 'add$org_ejml_data_D1Matrix64F$D$org_ejml_data_D1Matrix64F', function (a, val, c) {
if (a.numRows != c.numRows || a.numCols != c.numCols ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Dimensions of a and c do not match."]);
}var length=a.getNumElements$();
for (var i=0; i < length; i++) {
c.set$I$D(i, a.get$I(i) + val);
}
}, 1);

Clazz.newMeth(C$, 'subEquals$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F', function (a, b) {
if (a.numCols != b.numCols || a.numRows != b.numRows ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The \'a\' and \'b\' matrices do not have compatable dimensions"]);
}var length=a.getNumElements$();
for (var i=0; i < length; i++) {
a.minus$I$D(i, b.get$I(i));
}
}, 1);

Clazz.newMeth(C$, 'sub$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F', function (a, b, c) {
if (a.numCols != b.numCols || a.numRows != b.numRows ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The \'a\' and \'b\' matrices do not have compatable dimensions"]);
}var length=a.getNumElements$();
for (var i=0; i < length; i++) {
c.set$I$D(i, a.get$I(i) - b.get$I(i));
}
}, 1);

Clazz.newMeth(C$, 'scale$D$org_ejml_data_D1Matrix64F', function (alpha, a) {
var size=a.getNumElements$();
for (var i=0; i < size; i++) {
a.times$I$D(i, alpha);
}
}, 1);

Clazz.newMeth(C$, 'scale$D$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F', function (alpha, a, b) {
if (a.numRows != b.numRows || a.numCols != b.numCols ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Matrices must have the same shape"]);
var size=a.getNumElements$();
for (var i=0; i < size; i++) {
b.set$I$D(i, a.get$I(i) * alpha);
}
}, 1);

Clazz.newMeth(C$, 'divide$D$org_ejml_data_D1Matrix64F', function (alpha, a) {
var size=a.getNumElements$();
for (var i=0; i < size; i++) {
a.div$I$D(i, alpha);
}
}, 1);

Clazz.newMeth(C$, 'divide$D$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F', function (alpha, a, b) {
if (a.numRows != b.numRows || a.numCols != b.numCols ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Matrices must have the same shape"]);
var size=a.getNumElements$();
for (var i=0; i < size; i++) {
b.set$I$D(i, a.get$I(i) / alpha);
}
}, 1);

Clazz.newMeth(C$, 'changeSign$org_ejml_data_D1Matrix64F', function (a) {
var size=a.getNumElements$();
for (var i=0; i < size; i++) {
a.set$I$D(i, -a.get$I(i));
}
}, 1);

Clazz.newMeth(C$, 'fill$org_ejml_data_D1Matrix64F$D', function (a, value) {
var size=a.getNumElements$();
for (var i=0; i < size; i++) {
a.set$I$D(i, value);
}
}, 1);

Clazz.newMeth(C$, 'rref$org_ejml_data_DenseMatrix64F$I$org_ejml_data_DenseMatrix64F', function (A, numUnknowns, reduced) {
if (reduced == null ) {
reduced=Clazz.new_($I$(8,1).c$$I$I,[A.numRows, A.numCols]);
} else if (reduced.numCols != A.numCols || reduced.numRows != A.numRows ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["\'re\' must have the same shape as the original input matrix"]);
if (numUnknowns <= 0) numUnknowns=Math.min(A.numCols, A.numRows);
var alg=Clazz.new_($I$(16,1));
alg.setTolerance$D(C$.elementMaxAbs$org_ejml_data_D1Matrix64F(A) * $I$(17).EPS * Math.max(A.numRows, A.numCols) );
reduced.set$org_ejml_data_D1Matrix64F(A);
alg.reduce$TT$I(reduced, numUnknowns);
return reduced;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
