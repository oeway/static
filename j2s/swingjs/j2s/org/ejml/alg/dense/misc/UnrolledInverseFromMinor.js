(function(){var P$=Clazz.newPackage("org.ejml.alg.dense.misc"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "UnrolledInverseFromMinor");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'inv$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F', function (mat, inv) {
var max=Math.abs(mat.data[0]);
var N=mat.getNumElements$();
for (var i=1; i < N; i++) {
var a=Math.abs(mat.data[i]);
if (a > max ) max=a;
}
if (mat.numRows == 2) {
C$.inv2$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$D(mat, inv, 1.0 / max);
} else if (mat.numRows == 3) {
C$.inv3$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$D(mat, inv, 1.0 / max);
} else if (mat.numRows == 4) {
C$.inv4$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$D(mat, inv, 1.0 / max);
} else if (mat.numRows == 5) {
C$.inv5$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$D(mat, inv, 1.0 / max);
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not supported"]);
}}, 1);

Clazz.newMeth(C$, 'inv2$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$D', function (mat, inv, scale) {
var data=mat.data;
var a11=data[0] * scale;
var a12=data[1] * scale;
var a21=data[2] * scale;
var a22=data[3] * scale;
var m11=a22;
var m12=-(a21);
var m21=-(a12);
var m22=a11;
var det=(a11 * m11 + a12 * m12) / scale;
data=inv.data;
data[0]=m11 / det;
data[1]=m21 / det;
data[2]=m12 / det;
data[3]=m22 / det;
}, 1);

Clazz.newMeth(C$, 'inv3$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$D', function (mat, inv, scale) {
var data=mat.data;
var a11=data[0] * scale;
var a12=data[1] * scale;
var a13=data[2] * scale;
var a21=data[3] * scale;
var a22=data[4] * scale;
var a23=data[5] * scale;
var a31=data[6] * scale;
var a32=data[7] * scale;
var a33=data[8] * scale;
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
data=inv.data;
data[0]=m11 / det;
data[1]=m21 / det;
data[2]=m31 / det;
data[3]=m12 / det;
data[4]=m22 / det;
data[5]=m32 / det;
data[6]=m13 / det;
data[7]=m23 / det;
data[8]=m33 / det;
}, 1);

Clazz.newMeth(C$, 'inv4$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$D', function (mat, inv, scale) {
var data=mat.data;
var a11=data[0] * scale;
var a12=data[1] * scale;
var a13=data[2] * scale;
var a14=data[3] * scale;
var a21=data[4] * scale;
var a22=data[5] * scale;
var a23=data[6] * scale;
var a24=data[7] * scale;
var a31=data[8] * scale;
var a32=data[9] * scale;
var a33=data[10] * scale;
var a34=data[11] * scale;
var a41=data[12] * scale;
var a42=data[13] * scale;
var a43=data[14] * scale;
var a44=data[15] * scale;
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
data=inv.data;
data[0]=m11 / det;
data[1]=m21 / det;
data[2]=m31 / det;
data[3]=m41 / det;
data[4]=m12 / det;
data[5]=m22 / det;
data[6]=m32 / det;
data[7]=m42 / det;
data[8]=m13 / det;
data[9]=m23 / det;
data[10]=m33 / det;
data[11]=m43 / det;
data[12]=m14 / det;
data[13]=m24 / det;
data[14]=m34 / det;
data[15]=m44 / det;
}, 1);

Clazz.newMeth(C$, 'inv5$org_ejml_data_DenseMatrix64F$org_ejml_data_DenseMatrix64F$D', function (mat, inv, scale) {
var data=mat.data;
var a11=data[0] * scale;
var a12=data[1] * scale;
var a13=data[2] * scale;
var a14=data[3] * scale;
var a15=data[4] * scale;
var a21=data[5] * scale;
var a22=data[6] * scale;
var a23=data[7] * scale;
var a24=data[8] * scale;
var a25=data[9] * scale;
var a31=data[10] * scale;
var a32=data[11] * scale;
var a33=data[12] * scale;
var a34=data[13] * scale;
var a35=data[14] * scale;
var a41=data[15] * scale;
var a42=data[16] * scale;
var a43=data[17] * scale;
var a44=data[18] * scale;
var a45=data[19] * scale;
var a51=data[20] * scale;
var a52=data[21] * scale;
var a53=data[22] * scale;
var a54=data[23] * scale;
var a55=data[24] * scale;
var m11=+a22 * (+a33 * (a44 * a55 - a45 * a54) - a34 * (a43 * a55 - a45 * a53) + a35 * (a43 * a54 - a44 * a53)) - a23 * (+a32 * (a44 * a55 - a45 * a54) - a34 * (a42 * a55 - a45 * a52) + a35 * (a42 * a54 - a44 * a52)) + a24 * (+a32 * (a43 * a55 - a45 * a53) - a33 * (a42 * a55 - a45 * a52) + a35 * (a42 * a53 - a43 * a52)) - a25 * (+a32 * (a43 * a54 - a44 * a53) - a33 * (a42 * a54 - a44 * a52) + a34 * (a42 * a53 - a43 * a52));
var m12=-(+a21 * (+a33 * (a44 * a55 - a45 * a54) - a34 * (a43 * a55 - a45 * a53) + a35 * (a43 * a54 - a44 * a53)) - a23 * (+a31 * (a44 * a55 - a45 * a54) - a34 * (a41 * a55 - a45 * a51) + a35 * (a41 * a54 - a44 * a51)) + a24 * (+a31 * (a43 * a55 - a45 * a53) - a33 * (a41 * a55 - a45 * a51) + a35 * (a41 * a53 - a43 * a51)) - a25 * (+a31 * (a43 * a54 - a44 * a53) - a33 * (a41 * a54 - a44 * a51) + a34 * (a41 * a53 - a43 * a51)));
var m13=+a21 * (+a32 * (a44 * a55 - a45 * a54) - a34 * (a42 * a55 - a45 * a52) + a35 * (a42 * a54 - a44 * a52)) - a22 * (+a31 * (a44 * a55 - a45 * a54) - a34 * (a41 * a55 - a45 * a51) + a35 * (a41 * a54 - a44 * a51)) + a24 * (+a31 * (a42 * a55 - a45 * a52) - a32 * (a41 * a55 - a45 * a51) + a35 * (a41 * a52 - a42 * a51)) - a25 * (+a31 * (a42 * a54 - a44 * a52) - a32 * (a41 * a54 - a44 * a51) + a34 * (a41 * a52 - a42 * a51));
var m14=-(+a21 * (+a32 * (a43 * a55 - a45 * a53) - a33 * (a42 * a55 - a45 * a52) + a35 * (a42 * a53 - a43 * a52)) - a22 * (+a31 * (a43 * a55 - a45 * a53) - a33 * (a41 * a55 - a45 * a51) + a35 * (a41 * a53 - a43 * a51)) + a23 * (+a31 * (a42 * a55 - a45 * a52) - a32 * (a41 * a55 - a45 * a51) + a35 * (a41 * a52 - a42 * a51)) - a25 * (+a31 * (a42 * a53 - a43 * a52) - a32 * (a41 * a53 - a43 * a51) + a33 * (a41 * a52 - a42 * a51)));
var m15=+a21 * (+a32 * (a43 * a54 - a44 * a53) - a33 * (a42 * a54 - a44 * a52) + a34 * (a42 * a53 - a43 * a52)) - a22 * (+a31 * (a43 * a54 - a44 * a53) - a33 * (a41 * a54 - a44 * a51) + a34 * (a41 * a53 - a43 * a51)) + a23 * (+a31 * (a42 * a54 - a44 * a52) - a32 * (a41 * a54 - a44 * a51) + a34 * (a41 * a52 - a42 * a51)) - a24 * (+a31 * (a42 * a53 - a43 * a52) - a32 * (a41 * a53 - a43 * a51) + a33 * (a41 * a52 - a42 * a51));
var m21=-(+a12 * (+a33 * (a44 * a55 - a45 * a54) - a34 * (a43 * a55 - a45 * a53) + a35 * (a43 * a54 - a44 * a53)) - a13 * (+a32 * (a44 * a55 - a45 * a54) - a34 * (a42 * a55 - a45 * a52) + a35 * (a42 * a54 - a44 * a52)) + a14 * (+a32 * (a43 * a55 - a45 * a53) - a33 * (a42 * a55 - a45 * a52) + a35 * (a42 * a53 - a43 * a52)) - a15 * (+a32 * (a43 * a54 - a44 * a53) - a33 * (a42 * a54 - a44 * a52) + a34 * (a42 * a53 - a43 * a52)));
var m22=+a11 * (+a33 * (a44 * a55 - a45 * a54) - a34 * (a43 * a55 - a45 * a53) + a35 * (a43 * a54 - a44 * a53)) - a13 * (+a31 * (a44 * a55 - a45 * a54) - a34 * (a41 * a55 - a45 * a51) + a35 * (a41 * a54 - a44 * a51)) + a14 * (+a31 * (a43 * a55 - a45 * a53) - a33 * (a41 * a55 - a45 * a51) + a35 * (a41 * a53 - a43 * a51)) - a15 * (+a31 * (a43 * a54 - a44 * a53) - a33 * (a41 * a54 - a44 * a51) + a34 * (a41 * a53 - a43 * a51));
var m23=-(+a11 * (+a32 * (a44 * a55 - a45 * a54) - a34 * (a42 * a55 - a45 * a52) + a35 * (a42 * a54 - a44 * a52)) - a12 * (+a31 * (a44 * a55 - a45 * a54) - a34 * (a41 * a55 - a45 * a51) + a35 * (a41 * a54 - a44 * a51)) + a14 * (+a31 * (a42 * a55 - a45 * a52) - a32 * (a41 * a55 - a45 * a51) + a35 * (a41 * a52 - a42 * a51)) - a15 * (+a31 * (a42 * a54 - a44 * a52) - a32 * (a41 * a54 - a44 * a51) + a34 * (a41 * a52 - a42 * a51)));
var m24=+a11 * (+a32 * (a43 * a55 - a45 * a53) - a33 * (a42 * a55 - a45 * a52) + a35 * (a42 * a53 - a43 * a52)) - a12 * (+a31 * (a43 * a55 - a45 * a53) - a33 * (a41 * a55 - a45 * a51) + a35 * (a41 * a53 - a43 * a51)) + a13 * (+a31 * (a42 * a55 - a45 * a52) - a32 * (a41 * a55 - a45 * a51) + a35 * (a41 * a52 - a42 * a51)) - a15 * (+a31 * (a42 * a53 - a43 * a52) - a32 * (a41 * a53 - a43 * a51) + a33 * (a41 * a52 - a42 * a51));
var m25=-(+a11 * (+a32 * (a43 * a54 - a44 * a53) - a33 * (a42 * a54 - a44 * a52) + a34 * (a42 * a53 - a43 * a52)) - a12 * (+a31 * (a43 * a54 - a44 * a53) - a33 * (a41 * a54 - a44 * a51) + a34 * (a41 * a53 - a43 * a51)) + a13 * (+a31 * (a42 * a54 - a44 * a52) - a32 * (a41 * a54 - a44 * a51) + a34 * (a41 * a52 - a42 * a51)) - a14 * (+a31 * (a42 * a53 - a43 * a52) - a32 * (a41 * a53 - a43 * a51) + a33 * (a41 * a52 - a42 * a51)));
var m31=+a12 * (+a23 * (a44 * a55 - a45 * a54) - a24 * (a43 * a55 - a45 * a53) + a25 * (a43 * a54 - a44 * a53)) - a13 * (+a22 * (a44 * a55 - a45 * a54) - a24 * (a42 * a55 - a45 * a52) + a25 * (a42 * a54 - a44 * a52)) + a14 * (+a22 * (a43 * a55 - a45 * a53) - a23 * (a42 * a55 - a45 * a52) + a25 * (a42 * a53 - a43 * a52)) - a15 * (+a22 * (a43 * a54 - a44 * a53) - a23 * (a42 * a54 - a44 * a52) + a24 * (a42 * a53 - a43 * a52));
var m32=-(+a11 * (+a23 * (a44 * a55 - a45 * a54) - a24 * (a43 * a55 - a45 * a53) + a25 * (a43 * a54 - a44 * a53)) - a13 * (+a21 * (a44 * a55 - a45 * a54) - a24 * (a41 * a55 - a45 * a51) + a25 * (a41 * a54 - a44 * a51)) + a14 * (+a21 * (a43 * a55 - a45 * a53) - a23 * (a41 * a55 - a45 * a51) + a25 * (a41 * a53 - a43 * a51)) - a15 * (+a21 * (a43 * a54 - a44 * a53) - a23 * (a41 * a54 - a44 * a51) + a24 * (a41 * a53 - a43 * a51)));
var m33=+a11 * (+a22 * (a44 * a55 - a45 * a54) - a24 * (a42 * a55 - a45 * a52) + a25 * (a42 * a54 - a44 * a52)) - a12 * (+a21 * (a44 * a55 - a45 * a54) - a24 * (a41 * a55 - a45 * a51) + a25 * (a41 * a54 - a44 * a51)) + a14 * (+a21 * (a42 * a55 - a45 * a52) - a22 * (a41 * a55 - a45 * a51) + a25 * (a41 * a52 - a42 * a51)) - a15 * (+a21 * (a42 * a54 - a44 * a52) - a22 * (a41 * a54 - a44 * a51) + a24 * (a41 * a52 - a42 * a51));
var m34=-(+a11 * (+a22 * (a43 * a55 - a45 * a53) - a23 * (a42 * a55 - a45 * a52) + a25 * (a42 * a53 - a43 * a52)) - a12 * (+a21 * (a43 * a55 - a45 * a53) - a23 * (a41 * a55 - a45 * a51) + a25 * (a41 * a53 - a43 * a51)) + a13 * (+a21 * (a42 * a55 - a45 * a52) - a22 * (a41 * a55 - a45 * a51) + a25 * (a41 * a52 - a42 * a51)) - a15 * (+a21 * (a42 * a53 - a43 * a52) - a22 * (a41 * a53 - a43 * a51) + a23 * (a41 * a52 - a42 * a51)));
var m35=+a11 * (+a22 * (a43 * a54 - a44 * a53) - a23 * (a42 * a54 - a44 * a52) + a24 * (a42 * a53 - a43 * a52)) - a12 * (+a21 * (a43 * a54 - a44 * a53) - a23 * (a41 * a54 - a44 * a51) + a24 * (a41 * a53 - a43 * a51)) + a13 * (+a21 * (a42 * a54 - a44 * a52) - a22 * (a41 * a54 - a44 * a51) + a24 * (a41 * a52 - a42 * a51)) - a14 * (+a21 * (a42 * a53 - a43 * a52) - a22 * (a41 * a53 - a43 * a51) + a23 * (a41 * a52 - a42 * a51));
var m41=-(+a12 * (+a23 * (a34 * a55 - a35 * a54) - a24 * (a33 * a55 - a35 * a53) + a25 * (a33 * a54 - a34 * a53)) - a13 * (+a22 * (a34 * a55 - a35 * a54) - a24 * (a32 * a55 - a35 * a52) + a25 * (a32 * a54 - a34 * a52)) + a14 * (+a22 * (a33 * a55 - a35 * a53) - a23 * (a32 * a55 - a35 * a52) + a25 * (a32 * a53 - a33 * a52)) - a15 * (+a22 * (a33 * a54 - a34 * a53) - a23 * (a32 * a54 - a34 * a52) + a24 * (a32 * a53 - a33 * a52)));
var m42=+a11 * (+a23 * (a34 * a55 - a35 * a54) - a24 * (a33 * a55 - a35 * a53) + a25 * (a33 * a54 - a34 * a53)) - a13 * (+a21 * (a34 * a55 - a35 * a54) - a24 * (a31 * a55 - a35 * a51) + a25 * (a31 * a54 - a34 * a51)) + a14 * (+a21 * (a33 * a55 - a35 * a53) - a23 * (a31 * a55 - a35 * a51) + a25 * (a31 * a53 - a33 * a51)) - a15 * (+a21 * (a33 * a54 - a34 * a53) - a23 * (a31 * a54 - a34 * a51) + a24 * (a31 * a53 - a33 * a51));
var m43=-(+a11 * (+a22 * (a34 * a55 - a35 * a54) - a24 * (a32 * a55 - a35 * a52) + a25 * (a32 * a54 - a34 * a52)) - a12 * (+a21 * (a34 * a55 - a35 * a54) - a24 * (a31 * a55 - a35 * a51) + a25 * (a31 * a54 - a34 * a51)) + a14 * (+a21 * (a32 * a55 - a35 * a52) - a22 * (a31 * a55 - a35 * a51) + a25 * (a31 * a52 - a32 * a51)) - a15 * (+a21 * (a32 * a54 - a34 * a52) - a22 * (a31 * a54 - a34 * a51) + a24 * (a31 * a52 - a32 * a51)));
var m44=+a11 * (+a22 * (a33 * a55 - a35 * a53) - a23 * (a32 * a55 - a35 * a52) + a25 * (a32 * a53 - a33 * a52)) - a12 * (+a21 * (a33 * a55 - a35 * a53) - a23 * (a31 * a55 - a35 * a51) + a25 * (a31 * a53 - a33 * a51)) + a13 * (+a21 * (a32 * a55 - a35 * a52) - a22 * (a31 * a55 - a35 * a51) + a25 * (a31 * a52 - a32 * a51)) - a15 * (+a21 * (a32 * a53 - a33 * a52) - a22 * (a31 * a53 - a33 * a51) + a23 * (a31 * a52 - a32 * a51));
var m45=-(+a11 * (+a22 * (a33 * a54 - a34 * a53) - a23 * (a32 * a54 - a34 * a52) + a24 * (a32 * a53 - a33 * a52)) - a12 * (+a21 * (a33 * a54 - a34 * a53) - a23 * (a31 * a54 - a34 * a51) + a24 * (a31 * a53 - a33 * a51)) + a13 * (+a21 * (a32 * a54 - a34 * a52) - a22 * (a31 * a54 - a34 * a51) + a24 * (a31 * a52 - a32 * a51)) - a14 * (+a21 * (a32 * a53 - a33 * a52) - a22 * (a31 * a53 - a33 * a51) + a23 * (a31 * a52 - a32 * a51)));
var m51=+a12 * (+a23 * (a34 * a45 - a35 * a44) - a24 * (a33 * a45 - a35 * a43) + a25 * (a33 * a44 - a34 * a43)) - a13 * (+a22 * (a34 * a45 - a35 * a44) - a24 * (a32 * a45 - a35 * a42) + a25 * (a32 * a44 - a34 * a42)) + a14 * (+a22 * (a33 * a45 - a35 * a43) - a23 * (a32 * a45 - a35 * a42) + a25 * (a32 * a43 - a33 * a42)) - a15 * (+a22 * (a33 * a44 - a34 * a43) - a23 * (a32 * a44 - a34 * a42) + a24 * (a32 * a43 - a33 * a42));
var m52=-(+a11 * (+a23 * (a34 * a45 - a35 * a44) - a24 * (a33 * a45 - a35 * a43) + a25 * (a33 * a44 - a34 * a43)) - a13 * (+a21 * (a34 * a45 - a35 * a44) - a24 * (a31 * a45 - a35 * a41) + a25 * (a31 * a44 - a34 * a41)) + a14 * (+a21 * (a33 * a45 - a35 * a43) - a23 * (a31 * a45 - a35 * a41) + a25 * (a31 * a43 - a33 * a41)) - a15 * (+a21 * (a33 * a44 - a34 * a43) - a23 * (a31 * a44 - a34 * a41) + a24 * (a31 * a43 - a33 * a41)));
var m53=+a11 * (+a22 * (a34 * a45 - a35 * a44) - a24 * (a32 * a45 - a35 * a42) + a25 * (a32 * a44 - a34 * a42)) - a12 * (+a21 * (a34 * a45 - a35 * a44) - a24 * (a31 * a45 - a35 * a41) + a25 * (a31 * a44 - a34 * a41)) + a14 * (+a21 * (a32 * a45 - a35 * a42) - a22 * (a31 * a45 - a35 * a41) + a25 * (a31 * a42 - a32 * a41)) - a15 * (+a21 * (a32 * a44 - a34 * a42) - a22 * (a31 * a44 - a34 * a41) + a24 * (a31 * a42 - a32 * a41));
var m54=-(+a11 * (+a22 * (a33 * a45 - a35 * a43) - a23 * (a32 * a45 - a35 * a42) + a25 * (a32 * a43 - a33 * a42)) - a12 * (+a21 * (a33 * a45 - a35 * a43) - a23 * (a31 * a45 - a35 * a41) + a25 * (a31 * a43 - a33 * a41)) + a13 * (+a21 * (a32 * a45 - a35 * a42) - a22 * (a31 * a45 - a35 * a41) + a25 * (a31 * a42 - a32 * a41)) - a15 * (+a21 * (a32 * a43 - a33 * a42) - a22 * (a31 * a43 - a33 * a41) + a23 * (a31 * a42 - a32 * a41)));
var m55=+a11 * (+a22 * (a33 * a44 - a34 * a43) - a23 * (a32 * a44 - a34 * a42) + a24 * (a32 * a43 - a33 * a42)) - a12 * (+a21 * (a33 * a44 - a34 * a43) - a23 * (a31 * a44 - a34 * a41) + a24 * (a31 * a43 - a33 * a41)) + a13 * (+a21 * (a32 * a44 - a34 * a42) - a22 * (a31 * a44 - a34 * a41) + a24 * (a31 * a42 - a32 * a41)) - a14 * (+a21 * (a32 * a43 - a33 * a42) - a22 * (a31 * a43 - a33 * a41) + a23 * (a31 * a42 - a32 * a41));
var det=(a11 * m11 + a12 * m12 + a13 * m13 + a14 * m14 + a15 * m15) / scale;
data=inv.data;
data[0]=m11 / det;
data[1]=m21 / det;
data[2]=m31 / det;
data[3]=m41 / det;
data[4]=m51 / det;
data[5]=m12 / det;
data[6]=m22 / det;
data[7]=m32 / det;
data[8]=m42 / det;
data[9]=m52 / det;
data[10]=m13 / det;
data[11]=m23 / det;
data[12]=m33 / det;
data[13]=m43 / det;
data[14]=m53 / det;
data[15]=m14 / det;
data[16]=m24 / det;
data[17]=m34 / det;
data[18]=m44 / det;
data[19]=m54 / det;
data[20]=m15 / det;
data[21]=m25 / det;
data[22]=m35 / det;
data[23]=m45 / det;
data[24]=m55 / det;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:30 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
