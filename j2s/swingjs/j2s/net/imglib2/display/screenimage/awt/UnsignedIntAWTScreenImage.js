(function(){var P$=Clazz.newPackage("net.imglib2.display.screenimage.awt"),I$=[[0,'net.imglib2.display.awt.UnsignedIntDataBuffer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "UnsignedIntAWTScreenImage", null, 'net.imglib2.display.screenimage.awt.ArrayImgAWTScreenImage');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_array_ArrayImg', function (img) {
;C$.superclazz.c$$net_imglib2_img_array_ArrayImg.apply(this,[img]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_type_numeric_integer_UnsignedIntType$net_imglib2_img_basictypeaccess_array_IntArray$JA', function (type, data, dim) {
;C$.superclazz.c$$TT$TA$JA.apply(this,[type, data, dim]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['createDataBuffer$net_imglib2_img_basictypeaccess_array_IntArray','createDataBuffer$TA'], function (data) {
var sourceArray=data.getCurrentStorageArray$();
return Clazz.new_($I$(1,1).c$$IA$I,[sourceArray, sourceArray.length]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:07 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
