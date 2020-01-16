(function(){var P$=Clazz.newPackage("net.imglib2.type.numeric.complex"),I$=[[0,'net.imglib2.type.NativeTypeFactory','net.imglib2.type.numeric.complex.ComplexFloatType','net.imglib2.img.basictypeaccess.array.FloatArray','net.imglib2.util.Fraction','net.imglib2.type.numeric.real.FloatType','net.imglib2.util.Util']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ComplexFloatType", null, 'net.imglib2.type.numeric.complex.AbstractComplexType', 'net.imglib2.type.NativeType');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.typeFactory=$I$(1).FLOAT$java_util_function_Function((P$.ComplexFloatType$lambda1$||(P$.ComplexFloatType$lambda1$=(((P$.ComplexFloatType$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "ComplexFloatType$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (img) { return (Clazz.new_($I$(2,1).c$$net_imglib2_img_NativeImg,[img]));});
})()
), Clazz.new_(1,{T:"net.imglib2.img.NativeImg",R:"net.imglib2.type.numeric.complex.ComplexFloatType"},P$.ComplexFloatType$lambda1.$init$, [this, null]))))));
}

Clazz.newMeth(C$, '$init$', function () {
this.i=0;
this.realI=0;
this.imaginaryI=1;
}, 1);

C$.$fields$=[['I',['i','realI','imaginaryI'],'O',['img','net.imglib2.img.NativeImg','dataAccess','net.imglib2.img.basictypeaccess.FloatAccess']]
,['O',['typeFactory','net.imglib2.type.NativeTypeFactory']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_NativeImg', function (complexfloatStorage) {
Clazz.super_(C$, this);
this.img=complexfloatStorage;
}, 1);

Clazz.newMeth(C$, 'c$$F$F', function (r, i) {
Clazz.super_(C$, this);
this.img=null;
this.dataAccess=Clazz.new_($I$(3,1).c$$I,[2]);
this.set$F$F(r, i);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_basictypeaccess_FloatAccess', function (access) {
Clazz.super_(C$, this);
this.img=null;
this.dataAccess=access;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$F$F.apply(this, [0, 0]);
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

Clazz.newMeth(C$, 'getRealFloat$', function () {
return this.dataAccess.getValue$I(this.realI);
});

Clazz.newMeth(C$, 'getRealDouble$', function () {
return this.dataAccess.getValue$I(this.realI);
});

Clazz.newMeth(C$, 'getImaginaryFloat$', function () {
return this.dataAccess.getValue$I(this.imaginaryI);
});

Clazz.newMeth(C$, 'getImaginaryDouble$', function () {
return this.dataAccess.getValue$I(this.imaginaryI);
});

Clazz.newMeth(C$, 'setReal$F', function (r) {
this.dataAccess.setValue$I$F(this.realI, r);
});

Clazz.newMeth(C$, 'setReal$D', function (r) {
this.dataAccess.setValue$I$F(this.realI, r);
});

Clazz.newMeth(C$, 'setImaginary$F', function (i) {
this.dataAccess.setValue$I$F(this.imaginaryI, i);
});

Clazz.newMeth(C$, 'setImaginary$D', function (i) {
this.dataAccess.setValue$I$F(this.imaginaryI, i);
});

Clazz.newMeth(C$, 'set$F$F', function (r, i) {
this.dataAccess.setValue$I$F(this.realI, r);
this.dataAccess.setValue$I$F(this.imaginaryI, i);
});

Clazz.newMeth(C$, ['add$net_imglib2_type_numeric_complex_ComplexFloatType','add$','add$TT'], function (c) {
this.setReal$F(this.getRealFloat$() + c.getRealFloat$());
this.setImaginary$F(this.getImaginaryFloat$() + c.getImaginaryFloat$());
});

Clazz.newMeth(C$, ['div$net_imglib2_type_numeric_complex_ComplexFloatType','div$','div$TT'], function (c) {
var a1=this.getRealFloat$();
var b1=this.getImaginaryFloat$();
var c1=c.getRealFloat$();
var d1=c.getImaginaryFloat$();
this.setReal$F((a1 * c1 + b1 * d1) / (c1 * c1 + d1 * d1));
this.setImaginary$F((b1 * c1 - a1 * d1) / (c1 * c1 + d1 * d1));
});

Clazz.newMeth(C$, ['mul$net_imglib2_type_numeric_complex_ComplexFloatType','mul$','mul$TT'], function (t) {
var a=this.getRealFloat$();
var b=this.getImaginaryFloat$();
var c=t.getRealFloat$();
var d=t.getImaginaryFloat$();
this.setReal$F(a * c - b * d);
this.setImaginary$F(a * d + b * c);
});

Clazz.newMeth(C$, ['sub$net_imglib2_type_numeric_complex_ComplexFloatType','sub$','sub$TT'], function (c) {
this.setReal$F(this.getRealFloat$() - c.getRealFloat$());
this.setImaginary$F(this.getImaginaryFloat$() - c.getImaginaryFloat$());
});

Clazz.newMeth(C$, 'complexConjugate$', function () {
this.setImaginary$F(-this.getImaginaryFloat$());
});

Clazz.newMeth(C$, 'switchRealComplex$', function () {
var a=this.getRealFloat$();
this.setReal$F(this.getImaginaryFloat$());
this.setImaginary$F(a);
});

Clazz.newMeth(C$, ['set$net_imglib2_type_numeric_complex_ComplexFloatType','set$TT'], function (c) {
this.setReal$F(c.getRealFloat$());
this.setImaginary$F(c.getImaginaryFloat$());
});

Clazz.newMeth(C$, 'createVariable$', function () {
return Clazz.new_(C$.c$$F$F,[0, 0]);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$F$F,[this.getRealFloat$(), this.getImaginaryFloat$()]);
});

Clazz.newMeth(C$, 'getEntitiesPerPixel$', function () {
return Clazz.new_($I$(4,1).c$$J$J,[2, 1]);
});

Clazz.newMeth(C$, 'updateIndex$I', function (index) {
this.i=index;
this.realI=index * 2;
this.imaginaryI=index * 2 + 1;
});

Clazz.newMeth(C$, 'incIndex$', function () {
++this.i;
this.realI+=2;
this.imaginaryI+=2;
});

Clazz.newMeth(C$, 'incIndex$I', function (increment) {
this.i+=increment;
var inc2=2 * increment;
this.realI+=inc2;
this.imaginaryI+=inc2;
});

Clazz.newMeth(C$, 'decIndex$', function () {
--this.i;
this.realI-=2;
this.imaginaryI-=2;
});

Clazz.newMeth(C$, 'decIndex$I', function (decrement) {
this.i-=decrement;
var dec2=2 * decrement;
this.realI-=dec2;
this.imaginaryI-=dec2;
});

Clazz.newMeth(C$, 'getIndex$', function () {
return this.i;
});

Clazz.newMeth(C$, ['valueEquals$net_imglib2_type_numeric_complex_ComplexFloatType','valueEquals$','valueEquals$TT'], function (t) {
return $I$(5).equals$F$F(this.getRealFloat$(), t.getRealFloat$()) && $I$(5).equals$F$F(this.getImaginaryFloat$(), t.getImaginaryFloat$()) ;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
return $I$(6).valueEqualsObject$TT$O(this, obj);
});

Clazz.newMeth(C$, 'hashCode$', function () {
var rHash=Float.hashCode$F(this.getRealFloat$());
var iHash=Float.hashCode$F(this.getImaginaryFloat$());
return $I$(6).combineHash$I$I(rHash, iHash);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:12 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
