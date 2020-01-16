(function(){var P$=Clazz.newPackage("io.scif.services"),p$1={},I$=[[0,'ThreadLocal','java.util.TreeSet','io.scif.Reader','io.scif.Writer','io.scif.Metadata','io.scif.Parser','io.scif.Checker','io.scif.util.FormatTools','io.scif.DefaultWriter','io.scif.config.SCIFIOConfig','java.util.ArrayList','java.util.HashMap','java.util.WeakHashMap','io.scif.Format']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultFormatService", null, 'org.scijava.service.AbstractService', 'io.scif.services.FormatService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dirtyFormatCache=false;
this.initialized=false;
this.threadLock=((P$.DefaultFormatService$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DefaultFormatService$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('ThreadLocal'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]]

Clazz.newMeth(C$, 'initialValue$', function () {
return new Boolean(false);
});
})()
), Clazz.new_(1,{T:"Boolean"},$I$(1,1), [this, null],P$.DefaultFormatService$1));
}, 1);

C$.$fields$=[['Z',['dirtyFormatCache','initialized'],'O',['pluginService','org.scijava.plugin.PluginService','appService','org.scijava.app.AppService','threadService','org.scijava.thread.ThreadService','logService','org.scijava.log.LogService','formats','java.util.Set','formatMap','java.util.Map','+checkerMap','+parserMap','+readerMap','+writerMap','+metadataMap','+formatCache','threadLock','ThreadLocal']]]

Clazz.newMeth(C$, 'getSuffixes$', function () {
var ts=Clazz.new_(1,{E:"String"},$I$(2,1));
for (var f, $f = p$1.formats.apply(this, []).iterator$(); $f.hasNext$()&&((f=($f.next$())),1);) {
for (var s, $s = 0, $$s = f.getSuffixes$(); $s<$$s.length&&((s=($$s[$s])),1);$s++) {
ts.add$TE(s);
}
}
return ts.toArray$TTA(Clazz.array(String, [ts.size$()]));
});

Clazz.newMeth(C$, 'addFormat$io_scif_Format', function (format) {
if (p$1.formatMap.apply(this, []).get$O(format.getClass$()) != null ) return false;
{
if (p$1.formatMap.apply(this, []).get$O(format.getClass$()) == null ) {
p$1.formats.apply(this, []).add$TE(format);
p$1.formatMap.apply(this, []).put$TK$TV(format.getClass$(), format);
this.addComponents$io_scif_Format(format);
}}if (format.getContext$() == null ) format.setContext$org_scijava_Context(this.getContext$());
return true;
});

Clazz.newMeth(C$, 'removeFormat$io_scif_Format', function (format) {
this.removeComponents$io_scif_Format(format);
p$1.formatMap.apply(this, []).remove$O(format.getClass$());
this.dirtyFormatCache=true;
return p$1.formats.apply(this, []).remove$O(format);
});

Clazz.newMeth(C$, 'addComponents$io_scif_Format', function (format) {
p$1.checkerMap.apply(this, []).put$TK$TV(format.getCheckerClass$(), format);
p$1.parserMap.apply(this, []).put$TK$TV(format.getParserClass$(), format);
p$1.readerMap.apply(this, []).put$TK$TV(format.getReaderClass$(), format);
p$1.writerMap.apply(this, []).put$TK$TV(format.getWriterClass$(), format);
p$1.metadataMap.apply(this, []).put$TK$TV(format.getMetadataClass$(), format);
});

Clazz.newMeth(C$, 'removeComponents$io_scif_Format', function (format) {
p$1.checkerMap.apply(this, []).remove$O(format.getCheckerClass$());
p$1.parserMap.apply(this, []).remove$O(format.getParserClass$());
p$1.readerMap.apply(this, []).remove$O(format.getReaderClass$());
p$1.writerMap.apply(this, []).remove$O(format.getWriterClass$());
p$1.metadataMap.apply(this, []).remove$O(format.getMetadataClass$());
});

Clazz.newMeth(C$, 'getFormatFromClass$Class', function (formatClass) {
return p$1.formatMap.apply(this, []).get$O(formatClass);
});

