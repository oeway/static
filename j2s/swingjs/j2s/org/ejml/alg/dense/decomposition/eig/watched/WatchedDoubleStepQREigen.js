(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.eig.watched"),p$1={},I$=[[0,'java.util.Random','org.ejml.alg.dense.decomposition.eig.EigenvalueSmall','org.ejml.UtilEjml','org.ejml.data.DenseMatrix64F','org.ejml.data.Complex64F','org.ejml.alg.dense.decomposition.qr.QrHelperFunctions','org.ejml.ops.MatrixFeatures']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "WatchedDoubleStepQREigen");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.rand=Clazz.new_($I$(1,1).c$$J,[9026]);
this.valueSmall=Clazz.new_($I$(2,1));
this.temp=Clazz.array(Double.TYPE, [9]);
this.printHumps=false;
this.checkHessenberg=false;
this.checkOrthogonal=false;
this.checkUncountable=false;
this.useStandardEq=false;
this.useCareful2x2=true;
this.normalize=true;
this.exceptionalThreshold=20;
this.maxIterations=this.exceptionalThreshold * 20;
this.createR=true;
}, 1);

C$.$fields$=[['Z',['printHumps','checkHessenberg','checkOrthogonal','checkUncountable','useStandardEq','useCareful2x2','normalize','createR'],'D',['gamma'],'I',['N','steps','numEigen','lastExceptional','numExceptional','exceptionalThreshold','maxIterations'],'O',['rand','java.util.Random','A','org.ejml.data.DenseMatrix64F','+u','+_temp','numStepsFind','int[]','eigenvalues','org.ejml.data.Complex64F[]','valueSmall','org.ejml.alg.dense.decomposition.eig.EigenvalueSmall','temp','double[]','Q','org.ejml.data.DenseMatrix64F']]]

Clazz.newMeth(C$, 'incrementSteps$', function () {
this.steps++;
});

Clazz.newMeth(C$, 'setQ$org_ejml_data_DenseMatrix64F', function (Q) {
this.Q=Q;
});

Clazz.newMeth(C$, 'addEigenvalue$D', function (v) {
this.numStepsFind[this.numEigen]=this.steps;
this.eigenvalues[this.numEigen].set$D$D(v, 0);
this.numEigen++;
this.steps=0;
this.lastExceptional=0;
}, p$1);

Clazz.newMeth(C$, 'addEigenvalue$D$D', function (v, i) {
this.numStepsFind[this.numEigen]=this.steps;
this.eigenvalues[this.numEigen].set$D$D(v, i);
this.numEigen++;
this.steps=0;
this.lastExceptional=0;
}, p$1);

Clazz.newMeth(C$, 'setChecks$Z$Z$Z', function (hessenberg, orthogonal, uncountable) {
this.checkHessenberg=hessenberg;
this.checkOrthogonal=orthogonal;
this.checkUncountable=uncountable;
});

Clazz.newMeth(C$, 'isZero$I$I', function (x1, x2) {
var target=Math.abs(this.A.get$I$I(x1, x2));
var above=Math.abs(this.A.get$I$I(x1 - 1, x2));
var right=Math.abs(this.A.get$I$I(x1, x2 + 1));
return target <= 0.5 * $I$(3).EPS * (above + right)  ;
});

Clazz.newMeth(C$, 'setup$org_ejml_data_DenseMatrix64F', function (A) {
if (A.numRows != A.numCols) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Must be square"]);
if (this.N != A.numRows) {
this.N=A.numRows;
this.A=A.copy$();
this.u=Clazz.new_($I$(4,1).c$$I$I,[A.numRows, 1]);
this._temp=Clazz.new_($I$(4,1).c$$I$I,[A.numRows, 1]);
this.numStepsFind=Clazz.array(Integer.TYPE, [A.numRows]);
} else {
this.A.set$org_ejml_data_D1Matrix64F(A);
$I$(3).memset$IA$I$I(this.numStepsFind, 0, this.numStepsFind.length);
}for (var i=2; i < this.N; i++) {
for (var j=0; j < i - 1; j++) {
this.A.set$I$I$D(i, j, 0);
}
}
this.eigenvalues=Clazz.array($I$(5), [A.numRows]);
for (var i=0; i < this.eigenvalues.length; i++) {
this.eigenvalues[i]=Clazz.new_($I$(5,1));
}
this.numEigen=0;
this.lastExceptional=0;
this.numExceptional=0;
this.steps=0;
});

