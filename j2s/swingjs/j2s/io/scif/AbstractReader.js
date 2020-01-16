(function(){var P$=Clazz.newPackage("io.scif"),I$=[[0,'io.scif.config.SCIFIOConfig','net.imglib2.FinalInterval','net.imagej.axis.Axes','io.scif.util.FormatTools','io.scif.util.SCIFIOMetadataTools']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractReader", null, 'io.scif.AbstractGroupable', 'io.scif.TypedReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['normalizeData'],'O',['handles','org.scijava.io.handle.DataHandleService','metadata','<M extends io.scif.TypedMetadata>','domains','String[]','planeClass','Class']]]

Clazz.newMeth(C$, 'c$$Class', function (planeClass) {
Clazz.super_(C$, this);
this.planeClass=planeClass;
}, 1);

Clazz.newMeth(C$, 'openPlane$I$J', function (imageIndex, planeIndex) {
return this.openPlane$I$J$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, Clazz.new_($I$(1,1)));
});

Clazz.newMeth(C$, ['openPlane$I$J$net_imglib2_Interval','openPlanenull'], function (imageIndex, planeIndex, bounds) {
return this.openPlane$I$J$net_imglib2_Interval$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, bounds, Clazz.new_($I$(1,1)));
});

Clazz.newMeth(C$, ['openPlane$I$J$io_scif_Plane','openPlanenull'], function (imageIndex, planeIndex, plane) {
return this.openPlane$I$J$TP(imageIndex, planeIndex, this.castToTypedPlane$io_scif_Plane(plane));
});

Clazz.newMeth(C$, ['openPlane$I$J$io_scif_Plane$net_imglib2_Interval','openPlanenull'], function (imageIndex, planeIndex, plane, bounds) {
return this.openPlane$I$J$TP$net_imglib2_Interval(imageIndex, planeIndex, this.castToTypedPlane$io_scif_Plane(plane), bounds);
});

Clazz.newMeth(C$, ['openPlane$I$J$io_scif_config_SCIFIOConfig','openPlanenull'], function (imageIndex, planeIndex, config) {
var bounds=Clazz.new_($I$(2,1).c$$JA,[this.metadata.get$I(imageIndex).getAxesLengthsPlanar$()]);
return this.openPlane$I$J$net_imglib2_Interval$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, bounds, config);
});

Clazz.newMeth(C$, ['openPlane$I$J$net_imglib2_Interval$io_scif_config_SCIFIOConfig','openPlanenull'], function (imageIndex, planeIndex, bounds, config) {
var plane=null;
try {
plane=this.createPlane$net_imglib2_Interval(bounds);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S$Throwable,["Image plane too large. Only 2GB of data can be extracted at one time. You can workaround the problem by opening the plane in tiles; for further details, see: http://www.openmicroscopy.org/site/support/faq/bio-formats/i-see-an-outofmemory-or-negativearraysize-error-message-when-attempting-to-open-an-svs-or-jpeg-2000-file.-what-does-this-mean", e]);
} else {
throw e;
}
}
return this.openPlane$I$J$TP$net_imglib2_Interval$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, plane, bounds, config);
});

Clazz.newMeth(C$, ['openPlane$I$J$io_scif_Plane$io_scif_config_SCIFIOConfig','openPlanenull'], function (imageIndex, planeIndex, plane, config) {
return this.openPlane$I$J$TP$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, this.castToTypedPlane$io_scif_Plane(plane), config);
});

Clazz.newMeth(C$, ['openPlane$I$J$io_scif_Plane$net_imglib2_Interval$io_scif_config_SCIFIOConfig','openPlanenull'], function (imageIndex, planeIndex, plane, bounds, config) {
return this.openPlane$I$J$TP$net_imglib2_Interval$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, this.castToTypedPlane$io_scif_Plane(plane), bounds, config);
});

Clazz.newMeth(C$, 'getCurrentLocation$', function () {
return this.metadata == null  ? null : this.metadata.getSourceLocation$();
});

Clazz.newMeth(C$, 'getDomains$', function () {
if (this.domains == null ) {
this.domains=this.createDomainArray$();
}return this.domains;
});

Clazz.newMeth(C$, 'getHandle$', function () {
return this.metadata == null  ? null : this.metadata.getSource$();
});

Clazz.newMeth(C$, 'getOptimalTileWidth$I', function (imageIndex) {
return this.metadata.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(3).X);
});

Clazz.newMeth(C$, 'getOptimalTileHeight$I', function (imageIndex) {
var bpp=$I$(4).getBytesPerPixel$I(this.metadata.get$I(imageIndex).getPixelType$());
var width=this.metadata.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(3).X);
var rgbcCount=this.metadata.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(3).CHANNEL);
var maxHeight=((1048576)/(width * rgbcCount * bpp )|0);
return Math.min(maxHeight, this.metadata.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(3).Y));
});

