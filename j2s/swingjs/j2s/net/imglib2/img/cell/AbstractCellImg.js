(function(){var P$=Clazz.newPackage("net.imglib2.img.cell"),I$=[[0,'net.imglib2.img.cell.CellCursor','net.imglib2.img.cell.CellLocalizingCursor','net.imglib2.img.cell.CellRandomAccess','net.imglib2.img.cell.CellIterationOrder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractCellImg", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imglib2.img.AbstractNativeImg');
C$.$classes$=[['CellImgSampler',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['grid','net.imglib2.img.cell.CellGrid','cells','<I extends RandomAccessible<C> & IterableInterval<C>>']]]

Clazz.newMeth(C$, ['c$$net_imglib2_img_cell_CellGrid$TI$net_imglib2_util_Fraction'], function (grid, imgOfCells, entitiesPerPixel) {
;C$.superclazz.c$$JA$net_imglib2_util_Fraction.apply(this,[grid.getImgDimensions$(), entitiesPerPixel]);C$.$init$.apply(this);
this.grid=grid;
this.cells=imgOfCells;
}, 1);

Clazz.newMeth(C$, 'update$O', function (cursor) {
return (cursor).getCell$().getData$();
});

Clazz.newMeth(C$, 'cursor$', function () {
return Clazz.new_(1,{T:"Object",C:"Object"},$I$(1,1).c$$net_imglib2_img_cell_AbstractCellImg,[this]);
});

Clazz.newMeth(C$, 'localizingCursor$', function () {
return Clazz.new_(1,{T:"Object",C:"Object"},$I$(2,1).c$$net_imglib2_img_cell_AbstractCellImg,[this]);
});

Clazz.newMeth(C$, 'randomAccess$', function () {
return Clazz.new_(1,{T:"Object",C:"Object"},$I$(3,1).c$$net_imglib2_img_cell_AbstractCellImg,[this]);
});

Clazz.newMeth(C$, 'iterationOrder$', function () {
return Clazz.new_($I$(4,1).c$$net_imglib2_img_cell_AbstractCellImg,[this]);
});

Clazz.newMeth(C$, 'getCells$', function () {
return this.cells;
});

Clazz.newMeth(C$, 'getCellGrid$', function () {
return this.grid;
});

Clazz.newMeth(C$, 'copyDataTo$net_imglib2_img_cell_AbstractCellImg', function (copy) {
var source=this.cursor$();
var target=copy.cursor$();
while (source.hasNext$())target.next$().set$TT(source.next$());

});
;
(function(){/*i*/var C$=Clazz.newInterface(P$.AbstractCellImg, "CellImgSampler", function(){
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:08 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
