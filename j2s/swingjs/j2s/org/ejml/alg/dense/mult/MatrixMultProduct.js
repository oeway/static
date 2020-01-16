(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.mult"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MatrixMultProduct");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'outer$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (a, c) {
for (var i=0; i < a.numRows; i++) {
var indexC1=i * c.numCols + i;
var indexC2=indexC1;
for (var j=i; j < a.numRows; j++, indexC2+=c.numCols) {
var indexA=i * a.numCols;
var indexB=j * a.numCols;
var sum=0;
var end=indexA + a.numCols;
for (; indexA < end; indexA++, indexB++) {
sum += a.data[indexA] * a.data[indexB];
}
c.data[indexC2]=c.data[indexC1++]=sum;
}
}
}, 1);

Clazz.newMeth(C$, 'inner_small$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (a, c) {
for (var i=0; i < a.numCols; i++) {
for (var j=i; j < a.numCols; j++) {
var indexC1=i * c.numCols + j;
var indexC2=j * c.numCols + i;
var indexA=i;
var indexB=j;
var sum=0;
var end=indexA + a.numRows * a.numCols;
for (; indexA < end; indexA+=a.numCols, indexB+=a.numCols) {
sum += a.data[indexA] * a.data[indexB];
}
c.data[indexC1]=c.data[indexC2]=sum;
}
}
}, 1);

Clazz.newMeth(C$, 'inner_reorder$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (a, c) {
for (var i=0; i < a.numCols; i++) {
var indexC=i * c.numCols + i;
var valAi=a.data[i];
for (var j=i; j < a.numCols; j++) {
c.data[indexC++]=valAi * a.data[j];
}
for (var k=1; k < a.numRows; k++) {
indexC=i * c.numCols + i;
var indexB=k * a.numCols + i;
valAi=a.data[indexB];
for (var j=i; j < a.numCols; j++) {
c.data[indexC++] += valAi * a.data[indexB++];
}
}
indexC=i * c.numCols + i;
var indexC2=indexC;
for (var j=i; j < a.numCols; j++, indexC2+=c.numCols) {
c.data[indexC2]=c.data[indexC++];
}
}
}, 1);

Clazz.newMeth(C$, 'inner_reorder_upper$org_ejml_data_RowD1Matrix64F$org_ejml_data_RowD1Matrix64F', function (a, c) {
for (var i=0; i < a.numCols; i++) {
var indexC=i * c.numCols + i;
var valAi=a.data[i];
for (var j=i; j < a.numCols; j++) {
c.data[indexC++]=valAi * a.data[j];
}
for (var k=1; k < a.numRows; k++) {
indexC=i * c.numCols + i;
var indexB=k * a.numCols + i;
valAi=a.data[indexB];
for (var j=i; j < a.numCols; j++) {
c.data[indexC++] += valAi * a.data[indexB++];
}
}
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
