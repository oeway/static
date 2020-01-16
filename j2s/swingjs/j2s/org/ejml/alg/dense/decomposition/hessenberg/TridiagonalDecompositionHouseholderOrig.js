(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.hessenberg"),p$1={},I$=[[0,'org.ejml.data.DenseMatrix64F','org.ejml.ops.CommonOps','org.ejml.alg.dense.decomposition.qr.QrHelperFunctions']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TridiagonalDecompositionHouseholderOrig");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['N'],'O',['QT','org.ejml.data.DenseMatrix64F','w','double[]','+gammas','+b']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.N=1;
this.QT=Clazz.new_($I$(1,1).c$$I$I,[this.N, this.N]);
this.w=Clazz.array(Double.TYPE, [this.N]);
this.b=Clazz.array(Double.TYPE, [this.N]);
this.gammas=Clazz.array(Double.TYPE, [this.N]);
}, 1);

Clazz.newMeth(C$, 'getQT$', function () {
return this.QT;
});

Clazz.newMeth(C$, 'getT$org_ejml_data_DenseMatrix64F', function (T) {
if (T == null ) {
T=Clazz.new_($I$(1,1).c$$I$I,[this.N, this.N]);
} else if (this.N != T.numRows || this.N != T.numCols ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The provided H must have the same dimensions as the decomposed matrix."]);
 else T.zero$();
T.data[0]=this.QT.data[0];
T.data[1]=this.QT.data[1];
for (var i=1; i < this.N - 1; i++) {
T.set$I$I$D(i, i, this.QT.get$I$I(i, i));
T.set$I$I$D(i, i + 1, this.QT.get$I$I(i, i + 1));
T.set$I$I$D(i, i - 1, this.QT.get$I$I(i - 1, i));
}
T.data[(this.N - 1) * this.N + this.N - 1]=this.QT.data[(this.N - 1) * this.N + this.N - 1];
T.data[(this.N - 1) * this.N + this.N - 2]=this.QT.data[(this.N - 2) * this.N + this.N - 1];
return T;
});

Clazz.newMeth(C$, 'getQ$org_ejml_data_DenseMatrix64F', function (Q) {
if (Q == null ) {
Q=Clazz.new_($I$(1,1).c$$I$I,[this.N, this.N]);
for (var i=0; i < this.N; i++) {
Q.data[i * this.N + i]=1;
}
} else if (this.N != Q.numRows || this.N != Q.numCols ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The provided H must have the same dimensions as the decomposed matrix."]);
 else $I$(2).setIdentity$org_ejml_data_RowD1Matrix64F(Q);
for (var i=0; i < this.N; i++) this.w[i]=0;

for (var j=this.N - 2; j >= 0; j--) {
this.w[j + 1]=1;
for (var i=j + 2; i < this.N; i++) {
this.w[i]=this.QT.get$I$I(j, i);
}
$I$(3).rank1UpdateMultR$org_ejml_data_DenseMatrix64F$DA$D$I$I$I$DA(Q, this.w, this.gammas[j + 1], j + 1, j + 1, this.N, this.b);
}
return Q;
});

Clazz.newMeth(C$, 'decompose$org_ejml_data_DenseMatrix64F', function (A) {
this.init$org_ejml_data_DenseMatrix64F(A);
for (var k=1; k < this.N; k++) {
p$1.similarTransform$I.apply(this, [k]);
}
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
var tau=0;
for (var i=k; i < this.N; i++) {
var val=t[rowU + i] /= max;
tau += val * val;
}
tau=Math.sqrt(tau);
if (t[rowU + k] < 0 ) tau=-tau;
var nu=t[rowU + k] + tau;
t[rowU + k]=1.0;
for (var i=k + 1; i < this.N; i++) {
t[rowU + i] /= nu;
}
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
for (var j=row; j < this.N; j++) {
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
for (var j=i; j < this.N; j++) {
this.QT.data[j * this.N + i]=this.QT.data[i * this.N + j] += ww * this.QT.data[startU + j] + this.w[j] * uu;
}
}
});

Clazz.newMeth(C$, 'init$org_ejml_data_DenseMatrix64F', function (A) {
if (A.numRows != A.numCols) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Must be square"]);
if (A.numCols != this.N) {
this.N=A.numCols;
this.QT.reshape$I$I$Z(this.N, this.N, false);
if (this.w.length < this.N) {
this.w=Clazz.array(Double.TYPE, [this.N]);
this.gammas=Clazz.array(Double.TYPE, [this.N]);
this.b=Clazz.array(Double.TYPE, [this.N]);
}}this.QT.set$org_ejml_data_D1Matrix64F(A);
});

Clazz.newMeth(C$, 'getGamma$I', function (index) {
return this.gammas[index];
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