Clazz.newMeth(C$, 'exceptionalShift$I$I', function (x1, x2) {
if (this.printHumps) System.out.println$S("Performing exceptional implicit double step");
var val=Math.abs(this.A.get$I$I(x2, x2));
if (val == 0 ) val=1;
this.numExceptional++;
var p=1 - Math.pow(0.1, this.numExceptional);
val *= p + 2.0 * (1.0 - p) * (this.rand.nextDouble$() - 0.5) ;
if (this.rand.nextBoolean$()) val=-val;
this.performImplicitSingleStep$I$I$D(x1, x2, val);
this.lastExceptional=this.steps;
});

Clazz.newMeth(C$, 'implicitDoubleStep$I$I', function (x1, x2) {
if (this.printHumps) System.out.println$S("Performing implicit double step");
var z11=this.A.get$I$I(x2 - 1, x2 - 1);
var z12=this.A.get$I$I(x2 - 1, x2);
var z21=this.A.get$I$I(x2, x2 - 1);
var z22=this.A.get$I$I(x2, x2);
var a11=this.A.get$I$I(x1, x1);
var a21=this.A.get$I$I(x1 + 1, x1);
var a12=this.A.get$I$I(x1, x1 + 1);
var a22=this.A.get$I$I(x1 + 1, x1 + 1);
var a32=this.A.get$I$I(x1 + 2, x1 + 1);
if (this.normalize) {
this.temp[0]=a11;
this.temp[1]=a21;
this.temp[2]=a12;
this.temp[3]=a22;
this.temp[4]=a32;
this.temp[5]=z11;
this.temp[6]=z22;
this.temp[7]=z12;
this.temp[8]=z21;
var max=Math.abs(this.temp[0]);
for (var j=1; j < this.temp.length; j++) {
if (Math.abs(this.temp[j]) > max ) max=Math.abs(this.temp[j]);
}
a11 /= max;
a21 /= max;
a12 /= max;
a22 /= max;
a32 /= max;
z11 /= max;
z22 /= max;
z12 /= max;
z21 /= max;
}var b11;
var b21;
var b31;
if (this.useStandardEq) {
b11=((a11 - z11) * (a11 - z22) - z21 * z12) / a21 + a12;
b21=a11 + a22 - z11 - z22;
b31=a32;
} else {
b11=((a11 - z11) * (a11 - z22) - z21 * z12) + a12 * a21;
b21=(a11 + a22 - z11 - z22) * a21;
b31=a32 * a21;
}p$1.performImplicitDoubleStep$I$I$D$D$D.apply(this, [x1, x2, b11, b21, b31]);
});

Clazz.newMeth(C$, 'performImplicitDoubleStep$I$I$D$D', function (x1, x2, real, img) {
var a11=this.A.get$I$I(x1, x1);
var a21=this.A.get$I$I(x1 + 1, x1);
var a12=this.A.get$I$I(x1, x1 + 1);
var a22=this.A.get$I$I(x1 + 1, x1 + 1);
var a32=this.A.get$I$I(x1 + 2, x1 + 1);
var p_plus_t=2.0 * real;
var p_times_t=real * real + img * img;
var b11;
var b21;
var b31;
if (this.useStandardEq) {
b11=(a11 * a11 - p_plus_t * a11 + p_times_t) / a21 + a12;
b21=a11 + a22 - p_plus_t;
b31=a32;
} else {
b11=(a11 * a11 - p_plus_t * a11 + p_times_t) + a12 * a21;
b21=(a11 + a22 - p_plus_t) * a21;
b31=a32 * a21;
}p$1.performImplicitDoubleStep$I$I$D$D$D.apply(this, [x1, x2, b11, b21, b31]);
});

