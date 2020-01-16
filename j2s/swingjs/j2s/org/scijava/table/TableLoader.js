(function(){var P$=Clazz.newPackage("org.scijava.table"),p$1={},I$=[[0,'org.scijava.table.DefaultDoubleTable','java.net.URL','java.io.FileInputStream','java.io.BufferedInputStream','java.io.BufferedReader','java.io.InputStreamReader','java.io.StreamTokenizer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TableLoader");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['rows','cols']]]

Clazz.newMeth(C$, 'valuesFromTextFile$java_io_BufferedInputStream', function (str) {
p$1.countRowsAndCols$java_io_InputStream.apply(this, [str]);
if (this.rows == 0) return null;
var values=Clazz.new_($I$(1,1).c$$I$I,[this.cols, this.rows]);
str.reset$();
p$1.read$java_io_InputStream$org_scijava_table_DoubleTable.apply(this, [str, values]);
var firstRowNaNCount=0;
for (var i=0; i < this.cols; i++) {
if (Double.isNaN$D(values.getValue$I$I(i, 0))) firstRowNaNCount++;
}
if (firstRowNaNCount == this.cols) {
this.rows--;
var oldValues=values;
values=Clazz.new_($I$(1,1).c$$I$I,[this.cols, this.rows]);
for (var c=0; c < this.cols; c++) {
var colHeader=oldValues.getColumnHeader$I(c);
values.setColumnHeader$I$S(c, colHeader);
}
for (var row=0; row < this.rows; row++) {
for (var col=0; col < this.cols; col++) {
var val=oldValues.getValue$I$I(col, row + 1);
values.setValue$I$I$D(col, row, val);
}
}
}return values;
});

Clazz.newMeth(C$, 'valuesFromTextFile$S', function (urlString) {
return this.valuesFromTextFile$java_net_URL(Clazz.new_($I$(2,1).c$$S,[urlString]));
});

Clazz.newMeth(C$, 'valuesFromTextFile$java_io_File', function (file) {
var fstr=Clazz.new_($I$(3,1).c$$java_io_File,[file]);
var stream=Clazz.new_($I$(4,1).c$$java_io_InputStream,[fstr]);
stream.mark$I((file.length$()|0));
return this.valuesFromTextFile$java_io_BufferedInputStream(stream);
});

Clazz.newMeth(C$, 'valuesFromTextFile$java_net_URL', function (url) {
var istr=url.openStream$();
var stream=Clazz.new_($I$(4,1).c$$java_io_InputStream,[istr]);
stream.mark$I(8000000);
return this.valuesFromTextFile$java_io_BufferedInputStream(stream);
});

Clazz.newMeth(C$, 'countRowsAndCols$java_io_InputStream', function (str) {
var r=Clazz.new_($I$(5,1).c$$java_io_Reader,[Clazz.new_($I$(6,1).c$$java_io_InputStream,[str])]);
var tok=Clazz.new_($I$(7,1).c$$java_io_Reader,[r]);
tok.resetSyntax$();
tok.wordChars$I$I(43, 43);
tok.wordChars$I$I(45, 126);
tok.whitespaceChars$I$I(0, 42);
tok.whitespaceChars$I$I(44, 44);
tok.whitespaceChars$I$I(127, 255);
tok.eolIsSignificant$Z(true);
var words=0;
var wordsPrevLine=0;
while (tok.nextToken$() != -1){
switch (tok.ttype) {
case 10:
this.rows++;
if (words == 0) this.rows--;
if (this.rows == 1 && words > 0 ) this.cols=words;
if (this.rows > 1 && words != 0  && words != wordsPrevLine ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Line " + this.rows + " is not the same length as the first line." ]);
}if (words != 0) wordsPrevLine=words;
words=0;
break;
case -3:
words++;
break;
}
}
if (words == this.cols) this.rows++;
}, p$1);

Clazz.newMeth(C$, 'read$java_io_InputStream$org_scijava_table_DoubleTable', function (str, values) {
var r=Clazz.new_($I$(5,1).c$$java_io_Reader,[Clazz.new_($I$(6,1).c$$java_io_InputStream,[str])]);
var tok=Clazz.new_($I$(7,1).c$$java_io_Reader,[r]);
tok.resetSyntax$();
tok.wordChars$I$I(43, 43);
tok.wordChars$I$I(45, 126);
tok.whitespaceChars$I$I(0, 42);
tok.whitespaceChars$I$I(44, 44);
tok.whitespaceChars$I$I(127, 255);
var row=0;
var col=0;
while (tok.nextToken$() != -1){
if (tok.ttype == -3) {
var value;
try {
value=Double.parseDouble$S(tok.sval);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
value=NaN;
if (row == 0) values.setColumnHeader$I$S(col, tok.sval);
} else {
throw e;
}
}
values.setValue$I$I$D(col, row, value);
col++;
if (col == this.cols) {
row++;
col=0;
}}}
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:35 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
