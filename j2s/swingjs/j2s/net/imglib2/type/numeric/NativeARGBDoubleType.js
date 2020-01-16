(function(){var P$=Clazz.newPackage("net.imglib2.type.numeric"),I$=[[0,'net.imglib2.type.NativeTypeFactory','net.imglib2.type.numeric.NativeARGBDoubleType','net.imglib2.img.basictypeaccess.array.DoubleArray','net.imglib2.util.Fraction']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "NativeARGBDoubleType", null, 'net.imglib2.type.numeric.AbstractARGBDoubleType', 'net.imglib2.type.NativeType');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.typeFactory=$I$(1).DOUBLE$java_util_function_Function((P$.NativeARGBDoubleType$lambda1$||(P$.NativeARGBDoubleType$lambda1$=(((P$.NativeARGBDoubleType$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "NativeARGBDoubleType$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, ['apply$'], function (img) { return (Clazz.new_($I$(2,1).c$$net_imglib2_img_NativeImg,[img]));});
})()
), Clazz.new_(1,{T:"net.imglib2.img.NativeImg",R:"net.imglib2.type.numeric.NativeARGBDoubleType"},P$.NativeARGBDoubleType$lambda1.$init$, [this, null]))))));
}

Clazz.newMeth(C$, '$init$', function () {
this.i=0;
this.ai=0;
this.ri=1;
this.gi=2;
this.bi=3;
}, 1);

C$.$fields$=[['I',['i','ai','ri','gi','bi'],'O',['img','net.imglib2.img.NativeImg','dataAccess','net.imglib2.img.basictypeaccess.DoubleAccess']]
,['O',['typeFactory','net.imglib2.type.NativeTypeFactory']]]

Clazz.newMeth(C$, 'c$$net_imglib2_img_NativeImg', function (img) {
Clazz.super_(C$, this);
this.img=img;
}, 1);

Clazz.newMeth(C$, 'c$$D$D$D$D', function (a, r, g, b) {
Clazz.super_(C$, this);
this.img=null;
this.dataAccess=Clazz.new_($I$(3,1).c$$I,[4]);
this.set$D$D$D$D(a, r, g, b);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_basictypeaccess_DoubleAccess', function (access) {
Clazz.super_(C$, this);
this.img=null;
this.dataAccess=access;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$D$D$D$D.apply(this, [0, 0, 0, 0]);
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

Clazz.newMeth(C$, 'getA$', function () {
return this.dataAccess.getValue$I(this.ai);
});

Clazz.newMeth(C$, 'getR$', function () {
return this.dataAccess.getValue$I(this.ri);
});

Clazz.newMeth(C$, 'getG$', function () {
return this.dataAccess.getValue$I(this.gi);
});

Clazz.newMeth(C$, 'getB$', function () {
return this.dataAccess.getValue$I(this.bi);
});

Clazz.newMeth(C$, 'setA$D', function (a) {
this.dataAccess.setValue$I$D(this.ai, a);
});

Clazz.newMeth(C$, 'setR$D', function (r) {
this.dataAccess.setValue$I$D(this.ri, r);
});

Clazz.newMeth(C$, 'setG$D', function (g) {
this.dataAccess.setValue$I$D(this.gi, g);
});

Clazz.newMeth(C$, 'setB$D', function (b) {
this.dataAccess.setValue$I$D(this.bi, b);
});

Clazz.newMeth(C$, 'set$D$D$D$D', function (a, r, g, b) {
this.dataAccess.setValue$I$D(this.ai, a);
this.dataAccess.setValue$I$D(this.ri, r);
this.dataAccess.setValue$I$D(this.gi, g);
this.dataAccess.setValue$I$D(this.bi, b);
});

Clazz.newMeth(C$, ['set$net_imglib2_type_numeric_ARGBDoubleType','setnull'], function (c) {
this.set$D$D$D$D(c.getA$(), c.getR$(), c.getG$(), c.getB$());
});

Clazz.newMeth(C$, 'createVariable$', function () {
return Clazz.new_(C$);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$D$D$D$D,[this.getA$(), this.getR$(), this.getG$(), this.getB$()]);
});

Clazz.newMeth(C$, 'getEntitiesPerPixel$', function () {
return Clazz.new_($I$(4,1).c$$J$J,[4, 1]);
});

Clazz.newMeth(C$, 'updateIndex$I', function (index) {
this.i=index;
this.ai=this.i * 4;
this.ri=this.ai + 1;
this.gi=this.ai + 2;
this.bi=this.ai + 3;
});

Clazz.newMeth(C$, 'incIndex$', function () {
++this.i;
this.ai+=4;
this.ri+=4;
this.gi+=4;
this.bi+=4;
});

Clazz.newMeth(C$, 'incIndex$I', function (increment) {
this.i+=increment;
var inc2=increment * 4;
this.ai+=inc2;
this.ri+=inc2;
this.gi+=inc2;
this.bi+=inc2;
});

Clazz.newMeth(C$, 'decIndex$', function () {
--this.i;
this.ai-=4;
this.ri-=4;
this.gi-=4;
this.bi-=4;
});

Clazz.newMeth(C$, 'decIndex$I', function (decrement) {
this.i-=decrement;
var dec2=decrement * 4;
this.ai-=dec2;
this.ri-=dec2;
this.gi-=dec2;
this.bi-=dec2;
});

Clazz.newMeth(C$, 'getIndex$', function () {
return this.i;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:11 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
