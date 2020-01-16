(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.misc"),I$=[[0,'org.ejml.alg.dense.misc.PermuteArray','org.ejml.alg.dense.misc.UnrolledDeterminantFromMinor','org.ejml.data.DenseMatrix64F']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "NaiveDeterminant");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'leibniz$org_ejml_data_DenseMatrix64F', function (mat) {
var perm=Clazz.new_($I$(1,1).c$$I,[mat.numCols]);
var total=0;
var p=perm.next$();
while (p != null ){
var prod=1;
for (var i=0; i < mat.numRows; i++) {
prod *= mat.get$I$I(i, p[i]);
}
total += perm.sgn$() * prod;
p=perm.next$();
}
return total;
}, 1);

Clazz.newMeth(C$, 'recursive$org_ejml_data_DenseMatrix64F', function (mat) {
if (mat.numRows == 1) {
return mat.get$I(0);
} else if (mat.numRows == 2) {
return mat.get$I(0) * mat.get$I(3) - mat.get$I(1) * mat.get$I(2);
} else if (mat.numRows == 3) {
return $I$(2).det3$org_ejml_data_RowD1Matrix64F(mat);
}var result=0;
for (var i=0; i < mat.numRows; i++) {
var minorMat=Clazz.new_($I$(3,1).c$$I$I,[mat.numRows - 1, mat.numRows - 1]);
for (var j=1; j < mat.numRows; j++) {
for (var k=0; k < mat.numRows; k++) {
if (k < i) {
minorMat.set$I$I$D(j - 1, k, mat.get$I$I(j, k));
} else if (k > i) {
minorMat.set$I$I$D(j - 1, k - 1, mat.get$I$I(j, k));
}}
}
if (i % 2 == 0) result += mat.get$I$I(0, i) * C$.recursive$org_ejml_data_DenseMatrix64F(minorMat);
 else result -= mat.get$I$I(0, i) * C$.recursive$org_ejml_data_DenseMatrix64F(minorMat);
}
return result;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
