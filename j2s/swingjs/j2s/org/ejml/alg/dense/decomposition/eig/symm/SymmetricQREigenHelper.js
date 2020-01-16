(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.eig.symm"),p$1={},I$=[[0,'java.util.Random','org.ejml.alg.dense.decomposition.eig.EigenvalueSmall','org.ejml.UtilEjml']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SymmetricQREigenHelper");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.rand=Clazz.new_($I$(1,1).c$$J,[3434270]);
this.eigenSmall=Clazz.new_($I$(2,1));
}, 1);

C$.$fields$=[['D',['bulge','c','s','c2','s2','cs'],'I',['steps','numExceptional','lastExceptional','N','x1','x2','numSplits'],'O',['rand','java.util.Random','eigenSmall','org.ejml.alg.dense.decomposition.eig.EigenvalueSmall','Q','org.ejml.data.DenseMatrix64F','diag','double[]','+off','splits','int[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.splits=Clazz.array(Integer.TYPE, [1]);
}, 1);

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

Clazz.newMeth(C$, 'setQ$org_ejml_data_DenseMatrix64F', function (q) {
this.Q=q;
});

Clazz.newMeth(C$, 'incrementSteps$', function () {
this.steps++;
});

Clazz.newMeth(C$, 'init$DA$DA$I', function (diag, off, numCols) {
this.reset$I(numCols);
this.diag=diag;
this.off=off;
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

Clazz.newMeth(C$, 'reset$I', function (N) {
this.N=N;
this.diag=null;
this.off=null;
if (this.splits.length < N) {
this.splits=Clazz.array(Integer.TYPE, [N]);
}this.numSplits=0;
this.x1=0;
this.x2=N - 1;
this.steps=this.numExceptional=this.lastExceptional=0;
this.Q=null;
});

Clazz.newMeth(C$, 'copyDiag$DA', function (ret) {
if (ret == null  || ret.length < this.N ) {
ret=Clazz.array(Double.TYPE, [this.N]);
}System.arraycopy$O$I$O$I$I(this.diag, 0, ret, 0, this.N);
return ret;
});

Clazz.newMeth(C$, 'copyOff$DA', function (ret) {
if (ret == null  || ret.length < this.N - 1 ) {
ret=Clazz.array(Double.TYPE, [this.N - 1]);
}System.arraycopy$O$I$O$I$I(this.off, 0, ret, 0, this.N - 1);
return ret;
});

Clazz.newMeth(C$, 'copyEigenvalues$DA', function (ret) {
if (ret == null  || ret.length < this.N ) {
ret=Clazz.array(Double.TYPE, [this.N]);
}System.arraycopy$O$I$O$I$I(this.diag, 0, ret, 0, this.N);
return ret;
});

Clazz.newMeth(C$, 'setSubmatrix$I$I', function (x1, x2) {
this.x1=x1;
this.x2=x2;
});

Clazz.newMeth(C$, 'isZero$I', function (index) {
var bottom=Math.abs(this.diag[index]) + Math.abs(this.diag[index + 1]);
return (Math.abs(this.off[index]) <= bottom * $I$(3).EPS );
});

Clazz.newMeth(C$, 'performImplicitSingleStep$D$Z', function (lambda, byAngle) {
if (this.x2 - this.x1 == 1) {
this.createBulge2by2$I$D$Z(this.x1, lambda, byAngle);
} else {
this.createBulge$I$D$Z(this.x1, lambda, byAngle);
for (var i=this.x1; i < this.x2 - 2 && this.bulge != 0.0  ; i++) {
this.removeBulge$I(i);
}
if (this.bulge != 0.0 ) this.removeBulgeEnd$I(this.x2 - 2);
}});

Clazz.newMeth(C$, 'updateQ$I$I$D$D', function (m, n, c, s) {
var rowA=m * this.N;
var rowB=n * this.N;
var endA=rowA + this.N;
while (rowA < endA){
var a=this.Q.data[rowA];
var b=this.Q.data[rowB];
this.Q.data[rowA++]=c * a + s * b;
this.Q.data[rowB++]=-s * a + c * b;
}
});

Clazz.newMeth(C$, 'createBulge$I$D$Z', function (x1, p, byAngle) {
var a11=this.diag[x1];
var a22=this.diag[x1 + 1];
var a12=this.off[x1];
var a23=this.off[x1 + 1];
if (byAngle) {
this.c=Math.cos(p);
this.s=Math.sin(p);
this.c2=this.c * this.c;
this.s2=this.s * this.s;
this.cs=this.c * this.s;
} else {
p$1.computeRotation$D$D.apply(this, [a11 - p, a12]);
}this.diag[x1]=this.c2 * a11 + 2.0 * this.cs * a12  + this.s2 * a22;
this.diag[x1 + 1]=this.c2 * a22 - 2.0 * this.cs * a12  + this.s2 * a11;
this.off[x1]=a12 * (this.c2 - this.s2) + this.cs * (a22 - a11);
this.off[x1 + 1]=this.c * a23;
this.bulge=this.s * a23;
if (this.Q != null ) this.updateQ$I$I$D$D(x1, x1 + 1, this.c, this.s);
});

Clazz.newMeth(C$, 'createBulge2by2$I$D$Z', function (x1, p, byAngle) {
var a11=this.diag[x1];
var a22=this.diag[x1 + 1];
var a12=this.off[x1];
if (byAngle) {
this.c=Math.cos(p);
this.s=Math.sin(p);
this.c2=this.c * this.c;
this.s2=this.s * this.s;
this.cs=this.c * this.s;
} else {
p$1.computeRotation$D$D.apply(this, [a11 - p, a12]);
}this.diag[x1]=this.c2 * a11 + 2.0 * this.cs * a12  + this.s2 * a22;
this.diag[x1 + 1]=this.c2 * a22 - 2.0 * this.cs * a12  + this.s2 * a11;
this.off[x1]=a12 * (this.c2 - this.s2) + this.cs * (a22 - a11);
if (this.Q != null ) this.updateQ$I$I$D$D(x1, x1 + 1, this.c, this.s);
});

Clazz.newMeth(C$, 'computeRotation$D$D', function (run, rise) {
if (Math.abs(rise) > Math.abs(run) ) {
var k=run / rise;
var bottom=1.0 + k * k;
var bottom_sq=Math.sqrt(bottom);
this.s2=1.0 / bottom;
this.c2=k * k / bottom;
this.cs=k / bottom;
this.s=1.0 / bottom_sq;
this.c=k / bottom_sq;
} else {
var t=rise / run;
var bottom=1.0 + t * t;
var bottom_sq=Math.sqrt(bottom);
this.c2=1.0 / bottom;
this.s2=t * t / bottom;
this.cs=t / bottom;
this.c=1.0 / bottom_sq;
this.s=t / bottom_sq;
}}, p$1);

Clazz.newMeth(C$, 'removeBulge$I', function (x1) {
var a22=this.diag[x1 + 1];
var a33=this.diag[x1 + 2];
var a12=this.off[x1];
var a23=this.off[x1 + 1];
var a34=this.off[x1 + 2];
p$1.computeRotation$D$D.apply(this, [a12, this.bulge]);
this.diag[x1 + 1]=this.c2 * a22 + 2.0 * this.cs * a23  + this.s2 * a33;
this.diag[x1 + 2]=this.c2 * a33 - 2.0 * this.cs * a23  + this.s2 * a22;
this.off[x1]=this.c * a12 + this.s * this.bulge;
this.off[x1 + 1]=a23 * (this.c2 - this.s2) + this.cs * (a33 - a22);
this.off[x1 + 2]=this.c * a34;
this.bulge=this.s * a34;
if (this.Q != null ) this.updateQ$I$I$D$D(x1 + 1, x1 + 2, this.c, this.s);
});

Clazz.newMeth(C$, 'removeBulgeEnd$I', function (x1) {
var a22=this.diag[x1 + 1];
var a12=this.off[x1];
var a23=this.off[x1 + 1];
var a33=this.diag[x1 + 2];
p$1.computeRotation$D$D.apply(this, [a12, this.bulge]);
this.diag[x1 + 1]=this.c2 * a22 + 2.0 * this.cs * a23  + this.s2 * a33;
this.diag[x1 + 2]=this.c2 * a33 - 2.0 * this.cs * a23  + this.s2 * a22;
this.off[x1]=this.c * a12 + this.s * this.bulge;
this.off[x1 + 1]=a23 * (this.c2 - this.s2) + this.cs * (a33 - a22);
if (this.Q != null ) this.updateQ$I$I$D$D(x1 + 1, x1 + 2, this.c, this.s);
});

Clazz.newMeth(C$, 'eigenvalue2by2$I', function (x1) {
var a=this.diag[x1];
var b=this.off[x1];
var c=this.diag[x1 + 1];
var absA=Math.abs(a);
var absB=Math.abs(b);
var absC=Math.abs(c);
var scale=absA > absB  ? absA : absB;
if (absC > scale ) scale=absC;
if (scale == 0 ) {
this.off[x1]=0;
this.diag[x1]=0;
this.diag[x1 + 1]=0;
return;
}a /= scale;
b /= scale;
c /= scale;
this.eigenSmall.symm2x2_fast$D$D$D(a, b, c);
this.off[x1]=0;
this.diag[x1]=scale * this.eigenSmall.value0.real;
this.diag[x1 + 1]=scale * this.eigenSmall.value1.real;
});

Clazz.newMeth(C$, 'exceptionalShift$', function () {
this.numExceptional++;
var mag=0.05 * this.numExceptional;
if (mag > 1.0 ) mag=1.0;
var theta=2.0 * (this.rand.nextDouble$() - 0.5) * mag ;
this.performImplicitSingleStep$D$Z(theta, true);
this.lastExceptional=this.steps;
});

Clazz.newMeth(C$, 'nextSplit$', function () {
if (this.numSplits == 0) return false;
this.x2=this.splits[--this.numSplits];
if (this.numSplits > 0) this.x1=this.splits[this.numSplits - 1] + 1;
 else this.x1=0;
return true;
});

Clazz.newMeth(C$, 'computeShift$', function () {
if (this.x2 - this.x1 >= 1) return this.computeWilkinsonShift$();
 else return this.diag[this.x2];
});

Clazz.newMeth(C$, 'computeWilkinsonShift$', function () {
var a=this.diag[this.x2 - 1];
var b=this.off[this.x2 - 1];
var c=this.diag[this.x2];
var absA=Math.abs(a);
var absB=Math.abs(b);
var absC=Math.abs(c);
var scale=absA > absB  ? absA : absB;
if (absC > scale ) scale=absC;
if (scale == 0 ) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["this should never happen"]);
}a /= scale;
b /= scale;
c /= scale;
this.eigenSmall.symm2x2_fast$D$D$D(a, b, c);
var diff0=Math.abs(this.eigenSmall.value0.real - c);
var diff1=Math.abs(this.eigenSmall.value1.real - c);
if (diff0 < diff1 ) return scale * this.eigenSmall.value0.real;
 else return scale * this.eigenSmall.value1.real;
});

Clazz.newMeth(C$, 'getMatrixSize$', function () {
return this.N;
});

Clazz.newMeth(C$, 'resetSteps$', function () {
this.steps=0;
this.lastExceptional=0;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
