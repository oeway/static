(function(){var P$=Clazz.newPackage("io.scif.util"),I$=[[0,'net.imagej.axis.DefaultLinearAxis','net.imagej.axis.CalibratedAxis','net.imglib2.FinalInterval','net.imagej.axis.Axes','net.imglib2.util.Intervals','java.util.Vector']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FormatTools");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.COMPRESSION_SUFFIXES=Clazz.array(String, -1, ["bz2", "gz"]);
C$.pixelTypes=C$.makePixelTypes$();
C$.NON_GRAPHICS_DOMAINS=Clazz.array(String, -1, ["Light Microscopy", "Electron Microscopy (EM)", "Scanning Probe Microscopy (SPM)", "Scanning Electron Microscopy (SEM)", "Fluorescence-Lifetime Imaging", "Medical Imaging", "Histology", "Gel/Blot Imaging", "Astronomy", "High-Content Screening (HCS)", "Unknown"]);
C$.NON_HCS_DOMAINS=Clazz.array(String, -1, ["Light Microscopy", "Electron Microscopy (EM)", "Scanning Probe Microscopy (SPM)", "Scanning Electron Microscopy (SEM)", "Fluorescence-Lifetime Imaging", "Medical Imaging", "Histology", "Gel/Blot Imaging", "Astronomy", "Unknown"]);
C$.NON_SPECIAL_DOMAINS=Clazz.array(String, -1, ["Light Microscopy", "Electron Microscopy (EM)", "Scanning Probe Microscopy (SPM)", "Scanning Electron Microscopy (SEM)", "Fluorescence-Lifetime Imaging", "Medical Imaging", "Histology", "Gel/Blot Imaging", "Astronomy", "Unknown"]);
C$.ALL_DOMAINS=Clazz.array(String, -1, ["High-Content Screening (HCS)", "Light Microscopy", "Electron Microscopy (EM)", "Scanning Probe Microscopy (SPM)", "Scanning Electron Microscopy (SEM)", "Fluorescence-Lifetime Imaging", "Medical Imaging", "Histology", "Gel/Blot Imaging", "Astronomy", "Graphics", "Unknown"]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['COMPRESSION_SUFFIXES','String[]','+pixelTypes','+NON_GRAPHICS_DOMAINS','+NON_HCS_DOMAINS','+NON_SPECIAL_DOMAINS','+ALL_DOMAINS']]]

Clazz.newMeth(C$, 'makePixelTypes$', function () {
var pixelTypes=Clazz.array(String, [8]);
pixelTypes[0]="int8";
pixelTypes[1]="uint8";
pixelTypes[2]="int16";
pixelTypes[3]="uint16";
pixelTypes[4]="int32";
pixelTypes[5]="uint32";
pixelTypes[6]="float";
pixelTypes[7]="double";
return pixelTypes;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createAxis$net_imagej_axis_AxisType', function (axisType) {
return Clazz.new_($I$(1,1).c$$net_imagej_axis_AxisType,[axisType]);
}, 1);

Clazz.newMeth(C$, 'createAxes$net_imagej_axis_AxisTypeA', function (axisTypes) {
var axes=Clazz.array($I$(2), [axisTypes.length]);
for (var i=0; i < axisTypes.length; i++) {
axes[i]=C$.createAxis$net_imagej_axis_AxisType(axisTypes[i]);
}
return axes;
}, 1);

Clazz.newMeth(C$, 'calibrate$io_scif_Metadata$I$DA', function (m, imageIndex, scale) {
C$.calibrate$io_scif_Metadata$I$DA$DA(m, imageIndex, scale, Clazz.array(Double.TYPE, [scale.length]));
}, 1);

Clazz.newMeth(C$, 'calibrate$io_scif_Metadata$I$DA$DA', function (m, imageIndex, scale, origin) {
var i=0;
for (var axis, $axis = m.get$I(imageIndex).getAxes$().iterator$(); $axis.hasNext$()&&((axis=($axis.next$())),1);) {
if (i >= scale.length || i >= origin.length ) continue;
C$.calibrate$net_imagej_axis_CalibratedAxis$D$D(axis, scale[i], origin[i]);
i++;
}
}, 1);

Clazz.newMeth(C$, 'calibrate$net_imagej_axis_CalibratedAxis$D$D', function (axis, scale, origin) {
if (!(Clazz.instanceOf(axis, "net.imagej.axis.LinearAxis"))) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not a linear axis: " + axis]);
}var linearAxis=axis;
linearAxis.setScale$D(scale);
linearAxis.setOrigin$D(origin);
}, 1);

Clazz.newMeth(C$, 'calibrate$net_imagej_axis_CalibratedAxis$D$D$S', function (axis, scale, origin, unit) {
C$.calibrate$net_imagej_axis_CalibratedAxis$D$D(axis, scale, origin);
axis.setUnit$S(unit);
}, 1);

Clazz.newMeth(C$, 'getScale$io_scif_Metadata$I$net_imagej_axis_AxisType', function (m, imageIndex, axisType) {
return C$.getScale$io_scif_ImageMetadata$net_imagej_axis_AxisType(m.get$I(imageIndex), axisType);
}, 1);

Clazz.newMeth(C$, 'getScale$io_scif_ImageMetadata$net_imagej_axis_AxisType', function (imageMeta, axisType) {
var axis=imageMeta.getAxis$net_imagej_axis_AxisType(axisType);
if (axis == null ) return 1.0;
var axisLength=imageMeta.getAxisLength$net_imagej_axis_CalibratedAxis(axis);
return axis.averageScale$D$D(0, axisLength - 1);
}, 1);

Clazz.newMeth(C$, 'getNonPlanarAxisPosition$io_scif_Metadata$I$J$net_imagej_axis_AxisType', function (m, imageIndex, planeIndex, type) {
var iMeta=m.get$I(imageIndex);
var axisIndex=iMeta.getAxisIndex$net_imagej_axis_AxisType(type);
if (axisIndex < iMeta.getPlanarAxisCount$()) return 0;
var position=C$.rasterToPosition$JA$J(iMeta.getAxesLengthsNonPlanar$(), planeIndex);
axisIndex-=iMeta.getPlanarAxisCount$();
return position[axisIndex];
}, 1);

Clazz.newMeth(C$, 'rasterToPosition$I$J$io_scif_Metadata$java_util_List', function (imageIndex, planeIndex, m, expectedAxis) {
var axisLengths=m.get$I(imageIndex).getAxesLengths$java_util_List(expectedAxis);
return C$.rasterToPosition$JA$J(axisLengths, planeIndex);
}, 1);

Clazz.newMeth(C$, 'rasterToPosition$I$J$io_scif_Reader', function (imageIndex, planeIndex, reader) {
return C$.rasterToPosition$I$J$io_scif_Metadata(imageIndex, planeIndex, reader.getMetadata$());
}, 1);

Clazz.newMeth(C$, 'rasterToPosition$I$J$io_scif_Metadata', function (imageIndex, planeIndex, m) {
var axisLengths=m.get$I(imageIndex).getAxesLengthsNonPlanar$();
return C$.rasterToPosition$JA$J(axisLengths, planeIndex);
}, 1);

Clazz.newMeth(C$, 'rasterToPosition$JA$J', function (lengths, raster) {
return C$.rasterToPosition$JA$J$JA(lengths, raster, Clazz.array(Long.TYPE, [lengths.length]));
}, 1);

Clazz.newMeth(C$, 'rasterToPosition$JA$J$JA', function (lengths, raster, pos) {
var offset=1;
for (var i=0; i < pos.length; i++) {
var offset1=offset * lengths[i];
var q=i < pos.length - 1 ? raster % offset1 : raster;
pos[i]=(q/offset|0);
raster-=q;
offset=offset1;
}
return pos;
}, 1);

Clazz.newMeth(C$, 'nextPlaneIndex$I$io_scif_Reader$JA$JA$JA', function (imageIndex, r, pos, offsets, cropLengths) {
return C$.nextPlaneIndex$I$io_scif_Metadata$JA$JA$JA(imageIndex, r.getMetadata$(), pos, offsets, cropLengths);
}, 1);

Clazz.newMeth(C$, 'nextPlaneIndex$I$io_scif_Metadata$JA$JA$JA', function (imageIndex, m, pos, offsets, cropLengths) {
return C$.nextPlaneIndex$JA$JA$JA$JA(m.get$I(imageIndex).getAxesLengthsNonPlanar$(), pos, offsets, cropLengths);
}, 1);

Clazz.newMeth(C$, 'nextPlaneIndex$JA$JA$JA$JA', function (lengths, pos, offsets, cropLengths) {
var updated=false;
for (var i=0; i < pos.length && !updated ; i++) {
if (pos[i] < offsets[i]) break;
if (pos[i] + 1 < offsets[i] + cropLengths[i]) {
pos[i]++;
updated=true;
} else {
pos[i]=offsets[i];
}}
if (updated) {
return C$.positionToRaster$JA$JA(lengths, pos);
}return -1;
}, 1);

Clazz.newMeth(C$, 'positionToRaster$I$io_scif_Reader$JA', function (imageIndex, reader, planeIndices) {
return C$.positionToRaster$I$io_scif_Metadata$JA(imageIndex, reader.getMetadata$(), planeIndices);
}, 1);

Clazz.newMeth(C$, 'positionToRaster$I$io_scif_Metadata$JA', function (imageIndex, m, planeIndices) {
var planeSizes=m.get$I(imageIndex).getAxesLengthsNonPlanar$();
return C$.positionToRaster$JA$JA(planeSizes, planeIndices);
}, 1);

Clazz.newMeth(C$, 'positionToRaster$JA$JA', function (lengths, pos) {
var offset=1;
var raster=0;
for (var i=0; i < pos.length; i++) {
raster+=offset * pos[i];
offset*=lengths[i];
}
return raster;
}, 1);

Clazz.newMeth(C$, 'getRasterLength$JA', function (lengths) {
var length=1;
for (var lengthVal, $lengthVal = 0, $$lengthVal = lengths; $lengthVal<$$lengthVal.length&&((lengthVal=($$lengthVal[$lengthVal])),1);$lengthVal++) length*=lengthVal;

return length;
}, 1);

Clazz.newMeth(C$, 'assertId$O$Z$I', function (id, notNull, depth) {
var msg=null;
if (id == null  && notNull ) {
msg="Current Location should not be null; call setId(Location) first";
} else if (id != null  && !notNull ) {
msg="Current file should be null, but is '" + id + "'; call close() first" ;
}if (msg == null ) return;
var ste=Clazz.new_(Clazz.load('Exception')).getStackTrace$();
var header;
if (depth > 0 && ste.length > depth ) {
var c=ste[depth].getClassName$();
if (c.startsWith$S("io.scif.")) {
c=c.substring$I(c.lastIndexOf$S(".") + 1);
}header=c + "." + ste[depth].getMethodName$() + ": " ;
} else header="";
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[header + msg]);
}, 1);

