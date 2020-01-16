(function(){var P$=Clazz.newPackage("net.imglib2.type.numeric.integer"),p$1={},I$=[[0,'net.imglib2.type.NativeTypeFactory','net.imglib2.type.numeric.integer.Unsigned128BitType','net.imglib2.img.basictypeaccess.array.LongArray','java.math.BigInteger','net.imglib2.util.Fraction','java.math.BigDecimal','net.imglib2.util.Util']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Unsigned128BitType", null, 'net.imglib2.type.numeric.integer.AbstractIntegerType', 'net.imglib2.type.NativeType');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.typeFactory=$I$(1).LONG$java_util_function_Function((P$.Unsigned128BitType$lambda1$||(P$.Unsigned128BitType$lambda1$=(((P$.Unsigned128BitType$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Unsigned128BitType$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (img) { return (Clazz.new_($I$(2,1).c$$net_imglib2_img_NativeImg,[img]));});
})()
), Clazz.new_(1,{T:"net.imglib2.img.NativeImg",R:"net.imglib2.type.numeric.integer.Unsigned128BitType"},P$.Unsigned128BitType$lambda1.$init$, [this, null]))))));
}

Clazz.newMeth(C$, '$init$', function () {
this.i=0;
this.bytes=Clazz.array(Byte.TYPE, [17]);
}, 1);

C$.$fields$=[['I',['i'],'O',['img','net.imglib2.img.NativeImg','bytes','byte[]','dataAccess','net.imglib2.img.basictypeaccess.LongAccess']]
,['O',['typeFactory','net.imglib2.type.NativeTypeFactory']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_NativeImg', function (bitStorage) {
Clazz.super_(C$, this);
this.img=bitStorage;
}, 1);

Clazz.newMeth(C$, 'c$$J$J', function (lower, upper) {
C$.c$$net_imglib2_img_NativeImg.apply(this, [null]);
this.dataAccess=Clazz.new_($I$(3,1).c$$I,[2]);
this.set$J$J(lower, upper);
}, 1);

Clazz.newMeth(C$, 'c$$java_math_BigInteger', function (value) {
C$.c$$net_imglib2_img_NativeImg.apply(this, [null]);
this.dataAccess=Clazz.new_($I$(3,1).c$$I,[2]);
this.set$java_math_BigInteger(value);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_basictypeaccess_LongAccess', function (access) {
C$.c$$net_imglib2_img_NativeImg.apply(this, [null]);
this.dataAccess=access;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$J$J.apply(this, [0, 0]);
}, 1);

Clazz.newMeth(C$, 'updateContainer$O', function (c) {
this.dataAccess=this.img.update$O(c);
});

Clazz.newMeth(C$, 'duplicateTypeOnSameNativeImg$', function () {
return Clazz.new_(C$.c$$net_imglib2_img_NativeImg,[this.img]);
});

Clazz.newMeth(C$, 'getNativeTypeFactory$', function () {
return C$.typeFactory;
});

Clazz.newMeth(C$, 'intoBytes$J$J', function (lower, upper) {
this.bytes[0]=(0|0);
this.bytes[1]=((((upper >>> 56) & 255)|0)|0);
this.bytes[2]=((((upper >>> 48) & 255)|0)|0);
this.bytes[3]=((((upper >>> 40) & 255)|0)|0);
this.bytes[4]=((((upper >>> 32) & 255)|0)|0);
this.bytes[5]=((((upper >>> 24) & 255)|0)|0);
this.bytes[6]=((((upper >>> 16) & 255)|0)|0);
this.bytes[7]=((((upper >>> 8) & 255)|0)|0);
this.bytes[8]=(((upper & 255)|0)|0);
this.bytes[9]=((((lower >>> 56) & 255)|0)|0);
this.bytes[10]=((((lower >>> 48) & 255)|0)|0);
this.bytes[11]=((((lower >>> 40) & 255)|0)|0);
this.bytes[12]=((((lower >>> 32) & 255)|0)|0);
this.bytes[13]=((((lower >>> 24) & 255)|0)|0);
this.bytes[14]=((((lower >>> 16) & 255)|0)|0);
this.bytes[15]=((((lower >>> 8) & 255)|0)|0);
this.bytes[16]=(((lower & 255)|0)|0);
}, p$1);

