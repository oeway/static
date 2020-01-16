(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.svd.implicitqr"),p$1={},I$=[[0,'java.util.Random','org.ejml.alg.dense.decomposition.eig.EigenvalueSmall','org.ejml.UtilEjml','org.ejml.simple.SimpleMatrix']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SvdImplicitQrAlgorithm");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.rand=Clazz.new_($I$(1,1).c$$J,[3434270]);
this.eigenSmall=Clazz.new_($I$(2,1));
this.exceptionalThresh=15;
this.maxIterations=this.exceptionalThresh * 100;
this.fastValues=false;
}, 1);

C$.$fields$=[['Z',['followScript','fastValues','findingZeros'],'D',['maxValue','bulge','c','s'],'I',['totalSteps','N','numExceptional','nextExceptional','x1','x2','steps','numSplits','exceptionalThresh','maxIterations'],'O',['rand','java.util.Random','Ut','org.ejml.data.DenseMatrix64F','+Vt','eigenSmall','org.ejml.alg.dense.decomposition.eig.EigenvalueSmall','diag','double[]','+off','splits','int[]','values','double[]']]]

Clazz.newMeth(C$, 'c$$Z', function (fastValues) {
;C$.$init$.apply(this);
this.fastValues=fastValues;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getUt$', function () {
return this.Ut;
});

Clazz.newMeth(C$, 'setUt$org_ejml_data_DenseMatrix64F', function (ut) {
this.Ut=ut;
});

Clazz.newMeth(C$, 'getVt$', function () {
return this.Vt;
});

Clazz.newMeth(C$, 'setVt$org_ejml_data_DenseMatrix64F', function (vt) {
this.Vt=vt;
});

Clazz.newMeth(C$, 'setMatrix$I$I$DA$DA', function (numRows, numCols, diag, off) {
this.initParam$I$I(numRows, numCols);
this.diag=diag;
this.off=off;
this.maxValue=Math.abs(diag[0]);
for (var i=1; i < this.N; i++) {
var a=Math.abs(diag[i]);
var b=Math.abs(off[i - 1]);
if (a > this.maxValue ) {
this.maxValue=Math.abs(a);
}if (b > this.maxValue ) {
this.maxValue=Math.abs(b);
}}
});

Clazz.newMeth(C$, 'swapDiag$DA', function (diag) {
var ret=this.diag;
this.diag=diag;
return ret;
});

Clazz.newMeth(C$, 'swapOff$DA', function (off) {
var ret=this.off;
this.off=off;
return ret;
});

Clazz.newMeth(C$, 'setMaxValue$D', function (maxValue) {
this.maxValue=maxValue;
});

Clazz.newMeth(C$, 'initParam$I$I', function (M, N) {
if (N > M) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Must be a square or tall matrix"]);
this.N=N;
if (this.splits == null  || this.splits.length < N ) {
this.splits=Clazz.array(Integer.TYPE, [N]);
}this.x1=0;
this.x2=this.N - 1;
this.steps=0;
this.totalSteps=0;
this.numSplits=0;
this.numExceptional=0;
this.nextExceptional=this.exceptionalThresh;
});

Clazz.newMeth(C$, 'process$', function () {
this.followScript=false;
this.findingZeros=true;
return this._process$();
});

Clazz.newMeth(C$, 'process$DA', function (values) {
this.followScript=true;
this.values=values;
this.findingZeros=false;
return this._process$();
});

Clazz.newMeth(C$, '_process$', function () {
if (this.maxValue == 0 ) return true;
while (this.x2 >= 0){
if (this.steps > this.maxIterations) {
return false;
}if (this.x1 == this.x2) {
this.resetSteps$();
if (!this.nextSplit$()) break;
} else if (this.fastValues && this.x2 - this.x1 == 1 ) {
this.resetSteps$();
this.eigenBB_2x2$I(this.x1);
this.setSubmatrix$I$I(this.x2, this.x2);
} else if (this.steps >= this.nextExceptional) {
this.exceptionShift$();
} else {
if (!this.checkForAndHandleZeros$()) {
if (this.followScript) {
p$1.performScriptedStep.apply(this, []);
} else {
p$1.performDynamicStep.apply(this, []);
}}}}
return true;
});

