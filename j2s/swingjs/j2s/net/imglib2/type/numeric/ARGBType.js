(function(){var P$=Clazz.newPackage("net.imglib2.type.numeric"),I$=[[0,'net.imglib2.type.NativeTypeFactory','net.imglib2.type.numeric.ARGBType','net.imglib2.img.basictypeaccess.array.IntArray','net.imglib2.util.Util','net.imglib2.util.Fraction']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ARGBType", null, 'net.imglib2.type.AbstractNativeType', 'net.imglib2.type.numeric.NumericType');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.typeFactory=$I$(1).INT$java_util_function_Function((P$.ARGBType$lambda1$||(P$.ARGBType$lambda1$=(((P$.ARGBType$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "ARGBType$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (img) { return (Clazz.new_($I$(2,1).c$$net_imglib2_img_NativeImg,[img]));});
})()
), Clazz.new_(1,{T:"net.imglib2.img.NativeImg",R:"net.imglib2.type.numeric.ARGBType"},P$.ARGBType$lambda1.$init$, [this, null]))))));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['img','net.imglib2.img.NativeImg','dataAccess','net.imglib2.img.basictypeaccess.IntAccess']]
,['O',['typeFactory','net.imglib2.type.NativeTypeFactory']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_NativeImg', function (intStorage) {
Clazz.super_(C$, this);
this.img=intStorage;
}, 1);

Clazz.newMeth(C$, 'c$$I', function (value) {
Clazz.super_(C$, this);
this.img=null;
this.dataAccess=Clazz.new_($I$(3,1).c$$I,[1]);
this.set$I(value);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_basictypeaccess_IntAccess', function (access) {
Clazz.super_(C$, this);
this.img=null;
this.dataAccess=access;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$I.apply(this, [0]);
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

Clazz.newMeth(C$, 'rgba$I$I$I$I', function (r, g, b, a) {
return ((r & 255) << 16) | ((g & 255) << 8) | (b & 255) | ((a & 255) << 24) ;
}, 1);

Clazz.newMeth(C$, 'rgba$F$F$F$F', function (r, g, b, a) {
return C$.rgba$I$I$I$I($I$(4).round$F(r), $I$(4).round$F(g), $I$(4).round$F(b), $I$(4).round$F(a));
}, 1);

Clazz.newMeth(C$, 'rgba$D$D$D$D', function (r, g, b, a) {
return C$.rgba$I$I$I$I(($I$(4).round$D(r)|0), ($I$(4).round$D(g)|0), ($I$(4).round$D(b)|0), ($I$(4).round$D(a)|0));
}, 1);

Clazz.newMeth(C$, 'red$I', function (value) {
return (value >> 16) & 255;
}, 1);

Clazz.newMeth(C$, 'green$I', function (value) {
return (value >> 8) & 255;
}, 1);

Clazz.newMeth(C$, 'blue$I', function (value) {
return value & 255;
}, 1);

Clazz.newMeth(C$, 'alpha$I', function (value) {
return (value >> 24) & 255;
}, 1);

Clazz.newMeth(C$, 'get$', function () {
return this.dataAccess.getValue$I(this.i);
});

Clazz.newMeth(C$, ['set$I','setnull'], function (f) {
this.dataAccess.setValue$I$I(this.i, f);
});

Clazz.newMeth(C$, ['mul$F','mulnull'], function (c) {
var value=this.get$();
this.set$I(C$.rgba$F$F$F$F(C$.red$I(value) * c, C$.green$I(value) * c, C$.blue$I(value) * c, C$.alpha$I(value) * c));
});

Clazz.newMeth(C$, ['mul$D','mulnull'], function (c) {
var value=this.get$();
this.set$I(C$.rgba$D$D$D$D(C$.red$I(value) * c, C$.green$I(value) * c, C$.blue$I(value) * c, C$.alpha$I(value) * c));
});

Clazz.newMeth(C$, ['add$net_imglib2_type_numeric_ARGBType','add$','add$TT'], function (c) {
var value1=this.get$();
var value2=c.get$();
this.set$I(C$.rgba$I$I$I$I(C$.red$I(value1) + C$.red$I(value2), C$.green$I(value1) + C$.green$I(value2), C$.blue$I(value1) + C$.blue$I(value2), C$.alpha$I(value1) + C$.alpha$I(value2)));
});

Clazz.newMeth(C$, ['div$net_imglib2_type_numeric_ARGBType','div$','div$TT'], function (c) {
var value1=this.get$();
var value2=c.get$();
this.set$I(C$.rgba$I$I$I$I((C$.red$I(value1)/C$.red$I(value2)|0), (C$.green$I(value1)/C$.green$I(value2)|0), (C$.blue$I(value1)/C$.blue$I(value2)|0), (C$.alpha$I(value1)/C$.alpha$I(value2)|0)));
});

Clazz.newMeth(C$, ['mul$net_imglib2_type_numeric_ARGBType','mul$','mul$TT'], function (c) {
var value1=this.get$();
var value2=c.get$();
this.set$I(C$.rgba$I$I$I$I(C$.red$I(value1) * C$.red$I(value2), C$.green$I(value1) * C$.green$I(value2), C$.blue$I(value1) * C$.blue$I(value2), C$.alpha$I(value1) * C$.alpha$I(value2)));
});

Clazz.newMeth(C$, ['sub$net_imglib2_type_numeric_ARGBType','sub$','sub$TT'], function (c) {
var value1=this.get$();
var value2=c.get$();
this.set$I(C$.rgba$I$I$I$I(C$.red$I(value1) - C$.red$I(value2), C$.green$I(value1) - C$.green$I(value2), C$.blue$I(value1) - C$.blue$I(value2), C$.alpha$I(value1) - C$.alpha$I(value2)));
});

Clazz.newMeth(C$, ['set$net_imglib2_type_numeric_ARGBType','set$TT'], function (c) {
this.set$I(c.get$());
});

Clazz.newMeth(C$, 'setOne$', function () {
this.set$I(C$.rgba$I$I$I$I(1, 1, 1, 1));
});

Clazz.newMeth(C$, 'setZero$', function () {
this.set$I(0);
});

Clazz.newMeth(C$, 'createVariable$', function () {
return Clazz.new_(C$.c$$I,[0]);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$I,[this.get$()]);
});

Clazz.newMeth(C$, 'toString', function () {
var rgba=this.get$();
return "(r=" + C$.red$I(rgba) + ",g=" + C$.green$I(rgba) + ",b=" + C$.blue$I(rgba) + ",a=" + C$.alpha$I(rgba) + ")" ;
});

Clazz.newMeth(C$, 'getEntitiesPerPixel$', function () {
return Clazz.new_($I$(5,1));
});

Clazz.newMeth(C$, ['valueEquals$net_imglib2_type_numeric_ARGBType','valueEquals$','valueEquals$TT'], function (t) {
return this.get$() == t.get$();
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
return $I$(4).valueEqualsObject$TT$O(this, obj);
});

Clazz.newMeth(C$, 'hashCode$', function () {
return Integer.hashCode$I(this.get$());
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:11 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
