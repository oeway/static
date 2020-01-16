(function(){var P$=Clazz.newPackage("org.ejml.ops"),I$=[[0,'org.ejml.alg.dense.decomposition.chol.CholeskyDecompositionInner','org.ejml.factory.DecompositionFactory','org.ejml.ops.CommonOps','org.ejml.alg.dense.mult.VectorVectorMult','org.ejml.UtilEjml','org.ejml.ops.SingularOps']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MatrixFeatures");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'hasNaN$org_ejml_data_D1Matrix64F', function (m) {
var length=m.getNumElements$();
for (var i=0; i < length; i++) {
if (Double.isNaN$D(m.get$I(i))) return true;
}
return false;
}, 1);

Clazz.newMeth(C$, 'hasUncountable$org_ejml_data_D1Matrix64F', function (m) {
var length=m.getNumElements$();
for (var i=0; i < length; i++) {
var a=m.get$I(i);
if (Double.isNaN$D(a) || Double.isInfinite$D(a) ) return true;
}
return false;
}, 1);

Clazz.newMeth(C$, 'isVector$org_ejml_data_D1Matrix64F', function (mat) {
return (mat.numCols == 1 || mat.numRows == 1 );
}, 1);

Clazz.newMeth(C$, 'isPositiveDefinite$org_ejml_data_DenseMatrix64F', function (A) {
if (!C$.isSquare$org_ejml_data_D1Matrix64F(A)) return false;
var chol=Clazz.new_($I$(1,1).c$$Z,[true]);
if (chol.inputModified$()) A=A.copy$();
return chol.decompose$org_ejml_data_DenseMatrix64F(A);
}, 1);

Clazz.newMeth(C$, 'isPositiveSemidefinite$org_ejml_data_DenseMatrix64F', function (A) {
if (!C$.isSquare$org_ejml_data_D1Matrix64F(A)) return false;
var eig=$I$(2).eig$I$Z(A.numCols, false);
if (eig.inputModified$()) A=A.copy$();
eig.decompose$TT(A);
for (var i=0; i < A.numRows; i++) {
var v=eig.getEigenvalue$I(i);
if (v.getReal$() < 0 ) return false;
}
return true;
}, 1);

Clazz.newMeth(C$, 'isSquare$org_ejml_data_D1Matrix64F', function (mat) {
return mat.numCols == mat.numRows;
}, 1);

Clazz.newMeth(C$, 'isSymmetric$org_ejml_data_DenseMatrix64F$D', function (m, tol) {
if (m.numCols != m.numRows) return false;
var max=$I$(3).elementMaxAbs$org_ejml_data_D1Matrix64F(m);
for (var i=0; i < m.numRows; i++) {
for (var j=0; j < i; j++) {
var a=m.get$I$I(i, j) / max;
var b=m.get$I$I(j, i) / max;
var diff=Math.abs(a - b);
if (!(diff <= tol )) {
return false;
}}
}
return true;
}, 1);

Clazz.newMeth(C$, 'isSymmetric$org_ejml_data_DenseMatrix64F', function (m) {
return C$.isSymmetric$org_ejml_data_DenseMatrix64F$D(m, 0.0);
}, 1);

Clazz.newMeth(C$, 'isSkewSymmetric$org_ejml_data_DenseMatrix64F$D', function (A, tol) {
if (A.numCols != A.numRows) return false;
for (var i=0; i < A.numRows; i++) {
for (var j=0; j < i; j++) {
var a=A.get$I$I(i, j);
var b=A.get$I$I(j, i);
var diff=Math.abs(a + b);
if (!(diff <= tol )) {
return false;
}}
}
return true;
}, 1);

Clazz.newMeth(C$, 'isInverse$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$D', function (a, b, tol) {
if (a.numRows != b.numRows || a.numCols != b.numCols ) {
return false;
}var numRows=a.numRows;
var numCols=a.numCols;
for (var i=0; i < numRows; i++) {
for (var j=0; j < numCols; j++) {
var total=0;
for (var k=0; k < numCols; k++) {
total += a.get$I$I(i, k) * b.get$I$I(k, j);
}
if (i == j) {
if (!(Math.abs(total - 1) <= tol )) return false;
} else if (!(Math.abs(total) <= tol )) return false;
}
}
return true;
}, 1);

Clazz.newMeth(C$, 'isEquals$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F$D', function (a, b, tol) {
if (a.numRows != b.numRows || a.numCols != b.numCols ) {
return false;
}if (tol == 0.0 ) return C$.isEquals$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F(a, b);
var length=a.getNumElements$();
for (var i=0; i < length; i++) {
if (!(tol >= Math.abs(a.get$I(i) - b.get$I(i)) )) {
return false;
}}
return true;
}, 1);

Clazz.newMeth(C$, 'isEqualsTriangle$org_ejml_data_ReshapeMatrix64F$org_ejml_data_ReshapeMatrix64F$Z$D', function (a, b, upper, tol) {
if (a.numRows != b.numRows || a.numCols != b.numCols ) {
return false;
}if (upper) {
for (var i=0; i < a.numRows; i++) {
for (var j=i; j < a.numCols; j++) {
if (Math.abs(a.get$I$I(i, j) - b.get$I$I(i, j)) > tol ) return false;
}
}
} else {
for (var i=0; i < a.numRows; i++) {
var end=Math.min(i, a.numCols - 1);
for (var j=0; j <= end; j++) {
if (Math.abs(a.get$I$I(i, j) - b.get$I$I(i, j)) > tol ) return false;
}
}
}return true;
}, 1);

Clazz.newMeth(C$, 'isEquals$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F', function (a, b) {
if (a.numRows != b.numRows || a.numCols != b.numCols ) {
return false;
}var length=a.getNumElements$();
for (var i=0; i < length; i++) {
if (!(a.get$I(i) == b.get$I(i) )) {
return false;
}}
return true;
}, 1);

Clazz.newMeth(C$, 'isIdentical$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F$D', function (a, b, tol) {
if (a.numRows != b.numRows || a.numCols != b.numCols ) {
return false;
}if (tol < 0 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Tolerance must be greater than or equal to zero."]);
var length=a.getNumElements$();
for (var i=0; i < length; i++) {
var valA=a.get$I(i);
var valB=b.get$I(i);
var diff=Math.abs(valA - valB);
if (tol >= diff ) continue;
if (Double.isNaN$D(valA)) {
return Double.isNaN$D(valB);
} else if (Double.isInfinite$D(valA)) {
return valA == valB ;
} else {
return false;
}}
return true;
}, 1);

Clazz.newMeth(C$, 'isOrthogonal$org_ejml_data_DenseMatrix64F$D', function (Q, tol) {
if (Q.numRows < Q.numCols) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The number of rows must be more than or equal to the number of columns"]);
}var u=$I$(3).columnsToVector$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64FA(Q, null);
for (var i=0; i < u.length; i++) {
var a=u[i];
for (var j=i + 1; j < u.length; j++) {
var val=$I$(4).innerProd$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F(a, u[j]);
if (!(Math.abs(val) <= tol )) return false;
}
}
return true;
}, 1);

Clazz.newMeth(C$, 'isRowsLinearIndependent$org_ejml_data_DenseMatrix64F', function (A) {
var lu=$I$(2).lu$I$I(A.numRows, A.numCols);
if (lu.inputModified$()) A=A.copy$();
if (!lu.decompose$TT(A)) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Decompositon failed?"]);
return !lu.isSingular$();
}, 1);

Clazz.newMeth(C$, 'isIdentity$org_ejml_data_DenseMatrix64F$D', function (mat, tol) {
var index=0;
for (var i=0; i < mat.numRows; i++) {
for (var j=0; j < mat.numCols; j++) {
if (i == j) {
if (!(Math.abs(mat.get$I(index++) - 1) <= tol )) return false;
} else {
if (!(Math.abs(mat.get$I(index++)) <= tol )) return false;
}}
}
return true;
}, 1);

Clazz.newMeth(C$, 'isConstantVal$org_ejml_data_DenseMatrix64F$D$D', function (mat, val, tol) {
var index=0;
for (var i=0; i < mat.numRows; i++) {
for (var j=0; j < mat.numCols; j++) {
if (!(Math.abs(mat.get$I(index++) - val) <= tol )) return false;
}
}
return true;
}, 1);

Clazz.newMeth(C$, 'isDiagonalPositive$org_ejml_data_DenseMatrix64F', function (a) {
for (var i=0; i < a.numRows; i++) {
if (!(a.get$I$I(i, i) >= 0 )) return false;
}
return true;
}, 1);

Clazz.newMeth(C$, 'isFullRank$org_ejml_data_DenseMatrix64F', function (a) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Implement"]);
}, 1);

