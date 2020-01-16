(function(){var P$=Clazz.newPackage("org.ejml.data"),I$=[[0,'org.ejml.EjmlParameters','org.ejml.ops.MatrixIO']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BlockMatrix64F", null, 'org.ejml.data.D1Matrix64F');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['blockLength']]]

Clazz.newMeth(C$, 'c$$I$I$I', function (numRows, numCols, blockLength) {
Clazz.super_(C$, this);
this.data=Clazz.array(Double.TYPE, [numRows * numCols]);
this.blockLength=blockLength;
this.numRows=numRows;
this.numCols=numCols;
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (numRows, numCols) {
C$.c$$I$I$I.apply(this, [numRows, numCols, $I$(1).BLOCK_WIDTH]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'set$org_ejml_data_BlockMatrix64F', function (A) {
this.blockLength=A.blockLength;
this.numRows=A.numRows;
this.numCols=A.numCols;
var N=this.numCols * this.numRows;
if (this.data.length < N) this.data=Clazz.array(Double.TYPE, [N]);
System.arraycopy$O$I$O$I$I(A.data, 0, this.data, 0, N);
});

Clazz.newMeth(C$, 'wrap$DA$I$I$I', function (data, numRows, numCols, blockLength) {
var ret=Clazz.new_(C$);
ret.data=data;
ret.numRows=numRows;
ret.numCols=numCols;
ret.blockLength=blockLength;
return ret;
}, 1);

Clazz.newMeth(C$, 'getData$', function () {
return this.data;
});

Clazz.newMeth(C$, 'reshape$I$I$Z', function (numRows, numCols, saveValues) {
if (numRows * numCols <= this.data.length) {
this.numRows=numRows;
this.numCols=numCols;
} else {
var data=Clazz.array(Double.TYPE, [numRows * numCols]);
if (saveValues) {
System.arraycopy$O$I$O$I$I(this.data, 0, data, 0, this.getNumElements$());
}this.numRows=numRows;
this.numCols=numCols;
this.data=data;
}});

Clazz.newMeth(C$, 'reshape$I$I$I$Z', function (numRows, numCols, blockLength, saveValues) {
this.blockLength=blockLength;
this.reshape$I$I$Z(numRows, numCols, saveValues);
});

Clazz.newMeth(C$, 'getIndex$I$I', function (row, col) {
var blockRow=(row/this.blockLength|0);
var blockCol=(col/this.blockLength|0);
var localHeight=Math.min(this.numRows - blockRow * this.blockLength, this.blockLength);
var index=blockRow * this.blockLength * this.numCols  + blockCol * localHeight * this.blockLength ;
var localLength=Math.min(this.numCols - this.blockLength * blockCol, this.blockLength);
row=row % this.blockLength;
col=col % this.blockLength;
return index + localLength * row + col;
});

Clazz.newMeth(C$, 'get$I$I', function (row, col) {
return this.data[this.getIndex$I$I(row, col)];
});

Clazz.newMeth(C$, 'unsafe_get$I$I', function (row, col) {
return this.data[this.getIndex$I$I(row, col)];
});

Clazz.newMeth(C$, 'set$I$I$D', function (row, col, val) {
this.data[this.getIndex$I$I(row, col)]=val;
});

Clazz.newMeth(C$, 'unsafe_set$I$I$D', function (row, col, val) {
this.data[this.getIndex$I$I(row, col)]=val;
});

Clazz.newMeth(C$, 'getNumRows$', function () {
return this.numRows;
});

Clazz.newMeth(C$, 'getNumCols$', function () {
return this.numCols;
});

Clazz.newMeth(C$, 'getNumElements$', function () {
return this.numRows * this.numCols;
});

Clazz.newMeth(C$, 'print$', function () {
$I$(2).print$java_io_PrintStream$org_ejml_data_Matrix64F(System.out, this);
});

Clazz.newMeth(C$, 'copy$', function () {
var A=Clazz.new_(C$.c$$I$I$I,[this.numRows, this.numCols, this.blockLength]);
A.set$org_ejml_data_BlockMatrix64F(this);
return A;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
