(function(){var P$=Clazz.newPackage("io.scif.formats"),p$1={},p$2={},p$3={},I$=[[0,'java.util.HashMap','net.imagej.axis.CalibratedAxis','net.imagej.axis.Axes','io.scif.img.axes.SCIFIOAxes','io.scif.util.FormatTools','io.scif.common.DateTools',['io.scif.formats.ICSFormat','.ICSUtils'],'java.util.StringTokenizer','StringBuilder','java.util.zip.GZIPInputStream','org.scijava.io.handle.DataHandleInputStream','org.scijava.io.location.BytesLocation','io.scif.util.SCIFIOMetadataTools','java.io.ByteArrayOutputStream','java.util.Arrays','io.scif.Metadata',['io.scif.formats.ICSFormat','.Metadata']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ICSFormat", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.AbstractFormat');
C$.$classes$=[['Metadata',9],['Parser',9],['Reader',9],['Writer',9],['ICSUtils',9],['ICSTranslator',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'makeSuffixArray$', function () {
return Clazz.array(String, -1, ["ics", "ids"]);
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.ICSFormat',null,['org.scijava.plugin.Plugin']],['type="io.scif.Format.class" name="Image Cytometry Standard" ']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.ICSFormat, "Metadata", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractMetadata');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.versionTwo=false;
this.offset=-1;
this.hasInstrumentData=false;
this.icsId="";
this.idsId="";
}, 1);

C$.$fields$=[['Z',['versionTwo','hasInstrumentData','storedRGB'],'L',['offset'],'S',['icsId','idsId'],'O',['keyValPairs','java.util.Map','icsLocation','org.scijava.io.location.Location','+idsLocation']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.keyValPairs=Clazz.new_(1,{K:"String",V:"String"},$I$(1,1));
}, 1);

Clazz.newMeth(C$, 'populateImageMetadata$', function () {
this.createImageMetadata$I(1);
var imageMeta=this.get$I(0);
var axesSizes=this.getAxesSizes$();
var axes=this.getAxes$();
imageMeta.setAxes$net_imagej_axis_CalibratedAxisA$JA(Clazz.array($I$(2), [0]), Clazz.array(Long.TYPE, [0]));
var xAxis=$I$(3).X;
var yAxis=$I$(3).Y;
var zAxis=$I$(3).Z;
var pixelSizes=this.getPixelSizes$();
if (pixelSizes == null ) pixelSizes=Clazz.array(Double, -1, [new Double(1.0), new Double(1.0), new Double(1.0), new Double(1.0)]);
var paramLabels=this.getParamLabels$();
var lifetime=this.getLifetime$();
var label=this.getLabels$();
if (p$1.noMicroTime$SA.apply(this, [paramLabels]) && lifetime && label != null   ) {
if (label.equalsIgnoreCase$S("t x y")) {
xAxis=$I$(4).LIFETIME;
yAxis=$I$(3).X;
zAxis=$I$(3).Y;
} else if (label.equalsIgnoreCase$S("x y t")) {
zAxis=$I$(4).LIFETIME;
} else {
this.log$().debug$O("Lifetime data, unexpected 'history labels' " + label);
}}var bitsPerPixel=0;
var units=this.getUnits$();
for (var n=0; n < axes.length; n++) {
var axis=axes[n].toLowerCase$();
if (axis.equals$O("x")) {
imageMeta.addAxis$net_imagej_axis_AxisType$J(xAxis, (axesSizes[n]|0));
$I$(5).calibrate$net_imagej_axis_CalibratedAxis$D$D$S(imageMeta.getAxis$net_imagej_axis_AxisType(xAxis), (pixelSizes[n]).valueOf(), 0, units == null  ? "um" : units[n]);
} else if (axis.equals$O("y")) {
imageMeta.addAxis$net_imagej_axis_AxisType$J(yAxis, (axesSizes[n]|0));
$I$(5).calibrate$net_imagej_axis_CalibratedAxis$D$D$S(imageMeta.getAxis$net_imagej_axis_AxisType(yAxis), (pixelSizes[n]).valueOf(), 0, units == null  ? "um" : units[n]);
} else if (axis.equals$O("z") && axesSizes[n] > 1  ) {
imageMeta.addAxis$net_imagej_axis_AxisType$J(zAxis, (axesSizes[n]|0));
$I$(5).calibrate$net_imagej_axis_CalibratedAxis$D$D$S(imageMeta.getAxis$net_imagej_axis_AxisType(zAxis), (pixelSizes[n]).valueOf(), 0, units == null  ? "um" : units[n]);
} else if (axis.equals$O("t") && axesSizes[n] > 1  ) {
var tIndex=imageMeta.getAxisIndex$net_imagej_axis_AxisType($I$(3).TIME);
if (tIndex == -1) {
imageMeta.addAxis$net_imagej_axis_AxisType$J($I$(3).TIME, (axesSizes[n]|0));
} else {
var timeLength=imageMeta.getAxisLength$net_imagej_axis_AxisType($I$(3).TIME) * (axesSizes[n]|0);
imageMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(3).TIME, timeLength);
}imageMeta.getAxis$net_imagej_axis_AxisType($I$(3).TIME).setUnit$S(units == null  ? "seconds" : units[n]);
} else if (axis.equals$O("bits")) {
bitsPerPixel=(axesSizes[n]|0);
while (bitsPerPixel % 8 != 0)bitsPerPixel++;

if (bitsPerPixel == 24 || bitsPerPixel == 48 ) bitsPerPixel=(bitsPerPixel/(3)|0);
} else {
if (imageMeta.getAxisIndex$net_imagej_axis_AxisType($I$(3).X) == -1) {
this.setStoredRGB$Z(true);
}var type=null;
if (axis.startsWith$S("c")) {
type=$I$(3).CHANNEL;
} else if (axis.startsWith$S("p")) {
type=$I$(4).PHASE;
} else if (axis.startsWith$S("f")) {
type=$I$(4).FREQUENCY;
} else {
type=$I$(3).unknown$();
}var newAxis=$I$(5).createAxis$net_imagej_axis_AxisType(type);
if (units == null  || n >= units.length ) {
newAxis.setUnit$S("unknown");
} else {
newAxis.setUnit$S(units[n]);
}imageMeta.addAxis$net_imagej_axis_CalibratedAxis$J(newAxis, (axesSizes[n]|0));
}if (paramLabels[n] != null  && paramLabels[n].equals$O("micro-time") ) {
imageMeta.setAxisType$I$net_imagej_axis_AxisType(imageMeta.getAxes$().size$() - 1, $I$(4).LIFETIME);
}}
if (this.getBitsPerPixel$() != null ) bitsPerPixel=(this.getBitsPerPixel$()).valueOf();
imageMeta.setBitsPerPixel$I(bitsPerPixel);
if (imageMeta.isMultichannel$() && this.getEMWaves$() != null   && this.getEMWaves$().length == imageMeta.getAxisLength$net_imagej_axis_AxisType($I$(3).CHANNEL) ) {
imageMeta.setAxisLength$net_imagej_axis_AxisType$J($I$(3).CHANNEL, 1);
this.setStoredRGB$Z(true);
}imageMeta.setIndexed$Z(false);
imageMeta.setFalseColor$Z(false);
imageMeta.setMetadataComplete$Z(true);
imageMeta.setLittleEndian$Z(true);
var byteOrder=this.getByteOrder$();
var rFormat=this.getRepFormat$();
if (byteOrder != null ) {
var firstByte=byteOrder.split$S(" ")[0];
var first=Integer.parseInt$S(firstByte);
var little=rFormat.equals$O("real") ? first == 1 : first != 1;
imageMeta.setLittleEndian$Z(little);
}var bytes=(bitsPerPixel/8|0);
if (bitsPerPixel < 32) imageMeta.setLittleEndian$Z(!this.get$I(0).isLittleEndian$());
var floatingPt=rFormat.equals$O("real");
var signed=this.isSigned$();
try {
imageMeta.setPixelType$I($I$(5).pixelTypeFromBytes$I$Z$Z(bytes, signed, floatingPt));
} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.FormatException")){
this.log$().error$O$Throwable("Could not get pixel type from bytes: " + bytes, e);
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'noMicroTime$SA', function (labels) {
for (var s, $s = 0, $$s = labels; $s<$$s.length&&((s=($$s[$s])),1);$s++) {
if (s != null  && s.equals$O("micro-time") ) {
return false;
}}
return true;
}, p$1);

Clazz.newMeth(C$, 'close$Z', function (fileOnly) {
C$.superclazz.prototype.close$Z.apply(this, [fileOnly]);
if (!fileOnly) this.keyValPairs=Clazz.new_(1,{K:"String",V:"String"},$I$(1,1));
});

Clazz.newMeth(C$, 'storedRGB$', function () {
return this.storedRGB;
});

Clazz.newMeth(C$, 'setStoredRGB$Z', function (rgb) {
this.storedRGB=rgb;
});

Clazz.newMeth(C$, 'get$S', function (key) {
return this.keyValPairs.get$O(key);
});

Clazz.newMeth(C$, 'setIcsLocation$org_scijava_io_location_Location', function (icsLocation) {
this.icsLocation=icsLocation;
});

Clazz.newMeth(C$, 'setIdsLocation$org_scijava_io_location_Location', function (idsLocation) {
this.idsLocation=idsLocation;
});

Clazz.newMeth(C$, 'getIcsLocation$', function () {
return this.icsLocation;
});

Clazz.newMeth(C$, 'getIdsLocation$', function () {
return this.idsLocation;
});

Clazz.newMeth(C$, 'hasInstrumentData$', function () {
return this.hasInstrumentData;
});

Clazz.newMeth(C$, 'setHasInstrumentData$Z', function (hasInstrumentData) {
this.hasInstrumentData=hasInstrumentData;
});

Clazz.newMeth(C$, 'isVersionTwo$', function () {
return this.versionTwo;
});

Clazz.newMeth(C$, 'setVersionTwo$Z', function (versionTwo) {
this.versionTwo=versionTwo;
});

Clazz.newMeth(C$, 'setKeyValPairs$java_util_Map', function (keyValPairs) {
this.keyValPairs=keyValPairs;
});

Clazz.newMeth(C$, 'getKeyValPairs$', function () {
return this.keyValPairs;
});

Clazz.newMeth(C$, 'put$S$S', function (key, value) {
System.out.println$S("ICSFormat " + key + " = " + value );
if (value != null ) this.keyValPairs.put$TK$TV(key, value);
});

Clazz.newMeth(C$, 'putDate$S', function (value) {
this.put$S$S("history date", value);
});

Clazz.newMeth(C$, 'putDescription$S', function (value) {
this.put$S$S("history other text", value);
});

Clazz.newMeth(C$, 'putMicroscopeModel$S', function (value) {
this.put$S$S("history microscope", value);
});

Clazz.newMeth(C$, 'putMicroscopeManufacturer$S', function (value) {
this.put$S$S("history manufacturer", value);
});

Clazz.newMeth(C$, 'putExperimentType$S', function (value) {
this.put$S$S("history type", value);
});

Clazz.newMeth(C$, 'putLifetime$Z', function (lifetime) {
if (lifetime) this.put$S$S("history type", "time resolved");
});

Clazz.newMeth(C$, 'putPixelSizes$DoubleA', function (pixelSizes) {
this.put$S$S("parameter scale", p$1.merge$TTA.apply(this, [pixelSizes]));
});

Clazz.newMeth(C$, 'putUnits$SA', function (units) {
this.put$S$S("parameter units", p$1.merge$TTA.apply(this, [units]));
});

Clazz.newMeth(C$, 'putAxes$SA', function (axes) {
this.put$S$S("layout order", p$1.merge$TTA.apply(this, [axes]));
});

Clazz.newMeth(C$, 'putAxesSizes$DA', function (axesSizes) {
this.put$S$S("layout sizes", p$1.mergePrimitiveDoubles$DA.apply(this, [axesSizes]));
});

Clazz.newMeth(C$, 'putPhysicalPixelSizes$DA', function (physSizes) {
this.put$S$S("history extents", p$1.mergePrimitiveDoubles$DA.apply(this, [physSizes]));
});

Clazz.newMeth(C$, 'putTimestamps$DoubleA', function (timeStamp) {
this.put$S$S("parameter t", p$1.merge$TTA.apply(this, [timeStamp]));
});

Clazz.newMeth(C$, 'putChannelNames$java_util_Map', function (cNames) {
this.put$S$S("parameter ch", p$1.merge$java_util_Collection.apply(this, [cNames.values$()]));
});

Clazz.newMeth(C$, 'putPinholes$java_util_Map', function (pins) {
this.put$S$S("sensor s_params pinholeradius", p$1.merge$java_util_Collection.apply(this, [pins.values$()]));
});

Clazz.newMeth(C$, 'putEMWaves$IntegerA', function (emWaves) {
this.put$S$S("sensor s_params lambdaem", p$1.merge$TTA.apply(this, [emWaves]));
});

Clazz.newMeth(C$, 'putEMSingleton$IntegerA', function (em) {
this.put$S$S("history cube emm nm", p$1.merge$TTA.apply(this, [em]));
});

Clazz.newMeth(C$, 'putEXWaves$IntegerA', function (exWaves) {
this.put$S$S("sensor s_params LambdaEx", p$1.merge$TTA.apply(this, [exWaves]));
});

Clazz.newMeth(C$, 'putEXSingleton$IntegerA', function (ex) {
this.put$S$S("history cube exc nm", p$1.merge$TTA.apply(this, [ex]));
});

Clazz.newMeth(C$, 'putWavelengths$java_util_Map', function (waves) {
this.put$S$S("history wavelength*", p$1.merge$java_util_Collection.apply(this, [waves.values$()]));
});

Clazz.newMeth(C$, 'putByteOrder$S', function (byteOrder) {
this.put$S$S("representation byte_order", byteOrder);
});

Clazz.newMeth(C$, 'putRepFormat$S', function (repFormat) {
this.put$S$S("representation format", repFormat);
});

Clazz.newMeth(C$, 'putCompression$S', function (cmp) {
this.put$S$S("representation compression", cmp);
});

Clazz.newMeth(C$, 'putSigned$Z', function (signed) {
this.put$S$S("representation sign", String.valueOf$Z(signed));
});

Clazz.newMeth(C$, 'putLaserManufacturer$S', function (laserMan) {
this.put$S$S("history laser manufacturer", laserMan);
});

Clazz.newMeth(C$, 'putLaserModel$S', function (laserMod) {
this.put$S$S("history laser model", laserMod);
});

Clazz.newMeth(C$, 'putLaserRepetitionRate$Double', function (laserRep) {
this.put$S$S("history laser rep rate", laserRep.toString());
});

Clazz.newMeth(C$, 'putLaserPower$Double', function (laserPower) {
this.put$S$S("history laser power", laserPower.toString());
});

Clazz.newMeth(C$, 'putDichroicModel$S', function (diModel) {
this.put$S$S("history filterset dichroic name", diModel);
});

Clazz.newMeth(C$, 'putExcitationModel$S', function (exModel) {
this.put$S$S("history filterset exc name", exModel);
});

Clazz.newMeth(C$, 'putEmissionModel$S', function (emModel) {
this.put$S$S("history filterset emm name", emModel);
});

Clazz.newMeth(C$, 'putFilterSetModel$S', function (fltrModel) {
this.put$S$S("history filterset", fltrModel);
});

Clazz.newMeth(C$, 'putObjectiveModel$S', function (objModel) {
this.put$S$S("history objective type", objModel);
});

Clazz.newMeth(C$, 'putImmersion$S', function (immersion) {
this.put$S$S("history objective immersion", immersion);
});

Clazz.newMeth(C$, 'putLensNA$Double', function (lensNA) {
this.put$S$S("history objective na", lensNA.toString());
});

Clazz.newMeth(C$, 'putWorkingDistance$Double', function (wd) {
this.put$S$S("history objective workingdistance", wd.toString());
});

Clazz.newMeth(C$, 'putMagnification$Double', function (mag) {
this.put$S$S("history objective magnification", mag.toString());
});

Clazz.newMeth(C$, 'putDetectorManufacturer$S', function (detMan) {
this.put$S$S("history camera manufacturer", detMan);
});

Clazz.newMeth(C$, 'putDetectorModel$S', function (detModel) {
this.put$S$S("history camera model", detModel);
});

Clazz.newMeth(C$, 'putBitsPerPixel$Integer', function (bpp) {
this.put$S$S("layout significant_bits", bpp.toString());
});

Clazz.newMeth(C$, 'putGains$java_util_Map', function (gains) {
this.put$S$S("history gain", p$1.merge$java_util_Collection.apply(this, [gains.values$()]));
});

Clazz.newMeth(C$, 'putAuthorLastName$S', function (lastName) {
this.put$S$S("history author", lastName);
});

Clazz.newMeth(C$, 'putStagePositions$DoubleA', function (positions) {
this.put$S$S("history stage_xyzum", p$1.merge$TTA.apply(this, [positions]));
});

Clazz.newMeth(C$, 'putStageX$Double', function (stageX) {
this.put$S$S("history stage positionx", stageX.toString());
});

Clazz.newMeth(C$, 'putStageY$Double', function (stageY) {
this.put$S$S("history stage positiony", stageY.toString());
});

Clazz.newMeth(C$, 'putStageZ$Double', function (stageZ) {
this.put$S$S("history stage positionz", stageZ.toString());
});

Clazz.newMeth(C$, 'putExposureTime$Double', function (expTime) {
this.put$S$S("history exposure", expTime.toString());
});

Clazz.newMeth(C$, 'getDate$', function () {
var date=null;
var kv=p$1.findValueForKey$SA.apply(this, [["history date", "history created on", "history creation date"]]);
if (kv != null ) {
if (kv[0].equalsIgnoreCase$S("history date") || kv[0].equalsIgnoreCase$S("history created on") ) {
if (kv[1].indexOf$I(" ") > 0) {
date=kv[1].substring$I$I(0, kv[1].lastIndexOf$I(" "));
}} else if (kv[0].equalsIgnoreCase$S("history creation date")) {
date=kv[1];
}}if (date != null ) date=$I$(6).formatDate$S$SA(date, $I$(7).DATE_FORMATS);
return date;
});

Clazz.newMeth(C$, 'getDescription$', function () {
return p$1.findStringValueForKey$SA.apply(this, [["history other text"]]);
});

Clazz.newMeth(C$, 'getMicroscopeModel$', function () {
return p$1.findStringValueForKey$SA.apply(this, [["history microscope"]]);
});

Clazz.newMeth(C$, 'getMicroscopeManufacturer$', function () {
return p$1.findStringValueForKey$SA.apply(this, [["history manufacturer"]]);
});

Clazz.newMeth(C$, 'getLifetime$', function () {
var kv=p$1.findValueForKey$SA.apply(this, [["history type"]]);
var lifetime=false;
if (kv != null  && (kv[1].equalsIgnoreCase$S("time resolved") || kv[1].equalsIgnoreCase$S("FluorescenceLifetime") ) ) {
lifetime=true;
}return lifetime;
});

Clazz.newMeth(C$, 'getParamLabels$', function () {
var pLabels=p$1.findStringValueForKey$SA.apply(this, [["parameter labels"]]);
if (pLabels == null ) return Clazz.array(String, [this.getAxes$().length]);
return pLabels.split$S(" ");
});

Clazz.newMeth(C$, 'getLabels$', function () {
return p$1.findStringValueForKey$SA.apply(this, [["history labels"]]);
});

Clazz.newMeth(C$, 'getExperimentType$', function () {
return p$1.findStringValueForKey$SA.apply(this, [["history type"]]);
});

Clazz.newMeth(C$, 'getPixelSizes$', function () {
var kv=p$1.findValueForKey$SA.apply(this, [["parameter scale"]]);
return kv == null  ? null : p$1.splitDoubles$S.apply(this, [kv[1]]);
});

Clazz.newMeth(C$, 'getUnits$', function () {
var kv=p$1.findValueForKey$SA.apply(this, [["parameter units"]]);
return kv == null  ? null : kv[1].split$S("\\s+");
});

Clazz.newMeth(C$, 'getAxes$', function () {
var kv=p$1.findValueForKey$SA.apply(this, [["layout order"]]);
var axes=null;
if (kv != null ) {
var t=Clazz.new_($I$(8,1).c$$S,[kv[1]]);
axes=Clazz.array(String, [t.countTokens$()]);
for (var n=0; n < axes.length; n++) {
axes[n]=t.nextToken$().trim$();
}
}return axes;
});

Clazz.newMeth(C$, 'getAxesSizes$', function () {
var kv=p$1.findValueForKey$SA.apply(this, [["layout sizes"]]);
var sizes=null;
if (kv != null ) {
var lengths=kv[1].split$S(" ");
sizes=Clazz.array(Double.TYPE, [lengths.length]);
for (var n=0; n < sizes.length; n++) {
try {
sizes[n]=Double.parseDouble$S(lengths[n].trim$());
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
this.log$().debug$O$Throwable("Could not parse axis length", e);
} else {
throw e;
}
}
}
}return sizes;
});

Clazz.newMeth(C$, 'getPhysicalPixelSizes$', function () {
var kv=p$1.findValueForKey$SA.apply(this, [["history extents"]]);
var sizes=null;
if (kv != null ) {
var lengths=kv[1].split$S(" ");
sizes=Clazz.array(Double.TYPE, [lengths.length]);
for (var n=0; n < sizes.length; n++) {
try {
sizes[n]=Double.parseDouble$S(lengths[n].trim$());
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
this.log$().debug$O$Throwable("Could not parse pixel sizes", e);
} else {
throw e;
}
}
}
}return sizes;
});

Clazz.newMeth(C$, 'getTimestamps$', function () {
var kv=p$1.findValueForKey$SA.apply(this, [["parameter t"]]);
return kv == null  ? null : p$1.splitDoubles$S.apply(this, [kv[1]]);
});

Clazz.newMeth(C$, 'getChannelNames$', function () {
var kv=p$1.findValueForKey$SA.apply(this, [["parameter ch"]]);
var channelNames=Clazz.new_(1,{K:"Integer",V:"String"},$I$(1,1));
if (kv != null ) {
var names=kv[1].split$S(" ");
for (var n=0; n < names.length; n++) {
channelNames.put$TK$TV( new Integer(n), names[n].trim$());
}
}return channelNames;
});

Clazz.newMeth(C$, 'addStepChannel$java_util_Map', function (channelNames) {
var kv=p$1.findValueIteration$S$S.apply(this, ["history step", "name"]);
if (kv != null ) channelNames.put$TK$TV( new Integer(kv[0].substring$I$I(12, kv[0].indexOf$I$I(" ", 12))), kv[1]);
});

Clazz.newMeth(C$, 'addCubeChannel$java_util_Map', function (channelNames) {
var kv=p$1.findValueForKey$SA.apply(this, [["history cube"]]);
if (kv != null ) channelNames.put$TK$TV(new Integer(channelNames.size$()), kv[1]);
});

Clazz.newMeth(C$, 'getPinholes$', function () {
var kv=p$1.findValueForKey$SA.apply(this, [["sensor s_params pinholeradius"]]);
var pinholes=Clazz.new_(1,{K:"Integer",V:"Double"},$I$(1,1));
if (kv != null ) {
var pins=kv[1].split$S(" ");
var channel=0;
for (var pin, $pin = 0, $$pin = pins; $pin<$$pin.length&&((pin=($$pin[$pin])),1);$pin++) {
if (pin.trim$().equals$O("")) continue;
try {
pinholes.put$TK$TV(new Integer(channel++),  new Double(pin));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
this.log$().debug$O$Throwable("Could not parse pinhole", e);
} else {
throw e;
}
}
}
}return pinholes;
});

Clazz.newMeth(C$, 'getEMWaves$', function () {
var kv=p$1.findValueForKey$SA.apply(this, [["sensor s_params lambdaem"]]);
var emWaves=null;
if (kv != null ) {
var waves=kv[1].split$S(" ");
emWaves=Clazz.array(Integer, [waves.length]);
for (var n=0; n < emWaves.length; n++) {
try {
emWaves[n]= new Integer((Double.parseDouble$S(waves[n])|0));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
this.log$().debug$O$Throwable("Could not parse emission wavelength", e);
} else {
throw e;
}
}
}
}return emWaves;
});

