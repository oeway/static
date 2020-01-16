(function(){var P$=Clazz.newPackage("io.scif.formats"),p$1={},p$2={},p$3={},I$=[[0,'net.imagej.axis.Axes','io.scif.formats.MinimalTIFFFormat','java.io.File','java.util.ArrayList',['io.scif.formats.MicromanagerFormat','.Position'],'io.scif.util.FormatTools','org.scijava.io.location.Location','java.util.Arrays','java.util.StringTokenizer','StringBuilder',['io.scif.formats.MicromanagerFormat','.Index'],['io.scif.formats.MicromanagerFormat','.Parser','.MicromanagerHandler'],'io.scif.Metadata',['io.scif.formats.MicromanagerFormat','.Metadata'],'java.util.HashMap','net.imagej.axis.CalibratedAxis','net.imagej.axis.DefaultLinearAxis']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MicromanagerFormat", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.AbstractFormat');
C$.$classes$=[['Metadata',9],['Checker',9],['Parser',9],['Reader',9],['MicromanagerTranslator',9],['Position',9],['Index',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'makeSuffixArray$', function () {
return Clazz.array(String, -1, ["tif", "tiff", "txt", "xml"]);
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.MicromanagerFormat',null,['org.scijava.plugin.Plugin']],['type="io.scif.Format.class" name="Micro-Manager" ']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.MicromanagerFormat, "Metadata", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractMetadata');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['positions','java.util.List']]]

Clazz.newMeth(C$, 'getPositions$', function () {
return this.positions;
});

Clazz.newMeth(C$, 'setPositions$java_util_List', function (positions) {
this.positions=positions;
});

Clazz.newMeth(C$, 'populateImageMetadata$', function () {
for (var i=0; i < this.getImageCount$(); i++) {
var ms=this.get$I(i);
ms.setAxisTypes$net_imagej_axis_AxisTypeA([$I$(1).X, $I$(1).Y, $I$(1).Z, $I$(1).CHANNEL, $I$(1).TIME]);
ms.setPlanarAxisCount$I(2);
ms.setLittleEndian$Z(false);
ms.setIndexed$Z(false);
ms.setFalseColor$Z(false);
ms.setMetadataComplete$Z(true);
}
});

Clazz.newMeth(C$, 'close$Z', function (fileOnly) {
C$.superclazz.prototype.close$Z.apply(this, [fileOnly]);
if (!fileOnly) {
this.positions=null;
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.MicromanagerFormat, "Checker", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractChecker');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['$$formatService','io.scif.services.FormatService','dataHandleService','org.scijava.io.handle.DataHandleService']]]

Clazz.newMeth(C$, 'isFormat$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig', function (location, config) {
if (!config.checkerIsOpen$()) return false;
try {
if (p$1.validMetadataFile$org_scijava_io_location_Location.apply(this, [location])) {
try {
var handle=this.dataHandleService.create$TD(location);
/*try*/ {
return p$1.checkMetadataHandle$org_scijava_io_handle_DataHandle.apply(this, [handle]);
}
}finally{/*res*/
try{handle&&handle.close$&&handle.close$()}catch(_){}}
}if (!(Clazz.instanceOf(location, "org.scijava.io.location.BrowsableLocation"))) return false;
try {
var handle=this.dataHandleService.create$TD(location);
/*try*/ {
return p$1.checkImageFile$org_scijava_io_location_BrowsableLocation$io_scif_config_SCIFIOConfig$org_scijava_io_handle_DataHandle.apply(this, [location, config, handle]);
}
}finally{/*res*/
try{handle&&handle.close$&&handle.close$()}catch(_){}}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.log$().error$O("Error when checking format: " + e);
return false;
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'checkImageFile$org_scijava_io_location_BrowsableLocation$io_scif_config_SCIFIOConfig$org_scijava_io_handle_DataHandle', function (location, config, handle) {
try {
var metaFile=location.sibling$S("metadata.txt");
var validMetaData=this.isFormat$org_scijava_io_handle_DataHandle(handle);
if (!validMetaData) return false;
var checker;
checker=this.$$formatService.getFormatFromClass$Class(Clazz.getClass($I$(2))).createChecker$();
var validTIFF=checker.isFormat$org_scijava_io_handle_DataHandle(handle);
return validTIFF && this.isFormat$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(metaFile, config) ;
} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.FormatException") || Clazz.exceptionOf(e,"java.io.IOException")){
this.log$().error$O$Throwable("Error when checking format: ", e);
return false;
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'isFormat$org_scijava_io_handle_DataHandle', function (handle) {
var location=handle.get$();
if (p$1.validMetadataFile$org_scijava_io_location_Location.apply(this, [location])) {
handle.seek$J(0);
return p$1.checkMetadataHandle$org_scijava_io_handle_DataHandle.apply(this, [handle]);
}return Clazz.instanceOf(location, "org.scijava.io.location.BrowsableLocation");
});

Clazz.newMeth(C$, 'validMetadataFile$org_scijava_io_location_Location', function (location) {
if (location == null ) return false;
var name=location.getName$();
return name.equals$O("metadata.txt") || name.endsWith$S($I$(3).separator + "metadata.txt") || name.equals$O("Acqusition.xml") || name.endsWith$S($I$(3).separator + "Acqusition.xml")  ;
}, p$1);

Clazz.newMeth(C$, 'checkMetadataHandle$org_scijava_io_handle_DataHandle', function (handle) {
if (handle == null  || !handle.exists$() ) return false;
var blockSize=1048576;
var length=handle.length$();
var data=handle.readString$I((Math.min(1048576, length)|0));
return length > 0 && (data.contains$CharSequence("Micro-Manager") || data.contains$CharSequence("micromanager") ) ;
}, p$1);
C$.$getAnn$ = function(){ return [
[['$$formatService','io.scif.services.FormatService',null,['org.scijava.plugin.Parameter']],['']],
  [['dataHandleService','org.scijava.io.handle.DataHandleService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.MicromanagerFormat, "Parser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractParser');
C$.$classes$=[['MicromanagerHandler',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['dataHandleService','org.scijava.io.handle.DataHandleService','translatorService','io.scif.services.TranslatorService','xmlService','io.scif.xml.XMLService']]]

Clazz.newMeth(C$, 'populateMetadata$SA$io_scif_formats_MicromanagerFormat_Metadata$io_scif_Metadata', function (jsonData, source, dest) {
source.createImageMetadata$I(jsonData.length);
var positions=Clazz.new_(1,{E:"io.scif.formats.MicromanagerFormat.Position"},$I$(4,1));
for (var pos=0; pos < jsonData.length; pos++) {
var p=Clazz.new_($I$(5,1));
positions.add$TE(p);
p$2.parsePosition$S$io_scif_formats_MicromanagerFormat_Metadata$I.apply(this, [jsonData[pos], source, pos]);
}
this.translatorService.translate$io_scif_Metadata$io_scif_Metadata$Z(source, dest, true);
});

Clazz.newMeth(C$, ['typedParse$org_scijava_io_handle_DataHandle$io_scif_formats_MicromanagerFormat_Metadata$io_scif_config_SCIFIOConfig','typedParse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig'], function (stream, meta, config) {
var positions=Clazz.new_(1,{E:"io.scif.formats.MicromanagerFormat.Position"},$I$(4,1));
meta.setPositions$java_util_List(positions);
this.log$().info$O("Reading metadata file");
var file=this.asBrowsableLocation$org_scijava_io_handle_DataHandle(stream);
var parentFile=file.parent$();
var metadataFile=file.sibling$S("metadata.txt");
if (metadataFile == null  || parentFile == null  ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["MicromanagerFormat: No companion metadata file found!"]);
}if (parentFile.getName$().contains$CharSequence("Pos_")) {
parentFile=parentFile.parent$();
var dirs=parentFile.children$();
for (var dir, $dir = dirs.iterator$(); $dir.hasNext$()&&((dir=($dir.next$())),1);) {
if (dir.getName$().contains$CharSequence("Pos_")) {
var pos=Clazz.new_($I$(5,1));
pos.metadataFile=dir.child$S("metadata.txt");
positions.add$TE(pos);
}}
} else {
var pos=Clazz.new_($I$(5,1));
pos.metadataFile=metadataFile;
positions.add$TE(pos);
}var imageCount=positions.size$();
meta.createImageMetadata$I(imageCount);
for (var i=0; i < imageCount; i++) {
p$2.parsePosition$io_scif_formats_MicromanagerFormat_Metadata$I.apply(this, [meta, i]);
}
});

Clazz.newMeth(C$, 'getImageUsedFiles$I$Z', function (imageIndex, noPixels) {
$I$(6).assertId$O$Z$I(this.getSource$(), true, 1);
var files=Clazz.new_(1,{E:"org.scijava.io.location.Location"},$I$(4,1));
for (var pos, $pos = this.getMetadata$().getPositions$().iterator$(); $pos.hasNext$()&&((pos=($pos.next$())),1);) {
files.add$TE(pos.metadataFile);
if (pos.xmlFile != null ) {
files.add$TE(pos.xmlFile);
}if (!noPixels) {
for (var tiff, $tiff = pos.tiffs.iterator$(); $tiff.hasNext$()&&((tiff=($tiff.next$())),1);) {
try {
if (this.dataHandleService.exists$org_scijava_io_location_Location(tiff)) files.add$TE(tiff);
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
this.log$().error$O("Could not check if location: " + tiff.getURI$().toString() + " encountered exception: " + exc );
} else {
throw exc;
}
}
}
}}
return files.toArray$TTA(Clazz.array($I$(7), [files.size$()]));
});

Clazz.newMeth(C$, 'isSingleFile$org_scijava_io_location_Location', function (id) {
return false;
});

Clazz.newMeth(C$, 'fileGroupOption$org_scijava_io_location_Location', function (id) {
return 0;
});

Clazz.newMeth(C$, 'hasCompanionFiles$', function () {
return true;
});

Clazz.newMeth(C$, 'parsePosition$io_scif_formats_MicromanagerFormat_Metadata$I', function (meta, posIndex) {
var pos=meta.getPositions$().get$I(posIndex);
try {
var handle=this.dataHandleService.create$TD(pos.metadataFile);
/*try*/ {
var len=handle.length$();
if (len > 2147483647) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["MetadataFile at: " + pos.metadataFile.getURI$() + " is too large to be parsed!" ]);
}var metaData=handle.readString$I((handle.length$()|0));
p$2.parsePosition$S$io_scif_formats_MicromanagerFormat_Metadata$I.apply(this, [metaData, meta, posIndex]);
p$2.buildTIFFList$io_scif_formats_MicromanagerFormat_Metadata$I.apply(this, [meta, posIndex]);
}
}finally{/*res*/
try{handle&&handle.close$&&handle.close$()}catch(_){}}
}, p$2);

Clazz.newMeth(C$, 'buildTIFFList$io_scif_formats_MicromanagerFormat_Metadata$I', function (meta, posIndex) {
try {
var p=meta.getPositions$().get$I(posIndex);
var ms=meta.get$I(posIndex);
var parent=p.metadataFile.parent$();
this.log$().info$O("Finding image file names");
p.tiffs=Clazz.new_(1,{E:"org.scijava.io.location.Location"},$I$(4,1));
p$2.buildTIFFList$io_scif_formats_MicromanagerFormat_Metadata$I$org_scijava_io_location_Location.apply(this, [meta, posIndex, p.baseTiff]);
if (p.tiffs.isEmpty$()) {
var uniqueZ=Clazz.new_(1,{E:"String"},$I$(4,1));
var uniqueC=Clazz.new_(1,{E:"String"},$I$(4,1));
var uniqueT=Clazz.new_(1,{E:"String"},$I$(4,1));
var fSet=parent.children$();
var files=fSet.toArray$TTA(Clazz.array($I$(7), [fSet.size$()]));
$I$(8).sort$OA(files);
for (var file, $file = 0, $$file = files; $file<$$file.length&&((file=($$file[$file])),1);$file++) {
var name=file.getName$();
if ($I$(6).checkSuffix$S$S(name, "tif") || $I$(6).checkSuffix$S$S(name, "tiff") ) {
var blocks=name.split$S("_");
if (!uniqueT.contains$O(blocks[1])) uniqueT.add$TE(blocks[1]);
if (!uniqueC.contains$O(blocks[2])) uniqueC.add$TE(blocks[2]);
if (!uniqueZ.contains$O(blocks[3])) uniqueZ.add$TE(blocks[3]);
p.tiffs.add$TE(file);
}}
ms.setAxisLength$net_imagej_axis_AxisType$J($I$(1).Z, uniqueZ.size$());
ms.setAxisLength$net_imagej_axis_AxisType$J($I$(1).CHANNEL, uniqueC.size$());
ms.setAxisLength$net_imagej_axis_AxisType$J($I$(1).TIME, uniqueT.size$());
if (p.tiffs.isEmpty$()) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Could not find TIFF files."]);
}}} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S$Throwable,["Encountered error when trying to find TIFF files.", e]);
} else {
throw e;
}
}
}, p$2);

Clazz.newMeth(C$, 'parsePosition$S$io_scif_formats_MicromanagerFormat_Metadata$I', function (jsonData, meta, posIndex) {
var p=meta.getPositions$().get$I(posIndex);
var ms=meta.get$I(posIndex);
var metadataFile=p.metadataFile;
this.log$().info$O("Populating metadata");
var stamps=Clazz.new_(1,{E:"Double"},$I$(4,1));
p.voltage=Clazz.new_(1,{E:"Double"},$I$(4,1));
var st=Clazz.new_($I$(9,1).c$$S$S,[jsonData, "\n"]);
var slice=Clazz.array(Integer.TYPE, [3]);
while (st.hasMoreTokens$()){
var token=st.nextToken$().trim$();
var open=token.contains$CharSequence("[");
var closed=token.contains$CharSequence("]");
if (open || (!open && !closed && !token.equals$O("{") && !token.startsWith$S("}")  ) ) {
var quote=token.indexOf$S("\"") + 1;
var key=token.substring$I$I(quote, token.indexOf$S$I("\"", quote));
var value=null;
if (open == closed ) {
value=token.substring$I(token.indexOf$S(":") + 1);
} else if (!closed) {
var valueBuffer=Clazz.new_($I$(10,1));
while (!closed){
token=st.nextToken$();
closed=token.contains$CharSequence("]");
valueBuffer.append$S(token);
}
value=valueBuffer.toString();
value=value.replaceAll$S$S("\n", "");
}if (value == null ) continue;
var startIndex=value.indexOf$S("[");
var endIndex=value.indexOf$S("]");
if (endIndex == -1) endIndex=value.length$();
value=value.substring$I$I(startIndex + 1, endIndex).trim$();
if (value.length$() == 0) {
continue;
}value=value.substring$I$I(0, value.length$() - 1);
value=value.replaceAll$S$S("\"", "");
if (value.endsWith$S(",")) value=value.substring$I$I(0, value.length$() - 1);
meta.getTable$().put$TK$TV(key, value);
if (key.equals$O("Channels")) {
ms.setAxisLength$net_imagej_axis_AxisType$J($I$(1).CHANNEL, Integer.parseInt$S(value));
} else if (key.equals$O("ChNames")) {
p.channels=value.split$S(",");
for (var q=0; q < p.channels.length; q++) {
p.channels[q]=p.channels[q].replaceAll$S$S("\"", "").trim$();
}
} else if (key.equals$O("Frames")) {
ms.setAxisLength$net_imagej_axis_AxisType$J($I$(1).TIME, Integer.parseInt$S(value));
} else if (key.equals$O("Slices")) {
ms.setAxisLength$net_imagej_axis_AxisType$J($I$(1).Z, Integer.parseInt$S(value));
} else if (key.equals$O("PixelSize_um")) {
p.pixelSize= new Double(value);
} else if (key.equals$O("z-step_um")) {
p.sliceThickness= new Double(value);
} else if (key.equals$O("Time")) {
p.time=value;
} else if (key.equals$O("Comment")) {
p.comment=value;
} else if (key.equals$O("FileName")) {
var file=metadataFile.sibling$S(value);
p.locationMap.put$TK$TV(Clazz.new_($I$(11,1).c$$IA,[slice]), file);
if (p.baseTiff == null ) {
p.baseTiff=file;
}} else if (key.equals$O("Width")) {
ms.setAxisLength$net_imagej_axis_AxisType$J($I$(1).X, Integer.parseInt$S(value));
} else if (key.equals$O("Height")) {
ms.setAxisLength$net_imagej_axis_AxisType$J($I$(1).Y, Integer.parseInt$S(value));
} else if (key.equals$O("IJType")) {
var type=Integer.parseInt$S(value);
switch (type) {
case 0:
ms.setPixelType$I(1);
break;
case 1:
ms.setPixelType$I(3);
break;
default:
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Unknown type: " + type]);
}
}}if (token.startsWith$S("\"FrameKey")) {
var dash=token.indexOf$S("-") + 1;
var nextDash=token.indexOf$S$I("-", dash);
slice[2]=Integer.parseInt$S(token.substring$I$I(dash, nextDash));
dash=nextDash + 1;
nextDash=token.indexOf$S$I("-", dash);
slice[1]=Integer.parseInt$S(token.substring$I$I(dash, nextDash));
dash=nextDash + 1;
slice[0]=Integer.parseInt$S(token.substring$I$I(dash, token.indexOf$S$I("\"", dash)));
token=st.nextToken$().trim$();
var key="";
var value="";
var valueArray=false;
var nestedCount=0;
while (!token.startsWith$S("}") || nestedCount > 0 ){
if (token.trim$().endsWith$S("{")) {
nestedCount++;
token=st.nextToken$().trim$();
continue;
} else if (token.trim$().startsWith$S("}")) {
nestedCount--;
token=st.nextToken$().trim$();
continue;
}if (valueArray) {
if (token.trim$().equals$O("],")) {
valueArray=false;
} else {
value += token.trim$().replaceAll$S$S("\"", "");
token=st.nextToken$().trim$();
continue;
}} else {
var colon=token.indexOf$S(":");
key=token.substring$I$I(1, colon).trim$();
value=token.substring$I$I(colon + 1, token.length$() - 1).trim$();
key=key.replaceAll$S$S("\"", "");
value=value.replaceAll$S$S("\"", "");
if (token.trim$().endsWith$S("[")) {
valueArray=true;
token=st.nextToken$().trim$();
continue;
}}meta.getTable$().put$TK$TV(key, value);
if (key.equals$O("Exposure-ms")) {
var t=Double.parseDouble$S(value);
p.exposureTime= new Double(t / 1000);
} else if (key.equals$O("ElapsedTime-ms")) {
var t=Double.parseDouble$S(value);
stamps.add$TE( new Double(t / 1000));
} else if (key.equals$O("Core-Camera")) p.cameraRef=value;
 else if (key.equals$O(p.cameraRef + "-Binning")) {
if (value.contains$CharSequence("x")) p.binning=value;
 else p.binning=value + "x" + value ;
} else if (key.equals$O(p.cameraRef + "-CameraID")) p.detectorID=value;
 else if (key.equals$O(p.cameraRef + "-CameraName")) {
p.detectorModel=value;
} else if (key.equals$O(p.cameraRef + "-Gain")) {
p.gain=(Double.parseDouble$S(value)|0);
} else if (key.equals$O(p.cameraRef + "-Name")) {
p.detectorManufacturer=value;
} else if (key.equals$O(p.cameraRef + "-Temperature")) {
p.temperature=Double.parseDouble$S(value);
} else if (key.equals$O(p.cameraRef + "-CCDMode")) {
p.cameraMode=value;
} else if (key.startsWith$S("DAC-") && key.endsWith$S("-Volts") ) {
p.voltage.add$TE( new Double(value));
} else if (key.equals$O("FileName")) {
var file=metadataFile.sibling$S(value);
p.locationMap.put$TK$TV(Clazz.new_($I$(11,1).c$$IA,[slice]), file);
if (p.baseTiff == null ) {
p.baseTiff=file;
}}token=st.nextToken$().trim$();
}
}}
p.timestamps=stamps.toArray$TTA(Clazz.array(Double, [stamps.size$()]));
$I$(8).sort$OA(p.timestamps);
p.xmlFile=p.metadataFile.sibling$S("Acqusition.xml");
if (this.dataHandleService.exists$org_scijava_io_location_Location(p.xmlFile)) {
p$2.parseXMLFile$io_scif_formats_MicromanagerFormat_Metadata$I.apply(this, [meta, posIndex]);
}}, p$2);

Clazz.newMeth(C$, 'buildTIFFList$io_scif_formats_MicromanagerFormat_Metadata$I$org_scijava_io_location_Location', function (meta, posIndex, baseTiff) {
this.log$().info$O("Building list of TIFFs");
var p=meta.getPositions$().get$I(posIndex);
var blocks=baseTiff.getName$().split$S("_");
var filename=Clazz.new_($I$(10,1));
for (var t=0; t < meta.get$I(posIndex).getAxisLength$net_imagej_axis_AxisType($I$(1).TIME); t++) {
for (var c=0; c < meta.get$I(posIndex).getAxisLength$net_imagej_axis_AxisType($I$(1).CHANNEL); c++) {
for (var z=0; z < meta.get$I(posIndex).getAxisLength$net_imagej_axis_AxisType($I$(1).Z); z++) {
filename.append$S(blocks[0]);
filename.append$S("_");
var zeros=blocks[1].length$() - String.valueOf$I(t).length$();
for (var q=0; q < zeros; q++) {
filename.append$S("0");
}
filename.append$I(t);
filename.append$S("_");
var channel=p.channels[c];
if (channel.contains$CharSequence("-")) {
channel=channel.substring$I$I(0, channel.indexOf$S("-"));
}filename.append$S(channel);
filename.append$S("_");
zeros=blocks[3].length$() - String.valueOf$I(z).length$() - 4 ;
for (var q=0; q < zeros; q++) {
filename.append$S("0");
}
filename.append$I(z);
filename.append$S(".tif");
p.tiffs.add$TE(p.metadataFile.sibling$S(filename.toString()));
filename.delete$I$I(0, filename.length$());
}
}
}
}, p$2);

Clazz.newMeth(C$, 'parseXMLFile$io_scif_formats_MicromanagerFormat_Metadata$I', function (meta, imageIndex) {
var p=meta.getPositions$().get$I(imageIndex);
try {
var handle=this.dataHandleService.create$TD(p.xmlFile);
/*try*/ {
var len=handle.length$();
if (len > 2147483647) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["MetadataFile at: " + p.xmlFile.getURI$() + " is too large to be parsed!" ]);
}var xmlData=handle.readString$I((handle.length$()|0));
xmlData=this.xmlService.sanitizeXML$S(xmlData);
var handler=Clazz.new_($I$(12,1), [this, null]);
this.xmlService.parseXML$S$org_xml_sax_helpers_DefaultHandler(xmlData, handler);
}
}finally{/*res*/
try{handle&&handle.close$&&handle.close$()}catch(_){}}
}, p$2);
C$.$getAnn$ = function(){ return [
[['dataHandleService','org.scijava.io.handle.DataHandleService',null,['org.scijava.plugin.Parameter']],['']],
  [['translatorService','io.scif.services.TranslatorService',null,['org.scijava.plugin.Parameter']],['']],
  [['xmlService','io.scif.xml.XMLService',null,['org.scijava.plugin.Parameter']],['']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.MicromanagerFormat.Parser, "MicromanagerHandler", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'io.scif.xml.BaseHandler');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$org_scijava_log_LogService.apply(this,[this.b$['io.scif.AbstractSCIFIOPlugin'].log$.apply(this.b$['io.scif.AbstractSCIFIOPlugin'], [])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'startElement$S$S$S$org_xml_sax_Attributes', function (uri, localName, qName, attributes) {
if (qName.equals$O("entry")) {
var key=attributes.getValue$S("key");
var value=attributes.getValue$S("value");
this.b$['io.scif.AbstractParser'].getMetadata$.apply(this.b$['io.scif.AbstractParser'], []).getTable$().put$TK$TV(key, value);
}});
})()

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.MicromanagerFormat, "Reader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.ByteArrayReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['$$formatService','io.scif.services.FormatService','dataHandleService','org.scijava.io.handle.DataHandleService','tiffReader','io.scif.formats.MinimalTIFFFormat.Reader']]]

Clazz.newMeth(C$, 'createDomainArray$', function () {
return Clazz.array(String, -1, ["Light Microscopy"]);
});

Clazz.newMeth(C$, ['setMetadata$io_scif_formats_MicromanagerFormat_Metadata','setMetadata$TM'], function (meta) {
this.tiffReader=null;
C$.superclazz.prototype.setMetadata$TM.apply(this, [meta]);
});

Clazz.newMeth(C$, ['openPlane$I$J$io_scif_ByteArrayPlane$net_imglib2_Interval$io_scif_config_SCIFIOConfig','openPlane$I$J$TP$net_imglib2_Interval$io_scif_config_SCIFIOConfig'], function (imageIndex, planeIndex, plane, bounds, config) {
if (this.tiffReader == null ) {
this.tiffReader=this.$$formatService.getFormatFromClass$Class(Clazz.getClass($I$(2))).createReader$();
}var meta=this.getMetadata$();
var buf=plane.getBytes$();
$I$(6).checkPlaneForReading$io_scif_Metadata$I$J$I$net_imglib2_Interval(meta, imageIndex, planeIndex, buf.length, bounds);
if (p$3.setupReader$I.apply(this, [imageIndex])) {
return this.tiffReader.openPlane$I$J$TP$net_imglib2_Interval(imageIndex, 0, plane, bounds);
}return plane;
});

Clazz.newMeth(C$, 'close$Z', function (fileOnly) {
C$.superclazz.prototype.close$Z.apply(this, [fileOnly]);
if (this.tiffReader != null ) this.tiffReader.close$Z(fileOnly);
});

Clazz.newMeth(C$, 'getOptimalTileWidth$I', function (imageIndex) {
if (this.tiffReader == null  || this.tiffReader.getCurrentLocation$() == null  ) {
p$3.setupReader$I.apply(this, [imageIndex]);
}return this.tiffReader.getOptimalTileWidth$I(imageIndex);
});

Clazz.newMeth(C$, 'getOptimalTileHeight$I', function (imageIndex) {
if (this.tiffReader == null  || this.tiffReader.getCurrentLocation$() == null  ) {
p$3.setupReader$I.apply(this, [imageIndex]);
}return this.tiffReader.getOptimalTileHeight$I(imageIndex);
});

Clazz.newMeth(C$, 'hasCompanionFiles$', function () {
return true;
});

Clazz.newMeth(C$, 'setupReader$I', function (imageIndex) {
try {
var file=this.getMetadata$().getPositions$().get$I(imageIndex).getLocation$io_scif_formats_MicromanagerFormat_Metadata$I$J(this.getMetadata$(), imageIndex, 0);
if (file != null  && this.dataHandleService.supports$TDT(file)  && this.dataHandleService.exists$org_scijava_io_location_Location(file) ) {
if (this.tiffReader == null ) {
this.tiffReader=this.$$formatService.getFormatFromClass$Class(Clazz.getClass($I$(2))).createReader$();
}this.tiffReader.setSource$org_scijava_io_location_Location(file);
return true;
}this.log$().warn$O("File for image #" + imageIndex + " (" + file + ") is missing or cannot be opened." );
} catch (e) {
if (Clazz.exceptionOf(e,"Exception")){
this.log$().debug$O$Throwable("", e);
} else {
throw e;
}
}
return false;
}, p$3);
C$.$getAnn$ = function(){ return [
[['$$formatService','io.scif.services.FormatService',null,['org.scijava.plugin.Parameter']],['']],
  [['dataHandleService','org.scijava.io.handle.DataHandleService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.MicromanagerFormat, "MicromanagerTranslator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.DefaultTranslator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'source$', function () {
return Clazz.getClass($I$(13),['add$io_scif_ImageMetadata','createImageMetadata$I','get$I','getAll$','getDatasetName$','getDatasetSize$','getDestinationLocation$','getImageCount$','getSource$','getSourceLocation$','isFiltered$','populateImageMetadata$','setDatasetName$S','setDestinationLocation$org_scijava_io_location_Location','setFiltered$Z','setSource$org_scijava_io_handle_DataHandle','setSourceLocation$org_scijava_io_location_Location']);
});

Clazz.newMeth(C$, 'dest$', function () {
return Clazz.getClass($I$(14));
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.MicromanagerFormat.MicromanagerTranslator',null,['org.scijava.plugin.Plugin']],['type="io.scif.Translator.class" priority="-100.0" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.MicromanagerFormat, "Position", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.locationMap=Clazz.new_(1,{K:"io.scif.formats.MicromanagerFormat.Index",V:"org.scijava.io.location.Location"},$I$(15,1));
}, 1);

C$.$fields$=[['D',['temperature'],'I',['gain'],'S',['comment','time','binning','detectorID','detectorModel','detectorManufacturer','cameraRef','cameraMode'],'O',['baseTiff','org.scijava.io.location.Location','tiffs','java.util.List','locationMap','java.util.Map','metadataFile','org.scijava.io.location.BrowsableLocation','+xmlFile','channels','String[]','exposureTime','Double','+sliceThickness','+pixelSize','timestamps','Double[]','voltage','java.util.List']]]

Clazz.newMeth(C$, 'getLocation$io_scif_formats_MicromanagerFormat_Metadata$I$J', function (meta, imageIndex, planeIndex) {
var zct=$I$(6).rasterToPosition$I$J$io_scif_Metadata$java_util_List(imageIndex, planeIndex, meta, $I$(11).expectedAxes);
for (var key, $key = this.locationMap.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
if (key.z == zct[0] && key.c == zct[1]  && key.t == zct[2] ) {
var file=this.locationMap.get$O(key);
if (this.tiffs != null ) {
for (var tiff, $tiff = this.tiffs.iterator$(); $tiff.hasNext$()&&((tiff=($tiff.next$())),1);) {
if (tiff.getName$().equals$O(file.getName$())) {
return tiff;
}}
}}}
return this.locationMap.size$() == 0 ? this.tiffs.get$I((planeIndex|0)) : null;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.MicromanagerFormat, "Index", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.expectedAxes=$I$(8).asList$TTA(Clazz.array($I$(16), -1, [Clazz.new_($I$(17,1).c$$net_imagej_axis_AxisType,[$I$(1).Z]), Clazz.new_($I$(17,1).c$$net_imagej_axis_AxisType,[$I$(1).CHANNEL]), Clazz.new_($I$(17,1).c$$net_imagej_axis_AxisType,[$I$(1).TIME])]));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['z','c','t']]
,['O',['expectedAxes','java.util.List']]]

Clazz.newMeth(C$, 'c$$IA', function (zct) {
;C$.$init$.apply(this);
this.z=zct[0];
this.c=zct[1];
this.t=zct[2];
}, 1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:40 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
