(function(){var P$=Clazz.newPackage("org.ejml.ops"),I$=[[0,'java.io.FileOutputStream','java.io.ObjectOutputStream','java.io.FileInputStream','java.io.ObjectInputStream','java.io.PrintStream','org.ejml.ops.ReadMatrixCsv','org.ejml.data.ReshapeMatrix64F']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MatrixIO");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'saveBin$org_ejml_data_ReshapeMatrix64F$S', function (A, fileName) {
var fileStream=Clazz.new_($I$(1,1).c$$S,[fileName]);
var stream=Clazz.new_($I$(2,1).c$$java_io_OutputStream,[fileStream]);
try {
stream.writeObject$O(A);
stream.flush$();
} finally {
try {
stream.close$();
} finally {
fileStream.close$();
}
}
}, 1);

Clazz.newMeth(C$, 'loadBin$S', function (fileName) {
var fileStream=Clazz.new_($I$(3,1).c$$S,[fileName]);
var stream=Clazz.new_($I$(4,1).c$$java_io_InputStream,[fileStream]);
var ret;
try {
ret=stream.readObject$();
if (stream.available$() != 0) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["File not completely read?"]);
}} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
} else {
throw e;
}
}
stream.close$();
return ret;
}, 1);

Clazz.newMeth(C$, 'saveCSV$org_ejml_data_ReshapeMatrix64F$S', function (A, fileName) {
var fileStream=Clazz.new_($I$(5,1).c$$S,[fileName]);
fileStream.print$S(A.getNumRows$() + " ");
fileStream.println$I(A.getNumCols$());
for (var i=0; i < A.numRows; i++) {
for (var j=0; j < A.numCols; j++) {
fileStream.print$S(new Double(A.get$I$I(i, j)).toString() + " ");
}
fileStream.println$();
}
fileStream.close$();
}, 1);

Clazz.newMeth(C$, 'loadCSV$S', function (fileName) {
var fileStream=Clazz.new_($I$(3,1).c$$S,[fileName]);
var csv=Clazz.new_($I$(6,1).c$$java_io_InputStream,[fileStream]);
var ret=csv.read$();
fileStream.close$();
return ret;
}, 1);

Clazz.newMeth(C$, 'loadCSV$S$I$I', function (fileName, numRows, numCols) {
var fileStream=Clazz.new_($I$(3,1).c$$S,[fileName]);
var csv=Clazz.new_($I$(6,1).c$$java_io_InputStream,[fileStream]);
var ret=csv.read$I$I(numRows, numCols);
fileStream.close$();
return ret;
}, 1);

Clazz.newMeth(C$, 'print$java_io_PrintStream$org_ejml_data_Matrix64F', function (out, mat) {
C$.print$java_io_PrintStream$org_ejml_data_Matrix64F$I$I(out, mat, 6, 3);
}, 1);

Clazz.newMeth(C$, 'print$java_io_PrintStream$org_ejml_data_Matrix64F$I$I', function (out, mat, numChar, precision) {
var format="%" + numChar + "." + precision + "f " ;
C$.print$java_io_PrintStream$org_ejml_data_Matrix64F$S(out, mat, format);
}, 1);

Clazz.newMeth(C$, 'print$java_io_PrintStream$org_ejml_data_Matrix64F$S', function (out, mat, format) {
var type=Clazz.getClass($I$(7)).isAssignableFrom$Class(mat.getClass$()) ? "dense" : "dense fixed";
out.println$S("Type = " + type + " , numRows = " + mat.getNumRows$() + " , numCols = " + mat.getNumCols$() );
format += " ";
for (var y=0; y < mat.getNumRows$(); y++) {
for (var x=0; x < mat.getNumCols$(); x++) {
out.printf$S$OA(format, [new Double(mat.get$I$I(y, x))]);
}
out.println$();
}
}, 1);

Clazz.newMeth(C$, 'print$java_io_PrintStream$org_ejml_data_ReshapeMatrix64F$S$I$I$I$I', function (out, mat, format, row0, row1, col0, col1) {
out.println$S("Type = submatrix , rows " + row0 + " to " + row1 + "  columns " + col0 + " to " + col1 );
format += " ";
for (var y=row0; y < row1; y++) {
for (var x=col0; x < col1; x++) {
out.printf$S$OA(format, [new Double(mat.get$I$I(y, x))]);
}
out.println$();
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
