(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.mult"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MatrixMatrixMult");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'mult_reorder$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (a, b, c) {
if (a === c  || b === c  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Neither \'a\' or \'b\' can be the same matrix as \'c\'"]);
 else if (a.numCols != b.numRows) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
} else if (a.numRows != c.numRows || b.numCols != c.numCols ) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The results matrix does not have the desired dimensions"]);
}var valA;
var indexCbase=0;
var endOfKLoop=b.numRows * b.numCols;
for (var i=0; i < a.numRows; i++) {
var indexA=i * a.numCols;
var indexB=0;
var indexC=indexCbase;
var end=indexB + b.numCols;
valA=a.get$I(indexA++);
while (indexB < end){
c.set$I$D(indexC++, valA * b.get$I(indexB++));
}
while (indexB != endOfKLoop){
indexC=indexCbase;
end=indexB + b.numCols;
valA=a.get$I(indexA++);
while (indexB < end){
c.plus$I$D(indexC++, valA * b.get$I(indexB++));
}
}
indexCbase+=c.numCols;
}
}, 1);

Clazz.newMeth(C$, 'mult_small$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (a, b, c) {
if (a === c  || b === c  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Neither \'a\' or \'b\' can be the same matrix as \'c\'"]);
 else if (a.numCols != b.numRows) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
} else if (a.numRows != c.numRows || b.numCols != c.numCols ) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The results matrix does not have the desired dimensions"]);
}var aIndexStart=0;
var cIndex=0;
for (var i=0; i < a.numRows; i++) {
for (var j=0; j < b.numCols; j++) {
var total=0;
var indexA=aIndexStart;
var indexB=j;
var end=indexA + b.numRows;
while (indexA < end){
total += a.get$I(indexA++) * b.get$I(indexB);
indexB+=b.numCols;
}
c.set$I$D(cIndex++, total);
}
aIndexStart+=a.numCols;
}
}, 1);

Clazz.newMeth(C$, 'mult_aux$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$DA', function (a, b, c, aux) {
if (a === c  || b === c  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Neither \'a\' or \'b\' can be the same matrix as \'c\'"]);
 else if (a.numCols != b.numRows) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
} else if (a.numRows != c.numRows || b.numCols != c.numCols ) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The results matrix does not have the desired dimensions"]);
}if (aux == null ) aux=Clazz.array(Double.TYPE, [b.numRows]);
for (var j=0; j < b.numCols; j++) {
for (var k=0; k < b.numRows; k++) {
aux[k]=b.unsafe_get$I$I(k, j);
}
var indexA=0;
for (var i=0; i < a.numRows; i++) {
var total=0;
for (var k=0; k < b.numRows; ) {
total += a.get$I(indexA++) * aux[k++];
}
c.set$I$D(i * c.numCols + j, total);
}
}
}, 1);

Clazz.newMeth(C$, 'multTransA_reorder$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (a, b, c) {
if (a === c  || b === c  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Neither \'a\' or \'b\' can be the same matrix as \'c\'"]);
 else if (a.numRows != b.numRows) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
} else if (a.numCols != c.numRows || b.numCols != c.numCols ) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The results matrix does not have the desired dimensions"]);
}var valA;
for (var i=0; i < a.numCols; i++) {
var indexC_start=i * c.numCols;
valA=a.get$I(i);
var indexB=0;
var end=indexB + b.numCols;
var indexC=indexC_start;
while (indexB < end){
c.set$I$D(indexC++, valA * b.get$I(indexB++));
}
for (var k=1; k < a.numRows; k++) {
valA=a.unsafe_get$I$I(k, i);
end=indexB + b.numCols;
indexC=indexC_start;
while (indexB < end){
c.plus$I$D(indexC++, valA * b.get$I(indexB++));
}
}
}
}, 1);

