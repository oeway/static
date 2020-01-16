(function(){var P$=Clazz.newPackage("io.scif.img"),p$1={},I$=[[0,'io.scif.config.SCIFIOConfig','io.scif.filters.ReaderFilter','java.util.ArrayList','io.scif.img.Range','io.scif.img.cell.SCIFIOCellImgFactory','io.scif.util.FormatTools','io.scif.img.DefaultImgFactoryHeuristic','io.scif.filters.ChannelFiller','io.scif.filters.PlaneSeparator','io.scif.filters.MinMaxFilter','java.util.HashSet','net.imagej.axis.Axes','net.imagej.axis.AxisType','io.scif.img.SCIFIOImgPlus','net.imglib2.FinalInterval']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ImgOpener", null, 'io.scif.img.AbstractImgIOComponent');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.allowCellImgFactory=false &&true;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['statusService','org.scijava.app.StatusService','pcService','io.scif.img.converters.PlaneConverterService','initializeService','io.scif.services.InitializeService']]
,['Z',['allowCellImgFactory']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context', function (ctx) {
;C$.superclazz.c$$org_scijava_Context.apply(this,[ctx]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'openImgs$org_scijava_io_location_Location', function (source) {
return this.openImgs$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(source, null);
});

Clazz.newMeth(C$, 'openImgs$org_scijava_io_location_Location$TT', function (source, type) {
return this.openImgs$org_scijava_io_location_Location$TT$io_scif_config_SCIFIOConfig(source, type, null);
});

Clazz.newMeth(C$, 'openImgs$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig', function (source, config) {
if (config == null ) {
config=Clazz.new_($I$(1,1));
}var r=p$1.createReader$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig.apply(this, [source, config]);
return this.openImgs$io_scif_Reader$io_scif_config_SCIFIOConfig(r, config);
});

Clazz.newMeth(C$, 'openImgs$org_scijava_io_location_Location$TT$io_scif_config_SCIFIOConfig', function (source, type, config) {
if (config == null ) {
config=Clazz.new_($I$(1,1)).imgOpenerSetComputeMinMax$Z(true);
}var r=p$1.createReader$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig.apply(this, [source, config]);
return this.openImgs$io_scif_Reader$TT$io_scif_config_SCIFIOConfig(r, type, config);
});

Clazz.newMeth(C$, 'openImgs$org_scijava_io_location_Location$net_imglib2_img_ImgFactory', function (source, imgFactory) {
return this.openImgs$org_scijava_io_location_Location$net_imglib2_img_ImgFactory$io_scif_config_SCIFIOConfig(source, imgFactory, null);
});

Clazz.newMeth(C$, 'openImgs$org_scijava_io_location_Location$net_imglib2_img_ImgFactory$io_scif_config_SCIFIOConfig', function (source, imgFactory, config) {
if (config == null ) {
config=Clazz.new_($I$(1,1)).imgOpenerSetComputeMinMax$Z(true);
}var r=p$1.createReader$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig.apply(this, [source, config]);
return this.openImgs$io_scif_Reader$net_imglib2_img_ImgFactory$io_scif_config_SCIFIOConfig(r, imgFactory, config);
});

Clazz.newMeth(C$, 'openImgs$io_scif_Reader', function (reader) {
return this.openImgs$io_scif_Reader$io_scif_config_SCIFIOConfig(reader, null);
});

Clazz.newMeth(C$, 'openImgs$io_scif_Reader$io_scif_config_SCIFIOConfig', function (reader, config) {
return this.openImgs$io_scif_Reader$TT$io_scif_config_SCIFIOConfig(reader, p$1.getType$io_scif_Reader.apply(this, [reader]), config);
});

Clazz.newMeth(C$, 'openImgs$io_scif_Reader$TT$io_scif_config_SCIFIOConfig', function (reader, type, config) {
if (config == null ) {
config=Clazz.new_($I$(1,1)).imgOpenerSetComputeMinMax$Z(true);
}var heuristic=p$1.getHeuristic$io_scif_config_SCIFIOConfig.apply(this, [config]);
var imgFactory;
try {
imgFactory=heuristic.createFactory$(reader.getMetadata$(), config.imgOpenerGetImgModes$(), type);
} catch (e) {
if (Clazz.exceptionOf(e,"net.imglib2.exception.IncompatibleTypeException")){
throw Clazz.new_(Clazz.load('io.scif.img.ImgIOException').c$$Throwable,[e]);
} else {
throw e;
}
}
return this.openImgs$io_scif_Reader$net_imglib2_img_ImgFactory$io_scif_config_SCIFIOConfig(reader, imgFactory, config);
});

Clazz.newMeth(C$, 'openImgs$io_scif_Reader$net_imglib2_img_ImgFactory$io_scif_config_SCIFIOConfig', function (reader, imgFactory, config) {
if (!Clazz.getClass($I$(2)).isAssignableFrom$Class(reader.getClass$())) {
reader=Clazz.new_($I$(2,1).c$$io_scif_Reader,[reader]);
}var imgPluses=Clazz.new_(1,{E:"io.scif.img.SCIFIOImgPlus"},$I$(3,1));
var imageRange=null;
if (config == null ) {
config=Clazz.new_($I$(1,1)).imgOpenerSetComputeMinMax$Z(true);
}if (config.imgOpenerIsOpenAllImages$()) {
imageRange=Clazz.new_($I$(4,1).c$$S,["0-" + (reader.getMetadata$().getImageCount$() - 1)]);
} else {
imageRange=config.imgOpenerGetRange$();
}var isCellImgFactory=(C$.allowCellImgFactory && Clazz.getClass($I$(5)).isAssignableFrom$Class(imgFactory.getClass$()) );
for (var imageIndex, $imageIndex = imageRange.iterator$(); $imageIndex.hasNext$()&&((imageIndex=($imageIndex.next$())),1);) {
var dimLengths=this.utils$().getConstrainedLengths$io_scif_Metadata$I$io_scif_config_SCIFIOConfig(reader.getMetadata$(), p$1.i$J.apply(this, [(imageIndex).valueOf()]), config);
if (isCellImgFactory) {
(imgFactory).setReader$io_scif_Reader$I(reader, p$1.i$J.apply(this, [(imageIndex).valueOf()]));
(imgFactory).setSubRegion$io_scif_img_ImageRegion(config.imgOpenerGetRegion$());
}var img=imgFactory.create$JA(dimLengths);
var imgPlus=p$1.makeImgPlus$net_imglib2_img_Img$io_scif_Reader$I.apply(this, [img, reader, p$1.i$J.apply(this, [(imageIndex).valueOf()])]);
var id=reader.getCurrentLocation$();
var uri=id.getURI$();
imgPlus.setSource$S(uri == null  ? null : uri.toString());
imgPlus.initializeColorTables$I(p$1.i$J.apply(this, [reader.getPlaneCount$I(p$1.i$J.apply(this, [(imageIndex).valueOf()]))]));
if (config.imgOpenerIsComputeMinMax$()) {
var defaultMinMax=$I$(6).defaultMinMax$io_scif_ImageMetadata(reader.getMetadata$().get$I(p$1.i$J.apply(this, [(imageIndex).valueOf()])));
for (var c=0; c < imgPlus.getCompositeChannelCount$(); c++) {
imgPlus.setChannelMinimum$I$D(c, defaultMinMax[0]);
imgPlus.setChannelMaximum$I$D(c, defaultMinMax[1]);
}
}var meta=reader.getMetadata$();
imgPlus.setMetadata$io_scif_Metadata(meta);
imgPlus.setImageMetadata$io_scif_ImageMetadata(meta.get$I(p$1.i$J.apply(this, [(imageIndex).valueOf()])));
imgPlus.setROIsAndTablesProperties$io_scif_Metadata$I(meta, p$1.i$J.apply(this, [(imageIndex).valueOf()]));
if (!isCellImgFactory) {
var startTime=System.currentTimeMillis$();
var planeCount=reader.getPlaneCount$I(p$1.i$J.apply(this, [(imageIndex).valueOf()]));
try {
p$1.readPlanes$io_scif_Reader$I$net_imagej_ImgPlus$io_scif_config_SCIFIOConfig.apply(this, [reader, p$1.i$J.apply(this, [(imageIndex).valueOf()]), imgPlus, config]);
} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.FormatException") || Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('io.scif.img.ImgIOException').c$$Throwable,[e]);
} else {
throw e;
}
}
var endTime=System.currentTimeMillis$();
var time=(endTime - startTime) / 1000.0;
this.statusService.showStatus$S(id + ": read " + planeCount + " planes in " + new Float(time).toString() + "s" );
}imgPluses.add$TE(imgPlus);
}
if (isCellImgFactory) {
this.statusService.showStatus$S("Created CellImg for dynamic loading");
} else {
try {
reader.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('io.scif.img.ImgIOException').c$$Throwable,[e]);
} else {
throw e;
}
}
}return imgPluses;
});

