(function(){var P$=Clazz.newPackage("net.imglib2.util"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "LinAlgHelpers");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'rows$DA', function (a) {
return a.length;
}, 1);

Clazz.newMeth(C$, 'rows$DAA', function (A) {
return A.length;
}, 1);

Clazz.newMeth(C$, 'cols$DAA', function (A) {
return A[0].length;
}, 1);

Clazz.newMeth(C$, 'squareLength$DA', function (a) {
var rows=C$.rows$DA(a);
var squ_len=0.0;
for (var i=0; i < rows; ++i) squ_len += a[i] * a[i];

return squ_len;
}, 1);

Clazz.newMeth(C$, 'length$DA', function (a) {
return Math.sqrt(C$.squareLength$DA(a));
}, 1);

Clazz.newMeth(C$, 'squareDistance$DA$DA', function (a, b) {
Clazz.assert(C$, this, function(){return C$.rows$DA(a) == C$.rows$DA(b)});
var rows=C$.rows$DA(a);
var squ_len=0.0;
for (var i=0; i < rows; ++i) squ_len += (a[i] - b[i]) * (a[i] - b[i]);

return squ_len;
}, 1);

Clazz.newMeth(C$, 'distance$DA$DA', function (a, b) {
return Math.sqrt(C$.squareDistance$DA$DA(a, b));
}, 1);

Clazz.newMeth(C$, 'scale$DA$D$DA', function (a, b, c) {
Clazz.assert(C$, this, function(){return C$.rows$DA(a) == C$.rows$DA(c)});
var rows=C$.rows$DA(a);
for (var i=0; i < rows; ++i) c[i]=a[i] * b;

}, 1);

Clazz.newMeth(C$, 'scale$DAA$D$DAA', function (A, b, C) {
Clazz.assert(C$, this, function(){return C$.rows$DAA(A) == C$.rows$DAA(C) && C$.cols$DAA(A) == C$.cols$DAA(C) });
var rows=C$.rows$DAA(A);
var cols=C$.cols$DAA(A);
for (var i=0; i < rows; ++i) for (var j=0; j < cols; ++j) C[i][j]=A[i][j] * b;


}, 1);

Clazz.newMeth(C$, 'copy$DAA$DAA', function (A, C) {
Clazz.assert(C$, this, function(){return C$.rows$DAA(A) == C$.rows$DAA(C) && C$.cols$DAA(A) == C$.cols$DAA(C) });
var rows=C$.rows$DAA(A);
var cols=C$.cols$DAA(A);
for (var i=0; i < rows; ++i) for (var j=0; j < cols; ++j) C[i][j]=A[i][j];


}, 1);

Clazz.newMeth(C$, 'subtract$DA$DA$DA', function (a, b, c) {
Clazz.assert(C$, this, function(){return (C$.rows$DA(a) == C$.rows$DA(b)) && (C$.rows$DA(a) == C$.rows$DA(c)) });
var rows=C$.rows$DA(a);
for (var i=0; i < rows; ++i) c[i]=a[i] - b[i];

}, 1);

Clazz.newMeth(C$, 'add$DA$DA$DA', function (a, b, c) {
Clazz.assert(C$, this, function(){return (C$.rows$DA(a) == C$.rows$DA(b)) && (C$.rows$DA(a) == C$.rows$DA(c)) });
var rows=C$.rows$DA(a);
for (var i=0; i < rows; ++i) c[i]=a[i] + b[i];

}, 1);

Clazz.newMeth(C$, 'mult$DAA$DA$DA', function (A, b, c) {
Clazz.assert(C$, this, function(){return C$.cols$DAA(A) == C$.rows$DA(b)});
Clazz.assert(C$, this, function(){return C$.rows$DA(c) == C$.rows$DAA(A)});
var rows=C$.rows$DA(c);
var Acols=C$.cols$DAA(A);
for (var i=0; i < rows; ++i) {
var sum=0;
for (var k=0; k < Acols; ++k) sum += A[i][k] * b[k];

c[i]=sum;
}
}, 1);

Clazz.newMeth(C$, 'multT$DAA$DA$DA', function (A, b, c) {
Clazz.assert(C$, this, function(){return C$.rows$DAA(A) == C$.rows$DA(b)});
Clazz.assert(C$, this, function(){return C$.rows$DA(c) == C$.cols$DAA(A)});
var rows=C$.rows$DA(c);
var Arows=C$.rows$DAA(A);
for (var i=0; i < rows; ++i) {
var sum=0;
for (var k=0; k < Arows; ++k) sum += A[k][i] * b[k];

c[i]=sum;
}
}, 1);

Clazz.newMeth(C$, 'mult$DAA$DAA$DAA', function (A, B, C) {
Clazz.assert(C$, this, function(){return C$.cols$DAA(A) == C$.rows$DAA(B)});
Clazz.assert(C$, this, function(){return (C$.rows$DAA(C) == C$.rows$DAA(A)) && (C$.cols$DAA(C) == C$.cols$DAA(B)) });
var cols=C$.cols$DAA(C);
var rows=C$.rows$DAA(C);
var Acols=C$.cols$DAA(A);
for (var i=0; i < rows; ++i) {
for (var j=0; j < cols; ++j) {
var sum=0;
for (var k=0; k < Acols; ++k) sum += A[i][k] * B[k][j];

C[i][j]=sum;
}
}
}, 1);

Clazz.newMeth(C$, 'multABT$DAA$DAA$DAA', function (A, B, C) {
Clazz.assert(C$, this, function(){return C$.cols$DAA(A) == C$.cols$DAA(B)});
Clazz.assert(C$, this, function(){return (C$.rows$DAA(C) == C$.rows$DAA(A)) && (C$.cols$DAA(C) == C$.rows$DAA(B)) });
var cols=C$.cols$DAA(C);
var rows=C$.rows$DAA(C);
var Acols=C$.cols$DAA(A);
for (var i=0; i < rows; ++i) {
for (var j=0; j < cols; ++j) {
var sum=0;
for (var k=0; k < Acols; ++k) sum += A[i][k] * B[j][k];

C[i][j]=sum;
}
}
}, 1);

Clazz.newMeth(C$, 'multATB$DAA$DAA$DAA', function (A, B, C) {
Clazz.assert(C$, this, function(){return C$.rows$DAA(A) == C$.rows$DAA(B)});
Clazz.assert(C$, this, function(){return (C$.rows$DAA(C) == C$.cols$DAA(A)) && (C$.cols$DAA(C) == C$.cols$DAA(B)) });
var cols=C$.cols$DAA(C);
var rows=C$.rows$DAA(C);
var Arows=C$.rows$DAA(A);
for (var i=0; i < rows; ++i) {
for (var j=0; j < cols; ++j) {
var sum=0;
for (var k=0; k < Arows; ++k) sum += A[k][i] * B[k][j];

C[i][j]=sum;
}
}
}, 1);

Clazz.newMeth(C$, 'add$DAA$DAA$DAA', function (A, B, C) {
Clazz.assert(C$, this, function(){return C$.rows$DAA(A) == C$.rows$DAA(B) && C$.rows$DAA(A) == C$.rows$DAA(C) });
Clazz.assert(C$, this, function(){return C$.cols$DAA(A) == C$.cols$DAA(B) && C$.cols$DAA(A) == C$.cols$DAA(C) });
var rows=C$.rows$DAA(A);
var cols=C$.cols$DAA(A);
for (var i=0; i < rows; ++i) for (var j=0; j < cols; ++j) C[i][j]=A[i][j] + B[i][j];


}, 1);

Clazz.newMeth(C$, 'getCol$I$DAA$DA', function (c, A, b) {
Clazz.assert(C$, this, function(){return C$.rows$DAA(A) == C$.rows$DA(b)});
Clazz.assert(C$, this, function(){return C$.cols$DAA(A) > c && c >= 0 });
var rows=C$.rows$DAA(A);
for (var i=0; i < rows; ++i) b[i]=A[i][c];

}, 1);

Clazz.newMeth(C$, 'setCol$I$DA$DAA', function (c, a, B) {
Clazz.assert(C$, this, function(){return C$.rows$DAA(B) == C$.rows$DA(a)});
Clazz.assert(C$, this, function(){return C$.cols$DAA(B) > c && c >= 0 });
var rows=C$.rows$DAA(B);
for (var i=0; i < rows; ++i) B[i][c]=a[i];

}, 1);

Clazz.newMeth(C$, 'getRow$I$DAA$DA', function (r, A, b) {
Clazz.assert(C$, this, function(){return C$.cols$DAA(A) == C$.rows$DA(b)});
Clazz.assert(C$, this, function(){return C$.rows$DAA(A) > r && r >= 0 });
var cols=C$.cols$DAA(A);
for (var i=0; i < cols; ++i) b[i]=A[r][i];

}, 1);

Clazz.newMeth(C$, 'setRow$I$DA$DAA', function (r, a, B) {
Clazz.assert(C$, this, function(){return C$.cols$DAA(B) == C$.rows$DA(a)});
Clazz.assert(C$, this, function(){return C$.rows$DAA(B) > r && r >= 0 });
var cols=C$.cols$DAA(B);
for (var i=0; i < cols; ++i) B[r][i]=a[i];

}, 1);

Clazz.newMeth(C$, 'normalize$DA', function (a) {
var rows=C$.rows$DA(a);
var len=C$.length$DA(a);
for (var i=0; i < rows; ++i) a[i] /= len;

}, 1);

Clazz.newMeth(C$, 'dot$DA$DA', function (a, b) {
Clazz.assert(C$, this, function(){return C$.rows$DA(a) == C$.rows$DA(b)});
var rows=C$.rows$DA(a);
var sum=0;
for (var i=0; i < rows; ++i) sum += a[i] * b[i];

return sum;
}, 1);

Clazz.newMeth(C$, 'cross$DA$DA$DA', function (a, b, c) {
c[0]=a[1] * b[2] - a[2] * b[1];
c[1]=a[2] * b[0] - a[0] * b[2];
c[2]=a[0] * b[1] - a[1] * b[0];
}, 1);

Clazz.newMeth(C$, 'outer$DA$DA$DAA', function (a, b, C) {
Clazz.assert(C$, this, function(){return C$.rows$DA(a) == C$.rows$DAA(C) && C$.rows$DA(b) == C$.cols$DAA(C) });
var rows=C$.rows$DA(a);
var cols=C$.rows$DA(b);
for (var i=0; i < rows; ++i) for (var j=0; j < cols; ++j) C[i][j]=a[i] * b[j];


}, 1);

Clazz.newMeth(C$, 'angleFromR$DAA', function (R) {
Clazz.assert(C$, this, function(){return C$.cols$DAA(R) >= 3});
Clazz.assert(C$, this, function(){return C$.rows$DAA(R) >= 3});
var tr=R[0][0] + R[1][1] + R[2][2] ;
var theta=Math.acos((tr - 1.0) / 2.0);
return theta;
}, 1);

Clazz.newMeth(C$, 'axisFromR$DAA$DA', function (R, a) {
Clazz.assert(C$, this, function(){return C$.cols$DAA(R) >= 3});
Clazz.assert(C$, this, function(){return C$.rows$DAA(R) >= 3});
Clazz.assert(C$, this, function(){return C$.rows$DA(a) >= 3});
var s=1.0 / (2.0 * Math.sin(C$.angleFromR$DAA(R)));
a[0]=s * (R[2][1] - R[1][2]);
a[1]=s * (R[0][2] - R[2][0]);
a[2]=s * (R[1][0] - R[0][1]);
}, 1);

Clazz.newMeth(C$, 'quaternionFromR$DAA$DA', function (R, q) {
Clazz.assert(C$, this, function(){return C$.cols$DAA(R) >= 3});
Clazz.assert(C$, this, function(){return C$.rows$DAA(R) >= 3});
Clazz.assert(C$, this, function(){return C$.rows$DA(q) >= 4});
var d0=R[0][0];
var d1=R[1][1];
var d2=R[2][2];
var rr=d0 + d1 + d2 ;
if (rr > 0 ) {
var s=0.5 / Math.sqrt(1.0 + rr);
q[1]=(R[2][1] - R[1][2]) * s;
q[2]=(R[0][2] - R[2][0]) * s;
q[3]=(R[1][0] - R[0][1]) * s;
q[0]=0.25 / s;
} else {
if ((d0 > d1 ) && (d0 > d2 ) ) {
var s2=Math.sqrt(1 + d0 - d1 - d2);
var s=0.5 / s2;
q[1]=0.5 * s2;
q[2]=(R[0][1] + R[1][0]) * s;
q[3]=(R[2][0] + R[0][2]) * s;
q[0]=(R[2][1] - R[1][2]) * s;
} else if (d1 > d2 ) {
var s2=Math.sqrt(1 - d0 + d1 - d2);
var s=0.5 / s2;
q[1]=(R[0][1] + R[1][0]) * s;
q[2]=0.5 * s2;
q[3]=(R[1][2] + R[2][1]) * s;
q[0]=(R[0][2] - R[2][0]) * s;
} else {
var s2=Math.sqrt(1 - d0 - d1  + d2);
var s=0.5 / s2;
q[1]=(R[2][0] + R[0][2]) * s;
q[2]=(R[1][2] + R[2][1]) * s;
q[3]=0.5 * s2;
q[0]=(R[1][0] - R[0][1]) * s;
}}}, 1);

Clazz.newMeth(C$, 'quaternionToR$DA$DAA', function (q, R) {
Clazz.assert(C$, this, function(){return C$.rows$DA(q) >= 4});
Clazz.assert(C$, this, function(){return C$.cols$DAA(R) >= 3});
Clazz.assert(C$, this, function(){return C$.rows$DAA(R) >= 3});
var w=q[0];
var x=q[1];
var y=q[2];
var z=q[3];
R[0][0]=w * w + x * x - y * y - z * z;
R[0][1]=2.0 * (x * y - w * z);
R[0][2]=2.0 * (x * z + w * y);
R[1][0]=2.0 * (y * x + w * z);
R[1][1]=w * w - x * x + y * y - z * z;
R[1][2]=2.0 * (y * z - w * x);
R[2][0]=2.0 * (z * x - w * y);
R[2][1]=2.0 * (z * y + w * x);
R[2][2]=w * w - x * x - y * y + z * z;
}, 1);

Clazz.newMeth(C$, 'quaternionFromAngleAxis$DA$D$DA', function (axis, angle, q) {
Clazz.assert(C$, this, function(){return C$.rows$DA(axis) >= 3});
Clazz.assert(C$, this, function(){return C$.rows$DA(q) >= 4});
var s=Math.sin(0.5 * angle);
q[0]=Math.cos(0.5 * angle);
q[1]=s * axis[0];
q[2]=s * axis[1];
q[3]=s * axis[2];
}, 1);

Clazz.newMeth(C$, 'quaternionMultiply$DA$DA$DA', function (p, q, pq) {
Clazz.assert(C$, this, function(){return C$.rows$DA(p) >= 4});
Clazz.assert(C$, this, function(){return C$.rows$DA(q) >= 4});
Clazz.assert(C$, this, function(){return C$.rows$DA(pq) >= 4});
var pw=p[0];
var px=p[1];
var py=p[2];
var pz=p[3];
var qw=q[0];
var qx=q[1];
var qy=q[2];
var qz=q[3];
pq[0]=pw * qw - px * qx - py * qy - pz * qz;
pq[1]=pw * qx + px * qw + py * qz - pz * qy;
pq[2]=pw * qy + py * qw + pz * qx - px * qz;
pq[3]=pw * qz + pz * qw + px * qy - py * qx;
}, 1);

Clazz.newMeth(C$, 'quaternionPower$DA$D$DA', function (q, a, qa) {
Clazz.assert(C$, this, function(){return C$.rows$DA(q) >= 4});
Clazz.assert(C$, this, function(){return C$.rows$DA(qa) >= 4});
var theta2=Math.acos(q[0]);
var s=Math.sin(a * theta2) / Math.sin(theta2);
if (Double.isNaN$D(s)) {
qa[0]=1;
qa[1]=0;
qa[2]=0;
qa[3]=0;
} else {
qa[0]=Math.cos(a * theta2);
qa[1]=s * q[1];
qa[2]=s * q[2];
qa[3]=s * q[3];
}}, 1);

Clazz.newMeth(C$, 'quaternionInvert$DA$DA', function (p, q) {
Clazz.assert(C$, this, function(){return C$.rows$DA(p) >= 4});
Clazz.assert(C$, this, function(){return C$.rows$DA(q) >= 4});
q[0]=p[0];
q[1]=-p[1];
q[2]=-p[2];
q[3]=-p[3];
}, 1);

Clazz.newMeth(C$, 'quaternionApply$DA$DA$DA', function (q, p, qp) {
Clazz.assert(C$, this, function(){return C$.rows$DA(q) >= 4});
Clazz.assert(C$, this, function(){return C$.rows$DA(p) >= 3});
Clazz.assert(C$, this, function(){return C$.rows$DA(qp) >= 3});
var w=q[0];
var x=q[1];
var y=q[2];
var z=q[3];
var q0=-x * p[0] - y * p[1] - z * p[2];
var q1=w * p[0] + y * p[2] - z * p[1];
var q2=w * p[1] + z * p[0] - x * p[2];
var q3=w * p[2] + x * p[1] - y * p[0];
qp[0]=-q0 * x + q1 * w - q2 * z + q3 * y;
qp[1]=-q0 * y + q2 * w - q3 * x + q1 * z;
qp[2]=-q0 * z + q3 * w - q1 * y + q2 * x;
}, 1);

Clazz.newMeth(C$, 'det3x3$DA', function (a) {
Clazz.assert(C$, this, function(){return a.length >= 9}, function(){return "Not enough coordinates."});
return a[0] * a[4] * a[8]  + a[3] * a[7] * a[2]  + a[6] * a[1] * a[5]  - a[2] * a[4] * a[6]  - a[5] * a[7] * a[0]  - a[8] * a[1] * a[3] ;
}, 1);

Clazz.newMeth(C$, 'det3x3$D$D$D$D$D$D$D$D$D', function (m00, m01, m02, m10, m11, m12, m20, m21, m22) {
return m00 * m11 * m22  + m10 * m21 * m02  + m20 * m01 * m12  - m02 * m11 * m20  - m12 * m21 * m00  - m22 * m01 * m10 ;
}, 1);

Clazz.newMeth(C$, 'invert3x3$DA', function (m) {
Clazz.assert(C$, this, function(){return m.length >= 9}, function(){return "Not enough coordinates."});
var det=C$.det3x3$DA(m);
if (det == 0 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Matrix not invertible."]);
var i00=(m[4] * m[8] - m[5] * m[7]) / det;
var i01=(m[2] * m[7] - m[1] * m[8]) / det;
var i02=(m[1] * m[5] - m[2] * m[4]) / det;
var i10=(m[5] * m[6] - m[3] * m[8]) / det;
var i11=(m[0] * m[8] - m[2] * m[6]) / det;
var i12=(m[2] * m[3] - m[0] * m[5]) / det;
var i20=(m[3] * m[7] - m[4] * m[6]) / det;
var i21=(m[1] * m[6] - m[0] * m[7]) / det;
var i22=(m[0] * m[4] - m[1] * m[3]) / det;
m[0]=i00;
m[1]=i01;
m[2]=i02;
m[3]=i10;
m[4]=i11;
m[5]=i12;
m[6]=i20;
m[7]=i21;
m[8]=i22;
}, 1);

Clazz.newMeth(C$, 'invert3x3$D$D$D$D$D$D$D$D$D', function (m00, m01, m02, m10, m11, m12, m20, m21, m22) {
var det=C$.det3x3$D$D$D$D$D$D$D$D$D(m00, m01, m02, m10, m11, m12, m20, m21, m22);
if (det == 0 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Matrix not invertible."]);
return Clazz.array(Double.TYPE, -1, [(m11 * m22 - m12 * m21) / det, (m02 * m21 - m01 * m22) / det, (m01 * m12 - m02 * m11) / det, (m12 * m20 - m10 * m22) / det, (m00 * m22 - m02 * m20) / det, (m02 * m10 - m00 * m12) / det, (m10 * m21 - m11 * m20) / det, (m01 * m20 - m00 * m21) / det, (m00 * m11 - m01 * m10) / det]);
}, 1);

Clazz.newMeth(C$, 'invertSymmetric3x3$DAA$DAA', function (m, inverse) {
var a00=m[2][2] * m[1][1] - m[1][2] * m[1][2];
var a01=m[0][2] * m[1][2] - m[2][2] * m[0][1];
var a02=m[0][1] * m[1][2] - m[0][2] * m[1][1];
var a11=m[2][2] * m[0][0] - m[0][2] * m[0][2];
var a12=m[0][1] * m[0][2] - m[0][0] * m[1][2];
var a22=m[0][0] * m[1][1] - m[0][1] * m[0][1];
var Dinv=1.0 / ((m[0][0] * a00) + (m[1][0] * a01) + (m[0][2] * a02) );
inverse[0][0]=a00 * Dinv;
inverse[1][0]=inverse[0][1]=a01 * Dinv;
inverse[2][0]=inverse[0][2]=a02 * Dinv;
inverse[1][1]=a11 * Dinv;
inverse[2][1]=inverse[1][2]=a12 * Dinv;
inverse[2][2]=a22 * Dinv;
}, 1);

Clazz.newMeth(C$, 'invertSymmetric2x2$DAA$DAA', function (m, inverse) {
var Dinv=1.0 / (m[0][0] * m[1][1] - m[1][0] * m[1][0]);
inverse[0][0]=m[1][1] * Dinv;
inverse[1][0]=inverse[0][1]=-m[1][0] * Dinv;
inverse[1][1]=m[0][0] * Dinv;
}, 1);

Clazz.newMeth(C$, 'toString$DAA', function (A) {
return C$.toString$DAA$S(A, "%6.3f ");
}, 1);

Clazz.newMeth(C$, 'toString$DAA$S', function (A, format) {
var rows=C$.rows$DAA(A);
var cols=C$.cols$DAA(A);
var result="";
for (var i=0; i < rows; ++i) {
for (var j=0; j < cols; ++j) result += String.format$S$OA(format, [new Double(A[i][j])]);

result += "\n";
}
return result;
}, 1);

Clazz.newMeth(C$, 'toString$DA', function (a) {
return C$.toString$DA$S(a, "%6.3f ");
}, 1);

Clazz.newMeth(C$, 'toString$DA$S', function (a, format) {
var rows=C$.rows$DA(a);
var result="";
for (var i=0; i < rows; ++i) result += String.format$S$OA(format, [new Double(a[i])]);

result += "\n";
return result;
}, 1);
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:13 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
