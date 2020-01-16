(function(){var P$=Clazz.newPackage("io.scif.img"),p$1={},I$=[[0,'io.scif.config.SCIFIOConfig','net.imagej.axis.Axes','io.scif.util.SCIFIOMetadataTools','net.imglib2.FinalInterval','io.scif.ByteArrayPlane','org.scijava.util.Bytes','io.scif.util.FormatTools','net.imglib2.img.planar.PlanarImg','net.imglib2.img.array.ArrayImg','java.util.Arrays','net.imglib2.type.numeric.integer.GenericIntType','net.imglib2.type.numeric.integer.GenericByteType','net.imglib2.type.numeric.integer.GenericShortType','net.imglib2.type.numeric.integer.LongType','net.imglib2.type.numeric.real.DoubleType','net.imglib2.type.numeric.real.FloatType','java.util.ArrayList','io.scif.DefaultMetadata','io.scif.DefaultImageMetadata','net.imagej.axis.CalibratedAxis']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ImgSaver", null, 'io.scif.img.AbstractImgIOComponent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['statusService','org.scijava.app.StatusService','$formatService','io.scif.services.FormatService','translatorService','io.scif.services.TranslatorService']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context', function (context) {
;C$.superclazz.c$$org_scijava_Context.apply(this,[context]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'saveImg$org_scijava_io_location_Location$net_imglib2_img_Img', function (id, img) {
return this.saveImg$org_scijava_io_location_Location$net_imglib2_img_Img$io_scif_config_SCIFIOConfig(id, img, null);
});

Clazz.newMeth(C$, 'saveImg$org_scijava_io_location_Location$io_scif_img_SCIFIOImgPlus$I', function (id, img, imageIndex) {
return this.saveImg$org_scijava_io_location_Location$io_scif_img_SCIFIOImgPlus$I$io_scif_config_SCIFIOConfig(id, img, imageIndex, null);
});

Clazz.newMeth(C$, 'saveImg$org_scijava_io_location_Location$net_imglib2_img_Img$io_scif_config_SCIFIOConfig', function (id, img, config) {
return this.saveImg$org_scijava_io_location_Location$io_scif_img_SCIFIOImgPlus$I$io_scif_config_SCIFIOConfig(id, this.utils$().makeSCIFIOImgPlus$net_imglib2_img_Img(img), 0, config);
});

Clazz.newMeth(C$, 'saveImg$org_scijava_io_location_Location$io_scif_img_SCIFIOImgPlus$I$io_scif_config_SCIFIOConfig', function (id, img, imageIndex, config) {
return p$1.writeImg$org_scijava_io_location_Location$io_scif_Writer$io_scif_img_SCIFIOImgPlus$I$io_scif_config_SCIFIOConfig.apply(this, [id, null, img, imageIndex, config]);
});

Clazz.newMeth(C$, 'guessDimOrder$net_imagej_axis_CalibratedAxisA$JA$JA', function (axes, dimLengths, newLengths) {
var oldOrder="";
var newOrder="";
for (var i=0; i < newLengths.length; i++) {
newLengths[i]=1;
}
var haveDim=Clazz.array(Boolean.TYPE, [5]);
var contiguousUnknown=0;
var missingAxisCount=0;
var unknownBlock=false;
for (var i=0; i < axes.length; i++) {
switch ((axes[i].type$().getLabel$().toUpperCase$().charCodeAt$I(0))) {
case 88:
oldOrder += "X";
haveDim[0]=true;
unknownBlock=false;
break;
case 89:
oldOrder += "Y";
haveDim[1]=true;
unknownBlock=false;
break;
case 90:
oldOrder += "Z";
haveDim[2]=true;
unknownBlock=false;
break;
case 67:
oldOrder += "C";
haveDim[3]=true;
unknownBlock=false;
break;
case 84:
oldOrder += "T";
haveDim[4]=true;
unknownBlock=false;
break;
default:
oldOrder += "U";
if (dimLengths[i] > 1) {
if (!unknownBlock) {
unknownBlock=true;
contiguousUnknown++;
}}break;
}
}
for (var d, $d = 0, $$d = haveDim; $d<$$d.length&&((d=($$d[$d])),1);$d++) {
if (!d) missingAxisCount++;
}
if (contiguousUnknown > missingAxisCount) {
return null;
}var axesPlaced=0;
unknownBlock=false;
var sizeOneUnknown=false;
for (var i=0; i < axes.length; i++) {
switch ((oldOrder.charCodeAt$I(0))) {
case 85:
if (dimLengths[i] > 1 || contiguousUnknown < missingAxisCount ) {
if (!unknownBlock) {
unknownBlock=true;
if (contiguousUnknown < missingAxisCount) {
contiguousUnknown++;
sizeOneUnknown=true;
}if (!haveDim[0]) {
newOrder += "X";
haveDim[0]=true;
} else if (!haveDim[1]) {
newOrder += "Y";
haveDim[1]=true;
} else if (!haveDim[2]) {
newOrder += "Z";
haveDim[2]=true;
} else if (!haveDim[3]) {
newOrder += "C";
haveDim[3]=true;
} else if (!haveDim[4]) {
newOrder += "T";
haveDim[4]=true;
}} else if (dimLengths[i] > 1 && sizeOneUnknown ) {
sizeOneUnknown=false;
contiguousUnknown--;
}newLengths[axesPlaced]*=dimLengths[i];
}break;
default:
if (unknownBlock) {
axesPlaced++;
unknownBlock=false;
sizeOneUnknown=false;
}newOrder += oldOrder.charAt$I(i);
newLengths[axesPlaced]=dimLengths[i];
axesPlaced++;
break;
}
}
for (var i=0; i < haveDim.length; i++) {
if (!haveDim[i]) {
switch (i) {
case 0:
newOrder += "X";
break;
case 1:
newOrder += "Y";
break;
case 2:
newOrder += "Z";
break;
case 3:
newOrder += "C";
break;
case 4:
newOrder += "T";
break;
}
}}
return newOrder;
}, 1);

Clazz.newMeth(C$, 'writeImg$org_scijava_io_location_Location$io_scif_Writer$io_scif_img_SCIFIOImgPlus$I$io_scif_config_SCIFIOConfig', function (id, w, img, imageIndex, config) {
if (config == null ) {
config=Clazz.new_($I$(1,1));
}var sliceCount=p$1.countSlices$io_scif_img_SCIFIOImgPlus.apply(this, [img]);
if (w == null ) {
if (id == null ) {
throw Clazz.new_(Clazz.load('io.scif.img.ImgIOException').c$$S,["No output destination or pre-configured Writer was provided, and no way to determine the desired output path. Default value: ImgPlus\'s source."]);
}return p$1.writeImg$org_scijava_io_location_Location$io_scif_img_SCIFIOImgPlus$I$io_scif_config_SCIFIOConfig$I.apply(this, [id, img, imageIndex, config, sliceCount]);
}return p$1.writeImg$io_scif_Writer$org_scijava_io_location_Location$io_scif_img_SCIFIOImgPlus$I$io_scif_config_SCIFIOConfig$I.apply(this, [w, id, img, imageIndex, config, sliceCount]);
}, p$1);

Clazz.newMeth(C$, 'writeImg$org_scijava_io_location_Location$io_scif_img_SCIFIOImgPlus$I$io_scif_config_SCIFIOConfig$I', function (id, imgPlus, imageIndex, config, sliceCount) {
var w=null;
try {
w=this.$formatService.getWriterForLocation$org_scijava_io_location_Location(id);
} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.FormatException")){
throw Clazz.new_(Clazz.load('io.scif.img.ImgIOException').c$$Throwable,[e]);
} else {
throw e;
}
}
return p$1.writeImg$io_scif_Writer$org_scijava_io_location_Location$io_scif_img_SCIFIOImgPlus$I$io_scif_config_SCIFIOConfig$I.apply(this, [w, id, imgPlus, imageIndex, config, sliceCount]);
}, p$1);

Clazz.newMeth(C$, 'writeImg$io_scif_Writer$org_scijava_io_location_Location$io_scif_img_SCIFIOImgPlus$I$io_scif_config_SCIFIOConfig$I', function (w, id, imgPlus, imageIndex, config, sliceCount) {
if (w.getMetadata$() == null ) {
if (id == null ) {
throw Clazz.new_(Clazz.load('io.scif.img.ImgIOException').c$$S,["A Writer with no Metadata was provided, with no way to determine the desired output path."]);
}try {
p$1.populateMeta$io_scif_Writer$io_scif_img_SCIFIOImgPlus$io_scif_config_SCIFIOConfig$org_scijava_io_location_Location$I.apply(this, [w, imgPlus, config, id, imageIndex]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"io.scif.FormatException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('io.scif.img.ImgIOException').c$$O$S,[e, "SCIFIO exception when writing to file " + id + ":\n" + e.getMessage$() ]);
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('io.scif.img.ImgIOException').c$$O$S,[e, "I/O exception writing to file " + id + ":\n" + e.getMessage$() ]);
}
} else {
throw e$$;
}
}
}return p$1.writeImg$io_scif_Writer$io_scif_img_SCIFIOImgPlus$I$I.apply(this, [w, imgPlus, imageIndex, sliceCount]);
}, p$1);

