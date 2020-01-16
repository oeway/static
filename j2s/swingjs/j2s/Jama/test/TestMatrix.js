(function(){var P$=Clazz.newPackage("Jama.test"),I$=[[0,'Jama.Matrix','java.text.DecimalFormat','java.text.DecimalFormatSymbols','java.util.Locale','java.io.PrintWriter','java.io.FileOutputStream','java.io.BufferedReader','java.io.FileReader','java.io.ObjectOutputStream','java.io.ObjectInputStream','java.io.FileInputStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TestMatrix");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'main$SA', function (argv) {
var A;
var B;
var C;
var Z;
var O;
var I;
var R;
var S;
var X;
var SUB;
var M;
var T;
var SQ;
var DEF;
var SOL;
var errorCount=0;
var warningCount=0;
var tmp;
var s;
var columnwise=Clazz.array(Double.TYPE, -1, [1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0, 9.0, 10.0, 11.0, 12.0]);
var rowwise=Clazz.array(Double.TYPE, -1, [1.0, 4.0, 7.0, 10.0, 2.0, 5.0, 8.0, 11.0, 3.0, 6.0, 9.0, 12.0]);
var avals=Clazz.array(Double.TYPE, -2, [Clazz.array(Double.TYPE, -1, [1.0, 4.0, 7.0, 10.0]), Clazz.array(Double.TYPE, -1, [2.0, 5.0, 8.0, 11.0]), Clazz.array(Double.TYPE, -1, [3.0, 6.0, 9.0, 12.0])]);
var rankdef=avals;
var tvals=Clazz.array(Double.TYPE, -2, [Clazz.array(Double.TYPE, -1, [1.0, 2.0, 3.0]), Clazz.array(Double.TYPE, -1, [4.0, 5.0, 6.0]), Clazz.array(Double.TYPE, -1, [7.0, 8.0, 9.0]), Clazz.array(Double.TYPE, -1, [10.0, 11.0, 12.0])]);
var subavals=Clazz.array(Double.TYPE, -2, [Clazz.array(Double.TYPE, -1, [5.0, 8.0, 11.0]), Clazz.array(Double.TYPE, -1, [6.0, 9.0, 12.0])]);
var rvals=Clazz.array(Double.TYPE, -2, [Clazz.array(Double.TYPE, -1, [1.0, 4.0, 7.0]), Clazz.array(Double.TYPE, -1, [2.0, 5.0, 8.0, 11.0]), Clazz.array(Double.TYPE, -1, [3.0, 6.0, 9.0, 12.0])]);
var pvals=Clazz.array(Double.TYPE, -2, [Clazz.array(Double.TYPE, -1, [4.0, 1.0, 1.0]), Clazz.array(Double.TYPE, -1, [1.0, 2.0, 3.0]), Clazz.array(Double.TYPE, -1, [1.0, 3.0, 6.0])]);
var ivals=Clazz.array(Double.TYPE, -2, [Clazz.array(Double.TYPE, -1, [1.0, 0.0, 0.0, 0.0]), Clazz.array(Double.TYPE, -1, [0.0, 1.0, 0.0, 0.0]), Clazz.array(Double.TYPE, -1, [0.0, 0.0, 1.0, 0.0])]);
var evals=Clazz.array(Double.TYPE, -2, [Clazz.array(Double.TYPE, -1, [0.0, 1.0, 0.0, 0.0]), Clazz.array(Double.TYPE, -1, [1.0, 0.0, 2.0E-7, 0.0]), Clazz.array(Double.TYPE, -1, [0.0, -2.0E-7, 0.0, 1.0]), Clazz.array(Double.TYPE, -1, [0.0, 0.0, 1.0, 0.0])]);
var square=Clazz.array(Double.TYPE, -2, [Clazz.array(Double.TYPE, -1, [166.0, 188.0, 210.0]), Clazz.array(Double.TYPE, -1, [188.0, 214.0, 240.0]), Clazz.array(Double.TYPE, -1, [210.0, 240.0, 270.0])]);
var sqSolution=Clazz.array(Double.TYPE, -2, [Clazz.array(Double.TYPE, -1, [13.0]), Clazz.array(Double.TYPE, -1, [15.0])]);
var condmat=Clazz.array(Double.TYPE, -2, [Clazz.array(Double.TYPE, -1, [1.0, 3.0]), Clazz.array(Double.TYPE, -1, [7.0, 9.0])]);
var badeigs=Clazz.array(Double.TYPE, -2, [Clazz.array(Double.TYPE, -1, [0, 0, 0, 0, 0]), Clazz.array(Double.TYPE, -1, [0, 0, 0, 0, 1]), Clazz.array(Double.TYPE, -1, [0, 0, 0, 1, 0]), Clazz.array(Double.TYPE, -1, [1, 1, 0, 0, 1]), Clazz.array(Double.TYPE, -1, [1, 0, 1, 0, 1])]);
var rows=3;
var cols=4;
var invalidld=5;
var raggedr=0;
var raggedc=4;
var validld=3;
var nonconformld=4;
var ib=1;
var ie=2;
var jb=1;
var je=3;
var rowindexset=Clazz.array(Integer.TYPE, -1, [1, 2]);
var badrowindexset=Clazz.array(Integer.TYPE, -1, [1, 3]);
var columnindexset=Clazz.array(Integer.TYPE, -1, [1, 2, 3]);
var badcolumnindexset=Clazz.array(Integer.TYPE, -1, [1, 2, 4]);
var columnsummax=33.0;
var rowsummax=30.0;
var sumofdiagonals=15;
var sumofsquares=650;
C$.print$S("\nTesting constructors and constructor-like methods...\n");
try {
A=Clazz.new_($I$(1,1).c$$DA$I,[columnwise, invalidld]);
errorCount=C$.try_failure$I$S$S(errorCount, "Catch invalid length in packed constructor... ", "exception not thrown for invalid input");
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
C$.try_success$S$S("Catch invalid length in packed constructor... ", e.getMessage$());
} else {
throw e;
}
}
try {
A=Clazz.new_($I$(1,1).c$$DAA,[rvals]);
tmp=A.get$I$I(raggedr, raggedc);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"IllegalArgumentException")){
var e = e$$;
{
C$.try_success$S$S("Catch ragged input to default constructor... ", e.getMessage$());
}
} else if (Clazz.exceptionOf(e$$,"ArrayIndexOutOfBoundsException")){
var e = e$$;
{
errorCount=C$.try_failure$I$S$S(errorCount, "Catch ragged input to constructor... ", "exception not thrown in construction...ArrayIndexOutOfBoundsException thrown later");
}
} else {
throw e$$;
}
}
try {
A=$I$(1).constructWithCopy$DAA(rvals);
tmp=A.get$I$I(raggedr, raggedc);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"IllegalArgumentException")){
var e = e$$;
{
C$.try_success$S$S("Catch ragged input to constructWithCopy... ", e.getMessage$());
}
} else if (Clazz.exceptionOf(e$$,"ArrayIndexOutOfBoundsException")){
var e = e$$;
{
errorCount=C$.try_failure$I$S$S(errorCount, "Catch ragged input to constructWithCopy... ", "exception not thrown in construction...ArrayIndexOutOfBoundsException thrown later");
}
} else {
throw e$$;
}
}
A=Clazz.new_($I$(1,1).c$$DA$I,[columnwise, validld]);
B=Clazz.new_($I$(1,1).c$$DAA,[avals]);
tmp=B.get$I$I(0, 0);
avals[0][0]=0.0;
C=B.minus$Jama_Matrix(A);
avals[0][0]=tmp;
B=$I$(1).constructWithCopy$DAA(avals);
tmp=B.get$I$I(0, 0);
avals[0][0]=0.0;
if ((tmp - B.get$I$I(0, 0)) != 0.0 ) {
errorCount=C$.try_failure$I$S$S(errorCount, "constructWithCopy... ", "copy not effected... data visible outside");
} else {
C$.try_success$S$S("constructWithCopy... ", "");
}avals[0][0]=columnwise[0];
I=Clazz.new_($I$(1,1).c$$DAA,[ivals]);
try {
C$.check$Jama_Matrix$Jama_Matrix(I, $I$(1).identity$I$I(3, 4));
C$.try_success$S$S("identity... ", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "identity... ", "identity Matrix not successfully created");
} else {
throw e;
}
}
C$.print$S("\nTesting access methods...\n");
B=Clazz.new_($I$(1,1).c$$DAA,[avals]);
if (B.getRowDimension$() != rows) {
errorCount=C$.try_failure$I$S$S(errorCount, "getRowDimension... ", "");
} else {
C$.try_success$S$S("getRowDimension... ", "");
}if (B.getColumnDimension$() != cols) {
errorCount=C$.try_failure$I$S$S(errorCount, "getColumnDimension... ", "");
} else {
C$.try_success$S$S("getColumnDimension... ", "");
}B=Clazz.new_($I$(1,1).c$$DAA,[avals]);
var barray=B.getArray$();
if (barray !== avals ) {
errorCount=C$.try_failure$I$S$S(errorCount, "getArray... ", "");
} else {
C$.try_success$S$S("getArray... ", "");
}barray=B.getArrayCopy$();
if (barray === avals ) {
errorCount=C$.try_failure$I$S$S(errorCount, "getArrayCopy... ", "data not (deep) copied");
}try {
C$.check$DAA$DAA(barray, avals);
C$.try_success$S$S("getArrayCopy... ", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "getArrayCopy... ", "data not successfully (deep) copied");
} else {
throw e;
}
}
var bpacked=B.getColumnPackedCopy$();
try {
C$.check$DA$DA(bpacked, columnwise);
C$.try_success$S$S("getColumnPackedCopy... ", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "getColumnPackedCopy... ", "data not successfully (deep) copied by columns");
} else {
throw e;
}
}
bpacked=B.getRowPackedCopy$();
try {
C$.check$DA$DA(bpacked, rowwise);
C$.try_success$S$S("getRowPackedCopy... ", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "getRowPackedCopy... ", "data not successfully (deep) copied by rows");
} else {
throw e;
}
}
try {
tmp=B.get$I$I(B.getRowDimension$(), B.getColumnDimension$() - 1);
errorCount=C$.try_failure$I$S$S(errorCount, "get(int,int)... ", "OutOfBoundsException expected but not thrown");
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ArrayIndexOutOfBoundsException")){
var e = e$$;
{
try {
tmp=B.get$I$I(B.getRowDimension$() - 1, B.getColumnDimension$());
errorCount=C$.try_failure$I$S$S(errorCount, "get(int,int)... ", "OutOfBoundsException expected but not thrown");
} catch (e1) {
if (Clazz.exceptionOf(e1,"ArrayIndexOutOfBoundsException")){
C$.try_success$S$S("get(int,int)... OutofBoundsException... ", "");
} else {
throw e1;
}
}
}
} else if (Clazz.exceptionOf(e$$,"IllegalArgumentException")){
var e1 = e$$;
{
errorCount=C$.try_failure$I$S$S(errorCount, "get(int,int)... ", "OutOfBoundsException expected but not thrown");
}
} else {
throw e$$;
}
}
try {
if (B.get$I$I(B.getRowDimension$() - 1, B.getColumnDimension$() - 1) != avals[B.getRowDimension$() - 1][B.getColumnDimension$() - 1] ) {
errorCount=C$.try_failure$I$S$S(errorCount, "get(int,int)... ", "Matrix entry (i,j) not successfully retreived");
} else {
C$.try_success$S$S("get(int,int)... ", "");
}} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
errorCount=C$.try_failure$I$S$S(errorCount, "get(int,int)... ", "Unexpected ArrayIndexOutOfBoundsException");
} else {
throw e;
}
}
SUB=Clazz.new_($I$(1,1).c$$DAA,[subavals]);
try {
M=B.getMatrix$I$I$I$I(ib, ie + B.getRowDimension$() + 1 , jb, je);
errorCount=C$.try_failure$I$S$S(errorCount, "getMatrix(int,int,int,int)... ", "ArrayIndexOutOfBoundsException expected but not thrown");
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ArrayIndexOutOfBoundsException")){
var e = e$$;
{
try {
M=B.getMatrix$I$I$I$I(ib, ie, jb, je + B.getColumnDimension$() + 1 );
errorCount=C$.try_failure$I$S$S(errorCount, "getMatrix(int,int,int,int)... ", "ArrayIndexOutOfBoundsException expected but not thrown");
} catch (e1) {
if (Clazz.exceptionOf(e1,"ArrayIndexOutOfBoundsException")){
C$.try_success$S$S("getMatrix(int,int,int,int)... ArrayIndexOutOfBoundsException... ", "");
} else {
throw e1;
}
}
}
} else if (Clazz.exceptionOf(e$$,"IllegalArgumentException")){
var e1 = e$$;
{
errorCount=C$.try_failure$I$S$S(errorCount, "getMatrix(int,int,int,int)... ", "ArrayIndexOutOfBoundsException expected but not thrown");
}
} else {
throw e$$;
}
}
try {
M=B.getMatrix$I$I$I$I(ib, ie, jb, je);
try {
C$.check$Jama_Matrix$Jama_Matrix(SUB, M);
C$.try_success$S$S("getMatrix(int,int,int,int)... ", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "getMatrix(int,int,int,int)... ", "submatrix not successfully retreived");
} else {
throw e;
}
}
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
errorCount=C$.try_failure$I$S$S(errorCount, "getMatrix(int,int,int,int)... ", "Unexpected ArrayIndexOutOfBoundsException");
} else {
throw e;
}
}
try {
M=B.getMatrix$I$I$IA(ib, ie, badcolumnindexset);
errorCount=C$.try_failure$I$S$S(errorCount, "getMatrix(int,int,int[])... ", "ArrayIndexOutOfBoundsException expected but not thrown");
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ArrayIndexOutOfBoundsException")){
var e = e$$;
{
try {
M=B.getMatrix$I$I$IA(ib, ie + B.getRowDimension$() + 1 , columnindexset);
errorCount=C$.try_failure$I$S$S(errorCount, "getMatrix(int,int,int[])... ", "ArrayIndexOutOfBoundsException expected but not thrown");
} catch (e1) {
if (Clazz.exceptionOf(e1,"ArrayIndexOutOfBoundsException")){
C$.try_success$S$S("getMatrix(int,int,int[])... ArrayIndexOutOfBoundsException... ", "");
} else {
throw e1;
}
}
}
} else if (Clazz.exceptionOf(e$$,"IllegalArgumentException")){
var e1 = e$$;
{
errorCount=C$.try_failure$I$S$S(errorCount, "getMatrix(int,int,int[])... ", "ArrayIndexOutOfBoundsException expected but not thrown");
}
} else {
throw e$$;
}
}
try {
M=B.getMatrix$I$I$IA(ib, ie, columnindexset);
try {
C$.check$Jama_Matrix$Jama_Matrix(SUB, M);
C$.try_success$S$S("getMatrix(int,int,int[])... ", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "getMatrix(int,int,int[])... ", "submatrix not successfully retreived");
} else {
throw e;
}
}
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
errorCount=C$.try_failure$I$S$S(errorCount, "getMatrix(int,int,int[])... ", "Unexpected ArrayIndexOutOfBoundsException");
} else {
throw e;
}
}
try {
M=B.getMatrix$IA$I$I(badrowindexset, jb, je);
errorCount=C$.try_failure$I$S$S(errorCount, "getMatrix(int[],int,int)... ", "ArrayIndexOutOfBoundsException expected but not thrown");
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ArrayIndexOutOfBoundsException")){
var e = e$$;
{
try {
M=B.getMatrix$IA$I$I(rowindexset, jb, je + B.getColumnDimension$() + 1 );
errorCount=C$.try_failure$I$S$S(errorCount, "getMatrix(int[],int,int)... ", "ArrayIndexOutOfBoundsException expected but not thrown");
} catch (e1) {
if (Clazz.exceptionOf(e1,"ArrayIndexOutOfBoundsException")){
C$.try_success$S$S("getMatrix(int[],int,int)... ArrayIndexOutOfBoundsException... ", "");
} else {
throw e1;
}
}
}
} else if (Clazz.exceptionOf(e$$,"IllegalArgumentException")){
var e1 = e$$;
{
errorCount=C$.try_failure$I$S$S(errorCount, "getMatrix(int[],int,int)... ", "ArrayIndexOutOfBoundsException expected but not thrown");
}
} else {
throw e$$;
}
}
try {
M=B.getMatrix$IA$I$I(rowindexset, jb, je);
try {
C$.check$Jama_Matrix$Jama_Matrix(SUB, M);
C$.try_success$S$S("getMatrix(int[],int,int)... ", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "getMatrix(int[],int,int)... ", "submatrix not successfully retreived");
} else {
throw e;
}
}
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
errorCount=C$.try_failure$I$S$S(errorCount, "getMatrix(int[],int,int)... ", "Unexpected ArrayIndexOutOfBoundsException");
} else {
throw e;
}
}
try {
M=B.getMatrix$IA$IA(badrowindexset, columnindexset);
errorCount=C$.try_failure$I$S$S(errorCount, "getMatrix(int[],int[])... ", "ArrayIndexOutOfBoundsException expected but not thrown");
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ArrayIndexOutOfBoundsException")){
var e = e$$;
{
try {
M=B.getMatrix$IA$IA(rowindexset, badcolumnindexset);
errorCount=C$.try_failure$I$S$S(errorCount, "getMatrix(int[],int[])... ", "ArrayIndexOutOfBoundsException expected but not thrown");
} catch (e1) {
if (Clazz.exceptionOf(e1,"ArrayIndexOutOfBoundsException")){
C$.try_success$S$S("getMatrix(int[],int[])... ArrayIndexOutOfBoundsException... ", "");
} else {
throw e1;
}
}
}
} else if (Clazz.exceptionOf(e$$,"IllegalArgumentException")){
var e1 = e$$;
{
errorCount=C$.try_failure$I$S$S(errorCount, "getMatrix(int[],int[])... ", "ArrayIndexOutOfBoundsException expected but not thrown");
}
} else {
throw e$$;
}
}
try {
M=B.getMatrix$IA$IA(rowindexset, columnindexset);
try {
C$.check$Jama_Matrix$Jama_Matrix(SUB, M);
C$.try_success$S$S("getMatrix(int[],int[])... ", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "getMatrix(int[],int[])... ", "submatrix not successfully retreived");
} else {
throw e;
}
}
} catch (e) {
if (Clazz.exceptionOf(e,"ArrayIndexOutOfBoundsException")){
errorCount=C$.try_failure$I$S$S(errorCount, "getMatrix(int[],int[])... ", "Unexpected ArrayIndexOutOfBoundsException");
} else {
throw e;
}
}
try {
B.set$I$I$D(B.getRowDimension$(), B.getColumnDimension$() - 1, 0.0);
errorCount=C$.try_failure$I$S$S(errorCount, "set(int,int,double)... ", "OutOfBoundsException expected but not thrown");
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ArrayIndexOutOfBoundsException")){
var e = e$$;
{
try {
B.set$I$I$D(B.getRowDimension$() - 1, B.getColumnDimension$(), 0.0);
errorCount=C$.try_failure$I$S$S(errorCount, "set(int,int,double)... ", "OutOfBoundsException expected but not thrown");
} catch (e1) {
if (Clazz.exceptionOf(e1,"ArrayIndexOutOfBoundsException")){
C$.try_success$S$S("set(int,int,double)... OutofBoundsException... ", "");
} else {
throw e1;
}
}
}
} else if (Clazz.exceptionOf(e$$,"IllegalArgumentException")){
var e1 = e$$;
{
errorCount=C$.try_failure$I$S$S(errorCount, "set(int,int,double)... ", "OutOfBoundsException expected but not thrown");
}
} else {
throw e$$;
}
}
try {
B.set$I$I$D(ib, jb, 0.0);
tmp=B.get$I$I(ib, jb);
try {
C$.check$D$D(tmp, 0.0);
C$.try_success$S$S("set(int,int,double)... ", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "set(int,int,double)... ", "Matrix element not successfully set");
} else {
throw e;
}
}
} catch (e1) {
if (Clazz.exceptionOf(e1,"ArrayIndexOutOfBoundsException")){
errorCount=C$.try_failure$I$S$S(errorCount, "set(int,int,double)... ", "Unexpected ArrayIndexOutOfBoundsException");
} else {
throw e1;
}
}
M=Clazz.new_($I$(1,1).c$$I$I$D,[2, 3, 0.0]);
try {
B.setMatrix$I$I$I$I$Jama_Matrix(ib, ie + B.getRowDimension$() + 1 , jb, je, M);
errorCount=C$.try_failure$I$S$S(errorCount, "setMatrix(int,int,int,int,Matrix)... ", "ArrayIndexOutOfBoundsException expected but not thrown");
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ArrayIndexOutOfBoundsException")){
var e = e$$;
{
try {
B.setMatrix$I$I$I$I$Jama_Matrix(ib, ie, jb, je + B.getColumnDimension$() + 1 , M);
errorCount=C$.try_failure$I$S$S(errorCount, "setMatrix(int,int,int,int,Matrix)... ", "ArrayIndexOutOfBoundsException expected but not thrown");
} catch (e1) {
if (Clazz.exceptionOf(e1,"ArrayIndexOutOfBoundsException")){
C$.try_success$S$S("setMatrix(int,int,int,int,Matrix)... ArrayIndexOutOfBoundsException... ", "");
} else {
throw e1;
}
}
}
} else if (Clazz.exceptionOf(e$$,"IllegalArgumentException")){
var e1 = e$$;
{
errorCount=C$.try_failure$I$S$S(errorCount, "setMatrix(int,int,int,int,Matrix)... ", "ArrayIndexOutOfBoundsException expected but not thrown");
}
} else {
throw e$$;
}
}
try {
B.setMatrix$I$I$I$I$Jama_Matrix(ib, ie, jb, je, M);
try {
C$.check$Jama_Matrix$Jama_Matrix(M.minus$Jama_Matrix(B.getMatrix$I$I$I$I(ib, ie, jb, je)), M);
C$.try_success$S$S("setMatrix(int,int,int,int,Matrix)... ", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "setMatrix(int,int,int,int,Matrix)... ", "submatrix not successfully set");
} else {
throw e;
}
}
B.setMatrix$I$I$I$I$Jama_Matrix(ib, ie, jb, je, SUB);
} catch (e1) {
if (Clazz.exceptionOf(e1,"ArrayIndexOutOfBoundsException")){
errorCount=C$.try_failure$I$S$S(errorCount, "setMatrix(int,int,int,int,Matrix)... ", "Unexpected ArrayIndexOutOfBoundsException");
} else {
throw e1;
}
}
try {
B.setMatrix$I$I$IA$Jama_Matrix(ib, ie + B.getRowDimension$() + 1 , columnindexset, M);
errorCount=C$.try_failure$I$S$S(errorCount, "setMatrix(int,int,int[],Matrix)... ", "ArrayIndexOutOfBoundsException expected but not thrown");
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ArrayIndexOutOfBoundsException")){
var e = e$$;
{
try {
B.setMatrix$I$I$IA$Jama_Matrix(ib, ie, badcolumnindexset, M);
errorCount=C$.try_failure$I$S$S(errorCount, "setMatrix(int,int,int[],Matrix)... ", "ArrayIndexOutOfBoundsException expected but not thrown");
} catch (e1) {
if (Clazz.exceptionOf(e1,"ArrayIndexOutOfBoundsException")){
C$.try_success$S$S("setMatrix(int,int,int[],Matrix)... ArrayIndexOutOfBoundsException... ", "");
} else {
throw e1;
}
}
}
} else if (Clazz.exceptionOf(e$$,"IllegalArgumentException")){
var e1 = e$$;
{
errorCount=C$.try_failure$I$S$S(errorCount, "setMatrix(int,int,int[],Matrix)... ", "ArrayIndexOutOfBoundsException expected but not thrown");
}
} else {
throw e$$;
}
}
try {
B.setMatrix$I$I$IA$Jama_Matrix(ib, ie, columnindexset, M);
try {
C$.check$Jama_Matrix$Jama_Matrix(M.minus$Jama_Matrix(B.getMatrix$I$I$IA(ib, ie, columnindexset)), M);
C$.try_success$S$S("setMatrix(int,int,int[],Matrix)... ", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "setMatrix(int,int,int[],Matrix)... ", "submatrix not successfully set");
} else {
throw e;
}
}
B.setMatrix$I$I$I$I$Jama_Matrix(ib, ie, jb, je, SUB);
} catch (e1) {
if (Clazz.exceptionOf(e1,"ArrayIndexOutOfBoundsException")){
errorCount=C$.try_failure$I$S$S(errorCount, "setMatrix(int,int,int[],Matrix)... ", "Unexpected ArrayIndexOutOfBoundsException");
} else {
throw e1;
}
}
try {
B.setMatrix$IA$I$I$Jama_Matrix(rowindexset, jb, je + B.getColumnDimension$() + 1 , M);
errorCount=C$.try_failure$I$S$S(errorCount, "setMatrix(int[],int,int,Matrix)... ", "ArrayIndexOutOfBoundsException expected but not thrown");
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ArrayIndexOutOfBoundsException")){
var e = e$$;
{
try {
B.setMatrix$IA$I$I$Jama_Matrix(badrowindexset, jb, je, M);
errorCount=C$.try_failure$I$S$S(errorCount, "setMatrix(int[],int,int,Matrix)... ", "ArrayIndexOutOfBoundsException expected but not thrown");
} catch (e1) {
if (Clazz.exceptionOf(e1,"ArrayIndexOutOfBoundsException")){
C$.try_success$S$S("setMatrix(int[],int,int,Matrix)... ArrayIndexOutOfBoundsException... ", "");
} else {
throw e1;
}
}
}
} else if (Clazz.exceptionOf(e$$,"IllegalArgumentException")){
var e1 = e$$;
{
errorCount=C$.try_failure$I$S$S(errorCount, "setMatrix(int[],int,int,Matrix)... ", "ArrayIndexOutOfBoundsException expected but not thrown");
}
} else {
throw e$$;
}
}
try {
B.setMatrix$IA$I$I$Jama_Matrix(rowindexset, jb, je, M);
try {
C$.check$Jama_Matrix$Jama_Matrix(M.minus$Jama_Matrix(B.getMatrix$IA$I$I(rowindexset, jb, je)), M);
C$.try_success$S$S("setMatrix(int[],int,int,Matrix)... ", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "setMatrix(int[],int,int,Matrix)... ", "submatrix not successfully set");
} else {
throw e;
}
}
B.setMatrix$I$I$I$I$Jama_Matrix(ib, ie, jb, je, SUB);
} catch (e1) {
if (Clazz.exceptionOf(e1,"ArrayIndexOutOfBoundsException")){
errorCount=C$.try_failure$I$S$S(errorCount, "setMatrix(int[],int,int,Matrix)... ", "Unexpected ArrayIndexOutOfBoundsException");
} else {
throw e1;
}
}
try {
B.setMatrix$IA$IA$Jama_Matrix(rowindexset, badcolumnindexset, M);
errorCount=C$.try_failure$I$S$S(errorCount, "setMatrix(int[],int[],Matrix)... ", "ArrayIndexOutOfBoundsException expected but not thrown");
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ArrayIndexOutOfBoundsException")){
var e = e$$;
{
try {
B.setMatrix$IA$IA$Jama_Matrix(badrowindexset, columnindexset, M);
errorCount=C$.try_failure$I$S$S(errorCount, "setMatrix(int[],int[],Matrix)... ", "ArrayIndexOutOfBoundsException expected but not thrown");
} catch (e1) {
if (Clazz.exceptionOf(e1,"ArrayIndexOutOfBoundsException")){
C$.try_success$S$S("setMatrix(int[],int[],Matrix)... ArrayIndexOutOfBoundsException... ", "");
} else {
throw e1;
}
}
}
} else if (Clazz.exceptionOf(e$$,"IllegalArgumentException")){
var e1 = e$$;
{
errorCount=C$.try_failure$I$S$S(errorCount, "setMatrix(int[],int[],Matrix)... ", "ArrayIndexOutOfBoundsException expected but not thrown");
}
} else {
throw e$$;
}
}
try {
B.setMatrix$IA$IA$Jama_Matrix(rowindexset, columnindexset, M);
try {
C$.check$Jama_Matrix$Jama_Matrix(M.minus$Jama_Matrix(B.getMatrix$IA$IA(rowindexset, columnindexset)), M);
C$.try_success$S$S("setMatrix(int[],int[],Matrix)... ", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "setMatrix(int[],int[],Matrix)... ", "submatrix not successfully set");
} else {
throw e;
}
}
} catch (e1) {
if (Clazz.exceptionOf(e1,"ArrayIndexOutOfBoundsException")){
errorCount=C$.try_failure$I$S$S(errorCount, "setMatrix(int[],int[],Matrix)... ", "Unexpected ArrayIndexOutOfBoundsException");
} else {
throw e1;
}
}
C$.print$S("\nTesting array-like methods...\n");
S=Clazz.new_($I$(1,1).c$$DA$I,[columnwise, nonconformld]);
R=$I$(1).random$I$I(A.getRowDimension$(), A.getColumnDimension$());
A=R;
try {
S=A.minus$Jama_Matrix(S);
errorCount=C$.try_failure$I$S$S(errorCount, "minus conformance check... ", "nonconformance not raised");
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
C$.try_success$S$S("minus conformance check... ", "");
} else {
throw e;
}
}
if (A.minus$Jama_Matrix(R).norm1$() != 0.0 ) {
errorCount=C$.try_failure$I$S$S(errorCount, "minus... ", "(difference of identical Matrices is nonzero,\nSubsequent use of minus should be suspect)");
} else {
C$.try_success$S$S("minus... ", "");
}A=R.copy$();
A.minusEquals$Jama_Matrix(R);
Z=Clazz.new_($I$(1,1).c$$I$I,[A.getRowDimension$(), A.getColumnDimension$()]);
try {
A.minusEquals$Jama_Matrix(S);
errorCount=C$.try_failure$I$S$S(errorCount, "minusEquals conformance check... ", "nonconformance not raised");
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
C$.try_success$S$S("minusEquals conformance check... ", "");
} else {
throw e;
}
}
if (A.minus$Jama_Matrix(Z).norm1$() != 0.0 ) {
errorCount=C$.try_failure$I$S$S(errorCount, "minusEquals... ", "(difference of identical Matrices is nonzero,\nSubsequent use of minus should be suspect)");
} else {
C$.try_success$S$S("minusEquals... ", "");
}A=R.copy$();
B=$I$(1).random$I$I(A.getRowDimension$(), A.getColumnDimension$());
C=A.minus$Jama_Matrix(B);
try {
S=A.plus$Jama_Matrix(S);
errorCount=C$.try_failure$I$S$S(errorCount, "plus conformance check... ", "nonconformance not raised");
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
C$.try_success$S$S("plus conformance check... ", "");
} else {
throw e;
}
}
try {
C$.check$Jama_Matrix$Jama_Matrix(C.plus$Jama_Matrix(B), A);
C$.try_success$S$S("plus... ", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "plus... ", "(C = A - B, but C + B != A)");
} else {
throw e;
}
}
C=A.minus$Jama_Matrix(B);
C.plusEquals$Jama_Matrix(B);
try {
A.plusEquals$Jama_Matrix(S);
errorCount=C$.try_failure$I$S$S(errorCount, "plusEquals conformance check... ", "nonconformance not raised");
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
C$.try_success$S$S("plusEquals conformance check... ", "");
} else {
throw e;
}
}
try {
C$.check$Jama_Matrix$Jama_Matrix(C, A);
C$.try_success$S$S("plusEquals... ", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "plusEquals... ", "(C = A - B, but C = C + B != A)");
} else {
throw e;
}
}
A=R.uminus$();
try {
C$.check$Jama_Matrix$Jama_Matrix(A.plus$Jama_Matrix(R), Z);
C$.try_success$S$S("uminus... ", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "uminus... ", "(-A + A != zeros)");
} else {
throw e;
}
}
A=R.copy$();
O=Clazz.new_($I$(1,1).c$$I$I$D,[A.getRowDimension$(), A.getColumnDimension$(), 1.0]);
C=A.arrayLeftDivide$Jama_Matrix(R);
try {
S=A.arrayLeftDivide$Jama_Matrix(S);
errorCount=C$.try_failure$I$S$S(errorCount, "arrayLeftDivide conformance check... ", "nonconformance not raised");
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
C$.try_success$S$S("arrayLeftDivide conformance check... ", "");
} else {
throw e;
}
}
try {
C$.check$Jama_Matrix$Jama_Matrix(C, O);
C$.try_success$S$S("arrayLeftDivide... ", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "arrayLeftDivide... ", "(M.\\M != ones)");
} else {
throw e;
}
}
try {
A.arrayLeftDivideEquals$Jama_Matrix(S);
errorCount=C$.try_failure$I$S$S(errorCount, "arrayLeftDivideEquals conformance check... ", "nonconformance not raised");
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
C$.try_success$S$S("arrayLeftDivideEquals conformance check... ", "");
} else {
throw e;
}
}
A.arrayLeftDivideEquals$Jama_Matrix(R);
try {
C$.check$Jama_Matrix$Jama_Matrix(A, O);
C$.try_success$S$S("arrayLeftDivideEquals... ", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "arrayLeftDivideEquals... ", "(M.\\M != ones)");
} else {
throw e;
}
}
A=R.copy$();
try {
A.arrayRightDivide$Jama_Matrix(S);
errorCount=C$.try_failure$I$S$S(errorCount, "arrayRightDivide conformance check... ", "nonconformance not raised");
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
C$.try_success$S$S("arrayRightDivide conformance check... ", "");
} else {
throw e;
}
}
C=A.arrayRightDivide$Jama_Matrix(R);
try {
C$.check$Jama_Matrix$Jama_Matrix(C, O);
C$.try_success$S$S("arrayRightDivide... ", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "arrayRightDivide... ", "(M./M != ones)");
} else {
throw e;
}
}
try {
A.arrayRightDivideEquals$Jama_Matrix(S);
errorCount=C$.try_failure$I$S$S(errorCount, "arrayRightDivideEquals conformance check... ", "nonconformance not raised");
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
C$.try_success$S$S("arrayRightDivideEquals conformance check... ", "");
} else {
throw e;
}
}
A.arrayRightDivideEquals$Jama_Matrix(R);
try {
C$.check$Jama_Matrix$Jama_Matrix(A, O);
C$.try_success$S$S("arrayRightDivideEquals... ", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "arrayRightDivideEquals... ", "(M./M != ones)");
} else {
throw e;
}
}
A=R.copy$();
B=$I$(1).random$I$I(A.getRowDimension$(), A.getColumnDimension$());
try {
S=A.arrayTimes$Jama_Matrix(S);
errorCount=C$.try_failure$I$S$S(errorCount, "arrayTimes conformance check... ", "nonconformance not raised");
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
C$.try_success$S$S("arrayTimes conformance check... ", "");
} else {
throw e;
}
}
C=A.arrayTimes$Jama_Matrix(B);
try {
C$.check$Jama_Matrix$Jama_Matrix(C.arrayRightDivideEquals$Jama_Matrix(B), A);
C$.try_success$S$S("arrayTimes... ", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "arrayTimes... ", "(A = R, C = A.*B, but C./B != A)");
} else {
throw e;
}
}
try {
A.arrayTimesEquals$Jama_Matrix(S);
errorCount=C$.try_failure$I$S$S(errorCount, "arrayTimesEquals conformance check... ", "nonconformance not raised");
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
C$.try_success$S$S("arrayTimesEquals conformance check... ", "");
} else {
throw e;
}
}
A.arrayTimesEquals$Jama_Matrix(B);
try {
C$.check$Jama_Matrix$Jama_Matrix(A.arrayRightDivideEquals$Jama_Matrix(B), R);
C$.try_success$S$S("arrayTimesEquals... ", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "arrayTimesEquals... ", "(A = R, A = A.*B, but A./B != R)");
} else {
throw e;
}
}
C$.print$S("\nTesting I/O methods...\n");
try {
var fmt=Clazz.new_($I$(2,1).c$$S,["0.0000E00"]);
fmt.setDecimalFormatSymbols$java_text_DecimalFormatSymbols(Clazz.new_($I$(3,1).c$$java_util_Locale,[$I$(4).US]));
var FILE=Clazz.new_($I$(5,1).c$$java_io_OutputStream,[Clazz.new_($I$(6,1).c$$S,["JamaTestMatrix.out"])]);
A.print$java_io_PrintWriter$java_text_NumberFormat$I(FILE, fmt, 10);
FILE.close$();
R=$I$(1).read$java_io_BufferedReader(Clazz.new_($I$(7,1).c$$java_io_Reader,[Clazz.new_($I$(8,1).c$$S,["JamaTestMatrix.out"])]));
if (A.minus$Jama_Matrix(R).norm1$() < 0.001 ) {
C$.try_success$S$S("print()/read()...", "");
} else {
errorCount=C$.try_failure$I$S$S(errorCount, "print()/read()...", "Matrix read from file does not match Matrix printed to file");
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var ioe = e$$;
{
warningCount=C$.try_warning$I$S$S(warningCount, "print()/read()...", "unexpected I/O error, unable to run print/read test;  check write permission in current directory and retry");
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
try {
e.printStackTrace$java_io_PrintStream(System.out);
warningCount=C$.try_warning$I$S$S(warningCount, "print()/read()...", "Formatting error... will try JDK1.1 reformulation...");
var fmt=Clazz.new_($I$(2,1).c$$S,["0.0000"]);
var FILE=Clazz.new_($I$(5,1).c$$java_io_OutputStream,[Clazz.new_($I$(6,1).c$$S,["JamaTestMatrix.out"])]);
A.print$java_io_PrintWriter$java_text_NumberFormat$I(FILE, fmt, 10);
FILE.close$();
R=$I$(1).read$java_io_BufferedReader(Clazz.new_($I$(7,1).c$$java_io_Reader,[Clazz.new_($I$(8,1).c$$S,["JamaTestMatrix.out"])]));
if (A.minus$Jama_Matrix(R).norm1$() < 0.001 ) {
C$.try_success$S$S("print()/read()...", "");
} else {
errorCount=C$.try_failure$I$S$S(errorCount, "print()/read() (2nd attempt) ...", "Matrix read from file does not match Matrix printed to file");
}} catch (ioe) {
if (Clazz.exceptionOf(ioe,"java.io.IOException")){
warningCount=C$.try_warning$I$S$S(warningCount, "print()/read()...", "unexpected I/O error, unable to run print/read test;  check write permission in current directory and retry");
} else {
throw ioe;
}
}
}
} else {
throw e$$;
}
}
R=$I$(1).random$I$I(A.getRowDimension$(), A.getColumnDimension$());
var tmpname="TMPMATRIX.serial";
try {
var out=Clazz.new_($I$(9,1).c$$java_io_OutputStream,[Clazz.new_($I$(6,1).c$$S,[tmpname])]);
out.writeObject$O(R);
var sin=Clazz.new_($I$(10,1).c$$java_io_InputStream,[Clazz.new_($I$(11,1).c$$S,[tmpname])]);
A=sin.readObject$();
try {
C$.check$Jama_Matrix$Jama_Matrix(A, R);
C$.try_success$S$S("writeObject(Matrix)/readObject(Matrix)...", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "writeObject(Matrix)/readObject(Matrix)...", "Matrix not serialized correctly");
} else {
throw e;
}
}
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var ioe = e$$;
{
warningCount=C$.try_warning$I$S$S(warningCount, "writeObject()/readObject()...", "unexpected I/O error, unable to run serialization test;  check write permission in current directory and retry");
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
errorCount=C$.try_failure$I$S$S(errorCount, "writeObject(Matrix)/readObject(Matrix)...", "unexpected error in serialization test");
}
} else {
throw e$$;
}
}
C$.print$S("\nTesting linear algebra methods...\n");
A=Clazz.new_($I$(1,1).c$$DA$I,[columnwise, 3]);
T=Clazz.new_($I$(1,1).c$$DAA,[tvals]);
T=A.transpose$();
try {
C$.check$Jama_Matrix$Jama_Matrix(A.transpose$(), T);
C$.try_success$S$S("transpose...", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "transpose()...", "transpose unsuccessful");
} else {
throw e;
}
}
A.transpose$();
try {
C$.check$D$D(A.norm1$(), columnsummax);
C$.try_success$S$S("norm1...", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "norm1()...", "incorrect norm calculation");
} else {
throw e;
}
}
try {
C$.check$D$D(A.normInf$(), rowsummax);
C$.try_success$S$S("normInf()...", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "normInf()...", "incorrect norm calculation");
} else {
throw e;
}
}
try {
C$.check$D$D(A.normF$(), Math.sqrt(sumofsquares));
C$.try_success$S$S("normF...", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "normF()...", "incorrect norm calculation");
} else {
throw e;
}
}
try {
C$.check$D$D(A.trace$(), sumofdiagonals);
C$.try_success$S$S("trace()...", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "trace()...", "incorrect trace calculation");
} else {
throw e;
}
}
try {
C$.check$D$D(A.getMatrix$I$I$I$I(0, A.getRowDimension$() - 1, 0, A.getRowDimension$() - 1).det$(), 0.0);
C$.try_success$S$S("det()...", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "det()...", "incorrect determinant calculation");
} else {
throw e;
}
}
SQ=Clazz.new_($I$(1,1).c$$DAA,[square]);
try {
C$.check$Jama_Matrix$Jama_Matrix(A.times$Jama_Matrix(A.transpose$()), SQ);
C$.try_success$S$S("times(Matrix)...", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "times(Matrix)...", "incorrect Matrix-Matrix product calculation");
} else {
throw e;
}
}
try {
C$.check$Jama_Matrix$Jama_Matrix(A.times$D(0.0), Z);
C$.try_success$S$S("times(double)...", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "times(double)...", "incorrect Matrix-scalar product calculation");
} else {
throw e;
}
}
A=Clazz.new_($I$(1,1).c$$DA$I,[columnwise, 4]);
var QR=A.qr$();
R=QR.getR$();
try {
C$.check$Jama_Matrix$Jama_Matrix(A, QR.getQ$().times$Jama_Matrix(R));
C$.try_success$S$S("QRDecomposition...", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "QRDecomposition...", "incorrect QR decomposition calculation");
} else {
throw e;
}
}
var SVD=A.svd$();
try {
C$.check$Jama_Matrix$Jama_Matrix(A, SVD.getU$().times$Jama_Matrix(SVD.getS$().times$Jama_Matrix(SVD.getV$().transpose$())));
C$.try_success$S$S("SingularValueDecomposition...", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "SingularValueDecomposition...", "incorrect singular value decomposition calculation");
} else {
throw e;
}
}
DEF=Clazz.new_($I$(1,1).c$$DAA,[rankdef]);
try {
C$.check$D$D(DEF.rank$(), Math.min(DEF.getRowDimension$(), DEF.getColumnDimension$()) - 1);
C$.try_success$S$S("rank()...", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "rank()...", "incorrect rank calculation");
} else {
throw e;
}
}
B=Clazz.new_($I$(1,1).c$$DAA,[condmat]);
SVD=B.svd$();
var singularvalues=SVD.getSingularValues$();
try {
C$.check$D$D(B.cond$(), singularvalues[0] / singularvalues[Math.min(B.getRowDimension$(), B.getColumnDimension$()) - 1]);
C$.try_success$S$S("cond()...", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "cond()...", "incorrect condition number calculation");
} else {
throw e;
}
}
var n=A.getColumnDimension$();
A=A.getMatrix$I$I$I$I(0, n - 1, 0, n - 1);
A.set$I$I$D(0, 0, 0.0);
var LU=A.lu$();
try {
C$.check$Jama_Matrix$Jama_Matrix(A.getMatrix$IA$I$I(LU.getPivot$(), 0, n - 1), LU.getL$().times$Jama_Matrix(LU.getU$()));
C$.try_success$S$S("LUDecomposition...", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "LUDecomposition...", "incorrect LU decomposition calculation");
} else {
throw e;
}
}
X=A.inverse$();
try {
C$.check$Jama_Matrix$Jama_Matrix(A.times$Jama_Matrix(X), $I$(1).identity$I$I(3, 3));
C$.try_success$S$S("inverse()...", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "inverse()...", "incorrect inverse calculation");
} else {
throw e;
}
}
O=Clazz.new_($I$(1,1).c$$I$I$D,[SUB.getRowDimension$(), 1, 1.0]);
SOL=Clazz.new_($I$(1,1).c$$DAA,[sqSolution]);
SQ=SUB.getMatrix$I$I$I$I(0, SUB.getRowDimension$() - 1, 0, SUB.getRowDimension$() - 1);
try {
C$.check$Jama_Matrix$Jama_Matrix(SQ.solve$Jama_Matrix(SOL), O);
C$.try_success$S$S("solve()...", "");
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"IllegalArgumentException")){
var e1 = e$$;
{
errorCount=C$.try_failure$I$S$S(errorCount, "solve()...", e1.getMessage$());
}
} else if (Clazz.exceptionOf(e$$,"RuntimeException")){
var e = e$$;
{
errorCount=C$.try_failure$I$S$S(errorCount, "solve()...", e.getMessage$());
}
} else {
throw e$$;
}
}
A=Clazz.new_($I$(1,1).c$$DAA,[pvals]);
var Chol=A.chol$();
var L=Chol.getL$();
try {
C$.check$Jama_Matrix$Jama_Matrix(A, L.times$Jama_Matrix(L.transpose$()));
C$.try_success$S$S("CholeskyDecomposition...", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "CholeskyDecomposition...", "incorrect Cholesky decomposition calculation");
} else {
throw e;
}
}
X=Chol.solve$Jama_Matrix($I$(1).identity$I$I(3, 3));
try {
C$.check$Jama_Matrix$Jama_Matrix(A.times$Jama_Matrix(X), $I$(1).identity$I$I(3, 3));
C$.try_success$S$S("CholeskyDecomposition solve()...", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "CholeskyDecomposition solve()...", "incorrect Choleskydecomposition solve calculation");
} else {
throw e;
}
}
var Eig=A.eig$();
var D=Eig.getD$();
var V=Eig.getV$();
try {
C$.check$Jama_Matrix$Jama_Matrix(A.times$Jama_Matrix(V), V.times$Jama_Matrix(D));
C$.try_success$S$S("EigenvalueDecomposition (symmetric)...", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "EigenvalueDecomposition (symmetric)...", "incorrect symmetric Eigenvalue decomposition calculation");
} else {
throw e;
}
}
A=Clazz.new_($I$(1,1).c$$DAA,[evals]);
Eig=A.eig$();
D=Eig.getD$();
V=Eig.getV$();
try {
C$.check$Jama_Matrix$Jama_Matrix(A.times$Jama_Matrix(V), V.times$Jama_Matrix(D));
C$.try_success$S$S("EigenvalueDecomposition (nonsymmetric)...", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "EigenvalueDecomposition (nonsymmetric)...", "incorrect nonsymmetric Eigenvalue decomposition calculation");
} else {
throw e;
}
}
try {
C$.print$S("\nTesting Eigenvalue; If this hangs, we\'ve failed\n");
var bA=Clazz.new_($I$(1,1).c$$DAA,[badeigs]);
var bEig=bA.eig$();
C$.try_success$S$S("EigenvalueDecomposition (hang)...", "");
} catch (e) {
if (Clazz.exceptionOf(e,"RuntimeException")){
errorCount=C$.try_failure$I$S$S(errorCount, "EigenvalueDecomposition (hang)...", "incorrect termination");
} else {
throw e;
}
}
C$.print$S("\nTestMatrix completed.\n");
C$.print$S("Total errors reported: " + Integer.toString$I(errorCount) + "\n" );
C$.print$S("Total warnings reported: " + Integer.toString$I(warningCount) + "\n" );
}, 1);