Clazz.newMeth(C$, 'multTransA_small$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (a, b, c) {
if (a === c  || b === c  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Neither \'a\' or \'b\' can be the same matrix as \'c\'"]);
 else if (a.numRows != b.numRows) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
} else if (a.numCols != c.numRows || b.numCols != c.numCols ) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The results matrix does not have the desired dimensions"]);
}var cIndex=0;
for (var i=0; i < a.numCols; i++) {
for (var j=0; j < b.numCols; j++) {
var indexA=i;
var indexB=j;
var end=indexB + b.numRows * b.numCols;
var total=0;
for (; indexB < end; indexB+=b.numCols) {
total += a.get$I(indexA) * b.get$I(indexB);
indexA+=a.numCols;
}
c.set$I$D(cIndex++, total);
}
}
}, 1);

Clazz.newMeth(C$, 'multTransAB$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (a, b, c) {
if (a === c  || b === c  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Neither \'a\' or \'b\' can be the same matrix as \'c\'"]);
 else if (a.numRows != b.numCols) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
} else if (a.numCols != c.numRows || b.numRows != c.numCols ) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The results matrix does not have the desired dimensions"]);
}var cIndex=0;
for (var i=0; i < a.numCols; i++) {
var indexB=0;
for (var j=0; j < b.numRows; j++) {
var indexA=i;
var end=indexB + b.numCols;
var total=0;
for (; indexB < end; ) {
total += a.get$I(indexA) * b.get$I(indexB++);
indexA+=a.numCols;
}
c.set$I$D(cIndex++, total);
}
}
}, 1);

Clazz.newMeth(C$, 'multTransAB_aux$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$DA', function (a, b, c, aux) {
if (a === c  || b === c  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Neither \'a\' or \'b\' can be the same matrix as \'c\'"]);
 else if (a.numRows != b.numCols) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
} else if (a.numCols != c.numRows || b.numRows != c.numCols ) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The results matrix does not have the desired dimensions"]);
}if (aux == null ) aux=Clazz.array(Double.TYPE, [a.numRows]);
var indexC=0;
for (var i=0; i < a.numCols; i++) {
for (var k=0; k < b.numCols; k++) {
aux[k]=a.unsafe_get$I$I(k, i);
}
for (var j=0; j < b.numRows; j++) {
var total=0;
for (var k=0; k < b.numCols; k++) {
total += aux[k] * b.unsafe_get$I$I(j, k);
}
c.set$I$D(indexC++, total);
}
}
}, 1);

Clazz.newMeth(C$, 'multTransB$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (a, b, c) {
if (a === c  || b === c  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Neither \'a\' or \'b\' can be the same matrix as \'c\'"]);
 else if (a.numCols != b.numCols) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
} else if (a.numRows != c.numRows || b.numRows != c.numCols ) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The results matrix does not have the desired dimensions"]);
}var cIndex=0;
var aIndexStart=0;
for (var xA=0; xA < a.numRows; xA++) {
var end=aIndexStart + b.numCols;
var indexB=0;
for (var xB=0; xB < b.numRows; xB++) {
var indexA=aIndexStart;
var total=0;
while (indexA < end){
total += a.get$I(indexA++) * b.get$I(indexB++);
}
c.set$I$D(cIndex++, total);
}
aIndexStart+=a.numCols;
}
}, 1);

Clazz.newMeth(C$, 'multAdd_reorder$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (a, b, c) {
if (a === c  || b === c  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Neither \'a\' or \'b\' can be the same matrix as \'c\'"]);
 else if (a.numCols != b.numRows) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
} else if (a.numRows != c.numRows || b.numCols != c.numCols ) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The results matrix does not have the desired dimensions"]);
}var valA;
var indexCbase=0;
var endOfKLoop=b.numRows * b.numCols;
for (var i=0; i < a.numRows; i++) {
var indexA=i * a.numCols;
var indexB=0;
var indexC=indexCbase;
var end=indexB + b.numCols;
valA=a.get$I(indexA++);
while (indexB < end){
c.plus$I$D(indexC++, valA * b.get$I(indexB++));
}
while (indexB != endOfKLoop){
indexC=indexCbase;
end=indexB + b.numCols;
valA=a.get$I(indexA++);
while (indexB < end){
c.plus$I$D(indexC++, valA * b.get$I(indexB++));
}
}
indexCbase+=c.numCols;
}
}, 1);