Clazz.newMeth(C$, 'performDynamicStep', function () {
if (this.findingZeros) {
if (this.steps > 6) {
this.findingZeros=false;
} else {
var scale=p$1.computeBulgeScale.apply(this, []);
this.performImplicitSingleStep$D$D$Z(scale, 0, false);
}} else {
var scale=p$1.computeBulgeScale.apply(this, []);
var lambda=this.selectWilkinsonShift$D(scale);
this.performImplicitSingleStep$D$D$Z(scale, lambda, false);
}}, p$1);

Clazz.newMeth(C$, 'performScriptedStep', function () {
var scale=p$1.computeBulgeScale.apply(this, []);
if (this.steps > 10) {
this.followScript=false;
} else {
var s=this.values[this.x2] / scale;
this.performImplicitSingleStep$D$D$Z(scale, s * s, false);
}}, p$1);

Clazz.newMeth(C$, 'incrementSteps$', function () {
this.steps++;
this.totalSteps++;
});

Clazz.newMeth(C$, 'isOffZero$I', function (i) {
var bottom=Math.abs(this.diag[i]) + Math.abs(this.diag[i + 1]);
return Math.abs(this.off[i]) <= bottom * $I$(3).EPS ;
});

Clazz.newMeth(C$, 'isDiagonalZero$I', function (i) {
var bottom=Math.abs(this.diag[i + 1]) + Math.abs(this.off[i]);
return Math.abs(this.diag[i]) <= bottom * $I$(3).EPS ;
});

Clazz.newMeth(C$, 'resetSteps$', function () {
this.steps=0;
this.nextExceptional=this.exceptionalThresh;
this.numExceptional=0;
});

Clazz.newMeth(C$, 'nextSplit$', function () {
if (this.numSplits == 0) return false;
this.x2=this.splits[--this.numSplits];
if (this.numSplits > 0) this.x1=this.splits[this.numSplits - 1] + 1;
 else this.x1=0;
return true;
});

Clazz.newMeth(C$, 'performImplicitSingleStep$D$D$Z', function (scale, lambda, byAngle) {
this.createBulge$I$D$D$Z(this.x1, lambda, scale, byAngle);
for (var i=this.x1; i < this.x2 - 1 && this.bulge != 0.0  ; i++) {
this.removeBulgeLeft$I$Z(i, true);
if (this.bulge == 0 ) break;
this.removeBulgeRight$I(i);
}
if (this.bulge != 0 ) this.removeBulgeLeft$I$Z(this.x2 - 1, false);
this.incrementSteps$();
});

Clazz.newMeth(C$, 'updateRotator$org_ejml_data_DenseMatrix64F$I$I$D$D', function (Q, m, n, c, s) {
var rowA=m * Q.numCols;
var rowB=n * Q.numCols;
var endA=rowA + Q.numCols;
for (; rowA != endA; rowA++, rowB++) {
var a=Q.get$I(rowA);
var b=Q.get$I(rowB);
Q.set$I$D(rowA, c * a + s * b);
Q.set$I$D(rowB, -s * a + c * b);
}
});

Clazz.newMeth(C$, 'computeBulgeScale', function () {
var b11=this.diag[this.x1];
var b12=this.off[this.x1];
return Math.max(Math.abs(b11), Math.abs(b12));
}, p$1);

Clazz.newMeth(C$, 'createBulge$I$D$D$Z', function (x1, p, scale, byAngle) {
var b11=this.diag[x1];
var b12=this.off[x1];
var b22=this.diag[x1 + 1];
if (byAngle) {
this.c=Math.cos(p);
this.s=Math.sin(p);
} else {
var u1=(b11 / scale) * (b11 / scale) - p;
var u2=(b12 / scale) * (b11 / scale);
var gamma=Math.sqrt(u1 * u1 + u2 * u2);
this.c=u1 / gamma;
this.s=u2 / gamma;
}this.diag[x1]=b11 * this.c + b12 * this.s;
this.off[x1]=b12 * this.c - b11 * this.s;
this.diag[x1 + 1]=b22 * this.c;
this.bulge=b22 * this.s;
if (this.Vt != null ) {
this.updateRotator$org_ejml_data_DenseMatrix64F$I$I$D$D(this.Vt, x1, x1 + 1, this.c, this.s);
}});

Clazz.newMeth(C$, 'computeRotator$D$D', function (rise, run) {
if (Math.abs(rise) < Math.abs(run) ) {
var k=rise / run;
var bottom=Math.sqrt(1.0 + k * k);
this.s=1.0 / bottom;
this.c=k / bottom;
} else {
var t=run / rise;
var bottom=Math.sqrt(1.0 + t * t);
this.c=1.0 / bottom;
this.s=t / bottom;
}});

