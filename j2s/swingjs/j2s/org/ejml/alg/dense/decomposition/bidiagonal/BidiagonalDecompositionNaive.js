(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.bidiagonal"),p$1={},I$=[[0,'org.ejml.simple.SimpleMatrix','org.ejml.data.DenseMatrix64F','org.ejml.ops.SpecializedOps']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BidiagonalDecompositionNaive");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['m','n','min'],'O',['U','org.ejml.simple.SimpleMatrix','+B','+V','u','org.ejml.data.DenseMatrix64F']]]

Clazz.newMeth(C$, 'getU$', function () {
return this.U;
});

Clazz.newMeth(C$, 'getB$', function () {
return this.B;
});

Clazz.newMeth(C$, 'getV$', function () {
return this.V;
});

Clazz.newMeth(C$, 'decompose$org_ejml_data_DenseMatrix64F', function (A) {
this.init$org_ejml_data_DenseMatrix64F(A);
return p$1._decompose.apply(this, []);
});

Clazz.newMeth(C$, 'init$org_ejml_data_DenseMatrix64F', function (A) {
this.m=A.numRows;
this.n=A.numCols;
this.min=Math.min(this.m, this.n);
this.U=$I$(1).identity$I(this.m);
this.B=Clazz.new_($I$(1,1).c$$org_ejml_data_DenseMatrix64F,[A]);
this.V=$I$(1).identity$I(this.n);
var max=Math.max(this.m, this.n);
this.u=Clazz.new_($I$(2,1).c$$I$I,[max, 1]);
});

Clazz.newMeth(C$, '_decompose', function () {
for (var k=0; k < this.min; k++) {
this.computeU$I(k);
this.computeV$I(k);
}
return true;
}, p$1);

Clazz.newMeth(C$, 'computeU$I', function (k) {
this.u.reshape$I$I$Z(this.m, 1, false);
var u=this.u.data;
var max=0;
for (var i=k; i < this.m; i++) {
var val=u[i]=this.B.get$I$I(i, k);
val=Math.abs(val);
if (val > max ) max=val;
}
if (max > 0 ) {
var tau=0;
for (var i=k; i < this.m; i++) {
var val=u[i] /= max;
tau += val * val;
}
tau=Math.sqrt(tau);
if (u[k] < 0 ) tau=-tau;
var nu=u[k] + tau;
u[k]=1.0;
for (var i=k + 1; i < this.m; i++) {
u[i] /= nu;
}
var Q_k=$I$(1).wrap$org_ejml_data_DenseMatrix64F($I$(3).createReflector$org_ejml_data_DenseMatrix64F$D(this.u, nu / tau));
this.U=this.U.mult$TT(Q_k);
this.B=Q_k.mult$TT(this.B);
}});

Clazz.newMeth(C$, 'computeV$I', function (k) {
this.u.reshape$I$I$Z(this.n, 1, false);
this.u.zero$();
var u=this.u.data;
var max=0;
for (var i=k + 1; i < this.n; i++) {
var val=u[i]=this.B.get$I$I(k, i);
val=Math.abs(val);
if (val > max ) max=val;
}
if (max > 0 ) {
var tau=0;
for (var i=k + 1; i < this.n; i++) {
var val=u[i] /= max;
tau += val * val;
}
tau=Math.sqrt(tau);
if (u[k + 1] < 0 ) tau=-tau;
var nu=u[k + 1] + tau;
u[k + 1]=1.0;
for (var i=k + 2; i < this.n; i++) {
u[i] /= nu;
}
var Q_k=$I$(1).wrap$org_ejml_data_DenseMatrix64F($I$(3).createReflector$org_ejml_data_DenseMatrix64F$D(this.u, nu / tau));
this.V=this.V.mult$TT(Q_k);
this.B=this.B.mult$TT(Q_k);
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