Clazz.newMeth(C$, 'multAdd_small$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (a, b, c) {
if (a === c  || b === c  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Neither \'a\' or \'b\' can be the same matrix as \'c\'"]);
 else if (a.numCols != b.numRows) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
} else if (a.numRows != c.numRows || b.numCols != c.numCols ) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The results matrix does not have the desired dimensions"]);
}var aIndexStart=0;
var cIndex=0;
for (var i=0; i < a.numRows; i++) {
for (var j=0; j < b.numCols; j++) {
var total=0;
var indexA=aIndexStart;
var indexB=j;
var end=indexA + b.numRows;
while (indexA < end){
total += a.get$I(indexA++) * b.get$I(indexB);
indexB+=b.numCols;
}
c.plus$I$D(cIndex++, total);
}
aIndexStart+=a.numCols;
}
}, 1);

Clazz.newMeth(C$, 'multAdd_aux$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$DA', function (a, b, c, aux) {
if (a === c  || b === c  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Neither \'a\' or \'b\' can be the same matrix as \'c\'"]);
 else if (a.numCols != b.numRows) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
} else if (a.numRows != c.numRows || b.numCols != c.numCols ) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The results matrix does not have the desired dimensions"]);
}if (aux == null ) aux=Clazz.array(Double.TYPE, [b.numRows]);
for (var j=0; j < b.numCols; j++) {
for (var k=0; k < b.numRows; k++) {
aux[k]=b.unsafe_get$I$I(k, j);
}
var indexA=0;
for (var i=0; i < a.numRows; i++) {
var total=0;
for (var k=0; k < b.numRows; ) {
total += a.get$I(indexA++) * aux[k++];
}
c.plus$I$D(i * c.numCols + j, total);
}
}
}, 1);

Clazz.newMeth(C$, 'multAddTransA_reorder$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (a, b, c) {
if (a === c  || b === c  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Neither \'a\' or \'b\' can be the same matrix as \'c\'"]);
 else if (a.numRows != b.numRows) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
} else if (a.numCols != c.numRows || b.numCols != c.numCols ) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The results matrix does not have the desired dimensions"]);
}var valA;
for (var i=0; i < a.numCols; i++) {
var indexC_start=i * c.numCols;
valA=a.get$I(i);
var indexB=0;
var end=indexB + b.numCols;
var indexC=indexC_start;
while (indexB < end){
c.plus$I$D(indexC++, valA * b.get$I(indexB++));
}
for (var k=1; k < a.numRows; k++) {
valA=a.unsafe_get$I$I(k, i);
end=indexB + b.numCols;
indexC=indexC_start;
while (indexB < end){
c.plus$I$D(indexC++, valA * b.get$I(indexB++));
}
}
}
}, 1);

Clazz.newMeth(C$, 'multAddTransA_small$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (a, b, c) {
if (a === c  || b === c  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Neither \'a\' or \'b\' can be the same matrix as \'c\'"]);
 else if (a.numRows != b.numRows) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
} else if (a.numCols != c.numRows || b.numCols != c.numCols ) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The results matrix does not have the desired dimensions"]);
}var cIndex=0;
for (var i=0; i < a.numCols; i++) {
for (var j=0; j < b.numCols; j++) {
var indexA=i;
var indexB=j;
var end=indexB + b.numRows * b.numCols;
var total=0;
for (; indexB < end; indexB+=b.numCols) {
total += a.get$I(indexA) * b.get$I(indexB);
indexA+=a.numCols;
}
c.plus$I$D(cIndex++, total);
}
}
}, 1);

Clazz.newMeth(C$, 'multAddTransAB$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (a, b, c) {
if (a === c  || b === c  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Neither \'a\' or \'b\' can be the same matrix as \'c\'"]);
 else if (a.numRows != b.numCols) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
} else if (a.numCols != c.numRows || b.numRows != c.numCols ) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The results matrix does not have the desired dimensions"]);
}var cIndex=0;
for (var i=0; i < a.numCols; i++) {
var indexB=0;
for (var j=0; j < b.numRows; j++) {
var indexA=i;
var end=indexB + b.numCols;
var total=0;
for (; indexB < end; ) {
total += a.get$I(indexA) * b.get$I(indexB++);
indexA+=a.numCols;
}
c.plus$I$D(cIndex++, total);
}
}
}, 1);

