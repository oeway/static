(function(){var P$=Clazz.newPackage("io.scif.formats"),p$1={},I$=[[0,'java.time.Instant','java.time.ZoneId','java.time.ZoneOffset','net.imagej.axis.DefaultLinearAxis','net.imagej.axis.Axes',['org.scijava.io.handle.DataHandle','.ByteOrder']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ScancoISQFormat", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.AbstractFormat');
C$.$classes$=[['Checker',9],['Metadata',9],['Parser',9],['Reader',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'makeSuffixArray$', function () {
return Clazz.array(String, -1, ["isq"]);
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.ScancoISQFormat',null,['org.scijava.plugin.Plugin']],['type="io.scif.Format.class" name="Scanco ISQ" ']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.ScancoISQFormat, "Checker", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractChecker');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'suffixSufficient$', function () {
return false;
});

Clazz.newMeth(C$, 'isFormat$org_scijava_io_handle_DataHandle', function (stream) {
var firstBytes=Clazz.array(Byte.TYPE, ["CTDATA-HEADER_V1".length$()]);
stream.read$BA(firstBytes);
var fileStart= String.instantialize(firstBytes);
return "CTDATA-HEADER_V1".equals$O(fileStart);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ScancoISQFormat, "Metadata", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractMetadata');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.dataOffset=512;
}, 1);

C$.$fields$=[['D',['voxelWidth','voxelHeight','voxelDepth'],'I',['patientIndex','scannerId','width','height','slices','physicalWidth','physicalHeight','physicalDepth','sliceThickness','sliceSpacing','firstSlicePosition','minDataValue','maxDataValue','muScaling','samples','projections','scanDistance','scannerType','samplingTime','measurementIndex','site','referenceLine','reconstructionAlgorithm','energy','intensity','dataOffset','sliceBytes'],'S',['patientName'],'O',['creationDate','java.time.LocalDate']]]

Clazz.newMeth(C$, 'getCreationDate$', function () {
return this.creationDate;
});

Clazz.newMeth(C$, 'getDataOffset$', function () {
return this.dataOffset;
});

Clazz.newMeth(C$, 'getEnergy$', function () {
return this.energy;
});

Clazz.newMeth(C$, 'getFirstSlicePosition$', function () {
return this.firstSlicePosition;
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.height;
});

Clazz.newMeth(C$, 'getIntensity$', function () {
return this.intensity;
});

Clazz.newMeth(C$, 'getMaxDataValue$', function () {
return this.maxDataValue;
});

Clazz.newMeth(C$, 'getMeasurementIndex$', function () {
return this.measurementIndex;
});

Clazz.newMeth(C$, 'getMinDataValue$', function () {
return this.minDataValue;
});

Clazz.newMeth(C$, 'getMuScaling$', function () {
return this.muScaling;
});

Clazz.newMeth(C$, 'getPatientIndex$', function () {
return this.patientIndex;
});

Clazz.newMeth(C$, 'getPatientName$', function () {
return this.patientName;
});

Clazz.newMeth(C$, 'getPhysicalDepth$', function () {
return this.physicalDepth;
});

Clazz.newMeth(C$, 'getPhysicalHeight$', function () {
return this.physicalHeight;
});

Clazz.newMeth(C$, 'getPhysicalWidth$', function () {
return this.physicalWidth;
});

Clazz.newMeth(C$, 'getProjections$', function () {
return this.projections;
});

Clazz.newMeth(C$, 'getReconstructionAlgorithm$', function () {
return this.reconstructionAlgorithm;
});

Clazz.newMeth(C$, 'getReferenceLine$', function () {
return this.referenceLine;
});

Clazz.newMeth(C$, 'getSamples$', function () {
return this.samples;
});

Clazz.newMeth(C$, 'getSamplingTime$', function () {
return this.samplingTime;
});

Clazz.newMeth(C$, 'getScanDistance$', function () {
return this.scanDistance;
});

Clazz.newMeth(C$, 'getScannerId$', function () {
return this.scannerId;
});

Clazz.newMeth(C$, 'getScannerType$', function () {
return this.scannerType;
});

Clazz.newMeth(C$, 'getSite$', function () {
return this.site;
});

Clazz.newMeth(C$, 'getSliceSpacing$', function () {
return this.sliceSpacing;
});

Clazz.newMeth(C$, 'getSliceThickness$', function () {
return this.sliceThickness;
});

Clazz.newMeth(C$, 'getSlices$', function () {
return this.slices;
});

Clazz.newMeth(C$, 'getWidth$', function () {
return this.width;
});

Clazz.newMeth(C$, 'getSliceBytes$', function () {
return this.sliceBytes;
});

Clazz.newMeth(C$, 'setCreationDate$J', function (vmsTimestamp) {
var unixTimestamp=((vmsTimestamp - 35067168000000000)/10000000|0);
this.creationDate=$I$(1).ofEpochSecond$J(unixTimestamp).atZone$java_time_ZoneId($I$(2).ofOffset$S$java_time_ZoneOffset("", $I$(3).UTC)).toLocalDate$();
});

Clazz.newMeth(C$, 'setDataOffset$I', function (optionalHeaders) {
this.dataOffset=(optionalHeaders + 1) * 512;
});

Clazz.newMeth(C$, 'setEnergy$I', function (energy) {
this.energy=energy;
});

Clazz.newMeth(C$, 'setFirstSlicePosition$I', function (firstSlicePosition) {
this.firstSlicePosition=firstSlicePosition;
});

Clazz.newMeth(C$, 'setHeight$I', function (height) {
this.height=height;
});

Clazz.newMeth(C$, 'setIntensity$I', function (intensity) {
this.intensity=intensity;
});

Clazz.newMeth(C$, 'setMaxDataValue$I', function (maxDataValue) {
this.maxDataValue=maxDataValue;
});

Clazz.newMeth(C$, 'setMeasurementIndex$I', function (measurementIndex) {
this.measurementIndex=measurementIndex;
});

Clazz.newMeth(C$, 'setMinDataValue$I', function (minDataValue) {
this.minDataValue=minDataValue;
});

Clazz.newMeth(C$, 'setMuScaling$I', function (muScaling) {
this.muScaling=muScaling;
});

Clazz.newMeth(C$, 'setPatientIndex$I', function (patientIndex) {
this.patientIndex=patientIndex;
});

Clazz.newMeth(C$, 'setPatientName$S', function (patientName) {
this.patientName=patientName;
});

Clazz.newMeth(C$, 'setPhysicalDepth$I', function (physicalDepth) {
this.physicalDepth=physicalDepth;
});

Clazz.newMeth(C$, 'setPhysicalHeight$I', function (physicalHeight) {
this.physicalHeight=physicalHeight;
});

Clazz.newMeth(C$, 'setPhysicalWidth$I', function (physicalWidth) {
this.physicalWidth=physicalWidth;
});

Clazz.newMeth(C$, 'setProjections$I', function (projections) {
this.projections=projections;
});

Clazz.newMeth(C$, 'setReconstructionAlgorithm$I', function (reconstructionAlgorithm) {
this.reconstructionAlgorithm=reconstructionAlgorithm;
});

Clazz.newMeth(C$, 'setReferenceLine$I', function (referenceLine) {
this.referenceLine=referenceLine;
});

Clazz.newMeth(C$, 'setSamples$I', function (samples) {
this.samples=samples;
});

Clazz.newMeth(C$, 'setSamplingTime$I', function (samplingTime) {
this.samplingTime=samplingTime;
});

Clazz.newMeth(C$, 'setScanDistance$I', function (scanDistance) {
this.scanDistance=scanDistance;
});

Clazz.newMeth(C$, 'setScannerId$I', function (scannerId) {
this.scannerId=scannerId;
});

Clazz.newMeth(C$, 'setScannerType$I', function (scannerType) {
this.scannerType=scannerType;
});

Clazz.newMeth(C$, 'setSite$I', function (site) {
this.site=site;
});

Clazz.newMeth(C$, 'setSliceSpacing$I', function (sliceSpacing) {
this.sliceSpacing=sliceSpacing;
});

Clazz.newMeth(C$, 'setSliceThickness$I', function (sliceThickness) {
this.sliceThickness=sliceThickness;
});

Clazz.newMeth(C$, 'setSlices$I', function (slices) {
this.slices=slices;
});

Clazz.newMeth(C$, 'setWidth$I', function (width) {
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
p$1.setVoxelDimensions.apply(this, []);
metadata.setAxes$net_imagej_axis_CalibratedAxisA([Clazz.new_($I$(4,1).c$$net_imagej_axis_AxisType$S$D,[$I$(5).X, "um", this.voxelWidth]), Clazz.new_($I$(4,1).c$$net_imagej_axis_AxisType$S$D,[$I$(5).Y, "um", this.voxelHeight]), Clazz.new_($I$(4,1).c$$net_imagej_axis_AxisType$S$D,[$I$(5).Z, "um", this.voxelDepth])]);
metadata.setAxisLengths$JA(Clazz.array(Long.TYPE, -1, [this.width, this.height, this.slices]));
p$1.setSliceBytes.apply(this, []);
});

Clazz.newMeth(C$, 'setSliceBytes', function () {
var imageMetadata=this.get$I(0);
if (imageMetadata == null ) {
return;
}var bytesPerPixel=(imageMetadata.getBitsPerPixel$()/8|0);
this.sliceBytes=this.width * this.height * bytesPerPixel ;
}, p$1);

Clazz.newMeth(C$, 'setVoxelDimensions', function () {
this.voxelWidth=1.0 * this.physicalWidth / this.width;
this.voxelHeight=1.0 * this.physicalHeight / this.height;
this.voxelDepth=1.0 * this.physicalDepth / this.slices;
}, p$1);
C$.$getAnn$ = function(){ return [
[['patientIndex','int',null,['io.scif.Field']],['label="Patient index" ']],
  [['scannerId','.',null,['io.scif.Field']],['label="Scanner ID" ']],
  [['creationDate','java.time.LocalDate',null,['io.scif.Field']],['label="Creation date" ']],
  [['width','int',null,['io.scif.Field']],['label="Slice width in pixels" ']],
  [['height','.',null,['io.scif.Field']],['label="Slice height in pixels" ']],
  [['slices','.',null,['io.scif.Field']],['label="Slices in stack" ']],
  [['physicalWidth','.',null,['io.scif.Field']],['label="Physical width (µm)" ']],
  [['physicalHeight','.',null,['io.scif.Field']],['label="Physical height (µm)" ']],
  [['physicalDepth','.',null,['io.scif.Field']],['label="Physical depth (µm)" ']],
  [['sliceThickness','.',null,['io.scif.Field']],['label="Slice thickness (µm)" ']],
  [['sliceSpacing','.',null,['io.scif.Field']],['label="Slice spacing (µm)" ']],
  [['firstSlicePosition','.',null,['io.scif.Field']],['label="Location of first slice in sample (µm)" ']],
  [['minDataValue','.',null,['io.scif.Field']],['label="Minimum value in the data" ']],
  [['maxDataValue','.',null,['io.scif.Field']],['label="Maximum value in the data" ']],
  [['muScaling','.',null,['io.scif.Field']],['label="X-ray linear attenuation value scaling constant" ']],
  [['samples','.',null,['io.scif.Field']],['label="Number of samples" ']],
  [['projections','.',null,['io.scif.Field']],['label="Number of projections" ']],
  [['scanDistance','.',null,['io.scif.Field']],['label="The physical distance the stack covers (µm)" ']],
  [['scannerType','.',null,['io.scif.Field']],['label="Scanner type" ']],
  [['samplingTime','.',null,['io.scif.Field']],['label="Time the sampling took (µs)" ']],
  [['measurementIndex','.',null,['io.scif.Field']],['label="Index of measurement" ']],
  [['site','.',null,['io.scif.Field']],['label="Sample site (coded value)" ']],
  [['referenceLine','.',null,['io.scif.Field']],['label="Length of the reference line (µm)" ']],
  [['reconstructionAlgorithm','.',null,['io.scif.Field']],['label="Reconstruction algorithm (coded value)" ']],
  [['patientName','String',null,['io.scif.Field']],['label="Patient name" ']],
  [['energy','int',null,['io.scif.Field']],['label="Energy (V)" ']],
  [['intensity','.',null,['io.scif.Field']],['label="Intensity (µA)" ']],
  [['dataOffset','.',null,['io.scif.Field']],['label="Starting byte of image data" ']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ScancoISQFormat, "Parser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractParser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['typedParse$org_scijava_io_handle_DataHandle$io_scif_formats_ScancoISQFormat_Metadata$io_scif_config_SCIFIOConfig','typedParse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig'], function (stream, meta, config) {
config.imgOpenerSetComputeMinMax$Z(true);
stream.setOrder$org_scijava_io_handle_DataHandle_ByteOrder($I$(6).LITTLE_ENDIAN);
stream.seek$J(28);
meta.setPatientIndex$I(stream.readInt$());
meta.setScannerId$I(stream.readInt$());
meta.setCreationDate$J(stream.readLong$());
meta.setWidth$I(stream.readInt$());
meta.setHeight$I(stream.readInt$());
meta.setSlices$I(stream.readInt$());
meta.setPhysicalWidth$I(stream.readInt$());
meta.setPhysicalHeight$I(stream.readInt$());
meta.setPhysicalDepth$I(stream.readInt$());
meta.setSliceThickness$I(stream.readInt$());
meta.setSliceSpacing$I(stream.readInt$());
meta.setFirstSlicePosition$I(stream.readInt$());
meta.setMinDataValue$I(stream.readInt$());
meta.setMaxDataValue$I(stream.readInt$());
meta.setMuScaling$I(stream.readInt$());
meta.setSamples$I(stream.readInt$());
meta.setProjections$I(stream.readInt$());
meta.setScanDistance$I(stream.readInt$());
meta.setScannerType$I(stream.readInt$());
meta.setSamplingTime$I(stream.readInt$());
meta.setMeasurementIndex$I(stream.readInt$());
meta.setSite$I(stream.readInt$());
meta.setReferenceLine$I(stream.readInt$());
meta.setReconstructionAlgorithm$I(stream.readInt$());
meta.setPatientName$S(stream.readString$I(40));
meta.setEnergy$I(stream.readInt$());
meta.setIntensity$I(stream.readInt$());
stream.seek$J(508);
meta.setDataOffset$I(stream.readInt$());
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ScancoISQFormat, "Reader", function(){
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
var metadata=this.getMetadata$();
var offset=((metadata.dataOffset + metadata.sliceBytes * planeIndex)|0);
stream.seek$J(offset);
return this.readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$TP(stream, imageIndex, bounds, plane);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:41 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
