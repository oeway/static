(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.lu"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "LUDecompositionAlt", null, 'org.ejml.alg.dense.decomposition.lu.LUDecompositionBase');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['decompose$org_ejml_data_DenseMatrix64F','decompose$TT'], function (a) {
this.decomposeCommonInit$org_ejml_data_DenseMatrix64F(a);
var LUcolj=this.vv;
for (var j=0; j < this.n; j++) {
for (var i=0; i < this.m; i++) {
LUcolj[i]=this.dataLU[i * this.n + j];
}
for (var i=0; i < this.m; i++) {
var rowIndex=i * this.n;
var kmax=i < j ? i : j;
var s=0.0;
for (var k=0; k < kmax; k++) {
s += this.dataLU[rowIndex + k] * LUcolj[k];
}
this.dataLU[rowIndex + j]=LUcolj[i] -= s;
}
var p=j;
var max=Math.abs(LUcolj[p]);
for (var i=j + 1; i < this.m; i++) {
var v=Math.abs(LUcolj[i]);
if (v > max ) {
p=i;
max=v;
}}
if (p != j) {
var rowP=p * this.n;
var rowJ=j * this.n;
var endP=rowP + this.n;
for (; rowP < endP; rowP++, rowJ++) {
var t=this.dataLU[rowP];
this.dataLU[rowP]=this.dataLU[rowJ];
this.dataLU[rowJ]=t;
}
var k=this.pivot[p];
this.pivot[p]=this.pivot[j];
this.pivot[j]=k;
this.pivsign=-this.pivsign;
}this.indx[j]=p;
if (j < this.m) {
var lujj=this.dataLU[j * this.n + j];
if (lujj != 0 ) {
for (var i=j + 1; i < this.m; i++) {
this.dataLU[i * this.n + j] /= lujj;
}
}}}
return true;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
