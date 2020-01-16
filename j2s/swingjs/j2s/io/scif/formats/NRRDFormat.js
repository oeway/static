(function(){var P$=Clazz.newPackage("io.scif.formats"),I$=[[0,'net.imagej.axis.Axes','io.scif.util.FormatTools','org.scijava.io.location.Location','java.io.File','io.scif.formats.NRRDFormat','io.scif.config.SCIFIOConfig','io.scif.MetadataLevel']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "NRRDFormat", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.AbstractFormat');
C$.$classes$=[['Metadata',9],['Checker',9],['Parser',9],['Reader',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'makeSuffixArray$', function () {
return Clazz.array(String, -1, ["nrrd", "nhdr"]);
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.NRRDFormat',null,['org.scijava.plugin.Plugin']],['type="io.scif.Format.class" name="NRRD" ']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.NRRDFormat, "Metadata", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractMetadata');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lookForCompanion=true;
this.initializeHelper=false;
}, 1);

C$.$fields$=[['Z',['lookForCompanion','initializeHelper'],'L',['offset'],'S',['encoding'],'O',['dataFile','org.scijava.io.location.Location','helper','io.scif.Reader','pixelSizes','String[]']]]

Clazz.newMeth(C$, 'setHelper$io_scif_Reader', function (reader) {
this.helper=reader;
});

Clazz.newMeth(C$, 'getHelper$', function () {
return this.helper;
});

Clazz.newMeth(C$, 'getDataFile$', function () {
return this.dataFile;
});

Clazz.newMeth(C$, 'setDataFile$org_scijava_io_location_Location', function (dataFile) {
this.dataFile=dataFile;
});

Clazz.newMeth(C$, 'getEncoding$', function () {
return this.encoding;
});

Clazz.newMeth(C$, 'setEncoding$S', function (encoding) {
this.encoding=encoding;
});

Clazz.newMeth(C$, 'getOffset$', function () {
return this.offset;
});

Clazz.newMeth(C$, 'setOffset$J', function (offset) {
this.offset=offset;
});

Clazz.newMeth(C$, 'getPixelSizes$', function () {
return this.pixelSizes;
});

Clazz.newMeth(C$, 'setPixelSizes$SA', function (pixelSizes) {
this.pixelSizes=pixelSizes;
});

Clazz.newMeth(C$, 'isLookForCompanion$', function () {
return this.lookForCompanion;
});

Clazz.newMeth(C$, 'setLookForCompanion$Z', function (lookForCompanion) {
this.lookForCompanion=lookForCompanion;
});

Clazz.newMeth(C$, 'isInitializeHelper$', function () {
return this.initializeHelper;
});

Clazz.newMeth(C$, 'setInitializeHelper$Z', function (initializeHelper) {
this.initializeHelper=initializeHelper;
});

Clazz.newMeth(C$, 'populateImageMetadata$', function () {
var iMeta=this.get$I(0);
if (iMeta.getAxisLength$net_imagej_axis_AxisType($I$(1).CHANNEL) > 1) {
iMeta.setAxisTypes$net_imagej_axis_AxisTypeA([$I$(1).CHANNEL, $I$(1).X, $I$(1).Y]);
iMeta.setPlanarAxisCount$I(3);
}iMeta.setIndexed$Z(false);
iMeta.setFalseColor$Z(false);
iMeta.setMetadataComplete$Z(true);
});

Clazz.newMeth(C$, 'close$Z', function (fileOnly) {
C$.superclazz.prototype.close$Z.apply(this, [fileOnly]);
if (!fileOnly) {
this.dataFile=null;
this.encoding=null;
this.offset=0;
this.pixelSizes=null;
this.initializeHelper=false;
this.helper=null;
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NRRDFormat, "Checker", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractChecker');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['dataHandleService','org.scijava.io.handle.DataHandleService']]]

Clazz.newMeth(C$, 'isFormat$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig', function (loc, config) {
if (C$.superclazz.prototype.isFormat$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig.apply(this, [loc, config])) return true;
if (!config.checkerIsOpen$()) return false;
if (!(Clazz.instanceOf(loc, "org.scijava.io.location.BrowsableLocation"))) return false;
var bLoc=loc;
try {
var name=loc.getName$();
var header=bLoc.sibling$S(name + ".nhdr");
if (this.dataHandleService.exists$org_scijava_io_location_Location(header)) {
return true;
}if (name.contains$CharSequence(".")) {
name=name.substring$I$I(0, name.lastIndexOf$I("."));
}header=bLoc.sibling$S(name + ".nhdr");
return this.dataHandleService.exists$org_scijava_io_location_Location(header);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return false;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'isFormat$org_scijava_io_handle_DataHandle', function (stream) {
var blockLen="NRRD".length$();
if (!$I$(2).validStream$org_scijava_io_handle_DataHandle$I$Z(stream, blockLen, false)) return false;
return stream.readString$I(blockLen).startsWith$S("NRRD");
});
C$.$getAnn$ = function(){ return [
[['dataHandleService','org.scijava.io.handle.DataHandleService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NRRDFormat, "Parser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractParser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['$$formatService','io.scif.services.FormatService','dataHandleService','org.scijava.io.handle.DataHandleService']]]

Clazz.newMeth(C$, 'getImageUsedFiles$I$Z', function (imageIndex, noPixels) {
$I$(2).assertId$O$Z$I(this.getSource$(), true, 1);
if (noPixels) {
if (this.getMetadata$().getDataFile$() == null ) return null;
return Clazz.array($I$(3), -1, [this.getSource$().get$()]);
}if (this.getMetadata$().getDataFile$() == null ) return Clazz.array($I$(3), -1, [this.getSource$().get$()]);
return Clazz.array($I$(3), -1, [this.getSource$().get$(), this.getMetadata$().getDataFile$()]);
});

Clazz.newMeth(C$, ['parse$org_scijava_io_handle_DataHandle$io_scif_formats_NRRDFormat_Metadata$io_scif_config_SCIFIOConfig','parse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig'], function (stream, meta, config) {
var loc=this.asBrowsableLocation$org_scijava_io_handle_DataHandle(stream);
var id=loc.getName$();
var changedStream=false;
var newLocation=null;
if (!$I$(2).checkSuffix$S$S(id, "nhdr") && !$I$(2).checkSuffix$S$S(id, "nrrd") ) {
changedStream=true;
id += ".nhdr";
if (!this.dataHandleService.exists$org_scijava_io_location_Location(loc.sibling$S(id))) {
id=id.substring$I$I(0, id.lastIndexOf$I("."));
id=id.substring$I$I(0, id.lastIndexOf$I("."));
id += ".nhdr";
}newLocation=loc.sibling$S(id);
}if (changedStream) {
stream.close$();
return C$.superclazz.prototype.parse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig.apply(this, [this.dataHandleService.create$TD(newLocation), meta, config]);
}return C$.superclazz.prototype.parse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig.apply(this, [stream, meta, config]);
});

Clazz.newMeth(C$, ['typedParse$org_scijava_io_handle_DataHandle$io_scif_formats_NRRDFormat_Metadata$io_scif_config_SCIFIOConfig','typedParse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig'], function (stream, meta, config) {
var key;
var v;
var numDimensions=0;
meta.createImageMetadata$I(1);
var iMeta=meta.get$I(0);
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(1).X, 1);
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(1).Y, 1);
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(1).Z, 1);
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(1).CHANNEL, 1);
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(1).TIME, 1);
iMeta.setPlanarAxisCount$I(2);
var line=this.getSource$().readLine$();
while (line != null  && line.length$() > 0 ){
if (!line.startsWith$S("#") && !line.startsWith$S("NRRD") ) {
key=line.substring$I$I(0, line.indexOf$S(":")).trim$();
v=line.substring$I(line.indexOf$S(":") + 1).trim$();
meta.getTable$().put$TK$TV(key, v);
if (key.equals$O("type")) {
if (v.contains$CharSequence("char") || v.contains$CharSequence("8") ) {
iMeta.setPixelType$I(1);
} else if (v.contains$CharSequence("short") || v.contains$CharSequence("16") ) {
iMeta.setPixelType$I(3);
} else if (v.equals$O("int") || v.equals$O("signed int") || v.equals$O("int32") || v.equals$O("int32_t") || v.equals$O("uint") || v.equals$O("unsigned int") || v.equals$O("uint32") || v.equals$O("uint32_t")  ) {
iMeta.setPixelType$I(5);
} else if (v.equals$O("float")) iMeta.setPixelType$I(6);
 else if (v.equals$O("double")) iMeta.setPixelType$I(7);
 else throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Unsupported data type: " + v]);
} else if (key.equals$O("dimension")) {
numDimensions=Integer.parseInt$S(v);
} else if (key.equals$O("sizes")) {
var tokens=v.split$S(" ");
for (var i=0; i < numDimensions; i++) {
var size=Integer.parseInt$S(tokens[i]);
if (numDimensions >= 3 && i == 0  && size > 1  && size <= 16 ) {
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(1).CHANNEL, size);
iMeta.setPlanarAxisCount$I(3);
} else if (i == 0 || (iMeta.getPlanarAxisCount$() > 2 && i == 1 ) ) {
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(1).X, size);
} else if (i == 1 || (iMeta.getPlanarAxisCount$() > 2 && i == 2 ) ) {
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(1).Y, size);
} else if (i == 2 || (iMeta.getPlanarAxisCount$() > 2 && i == 3 ) ) {
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(1).Z, size);
} else if (i == 3 || (iMeta.getPlanarAxisCount$() > 2 && i == 4 ) ) {
iMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(1).TIME, size);
}}
} else if (key.equals$O("data file") || key.equals$O("datafile") ) {
meta.setDataFile$org_scijava_io_location_Location(this.asBrowsableLocation$org_scijava_io_handle_DataHandle(stream).sibling$S(v));
} else if (key.equals$O("encoding")) meta.setEncoding$S(v);
 else if (key.equals$O("endian")) {
iMeta.setLittleEndian$Z(v.equals$O("little"));
} else if (key.equals$O("spacings")) {
meta.setPixelSizes$SA(v.split$S(" "));
} else if (key.equals$O("byte skip")) {
meta.setOffset$J(Long.parseLong$S(v));
}}line=this.getSource$().readLine$();
if (line != null ) line=line.trim$();
}
if (meta.getDataFile$() == null ) meta.setOffset$J(stream.offset$());
 else {
var f=this.asBrowsableLocation$org_scijava_io_handle_DataHandle(this.getSource$());
var parent=f.parent$();
if (this.dataHandleService.exists$org_scijava_io_location_Location(f) && parent != null  ) {
var dataFile=meta.getDataFile$().getName$();
dataFile=dataFile.substring$I(dataFile.indexOf$S($I$(4).separator) + 1);
var dataLocation=f.sibling$S(dataFile);
meta.setDataFile$org_scijava_io_location_Location(dataLocation);
}meta.setInitializeHelper$Z(!meta.getEncoding$().equals$O("raw"));
}if (meta.isInitializeHelper$()) {
var nrrd=this.$$formatService.getFormatFromClass$Class(Clazz.getClass($I$(5)));
this.$$formatService.removeFormat$io_scif_Format(nrrd);
var helperFormat=this.$$formatService.getFormat$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(meta.getDataFile$(), config);
var p=helperFormat.createParser$();
var helper=helperFormat.createReader$();
helper.setMetadata$io_scif_Metadata(p.parse$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(meta.getDataFile$(), Clazz.new_($I$(6,1)).parserSetLevel$io_scif_MetadataLevel($I$(7).MINIMUM)));
helper.setSource$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(meta.getDataFile$(), config);
meta.setHelper$io_scif_Reader(helper);
this.$$formatService.addFormat$io_scif_Format(nrrd);
}});

Clazz.newMeth(C$, 'hasCompanionFiles$', function () {
return true;
});

Clazz.newMeth(C$, 'isSingleFile$org_scijava_io_location_Location', function (id) {
return $I$(2).checkSuffix$S$S(id.getName$(), "nrrd");
});

Clazz.newMeth(C$, 'fileGroupOption$org_scijava_io_location_Location', function (id) {
return 0;
});
C$.$getAnn$ = function(){ return [
[['$$formatService','io.scif.services.FormatService',null,['org.scijava.plugin.Parameter']],['']],
  [['dataHandleService','org.scijava.io.handle.DataHandleService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.NRRDFormat, "Reader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.ByteArrayReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['dataHandleService','org.scijava.io.handle.DataHandleService']]]

Clazz.newMeth(C$, 'createDomainArray$', function () {
return Clazz.array(String, -1, ["Unknown"]);
});

Clazz.newMeth(C$, 'hasCompanionFiles$', function () {
return true;
});

Clazz.newMeth(C$, 'isSingleFile$org_scijava_io_location_Location', function (id) {
return $I$(2).checkSuffix$S$S(id.getName$(), "nrrd");
});

Clazz.newMeth(C$, 'fileGroupOption$org_scijava_io_location_Location', function (id) {
return 0;
});

Clazz.newMeth(C$, 'getOptimalTileHeight$I', function (imageIndex) {
return this.getMetadata$().get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(1).Y);
});

Clazz.newMeth(C$, ['openPlane$I$J$io_scif_ByteArrayPlane$net_imglib2_Interval$io_scif_config_SCIFIOConfig','openPlane$I$J$TP$net_imglib2_Interval$io_scif_config_SCIFIOConfig'], function (imageIndex, planeIndex, plane, bounds, config) {
var buf=plane.getData$();
var meta=this.getMetadata$();
$I$(2).checkPlaneForReading$io_scif_Metadata$I$J$I$net_imglib2_Interval(meta, imageIndex, planeIndex, buf.length, bounds);
if (meta.getDataFile$() == null ) {
if (meta.getEncoding$().equals$O("raw")) {
var planeSize=$I$(2).getPlaneSize$io_scif_Reader$I(this, imageIndex);
this.getHandle$().seek$J(meta.getOffset$() + planeIndex * planeSize);
this.readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$TP(this.getHandle$(), imageIndex, bounds, plane);
return plane;
}throw Clazz.new_(Clazz.load('io.scif.UnsupportedCompressionException').c$$S,["Unsupported encoding: " + meta.getEncoding$()]);
} else if (meta.getEncoding$().equals$O("raw")) {
var s=this.dataHandleService.create$TD(meta.getDataFile$());
s.seek$J(meta.getOffset$() + planeIndex * $I$(2).getPlaneSize$io_scif_Reader$I(this, imageIndex));
this.readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$TP(s, imageIndex, bounds, plane);
s.close$();
return plane;
}if (meta.isInitializeHelper$() && meta.getDataFile$() != null   && meta.getHelper$() != null  ) {
meta.getHelper$().openPlane$I$J$io_scif_Plane$net_imglib2_Interval$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, plane, bounds, config);
return plane;
}throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Could not find a supporting Format"]);
});
C$.$getAnn$ = function(){ return [
[['dataHandleService','org.scijava.io.handle.DataHandleService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:40 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
