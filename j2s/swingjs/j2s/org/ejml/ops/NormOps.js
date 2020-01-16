(function(){var P$=Clazz.newPackage("org.ejml.ops"),I$=[[0,'org.ejml.data.DenseMatrix64F','org.ejml.ops.CommonOps','org.ejml.factory.DecompositionFactory','org.ejml.ops.SingularOps','org.ejml.ops.MatrixFeatures','org.ejml.UtilEjml']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "NormOps");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'normalizeF$org_ejml_data_DenseMatrix64F', function (A) {
var val=C$.normF$org_ejml_data_D1Matrix64F(A);
if (val == 0 ) return;
var size=A.getNumElements$();
for (var i=0; i < size; i++) {
A.div$I$D(i, val);
}
}, 1);

Clazz.newMeth(C$, 'conditionP$org_ejml_data_DenseMatrix64F$D', function (A, p) {
if (p == 2 ) {
return C$.conditionP2$org_ejml_data_DenseMatrix64F(A);
} else if (A.numRows == A.numCols) {
var A_inv=Clazz.new_($I$(1,1).c$$I$I,[A.numRows, A.numCols]);
if (!$I$(2).invert$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F(A, A_inv)) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["A can\'t be inverted."]);
return C$.normP$org_ejml_data_DenseMatrix64F$D(A, p) * C$.normP$org_ejml_data_DenseMatrix64F$D(A_inv, p);
} else {
var pinv=Clazz.new_($I$(1,1).c$$I$I,[A.numCols, A.numRows]);
$I$(2).pinv$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F(A, pinv);
return C$.normP$org_ejml_data_DenseMatrix64F$D(A, p) * C$.normP$org_ejml_data_DenseMatrix64F$D(pinv, p);
}}, 1);

Clazz.newMeth(C$, 'conditionP2$org_ejml_data_DenseMatrix64F', function (A) {
var svd=$I$(3).svd$I$I$Z$Z$Z(A.numRows, A.numCols, false, false, true);
svd.decompose$TT(A);
var singularValues=svd.getSingularValues$();
var n=$I$(4).rank$org_ejml_factory_SingularValueDecomposition$D(svd, 1.0E-12);
if (n == 0) return 0;
var smallest=1.7976931348623157E308;
var largest=4.9E-324;
for (var s, $s = 0, $$s = singularValues; $s<$$s.length&&((s=($$s[$s])),1);$s++) {
if (s < smallest ) smallest=s;
if (s > largest ) largest=s;
}
return largest / smallest;
}, 1);

Clazz.newMeth(C$, 'fastNormF$org_ejml_data_D1Matrix64F', function (a) {
var total=0;
var size=a.getNumElements$();
for (var i=0; i < size; i++) {
var val=a.get$I(i);
total += val * val;
}
return Math.sqrt(total);
}, 1);

Clazz.newMeth(C$, 'normF$org_ejml_data_D1Matrix64F', function (a) {
var total=0;
var scale=$I$(2).elementMaxAbs$org_ejml_data_D1Matrix64F(a);
if (scale == 0.0 ) return 0.0;
var size=a.getNumElements$();
for (var i=0; i < size; i++) {
var val=a.get$I(i) / scale;
total += val * val;
}
return scale * Math.sqrt(total);
}, 1);

Clazz.newMeth(C$, 'elementP$org_ejml_data_RowD1Matrix64F$D', function (A, p) {
if (p == 1 ) {
return $I$(2).elementSumAbs$org_ejml_data_D1Matrix64F(A);
}if (p == 2 ) {
return C$.normF$org_ejml_data_D1Matrix64F(A);
} else {
var max=$I$(2).elementMaxAbs$org_ejml_data_D1Matrix64F(A);
if (max == 0.0 ) return 0.0;
var total=0;
var size=A.getNumElements$();
for (var i=0; i < size; i++) {
var a=A.get$I(i) / max;
total += Math.pow(Math.abs(a), p);
}
return max * Math.pow(total, 1.0 / p);
}}, 1);

Clazz.newMeth(C$, 'fastElementP$org_ejml_data_D1Matrix64F$D', function (A, p) {
if (p == 2 ) {
return C$.fastNormF$org_ejml_data_D1Matrix64F(A);
} else {
var total=0;
var size=A.getNumElements$();
for (var i=0; i < size; i++) {
var a=A.get$I(i);
total += Math.pow(Math.abs(a), p);
}
return Math.pow(total, 1.0 / p);
}}, 1);