Clazz.newMeth(C$, 'assertStream$org_scijava_io_handle_DataHandle$Z$I', function (stream, notNull, depth) {
var msg=null;
if (stream == null  && notNull ) {
msg="Current file should not be null; call setId(String) first";
} else if (stream != null  && !notNull ) {
msg="Current file should be null, but is '" + stream + "'; call close() first" ;
}if (msg == null ) return;
var ste=Clazz.new_(Clazz.load('Exception')).getStackTrace$();
var header;
if (depth > 0 && ste.length > depth ) {
var c=ste[depth].getClassName$();
if (c.startsWith$S("io.scif.")) {
c=c.substring$I(c.lastIndexOf$S(".") + 1);
}header=c + "." + ste[depth].getMethodName$() + ": " ;
} else header="";
throw Clazz.new_(Clazz.load('IllegalStateException').c$$S,[header + msg]);
}, 1);

Clazz.newMeth(C$, 'checkPlaneForReading$io_scif_Metadata$I$J$I$net_imglib2_Interval', function (m, imageIndex, planeIndex, bufLength, bounds) {
C$.assertId$O$Z$I(m.getSourceLocation$(), true, 2);
C$.checkPlaneForWriting$io_scif_Metadata$I$J$I$net_imglib2_Interval(m, imageIndex, planeIndex, bufLength, bounds);
}, 1);

