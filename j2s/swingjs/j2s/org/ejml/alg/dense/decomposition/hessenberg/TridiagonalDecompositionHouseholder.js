(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.hessenberg"),p$1={},I$=[[0,'org.ejml.data.DenseMatrix64F','org.ejml.ops.CommonOps','org.ejml.alg.dense.decomposition.qr.QrHelperFunctions']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TridiagonalDecompositionHouseholder", null, null, 'org.ejml.alg.dense.decomposition.hessenberg.TridiagonalSimilarDecomposition');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['N'],'O',['QT','org.ejml.data.DenseMatrix64F','w','double[]','+gammas','+b']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.N=1;
this.w=Clazz.array(Double.TYPE, [this.N]);
this.b=Clazz.array(Double.TYPE, [this.N]);
this.gammas=Clazz.array(Double.TYPE, [this.N]);
}, 1);

Clazz.newMeth(C$, 'getQT$', function () {
return this.QT;
});

Clazz.newMeth(C$, 'getDiagonal$DA$DA', function (diag, off) {
for (var i=0; i < this.N; i++) {
diag[i]=this.QT.data[i * this.N + i];
if (i + 1 < this.N) {
off[i]=this.QT.data[i * this.N + i + 1];
}}
});

Clazz.newMeth(C$, ['getT$org_ejml_data_DenseMatrix64F','getT$TMatrixType'], function (T) {
if (T == null ) {
T=Clazz.new_($I$(1,1).c$$I$I,[this.N, this.N]);
} else if (this.N != T.numRows || this.N != T.numCols ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The provided H must have the same dimensions as the decomposed matrix."]);
 else T.zero$();
T.data[0]=this.QT.data[0];
for (var i=1; i < this.N; i++) {
T.set$I$I$D(i, i, this.QT.get$I$I(i, i));
var a=this.QT.get$I$I(i - 1, i);
T.set$I$I$D(i - 1, i, a);
T.set$I$I$D(i, i - 1, a);
}
if (this.N > 1) {
T.data[(this.N - 1) * this.N + this.N - 1]=this.QT.data[(this.N - 1) * this.N + this.N - 1];
T.data[(this.N - 1) * this.N + this.N - 2]=this.QT.data[(this.N - 2) * this.N + this.N - 1];
}return T;
});

Clazz.newMeth(C$, ['getQ$org_ejml_data_DenseMatrix64F$Z','getQ$TMatrixType$Z'], function (Q, transposed) {
if (Q == null ) {
Q=$I$(2).identity$I(this.N);
} else if (this.N != Q.numRows || this.N != Q.numCols ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The provided H must have the same dimensions as the decomposed matrix."]);
 else $I$(2).setIdentity$org_ejml_data_RowD1Matrix64F(Q);
for (var i=0; i < this.N; i++) this.w[i]=0;

if (transposed) {
for (var j=this.N - 2; j >= 0; j--) {
this.w[j + 1]=1;
for (var i=j + 2; i < this.N; i++) {
this.w[i]=this.QT.data[j * this.N + i];
}
$I$(3).rank1UpdateMultL$org_ejml_data_DenseMatrix64F$DA$D$I$I$I(Q, this.w, this.gammas[j + 1], j + 1, j + 1, this.N);
}
} else {
for (var j=this.N - 2; j >= 0; j--) {
this.w[j + 1]=1;
for (var i=j + 2; i < this.N; i++) {
this.w[i]=this.QT.get$I$I(j, i);
}
$I$(3).rank1UpdateMultR$org_ejml_data_DenseMatrix64F$DA$D$I$I$I$DA(Q, this.w, this.gammas[j + 1], j + 1, j + 1, this.N, this.b);
}
}return Q;
});

Clazz.newMeth(C$, ['decompose$org_ejml_data_DenseMatrix64F','decompose$TT'], function (A) {
this.init$org_ejml_data_DenseMatrix64F(A);
for (var k=1; k < this.N; k++) {
p$1.similarTransform$I.apply(this, [k]);
}
return true;
});

Clazz.newMeth(C$, 'similarTransform$I', function (k) {
var t=this.QT.data;
var max=0;
var rowU=(k - 1) * this.N;
for (var i=k; i < this.N; i++) {
var val=Math.abs(t[rowU + i]);
if (val > max ) max=val;
}
if (max > 0 ) {
var tau=$I$(3).computeTauAndDivide$I$I$DA$I$D(k, this.N, t, rowU, max);
var nu=t[rowU + k] + tau;
$I$(3).divideElements$I$I$DA$I$D(k + 1, this.N, t, rowU, nu);
t[rowU + k]=1.0;
var gamma=nu / tau;
this.gammas[k]=gamma;
this.householderSymmetric$I$D(k, gamma);
t[rowU + k]=-tau * max;
} else {
this.gammas[k]=0;
}}, p$1);

Clazz.newMeth(C$, 'householderSymmetric$I$D', function (row, gamma) {
var startU=(row - 1) * this.N;
for (var i=row; i < this.N; i++) {
var total=0;
for (var j=row; j < i; j++) {
total += this.QT.data[j * this.N + i] * this.QT.data[startU + j];
}
for (var j=i; j < this.N; j++) {
total += this.QT.data[i * this.N + j] * this.QT.data[startU + j];
}
this.w[i]=-gamma * total;
}
var alpha=0;
for (var i=row; i < this.N; i++) {
alpha += this.QT.data[startU + i] * this.w[i];
}
alpha *= -0.5 * gamma;
for (var i=row; i < this.N; i++) {
this.w[i] += alpha * this.QT.data[startU + i];
}
for (var i=row; i < this.N; i++) {
var ww=this.w[i];
var uu=this.QT.data[startU + i];
var rowA=i * this.N;
for (var j=i; j < this.N; j++) {
this.QT.data[rowA + j] += ww * this.QT.data[startU + j] + this.w[j] * uu;
}
}
});

Clazz.newMeth(C$, 'init$org_ejml_data_DenseMatrix64F', function (A) {
if (A.numRows != A.numCols) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Must be square"]);
if (A.numCols != this.N) {
this.N=A.numCols;
if (this.w.length < this.N) {
this.w=Clazz.array(Double.TYPE, [this.N]);
this.gammas=Clazz.array(Double.TYPE, [this.N]);
this.b=Clazz.array(Double.TYPE, [this.N]);
}}this.QT=A;
});

Clazz.newMeth(C$, 'inputModified$', function () {
return true;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
