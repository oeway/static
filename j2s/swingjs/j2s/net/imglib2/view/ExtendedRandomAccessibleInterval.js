(function(){var P$=Clazz.newPackage("net.imglib2.view"),I$=[[0,'net.imglib2.util.Intervals']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ExtendedRandomAccessibleInterval", null, null, ['net.imglib2.RandomAccessible', 'net.imglib2.View']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['source','<F extends RandomAccessibleInterval<T>>','factory','net.imglib2.outofbounds.OutOfBoundsFactory']]]

Clazz.newMeth(C$, ['c$$TF$net_imglib2_outofbounds_OutOfBoundsFactory'], function (source, factory) {
;C$.$init$.apply(this);
this.source=source;
this.factory=factory;
}, 1);

Clazz.newMeth(C$, 'numDimensions$', function () {
return this.source.numDimensions$();
});

Clazz.newMeth(C$, 'randomAccess$', function () {
return this.factory.create$(this.source);
});

Clazz.newMeth(C$, 'randomAccess$net_imglib2_Interval', function (interval) {
Clazz.assert(C$, this, function(){return this.source.numDimensions$() == interval.numDimensions$()});
if ($I$(1).contains$net_imglib2_Interval$net_imglib2_Interval(this.source, interval)) {
return this.source.randomAccess$net_imglib2_Interval(interval);
}return this.randomAccess$();
});

Clazz.newMeth(C$, 'getSource$', function () {
return this.source;
});

Clazz.newMeth(C$, 'getOutOfBoundsFactory$', function () {
return this.factory;
});
C$.$_ASSERT_ENABLED_ = ClassLoader.getClassAssertionStatus$(C$);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:13 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
