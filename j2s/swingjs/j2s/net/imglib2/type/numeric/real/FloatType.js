(function(){var P$=Clazz.newPackage("net.imglib2.type.numeric.real"),I$=[[0,'net.imglib2.type.NativeTypeFactory','net.imglib2.type.numeric.real.FloatType','net.imglib2.img.basictypeaccess.array.FloatArray','net.imglib2.util.Fraction','net.imglib2.util.Util']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FloatType", null, 'net.imglib2.type.numeric.real.AbstractRealType', 'net.imglib2.type.NativeType');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.typeFactory=$I$(1).FLOAT$java_util_function_Function((P$.FloatType$lambda1$||(P$.FloatType$lambda1$=(((P$.FloatType$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "FloatType$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (img) { return (Clazz.new_($I$(2,1).c$$net_imglib2_img_NativeImg,[img]));});
})()
), Clazz.new_(1,{T:"net.imglib2.img.NativeImg",R:"net.imglib2.type.numeric.real.FloatType"},P$.FloatType$lambda1.$init$, [this, null]))))));
}

Clazz.newMeth(C$, '$init$', function () {
this.i=0;
}, 1);

C$.$fields$=[['I',['i'],'O',['img','net.imglib2.img.NativeImg','dataAccess','net.imglib2.img.basictypeaccess.FloatAccess']]
,['O',['typeFactory','net.imglib2.type.NativeTypeFactory']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_NativeImg', function (floatStorage) {
Clazz.super_(C$, this);
this.img=floatStorage;
}, 1);

Clazz.newMeth(C$, 'c$$F', function (value) {
Clazz.super_(C$, this);
this.img=null;
this.dataAccess=Clazz.new_($I$(3,1).c$$I,[1]);
this.set$F(value);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_basictypeaccess_FloatAccess', function (access) {
Clazz.super_(C$, this);
this.img=null;
this.dataAccess=access;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$F.apply(this, [0]);
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

Clazz.newMeth(C$, 'get$', function () {
return this.dataAccess.getValue$I(this.i);
});

Clazz.newMeth(C$, ['set$F','setnull'], function (f) {
this.dataAccess.setValue$I$F(this.i, f);
});

Clazz.newMeth(C$, 'getRealFloat$', function () {
return this.get$();
});

Clazz.newMeth(C$, 'getRealDouble$', function () {
return this.get$();
});

Clazz.newMeth(C$, 'setReal$F', function (real) {
this.set$F(real);
});

Clazz.newMeth(C$, 'setReal$D', function (real) {
this.set$F(real);
});

Clazz.newMeth(C$, 'getMaxValue$', function () {
return 3.4028235E38;
});

Clazz.newMeth(C$, 'getMinValue$', function () {
return -3.4028235E38;
});

Clazz.newMeth(C$, 'getMinIncrement$', function () {
return 1.4E-45;
});

Clazz.newMeth(C$, ['mul$F','mulnull'], function (c) {
this.set$F(this.get$() * c);
});

Clazz.newMeth(C$, ['mul$D','mulnull'], function (c) {
this.set$F((this.get$() * c));
});

Clazz.newMeth(C$, ['add$net_imglib2_type_numeric_real_FloatType','add$','add$TT'], function (c) {
this.set$F(this.get$() + c.get$());
});

Clazz.newMeth(C$, ['div$net_imglib2_type_numeric_real_FloatType','div$','div$TT'], function (c) {
this.set$F(this.get$() / c.get$());
});

Clazz.newMeth(C$, ['mul$net_imglib2_type_numeric_real_FloatType','mul$','mul$TT'], function (c) {
this.set$F(this.get$() * c.get$());
});

Clazz.newMeth(C$, ['sub$net_imglib2_type_numeric_real_FloatType','sub$','sub$TT'], function (c) {
this.set$F(this.get$() - c.get$());
});

Clazz.newMeth(C$, ['set$net_imglib2_type_numeric_real_FloatType','set$TT'], function (c) {
this.set$F(c.get$());
});

Clazz.newMeth(C$, 'setOne$', function () {
this.set$F(1);
});

Clazz.newMeth(C$, 'setZero$', function () {
this.set$F(0);
});

Clazz.newMeth(C$, 'inc$', function () {
var a=this.get$();
this.set$F(++a);
});

Clazz.newMeth(C$, 'dec$', function () {
var a=this.get$();
this.set$F(--a);
});

Clazz.newMeth(C$, 'createVariable$', function () {
return Clazz.new_(C$.c$$F,[0]);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$F,[this.get$()]);
});

Clazz.newMeth(C$, 'getEntitiesPerPixel$', function () {
return Clazz.new_($I$(4,1));
});

Clazz.newMeth(C$, 'updateIndex$I', function (index) {
this.i=index;
});

Clazz.newMeth(C$, 'getIndex$', function () {
return this.i;
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

Clazz.newMeth(C$, 'getBitsPerPixel$', function () {
return 32;
});

Clazz.newMeth(C$, ['compareTo$net_imglib2_type_numeric_real_FloatType','compareTo$','compareTo$TT'], function (other) {
return Float.compare$F$F(this.get$(), other.get$());
});

Clazz.newMeth(C$, ['valueEquals$net_imglib2_type_numeric_real_FloatType','valueEquals$','valueEquals$TT'], function (other) {
return C$.equals$F$F(this.get$(), other.get$());
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
return $I$(5).valueEqualsObject$TT$O(this, obj);
});

Clazz.newMeth(C$, 'hashCode$', function () {
return Float.hashCode$F(this.get$());
});

Clazz.newMeth(C$, 'equals$F$F', function (a, b) {
return Float.floatToIntBits$F(a) == Float.floatToIntBits$F(b);
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:12 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
