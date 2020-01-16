(function(){var P$=Clazz.newPackage("org.ejml.ops"),I$=[[0,'org.ejml.data.DenseMatrix64F']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ReadMatrixCsv", null, 'org.ejml.ops.ReadCsv');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream', function ($in) {
;C$.superclazz.c$$java_io_InputStream.apply(this,[$in]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'read$', function () {
var words=this.extractWords$();
if (words.size$() != 2) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Unexpected number of words on first line."]);
var numRows=Integer.parseInt$S(words.get$I(0));
var numCols=Integer.parseInt$S(words.get$I(1));
if (numRows < 0 || numCols < 0 ) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Invalid number of rows and/or columns: " + numRows + " " + numCols ]);
return this.read$I$I(numRows, numCols);
});

Clazz.newMeth(C$, 'read$I$I', function (numRows, numCols) {
var A=Clazz.new_($I$(1,1).c$$I$I,[numRows, numCols]);
for (var i=0; i < numRows; i++) {
var words=this.extractWords$();
if (words == null ) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Too few rows found. expected " + numRows + " actual " + i ]);
if (words.size$() != numCols) throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Unexpected number of words in column. Found " + words.size$() + " expected " + numCols ]);
for (var j=0; j < numCols; j++) {
A.set$I$I$D(i, j, Double.parseDouble$S(words.get$I(j)));
}
}
return A;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