Clazz.newMeth(C$, ['set$BA','setnull'], function (bytes) {
var k=this.i * 2;
var b=bytes.length - 1;
for (var offset=0; offset < 2; ++offset) {
var cut=Math.max(-1, b - 8);
var u=0;
for (var p=0; b > cut; --b, p+=8) {
u|=(bytes[b] & 255) << p;
}
this.dataAccess.setValue$I$J(k + offset, u);
}
});

Clazz.newMeth(C$, 'get$', function () {
var k=this.i * 2;
p$1.intoBytes$J$J.apply(this, [this.dataAccess.getValue$I(k), this.dataAccess.getValue$I(k + 1)]);
return Clazz.new_($I$(4,1).c$$BA,[this.bytes]);
});

Clazz.newMeth(C$, ['set$java_math_BigInteger','setnull'], function (value) {
this.set$BA(value.toByteArray$());
});

Clazz.newMeth(C$, 'set$J$J', function (lower, upper) {
var k=this.i * 2;
this.dataAccess.setValue$I$J(k, lower);
this.dataAccess.setValue$I$J(k + 1, upper);
});

Clazz.newMeth(C$, 'getInteger$', function () {
return (this.dataAccess.getValue$I(this.i * 2)|0);
});

Clazz.newMeth(C$, 'getIntegerLong$', function () {
return this.dataAccess.getValue$I(this.i * 2);
});

Clazz.newMeth(C$, 'getBigInteger$', function () {
return this.get$();
});

Clazz.newMeth(C$, 'setInteger$I', function (value) {
var k=this.i * 2;
this.dataAccess.setValue$I$J(k, value);
this.dataAccess.setValue$I$J(k + 1, 0);
});

Clazz.newMeth(C$, 'setInteger$J', function (value) {
var k=this.i * 2;
this.dataAccess.setValue$I$J(k, value);
this.dataAccess.setValue$I$J(k + 1, 0);
});

Clazz.newMeth(C$, 'setBigInteger$java_math_BigInteger', function (b) {
this.set$java_math_BigInteger(b);
});

Clazz.newMeth(C$, 'getMaxValue$', function () {
return Math.pow(2, 128) - 1;
});

Clazz.newMeth(C$, 'getMaxBigIntegerValue$', function () {
this.bytes[0]=(0|0);
for (var b=1; b < this.bytes.length; ++b) {
this.bytes[b]=(-1|0);
}
return Clazz.new_($I$(4,1).c$$BA,[this.bytes]);
});

Clazz.newMeth(C$, 'getMinValue$', function () {
return 0;
});

Clazz.newMeth(C$, 'getIndex$', function () {
return this.i;
});

Clazz.newMeth(C$, 'updateIndex$I', function (index) {
this.i=index;
});

Clazz.newMeth(C$, 'incIndex$', function () {
++this.i;
});

Clazz.newMeth(C$, 'incIndex$I', function (increment) {
this.i+=increment;
});

Clazz.newMeth(C$, 'decIndex$', function () {
--this.i;
});

Clazz.newMeth(C$, 'decIndex$I', function (decrement) {
this.i-=decrement;
});

Clazz.newMeth(C$, 'createVariable$', function () {
return Clazz.new_(C$);
});

Clazz.newMeth(C$, 'copy$', function () {
var copy=Clazz.new_(C$);
var k=this.i * 2;
copy.set$J$J(this.dataAccess.getValue$I(k), this.dataAccess.getValue$I(k + 1));
return copy;
});

Clazz.newMeth(C$, 'getEntitiesPerPixel$', function () {
return Clazz.new_($I$(5,1).c$$J$J,[2, 1]);
});

Clazz.newMeth(C$, 'getBitsPerPixel$', function () {
return 128;
});