Clazz.newMeth(C$, 'getFormatFromComponent$Class', function (componentClass) {
var fmt=null;
if (Clazz.getClass($I$(3),['castToTypedPlane$io_scif_Plane','createPlane$net_imglib2_Interval','createPlane$io_scif_ImageMetadata$net_imglib2_Interval','getCurrentLocation$','getDomains$','getHandle$','getImageCount$','getMetadata$','getOptimalTileHeight$I','getOptimalTileWidth$I','getPlaneCount$I','hasCompanionFiles$','isNormalized$','openPlane$I$J','openPlane$I$J$net_imglib2_Interval','openPlane$I$J$io_scif_Plane','openPlane$I$J$io_scif_Plane$net_imglib2_Interval','openPlane$I$J$io_scif_config_SCIFIOConfig','openPlane$I$J$net_imglib2_Interval$io_scif_config_SCIFIOConfig','openPlane$I$J$io_scif_Plane$io_scif_config_SCIFIOConfig','openPlane$I$J$io_scif_Plane$net_imglib2_Interval$io_scif_config_SCIFIOConfig','readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$io_scif_Plane','readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$I$io_scif_Plane','setMetadata$io_scif_Metadata','setNormalized$Z','setSource$org_scijava_io_location_Location','setSource$org_scijava_io_handle_DataHandle','setSource$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig','setSource$org_scijava_io_handle_DataHandle$io_scif_config_SCIFIOConfig']).isAssignableFrom$Class(componentClass)) {
fmt=this.getFormatFromReader$Class(componentClass);
} else if (Clazz.getClass($I$(4),['canDoStacks$','getCodecOptions$','getColorModel$','getCompression$','getCompressionTypes$','getFramesPerSecond$','getHandle$','getMetadata$','getPixelTypes$S','getValidBits$','isInitialized$I$J','isSupportedCompression$S','isSupportedType$I$S','savePlane$I$J$io_scif_Plane','savePlane$I$J$io_scif_Plane$net_imglib2_Interval','setColorModel$java_awt_image_ColorModel','setDest$org_scijava_io_location_Location','setDest$org_scijava_io_handle_DataHandle','setDest$org_scijava_io_location_Location$I','setDest$org_scijava_io_handle_DataHandle$I','setDest$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig','setDest$org_scijava_io_handle_DataHandle$io_scif_config_SCIFIOConfig','setDest$org_scijava_io_location_Location$I$io_scif_config_SCIFIOConfig','setDest$org_scijava_io_handle_DataHandle$I$io_scif_config_SCIFIOConfig','setMetadata$io_scif_Metadata','writeSequential$']).isAssignableFrom$Class(componentClass)) {
fmt=this.getFormatFromWriter$Class(componentClass);
} else if (Clazz.getClass($I$(5),['add$io_scif_ImageMetadata','createImageMetadata$I','get$I','getAll$','getDatasetName$','getDatasetSize$','getDestinationLocation$','getImageCount$','getSource$','getSourceLocation$','isFiltered$','populateImageMetadata$','setDatasetName$S','setDestinationLocation$org_scijava_io_location_Location','setFiltered$Z','setSource$org_scijava_io_handle_DataHandle','setSourceLocation$org_scijava_io_location_Location']).isAssignableFrom$Class(componentClass)) {
fmt=this.getFormatFromMetadata$Class(componentClass);
} else if (Clazz.getClass($I$(6),['getAdvancedImageUsedLocations$I$Z','getAdvancedUsedLocations$Z','getImageUsedFiles$I','getImageUsedFiles$I$Z','getMetadata$','getSource$','getSourceLocation$','getSupportedMetadataLevels$','getUsedFiles$','getUsedLocations$Z','parse$org_scijava_io_location_Location','parse$org_scijava_io_handle_DataHandle','parse$org_scijava_io_location_Location$io_scif_Metadata','parse$org_scijava_io_handle_DataHandle$io_scif_Metadata','parse$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig','parse$org_scijava_io_handle_DataHandle$io_scif_config_SCIFIOConfig','parse$org_scijava_io_location_Location$io_scif_Metadata$io_scif_config_SCIFIOConfig','parse$org_scijava_io_handle_DataHandle$io_scif_Metadata$io_scif_config_SCIFIOConfig','updateSource$org_scijava_io_location_Location']).isAssignableFrom$Class(componentClass)) {
fmt=this.getFormatFromParser$Class(componentClass);
} else if (Clazz.getClass($I$(7),['checkHeader$BA','isFormat$org_scijava_io_location_Location','isFormat$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig','isFormat$org_scijava_io_handle_DataHandle','suffixNecessary$','suffixSufficient$']).isAssignableFrom$Class(componentClass)) {
fmt=this.getFormatFromChecker$Class(componentClass);
}return fmt;
});

