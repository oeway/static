(function(){var P$=Clazz.newPackage("net.imglib2.view.composite"),I$=[[0,'net.imglib2.view.composite.RealComposite','net.imglib2.type.NativeType','net.imglib2.img.array.ArrayImgFactory','net.imglib2.img.list.ListImgFactory']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RealComposite", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imglib2.view.composite.AbstractNumericComposite');
C$.$classes$=[['Factory',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccess$I', function (sourceAccess, length) {
;C$.superclazz.c$$net_imglib2_RandomAccess$I.apply(this,[sourceAccess, length]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createVariable$', function () {
var t=this.sourceAccess.get$();
var img;
if (Clazz.getClass($I$(2),['decIndex$','decIndex$I','duplicateTypeOnSameNativeImg$','getEntitiesPerPixel$','getIndex$','getNativeTypeFactory$','incIndex$','incIndex$I','updateContainer$O','updateIndex$I']).isInstance$O(t)) img=Clazz.new_($I$(3,1).c$$TT,[t]).create$JA([this.length]);
 else img=Clazz.new_(1,{T:"Object"},$I$(4,1).c$$TT,[t]).create$JA([this.length]);
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_RandomAccess$I,[img.randomAccess$(), this.length]);
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_RandomAccess$I,[this.sourceAccess.copyRandomAccess$(), this.length]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.RealComposite, "Factory", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'net.imglib2.view.composite.CompositeFactory');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['numChannels']]]

Clazz.newMeth(C$, 'c$$I', function (numChannels) {
;C$.$init$.apply(this);
this.numChannels=numChannels;
}, 1);

Clazz.newMeth(C$, ['create$net_imglib2_RandomAccess','create$'], function (sourceAccess) {
return Clazz.new_(1,{T:"Object"},$I$(1,1).c$$net_imglib2_RandomAccess$I,[sourceAccess, this.numChannels]);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:14 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
