(function(){var P$=Clazz.newPackage("io.scif.img"),I$=[[0,'io.scif.img.cell.SCIFIOCellImg']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SCIFIOImgPlus", null, 'net.imagej.ImgPlus', 'org.scijava.Disposable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_Img', function (img) {
;C$.superclazz.c$$net_imglib2_img_Img.apply(this,[img]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_Img$S', function (img, name) {
;C$.superclazz.c$$net_imglib2_img_Img$S.apply(this,[img, name]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_Img$S$net_imagej_axis_AxisTypeA', function (img, name, axes) {
;C$.superclazz.c$$net_imglib2_img_Img$S$net_imagej_axis_AxisTypeA.apply(this,[img, name, axes]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_Img$net_imagej_ImgPlusMetadata', function (img, metadata) {
;C$.superclazz.c$$net_imglib2_img_Img$net_imagej_ImgPlusMetadata.apply(this,[img, metadata]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imglib2_img_Img$S$net_imagej_axis_AxisTypeA$DA', function (img, name, axes, cal) {
;C$.superclazz.c$$net_imglib2_img_Img$S$net_imagej_axis_AxisTypeA$DA.apply(this,[img, name, axes, cal]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_ImgPlus', function (imgPlus) {
C$.c$$net_imglib2_img_Img$net_imagej_ImgPlusMetadata.apply(this, [imgPlus.getImg$(), imgPlus]);
}, 1);

Clazz.newMeth(C$, 'getMetadata$', function () {
return this.getProperties$().get$O("scifio.metadata.global");
});

Clazz.newMeth(C$, 'setMetadata$io_scif_Metadata', function (meta) {
this.getProperties$().put$TK$TV("scifio.metadata.global", meta);
});

Clazz.newMeth(C$, 'getImageMetadata$', function () {
return this.getProperties$().get$O("scifio.metadata.image");
});

Clazz.newMeth(C$, 'setImageMetadata$io_scif_ImageMetadata', function (imageMeta) {
this.getProperties$().put$TK$TV("scifio.metadata.image", imageMeta);
});

Clazz.newMeth(C$, 'getColorTable$I', function (planeIndex) {
return this.getColorTable$I$I(0, planeIndex);
});

Clazz.newMeth(C$, 'getColorTable$I$I', function (imageIndex, planeIndex) {
var table=C$.superclazz.prototype.getColorTable$I.apply(this, [planeIndex]);
if (table == null  && Clazz.getClass($I$(1)).isAssignableFrom$Class(this.getImg$().getClass$()) ) {
try {
table=(this.getImg$()).getColorTable$I$I(imageIndex, planeIndex);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"io.scif.FormatException")){
var e = e$$;
{
return null;
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
return null;
}
} else {
throw e$$;
}
}
this.setColorTable$net_imglib2_display_ColorTable$I(table, planeIndex);
}return table;
});

Clazz.newMeth(C$, 'copy$', function () {
var copy=Clazz.new_(1,{T:"Object"},C$.c$$net_imglib2_img_Img$net_imagej_ImgPlusMetadata,[this.getImg$().copy$(), this]);
copy.setMetadata$io_scif_Metadata(this.getMetadata$());
return copy;
});

Clazz.newMeth(C$, 'dispose$', function () {
var img=this.getImg$();
if (Clazz.instanceOf(img, "org.scijava.Disposable")) {
(img).dispose$();
}});

Clazz.newMeth(C$, 'setROIsAndTablesProperties$io_scif_Metadata$I', function (meta, index) {
var roisSet=this.getProperties$().get$O("rois") != null ;
var tablesSet=this.getProperties$().get$O("tables") != null ;
if (roisSet && tablesSet ) return;
if (!roisSet) this.getProperties$().put$TK$TV("rois", meta.get$I(index).getROIs$());
if (!tablesSet) this.getProperties$().put$TK$TV("tables", meta.get$I(index).getTables$());
if (Clazz.instanceOf(meta, "io.scif.filters.MetadataWrapper")) this.setROIsAndTablesProperties$io_scif_Metadata$I((meta).unwrap$(), index);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:43 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
