(function(){var P$=Clazz.newPackage("net.imglib2.display.screenimage.awt"),I$=[[0,'net.imglib2.type.numeric.integer.ByteType','net.imglib2.img.basictypeaccess.array.ByteArray','net.imglib2.display.screenimage.awt.ByteAWTScreenImage','net.imglib2.type.numeric.integer.UnsignedByteType','net.imglib2.display.screenimage.awt.UnsignedByteAWTScreenImage','net.imglib2.type.numeric.integer.ShortType','net.imglib2.img.basictypeaccess.array.ShortArray','net.imglib2.display.screenimage.awt.ShortAWTScreenImage','net.imglib2.type.numeric.integer.UnsignedShortType','net.imglib2.display.screenimage.awt.UnsignedShortAWTScreenImage','net.imglib2.type.numeric.integer.IntType','net.imglib2.img.basictypeaccess.array.IntArray','net.imglib2.display.screenimage.awt.IntAWTScreenImage','net.imglib2.type.numeric.integer.UnsignedIntType','net.imglib2.display.screenimage.awt.UnsignedIntAWTScreenImage','net.imglib2.type.numeric.real.FloatType','net.imglib2.img.basictypeaccess.array.FloatArray','net.imglib2.display.screenimage.awt.FloatAWTScreenImage','net.imglib2.type.numeric.real.DoubleType','net.imglib2.img.basictypeaccess.array.DoubleArray','net.imglib2.display.screenimage.awt.DoubleAWTScreenImage']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AWTScreenImageUtil");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'emptyScreenImage$TT$JA', function (type, dims) {
if (Clazz.getClass($I$(1)).isAssignableFrom$Class(type.getClass$())) {
var array=Clazz.new_($I$(2,1).c$$I,[C$.numElements$JA(dims)]);
var container=Clazz.new_($I$(3,1).c$$net_imglib2_type_numeric_integer_ByteType$net_imglib2_img_basictypeaccess_array_ByteArray$JA,[Clazz.new_($I$(1,1).c$$net_imglib2_img_basictypeaccess_ByteAccess,[array]), array, dims]);
container.setLinkedType$TT(Clazz.new_($I$(1,1).c$$net_imglib2_img_NativeImg,[container]));
return container;
}if (Clazz.getClass($I$(4)).isAssignableFrom$Class(type.getClass$())) {
var array=Clazz.new_($I$(2,1).c$$I,[C$.numElements$JA(dims)]);
var container=Clazz.new_($I$(5,1).c$$net_imglib2_type_numeric_integer_UnsignedByteType$net_imglib2_img_basictypeaccess_array_ByteArray$JA,[Clazz.new_($I$(4,1).c$$net_imglib2_img_basictypeaccess_ByteAccess,[array]), array, dims]);
container.setLinkedType$TT(Clazz.new_($I$(4,1).c$$net_imglib2_img_NativeImg,[container]));
return container;
}if (Clazz.getClass($I$(6)).isAssignableFrom$Class(type.getClass$())) {
var array=Clazz.new_($I$(7,1).c$$I,[C$.numElements$JA(dims)]);
var container=Clazz.new_($I$(8,1).c$$net_imglib2_type_numeric_integer_ShortType$net_imglib2_img_basictypeaccess_array_ShortArray$JA,[Clazz.new_($I$(6,1).c$$net_imglib2_img_basictypeaccess_ShortAccess,[array]), array, dims]);
container.setLinkedType$TT(Clazz.new_($I$(6,1).c$$net_imglib2_img_NativeImg,[container]));
return container;
}if (Clazz.getClass($I$(9)).isAssignableFrom$Class(type.getClass$())) {
var array=Clazz.new_($I$(7,1).c$$I,[C$.numElements$JA(dims)]);
var container=Clazz.new_($I$(10,1).c$$net_imglib2_type_numeric_integer_UnsignedShortType$net_imglib2_img_basictypeaccess_array_ShortArray$JA,[Clazz.new_($I$(9,1).c$$net_imglib2_img_basictypeaccess_ShortAccess,[array]), array, dims]);
container.setLinkedType$TT(Clazz.new_($I$(9,1).c$$net_imglib2_img_NativeImg,[container]));
return container;
}if (Clazz.getClass($I$(11)).isAssignableFrom$Class(type.getClass$())) {
var array=Clazz.new_($I$(12,1).c$$I,[C$.numElements$JA(dims)]);
var container=Clazz.new_($I$(13,1).c$$net_imglib2_type_numeric_integer_IntType$net_imglib2_img_basictypeaccess_array_IntArray$JA,[Clazz.new_($I$(11,1).c$$net_imglib2_img_basictypeaccess_IntAccess,[array]), array, dims]);
container.setLinkedType$TT(Clazz.new_($I$(11,1).c$$net_imglib2_img_NativeImg,[container]));
return container;
}if (Clazz.getClass($I$(14)).isAssignableFrom$Class(type.getClass$())) {
var array=Clazz.new_($I$(12,1).c$$I,[C$.numElements$JA(dims)]);
var container=Clazz.new_($I$(15,1).c$$net_imglib2_type_numeric_integer_UnsignedIntType$net_imglib2_img_basictypeaccess_array_IntArray$JA,[Clazz.new_($I$(14,1).c$$net_imglib2_img_basictypeaccess_IntAccess,[array]), array, dims]);
container.setLinkedType$TT(Clazz.new_($I$(14,1).c$$net_imglib2_img_NativeImg,[container]));
return container;
}if (Clazz.getClass($I$(16)).isAssignableFrom$Class(type.getClass$())) {
var array=Clazz.new_($I$(17,1).c$$I,[C$.numElements$JA(dims)]);
var container=Clazz.new_($I$(18,1).c$$net_imglib2_type_numeric_real_FloatType$net_imglib2_img_basictypeaccess_array_FloatArray$JA,[Clazz.new_($I$(16,1).c$$net_imglib2_img_basictypeaccess_FloatAccess,[array]), array, dims]);
container.setLinkedType$TT(Clazz.new_($I$(16,1).c$$net_imglib2_img_NativeImg,[container]));
return container;
}if (Clazz.getClass($I$(19)).isAssignableFrom$Class(type.getClass$())) {
var array=Clazz.new_($I$(20,1).c$$I,[C$.numElements$JA(dims)]);
var container=Clazz.new_($I$(21,1).c$$net_imglib2_type_numeric_real_DoubleType$net_imglib2_img_basictypeaccess_array_DoubleArray$JA,[Clazz.new_($I$(19,1).c$$net_imglib2_img_basictypeaccess_DoubleAccess,[array]), array, dims]);
container.setLinkedType$TT(Clazz.new_($I$(19,1).c$$net_imglib2_img_NativeImg,[container]));
return container;
}throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can't find AWTScreenImage for type " + type.toString() + "!" ]);
}, 1);

Clazz.newMeth(C$, 'numElements$JA', function (dims) {
return ((dims[0] * dims[1])|0);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:06 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
