(function(){var P$=Clazz.newPackage("io.scif.formats"),p$1={},p$2={},I$=[[0,'java.text.SimpleDateFormat','java.util.Date','StringBuffer','net.imagej.axis.DefaultLinearAxis','net.imagej.axis.Axes']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StratecPQCTFormat", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.AbstractFormat');
C$.$classes$=[['Checker',9],['Metadata',9],['Parser',9],['Reader',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'readShortString$org_scijava_io_handle_DataHandle', function (stream) {
var length=($b$[0] = stream.readByte$(), $b$[0]);
if (length == 0) {
return "";
}return stream.readString$I(length);
}, 1);

Clazz.newMeth(C$, 'generateSuffixes$', function () {
var suffixes=Clazz.array(String, [256]);
var count=0;
for (var i=0; i < 16; i++) {
var hexTens=Integer.toHexString$I(i);
for (var j=0; j < 16; j++) {
var hexOnes=Integer.toHexString$I(j);
var suffix="m" + hexTens + hexOnes ;
suffixes[count]=suffix;
count++;
}
}
return suffixes;
}, 1);

Clazz.newMeth(C$, 'makeSuffixArray$', function () {
return C$.generateSuffixes$();
});
var $b$ = new Int8Array(1);
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.StratecPQCTFormat',null,['org.scijava.plugin.Plugin']],['type="io.scif.Format.class" name="Stratec pQCT" ']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.StratecPQCTFormat, "Checker", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractChecker');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'suffixSufficient$', function () {
return false;
});

Clazz.newMeth(C$, 'isFormat$org_scijava_io_handle_DataHandle', function (stream) {
var fileName=stream.get$().getName$();
if (fileName.length$() < 9) return false;
var mainPart=fileName.substring$I$I(0, 8);
if (!mainPart.matches$S("^[iI]\\d{7}") || stream.length$() < 1609 ) {
return false;
}stream.seek$J(1050);
var deviceName=P$.StratecPQCTFormat.readShortString$org_scijava_io_handle_DataHandle(stream);
return p$1.isDeviceNameValid$S.apply(this, [deviceName]);
});

Clazz.newMeth(C$, 'isDeviceNameValid$S', function (deviceName) {
var lowerCase=deviceName.toLowerCase$();
return lowerCase.length$() > 4 && lowerCase.indexOf$S$I(".typ", deviceName.length$() - 4) >= 0 ;
}, p$1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StratecPQCTFormat, "Metadata", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractMetadata');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.INFO_INDICES=Clazz.array(Integer.TYPE, -1, [662, 743, 824, 905]);
C$.DATE_FORMAT=Clazz.new_($I$(1,1).c$$S,["yyyyMMdd"]);
C$.DEFAULT_DATE=Clazz.new_($I$(2,1).c$$J,[0]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['D',['sliceStart','sliceDistance','resolution','objectSize'],'I',['patientNumber','patientAge'],'H',['height','width','slices','patientMeasurementNumber','topEdge','leftEdge'],'S',['patientName','patientId','measurementInfo','deviceName'],'O',['+patientBirthDate','+measurementDate']]
,['O',['INFO_INDICES','int[]','DATE_FORMAT','java.text.SimpleDateFormat','DEFAULT_DATE','java.util.Date']]]

Clazz.newMeth(C$, 'getPatientName$', function () {
return this.patientName;
});

Clazz.newMeth(C$, 'setPatientName$S', function (patientName) {
this.patientName=patientName;
});

Clazz.newMeth(C$, 'getPatientNumber$', function () {
return this.patientNumber;
});

Clazz.newMeth(C$, 'setPatientNumber$I', function (patientNumber) {
this.patientNumber=patientNumber;
});

Clazz.newMeth(C$, 'getPatientMeasurementNumber$', function () {
return this.patientMeasurementNumber;
});

Clazz.newMeth(C$, 'setPatientMeasurementNumber$H', function (patientMeasurementNumber) {
this.patientMeasurementNumber=patientMeasurementNumber;
});

Clazz.newMeth(C$, 'getPatientBirthDate$', function () {
return this.patientBirthDate;
});

Clazz.newMeth(C$, 'setPatientBirthDate$I', function (patientBirthDate) {
this.patientBirthDate=p$2.parseDate$I.apply(this, [patientBirthDate]);
});

Clazz.newMeth(C$, 'getMeasurementDate$', function () {
return this.measurementDate;
});

Clazz.newMeth(C$, 'setMeasurementDate$I', function (measurementDate) {
this.measurementDate=p$2.parseDate$I.apply(this, [measurementDate]);
});

Clazz.newMeth(C$, 'parseDate$I', function (measurementDate) {
try {
return C$.DATE_FORMAT.parse$S(String.valueOf$I(measurementDate));
} catch (e) {
if (Clazz.exceptionOf(e,"java.text.ParseException")){
return C$.DEFAULT_DATE;
} else {
throw e;
}
}
}, p$2);

Clazz.newMeth(C$, 'getResolution$', function () {
return this.resolution;
});

Clazz.newMeth(C$, 'setResolution$D', function (resolution) {
this.resolution=resolution;
});

Clazz.newMeth(C$, 'getLeftEdge$', function () {
return this.leftEdge;
});

Clazz.newMeth(C$, 'setLeftEdge$H', function (leftEdge) {
this.leftEdge=leftEdge;
});

Clazz.newMeth(C$, 'getTopEdge$', function () {
return this.topEdge;
});

Clazz.newMeth(C$, 'setTopEdge$H', function (topEdge) {
this.topEdge=topEdge;
});

Clazz.newMeth(C$, 'getMeasurementInfo$', function () {
return this.measurementInfo;
});

Clazz.newMeth(C$, 'setMeasurementInfo$org_scijava_io_handle_DataHandle', function (stream) {
var info=Clazz.new_($I$(3,1).c$$I,[320]);
try {
for (var i=0; i < 4; i++) {
stream.seek$J(C$.INFO_INDICES[i]);
var infoBit=P$.StratecPQCTFormat.readShortString$org_scijava_io_handle_DataHandle(stream);
if (!infoBit.isEmpty$()) {
info.append$S(infoBit).append$S("\n");
}}
this.measurementInfo=info.toString();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.measurementInfo="";
} else {
throw e;
}
}
});

Clazz.newMeth(C$, 'getDeviceName$', function () {
return this.deviceName;
});

Clazz.newMeth(C$, 'setDeviceName$S', function (deviceName) {
this.deviceName=deviceName;
});

Clazz.newMeth(C$, 'getPatientId$', function () {
return this.patientId;
});

Clazz.newMeth(C$, 'setPatientId$S', function (patientId) {
this.patientId=patientId;
});

Clazz.newMeth(C$, 'getObjectSize$', function () {
return this.objectSize;
});

Clazz.newMeth(C$, 'setObjectSize$D', function (objectSize) {
this.objectSize=objectSize;
});

Clazz.newMeth(C$, 'setHeight$H', function (height) {
this.height=height;
});

Clazz.newMeth(C$, 'setWidth$H', function (width) {
this.width=width;
});

Clazz.newMeth(C$, 'populateImageMetadata$', function () {
this.createImageMetadata$I(1);
var metadata=this.get$I(0);
metadata.setLittleEndian$Z(true);
metadata.setBitsPerPixel$I(16);
metadata.setPixelType$I(2);
metadata.setOrderCertain$Z(true);
metadata.setPlanarAxisCount$I(2);
metadata.setAxes$net_imagej_axis_CalibratedAxisA([Clazz.new_($I$(4,1).c$$net_imagej_axis_AxisType$S$D,[$I$(5).X, "mm", this.resolution]), Clazz.new_($I$(4,1).c$$net_imagej_axis_AxisType$S$D,[$I$(5).Y, "mm", this.resolution])]);
metadata.setAxisLengths$JA(Clazz.array(Long.TYPE, -1, [this.width, this.height]));
});

Clazz.newMeth(C$, 'getWidth$', function () {
return this.width;
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.height;
});

Clazz.newMeth(C$, 'getPatientAge$', function () {
return this.patientAge;
});

Clazz.newMeth(C$, 'setPatientAge$I', function (patientAge) {
this.patientAge=patientAge;
});

Clazz.newMeth(C$, 'setSlices$H', function (slices) {
this.slices=($s$[0] = Math.max(1, slices), $s$[0]);
});

Clazz.newMeth(C$, 'getSlices$', function () {
return this.slices;
});

Clazz.newMeth(C$, 'setSliceStart$D', function (sliceStart) {
this.sliceStart=sliceStart;
});

Clazz.newMeth(C$, 'setSliceDistance$D', function (sliceDistance) {
this.sliceDistance=sliceDistance;
});

Clazz.newMeth(C$, 'getSliceStart$', function () {
return this.sliceStart;
});

Clazz.newMeth(C$, 'getSliceDistance$', function () {
return this.sliceDistance;
});
var $s$ = new Int16Array(1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StratecPQCTFormat, "Parser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractParser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['typedParse$org_scijava_io_handle_DataHandle$io_scif_formats_StratecPQCTFormat_Metadata$io_scif_config_SCIFIOConfig','typedParse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig'], function (stream, meta, config) {
config.imgOpenerSetComputeMinMax$Z(true);
stream.setLittleEndian$Z(true);
stream.seek$J(12);
meta.setResolution$D(stream.readDouble$());
stream.seek$J(30);
meta.setSlices$H(stream.readShort$());
meta.setSliceStart$D(stream.readDouble$());
meta.setSliceDistance$D(stream.readDouble$());
stream.seek$J(318);
meta.setObjectSize$D(stream.readDouble$());
meta.setMeasurementInfo$org_scijava_io_handle_DataHandle(stream);
stream.seek$J(986);
meta.setMeasurementDate$I(stream.readInt$());
stream.seek$J(1050);
meta.setDeviceName$S(P$.StratecPQCTFormat.readShortString$org_scijava_io_handle_DataHandle(stream));
stream.seek$J(1085);
meta.setPatientMeasurementNumber$H(stream.readShort$());
meta.setPatientNumber$I(stream.readInt$());
meta.setPatientBirthDate$I(stream.readInt$());
meta.setPatientAge$I(stream.readInt$());
meta.setPatientName$S(P$.StratecPQCTFormat.readShortString$org_scijava_io_handle_DataHandle(stream));
stream.seek$J(1282);
meta.setPatientId$S(P$.StratecPQCTFormat.readShortString$org_scijava_io_handle_DataHandle(stream));
stream.seek$J(1525);
meta.setLeftEdge$H(stream.readShort$());
meta.setTopEdge$H(stream.readShort$());
meta.setWidth$H(stream.readShort$());
meta.setHeight$H(stream.readShort$());
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.StratecPQCTFormat, "Reader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.ByteArrayReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'createDomainArray$', function () {
return Clazz.array(String, -1, ["Medical Imaging"]);
});

Clazz.newMeth(C$, ['openPlane$I$J$io_scif_ByteArrayPlane$net_imglib2_Interval$io_scif_config_SCIFIOConfig','openPlane$I$J$TP$net_imglib2_Interval$io_scif_config_SCIFIOConfig'], function (imageIndex, planeIndex, plane, bounds, config) {
var stream=this.getHandle$();
stream.seek$J(1609);
return this.readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$TP(stream, imageIndex, bounds, plane);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:41 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
