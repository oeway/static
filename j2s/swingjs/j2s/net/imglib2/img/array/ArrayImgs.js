(function(){var P$=Clazz.newPackage("net.imglib2.img.array"),I$=[[0,'net.imglib2.img.array.ArrayImgFactory','net.imglib2.type.numeric.integer.UnsignedByteType','net.imglib2.img.basictypeaccess.array.ByteArray','net.imglib2.img.array.ArrayImg','net.imglib2.util.Fraction','net.imglib2.type.numeric.integer.ByteType','net.imglib2.type.numeric.integer.UnsignedShortType','net.imglib2.img.basictypeaccess.array.ShortArray','net.imglib2.type.numeric.integer.ShortType','net.imglib2.type.numeric.integer.UnsignedIntType','net.imglib2.img.basictypeaccess.array.IntArray','net.imglib2.type.numeric.integer.IntType','net.imglib2.type.numeric.integer.UnsignedLongType','net.imglib2.img.basictypeaccess.array.LongArray','net.imglib2.type.numeric.integer.LongType','net.imglib2.type.logic.NativeBoolType','net.imglib2.img.basictypeaccess.array.BooleanArray','net.imglib2.type.logic.BitType','net.imglib2.type.numeric.integer.Unsigned2BitType','net.imglib2.type.numeric.integer.Unsigned4BitType','net.imglib2.type.numeric.integer.Unsigned12BitType','net.imglib2.type.numeric.integer.Unsigned128BitType','net.imglib2.type.numeric.integer.UnsignedVariableBitLengthType','net.imglib2.type.numeric.real.FloatType','net.imglib2.img.basictypeaccess.array.FloatArray','net.imglib2.type.numeric.real.DoubleType','net.imglib2.img.basictypeaccess.array.DoubleArray','net.imglib2.type.numeric.ARGBType','net.imglib2.type.numeric.complex.ComplexFloatType','net.imglib2.type.numeric.complex.ComplexDoubleType']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ArrayImgs");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'unsignedBytes$JA', function (dim) {
return Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.UnsignedByteType"},$I$(1,1).c$$TT,[Clazz.new_($I$(2,1))]).create$JA(dim);
}, 1);

Clazz.newMeth(C$, 'unsignedBytes$BA$JA', function (array, dim) {
return C$.unsignedBytes$TA$JA(Clazz.new_($I$(3,1).c$$BA,[array]), dim);
}, 1);

Clazz.newMeth(C$, 'unsignedBytes$TA$JA', function (access, dim) {
var img=Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.UnsignedByteType",A:"Object"},$I$(4,1).c$$TA$JA$net_imglib2_util_Fraction,[access, dim, Clazz.new_($I$(5,1))]);
var t=Clazz.new_($I$(2,1).c$$net_imglib2_img_NativeImg,[img]);
img.setLinkedType$TT(t);
return img;
}, 1);

Clazz.newMeth(C$, 'bytes$JA', function (dim) {
return Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.ByteType"},$I$(1,1).c$$TT,[Clazz.new_($I$(6,1))]).create$JA(dim);
}, 1);

Clazz.newMeth(C$, 'bytes$BA$JA', function (array, dim) {
return C$.bytes$TA$JA(Clazz.new_($I$(3,1).c$$BA,[array]), dim);
}, 1);

Clazz.newMeth(C$, 'bytes$TA$JA', function (access, dim) {
var img=Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.ByteType",A:"Object"},$I$(4,1).c$$TA$JA$net_imglib2_util_Fraction,[access, dim, Clazz.new_($I$(5,1))]);
var t=Clazz.new_($I$(6,1).c$$net_imglib2_img_NativeImg,[img]);
img.setLinkedType$TT(t);
return img;
}, 1);

Clazz.newMeth(C$, 'unsignedShorts$JA', function (dim) {
return Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.UnsignedShortType"},$I$(1,1).c$$TT,[Clazz.new_($I$(7,1))]).create$JA(dim);
}, 1);

Clazz.newMeth(C$, 'unsignedShorts$HA$JA', function (array, dim) {
return C$.unsignedShorts$TA$JA(Clazz.new_($I$(8,1).c$$HA,[array]), dim);
}, 1);

Clazz.newMeth(C$, 'unsignedShorts$TA$JA', function (access, dim) {
var img=Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.UnsignedShortType",A:"Object"},$I$(4,1).c$$TA$JA$net_imglib2_util_Fraction,[access, dim, Clazz.new_($I$(5,1))]);
var t=Clazz.new_($I$(7,1).c$$net_imglib2_img_NativeImg,[img]);
img.setLinkedType$TT(t);
return img;
}, 1);

Clazz.newMeth(C$, 'shorts$JA', function (dim) {
return Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.ShortType"},$I$(1,1).c$$TT,[Clazz.new_($I$(9,1))]).create$JA(dim);
}, 1);

Clazz.newMeth(C$, 'shorts$HA$JA', function (array, dim) {
return C$.shorts$TA$JA(Clazz.new_($I$(8,1).c$$HA,[array]), dim);
}, 1);

Clazz.newMeth(C$, 'shorts$TA$JA', function (access, dim) {
var img=Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.ShortType",A:"Object"},$I$(4,1).c$$TA$JA$net_imglib2_util_Fraction,[access, dim, Clazz.new_($I$(5,1))]);
var t=Clazz.new_($I$(9,1).c$$net_imglib2_img_NativeImg,[img]);
img.setLinkedType$TT(t);
return img;
}, 1);

Clazz.newMeth(C$, 'unsignedInts$JA', function (dim) {
return Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.UnsignedIntType"},$I$(1,1).c$$TT,[Clazz.new_($I$(10,1))]).create$JA(dim);
}, 1);

Clazz.newMeth(C$, 'unsignedInts$IA$JA', function (array, dim) {
return C$.unsignedInts$TA$JA(Clazz.new_($I$(11,1).c$$IA,[array]), dim);
}, 1);

Clazz.newMeth(C$, 'unsignedInts$TA$JA', function (access, dim) {
var img=Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.UnsignedIntType",A:"Object"},$I$(4,1).c$$TA$JA$net_imglib2_util_Fraction,[access, dim, Clazz.new_($I$(5,1))]);
var t=Clazz.new_($I$(10,1).c$$net_imglib2_img_NativeImg,[img]);
img.setLinkedType$TT(t);
return img;
}, 1);

Clazz.newMeth(C$, 'ints$JA', function (dim) {
return Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.IntType"},$I$(1,1).c$$TT,[Clazz.new_($I$(12,1))]).create$JA(dim);
}, 1);

Clazz.newMeth(C$, 'ints$IA$JA', function (array, dim) {
return C$.ints$TA$JA(Clazz.new_($I$(11,1).c$$IA,[array]), dim);
}, 1);

Clazz.newMeth(C$, 'ints$TA$JA', function (access, dim) {
var img=Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.IntType",A:"Object"},$I$(4,1).c$$TA$JA$net_imglib2_util_Fraction,[access, dim, Clazz.new_($I$(5,1))]);
var t=Clazz.new_($I$(12,1).c$$net_imglib2_img_NativeImg,[img]);
img.setLinkedType$TT(t);
return img;
}, 1);

Clazz.newMeth(C$, 'unsignedLongs$JA', function (dim) {
return Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.UnsignedLongType"},$I$(1,1).c$$TT,[Clazz.new_($I$(13,1))]).create$JA(dim);
}, 1);

Clazz.newMeth(C$, 'unsignedLongss$JA$JA', function (array, dim) {
return C$.unsignedLongs$JA$JA(array, dim);
}, 1);

Clazz.newMeth(C$, 'unsignedLongs$JA$JA', function (array, dim) {
return C$.unsignedLongs$TA$JA(Clazz.new_($I$(14,1).c$$JA,[array]), dim);
}, 1);

Clazz.newMeth(C$, 'unsignedLongs$TA$JA', function (access, dim) {
var img=Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.UnsignedLongType",A:"Object"},$I$(4,1).c$$TA$JA$net_imglib2_util_Fraction,[access, dim, Clazz.new_($I$(5,1))]);
var t=Clazz.new_($I$(13,1).c$$net_imglib2_img_NativeImg,[img]);
img.setLinkedType$TT(t);
return img;
}, 1);

Clazz.newMeth(C$, 'longs$JA', function (dim) {
return Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.LongType"},$I$(1,1).c$$TT,[Clazz.new_($I$(15,1))]).create$JA(dim);
}, 1);

Clazz.newMeth(C$, 'longs$JA$JA', function (array, dim) {
return C$.longs$TA$JA(Clazz.new_($I$(14,1).c$$JA,[array]), dim);
}, 1);

Clazz.newMeth(C$, 'longs$TA$JA', function (access, dim) {
var img=Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.LongType",A:"Object"},$I$(4,1).c$$TA$JA$net_imglib2_util_Fraction,[access, dim, Clazz.new_($I$(5,1))]);
var t=Clazz.new_($I$(15,1).c$$net_imglib2_img_NativeImg,[img]);
img.setLinkedType$TT(t);
return img;
}, 1);

Clazz.newMeth(C$, 'booleans$JA', function (dim) {
return Clazz.new_(1,{T:"net.imglib2.type.logic.NativeBoolType"},$I$(1,1).c$$TT,[Clazz.new_($I$(16,1))]).create$JA(dim);
}, 1);

Clazz.newMeth(C$, 'booleans$ZA$JA', function (array, dim) {
return C$.booleans$TA$JA(Clazz.new_($I$(17,1).c$$ZA,[array]), dim);
}, 1);

Clazz.newMeth(C$, 'booleans$TA$JA', function (access, dim) {
var img=Clazz.new_(1,{T:"net.imglib2.type.logic.NativeBoolType",A:"Object"},$I$(4,1).c$$TA$JA$net_imglib2_util_Fraction,[access, dim, Clazz.new_($I$(5,1))]);
var t=Clazz.new_($I$(16,1).c$$net_imglib2_img_NativeImg,[img]);
img.setLinkedType$TT(t);
return img;
}, 1);

Clazz.newMeth(C$, 'bits$JA', function (dim) {
return Clazz.new_(1,{T:"net.imglib2.type.logic.BitType"},$I$(1,1).c$$TT,[Clazz.new_($I$(18,1))]).create$JA(dim);
}, 1);

Clazz.newMeth(C$, 'bits$TA$JA', function (access, dim) {
var img=Clazz.new_(1,{T:"net.imglib2.type.logic.NativeBoolType",A:"Object"},$I$(4,1).c$$TA$JA$net_imglib2_util_Fraction,[access, dim, Clazz.new_($I$(5,1).c$$J$J,[1, 64])]);
var t=Clazz.new_($I$(16,1).c$$net_imglib2_img_NativeImg,[img]);
img.setLinkedType$TT(t);
return img;
}, 1);

Clazz.newMeth(C$, 'bits$TA$JA', function (access, dim) {
var img=Clazz.new_(1,{T:"net.imglib2.type.logic.BitType",A:"Object"},$I$(4,1).c$$TA$JA$net_imglib2_util_Fraction,[access, dim, Clazz.new_($I$(5,1).c$$J$J,[1, 64])]);
var t=Clazz.new_($I$(18,1).c$$net_imglib2_img_NativeImg,[img]);
img.setLinkedType$TT(t);
return img;
}, 1);

Clazz.newMeth(C$, 'unsigned2Bits$JA', function (dim) {
return Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.Unsigned2BitType"},$I$(1,1).c$$TT,[Clazz.new_($I$(19,1))]).create$JA(dim);
}, 1);

Clazz.newMeth(C$, 'unsigned2Bits$TA$JA', function (access, dim) {
var img=Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.Unsigned2BitType",A:"Object"},$I$(4,1).c$$TA$JA$net_imglib2_util_Fraction,[access, dim, Clazz.new_($I$(5,1).c$$J$J,[2, 64])]);
var t=Clazz.new_($I$(19,1).c$$net_imglib2_img_NativeImg,[img]);
img.setLinkedType$TT(t);
return img;
}, 1);

Clazz.newMeth(C$, 'unsigned4Bits$JA', function (dim) {
return Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.Unsigned4BitType"},$I$(1,1).c$$TT,[Clazz.new_($I$(20,1))]).create$JA(dim);
}, 1);

Clazz.newMeth(C$, 'unsigned4Bits$TA$JA', function (access, dim) {
var img=Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.Unsigned4BitType",A:"Object"},$I$(4,1).c$$TA$JA$net_imglib2_util_Fraction,[access, dim, Clazz.new_($I$(5,1).c$$J$J,[4, 64])]);
var t=Clazz.new_($I$(20,1).c$$net_imglib2_img_NativeImg,[img]);
img.setLinkedType$TT(t);
return img;
}, 1);

Clazz.newMeth(C$, 'unsigned12Bits$JA', function (dim) {
return Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.Unsigned12BitType"},$I$(1,1).c$$TT,[Clazz.new_($I$(21,1))]).create$JA(dim);
}, 1);

Clazz.newMeth(C$, 'unsigned12Bits$TA$JA', function (access, dim) {
var img=Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.Unsigned12BitType",A:"Object"},$I$(4,1).c$$TA$JA$net_imglib2_util_Fraction,[access, dim, Clazz.new_($I$(5,1).c$$J$J,[12, 64])]);
var t=Clazz.new_($I$(21,1).c$$net_imglib2_img_NativeImg,[img]);
img.setLinkedType$TT(t);
return img;
}, 1);

Clazz.newMeth(C$, 'unsigned128Bits$JA', function (dim) {
return Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.Unsigned128BitType"},$I$(1,1).c$$TT,[Clazz.new_($I$(22,1))]).create$JA(dim);
}, 1);

Clazz.newMeth(C$, 'unsigned128Bits$TA$JA', function (access, dim) {
var img=Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.Unsigned128BitType",A:"Object"},$I$(4,1).c$$TA$JA$net_imglib2_util_Fraction,[access, dim, Clazz.new_($I$(5,1).c$$J$J,[128, 64])]);
var t=Clazz.new_($I$(22,1).c$$net_imglib2_img_NativeImg,[img]);
img.setLinkedType$TT(t);
return img;
}, 1);

Clazz.newMeth(C$, 'unsignedVariableBitLengths$I$JA', function (nbits, dim) {
return Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.UnsignedVariableBitLengthType"},$I$(1,1).c$$TT,[Clazz.new_($I$(23,1).c$$I,[nbits])]).create$JA(dim);
}, 1);

Clazz.newMeth(C$, 'unsignedVariableBitLengths$TA$I$JA', function (access, nbits, dim) {
var img=Clazz.new_(1,{T:"net.imglib2.type.numeric.integer.UnsignedVariableBitLengthType",A:"Object"},$I$(4,1).c$$TA$JA$net_imglib2_util_Fraction,[access, dim, Clazz.new_($I$(5,1).c$$J$J,[nbits, 64])]);
var t=Clazz.new_($I$(23,1).c$$net_imglib2_img_NativeImg$I,[img, nbits]);
img.setLinkedType$TT(t);
return img;
}, 1);

Clazz.newMeth(C$, 'floats$JA', function (dim) {
return Clazz.new_(1,{T:"net.imglib2.type.numeric.real.FloatType"},$I$(1,1).c$$TT,[Clazz.new_($I$(24,1))]).create$JA(dim);
}, 1);

Clazz.newMeth(C$, 'floats$FA$JA', function (array, dim) {
return C$.floats$TA$JA(Clazz.new_($I$(25,1).c$$FA,[array]), dim);
}, 1);

Clazz.newMeth(C$, 'floats$TA$JA', function (access, dim) {
var img=Clazz.new_(1,{T:"net.imglib2.type.numeric.real.FloatType",A:"Object"},$I$(4,1).c$$TA$JA$net_imglib2_util_Fraction,[access, dim, Clazz.new_($I$(5,1))]);
var t=Clazz.new_($I$(24,1).c$$net_imglib2_img_NativeImg,[img]);
img.setLinkedType$TT(t);
return img;
}, 1);

Clazz.newMeth(C$, 'doubles$JA', function (dim) {
return Clazz.new_(1,{T:"net.imglib2.type.numeric.real.DoubleType"},$I$(1,1).c$$TT,[Clazz.new_($I$(26,1))]).create$JA(dim);
}, 1);

Clazz.newMeth(C$, 'doubles$DA$JA', function (array, dim) {
return C$.doubles$TA$JA(Clazz.new_($I$(27,1).c$$DA,[array]), dim);
}, 1);

Clazz.newMeth(C$, 'doubles$TA$JA', function (access, dim) {
var img=Clazz.new_(1,{T:"net.imglib2.type.numeric.real.DoubleType",A:"Object"},$I$(4,1).c$$TA$JA$net_imglib2_util_Fraction,[access, dim, Clazz.new_($I$(5,1))]);
var t=Clazz.new_($I$(26,1).c$$net_imglib2_img_NativeImg,[img]);
img.setLinkedType$TT(t);
return img;
}, 1);

Clazz.newMeth(C$, 'argbs$JA', function (dim) {
return Clazz.new_(1,{T:"net.imglib2.type.numeric.ARGBType"},$I$(1,1).c$$TT,[Clazz.new_($I$(28,1))]).create$JA(dim);
}, 1);

Clazz.newMeth(C$, 'argbs$IA$JA', function (array, dim) {
return C$.argbs$TA$JA(Clazz.new_($I$(11,1).c$$IA,[array]), dim);
}, 1);

Clazz.newMeth(C$, 'argbs$TA$JA', function (access, dim) {
var img=Clazz.new_(1,{T:"net.imglib2.type.numeric.ARGBType",A:"Object"},$I$(4,1).c$$TA$JA$net_imglib2_util_Fraction,[access, dim, Clazz.new_($I$(5,1))]);
var t=Clazz.new_($I$(28,1).c$$net_imglib2_img_NativeImg,[img]);
img.setLinkedType$TT(t);
return img;
}, 1);

Clazz.newMeth(C$, 'complexFloats$JA', function (dim) {
return Clazz.new_(1,{T:"net.imglib2.type.numeric.complex.ComplexFloatType"},$I$(1,1).c$$TT,[Clazz.new_($I$(29,1))]).create$JA(dim);
}, 1);

Clazz.newMeth(C$, 'complexFloats$FA$JA', function (array, dim) {
return C$.complexFloats$TA$JA(Clazz.new_($I$(25,1).c$$FA,[array]), dim);
}, 1);

Clazz.newMeth(C$, 'complexFloats$TA$JA', function (access, dim) {
var img=Clazz.new_(1,{T:"net.imglib2.type.numeric.complex.ComplexFloatType",A:"Object"},$I$(4,1).c$$TA$JA$net_imglib2_util_Fraction,[access, dim, Clazz.new_($I$(5,1).c$$J$J,[2, 1])]);
var t=Clazz.new_($I$(29,1).c$$net_imglib2_img_NativeImg,[img]);
img.setLinkedType$TT(t);
return img;
}, 1);

Clazz.newMeth(C$, 'complexDoubles$JA', function (dim) {
return Clazz.new_(1,{T:"net.imglib2.type.numeric.complex.ComplexDoubleType"},$I$(1,1).c$$TT,[Clazz.new_($I$(30,1))]).create$JA(dim);
}, 1);

Clazz.newMeth(C$, 'complexDoubles$DA$JA', function (array, dim) {
return C$.complexDoubles$TA$JA(Clazz.new_($I$(27,1).c$$DA,[array]), dim);
}, 1);

Clazz.newMeth(C$, 'complexDoubles$TA$JA', function (access, dim) {
var img=Clazz.new_(1,{T:"net.imglib2.type.numeric.complex.ComplexDoubleType",A:"Object"},$I$(4,1).c$$TA$JA$net_imglib2_util_Fraction,[access, dim, Clazz.new_($I$(5,1).c$$J$J,[2, 1])]);
var t=Clazz.new_($I$(30,1).c$$net_imglib2_img_NativeImg,[img]);
img.setLinkedType$TT(t);
return img;
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:07 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