Clazz.newMeth(C$, 'multAddTransAB_aux$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$DA', function (a, b, c, aux) {
if (a === c  || b === c  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Neither \'a\' or \'b\' can be the same matrix as \'c\'"]);
 else if (a.numRows != b.numCols) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
} else if (a.numCols != c.numRows || b.numRows != c.numCols ) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The results matrix does not have the desired dimensions"]);
}if (aux == null ) aux=Clazz.array(Double.TYPE, [a.numRows]);
var indexC=0;
for (var i=0; i < a.numCols; i++) {
for (var k=0; k < b.numCols; k++) {
aux[k]=a.unsafe_get$I$I(k, i);
}
for (var j=0; j < b.numRows; j++) {
var total=0;
for (var k=0; k < b.numCols; k++) {
total += aux[k] * b.unsafe_get$I$I(j, k);
}
c.plus$I$D(indexC++, total);
}
}
}, 1);

Clazz.newMeth(C$, 'multAddTransB$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (a, b, c) {
if (a === c  || b === c  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Neither \'a\' or \'b\' can be the same matrix as \'c\'"]);
 else if (a.numCols != b.numCols) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
} else if (a.numRows != c.numRows || b.numRows != c.numCols ) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The results matrix does not have the desired dimensions"]);
}var cIndex=0;
var aIndexStart=0;
for (var xA=0; xA < a.numRows; xA++) {
var end=aIndexStart + b.numCols;
var indexB=0;
for (var xB=0; xB < b.numRows; xB++) {
var indexA=aIndexStart;
var total=0;
while (indexA < end){
total += a.get$I(indexA++) * b.get$I(indexB++);
}
c.plus$I$D(cIndex++, total);
}
aIndexStart+=a.numCols;
}
}, 1);

Clazz.newMeth(C$, 'mult_reorder$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (alpha, a, b, c) {
if (a === c  || b === c  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Neither \'a\' or \'b\' can be the same matrix as \'c\'"]);
 else if (a.numCols != b.numRows) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
} else if (a.numRows != c.numRows || b.numCols != c.numCols ) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The results matrix does not have the desired dimensions"]);
}var valA;
var indexCbase=0;
var endOfKLoop=b.numRows * b.numCols;
for (var i=0; i < a.numRows; i++) {
var indexA=i * a.numCols;
var indexB=0;
var indexC=indexCbase;
var end=indexB + b.numCols;
valA=alpha * a.get$I(indexA++);
while (indexB < end){
c.set$I$D(indexC++, valA * b.get$I(indexB++));
}
while (indexB != endOfKLoop){
indexC=indexCbase;
end=indexB + b.numCols;
valA=alpha * a.get$I(indexA++);
while (indexB < end){
c.plus$I$D(indexC++, valA * b.get$I(indexB++));
}
}
indexCbase+=c.numCols;
}
}, 1);

Clazz.newMeth(C$, 'mult_small$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (alpha, a, b, c) {
if (a === c  || b === c  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Neither \'a\' or \'b\' can be the same matrix as \'c\'"]);
 else if (a.numCols != b.numRows) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
} else if (a.numRows != c.numRows || b.numCols != c.numCols ) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The results matrix does not have the desired dimensions"]);
}var aIndexStart=0;
var cIndex=0;
for (var i=0; i < a.numRows; i++) {
for (var j=0; j < b.numCols; j++) {
var total=0;
var indexA=aIndexStart;
var indexB=j;
var end=indexA + b.numRows;
while (indexA < end){
total += a.get$I(indexA++) * b.get$I(indexB);
indexB+=b.numCols;
}
c.set$I$D(cIndex++, alpha * total);
}
aIndexStart+=a.numCols;
}
}, 1);

