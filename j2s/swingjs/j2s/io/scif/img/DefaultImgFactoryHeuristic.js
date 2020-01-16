(function(){var P$=Clazz.newPackage("io.scif.img"),p$1={},I$=[[0,'net.imglib2.img.list.ListImgFactory','org.scijava.util.ArrayUtils','io.scif.util.MemoryTools','net.imagej.axis.Axes','io.scif.util.FormatTools','java.util.ArrayList','java.util.Arrays',['io.scif.config.SCIFIOConfig','.ImgMode'],'io.scif.img.cell.SCIFIOCellImgFactory','net.imglib2.img.array.ArrayImgFactory','net.imglib2.img.planar.PlanarImgFactory']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultImgFactoryHeuristic", null, null, 'io.scif.img.ImgFactoryHeuristic');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['createFactory$io_scif_Metadata$io_scif_config_SCIFIOConfig_ImgModeA$TT','createFactory$'], function (m, imgModes, type) {
if (!(Clazz.instanceOf(type, "net.imglib2.type.NativeType"))) return Clazz.new_(1,{T:"Object"},$I$(1,1).c$$TT,[type]);
var result=p$1.createNativeFactory$io_scif_Metadata$io_scif_config_SCIFIOConfig_ImgModeA$TT.apply(this, [m, imgModes, type]);
return result;
});

Clazz.newMeth(C$, 'createNativeFactory$io_scif_Metadata$io_scif_config_SCIFIOConfig_ImgModeA$TT', function (m, imgModes, type) {
var maxSize=$I$(2).safeMultiply64$JA([2, 1024, 1024, 1024]);
var availableMem=(($I$(3).totalAvailableMemory$() * 0.75)|0);
var datasetSize=m.getDatasetSize$();
if (datasetSize <= 0) datasetSize=9223372036854775807;
var planeSize=m.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(4).X) * m.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(4).Y) * $I$(5).getBytesPerPixel$I(m.get$I(0).getPixelType$()) ;
var fitsInMemory=availableMem > datasetSize;
var modes=Clazz.new_(1,{E:"io.scif.config.SCIFIOConfig.ImgMode"},$I$(6,1).c$$java_util_Collection,[$I$(7).asList$TTA(imgModes)]);
modes.add$TE($I$(8).AUTO);
for (var mode, $mode = modes.iterator$(); $mode.hasNext$()&&((mode=($mode.next$())),1);) {
switch (mode) {
case $I$(8).AUTO:
if (!fitsInMemory) return Clazz.new_(1,{T:"Object"},$I$(9,1).c$$TT,[type]);
if (datasetSize < maxSize) return Clazz.new_(1,{T:"Object"},$I$(10,1).c$$TT,[type]);
return Clazz.new_(1,{T:"Object"},$I$(11,1).c$$TT,[type]);
case $I$(8).ARRAY:
if (datasetSize < maxSize && fitsInMemory ) return Clazz.new_(1,{T:"Object"},$I$(10,1).c$$TT,[type]);
break;
case $I$(8).PLANAR:
if (planeSize < maxSize && fitsInMemory ) return Clazz.new_(1,{T:"Object"},$I$(11,1).c$$TT,[type]);
break;
case $I$(8).CELL:
return Clazz.new_(1,{T:"Object"},$I$(9,1).c$$TT,[type]);
}
}
throw Clazz.new_(Clazz.load('net.imglib2.exception.IncompatibleTypeException').c$$O$S,[this, "Cannot create ImgFactory of type " + type.getClass$().getName$()]);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
