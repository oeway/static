(function(){var P$=Clazz.newPackage("org.ejml.ops"),I$=[[0,'org.ejml.data.DenseMatrix64F','org.ejml.ops.NormOps','org.ejml.alg.dense.mult.VectorVectorMult','org.ejml.ops.CommonOps','org.ejml.alg.dense.mult.SubmatrixOps']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RandomMatrices");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'createSpan$I$I$java_util_Random', function (dimen, numVectors, rand) {
if (dimen < numVectors) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The number of vectors must be less than or equal to the dimension"]);
var u=Clazz.array($I$(1), [numVectors]);
u[0]=C$.createRandom$I$I$D$D$java_util_Random(dimen, 1, -1, 1, rand);
$I$(2).normalizeF$org_ejml_data_DenseMatrix64F(u[0]);
for (var i=1; i < numVectors; i++) {
var a=Clazz.new_($I$(1,1).c$$I$I,[dimen, 1]);
var r=null;
for (var j=0; j < i; j++) {
if (j == 0) r=C$.createRandom$I$I$D$D$java_util_Random(dimen, 1, -1, 1, rand);
a.set$org_ejml_data_D1Matrix64F(r);
$I$(3).householder$D$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F(-2.0, u[j], r, a);
$I$(4).add$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F(r, a, a);
$I$(4).scale$D$org_ejml_data_D1Matrix64F(0.5, a);
var t=a;
a=r;
r=t;
var val=$I$(2).normF$org_ejml_data_D1Matrix64F(r);
if (val == 0  || Double.isNaN$D(val)  || Double.isInfinite$D(val) ) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Failed sanity check"]);
$I$(4).divide$D$org_ejml_data_D1Matrix64F(val, r);
}
u[i]=r;
}
return u;
}, 1);

Clazz.newMeth(C$, 'createInSpan$org_ejml_data_DenseMatrix64FA$D$D$java_util_Random', function (span, min, max, rand) {
var A=Clazz.new_($I$(1,1).c$$I$I,[span.length, 1]);
var B=Clazz.new_($I$(1,1).c$$I$I,[span[0].getNumElements$(), 1]);
for (var i=0; i < span.length; i++) {
B.set$org_ejml_data_D1Matrix64F(span[i]);
var val=rand.nextDouble$() * (max - min) + min;
$I$(4).scale$D$org_ejml_data_D1Matrix64F(val, B);
$I$(4).add$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F(A, B, A);
}
return A;
}, 1);

Clazz.newMeth(C$, 'createOrthogonal$I$I$java_util_Random', function (numRows, numCols, rand) {
if (numRows < numCols) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The number of rows must be more than or equal to the number of columns"]);
}var u=C$.createSpan$I$I$java_util_Random(numRows, numCols, rand);
var ret=Clazz.new_($I$(1,1).c$$I$I,[numRows, numCols]);
for (var i=0; i < numCols; i++) {
$I$(5).setSubMatrix$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$I$I$I$I$I$I(u[i], ret, 0, 0, 0, i, numRows, 1);
}
return ret;
}, 1);

Clazz.newMeth(C$, 'createDiagonal$I$D$D$java_util_Random', function (N, min, max, rand) {
return C$.createDiagonal$I$I$D$D$java_util_Random(N, N, min, max, rand);
}, 1);

