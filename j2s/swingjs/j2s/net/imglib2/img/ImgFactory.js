(function(){var P$=Clazz.newPackage("net.imglib2.img"),I$=[[0,'net.imglib2.util.Util']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ImgFactory");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['type','<T>']]]

Clazz.newMeth(C$, 'c$$TT', function (type) {
;C$.$init$.apply(this);
this.type=type;
}, 1);

Clazz.newMeth(C$, 'type$', function () {
return this.type;
});

Clazz.newMeth(C$, 'create$net_imglib2_Dimensions', function (dimensions) {
var size=Clazz.array(Long.TYPE, [dimensions.numDimensions$()]);
dimensions.dimensions$JA(size);
return this.create$JA(size);
});

Clazz.newMeth(C$, 'create$IA', function (dimensions) {
return this.create$JA($I$(1).int2long$IA(dimensions));
});

Clazz.newMeth(C$, 'imgFactory$java_util_function_Supplier', function (typeSupplier) {
return this.imgFactory$TS(typeSupplier.get$());
});

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.type=null;
}, 1);

Clazz.newMeth(C$, 'create$net_imglib2_Dimensions$TT', function (dim, type) {
var size=Clazz.array(Long.TYPE, [dim.numDimensions$()]);
dim.dimensions$JA(size);
this.cache$TT(type);
return this.create$JA$TT(size, type);
});

Clazz.newMeth(C$, 'create$IA$TT', function (dim, type) {
return this.create$JA$TT($I$(1).int2long$IA(dim), type);
});

Clazz.newMeth(C$, 'create$java_util_function_Supplier$JA', function (typeSupplier, dim) {
return this.create$JA$TT(dim, typeSupplier.get$());
});

Clazz.newMeth(C$, 'create$java_util_function_Supplier$net_imglib2_Dimensions', function (typeSupplier, dim) {
return this.create$net_imglib2_Dimensions$TT(dim, typeSupplier.get$());
});

Clazz.newMeth(C$, 'create$java_util_function_Supplier$IA', function (typeSupplier, dim) {
return this.create$IA$TT(dim, typeSupplier.get$());
});

Clazz.newMeth(C$, 'cache$TT', function (type) {
if (this.type == null ) this.type=type;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:07 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