Clazz.newMeth(C$, 'getEMSingleton$', function () {
var kv=p$1.findValueForKey$SA.apply(this, [["history cube emm nm"]]);
var emWaves=null;
if (kv != null ) {
emWaves=Clazz.array(Integer, [1]);
emWaves[0]= new Integer(kv[1].split$S(" ")[1].trim$());
}return emWaves;
});

Clazz.newMeth(C$, 'getEXWaves$', function () {
var kv=p$1.findValueForKey$SA.apply(this, [["sensor s_params lambdaex"]]);
var exWaves=null;
if (kv != null ) {
var waves=kv[1].split$S(" ");
exWaves=Clazz.array(Integer, [waves.length]);
for (var n=0; n < exWaves.length; n++) {
try {
exWaves[n]= new Integer((Double.parseDouble$S(waves[n])|0));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
this.log$().debug$O$Throwable("Could not parse excitation wavelength", e);
} else {
throw e;
}
}
}
}return exWaves;
});

Clazz.newMeth(C$, 'getEXSingleton$', function () {
var kv=p$1.findValueForKey$SA.apply(this, [["history cube exc nm"]]);
var exWaves=null;
if (kv != null ) {
exWaves=Clazz.array(Integer, [1]);
exWaves[0]= new Integer(kv[1].split$S(" ")[1].trim$());
}return exWaves;
});

