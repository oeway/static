(function(){var P$=Clazz.newPackage("net.imglib2.type.numeric.integer"),I$=[[0,'net.imglib2.type.NativeTypeFactory','net.imglib2.type.numeric.integer.Unsigned4BitType','net.imglib2.img.basictypeaccess.array.LongArray']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Unsigned4BitType", null, 'net.imglib2.type.numeric.integer.AbstractIntegerBitType');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.typeFactory=$I$(1).LONG$java_util_function_Function((P$.Unsigned4BitType$lambda1$||(P$.Unsigned4BitType$lambda1$=(((P$.Unsigned4BitType$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "Unsigned4BitType$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (img) { return (Clazz.new_($I$(2,1).c$$net_imglib2_img_NativeImg,[img]));});
})()
), Clazz.new_(1,{T:"net.imglib2.img.NativeImg",R:"net.imglib2.type.numeric.integer.Unsigned4BitType"},P$.Unsigned4BitType$lambda1.$init$, [this, null]))))));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['typeFactory','net.imglib2.type.NativeTypeFactory']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_NativeImg', function (bitStorage) {
;C$.superclazz.c$$net_imglib2_img_NativeImg$I.apply(this,[bitStorage, 4]);C$.$init$.apply(this);
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
return (this.dataAccess.getValue$I(((this.i >>> 4)|0)) >>> ((this.i & 15) << 2)) & 15;
});

Clazz.newMeth(C$, ['set$J','setnull'], function (value) {
var i1=((this.i >>> 4)|0);
var shift=(this.i << 2) & 63;
var bitsToRetain=~(15 << shift);
var bitsToSet=(value & 15) << shift;
{
this.dataAccess.setValue$I$J(i1, (this.dataAccess.getValue$I(i1) & bitsToRetain) | bitsToSet);
}});

Clazz.newMeth(C$, 'createVariable$', function () {
return Clazz.new_(C$.c$$J,[0]);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$J,[this.get$()]);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:12 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