Clazz.newMeth(C$, 'getType$io_scif_Reader', function (r) {
return this.utils$().makeType$I(r.getMetadata$().get$I(0).getPixelType$());
}, p$1);

Clazz.newMeth(C$, 'getHeuristic$io_scif_config_SCIFIOConfig', function (imgOptions) {
var heuristic=imgOptions.imgOpenerGetImgFactoryHeuristic$();
if (heuristic == null ) heuristic=Clazz.new_($I$(7,1));
return heuristic;
}, p$1);

Clazz.newMeth(C$, 'createReader$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig', function (source, config) {
var computeMinMax=config.imgOpenerIsComputeMinMax$();
this.statusService.showStatus$S("Initializing " + source);
var r=null;
try {
if (Clazz.instanceOf(source, "org.scijava.io.location.FileLocation") && !(source).getFile$().exists$() ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["File does not exist: " + source]);
}r=this.initializeService.initializeReader$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(source, config);
r.enable$Class(Clazz.getClass($I$(8)));
r.enable$Class(Clazz.getClass($I$(9))).separate$net_imagej_axis_AxisTypeA(p$1.axesToSplit$io_scif_filters_ReaderFilter.apply(this, [r]));
if (computeMinMax) r.enable$Class(Clazz.getClass($I$(10)));
} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.FormatException") || Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('io.scif.img.ImgIOException').c$$Throwable,[e]);
} else {
throw e;
}
}
return r;
}, p$1);