Clazz.newMeth(C$, 'getWavelengths$', function () {
var kv=p$1.findValueForKey$SA.apply(this, [["history wavelength*"]]);
var wavelengths=Clazz.new_(1,{K:"Integer",V:"Integer"},$I$(1,1));
if (kv != null ) {
var waves=kv[1].split$S(" ");
for (var n=0; n < waves.length; n++) {
wavelengths.put$TK$TV(new Integer(n), new Integer(Integer.parseInt$S(waves[n])));
}
}return wavelengths;
});

Clazz.newMeth(C$, 'addLaserWavelength$java_util_Map', function (wavelengths) {
var kv=p$1.findValueIteration$S$S.apply(this, ["history laser", "wavelength"]);
if (kv != null ) {
var laser=Integer.parseInt$S(kv[0].substring$I$I(13, kv[0].indexOf$I$I(" ", 13))) - 1;
kv[1]=kv[1].replaceAll$S$S("nm", "").trim$();
try {
wavelengths.put$TK$TV( new Integer(laser),  new Integer(kv[1]));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
this.log$().debug$O$Throwable("Could not parse wavelength", e);
} else {
throw e;
}
}
}});

Clazz.newMeth(C$, 'getByteOrder$', function () {
return p$1.findStringValueForKey$SA.apply(this, [["representation byte_order"]]);
});

