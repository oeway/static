(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.lu"),I$=[[0,'org.ejml.data.DenseMatrix64F','org.ejml.ops.CommonOps','org.ejml.ops.SpecializedOps','org.ejml.UtilEjml','org.ejml.alg.dense.decomposition.TriangularSolver']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LUDecompositionBase", null, null, 'org.ejml.factory.LUDecomposition');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.maxWidth=-1;
}, 1);

C$.$fields$=[['D',['pivsign'],'I',['maxWidth','m','n'],'O',['LU','org.ejml.data.DenseMatrix64F','dataLU','double[]','+vv','indx','int[]','+pivot']]]

Clazz.newMeth(C$, 'setExpectedMaxSize$I$I', function (numRows, numCols) {
this.LU=Clazz.new_($I$(1,1).c$$I$I,[numRows, numCols]);
this.dataLU=this.LU.data;
this.maxWidth=Math.max(numRows, numCols);
this.vv=Clazz.array(Double.TYPE, [this.maxWidth]);
this.indx=Clazz.array(Integer.TYPE, [this.maxWidth]);
this.pivot=Clazz.array(Integer.TYPE, [this.maxWidth]);
});

Clazz.newMeth(C$, 'getLU$', function () {
return this.LU;
});

Clazz.newMeth(C$, 'getIndx$', function () {
return this.indx;
});

Clazz.newMeth(C$, 'getPivot$', function () {
return this.pivot;
});

Clazz.newMeth(C$, 'inputModified$', function () {
return false;
});

Clazz.newMeth(C$, ['getLower$org_ejml_data_DenseMatrix64F','getLower$TT'], function (lower) {
var numRows=this.LU.numRows;
var numCols=this.LU.numRows < this.LU.numCols ? this.LU.numRows : this.LU.numCols;
if (lower == null ) {
lower=Clazz.new_($I$(1,1).c$$I$I,[numRows, numCols]);
} else {
if (lower.numCols != numCols || lower.numRows != numRows ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected matrix dimension"]);
$I$(2).fill$org_ejml_data_D1Matrix64F$D(lower, 0);
}for (var i=0; i < numCols; i++) {
lower.set$I$I$D(i, i, 1.0);
for (var j=0; j < i; j++) {
lower.set$I$I$D(i, j, this.LU.get$I$I(i, j));
}
}
if (numRows > numCols) {
for (var i=numCols; i < numRows; i++) {
for (var j=0; j < numCols; j++) {
lower.set$I$I$D(i, j, this.LU.get$I$I(i, j));
}
}
}return lower;
});

Clazz.newMeth(C$, ['getUpper$org_ejml_data_DenseMatrix64F','getUpper$TT'], function (upper) {
var numRows=this.LU.numRows < this.LU.numCols ? this.LU.numRows : this.LU.numCols;
var numCols=this.LU.numCols;
if (upper == null ) {
upper=Clazz.new_($I$(1,1).c$$I$I,[numRows, numCols]);
} else {
if (upper.numCols != numCols || upper.numRows != numRows ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected matrix dimension"]);
$I$(2).fill$org_ejml_data_D1Matrix64F$D(upper, 0);
}for (var i=0; i < numRows; i++) {
for (var j=i; j < numCols; j++) {
upper.set$I$I$D(i, j, this.LU.get$I$I(i, j));
}
}
return upper;
});

Clazz.newMeth(C$, ['getPivot$org_ejml_data_DenseMatrix64F','getPivot$TT'], function (pivot) {
return $I$(3).pivotMatrix$org_ejml_data_DenseMatrix64F$IA$I$Z(pivot, this.pivot, this.LU.numRows, false);
});

Clazz.newMeth(C$, 'decomposeCommonInit$org_ejml_data_DenseMatrix64F', function (a) {
if (a.numRows > this.maxWidth || a.numCols > this.maxWidth ) {
this.setExpectedMaxSize$I$I(a.numRows, a.numCols);
}this.m=a.numRows;
this.n=a.numCols;
this.LU.setReshape$org_ejml_data_DenseMatrix64F(a);
for (var i=0; i < this.m; i++) {
this.pivot[i]=i;
}
this.pivsign=1;
});

Clazz.newMeth(C$, 'isSingular$', function () {
for (var i=0; i < this.m; i++) {
if (Math.abs(this.dataLU[i * this.n + i]) < $I$(4).EPS ) return true;
}
return false;
});

Clazz.newMeth(C$, 'computeDeterminant$', function () {
if (this.m != this.n) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Must be a square matrix."]);
var ret=this.pivsign;
var total=this.m * this.n;
for (var i=0; i < total; i+=this.n + 1) {
ret *= this.dataLU[i];
}
return ret;
});

Clazz.newMeth(C$, 'quality$', function () {
return $I$(3).qualityTriangular$Z$org_ejml_data_D1Matrix64F(true, this.LU);
});

Clazz.newMeth(C$, '_solveVectorInternal$DA', function (vv) {
var ii=0;
for (var i=0; i < this.n; i++) {
var ip=this.indx[i];
var sum=vv[ip];
vv[ip]=vv[i];
if (ii != 0) {
var index=i * this.n + ii - 1;
for (var j=ii - 1; j < i; j++) sum -= this.dataLU[index++] * vv[j];

} else if (sum != 0.0 ) {
ii=i + 1;
}vv[i]=sum;
}
$I$(5).solveU$DA$DA$I(this.dataLU, vv, this.n);
});

Clazz.newMeth(C$, '_getVV$', function () {
return this.vv;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
