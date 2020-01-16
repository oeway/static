(function(){var P$=Clazz.newPackage("org.ejml.alg.block"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "BlockInnerMultiplication");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'blockMultPlus$DA$DA$DA$I$I$I$I$I$I', function (dataA, dataB, dataC, indexA, indexB, indexC, heightA, widthA, widthC) {
var a=indexA;
var rowC=indexC;
for (var i=0; i < heightA; i++, rowC+=widthC) {
var b=indexB;
var endC=rowC + widthC;
var endA=a + widthA;
while (a != endA){
var valA=dataA[a++];
var c=rowC;
while (c != endC){
dataC[c++] += valA * dataB[b++];
}
}
}
}, 1);

Clazz.newMeth(C$, 'blockMultPlusTransA$DA$DA$DA$I$I$I$I$I$I', function (dataA, dataB, dataC, indexA, indexB, indexC, heightA, widthA, widthC) {
var rowC=indexC;
for (var i=0; i < widthA; i++, rowC+=widthC) {
var colA=i + indexA;
var endA=colA + widthA * heightA;
var b=indexB;
while (colA != endA){
var valA=dataA[colA];
var c=rowC;
var endB=b + widthC;
while (b != endB){
dataC[c++] += valA * dataB[b++];
}
colA+=widthA;
}
}
}, 1);

Clazz.newMeth(C$, 'blockMultPlusTransB$DA$DA$DA$I$I$I$I$I$I', function (dataA, dataB, dataC, indexA, indexB, indexC, heightA, widthA, widthC) {
for (var i=0; i < heightA; i++) {
for (var j=0; j < widthC; j++) {
var val=0;
for (var k=0; k < widthA; k++) {
val += dataA[i * widthA + k + indexA] * dataB[j * widthA + k + indexB];
}
dataC[i * widthC + j + indexC] += val;
}
}
}, 1);

Clazz.newMeth(C$, 'blockMultMinus$DA$DA$DA$I$I$I$I$I$I', function (dataA, dataB, dataC, indexA, indexB, indexC, heightA, widthA, widthC) {
var a=indexA;
var rowC=indexC;
for (var i=0; i < heightA; i++, rowC+=widthC) {
var b=indexB;
var endC=rowC + widthC;
var endA=a + widthA;
while (a != endA){
var valA=dataA[a++];
var c=rowC;
while (c != endC){
dataC[c++] -= valA * dataB[b++];
}
}
}
}, 1);

Clazz.newMeth(C$, 'blockMultMinusTransA$DA$DA$DA$I$I$I$I$I$I', function (dataA, dataB, dataC, indexA, indexB, indexC, heightA, widthA, widthC) {
var rowC=indexC;
for (var i=0; i < widthA; i++, rowC+=widthC) {
var colA=i + indexA;
var endA=colA + widthA * heightA;
var b=indexB;
while (colA != endA){
var valA=dataA[colA];
var c=rowC;
var endB=b + widthC;
while (b != endB){
dataC[c++] -= valA * dataB[b++];
}
colA+=widthA;
}
}
}, 1);

Clazz.newMeth(C$, 'blockMultMinusTransB$DA$DA$DA$I$I$I$I$I$I', function (dataA, dataB, dataC, indexA, indexB, indexC, heightA, widthA, widthC) {
for (var i=0; i < heightA; i++) {
for (var j=0; j < widthC; j++) {
var val=0;
for (var k=0; k < widthA; k++) {
val += dataA[i * widthA + k + indexA] * dataB[j * widthA + k + indexB];
}
dataC[i * widthC + j + indexC] -= val;
}
}
}, 1);

Clazz.newMeth(C$, 'blockMultSet$DA$DA$DA$I$I$I$I$I$I', function (dataA, dataB, dataC, indexA, indexB, indexC, heightA, widthA, widthC) {
var a=indexA;
var rowC=indexC;
for (var i=0; i < heightA; i++, rowC+=widthC) {
var b=indexB;
var endC=rowC + widthC;
var endA=a + widthA;
while (a != endA){
var valA=dataA[a++];
var c=rowC;
if (b == indexB) {
while (c != endC){
dataC[c++]=valA * dataB[b++];
}
} else {
while (c != endC){
dataC[c++] += valA * dataB[b++];
}
}}
}
}, 1);

Clazz.newMeth(C$, 'blockMultSetTransA$DA$DA$DA$I$I$I$I$I$I', function (dataA, dataB, dataC, indexA, indexB, indexC, heightA, widthA, widthC) {
var rowC=indexC;
for (var i=0; i < widthA; i++, rowC+=widthC) {
var colA=i + indexA;
var endA=colA + widthA * heightA;
var b=indexB;
while (colA != endA){
var valA=dataA[colA];
var c=rowC;
var endB=b + widthC;
if (b == indexB) {
while (b != endB){
dataC[c++]=valA * dataB[b++];
}
} else {
while (b != endB){
dataC[c++] += valA * dataB[b++];
}
}colA+=widthA;
}
}
}, 1);

Clazz.newMeth(C$, 'blockMultSetTransB$DA$DA$DA$I$I$I$I$I$I', function (dataA, dataB, dataC, indexA, indexB, indexC, heightA, widthA, widthC) {
for (var i=0; i < heightA; i++) {
for (var j=0; j < widthC; j++) {
var val=0;
for (var k=0; k < widthA; k++) {
val += dataA[i * widthA + k + indexA] * dataB[j * widthA + k + indexB];
}
dataC[i * widthC + j + indexC]=val;
}
}
}, 1);

Clazz.newMeth(C$, 'blockMultPlus$D$DA$DA$DA$I$I$I$I$I$I', function (alpha, dataA, dataB, dataC, indexA, indexB, indexC, heightA, widthA, widthC) {
var a=indexA;
var rowC=indexC;
for (var i=0; i < heightA; i++, rowC+=widthC) {
var b=indexB;
var endC=rowC + widthC;
var endA=a + widthA;
while (a != endA){
var valA=alpha * dataA[a++];
var c=rowC;
while (c != endC){
dataC[c++] += valA * dataB[b++];
}
}
}
}, 1);

Clazz.newMeth(C$, 'blockMultPlusTransA$D$DA$DA$DA$I$I$I$I$I$I', function (alpha, dataA, dataB, dataC, indexA, indexB, indexC, heightA, widthA, widthC) {
var rowC=indexC;
for (var i=0; i < widthA; i++, rowC+=widthC) {
var colA=i + indexA;
var endA=colA + widthA * heightA;
var b=indexB;
while (colA != endA){
var valA=alpha * dataA[colA];
var c=rowC;
var endB=b + widthC;
while (b != endB){
dataC[c++] += valA * dataB[b++];
}
colA+=widthA;
}
}
}, 1);

Clazz.newMeth(C$, 'blockMultPlusTransB$D$DA$DA$DA$I$I$I$I$I$I', function (alpha, dataA, dataB, dataC, indexA, indexB, indexC, heightA, widthA, widthC) {
for (var i=0; i < heightA; i++) {
for (var j=0; j < widthC; j++) {
var val=0;
for (var k=0; k < widthA; k++) {
val += dataA[i * widthA + k + indexA] * dataB[j * widthA + k + indexB];
}
dataC[i * widthC + j + indexC] += alpha * val;
}
}
}, 1);

Clazz.newMeth(C$, 'blockMultSet$D$DA$DA$DA$I$I$I$I$I$I', function (alpha, dataA, dataB, dataC, indexA, indexB, indexC, heightA, widthA, widthC) {
var a=indexA;
var rowC=indexC;
for (var i=0; i < heightA; i++, rowC+=widthC) {
var b=indexB;
var endC=rowC + widthC;
var endA=a + widthA;
while (a != endA){
var valA=alpha * dataA[a++];
var c=rowC;
if (b == indexB) {
while (c != endC){
dataC[c++]=valA * dataB[b++];
}
} else {
while (c != endC){
dataC[c++] += valA * dataB[b++];
}
}}
}
}, 1);

Clazz.newMeth(C$, 'blockMultSetTransA$D$DA$DA$DA$I$I$I$I$I$I', function (alpha, dataA, dataB, dataC, indexA, indexB, indexC, heightA, widthA, widthC) {
var rowC=indexC;
for (var i=0; i < widthA; i++, rowC+=widthC) {
var colA=i + indexA;
var endA=colA + widthA * heightA;
var b=indexB;
while (colA != endA){
var valA=alpha * dataA[colA];
var c=rowC;
var endB=b + widthC;
if (b == indexB) {
while (b != endB){
dataC[c++]=valA * dataB[b++];
}
} else {
while (b != endB){
dataC[c++] += valA * dataB[b++];
}
}colA+=widthA;
}
}
}, 1);

Clazz.newMeth(C$, 'blockMultSetTransB$D$DA$DA$DA$I$I$I$I$I$I', function (alpha, dataA, dataB, dataC, indexA, indexB, indexC, heightA, widthA, widthC) {
for (var i=0; i < heightA; i++) {
for (var j=0; j < widthC; j++) {
var val=0;
for (var k=0; k < widthA; k++) {
val += dataA[i * widthA + k + indexA] * dataB[j * widthA + k + indexB];
}
dataC[i * widthC + j + indexC]=alpha * val;
}
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
