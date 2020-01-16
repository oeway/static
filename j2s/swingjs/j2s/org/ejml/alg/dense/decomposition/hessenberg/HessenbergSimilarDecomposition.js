(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.hessenberg"),p$1={},I$=[[0,'org.ejml.data.DenseMatrix64F','org.ejml.ops.CommonOps','org.ejml.alg.dense.decomposition.qr.QrHelperFunctions']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "HessenbergSimilarDecomposition", null, null, 'org.ejml.factory.DecompositionInterface');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['N'],'O',['QH','org.ejml.data.DenseMatrix64F','gammas','double[]','+b','+u']]]

Clazz.newMeth(C$, 'c$$I', function (initialSize) {
;C$.$init$.apply(this);
this.gammas=Clazz.array(Double.TYPE, [initialSize]);
this.b=Clazz.array(Double.TYPE, [initialSize]);
this.u=Clazz.array(Double.TYPE, [initialSize]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$I.apply(this, [5]);
}, 1);

Clazz.newMeth(C$, ['decompose$org_ejml_data_DenseMatrix64F','decompose$TT'], function (A) {
if (A.numRows != A.numCols) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["A must be square."]);
this.QH=A;
this.N=A.numCols;
if (this.b.length < this.N) {
this.b=Clazz.array(Double.TYPE, [this.N]);
this.gammas=Clazz.array(Double.TYPE, [this.N]);
this.u=Clazz.array(Double.TYPE, [this.N]);
}return p$1._decompose.apply(this, []);
});

Clazz.newMeth(C$, 'inputModified$', function () {
return true;
});

Clazz.newMeth(C$, 'getQH$', function () {
return this.QH;
});

Clazz.newMeth(C$, 'getH$org_ejml_data_DenseMatrix64F', function (H) {
if (H == null ) {
H=Clazz.new_($I$(1,1).c$$I$I,[this.N, this.N]);
} else if (this.N != H.numRows || this.N != H.numCols ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The provided H must have the same dimensions as the decomposed matrix."]);
 else H.zero$();
System.arraycopy$O$I$O$I$I(this.QH.data, 0, H.data, 0, this.N);
for (var i=1; i < this.N; i++) {
for (var j=i - 1; j < this.N; j++) {
H.set$I$I$D(i, j, this.QH.get$I$I(i, j));
}
}
return H;
});

Clazz.newMeth(C$, 'getQ$org_ejml_data_DenseMatrix64F', function (Q) {
if (Q == null ) {
Q=Clazz.new_($I$(1,1).c$$I$I,[this.N, this.N]);
for (var i=0; i < this.N; i++) {
Q.data[i * this.N + i]=1;
}
} else if (this.N != Q.numRows || this.N != Q.numCols ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The provided H must have the same dimensions as the decomposed matrix."]);
 else $I$(2).setIdentity$org_ejml_data_RowD1Matrix64F(Q);
for (var j=this.N - 2; j >= 0; j--) {
this.u[j + 1]=1;
for (var i=j + 2; i < this.N; i++) {
this.u[i]=this.QH.get$I$I(i, j);
}
$I$(3).rank1UpdateMultR$org_ejml_data_DenseMatrix64F$DA$D$I$I$I$DA(Q, this.u, this.gammas[j], j + 1, j + 1, this.N, this.b);
}
return Q;
});

Clazz.newMeth(C$, '_decompose', function () {
var h=this.QH.data;
for (var k=0; k < this.N - 2; k++) {
var max=0;
for (var i=k + 1; i < this.N; i++) {
var val=this.u[i]=h[i * this.N + k];
val=Math.abs(val);
if (val > max ) max=val;
}
if (max > 0 ) {
var tau=0;
for (var i=k + 1; i < this.N; i++) {
var val=this.u[i] /= max;
tau += val * val;
}
tau=Math.sqrt(tau);
if (this.u[k + 1] < 0 ) tau=-tau;
var nu=this.u[k + 1] + tau;
this.u[k + 1]=1.0;
for (var i=k + 2; i < this.N; i++) {
h[i * this.N + k]=this.u[i] /= nu;
}
var gamma=nu / tau;
this.gammas[k]=gamma;
$I$(3).rank1UpdateMultR$org_ejml_data_DenseMatrix64F$DA$D$I$I$I$DA(this.QH, this.u, gamma, k + 1, k + 1, this.N, this.b);
$I$(3).rank1UpdateMultL$org_ejml_data_DenseMatrix64F$DA$D$I$I$I(this.QH, this.u, gamma, 0, k + 1, this.N);
h[(k + 1) * this.N + k]=-tau * max;
} else {
this.gammas[k]=0;
}}
return true;
}, p$1);

Clazz.newMeth(C$, 'getGammas$', function () {
return this.gammas;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
