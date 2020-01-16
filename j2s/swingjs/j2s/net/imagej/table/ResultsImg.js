(function(){var P$=Clazz.newPackage("net.imagej.table"),p$1={},I$=[[0,'net.imglib2.type.numeric.real.DoubleType']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ResultsImg", null, null, 'net.imglib2.img.Img');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['table','net.imagej.table.ResultsTable']]]

Clazz.newMeth(C$, 'c$$net_imagej_table_ResultsTable', function (table) {
;C$.$init$.apply(this);
this.table=table;
}, 1);

Clazz.newMeth(C$, 'randomAccess$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Unimplemented"]);
});

Clazz.newMeth(C$, 'randomAccess$net_imglib2_Interval', function (interval) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Unimplemented"]);
});

Clazz.newMeth(C$, 'numDimensions$', function () {
return 2;
});

Clazz.newMeth(C$, 'min$I', function (d) {
if (d >= 0 && d <= 1 ) return 0;
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid dimension: " + d]);
});

Clazz.newMeth(C$, 'min$JA', function (min) {
min[0]=min[1]=0;
});

Clazz.newMeth(C$, 'min$net_imglib2_Positionable', function (min) {
min.setPosition$I$I(0, 0);
min.setPosition$I$I(0, 1);
});

Clazz.newMeth(C$, 'max$I', function (d) {
if (d == 0) return p$1.max0.apply(this, []);
if (d == 1) return p$1.max1.apply(this, []);
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid dimension: " + d]);
});

Clazz.newMeth(C$, 'max$JA', function (max) {
max[0]=p$1.max0.apply(this, []);
max[1]=p$1.max1.apply(this, []);
});

Clazz.newMeth(C$, 'max$net_imglib2_Positionable', function (max) {
max.setPosition$I$I(0, p$1.max0.apply(this, []));
max.setPosition$I$I(0, p$1.max1.apply(this, []));
});

Clazz.newMeth(C$, 'realMin$I', function (d) {
return this.min$I(d);
});

Clazz.newMeth(C$, 'realMin$DA', function (min) {
min[0]=min[1]=0;
});

Clazz.newMeth(C$, 'realMin$net_imglib2_RealPositionable', function (min) {
this.min$net_imglib2_Positionable(min);
});

Clazz.newMeth(C$, 'realMax$I', function (d) {
return this.max$I(d);
});

Clazz.newMeth(C$, 'realMax$DA', function (max) {
max[0]=this.table.getColumnCount$();
max[1]=this.table.getRowCount$();
});

Clazz.newMeth(C$, 'realMax$net_imglib2_RealPositionable', function (max) {
this.max$net_imglib2_Positionable(max);
});

Clazz.newMeth(C$, 'dimensions$JA', function (dimensions) {
dimensions[0]=p$1.dim0.apply(this, []);
dimensions[1]=p$1.dim1.apply(this, []);
});

Clazz.newMeth(C$, 'dimension$I', function (d) {
if (d == 0) return p$1.dim0.apply(this, []);
if (d == 1) return p$1.dim1.apply(this, []);
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid dimension: " + d]);
});

Clazz.newMeth(C$, 'cursor$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Unimplemented"]);
});

Clazz.newMeth(C$, 'localizingCursor$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Unimplemented"]);
});

Clazz.newMeth(C$, 'size$', function () {
return p$1.dim0.apply(this, []) * p$1.dim1.apply(this, []);
});

Clazz.newMeth(C$, 'firstElement$', function () {
return Clazz.new_($I$(1,1).c$$D,[(this.table.get$I$I(0, 0)).valueOf()]);
});

Clazz.newMeth(C$, 'iterationOrder$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Unimplemented"]);
});

Clazz.newMeth(C$, 'iterator$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Unimplemented"]);
});

Clazz.newMeth(C$, 'factory$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Unimplemented"]);
});

Clazz.newMeth(C$, 'copy$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Unimplemented"]);
});

Clazz.newMeth(C$, 'dim0', function () {
return this.table.getColumnCount$();
}, p$1);

Clazz.newMeth(C$, 'dim1', function () {
return this.table.getRowCount$();
}, p$1);

Clazz.newMeth(C$, 'max0', function () {
return p$1.dim0.apply(this, []) - 1;
}, p$1);

Clazz.newMeth(C$, 'max1', function () {
return p$1.dim1.apply(this, []) - 1;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:03 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
