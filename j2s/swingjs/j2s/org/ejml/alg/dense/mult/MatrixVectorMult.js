(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.mult"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MatrixVectorMult");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'mult$org_ejml_data_RowD1Matrix64F$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F', function (a, b, c) {
if (c.numCols != 1) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["C is not a column vector"]);
} else if (c.numRows != a.numRows) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["C is not the expected length"]);
}if (b.numRows == 1) {
if (a.numCols != b.numCols) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["A and B are not compatible"]);
}} else if (b.numCols == 1) {
if (a.numCols != b.numRows) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["A and B are not compatible"]);
}} else {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["B is not a vector"]);
}var indexA=0;
var cIndex=0;
var b0=b.get$I(0);
for (var i=0; i < a.numRows; i++) {
var total=a.get$I(indexA++) * b0;
for (var j=1; j < a.numCols; j++) {
total += a.get$I(indexA++) * b.get$I(j);
}
c.set$I$D(cIndex++, total);
}
}, 1);

Clazz.newMeth(C$, 'multAdd$org_ejml_data_RowD1Matrix64F$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F', function (A, B, C) {
if (C.numCols != 1) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["C is not a column vector"]);
} else if (C.numRows != A.numRows) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["C is not the expected length"]);
}if (B.numRows == 1) {
if (A.numCols != B.numCols) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["A and B are not compatible"]);
}} else if (B.numCols == 1) {
if (A.numCols != B.numRows) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["A and B are not compatible"]);
}} else {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["B is not a vector"]);
}var indexA=0;
var cIndex=0;
for (var i=0; i < A.numRows; i++) {
var total=A.get$I(indexA++) * B.get$I(0);
for (var j=1; j < A.numCols; j++) {
total += A.get$I(indexA++) * B.get$I(j);
}
C.plus$I$D(cIndex++, total);
}
}, 1);

Clazz.newMeth(C$, 'multTransA_small$org_ejml_data_RowD1Matrix64F$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F', function (A, B, C) {
if (C.numCols != 1) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["C is not a column vector"]);
} else if (C.numRows != A.numCols) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["C is not the expected length"]);
}if (B.numRows == 1) {
if (A.numRows != B.numCols) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["A and B are not compatible"]);
}} else if (B.numCols == 1) {
if (A.numRows != B.numRows) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["A and B are not compatible"]);
}} else {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["B is not a vector"]);
}var cIndex=0;
for (var i=0; i < A.numCols; i++) {
var total=0.0;
var indexA=i;
for (var j=0; j < A.numRows; j++) {
total += A.get$I(indexA) * B.get$I(j);
indexA+=A.numCols;
}
C.set$I$D(cIndex++, total);
}
}, 1);

Clazz.newMeth(C$, 'multTransA_reorder$org_ejml_data_RowD1Matrix64F$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F', function (A, B, C) {
if (C.numCols != 1) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["C is not a column vector"]);
} else if (C.numRows != A.numCols) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["C is not the expected length"]);
}if (B.numRows == 1) {
if (A.numRows != B.numCols) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["A and B are not compatible"]);
}} else if (B.numCols == 1) {
if (A.numRows != B.numRows) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["A and B are not compatible"]);
}} else {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["B is not a vector"]);
}var B_val=B.get$I(0);
for (var i=0; i < A.numCols; i++) {
C.set$I$D(i, A.get$I(i) * B_val);
}
var indexA=A.numCols;
for (var i=1; i < A.numRows; i++) {
B_val=B.get$I(i);
for (var j=0; j < A.numCols; j++) {
C.plus$I$D(j, A.get$I(indexA++) * B_val);
}
}
}, 1);

Clazz.newMeth(C$, 'multAddTransA_small$org_ejml_data_RowD1Matrix64F$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F', function (A, B, C) {
if (C.numCols != 1) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["C is not a column vector"]);
} else if (C.numRows != A.numCols) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["C is not the expected length"]);
}if (B.numRows == 1) {
if (A.numRows != B.numCols) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["A and B are not compatible"]);
}} else if (B.numCols == 1) {
if (A.numRows != B.numRows) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["A and B are not compatible"]);
}} else {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["B is not a vector"]);
}var cIndex=0;
for (var i=0; i < A.numCols; i++) {
var total=0.0;
var indexA=i;
for (var j=0; j < A.numRows; j++) {
total += A.get$I(indexA) * B.get$I(j);
indexA+=A.numCols;
}
C.plus$I$D(cIndex++, total);
}
}, 1);

Clazz.newMeth(C$, 'multAddTransA_reorder$org_ejml_data_RowD1Matrix64F$org_ejml_data_D1Matrix64F$org_ejml_data_D1Matrix64F', function (A, B, C) {
if (C.numCols != 1) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["C is not a column vector"]);
} else if (C.numRows != A.numCols) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["C is not the expected length"]);
}if (B.numRows == 1) {
if (A.numRows != B.numCols) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["A and B are not compatible"]);
}} else if (B.numCols == 1) {
if (A.numRows != B.numRows) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["A and B are not compatible"]);
}} else {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["B is not a vector"]);
}var indexA=0;
for (var j=0; j < A.numRows; j++) {
var B_val=B.get$I(j);
for (var i=0; i < A.numCols; i++) {
C.plus$I$D(i, A.get$I(indexA++) * B_val);
}
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
