(function(){var P$=Clazz.newPackage("io.scif.img"),p$1={},I$=[[0,'net.imglib2.type.numeric.integer.UnsignedByteType','net.imglib2.type.numeric.integer.ByteType','net.imglib2.type.numeric.integer.UnsignedShortType','net.imglib2.type.numeric.integer.ShortType','net.imglib2.type.numeric.integer.UnsignedIntType','net.imglib2.type.numeric.integer.IntType','net.imglib2.type.numeric.real.FloatType','net.imglib2.type.numeric.real.DoubleType','net.imglib2.img.basictypeaccess.array.ByteArray','net.imglib2.img.basictypeaccess.array.CharArray','net.imglib2.img.basictypeaccess.array.DoubleArray','net.imglib2.img.basictypeaccess.array.IntArray','net.imglib2.img.basictypeaccess.array.FloatArray','net.imglib2.img.basictypeaccess.array.ShortArray','net.imglib2.img.basictypeaccess.array.LongArray','net.imagej.ImgPlus','net.imagej.axis.CalibratedAxis','org.scijava.util.Bytes','io.scif.img.SCIFIOImgPlus','io.scif.SCIFIO']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultImgUtilityService", null, 'org.scijava.service.AbstractService', 'io.scif.img.ImgUtilityService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.scifio=null;
}, 1);

C$.$fields$=[['O',['scifio','io.scif.SCIFIO']]]

Clazz.newMeth(C$, 'getDimLengths$io_scif_Metadata$I$io_scif_config_SCIFIOConfig', function (m, imageIndex, config) {
var dimLengths=m.get$I(imageIndex).getAxesLengths$();
var region=config.imgOpenerGetRegion$();
for (var i=0; i < dimLengths.length; i++) {
if (region != null  && i < region.size$() ) {
var range=region.getRange$net_imagej_axis_AxisType(m.get$I(imageIndex).getAxis$I(i).type$());
if (range != null ) {
dimLengths[i]=range.size$();
}}}
return dimLengths;
});

Clazz.newMeth(C$, 'getConstrainedLengths$io_scif_Metadata$I$io_scif_config_SCIFIOConfig', function (m, imageIndex, config) {
var lengths=this.getDimLengths$io_scif_Metadata$I$io_scif_config_SCIFIOConfig(m, imageIndex, config);
var r=config.imgOpenerGetRegion$();
if (r != null ) {
for (var t, $t = m.get$I(0).getAxes$().iterator$(); $t.hasNext$()&&((t=($t.next$())),1);) {
var range=r.getRange$net_imagej_axis_AxisType(t.type$());
if (range != null ) lengths[m.get$I(0).getAxisIndex$net_imagej_axis_CalibratedAxis(t)]=range.size$();
}
}return lengths;
});

Clazz.newMeth(C$, 'getImageCount$org_scijava_io_location_Location', function (source) {
try {
var format=p$1.scifio.apply(this, []).format$().getFormat$org_scijava_io_location_Location(source);
return format.createParser$().parse$org_scijava_io_location_Location(source).getImageCount$();
} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.FormatException") || Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('io.scif.img.ImgIOException').c$$Throwable,[e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getPlanarAccess$net_imagej_ImgPlus', function (img) {
if (Clazz.instanceOf(img.getImg$(), "net.imglib2.img.basictypeaccess.PlanarAccess")) {
return img.getImg$();
}return null;
});

Clazz.newMeth(C$, 'getArrayAccess$net_imagej_ImgPlus', function (img) {
if (Clazz.instanceOf(img.getImg$(), "net.imglib2.img.array.ArrayImg")) {
return img.getImg$();
}return null;
});

Clazz.newMeth(C$, 'makeType$I', function (pixelType) {
var type;
switch (pixelType) {
case 1:
type=Clazz.new_($I$(1,1));
break;
case 0:
type=Clazz.new_($I$(2,1));
break;
case 3:
type=Clazz.new_($I$(3,1));
break;
case 2:
type=Clazz.new_($I$(4,1));
break;
case 5:
type=Clazz.new_($I$(5,1));
break;
case 4:
type=Clazz.new_($I$(6,1));
break;
case 6:
type=Clazz.new_($I$(7,1));
break;
case 7:
type=Clazz.new_($I$(8,1));
break;
default:
type=null;
}
return type;
});

Clazz.newMeth(C$, 'makeType$O', function (type) {
var pixelType=1;
if (Clazz.instanceOf(type, "net.imglib2.type.numeric.integer.UnsignedByteType")) {
pixelType=1;
} else if (Clazz.instanceOf(type, "net.imglib2.type.numeric.integer.ByteType")) {
pixelType=0;
} else if (Clazz.instanceOf(type, "net.imglib2.type.numeric.integer.UnsignedShortType")) {
pixelType=3;
} else if (Clazz.instanceOf(type, "net.imglib2.type.numeric.integer.ShortType")) {
pixelType=2;
} else if (Clazz.instanceOf(type, "net.imglib2.type.numeric.integer.UnsignedIntType")) {
pixelType=5;
} else if (Clazz.instanceOf(type, "net.imglib2.type.numeric.integer.IntType")) {
pixelType=4;
} else if (Clazz.instanceOf(type, "net.imglib2.type.numeric.real.FloatType")) {
pixelType=6;
} else if (Clazz.instanceOf(type, "net.imglib2.type.numeric.real.DoubleType")) {
pixelType=7;
} else {
throw Clazz.new_(Clazz.load('io.scif.img.ImgIOException').c$$S,["Pixel type not supported. Please convert your image to a supported type."]);
}return pixelType;
});

Clazz.newMeth(C$, 'makeArray$O', function (array) {
var access;
if (Clazz.instanceOf(array, Clazz.array(Byte.TYPE, -1))) {
access=Clazz.new_($I$(9,1).c$$BA,[array]);
} else if (Clazz.instanceOf(array, Clazz.array(Character.TYPE, -1))) {
access=Clazz.new_($I$(10,1).c$$CA,[array]);
} else if (Clazz.instanceOf(array, Clazz.array(Double.TYPE, -1))) {
access=Clazz.new_($I$(11,1).c$$DA,[array]);
} else if (Clazz.instanceOf(array, Clazz.array(Integer.TYPE, -1))) {
access=Clazz.new_($I$(12,1).c$$IA,[array]);
} else if (Clazz.instanceOf(array, Clazz.array(Float.TYPE, -1))) {
access=Clazz.new_($I$(13,1).c$$FA,[array]);
} else if (Clazz.instanceOf(array, Clazz.array(Short.TYPE, -1))) {
access=Clazz.new_($I$(14,1).c$$HA,[array]);
} else if (Clazz.instanceOf(array, Clazz.array(Long.TYPE, -1))) {
access=Clazz.new_($I$(15,1).c$$JA,[array]);
} else access=null;
return access;
});

Clazz.newMeth(C$, 'isCompressible$net_imglib2_img_Img', function (img) {
return this.isCompressible$net_imagej_ImgPlus($I$(16).wrap$net_imglib2_img_Img(img));
});

Clazz.newMeth(C$, 'isCompressible$net_imagej_ImgPlus', function (img) {
var axes=Clazz.array($I$(17), [img.numDimensions$()]);
img.axes$TAA(axes);
var axisLengths=Clazz.array(Long.TYPE, [5]);
var oldLengths=Clazz.array(Long.TYPE, [img.numDimensions$()]);
img.dimensions$JA(oldLengths);
var foundUnknown=false;
for (var i=0; i < axes.length; i++) {
var axis=axes[i];
switch ((axis.type$().getLabel$().toUpperCase$().charCodeAt$I(0))) {
case 88:
case 89:
case 90:
case 67:
case 84:
break;
default:
if (oldLengths[i] > 1) foundUnknown=true;
}
}
if (!foundUnknown) return false;
var dimOrder=this.guessDimOrder$net_imagej_axis_CalibratedAxisA$JA$JA(axes, oldLengths, axisLengths);
return (dimOrder != null );
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
});

Clazz.newMeth(C$, 'decodeWord$BA$I$I$Z', function (plane, index, pixelType, little) {
var value;
switch (pixelType) {
case 1:
value=plane[index] & 255;
break;
case 0:
value=plane[index];
break;
case 3:
value=$I$(18).toShort$BA$I$I$Z(plane, 2 * index, 2, little) & 65535;
break;
case 2:
value=$I$(18).toShort$BA$I$I$Z(plane, 2 * index, 2, little);
break;
case 5:
value=$I$(18).toInt$BA$I$I$Z(plane, 4 * index, 4, little) & 4294967295;
break;
case 4:
value=$I$(18).toInt$BA$I$I$Z(plane, 4 * index, 4, little);
break;
case 6:
value=$I$(18).toFloat$BA$I$I$Z(plane, 4 * index, 4, little);
break;
case 7:
value=$I$(18).toDouble$BA$I$I$Z(plane, 8 * index, 8, little);
break;
default:
value=NaN;
}
return value;
});

Clazz.newMeth(C$, 'makeSCIFIOImgPlus$net_imglib2_img_Img', function (img) {
if (Clazz.instanceOf(img, "io.scif.img.SCIFIOImgPlus")) return img;
if (Clazz.instanceOf(img, "net.imagej.ImgPlus")) {
return Clazz.new_(1,{T:"Object"},$I$(19,1).c$$net_imagej_ImgPlus,[img]);
}return Clazz.new_(1,{T:"Object"},$I$(19,1).c$$net_imglib2_img_Img,[img]);
});

Clazz.newMeth(C$, 'scifio', function () {
if (this.scifio == null ) this.scifio=Clazz.new_($I$(20,1).c$$org_scijava_Context,[this.getContext$()]);
return this.scifio;
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'io.scif.img.DefaultImgUtilityService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:43 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
