(function(){var P$=Clazz.newPackage("org.ejml.alg.fixed"),I$=[[0,'org.ejml.data.FixedMatrix2x2_64F']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FixedOps2");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'add$org_ejml_data_FixedMatrix2x2_64F$org_ejml_data_FixedMatrix2x2_64F$org_ejml_data_FixedMatrix2x2_64F', function (a, b, c) {
c.a11=a.a11 + b.a11;
c.a12=a.a12 + b.a12;
c.a21=a.a21 + b.a21;
c.a22=a.a22 + b.a22;
}, 1);

Clazz.newMeth(C$, 'addEquals$org_ejml_data_FixedMatrix2x2_64F$org_ejml_data_FixedMatrix2x2_64F', function (a, b) {
a.a11 += b.a11;
a.a12 += b.a12;
a.a21 += b.a21;
a.a22 += b.a22;
}, 1);

Clazz.newMeth(C$, 'transpose$org_ejml_data_FixedMatrix2x2_64F', function (m) {
var tmp;
tmp=m.a12;
m.a12=m.a21;
m.a21=tmp;
}, 1);

Clazz.newMeth(C$, 'transpose$org_ejml_data_FixedMatrix2x2_64F$org_ejml_data_FixedMatrix2x2_64F', function (input, output) {
if (input == null ) input=Clazz.new_($I$(1,1));
output.a11=input.a11;
output.a12=input.a21;
output.a21=input.a12;
output.a22=input.a22;
return output;
}, 1);

Clazz.newMeth(C$, 'mult$org_ejml_data_FixedMatrix2x2_64F$org_ejml_data_FixedMatrix2x2_64F$org_ejml_data_FixedMatrix2x2_64F', function (a, b, c) {
c.a11=a.a11 * b.a11 + a.a12 * b.a21;
c.a12=a.a11 * b.a12 + a.a12 * b.a22;
c.a21=a.a21 * b.a11 + a.a22 * b.a21;
c.a22=a.a21 * b.a12 + a.a22 * b.a22;
}, 1);

Clazz.newMeth(C$, 'multTransA$org_ejml_data_FixedMatrix2x2_64F$org_ejml_data_FixedMatrix2x2_64F$org_ejml_data_FixedMatrix2x2_64F', function (a, b, c) {
c.a11=a.a11 * b.a11 + a.a21 * b.a21;
c.a12=a.a11 * b.a12 + a.a21 * b.a22;
c.a21=a.a12 * b.a11 + a.a22 * b.a21;
c.a22=a.a12 * b.a12 + a.a22 * b.a22;
}, 1);

Clazz.newMeth(C$, 'multTransAB$org_ejml_data_FixedMatrix2x2_64F$org_ejml_data_FixedMatrix2x2_64F$org_ejml_data_FixedMatrix2x2_64F', function (a, b, c) {
c.a11=a.a11 * b.a11 + a.a21 * b.a12;
c.a12=a.a11 * b.a21 + a.a21 * b.a22;
c.a21=a.a12 * b.a11 + a.a22 * b.a12;
c.a22=a.a12 * b.a21 + a.a22 * b.a22;
}, 1);

Clazz.newMeth(C$, 'multTransB$org_ejml_data_FixedMatrix2x2_64F$org_ejml_data_FixedMatrix2x2_64F$org_ejml_data_FixedMatrix2x2_64F', function (a, b, c) {
c.a11=a.a11 * b.a11 + a.a12 * b.a12;
c.a12=a.a11 * b.a21 + a.a12 * b.a22;
c.a21=a.a21 * b.a11 + a.a22 * b.a12;
c.a22=a.a21 * b.a21 + a.a22 * b.a22;
}, 1);

Clazz.newMeth(C$, 'mult$org_ejml_data_FixedMatrix2x2_64F$org_ejml_data_FixedMatrix2_64F$org_ejml_data_FixedMatrix2_64F', function (a, b, c) {
c.a1=a.a11 * b.a1 + a.a12 * b.a2;
c.a2=a.a21 * b.a1 + a.a22 * b.a2;
}, 1);

Clazz.newMeth(C$, 'mult$org_ejml_data_FixedMatrix2_64F$org_ejml_data_FixedMatrix2x2_64F$org_ejml_data_FixedMatrix2_64F', function (a, b, c) {
c.a1=a.a1 * b.a11 + a.a2 * b.a21;
c.a2=a.a1 * b.a12 + a.a2 * b.a22;
}, 1);

Clazz.newMeth(C$, 'dot$org_ejml_data_FixedMatrix2_64F$org_ejml_data_FixedMatrix2_64F', function (a, b) {
return a.a1 * b.a1 + a.a2 * b.a2;
}, 1);

Clazz.newMeth(C$, 'setIdentity$org_ejml_data_FixedMatrix2x2_64F', function (a) {
a.a11=1;
a.a21=0;
a.a12=0;
a.a22=1;
}, 1);

Clazz.newMeth(C$, 'invert$org_ejml_data_FixedMatrix2x2_64F$org_ejml_data_FixedMatrix2x2_64F', function (a, inv) {
var scale=1.0 / C$.elementMaxAbs$org_ejml_data_FixedMatrix2x2_64F(a);
var a11=a.a11 * scale;
var a12=a.a12 * scale;
var a21=a.a21 * scale;
var a22=a.a22 * scale;
var m11=a22;
var m12=-(a21);
var m21=-(a12);
var m22=a11;
var det=(a11 * m11 + a12 * m12) / scale;
inv.a11=m11 / det;
inv.a12=m21 / det;
inv.a21=m12 / det;
inv.a22=m22 / det;
return !Double.isNaN$D(det) && !Double.isInfinite$D(det) ;
}, 1);

Clazz.newMeth(C$, 'det$org_ejml_data_FixedMatrix2x2_64F', function (mat) {
return mat.a11 * mat.a22 - mat.a12 * mat.a21;
}, 1);

Clazz.newMeth(C$, 'trace$org_ejml_data_FixedMatrix2x2_64F', function (a) {
return a.a11 + a.a21;
}, 1);

Clazz.newMeth(C$, 'diag$org_ejml_data_FixedMatrix2x2_64F$org_ejml_data_FixedMatrix2_64F', function (input, out) {
out.a1=input.a11;
out.a2=input.a22;
}, 1);

Clazz.newMeth(C$, 'elementMax$org_ejml_data_FixedMatrix2x2_64F', function (a) {
var max=a.a11;
max=Math.max(max, a.a12);
max=Math.max(max, a.a21);
max=Math.max(max, a.a22);
return max;
}, 1);

Clazz.newMeth(C$, 'elementMaxAbs$org_ejml_data_FixedMatrix2x2_64F', function (a) {
var max=a.a11;
max=Math.max(max, Math.abs(a.a12));
max=Math.max(max, Math.abs(a.a21));
max=Math.max(max, Math.abs(a.a22));
return max;
}, 1);

Clazz.newMeth(C$, 'elementMin$org_ejml_data_FixedMatrix2x2_64F', function (a) {
var min=a.a11;
min=Math.min(min, a.a12);
min=Math.min(min, a.a21);
min=Math.min(min, a.a22);
return min;
}, 1);

Clazz.newMeth(C$, 'elementMinAbs$org_ejml_data_FixedMatrix2x2_64F', function (a) {
var min=a.a11;
min=Math.min(min, Math.abs(a.a12));
min=Math.min(min, Math.abs(a.a21));
min=Math.min(min, Math.abs(a.a22));
return min;
}, 1);

Clazz.newMeth(C$, 'elementMult$org_ejml_data_FixedMatrix2x2_64F$org_ejml_data_FixedMatrix2x2_64F', function (a, b) {
a.a11 *= b.a11;
a.a12 *= b.a12;
a.a21 *= b.a21;
a.a22 *= b.a22;
}, 1);

Clazz.newMeth(C$, 'elementMult$org_ejml_data_FixedMatrix2x2_64F$org_ejml_data_FixedMatrix2x2_64F$org_ejml_data_FixedMatrix2x2_64F', function (a, b, c) {
c.a11=a.a11 * b.a11;
c.a12=a.a12 * b.a12;
c.a21=a.a21 * b.a21;
c.a22=a.a22 * b.a22;
}, 1);

Clazz.newMeth(C$, 'elementDiv$org_ejml_data_FixedMatrix2x2_64F$org_ejml_data_FixedMatrix2x2_64F', function (a, b) {
a.a11 /= b.a11;
a.a12 /= b.a12;
a.a21 /= b.a21;
a.a22 /= b.a22;
}, 1);

Clazz.newMeth(C$, 'elementDiv$org_ejml_data_FixedMatrix2x2_64F$org_ejml_data_FixedMatrix2x2_64F$org_ejml_data_FixedMatrix2x2_64F', function (a, b, c) {
c.a11=a.a11 / b.a11;
c.a12=a.a12 / b.a12;
c.a21=a.a21 / b.a21;
c.a22=a.a22 / b.a22;
}, 1);

Clazz.newMeth(C$, 'scale$D$org_ejml_data_FixedMatrix2x2_64F', function (alpha, a) {
a.a11 *= alpha;
a.a12 *= alpha;
a.a21 *= alpha;
a.a22 *= alpha;
}, 1);

Clazz.newMeth(C$, 'scale$D$org_ejml_data_FixedMatrix2x2_64F$org_ejml_data_FixedMatrix2x2_64F', function (alpha, a, b) {
b.a11=a.a11 * alpha;
b.a12=a.a12 * alpha;
b.a21=a.a21 * alpha;
b.a22=a.a22 * alpha;
}, 1);

Clazz.newMeth(C$, 'divide$D$org_ejml_data_FixedMatrix2x2_64F', function (alpha, a) {
a.a11 /= alpha;
a.a12 /= alpha;
a.a21 /= alpha;
a.a22 /= alpha;
}, 1);

Clazz.newMeth(C$, 'divide$D$org_ejml_data_FixedMatrix2x2_64F$org_ejml_data_FixedMatrix2x2_64F', function (alpha, a, b) {
b.a11=a.a11 / alpha;
b.a12=a.a12 / alpha;
b.a21=a.a21 / alpha;
b.a22=a.a22 / alpha;
}, 1);

Clazz.newMeth(C$, 'changeSign$org_ejml_data_FixedMatrix2x2_64F', function (a) {
a.a11=-a.a11;
a.a12=-a.a12;
a.a21=-a.a21;
a.a22=-a.a22;
}, 1);

Clazz.newMeth(C$, 'fill$org_ejml_data_FixedMatrix2x2_64F$D', function (a, v) {
a.a11=v;
a.a12=v;
a.a21=v;
a.a22=v;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