Clazz.newMeth(C$, 'checkPlaneForWriting$io_scif_Metadata$I$J$I$net_imglib2_Interval', function (m, imageIndex, planeIndex, bufLength, bounds) {
C$.checkPlaneNumber$io_scif_Metadata$I$J(m, imageIndex, planeIndex);
C$.checkTileSize$io_scif_Metadata$net_imglib2_Interval$I(m, bounds, imageIndex);
if (bufLength >= 0) C$.checkBufferSize$io_scif_Metadata$I$net_imglib2_Interval$I(m, bufLength, bounds, imageIndex);
}, 1);

Clazz.newMeth(C$, 'checkPlaneNumber$io_scif_Metadata$I$J', function (m, imageIndex, planeIndex) {
var imageCount=m.get$I(imageIndex).getPlaneCount$();
if (planeIndex < 0 || planeIndex >= imageCount ) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Invalid plane number: " + planeIndex + " (" + "planeCount=" + planeIndex + ")" ]);
}}, 1);

Clazz.newMeth(C$, 'checkTileSize$io_scif_Metadata$net_imglib2_Interval$I', function (m, bounds, imageIndex) {
var axes=m.get$I(imageIndex).getAxesPlanar$();
for (var i=0; i < axes.size$(); i++) {
var start=bounds.min$I(i);
var end=bounds.max$I(i);
var length=m.get$I(imageIndex).getAxisLength$net_imagej_axis_CalibratedAxis(axes.get$I(i));
if (start < 0 || end < 0  || end >= length ) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Invalid planar size: start=" + start + ", end=" + end + ", length in metadata=" + length ]);
}}
}, 1);

