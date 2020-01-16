(function(){var P$=Clazz.newPackage("net.imglib2.img.cell"),I$=[[0,'java.util.Arrays','net.imglib2.util.IntervalIndexer','net.imglib2.util.Util']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CellGrid");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['n','hashcode'],'O',['dimensions','long[]','cellDimensions','int[]','numCells','long[]','borderSize','int[]']]]

Clazz.newMeth(C$, 'c$$JA$IA', function (dimensions, cellDimensions) {
;C$.$init$.apply(this);
this.n=dimensions.length;
this.dimensions=dimensions.clone$();
this.cellDimensions=cellDimensions.clone$();
this.numCells=Clazz.array(Long.TYPE, [this.n]);
this.borderSize=Clazz.array(Integer.TYPE, [this.n]);
for (var d=0; d < this.n; ++d) {
this.numCells[d]=((dimensions[d] - 1)/cellDimensions[d]|0) + 1;
this.borderSize[d]=((dimensions[d] - (this.numCells[d] - 1) * cellDimensions[d])|0);
}
this.hashcode=31 * $I$(1).hashCode$JA(dimensions) + $I$(1).hashCode$IA(cellDimensions);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_cell_CellGrid', function (grid) {
;C$.$init$.apply(this);
this.n=grid.n;
this.dimensions=grid.dimensions.clone$();
this.cellDimensions=grid.cellDimensions.clone$();
this.numCells=grid.numCells.clone$();
this.borderSize=grid.borderSize.clone$();
this.hashcode=grid.hashcode;
}, 1);

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.n;
});

Clazz.newMeth(C$, 'getGridDimensions$', function () {
return this.numCells.clone$();
});

Clazz.newMeth(C$, 'gridDimensions$JA', function (s) {
for (var i=0; i < this.n; ++i) s[i]=this.numCells[i];

});

Clazz.newMeth(C$, 'gridDimension$I', function (d) {
return this.numCells[d];
});

Clazz.newMeth(C$, 'getImgDimensions$', function () {
return this.dimensions.clone$();
});

Clazz.newMeth(C$, 'imgDimensions$JA', function (dimensions) {
for (var i=0; i < this.n; ++i) dimensions[i]=this.dimensions[i];

});

Clazz.newMeth(C$, 'imgDimension$I', function (d) {
return this.dimensions[d];
});

Clazz.newMeth(C$, 'cellDimensions$IA', function (dimensions) {
for (var i=0; i < this.n; ++i) dimensions[i]=this.cellDimensions[i];

});

Clazz.newMeth(C$, 'cellDimension$I', function (d) {
return this.cellDimensions[d];
});

Clazz.newMeth(C$, 'getCellDimensions$J$JA$IA', function (index, cellMin, cellDims) {
for (var d=0; d < this.n; ++d) {
var j=(index/this.numCells[d]|0);
var gridPos=index - j * this.numCells[d];
index=j;
cellDims[d]=((gridPos == this.numCells[d] - 1) ? this.borderSize[d] : this.cellDimensions[d]);
cellMin[d]=gridPos * this.cellDimensions[d];
}
});

Clazz.newMeth(C$, 'getCellDimensions$JA$JA$IA', function (cellGridPosition, cellMin, cellDims) {
for (var d=0; d < this.n; ++d) {
cellDims[d]=((cellGridPosition[d] + 1 == this.numCells[d]) ? this.borderSize[d] : this.cellDimensions[d]);
cellMin[d]=cellGridPosition[d] * this.cellDimensions[d];
}
});

Clazz.newMeth(C$, 'getCellDimension$I$J', function (d, cellGridPosition) {
return ((cellGridPosition + 1 == this.numCells[d]) ? this.borderSize[d] : this.cellDimensions[d]);
});

Clazz.newMeth(C$, 'getCellMin$I$J', function (d, cellGridPosition) {
return cellGridPosition * this.cellDimensions[d];
});

Clazz.newMeth(C$, 'getCellGridPositionFlat$J$JA', function (index, cellGridPosition) {
$I$(2).indexToPosition$J$JA$JA(index, this.numCells, cellGridPosition);
});

Clazz.newMeth(C$, 'getCellPosition$JA$JA', function (position, cellPos) {
for (var d=0; d < this.n; ++d) cellPos[d]=(position[d]/this.cellDimensions[d]|0);

});

Clazz.newMeth(C$, 'getCellPosition$JA$net_imglib2_Positionable', function (position, cellPos) {
for (var d=0; d < this.n; ++d) cellPos.setPosition$J$I((position[d]/this.cellDimensions[d]|0), d);

});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.hashcode;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (Clazz.instanceOf(obj, "net.imglib2.img.cell.CellGrid")) {
var other=obj;
return $I$(1).equals$JA$JA(this.dimensions, other.dimensions) && $I$(1).equals$IA$IA(this.cellDimensions, other.cellDimensions) ;
}return false;
});

Clazz.newMeth(C$, 'toString', function () {
return this.getClass$().getSimpleName$() + "( dims = " + $I$(3).printCoordinates$JA(this.dimensions) + ", cellDims = " + $I$(3).printCoordinates$IA(this.cellDimensions) + " )" ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:08 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
