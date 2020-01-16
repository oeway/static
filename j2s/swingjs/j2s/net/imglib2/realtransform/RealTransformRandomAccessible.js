(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),I$=[[0,['net.imglib2.realtransform.RealTransformRandomAccessible','.RealTransformRandomAccess']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RealTransformRandomAccessible", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'net.imglib2.realtransform.RealTransformRealRandomAccessible', 'net.imglib2.RandomAccessible');
C$.$classes$=[['RealTransformRandomAccess',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['c$$net_imglib2_RealRandomAccessible$TR'], function (source, transformToSource) {
;C$.superclazz.c$$net_imglib2_RealRandomAccessible$TR.apply(this,[source, transformToSource]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'randomAccess$', function () {
return Clazz.new_($I$(1,1), [this, null]);
});

Clazz.newMeth(C$, 'randomAccess$net_imglib2_Interval', function (interval) {
return this.randomAccess$();
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.RealTransformRandomAccessible, "RealTransformRandomAccess", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'net.imglib2.Point', 'net.imglib2.RandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['sourceAccess','net.imglib2.RealRandomAccess','transformCopy','<R extends net.imglib2.realtransform.RealTransform>']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$I.apply(this,[this.this$0.transformToSource.numSourceDimensions$()]);C$.$init$.apply(this);
this.sourceAccess=this.this$0.source.realRandomAccess$();
this.transformCopy=this.this$0.transformToSource.copy$();
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_realtransform_RealTransformRandomAccessible_RealTransformRandomAccess', function (a) {
;C$.superclazz.c$$net_imglib2_Localizable.apply(this,[a]);C$.$init$.apply(this);
this.sourceAccess=a.sourceAccess.copyRealRandomAccess$();
this.transformCopy=a.transformCopy.copy$();
}, 1);

Clazz.newMeth(C$, 'apply$', function () {
this.transformCopy.apply$net_imglib2_RealLocalizable$net_imglib2_RealPositionable(this, this.sourceAccess);
});

Clazz.newMeth(C$, 'get$', function () {
this.apply$();
return this.sourceAccess.get$();
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(C$.c$$net_imglib2_realtransform_RealTransformRandomAccessible_RealTransformRandomAccess, [this, null, this]);
});

Clazz.newMeth(C$, 'copyRandomAccess$', function () {
return this.copy$();
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