Clazz.newMeth(C$, ['setMetadata$io_scif_Metadata','setMetadatanull'], function (meta) {
this.setMetadata$TM($I$(5).castMeta$io_scif_Metadata(meta));
});

Clazz.newMeth(C$, 'getMetadata$', function () {
return this.metadata;
});

Clazz.newMeth(C$, 'setNormalized$Z', function (normalize) {
this.normalizeData=normalize;
});

Clazz.newMeth(C$, 'isNormalized$', function () {
return this.normalizeData;
});

Clazz.newMeth(C$, 'hasCompanionFiles$', function () {
return false;
});

Clazz.newMeth(C$, 'setSource$org_scijava_io_location_Location', function (loc) {
this.setSource$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(loc, Clazz.new_($I$(1,1)));
});

Clazz.newMeth(C$, 'setSource$org_scijava_io_handle_DataHandle', function (stream) {
this.setSource$org_scijava_io_handle_DataHandle$io_scif_config_SCIFIOConfig(stream, Clazz.new_($I$(1,1)));
});

Clazz.newMeth(C$, 'setSource$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig', function (loc, config) {
if (this.getCurrentLocation$() != null  && this.getCurrentLocation$().equals$O(loc) ) {
if (this.getHandle$() != null ) {
this.getHandle$().seek$J(0);
}return;
}this.close$();
var stream=null;
try {
stream=config.bufferedReadingEnabled$() ? this.handles.readBuffer$org_scijava_io_location_Location(loc) : this.handles.create$TD(loc);
if (stream == null ) {
this.setMetadata$io_scif_Metadata(this.getFormat$().createParser$().parse$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(loc, config));
} else {
this.setMetadata$io_scif_Metadata(this.getFormat$().createParser$().parse$org_scijava_io_handle_DataHandle$io_scif_config_SCIFIOConfig(stream, config));
this.setSource$org_scijava_io_handle_DataHandle(stream);
}} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.FormatException")){
if (stream != null ) {
stream.close$();
}throw Clazz.new_(Clazz.load('java.io.IOException').c$$Throwable,[e]);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'setSource$org_scijava_io_handle_DataHandle$io_scif_config_SCIFIOConfig', function (handle, config) {
var currentSource=this.getCurrentLocation$();
var newSource=handle.get$();
if (this.metadata != null  && (currentSource == null  || newSource == null   || !currentSource.equals$O(newSource) ) ) this.close$();
if (this.metadata == null ) {
try {
var meta=this.getFormat$().createParser$().parse$org_scijava_io_handle_DataHandle$io_scif_config_SCIFIOConfig(handle, config);
this.setMetadata$TM(meta);
} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.FormatException")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$Throwable,[e]);
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, ['readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$io_scif_Plane','readPlanenull'], function (s, imageIndex, bounds, plane) {
return this.readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$TP(s, imageIndex, bounds, this.castToTypedPlane$io_scif_Plane(plane));
});

Clazz.newMeth(C$, ['readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$I$io_scif_Plane','readPlanenull'], function (s, imageIndex, bounds, scanlinePad, plane) {
return this.readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$I$TP(s, imageIndex, bounds, scanlinePad, this.castToTypedPlane$io_scif_Plane(plane));
});

Clazz.newMeth(C$, 'getPlaneCount$I', function (imageIndex) {
return this.metadata.get$I(imageIndex).getPlaneCount$();
});

Clazz.newMeth(C$, 'getImageCount$', function () {
return this.metadata.getImageCount$();
});

Clazz.newMeth(C$, 'castToTypedPlane$io_scif_Plane', function (plane) {
if (!this.planeClass.isAssignableFrom$Class(plane.getClass$())) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Incompatible plane types. Attempted to cast: " + plane.getClass$() + " to: " + this.planeClass ]);
}var p=plane;
return p;
});

Clazz.newMeth(C$, ['openPlane$I$J$TP'], function (imageIndex, planeIndex, plane) {
return this.openPlane$I$J$TP$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, plane, Clazz.new_($I$(1,1)));
});

Clazz.newMeth(C$, ['openPlane$I$J$TP$io_scif_config_SCIFIOConfig'], function (imageIndex, planeIndex, plane, config) {
return this.openPlane$I$J$TP$net_imglib2_Interval$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, plane, plane.getBounds$(), config);
});

Clazz.newMeth(C$, ['openPlane$I$J$TP$net_imglib2_Interval'], function (imageIndex, planeIndex, plane, bounds) {
return this.openPlane$I$J$TP$net_imglib2_Interval$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, plane, plane.getBounds$(), Clazz.new_($I$(1,1)));
});

Clazz.newMeth(C$, ['setMetadata$TM'], function (meta) {
if (this.metadata != null  && this.metadata !== meta  ) {
this.close$();
}if (this.metadata == null ) this.metadata=meta;
});

