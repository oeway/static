(function(){var P$=Clazz.newPackage("net.imglib2.type.volatiles"),I$=[[0,'net.imglib2.type.NativeTypeFactory','net.imglib2.type.volatiles.VolatileFloatType',['net.imglib2.type.volatiles.VolatileFloatType','.WrappedFloatType'],'net.imglib2.img.basictypeaccess.volatiles.array.VolatileFloatArray']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "VolatileFloatType", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imglib2.type.volatiles.AbstractVolatileNativeRealType');
C$.$classes$=[['WrappedFloatType',10]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.typeFactory=$I$(1).FLOAT$java_util_function_Function((P$.VolatileFloatType$lambda1$||(P$.VolatileFloatType$lambda1$=(((P$.VolatileFloatType$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "VolatileFloatType$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (img) { return (Clazz.new_($I$(2,1).c$$net_imglib2_img_NativeImg,[img]));});
})()
), Clazz.new_(1,{T:"net.imglib2.img.NativeImg",R:"net.imglib2.type.volatiles.VolatileFloatType"},P$.VolatileFloatType$lambda1.$init$, [this, null]))))));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['img','net.imglib2.img.NativeImg']]
,['O',['typeFactory','net.imglib2.type.NativeTypeFactory']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_NativeImg', function (img) {
;C$.superclazz.c$$TR$Z.apply(this,[Clazz.new_($I$(3,1).c$$net_imglib2_img_NativeImg,[img]), false]);C$.$init$.apply(this);
this.img=img;
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_basictypeaccess_volatiles_VolatileFloatAccess', function (access) {
;C$.superclazz.c$$TR$Z.apply(this,[Clazz.new_($I$(3,1).c$$net_imglib2_img_basictypeaccess_FloatAccess,[access]), access.isValid$()]);C$.$init$.apply(this);
this.img=null;
}, 1);

Clazz.newMeth(C$, 'c$$F', function (value) {
C$.c$$net_imglib2_img_basictypeaccess_volatiles_VolatileFloatAccess.apply(this, [Clazz.new_($I$(4,1).c$$I$Z,[1, true])]);
this.set$F(value);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$F.apply(this, [0]);
}, 1);

Clazz.newMeth(C$, ['set$F','setnull'], function (value) {
this.get$().set$F(value);
});

Clazz.newMeth(C$, 'updateContainer$O', function (c) {
var a=this.img.update$O(c);
(this.t).setAccess$net_imglib2_img_basictypeaccess_FloatAccess(a);
this.setValid$Z(a.isValid$());
});

Clazz.newMeth(C$, 'duplicateTypeOnSameNativeImg$', function () {
return Clazz.new_(C$.c$$net_imglib2_img_NativeImg,[this.img]);
});

Clazz.newMeth(C$, 'createVariable$', function () {
return Clazz.new_(C$);
});

Clazz.newMeth(C$, 'copy$', function () {
var v=this.createVariable$();
v.set$TT(this);
return v;
});

Clazz.newMeth(C$, 'getNativeTypeFactory$', function () {
return C$.typeFactory;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.VolatileFloatType, "WrappedFloatType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'net.imglib2.type.numeric.real.FloatType');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_NativeImg', function (img) {
;C$.superclazz.c$$net_imglib2_img_NativeImg.apply(this,[img]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_basictypeaccess_FloatAccess', function (access) {
;C$.superclazz.c$$net_imglib2_img_basictypeaccess_FloatAccess.apply(this,[access]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setAccess$net_imglib2_img_basictypeaccess_FloatAccess', function (access) {
this.dataAccess=access;
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:12 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
