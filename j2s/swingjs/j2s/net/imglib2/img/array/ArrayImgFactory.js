(function(){var P$=Clazz.newPackage("net.imglib2.img.array"),p$1={},I$=[[0,'net.imglib2.util.Intervals','net.imglib2.util.Util','net.imglib2.img.basictypeaccess.ArrayDataAccessFactory','net.imglib2.img.array.ArrayImg','net.imglib2.img.AbstractImg']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ArrayImgFactory", null, 'net.imglib2.img.NativeImgFactory');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$TT'], function (type) {
;C$.superclazz.c$$TT.apply(this,[type]);C$.$init$.apply(this);
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
var entitiesPerPixel=type.getEntitiesPerPixel$();
var numEntities=C$.numEntitiesRangeCheck$JA$net_imglib2_util_Fraction(dimensions, entitiesPerPixel);
var data=$I$(3).get$net_imglib2_type_NativeTypeFactory(typeFactory).createArray$I(numEntities);
var img=Clazz.new_(1,{T:"Object",A:"Object"},$I$(4,1).c$$TA$JA$net_imglib2_util_Fraction,[data, dimensions, entitiesPerPixel]);
img.setLinkedType$TT(typeFactory.createLinkedType$net_imglib2_img_NativeImg(img));
return img;
}, p$1);

Clazz.newMeth(C$, 'numEntitiesRangeCheck$JA$net_imglib2_util_Fraction', function (dimensions, entitiesPerPixel) {
var numEntities=entitiesPerPixel.mulCeil$J($I$(5).numElements$JA(dimensions));
if (numEntities > 2147483647) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Number of elements in ArrayImg too big, use for example CellImg instead: " + numEntities + " > " + 2147483647 ]);
return (numEntities|0);
}, 1);

Clazz.newMeth(C$, ['imgFactory$TS'], function (type) {
if (Clazz.instanceOf(type, "net.imglib2.type.NativeType")) return Clazz.new_(C$.c$$TT,[type]);
throw Clazz.new_(Clazz.load('net.imglib2.exception.IncompatibleTypeException').c$$O$S,[this, type.getClass$().getCanonicalName$() + " does not implement NativeType."]);
});

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['create$JA$TT'], function (dim, type) {
this.cache$TT(type);
var img=p$1.create$JA$TT$net_imglib2_type_NativeTypeFactory.apply(this, [dim, type, type.getNativeTypeFactory$()]);
return img;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:07 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
