(function(){var P$=Clazz.newPackage("net.imglib2.img.cell"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "CellCursor", null, 'net.imglib2.AbstractCursor', [['net.imglib2.img.cell.AbstractCellImg','net.imglib2.img.cell.AbstractCellImg.CellImgSampler']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['isNotLastCell'],'I',['lastIndexInCell','index'],'O',['type','<T extends NativeType<T>>','cursorOnCells','net.imglib2.Cursor']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_cell_CellCursor', function (cursor) {
;C$.superclazz.c$$I.apply(this,[cursor.numDimensions$()]);C$.$init$.apply(this);
this.type=cursor.type.duplicateTypeOnSameNativeImg$();
this.cursorOnCells=cursor.cursorOnCells.copyCursor$();
this.isNotLastCell=cursor.isNotLastCell;
this.lastIndexInCell=cursor.lastIndexInCell;
this.index=cursor.index;
this.type.updateContainer$O(this);
this.type.updateIndex$I(this.index);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_cell_AbstractCellImg', function (img) {
;C$.superclazz.c$$I.apply(this,[img.numDimensions$()]);C$.$init$.apply(this);
this.type=img.createLinkedType$();
this.cursorOnCells=img.getCells$().cursor$();
this.reset$();
}, 1);

Clazz.newMeth(C$, 'getCell$', function () {
return this.cursorOnCells.get$();
});

Clazz.newMeth(C$, 'get$', function () {
return this.type;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object",C:"Object"},C$.c$$net_imglib2_img_cell_CellCursor,[this]);
});

Clazz.newMeth(C$, 'copyCursor$', function () {
return this.copy$();
});

Clazz.newMeth(C$, 'hasNext$', function () {
return (this.index < this.lastIndexInCell) || this.isNotLastCell ;
});

Clazz.newMeth(C$, 'jumpFwd$J', function (steps) {
var newIndex=this.index + steps;
while (newIndex > this.lastIndexInCell){
newIndex-=this.lastIndexInCell + 1;
this.cursorOnCells.fwd$();
this.isNotLastCell=this.cursorOnCells.hasNext$();
this.lastIndexInCell=((this.getCell$().size$() - 1)|0);
}
this.index=(newIndex|0);
this.type.updateIndex$I(this.index);
this.type.updateContainer$O(this);
});

Clazz.newMeth(C$, 'fwd$', function () {
if (++this.index > this.lastIndexInCell) {
p$1.moveToNextCell.apply(this, []);
this.index=0;
}this.type.updateIndex$I(this.index);
});

Clazz.newMeth(C$, 'reset$', function () {
this.cursorOnCells.reset$();
p$1.moveToNextCell.apply(this, []);
this.type.updateIndex$I(this.index);
});

Clazz.newMeth(C$, 'toString', function () {
return this.type.toString();
});

Clazz.newMeth(C$, 'getLongPosition$I', function (dim) {
return this.getCell$().indexToGlobalPosition$I$I(this.index, dim);
});

Clazz.newMeth(C$, 'localize$JA', function (position) {
this.getCell$().indexToGlobalPosition$I$JA(this.index, position);
});

Clazz.newMeth(C$, 'moveToNextCell', function () {
this.cursorOnCells.fwd$();
this.isNotLastCell=this.cursorOnCells.hasNext$();
this.lastIndexInCell=((this.getCell$().size$() - 1)|0);
this.index=-1;
this.type.updateContainer$O(this);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:08 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
