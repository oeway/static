(function(){var P$=Clazz.newPackage("net.imglib2.img.basictypeaccess"),I$=[[0,'net.imglib2.img.basictypeaccess.AccessFlags','net.imglib2.type.PrimitiveType','net.imglib2.img.basictypeaccess.volatiles.array.DirtyVolatileBooleanArray','net.imglib2.img.basictypeaccess.array.DirtyBooleanArray','net.imglib2.img.basictypeaccess.volatiles.array.VolatileBooleanArray','net.imglib2.img.basictypeaccess.array.BooleanArray','net.imglib2.img.basictypeaccess.volatiles.array.DirtyVolatileByteArray','net.imglib2.img.basictypeaccess.array.DirtyByteArray','net.imglib2.img.basictypeaccess.volatiles.array.VolatileByteArray','net.imglib2.img.basictypeaccess.array.ByteArray','net.imglib2.img.basictypeaccess.volatiles.array.DirtyVolatileCharArray','net.imglib2.img.basictypeaccess.array.DirtyCharArray','net.imglib2.img.basictypeaccess.volatiles.array.VolatileCharArray','net.imglib2.img.basictypeaccess.array.CharArray','net.imglib2.img.basictypeaccess.volatiles.array.DirtyVolatileDoubleArray','net.imglib2.img.basictypeaccess.array.DirtyDoubleArray','net.imglib2.img.basictypeaccess.volatiles.array.VolatileDoubleArray','net.imglib2.img.basictypeaccess.array.DoubleArray','net.imglib2.img.basictypeaccess.volatiles.array.DirtyVolatileFloatArray','net.imglib2.img.basictypeaccess.array.DirtyFloatArray','net.imglib2.img.basictypeaccess.volatiles.array.VolatileFloatArray','net.imglib2.img.basictypeaccess.array.FloatArray','net.imglib2.img.basictypeaccess.volatiles.array.DirtyVolatileIntArray','net.imglib2.img.basictypeaccess.array.DirtyIntArray','net.imglib2.img.basictypeaccess.volatiles.array.VolatileIntArray','net.imglib2.img.basictypeaccess.array.IntArray','net.imglib2.img.basictypeaccess.volatiles.array.DirtyVolatileLongArray','net.imglib2.img.basictypeaccess.array.DirtyLongArray','net.imglib2.img.basictypeaccess.volatiles.array.VolatileLongArray','net.imglib2.img.basictypeaccess.array.LongArray','net.imglib2.img.basictypeaccess.volatiles.array.DirtyVolatileShortArray','net.imglib2.img.basictypeaccess.array.DirtyShortArray','net.imglib2.img.basictypeaccess.volatiles.array.VolatileShortArray','net.imglib2.img.basictypeaccess.array.ShortArray']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ArrayDataAccessFactory");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'get$TT', function (type) {
return C$.get$TT$java_util_Set(type, $I$(1).setOf$());
}, 1);

Clazz.newMeth(C$, 'get$TT$java_util_Set', function (type, flags) {
return C$.get$net_imglib2_type_PrimitiveType$java_util_Set(type.getNativeTypeFactory$().getPrimitiveType$(), flags);
}, 1);

Clazz.newMeth(C$, 'get$net_imglib2_type_NativeTypeFactory', function (typeFactory) {
return C$.get$net_imglib2_type_PrimitiveType$java_util_Set(typeFactory.getPrimitiveType$(), $I$(1).setOf$());
}, 1);

Clazz.newMeth(C$, 'get$net_imglib2_type_NativeTypeFactory$java_util_Set', function (typeFactory, flags) {
return C$.get$net_imglib2_type_PrimitiveType$java_util_Set(typeFactory.getPrimitiveType$(), flags);
}, 1);

Clazz.newMeth(C$, 'get$net_imglib2_type_PrimitiveType$java_util_Set', function (primitiveType, flags) {
var dirty=flags.contains$O($I$(1).DIRTY);
var volatil=flags.contains$O($I$(1).VOLATILE);
switch (primitiveType) {
case $I$(2).BOOLEAN:
return dirty ? (volatil ? Clazz.new_($I$(3,1).c$$I$Z,[0, true]) : Clazz.new_($I$(4,1).c$$I,[0])) : (volatil ? Clazz.new_($I$(5,1).c$$I$Z,[0, true]) : Clazz.new_($I$(6,1).c$$I,[0]));
case $I$(2).BYTE:
return dirty ? (volatil ? Clazz.new_($I$(7,1).c$$I$Z,[0, true]) : Clazz.new_($I$(8,1).c$$I,[0])) : (volatil ? Clazz.new_($I$(9,1).c$$I$Z,[0, true]) : Clazz.new_($I$(10,1).c$$I,[0]));
case $I$(2).CHAR:
return dirty ? (volatil ? Clazz.new_($I$(11,1).c$$I$Z,[0, true]) : Clazz.new_($I$(12,1).c$$I,[0])) : (volatil ? Clazz.new_($I$(13,1).c$$I$Z,[0, true]) : Clazz.new_($I$(14,1).c$$I,[0]));
case $I$(2).DOUBLE:
return dirty ? (volatil ? Clazz.new_($I$(15,1).c$$I$Z,[0, true]) : Clazz.new_($I$(16,1).c$$I,[0])) : (volatil ? Clazz.new_($I$(17,1).c$$I$Z,[0, true]) : Clazz.new_($I$(18,1).c$$I,[0]));
case $I$(2).FLOAT:
return dirty ? (volatil ? Clazz.new_($I$(19,1).c$$I$Z,[0, true]) : Clazz.new_($I$(20,1).c$$I,[0])) : (volatil ? Clazz.new_($I$(21,1).c$$I$Z,[0, true]) : Clazz.new_($I$(22,1).c$$I,[0]));
case $I$(2).INT:
return dirty ? (volatil ? Clazz.new_($I$(23,1).c$$I$Z,[0, true]) : Clazz.new_($I$(24,1).c$$I,[0])) : (volatil ? Clazz.new_($I$(25,1).c$$I$Z,[0, true]) : Clazz.new_($I$(26,1).c$$I,[0]));
case $I$(2).LONG:
return dirty ? (volatil ? Clazz.new_($I$(27,1).c$$I$Z,[0, true]) : Clazz.new_($I$(28,1).c$$I,[0])) : (volatil ? Clazz.new_($I$(29,1).c$$I$Z,[0, true]) : Clazz.new_($I$(30,1).c$$I,[0]));
case $I$(2).SHORT:
return dirty ? (volatil ? Clazz.new_($I$(31,1).c$$I$Z,[0, true]) : Clazz.new_($I$(32,1).c$$I,[0])) : (volatil ? Clazz.new_($I$(33,1).c$$I$Z,[0, true]) : Clazz.new_($I$(34,1).c$$I,[0]));
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:07 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
