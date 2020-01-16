(function(){var P$=Clazz.newPackage("net.imagej"),I$=[[0,'net.imglib2.util.Util']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DatasetFactory", null, 'net.imglib2.img.ImgFactory');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_type_numeric_RealType', function (type) {
;C$.superclazz.c$$TT.apply(this,[type]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'create$net_imglib2_Dimensions', function (dimensions) {
var size=Clazz.array(Long.TYPE, [dimensions.numDimensions$()]);
dimensions.dimensions$JA(size);
return this.create$JA(size);
});

Clazz.newMeth(C$, 'create$IA', function (dimensions) {
return this.create$JA($I$(1).int2long$IA(dimensions));
});

Clazz.newMeth(C$, ['imgFactory$TS'], function (type) {
return this;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:56 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
