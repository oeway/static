(function(){var P$=Clazz.newPackage("net.imglib2.img.cell"),I$=[[0,['net.imglib2.img.cell.LazyCellImg','.LazyCells']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LazyCellImg", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imglib2.img.cell.AbstractCellImg');
C$.$classes$=[['Get',9],['LazyCells',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$net_imglib2_img_cell_CellGrid$TT$net_imglib2_img_cell_LazyCellImg_Get'], function (grid, type, get) {
;C$.superclazz.c$$net_imglib2_img_cell_CellGrid$TI$net_imglib2_util_Fraction.apply(this,[grid, Clazz.new_(1,{T:"net.imglib2.img.cell.Cell"},$I$(1,1).c$$JA$net_imglib2_img_cell_LazyCellImg_Get,[grid.getGridDimensions$(), get]), type.getEntitiesPerPixel$()]);C$.$init$.apply(this);
var typeFactory=type.getNativeTypeFactory$();
this.setLinkedType$TT(typeFactory.createLinkedType$net_imglib2_img_NativeImg(this));
}, 1);

Clazz.newMeth(C$, ['c$$net_imglib2_img_cell_CellGrid$net_imglib2_util_Fraction$net_imglib2_img_cell_LazyCellImg_Get','c$null'], function (grid, entitiesPerPixel, get) {
;C$.superclazz.c$$net_imglib2_img_cell_CellGrid$TI$net_imglib2_util_Fraction.apply(this,[grid, Clazz.new_(1,{T:"net.imglib2.img.cell.Cell"},$I$(1,1).c$$JA$net_imglib2_img_cell_LazyCellImg_Get,[grid.getGridDimensions$(), get]), entitiesPerPixel]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'factory$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not implemented yet"]);
});

Clazz.newMeth(C$, 'copy$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["not implemented yet"]);
});
;
(function(){/*i*/var C$=Clazz.newInterface(P$.LazyCellImg, "Get", function(){
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.LazyCellImg, "LazyCells", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'net.imglib2.img.list.AbstractLongListImg');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['get','net.imglib2.img.cell.LazyCellImg.Get']]]

Clazz.newMeth(C$, 'c$$JA$net_imglib2_img_cell_LazyCellImg_Get', function (dimensions, get) {
;C$.superclazz.c$$JA.apply(this,[dimensions]);C$.$init$.apply(this);
this.get=get;
}, 1);

Clazz.newMeth(C$, 'get$J', function (index) {
return this.get.get$(index);
});

Clazz.newMeth(C$, ['set$J$TT'], function (index, value) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'factory$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$, 'copy$', function () {
throw Clazz.new_(Clazz.load('UnsupportedOperationException'));
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:08 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
