(function(){var P$=Clazz.newPackage("org.ejml.simple"),I$=[[0,'org.ejml.factory.DecompositionFactory','org.ejml.simple.SimpleMatrix']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SimpleEVD");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['eig','org.ejml.factory.EigenDecomposition','mat','org.ejml.data.DenseMatrix64F']]]

Clazz.newMeth(C$, 'c$$org_ejml_data_DenseMatrix64F', function (mat) {
;C$.$init$.apply(this);
this.mat=mat;
this.eig=$I$(1).eig$I$Z(mat.numCols, true);
if (!this.eig.decompose$TT(mat)) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Eigenvalue Decomposition failed"]);
}, 1);

Clazz.newMeth(C$, 'getNumberOfEigenvalues$', function () {
return this.eig.getNumberOfEigenvalues$();
});

Clazz.newMeth(C$, 'getEigenvalue$I', function (index) {
return this.eig.getEigenvalue$I(index);
});

Clazz.newMeth(C$, 'getEigenVector$I', function (index) {
return $I$(2).wrap$org_ejml_data_DenseMatrix64F(this.eig.getEigenVector$I(index));
});

Clazz.newMeth(C$, 'quality$', function () {
return $I$(1).quality$org_ejml_data_DenseMatrix64F$org_ejml_factory_EigenDecomposition(this.mat, this.eig);
});

Clazz.newMeth(C$, 'getEVD$', function () {
return this.eig;
});

Clazz.newMeth(C$, 'getIndexMax$', function () {
var indexMax=0;
var max=this.getEigenvalue$I(0).getMagnitude2$();
var N=this.getNumberOfEigenvalues$();
for (var i=1; i < N; i++) {
var m=this.getEigenvalue$I(i).getMagnitude2$();
if (m > max ) {
max=m;
indexMax=i;
}}
return indexMax;
});

Clazz.newMeth(C$, 'getIndexMin$', function () {
var indexMin=0;
var min=this.getEigenvalue$I(0).getMagnitude2$();
var N=this.getNumberOfEigenvalues$();
for (var i=1; i < N; i++) {
var m=this.getEigenvalue$I(i).getMagnitude2$();
if (m < min ) {
min=m;
indexMin=i;
}}
return indexMin;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
