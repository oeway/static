(function(){var P$=Clazz.newPackage("net.imglib2.interpolation.randomaccess"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "FloorInterpolator", null, 'net.imglib2.position.transform.Floor', 'net.imglib2.RealRandomAccess');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_interpolation_randomaccess_FloorInterpolator', function (floorInterpolator) {
;C$.superclazz.c$$TLocalizablePositionable.apply(this,[floorInterpolator.target.copyRandomAccess$()]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_RandomAccessible', function (randomAccessible) {
;C$.superclazz.c$$TLocalizablePositionable.apply(this,[randomAccessible.randomAccess$()]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'get$', function () {
return this.target.get$();
});

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_interpolation_randomaccess_FloorInterpolator,[this]);
});

Clazz.newMeth(C$, 'copyRealRandomAccess$', function () {
return this.copy$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:09 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
