(function(){var P$=Clazz.newPackage("net.imagej"),p$1={},I$=[[0,'net.imagej.Dataset','java.util.ArrayList','net.imglib2.type.logic.BitType','net.imglib2.type.numeric.integer.ByteType','net.imglib2.type.numeric.integer.UnsignedByteType','net.imglib2.type.numeric.integer.Unsigned12BitType','net.imglib2.type.numeric.integer.ShortType','net.imglib2.type.numeric.integer.UnsignedShortType','net.imglib2.type.numeric.real.FloatType','net.imglib2.type.numeric.integer.IntType','net.imglib2.type.numeric.integer.UnsignedIntType','net.imglib2.type.numeric.real.DoubleType','net.imglib2.type.numeric.integer.LongType','net.imglib2.img.cell.CellImgFactory','net.imglib2.img.planar.PlanarImgFactory','net.imagej.ImgPlus','net.imagej.DefaultDataset','net.imglib2.img.ImgView','net.imglib2.util.Util']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultDatasetService", null, 'org.scijava.service.AbstractService', 'net.imagej.DatasetService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['scriptService','org.scijava.script.ScriptService','log','org.scijava.log.LogService','objectService','org.scijava.object.ObjectService','dataTypeService','net.imagej.types.DataTypeService']]]

Clazz.newMeth(C$, 'getObjectService$', function () {
return this.objectService;
});

Clazz.newMeth(C$, 'getDatasets$', function () {
return this.objectService.getObjects$Class(Clazz.getClass($I$(1),['axis$net_imagej_axis_AxisType','copyDataFrom$net_imagej_Dataset','copyInto$net_imagej_Dataset','dimension$net_imagej_axis_AxisType','duplicate$','duplicateBlank$','factory$','getBytesOfInfo$','getChannels$','getDepth$','getFrames$','getHeight$','getImgPlus$','getPlane$I','getPlane$I$Z','getType$','getTypeLabelLong$','getTypeLabelShort$','getWidth$','isDirty$','isInteger$','isRGBMerged$','isSigned$','rebuild$','rgbChange$','setAxes$net_imagej_axis_CalibratedAxisA','setDirty$Z','setImgPlus$net_imagej_ImgPlus','setPlane$I$O','setPlaneSilently$I$O','setRGBMerged$Z','typeChange$','typedImg$TT','update$']));
});

Clazz.newMeth(C$, 'getDatasets$net_imagej_display_ImageDisplay', function (display) {
var datasets=Clazz.new_(1,{E:"net.imagej.Dataset"},$I$(2,1));
if (display != null ) {
for (var view, $view = display.iterator$(); $view.hasNext$()&&((view=($view.next$())),1);) {
var data=view.getData$();
if (!(Clazz.instanceOf(data, "net.imagej.Dataset"))) continue;
var dataset=data;
datasets.add$TE(dataset);
}
}return datasets;
});

Clazz.newMeth(C$, 'create$JA$S$net_imagej_axis_AxisTypeA$I$Z$Z', function (dims, name, axes, bitsPerPixel, signed, floating) {
return this.create$JA$S$net_imagej_axis_AxisTypeA$I$Z$Z$Z(dims, name, axes, bitsPerPixel, signed, floating, false);
});

Clazz.newMeth(C$, 'create$JA$S$net_imagej_axis_AxisTypeA$I$Z$Z$Z', function (dims, name, axes, bitsPerPixel, signed, floating, virtual) {
if (bitsPerPixel == 1) {
if (signed || floating ) p$1.invalidParams$I$Z$Z.apply(this, [bitsPerPixel, signed, floating]);
return this.create$TT$JA$S$net_imagej_axis_AxisTypeA$Z(Clazz.new_($I$(3,1)), dims, name, axes, virtual);
}if (bitsPerPixel == 8) {
if (floating) p$1.invalidParams$I$Z$Z.apply(this, [bitsPerPixel, signed, floating]);
if (signed) return this.create$TT$JA$S$net_imagej_axis_AxisTypeA$Z(Clazz.new_($I$(4,1)), dims, name, axes, virtual);
return this.create$TT$JA$S$net_imagej_axis_AxisTypeA$Z(Clazz.new_($I$(5,1)), dims, name, axes, virtual);
}if (bitsPerPixel == 12) {
if (signed || floating ) p$1.invalidParams$I$Z$Z.apply(this, [bitsPerPixel, signed, floating]);
return this.create$TT$JA$S$net_imagej_axis_AxisTypeA$Z(Clazz.new_($I$(6,1)), dims, name, axes, virtual);
}if (bitsPerPixel == 16) {
if (floating) p$1.invalidParams$I$Z$Z.apply(this, [bitsPerPixel, signed, floating]);
if (signed) return this.create$TT$JA$S$net_imagej_axis_AxisTypeA$Z(Clazz.new_($I$(7,1)), dims, name, axes, virtual);
return this.create$TT$JA$S$net_imagej_axis_AxisTypeA$Z(Clazz.new_($I$(8,1)), dims, name, axes, virtual);
}if (bitsPerPixel == 32) {
if (floating) {
if (!signed) p$1.invalidParams$I$Z$Z.apply(this, [bitsPerPixel, signed, floating]);
return this.create$TT$JA$S$net_imagej_axis_AxisTypeA$Z(Clazz.new_($I$(9,1)), dims, name, axes, virtual);
}if (signed) return this.create$TT$JA$S$net_imagej_axis_AxisTypeA$Z(Clazz.new_($I$(10,1)), dims, name, axes, virtual);
return this.create$TT$JA$S$net_imagej_axis_AxisTypeA$Z(Clazz.new_($I$(11,1)), dims, name, axes, virtual);
}if (bitsPerPixel == 64) {
if (!signed) p$1.invalidParams$I$Z$Z.apply(this, [bitsPerPixel, signed, floating]);
if (floating) return this.create$TT$JA$S$net_imagej_axis_AxisTypeA$Z(Clazz.new_($I$(12,1)), dims, name, axes, virtual);
return this.create$TT$JA$S$net_imagej_axis_AxisTypeA$Z(Clazz.new_($I$(13,1)), dims, name, axes, virtual);
}p$1.invalidParams$I$Z$Z.apply(this, [bitsPerPixel, signed, floating]);
return null;
});

Clazz.newMeth(C$, 'create$TT$JA$S$net_imagej_axis_AxisTypeA', function (type, dims, name, axes) {
return this.create$TT$JA$S$net_imagej_axis_AxisTypeA$Z(type, dims, name, axes, false);
});

Clazz.newMeth(C$, 'create$TT$JA$S$net_imagej_axis_AxisTypeA$Z', function (type, dims, name, axes, virtual) {
var imgFactory;
if (virtual) imgFactory=Clazz.new_(1,{T:"Object"},$I$(14,1).c$$TT,[type]);
 else imgFactory=Clazz.new_(1,{T:"Object"},$I$(15,1).c$$TT,[type]);
return this.create$net_imglib2_img_ImgFactory$JA$S$net_imagej_axis_AxisTypeA(imgFactory, dims, name, axes);
});

Clazz.newMeth(C$, 'create$net_imglib2_img_ImgFactory$JA$S$net_imagej_axis_AxisTypeA', function (factory, dims, name, axes) {
var img=factory.create$JA(dims);
var imgPlus=Clazz.new_(1,{T:"Object"},$I$(16,1).c$$net_imglib2_img_Img$S$net_imagej_axis_AxisTypeA$DA,[img, name, axes, null]);
return this.create$net_imagej_ImgPlus(imgPlus);
});

Clazz.newMeth(C$, 'create$net_imagej_ImgPlus', function (imgPlus) {
return Clazz.new_($I$(17,1).c$$org_scijava_Context$net_imagej_ImgPlus,[this.getContext$(), imgPlus]);
});

Clazz.newMeth(C$, 'create$net_imglib2_RandomAccessibleInterval', function (rai) {
return this.create$net_imagej_ImgPlus(p$1.wrapToImgPlus$net_imglib2_RandomAccessibleInterval.apply(this, [rai]));
});

Clazz.newMeth(C$, 'initialize$', function () {
this.scriptService.addAlias$Class(Clazz.getClass($I$(1),['axis$net_imagej_axis_AxisType','copyDataFrom$net_imagej_Dataset','copyInto$net_imagej_Dataset','dimension$net_imagej_axis_AxisType','duplicate$','duplicateBlank$','factory$','getBytesOfInfo$','getChannels$','getDepth$','getFrames$','getHeight$','getImgPlus$','getPlane$I','getPlane$I$Z','getType$','getTypeLabelLong$','getTypeLabelShort$','getWidth$','isDirty$','isInteger$','isRGBMerged$','isSigned$','rebuild$','rgbChange$','setAxes$net_imagej_axis_CalibratedAxisA','setDirty$Z','setImgPlus$net_imagej_ImgPlus','setPlane$I$O','setPlaneSilently$I$O','setRGBMerged$Z','typeChange$','typedImg$TT','update$']));
});

Clazz.newMeth(C$, 'canOpen$S', function (source) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Use io.scif.services.DatasetIOService instead."]);
});

Clazz.newMeth(C$, 'canSave$S', function (destination) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Use io.scif.services.DatasetIOService instead."]);
});

Clazz.newMeth(C$, 'open$S', function (source) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Use io.scif.services.DatasetIOService instead."]);
});