Clazz.newMeth(C$, 'axesToSplit$io_scif_filters_ReaderFilter', function (r) {
var axes=Clazz.new_(1,{E:"net.imagej.axis.AxisType"},$I$(11,1));
var meta=r.getTail$().getMetadata$();
for (var t, $t = meta.get$I(0).getAxesPlanar$().iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) {
var type=t.type$();
if (!(type === $I$(12).X  || type === $I$(12).Y  )) {
axes.add$TE(type);
}}
axes.add$TE($I$(12).CHANNEL);
return axes.toArray$TTA(Clazz.array($I$(13), [axes.size$()]));
}, p$1);

Clazz.newMeth(C$, 'getAxisTypes$I$io_scif_Metadata', function (imageIndex, m) {
var types=Clazz.array($I$(13), [m.get$I(imageIndex).getAxes$().size$()]);
for (var i=0; i < types.length; i++) {
types[i]=m.get$I(imageIndex).getAxis$I(i).type$();
}
return types;
}, p$1);

Clazz.newMeth(C$, 'getCalibration$I$io_scif_Metadata', function (imageIndex, m) {
var calibration=Clazz.array(Double.TYPE, [m.get$I(imageIndex).getAxes$().size$()]);
for (var i=0; i < calibration.length; i++) {
calibration[i]=$I$(6).getScale$io_scif_Metadata$I$net_imagej_axis_AxisType(m, imageIndex, m.get$I(imageIndex).getAxis$I(i).type$());
}
return calibration;
}, p$1);

Clazz.newMeth(C$, 'makeImgPlus$net_imglib2_img_Img$io_scif_Reader$I', function (img, r, imageIndex) {
var id=r.getCurrentLocation$();
var name=null;
if (id != null ) {
name=id.getName$();
}if (name == null  || name.equals$O("") ) name="Image: " + r.getFormatName$();
var cal=p$1.getCalibration$I$io_scif_Metadata.apply(this, [imageIndex, r.getMetadata$()]);
var dimTypes=p$1.getAxisTypes$I$io_scif_Metadata.apply(this, [imageIndex, r.getMetadata$()]);
var base;
base=p$1.unwrap$io_scif_Reader.apply(this, [r]);
var meta=r.getMetadata$();
var rgbChannelCount=base.getMetadata$().get$I(0).isMultichannel$() ? (base.getMetadata$().get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(12).CHANNEL)|0) : 1;
var validBits=meta.get$I(0).getBitsPerPixel$();
var imgPlus=Clazz.new_(1,{T:"Object"},$I$(14,1).c$$net_imglib2_img_Img$S$net_imagej_axis_AxisTypeA$DA,[img, name, dimTypes, cal]);
var metaName=meta.get$I(imageIndex).getName$();
if (metaName != null ) imgPlus.setName$S(metaName);
imgPlus.setValidBits$I(validBits);
var compositeChannelCount=rgbChannelCount;
if (rgbChannelCount == 1) {
var colorMode=meta.getTable$().get$O("Color mode");
if ("composite".equals$O(colorMode)) {
compositeChannelCount=(meta.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(12).CHANNEL)|0);
}}imgPlus.setCompositeChannelCount$I(compositeChannelCount);
p$1.setCalibrationUnits$io_scif_img_SCIFIOImgPlus$io_scif_Metadata$I.apply(this, [imgPlus, meta, imageIndex]);
return imgPlus;
}, p$1);

