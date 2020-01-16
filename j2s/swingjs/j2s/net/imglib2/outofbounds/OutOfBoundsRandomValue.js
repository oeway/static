(function(){var P$=Clazz.newPackage("net.imglib2.outofbounds"),I$=[[0,'java.util.Random']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "OutOfBoundsRandomValue", null, 'net.imglib2.outofbounds.AbstractOutOfBoundsValue');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['D',['minValue','maxValue','range'],'O',['value','<T extends RealType<T>>','rnd','java.util.Random']]]

Clazz.newMeth(C$, 'c$$net_imglib2_outofbounds_OutOfBoundsRandomValue', function (outOfBounds) {
;C$.superclazz.c$$net_imglib2_outofbounds_AbstractOutOfBoundsValue.apply(this,[outOfBounds]);C$.$init$.apply(this);
this.value=outOfBounds.value.copy$();
this.minValue=outOfBounds.minValue;
this.maxValue=outOfBounds.maxValue;
this.range=outOfBounds.range;
this.rnd=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, ['c$$TF$TT$java_util_Random$D$D'], function (f, value, rnd, min, max) {
;C$.superclazz.c$$TF.apply(this,[f]);C$.$init$.apply(this);
this.value=value;
this.rnd=rnd;
this.minValue=min;
this.maxValue=max;
this.range=max - min;
}, 1);

Clazz.newMeth(C$, 'get$', function () {
if (this.isOutOfBounds) {
this.value.setReal$D(this.rnd.nextDouble$() * this.range + this.minValue);
return this.value;
}return this.sampler.get$();
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_outofbounds_OutOfBoundsRandomValue,[this]);
});

Clazz.newMeth(C$, 'copyRandomAccess$', function () {
return this.copy$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
