(function(){var P$=Clazz.newPackage("net.imglib2.img.planar"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PlanarLocalizingCursor1D", null, 'net.imglib2.img.planar.PlanarLocalizingCursor');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_planar_PlanarLocalizingCursor1D', function (cursor) {
;C$.superclazz.c$$net_imglib2_img_planar_PlanarLocalizingCursor.apply(this,[cursor]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_planar_PlanarImg', function (container) {
;C$.superclazz.c$$net_imglib2_img_planar_PlanarImg.apply(this,[container]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'copy$', function () {
return Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_img_planar_PlanarLocalizingCursor1D,[this]);
});

Clazz.newMeth(C$, 'hasNext$', function () {
return this.type.getIndex$() < this.lastIndex;
});

Clazz.newMeth(C$, 'fwd$', function () {
this.type.incIndex$();
++this.position[0];
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:09 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
