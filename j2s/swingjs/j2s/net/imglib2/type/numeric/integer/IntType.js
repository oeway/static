(function(){var P$=Clazz.newPackage("net.imglib2.type.numeric.integer"),I$=[[0,'net.imglib2.type.NativeTypeFactory','net.imglib2.type.numeric.integer.IntType','java.math.BigInteger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IntType", null, 'net.imglib2.type.numeric.integer.GenericIntType');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.typeFactory=$I$(1).INT$java_util_function_Function((P$.IntType$lambda1$||(P$.IntType$lambda1$=(((P$.IntType$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "IntType$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (img) { return (Clazz.new_($I$(2,1).c$$net_imglib2_img_NativeImg,[img]));});
})()
), Clazz.new_(1,{T:"net.imglib2.img.NativeImg",R:"net.imglib2.type.numeric.integer.IntType"},P$.IntType$lambda1.$init$, [this, null]))))));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['typeFactory','net.imglib2.type.NativeTypeFactory']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_NativeImg', function (img) {
;C$.superclazz.c$$net_imglib2_img_NativeImg.apply(this,[img]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (value) {
;C$.superclazz.c$$I.apply(this,[value]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_basictypeaccess_IntAccess', function (access) {
;C$.superclazz.c$$net_imglib2_img_basictypeaccess_IntAccess.apply(this,[access]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$I.apply(this,[0]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'duplicateTypeOnSameNativeImg$', function () {
return Clazz.new_(C$.c$$net_imglib2_img_NativeImg,[this.img]);
});

Clazz.newMeth(C$, 'getNativeTypeFactory$', function () {
return C$.typeFactory;
});

Clazz.newMeth(C$, 'get$', function () {
return this.getInt$();
});

Clazz.newMeth(C$, ['set$I','setnull'], function (b) {
this.setInt$I(b);
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
this.set$I(f);
});

Clazz.newMeth(C$, 'setInteger$J', function (f) {
this.set$I((f|0));
});

Clazz.newMeth(C$, 'setBigInteger$java_math_BigInteger', function (b) {
this.set$I(b.intValue$());
});

Clazz.newMeth(C$, 'getMaxValue$', function () {
return 2147483647;
});

Clazz.newMeth(C$, 'getMinValue$', function () {
return -2147483648;
});

Clazz.newMeth(C$, 'createVariable$', function () {
return Clazz.new_(C$.c$$I,[0]);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$I,[this.getInt$()]);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:12 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
