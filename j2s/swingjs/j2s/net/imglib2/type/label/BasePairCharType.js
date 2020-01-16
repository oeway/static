(function(){var P$=Clazz.newPackage("net.imglib2.type.label"),I$=[[0,'net.imglib2.type.NativeTypeFactory','net.imglib2.type.label.BasePairCharType','net.imglib2.util.Fraction','net.imglib2.img.basictypeaccess.array.CharArray',['net.imglib2.type.label.BasePairBitType','.Base']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BasePairCharType", null, 'net.imglib2.type.AbstractNativeType', 'net.imglib2.type.BasePairType');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.typeFactory=$I$(1).CHAR$java_util_function_Function((P$.BasePairCharType$lambda1$||(P$.BasePairCharType$lambda1$=(((P$.BasePairCharType$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "BasePairCharType$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (img) { return (Clazz.new_($I$(2,1).c$$net_imglib2_img_NativeImg,[img]));});
})()
), Clazz.new_(1,{T:"net.imglib2.img.NativeImg",R:"net.imglib2.type.label.BasePairCharType"},P$.BasePairCharType$lambda1.$init$, [this, null]))))));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['img','net.imglib2.img.NativeImg','dataAccess','net.imglib2.img.basictypeaccess.CharAccess']]
,['O',['typeFactory','net.imglib2.type.NativeTypeFactory']]]

Clazz.newMeth(C$, 'getEntitiesPerPixel$', function () {
return Clazz.new_($I$(3,1));
});

Clazz.newMeth(C$, 'c$$net_imglib2_img_NativeImg', function (charStorage) {
Clazz.super_(C$, this);
this.img=charStorage;
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_type_label_BasePairBitType_Base', function (value) {
Clazz.super_(C$, this);
this.img=null;
this.dataAccess=Clazz.new_($I$(4,1).c$$I,[1]);
this.set$net_imglib2_type_label_BasePairBitType_Base(value);
}, 1);

Clazz.newMeth(C$, 'c$$C', function (value) {
Clazz.super_(C$, this);
this.img=null;
this.dataAccess=Clazz.new_($I$(4,1).c$$I,[1]);
this.setChar$C(value);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$net_imglib2_type_label_BasePairBitType_Base.apply(this, [$I$(5).N]);
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

Clazz.newMeth(C$, 'getChar$', function () {
return this.dataAccess.getValue$I(this.i);
});

Clazz.newMeth(C$, 'setChar$C', function (f) {
this.dataAccess.setValue$I$C(this.i, f);
});

Clazz.newMeth(C$, ['set$net_imglib2_type_label_BasePairBitType_Base','setnull'], function (base) {
this.setChar$C(base.getChar$());
});

Clazz.newMeth(C$, 'get$', function () {
return $I$(5).fromChar$C(this.getChar$());
});

Clazz.newMeth(C$, ['set$net_imglib2_type_label_BasePairCharType','set$TT'], function (c) {
this.dataAccess.setValue$I$C(this.i, c.getChar$());
});

Clazz.newMeth(C$, ['compareTo$net_imglib2_type_label_BasePairCharType','compareTo$','compareTo$TT'], function (c) {
return this.get$().compareTo$TE(c.get$());
});

Clazz.newMeth(C$, 'complement$', function () {
var base=this.getChar$();
switch (base.$c()) {
case 65:
this.setChar$C("T");
break;
case 84:
this.setChar$C("A");
break;
case 71:
this.setChar$C("C");
break;
case 67:
this.setChar$C("G");
break;
case 85:
this.setChar$C("A");
break;
}
});

Clazz.newMeth(C$, 'baseToValue$', function () {
return $b$[0] = (this.get$().ordinal$()|0), $b$[0];
});

Clazz.newMeth(C$, 'createVariable$', function () {
return Clazz.new_(C$.c$$net_imglib2_type_label_BasePairBitType_Base,[$I$(5).N]);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$net_imglib2_type_label_BasePairBitType_Base,[this.get$()]);
});

Clazz.newMeth(C$, 'toString', function () {
return "" + this.get$();
});

Clazz.newMeth(C$, ['valueEquals$net_imglib2_type_label_BasePairCharType','valueEquals$','valueEquals$TT'], function (t) {
return this.get$() === t.get$() ;
});
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:11 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