Clazz.newMeth(C$, 'getRepFormat$', function () {
return p$1.findStringValueForKey$SA.apply(this, [["representation format"]]);
});

Clazz.newMeth(C$, 'getCompression$', function () {
return p$1.findStringValueForKey$SA.apply(this, [["representation compression"]]);
});

Clazz.newMeth(C$, 'isSigned$', function () {
var signed=p$1.findStringValueForKey$SA.apply(this, [["representation sign"]]);
return signed != null  && signed.equals$O("signed") ;
});

Clazz.newMeth(C$, 'getLaserManufacturer$', function () {
return p$1.findStringValueForKey$SA.apply(this, [["history laser manufacturer"]]);
});

Clazz.newMeth(C$, 'getLaserModel$', function () {
return p$1.findStringValueForKey$SA.apply(this, [["history laser model"]]);
});

Clazz.newMeth(C$, 'getLaserRepetitionRate$', function () {
return p$1.findDoubleValueForKey$SA.apply(this, [["history laser rep rate"]]);
});

Clazz.newMeth(C$, 'getLaserPower$', function () {
return p$1.findDoubleValueForKey$SA.apply(this, [["history laser power"]]);
});

Clazz.newMeth(C$, 'getDichroicModel$', function () {
return p$1.findStringValueForKey$SA.apply(this, [["history filterset dichroic name"]]);
});

Clazz.newMeth(C$, 'getExcitationModel$', function () {
return p$1.findStringValueForKey$SA.apply(this, [["history filterset exc name"]]);
});

Clazz.newMeth(C$, 'getEmissionModel$', function () {
return p$1.findStringValueForKey$SA.apply(this, [["history filterset emm name"]]);
});

Clazz.newMeth(C$, 'getFilterSetModel$', function () {
return p$1.findStringValueForKey$SA.apply(this, [["history filterset"]]);
});

Clazz.newMeth(C$, 'getObjectiveModel$', function () {
return p$1.findStringValueForKey$SA.apply(this, [["history objective type", "history objective"]]);
});

Clazz.newMeth(C$, 'getImmersion$', function () {
return p$1.findStringValueForKey$SA.apply(this, [["history objective immersion"]]);
});

Clazz.newMeth(C$, 'getLensNA$', function () {
return p$1.findDoubleValueForKey$SA.apply(this, [["history objective na"]]);
});

Clazz.newMeth(C$, 'getWorkingDistance$', function () {
return p$1.findDoubleValueForKey$SA.apply(this, [["history objective workingdistance"]]);
});

Clazz.newMeth(C$, 'getMagnification$', function () {
return p$1.findDoubleValueForKey$SA.apply(this, [["history objective magnification", "history objective mag"]]);
});

Clazz.newMeth(C$, 'getDetectorManufacturer$', function () {
return p$1.findStringValueForKey$SA.apply(this, [["history camera manufacturer"]]);
});

Clazz.newMeth(C$, 'getDetectorModel$', function () {
return p$1.findStringValueForKey$SA.apply(this, [["history camera model"]]);
});

Clazz.newMeth(C$, 'getBitsPerPixel$', function () {
return p$1.findIntValueForKey$SA.apply(this, [["layout significant_bits"]]);
});

Clazz.newMeth(C$, 'getGains$', function () {
var kv=p$1.findValueForKey$SA.apply(this, [["history gain"]]);
var gains=Clazz.new_(1,{K:"Integer",V:"Double"},$I$(1,1));
if (kv != null ) {
var n= new Integer(0);
try {
n= new Integer(kv[0].substring$I(12).trim$());
n= new Integer(n.intValue$() - 1);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
gains.put$TK$TV(n,  new Double(kv[1]));
}return gains;
});

Clazz.newMeth(C$, 'getAuthorLastName$', function () {
return p$1.findStringValueForKey$SA.apply(this, [["history author", "history experimenter"]]);
});

Clazz.newMeth(C$, 'getStagePositions$', function () {
var kv=p$1.findValueForKey$SA.apply(this, [["history stage_xyzum"]]);
var stagePos=null;
if (kv != null ) {
var positions=kv[1].split$S(" ");
stagePos=Clazz.array(Double, [positions.length]);
for (var n=0; n < stagePos.length; n++) {
try {
stagePos[n]= new Double(positions[n]);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
this.log$().debug$O$Throwable("Could not parse stage position", e);
} else {
throw e;
}
}
}
}return stagePos;
});

Clazz.newMeth(C$, 'getStageX$', function () {
return p$1.findDoubleValueForKey$SA.apply(this, [["history stage positionx"]]);
});

Clazz.newMeth(C$, 'getStageY$', function () {
return p$1.findDoubleValueForKey$SA.apply(this, [["history stage positiony"]]);
});

Clazz.newMeth(C$, 'getStageZ$', function () {
return p$1.findDoubleValueForKey$SA.apply(this, [["history stage positionz"]]);
});

Clazz.newMeth(C$, 'getExposureTime$', function () {
var kv=p$1.findValueForKey$SA.apply(this, [["history exposure"]]);
var exposureTime=null;
if (kv != null ) {
var expTime=kv[1];
if (expTime.contains$CharSequence(" ")) {
exposureTime= new Double(expTime.indexOf$I(" "));
}}return exposureTime;
});

Clazz.newMeth(C$, 'findKeyValue$SA$SAA', function (tokens, regexesArray) {
var keyValue=p$1.findKeyValueForCategory$SA$SAA.apply(this, [tokens, regexesArray]);
if (null == keyValue ) {
keyValue=p$1.findKeyValueOther$SA$SAA.apply(this, [tokens, $I$(7).OTHER_KEYS]);
}if (null == keyValue ) {
var key=tokens[0];
var value=p$1.concatenateTokens$SA$I$I.apply(this, [tokens, 1, tokens.length]);
System.out.println$S("ICSFormat creating kvpair " + key + "," + value );
keyValue=Clazz.array(String, -1, [key, value]);
}return keyValue;
});

Clazz.newMeth(C$, 'concatenateTokens$SA$I$I', function (tokens, start, stop) {
var returnValue=Clazz.new_($I$(9,1));
for (var i=start; i < tokens.length && i < stop ; ++i) {
returnValue.append$S(tokens[i]);
if (i < stop - 1) {
returnValue.append$C(" ");
}}
return returnValue.toString();
}, p$1);

Clazz.newMeth(C$, 'findDoubleValueForKey$SA', function (keys) {
var kv=p$1.findValueForKey$SA.apply(this, [keys]);
return kv == null  ? null :  new Double(kv[1]);
}, p$1);

Clazz.newMeth(C$, 'findIntValueForKey$SA', function (keys) {
var kv=p$1.findValueForKey$SA.apply(this, [keys]);
return kv == null  ? null :  new Integer(kv[1]);
}, p$1);

Clazz.newMeth(C$, 'findStringValueForKey$SA', function (keys) {
var kv=p$1.findValueForKey$SA.apply(this, [keys]);
return kv == null  ? null : kv[1];
}, p$1);

Clazz.newMeth(C$, 'findValueForKey$SA', function (keys) {
for (var key, $key = 0, $$key = keys; $key<$$key.length&&((key=($$key[$key])),1);$key++) {
var value=this.keyValPairs.get$O(key);
if (value != null ) return Clazz.array(String, -1, [key, value]);
}
return null;
}, p$1);

Clazz.newMeth(C$, 'findValueIteration$S$S', function (starts, ends) {
for (var key, $key = this.keyValPairs.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
if ((starts == null  || key.startsWith$S(starts) ) && (ends == null  || key.endsWith$S(ends) ) ) return Clazz.array(String, -1, [key, this.keyValPairs.get$O(key)]);
}
return null;
}, p$1);

Clazz.newMeth(C$, 'findKeyValueForCategory$SA$SAA', function (tokens, regexesArray) {
var keyValue=null;
for (var regexes, $regexes = 0, $$regexes = regexesArray; $regexes<$$regexes.length&&((regexes=($$regexes[$regexes])),1);$regexes++) {
if (p$1.compareTokens$SA$I$SA$I.apply(this, [tokens, 1, regexes, 0])) {
var splitIndex=1 + regexes.length;
var key=p$1.concatenateTokens$SA$I$I.apply(this, [tokens, 0, splitIndex]);
var value=p$1.concatenateTokens$SA$I$I.apply(this, [tokens, splitIndex, tokens.length]);
keyValue=Clazz.array(String, -1, [key, value]);
break;
}}
return keyValue;
}, p$1);

