(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.chol"),I$=[[0,'org.ejml.data.DenseMatrix64F']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CholeskyBlockHelper");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['L','org.ejml.data.DenseMatrix64F','el','double[]']]]

Clazz.newMeth(C$, 'c$$I', function (widthMax) {
;C$.$init$.apply(this);
this.L=Clazz.new_($I$(1,1).c$$I$I,[widthMax, widthMax]);
this.el=this.L.data;
}, 1);

Clazz.newMeth(C$, 'decompose$org_ejml_data_DenseMatrix64F$I$I', function (mat, indexStart, n) {
var m=mat.data;
var el_ii;
var div_el_ii=0;
for (var i=0; i < n; i++) {
for (var j=i; j < n; j++) {
var sum=m[indexStart + i * mat.numCols + j];
var iEl=i * n;
var jEl=j * n;
var end=iEl + i;
for (; iEl < end; iEl++, jEl++) {
sum -= this.el[iEl] * this.el[jEl];
}
if (i == j) {
if (sum <= 0.0 ) return false;
el_ii=Math.sqrt(sum);
this.el[i * n + i]=el_ii;
m[indexStart + i * mat.numCols + i]=el_ii;
div_el_ii=1.0 / el_ii;
} else {
var v=sum * div_el_ii;
this.el[j * n + i]=v;
m[indexStart + j * mat.numCols + i]=v;
}}
}
return true;
});

Clazz.newMeth(C$, 'getL$', function () {
return this.L;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