Clazz.newMeth(C$, 'performImplicitDoubleStep$I$I$D$D$D', function (x1, x2, b11, b21, b31) {
if (!this.bulgeDoubleStepQn$I$D$D$D$D$Z(x1, b11, b21, b31, 0, false)) return;
if (this.Q != null ) {
$I$(6).rank1UpdateMultR$org_ejml_data_DenseMatrix64F$DA$D$I$I$I$DA(this.Q, this.u.data, this.gamma, 0, x1, x1 + 3, this._temp.data);
if (this.checkOrthogonal && !$I$(7).isOrthogonal$org_ejml_data_DenseMatrix64F$D(this.Q, 1.0E-8) ) {
this.u.print$();
this.Q.print$();
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Bad"]);
}}if (this.printHumps) {
System.out.println$S("Applied first Q matrix, it should be humped now. A = ");
this.A.print$S("%12.3e");
System.out.println$S("Pushing the hump off the matrix.");
}for (var i=x1; i < x2 - 2; i++) {
if (this.bulgeDoubleStepQn$I(i) && this.Q != null  ) {
$I$(6).rank1UpdateMultR$org_ejml_data_DenseMatrix64F$DA$D$I$I$I$DA(this.Q, this.u.data, this.gamma, 0, i + 1, i + 4, this._temp.data);
if (this.checkOrthogonal && !$I$(7).isOrthogonal$org_ejml_data_DenseMatrix64F$D(this.Q, 1.0E-8) ) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Bad"]);
}if (this.printHumps) {
System.out.println$S("i = " + i + " A = " );
this.A.print$S("%12.3e");
}}
if (this.printHumps) System.out.println$S("removing last bump");
if (x2 - 2 >= 0 && this.bulgeSingleStepQn$I(x2 - 2)  && this.Q != null  ) {
$I$(6).rank1UpdateMultR$org_ejml_data_DenseMatrix64F$DA$D$I$I$I$DA(this.Q, this.u.data, this.gamma, 0, x2 - 1, x2 + 1, this._temp.data);
if (this.checkOrthogonal && !$I$(7).isOrthogonal$org_ejml_data_DenseMatrix64F$D(this.Q, 1.0E-8) ) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Bad"]);
}if (this.printHumps) {
System.out.println$S(" A = ");
this.A.print$S("%12.3e");
}if (this.checkHessenberg && !$I$(7).isUpperTriangle$org_ejml_data_DenseMatrix64F$I$D(this.A, 1, 1.0E-12) ) {
this.A.print$S("%12.3e");
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Bad matrix"]);
}}, p$1);

Clazz.newMeth(C$, 'performImplicitSingleStep$I$I$D', function (x1, x2, eigenvalue) {
if (!this.createBulgeSingleStep$I$D(x1, eigenvalue)) return;
if (this.Q != null ) {
$I$(6).rank1UpdateMultR$org_ejml_data_DenseMatrix64F$DA$D$I$I$I$DA(this.Q, this.u.data, this.gamma, 0, x1, x1 + 2, this._temp.data);
if (this.checkOrthogonal && !$I$(7).isOrthogonal$org_ejml_data_DenseMatrix64F$D(this.Q, 1.0E-8) ) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Bad"]);
}if (this.printHumps) {
System.out.println$S("Applied first Q matrix, it should be humped now. A = ");
this.A.print$S("%12.3e");
System.out.println$S("Pushing the hump off the matrix.");
}for (var i=x1; i < x2 - 1; i++) {
if (this.bulgeSingleStepQn$I(i) && this.Q != null  ) {
$I$(6).rank1UpdateMultR$org_ejml_data_DenseMatrix64F$DA$D$I$I$I$DA(this.Q, this.u.data, this.gamma, 0, i + 1, i + 3, this._temp.data);
if (this.checkOrthogonal && !$I$(7).isOrthogonal$org_ejml_data_DenseMatrix64F$D(this.Q, 1.0E-8) ) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Bad"]);
}if (this.printHumps) {
System.out.println$S("i = " + i + " A = " );
this.A.print$S("%12.3e");
}}
if (this.checkHessenberg && !$I$(7).isUpperTriangle$org_ejml_data_DenseMatrix64F$I$D(this.A, 1, 1.0E-12) ) {
this.A.print$S("%12.3e");
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Bad matrix"]);
}});