Clazz.newMeth(C$, 'getFormatFromReader$Class', function (readerClass) {
return p$1.readerMap.apply(this, []).get$O(readerClass);
});

Clazz.newMeth(C$, 'getFormatFromWriter$Class', function (writerClass) {
return p$1.writerMap.apply(this, []).get$O(writerClass);
});

Clazz.newMeth(C$, 'getWriterForLocation$org_scijava_io_location_Location', function (fileId) {
var matched=false;
var w=null;
for (var f, $f = p$1.formats.apply(this, []).iterator$(); $f.hasNext$()&&((f=($f.next$())),1);) {
if (f.ownsLocationType$org_scijava_io_location_Location(fileId)) {
w=f.createWriter$();
matched=true;
}if (!matched && $I$(8).checkSuffix$S$SA(fileId.getName$(), f.getSuffixes$()) ) {
if (!Clazz.getClass($I$(9)).isAssignableFrom$Class(f.getWriterClass$())) {
w=f.createWriter$();
matched=true;
}}}
if (w == null ) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["No compatible output format found for extension: " + fileId]);
}return w;
});

Clazz.newMeth(C$, 'getFormatFromChecker$Class', function (checkerClass) {
return p$1.checkerMap.apply(this, []).get$O(checkerClass);
});

Clazz.newMeth(C$, 'getFormatFromParser$Class', function (parserClass) {
return p$1.parserMap.apply(this, []).get$O(parserClass);
});

Clazz.newMeth(C$, 'getFormatFromMetadata$Class', function (metadataClass) {
return p$1.metadataMap.apply(this, []).get$O(metadataClass);
});

Clazz.newMeth(C$, 'getFormat$org_scijava_io_location_Location', function (id) {
return this.getFormat$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(id, Clazz.new_($I$(10,1)).checkerSetOpen$Z(false));
});

Clazz.newMeth(C$, 'getFormat$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig', function (id, config) {
if (Clazz.instanceOf(id, "org.scijava.io.location.RemoteLocation")) {
config.checkerSetOpen$Z(false);
}var format=p$1.formatCache.apply(this, []).get$O(id);
if (format == null ) {
var formatList=this.getFormatList$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig$Z(id, config, true);
if (formatList.isEmpty$()) return null;
format=formatList.get$I(0);
{
if (p$1.formatCache.apply(this, []).get$O(id) == null ) p$1.formatCache.apply(this, []).put$TK$TV(id, format);
}}return format;
});

Clazz.newMeth(C$, 'getFormatList$org_scijava_io_location_Location', function (id) {
return this.getFormatList$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig$Z(id, Clazz.new_($I$(10,1)).checkerSetOpen$Z(false), false);
});

Clazz.newMeth(C$, 'getFormatList$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig$Z', function (id, config, greedy) {
var formatList=Clazz.new_(1,{E:"io.scif.Format"},$I$(11,1));
for (var format, $format = p$1.formats.apply(this, []).iterator$(); $format.hasNext$()&&((format=($format.next$())),1);) {
if (format.isEnabled$() && format.createChecker$().isFormat$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(id, config) ) {
formatList.add$TE(format);
if (greedy) break;
}}
return formatList;
});

Clazz.newMeth(C$, 'getFormat$org_scijava_io_handle_DataHandle', function (source) {
return this.getFormat$org_scijava_io_handle_DataHandle$io_scif_config_SCIFIOConfig(source, Clazz.new_($I$(10,1)).checkerSetOpen$Z(true));
});

Clazz.newMeth(C$, 'getFormat$org_scijava_io_handle_DataHandle$io_scif_config_SCIFIOConfig', function (source, config) {
var formatList=this.getFormatList$org_scijava_io_handle_DataHandle$io_scif_config_SCIFIOConfig$Z(source, config, true);
return formatList.isEmpty$() ? null : formatList.get$I(0);
});

Clazz.newMeth(C$, 'getFormatList$org_scijava_io_handle_DataHandle', function (source) {
return this.getFormatList$org_scijava_io_handle_DataHandle$io_scif_config_SCIFIOConfig$Z(source, Clazz.new_($I$(10,1)).checkerSetOpen$Z(true), false);
});

