(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.mult"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "VectorVectorMult");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'mult$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F', function (x, y, A) {
}, 1);

Clazz.newMeth(C$, 'innerProd$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F', function (x, y) {
var m=x.getNumElements$();
var total=0;
for (var i=0; i < m; i++) {
total += x.get$I(i) * y.get$I(i);
}
return total;
}, 1);

Clazz.newMeth(C$, 'innerProdA$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F', function (x, A, y) {
var n=A.numRows;
var m=A.numCols;
if (x.getNumElements$() != n) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected number of elements in x"]);
if (y.getNumElements$() != m) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected number of elements in y"]);
var result=0;
for (var i=0; i < m; i++) {
var total=0;
for (var j=0; j < n; j++) {
total += x.get$I(j) * A.unsafe_get$I$I(j, i);
}
result += total * y.get$I(i);
}
return result;
}, 1);

Clazz.newMeth(C$, 'innerProdTranA$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F', function (x, A, y) {
var n=A.numRows;
if (n != A.numCols) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["A must be square"]);
if (x.getNumElements$() != n) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected number of elements in x"]);
if (y.getNumElements$() != n) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected number of elements in y"]);
var result=0;
for (var i=0; i < n; i++) {
var total=0;
for (var j=0; j < n; j++) {
total += x.get$I(j) * A.unsafe_get$I$I(i, j);
}
result += total * y.get$I(i);
}
return result;
}, 1);

Clazz.newMeth(C$, 'outerProd$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F$org_ejml_data_RowD1Matrix64F', function (x, y, A) {
var m=A.numRows;
var n=A.numCols;
var index=0;
for (var i=0; i < m; i++) {
var xdat=x.get$I(i);
for (var j=0; j < n; j++) {
A.set$I$D(index++, xdat * y.get$I(j));
}
}
}, 1);

Clazz.newMeth(C$, 'addOuterProd$D$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F$org_ejml_data_RowD1Matrix64F', function (gamma, x, y, A) {
var m=A.numRows;
var n=A.numCols;
var index=0;
if (gamma == 1.0 ) {
for (var i=0; i < m; i++) {
var xdat=x.get$I(i);
for (var j=0; j < n; j++) {
A.plus$I$D(index++, xdat * y.get$I(j));
}
}
} else {
for (var i=0; i < m; i++) {
var xdat=x.get$I(i);
for (var j=0; j < n; j++) {
A.plus$I$D(index++, gamma * xdat * y.get$I(j) );
}
}
}}, 1);

Clazz.newMeth(C$, 'householder$D$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F', function (gamma, u, x, y) {
var n=u.getNumElements$();
var sum=0;
for (var i=0; i < n; i++) {
sum += u.get$I(i) * x.get$I(i);
}
for (var i=0; i < n; i++) {
y.set$I$D(i, x.get$I(i) + gamma * u.get$I(i) * sum );
}
}, 1);

Clazz.newMeth(C$, 'rank1Update$D$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F', function (gamma, A, u, w, B) {
var n=u.getNumElements$();
var matrixIndex=0;
for (var i=0; i < n; i++) {
var elementU=u.data[i];
for (var j=0; j < n; j++, matrixIndex++) {
B.data[matrixIndex]=A.data[matrixIndex] + gamma * elementU * w.data[j] ;
}
}
}, 1);

Clazz.newMeth(C$, 'rank1Update$D$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F', function (gamma, A, u, w) {
var n=u.getNumElements$();
var matrixIndex=0;
for (var i=0; i < n; i++) {
var elementU=u.data[i];
for (var j=0; j < n; j++) {
A.data[matrixIndex++] += gamma * elementU * w.data[j] ;
}
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
