(function(){var P$=Clazz.newPackage("Jama.examples"),I$=[[0,'Jama.Matrix','java.text.DecimalFormat','java.util.Date','Jama.EigenvalueDecomposition','Jama.LUDecomposition','Jama.QRDecomposition']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MagicSquareExample");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'magic$I', function (n) {
var M=Clazz.array(Double.TYPE, [n, n]);
if ((n % 2) == 1) {
var a=((n + 1)/2|0);
var b=(n + 1);
for (var j=0; j < n; j++) {
for (var i=0; i < n; i++) {
M[i][j]=n * ((i + j + a ) % n) + ((i + 2 * j + b) % n) + 1;
}
}
} else if ((n % 4) == 0) {
for (var j=0; j < n; j++) {
for (var i=0; i < n; i++) {
if ((((i + 1)/2|0)) % 2 == (((j + 1)/2|0)) % 2) {
M[i][j]=n * n - n * i - j;
} else {
M[i][j]=n * i + j + 1;
}}
}
} else {
var p=(n/2|0);
var k=((n - 2)/4|0);
var A=C$.magic$I(p);
for (var j=0; j < p; j++) {
for (var i=0; i < p; i++) {
var aij=A.get$I$I(i, j);
M[i][j]=aij;
M[i][j + p]=aij + 2 * p * p ;
M[i + p][j]=aij + 3 * p * p ;
M[i + p][j + p]=aij + p * p;
}
}
for (var i=0; i < p; i++) {
for (var j=0; j < k; j++) {
var t=M[i][j];
M[i][j]=M[i + p][j];
M[i + p][j]=t;
}
for (var j=n - k + 1; j < n; j++) {
var t=M[i][j];
M[i][j]=M[i + p][j];
M[i + p][j]=t;
}
}
var t=M[k][0];
M[k][0]=M[k + p][0];
M[k + p][0]=t;
t=M[k][k];
M[k][k]=M[k + p][k];
M[k + p][k]=t;
}return Clazz.new_($I$(1,1).c$$DAA,[M]);
}, 1);

Clazz.newMeth(C$, 'print$S', function (s) {
System.out.print$S(s);
}, 1);

Clazz.newMeth(C$, 'fixedWidthDoubletoString$D$I$I', function (x, w, d) {
var fmt=Clazz.new_($I$(2,1));
fmt.setMaximumFractionDigits$I(d);
fmt.setMinimumFractionDigits$I(d);
fmt.setGroupingUsed$Z(false);
var s=fmt.format$D(x);
while (s.length$() < w){
s=" " + s;
}
return s;
}, 1);

Clazz.newMeth(C$, 'fixedWidthIntegertoString$I$I', function (n, w) {
var s=Integer.toString$I(n);
while (s.length$() < w){
s=" " + s;
}
return s;
}, 1);

Clazz.newMeth(C$, 'main$SA', function (argv) {
C$.print$S("\n    Test of Matrix Class, using magic squares.\n");
C$.print$S("    See MagicSquareExample.main() for an explanation.\n");
C$.print$S("\n      n     trace       max_eig   rank        cond      lu_res      qr_res\n\n");
var start_time=Clazz.new_($I$(3,1));
var eps=Math.pow(2.0, -52.0);
for (var n=3; n <= 32; n++) {
C$.print$S(C$.fixedWidthIntegertoString$I$I(n, 7));
var M=C$.magic$I(n);
var t=(M.trace$()|0);
C$.print$S(C$.fixedWidthIntegertoString$I$I(t, 10));
var E=Clazz.new_($I$(4,1).c$$Jama_Matrix,[M.plus$Jama_Matrix(M.transpose$()).times$D(0.5)]);
var d=E.getRealEigenvalues$();
C$.print$S(C$.fixedWidthDoubletoString$D$I$I(d[n - 1], 14, 3));
var r=M.rank$();
C$.print$S(C$.fixedWidthIntegertoString$I$I(r, 7));
var c=M.cond$();
C$.print$S(c < 1 / eps  ? C$.fixedWidthDoubletoString$D$I$I(c, 12, 3) : "         Inf");
var LU=Clazz.new_($I$(5,1).c$$Jama_Matrix,[M]);
var L=LU.getL$();
var U=LU.getU$();
var p=LU.getPivot$();
var R=L.times$Jama_Matrix(U).minus$Jama_Matrix(M.getMatrix$IA$I$I(p, 0, n - 1));
var res=R.norm1$() / (n * eps);
C$.print$S(C$.fixedWidthDoubletoString$D$I$I(res, 12, 3));
var QR=Clazz.new_($I$(6,1).c$$Jama_Matrix,[M]);
var Q=QR.getQ$();
R=QR.getR$();
R=Q.times$Jama_Matrix(R).minus$Jama_Matrix(M);
res=R.norm1$() / (n * eps);
C$.print$S(C$.fixedWidthDoubletoString$D$I$I(res, 12, 3));
C$.print$S("\n");
}
var stop_time=Clazz.new_($I$(3,1));
var etime=(stop_time.getTime$() - start_time.getTime$()) / 1000.0;
C$.print$S("\nElapsed Time = " + C$.fixedWidthDoubletoString$D$I$I(etime, 12, 3) + " seconds\n" );
C$.print$S("Adios\n");
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