Clazz.newMeth(C$, 'findKeyValueOther$SA$SAA', function (tokens, regexesArray) {
var keyValue=null;
for (var regexes, $regexes = 0, $$regexes = regexesArray; $regexes<$$regexes.length&&((regexes=($$regexes[$regexes])),1);$regexes++) {
for (var i=1; i < tokens.length - regexes.length; ++i) {
if (tokens[i].toLowerCase$().matches$S(regexes[0])) {
if (1 == regexes.length || p$1.compareTokens$SA$I$SA$I.apply(this, [tokens, i + 1, regexes, 1]) ) {
var splitIndex=i + regexes.length;
var key=p$1.concatenateTokens$SA$I$I.apply(this, [tokens, 0, splitIndex]);
var value=p$1.concatenateTokens$SA$I$I.apply(this, [tokens, splitIndex, tokens.length]);
keyValue=Clazz.array(String, -1, [key, value]);
break;
}}}
if (null != keyValue ) {
break;
}}
return keyValue;
}, p$1);

Clazz.newMeth(C$, 'compareTokens$SA$I$SA$I', function (tokens, tokenIndex, regexes, regexesIndex) {
var returnValue=true;
var i;
var j;
for (i=tokenIndex, j=regexesIndex; j < regexes.length; ++i, ++j) {
if (i >= tokens.length || !tokens[i].toLowerCase$().matches$S(regexes[j]) ) {
returnValue=false;
break;
}}
return returnValue;
}, p$1);

Clazz.newMeth(C$, 'splitDoubles$S', function (v) {
var t=Clazz.new_($I$(8,1).c$$S,[v]);
var values=Clazz.array(Double, [t.countTokens$()]);
for (var n=0; n < values.length; n++) {
var token=t.nextToken$().trim$();
try {
values[n]= new Double(token);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
this.log$().debug$O$Throwable("Could not parse double value '" + token + "'" , e);
} else {
throw e;
}
}
}
return values;
}, p$1);

Clazz.newMeth(C$, 'mergePrimitiveDoubles$DA', function (doubles) {
var d=Clazz.array(Double, [doubles.length]);
for (var i=0; i < doubles.length; i++) d[i]=new Double(doubles[i]);

return p$1.merge$TTA.apply(this, [d]);
}, p$1);

Clazz.newMeth(C$, 'merge$java_util_Collection', function (collection) {
var array=collection.toArray$();
return p$1.merge$TTA.apply(this, [array]);
}, p$1);

Clazz.newMeth(C$, 'merge$TTA', function (values) {
var b=Clazz.new_($I$(9,1));
for (var v, $v = 0, $$v = values; $v<$$v.length&&((v=($$v[$v])),1);$v++) {
b.append$S(v.toString() + " ");
}
return b.toString();
}, p$1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ICSFormat, "Parser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractParser');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.bhtest3=true;
}

Clazz.newMeth(C$, '$init$', function () {
this.bhtest4=true;
}, 1);

C$.$fields$=[['Z',['bhtest4'],'O',['$handles','org.scijava.io.handle.DataHandleService']]
,['Z',['bhtest3']]]

Clazz.newMeth(C$, ['typedParse$org_scijava_io_handle_DataHandle$io_scif_formats_ICSFormat_Metadata$io_scif_config_SCIFIOConfig','typedParse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig'], function (stream, meta, config) {
p$2.findCompanion$org_scijava_io_handle_DataHandle$io_scif_formats_ICSFormat_Metadata.apply(this, [stream, meta]);
var parseHandle;
if (stream.get$().equals$O(meta.idsLocation)) {
parseHandle=this.$handles.readBuffer$org_scijava_io_location_Location(meta.icsLocation);
} else {
parseHandle=stream;
}parseHandle.seek$J(0);
var line=parseHandle.findString$SA($I$(7).NL);
while (line != null  && !line.trim$().equals$O("end")  && parseHandle.offset$() < parseHandle.length$() - 1 ){
line=line.trim$().toLowerCase$();
var tokens=line.split$S("[ \t]");
var key=Clazz.new_($I$(9,1));
var keyMap=$I$(7).keys;
var validKey=false;
for (var q=0; q < tokens.length; q++) {
tokens[q]=tokens[q].trim$();
if (tokens[q].length$() == 0) continue;
var o=keyMap.get$O(tokens[q]);
if (o == null ) {
if (!validKey) {
break;
}var value=Clazz.new_($I$(9,1).c$$S,[tokens[q++]]);
for (; q < tokens.length; q++) {
value.append$S(" ");
value.append$S(tokens[q].trim$());
}
var k=key.toString().trim$().replaceAll$S$S("\t", " ");
var v=value.toString().trim$();
meta.getTable$().put$TK$TV(k, v);
meta.keyValPairs.put$TK$TV(k.toLowerCase$(), v);
} else {
keyMap=o;
if (keyMap.get$O("VALID_LEAF") != null ) validKey=true;
key.append$S(tokens[q]);
key.append$S(" ");
}}
line=parseHandle.findString$SA($I$(7).NL);
}
var icsVersion=meta.getTable$().get$O("ics_version");
if (icsVersion == null ) {
parseHandle.close$();
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Cannot discern ICS version"]);
} else if ("1.0".equals$O(icsVersion)) {
meta.setVersionTwo$Z(false);
var idsLoc=meta.getIdsLocation$();
if (idsLoc == null ) {
parseHandle.close$();
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Data file does not exist, should be located next to: " + parseHandle.get$().toString()]);
}parseHandle.close$();
this.getSource$().close$();
this.updateSource$org_scijava_io_location_Location(meta.getIdsLocation$());
} else if (icsVersion.equals$O("2.0")) {
meta.setVersionTwo$Z(true);
meta.setIdsLocation$org_scijava_io_location_Location(meta.getIcsLocation$());
meta.setSource$org_scijava_io_handle_DataHandle(stream);
} else {
stream.close$();
parseHandle.close$();
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Unsupported ICS version: " + icsVersion]);
}meta.offset=this.getSource$().offset$();
this.getSource$().seek$J(0);
meta.hasInstrumentData=p$2.nullKeyCheck$SA.apply(this, [Clazz.array(String, -1, ["history cube emm nm", "history cube exc nm", "history objective NA", "history stage xyzum", "history objective magnification", "history objective mag", "history objective WorkingDistance", "history objective type", "history objective", "history objective immersion"])]);
});

Clazz.newMeth(C$, 'nullKeyCheck$SA', function (testKeys) {
for (var key, $key = 0, $$key = testKeys; $key<$$key.length&&((key=($$key[$key])),1);$key++) {
if (this.getMetadata$().get$S(key) != null ) {
return true;
}}
return false;
}, p$2);