Clazz.newMeth(C$, 'checkBufferSize$I$io_scif_Metadata$I', function (imageIndex, m, len) {
C$.checkBufferSize$io_scif_Metadata$I$net_imglib2_Interval$I(m, len, Clazz.new_($I$(3,1).c$$JA,[m.get$I(imageIndex).getAxesLengthsPlanar$()]), imageIndex);
}, 1);

Clazz.newMeth(C$, 'checkBufferSize$io_scif_Metadata$I$net_imglib2_Interval$I', function (m, len, bounds, imageIndex) {
var size=C$.getPlaneSize$io_scif_Metadata$net_imglib2_Interval$I(m, bounds, imageIndex);
if (size > len) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Buffer too small (got " + len + ", expected " + size + ")." ]);
}}, 1);

Clazz.newMeth(C$, 'validStream$org_scijava_io_handle_DataHandle$I$Z', function (handle, len, littleEndian) {
handle.seek$J(0);
handle.setLittleEndian$Z(littleEndian);
return handle.length$() >= len;
}, 1);

Clazz.newMeth(C$, 'validStream$org_scijava_io_handle_DataHandle$I$org_scijava_io_handle_DataHandle_ByteOrder', function (handle, len, order) {
handle.seek$J(0);
handle.setOrder$org_scijava_io_handle_DataHandle_ByteOrder(order);
return handle.length$() >= len;
}, 1);

Clazz.newMeth(C$, 'getPlaneSize$io_scif_Reader$I', function (r, imageIndex) {
return C$.getPlaneSize$io_scif_Metadata$I(r.getMetadata$(), imageIndex);
}, 1);

Clazz.newMeth(C$, 'getPlaneSize$io_scif_Metadata$I', function (m, imageIndex) {
return m.get$I(imageIndex).getPlaneSize$();
}, 1);

Clazz.newMeth(C$, 'getPlaneSize$io_scif_Metadata$I$I$I', function (m, width, height, imageIndex) {
var iMeta=m.get$I(imageIndex);
var lengths=Clazz.array(Long.TYPE, [iMeta.getPlanarAxisCount$()]);
for (var i=0; i < lengths.length; i++) {
var type=iMeta.getAxis$I(i).type$();
if (type === $I$(4).X ) {
lengths[i]=width;
} else if (type === $I$(4).Y ) {
lengths[i]=height;
} else {
lengths[i]=iMeta.getAxisLength$net_imagej_axis_AxisType(type);
}}
var bounds=Clazz.new_($I$(3,1).c$$JA,[lengths]);
return C$.getPlaneSize$io_scif_Metadata$net_imglib2_Interval$I(m, bounds, imageIndex);
}, 1);

Clazz.newMeth(C$, 'getPlaneSize$io_scif_Metadata$net_imglib2_Interval$I', function (m, bounds, imageIndex) {
var bytesPerPixel=(m.get$I(imageIndex).getBitsPerPixel$()/8|0);
return bytesPerPixel * $I$(5).numElements$net_imglib2_Dimensions(bounds);
}, 1);