Clazz.newMeth(C$, 'check$D$D', function (x, y) {
var eps=Math.pow(2.0, -52.0);
if (!!(x == 0  & Math.abs(y) < 10 * eps )) return;
if (!!(y == 0  & Math.abs(x) < 10 * eps )) return;
if (Math.abs(x - y) > 10 * eps * Math.max(Math.abs(x), Math.abs(y))  ) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["The difference x-y is too large: x = " + Double.toString$D(x) + "  y = " + Double.toString$D(y) ]);
}}, 1);

Clazz.newMeth(C$, 'check$DA$DA', function (x, y) {
if (x.length == y.length) {
for (var i=0; i < x.length; i++) {
C$.check$D$D(x[i], y[i]);
}
} else {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Attempt to compare vectors of different lengths"]);
}}, 1);

Clazz.newMeth(C$, 'check$DAA$DAA', function (x, y) {
var A=Clazz.new_($I$(1,1).c$$DAA,[x]);
var B=Clazz.new_($I$(1,1).c$$DAA,[y]);
C$.check$Jama_Matrix$Jama_Matrix(A, B);
}, 1);

Clazz.newMeth(C$, 'check$Jama_Matrix$Jama_Matrix', function (X, Y) {
var eps=Math.pow(2.0, -52.0);
if (!!(X.norm1$() == 0.0  & Y.norm1$() < 10 * eps )) return;
if (!!(Y.norm1$() == 0.0  & X.norm1$() < 10 * eps )) return;
if (X.minus$Jama_Matrix(Y).norm1$() > 1000 * eps * Math.max(X.norm1$(), Y.norm1$())  ) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["The norm of (X-Y) is too large: " + Double.toString$D(X.minus$Jama_Matrix(Y).norm1$())]);
}}, 1);

Clazz.newMeth(C$, 'print$S', function (s) {
System.out.print$S(s);
}, 1);

Clazz.newMeth(C$, 'try_success$S$S', function (s, e) {
C$.print$S(">    " + s + "success\n" );
if (e != "") {
C$.print$S(">      Message: " + e + "\n" );
}}, 1);

Clazz.newMeth(C$, 'try_failure$I$S$S', function (count, s, e) {
C$.print$S(">    " + s + "*** failure ***\n>      Message: " + e + "\n" );
return ++count;
}, 1);

Clazz.newMeth(C$, 'try_warning$I$S$S', function (count, s, e) {
C$.print$S(">    " + s + "*** warning ***\n>      Message: " + e + "\n" );
return ++count;
}, 1);

Clazz.newMeth(C$, 'print$DA$I$I', function (x, w, d) {
System.out.print$S("\n");
Clazz.new_($I$(1,1).c$$DA$I,[x, 1]).print$I$I(w, d);
C$.print$S("\n");
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:28 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