Clazz.newMeth(C$, 'isNegative$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F$D', function (a, b, tol) {
if (a.numRows != b.numRows || a.numCols != b.numCols ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Matrix dimensions must match"]);
var length=a.getNumElements$();
for (var i=0; i < length; i++) {
if (!(Math.abs(a.get$I(i) + b.get$I(i)) <= tol )) return false;
}
return true;
}, 1);

Clazz.newMeth(C$, 'isUpperTriangle$org_ejml_data_DenseMatrix64F$I$D', function (A, hessenberg, tol) {
if (A.numRows != A.numCols) return false;
for (var i=hessenberg + 1; i < A.numRows; i++) {
for (var j=0; j < i - hessenberg; j++) {
if (!(Math.abs(A.get$I$I(i, j)) <= tol )) {
return false;
}}
}
return true;
}, 1);

Clazz.newMeth(C$, 'rank$org_ejml_data_DenseMatrix64F', function (A) {
return C$.rank$org_ejml_data_DenseMatrix64F$D(A, $I$(5).EPS * 100);
}, 1);

Clazz.newMeth(C$, 'rank$org_ejml_data_DenseMatrix64F$D', function (A, threshold) {
var svd=$I$(2).svd$I$I$Z$Z$Z(A.numRows, A.numCols, false, false, true);
if (svd.inputModified$()) A=A.copy$();
if (!svd.decompose$TT(A)) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Decomposition failed"]);
return $I$(6).rank$org_ejml_factory_SingularValueDecomposition$D(svd, threshold);
}, 1);

Clazz.newMeth(C$, 'nullity$org_ejml_data_DenseMatrix64F', function (A) {
return C$.nullity$org_ejml_data_DenseMatrix64F$D(A, $I$(5).EPS * 100);
}, 1);

Clazz.newMeth(C$, 'nullity$org_ejml_data_DenseMatrix64F$D', function (A, threshold) {
var svd=$I$(2).svd$I$I$Z$Z$Z(A.numRows, A.numCols, false, false, true);
if (svd.inputModified$()) A=A.copy$();
if (!svd.decompose$TT(A)) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Decomposition failed"]);
return $I$(6).nullity$org_ejml_factory_SingularValueDecomposition$D(svd, threshold);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
