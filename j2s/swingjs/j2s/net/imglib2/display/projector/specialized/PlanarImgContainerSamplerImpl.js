(function(){var P$=Clazz.newPackage("net.imglib2.display.projector.specialized"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PlanarImgContainerSamplerImpl", null, null, [['net.imglib2.img.planar.PlanarImg','net.imglib2.img.planar.PlanarImg.PlanarContainerSampler']]);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.m_currentSliceIndex=-1;
}, 1);

C$.$fields$=[['I',['m_currentSliceIndex']]]

Clazz.newMeth(C$, 'c$$I', function (startIndex) {
;C$.$init$.apply(this);
this.m_currentSliceIndex=startIndex;
}, 1);

Clazz.newMeth(C$, 'getCurrentSliceIndex$', function () {
return this.m_currentSliceIndex;
});

Clazz.newMeth(C$, 'fwd$', function () {
return this.m_currentSliceIndex++;
});

Clazz.newMeth(C$, 'setCurrentSlice$I', function (slice) {
this.m_currentSliceIndex=slice;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:06 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