Clazz.newMeth(C$, 'createBulgeSingleStep$I$D', function (x1, eigenvalue) {
var b11=this.A.get$I$I(x1, x1) - eigenvalue;
var b21=this.A.get$I$I(x1 + 1, x1);
var threshold=Math.abs(this.A.get$I$I(x1, x1)) * $I$(3).EPS;
return this.bulgeSingleStepQn$I$D$D$D$Z(x1, b11, b21, threshold, false);
});

Clazz.newMeth(C$, 'bulgeDoubleStepQn$I', function (i) {
var a11=this.A.get$I$I(i + 1, i);
var a21=this.A.get$I$I(i + 2, i);
var a31=this.A.get$I$I(i + 3, i);
var threshold=Math.abs(this.A.get$I$I(i, i)) * $I$(3).EPS;
return this.bulgeDoubleStepQn$I$D$D$D$D$Z(i + 1, a11, a21, a31, threshold, true);
});

Clazz.newMeth(C$, 'bulgeDoubleStepQn$I$D$D$D$D$Z', function (i, a11, a21, a31, threshold, set) {
var max;
if (this.normalize) {
var absA11=Math.abs(a11);
var absA21=Math.abs(a21);
var absA31=Math.abs(a31);
max=absA11 > absA21  ? absA11 : absA21;
if (absA31 > max ) max=absA31;
if (max <= threshold ) {
if (set) {
this.A.set$I$I$D(i, i - 1, 0);
this.A.set$I$I$D(i + 1, i - 1, 0);
this.A.set$I$I$D(i + 2, i - 1, 0);
}return false;
}a11 /= max;
a21 /= max;
a31 /= max;
} else {
max=1;
}var tau=Math.sqrt(a11 * a11 + a21 * a21 + a31 * a31);
if (a11 < 0 ) tau=-tau;
var div=a11 + tau;
this.u.set$I$I$D(i, 0, 1);
this.u.set$I$I$D(i + 1, 0, a21 / div);
this.u.set$I$I$D(i + 2, 0, a31 / div);
this.gamma=div / tau;
$I$(6).rank1UpdateMultR$org_ejml_data_DenseMatrix64F$DA$D$I$I$I$DA(this.A, this.u.data, this.gamma, 0, i, i + 3, this._temp.data);
if (set) {
this.A.set$I$I$D(i, i - 1, -max * tau);
this.A.set$I$I$D(i + 1, i - 1, 0);
this.A.set$I$I$D(i + 2, i - 1, 0);
}if (this.printHumps) {
System.out.println$S("  After Q.   A =");
this.A.print$();
}$I$(6).rank1UpdateMultL$org_ejml_data_DenseMatrix64F$DA$D$I$I$I(this.A, this.u.data, this.gamma, 0, i, i + 3);
if (this.checkUncountable && $I$(7).hasUncountable$org_ejml_data_D1Matrix64F(this.A) ) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["bad matrix"]);
}return true;
});

Clazz.newMeth(C$, 'bulgeSingleStepQn$I', function (i) {
var a11=this.A.get$I$I(i + 1, i);
var a21=this.A.get$I$I(i + 2, i);
var threshold=Math.abs(this.A.get$I$I(i, i)) * $I$(3).EPS;
return this.bulgeSingleStepQn$I$D$D$D$Z(i + 1, a11, a21, threshold, true);
});