Clazz.newMeth(C$, 'pixelTypeFromString$S', function (pixelTypeAsString) {
var lowercaseTypeAsString=pixelTypeAsString.toLowerCase$();
for (var i=0; i < C$.pixelTypes.length; i++) {
if (C$.pixelTypes[i].equals$O(lowercaseTypeAsString)) return i;
}
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown type: '" + pixelTypeAsString + "'" ]);
}, 1);

Clazz.newMeth(C$, 'getPixelTypeString$I', function (pixelType) {
if (pixelType < 0 || pixelType >= C$.pixelTypes.length ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown pixel type: " + pixelType]);
}return C$.pixelTypes[pixelType];
}, 1);

Clazz.newMeth(C$, 'getBytesPerPixel$I', function (pixelType) {
switch (pixelType) {
case 0:
case 1:
return 1;
case 2:
case 3:
return 2;
case 4:
case 5:
case 6:
return 4;
case 7:
return 8;
}
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown pixel type: " + pixelType]);
}, 1);

Clazz.newMeth(C$, 'getBitsPerPixel$I', function (pixelType) {
return 8 * C$.getBytesPerPixel$I(pixelType);
}, 1);

Clazz.newMeth(C$, 'getBytesPerPixel$S', function (pixelType) {
return C$.getBytesPerPixel$I(C$.pixelTypeFromString$S(pixelType));
}, 1);

Clazz.newMeth(C$, 'isFloatingPoint$I', function (pixelType) {
switch (pixelType) {
case 0:
case 1:
case 2:
case 3:
case 4:
case 5:
return false;
case 6:
case 7:
return true;
}
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown pixel type: " + pixelType]);
}, 1);

Clazz.newMeth(C$, 'isSigned$I', function (pixelType) {
switch (pixelType) {
case 0:
case 2:
case 4:
case 6:
case 7:
return true;
case 1:
case 3:
case 5:
return false;
}
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown pixel type: " + pixelType]);
}, 1);

Clazz.newMeth(C$, 'pixelTypeFromBytes$I$Z$Z', function (bytes, signed, fp) {
switch (bytes) {
case 1:
return signed ? 0 : 1;
case 2:
return signed ? 2 : 3;
case 4:
return fp ? 6 : signed ? 4 : 5;
case 8:
return 7;
default:
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Unsupported byte depth: " + bytes]);
}
}, 1);

Clazz.newMeth(C$, 'getFilename$I$I$io_scif_Reader$S', function (imageIndex, image, r, pattern) {
var filename=pattern.replaceAll$S$S("%s", String.valueOf$I(imageIndex));
var imageName=r.getCurrentLocation$().getName$();
if (imageName == null  || "".equals$O(imageName) ) imageName="Image#" + imageIndex;
imageName=imageName.replaceAll$S$S("/", "_");
imageName=imageName.replaceAll$S$S("\\\\", "_");
filename=filename.replaceAll$S$S("%n", imageName);
var coordinates=C$.rasterToPosition$I$J$io_scif_Reader(imageIndex, image, r);
filename=filename.replaceAll$S$S("%z", String.valueOf$J(coordinates[0]));
filename=filename.replaceAll$S$S("%t", String.valueOf$J(coordinates[2]));
filename=filename.replaceAll$S$S("%c", String.valueOf$J(coordinates[1]));
var channelName=String.valueOf$J(coordinates[1]);
channelName=channelName.replaceAll$S$S("/", "_");
channelName=channelName.replaceAll$S$S("\\\\", "_");
filename=filename.replaceAll$S$S("%w", channelName);
return filename;
}, 1);

Clazz.newMeth(C$, 'getFilenames$S$io_scif_Reader', function (pattern, r) {
var filenames=Clazz.new_(1,{E:"String"},$I$(6,1));
var filename=null;
for (var series=0; series < r.getImageCount$(); series++) {
for (var image=0; image < r.getImageCount$(); image++) {
filename=C$.getFilename$I$I$io_scif_Reader$S(series, image, r, pattern);
if (!filenames.contains$O(filename)) filenames.add$TE(filename);
}
}
return filenames.toArray$TTA(Clazz.array(String, [0]));
}, 1);