Clazz.newMeth(C$, 'open$S$O', function (source, config) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Use io.scif.services.DatasetIOService instead."]);
});

Clazz.newMeth(C$, 'revert$net_imagej_Dataset', function (dataset) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Use io.scif.services.DatasetIOService instead."]);
});

Clazz.newMeth(C$, 'save$net_imagej_Dataset$S', function (dataset, destination) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Use io.scif.services.DatasetIOService instead."]);
});

Clazz.newMeth(C$, 'save$net_imagej_Dataset$S$O', function (dataset, destination, config) {
throw Clazz.new_(Clazz.load('UnsupportedOperationException').c$$S,["Use io.scif.services.DatasetIOService instead."]);
});

Clazz.newMeth(C$, 'create$net_imglib2_img_ImgFactory$TT$JA$S$net_imagej_axis_AxisTypeA', function (factory, type, dims, name, axes) {
var img=factory.create$JA$TT(dims, type);
var imgPlus=Clazz.new_(1,{T:"Object"},$I$(16,1).c$$net_imglib2_img_Img$S$net_imagej_axis_AxisTypeA$DA,[img, name, axes, null]);
return this.create$net_imagej_ImgPlus(imgPlus);
});

Clazz.newMeth(C$, 'invalidParams$I$Z$Z', function (bitsPerPixel, signed, floating) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid parameters: bitsPerPixel=" + bitsPerPixel + ", signed=" + signed + ", floating=" + floating ]);
}, p$1);

