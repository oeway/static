(function(){var P$=Clazz.newPackage("net.imglib2.img.list"),I$=[[0,'net.imglib2.img.list.ListImg','net.imglib2.util.Intervals','net.imglib2.util.Util']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ListImgFactory", null, 'net.imglib2.img.ImgFactory');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$TT'], function (type) {
;C$.superclazz.c$$TT.apply(this,[type]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'create$JA', function (dimensions) {
return Clazz.new_(1,{T:"Object"},$I$(1,1).c$$JA$TT,[dimensions, this.type$()]);
});

Clazz.newMeth(C$, 'create$net_imglib2_Dimensions', function (dimensions) {
return this.create$JA($I$(2).dimensionsAsLongArray$net_imglib2_Dimensions(dimensions));
});

Clazz.newMeth(C$, 'create$IA', function (dimensions) {
return this.create$JA($I$(3).int2long$IA(dimensions));
});

Clazz.newMeth(C$, ['imgFactory$TS'], function (type) {
return Clazz.new_(1,{T:"Object"},C$.c$$TT,[type]);
});

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, ['create$JA$TT'], function (dim, type) {
this.cache$TT(type);
return Clazz.new_(1,{T:"Object"},$I$(1,1).c$$JA$TT,[dim, type]);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:08 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1