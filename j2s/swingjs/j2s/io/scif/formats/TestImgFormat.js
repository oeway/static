(function(){var P$=Clazz.newPackage("io.scif.formats"),p$1={},I$=[[0,'io.scif.MetadataService','io.scif.util.FormatTools','net.imagej.axis.CalibratedAxis','net.imagej.axis.DefaultLinearAxis','net.imagej.axis.Axes','net.imglib2.display.ColorTable8',['io.scif.formats.TestImgFormat','.TestImgUtils'],'net.imglib2.display.ColorTable16','org.scijava.util.Bytes','io.scif.Metadata',['io.scif.formats.TestImgFormat','.Metadata'],['io.scif.io.location.TestImgLocation','.Builder'],'java.util.Random']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TestImgFormat", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.AbstractFormat');
C$.$classes$=[['Metadata',9],['Checker',9],['Parser',9],['Reader',9],['TestImgTranslator',9],['TestImgUtils',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'makeSuffixArray$', function () {
return Clazz.array(String, -1, ["scifiotestimg"]);
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.TestImgFormat',null,['org.scijava.plugin.Plugin']],['type="io.scif.Format.class" name="Simulated data" ']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.TestImgFormat, "Metadata", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractMetadata', 'io.scif.HasColorTable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['indexed','falseColor','little','metadataComplete','thumbnail','orderCertain'],'I',['planarDims','interleavedDims','thumbSizeX','thumbSizeY','lutLength','scaleFactor','images'],'S',['pixelType'],'O',['axes','String[]','lengths','long[]','scales','double[]','units','String[]','luts','net.imglib2.display.ColorTable[][]','valueToIndex','int[][]']]]

Clazz.newMeth(C$, 'getScaleFactor$', function () {
return this.scaleFactor;
});

Clazz.newMeth(C$, 'getLuts$', function () {
return this.luts;
});

Clazz.newMeth(C$, 'setLuts$net_imglib2_display_ColorTableAA', function (luts) {
this.luts=luts;
});

Clazz.newMeth(C$, 'getValueToIndex$', function () {
return this.valueToIndex;
});

Clazz.newMeth(C$, 'setValueToIndex$IAA', function (valueToIndex) {
this.valueToIndex=valueToIndex;
});

Clazz.newMeth(C$, ['getColorTable$I$J','getColorTable$'], function (imageIndex, planeIndex) {
return this.luts == null  ? null : this.luts[imageIndex][(planeIndex|0)];
});

Clazz.newMeth(C$, 'populateImageMetadata$', function () {
var metadataService=this.getContext$().getService$Class(Clazz.getClass($I$(1),['parse$S','parse$S$S','populate$O$java_util_Map']));
var fakeMap=(this.getSourceLocation$()).getMetadataMap$();
metadataService.populate$O$java_util_Map(this, fakeMap);
if (this.axes.length != this.lengths.length) {
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["FakeFormat id: " + this.getDatasetName$() + " is not valid. Can not have a differing number of axis types and axis lengths." ]);
}var pType=$I$(2).pixelTypeFromString$S(this.pixelType);
var bpp=$I$(2).getBitsPerPixel$I(pType);
var calibratedAxes=Clazz.array($I$(3), [this.axes.length]);
for (var i=0; i < calibratedAxes.length; i++) {
var scale=1.0;
var unit="um";
if (i < this.units.length) {
unit=this.units[i];
}if (i < this.scales.length) {
scale=this.scales[i];
}calibratedAxes[i]=Clazz.new_($I$(4,1).c$$net_imagej_axis_AxisType$S$D,[$I$(5).get$S(this.axes[i]), unit, scale]);
}
this.createImageMetadata$I(this.images);
for (var i=0; i < this.images; i++) {
var imageMeta=this.get$I(i);
imageMeta.setAxes$net_imagej_axis_CalibratedAxisA$JA(calibratedAxes, this.lengths);
imageMeta.setPlanarAxisCount$I(this.planarDims);
imageMeta.setInterleavedAxisCount$I(this.interleavedDims);
imageMeta.setPixelType$I(pType);
imageMeta.setThumbSizeX$J(this.thumbSizeX);
imageMeta.setThumbSizeY$J(this.thumbSizeY);
imageMeta.setIndexed$Z(this.indexed);
imageMeta.setFalseColor$Z(this.falseColor);
imageMeta.setLittleEndian$Z(this.little);
imageMeta.setMetadataComplete$Z(this.metadataComplete);
imageMeta.setThumbnail$Z(this.thumbnail);
imageMeta.setOrderCertain$Z(this.orderCertain);
imageMeta.setBitsPerPixel$I(bpp);
}
if (this.indexed) {
var indexToValue=null;
var valueToIndex=null;
var luts=null;
if (pType == 1) {
var num=256;
luts=Clazz.array($I$(6), [this.images, null]);
for (var i=0; i < this.images; i++) {
var planeCount=(this.get$I(i).getPlaneCount$()|0);
luts[i]=Clazz.array($I$(6), [planeCount]);
indexToValue=Clazz.array(Integer.TYPE, [planeCount, 256]);
valueToIndex=Clazz.array(Integer.TYPE, [planeCount, 256]);
$I$(7).createIndexValueMap$IAA(indexToValue);
for (var p=0; p < planeCount; p++) {
var lutBytes=Clazz.array(Byte.TYPE, [this.lutLength, 256]);
for (var cmpIndex=0; cmpIndex < this.lutLength; cmpIndex++) {
for (var index=0; index < 256; index++) {
lutBytes[cmpIndex][index]=((indexToValue[p][index]|0)|0);
}
}
luts[i][p]=Clazz.new_($I$(6,1).c$$BAA,[lutBytes]);
}
}
} else if (pType == 3) {
var num=65536;
luts=Clazz.array($I$(8), [this.images, null]);
for (var i=0; i < this.images; i++) {
var planeCount=(this.get$I(i).getPlaneCount$()|0);
luts[i]=Clazz.array($I$(8), [planeCount]);
indexToValue=Clazz.array(Integer.TYPE, [planeCount, 65536]);
valueToIndex=Clazz.array(Integer.TYPE, [planeCount, 65536]);
$I$(7).createIndexValueMap$IAA(indexToValue);
for (var p=0; p < planeCount; p++) {
var lutShorts=Clazz.array(Short.TYPE, [this.lutLength, 65536]);
for (var cmpIndex=0; cmpIndex < this.lutLength; cmpIndex++) {
for (var index=0; index < 65536; index++) {
lutShorts[cmpIndex][index]=(indexToValue[p][index]|0);
}
}
luts[i][p]=Clazz.new_($I$(8,1).c$$HAA,[lutShorts]);
}
}
}this.setLuts$net_imglib2_display_ColorTableAA(luts);
if (valueToIndex != null ) {
$I$(7).createInverseIndexMap$IAA$IAA(indexToValue, valueToIndex);
this.setValueToIndex$IAA(valueToIndex);
}}});
C$.$getAnn$ = function(){ return [
[['axes','String[]',null,['io.scif.Field']],['']],
  [['lengths','long[]',null,['io.scif.Field']],['']],
  [['scales','double[]',null,['io.scif.Field']],['']],
  [['units','String[]',null,['io.scif.Field']],['']],
  [['planarDims','int',null,['io.scif.Field']],['']],
  [['interleavedDims','.',null,['io.scif.Field']],['']],
  [['thumbSizeX','.',null,['io.scif.Field']],['']],
  [['thumbSizeY','.',null,['io.scif.Field']],['']],
  [['pixelType','String',null,['io.scif.Field']],['']],
  [['indexed','boolean',null,['io.scif.Field']],['']],
  [['falseColor','.',null,['io.scif.Field']],['']],
  [['little','.',null,['io.scif.Field']],['']],
  [['metadataComplete','.',null,['io.scif.Field']],['']],
  [['thumbnail','.',null,['io.scif.Field']],['']],
  [['orderCertain','.',null,['io.scif.Field']],['']],
  [['lutLength','int',null,['io.scif.Field']],['']],
  [['scaleFactor','.',null,['io.scif.Field']],['']],
  [['images','.',null,['io.scif.Field']],['']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TestImgFormat, "Checker", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractChecker');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'suffixSufficient$', function () {
return false;
});

Clazz.newMeth(C$, 'suffixNecessary$', function () {
return false;
});

Clazz.newMeth(C$, 'isFormat$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig', function (loc, config) {
return Clazz.instanceOf(loc, "io.scif.io.location.TestImgLocation");
});

Clazz.newMeth(C$, 'isFormat$org_scijava_io_location_Location', function (loc) {
return Clazz.instanceOf(loc, "io.scif.io.location.TestImgLocation");
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TestImgFormat, "Parser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractParser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['typedParse$org_scijava_io_handle_DataHandle$io_scif_formats_TestImgFormat_Metadata$io_scif_config_SCIFIOConfig','typedParse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig'], function (stream, meta, config) {
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TestImgFormat, "Reader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.ByteArrayReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'createDomainArray$', function () {
return Clazz.array(String, [0]);
});

Clazz.newMeth(C$, ['openPlane$I$J$io_scif_ByteArrayPlane$net_imglib2_Interval$io_scif_config_SCIFIOConfig','openPlane$I$J$TP$net_imglib2_Interval$io_scif_config_SCIFIOConfig'], function (imageIndex, planeIndex, plane, bounds, config) {
var meta=this.getMetadata$();
$I$(2).checkPlaneForReading$io_scif_Metadata$I$J$I$net_imglib2_Interval(meta, imageIndex, planeIndex, plane.getData$().length, bounds);
plane.setImageMetadata$io_scif_ImageMetadata(meta.get$I(imageIndex));
var pos=$I$(2).rasterToPosition$JA$J(meta.get$I(imageIndex).getAxesLengthsNonPlanar$(), planeIndex);
var planarIndices=Clazz.array(Long.TYPE, [bounds.numDimensions$()]);
p$1.openPlaneHelper$I$J$io_scif_formats_TestImgFormat_Metadata$io_scif_Plane$net_imglib2_Interval$JA$JA$I$J$J.apply(this, [imageIndex, planeIndex, meta, plane, bounds, pos, planarIndices, 0, -1, -1]);
return plane;
});

Clazz.newMeth(C$, 'openPlaneHelper$I$J$io_scif_formats_TestImgFormat_Metadata$io_scif_Plane$net_imglib2_Interval$JA$JA$I$J$J', function (imageIndex, planeIndex, meta, plane, bounds, npIndices, planeIndices, planarPos, xPos, yPos) {
if (planarPos < bounds.numDimensions$()) {
for (var i=0; i < bounds.dimension$I(planarPos); i++) {
if (planarPos == meta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(5).X)) xPos=bounds.min$I(planarPos) + i;
if (planarPos == meta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(5).Y)) yPos=bounds.min$I(planarPos) + i;
planeIndices[planarPos]=bounds.min$I(planarPos) + i;
p$1.openPlaneHelper$I$J$io_scif_formats_TestImgFormat_Metadata$io_scif_Plane$net_imglib2_Interval$JA$JA$I$J$J.apply(this, [imageIndex, planeIndex, meta, plane, bounds, npIndices, planeIndices, planarPos + 1, xPos, yPos]);
}
} else {
var pixelType=meta.get$I(imageIndex).getPixelType$();
var bpp=$I$(2).getBytesPerPixel$I(pixelType);
var signed=$I$(2).isSigned$I(pixelType);
var floating=$I$(2).isFloatingPoint$I(pixelType);
var indexed=meta.get$I(imageIndex).isIndexed$();
var little=meta.get$I(imageIndex).isLittleEndian$();
var scaleFactor=meta.getScaleFactor$();
var lut=meta.getColorTable$I$J(imageIndex, planeIndex);
var valueToIndex=this.getMetadata$().getValueToIndex$();
var min=signed ? (-Math.pow(2, 8 * bpp - 1)|0) : 0;
if (floating) min=0;
var boxSize=10;
var pixel=min + xPos;
var specialPixel=false;
if (yPos < 10) {
var grid=(((xPos/10|0))|0);
specialPixel=true;
switch (grid) {
case 0:
pixel=imageIndex;
break;
case 1:
pixel=planeIndex;
break;
default:
grid-=2;
if (grid < npIndices.length) {
pixel=min + npIndices[grid];
} else {
specialPixel=false;
}break;
}
}if (indexed && lut != null  ) {
var modValue=lut.getLength$();
plane.setColorTable$net_imglib2_display_ColorTable(lut);
if (valueToIndex != null ) pixel=valueToIndex[(planeIndex|0)][((pixel % modValue)|0)];
}switch (pixelType) {
case 6:
var floatPixel;
if (specialPixel) floatPixel=pixel;
 else floatPixel=scaleFactor * pixel;
pixel=Float.floatToIntBits$F(floatPixel);
break;
case 7:
var doublePixel;
if (specialPixel) doublePixel=pixel;
 else doublePixel=scaleFactor * pixel;
pixel=Double.doubleToLongBits$D(doublePixel);
break;
default:
if (!specialPixel) pixel=scaleFactor * pixel;
}
var index=0;
for (var i=planeIndices.length - 1; i >= 0; i--) {
var partialIndex=planeIndices[i] - bounds.min$I(i);
for (var j=0; j < i; j++) {
partialIndex*=bounds.dimension$I(j);
}
index+=(partialIndex|0);
}
index*=bpp;
$I$(9).unpack$J$BA$I$I$Z(pixel, plane.getBytes$(), index, bpp, little);
}}, p$1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TestImgFormat, "TestImgTranslator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractTranslator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['dataHandleService','org.scijava.io.handle.DataHandleService']]]

Clazz.newMeth(C$, 'source$', function () {
return Clazz.getClass($I$(10),['add$io_scif_ImageMetadata','createImageMetadata$I','get$I','getAll$','getDatasetName$','getDatasetSize$','getDestinationLocation$','getImageCount$','getSource$','getSourceLocation$','isFiltered$','populateImageMetadata$','setDatasetName$S','setDestinationLocation$org_scijava_io_location_Location','setFiltered$Z','setSource$org_scijava_io_handle_DataHandle','setSourceLocation$org_scijava_io_location_Location']);
});

Clazz.newMeth(C$, 'dest$', function () {
return Clazz.getClass($I$(11));
});

Clazz.newMeth(C$, ['translateImageMetadata$java_util_List$io_scif_formats_TestImgFormat_Metadata','translateImageMetadata$java_util_List$TN'], function (source, dest) {
var iMeta=source.get$I(0);
var name=dest.getDatasetName$();
var axes=Clazz.array(String, [iMeta.getAxes$().size$()]);
var lengths=Clazz.array(Long.TYPE, [axes.length]);
var scales=Clazz.array(Double.TYPE, [axes.length]);
var units=Clazz.array(String, [axes.length]);
var index=0;
for (var axis, $axis = iMeta.getAxes$().iterator$(); $axis.hasNext$()&&((axis=($axis.next$())),1);) {
axes[index]=axis.type$().getLabel$();
lengths[index]=iMeta.getAxisLength$net_imagej_axis_CalibratedAxis(axis);
scales[index]=axis.averageScale$D$D(0, lengths[index]);
units[index]=axis.unit$();
index++;
}
var b=Clazz.new_($I$(12,1));
b.axes$SA(axes);
b.lengths$JA(lengths);
b.scales$DA(scales);
b.units$SA(units);
b.planarDims$I(iMeta.getPlanarAxisCount$());
b.interleavedDims$I(iMeta.getInterleavedAxisCount$());
b.thumbSizeX$I((iMeta.getThumbSizeX$()|0));
b.thumbSizeY$I((iMeta.getThumbSizeX$()|0));
b.pixelType$S($I$(2).getPixelTypeString$I(iMeta.getPixelType$()));
b.falseColor$Z(iMeta.isFalseColor$());
b.little$Z(iMeta.isLittleEndian$());
b.metadataComplete$Z(iMeta.isMetadataComplete$());
b.thumbnail$Z(iMeta.isThumbnail$());
b.orderCertain$Z(iMeta.isOrderCertain$());
b.images$I(source.size$());
if (iMeta.isIndexed$()) {
var lutLength=(source).getColorTable$(0, 0).getComponentCount$();
b.indexed$Z(iMeta.isIndexed$());
b.lutLength$I(lutLength);
}try {
dest.close$();
dest.setSource$org_scijava_io_handle_DataHandle(this.dataHandleService.create$TD(b.build$()));
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.log$().debug$O$Throwable("Failed to create RAIS: " + name, e);
} else {
throw e;
}
}
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.TestImgFormat.TestImgTranslator',null,['org.scijava.plugin.Plugin']],['type="io.scif.Translator.class" priority="-100.0" ']],
  [['dataHandleService','org.scijava.io.handle.DataHandleService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.TestImgFormat, "TestImgUtils", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'createIndexMaps$IAA$IAA', function (indexToValue, valueToIndex) {
C$.sizeCheck$IAA$IAA(indexToValue, valueToIndex);
C$.createIndexValueMap$IAA(indexToValue);
C$.createInverseIndexMap$IAA$IAA(indexToValue, valueToIndex);
}, 1);

Clazz.newMeth(C$, 'createIndexValueMap$IAA', function (indexToValue) {
for (var c=0; c < indexToValue.length; c++) {
for (var index=0; index < indexToValue[0].length; index++) indexToValue[c][index]=index;

C$.shuffle$I$IA(c, indexToValue[c]);
}
}, 1);

Clazz.newMeth(C$, 'createInverseIndexMap$IAA$IAA', function (indexToValue, valueToIndex) {
C$.sizeCheck$IAA$IAA(indexToValue, valueToIndex);
for (var c=0; c < indexToValue.length; c++) {
for (var index=0; index < indexToValue[0].length; index++) {
var value=indexToValue[c][index];
valueToIndex[c][value]=index;
}
}
}, 1);

Clazz.newMeth(C$, 'shuffle$I$IA', function (c, array) {
var r=Clazz.new_($I$(13,1).c$$J,[-889275714 + c]);
for (var i=array.length; i > 1; i--) {
var j=r.nextInt$I(i);
var tmp=array[j];
array[j]=array[i - 1];
array[i - 1]=tmp;
}
}, 1);

Clazz.newMeth(C$, 'sizeCheck$IAA$IAA', function (array1, array2) {
if (array1.length != array2.length || array1[0].length != array2[0].length ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Arrays must be of the same size."]);
}, 1);

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:41 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
