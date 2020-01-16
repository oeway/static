(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.misc"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TransposeAlgs");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'square$org_ejml_data_RowD1Matrix64F', function (mat) {
var index=1;
var indexEnd=mat.numCols;
for (var i=0; i < mat.numRows; i++, index+=i + 1, indexEnd+=mat.numCols) {
var indexOther=(i + 1) * mat.numCols + i;
for (; index < indexEnd; index++, indexOther+=mat.numCols) {
var val=mat.get$I(index);
mat.set$I$D(index, mat.get$I(indexOther));
mat.set$I$D(indexOther, val);
}
}
}, 1);

Clazz.newMeth(C$, 'block$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F$I', function (A, A_tran, blockLength) {
for (var i=0; i < A.numRows; i+=blockLength) {
var blockHeight=Math.min(blockLength, A.numRows - i);
var indexSrc=i * A.numCols;
var indexDst=i;
for (var j=0; j < A.numCols; j+=blockLength) {
var blockWidth=Math.min(blockLength, A.numCols - j);
var indexSrcEnd=indexSrc + blockWidth;
for (; indexSrc < indexSrcEnd; indexSrc++) {
var rowSrc=indexSrc;
var rowDst=indexDst;
var end=rowDst + blockHeight;
for (; rowDst < end; rowSrc+=A.numCols) {
A_tran.set$I$D(rowDst++, A.get$I(rowSrc));
}
indexDst+=A_tran.numCols;
}
}
}
}, 1);

Clazz.newMeth(C$, 'standard$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (A, A_tran) {
var index=0;
for (var i=0; i < A_tran.numRows; i++) {
var index2=i;
var end=index + A_tran.numCols;
while (index < end){
A_tran.set$I$D(index++, A.get$I(index2));
index2+=A.numCols;
}
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
