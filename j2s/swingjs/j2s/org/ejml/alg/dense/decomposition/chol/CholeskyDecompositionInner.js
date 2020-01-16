(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.chol"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CholeskyDecompositionInner", null, 'org.ejml.alg.dense.decomposition.chol.CholeskyDecompositionCommon');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$Z.apply(this,[true]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (lower) {
;C$.superclazz.c$$Z.apply(this,[lower]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'decomposeLower$', function () {
var el_ii;
var div_el_ii=0;
for (var i=0; i < this.n; i++) {
for (var j=i; j < this.n; j++) {
var sum=this.t[i * this.n + j];
var iEl=i * this.n;
var jEl=j * this.n;
var end=iEl + i;
for (; iEl < end; iEl++, jEl++) {
sum -= this.t[iEl] * this.t[jEl];
}
if (i == j) {
if (sum <= 0.0 ) return false;
el_ii=Math.sqrt(sum);
this.t[i * this.n + i]=el_ii;
div_el_ii=1.0 / el_ii;
} else {
this.t[j * this.n + i]=sum * div_el_ii;
}}
}
for (var i=0; i < this.n; i++) {
for (var j=i + 1; j < this.n; j++) {
this.t[i * this.n + j]=0.0;
}
}
return true;
});

Clazz.newMeth(C$, 'decomposeUpper$', function () {
var el_ii;
var div_el_ii=0;
for (var i=0; i < this.n; i++) {
for (var j=i; j < this.n; j++) {
var sum=this.t[i * this.n + j];
for (var k=0; k < i; k++) {
sum -= this.t[k * this.n + i] * this.t[k * this.n + j];
}
if (i == j) {
if (sum <= 0.0 ) return false;
el_ii=Math.sqrt(sum);
this.t[i * this.n + i]=el_ii;
div_el_ii=1.0 / el_ii;
} else {
this.t[i * this.n + j]=sum * div_el_ii;
}}
}
for (var i=0; i < this.n; i++) {
for (var j=0; j < i; j++) {
this.t[i * this.n + j]=0.0;
}
}
return true;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
