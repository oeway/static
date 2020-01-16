(function(){var P$=Clazz.newPackage("net.imglib2.outofbounds"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "OutOfBoundsConstantValue", null, 'net.imglib2.outofbounds.AbstractOutOfBoundsValue');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['value','<T extends Type<T>>']]]

Clazz.newMeth(C$, 'c$$net_imglib2_outofbounds_OutOfBoundsConstantValue', function (outOfBounds) {
;C$.superclazz.c$$net_imglib2_outofbounds_AbstractOutOfBoundsValue.apply(this,[outOfBounds]);C$.$init$.apply(this);
this.value=outOfBounds.value.copy$();
}, 1);

Clazz.newMeth(C$, ['c$$TF$TT'], function (f, value) {
;C$.superclazz.c$$TF.apply(this,[f]);C$.$init$.apply(this);
this.value=value;
}, 1);

Clazz.newMeth(C$, 'get$', function () {
if (this.isOutOfBounds) return this.value;
return this.sampler.get$();
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_outofbounds_OutOfBoundsConstantValue,[this]);
});

Clazz.newMeth(C$, 'copyRandomAccess$', function () {
return this.copy$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:10 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