Clazz.newMeth(C$, 'findCompanion$org_scijava_io_handle_DataHandle$io_scif_formats_ICSFormat_Metadata', function (stream, meta) {
var icsId;
var idsId;
var icsLocation;
var idsLocation;
icsId=idsId=stream.get$().getName$();
if ("".equals$O(icsId) || !(Clazz.instanceOf(stream.get$(), "org.scijava.io.location.BrowsableLocation")) ) {
return;
}var dot=icsId.lastIndexOf$I(".");
var ext=dot < 0 ? "" : icsId.substring$I(dot + 1).toLowerCase$();
if ("ics".equals$O(ext)) {
var c=idsId.toCharArray$();
c[c.length - 2]=String.fromCharCode(c[c.length - 2].$c()+1);
idsId= String.instantialize(c);
icsLocation=stream.get$();
idsLocation=icsLocation.sibling$S(idsId);
} else if ("ids".equals$O(ext)) {
var c=icsId.toCharArray$();
c[c.length - 2]=String.fromCharCode(c[c.length - 2].$c()-1);
icsId= String.instantialize(c);
idsLocation=stream.get$();
icsLocation=idsLocation.sibling$S(icsId);
} else {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Companion file not found"]);
}meta.setIcsLocation$org_scijava_io_location_Location(icsLocation);
meta.setIdsLocation$org_scijava_io_location_Location(idsLocation);
}, p$2);
C$.$getAnn$ = function(){ return [
[['$handles','org.scijava.io.handle.DataHandleService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ICSFormat, "Reader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.ByteArrayReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.bhtestr=true;
}, 1);

C$.$fields$=[['Z',['bhtestr','gzip','invertY'],'L',['prevPlane'],'O',['dataHandleService','org.scijava.io.handle.DataHandleService','gzipStream','java.util.zip.GZIPInputStream','data','byte[]']]]

Clazz.newMeth(C$, 'createDomainArray$', function () {
return Clazz.array(String, -1, ["Light Microscopy", "Fluorescence-Lifetime Imaging", "Unknown"]);
});

Clazz.newMeth(C$, ['openPlane$I$J$io_scif_ByteArrayPlane$net_imglib2_Interval$io_scif_config_SCIFIOConfig','openPlane$I$J$TP$net_imglib2_Interval$io_scif_config_SCIFIOConfig'], function (imageIndex, planeIndex, plane, bounds, config) {
var meta=this.getMetadata$();
$I$(5).checkPlaneForReading$io_scif_Metadata$I$J$I$net_imglib2_Interval(meta, imageIndex, planeIndex, plane.getData$().length, bounds);
var xAxis=meta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(3).X);
var yAxis=meta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(3).Y);
var x=(bounds.min$I(xAxis)|0);
var y=(bounds.min$I(yAxis)|0);
var w=(bounds.dimension$I(xAxis)|0);
var h=(bounds.dimension$I(yAxis)|0);
var bpp=$I$(5).getBytesPerPixel$I(meta.get$I(imageIndex).getPixelType$());
var len=($I$(5).getPlaneSize$io_scif_Reader$I(this, imageIndex)|0);
var rowLen=($I$(5).getPlaneSize$io_scif_Metadata$I$I$I(meta, w, 1, imageIndex)|0);
var coordinates=$I$(5).rasterToPosition$I$J$io_scif_Metadata(imageIndex, planeIndex, meta);
var prevCoordinates=$I$(5).rasterToPosition$I$J$io_scif_Metadata(imageIndex, this.prevPlane, meta);
if (!this.gzip) {
this.getHandle$().seek$J(this.getMetadata$().offset + planeIndex * len);
} else {
var toSkip=(planeIndex - this.prevPlane - 1 ) * len;
if (this.gzipStream == null  || planeIndex <= this.prevPlane ) {
var fis=null;
toSkip=planeIndex * len;
if (this.getMetadata$().versionTwo) {
fis=this.dataHandleService.create$TD(this.getMetadata$().icsLocation);
fis.skip$J(this.getMetadata$().offset);
} else {
fis=this.dataHandleService.create$TD(this.getMetadata$().idsLocation);
toSkip+=this.getMetadata$().offset;
}try {
this.gzipStream=Clazz.new_($I$(10,1).c$$java_io_InputStream,[Clazz.new_(1,{L:"org.scijava.io.location.Location"},$I$(11,1).c$$org_scijava_io_handle_DataHandle,[fis])]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.gzip=false;
this.getHandle$().seek$J(this.getMetadata$().offset + planeIndex * len);
this.gzipStream=null;
} else {
throw e;
}
}
}if (this.gzipStream != null ) {
while (toSkip > 0){
toSkip-=this.gzipStream.skip$J(toSkip);
}
this.data=Clazz.array(Byte.TYPE, [((len * (meta.storedRGB$() ? meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(3).CHANNEL) : 1))|0)]);
var toRead=this.data.length;
while (toRead > 0){
toRead-=this.gzipStream.read$BA$I$I(this.data, this.data.length - toRead, toRead);
}
}}var sizeC=((meta.getLifetime$() ? 1 : meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(3).CHANNEL))|0);
if (!this.getMetadata$().get$I(imageIndex).isMultichannel$() && this.getMetadata$().storedRGB$() ) {
this.getHandle$().seek$J(this.getMetadata$().offset + len * $I$(5).positionToRaster$I$io_scif_Reader$JA(0, this, Clazz.array(Long.TYPE, -1, [coordinates[0], 0, coordinates[2]])));
if (!this.gzip && this.data == null  ) {
this.data=Clazz.array(Byte.TYPE, [((len * this.getMetadata$().get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(3).CHANNEL))|0)]);
this.getHandle$().read$BA(this.data);
} else if (!this.gzip && (coordinates[0] != prevCoordinates[0] || coordinates[2] != prevCoordinates[2] ) ) {
this.getHandle$().read$BA(this.data);
}for (var row=y; row < h + y; row++) {
for (var col=x; col < w + x; col++) {
var src=((bpp * ((planeIndex % meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(3).CHANNEL)) + sizeC * (row * (row * meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(3).X) + col))))|0);
var dest=bpp * ((row - y) * w + (col - x));
System.arraycopy$O$I$O$I$I(this.data, src, plane.getBytes$(), dest, bpp);
}
}
} else if (this.gzip) {
try {
var bytes=this.dataHandleService.create$TD(Clazz.new_($I$(12,1).c$$BA,[this.data]));
/*try*/ {
this.readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$TP(bytes, imageIndex, bounds, plane);
}
}finally{/*res*/
try{bytes&&bytes.close$&&bytes.close$()}catch(_){}}
} else {
this.readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$TP(this.getHandle$(), imageIndex, bounds, plane);
}if (this.invertY) {
var row=Clazz.array(Byte.TYPE, [rowLen]);
for (var r=0; r < (h/2|0); r++) {
var topOffset=r * rowLen;
var bottomOffset=(h - r - 1 ) * rowLen;
System.arraycopy$O$I$O$I$I(plane.getBytes$(), topOffset, row, 0, rowLen);
System.arraycopy$O$I$O$I$I(plane.getBytes$(), bottomOffset, plane.getBytes$(), topOffset, rowLen);
System.arraycopy$O$I$O$I$I(row, 0, plane.getBytes$(), bottomOffset, rowLen);
}
}this.prevPlane=planeIndex;
return plane;
});

Clazz.newMeth(C$, 'close$Z', function (fileOnly) {
C$.superclazz.prototype.close$Z.apply(this, [fileOnly]);
if (!fileOnly) {
this.data=null;
this.gzip=false;
this.invertY=false;
this.prevPlane=0;
if (this.gzipStream != null ) {
this.gzipStream.close$();
}this.gzipStream=null;
}});

Clazz.newMeth(C$, ['setMetadata$io_scif_formats_ICSFormat_Metadata','setMetadata$TM'], function (meta) {
C$.superclazz.prototype.setMetadata$TM.apply(this, [meta]);
this.gzip=this.getMetadata$().get$S("representation compression").equals$O("gzip");
this.prevPlane=-1;
this.gzipStream=null;
this.invertY=false;
this.data=null;
});

Clazz.newMeth(C$, 'setSource$org_scijava_io_handle_DataHandle$io_scif_config_SCIFIOConfig', function (stream, config) {
if (!this.getMetadata$().versionTwo && !this.getMetadata$().getIdsLocation$().equals$O(stream.get$()) ) {
stream.close$();
C$.superclazz.prototype.setSource$org_scijava_io_handle_DataHandle$io_scif_config_SCIFIOConfig.apply(this, [this.dataHandleService.create$TD(this.getMetadata$().getIdsLocation$()), config]);
return;
}C$.superclazz.prototype.setSource$org_scijava_io_handle_DataHandle$io_scif_config_SCIFIOConfig.apply(this, [stream, config]);
});

Clazz.newMeth(C$, 'getDomains$', function () {
$I$(5).assertStream$org_scijava_io_handle_DataHandle$Z$I(this.getHandle$(), true, 0);
var domain=Clazz.array(String, -1, ["Graphics"]);
if (this.getMetadata$().get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(4).LIFETIME) > 1) {
domain[0]="Fluorescence-Lifetime Imaging";
} else if (this.getMetadata$().hasInstrumentData) {
domain[0]="Light Microscopy";
}return domain;
});
C$.$getAnn$ = function(){ return [
[['dataHandleService','org.scijava.io.handle.DataHandleService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ICSFormat, "Writer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractWriter');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lastPlane=-1;
}, 1);

C$.$fields$=[['I',['dimensionLength'],'L',['dimensionOffset','pixelOffset','lastPlane'],'O',['dataHandleService','org.scijava.io.handle.DataHandleService','pixels','org.scijava.io.handle.DataHandle']]]

Clazz.newMeth(C$, 'makeCompressionTypes$', function () {
return Clazz.array(String, [0]);
});

Clazz.newMeth(C$, 'initialize$I$J$net_imglib2_Interval', function (imageIndex, planeIndex, bounds) {
if (!this.isInitialized$I$J(imageIndex, (planeIndex|0))) {
if (!$I$(13).wholePlane$I$io_scif_Metadata$net_imglib2_Interval(imageIndex, this.getMetadata$(), bounds)) {
this.pixels.seek$J(this.pixelOffset + (planeIndex + 1) * this.getMetadata$().get$I(imageIndex).getPlaneSize$());
}}C$.superclazz.prototype.initialize$I$J$net_imglib2_Interval.apply(this, [imageIndex, planeIndex, bounds]);
});

Clazz.newMeth(C$, 'writePlane$I$J$io_scif_Plane$net_imglib2_Interval', function (imageIndex, planeIndex, plane, bounds) {
this.checkParams$I$J$BA$net_imglib2_Interval(imageIndex, planeIndex, plane.getBytes$(), bounds);
var meta=this.getMetadata$();
var interleaved=plane.getImageMetadata$().getInterleavedAxisCount$() > 0;
var xAxis=meta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(3).X);
var yAxis=meta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(3).Y);
var x=(bounds.min$I(xAxis)|0);
var y=(bounds.min$I(yAxis)|0);
var w=(bounds.dimension$I(xAxis)|0);
var h=(bounds.dimension$I(yAxis)|0);
var rgbChannels=1;
if (meta.get$I(imageIndex).isMultichannel$()) {
var cIndex=meta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(3).CHANNEL);
rgbChannels=((bounds.dimension$I(cIndex))|0);
}var sizeX=(meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(3).X)|0);
var pixelType=this.getMetadata$().get$I(imageIndex).getPixelType$();
var bytesPerPixel=$I$(5).getBytesPerPixel$I(pixelType);
var planeSize=(((meta.get$I(0).getSize$()/meta.get$I(0).getPlaneCount$()|0))|0);
this.pixels.seek$J(this.pixelOffset + planeIndex * planeSize);
if ($I$(13).wholePlane$I$io_scif_Metadata$net_imglib2_Interval(imageIndex, meta, bounds) && (interleaved || rgbChannels == 1 ) ) {
this.pixels.write$BA(plane.getBytes$());
} else {
this.pixels.skipBytes$I(bytesPerPixel * rgbChannels * sizeX * y );
for (var row=0; row < h; row++) {
var strip=Clazz.new_($I$(14,1));
for (var col=0; col < w; col++) {
for (var c=0; c < rgbChannels; c++) {
var index=interleaved ? rgbChannels * (row * w + col) + c : w * (c * h + row) + col;
strip.write$BA$I$I(plane.getBytes$(), index * bytesPerPixel, bytesPerPixel);
}
}
this.pixels.skipBytes$I(bytesPerPixel * rgbChannels * x );
this.pixels.write$BA(strip.toByteArray$());
this.pixels.skipBytes$I(bytesPerPixel * rgbChannels * (sizeX - w - x ) );
}
}this.lastPlane=planeIndex;
});