Clazz.newMeth(C$, 'mult_aux$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$DA', function (alpha, a, b, c, aux) {
if (a === c  || b === c  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Neither \'a\' or \'b\' can be the same matrix as \'c\'"]);
 else if (a.numCols != b.numRows) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
} else if (a.numRows != c.numRows || b.numCols != c.numCols ) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The results matrix does not have the desired dimensions"]);
}if (aux == null ) aux=Clazz.array(Double.TYPE, [b.numRows]);
for (var j=0; j < b.numCols; j++) {
for (var k=0; k < b.numRows; k++) {
aux[k]=b.unsafe_get$I$I(k, j);
}
var indexA=0;
for (var i=0; i < a.numRows; i++) {
var total=0;
for (var k=0; k < b.numRows; ) {
total += a.get$I(indexA++) * aux[k++];
}
c.set$I$D(i * c.numCols + j, alpha * total);
}
}
}, 1);

Clazz.newMeth(C$, 'multTransA_reorder$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (alpha, a, b, c) {
if (a === c  || b === c  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Neither \'a\' or \'b\' can be the same matrix as \'c\'"]);
 else if (a.numRows != b.numRows) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
} else if (a.numCols != c.numRows || b.numCols != c.numCols ) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The results matrix does not have the desired dimensions"]);
}var valA;
for (var i=0; i < a.numCols; i++) {
var indexC_start=i * c.numCols;
valA=alpha * a.get$I(i);
var indexB=0;
var end=indexB + b.numCols;
var indexC=indexC_start;
while (indexB < end){
c.set$I$D(indexC++, valA * b.get$I(indexB++));
}
for (var k=1; k < a.numRows; k++) {
valA=alpha * a.unsafe_get$I$I(k, i);
end=indexB + b.numCols;
indexC=indexC_start;
while (indexB < end){
c.plus$I$D(indexC++, valA * b.get$I(indexB++));
}
}
}
}, 1);

Clazz.newMeth(C$, 'multTransA_small$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (alpha, a, b, c) {
if (a === c  || b === c  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Neither \'a\' or \'b\' can be the same matrix as \'c\'"]);
 else if (a.numRows != b.numRows) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
} else if (a.numCols != c.numRows || b.numCols != c.numCols ) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The results matrix does not have the desired dimensions"]);
}var cIndex=0;
for (var i=0; i < a.numCols; i++) {
for (var j=0; j < b.numCols; j++) {
var indexA=i;
var indexB=j;
var end=indexB + b.numRows * b.numCols;
var total=0;
for (; indexB < end; indexB+=b.numCols) {
total += a.get$I(indexA) * b.get$I(indexB);
indexA+=a.numCols;
}
c.set$I$D(cIndex++, alpha * total);
}
}
}, 1);

Clazz.newMeth(C$, 'multTransAB$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (alpha, a, b, c) {
if (a === c  || b === c  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Neither \'a\' or \'b\' can be the same matrix as \'c\'"]);
 else if (a.numRows != b.numCols) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
} else if (a.numCols != c.numRows || b.numRows != c.numCols ) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The results matrix does not have the desired dimensions"]);
}var cIndex=0;
for (var i=0; i < a.numCols; i++) {
var indexB=0;
for (var j=0; j < b.numRows; j++) {
var indexA=i;
var end=indexB + b.numCols;
var total=0;
for (; indexB < end; ) {
total += a.get$I(indexA) * b.get$I(indexB++);
indexA+=a.numCols;
}
c.set$I$D(cIndex++, alpha * total);
}
}
}, 1);

Clazz.newMeth(C$, 'multTransAB_aux$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$DA', function (alpha, a, b, c, aux) {
if (a === c  || b === c  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Neither \'a\' or \'b\' can be the same matrix as \'c\'"]);
 else if (a.numRows != b.numCols) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
} else if (a.numCols != c.numRows || b.numRows != c.numCols ) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The results matrix does not have the desired dimensions"]);
}if (aux == null ) aux=Clazz.array(Double.TYPE, [a.numRows]);
var indexC=0;
for (var i=0; i < a.numCols; i++) {
for (var k=0; k < b.numCols; k++) {
aux[k]=a.unsafe_get$I$I(k, i);
}
for (var j=0; j < b.numRows; j++) {
var total=0;
for (var k=0; k < b.numCols; k++) {
total += aux[k] * b.unsafe_get$I$I(j, k);
}
c.set$I$D(indexC++, alpha * total);
}
}
}, 1);