Clazz.newMeth(C$, 'removeBulgeLeft$I$Z', function (x1, notLast) {
var b11=this.diag[x1];
var b12=this.off[x1];
var b22=this.diag[x1 + 1];
this.computeRotator$D$D(b11, this.bulge);
this.diag[x1]=this.c * b11 + this.s * this.bulge;
this.off[x1]=this.c * b12 + this.s * b22;
this.diag[x1 + 1]=this.c * b22 - this.s * b12;
if (notLast) {
var b23=this.off[x1 + 1];
this.bulge=this.s * b23;
this.off[x1 + 1]=this.c * b23;
}if (this.Ut != null ) {
this.updateRotator$org_ejml_data_DenseMatrix64F$I$I$D$D(this.Ut, x1, x1 + 1, this.c, this.s);
}});

Clazz.newMeth(C$, 'removeBulgeRight$I', function (x1) {
var b12=this.off[x1];
var b22=this.diag[x1 + 1];
var b23=this.off[x1 + 1];
this.computeRotator$D$D(b12, this.bulge);
this.off[x1]=b12 * this.c + this.bulge * this.s;
this.diag[x1 + 1]=b22 * this.c + b23 * this.s;
this.off[x1 + 1]=-b22 * this.s + b23 * this.c;
var b33=this.diag[x1 + 2];
this.diag[x1 + 2]=b33 * this.c;
this.bulge=b33 * this.s;
if (this.Vt != null ) {
this.updateRotator$org_ejml_data_DenseMatrix64F$I$I$D$D(this.Vt, x1 + 1, x1 + 2, this.c, this.s);
}});

Clazz.newMeth(C$, 'setSubmatrix$I$I', function (x1, x2) {
this.x1=x1;
this.x2=x2;
});

Clazz.newMeth(C$, 'selectWilkinsonShift$D', function (scale) {
var a11;
var a22;
if (this.x2 - this.x1 > 1) {
var d1=this.diag[this.x2 - 1] / scale;
var o1=this.off[this.x2 - 2] / scale;
var d2=this.diag[this.x2] / scale;
var o2=this.off[this.x2 - 1] / scale;
a11=o1 * o1 + d1 * d1;
a22=o2 * o2 + d2 * d2;
this.eigenSmall.symm2x2_fast$D$D$D(a11, o2 * d1, a22);
} else {
var a=this.diag[this.x2 - 1] / scale;
var b=this.off[this.x2 - 1] / scale;
var c=this.diag[this.x2] / scale;
a11=a * a;
a22=b * b + c * c;
this.eigenSmall.symm2x2_fast$D$D$D(a11, a * b, a22);
}var diff0=Math.abs(this.eigenSmall.value0.real - a22);
var diff1=Math.abs(this.eigenSmall.value1.real - a22);
return diff0 < diff1  ? this.eigenSmall.value0.real : this.eigenSmall.value1.real;
});

Clazz.newMeth(C$, 'eigenBB_2x2$I', function (x1) {
var b11=this.diag[x1];
var b12=this.off[x1];
var b22=this.diag[x1 + 1];
var absA=Math.abs(b11);
var absB=Math.abs(b12);
var absC=Math.abs(b22);
var scale=absA > absB  ? absA : absB;
if (absC > scale ) scale=absC;
if (scale == 0 ) return;
b11 /= scale;
b12 /= scale;
b22 /= scale;
this.eigenSmall.symm2x2_fast$D$D$D(b11 * b11, b11 * b12, b12 * b12 + b22 * b22);
this.off[x1]=0;
this.diag[x1]=scale * Math.sqrt(this.eigenSmall.value0.real);
var sgn=Math.signum(this.eigenSmall.value1.real);
this.diag[x1 + 1]=sgn * scale * Math.sqrt(Math.abs(this.eigenSmall.value1.real)) ;
});

Clazz.newMeth(C$, 'checkForAndHandleZeros$', function () {
for (var i=this.x2 - 1; i >= this.x1; i--) {
if (this.isOffZero$I(i)) {
this.resetSteps$();
this.splits[this.numSplits++]=i;
this.x1=i + 1;
return true;
}}
for (var i=this.x2 - 1; i >= this.x1; i--) {
if (this.isDiagonalZero$I(i)) {
p$1.pushRight$I.apply(this, [i]);
this.resetSteps$();
this.splits[this.numSplits++]=i;
this.x1=i + 1;
return true;
}}
return false;
});

