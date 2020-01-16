(function(){var P$=Clazz.newPackage("net.imglib2.type.numeric.real"),I$=[[0,'net.imglib2.type.NativeTypeFactory','net.imglib2.type.numeric.real.DoubleType','net.imglib2.img.basictypeaccess.array.DoubleArray','net.imglib2.util.Fraction']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DoubleType", null, 'net.imglib2.type.numeric.real.AbstractRealType', 'net.imglib2.type.NativeType');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.typeFactory=$I$(1).DOUBLE$java_util_function_Function((P$.DoubleType$lambda1$||(P$.DoubleType$lambda1$=(((P$.DoubleType$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "DoubleType$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (img) { return (Clazz.new_($I$(2,1).c$$net_imglib2_img_NativeImg,[img]));});
})()
), Clazz.new_(1,{T:"net.imglib2.img.NativeImg",R:"net.imglib2.type.numeric.real.DoubleType"},P$.DoubleType$lambda1.$init$, [this, null]))))));
}

Clazz.newMeth(C$, '$init$', function () {
this.i=0;
}, 1);

C$.$fields$=[['I',['i'],'O',['img','net.imglib2.img.NativeImg','dataAccess','net.imglib2.img.basictypeaccess.DoubleAccess']]
,['O',['typeFactory','net.imglib2.type.NativeTypeFactory']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_NativeImg', function (doubleStorage) {
Clazz.super_(C$, this);
this.img=doubleStorage;
}, 1);

Clazz.newMeth(C$, 'c$$D', function (value) {
Clazz.super_(C$, this);
this.img=null;
this.dataAccess=Clazz.new_($I$(3,1).c$$I,[1]);
this.set$D(value);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_basictypeaccess_DoubleAccess', function (access) {
Clazz.super_(C$, this);
this.img=null;
this.dataAccess=access;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$D.apply(this, [0]);
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

Clazz.newMeth(C$, ['set$D','setnull'], function (f) {
this.dataAccess.setValue$I$D(this.i, f);
});

Clazz.newMeth(C$, 'getRealFloat$', function () {
return this.get$();
});

Clazz.newMeth(C$, 'getRealDouble$', function () {
return this.get$();
});

Clazz.newMeth(C$, 'setReal$F', function (real) {
this.set$D(real);
});

Clazz.newMeth(C$, 'setReal$D', function (real) {
this.set$D(real);
});

Clazz.newMeth(C$, 'getMaxValue$', function () {
return 1.7976931348623157E308;
});

Clazz.newMeth(C$, 'getMinValue$', function () {
return -1.7976931348623157E308;
});

Clazz.newMeth(C$, 'getMinIncrement$', function () {
return 4.9E-324;
});

Clazz.newMeth(C$, 'createVariable$', function () {
return Clazz.new_(C$.c$$D,[0]);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$D,[this.get$()]);
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
return 64;
});

Clazz.newMeth(C$, 'equals$D$D', function (a, b) {
return Double.doubleToLongBits$D(a) == Double.doubleToLongBits$D(b);
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:12 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