Clazz.newMeth(C$, 'multTransB$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (alpha, a, b, c) {
if (a === c  || b === c  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Neither \'a\' or \'b\' can be the same matrix as \'c\'"]);
 else if (a.numCols != b.numCols) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
} else if (a.numRows != c.numRows || b.numRows != c.numCols ) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The results matrix does not have the desired dimensions"]);
}var cIndex=0;
var aIndexStart=0;
for (var xA=0; xA < a.numRows; xA++) {
var end=aIndexStart + b.numCols;
var indexB=0;
for (var xB=0; xB < b.numRows; xB++) {
var indexA=aIndexStart;
var total=0;
while (indexA < end){
total += a.get$I(indexA++) * b.get$I(indexB++);
}
c.set$I$D(cIndex++, alpha * total);
}
aIndexStart+=a.numCols;
}
}, 1);

Clazz.newMeth(C$, 'multAdd_reorder$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (alpha, a, b, c) {
if (a === c  || b === c  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Neither \'a\' or \'b\' can be the same matrix as \'c\'"]);
 else if (a.numCols != b.numRows) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
} else if (a.numRows != c.numRows || b.numCols != c.numCols ) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The results matrix does not have the desired dimensions"]);
}var valA;
var indexCbase=0;
var endOfKLoop=b.numRows * b.numCols;
for (var i=0; i < a.numRows; i++) {
var indexA=i * a.numCols;
var indexB=0;
var indexC=indexCbase;
var end=indexB + b.numCols;
valA=alpha * a.get$I(indexA++);
while (indexB < end){
c.plus$I$D(indexC++, valA * b.get$I(indexB++));
}
while (indexB != endOfKLoop){
indexC=indexCbase;
end=indexB + b.numCols;
valA=alpha * a.get$I(indexA++);
while (indexB < end){
c.plus$I$D(indexC++, valA * b.get$I(indexB++));
}
}
indexCbase+=c.numCols;
}
}, 1);

Clazz.newMeth(C$, 'multAdd_small$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (alpha, a, b, c) {
if (a === c  || b === c  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Neither \'a\' or \'b\' can be the same matrix as \'c\'"]);
 else if (a.numCols != b.numRows) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
} else if (a.numRows != c.numRows || b.numCols != c.numCols ) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The results matrix does not have the desired dimensions"]);
}var aIndexStart=0;
var cIndex=0;
for (var i=0; i < a.numRows; i++) {
for (var j=0; j < b.numCols; j++) {
var total=0;
var indexA=aIndexStart;
var indexB=j;
var end=indexA + b.numRows;
while (indexA < end){
total += a.get$I(indexA++) * b.get$I(indexB);
indexB+=b.numCols;
}
c.plus$I$D(cIndex++, alpha * total);
}
aIndexStart+=a.numCols;
}
}, 1);

Clazz.newMeth(C$, 'multAdd_aux$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$DA', function (alpha, a, b, c, aux) {
if (a === c  || b === c  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Neither \'a\' or \'b\' can be the same matrix as \'c\'"]);
 else if (a.numCols != b.numRows) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
} else if (a.numRows != c.numRows || b.numCols != c.numCols ) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The results matrix does not have the desired dimensions"]);
}if (aux == null ) aux=Clazz.array(Double.TYPE, [b.numRows]);
for (var j=0; j < b.numCols; j++) {
for (var k=0; k < b.numRows; k++) {
aux[k]=b.unsafe_get$I$I(k, j);
}
var indexA=0;
for (var i=0; i < a.numRows; i++) {
var total=0;
for (var k=0; k < b.numRows; ) {
total += a.get$I(indexA++) * aux[k++];
}
c.plus$I$D(i * c.numCols + j, alpha * total);
}
}
}, 1);

