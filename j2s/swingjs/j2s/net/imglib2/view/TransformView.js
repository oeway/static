(function(){var P$=Clazz.newPackage("net.imglib2.view"),I$=[[0,'net.imglib2.view.TransformBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TransformView", null, null, 'net.imglib2.view.TransformedRandomAccessible');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['n'],'O',['source','net.imglib2.RandomAccessible','transformToSource','net.imglib2.transform.Transform','fullViewRandomAccessible','net.imglib2.RandomAccessible']]]

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessible$net_imglib2_transform_Transform', function (source, transformToSource) {
;C$.$init$.apply(this);
Clazz.assert(C$, this, function(){return source.numDimensions$() == transformToSource.numTargetDimensions$()});
this.n=transformToSource.numSourceDimensions$();
this.source=source;
this.transformToSource=transformToSource;
this.fullViewRandomAccessible=null;
}, 1);

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.n;
});

Clazz.newMeth(C$, 'getSource$', function () {
return this.source;
});

Clazz.newMeth(C$, 'getTransformToSource$', function () {
return this.transformToSource;
});

Clazz.newMeth(C$, 'randomAccess$net_imglib2_Interval', function (interval) {
return $I$(1).getEfficientRandomAccessible$net_imglib2_Interval$net_imglib2_RandomAccessible(interval, this).randomAccess$();
});

Clazz.newMeth(C$, 'randomAccess$', function () {
if (this.fullViewRandomAccessible == null ) this.fullViewRandomAccessible=$I$(1).getEfficientRandomAccessible$net_imglib2_Interval$net_imglib2_RandomAccessible(null, this);
return this.fullViewRandomAccessible.randomAccess$();
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:14 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