Clazz.newMeth(C$, ['readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$TP'], function (s, imageIndex, bounds, plane) {
return this.readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$I$TP(s, imageIndex, bounds, 0, plane);
});

Clazz.newMeth(C$, ['readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$I$TP'], function (s, imageIndex, bounds, scanlinePad, plane) {
var bpp=$I$(4).getBytesPerPixel$I(this.metadata.get$I(imageIndex).getPixelType$());
var bytes=plane.getBytes$();
var xIndex=this.metadata.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(3).X);
var yIndex=this.metadata.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(3).Y);
if ($I$(5).wholePlane$I$io_scif_Metadata$net_imglib2_Interval(imageIndex, this.metadata, bounds) && scanlinePad == 0 ) {
s.read$BA(bytes);
} else if ($I$(5).wholeRow$I$io_scif_Metadata$net_imglib2_Interval(imageIndex, this.metadata, bounds) && scanlinePad == 0 ) {
if (this.metadata.get$I(imageIndex).getInterleavedAxisCount$() > 0) {
var bytesToSkip=bpp;
bytesToSkip*=bounds.max$I(xIndex);
var bytesToRead=bytesToSkip;
for (var i=0; i < bounds.numDimensions$(); i++) {
if (i != xIndex) {
if (i == yIndex) {
bytesToSkip*=bounds.min$I(i);
} else {
bytesToSkip*=bounds.max$I(i);
}bytesToRead*=bounds.max$I(i);
}}
s.skip$J(bytesToSkip);
s.read$BA$I$I(bytes, 0, bytesToRead);
} else {
var rowLen=((bpp * bounds.max$I(xIndex))|0);
var h=(bounds.max$I(yIndex)|0);
var y=(bounds.min$I(yIndex)|0);
var c=this.metadata.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(3).CHANNEL);
if (c <= 0 || !this.metadata.get$I(imageIndex).isMultichannel$() ) c=1;
for (var channel=0; channel < c; channel++) {
s.skipBytes$I(y * rowLen);
s.read$BA$I$I(bytes, channel * h * rowLen , h * rowLen);
if (channel < c - 1) {
s.skipBytes$I(((this.metadata.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(3).Y) - y - h )|0) * rowLen);
}}
}} else {
var scanlineWidth=(this.metadata.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(3).X)|0) + scanlinePad;
if (this.metadata.get$I(imageIndex).getInterleavedAxisCount$() > 0) {
var planeProduct=bpp;
for (var i=0; i < bounds.numDimensions$(); i++) {
if (i != xIndex && i != yIndex ) planeProduct*=this.metadata.get$I(imageIndex).getAxisLength$I(i);
}
var bytesToSkip=scanlineWidth * (planeProduct|0);
s.skipBytes$I((bounds.min$I(yIndex)|0) * bytesToSkip);
bytesToSkip=bpp;
var bytesToRead=bytesToSkip;
bytesToRead*=bounds.max$I(xIndex);
bytesToRead*=planeProduct;
bytesToSkip*=bounds.min$I(xIndex);
bytesToSkip*=planeProduct;
for (var row=0; row <= bounds.max$I(yIndex); row++) {
s.skipBytes$I(bytesToSkip);
s.read$BA$I$I(bytes, row * bytesToRead, bytesToRead);
if (row < bounds.max$I(yIndex)) {
s.skipBytes$I(((planeProduct * (scanlineWidth - bounds.dimension$I(xIndex)))|0));
}}
} else {
var c=this.metadata.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(3).CHANNEL);
var w=(bounds.max$I(xIndex)|0);
var h=(bounds.max$I(yIndex)|0);
var x=(bounds.min$I(xIndex)|0);
var y=(bounds.min$I(yIndex)|0);
for (var channel=0; channel < c; channel++) {
s.skipBytes$I(y * scanlineWidth * bpp );
for (var row=0; row < h; row++) {
s.skipBytes$I(x * bpp);
s.read$BA$I$I(bytes, channel * w * h * bpp  + row * w * bpp , w * bpp);
if (row < h - 1 || channel < c - 1 ) {
s.skipBytes$I(bpp * (scanlineWidth - w - x ));
}}
if (channel < c - 1) {
s.skipBytes$I(scanlineWidth * bpp * ((this.metadata.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(3).Y) - y - h )|0) );
}}
}}return plane;
});

Clazz.newMeth(C$, 'getPlaneClass$', function () {
return this.planeClass;
});

Clazz.newMeth(C$, 'close$Z', function (fileOnly) {
if (this.metadata != null ) this.metadata.close$Z(fileOnly);
if (!fileOnly) {
this.metadata=null;
}});
C$.$getAnn$ = function(){ return [
[['handles','org.scijava.io.handle.DataHandleService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:35 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