Clazz.newMeth(C$, 'wrapToImgPlus$net_imglib2_RandomAccessibleInterval', function (rai) {
if (Clazz.instanceOf(rai, "net.imagej.ImgPlus")) return rai;
return Clazz.new_(1,{T:"Object"},$I$(16,1).c$$net_imglib2_img_Img,[p$1.wrapToImg$net_imglib2_RandomAccessibleInterval.apply(this, [rai])]);
}, p$1);

Clazz.newMeth(C$, 'wrapToImg$net_imglib2_RandomAccessibleInterval', function (rai) {
if (Clazz.instanceOf(rai, "net.imglib2.img.Img")) return rai;
return $I$(18).wrap$net_imglib2_RandomAccessibleInterval$net_imglib2_img_ImgFactory(rai, p$1.imgFactory$net_imglib2_RandomAccessibleInterval.apply(this, [rai]));
}, p$1);

Clazz.newMeth(C$, 'imgFactory$net_imglib2_RandomAccessibleInterval', function (rai) {
var type=$I$(19).getTypeFromInterval$TF(rai);
return $I$(19).getSuitableImgFactory$net_imglib2_Dimensions$TT(rai, type);
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.DefaultDatasetService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['scriptService','org.scijava.script.ScriptService',null,['org.scijava.plugin.Parameter']],['']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']],
  [['objectService','org.scijava.object.ObjectService',null,['org.scijava.plugin.Parameter']],['']],
  [['dataTypeService','net.imagej.types.DataTypeService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:56 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
