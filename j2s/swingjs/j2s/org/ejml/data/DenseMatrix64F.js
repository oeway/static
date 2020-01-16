(function(){var P$=Clazz.newPackage("org.ejml.data"),I$=[[0,'org.ejml.ops.CommonOps','org.ejml.ops.MatrixIO','java.io.ByteArrayOutputStream','java.io.PrintStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DenseMatrix64F", null, 'org.ejml.data.RowD1Matrix64F');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$Z$DA', function (numRows, numCols, rowMajor, data) {
Clazz.super_(C$, this);
var length=numRows * numCols;
this.data=Clazz.array(Double.TYPE, [length]);
this.numRows=numRows;
this.numCols=numCols;
this.set$I$I$Z$DA(numRows, numCols, rowMajor, data);
}, 1);

Clazz.newMeth(C$, 'c$$DAA', function (data) {
Clazz.super_(C$, this);
this.numRows=data.length;
this.numCols=data[0].length;
this.data=Clazz.array(Double.TYPE, [this.numRows * this.numCols]);
var pos=0;
for (var i=0; i < this.numRows; i++) {
var row=data[i];
if (row.length != this.numCols) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["All rows must have the same length"]);
}System.arraycopy$O$I$O$I$I(row, 0, this.data, pos, this.numCols);
pos+=this.numCols;
}
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (numRows, numCols) {
Clazz.super_(C$, this);
this.data=Clazz.array(Double.TYPE, [numRows * numCols]);
this.numRows=numRows;
this.numCols=numCols;
}, 1);

Clazz.newMeth(C$, 'c$$org_ejml_data_DenseMatrix64F', function (orig) {
C$.c$$I$I.apply(this, [orig.numRows, orig.numCols]);
System.arraycopy$O$I$O$I$I(orig.data, 0, this.data, 0, orig.getNumElements$());
}, 1);

Clazz.newMeth(C$, 'c$$I', function (length) {
Clazz.super_(C$, this);
this.data=Clazz.array(Double.TYPE, [length]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$org_ejml_data_ReshapeMatrix64F', function (mat) {
C$.c$$I$I.apply(this, [mat.numRows, mat.numCols]);
for (var i=0; i < this.numRows; i++) {
for (var j=0; j < this.numCols; j++) {
this.set$I$I$D(i, j, mat.get$I$I(i, j));
}
}
}, 1);

Clazz.newMeth(C$, 'wrap$I$I$DA', function (numRows, numCols, data) {
var s=Clazz.new_(C$);
s.data=data;
s.numRows=numRows;
s.numCols=numCols;
return s;
}, 1);

Clazz.newMeth(C$, 'reshape$I$I$Z', function (numRows, numCols, saveValues) {
if (this.data.length < numRows * numCols) {
var d=Clazz.array(Double.TYPE, [numRows * numCols]);
if (saveValues) {
System.arraycopy$O$I$O$I$I(this.data, 0, d, 0, this.getNumElements$());
}this.data=d;
}this.numRows=numRows;
this.numCols=numCols;
});

Clazz.newMeth(C$, 'set$I$I$D', function (row, col, value) {
if (col < 0 || col >= this.numCols  || row < 0  || row >= this.numRows ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Specified element is out of bounds: (" + row + " , " + col + ")" ]);
}this.data[row * this.numCols + col]=value;
});

Clazz.newMeth(C$, 'unsafe_set$I$I$D', function (row, col, value) {
this.data[row * this.numCols + col]=value;
});

Clazz.newMeth(C$, 'add$I$I$D', function (row, col, value) {
if (col < 0 || col >= this.numCols  || row < 0  || row >= this.numRows ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Specified element is out of bounds"]);
}this.data[row * this.numCols + col] += value;
});

Clazz.newMeth(C$, 'get$I$I', function (row, col) {
if (col < 0 || col >= this.numCols  || row < 0  || row >= this.numRows ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Specified element is out of bounds: " + row + " " + col ]);
}return this.data[row * this.numCols + col];
});

Clazz.newMeth(C$, 'unsafe_get$I$I', function (row, col) {
return this.data[row * this.numCols + col];
});

Clazz.newMeth(C$, 'getIndex$I$I', function (row, col) {
return row * this.numCols + col;
});

Clazz.newMeth(C$, 'isInBounds$I$I', function (row, col) {
return (col >= 0 && col < this.numCols  && row >= 0  && row < this.numRows );
});

Clazz.newMeth(C$, 'getNumElements$', function () {
return this.numRows * this.numCols;
});

Clazz.newMeth(C$, 'setReshape$org_ejml_data_DenseMatrix64F', function (b) {
var dataLength=b.getNumElements$();
if (this.data.length < dataLength) {
this.data=Clazz.array(Double.TYPE, [dataLength]);
}this.numRows=b.numRows;
this.numCols=b.numCols;
System.arraycopy$O$I$O$I$I(b.data, 0, this.data, 0, dataLength);
});

Clazz.newMeth(C$, 'set$I$I$Z$DA', function (numRows, numCols, rowMajor, data) {
var length=numRows * numCols;
if (numRows != this.numRows || numCols != this.numCols ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unexpected matrix shape."]);
if (length > this.data.length) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["The length of this matrix\'s data array is too small."]);
if (rowMajor) {
System.arraycopy$O$I$O$I$I(data, 0, this.data, 0, length);
} else {
var index=0;
for (var i=0; i < numRows; i++) {
for (var j=0; j < numCols; j++) {
this.data[index++]=data[j * numRows + i];
}
}
}});

Clazz.newMeth(C$, 'zero$', function () {
$I$(1).fill$org_ejml_data_D1Matrix64F$D(this, 0.0);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$org_ejml_data_DenseMatrix64F,[this]);
});

Clazz.newMeth(C$, 'print$', function () {
$I$(2).print$java_io_PrintStream$org_ejml_data_Matrix64F(System.out, this);
});

Clazz.newMeth(C$, 'print$S', function (format) {
$I$(2).print$java_io_PrintStream$org_ejml_data_Matrix64F$S(System.out, this, format);
});

Clazz.newMeth(C$, 'toString', function () {
var stream=Clazz.new_($I$(3,1));
$I$(2).print$java_io_PrintStream$org_ejml_data_Matrix64F(Clazz.new_($I$(4,1).c$$java_io_OutputStream,[stream]), this);
return stream.toString();
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
