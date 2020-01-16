(function(){var P$=Clazz.newPackage("net.imglib2.roi.mask.integer"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "MaskPredicateRandomAccess", null, 'net.imglib2.Point', 'net.imglib2.RandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['contains','net.imglib2.roi.Mask','type','<B extends BooleanType<B>>']]]

Clazz.newMeth(C$, ['c$$net_imglib2_roi_Mask$TB'], function (contains, type) {
;C$.superclazz.c$$I.apply(this,[contains.numDimensions$()]);C$.$init$.apply(this);
this.contains=contains;
this.type=type.copy$();
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_roi_mask_integer_MaskPredicateRandomAccess', function (cra) {
;C$.superclazz.c$$net_imglib2_Localizable.apply(this,[cra]);C$.$init$.apply(this);
this.contains=cra.contains;
this.type=cra.type.copy$();
}, 1);

Clazz.newMeth(C$, 'get$', function () {
this.type.set$Z(this.contains.test$(this));
return this.type;
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{B:"Object"},C$.c$$net_imglib2_roi_mask_integer_MaskPredicateRandomAccess,[this]);
});

Clazz.newMeth(C$, 'copyRandomAccess$', function () {
return this.copy$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:54 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
