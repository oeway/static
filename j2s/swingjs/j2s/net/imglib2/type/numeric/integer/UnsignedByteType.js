(function(){var P$=Clazz.newPackage("net.imglib2.type.numeric.integer"),I$=[[0,'net.imglib2.type.NativeTypeFactory','net.imglib2.type.numeric.integer.UnsignedByteType','net.imglib2.util.Util','java.math.BigInteger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "UnsignedByteType", null, 'net.imglib2.type.numeric.integer.GenericByteType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.typeFactory=$I$(1).BYTE$java_util_function_Function((P$.UnsignedByteType$lambda1$||(P$.UnsignedByteType$lambda1$=(((P$.UnsignedByteType$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "UnsignedByteType$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (img) { return (Clazz.new_($I$(2,1).c$$net_imglib2_img_NativeImg,[img]));});
})()
), Clazz.new_(1,{T:"net.imglib2.img.NativeImg",R:"net.imglib2.type.numeric.integer.UnsignedByteType"},P$.UnsignedByteType$lambda1.$init$, [this, null]))))));
}, 1);

C$.$fields$=[['O',['typeFactory','net.imglib2.type.NativeTypeFactory']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_NativeImg', function (img) {
;C$.superclazz.c$$net_imglib2_img_NativeImg.apply(this,[img]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (value) {
;C$.superclazz.c$$B.apply(this,[($b$[0] = C$.getCodedSignedByte$I(value), $b$[0])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_basictypeaccess_ByteAccess', function (access) {
;C$.superclazz.c$$net_imglib2_img_basictypeaccess_ByteAccess.apply(this,[access]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$I.apply(this, [0]);
}, 1);

Clazz.newMeth(C$, 'getCodedSignedByteChecked$I', function (unsignedByte) {
if (unsignedByte < 0) unsignedByte=0;
 else if (unsignedByte > 255) unsignedByte=255;
return $b$[0] = C$.getCodedSignedByte$I(unsignedByte), $b$[0];
}, 1);

Clazz.newMeth(C$, 'getCodedSignedByte$I', function (unsignedByte) {
return $b$[0] = ((unsignedByte & 255)|0), $b$[0];
}, 1);

Clazz.newMeth(C$, 'getUnsignedByte$B', function (signedByte) {
return signedByte & 255;
}, 1);

Clazz.newMeth(C$, 'duplicateTypeOnSameNativeImg$', function () {
return Clazz.new_(C$.c$$net_imglib2_img_NativeImg,[this.img]);
});

Clazz.newMeth(C$, 'getNativeTypeFactory$', function () {
return this.typeFactory;
});

Clazz.newMeth(C$, ['mul$F','mulnull'], function (c) {
var a=C$.getUnsignedByte$B(($b$[0] = this.getByte$(), $b$[0]));
this.setByte$B(($b$[0] = C$.getCodedSignedByte$I($I$(3).round$F(a * c)), $b$[0]));
});

Clazz.newMeth(C$, ['mul$D','mulnull'], function (c) {
var a=C$.getUnsignedByte$B(($b$[0] = this.getByte$(), $b$[0]));
this.setByte$B(($b$[0] = C$.getCodedSignedByte$I(($I$(3).round$D(a * c)|0)), $b$[0]));
});

Clazz.newMeth(C$, ['add$net_imglib2_type_numeric_integer_UnsignedByteType','add$','add$TT'], function (c) {
this.set$I(this.get$() + c.get$());
});

Clazz.newMeth(C$, ['div$net_imglib2_type_numeric_integer_UnsignedByteType','div$','div$TT'], function (c) {
this.set$I((this.get$()/c.get$()|0));
});

Clazz.newMeth(C$, ['mul$net_imglib2_type_numeric_integer_UnsignedByteType','mul$','mul$TT'], function (c) {
this.set$I(this.get$() * c.get$());
});

Clazz.newMeth(C$, ['sub$net_imglib2_type_numeric_integer_UnsignedByteType','sub$','sub$TT'], function (c) {
this.set$I(this.get$() - c.get$());
});

Clazz.newMeth(C$, 'get$', function () {
return C$.getUnsignedByte$B(($b$[0] = this.getByte$(), $b$[0]));
});

Clazz.newMeth(C$, ['set$I','setnull'], function (f) {
this.setByte$B(($b$[0] = C$.getCodedSignedByte$I(f), $b$[0]));
});

Clazz.newMeth(C$, 'getInteger$', function () {
return this.get$();
});

Clazz.newMeth(C$, 'getIntegerLong$', function () {
return this.get$();
});

Clazz.newMeth(C$, 'getBigInteger$', function () {
return $I$(4).valueOf$J(this.get$());
});

Clazz.newMeth(C$, 'setInteger$I', function (f) {
this.set$I(f);
});

Clazz.newMeth(C$, 'setInteger$J', function (f) {
this.set$I((f|0));
});

Clazz.newMeth(C$, 'setBigInteger$java_math_BigInteger', function (b) {
this.set$I(b.intValue$());
});

Clazz.newMeth(C$, 'getMaxValue$', function () {
return 255;
});

Clazz.newMeth(C$, 'getMinValue$', function () {
return 0;
});

Clazz.newMeth(C$, 'createVariable$', function () {
return Clazz.new_(C$.c$$I,[0]);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$I,[this.get$()]);
});

Clazz.newMeth(C$, 'toString', function () {
return "" + this.get$();
});

Clazz.newMeth(C$, ['compareTo$net_imglib2_type_numeric_integer_UnsignedByteType','compareTo$','compareTo$TT'], function (other) {
return Integer.compare$I$I(this.get$(), other.get$());
});
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:12 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
