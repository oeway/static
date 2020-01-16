(function(){var P$=Clazz.newPackage("net.imglib2.img.sparse"),I$=[[0,'net.imglib2.util.Fraction','net.imglib2.img.sparse.NtreeRandomAccess','net.imglib2.img.sparse.NtreeCursor','net.imglib2.img.sparse.NtreeImgFactory','net.imglib2.FlatIterationOrder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "NtreeImg", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imglib2.img.AbstractNativeImg', 'java.io.Serializable');
C$.$classes$=[['PositionProvider',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['data','<A extends NtreeAccess<?,A>>']]]

Clazz.newMeth(C$, ['c$$TA$JA$net_imglib2_util_Fraction'], function (data, dim, entitiesPerPixel) {
;C$.superclazz.c$$JA$net_imglib2_util_Fraction.apply(this,[dim, entitiesPerPixel]);C$.$init$.apply(this);
this.data=data;
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_sparse_NtreeImg', function (img) {
;C$.superclazz.c$$JA$net_imglib2_util_Fraction.apply(this,[img.dimension, Clazz.new_($I$(1,1))]);C$.$init$.apply(this);
this.data=img.data;
}, 1);

Clazz.newMeth(C$, 'update$O', function (updater) {
return this.data.createInstance$JA((updater).getPosition$());
});

Clazz.newMeth(C$, 'randomAccess$', function () {
return Clazz.new_(1,{T:"Object"},$I$(2,1).c$$net_imglib2_img_sparse_NtreeImg,[this]);
});

Clazz.newMeth(C$, 'cursor$', function () {
return Clazz.new_(1,{T:"Object"},$I$(3,1).c$$net_imglib2_img_sparse_NtreeImg,[this]);
});

Clazz.newMeth(C$, 'localizingCursor$', function () {
return this.cursor$();
});

Clazz.newMeth(C$, 'factory$', function () {
return Clazz.new_(1,{T:"Object"},$I$(4,1).c$$TT,[this.linkedType]);
});

Clazz.newMeth(C$, 'copy$', function () {
var copy=this.factory$().create$JA(this.dimension);
var source=this.cursor$();
var target=copy.cursor$();
while (source.hasNext$())target.next$().set$TT(source.next$());

return copy;
});

Clazz.newMeth(C$, 'iterationOrder$', function () {
return Clazz.new_($I$(5,1).c$$net_imglib2_Interval,[this]);
});
;
(function(){/*i*/var C$=Clazz.newInterface(P$.NtreeImg, "PositionProvider", function(){
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:09 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