Clazz.newMeth(C$, 'writeImg$io_scif_Writer$io_scif_img_SCIFIOImgPlus$I$I', function (w, imgPlus, imageIndex, sliceCount) {
if (imgPlus.numDimensions$() > 0) {
var startTime=System.currentTimeMillis$();
p$1.writePlanes$io_scif_Writer$I$io_scif_img_SCIFIOImgPlus.apply(this, [w, imageIndex, imgPlus]);
var endTime=System.currentTimeMillis$();
var time=(endTime - startTime) / 1000.0;
this.statusService.showStatus$I$I$S(sliceCount, sliceCount, w.getMetadata$().getDatasetName$() + ": wrote " + sliceCount + " planes in " + new Float(time).toString() + " s" );
}return w.getMetadata$();
}, p$1);

Clazz.newMeth(C$, 'countSlices$io_scif_img_SCIFIOImgPlus', function (img) {
var sliceCount=1;
for (var i=0; i < img.numDimensions$(); i++) {
if (!(img.axis$I(i).type$().equals$O($I$(2).X) || img.axis$I(i).type$().equals$O($I$(2).Y) )) {
sliceCount*=img.dimension$I(i);
}}
return sliceCount;
}, p$1);

Clazz.newMeth(C$, 'writePlanes$io_scif_Writer$I$io_scif_img_SCIFIOImgPlus', function (w, imageIndex, imgPlus) {
var mOut=w.getMetadata$();
p$1.validate$io_scif_Metadata$io_scif_Writer.apply(this, [mOut, w]);
var rgbChannelCount=mOut.get$I(imageIndex).isMultichannel$() ? (mOut.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL)|0) : 1;
var interleaved=mOut.get$I(imageIndex).getInterleavedAxisCount$() > 0;
var sourcePlane=null;
var planeOutCount=w.getMetadata$().get$I(imageIndex).getPlaneCount$();
var img=imgPlus.getImg$();
var planeCount=p$1.getPlaneCount$net_imglib2_img_Img.apply(this, [img]);
if (planeOutCount < (planeCount/rgbChannelCount|0)) {
this.statusService.showStatus$I$I$S$Z(0, 0, "Source dataset contains: " + planeCount + " planes, but writer format only supports: " + rgbChannelCount * planeOutCount , true);
}for (var planeIndex=0; planeIndex < planeOutCount; planeIndex++) {
this.statusService.showStatus$I$I$S(planeIndex, (planeOutCount|0), "Saving plane " + (planeIndex + 1) + "/" + planeOutCount );
try {
var meta=w.getMetadata$();
var planarLengths=meta.get$I(imageIndex).getAxesLengthsPlanar$();
var planarMin=$I$(3).modifyPlanar$I$io_scif_Metadata$JA(imageIndex, meta, Clazz.array(Long.TYPE, [planarLengths.length]));
var planarMax=Clazz.array(Long.TYPE, [planarMin.length]);
for (var d=0; d < planarMax.length; d++) planarMax[d]=planarMin[d] + planarLengths[d] - 1;

var bounds=Clazz.new_($I$(4,1).c$$JA$JA,[planarMin, planarMax]);
var destPlane=Clazz.new_($I$(5,1).c$$io_scif_ImageMetadata$net_imglib2_Interval,[meta.get$I(imageIndex), bounds]);
for (var cIndex=0; cIndex < rgbChannelCount; cIndex++) {
var curPlane=p$1.getPlaneArray$net_imglib2_img_Img$I$I$I.apply(this, [img, rgbChannelCount, cIndex, planeIndex]);
var planeClass=curPlane.getClass$();
if (planeClass === Clazz.array(Integer.TYPE, -1) ) {
sourcePlane=$I$(6).fromInts$IA$Z(curPlane, false);
} else if (planeClass === Clazz.array(Byte.TYPE, -1) ) {
sourcePlane=curPlane;
} else if (planeClass === Clazz.array(Short.TYPE, -1) ) {
sourcePlane=$I$(6).fromShorts$HA$Z(curPlane, false);
} else if (planeClass === Clazz.array(Long.TYPE, -1) ) {
sourcePlane=$I$(6).fromLongs$JA$Z(curPlane, false);
} else if (planeClass === Clazz.array(Double.TYPE, -1) ) {
sourcePlane=$I$(6).fromDoubles$DA$Z(curPlane, false);
} else if (planeClass === Clazz.array(Float.TYPE, -1) ) {
sourcePlane=$I$(6).fromFloats$FA$Z(curPlane, false);
} else {
throw Clazz.new_(Clazz.load('net.imglib2.exception.IncompatibleTypeException').c$$O$S,[Clazz.new_(Clazz.load('net.imglib2.exception.ImgLibException')), "Plane data type: " + planeClass + " not supported." ]);
}if (interleaved) {
var bpp=$I$(7).getBytesPerPixel$I(meta.get$I(imageIndex).getPixelType$());
for (var i=0; i < (sourcePlane.length/bpp|0); i+=bpp) {
System.arraycopy$O$I$O$I$I(sourcePlane, i, destPlane.getData$(), ((i * rgbChannelCount) + cIndex) * bpp, bpp);
}
} else {
System.arraycopy$O$I$O$I$I(sourcePlane, 0, destPlane.getData$(), cIndex * sourcePlane.length, sourcePlane.length);
}}
w.savePlane$I$J$io_scif_Plane(imageIndex, planeIndex, destPlane);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"io.scif.FormatException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('io.scif.img.ImgIOException').c$$Throwable,[e]);
}
} else if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('io.scif.img.ImgIOException').c$$Throwable,[e]);
}
} else {
throw e$$;
}
}
}
try {
w.close$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('io.scif.img.ImgIOException').c$$Throwable,[e]);
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'validate$io_scif_Metadata$io_scif_Writer', function (meta, w) {
if (meta == null ) throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,["No Metadata attached to " + w.getFormat$().getFormatName$() + " writer." ]);
}, p$1);

