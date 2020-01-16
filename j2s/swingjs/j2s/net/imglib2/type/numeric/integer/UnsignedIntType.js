(function(){var P$=Clazz.newPackage("net.imglib2.type.numeric.integer"),I$=[[0,'net.imglib2.type.NativeTypeFactory','net.imglib2.type.numeric.integer.UnsignedIntType','net.imglib2.util.Util','java.math.BigInteger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "UnsignedIntType", null, 'net.imglib2.type.numeric.integer.GenericIntType');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.uia=new Uint32Array(1) ||null;
C$.typeFactory=$I$(1).INT$java_util_function_Function((P$.UnsignedIntType$lambda1$||(P$.UnsignedIntType$lambda1$=(((P$.UnsignedIntType$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "UnsignedIntType$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (img) { return (Clazz.new_($I$(2,1).c$$net_imglib2_img_NativeImg,[img]));});
})()
), Clazz.new_(1,{T:"net.imglib2.img.NativeImg",R:"net.imglib2.type.numeric.integer.UnsignedIntType"},P$.UnsignedIntType$lambda1.$init$, [this, null]))))));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['uia','long[]','typeFactory','net.imglib2.type.NativeTypeFactory']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_NativeImg', function (img) {
;C$.superclazz.c$$net_imglib2_img_NativeImg.apply(this,[img]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$J', function (value) {
;C$.superclazz.c$$I.apply(this,[C$.getCodedSignedInt$J(value)]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_basictypeaccess_IntAccess', function (access) {
;C$.superclazz.c$$net_imglib2_img_basictypeaccess_IntAccess.apply(this,[access]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$J.apply(this, [0]);
}, 1);

Clazz.newMeth(C$, 'getCodedSignedIntChecked$J', function (unsignedInt) {
if (unsignedInt < 0) unsignedInt=0;
 else if (unsignedInt > 4294967295) unsignedInt=4294967295;
return C$.getCodedSignedInt$J(unsignedInt);
}, 1);

Clazz.newMeth(C$, 'getCodedSignedInt$J', function (unsignedInt) {
return (unsignedInt|0);
}, 1);

Clazz.newMeth(C$, 'getUnsignedInt$I', function (signedInt) {
{
return C$.uia[0] = signedInt, C$.uia[0];
}
}, 1);

Clazz.newMeth(C$, 'duplicateTypeOnSameNativeImg$', function () {
return Clazz.new_(C$.c$$net_imglib2_img_NativeImg,[this.img]);
});

Clazz.newMeth(C$, 'getNativeTypeFactory$', function () {
return C$.typeFactory;
});

Clazz.newMeth(C$, ['mul$F','mulnull'], function (c) {
var a=C$.getUnsignedInt$I(this.getInt$());
this.setInt$I(C$.getCodedSignedInt$J($I$(3).round$F(a * c)));
});

Clazz.newMeth(C$, ['mul$D','mulnull'], function (c) {
var a=C$.getUnsignedInt$I(this.getInt$());
this.setInt$I(C$.getCodedSignedInt$J(($I$(3).round$D(a * c)|0)));
});

Clazz.newMeth(C$, ['add$net_imglib2_type_numeric_integer_UnsignedIntType','add$','add$TT'], function (c) {
this.set$J(this.get$() + c.get$());
});

Clazz.newMeth(C$, ['div$net_imglib2_type_numeric_integer_UnsignedIntType','div$','div$TT'], function (c) {
this.set$J((this.get$()/c.get$()|0));
});

Clazz.newMeth(C$, ['mul$net_imglib2_type_numeric_integer_UnsignedIntType','mul$','mul$TT'], function (c) {
this.set$J(this.get$() * c.get$());
});

Clazz.newMeth(C$, ['sub$net_imglib2_type_numeric_integer_UnsignedIntType','sub$','sub$TT'], function (c) {
this.set$J(this.get$() - c.get$());
});

Clazz.newMeth(C$, 'setOne$', function () {
this.set$J(1);
});

Clazz.newMeth(C$, 'setZero$', function () {
this.set$J(0);
});

Clazz.newMeth(C$, 'inc$', function () {
this.set$J(this.get$() + 1);
});

Clazz.newMeth(C$, 'dec$', function () {
this.set$J(this.get$() - 1);
});

Clazz.newMeth(C$, 'toString', function () {
return "" + this.get$();
});

Clazz.newMeth(C$, 'get$', function () {
return C$.getUnsignedInt$I(this.getInt$());
});

Clazz.newMeth(C$, ['set$J','setnull'], function (f) {
this.setInt$I(C$.getCodedSignedInt$J(f));
});

Clazz.newMeth(C$, 'getInteger$', function () {
return (this.get$()|0);
});

Clazz.newMeth(C$, 'getIntegerLong$', function () {
return this.get$();
});

Clazz.newMeth(C$, 'getBigInteger$', function () {
return $I$(4).valueOf$J(this.get$());
});

Clazz.newMeth(C$, 'setInteger$I', function (f) {
this.set$J(f);
});

Clazz.newMeth(C$, 'setInteger$J', function (f) {
this.set$J(f);
});

Clazz.newMeth(C$, 'setBigInteger$java_math_BigInteger', function (b) {
this.set$J(b.longValue$());
});

Clazz.newMeth(C$, 'getMaxValue$', function () {
return 4294967295;
});

Clazz.newMeth(C$, 'getMinValue$', function () {
return 0;
});

Clazz.newMeth(C$, 'createVariable$', function () {
return Clazz.new_(C$.c$$J,[0]);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$J,[this.get$()]);
});

Clazz.newMeth(C$, ['compareTo$net_imglib2_type_numeric_integer_UnsignedIntType','compareTo$','compareTo$TT'], function (other) {
return Long.compare$J$J(this.get$(), other.get$());
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:12 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
