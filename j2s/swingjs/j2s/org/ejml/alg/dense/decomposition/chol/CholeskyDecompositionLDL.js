(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.chol"),I$=[[0,'org.ejml.data.DenseMatrix64F']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CholeskyDecompositionLDL", null, null, 'org.ejml.factory.DecompositionInterface');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['maxWidth','n'],'O',['L','org.ejml.data.DenseMatrix64F','el','double[]','+d','+vv']]]

Clazz.newMeth(C$, 'setExpectedMaxSize$I$I', function (numRows, numCols) {
if (numRows != numCols) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can only decompose square matrices"]);
}this.maxWidth=numRows;
this.L=Clazz.new_($I$(1,1).c$$I$I,[this.maxWidth, this.maxWidth]);
this.el=this.L.data;
this.vv=Clazz.array(Double.TYPE, [this.maxWidth]);
this.d=Clazz.array(Double.TYPE, [this.maxWidth]);
});

Clazz.newMeth(C$, ['decompose$org_ejml_data_DenseMatrix64F','decompose$TT'], function (mat) {
if (mat.numRows > this.maxWidth) {
this.setExpectedMaxSize$I$I(mat.numRows, mat.numCols);
} else if (mat.numRows != mat.numCols) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Can only decompose square matrices"]);
}this.n=mat.numRows;
this.L.setReshape$org_ejml_data_DenseMatrix64F(mat);
var d_inv=0;
for (var i=0; i < this.n; i++) {
for (var j=i; j < this.n; j++) {
var sum=this.el[i * this.n + j];
for (var k=0; k < i; k++) {
sum -= this.el[i * this.n + k] * this.el[j * this.n + k] * this.d[k] ;
}
if (i == j) {
if (sum <= 0.0 ) return false;
this.d[i]=sum;
d_inv=1.0 / sum;
this.el[i * this.n + i]=1;
} else {
this.el[j * this.n + i]=sum * d_inv;
}}
}
for (var i=0; i < this.n; i++) {
for (var j=i + 1; j < this.n; j++) {
this.el[i * this.n + j]=0.0;
}
}
return true;
});

Clazz.newMeth(C$, 'inputModified$', function () {
return false;
});

Clazz.newMeth(C$, 'getD$', function () {
return this.d;
});

Clazz.newMeth(C$, 'getL$', function () {
return this.L;
});

Clazz.newMeth(C$, '_getVV$', function () {
return this.vv;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
