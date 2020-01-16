(function(){var P$=Clazz.newPackage("net.imglib2.type.numeric.integer"),I$=[[0,'net.imglib2.type.NativeTypeFactory','net.imglib2.type.numeric.integer.Unsigned12BitType','net.imglib2.img.basictypeaccess.array.LongArray']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Unsigned12BitType", null, 'net.imglib2.type.numeric.integer.AbstractIntegerBitType');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.typeFactory=$I$(1).LONG$java_util_function_Function((P$.Unsigned12BitType$lambda1$||(P$.Unsigned12BitType$lambda1$=(((P$.Unsigned12BitType$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Unsigned12BitType$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (img) { return (Clazz.new_($I$(2,1).c$$net_imglib2_img_NativeImg,[img]));});
})()
), Clazz.new_(1,{T:"net.imglib2.img.NativeImg",R:"net.imglib2.type.numeric.integer.Unsigned12BitType"},P$.Unsigned12BitType$lambda1.$init$, [this, null]))))));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['L',['mask']]
,['O',['typeFactory','net.imglib2.type.NativeTypeFactory']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_NativeImg', function (bitStorage) {
;C$.superclazz.c$$net_imglib2_img_NativeImg$I.apply(this,[bitStorage, 12]);C$.$init$.apply(this);
this.mask=4095;
}, 1);

Clazz.newMeth(C$, 'c$$J', function (value) {
C$.c$$net_imglib2_img_NativeImg.apply(this, [null]);
this.dataAccess=Clazz.new_($I$(3,1).c$$I,[1]);
this.set$J(value);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_basictypeaccess_LongAccess', function (access) {
C$.c$$net_imglib2_img_NativeImg.apply(this, [null]);
this.dataAccess=access;
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

Clazz.newMeth(C$, 'get$', function () {
var k=this.i * 12;
var i1=((k >>> 6)|0);
var shift=k & 63;
var v=this.dataAccess.getValue$I(i1);
var antiShift=64 - shift;
if (antiShift < 12) {
var v1=(v >>> shift) & (this.mask >>> (12 - antiShift));
var v2=(this.dataAccess.getValue$I(i1 + 1) & (this.mask >>> antiShift)) << antiShift;
return v1 | v2;
} else {
return (v >>> shift) & this.mask;
}});

Clazz.newMeth(C$, ['set$J','setnull'], function (value) {
var k=this.i * 12;
var i1=((k >>> 6)|0);
var shift=k & 63;
var safeValue=value & this.mask;
var antiShift=64 - shift;
{
var v=this.dataAccess.getValue$I(i1);
if (antiShift < 12) {
var v1=(v & (-1 >>> antiShift)) | ((safeValue & (this.mask >>> (12 - antiShift))) << shift);
this.dataAccess.setValue$I$J(i1, v1);
var v2=(this.dataAccess.getValue$I(i1 + 1) & (-1 << (12 - antiShift))) | (safeValue >>> antiShift);
this.dataAccess.setValue$I$J(i1 + 1, v2);
} else {
if (0 == v) {
this.dataAccess.setValue$I$J(i1, safeValue << shift);
} else {
this.dataAccess.setValue$I$J(i1, (v & ~(this.mask << shift)) | (safeValue << shift));
}}}});

Clazz.newMeth(C$, 'createVariable$', function () {
return Clazz.new_(C$.c$$J,[0]);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$J,[this.get$()]);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:12 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
