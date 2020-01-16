(function(){var P$=Clazz.newPackage("net.imglib2.type.numeric.integer"),I$=[[0,'net.imglib2.type.NativeTypeFactory','net.imglib2.type.numeric.integer.UnsignedLongType','net.imglib2.img.basictypeaccess.array.LongArray','net.imglib2.util.Util','java.math.BigInteger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "UnsignedLongType", null, 'net.imglib2.type.numeric.integer.GenericLongType');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.MAX_VALUE_PLUS_ONE=Math.pow(2, 64);
C$.typeFactory=$I$(1).LONG$java_util_function_Function((P$.UnsignedLongType$lambda1$||(P$.UnsignedLongType$lambda1$=(((P$.UnsignedLongType$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "UnsignedLongType$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (img) { return (Clazz.new_($I$(2,1).c$$net_imglib2_img_NativeImg,[img]));});
})()
), Clazz.new_(1,{T:"net.imglib2.img.NativeImg",R:"net.imglib2.type.numeric.integer.UnsignedLongType"},P$.UnsignedLongType$lambda1.$init$, [this, null]))))));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['D',['MAX_VALUE_PLUS_ONE'],'O',['typeFactory','net.imglib2.type.NativeTypeFactory']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_NativeImg', function (img) {
;C$.superclazz.c$$net_imglib2_img_NativeImg.apply(this,[img]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$J', function (value) {
;C$.superclazz.c$$J.apply(this,[value]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$java_math_BigInteger', function (value) {
;C$.superclazz.c$$net_imglib2_img_NativeImg.apply(this,[null]);C$.$init$.apply(this);
this.dataAccess=Clazz.new_($I$(3,1).c$$I,[1]);
this.set$J(value.longValue$());
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_basictypeaccess_LongAccess', function (access) {
;C$.superclazz.c$$net_imglib2_img_basictypeaccess_LongAccess.apply(this,[access]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$J.apply(this, [0]);
}, 1);

Clazz.newMeth(C$, 'duplicateTypeOnSameNativeImg$', function () {
return Clazz.new_(C$.c$$net_imglib2_img_NativeImg,[this.img]);
});

Clazz.newMeth(C$, 'getNativeTypeFactory$', function () {
return C$.typeFactory;
});

Clazz.newMeth(C$, ['mul$F','mulnull'], function (c) {
this.set$J($I$(4).round$D((this.get$() * c)));
});

Clazz.newMeth(C$, ['mul$D','mulnull'], function (c) {
this.set$J($I$(4).round$D((this.get$() * c)));
});

Clazz.newMeth(C$, ['add$net_imglib2_type_numeric_integer_UnsignedLongType','add$','add$TT'], function (c) {
this.set$J(this.get$() + c.get$());
});

Clazz.newMeth(C$, ['div$net_imglib2_type_numeric_integer_UnsignedLongType','div$','div$TT'], function (c) {
this.set$J(C$.divide$J$J(this.get$(), c.get$()));
});

Clazz.newMeth(C$, 'divide$J$J', function (d1, d2) {
if (d2 < 0) {
if (Long.compareUnsigned$J$J(d1, d2) < 0) {
return 0;
} else {
return 1;
}}if (d1 < 0) {
var quotient=(((d1 >>> 1)/d2|0)) << 1;
var reminder=d1 - quotient * d2;
return quotient + (Long.compareUnsigned$J$J(d2, reminder) < 0 ? 0 : 1);
}return (d1/d2|0);
}, 1);

Clazz.newMeth(C$, ['mul$net_imglib2_type_numeric_integer_UnsignedLongType','mul$','mul$TT'], function (c) {
this.set$J(this.get$() * c.get$());
});

Clazz.newMeth(C$, ['sub$net_imglib2_type_numeric_integer_UnsignedLongType','sub$','sub$TT'], function (c) {
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
return this.dataAccess.getValue$I(this.i);
});

Clazz.newMeth(C$, 'getBigInteger$', function () {
var mask=Clazz.new_($I$(5,1).c$$S$I,["FFFFFFFFFFFFFFFF", 16]);
return $I$(5).valueOf$J(this.get$()).and$java_math_BigInteger(mask);
});

Clazz.newMeth(C$, ['set$J','setnull'], function (value) {
this.dataAccess.setValue$I$J(this.i, value);
});

Clazz.newMeth(C$, 'getInteger$', function () {
return (this.get$()|0);
});

Clazz.newMeth(C$, 'getIntegerLong$', function () {
return this.get$();
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

Clazz.newMeth(C$, ['set$java_math_BigInteger','setnull'], function (bi) {
this.set$J(bi.longValue$());
});

Clazz.newMeth(C$, 'getMaxValue$', function () {
return C$.MAX_VALUE_PLUS_ONE - 1;
});

Clazz.newMeth(C$, 'getMaxBigIntegerValue$', function () {
return Clazz.new_($I$(5,1).c$$S$I,["+FFFFFFFFFFFFFFFF", 16]);
});

Clazz.newMeth(C$, 'getMinValue$', function () {
return 0;
});

Clazz.newMeth(C$, 'compare$J$J', function (a, b) {
if (a == b) return 0;
 else {
var test=(a < b);
if ((a < 0) != (b < 0) ) {
test=!test;
}return test ? -1 : 1;
}}, 1);

Clazz.newMeth(C$, 'createVariable$', function () {
return Clazz.new_(C$.c$$J,[0]);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$J,[this.get$()]);
});

Clazz.newMeth(C$, 'getRealFloat$', function () {
var l=this.get$();
return l >= 0 ? l : (C$.MAX_VALUE_PLUS_ONE + l);
});

Clazz.newMeth(C$, 'getRealDouble$', function () {
var l=this.get$();
return l >= 0 ? l : (C$.MAX_VALUE_PLUS_ONE + l);
});

Clazz.newMeth(C$, ['compareTo$net_imglib2_type_numeric_integer_UnsignedLongType','compareTo$','compareTo$TT'], function (other) {
return Long.compareUnsigned$J$J(this.get$(), other.get$());
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:12 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