Clazz.newMeth(C$, 'createDiagonal$I$I$D$D$java_util_Random', function (numRows, numCols, min, max, rand) {
if (max < min ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The max must be >= the min"]);
var ret=Clazz.new_($I$(1,1).c$$I$I,[numRows, numCols]);
var N=Math.min(numRows, numCols);
var r=max - min;
for (var i=0; i < N; i++) {
ret.set$I$I$D(i, i, rand.nextDouble$() * r + min);
}
return ret;
}, 1);

Clazz.newMeth(C$, 'createSingularValues$I$I$java_util_Random$DA', function (numRows, numCols, rand, sv) {
var U=C$.createOrthogonal$I$I$java_util_Random(numRows, numRows, rand);
var V=C$.createOrthogonal$I$I$java_util_Random(numCols, numCols, rand);
var S=Clazz.new_($I$(1,1).c$$I$I,[numRows, numCols]);
var min=Math.min(numRows, numCols);
min=Math.min(min, sv.length);
for (var i=0; i < min; i++) {
S.set$I$I$D(i, i, sv[i]);
}
var tmp=Clazz.new_($I$(1,1).c$$I$I,[numRows, numCols]);
$I$(4).mult$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(U, S, tmp);
$I$(4).multTransB$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(tmp, V, S);
return S;
}, 1);

Clazz.newMeth(C$, 'createEigenvaluesSymm$I$java_util_Random$DA', function (num, rand, eigenvalues) {
var V=C$.createOrthogonal$I$I$java_util_Random(num, num, rand);
var D=$I$(4).diag$DA(eigenvalues);
var temp=Clazz.new_($I$(1,1).c$$I$I,[num, num]);
$I$(4).mult$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(V, D, temp);
$I$(4).multTransB$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(temp, V, D);
return D;
}, 1);

Clazz.newMeth(C$, 'createRandom$I$I$java_util_Random', function (numRow, numCol, rand) {
var mat=Clazz.new_($I$(1,1).c$$I$I,[numRow, numCol]);
C$.setRandom$org_ejml_data_D1Matrix64F$D$D$java_util_Random(mat, 0, 1, rand);
return mat;
}, 1);

Clazz.newMeth(C$, 'addRandom$org_ejml_data_DenseMatrix64F$D$D$java_util_Random', function (A, min, max, rand) {
var d=A.getData$();
var size=A.getNumElements$();
var r=max - min;
for (var i=0; i < size; i++) {
d[i] += r * rand.nextDouble$() + min;
}
}, 1);

Clazz.newMeth(C$, 'createRandom$I$I$D$D$java_util_Random', function (numRow, numCol, min, max, rand) {
var mat=Clazz.new_($I$(1,1).c$$I$I,[numRow, numCol]);
C$.setRandom$org_ejml_data_D1Matrix64F$D$D$java_util_Random(mat, min, max, rand);
return mat;
}, 1);

Clazz.newMeth(C$, 'setRandom$org_ejml_data_DenseMatrix64F$java_util_Random', function (mat, rand) {
C$.setRandom$org_ejml_data_D1Matrix64F$D$D$java_util_Random(mat, 0, 1, rand);
}, 1);

Clazz.newMeth(C$, 'setRandom$org_ejml_data_D1Matrix64F$D$D$java_util_Random', function (mat, min, max, rand) {
var d=mat.getData$();
var size=mat.getNumElements$();
var r=max - min;
for (var i=0; i < size; i++) {
d[i]=r * rand.nextDouble$() + min;
}
}, 1);

Clazz.newMeth(C$, 'createSymmPosDef$I$java_util_Random', function (width, rand) {
var a=Clazz.new_($I$(1,1).c$$I$I,[width, 1]);
var b=Clazz.new_($I$(1,1).c$$I$I,[width, width]);
for (var i=0; i < width; i++) {
a.set$I$I$D(i, 0, rand.nextDouble$());
}
$I$(4).multTransB$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F(a, a, b);
for (var i=0; i < width; i++) {
b.add$I$I$D(i, i, 1);
}
return b;
}, 1);

Clazz.newMeth(C$, 'createSymmetric$I$D$D$java_util_Random', function (length, min, max, rand) {
var A=Clazz.new_($I$(1,1).c$$I$I,[length, length]);
C$.createSymmetric$org_ejml_data_DenseMatrix64F$D$D$java_util_Random(A, min, max, rand);
return A;
}, 1);

Clazz.newMeth(C$, 'createSymmetric$org_ejml_data_DenseMatrix64F$D$D$java_util_Random', function (A, min, max, rand) {
if (A.numRows != A.numCols) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["A must be a square matrix"]);
var range=max - min;
var length=A.numRows;
for (var i=0; i < length; i++) {
for (var j=i; j < length; j++) {
var val=rand.nextDouble$() * range + min;
A.set$I$I$D(i, j, val);
A.set$I$I$D(j, i, val);
}
}
}, 1);

Clazz.newMeth(C$, 'createUpperTriangle$I$I$D$D$java_util_Random', function (dimen, hessenberg, min, max, rand) {
if (hessenberg < 0) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["hessenberg must be more than or equal to 0"]);
var range=max - min;
var A=Clazz.new_($I$(1,1).c$$I$I,[dimen, dimen]);
for (var i=0; i < dimen; i++) {
var start=i <= hessenberg ? 0 : i - hessenberg;
for (var j=start; j < dimen; j++) {
A.set$I$I$D(i, j, rand.nextDouble$() * range + min);
}
}
return A;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