Clazz.newMeth(C$, 'canDoStacks$', function () {
return true;
});

Clazz.newMeth(C$, 'getPixelTypes$S', function (codec) {
return Clazz.array(Integer.TYPE, -1, [0, 1, 2, 3, 4, 5, 6]);
});

Clazz.newMeth(C$, 'close$I', function (imageIndex) {
if (this.lastPlane != this.getMetadata$().get$I(imageIndex).getPlaneCount$() - 1 && this.getHandle$() != null  ) {
p$3.overwriteDimensions$io_scif_formats_ICSFormat_Metadata$I.apply(this, [this.getMetadata$(), imageIndex]);
}C$.superclazz.prototype.close$.apply(this, []);
this.pixelOffset=0;
this.lastPlane=-1;
this.dimensionOffset=0;
this.dimensionLength=0;
if (this.pixels != null ) {
this.pixels.close$();
}this.pixels=null;
});

Clazz.newMeth(C$, 'setDest$org_scijava_io_handle_DataHandle$I$io_scif_config_SCIFIOConfig', function (out, imageIndex, config) {
var currentId=this.getMetadata$().idsId != null  ? this.getMetadata$().idsId : this.getMetadata$().icsId;
C$.superclazz.prototype.setDest$org_scijava_io_handle_DataHandle$I$io_scif_config_SCIFIOConfig.apply(this, [out, imageIndex, config]);
if (out.length$() == 0) {
out.writeBytes$S("\t\n");
if ($I$(5).checkSuffix$S$S(currentId, "ids")) {
out.writeBytes$S("ics_version\t1.0\n");
} else {
out.writeBytes$S("ics_version\t2.0\n");
}out.writeBytes$S("filename\t" + currentId + "\n" );
out.writeBytes$S("layout\tparameters\t6\n");
var meta=this.getMetadata$();
var pixelType=meta.get$I(imageIndex).getPixelType$();
this.dimensionOffset=out.offset$();
var sizes=p$3.overwriteDimensions$io_scif_formats_ICSFormat_Metadata$I.apply(this, [meta, imageIndex]);
this.dimensionLength=((out.offset$() - this.dimensionOffset)|0);
if (this.getValidBits$() != 0) {
out.writeBytes$S("layout\tsignificant_bits\t" + this.getValidBits$() + "\n" );
}var signed=$I$(5).isSigned$I(pixelType);
var littleEndian=meta.get$I(imageIndex).isLittleEndian$();
out.writeBytes$S("representation\tformat\t" + (pixelType == 6 ? "real\n" : "integer\n"));
out.writeBytes$S("representation\tsign\t" + (signed ? "signed\n" : "unsigned\n"));
out.writeBytes$S("representation\tcompression\tuncompressed\n");
out.writeBytes$S("representation\tbyte_order\t");
for (var i=0; i < (sizes[0]/8|0); i++) {
if ((littleEndian && (sizes[0] < 32 || pixelType == 6 ) ) || (!littleEndian && sizes[0] >= 32  && pixelType != 6 ) ) {
out.writeBytes$S((i + 1) + "\t");
} else {
out.writeBytes$S((((sizes[0]/8|0)) - i) + "\t");
}}
out.writeBytes$S("\nparameter\tscale\t1.000000\t");
var units=Clazz.new_($I$(9,1));
for (var axis, $axis = meta.get$I(imageIndex).getAxes$().iterator$(); $axis.hasNext$()&&((axis=($axis.next$())),1);) {
var value=new Double(1.0);
if (axis.type$() === $I$(3).X ) {
value=new Double(axis.averageScale$D$D(0, 1));
} else if (axis.type$() === $I$(3).Y ) {
value=new Double(axis.averageScale$D$D(0, 1));
} else if (axis.type$() === $I$(3).Z ) {
value=new Double(axis.averageScale$D$D(0, 1));
} else if (axis.type$() === $I$(3).TIME ) {
value=new Double(axis.averageScale$D$D(0, 1));
}units.append$S(axis.unit$() + "\t");
out.writeBytes$S(value + "\t");
}
out.writeBytes$S("\nparameter\tunits\tbits\t" + units.toString() + "\n" );
out.writeBytes$S("\nend\n");
this.pixelOffset=out.offset$();
} else if ($I$(5).checkSuffix$S$S(currentId, "ics")) {
try {
var tmpin=this.dataHandleService.create$TD(out.get$());
/*try*/ {
tmpin.findString$SA(["\nend\n"]);
this.pixelOffset=tmpin.offset$();
}
}finally{/*res*/
try{tmpin&&tmpin.close$&&tmpin.close$()}catch(_){}}
}if ($I$(5).checkSuffix$S$S(currentId, "ids")) {
this.pixelOffset=0;
}if (this.pixels == null ) {
this.pixels=this.dataHandleService.create$TD(out.get$());
}});

