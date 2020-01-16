(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.chol"),I$=[[0,'org.ejml.data.DenseMatrix64F','org.ejml.ops.CommonOps']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CholeskyDecompositionCommon", null, null, 'org.ejml.factory.CholeskyDecomposition');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.maxWidth=-1;
}, 1);

C$.$fields$=[['Z',['lower'],'I',['maxWidth','n'],'O',['T','org.ejml.data.DenseMatrix64F','t','double[]','+vv']]]

Clazz.newMeth(C$, 'c$$Z', function (lower) {
;C$.$init$.apply(this);
this.lower=lower;
}, 1);

Clazz.newMeth(C$, 'setExpectedMaxSize$I$I', function (numRows, numCols) {
if (numRows != numCols) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can only decompose square matrices"]);
}this.maxWidth=numCols;
this.vv=Clazz.array(Double.TYPE, [this.maxWidth]);
});

Clazz.newMeth(C$, 'isLower$', function () {
return this.lower;
});

Clazz.newMeth(C$, ['decompose$org_ejml_data_DenseMatrix64F','decompose$TT'], function (mat) {
if (mat.numRows > this.maxWidth) {
this.setExpectedMaxSize$I$I(mat.numRows, mat.numCols);
} else if (mat.numRows != mat.numCols) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Must be a square matrix."]);
}this.n=mat.numRows;
this.T=mat;
this.t=this.T.data;
if (this.lower) {
return this.decomposeLower$();
} else {
return this.decomposeUpper$();
}});

Clazz.newMeth(C$, 'inputModified$', function () {
return true;
});

Clazz.newMeth(C$, ['getT$org_ejml_data_DenseMatrix64F','getT$TMatrixType'], function (T) {
if (T == null ) {
T=Clazz.new_($I$(1,1).c$$I$I,[this.n, this.n]);
} else {
if (T.numRows != this.n || T.numCols != this.n ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected matrix dimension for T."]);
$I$(2).fill$org_ejml_data_D1Matrix64F$D(T, 0);
}if (this.lower) {
for (var i=0; i < this.n; i++) {
for (var j=0; j <= i; j++) {
T.unsafe_set$I$I$D(i, j, this.T.unsafe_get$I$I(i, j));
}
}
} else {
for (var i=0; i < this.n; i++) {
for (var j=i; j < this.n; j++) {
T.unsafe_set$I$I$D(i, j, this.T.unsafe_get$I$I(i, j));
}
}
}return T;
});

Clazz.newMeth(C$, 'getT$', function () {
return this.T;
});

Clazz.newMeth(C$, '_getVV$', function () {
return this.vv;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