Clazz.newMeth(C$, 'pushRight$I', function (row) {
if (this.isOffZero$I(row)) return;
p$1.rotatorPushRight$I.apply(this, [row]);
var end=this.N - 2 - row ;
for (var i=0; i < end && this.bulge != 0  ; i++) {
p$1.rotatorPushRight2$I$I.apply(this, [row, i + 2]);
}
}, p$1);

Clazz.newMeth(C$, 'rotatorPushRight$I', function (m) {
var b11=this.off[m];
var b21=this.diag[m + 1];
this.computeRotator$D$D(b21, -b11);
this.off[m]=0;
this.diag[m + 1]=b21 * this.c - b11 * this.s;
if (m + 2 < this.N) {
var b22=this.off[m + 1];
this.off[m + 1]=b22 * this.c;
this.bulge=b22 * this.s;
} else {
this.bulge=0;
}if (this.Ut != null ) {
this.updateRotator$org_ejml_data_DenseMatrix64F$I$I$D$D(this.Ut, m, m + 1, this.c, this.s);
}}, p$1);

Clazz.newMeth(C$, 'rotatorPushRight2$I$I', function (m, offset) {
var b11=this.bulge;
var b12=this.diag[m + offset];
this.computeRotator$D$D(b12, -b11);
this.diag[m + offset]=b12 * this.c - b11 * this.s;
if (m + offset < this.N - 1) {
var b22=this.off[m + offset];
this.off[m + offset]=b22 * this.c;
this.bulge=b22 * this.s;
}if (this.Ut != null ) {
this.updateRotator$org_ejml_data_DenseMatrix64F$I$I$D$D(this.Ut, m, m + offset, this.c, this.s);
}}, p$1);

Clazz.newMeth(C$, 'exceptionShift$', function () {
this.numExceptional++;
var mag=0.05 * this.numExceptional;
if (mag > 1.0 ) mag=1.0;
var angle=2.0 * 3.141592653589793 * (this.rand.nextDouble$() - 0.5) * mag ;
this.performImplicitSingleStep$D$D$Z(0, angle, true);
this.nextExceptional=this.steps + this.exceptionalThresh;
});

Clazz.newMeth(C$, 'createQ$I$D$D$Z', function (x1, c, s, transposed) {
return p$1.createQ$I$I$D$D$Z.apply(this, [x1, x1 + 1, c, s, transposed]);
}, p$1);

Clazz.newMeth(C$, 'createQ$I$I$D$D$Z', function (x1, x2, c, s, transposed) {
var Q=$I$(4).identity$I(this.N);
Q.set$I$I$D(x1, x1, c);
if (transposed) {
Q.set$I$I$D(x1, x2, s);
Q.set$I$I$D(x2, x1, -s);
} else {
Q.set$I$I$D(x1, x2, -s);
Q.set$I$I$D(x2, x1, s);
}Q.set$I$I$D(x2, x2, c);
return Q;
}, p$1);

Clazz.newMeth(C$, 'createB', function () {
var B=Clazz.new_($I$(4,1).c$$I$I,[this.N, this.N]);
for (var i=0; i < this.N - 1; i++) {
B.set$I$I$D(i, i, this.diag[i]);
B.set$I$I$D(i, i + 1, this.off[i]);
}
B.set$I$I$D(this.N - 1, this.N - 1, this.diag[this.N - 1]);
return B;
}, p$1);

Clazz.newMeth(C$, 'printMatrix$', function () {
System.out.print$S("Off Diag[ ");
for (var j=0; j < this.N - 1; j++) {
System.out.printf$S$OA("%5.2f ", [new Double(this.off[j])]);
}
System.out.println$();
System.out.print$S("    Diag[ ");
for (var j=0; j < this.N; j++) {
System.out.printf$S$OA("%5.2f ", [new Double(this.diag[j])]);
}
System.out.println$();
});

Clazz.newMeth(C$, 'getNumberOfSingularValues$', function () {
return this.N;
});

Clazz.newMeth(C$, 'getSingularValue$I', function (index) {
return this.diag[index];
});

Clazz.newMeth(C$, 'setFastValues$Z', function (b) {
this.fastValues=b;
});

Clazz.newMeth(C$, 'getSingularValues$', function () {
return this.diag;
});

Clazz.newMeth(C$, 'getDiag$', function () {
return this.diag;
});

Clazz.newMeth(C$, 'getOff$', function () {
return this.off;
});

Clazz.newMeth(C$, 'getMaxValue$', function () {
return this.maxValue;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