Clazz.newMeth(C$, 'overwriteDimensions$io_scif_formats_ICSFormat_Metadata$I', function (meta, imageIndex) {
this.getHandle$().seek$J(this.dimensionOffset);
var pixelType=meta.get$I(imageIndex).getPixelType$();
var bytesPerPixel=$I$(5).getBytesPerPixel$I(pixelType);
var dimOrder=Clazz.new_($I$(9,1));
var sizes=Clazz.array(Integer.TYPE, [6]);
var nextSize=0;
sizes[nextSize++]=8 * bytesPerPixel;
if (meta.get$I(imageIndex).isMultichannel$()) {
dimOrder.append$S("ch\t");
sizes[nextSize++]=((meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(3).CHANNEL))|0);
}for (var axis, $axis = meta.get$I(imageIndex).getAxes$().iterator$(); $axis.hasNext$()&&((axis=($axis.next$())),1);) {
if (axis.type$() === $I$(3).CHANNEL ) {
if (dimOrder.indexOf$S("ch") == -1) {
sizes[nextSize++]=(meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(3).CHANNEL)|0);
dimOrder.append$S("ch");
} else {
continue;
}} else {
sizes[nextSize++]=(meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType(axis.type$())|0);
dimOrder.append$S(String.valueOf$C(axis.type$().getLabel$().charAt$I(0)).toLowerCase$());
}dimOrder.append$S("\t");
}
this.getHandle$().writeBytes$S("layout\torder\tbits\t" + dimOrder.toString() + "\n" );
this.getHandle$().writeBytes$S("layout\tsizes\t");
for (var size, $size = 0, $$size = sizes; $size<$$size.length&&((size=($$size[$size])),1);$size++) {
this.getHandle$().writeBytes$S(size + "\t");
}
while ((this.getHandle$().offset$() - this.dimensionOffset) < this.dimensionLength - 1){
this.getHandle$().writeBytes$S(" ");
}
this.getHandle$().writeBytes$S("\n");
return sizes;
}, p$3);
C$.$getAnn$ = function(){ return [
[['dataHandleService','org.scijava.io.handle.DataHandleService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ICSFormat, "ICSUtils", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.NL=Clazz.array(String, -1, ["\n", "\r\n"]);
C$.DATE_FORMATS=Clazz.array(String, -1, ["EEEE, MMMM dd, yyyy HH:mm:ss", "EEE dd MMMM yyyy HH:mm:ss", "EEE MMM dd HH:mm:ss yyyy", "EE dd MMM yyyy HH:mm:ss z", "HH:mm:ss dd\\MM\\yy"]);
C$.OTHER_KEYS=Clazz.array(String, -2, [Clazz.array(String, -1, ["cube", "descriptio"]), Clazz.array(String, -1, ["cube", "description"]), Clazz.array(String, -1, ["image", "form"]), Clazz.array(String, -1, ["refinxlensmedium"]), Clazz.array(String, -1, ["refinxmedium"]), Clazz.array(String, -1, ["scil_type"]), Clazz.array(String, -1, ["source"])]);
C$.keys=C$.createKeyMap$();
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['NL','String[]','+DATE_FORMATS','OTHER_KEYS','String[][]','keys','java.util.Map']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'createKeyMap$', function () {
var root=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(1,1));
C$.addKey$java_util_Map$SA(root, ["ics_version"]);
C$.addKey$java_util_Map$SA(root, ["parameter", "ch"]);
C$.addKey$java_util_Map$SA(root, ["parameter", "scale"]);
C$.addKey$java_util_Map$SA(root, ["parameter", "t"]);
C$.addKey$java_util_Map$SA(root, ["parameter", "units"]);
C$.addKey$java_util_Map$SA(root, ["parameter", "labels"]);
C$.addKey$java_util_Map$SA(root, ["sensor", "s_params", "lambdaem"]);
C$.addKey$java_util_Map$SA(root, ["sensor", "s_params", "lambdaex"]);
C$.addKey$java_util_Map$SA(root, ["sensor", "s_params", "pinholeradius"]);
C$.addKey$java_util_Map$SA(root, ["representation", "byte_order"]);
C$.addKey$java_util_Map$SA(root, ["representation", "compression"]);
C$.addKey$java_util_Map$SA(root, ["representation", "format"]);
C$.addKey$java_util_Map$SA(root, ["representation", "sign"]);
C$.addKey$java_util_Map$SA(root, ["history", "author"]);
C$.addKey$java_util_Map$SA(root, ["history", "camera", "manufcaturer"]);
C$.addKey$java_util_Map$SA(root, ["history", "camera", "model"]);
C$.addKey$java_util_Map$SA(root, ["history", "cube", "emm", "nm"]);
C$.addKey$java_util_Map$SA(root, ["history", "cube", "exc", "nm"]);
C$.addKey$java_util_Map$SA(root, ["history", "date"]);
C$.addKey$java_util_Map$SA(root, ["history", "creation", "date"]);
C$.addKey$java_util_Map$SA(root, ["history", "created", "on"]);
C$.addKey$java_util_Map$SA(root, ["history", "experimenter"]);
C$.addKey$java_util_Map$SA(root, ["history", "exposure"]);
C$.addKey$java_util_Map$SA(root, ["history", "extents"]);
C$.addKey$java_util_Map$SA(root, ["history", "filterset"]);
C$.addKey$java_util_Map$SA(root, ["history", "filterset", "dichroic", "name"]);
C$.addKey$java_util_Map$SA(root, ["history", "filterset", "emm", "name"]);
C$.addKey$java_util_Map$SA(root, ["history", "filterset", "exc", "name"]);
C$.addKey$java_util_Map$SA(root, ["history", "gain"]);
C$.addKey$java_util_Map$SA(root, ["history", "laser", "manufacturer"]);
C$.addKey$java_util_Map$SA(root, ["history", "laser", "model"]);
C$.addKey$java_util_Map$SA(root, ["history", "laser", "rep", "rate"]);
C$.addKey$java_util_Map$SA(root, ["history", "laser", "power"]);
C$.addKey$java_util_Map$SA(root, ["history", "labels"]);
C$.addKey$java_util_Map$SA(root, ["history", "manufacturer"]);
C$.addKey$java_util_Map$SA(root, ["history", "microscope"]);
C$.addKey$java_util_Map$SA(root, ["history", "objective", "type"]);
C$.addKey$java_util_Map$SA(root, ["history", "objective", "immersion"]);
C$.addKey$java_util_Map$SA(root, ["history", "objective", "na"]);
C$.addKey$java_util_Map$SA(root, ["history", "objective", "workingdistance"]);
C$.addKey$java_util_Map$SA(root, ["history", "objective", "magnification"]);
C$.addKey$java_util_Map$SA(root, ["history", "objective", "mag"]);
C$.addKey$java_util_Map$SA(root, ["history", "other", "text"]);
C$.addKey$java_util_Map$SA(root, ["history", "stage", "positionx"]);
C$.addKey$java_util_Map$SA(root, ["history", "stage", "positiony"]);
C$.addKey$java_util_Map$SA(root, ["history", "stage", "positionz"]);
C$.addKey$java_util_Map$SA(root, ["history", "stage_xyzum"]);
C$.addKey$java_util_Map$SA(root, ["history", "step"]);
C$.addKey$java_util_Map$SA(root, ["history", "type"]);
C$.addKey$java_util_Map$SA(root, ["history", "wavelength*"]);
C$.addKey$java_util_Map$SA(root, ["layout", "order"]);
C$.addKey$java_util_Map$SA(root, ["layout", "significant_bits"]);
C$.addKey$java_util_Map$SA(root, ["layout", "sizes"]);
return root;
}, 1);

Clazz.newMeth(C$, 'addKey$java_util_Map$SA', function (parent, keys) {
if (keys.length == 0) {
parent.put$TK$TV("VALID_LEAF", "VALID_LEAF");
} else {
var node=keys[0];
var o=parent.get$O(node);
var child=null;
if (o == null ) {
child=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(1,1));
parent.put$TK$TV(node, child);
} else {
child=o;
}C$.addKey$java_util_Map$SA(child, $I$(15).copyOfRange$TTA$I$I(keys, 1, keys.length));
}}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ICSFormat, "ICSTranslator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractTranslator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'source$', function () {
return Clazz.getClass($I$(16),['add$io_scif_ImageMetadata','createImageMetadata$I','get$I','getAll$','getDatasetName$','getDatasetSize$','getDestinationLocation$','getImageCount$','getSource$','getSourceLocation$','isFiltered$','populateImageMetadata$','setDatasetName$S','setDestinationLocation$org_scijava_io_location_Location','setFiltered$Z','setSource$org_scijava_io_handle_DataHandle','setSourceLocation$org_scijava_io_location_Location']);
});

Clazz.newMeth(C$, 'dest$', function () {
return Clazz.getClass($I$(17));
});

Clazz.newMeth(C$, ['translateImageMetadata$java_util_List$io_scif_formats_ICSFormat_Metadata','translateImageMetadata$java_util_List$TN'], function (source, dest) {
var keyValPairs=null;
if (dest.getKeyValPairs$() == null ) keyValPairs=Clazz.new_(1,{K:"String",V:"String"},$I$(1,1));
 else keyValPairs=dest.getKeyValPairs$();
var numAxes=source.get$I(0).getAxes$().size$();
var order="";
var sizes="";
var units="";
for (var i=0; i < numAxes; i++) {
var axis=source.get$I(0).getAxis$I(i);
var axisType=axis.type$();
if (axisType.equals$O($I$(3).X)) {
order += "x";
} else if (axisType.equals$O($I$(3).Y)) {
order += "y";
} else if (axisType.equals$O($I$(3).Z)) {
order += "z";
} else if (axisType.equals$O($I$(3).TIME)) {
order += "t";
} else if (axisType.equals$O($I$(3).CHANNEL)) {
if (source.get$I(0).isMultichannel$()) {
order="c " + order;
sizes=source.get$I(0).getAxisLength$I(i) + " " + sizes ;
units += axis.unit$() + " ";
continue;
}order += "c";
} else if (axisType.equals$O($I$(4).PHASE)) {
order += "p";
} else if (axisType.equals$O($I$(4).FREQUENCY)) {
order += "f";
} else {
if (axisType.getLabel$().equals$O("bits")) order += "bits";
 else order += "u";
}order += " ";
sizes += source.get$I(0).getAxisLength$I(i) + " ";
units += axis.unit$() + " ";
}
keyValPairs.put$TK$TV("layout sizes", sizes);
keyValPairs.put$TK$TV("layout order", order);
keyValPairs.put$TK$TV("parameter units", units);
keyValPairs.put$TK$TV("layout significant_bits", "" + source.get$I(0).getBitsPerPixel$());
if (source.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(4).LIFETIME) > 1) keyValPairs.put$TK$TV("history type", "time resolved");
var signed=false;
var fPoint=false;
switch (source.get$I(0).getPixelType$()) {
case 0:
case 2:
case 4:
signed=true;
break;
case 1:
case 3:
case 5:
break;
case 6:
case 7:
fPoint=true;
signed=true;
break;
}
keyValPairs.put$TK$TV("representation sign", signed ? "signed" : "");
keyValPairs.put$TK$TV("representation format", fPoint ? "real" : "");
keyValPairs.put$TK$TV("representation compression", "");
var byteOrder;
if (source.get$I(0).isLittleEndian$()) byteOrder=fPoint ? "1" : "0";
 else byteOrder=fPoint ? "0" : "1";
if (source.get$I(0).getBitsPerPixel$() < 32) {
if ("0".equals$O(byteOrder)) byteOrder="1";
 else byteOrder="0";
}keyValPairs.put$TK$TV("representation byte_order", byteOrder);
var axes=source.get$I(0).getAxes$();
var scale="";
for (var i=0; i < axes.size$(); i++) {
scale += new Double(axes.get$I(i).averageScale$D$D(0, 1)).toString() + " ";
}
keyValPairs.put$TK$TV("parameter scale", scale);
dest.setKeyValPairs$java_util_Map(keyValPairs);
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.ICSFormat.ICSTranslator',null,['org.scijava.plugin.Plugin']],['type="io.scif.Translator.class" priority="-100.0" ']]]}

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:40 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
