(function(){var P$=Clazz.newPackage("net.imglib2.type.logic"),I$=[[0,'net.imglib2.type.NativeTypeFactory','net.imglib2.type.logic.NativeBoolType','net.imglib2.img.basictypeaccess.array.BooleanArray','net.imglib2.util.Fraction','net.imglib2.util.Util','Boolean','java.math.BigInteger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "NativeBoolType", null, 'net.imglib2.type.numeric.integer.AbstractIntegerType', ['net.imglib2.type.BooleanType', 'net.imglib2.type.NativeType']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.i=0;
this.typeFactory=$I$(1).BOOLEAN$java_util_function_Function((P$.NativeBoolType$lambda1$||(P$.NativeBoolType$lambda1$=(((P$.NativeBoolType$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "NativeBoolType$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (img) { return (Clazz.new_($I$(2,1).c$$net_imglib2_img_NativeImg,[img]));});
})()
), Clazz.new_(1,{T:"net.imglib2.img.NativeImg",R:"net.imglib2.type.logic.NativeBoolType"},P$.NativeBoolType$lambda1.$init$, [this, null]))))));
}, 1);

C$.$fields$=[['I',['i'],'O',['img','net.imglib2.img.NativeImg','dataAccess','net.imglib2.img.basictypeaccess.BooleanAccess','typeFactory','net.imglib2.type.NativeTypeFactory']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_NativeImg', function (boolStorage) {
Clazz.super_(C$, this);
this.img=boolStorage;
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (value) {
Clazz.super_(C$, this);
this.img=null;
this.dataAccess=Clazz.new_($I$(3,1).c$$I,[1]);
this.set$Z(value);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_basictypeaccess_BooleanAccess', function (access) {
Clazz.super_(C$, this);
this.img=null;
this.dataAccess=access;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$Z.apply(this, [false]);
}, 1);

Clazz.newMeth(C$, 'getNativeTypeFactory$', function () {
return this.typeFactory;
});

Clazz.newMeth(C$, 'duplicateTypeOnSameNativeImg$', function () {
return Clazz.new_(C$.c$$net_imglib2_img_NativeImg,[this.img]);
});

Clazz.newMeth(C$, 'getEntitiesPerPixel$', function () {
return Clazz.new_($I$(4,1));
});

Clazz.newMeth(C$, 'updateContainer$O', function (c) {
this.dataAccess=this.img.update$O(c);
});

Clazz.newMeth(C$, 'get$', function () {
return this.dataAccess.getValue$I(this.i);
});

Clazz.newMeth(C$, ['set$Z','setnull'], function (f) {
this.dataAccess.setValue$I$Z(this.i, f);
});

Clazz.newMeth(C$, ['set$net_imglib2_type_logic_NativeBoolType','set$TT'], function (c) {
this.set$Z(c.get$());
});

Clazz.newMeth(C$, ['and$net_imglib2_type_logic_NativeBoolType','and$TT'], function (c) {
this.set$Z(this.get$() && c.get$() );
});

Clazz.newMeth(C$, ['or$net_imglib2_type_logic_NativeBoolType','or$TT'], function (c) {
this.set$Z(this.get$() || c.get$() );
});

Clazz.newMeth(C$, ['xor$net_imglib2_type_logic_NativeBoolType','xor$TT'], function (c) {
this.set$Z(!!(this.get$() ^ c.get$()));
});

Clazz.newMeth(C$, 'not$', function () {
this.set$Z(!this.get$());
});

Clazz.newMeth(C$, ['add$net_imglib2_type_logic_NativeBoolType','add$','add$TT'], function (c) {
this.xor$net_imglib2_type_logic_NativeBoolType(c);
});

Clazz.newMeth(C$, ['div$net_imglib2_type_logic_NativeBoolType','div$','div$TT'], function (c) {
this.and$net_imglib2_type_logic_NativeBoolType(c);
});

Clazz.newMeth(C$, ['mul$net_imglib2_type_logic_NativeBoolType','mul$','mul$TT'], function (c) {
this.and$net_imglib2_type_logic_NativeBoolType(c);
});

Clazz.newMeth(C$, ['sub$net_imglib2_type_logic_NativeBoolType','sub$','sub$TT'], function (c) {
this.xor$net_imglib2_type_logic_NativeBoolType(c);
});

Clazz.newMeth(C$, ['mul$F','mulnull'], function (c) {
if (c >= 0.5 ) this.set$Z(this.get$() && true );
 else this.set$Z(false);
});

Clazz.newMeth(C$, ['mul$D','mulnull'], function (c) {
if (c >= 0.5 ) this.set$Z(this.get$() && true );
 else this.set$Z(false);
});

Clazz.newMeth(C$, 'setOne$', function () {
this.set$Z(true);
});

Clazz.newMeth(C$, 'setZero$', function () {
this.set$Z(false);
});

Clazz.newMeth(C$, 'inc$', function () {
this.not$();
});

Clazz.newMeth(C$, 'dec$', function () {
this.not$();
});

Clazz.newMeth(C$, 'toString', function () {
return "" + this.get$();
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
return 8;
});

Clazz.newMeth(C$, ['valueEquals$net_imglib2_type_logic_NativeBoolType','valueEquals$','valueEquals$TT'], function (t) {
return this.get$() == t.get$() ;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
return $I$(5).valueEqualsObject$TT$O(this, obj);
});

Clazz.newMeth(C$, 'hashCode$', function () {
return $I$(6).hashCode$Z(this.get$());
});

Clazz.newMeth(C$, ['compareTo$net_imglib2_type_logic_NativeBoolType','compareTo$','compareTo$TT'], function (c) {
return $I$(6).compare$Z$Z(this.get$(), c.get$());
});

Clazz.newMeth(C$, 'createVariable$', function () {
return Clazz.new_(C$);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$Z,[this.get$()]);
});

Clazz.newMeth(C$, 'getMaxValue$', function () {
return 1;
});

Clazz.newMeth(C$, 'getMinValue$', function () {
return 0;
});

Clazz.newMeth(C$, 'getInteger$', function () {
return this.get$() ? 1 : 0;
});

Clazz.newMeth(C$, 'getIntegerLong$', function () {
return this.get$() ? 1 : 0;
});

Clazz.newMeth(C$, 'getBigInteger$', function () {
return this.get$() ? $I$(7).ONE : $I$(7).ZERO;
});

Clazz.newMeth(C$, 'setInteger$I', function (f) {
this.set$Z(f > 0);
});

Clazz.newMeth(C$, 'setInteger$J', function (f) {
this.set$Z(f > 0);
});

Clazz.newMeth(C$, 'setBigInteger$java_math_BigInteger', function (b) {
this.set$Z(b.compareTo$java_math_BigInteger($I$(7).ZERO) > 0);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:11 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