Clazz.newMeth(C$, 'setCalibrationUnits$io_scif_img_SCIFIOImgPlus$io_scif_Metadata$I', function (imgPlus, m, imageIndex) {
for (var axis, $axis = m.get$I(imageIndex).getAxes$().iterator$(); $axis.hasNext$()&&((axis=($axis.next$())),1);) {
var index=imgPlus.dimensionIndex$net_imagej_axis_AxisType(axis.type$());
if (index >= 0) {
imgPlus.axis$I(index).setUnit$S(axis.unit$());
}}
}, p$1);

Clazz.newMeth(C$, 'unwrap$io_scif_Reader', function (r) {
if (!(Clazz.instanceOf(r, "io.scif.filters.ReaderFilter"))) return r;
var rf=r;
return rf.getTail$();
}, p$1);

Clazz.newMeth(C$, 'readPlanes$io_scif_Reader$I$net_imagej_ImgPlus$io_scif_config_SCIFIOConfig', function (r, imageIndex, imgPlus, config) {
var planarAccess=this.utils$().getPlanarAccess$net_imagej_ImgPlus(imgPlus);
var inputType=this.utils$().makeType$I(r.getMetadata$().get$I(0).getPixelType$());
var outputType=imgPlus.firstElement$();
var compatibleTypes=outputType.getClass$().isAssignableFrom$Class(inputType.getClass$());
var isPlanar=planarAccess != null  && compatibleTypes ;
var isArray=this.utils$().getArrayAccess$net_imagej_ImgPlus(imgPlus) != null  && compatibleTypes ;
var region=config.imgOpenerGetRegion$();
var m=r.getMetadata$();
var planarAxes=m.get$I(imageIndex).getAxesPlanar$();
var planarAxisCount=planarAxes.size$();
var planarMin=Clazz.array(Long.TYPE, [planarAxisCount]);
var planarMax=Clazz.array(Long.TYPE, [planarAxisCount]);
var npRanges=Clazz.array($I$(4), [m.get$I(imageIndex).getAxesNonPlanar$().size$()]);
var npIndices=Clazz.array(Long.TYPE, [npRanges.length]);
var index=0;
for (var planarAxis, $planarAxis = planarAxes.iterator$(); $planarAxis.hasNext$()&&((planarAxis=($planarAxis.next$())),1);) {
if (region != null  && region.hasRange$net_imagej_axis_AxisType(planarAxis.type$()) ) {
planarMin[index]=(region.getRange$net_imagej_axis_AxisType(planarAxis.type$()).head$()).valueOf();
planarMax[index]=(region.getRange$net_imagej_axis_AxisType(planarAxis.type$()).tail$()).valueOf();
} else {
planarMin[index]=0;
planarMax[index]=m.get$I(imageIndex).getAxisLength$net_imagej_axis_CalibratedAxis(planarAxis) - 1;
}index++;
}
var bounds=Clazz.new_($I$(15,1).c$$JA$JA,[planarMin, planarMax]);
index=0;
for (var npAxis, $npAxis = m.get$I(imageIndex).getAxesNonPlanar$().iterator$(); $npAxis.hasNext$()&&((npAxis=($npAxis.next$())),1);) {
if (region != null  && region.hasRange$net_imagej_axis_AxisType(npAxis.type$()) ) {
npRanges[index++]=region.getRange$net_imagej_axis_AxisType(npAxis.type$());
} else {
npRanges[index++]=Clazz.new_($I$(4,1).c$$Long$Long,[new Long(0), new Long(m.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType(npAxis.type$()) - 1)]);
}}
var converter=config.imgOpenerGetPlaneConverter$();
if (converter == null ) {
if (isArray) {
converter=this.pcService.getArrayConverter$();
} else if (isPlanar) {
converter=this.pcService.getPlanarConverter$();
} else converter=this.pcService.getDefaultConverter$();
}p$1.read$I$net_imagej_ImgPlus$io_scif_Reader$io_scif_config_SCIFIOConfig$io_scif_img_converters_PlaneConverter$net_imglib2_Interval$io_scif_img_RangeA$JA.apply(this, [imageIndex, imgPlus, r, config, converter, bounds, npRanges, npIndices]);
if (config.imgOpenerIsComputeMinMax$()) p$1.populateMinMax$io_scif_Reader$net_imagej_ImgPlus$I.apply(this, [r, imgPlus, imageIndex]);
}, p$1);

