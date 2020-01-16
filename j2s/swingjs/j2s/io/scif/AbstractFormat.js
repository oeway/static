(function(){var P$=Clazz.newPackage("io.scif"),p$1={},I$=[[0,'io.scif.DefaultMetadata','io.scif.DefaultChecker','io.scif.DefaultParser','io.scif.DefaultReader','io.scif.DefaultWriter','io.scif.DefaultComponent','io.scif.Metadata','io.scif.Checker','io.scif.Parser','io.scif.Reader','io.scif.Writer','java.util.ArrayList']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractFormat", null, 'io.scif.AbstractSCIFIOPlugin', 'io.scif.Format');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.enabled=true;
}, 1);

C$.$fields$=[['Z',['enabled'],'O',['suffixes','String[]','metadataClass','Class','+checkerClass','+parserClass','+readerClass','+writerClass']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.metadataClass=Clazz.getClass($I$(1));
this.checkerClass=Clazz.getClass($I$(2));
this.parserClass=Clazz.getClass($I$(3));
this.readerClass=Clazz.getClass($I$(4));
this.writerClass=Clazz.getClass($I$(5));
p$1.updateCustomClasses.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'getSuffixes$', function () {
if (this.suffixes == null ) {
this.suffixes=this.makeSuffixArray$();
}return this.suffixes;
});

Clazz.newMeth(C$, 'setEnabled$Z', function (enabled) {
this.enabled=enabled;
});

Clazz.newMeth(C$, 'isEnabled$', function () {
return this.enabled;
});

Clazz.newMeth(C$, 'getFormatName$', function () {
return this.getInfo$().getName$();
});

Clazz.newMeth(C$, 'createMetadata$', function () {
return p$1.createContextualObject$Class.apply(this, [this.getMetadataClass$()]);
});

Clazz.newMeth(C$, 'createChecker$', function () {
return p$1.createContextualObject$Class.apply(this, [this.getCheckerClass$()]);
});

Clazz.newMeth(C$, 'createParser$', function () {
return p$1.createContextualObject$Class.apply(this, [this.getParserClass$()]);
});

Clazz.newMeth(C$, 'createReader$', function () {
return p$1.createContextualObject$Class.apply(this, [this.getReaderClass$()]);
});

Clazz.newMeth(C$, 'createWriter$', function () {
return p$1.createContextualObject$Class.apply(this, [this.getWriterClass$()]);
});

Clazz.newMeth(C$, 'getMetadataClass$', function () {
return this.metadataClass;
});

Clazz.newMeth(C$, 'getCheckerClass$', function () {
return this.checkerClass;
});

Clazz.newMeth(C$, 'getParserClass$', function () {
return this.parserClass;
});

Clazz.newMeth(C$, 'getReaderClass$', function () {
return this.readerClass;
});

Clazz.newMeth(C$, 'getWriterClass$', function () {
return this.writerClass;
});

Clazz.newMeth(C$, 'createContextualObject$Class', function (c) {
var t=p$1.createObject$Class.apply(this, [c]);
t.setContext$org_scijava_Context(this.getContext$());
if (Clazz.getClass($I$(6),[]).isAssignableFrom$Class(t.getClass$())) {
try {
var fmt=t.getClass$().getDeclaredField$S("format");
fmt.setAccessible$Z(true);
fmt.set$O$O(t, this);
} catch (e) {
if (Clazz.exceptionOf(e,"NoSuchFieldException") || Clazz.exceptionOf(e,"SecurityException") || Clazz.exceptionOf(e,"IllegalArgumentException") || Clazz.exceptionOf(e,"IllegalAccessException")){
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S$Throwable,["Failed to populate DefaultComponent field", e]);
} else {
throw e;
}
}
}return t;
}, p$1);

Clazz.newMeth(C$, 'createObject$Class', function (c) {
try {
return c.newInstance$();
} catch (e) {
if (Clazz.exceptionOf(e,"InstantiationException") || Clazz.exceptionOf(e,"IllegalAccessException")){
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$Throwable,[e]);
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'updateCustomClasses', function () {
for (var c, $c = p$1.buildClassList.apply(this, []).iterator$(); $c.hasNext$()&&((c=($c.next$())),1);) {
if ((c.getModifiers$() & 1024) != 0) continue;
if (Clazz.getClass($I$(7),['add$io_scif_ImageMetadata','createImageMetadata$I','get$I','getAll$','getDatasetName$','getDatasetSize$','getDestinationLocation$','getImageCount$','getSource$','getSourceLocation$','isFiltered$','populateImageMetadata$','setDatasetName$S','setDestinationLocation$org_scijava_io_location_Location','setFiltered$Z','setSource$org_scijava_io_handle_DataHandle','setSourceLocation$org_scijava_io_location_Location']).isAssignableFrom$Class(c)) this.metadataClass=c;
 else if (Clazz.getClass($I$(8),['checkHeader$BA','isFormat$org_scijava_io_location_Location','isFormat$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig','isFormat$org_scijava_io_handle_DataHandle','suffixNecessary$','suffixSufficient$']).isAssignableFrom$Class(c)) this.checkerClass=c;
 else if (Clazz.getClass($I$(9),['getAdvancedImageUsedLocations$I$Z','getAdvancedUsedLocations$Z','getImageUsedFiles$I','getImageUsedFiles$I$Z','getMetadata$','getSource$','getSourceLocation$','getSupportedMetadataLevels$','getUsedFiles$','getUsedLocations$Z','parse$org_scijava_io_location_Location','parse$org_scijava_io_handle_DataHandle','parse$org_scijava_io_location_Location$io_scif_Metadata','parse$org_scijava_io_handle_DataHandle$io_scif_Metadata','parse$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig','parse$org_scijava_io_handle_DataHandle$io_scif_config_SCIFIOConfig','parse$org_scijava_io_location_Location$io_scif_Metadata$io_scif_config_SCIFIOConfig','parse$org_scijava_io_handle_DataHandle$io_scif_Metadata$io_scif_config_SCIFIOConfig','updateSource$org_scijava_io_location_Location']).isAssignableFrom$Class(c)) this.parserClass=c;
 else if (Clazz.getClass($I$(10),['castToTypedPlane$io_scif_Plane','createPlane$net_imglib2_Interval','createPlane$io_scif_ImageMetadata$net_imglib2_Interval','getCurrentLocation$','getDomains$','getHandle$','getImageCount$','getMetadata$','getOptimalTileHeight$I','getOptimalTileWidth$I','getPlaneCount$I','hasCompanionFiles$','isNormalized$','openPlane$I$J','openPlane$I$J$net_imglib2_Interval','openPlane$I$J$io_scif_Plane','openPlane$I$J$io_scif_Plane$net_imglib2_Interval','openPlane$I$J$io_scif_config_SCIFIOConfig','openPlane$I$J$net_imglib2_Interval$io_scif_config_SCIFIOConfig','openPlane$I$J$io_scif_Plane$io_scif_config_SCIFIOConfig','openPlane$I$J$io_scif_Plane$net_imglib2_Interval$io_scif_config_SCIFIOConfig','readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$io_scif_Plane','readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$I$io_scif_Plane','setMetadata$io_scif_Metadata','setNormalized$Z','setSource$org_scijava_io_location_Location','setSource$org_scijava_io_handle_DataHandle','setSource$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig','setSource$org_scijava_io_handle_DataHandle$io_scif_config_SCIFIOConfig']).isAssignableFrom$Class(c)) this.readerClass=c;
 else if (Clazz.getClass($I$(11),['canDoStacks$','getCodecOptions$','getColorModel$','getCompression$','getCompressionTypes$','getFramesPerSecond$','getHandle$','getMetadata$','getPixelTypes$S','getValidBits$','isInitialized$I$J','isSupportedCompression$S','isSupportedType$I$S','savePlane$I$J$io_scif_Plane','savePlane$I$J$io_scif_Plane$net_imglib2_Interval','setColorModel$java_awt_image_ColorModel','setDest$org_scijava_io_location_Location','setDest$org_scijava_io_handle_DataHandle','setDest$org_scijava_io_location_Location$I','setDest$org_scijava_io_handle_DataHandle$I','setDest$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig','setDest$org_scijava_io_handle_DataHandle$io_scif_config_SCIFIOConfig','setDest$org_scijava_io_location_Location$I$io_scif_config_SCIFIOConfig','setDest$org_scijava_io_handle_DataHandle$I$io_scif_config_SCIFIOConfig','setMetadata$io_scif_Metadata','writeSequential$']).isAssignableFrom$Class(c)) this.writerClass=c;
}
}, p$1);

Clazz.newMeth(C$, 'buildClassList', function () {
var classes=this.getClass$().getDeclaredClasses$();
var classList=Clazz.new_(1,{E:"Class"},$I$(12,1));
for (var c, $c = 0, $$c = classes; $c<$$c.length&&((c=($$c[$c])),1);$c++) {
p$1.check$Class$java_util_List.apply(this, [c, classList]);
}
return classList;
}, p$1);

Clazz.newMeth(C$, 'check$Class$java_util_List', function (newClass, classList) {
classList.add$TE(newClass);
for (var c, $c = 0, $$c = newClass.getDeclaredClasses$(); $c<$$c.length&&((c=($$c[$c])),1);$c++) p$1.check$Class$java_util_List.apply(this, [c, classList]);

}, p$1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:35 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