Clazz.newMeth(C$, 'multAddTransA_reorder$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (alpha, a, b, c) {
if (a === c  || b === c  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Neither \'a\' or \'b\' can be the same matrix as \'c\'"]);
 else if (a.numRows != b.numRows) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
} else if (a.numCols != c.numRows || b.numCols != c.numCols ) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The results matrix does not have the desired dimensions"]);
}var valA;
for (var i=0; i < a.numCols; i++) {
var indexC_start=i * c.numCols;
valA=alpha * a.get$I(i);
var indexB=0;
var end=indexB + b.numCols;
var indexC=indexC_start;
while (indexB < end){
c.plus$I$D(indexC++, valA * b.get$I(indexB++));
}
for (var k=1; k < a.numRows; k++) {
valA=alpha * a.unsafe_get$I$I(k, i);
end=indexB + b.numCols;
indexC=indexC_start;
while (indexB < end){
c.plus$I$D(indexC++, valA * b.get$I(indexB++));
}
}
}
}, 1);

Clazz.newMeth(C$, 'multAddTransA_small$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (alpha, a, b, c) {
if (a === c  || b === c  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Neither \'a\' or \'b\' can be the same matrix as \'c\'"]);
 else if (a.numRows != b.numRows) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
} else if (a.numCols != c.numRows || b.numCols != c.numCols ) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The results matrix does not have the desired dimensions"]);
}var cIndex=0;
for (var i=0; i < a.numCols; i++) {
for (var j=0; j < b.numCols; j++) {
var indexA=i;
var indexB=j;
var end=indexB + b.numRows * b.numCols;
var total=0;
for (; indexB < end; indexB+=b.numCols) {
total += a.get$I(indexA) * b.get$I(indexB);
indexA+=a.numCols;
}
c.plus$I$D(cIndex++, alpha * total);
}
}
}, 1);

Clazz.newMeth(C$, 'multAddTransAB$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (alpha, a, b, c) {
if (a === c  || b === c  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Neither \'a\' or \'b\' can be the same matrix as \'c\'"]);
 else if (a.numRows != b.numCols) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
} else if (a.numCols != c.numRows || b.numRows != c.numCols ) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The results matrix does not have the desired dimensions"]);
}var cIndex=0;
for (var i=0; i < a.numCols; i++) {
var indexB=0;
for (var j=0; j < b.numRows; j++) {
var indexA=i;
var end=indexB + b.numCols;
var total=0;
for (; indexB < end; ) {
total += a.get$I(indexA) * b.get$I(indexB++);
indexA+=a.numCols;
}
c.plus$I$D(cIndex++, alpha * total);
}
}
}, 1);

Clazz.newMeth(C$, 'multAddTransAB_aux$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$DA', function (alpha, a, b, c, aux) {
if (a === c  || b === c  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Neither \'a\' or \'b\' can be the same matrix as \'c\'"]);
 else if (a.numRows != b.numCols) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
} else if (a.numCols != c.numRows || b.numRows != c.numCols ) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The results matrix does not have the desired dimensions"]);
}if (aux == null ) aux=Clazz.array(Double.TYPE, [a.numRows]);
var indexC=0;
for (var i=0; i < a.numCols; i++) {
for (var k=0; k < b.numCols; k++) {
aux[k]=a.unsafe_get$I$I(k, i);
}
for (var j=0; j < b.numRows; j++) {
var total=0;
for (var k=0; k < b.numCols; k++) {
total += aux[k] * b.unsafe_get$I$I(j, k);
}
c.plus$I$D(indexC++, alpha * total);
}
}
}, 1);

Clazz.newMeth(C$, 'multAddTransB$D$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (alpha, a, b, c) {
if (a === c  || b === c  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Neither \'a\' or \'b\' can be the same matrix as \'c\'"]);
 else if (a.numCols != b.numCols) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The \'a\' and \'b\' matrices do not have compatible dimensions"]);
} else if (a.numRows != c.numRows || b.numRows != c.numCols ) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The results matrix does not have the desired dimensions"]);
}var cIndex=0;
var aIndexStart=0;
for (var xA=0; xA < a.numRows; xA++) {
var end=aIndexStart + b.numCols;
var indexB=0;
for (var xB=0; xB < b.numRows; xB++) {
var indexA=aIndexStart;
var total=0;
while (indexA < end){
total += a.get$I(indexA++) * b.get$I(indexB++);
}
c.plus$I$D(cIndex++, alpha * total);
}
aIndexStart+=a.numCols;
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
