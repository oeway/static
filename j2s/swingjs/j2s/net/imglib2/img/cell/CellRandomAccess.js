(function(){var P$=Clazz.newPackage("net.imglib2.img.cell"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "CellRandomAccess", null, 'net.imglib2.AbstractLocalizable', ['net.imglib2.RandomAccess', ['net.imglib2.img.cell.AbstractCellImg','net.imglib2.img.cell.AbstractCellImg.CellImgSampler']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['isOutOfBounds'],'I',['index'],'O',['type','<T extends NativeType<T>>','grid','net.imglib2.img.cell.CellGrid','randomAccessOnCells','net.imglib2.RandomAccess','cellDims','int[]','dimensions','long[]','currentCellSteps','int[]','currentCellMin','long[]','+currentCellMax','+oobCellMin','+oobCellMax']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_cell_CellRandomAccess', function (randomAccess) {
;C$.superclazz.c$$I.apply(this,[randomAccess.numDimensions$()]);C$.$init$.apply(this);
this.type=randomAccess.type.duplicateTypeOnSameNativeImg$();
this.grid=randomAccess.grid;
this.randomAccessOnCells=randomAccess.randomAccessOnCells.copyRandomAccess$();
randomAccess.localize$JA(this.position);
this.cellDims=randomAccess.cellDims;
this.dimensions=randomAccess.dimensions;
this.currentCellSteps=randomAccess.currentCellSteps;
this.currentCellMin=randomAccess.currentCellMin;
this.currentCellMax=randomAccess.currentCellMax;
this.isOutOfBounds=randomAccess.isOutOfBounds;
this.oobCellMin=randomAccess.oobCellMin;
this.oobCellMax=randomAccess.oobCellMax;
this.index=randomAccess.index;
this.type.updateContainer$O(this);
this.type.updateIndex$I(this.index);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_cell_AbstractCellImg', function (img) {
;C$.superclazz.c$$I.apply(this,[img.numDimensions$()]);C$.$init$.apply(this);
this.type=img.createLinkedType$();
this.grid=img.getCellGrid$();
this.randomAccessOnCells=img.getCells$().randomAccess$();
this.cellDims=Clazz.array(Integer.TYPE, [this.n]);
this.dimensions=Clazz.array(Long.TYPE, [this.n]);
img.getCellGrid$().cellDimensions$IA(this.cellDims);
img.getCellGrid$().imgDimensions$JA(this.dimensions);
this.isOutOfBounds=false;
this.oobCellMin=Clazz.array(Long.TYPE, [this.n]);
this.oobCellMax=Clazz.array(Long.TYPE, [this.n]);
for (var d=0; d < this.n; ++d) {
this.oobCellMin[d]=9223372036854775807;
this.oobCellMax[d]=-9223372036854775808;
}
img.getCellGrid$().getCellPosition$JA$net_imglib2_Positionable(this.position, this.randomAccessOnCells);
p$1.updatePosition$Z.apply(this, [false]);
}, 1);

Clazz.newMeth(C$, 'getCell$', function () {
return this.randomAccessOnCells.get$();
});

Clazz.newMeth(C$, 'get$', function () {
return this.type;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object",C:"Object"},C$.c$$net_imglib2_img_cell_CellRandomAccess,[this]);
});

Clazz.newMeth(C$, 'copyRandomAccess$', function () {
return this.copy$();
});

Clazz.newMeth(C$, 'fwd$I', function (d) {
this.index+=this.currentCellSteps[d];
if (++this.position[d] > this.currentCellMax[d]) {
this.randomAccessOnCells.fwd$I(d);
p$1.updatePosition$Z.apply(this, [this.position[d] >= this.dimensions[d]]);
}this.type.updateIndex$I(this.index);
});

Clazz.newMeth(C$, 'bck$I', function (d) {
this.index-=this.currentCellSteps[d];
if (--this.position[d] < this.currentCellMin[d]) {
this.randomAccessOnCells.bck$I(d);
p$1.updatePosition$Z.apply(this, [this.position[d] < 0]);
}this.type.updateIndex$I(this.index);
});

Clazz.newMeth(C$, 'move$I$I', function (distance, d) {
this.index+=distance * this.currentCellSteps[d];
this.position[d]+=distance;
if (this.position[d] < this.currentCellMin[d] || this.position[d] > this.currentCellMax[d] ) {
this.randomAccessOnCells.setPosition$J$I((this.position[d]/this.cellDims[d]|0), d);
p$1.updatePosition$Z.apply(this, [this.position[d] < 0 || this.position[d] >= this.dimensions[d] ]);
}this.type.updateIndex$I(this.index);
});

Clazz.newMeth(C$, 'move$J$I', function (distance, d) {
this.index+=(distance|0) * this.currentCellSteps[d];
this.position[d]+=distance;
if (this.position[d] < this.currentCellMin[d] || this.position[d] > this.currentCellMax[d] ) {
this.randomAccessOnCells.setPosition$J$I((this.position[d]/this.cellDims[d]|0), d);
p$1.updatePosition$Z.apply(this, [this.position[d] < 0 || this.position[d] >= this.dimensions[d] ]);
}this.type.updateIndex$I(this.index);
});

Clazz.newMeth(C$, 'move$net_imglib2_Localizable', function (localizable) {
for (var d=0; d < this.n; ++d) {
var pos=localizable.getLongPosition$I(d);
if (pos != 0) {
this.index+=(pos|0) * this.currentCellSteps[d];
this.position[d]+=pos;
if (this.position[d] < this.currentCellMin[d] || this.position[d] > this.currentCellMax[d] ) {
this.randomAccessOnCells.setPosition$J$I((this.position[d]/this.cellDims[d]|0), d);
var movedOutOfBounds=this.position[d] < 0 || this.position[d] >= this.dimensions[d] ;
for (++d; d < this.n; ++d) {
var pos2=localizable.getLongPosition$I(d);
if (pos2 != 0) {
this.position[d]+=pos2;
if (this.position[d] < this.currentCellMin[d] || this.position[d] > this.currentCellMax[d] ) {
this.randomAccessOnCells.setPosition$J$I((this.position[d]/this.cellDims[d]|0), d);
movedOutOfBounds|=this.position[d] < 0 || this.position[d] >= this.dimensions[d] ;
}}}
p$1.updatePosition$Z.apply(this, [movedOutOfBounds]);
}}}
this.type.updateIndex$I(this.index);
});

Clazz.newMeth(C$, 'move$IA', function (distance) {
for (var d=0; d < this.n; ++d) {
if (distance[d] != 0) {
this.index+=distance[d] * this.currentCellSteps[d];
this.position[d]+=distance[d];
if (this.position[d] < this.currentCellMin[d] || this.position[d] > this.currentCellMax[d] ) {
this.randomAccessOnCells.setPosition$J$I((this.position[d]/this.cellDims[d]|0), d);
var movedOutOfBounds=this.position[d] < 0 || this.position[d] >= this.dimensions[d] ;
for (++d; d < this.n; ++d) {
if (distance[d] != 0) {
this.position[d]+=distance[d];
if (this.position[d] < this.currentCellMin[d] || this.position[d] > this.currentCellMax[d] ) {
this.randomAccessOnCells.setPosition$J$I((this.position[d]/this.cellDims[d]|0), d);
movedOutOfBounds|=this.position[d] < 0 || this.position[d] >= this.dimensions[d] ;
}}}
p$1.updatePosition$Z.apply(this, [movedOutOfBounds]);
}}}
this.type.updateIndex$I(this.index);
});

Clazz.newMeth(C$, 'move$JA', function (distance) {
for (var d=0; d < this.n; ++d) {
if (distance[d] != 0) {
this.index+=(distance[d]|0) * this.currentCellSteps[d];
this.position[d]+=distance[d];
if (this.position[d] < this.currentCellMin[d] || this.position[d] > this.currentCellMax[d] ) {
this.randomAccessOnCells.setPosition$J$I((this.position[d]/this.cellDims[d]|0), d);
var movedOutOfBounds=this.position[d] < 0 || this.position[d] >= this.dimensions[d] ;
for (++d; d < this.n; ++d) {
if (distance[d] != 0) {
this.position[d]+=distance[d];
if (this.position[d] < this.currentCellMin[d] || this.position[d] > this.currentCellMax[d] ) {
this.randomAccessOnCells.setPosition$J$I((this.position[d]/this.cellDims[d]|0), d);
movedOutOfBounds|=this.position[d] < 0 || this.position[d] >= this.dimensions[d] ;
}}}
p$1.updatePosition$Z.apply(this, [movedOutOfBounds]);
}}}
this.type.updateIndex$I(this.index);
});

Clazz.newMeth(C$, 'setPosition$I$I', function (pos, d) {
this.index+=((pos - this.position[d])|0) * this.currentCellSteps[d];
this.position[d]=pos;
if (pos < this.currentCellMin[d] || pos > this.currentCellMax[d] ) {
this.randomAccessOnCells.setPosition$I$I((pos/this.cellDims[d]|0), d);
p$1.updatePosition$Z.apply(this, [this.position[d] < 0 || this.position[d] >= this.dimensions[d] ]);
}this.type.updateIndex$I(this.index);
});

Clazz.newMeth(C$, 'setPosition$J$I', function (pos, d) {
this.index+=((pos - this.position[d])|0) * this.currentCellSteps[d];
this.position[d]=pos;
if (pos < this.currentCellMin[d] || pos > this.currentCellMax[d] ) {
this.randomAccessOnCells.setPosition$J$I((pos/this.cellDims[d]|0), d);
p$1.updatePosition$Z.apply(this, [this.position[d] < 0 || this.position[d] >= this.dimensions[d] ]);
}this.type.updateIndex$I(this.index);
});

Clazz.newMeth(C$, 'setPosition$net_imglib2_Localizable', function (localizable) {
for (var d=0; d < this.n; ++d) {
var pos=localizable.getLongPosition$I(d);
if (pos != this.position[d]) {
this.index+=((pos - this.position[d])|0) * this.currentCellSteps[d];
this.position[d]=pos;
if (this.position[d] < this.currentCellMin[d] || this.position[d] > this.currentCellMax[d] ) {
this.randomAccessOnCells.setPosition$J$I((this.position[d]/this.cellDims[d]|0), d);
var movedOutOfBounds=this.position[d] < 0 || this.position[d] >= this.dimensions[d] ;
for (++d; d < this.n; ++d) {
var posInner=localizable.getLongPosition$I(d);
if (posInner != this.position[d]) {
this.position[d]=posInner;
if (this.position[d] < this.currentCellMin[d] || this.position[d] > this.currentCellMax[d] ) {
this.randomAccessOnCells.setPosition$J$I((this.position[d]/this.cellDims[d]|0), d);
movedOutOfBounds|=this.position[d] < 0 || this.position[d] >= this.dimensions[d] ;
}}}
p$1.updatePosition$Z.apply(this, [movedOutOfBounds]);
}}}
this.type.updateIndex$I(this.index);
});

Clazz.newMeth(C$, 'setPosition$IA', function (pos) {
for (var d=0; d < this.n; ++d) {
if (pos[d] != this.position[d]) {
this.index+=((pos[d] - this.position[d])|0) * this.currentCellSteps[d];
if (pos[d] < this.currentCellMin[d] || pos[d] > this.currentCellMax[d] ) {
p$1.setPos2$IA$I.apply(this, [pos, d]);
break;
}this.position[d]=pos[d];
}}
this.type.updateIndex$I(this.index);
});

Clazz.newMeth(C$, 'setPos2$IA$I', function (pos, d0) {
var movedOutOfBounds=false;
for (var d=d0; d < this.n; ++d) {
if (pos[d] != this.position[d]) {
this.position[d]=pos[d];
if (pos[d] < this.currentCellMin[d] || pos[d] > this.currentCellMax[d] ) {
this.randomAccessOnCells.setPosition$I$I((pos[d]/this.cellDims[d]|0), d);
movedOutOfBounds|=pos[d] < 0 || pos[d] >= this.dimensions[d] ;
}}}
p$1.updatePosition$Z.apply(this, [movedOutOfBounds]);
}, p$1);

Clazz.newMeth(C$, 'setPosition$JA', function (pos) {
for (var d=0; d < this.n; ++d) {
if (pos[d] != this.position[d]) {
this.index+=((pos[d] - this.position[d])|0) * this.currentCellSteps[d];
this.position[d]=pos[d];
if (this.position[d] < this.currentCellMin[d] || this.position[d] > this.currentCellMax[d] ) {
this.randomAccessOnCells.setPosition$J$I((this.position[d]/this.cellDims[d]|0), d);
var movedOutOfBounds=this.position[d] < 0 || this.position[d] >= this.dimensions[d] ;
for (++d; d < this.n; ++d) {
if (pos[d] != this.position[d]) {
this.position[d]=pos[d];
if (this.position[d] < this.currentCellMin[d] || this.position[d] > this.currentCellMax[d] ) {
this.randomAccessOnCells.setPosition$J$I((this.position[d]/this.cellDims[d]|0), d);
movedOutOfBounds|=this.position[d] < 0 || this.position[d] >= this.dimensions[d] ;
}}}
p$1.updatePosition$Z.apply(this, [movedOutOfBounds]);
}}}
this.type.updateIndex$I(this.index);
});

Clazz.newMeth(C$, 'updatePosition$Z', function (movedOutOfBounds) {
if (movedOutOfBounds) {
this.isOutOfBounds=true;
this.currentCellMin=this.oobCellMin;
this.currentCellMax=this.oobCellMax;
} else {
if (this.isOutOfBounds) {
for (var d=0; d < this.n; ++d) if (this.position[d] < 0 || this.position[d] >= this.dimensions[d] ) return;

this.isOutOfBounds=false;
this.grid.getCellPosition$JA$net_imglib2_Positionable(this.position, this.randomAccessOnCells);
}var cell=this.getCell$();
this.currentCellSteps=cell.steps;
this.currentCellMin=cell.min;
this.currentCellMax=cell.max;
this.index=cell.globalPositionToIndex$JA(this.position);
this.type.updateContainer$O(this);
}}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:08 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
