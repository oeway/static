(function(){var P$=Clazz.newPackage("net.imagej.overlay"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractROIOverlay", null, 'net.imagej.overlay.AbstractOverlay');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['roi','<R extends net.imglib2.roi.RegionOfInterest>']]]

Clazz.newMeth(C$, ['c$$TR'], function (roi) {
;C$.superclazz.c$$net_imglib2_RealInterval.apply(this,[roi]);C$.$init$.apply(this);
this.roi=roi;
}, 1);

Clazz.newMeth(C$, ['c$$org_scijava_Context$TR'], function (context, roi) {
;C$.superclazz.c$$org_scijava_Context$net_imglib2_RealInterval.apply(this,[context, roi]);C$.$init$.apply(this);
this.roi=roi;
}, 1);

Clazz.newMeth(C$, 'getRegionOfInterest$', function () {
return this.roi;
});

Clazz.newMeth(C$, ['setRegionOfInterest$TR'], function (roi) {
this.roi=roi;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:01 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
