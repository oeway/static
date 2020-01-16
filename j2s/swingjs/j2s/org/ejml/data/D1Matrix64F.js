(function(){var P$=Clazz.newPackage("org.ejml.data"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "D1Matrix64F", null, 'org.ejml.data.ReshapeMatrix64F');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['data','double[]']]]

Clazz.newMeth(C$, 'getData$', function () {
return this.data;
});

Clazz.newMeth(C$, 'setData$DA', function (data) {
this.data=data;
});

Clazz.newMeth(C$, 'set$org_ejml_data_D1Matrix64F', function (b) {
if (this.numRows != b.numRows || this.numCols != b.numCols ) {
throw Clazz.new_(Clazz.load('org.ejml.alg.dense.mult.MatrixDimensionException').c$$S,["The two matrices do not have compatible shapes."]);
}var dataLength=b.getNumElements$();
System.arraycopy$O$I$O$I$I(b.data, 0, this.data, 0, dataLength);
});

Clazz.newMeth(C$, 'get$I', function (index) {
return this.data[index];
});

Clazz.newMeth(C$, 'set$I$D', function (index, val) {
return this.data[index]=val;
});

Clazz.newMeth(C$, 'plus$I$D', function (index, val) {
return this.data[index] += val;
});

Clazz.newMeth(C$, 'minus$I$D', function (index, val) {
return this.data[index] -= val;
});

Clazz.newMeth(C$, 'times$I$D', function (index, val) {
return this.data[index] *= val;
});

Clazz.newMeth(C$, 'div$I$D', function (index, val) {
return this.data[index] /= val;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
