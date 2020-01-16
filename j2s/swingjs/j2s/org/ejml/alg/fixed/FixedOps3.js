(function(){var P$=Clazz.newPackage("org.ejml.alg.fixed"),I$=[[0,'org.ejml.data.FixedMatrix3x3_64F']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FixedOps3");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'add$org_ejml_data_FixedMatrix3x3_64F$org_ejml_data_FixedMatrix3x3_64F$org_ejml_data_FixedMatrix3x3_64F', function (a, b, c) {
c.a11=a.a11 + b.a11;
c.a12=a.a12 + b.a12;
c.a13=a.a13 + b.a13;
c.a21=a.a21 + b.a21;
c.a22=a.a22 + b.a22;
c.a23=a.a23 + b.a23;
c.a31=a.a31 + b.a31;
c.a32=a.a32 + b.a32;
c.a33=a.a33 + b.a33;
}, 1);

Clazz.newMeth(C$, 'addEquals$org_ejml_data_FixedMatrix3x3_64F$org_ejml_data_FixedMatrix3x3_64F', function (a, b) {
a.a11 += b.a11;
a.a12 += b.a12;
a.a13 += b.a13;
a.a21 += b.a21;
a.a22 += b.a22;
a.a23 += b.a23;
a.a31 += b.a31;
a.a32 += b.a32;
a.a33 += b.a33;
}, 1);

Clazz.newMeth(C$, 'transpose$org_ejml_data_FixedMatrix3x3_64F', function (m) {
var tmp;
tmp=m.a12;
m.a12=m.a21;
m.a21=tmp;
tmp=m.a13;
m.a13=m.a31;
m.a31=tmp;
tmp=m.a23;
m.a23=m.a32;
m.a32=tmp;
}, 1);

Clazz.newMeth(C$, 'transpose$org_ejml_data_FixedMatrix3x3_64F$org_ejml_data_FixedMatrix3x3_64F', function (input, output) {
if (input == null ) input=Clazz.new_($I$(1,1));
output.a11=input.a11;
output.a12=input.a21;
output.a13=input.a31;
output.a21=input.a12;
output.a22=input.a22;
output.a23=input.a32;
output.a31=input.a13;
output.a32=input.a23;
output.a33=input.a33;
return output;
}, 1);

Clazz.newMeth(C$, 'mult$org_ejml_data_FixedMatrix3x3_64F$org_ejml_data_FixedMatrix3x3_64F$org_ejml_data_FixedMatrix3x3_64F', function (a, b, c) {
c.a11=a.a11 * b.a11 + a.a12 * b.a21 + a.a13 * b.a31;
c.a12=a.a11 * b.a12 + a.a12 * b.a22 + a.a13 * b.a32;
c.a13=a.a11 * b.a13 + a.a12 * b.a23 + a.a13 * b.a33;
c.a21=a.a21 * b.a11 + a.a22 * b.a21 + a.a23 * b.a31;
c.a22=a.a21 * b.a12 + a.a22 * b.a22 + a.a23 * b.a32;
c.a23=a.a21 * b.a13 + a.a22 * b.a23 + a.a23 * b.a33;
c.a31=a.a31 * b.a11 + a.a32 * b.a21 + a.a33 * b.a31;
c.a32=a.a31 * b.a12 + a.a32 * b.a22 + a.a33 * b.a32;
c.a33=a.a31 * b.a13 + a.a32 * b.a23 + a.a33 * b.a33;
}, 1);

Clazz.newMeth(C$, 'multTransA$org_ejml_data_FixedMatrix3x3_64F$org_ejml_data_FixedMatrix3x3_64F$org_ejml_data_FixedMatrix3x3_64F', function (a, b, c) {
c.a11=a.a11 * b.a11 + a.a21 * b.a21 + a.a31 * b.a31;
c.a12=a.a11 * b.a12 + a.a21 * b.a22 + a.a31 * b.a32;
c.a13=a.a11 * b.a13 + a.a21 * b.a23 + a.a31 * b.a33;
c.a21=a.a12 * b.a11 + a.a22 * b.a21 + a.a32 * b.a31;
c.a22=a.a12 * b.a12 + a.a22 * b.a22 + a.a32 * b.a32;
c.a23=a.a12 * b.a13 + a.a22 * b.a23 + a.a32 * b.a33;
c.a31=a.a13 * b.a11 + a.a23 * b.a21 + a.a33 * b.a31;
c.a32=a.a13 * b.a12 + a.a23 * b.a22 + a.a33 * b.a32;
c.a33=a.a13 * b.a13 + a.a23 * b.a23 + a.a33 * b.a33;
}, 1);

Clazz.newMeth(C$, 'multTransAB$org_ejml_data_FixedMatrix3x3_64F$org_ejml_data_FixedMatrix3x3_64F$org_ejml_data_FixedMatrix3x3_64F', function (a, b, c) {
c.a11=a.a11 * b.a11 + a.a21 * b.a12 + a.a31 * b.a13;
c.a12=a.a11 * b.a21 + a.a21 * b.a22 + a.a31 * b.a23;
c.a13=a.a11 * b.a31 + a.a21 * b.a32 + a.a31 * b.a33;
c.a21=a.a12 * b.a11 + a.a22 * b.a12 + a.a32 * b.a13;
c.a22=a.a12 * b.a21 + a.a22 * b.a22 + a.a32 * b.a23;
c.a23=a.a12 * b.a31 + a.a22 * b.a32 + a.a32 * b.a33;
c.a31=a.a13 * b.a11 + a.a23 * b.a12 + a.a33 * b.a13;
c.a32=a.a13 * b.a21 + a.a23 * b.a22 + a.a33 * b.a23;
c.a33=a.a13 * b.a31 + a.a23 * b.a32 + a.a33 * b.a33;
}, 1);

Clazz.newMeth(C$, 'multTransB$org_ejml_data_FixedMatrix3x3_64F$org_ejml_data_FixedMatrix3x3_64F$org_ejml_data_FixedMatrix3x3_64F', function (a, b, c) {
c.a11=a.a11 * b.a11 + a.a12 * b.a12 + a.a13 * b.a13;
c.a12=a.a11 * b.a21 + a.a12 * b.a22 + a.a13 * b.a23;
c.a13=a.a11 * b.a31 + a.a12 * b.a32 + a.a13 * b.a33;
c.a21=a.a21 * b.a11 + a.a22 * b.a12 + a.a23 * b.a13;
c.a22=a.a21 * b.a21 + a.a22 * b.a22 + a.a23 * b.a23;
c.a23=a.a21 * b.a31 + a.a22 * b.a32 + a.a23 * b.a33;
c.a31=a.a31 * b.a11 + a.a32 * b.a12 + a.a33 * b.a13;
c.a32=a.a31 * b.a21 + a.a32 * b.a22 + a.a33 * b.a23;
c.a33=a.a31 * b.a31 + a.a32 * b.a32 + a.a33 * b.a33;
}, 1);

Clazz.newMeth(C$, 'mult$org_ejml_data_FixedMatrix3x3_64F$org_ejml_data_FixedMatrix3_64F$org_ejml_data_FixedMatrix3_64F', function (a, b, c) {
c.a1=a.a11 * b.a1 + a.a12 * b.a2 + a.a13 * b.a3;
c.a2=a.a21 * b.a1 + a.a22 * b.a2 + a.a23 * b.a3;
c.a3=a.a31 * b.a1 + a.a32 * b.a2 + a.a33 * b.a3;
}, 1);

Clazz.newMeth(C$, 'mult$org_ejml_data_FixedMatrix3_64F$org_ejml_data_FixedMatrix3x3_64F$org_ejml_data_FixedMatrix3_64F', function (a, b, c) {
c.a1=a.a1 * b.a11 + a.a2 * b.a21 + a.a3 * b.a31;
c.a2=a.a1 * b.a12 + a.a2 * b.a22 + a.a3 * b.a32;
c.a3=a.a1 * b.a13 + a.a2 * b.a23 + a.a3 * b.a33;
}, 1);

Clazz.newMeth(C$, 'dot$org_ejml_data_FixedMatrix3_64F$org_ejml_data_FixedMatrix3_64F', function (a, b) {
return a.a1 * b.a1 + a.a2 * b.a2 + a.a3 * b.a3;
}, 1);

Clazz.newMeth(C$, 'setIdentity$org_ejml_data_FixedMatrix3x3_64F', function (a) {
a.a11=1;
a.a21=0;
a.a31=0;
a.a12=0;
a.a22=1;
a.a32=0;
a.a13=0;
a.a23=0;
a.a33=1;
}, 1);

Clazz.newMeth(C$, 'invert$org_ejml_data_FixedMatrix3x3_64F$org_ejml_data_FixedMatrix3x3_64F', function (a, inv) {
var scale=1.0 / C$.elementMaxAbs$org_ejml_data_FixedMatrix3x3_64F(a);
var a11=a.a11 * scale;
var a12=a.a12 * scale;
var a13=a.a13 * scale;
var a21=a.a21 * scale;
var a22=a.a22 * scale;
var a23=a.a23 * scale;
var a31=a.a31 * scale;
var a32=a.a32 * scale;
var a33=a.a33 * scale;
var m11=a22 * a33 - a23 * a32;
var m12=-(a21 * a33 - a23 * a31);
var m13=a21 * a32 - a22 * a31;
var m21=-(a12 * a33 - a13 * a32);
var m22=a11 * a33 - a13 * a31;
var m23=-(a11 * a32 - a12 * a31);
var m31=a12 * a23 - a13 * a22;
var m32=-(a11 * a23 - a13 * a21);
var m33=a11 * a22 - a12 * a21;
var det=(a11 * m11 + a12 * m12 + a13 * m13) / scale;
inv.a11=m11 / det;
inv.a12=m21 / det;
inv.a13=m31 / det;
inv.a21=m12 / det;
inv.a22=m22 / det;
inv.a23=m32 / det;
inv.a31=m13 / det;
inv.a32=m23 / det;
inv.a33=m33 / det;
return !Double.isNaN$D(det) && !Double.isInfinite$D(det) ;
}, 1);

Clazz.newMeth(C$, 'det$org_ejml_data_FixedMatrix3x3_64F', function (mat) {
var a=mat.a11 * (mat.a22 * mat.a33 - mat.a23 * mat.a32);
var b=mat.a12 * (mat.a21 * mat.a33 - mat.a23 * mat.a31);
var c=mat.a13 * (mat.a21 * mat.a32 - mat.a31 * mat.a22);
return a - b + c;
}, 1);

Clazz.newMeth(C$, 'trace$org_ejml_data_FixedMatrix3x3_64F', function (a) {
return a.a11 + a.a21 + a.a31 ;
}, 1);

Clazz.newMeth(C$, 'diag$org_ejml_data_FixedMatrix3x3_64F$org_ejml_data_FixedMatrix3_64F', function (input, out) {
out.a1=input.a11;
out.a2=input.a22;
out.a3=input.a33;
}, 1);

Clazz.newMeth(C$, 'elementMax$org_ejml_data_FixedMatrix3x3_64F', function (a) {
var max=a.a11;
max=Math.max(max, a.a12);
max=Math.max(max, a.a13);
max=Math.max(max, a.a21);
max=Math.max(max, a.a22);
max=Math.max(max, a.a23);
max=Math.max(max, a.a31);
max=Math.max(max, a.a32);
max=Math.max(max, a.a33);
return max;
}, 1);

Clazz.newMeth(C$, 'elementMaxAbs$org_ejml_data_FixedMatrix3x3_64F', function (a) {
var max=a.a11;
max=Math.max(max, Math.abs(a.a12));
max=Math.max(max, Math.abs(a.a13));
max=Math.max(max, Math.abs(a.a21));
max=Math.max(max, Math.abs(a.a22));
max=Math.max(max, Math.abs(a.a23));
max=Math.max(max, Math.abs(a.a31));
max=Math.max(max, Math.abs(a.a32));
max=Math.max(max, Math.abs(a.a33));
return max;
}, 1);

Clazz.newMeth(C$, 'elementMin$org_ejml_data_FixedMatrix3x3_64F', function (a) {
var min=a.a11;
min=Math.min(min, a.a12);
min=Math.min(min, a.a13);
min=Math.min(min, a.a21);
min=Math.min(min, a.a22);
min=Math.min(min, a.a23);
min=Math.min(min, a.a31);
min=Math.min(min, a.a32);
min=Math.min(min, a.a33);
return min;
}, 1);

Clazz.newMeth(C$, 'elementMinAbs$org_ejml_data_FixedMatrix3x3_64F', function (a) {
var min=a.a11;
min=Math.min(min, Math.abs(a.a12));
min=Math.min(min, Math.abs(a.a13));
min=Math.min(min, Math.abs(a.a21));
min=Math.min(min, Math.abs(a.a22));
min=Math.min(min, Math.abs(a.a23));
min=Math.min(min, Math.abs(a.a31));
min=Math.min(min, Math.abs(a.a32));
min=Math.min(min, Math.abs(a.a33));
return min;
}, 1);

Clazz.newMeth(C$, 'elementMult$org_ejml_data_FixedMatrix3x3_64F$org_ejml_data_FixedMatrix3x3_64F', function (a, b) {
a.a11 *= b.a11;
a.a12 *= b.a12;
a.a13 *= b.a13;
a.a21 *= b.a21;
a.a22 *= b.a22;
a.a23 *= b.a23;
a.a31 *= b.a31;
a.a32 *= b.a32;
a.a33 *= b.a33;
}, 1);

Clazz.newMeth(C$, 'elementMult$org_ejml_data_FixedMatrix3x3_64F$org_ejml_data_FixedMatrix3x3_64F$org_ejml_data_FixedMatrix3x3_64F', function (a, b, c) {
c.a11=a.a11 * b.a11;
c.a12=a.a12 * b.a12;
c.a13=a.a13 * b.a13;
c.a21=a.a21 * b.a21;
c.a22=a.a22 * b.a22;
c.a23=a.a23 * b.a23;
c.a31=a.a31 * b.a31;
c.a32=a.a32 * b.a32;
c.a33=a.a33 * b.a33;
}, 1);

Clazz.newMeth(C$, 'elementDiv$org_ejml_data_FixedMatrix3x3_64F$org_ejml_data_FixedMatrix3x3_64F', function (a, b) {
a.a11 /= b.a11;
a.a12 /= b.a12;
a.a13 /= b.a13;
a.a21 /= b.a21;
a.a22 /= b.a22;
a.a23 /= b.a23;
a.a31 /= b.a31;
a.a32 /= b.a32;
a.a33 /= b.a33;
}, 1);

Clazz.newMeth(C$, 'elementDiv$org_ejml_data_FixedMatrix3x3_64F$org_ejml_data_FixedMatrix3x3_64F$org_ejml_data_FixedMatrix3x3_64F', function (a, b, c) {
c.a11=a.a11 / b.a11;
c.a12=a.a12 / b.a12;
c.a13=a.a13 / b.a13;
c.a21=a.a21 / b.a21;
c.a22=a.a22 / b.a22;
c.a23=a.a23 / b.a23;
c.a31=a.a31 / b.a31;
c.a32=a.a32 / b.a32;
c.a33=a.a33 / b.a33;
}, 1);

Clazz.newMeth(C$, 'scale$D$org_ejml_data_FixedMatrix3x3_64F', function (alpha, a) {
a.a11 *= alpha;
a.a12 *= alpha;
a.a13 *= alpha;
a.a21 *= alpha;
a.a22 *= alpha;
a.a23 *= alpha;
a.a31 *= alpha;
a.a32 *= alpha;
a.a33 *= alpha;
}, 1);

Clazz.newMeth(C$, 'scale$D$org_ejml_data_FixedMatrix3x3_64F$org_ejml_data_FixedMatrix3x3_64F', function (alpha, a, b) {
b.a11=a.a11 * alpha;
b.a12=a.a12 * alpha;
b.a13=a.a13 * alpha;
b.a21=a.a21 * alpha;
b.a22=a.a22 * alpha;
b.a23=a.a23 * alpha;
b.a31=a.a31 * alpha;
b.a32=a.a32 * alpha;
b.a33=a.a33 * alpha;
}, 1);

Clazz.newMeth(C$, 'divide$D$org_ejml_data_FixedMatrix3x3_64F', function (alpha, a) {
a.a11 /= alpha;
a.a12 /= alpha;
a.a13 /= alpha;
a.a21 /= alpha;
a.a22 /= alpha;
a.a23 /= alpha;
a.a31 /= alpha;
a.a32 /= alpha;
a.a33 /= alpha;
}, 1);

Clazz.newMeth(C$, 'divide$D$org_ejml_data_FixedMatrix3x3_64F$org_ejml_data_FixedMatrix3x3_64F', function (alpha, a, b) {
b.a11=a.a11 / alpha;
b.a12=a.a12 / alpha;
b.a13=a.a13 / alpha;
b.a21=a.a21 / alpha;
b.a22=a.a22 / alpha;
b.a23=a.a23 / alpha;
b.a31=a.a31 / alpha;
b.a32=a.a32 / alpha;
b.a33=a.a33 / alpha;
}, 1);

Clazz.newMeth(C$, 'changeSign$org_ejml_data_FixedMatrix3x3_64F', function (a) {
a.a11=-a.a11;
a.a12=-a.a12;
a.a13=-a.a13;
a.a21=-a.a21;
a.a22=-a.a22;
a.a23=-a.a23;
a.a31=-a.a31;
a.a32=-a.a32;
a.a33=-a.a33;
}, 1);

Clazz.newMeth(C$, 'fill$org_ejml_data_FixedMatrix3x3_64F$D', function (a, v) {
a.a11=v;
a.a12=v;
a.a13=v;
a.a21=v;
a.a22=v;
a.a23=v;
a.a31=v;
a.a32=v;
a.a33=v;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
