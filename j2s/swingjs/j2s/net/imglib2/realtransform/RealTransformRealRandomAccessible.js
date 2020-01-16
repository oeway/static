(function(){var P$=Clazz.newPackage("net.imglib2.realtransform"),I$=[[0,['net.imglib2.realtransform.RealTransformRealRandomAccessible','.RealTransformRealRandomAccess']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "RealTransformRealRandomAccessible", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'net.imglib2.RealRandomAccessible');
C$.$classes$=[['RealTransformRealRandomAccess',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['source','net.imglib2.RealRandomAccessible','transformToSource','<R extends net.imglib2.realtransform.RealTransform>']]]

Clazz.newMeth(C$, ['c$$net_imglib2_RealRandomAccessible$TR'], function (source, transformToSource) {
;C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return source.numDimensions$() == transformToSource.numTargetDimensions$()});
this.source=source;
this.transformToSource=transformToSource;
}, 1);

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.transformToSource.numSourceDimensions$();
});

Clazz.newMeth(C$, 'realRandomAccess$', function () {
return Clazz.new_($I$(1,1), [this, null]);
});

Clazz.newMeth(C$, 'realRandomAccess$net_imglib2_RealInterval', function (interval) {
return this.realRandomAccess$();
});

Clazz.newMeth(C$, 'getSource$', function () {
return this.source;
});

Clazz.newMeth(C$, 'getTransformToSource$', function () {
return this.transformToSource;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);
;
(function(){/*c*/var C$=Clazz.newClass(P$.RealTransformRealRandomAccessible, "RealTransformRealRandomAccess", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'net.imglib2.RealPoint', 'net.imglib2.RealRandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['sourceAccess','net.imglib2.RealRandomAccess','transformCopy','<R extends net.imglib2.realtransform.RealTransform>']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$I.apply(this,[this.this$0.transformToSource.numSourceDimensions$()]);C$.$init$.apply(this);
this.sourceAccess=this.this$0.source.realRandomAccess$();
this.transformCopy=this.this$0.transformToSource.copy$();
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_realtransform_RealTransformRealRandomAccessible_RealTransformRealRandomAccess', function (a) {
;C$.superclazz.c$$net_imglib2_RealLocalizable.apply(this,[a]);C$.$init$.apply(this);
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
return Clazz.new_(C$.c$$net_imglib2_realtransform_RealTransformRealRandomAccessible_RealTransformRealRandomAccess, [this, null, this]);
});

Clazz.newMeth(C$, 'copyRealRandomAccess$', function () {
return this.copy$();
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:55 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
