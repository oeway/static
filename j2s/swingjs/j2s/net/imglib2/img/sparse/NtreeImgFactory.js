(function(){var P$=Clazz.newPackage("net.imglib2.img.sparse"),p$1={},I$=[[0,'net.imglib2.util.Intervals','net.imglib2.util.Util','net.imglib2.img.sparse.NtreeImg','net.imglib2.type.PrimitiveType','net.imglib2.img.sparse.ByteNtree','net.imglib2.img.sparse.CharNtree','net.imglib2.img.sparse.DoubleNtree','net.imglib2.img.sparse.FloatNtree','net.imglib2.img.sparse.IntNtree','net.imglib2.img.sparse.LongNtree','net.imglib2.img.sparse.ShortNtree','net.imglib2.type.NativeType']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "NtreeImgFactory", null, 'net.imglib2.img.NativeImgFactory');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$TT'], function (type) {
;C$.superclazz.c$$TT.apply(this,[type]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'create$JA', function (dimensions) {
return p$1.create$JA$TT$net_imglib2_type_NativeTypeFactory.apply(this, [dimensions, this.type$(), this.type$().getNativeTypeFactory$()]);
});

Clazz.newMeth(C$, 'create$net_imglib2_Dimensions', function (dimensions) {
return this.create$JA($I$(1).dimensionsAsLongArray$net_imglib2_Dimensions(dimensions));
});

Clazz.newMeth(C$, 'create$IA', function (dimensions) {
return this.create$JA($I$(2).int2long$IA(dimensions));
});

Clazz.newMeth(C$, ['create$JA$TT$net_imglib2_type_NativeTypeFactory'], function (dimensions, type, typeFactory) {
var entitiesPerPixel=type.getEntitiesPerPixel$();
if (entitiesPerPixel.getNumerator$() != entitiesPerPixel.getDenominator$()) throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["not implemented"]);
var pos=Clazz.array(Long.TYPE, [dimensions.length]);
var img=Clazz.new_(1,{T:"Object",A:""},$I$(3,1).c$$TA$JA$net_imglib2_util_Fraction,[C$.createNtreeAccess$net_imglib2_type_NativeTypeFactory$JA(typeFactory, dimensions).createInstance$JA(pos), dimensions, entitiesPerPixel]);
img.setLinkedType$TT(typeFactory.createLinkedType$net_imglib2_img_NativeImg(img));
return img;
}, p$1);

Clazz.newMeth(C$, 'createNtreeAccess$net_imglib2_type_NativeTypeFactory$JA', function (typeFactory, dimensions) {
switch (typeFactory.getPrimitiveType$()) {
case $I$(4).BYTE:
return Clazz.new_($I$(5,1).c$$JA$JA$B,[dimensions, null, ($b$[0] = 0, $b$[0])]);
case $I$(4).CHAR:
return Clazz.new_($I$(6,1).c$$JA$JA$C,[dimensions, null, "\u0000"]);
case $I$(4).DOUBLE:
return Clazz.new_($I$(7,1).c$$JA$JA$D,[dimensions, null, 0]);
case $I$(4).FLOAT:
return Clazz.new_($I$(8,1).c$$JA$JA$F,[dimensions, null, 0]);
case $I$(4).INT:
return Clazz.new_($I$(9,1).c$$JA$JA$I,[dimensions, null, 0]);
case $I$(4).LONG:
return Clazz.new_($I$(10,1).c$$JA$JA$J,[dimensions, null, 0]);
case $I$(4).SHORT:
return Clazz.new_($I$(11,1).c$$JA$JA$H,[dimensions, null, 0]);
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}
}, 1);

Clazz.newMeth(C$, ['imgFactory$TS'], function (type) {
if (Clazz.getClass($I$(12),['decIndex$','decIndex$I','duplicateTypeOnSameNativeImg$','getEntitiesPerPixel$','getIndex$','getNativeTypeFactory$','incIndex$','incIndex$I','updateContainer$O','updateIndex$I']).isInstance$O(type)) return Clazz.new_(C$.c$$TT,[type]);
throw Clazz.new_(Clazz.load('net.imglib2.exception.IncompatibleTypeException').c$$O$S,[this, type.getClass$().getCanonicalName$() + " does not implement NativeType."]);
});

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['create$JA$TT'], function (dimensions, type) {
this.cache$TT(type);
return p$1.create$JA$TT$net_imglib2_type_NativeTypeFactory.apply(this, [dimensions, type, type.getNativeTypeFactory$()]);
});
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:09 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
