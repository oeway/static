(function(){var P$=Clazz.newPackage("net.imglib2.img.cell"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "CellLocalizingCursor", null, 'net.imglib2.AbstractLocalizingCursor', [['net.imglib2.img.cell.AbstractCellImg','net.imglib2.img.cell.AbstractCellImg.CellImgSampler']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['isNotLastCell'],'I',['lastIndexInCell','index'],'O',['type','<T extends NativeType<T>>','cursorOnCells','net.imglib2.Cursor','currentCellMin','long[]','+currentCellMax']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_cell_CellLocalizingCursor', function (cursor) {
;C$.superclazz.c$$I.apply(this,[cursor.numDimensions$()]);C$.$init$.apply(this);
this.type=cursor.type.duplicateTypeOnSameNativeImg$();
this.cursorOnCells=cursor.cursorOnCells.copyCursor$();
this.currentCellMin=cursor.currentCellMin;
this.currentCellMax=cursor.currentCellMax;
this.isNotLastCell=cursor.isNotLastCell;
this.lastIndexInCell=cursor.lastIndexInCell;
for (var d=0; d < this.n; ++d) this.position[d]=cursor.position[d];

this.index=cursor.index;
this.type.updateContainer$O(this);
this.type.updateIndex$I(this.index);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_cell_AbstractCellImg', function (img) {
;C$.superclazz.c$$I.apply(this,[img.numDimensions$()]);C$.$init$.apply(this);
this.type=img.createLinkedType$();
this.cursorOnCells=img.getCells$().cursor$();
this.currentCellMin=null;
this.currentCellMax=null;
this.reset$();
}, 1);

Clazz.newMeth(C$, 'getCell$', function () {
return this.cursorOnCells.get$();
});

Clazz.newMeth(C$, 'get$', function () {
return this.type;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object",C:"Object"},C$.c$$net_imglib2_img_cell_CellLocalizingCursor,[this]);
});

Clazz.newMeth(C$, 'copyCursor$', function () {
return this.copy$();
});

Clazz.newMeth(C$, 'hasNext$', function () {
return this.isNotLastCell || (this.index < this.lastIndexInCell) ;
});

Clazz.newMeth(C$, 'jumpFwd$J', function (steps) {
var newIndex=this.index + steps;
while (newIndex > this.lastIndexInCell){
newIndex-=this.lastIndexInCell + 1;
this.cursorOnCells.fwd$();
this.isNotLastCell=this.cursorOnCells.hasNext$();
this.lastIndexInCell=((this.getCell$().size$() - 1)|0);
}
var cell=this.getCell$();
this.currentCellMin=cell.min;
this.currentCellMax=cell.max;
this.index=(newIndex|0);
cell.indexToGlobalPosition$I$JA(this.index, this.position);
this.type.updateIndex$I(this.index);
this.type.updateContainer$O(this);
});

Clazz.newMeth(C$, 'fwd$', function () {
if (++this.index > this.lastIndexInCell) {
p$1.moveToNextCell.apply(this, []);
this.index=0;
}this.type.updateIndex$I(this.index);
for (var d=0; d < this.n; ++d) {
if (++this.position[d] > this.currentCellMax[d]) this.position[d]=this.currentCellMin[d];
 else break;
}
});

Clazz.newMeth(C$, 'reset$', function () {
this.cursorOnCells.reset$();
p$1.moveToNextCell.apply(this, []);
this.index=-1;
this.type.updateIndex$I(this.index);
});

Clazz.newMeth(C$, 'moveToNextCell', function () {
this.cursorOnCells.fwd$();
this.isNotLastCell=this.cursorOnCells.hasNext$();
var cell=this.getCell$();
this.lastIndexInCell=((cell.size$() - 1)|0);
this.currentCellMin=cell.min;
this.currentCellMax=cell.max;
this.position[0]=this.currentCellMin[0] - 1;
for (var d=1; d < this.n; ++d) this.position[d]=this.currentCellMin[d];

this.type.updateContainer$O(this);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:08 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
