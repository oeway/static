(function(){var P$=Clazz.newPackage("io.scif"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AbstractPlane", null, null, 'io.scif.DataPlane');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.data=null;
this.lut=null;
this.meta=null;
}, 1);

C$.$fields$=[['O',['data','<T>','lut','net.imglib2.display.ColorTable','meta','io.scif.ImageMetadata','bounds','net.imglib2.Interval']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$io_scif_ImageMetadata$net_imglib2_Interval', function (meta, bounds) {
;C$.$init$.apply(this);
this.populate$io_scif_ImageMetadata$net_imglib2_Interval(meta, bounds);
}, 1);

Clazz.newMeth(C$, ['setData$TT'], function (data) {
this.data=data;
});

Clazz.newMeth(C$, 'getData$', function () {
return this.data;
});

Clazz.newMeth(C$, 'setColorTable$net_imglib2_display_ColorTable', function (lut) {
this.lut=lut;
});

Clazz.newMeth(C$, 'getColorTable$', function () {
return this.lut;
});

Clazz.newMeth(C$, 'getImageMetadata$', function () {
return this.meta;
});

Clazz.newMeth(C$, 'populate$io_scif_Plane', function (p) {
return this.populate$io_scif_ImageMetadata$net_imglib2_Interval(p.getImageMetadata$(), p.getBounds$());
});

Clazz.newMeth(C$, 'populate$io_scif_DataPlane', function (plane) {
return this.populate$io_scif_ImageMetadata$TT$net_imglib2_Interval(plane.getImageMetadata$(), plane.getData$(), plane.getBounds$());
});

Clazz.newMeth(C$, ['populate$io_scif_ImageMetadata$net_imglib2_Interval','populatenull'], function (meta, bounds) {
return this.populate$io_scif_ImageMetadata$TT$net_imglib2_Interval(meta, null, bounds);
});

Clazz.newMeth(C$, ['populate$TT$net_imglib2_Interval'], function (data, bounds) {
return this.populate$io_scif_ImageMetadata$TT$net_imglib2_Interval(null, data, bounds);
});

Clazz.newMeth(C$, ['populate$io_scif_ImageMetadata$TT$net_imglib2_Interval'], function (meta, data, bounds) {
this.setImageMetadata$io_scif_ImageMetadata(meta);
if (data == null ) data=this.blankPlane$net_imglib2_Interval(bounds);
this.setData$TT(data);
this.setBounds$net_imglib2_Interval(bounds);
var pl=this;
return pl;
});

Clazz.newMeth(C$, 'setImageMetadata$io_scif_ImageMetadata', function (meta) {
this.meta=meta;
});

Clazz.newMeth(C$, 'getBounds$', function () {
return this.bounds;
});

Clazz.newMeth(C$, 'setBounds$net_imglib2_Interval', function (bounds) {
this.bounds=bounds;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:35 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