Clazz.newMeth(C$, 'getImagesPerFile$S$io_scif_Reader', function (pattern, r) {
var filenames=C$.getFilenames$S$io_scif_Reader(pattern, r);
var totalPlanes=0;
for (var series=0; series < r.getImageCount$(); series++) {
totalPlanes+=r.getMetadata$().get$I(series).getPlaneCount$();
}
return (totalPlanes/filenames.length|0);
}, 1);

Clazz.newMeth(C$, 'convert$io_scif_Reader$io_scif_Writer$S', function (input, output, outputFile) {
var p=null;
for (var i=0; i < input.getImageCount$(); i++) {
for (var j=0; j < input.getPlaneCount$I(i); j++) {
p=input.openPlane$I$J(i, j);
output.savePlane$I$J$io_scif_Plane(i, j, p);
}
}
input.close$();
output.close$();
}, 1);

Clazz.newMeth(C$, 'convert$io_scif_Reader$io_scif_Writer$S$io_scif_config_SCIFIOConfig', function (input, output, outputFile, config) {
var p=null;
for (var i=0; i < input.getImageCount$(); i++) {
for (var j=0; j < input.getPlaneCount$I(i); j++) {
p=input.openPlane$I$J$io_scif_config_SCIFIOConfig(i, j, config);
output.savePlane$I$J$io_scif_Plane(i, j, p);
}
}
input.close$();
output.close$();
}, 1);

Clazz.newMeth(C$, 'defaultMinMax$I', function (pixelType) {
var min=0;
var max=0;
switch (pixelType) {
case 0:
min=-128;
max=127;
break;
case 2:
min=-32768;
max=32767;
break;
case 4:
case 6:
case 7:
min=-2147483648;
max=2147483647;
break;
case 1:
min=0;
max=255;
break;
case 3:
min=0;
max=65535;
break;
case 5:
min=0;
max=4294967295;
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid pixel type"]);
}
return Clazz.array(Long.TYPE, -1, [min, max]);
}, 1);

Clazz.newMeth(C$, 'defaultMinMax$I$Z', function (bitsPerPixel, signed) {
if (bitsPerPixel <= 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Bits per pixel must be positive. Value was: " + bitsPerPixel]);
var min=0;
var max=0;
var bits=bitsPerPixel;
if (signed) {
bits--;
min=(-Math.pow(2, bits)|0);
}max=(Math.pow(2, bits)|0) - 1;
return Clazz.array(Long.TYPE, -1, [min, max]);
}, 1);

Clazz.newMeth(C$, 'defaultMinMax$I$I', function (pixelType, bitsPerPixel) {
if (bitsPerPixel > 0) {
return C$.defaultMinMax$I$Z(bitsPerPixel, C$.isSigned$I(pixelType));
}return C$.defaultMinMax$I(pixelType);
}, 1);

Clazz.newMeth(C$, 'defaultMinMax$io_scif_ImageMetadata', function (iMeta) {
return C$.defaultMinMax$I$I(iMeta.getPixelType$(), iMeta.getBitsPerPixel$());
}, 1);

Clazz.newMeth(C$, 'checkSuffix$S$S', function (name, suffix) {
return C$.checkSuffix$S$SA(name, Clazz.array(String, -1, [suffix]));
}, 1);

Clazz.newMeth(C$, 'checkSuffix$S$SA', function (name, suffixList) {
var lname=name.toLowerCase$();
for (var suffix, $suffix = 0, $$suffix = suffixList; $suffix<$$suffix.length&&((suffix=($$suffix[$suffix])),1);$suffix++) {
var s="." + suffix;
if (lname.endsWith$S(s)) return true;
for (var COMPRESSION_SUFFIX, $COMPRESSION_SUFFIX = 0, $$COMPRESSION_SUFFIX = C$.COMPRESSION_SUFFIXES; $COMPRESSION_SUFFIX<$$COMPRESSION_SUFFIX.length&&((COMPRESSION_SUFFIX=($$COMPRESSION_SUFFIX[$COMPRESSION_SUFFIX])),1);$COMPRESSION_SUFFIX++) {
if (lname.endsWith$S(s + "." + COMPRESSION_SUFFIX )) return true;
}
}
return false;
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:45 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
