(function(){var P$=Clazz.newPackage("net.imglib2.type.numeric.integer"),I$=[[0,'net.imglib2.type.NativeTypeFactory','net.imglib2.type.numeric.integer.ByteType','java.math.BigInteger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ByteType", null, 'net.imglib2.type.numeric.integer.GenericByteType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.typeFactory=$I$(1).BYTE$java_util_function_Function((P$.ByteType$lambda1$||(P$.ByteType$lambda1$=(((P$.ByteType$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "ByteType$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (img) { return (Clazz.new_($I$(2,1).c$$net_imglib2_img_NativeImg,[img]));});
})()
), Clazz.new_(1,{T:"net.imglib2.img.NativeImg",R:"net.imglib2.type.numeric.integer.ByteType"},P$.ByteType$lambda1.$init$, [this, null]))))));
}, 1);

C$.$fields$=[['O',['typeFactory','net.imglib2.type.NativeTypeFactory']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_NativeImg', function (img) {
;C$.superclazz.c$$net_imglib2_img_NativeImg.apply(this,[img]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$B', function (value) {
;C$.superclazz.c$$B.apply(this,[($b$[0] = value, $b$[0])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_basictypeaccess_ByteAccess', function (access) {
;C$.superclazz.c$$net_imglib2_img_basictypeaccess_ByteAccess.apply(this,[access]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$B.apply(this,[($b$[0] = 0, $b$[0])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getNativeTypeFactory$', function () {
return this.typeFactory;
});

Clazz.newMeth(C$, 'duplicateTypeOnSameNativeImg$', function () {
return Clazz.new_(C$.c$$net_imglib2_img_NativeImg,[this.img]);
});

Clazz.newMeth(C$, 'get$', function () {
return $b$[0] = this.getByte$(), $b$[0];
});

Clazz.newMeth(C$, ['set$B','setnull'], function (b) {
this.setByte$B(($b$[0] = b, $b$[0]));
});

Clazz.newMeth(C$, 'getInteger$', function () {
return this.get$();
});

Clazz.newMeth(C$, 'getIntegerLong$', function () {
return this.get$();
});

Clazz.newMeth(C$, 'getBigInteger$', function () {
return $I$(3).valueOf$J(this.get$());
});

Clazz.newMeth(C$, 'setInteger$I', function (f) {
this.set$B(($b$[0] = (f|0), $b$[0]));
});

Clazz.newMeth(C$, 'setInteger$J', function (f) {
this.set$B(($b$[0] = (f|0), $b$[0]));
});

Clazz.newMeth(C$, 'setBigInteger$java_math_BigInteger', function (b) {
this.set$B(($b$[0] = b.byteValue$(), $b$[0]));
});

Clazz.newMeth(C$, 'getMaxValue$', function () {
return 127;
});

Clazz.newMeth(C$, 'getMinValue$', function () {
return -128;
});

Clazz.newMeth(C$, 'createVariable$', function () {
return Clazz.new_(C$.c$$B,[($b$[0] = 0, $b$[0])]);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$B,[($b$[0] = this.getByte$(), $b$[0])]);
});
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:12 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