Clazz.newMeth(C$, 'getFormatList$org_scijava_io_handle_DataHandle$io_scif_config_SCIFIOConfig$Z', function (source, config, greedy) {
var formatList=Clazz.new_(1,{E:"io.scif.Format"},$I$(11,1));
var found=false;
for (var format, $format = p$1.formats.apply(this, []).iterator$(); $format.hasNext$()&&((format=($format.next$())),1);) {
try {
if (!found && format.isEnabled$() && format.createChecker$().isFormat$org_scijava_io_handle_DataHandle(source)  ) {
found=greedy;
formatList.add$TE(format);
}source.seek$J(0);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$Throwable,[e]);
} else {
throw e;
}
}
}
return formatList;
});

Clazz.newMeth(C$, 'getAllFormats$', function () {
return p$1.formats.apply(this, []);
});

Clazz.newMeth(C$, 'getOutputFormats$', function () {
return p$1.writerMap.apply(this, []).values$();
});

Clazz.newMeth(C$, 'getVersion$', function () {
return this.appService.getApp$S("SCIFIO").getVersion$();
});

Clazz.newMeth(C$, 'initialize$', function () {
this.formats=Clazz.new_(1,{E:"io.scif.Format"},$I$(2,1));
this.formatMap=Clazz.new_(1,{K:"Class",V:"io.scif.Format"},$I$(12,1));
this.checkerMap=Clazz.new_(1,{K:"Class",V:"io.scif.Format"},$I$(12,1));
this.parserMap=Clazz.new_(1,{K:"Class",V:"io.scif.Format"},$I$(12,1));
this.readerMap=Clazz.new_(1,{K:"Class",V:"io.scif.Format"},$I$(12,1));
this.writerMap=Clazz.new_(1,{K:"Class",V:"io.scif.Format"},$I$(12,1));
this.metadataMap=Clazz.new_(1,{K:"Class",V:"io.scif.Format"},$I$(12,1));
this.formatCache=Clazz.new_(1,{K:"org.scijava.io.location.Location",V:"io.scif.Format"},$I$(13,1));
var f=this.pluginService.createInstancesOfType$Class(Clazz.getClass($I$(14),['createChecker$','createMetadata$','createParser$','createReader$','createWriter$','getCheckerClass$','getFormatName$','getMetadataClass$','getParserClass$','getReaderClass$','getSuffixes$','getWriterClass$','isEnabled$','ownsLocationType$org_scijava_io_location_Location','setEnabled$Z']));
for (var format, $format = f.iterator$(); $format.hasNext$()&&((format=($format.next$())),1);) {
this.addFormat$io_scif_Format(format);
}
this.initialized=true;
});

Clazz.newMeth(C$, 'formats', function () {
p$1.checkLock.apply(this, []);
return this.formats;
}, p$1);

Clazz.newMeth(C$, 'formatMap', function () {
p$1.checkLock.apply(this, []);
return this.formatMap;
}, p$1);

Clazz.newMeth(C$, 'checkerMap', function () {
p$1.checkLock.apply(this, []);
return this.checkerMap;
}, p$1);

Clazz.newMeth(C$, 'parserMap', function () {
p$1.checkLock.apply(this, []);
return this.parserMap;
}, p$1);

Clazz.newMeth(C$, 'readerMap', function () {
p$1.checkLock.apply(this, []);
return this.readerMap;
}, p$1);

Clazz.newMeth(C$, 'writerMap', function () {
p$1.checkLock.apply(this, []);
return this.writerMap;
}, p$1);

Clazz.newMeth(C$, 'metadataMap', function () {
p$1.checkLock.apply(this, []);
return this.metadataMap;
}, p$1);

Clazz.newMeth(C$, 'formatCache', function () {
p$1.checkLock.apply(this, []);
if (this.dirtyFormatCache) {
{
if (this.dirtyFormatCache) {
this.formatCache.clear$();
this.dirtyFormatCache=false;
}}}return this.formatCache;
}, p$1);

Clazz.newMeth(C$, 'checkLock', function () {
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'io.scif.services.DefaultFormatService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['pluginService','org.scijava.plugin.PluginService',null,['org.scijava.plugin.Parameter']],['']],
  [['appService','org.scijava.app.AppService',null,['org.scijava.plugin.Parameter']],['']],
  [['threadService','org.scijava.thread.ThreadService',null,['org.scijava.plugin.Parameter']],['']],
  [['logService','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:45 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