Clazz.newMeth(C$, 'getPlaneArray$net_imglib2_img_Img$I$I$I', function (img, rgbChannelCount, cIndex, planeIndex) {
if (Clazz.getClass($I$(8)).isAssignableFrom$Class(img.getClass$())) {
var planarImg=img;
return planarImg.getPlane$I(cIndex + (planeIndex * rgbChannelCount)).getCurrentStorageArray$();
}var planeSize=((img.dimension$I(0) * img.dimension$I(1))|0);
if (Clazz.getClass($I$(9)).isAssignableFrom$Class(img.getClass$())) {
var arrayImg=img;
var store=arrayImg.update$O(null);
if (Clazz.instanceOf(store, "net.imglib2.img.basictypeaccess.array.ByteArray")) {
var source=(store).getCurrentStorageArray$();
var bytes=Clazz.array(Byte.TYPE, [planeSize]);
System.arraycopy$O$I$O$I$I(source, planeSize * (cIndex + (planeIndex * rgbChannelCount)), bytes, 0, bytes.length);
return bytes;
} else if (Clazz.instanceOf(store, "net.imglib2.img.basictypeaccess.array.ShortArray")) {
var source=(store).getCurrentStorageArray$();
var shorts=Clazz.array(Short.TYPE, [planeSize]);
System.arraycopy$O$I$O$I$I(source, planeSize * (cIndex + (planeIndex * rgbChannelCount)), shorts, 0, shorts.length);
return shorts;
} else if (Clazz.instanceOf(store, "net.imglib2.img.basictypeaccess.array.LongArray")) {
var source=(store).getCurrentStorageArray$();
var longs=Clazz.array(Long.TYPE, [planeSize]);
System.arraycopy$O$I$O$I$I(source, planeSize * (cIndex + (planeIndex * rgbChannelCount)), longs, 0, longs.length);
return longs;
} else if (Clazz.instanceOf(store, "net.imglib2.img.basictypeaccess.array.CharArray")) {
var source=(store).getCurrentStorageArray$();
var chars=Clazz.array(Character.TYPE, [planeSize]);
System.arraycopy$O$I$O$I$I(source, planeSize * (cIndex + (planeIndex * rgbChannelCount)), chars, 0, chars.length);
return chars;
} else if (Clazz.instanceOf(store, "net.imglib2.img.basictypeaccess.array.DoubleArray")) {
var source=(store).getCurrentStorageArray$();
var doubles=Clazz.array(Double.TYPE, [planeSize]);
System.arraycopy$O$I$O$I$I(source, planeSize * (cIndex + (planeIndex * rgbChannelCount)), doubles, 0, doubles.length);
return doubles;
} else if (Clazz.instanceOf(store, "net.imglib2.img.basictypeaccess.array.FloatArray")) {
var source=(store).getCurrentStorageArray$();
var floats=Clazz.array(Float.TYPE, [planeSize]);
System.arraycopy$O$I$O$I$I(source, planeSize * (cIndex + (planeIndex * rgbChannelCount)), floats, 0, floats.length);
return floats;
} else if (Clazz.instanceOf(store, "net.imglib2.img.basictypeaccess.array.IntArray")) {
var source=(store).getCurrentStorageArray$();
var ints=Clazz.array(Integer.TYPE, [planeSize]);
System.arraycopy$O$I$O$I$I(source, planeSize * (cIndex + (planeIndex * rgbChannelCount)), ints, 0, ints.length);
return ints;
}}var dimensions=Clazz.array(Long.TYPE, [img.numDimensions$()]);
img.dimensions$JA(dimensions);
var lengths=$I$(10).copyOfRange$JA$I$I(dimensions, 2, dimensions.length);
var planePosition=$I$(7).rasterToPosition$JA$J(lengths, cIndex + (planeIndex * rgbChannelCount));
System.arraycopy$O$I$O$I$I(planePosition, 0, dimensions, 2, planePosition.length);
dimensions[0]=dimensions[1]=0;
var typeClass=img.firstElement$().getClass$();
var array=null;
if (Clazz.getClass($I$(11)).isAssignableFrom$Class(typeClass)) {
array=Clazz.array(Integer.TYPE, [planeSize]);
} else if (Clazz.getClass($I$(12)).isAssignableFrom$Class(typeClass)) {
array=Clazz.array(Byte.TYPE, [planeSize]);
} else if (Clazz.getClass($I$(13)).isAssignableFrom$Class(typeClass)) {
array=Clazz.array(Short.TYPE, [planeSize]);
} else if (Clazz.getClass($I$(14)).isAssignableFrom$Class(typeClass)) {
array=Clazz.array(Long.TYPE, [planeSize]);
} else if (Clazz.getClass($I$(15)).isAssignableFrom$Class(typeClass)) {
array=Clazz.array(Double.TYPE, [planeSize]);
} else if (Clazz.getClass($I$(16)).isAssignableFrom$Class(typeClass)) {
array=Clazz.array(Float.TYPE, [planeSize]);
}if (array == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unsupported ImgPlus data type: " + typeClass]);
}var randomAccess=img.randomAccess$();
randomAccess.setPosition$JA(dimensions);
var idx=0;
for (var i=0; i < img.dimension$I(1); i++) {
for (var j=0; j < img.dimension$I(0); j++) {
var value=randomAccess.get$();
if (Clazz.getClass($I$(11)).isAssignableFrom$Class(typeClass)) {
(array)[idx++]=((value).getRealDouble$()|0);
} else if (Clazz.getClass($I$(12)).isAssignableFrom$Class(typeClass)) {
(array)[idx++]=(((value).getRealDouble$()|0)|0);
} else if (Clazz.getClass($I$(13)).isAssignableFrom$Class(typeClass)) {
(array)[idx++]=((value).getRealDouble$()|0);
} else if (Clazz.getClass($I$(14)).isAssignableFrom$Class(typeClass)) {
(array)[idx++]=((value).getRealDouble$()|0);
} else if (Clazz.getClass($I$(15)).isAssignableFrom$Class(typeClass)) {
(array)[idx++]=(value).getRealDouble$();
} else if (Clazz.getClass($I$(16)).isAssignableFrom$Class(typeClass)) {
(array)[idx++]=(value).getRealDouble$();
}randomAccess.fwd$I(0);
}
dimensions[1]++;
randomAccess.setPosition$JA(dimensions);
}
return array;
}, p$1);

