(function(){var P$=Clazz.newPackage("org.ejml.alg.fixed"),I$=[[0,'org.ejml.data.FixedMatrix4x4_64F']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FixedOps4");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'add$org_ejml_data_FixedMatrix4x4_64F$org_ejml_data_FixedMatrix4x4_64F$org_ejml_data_FixedMatrix4x4_64F', function (a, b, c) {
c.a11=a.a11 + b.a11;
c.a12=a.a12 + b.a12;
c.a13=a.a13 + b.a13;
c.a14=a.a14 + b.a14;
c.a21=a.a21 + b.a21;
c.a22=a.a22 + b.a22;
c.a23=a.a23 + b.a23;
c.a24=a.a24 + b.a24;
c.a31=a.a31 + b.a31;
c.a32=a.a32 + b.a32;
c.a33=a.a33 + b.a33;
c.a34=a.a34 + b.a34;
c.a41=a.a41 + b.a41;
c.a42=a.a42 + b.a42;
c.a43=a.a43 + b.a43;
c.a44=a.a44 + b.a44;
}, 1);

Clazz.newMeth(C$, 'addEquals$org_ejml_data_FixedMatrix4x4_64F$org_ejml_data_FixedMatrix4x4_64F', function (a, b) {
a.a11 += b.a11;
a.a12 += b.a12;
a.a13 += b.a13;
a.a14 += b.a14;
a.a21 += b.a21;
a.a22 += b.a22;
a.a23 += b.a23;
a.a24 += b.a24;
a.a31 += b.a31;
a.a32 += b.a32;
a.a33 += b.a33;
a.a34 += b.a34;
a.a41 += b.a41;
a.a42 += b.a42;
a.a43 += b.a43;
a.a44 += b.a44;
}, 1);

Clazz.newMeth(C$, 'transpose$org_ejml_data_FixedMatrix4x4_64F', function (m) {
var tmp;
tmp=m.a12;
m.a12=m.a21;
m.a21=tmp;
tmp=m.a13;
m.a13=m.a31;
m.a31=tmp;
tmp=m.a14;
m.a14=m.a41;
m.a41=tmp;
tmp=m.a23;
m.a23=m.a32;
m.a32=tmp;
tmp=m.a24;
m.a24=m.a42;
m.a42=tmp;
tmp=m.a34;
m.a34=m.a43;
m.a43=tmp;
}, 1);

Clazz.newMeth(C$, 'transpose$org_ejml_data_FixedMatrix4x4_64F$org_ejml_data_FixedMatrix4x4_64F', function (input, output) {
if (input == null ) input=Clazz.new_($I$(1,1));
output.a11=input.a11;
output.a12=input.a21;
output.a13=input.a31;
output.a14=input.a41;
output.a21=input.a12;
output.a22=input.a22;
output.a23=input.a32;
output.a24=input.a42;
output.a31=input.a13;
output.a32=input.a23;
output.a33=input.a33;
output.a34=input.a43;
output.a41=input.a14;
output.a42=input.a24;
output.a43=input.a34;
output.a44=input.a44;
return output;
}, 1);

Clazz.newMeth(C$, 'mult$org_ejml_data_FixedMatrix4x4_64F$org_ejml_data_FixedMatrix4x4_64F$org_ejml_data_FixedMatrix4x4_64F', function (a, b, c) {
c.a11=a.a11 * b.a11 + a.a12 * b.a21 + a.a13 * b.a31 + a.a14 * b.a41;
c.a12=a.a11 * b.a12 + a.a12 * b.a22 + a.a13 * b.a32 + a.a14 * b.a42;
c.a13=a.a11 * b.a13 + a.a12 * b.a23 + a.a13 * b.a33 + a.a14 * b.a43;
c.a14=a.a11 * b.a14 + a.a12 * b.a24 + a.a13 * b.a34 + a.a14 * b.a44;
c.a21=a.a21 * b.a11 + a.a22 * b.a21 + a.a23 * b.a31 + a.a24 * b.a41;
c.a22=a.a21 * b.a12 + a.a22 * b.a22 + a.a23 * b.a32 + a.a24 * b.a42;
c.a23=a.a21 * b.a13 + a.a22 * b.a23 + a.a23 * b.a33 + a.a24 * b.a43;
c.a24=a.a21 * b.a14 + a.a22 * b.a24 + a.a23 * b.a34 + a.a24 * b.a44;
c.a31=a.a31 * b.a11 + a.a32 * b.a21 + a.a33 * b.a31 + a.a34 * b.a41;
c.a32=a.a31 * b.a12 + a.a32 * b.a22 + a.a33 * b.a32 + a.a34 * b.a42;
c.a33=a.a31 * b.a13 + a.a32 * b.a23 + a.a33 * b.a33 + a.a34 * b.a43;
c.a34=a.a31 * b.a14 + a.a32 * b.a24 + a.a33 * b.a34 + a.a34 * b.a44;
c.a41=a.a41 * b.a11 + a.a42 * b.a21 + a.a43 * b.a31 + a.a44 * b.a41;
c.a42=a.a41 * b.a12 + a.a42 * b.a22 + a.a43 * b.a32 + a.a44 * b.a42;
c.a43=a.a41 * b.a13 + a.a42 * b.a23 + a.a43 * b.a33 + a.a44 * b.a43;
c.a44=a.a41 * b.a14 + a.a42 * b.a24 + a.a43 * b.a34 + a.a44 * b.a44;
}, 1);

Clazz.newMeth(C$, 'multTransA$org_ejml_data_FixedMatrix4x4_64F$org_ejml_data_FixedMatrix4x4_64F$org_ejml_data_FixedMatrix4x4_64F', function (a, b, c) {
c.a11=a.a11 * b.a11 + a.a21 * b.a21 + a.a31 * b.a31 + a.a41 * b.a41;
c.a12=a.a11 * b.a12 + a.a21 * b.a22 + a.a31 * b.a32 + a.a41 * b.a42;
c.a13=a.a11 * b.a13 + a.a21 * b.a23 + a.a31 * b.a33 + a.a41 * b.a43;
c.a14=a.a11 * b.a14 + a.a21 * b.a24 + a.a31 * b.a34 + a.a41 * b.a44;
c.a21=a.a12 * b.a11 + a.a22 * b.a21 + a.a32 * b.a31 + a.a42 * b.a41;
c.a22=a.a12 * b.a12 + a.a22 * b.a22 + a.a32 * b.a32 + a.a42 * b.a42;
c.a23=a.a12 * b.a13 + a.a22 * b.a23 + a.a32 * b.a33 + a.a42 * b.a43;
c.a24=a.a12 * b.a14 + a.a22 * b.a24 + a.a32 * b.a34 + a.a42 * b.a44;
c.a31=a.a13 * b.a11 + a.a23 * b.a21 + a.a33 * b.a31 + a.a43 * b.a41;
c.a32=a.a13 * b.a12 + a.a23 * b.a22 + a.a33 * b.a32 + a.a43 * b.a42;
c.a33=a.a13 * b.a13 + a.a23 * b.a23 + a.a33 * b.a33 + a.a43 * b.a43;
c.a34=a.a13 * b.a14 + a.a23 * b.a24 + a.a33 * b.a34 + a.a43 * b.a44;
c.a41=a.a14 * b.a11 + a.a24 * b.a21 + a.a34 * b.a31 + a.a44 * b.a41;
c.a42=a.a14 * b.a12 + a.a24 * b.a22 + a.a34 * b.a32 + a.a44 * b.a42;
c.a43=a.a14 * b.a13 + a.a24 * b.a23 + a.a34 * b.a33 + a.a44 * b.a43;
c.a44=a.a14 * b.a14 + a.a24 * b.a24 + a.a34 * b.a34 + a.a44 * b.a44;
}, 1);

Clazz.newMeth(C$, 'multTransAB$org_ejml_data_FixedMatrix4x4_64F$org_ejml_data_FixedMatrix4x4_64F$org_ejml_data_FixedMatrix4x4_64F', function (a, b, c) {
c.a11=a.a11 * b.a11 + a.a21 * b.a12 + a.a31 * b.a13 + a.a41 * b.a14;
c.a12=a.a11 * b.a21 + a.a21 * b.a22 + a.a31 * b.a23 + a.a41 * b.a24;
c.a13=a.a11 * b.a31 + a.a21 * b.a32 + a.a31 * b.a33 + a.a41 * b.a34;
c.a14=a.a11 * b.a41 + a.a21 * b.a42 + a.a31 * b.a43 + a.a41 * b.a44;
c.a21=a.a12 * b.a11 + a.a22 * b.a12 + a.a32 * b.a13 + a.a42 * b.a14;
c.a22=a.a12 * b.a21 + a.a22 * b.a22 + a.a32 * b.a23 + a.a42 * b.a24;
c.a23=a.a12 * b.a31 + a.a22 * b.a32 + a.a32 * b.a33 + a.a42 * b.a34;
c.a24=a.a12 * b.a41 + a.a22 * b.a42 + a.a32 * b.a43 + a.a42 * b.a44;
c.a31=a.a13 * b.a11 + a.a23 * b.a12 + a.a33 * b.a13 + a.a43 * b.a14;
c.a32=a.a13 * b.a21 + a.a23 * b.a22 + a.a33 * b.a23 + a.a43 * b.a24;
c.a33=a.a13 * b.a31 + a.a23 * b.a32 + a.a33 * b.a33 + a.a43 * b.a34;
c.a34=a.a13 * b.a41 + a.a23 * b.a42 + a.a33 * b.a43 + a.a43 * b.a44;
c.a41=a.a14 * b.a11 + a.a24 * b.a12 + a.a34 * b.a13 + a.a44 * b.a14;
c.a42=a.a14 * b.a21 + a.a24 * b.a22 + a.a34 * b.a23 + a.a44 * b.a24;
c.a43=a.a14 * b.a31 + a.a24 * b.a32 + a.a34 * b.a33 + a.a44 * b.a34;
c.a44=a.a14 * b.a41 + a.a24 * b.a42 + a.a34 * b.a43 + a.a44 * b.a44;
}, 1);

Clazz.newMeth(C$, 'multTransB$org_ejml_data_FixedMatrix4x4_64F$org_ejml_data_FixedMatrix4x4_64F$org_ejml_data_FixedMatrix4x4_64F', function (a, b, c) {
c.a11=a.a11 * b.a11 + a.a12 * b.a12 + a.a13 * b.a13 + a.a14 * b.a14;
c.a12=a.a11 * b.a21 + a.a12 * b.a22 + a.a13 * b.a23 + a.a14 * b.a24;
c.a13=a.a11 * b.a31 + a.a12 * b.a32 + a.a13 * b.a33 + a.a14 * b.a34;
c.a14=a.a11 * b.a41 + a.a12 * b.a42 + a.a13 * b.a43 + a.a14 * b.a44;
c.a21=a.a21 * b.a11 + a.a22 * b.a12 + a.a23 * b.a13 + a.a24 * b.a14;
c.a22=a.a21 * b.a21 + a.a22 * b.a22 + a.a23 * b.a23 + a.a24 * b.a24;
c.a23=a.a21 * b.a31 + a.a22 * b.a32 + a.a23 * b.a33 + a.a24 * b.a34;
c.a24=a.a21 * b.a41 + a.a22 * b.a42 + a.a23 * b.a43 + a.a24 * b.a44;
c.a31=a.a31 * b.a11 + a.a32 * b.a12 + a.a33 * b.a13 + a.a34 * b.a14;
c.a32=a.a31 * b.a21 + a.a32 * b.a22 + a.a33 * b.a23 + a.a34 * b.a24;
c.a33=a.a31 * b.a31 + a.a32 * b.a32 + a.a33 * b.a33 + a.a34 * b.a34;
c.a34=a.a31 * b.a41 + a.a32 * b.a42 + a.a33 * b.a43 + a.a34 * b.a44;
c.a41=a.a41 * b.a11 + a.a42 * b.a12 + a.a43 * b.a13 + a.a44 * b.a14;
c.a42=a.a41 * b.a21 + a.a42 * b.a22 + a.a43 * b.a23 + a.a44 * b.a24;
c.a43=a.a41 * b.a31 + a.a42 * b.a32 + a.a43 * b.a33 + a.a44 * b.a34;
c.a44=a.a41 * b.a41 + a.a42 * b.a42 + a.a43 * b.a43 + a.a44 * b.a44;
}, 1);

Clazz.newMeth(C$, 'mult$org_ejml_data_FixedMatrix4x4_64F$org_ejml_data_FixedMatrix4_64F$org_ejml_data_FixedMatrix4_64F', function (a, b, c) {
c.a1=a.a11 * b.a1 + a.a12 * b.a2 + a.a13 * b.a3 + a.a14 * b.a4;
c.a2=a.a21 * b.a1 + a.a22 * b.a2 + a.a23 * b.a3 + a.a24 * b.a4;
c.a3=a.a31 * b.a1 + a.a32 * b.a2 + a.a33 * b.a3 + a.a34 * b.a4;
c.a4=a.a41 * b.a1 + a.a42 * b.a2 + a.a43 * b.a3 + a.a44 * b.a4;
}, 1);

Clazz.newMeth(C$, 'mult$org_ejml_data_FixedMatrix4_64F$org_ejml_data_FixedMatrix4x4_64F$org_ejml_data_FixedMatrix4_64F', function (a, b, c) {
c.a1=a.a1 * b.a11 + a.a2 * b.a21 + a.a3 * b.a31 + a.a4 * b.a41;
c.a2=a.a1 * b.a12 + a.a2 * b.a22 + a.a3 * b.a32 + a.a4 * b.a42;
c.a3=a.a1 * b.a13 + a.a2 * b.a23 + a.a3 * b.a33 + a.a4 * b.a43;
c.a4=a.a1 * b.a14 + a.a2 * b.a24 + a.a3 * b.a34 + a.a4 * b.a44;
}, 1);

Clazz.newMeth(C$, 'dot$org_ejml_data_FixedMatrix4_64F$org_ejml_data_FixedMatrix4_64F', function (a, b) {
return a.a1 * b.a1 + a.a2 * b.a2 + a.a3 * b.a3 + a.a4 * b.a4;
}, 1);

Clazz.newMeth(C$, 'setIdentity$org_ejml_data_FixedMatrix4x4_64F', function (a) {
a.a11=1;
a.a21=0;
a.a31=0;
a.a41=0;
a.a12=0;
a.a22=1;
a.a32=0;
a.a42=0;
a.a13=0;
a.a23=0;
a.a33=1;
a.a43=0;
a.a14=0;
a.a24=0;
a.a34=0;
a.a44=1;
}, 1);

Clazz.newMeth(C$, 'invert$org_ejml_data_FixedMatrix4x4_64F$org_ejml_data_FixedMatrix4x4_64F', function (a, inv) {
var scale=1.0 / C$.elementMaxAbs$org_ejml_data_FixedMatrix4x4_64F(a);
var a11=a.a11 * scale;
var a12=a.a12 * scale;
var a13=a.a13 * scale;
var a14=a.a14 * scale;
var a21=a.a21 * scale;
var a22=a.a22 * scale;
var a23=a.a23 * scale;
var a24=a.a24 * scale;
var a31=a.a31 * scale;
var a32=a.a32 * scale;
var a33=a.a33 * scale;
var a34=a.a34 * scale;
var a41=a.a41 * scale;
var a42=a.a42 * scale;
var a43=a.a43 * scale;
var a44=a.a44 * scale;
var m11=+a22 * (a33 * a44 - a34 * a43) - a23 * (a32 * a44 - a34 * a42) + a24 * (a32 * a43 - a33 * a42);
var m12=-(+a21 * (a33 * a44 - a34 * a43) - a23 * (a31 * a44 - a34 * a41) + a24 * (a31 * a43 - a33 * a41));
var m13=+a21 * (a32 * a44 - a34 * a42) - a22 * (a31 * a44 - a34 * a41) + a24 * (a31 * a42 - a32 * a41);
var m14=-(+a21 * (a32 * a43 - a33 * a42) - a22 * (a31 * a43 - a33 * a41) + a23 * (a31 * a42 - a32 * a41));
var m21=-(+a12 * (a33 * a44 - a34 * a43) - a13 * (a32 * a44 - a34 * a42) + a14 * (a32 * a43 - a33 * a42));
var m22=+a11 * (a33 * a44 - a34 * a43) - a13 * (a31 * a44 - a34 * a41) + a14 * (a31 * a43 - a33 * a41);
var m23=-(+a11 * (a32 * a44 - a34 * a42) - a12 * (a31 * a44 - a34 * a41) + a14 * (a31 * a42 - a32 * a41));
var m24=+a11 * (a32 * a43 - a33 * a42) - a12 * (a31 * a43 - a33 * a41) + a13 * (a31 * a42 - a32 * a41);
var m31=+a12 * (a23 * a44 - a24 * a43) - a13 * (a22 * a44 - a24 * a42) + a14 * (a22 * a43 - a23 * a42);
var m32=-(+a11 * (a23 * a44 - a24 * a43) - a13 * (a21 * a44 - a24 * a41) + a14 * (a21 * a43 - a23 * a41));
var m33=+a11 * (a22 * a44 - a24 * a42) - a12 * (a21 * a44 - a24 * a41) + a14 * (a21 * a42 - a22 * a41);
var m34=-(+a11 * (a22 * a43 - a23 * a42) - a12 * (a21 * a43 - a23 * a41) + a13 * (a21 * a42 - a22 * a41));
var m41=-(+a12 * (a23 * a34 - a24 * a33) - a13 * (a22 * a34 - a24 * a32) + a14 * (a22 * a33 - a23 * a32));
var m42=+a11 * (a23 * a34 - a24 * a33) - a13 * (a21 * a34 - a24 * a31) + a14 * (a21 * a33 - a23 * a31);
var m43=-(+a11 * (a22 * a34 - a24 * a32) - a12 * (a21 * a34 - a24 * a31) + a14 * (a21 * a32 - a22 * a31));
var m44=+a11 * (a22 * a33 - a23 * a32) - a12 * (a21 * a33 - a23 * a31) + a13 * (a21 * a32 - a22 * a31);
var det=(a11 * m11 + a12 * m12 + a13 * m13 + a14 * m14) / scale;
inv.a11=m11 / det;
inv.a12=m21 / det;
inv.a13=m31 / det;
inv.a14=m41 / det;
inv.a21=m12 / det;
inv.a22=m22 / det;
inv.a23=m32 / det;
inv.a24=m42 / det;
inv.a31=m13 / det;
inv.a32=m23 / det;
inv.a33=m33 / det;
inv.a34=m43 / det;
inv.a41=m14 / det;
inv.a42=m24 / det;
inv.a43=m34 / det;
inv.a44=m44 / det;
return !Double.isNaN$D(det) && !Double.isInfinite$D(det) ;
}, 1);

Clazz.newMeth(C$, 'det$org_ejml_data_FixedMatrix4x4_64F', function (mat) {
var a11=mat.a22;
var a12=mat.a23;
var a13=mat.a24;
var a21=mat.a32;
var a22=mat.a33;
var a23=mat.a34;
var a31=mat.a42;
var a32=mat.a43;
var a33=mat.a44;
var ret=0;
ret += mat.a11 * (+a11 * (a22 * a33 - a23 * a32) - a12 * (a21 * a33 - a23 * a31) + a13 * (a21 * a32 - a22 * a31));
a11=mat.a21;
a21=mat.a31;
a31=mat.a41;
ret -= mat.a12 * (+a11 * (a22 * a33 - a23 * a32) - a12 * (a21 * a33 - a23 * a31) + a13 * (a21 * a32 - a22 * a31));
a12=mat.a22;
a22=mat.a32;
a32=mat.a42;
ret += mat.a13 * (+a11 * (a22 * a33 - a23 * a32) - a12 * (a21 * a33 - a23 * a31) + a13 * (a21 * a32 - a22 * a31));
a13=mat.a23;
a23=mat.a33;
a33=mat.a43;
ret -= mat.a14 * (+a11 * (a22 * a33 - a23 * a32) - a12 * (a21 * a33 - a23 * a31) + a13 * (a21 * a32 - a22 * a31));
return ret;
}, 1);

Clazz.newMeth(C$, 'trace$org_ejml_data_FixedMatrix4x4_64F', function (a) {
return a.a11 + a.a21 + a.a31 + a.a41 ;
}, 1);

Clazz.newMeth(C$, 'diag$org_ejml_data_FixedMatrix4x4_64F$org_ejml_data_FixedMatrix4_64F', function (input, out) {
out.a1=input.a11;
out.a2=input.a22;
out.a3=input.a33;
out.a4=input.a44;
}, 1);

Clazz.newMeth(C$, 'elementMax$org_ejml_data_FixedMatrix4x4_64F', function (a) {
var max=a.a11;
max=Math.max(max, a.a12);
max=Math.max(max, a.a13);
max=Math.max(max, a.a14);
max=Math.max(max, a.a21);
max=Math.max(max, a.a22);
max=Math.max(max, a.a23);
max=Math.max(max, a.a24);
max=Math.max(max, a.a31);
max=Math.max(max, a.a32);
max=Math.max(max, a.a33);
max=Math.max(max, a.a34);
max=Math.max(max, a.a41);
max=Math.max(max, a.a42);
max=Math.max(max, a.a43);
max=Math.max(max, a.a44);
return max;
}, 1);

Clazz.newMeth(C$, 'elementMaxAbs$org_ejml_data_FixedMatrix4x4_64F', function (a) {
var max=a.a11;
max=Math.max(max, Math.abs(a.a12));
max=Math.max(max, Math.abs(a.a13));
max=Math.max(max, Math.abs(a.a14));
max=Math.max(max, Math.abs(a.a21));
max=Math.max(max, Math.abs(a.a22));
max=Math.max(max, Math.abs(a.a23));
max=Math.max(max, Math.abs(a.a24));
max=Math.max(max, Math.abs(a.a31));
max=Math.max(max, Math.abs(a.a32));
max=Math.max(max, Math.abs(a.a33));
max=Math.max(max, Math.abs(a.a34));
max=Math.max(max, Math.abs(a.a41));
max=Math.max(max, Math.abs(a.a42));
max=Math.max(max, Math.abs(a.a43));
max=Math.max(max, Math.abs(a.a44));
return max;
}, 1);

Clazz.newMeth(C$, 'elementMin$org_ejml_data_FixedMatrix4x4_64F', function (a) {
var min=a.a11;
min=Math.min(min, a.a12);
min=Math.min(min, a.a13);
min=Math.min(min, a.a14);
min=Math.min(min, a.a21);
min=Math.min(min, a.a22);
min=Math.min(min, a.a23);
min=Math.min(min, a.a24);
min=Math.min(min, a.a31);
min=Math.min(min, a.a32);
min=Math.min(min, a.a33);
min=Math.min(min, a.a34);
min=Math.min(min, a.a41);
min=Math.min(min, a.a42);
min=Math.min(min, a.a43);
min=Math.min(min, a.a44);
return min;
}, 1);

Clazz.newMeth(C$, 'elementMinAbs$org_ejml_data_FixedMatrix4x4_64F', function (a) {
var min=a.a11;
min=Math.min(min, Math.abs(a.a12));
min=Math.min(min, Math.abs(a.a13));
min=Math.min(min, Math.abs(a.a14));
min=Math.min(min, Math.abs(a.a21));
min=Math.min(min, Math.abs(a.a22));
min=Math.min(min, Math.abs(a.a23));
min=Math.min(min, Math.abs(a.a24));
min=Math.min(min, Math.abs(a.a31));
min=Math.min(min, Math.abs(a.a32));
min=Math.min(min, Math.abs(a.a33));
min=Math.min(min, Math.abs(a.a34));
min=Math.min(min, Math.abs(a.a41));
min=Math.min(min, Math.abs(a.a42));
min=Math.min(min, Math.abs(a.a43));
min=Math.min(min, Math.abs(a.a44));
return min;
}, 1);

Clazz.newMeth(C$, 'elementMult$org_ejml_data_FixedMatrix4x4_64F$org_ejml_data_FixedMatrix4x4_64F', function (a, b) {
a.a11 *= b.a11;
a.a12 *= b.a12;
a.a13 *= b.a13;
a.a14 *= b.a14;
a.a21 *= b.a21;
a.a22 *= b.a22;
a.a23 *= b.a23;
a.a24 *= b.a24;
a.a31 *= b.a31;
a.a32 *= b.a32;
a.a33 *= b.a33;
a.a34 *= b.a34;
a.a41 *= b.a41;
a.a42 *= b.a42;
a.a43 *= b.a43;
a.a44 *= b.a44;
}, 1);

Clazz.newMeth(C$, 'elementMult$org_ejml_data_FixedMatrix4x4_64F$org_ejml_data_FixedMatrix4x4_64F$org_ejml_data_FixedMatrix4x4_64F', function (a, b, c) {
c.a11=a.a11 * b.a11;
c.a12=a.a12 * b.a12;
c.a13=a.a13 * b.a13;
c.a14=a.a14 * b.a14;
c.a21=a.a21 * b.a21;
c.a22=a.a22 * b.a22;
c.a23=a.a23 * b.a23;
c.a24=a.a24 * b.a24;
c.a31=a.a31 * b.a31;
c.a32=a.a32 * b.a32;
c.a33=a.a33 * b.a33;
c.a34=a.a34 * b.a34;
c.a41=a.a41 * b.a41;
c.a42=a.a42 * b.a42;
c.a43=a.a43 * b.a43;
c.a44=a.a44 * b.a44;
}, 1);

Clazz.newMeth(C$, 'elementDiv$org_ejml_data_FixedMatrix4x4_64F$org_ejml_data_FixedMatrix4x4_64F', function (a, b) {
a.a11 /= b.a11;
a.a12 /= b.a12;
a.a13 /= b.a13;
a.a14 /= b.a14;
a.a21 /= b.a21;
a.a22 /= b.a22;
a.a23 /= b.a23;
a.a24 /= b.a24;
a.a31 /= b.a31;
a.a32 /= b.a32;
a.a33 /= b.a33;
a.a34 /= b.a34;
a.a41 /= b.a41;
a.a42 /= b.a42;
a.a43 /= b.a43;
a.a44 /= b.a44;
}, 1);

Clazz.newMeth(C$, 'elementDiv$org_ejml_data_FixedMatrix4x4_64F$org_ejml_data_FixedMatrix4x4_64F$org_ejml_data_FixedMatrix4x4_64F', function (a, b, c) {
c.a11=a.a11 / b.a11;
c.a12=a.a12 / b.a12;
c.a13=a.a13 / b.a13;
c.a14=a.a14 / b.a14;
c.a21=a.a21 / b.a21;
c.a22=a.a22 / b.a22;
c.a23=a.a23 / b.a23;
c.a24=a.a24 / b.a24;
c.a31=a.a31 / b.a31;
c.a32=a.a32 / b.a32;
c.a33=a.a33 / b.a33;
c.a34=a.a34 / b.a34;
c.a41=a.a41 / b.a41;
c.a42=a.a42 / b.a42;
c.a43=a.a43 / b.a43;
c.a44=a.a44 / b.a44;
}, 1);

Clazz.newMeth(C$, 'scale$D$org_ejml_data_FixedMatrix4x4_64F', function (alpha, a) {
a.a11 *= alpha;
a.a12 *= alpha;
a.a13 *= alpha;
a.a14 *= alpha;
a.a21 *= alpha;
a.a22 *= alpha;
a.a23 *= alpha;
a.a24 *= alpha;
a.a31 *= alpha;
a.a32 *= alpha;
a.a33 *= alpha;
a.a34 *= alpha;
a.a41 *= alpha;
a.a42 *= alpha;
a.a43 *= alpha;
a.a44 *= alpha;
}, 1);

Clazz.newMeth(C$, 'scale$D$org_ejml_data_FixedMatrix4x4_64F$org_ejml_data_FixedMatrix4x4_64F', function (alpha, a, b) {
b.a11=a.a11 * alpha;
b.a12=a.a12 * alpha;
b.a13=a.a13 * alpha;
b.a14=a.a14 * alpha;
b.a21=a.a21 * alpha;
b.a22=a.a22 * alpha;
b.a23=a.a23 * alpha;
b.a24=a.a24 * alpha;
b.a31=a.a31 * alpha;
b.a32=a.a32 * alpha;
b.a33=a.a33 * alpha;
b.a34=a.a34 * alpha;
b.a41=a.a41 * alpha;
b.a42=a.a42 * alpha;
b.a43=a.a43 * alpha;
b.a44=a.a44 * alpha;
}, 1);

Clazz.newMeth(C$, 'divide$D$org_ejml_data_FixedMatrix4x4_64F', function (alpha, a) {
a.a11 /= alpha;
a.a12 /= alpha;
a.a13 /= alpha;
a.a14 /= alpha;
a.a21 /= alpha;
a.a22 /= alpha;
a.a23 /= alpha;
a.a24 /= alpha;
a.a31 /= alpha;
a.a32 /= alpha;
a.a33 /= alpha;
a.a34 /= alpha;
a.a41 /= alpha;
a.a42 /= alpha;
a.a43 /= alpha;
a.a44 /= alpha;
}, 1);

Clazz.newMeth(C$, 'divide$D$org_ejml_data_FixedMatrix4x4_64F$org_ejml_data_FixedMatrix4x4_64F', function (alpha, a, b) {
b.a11=a.a11 / alpha;
b.a12=a.a12 / alpha;
b.a13=a.a13 / alpha;
b.a14=a.a14 / alpha;
b.a21=a.a21 / alpha;
b.a22=a.a22 / alpha;
b.a23=a.a23 / alpha;
b.a24=a.a24 / alpha;
b.a31=a.a31 / alpha;
b.a32=a.a32 / alpha;
b.a33=a.a33 / alpha;
b.a34=a.a34 / alpha;
b.a41=a.a41 / alpha;
b.a42=a.a42 / alpha;
b.a43=a.a43 / alpha;
b.a44=a.a44 / alpha;
}, 1);

Clazz.newMeth(C$, 'changeSign$org_ejml_data_FixedMatrix4x4_64F', function (a) {
a.a11=-a.a11;
a.a12=-a.a12;
a.a13=-a.a13;
a.a14=-a.a14;
a.a21=-a.a21;
a.a22=-a.a22;
a.a23=-a.a23;
a.a24=-a.a24;
a.a31=-a.a31;
a.a32=-a.a32;
a.a33=-a.a33;
a.a34=-a.a34;
a.a41=-a.a41;
a.a42=-a.a42;
a.a43=-a.a43;
a.a44=-a.a44;
}, 1);

Clazz.newMeth(C$, 'fill$org_ejml_data_FixedMatrix4x4_64F$D', function (a, v) {
a.a11=v;
a.a12=v;
a.a13=v;
a.a14=v;
a.a21=v;
a.a22=v;
a.a23=v;
a.a24=v;
a.a31=v;
a.a32=v;
a.a33=v;
a.a34=v;
a.a41=v;
a.a42=v;
a.a43=v;
a.a44=v;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