Clazz.newMeth(C$, 'normP$org_ejml_data_DenseMatrix64F$D', function (A, p) {
if (p == 1 ) {
return C$.normP1$org_ejml_data_DenseMatrix64F(A);
} else if (p == 2 ) {
return C$.normP2$org_ejml_data_DenseMatrix64F(A);
} else if (Double.isInfinite$D(p)) {
return C$.normPInf$org_ejml_data_DenseMatrix64F(A);
}if ($I$(5).isVector$org_ejml_data_D1Matrix64F(A)) {
return C$.elementP$org_ejml_data_RowD1Matrix64F$D(A, p);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Doesn\'t support induced norms yet."]);
}}, 1);

Clazz.newMeth(C$, 'fastNormP$org_ejml_data_DenseMatrix64F$D', function (A, p) {
if (p == 1 ) {
return C$.normP1$org_ejml_data_DenseMatrix64F(A);
} else if (p == 2 ) {
return C$.fastNormP2$org_ejml_data_DenseMatrix64F(A);
} else if (Double.isInfinite$D(p)) {
return C$.normPInf$org_ejml_data_DenseMatrix64F(A);
}if ($I$(5).isVector$org_ejml_data_D1Matrix64F(A)) {
return C$.fastElementP$org_ejml_data_D1Matrix64F$D(A, p);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Doesn\'t support induced norms yet."]);
}}, 1);

Clazz.newMeth(C$, 'normP1$org_ejml_data_DenseMatrix64F', function (A) {
if ($I$(5).isVector$org_ejml_data_D1Matrix64F(A)) {
return $I$(2).elementSumAbs$org_ejml_data_D1Matrix64F(A);
} else {
return C$.inducedP1$org_ejml_data_DenseMatrix64F(A);
}}, 1);

Clazz.newMeth(C$, 'normP2$org_ejml_data_DenseMatrix64F', function (A) {
if ($I$(5).isVector$org_ejml_data_D1Matrix64F(A)) {
return C$.normF$org_ejml_data_D1Matrix64F(A);
} else {
return C$.inducedP2$org_ejml_data_DenseMatrix64F(A);
}}, 1);

Clazz.newMeth(C$, 'fastNormP2$org_ejml_data_DenseMatrix64F', function (A) {
if ($I$(5).isVector$org_ejml_data_D1Matrix64F(A)) {
return C$.fastNormF$org_ejml_data_D1Matrix64F(A);
} else {
return C$.inducedP2$org_ejml_data_DenseMatrix64F(A);
}}, 1);

Clazz.newMeth(C$, 'normPInf$org_ejml_data_DenseMatrix64F', function (A) {
if ($I$(5).isVector$org_ejml_data_D1Matrix64F(A)) {
return $I$(2).elementMaxAbs$org_ejml_data_D1Matrix64F(A);
} else {
return C$.inducedPInf$org_ejml_data_DenseMatrix64F(A);
}}, 1);

Clazz.newMeth(C$, 'inducedP1$org_ejml_data_DenseMatrix64F', function (A) {
var max=0;
var m=A.numRows;
var n=A.numCols;
for (var j=0; j < n; j++) {
var total=0;
for (var i=0; i < m; i++) {
total += Math.abs(A.get$I$I(i, j));
}
if (total > max ) {
max=total;
}}
return max;
}, 1);

Clazz.newMeth(C$, 'inducedP2$org_ejml_data_DenseMatrix64F', function (A) {
var svd=$I$(3).svd$I$I$Z$Z$Z(A.numRows, A.numCols, false, false, true);
if (!svd.decompose$TT(A)) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Decomposition failed"]);
var singularValues=svd.getSingularValues$();
return $I$(6).max$DA$I$I(singularValues, 0, singularValues.length);
}, 1);

Clazz.newMeth(C$, 'inducedPInf$org_ejml_data_DenseMatrix64F', function (A) {
var max=0;
var m=A.numRows;
var n=A.numCols;
for (var i=0; i < m; i++) {
var total=0;
for (var j=0; j < n; j++) {
total += Math.abs(A.get$I$I(i, j));
}
if (total > max ) {
max=total;
}}
return max;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