Clazz.newMeth(C$, 'getPlaneCount$net_imglib2_img_Img', function (img) {
if (Clazz.getClass($I$(8)).isAssignableFrom$Class(img.getClass$())) {
var planarImg=img;
return planarImg.numSlices$();
}var count=1;
for (var d=2; d < img.numDimensions$(); d++) {
count*=img.dimension$I(d);
}
return count;
}, p$1);

Clazz.newMeth(C$, 'populateMeta$io_scif_Writer$io_scif_img_SCIFIOImgPlus$io_scif_config_SCIFIOConfig$org_scijava_io_location_Location$I', function (w, img, config, id, imageIndex) {
this.statusService.showStatus$S("Initializing " + img.getName$());
var meta=w.getFormat$().createMetadata$();
var imgMeta=img.getMetadata$();
var imageMeta=Clazz.new_(1,{E:"io.scif.ImageMetadata"},$I$(17,1));
if (imgMeta == null ) {
imgMeta=Clazz.new_($I$(18,1));
imgMeta.createImageMetadata$I(1);
imageMeta.add$TE(imgMeta.get$I(0));
} else {
for (var i=0; i < imgMeta.getImageCount$(); i++) {
imageMeta.add$TE(Clazz.new_($I$(19,1)));
}
}var pixelType=this.utils$().makeType$O(img.firstElement$());
if (!w.isSupportedType$I$S(pixelType, null)) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Pixeltype " + $I$(7).getPixelTypeString$I(pixelType) + " is not supported by this format!" ]);
}var axes=Clazz.array($I$(20), [img.numDimensions$()]);
img.axes$TAA(axes);
var axisLengths=Clazz.array(Long.TYPE, [img.numDimensions$()]);
img.dimensions$JA(axisLengths);
for (var iMeta, $iMeta = imageMeta.iterator$(); $iMeta.hasNext$()&&((iMeta=($iMeta.next$())),1);) {
iMeta.populate$S$java_util_List$JA$I$Z$Z$Z$Z$Z(img.getName$(), $I$(10).asList$TTA(axes), axisLengths, pixelType, true, false, false, false, true);
if (img.getCompositeChannelCount$() > 1) {
if (config.imgSaverGetWriteRGB$()) {
iMeta.setPlanarAxisCount$I(3);
}iMeta.setAxisType$I$net_imagej_axis_AxisType(2, $I$(2).CHANNEL);
if (iMeta.getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL) > img.getCompositeChannelCount$()) {
iMeta.addAxis$net_imagej_axis_AxisType$J($I$(2).get$S$Z("Channel-planes", false), (iMeta.getAxisLength$net_imagej_axis_AxisType($I$(2).CHANNEL)/img.getCompositeChannelCount$()|0));
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(2).CHANNEL, img.getCompositeChannelCount$());
}}}
var t=this.translatorService.findTranslator$io_scif_Metadata$io_scif_Metadata$Z(imgMeta, meta, false);
t.translate$io_scif_Metadata$java_util_List$io_scif_Metadata(imgMeta, imageMeta, meta);
w.setMetadata$io_scif_Metadata(meta);
w.setDest$org_scijava_io_location_Location$I$io_scif_config_SCIFIOConfig(id, imageIndex, config);
}, p$1);
C$.$getAnn$ = function(){ return [
[['statusService','org.scijava.app.StatusService',null,['org.scijava.plugin.Parameter']],['']],
  [['$formatService','io.scif.services.FormatService',null,['org.scijava.plugin.Parameter']],['']],
  [['translatorService','io.scif.services.TranslatorService',null,['org.scijava.plugin.Parameter']],['']]]}
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:43 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
