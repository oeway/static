(function(){var P$=Clazz.newPackage("net.imglib2.roi.mask.real"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MaskPredicateRealRandomAccess", null, 'net.imglib2.RealPoint', 'net.imglib2.RealRandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['contains','java.util.function.Predicate','type','<B extends BooleanType<B>>']]]

Clazz.newMeth(C$, ['c$$net_imglib2_roi_MaskPredicate$TB'], function (contains, type) {
;C$.superclazz.c$$I.apply(this,[contains.numDimensions$()]);C$.$init$.apply(this);
this.contains=contains;
this.type=type.createVariable$();
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_roi_mask_real_MaskPredicateRealRandomAccess', function (cra) {
;C$.superclazz.c$$I.apply(this,[cra.numDimensions$()]);C$.$init$.apply(this);
this.contains=cra.contains;
this.type=cra.type.copy$();
}, 1);

Clazz.newMeth(C$, 'get$', function () {
this.type.set$Z(this.contains.test$(this));
return this.type;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{B:"Object"},C$.c$$net_imglib2_roi_mask_real_MaskPredicateRealRandomAccess,[this]);
});

Clazz.newMeth(C$, 'copyRealRandomAccess$', function () {
return this.copy$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:54 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
