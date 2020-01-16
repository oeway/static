(function(){var P$=Clazz.newPackage("net.imglib2.img.cell"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CellImg", null, 'net.imglib2.img.cell.AbstractCellImg');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['factory','net.imglib2.img.cell.CellImgFactory']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_cell_CellImgFactory$net_imglib2_img_cell_CellGrid$net_imglib2_img_list_ListImg$net_imglib2_util_Fraction', function (factory, grid, imgOfCells, entitiesPerPixel) {
;C$.superclazz.c$$net_imglib2_img_cell_CellGrid$TI$net_imglib2_util_Fraction.apply(this,[grid, imgOfCells, entitiesPerPixel]);C$.$init$.apply(this);
this.factory=factory;
}, 1);

Clazz.newMeth(C$, 'factory$', function () {
return this.factory;
});

Clazz.newMeth(C$, 'copy$', function () {
var copy=this.factory$().create$JA(this.dimension);
this.copyDataTo$net_imglib2_img_cell_AbstractCellImg(copy);
return copy;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:08 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
