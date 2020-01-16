(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.bidiagonal"),p$1={},I$=[[0,'org.ejml.data.DenseMatrix64F','org.ejml.ops.CommonOps','org.ejml.alg.dense.decomposition.qr.QrHelperFunctions']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BidiagonalDecompositionRow", null, null, 'org.ejml.alg.dense.decomposition.bidiagonal.BidiagonalDecomposition');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['m','n','min'],'O',['UBV','org.ejml.data.DenseMatrix64F','gammasU','double[]','+gammasV','+b','+u']]]

Clazz.newMeth(C$, 'c$$I', function (numElements) {
;C$.$init$.apply(this);
this.UBV=Clazz.new_($I$(1,1).c$$I,[numElements]);
this.gammasU=Clazz.array(Double.TYPE, [numElements]);
this.gammasV=Clazz.array(Double.TYPE, [numElements]);
this.b=Clazz.array(Double.TYPE, [numElements]);
this.u=Clazz.array(Double.TYPE, [numElements]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$I.apply(this, [1]);
}, 1);

Clazz.newMeth(C$, ['decompose$org_ejml_data_DenseMatrix64F','decompose$TT'], function (A) {
this.init$org_ejml_data_DenseMatrix64F(A);
return p$1._decompose.apply(this, []);
});

Clazz.newMeth(C$, 'init$org_ejml_data_DenseMatrix64F', function (A) {
this.UBV=A;
this.m=this.UBV.numRows;
this.n=this.UBV.numCols;
this.min=Math.min(this.m, this.n);
var max=Math.max(this.m, this.n);
if (this.b.length < max + 1) {
this.b=Clazz.array(Double.TYPE, [max + 1]);
this.u=Clazz.array(Double.TYPE, [max + 1]);
}if (this.gammasU.length < this.m) {
this.gammasU=Clazz.array(Double.TYPE, [this.m]);
}if (this.gammasV.length < this.n) {
this.gammasV=Clazz.array(Double.TYPE, [this.n]);
}});

Clazz.newMeth(C$, 'getUBV$', function () {
return this.UBV;
});

Clazz.newMeth(C$, 'getDiagonal$DA$DA', function (diag, off) {
diag[0]=this.UBV.get$I(0);
for (var i=1; i < this.n; i++) {
diag[i]=this.UBV.unsafe_get$I$I(i, i);
off[i - 1]=this.UBV.unsafe_get$I$I(i - 1, i);
}
});

Clazz.newMeth(C$, ['getB$org_ejml_data_DenseMatrix64F$Z','getB$TT$Z'], function (B, compact) {
B=C$.handleB$org_ejml_data_DenseMatrix64F$Z$I$I$I(B, compact, this.m, this.n, this.min);
B.set$I$I$D(0, 0, this.UBV.get$I$I(0, 0));
for (var i=1; i < this.min; i++) {
B.set$I$I$D(i, i, this.UBV.get$I$I(i, i));
B.set$I$I$D(i - 1, i, this.UBV.get$I$I(i - 1, i));
}
if (this.n > this.m) B.set$I$I$D(this.min - 1, this.min, this.UBV.get$I$I(this.min - 1, this.min));
return B;
});

Clazz.newMeth(C$, 'handleB$org_ejml_data_DenseMatrix64F$Z$I$I$I', function (B, compact, m, n, min) {
var w=n > m ? min + 1 : min;
if (compact) {
if (B == null ) {
B=Clazz.new_($I$(1,1).c$$I$I,[min, w]);
} else {
B.reshape$I$I$Z(min, w, false);
B.zero$();
}} else {
if (B == null ) {
B=Clazz.new_($I$(1,1).c$$I$I,[m, n]);
} else {
B.reshape$I$I$Z(m, n, false);
B.zero$();
}}return B;
}, 1);

Clazz.newMeth(C$, ['getU$org_ejml_data_DenseMatrix64F$Z$Z','getU$TT$Z$Z'], function (U, transpose, compact) {
U=C$.handleU$org_ejml_data_DenseMatrix64F$Z$Z$I$I$I(U, transpose, compact, this.m, this.n, this.min);
$I$(2).setIdentity$org_ejml_data_RowD1Matrix64F(U);
for (var i=0; i < this.m; i++) this.u[i]=0;

for (var j=this.min - 1; j >= 0; j--) {
this.u[j]=1;
for (var i=j + 1; i < this.m; i++) {
this.u[i]=this.UBV.get$I$I(i, j);
}
if (transpose) $I$(3).rank1UpdateMultL$org_ejml_data_DenseMatrix64F$DA$D$I$I$I(U, this.u, this.gammasU[j], j, j, this.m);
 else $I$(3).rank1UpdateMultR$org_ejml_data_DenseMatrix64F$DA$D$I$I$I$DA(U, this.u, this.gammasU[j], j, j, this.m, this.b);
}
return U;
});

Clazz.newMeth(C$, 'handleU$org_ejml_data_DenseMatrix64F$Z$Z$I$I$I', function (U, transpose, compact, m, n, min) {
if (compact) {
if (transpose) {
if (U == null ) U=Clazz.new_($I$(1,1).c$$I$I,[min, m]);
 else {
U.reshape$I$I$Z(min, m, false);
}} else {
if (U == null ) U=Clazz.new_($I$(1,1).c$$I$I,[m, min]);
 else U.reshape$I$I$Z(m, min, false);
}} else {
if (U == null ) U=Clazz.new_($I$(1,1).c$$I$I,[m, m]);
 else U.reshape$I$I$Z(m, m, false);
}return U;
}, 1);

Clazz.newMeth(C$, ['getV$org_ejml_data_DenseMatrix64F$Z$Z','getV$TT$Z$Z'], function (V, transpose, compact) {
V=C$.handleV$org_ejml_data_DenseMatrix64F$Z$Z$I$I$I(V, transpose, compact, this.m, this.n, this.min);
$I$(2).setIdentity$org_ejml_data_RowD1Matrix64F(V);
for (var j=this.min - 1; j >= 0; j--) {
this.u[j + 1]=1;
for (var i=j + 2; i < this.n; i++) {
this.u[i]=this.UBV.get$I$I(j, i);
}
if (transpose) $I$(3).rank1UpdateMultL$org_ejml_data_DenseMatrix64F$DA$D$I$I$I(V, this.u, this.gammasV[j], j + 1, j + 1, this.n);
 else $I$(3).rank1UpdateMultR$org_ejml_data_DenseMatrix64F$DA$D$I$I$I$DA(V, this.u, this.gammasV[j], j + 1, j + 1, this.n, this.b);
}
return V;
});

Clazz.newMeth(C$, 'handleV$org_ejml_data_DenseMatrix64F$Z$Z$I$I$I', function (V, transpose, compact, m, n, min) {
var w=n > m ? min + 1 : min;
if (compact) {
if (transpose) {
if (V == null ) {
V=Clazz.new_($I$(1,1).c$$I$I,[w, n]);
} else V.reshape$I$I$Z(w, n, false);
} else {
if (V == null ) {
V=Clazz.new_($I$(1,1).c$$I$I,[n, w]);
} else V.reshape$I$I$Z(n, w, false);
}} else {
if (V == null ) {
V=Clazz.new_($I$(1,1).c$$I$I,[n, n]);
} else V.reshape$I$I$Z(n, n, false);
}return V;
}, 1);

Clazz.newMeth(C$, '_decompose', function () {
for (var k=0; k < this.min; k++) {
this.computeU$I(k);
this.computeV$I(k);
}
return true;
}, p$1);

Clazz.newMeth(C$, 'computeU$I', function (k) {
var b=this.UBV.data;
var max=0;
for (var i=k; i < this.m; i++) {
var val=this.u[i]=b[i * this.n + k];
val=Math.abs(val);
if (val > max ) max=val;
}
if (max > 0 ) {
var tau=$I$(3).computeTauAndDivide$I$I$DA$D(k, this.m, this.u, max);
var nu=this.u[k] + tau;
$I$(3).divideElements_Bcol$I$I$I$DA$DA$I$D(k + 1, this.m, this.n, this.u, b, k, nu);
this.u[k]=1.0;
var gamma=nu / tau;
this.gammasU[k]=gamma;
$I$(3).rank1UpdateMultR$org_ejml_data_DenseMatrix64F$DA$D$I$I$I$DA(this.UBV, this.u, gamma, k + 1, k, this.m, this.b);
b[k * this.n + k]=-tau * max;
} else {
this.gammasU[k]=0;
}});

Clazz.newMeth(C$, 'computeV$I', function (k) {
var b=this.UBV.data;
var row=k * this.n;
var max=$I$(3).findMax$DA$I$I(b, row + k + 1 , this.n - k - 1 );
if (max > 0 ) {
var tau=$I$(3).computeTauAndDivide$I$I$DA$I$D(k + 1, this.n, b, row, max);
var nu=b[row + k + 1 ] + tau;
$I$(3).divideElements_Brow$I$I$DA$DA$I$D(k + 2, this.n, this.u, b, row, nu);
this.u[k + 1]=1.0;
var gamma=nu / tau;
this.gammasV[k]=gamma;
$I$(3).rank1UpdateMultL$org_ejml_data_DenseMatrix64F$DA$D$I$I$I(this.UBV, this.u, gamma, k + 1, k + 1, this.n);
b[row + k + 1 ]=-tau * max;
} else {
this.gammasV[k]=0;
}});

Clazz.newMeth(C$, 'getGammasU$', function () {
return this.gammasU;
});

Clazz.newMeth(C$, 'getGammasV$', function () {
return this.gammasV;
});

Clazz.newMeth(C$, 'inputModified$', function () {
return true;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