Clazz.newMeth(C$, 'inc$', function () {
var k=this.i * 2;
var lower=this.dataAccess.getValue$I(k);
if (-1 == lower) {
this.dataAccess.setValue$I$J(k, 0);
var upper=this.dataAccess.getValue$I(k + 1);
if (-1 == upper) {
this.dataAccess.setValue$I$J(k + 1, 0);
} else {
this.dataAccess.setValue$I$J(k + 1, upper + 1);
}} else {
this.dataAccess.setValue$I$J(k, lower + 1);
}});

Clazz.newMeth(C$, 'dec$', function () {
var k=this.i * 2;
var lower=this.dataAccess.getValue$I(k);
if (0 == lower) {
this.dataAccess.setValue$I$J(k, -1);
var upper=this.dataAccess.getValue$I(k + 1);
if (0 == upper) {
this.dataAccess.setValue$I$J(k + 1, -1);
} else {
this.dataAccess.setValue$I$J(k + 1, upper - 1);
}} else {
this.dataAccess.setValue$I$J(k, lower - 1);
}});

Clazz.newMeth(C$, 'setZero$', function () {
this.set$J$J(0, 0);
});

Clazz.newMeth(C$, 'setOne$', function () {
this.set$J$J(1, 0);
});

Clazz.newMeth(C$, ['mul$F','mulnull'], function (c) {
this.mul$D(c);
});

Clazz.newMeth(C$, ['mul$D','mulnull'], function (c) {
this.set$java_math_BigInteger(Clazz.new_($I$(6,1).c$$java_math_BigInteger,[this.get$()]).multiply$java_math_BigDecimal(Clazz.new_($I$(6,1).c$$D,[c])).toBigInteger$());
});

Clazz.newMeth(C$, ['add$net_imglib2_type_numeric_integer_Unsigned128BitType','add$','add$TT'], function (t) {
this.set$BA(this.get$().add$java_math_BigInteger(t.get$()).toByteArray$());
});

Clazz.newMeth(C$, ['sub$net_imglib2_type_numeric_integer_Unsigned128BitType','sub$','sub$TT'], function (t) {
this.set$BA(this.get$().subtract$java_math_BigInteger(t.get$()).toByteArray$());
});

Clazz.newMeth(C$, ['mul$net_imglib2_type_numeric_integer_Unsigned128BitType','mul$','mul$TT'], function (t) {
this.set$BA(this.get$().multiply$java_math_BigInteger(t.get$()).toByteArray$());
});

Clazz.newMeth(C$, ['div$net_imglib2_type_numeric_integer_Unsigned128BitType','div$','div$TT'], function (t) {
this.set$BA(this.get$().divide$java_math_BigInteger(t.get$()).toByteArray$());
});

Clazz.newMeth(C$, ['compareTo$net_imglib2_type_numeric_integer_Unsigned128BitType','compareTo$','compareTo$TT'], function (t) {
var upper1=this.dataAccess.getValue$I(this.i * 2 + 1);
var upper2=t.dataAccess.getValue$I(t.i * 2 + 1);
var compareUpper=Long.compareUnsigned$J$J(upper1, upper2);
if (compareUpper != 0) return compareUpper;
var lower1=this.dataAccess.getValue$I(this.i * 2);
var lower2=t.dataAccess.getValue$I(t.i * 2);
return Long.compareUnsigned$J$J(lower1, lower2);
});

Clazz.newMeth(C$, ['valueEquals$net_imglib2_type_numeric_integer_Unsigned128BitType','valueEquals$','valueEquals$TT'], function (t) {
var k=this.i * 2;
var kt=t.i * 2;
return (this.dataAccess.getValue$I(k) == t.dataAccess.getValue$I(kt)) && (this.dataAccess.getValue$I(k + 1) == t.dataAccess.getValue$I(kt + 1)) ;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
return $I$(7).valueEqualsObject$TT$O(this, obj);
});

Clazz.newMeth(C$, 'hashCode$', function () {
var k=this.i * 2;
var hash1=Long.hashCode$J(this.dataAccess.getValue$I(k + 1));
var hash2=Long.hashCode$J(this.dataAccess.getValue$I(k));
return $I$(7).combineHash$I$I(hash1, hash2);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:12 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
