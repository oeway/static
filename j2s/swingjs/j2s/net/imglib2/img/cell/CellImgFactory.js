(function(){var P$=Clazz.newPackage("net.imglib2.img.cell"),p$1={},I$=[[0,'net.imglib2.util.Intervals','net.imglib2.util.Util','net.imglib2.img.cell.CellGrid','net.imglib2.img.cell.Cell','net.imglib2.img.list.ListImg','net.imglib2.img.basictypeaccess.ArrayDataAccessFactory','net.imglib2.img.cell.CellImg','net.imglib2.type.NativeType']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CellImgFactory", null, 'net.imglib2.img.NativeImgFactory');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['defaultCellDimensions','int[]']]]

Clazz.newMeth(C$, ['c$$TT'], function (type) {
C$.c$$TT$IA.apply(this, [type, [10]]);
}, 1);

Clazz.newMeth(C$, ['c$$TT$IA'], function (type, cellDimensions) {
;C$.superclazz.c$$TT.apply(this,[type]);C$.$init$.apply(this);
this.defaultCellDimensions=cellDimensions.clone$();
C$.verifyDimensions$IA(this.defaultCellDimensions);
}, 1);

Clazz.newMeth(C$, 'verifyDimensions$IA', function (dimensions) {
if (dimensions == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["dimensions == null"]);
if (dimensions.length == 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["dimensions.length == 0"]);
for (var d=0; d < dimensions.length; d++) if (dimensions[d] <= 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["dimensions[ " + d + " ] <= 0" ]);

}, 1);

Clazz.newMeth(C$, 'verifyDimensions$JA', function (dimensions) {
if (dimensions == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["dimensions == null"]);
if (dimensions.length == 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["dimensions.length == 0"]);
for (var d=0; d < dimensions.length; d++) if (dimensions[d] <= 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["dimensions[ " + d + " ] <= 0" ]);

}, 1);

Clazz.newMeth(C$, 'getCellDimensions$IA$I$net_imglib2_util_Fraction', function (defaultCellDimensions, n, entitiesPerPixel) {
var cellDimensions=Clazz.array(Integer.TYPE, [n]);
var max=defaultCellDimensions.length - 1;
for (var i=0; i < n; i++) cellDimensions[i]=defaultCellDimensions[(i < max) ? i : max];

var numEntities=entitiesPerPixel.mulCeil$J($I$(1).numElements$IA(cellDimensions));
if (numEntities > 2147483647) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Number of entities in cell too large. Use smaller cell size."]);
return cellDimensions;
}, 1);

Clazz.newMeth(C$, 'create$JA', function (dimensions) {
var img=p$1.create$JA$TT$net_imglib2_type_NativeTypeFactory.apply(this, [dimensions, this.type$(), this.type$().getNativeTypeFactory$()]);
return img;
});

Clazz.newMeth(C$, 'create$net_imglib2_Dimensions', function (dimensions) {
return this.create$JA($I$(1).dimensionsAsLongArray$net_imglib2_Dimensions(dimensions));
});

Clazz.newMeth(C$, 'create$IA', function (dimensions) {
return this.create$JA($I$(2).int2long$IA(dimensions));
});

Clazz.newMeth(C$, ['create$JA$TT$net_imglib2_type_NativeTypeFactory'], function (dimensions, type, typeFactory) {
C$.verifyDimensions$JA(dimensions);
var n=dimensions.length;
var entitiesPerPixel=type.getEntitiesPerPixel$();
var cellDimensions=C$.getCellDimensions$IA$I$net_imglib2_util_Fraction(this.defaultCellDimensions, n, entitiesPerPixel);
var grid=Clazz.new_($I$(3,1).c$$JA$IA,[dimensions, cellDimensions]);
var gridDimensions=Clazz.array(Long.TYPE, [grid.numDimensions$()]);
grid.gridDimensions$JA(gridDimensions);
var cellType=Clazz.new_(1,{A:"Object"},$I$(4,1).c$$IA$JA$TA,[Clazz.array(Integer.TYPE, -1, [1]), Clazz.array(Long.TYPE, -1, [1]), null]);
var cells=Clazz.new_(1,{T:"net.imglib2.img.cell.Cell"},$I$(5,1).c$$JA$TT,[gridDimensions, cellType]);
var cellGridPosition=Clazz.array(Long.TYPE, [n]);
var cellMin=Clazz.array(Long.TYPE, [n]);
var cellDims=Clazz.array(Integer.TYPE, [n]);
var cellCursor=cells.localizingCursor$();
while (cellCursor.hasNext$()){
cellCursor.fwd$();
cellCursor.localize$JA(cellGridPosition);
grid.getCellDimensions$JA$JA$IA(cellGridPosition, cellMin, cellDims);
var data=$I$(6).get$net_imglib2_type_NativeTypeFactory(typeFactory).createArray$I((entitiesPerPixel.mulCeil$J($I$(1).numElements$IA(cellDims))|0));
cellCursor.set$TT(Clazz.new_(1,{A:"Object"},$I$(4,1).c$$IA$JA$TA,[cellDims, cellMin, data]));
}
var img=Clazz.new_(1,{T:"Object",A:"Object"},$I$(7,1).c$$net_imglib2_img_cell_CellImgFactory$net_imglib2_img_cell_CellGrid$net_imglib2_img_list_ListImg$net_imglib2_util_Fraction,[this, grid, cells, entitiesPerPixel]);
img.setLinkedType$TT(typeFactory.createLinkedType$net_imglib2_img_NativeImg(img));
return img;
}, p$1);

Clazz.newMeth(C$, ['imgFactory$TS'], function (type) {
if (Clazz.getClass($I$(8),['decIndex$','decIndex$I','duplicateTypeOnSameNativeImg$','getEntitiesPerPixel$','getIndex$','getNativeTypeFactory$','incIndex$','incIndex$I','updateContainer$O','updateIndex$I']).isInstance$O(type)) return Clazz.new_(C$.c$$TT$IA,[type, this.defaultCellDimensions]);
throw Clazz.new_(Clazz.load('net.imglib2.exception.IncompatibleTypeException').c$$O$S,[this, type.getClass$().getCanonicalName$() + " does not implement NativeType."]);
});

Clazz.newMeth(C$, 'c$', function () {
C$.c$$IA.apply(this, [[10]]);
}, 1);

Clazz.newMeth(C$, ['c$$IA','c$null'], function (cellDimensions) {
Clazz.super_(C$, this);
this.defaultCellDimensions=cellDimensions.clone$();
C$.verifyDimensions$IA(this.defaultCellDimensions);
}, 1);

Clazz.newMeth(C$, ['create$JA$TT'], function (dimensions, type) {
this.cache$TT(type);
var img=p$1.create$JA$TT$net_imglib2_type_NativeTypeFactory.apply(this, [dimensions, type, type.getNativeTypeFactory$()]);
return img;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:08 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