Clazz.newMeth(C$, 'read$I$net_imagej_ImgPlus$io_scif_Reader$io_scif_config_SCIFIOConfig$io_scif_img_converters_PlaneConverter$net_imglib2_Interval$io_scif_img_RangeA$JA', function (imageIndex, imgPlus, r, config, converter, bounds, npRanges, npIndices) {
p$1.read$I$net_imagej_ImgPlus$io_scif_Reader$io_scif_config_SCIFIOConfig$io_scif_img_converters_PlaneConverter$io_scif_Plane$net_imglib2_Interval$io_scif_img_RangeA$JA$I$IA.apply(this, [imageIndex, imgPlus, r, config, converter, null, bounds, npRanges, npIndices, 0, Clazz.array(Integer.TYPE, -1, [0])]);
}, p$1);

Clazz.newMeth(C$, 'read$I$net_imagej_ImgPlus$io_scif_Reader$io_scif_config_SCIFIOConfig$io_scif_img_converters_PlaneConverter$io_scif_Plane$net_imglib2_Interval$io_scif_img_RangeA$JA$I$IA', function (imageIndex, imgPlus, r, config, converter, tmpPlane, bounds, npRanges, npIndices, depth, planeCount) {
if (depth < npRanges.length) {
var npPosition=npRanges.length - 1 - depth ;
for (var i=0; i < npRanges[npPosition].size$(); i++) {
npIndices[npPosition]=(npRanges[npPosition].get$I(i)).valueOf();
tmpPlane=p$1.read$I$net_imagej_ImgPlus$io_scif_Reader$io_scif_config_SCIFIOConfig$io_scif_img_converters_PlaneConverter$io_scif_Plane$net_imglib2_Interval$io_scif_img_RangeA$JA$I$IA.apply(this, [imageIndex, imgPlus, r, config, converter, tmpPlane, bounds, npRanges, npIndices, depth + 1, planeCount]);
}
} else {
var planeIndex=($I$(6).positionToRaster$I$io_scif_Reader$JA(0, r, npIndices)|0);
if (config.imgOpenerIsComputeMinMax$()) {
p$1.populateMinMax$io_scif_Reader$net_imagej_ImgPlus$I.apply(this, [r, imgPlus, imageIndex]);
}if (tmpPlane == null ) {
tmpPlane=r.openPlane$I$J$net_imglib2_Interval(imageIndex, planeIndex, bounds);
} else {
tmpPlane=r.openPlane$I$J$io_scif_Plane$net_imglib2_Interval$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, tmpPlane, bounds, config);
}converter.populatePlane$io_scif_Reader$I$I$BA$net_imagej_ImgPlus$io_scif_config_SCIFIOConfig(r, imageIndex, planeCount[0], tmpPlane.getBytes$(), imgPlus, config);
imgPlus.setColorTable$net_imglib2_display_ColorTable$I(tmpPlane.getColorTable$(), planeCount[0]);
planeCount[0]++;
}return tmpPlane;
}, p$1);

Clazz.newMeth(C$, 'populateMinMax$io_scif_Reader$net_imagej_ImgPlus$I', function (r, imgPlus, imageIndex) {
var sizeC=(r.getMetadata$().get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(12).CHANNEL)|0);
var rf=r;
var minMax=rf.enable$Class(Clazz.getClass($I$(10)));
for (var c=0; c < sizeC; c++) {
var min=minMax.getAxisKnownMinimum$I$net_imagej_axis_AxisType$I(imageIndex, $I$(12).CHANNEL, c);
var max=minMax.getAxisKnownMinimum$I$net_imagej_axis_AxisType$I(imageIndex, $I$(12).CHANNEL, c);
imgPlus.setChannelMinimum$I$D(c, min == null  ? NaN : (min).valueOf());
imgPlus.setChannelMaximum$I$D(c, max == null  ? NaN : (max).valueOf());
}
}, p$1);

Clazz.newMeth(C$, 'i$J', function (l) {
if (l > 2147483647) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Value too large: " + l]);
}if (l < -2147483648) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Value too small: " + l]);
}return (l|0);
}, p$1);
C$.$getAnn$ = function(){ return [
[['statusService','org.scijava.app.StatusService',null,['org.scijava.plugin.Parameter']],['']],
  [['pcService','io.scif.img.converters.PlaneConverterService',null,['org.scijava.plugin.Parameter']],['']],
  [['initializeService','io.scif.services.InitializeService',null,['org.scijava.plugin.Parameter']],['']]]}
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:43 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
