(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.decomposition.eig"),I$=[[0,'org.ejml.data.Complex64F']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EigenvalueSmall");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.value0=Clazz.new_($I$(1,1));
this.value1=Clazz.new_($I$(1,1));
}, 1);

C$.$fields$=[['O',['value0','org.ejml.data.Complex64F','+value1']]]

Clazz.newMeth(C$, 'value2x2$D$D$D$D', function (a11, a12, a21, a22) {
var c;
var s;
if (a12 + a21 == 0 ) {
c=s=1.0 / Math.sqrt(2);
} else {
var aa=(a11 - a22);
var bb=(a12 + a21);
var t_hat=aa / bb;
var t=t_hat / (1.0 + Math.sqrt(1.0 + t_hat * t_hat));
c=1.0 / Math.sqrt(1.0 + t * t);
s=c * t;
}var c2=c * c;
var s2=s * s;
var cs=c * s;
var b11=c2 * a11 + s2 * a22 - cs * (a12 + a21);
var b12=c2 * a12 - s2 * a21 + cs * (a11 - a22);
var b21=c2 * a21 - s2 * a12 + cs * (a11 - a22);
if (b21 * b12 >= 0 ) {
if (b12 == 0 ) {
c=0;
s=1;
} else {
s=Math.sqrt(b21 / (b12 + b21));
c=Math.sqrt(b12 / (b12 + b21));
}cs=c * s;
a11=b11 - cs * (b12 + b21);
a22=b11 + cs * (b12 + b21);
this.value0.real=a11;
this.value1.real=a22;
this.value0.imaginary=this.value1.imaginary=0;
} else {
this.value0.real=this.value1.real=b11;
this.value0.imaginary=Math.sqrt(-b21 * b12);
this.value1.imaginary=-this.value0.imaginary;
}});

Clazz.newMeth(C$, 'value2x2_fast$D$D$D$D', function (a11, a12, a21, a22) {
var left=(a11 + a22) / 2.0;
var inside=4.0 * a12 * a21  + (a11 - a22) * (a11 - a22);
if (inside < 0 ) {
this.value0.real=this.value1.real=left;
this.value0.imaginary=Math.sqrt(-inside) / 2.0;
this.value1.imaginary=-this.value0.imaginary;
} else {
var right=Math.sqrt(inside) / 2.0;
this.value0.real=(left + right);
this.value1.real=(left - right);
this.value0.imaginary=this.value1.imaginary=0.0;
}});

Clazz.newMeth(C$, 'symm2x2_fast$D$D$D', function (a11, a12, a22) {
var left=(a11 + a22) * 0.5;
var b=(a11 - a22) * 0.5;
var right=Math.sqrt(b * b + a12 * a12);
this.value0.real=left + right;
this.value1.real=left - right;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