Clazz.newMeth(C$, 'bulgeSingleStepQn$I$D$D$D$Z', function (i, a11, a21, threshold, set) {
var max;
if (this.normalize) {
max=Math.abs(a11);
if (max < Math.abs(a21) ) max=Math.abs(a21);
if (max <= threshold ) {
if (set) {
this.A.set$I$I$D(i, i - 1, 0);
this.A.set$I$I$D(i + 1, i - 1, 0);
}return false;
}a11 /= max;
a21 /= max;
} else {
max=1;
}var tau=Math.sqrt(a11 * a11 + a21 * a21);
if (a11 < 0 ) tau=-tau;
var div=a11 + tau;
this.u.set$I$I$D(i, 0, 1);
this.u.set$I$I$D(i + 1, 0, a21 / div);
this.gamma=div / tau;
$I$(6).rank1UpdateMultR$org_ejml_data_DenseMatrix64F$DA$D$I$I$I$DA(this.A, this.u.data, this.gamma, 0, i, i + 2, this._temp.data);
if (set) {
this.A.set$I$I$D(i, i - 1, -max * tau);
this.A.set$I$I$D(i + 1, i - 1, 0);
}$I$(6).rank1UpdateMultL$org_ejml_data_DenseMatrix64F$DA$D$I$I$I(this.A, this.u.data, this.gamma, 0, i, i + 2);
if (this.checkUncountable && $I$(7).hasUncountable$org_ejml_data_D1Matrix64F(this.A) ) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["bad matrix"]);
}return true;
});

Clazz.newMeth(C$, 'eigen2by2_scale$D$D$D$D', function (a11, a12, a21, a22) {
var abs11=Math.abs(a11);
var abs22=Math.abs(a22);
var abs12=Math.abs(a12);
var abs21=Math.abs(a21);
var max=abs11 > abs22  ? abs11 : abs22;
if (max < abs12 ) max=abs12;
if (max < abs21 ) max=abs21;
if (max == 0 ) {
this.valueSmall.value0.real=0;
this.valueSmall.value0.imaginary=0;
this.valueSmall.value1.real=0;
this.valueSmall.value1.imaginary=0;
} else {
a12 /= max;
a21 /= max;
a11 /= max;
a22 /= max;
if (this.useCareful2x2) {
this.valueSmall.value2x2$D$D$D$D(a11, a12, a21, a22);
} else {
this.valueSmall.value2x2_fast$D$D$D$D(a11, a12, a21, a22);
}this.valueSmall.value0.real *= max;
this.valueSmall.value0.imaginary *= max;
this.valueSmall.value1.real *= max;
this.valueSmall.value1.imaginary *= max;
}});

Clazz.newMeth(C$, 'getNumberOfEigenvalues$', function () {
return this.numEigen;
});

Clazz.newMeth(C$, 'getEigenvalues$', function () {
return this.eigenvalues;
});

Clazz.newMeth(C$, 'addComputedEigen2x2$I$I', function (x1, x2) {
this.eigen2by2_scale$D$D$D$D(this.A.get$I$I(x1, x1), this.A.get$I$I(x1, x2), this.A.get$I$I(x2, x1), this.A.get$I$I(x2, x2));
if (this.checkUncountable && (Double.isNaN$D(this.valueSmall.value0.real) || Double.isNaN$D(this.valueSmall.value1.real) ) ) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Uncountable"]);
}p$1.addEigenvalue$D$D.apply(this, [this.valueSmall.value0.real, this.valueSmall.value0.imaginary]);
p$1.addEigenvalue$D$D.apply(this, [this.valueSmall.value1.real, this.valueSmall.value1.imaginary]);
});

Clazz.newMeth(C$, 'isReal2x2$I$I', function (x1, x2) {
this.eigen2by2_scale$D$D$D$D(this.A.get$I$I(x1, x1), this.A.get$I$I(x1, x2), this.A.get$I$I(x2, x1), this.A.get$I$I(x2, x2));
return this.valueSmall.value0.isReal$();
});

Clazz.newMeth(C$, 'addEigenAt$I', function (x1) {
p$1.addEigenvalue$D.apply(this, [this.A.get$I$I(x1, x1)]);
});

Clazz.newMeth(C$, 'printSteps$', function () {
for (var i=0; i < this.N; i++) {
System.out.println$S("Step[" + i + "] = " + this.numStepsFind[i] );
}
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
