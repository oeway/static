(function(){var P$=Clazz.newPackage("io.scif.formats"),p$1={},I$=[[0,'java.util.ArrayList','net.imglib2.display.ColorTable8','net.imglib2.display.ColorTable16','java.util.Arrays','net.imagej.axis.Axes','io.scif.config.SCIFIOConfig','io.scif.util.FormatTools',['io.scif.formats.DICOMFormat','.DICOMUtils'],'io.scif.formats.DICOMFormat','io.scif.MetadataLevel','io.scif.codec.CodecOptions','io.scif.codec.PackbitsCodec','org.scijava.io.location.Location','java.util.HashMap','io.scif.FilePattern',['org.scijava.io.handle.DataHandle','.ByteOrder'],'org.scijava.util.DigestUtils','io.scif.codec.JPEGCodec','io.scif.codec.JPEG2000Codec',['io.scif.formats.DICOMFormat','.DICOMTag'],'org.scijava.util.Bytes','io.scif.formats.dicom.DICOMDictionary']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DICOMFormat", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.AbstractFormat');
C$.$classes$=[['Metadata',9],['Checker',9],['Parser',9],['Reader',9],['DICOMUtils',10],['DICOMTag',9]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.TYPES=Clazz.new_($I$(22,1));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['TYPES','io.scif.formats.dicom.DICOMDictionary']]]

Clazz.newMeth(C$, 'makeSuffixArray$', function () {
return Clazz.array(String, -1, ["dic", "dcm", "dicom", "jp2", "j2ki", "j2kr", "raw", "ima"]);
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.DICOMFormat',null,['org.scijava.plugin.Plugin']],['type="io.scif.Format.class" name="DICOM" ']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.DICOMFormat, "Metadata", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractMetadata', 'io.scif.HasColorTable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.lut=null;
this.shortLut=null;
this.offsets=null;
this.isJP2K=false;
this.isJPEG=false;
this.isRLE=false;
this.isDeflate=false;
this.oddLocations=false;
this.imagesPerFile=0;
this.rescaleSlope=1.0;
this.rescaleIntercept=0.0;
this.inverted=false;
this.companionFiles=Clazz.new_(1,{E:"org.scijava.io.location.BrowsableLocation"},$I$(1,1));
}, 1);

C$.$fields$=[['Z',['isJP2K','isJPEG','isRLE','isDeflate','oddLocations','inverted'],'D',['rescaleSlope','rescaleIntercept'],'I',['maxPixelValue','imagesPerFile','originalSeries'],'S',['pixelSizeX','pixelSizeY','date','time','imageType','originalDate','originalTime','originalInstance'],'O',['lut','byte[][]','shortLut','short[][]','lut8','net.imglib2.display.ColorTable8','lut16','net.imglib2.display.ColorTable16','offsets','long[]','fileList','java.util.Map','pixelSizeZ','Double','companionFiles','java.util.List']]]

Clazz.newMeth(C$, 'getOffsets$', function () {
return this.offsets;
});

Clazz.newMeth(C$, 'setOffsets$JA', function (offsets) {
this.offsets=offsets;
});

Clazz.newMeth(C$, 'getRescaleSlope$', function () {
return this.rescaleSlope;
});

Clazz.newMeth(C$, 'setRescaleSlope$D', function (rescaleSlope) {
this.rescaleSlope=rescaleSlope;
});

Clazz.newMeth(C$, 'getRescaleIntercept$', function () {
return this.rescaleIntercept;
});

Clazz.newMeth(C$, 'setRescaleIntercept$D', function (rescaleIntercept) {
this.rescaleIntercept=rescaleIntercept;
});

Clazz.newMeth(C$, 'getPixelSizeX$', function () {
return this.pixelSizeX;
});

Clazz.newMeth(C$, 'setPixelSizeX$S', function (pixelSizeX) {
this.pixelSizeX=pixelSizeX;
});

Clazz.newMeth(C$, 'getPixelSizeY$', function () {
return this.pixelSizeY;
});

Clazz.newMeth(C$, 'setPixelSizeY$S', function (pixelSizeY) {
this.pixelSizeY=pixelSizeY;
});

Clazz.newMeth(C$, 'getPixelSizeZ$', function () {
return this.pixelSizeZ;
});

Clazz.newMeth(C$, 'setPixelSizeZ$Double', function (pixelSizeZ) {
this.pixelSizeZ=pixelSizeZ;
});

Clazz.newMeth(C$, 'isInverted$', function () {
return this.inverted;
});

Clazz.newMeth(C$, 'setInverted$Z', function (inverted) {
this.inverted=inverted;
});

Clazz.newMeth(C$, 'isJP2K$', function () {
return this.isJP2K;
});

Clazz.newMeth(C$, 'setJP2K$Z', function (isJP2K) {
this.isJP2K=isJP2K;
});

Clazz.newMeth(C$, 'isJPEG$', function () {
return this.isJPEG;
});

Clazz.newMeth(C$, 'setJPEG$Z', function (isJPEG) {
this.isJPEG=isJPEG;
});

Clazz.newMeth(C$, 'isRLE$', function () {
return this.isRLE;
});

Clazz.newMeth(C$, 'setRLE$Z', function (isRLE) {
this.isRLE=isRLE;
});

Clazz.newMeth(C$, 'isDeflate$', function () {
return this.isDeflate;
});

Clazz.newMeth(C$, 'setDeflate$Z', function (isDeflate) {
this.isDeflate=isDeflate;
});

Clazz.newMeth(C$, 'isOddLocations$', function () {
return this.oddLocations;
});

Clazz.newMeth(C$, 'setOddLocations$Z', function (oddLocations) {
this.oddLocations=oddLocations;
});

Clazz.newMeth(C$, 'getMaxPixelValue$', function () {
return this.maxPixelValue;
});

Clazz.newMeth(C$, 'setMaxPixelValue$I', function (maxPixelValue) {
this.maxPixelValue=maxPixelValue;
});

Clazz.newMeth(C$, 'getImagesPerFile$', function () {
return this.imagesPerFile;
});

Clazz.newMeth(C$, 'setImagesPerFile$I', function (imagesPerFile) {
this.imagesPerFile=imagesPerFile;
});

Clazz.newMeth(C$, 'getFileList$', function () {
return this.fileList;
});

Clazz.newMeth(C$, 'setFileList$java_util_Map', function (fileList) {
this.fileList=fileList;
});

Clazz.newMeth(C$, 'getDate$', function () {
return this.date;
});

Clazz.newMeth(C$, 'setDate$S', function (date) {
this.date=date;
});

Clazz.newMeth(C$, 'getTime$', function () {
return this.time;
});

Clazz.newMeth(C$, 'setTime$S', function (time) {
this.time=time;
});

Clazz.newMeth(C$, 'getImageType$', function () {
return this.imageType;
});

Clazz.newMeth(C$, 'setImageType$S', function (imageType) {
this.imageType=imageType;
});

Clazz.newMeth(C$, 'getOriginalDate$', function () {
return this.originalDate;
});

Clazz.newMeth(C$, 'setOriginalDate$S', function (originalDate) {
this.originalDate=originalDate;
});

Clazz.newMeth(C$, 'getOriginalTime$', function () {
return this.originalTime;
});

Clazz.newMeth(C$, 'setOriginalTime$S', function (originalTime) {
this.originalTime=originalTime;
});

Clazz.newMeth(C$, 'getOriginalInstance$', function () {
return this.originalInstance;
});

Clazz.newMeth(C$, 'setOriginalInstance$S', function (originalInstance) {
this.originalInstance=originalInstance;
});

Clazz.newMeth(C$, 'getOriginalSeries$', function () {
return this.originalSeries;
});

Clazz.newMeth(C$, 'setOriginalSeries$I', function (originalSeries) {
this.originalSeries=originalSeries;
});

Clazz.newMeth(C$, 'getCompanionFiles$', function () {
return this.companionFiles;
});

Clazz.newMeth(C$, 'setCompanionFiles$java_util_List', function (companionFiles) {
this.companionFiles=companionFiles;
});

Clazz.newMeth(C$, ['getColorTable$I$J','getColorTable$'], function (imageIndex, planeIndex) {
var pixelType=this.get$I(0).getPixelType$();
switch (pixelType) {
case 0:
case 1:
if (this.lut8 == null ) {
if (this.isInverted$()) {
if (this.lut == null ) {
this.lut=C$.createInvertedLut8$();
} else {
C$.invertLut8$BAA(this.lut);
}}if (this.lut != null ) {
this.lut8=Clazz.new_($I$(2,1).c$$BAA,[this.lut]);
}}return this.lut8;
case 2:
case 3:
if (this.lut16 == null ) {
if (this.isInverted$()) {
if (this.shortLut == null ) {
this.shortLut=C$.createInvertedLut16$();
} else {
C$.invertLut16$HAA(this.shortLut);
}}if (this.shortLut != null ) {
this.lut16=Clazz.new_($I$(3,1).c$$HAA,[this.shortLut]);
}}return this.lut16;
}
return null;
});

Clazz.newMeth(C$, 'createInvertedLut8$', function () {
var lut=Clazz.array(Byte.TYPE, [3, 256]);
for (var i=0; i < lut.length; i++) {
for (var j=0; j < lut[i].length; j++) {
lut[i][lut[i].length - 1 - j ]=(((j & 255)|0)|0);
}
}
return lut;
}, 1);

Clazz.newMeth(C$, 'invertLut8$BAA', function (lut) {
for (var i=0; i < lut.length; i++) {
for (var j=0; j < lut[i].length; j++) {
var v0=($b$[0] = lut[i][j], $b$[0]);
var v1=($b$[0] = lut[i][lut[i].length - 1 - j ], $b$[0]);
lut[i][i]=(v1|0);
lut[i][lut[i].length - 1 - j ]=(v0|0);
}
}
}, 1);

Clazz.newMeth(C$, 'createInvertedLut16$', function () {
var lut=Clazz.array(Short.TYPE, [3, 65536]);
for (var i=0; i < lut.length; i++) {
for (var j=0; j < lut[i].length; j++) {
lut[i][lut[i].length - 1 - j ]=((j & 65535)|0);
}
}
return lut;
}, 1);

Clazz.newMeth(C$, 'invertLut16$HAA', function (lut) {
for (var i=0; i < lut.length; i++) {
for (var j=0; j < lut[i].length; j++) {
var v0=lut[i][j];
var v1=lut[i][lut[i].length - 1 - j ];
lut[i][i]=v1;
lut[i][lut[i].length - 1 - j ]=v0;
}
}
}, 1);

Clazz.newMeth(C$, 'populateImageMetadata$', function () {
this.log$().info$O("Populating metadata");
var seriesCount=this.fileList.size$();
var keys=this.fileList.keySet$().toArray$TTA(Clazz.array(Integer, [0]));
$I$(4).sort$OA(keys);
for (var i=0; i < seriesCount; i++) {
this.get$I(i).setAxisTypes$net_imagej_axis_AxisTypeA([$I$(5).X, $I$(5).Y]);
var sizeZ=0;
if (seriesCount == 1) {
sizeZ=this.getOffsets$().length * this.fileList.get$O(keys[i]).size$();
this.get$I(i).setMetadataComplete$Z(true);
this.get$I(i).setFalseColor$Z(false);
if (this.isRLE) {
this.get$I(i).setAxisTypes$net_imagej_axis_AxisTypeA([$I$(5).X, $I$(5).Y, $I$(5).CHANNEL]);
}if (this.get$I(i).getAxisLength$net_imagej_axis_AxisType($I$(5).CHANNEL) > 1) {
this.get$I(i).setPlanarAxisCount$I(3);
} else {
this.get$I(i).setPlanarAxisCount$I(2);
}} else {
try {
var p=this.getFormat$().createParser$();
var m=p.parse$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(this.fileList.get$O(keys[i]).get$I(0), Clazz.new_($I$(6,1)).groupableSetGroupFiles$Z(false));
this.add$io_scif_ImageMetadata(m.get$I(0));
sizeZ*=this.fileList.get$O(keys[i]).size$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"java.io.IOException")){
var e = e$$;
{
this.log$().error$O$Throwable("Error creating Metadata from DICOM companion files.", e);
}
} else if (Clazz.exceptionOf(e$$,"io.scif.FormatException")){
var e = e$$;
{
this.log$().error$O$Throwable("Error creating Metadata from DICOM companion files.", e);
}
} else {
throw e$$;
}
}
}this.get$I(i).setAxisLength$net_imagej_axis_AxisType$J($I$(5).Z, sizeZ);
}
});

Clazz.newMeth(C$, 'close$Z', function (fileOnly) {
C$.superclazz.prototype.close$Z.apply(this, [fileOnly]);
if (!fileOnly) {
this.oddLocations=false;
this.isJPEG=this.isJP2K=this.isRLE=this.isDeflate=false;
this.lut=null;
this.offsets=null;
this.shortLut=null;
this.maxPixelValue=0;
this.rescaleSlope=1.0;
this.rescaleIntercept=0.0;
this.pixelSizeX=this.pixelSizeY=null;
this.pixelSizeZ=null;
this.imagesPerFile=0;
this.fileList=null;
this.inverted=false;
this.date=this.time=this.imageType=null;
this.originalDate=this.originalTime=this.originalInstance=null;
this.originalSeries=0;
}});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DICOMFormat, "Checker", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractChecker');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.DICOM_SUFFIXES=Clazz.array(String, -1, ["dic", "dcm", "dicom", "j2ki", "j2kr"]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['DICOM_SUFFIXES','String[]']]]

Clazz.newMeth(C$, 'suffixNecessary$', function () {
return false;
});

Clazz.newMeth(C$, 'suffixSufficient$', function () {
return false;
});

Clazz.newMeth(C$, 'isFormat$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig', function (location, config) {
if (!(Clazz.instanceOf(location, "org.scijava.io.location.BrowsableLocation"))) return false;
if ($I$(7).checkSuffix$S$SA(location.getName$(), C$.DICOM_SUFFIXES)) return true;
return C$.superclazz.prototype.isFormat$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig.apply(this, [location, config]);
});

Clazz.newMeth(C$, 'isFormat$org_scijava_io_handle_DataHandle', function (handle) {
if (!(Clazz.instanceOf(handle.get$(), "org.scijava.io.location.BrowsableLocation"))) return false;
var blockLen=2048;
if (!$I$(7).validStream$org_scijava_io_handle_DataHandle$I$Z(handle, 2048, true)) return false;
handle.seek$J(128);
if (handle.readString$I(4).equals$O("DICM")) return true;
handle.seek$J(0);
try {
var tag=$I$(8).getNextTag$org_scijava_io_handle_DataHandle(handle).get$();
return $I$(9).TYPES.has$I(tag);
} catch (e) {
if (Clazz.exceptionOf(e,"NullPointerException") || Clazz.exceptionOf(e,"io.scif.FormatException")){
return false;
} else {
throw e;
}
}
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DICOMFormat, "Parser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractParser');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['codecService','io.scif.codec.CodecService','dataHandleService','org.scijava.io.handle.DataHandleService','filePatternService','io.scif.services.FilePatternService']]]

Clazz.newMeth(C$, 'fileGroupOption$org_scijava_io_location_Location', function (id) {
return 1;
});

Clazz.newMeth(C$, ['typedParse$org_scijava_io_handle_DataHandle$io_scif_formats_DICOMFormat_Metadata$io_scif_config_SCIFIOConfig','typedParse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig'], function (stream, meta, config) {
meta.createImageMetadata$I(1);
stream.setLittleEndian$Z(true);
var iMeta=meta.get$I(0);
if (!(Clazz.instanceOf(stream.get$(), "org.scijava.io.location.BrowsableLocation"))) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["DICOM Format requires a BrowsableLocation"]);
}var companionFiles=Clazz.new_(1,{E:"org.scijava.io.location.BrowsableLocation"},$I$(1,1));
p$1.attachCompanionFiles$java_util_List.apply(this, [companionFiles]);
meta.setCompanionFiles$java_util_List(companionFiles);
var location=0;
var isJP2K=false;
var isJPEG=false;
var isRLE=false;
var isDeflate=false;
var oddLocations=false;
var maxPixelValue=-1;
var imagesPerFile=0;
var bigEndianTransferSyntax=false;
var offsets=null;
var sizeX=0;
var sizeY=0;
var bitsPerPixel=0;
var interleaved;
this.log$().info$O("Verifying DICOM format");
var level=config.parserGetLevel$();
this.getSource$().seek$J(128);
if ("DICM".equals$O(this.getSource$().readString$I(4))) {
if (level !== $I$(10).MINIMUM ) {
this.getSource$().seek$J(0);
meta.getTable$().put$TK$TV("Header information", this.getSource$().readString$I(128));
this.getSource$().skipBytes$I(4);
}location=128;
} else this.getSource$().seek$J(0);
this.log$().info$O("Reading tags");
var baseOffset=0;
var decodingTags=true;
var signed=false;
while (decodingTags){
if (this.getSource$().offset$() + 4 >= this.getSource$().length$()) {
break;
}this.log$().debug$O("Reading tag from " + this.getSource$().offset$());
var tag=$I$(8).getNextTag$org_scijava_io_handle_DataHandle$Z$Z(this.getSource$(), bigEndianTransferSyntax, oddLocations);
iMeta.setLittleEndian$Z(tag.isLittleEndian$());
if (tag.getElementLength$() <= 0) continue;
oddLocations=(location & 1) != 0;
this.log$().debug$O("  tag=" + tag.get$() + " len=" + tag.getElementLength$() + " fp=" + this.getSource$().offset$() );
var s=null;
var ss;
switch (tag.get$()) {
case 131088:
s=this.getSource$().readString$I(tag.getElementLength$());
p$1.addInfo$io_scif_formats_DICOMFormat_Metadata$io_scif_formats_DICOMFormat_DICOMTag$S.apply(this, [meta, tag, s]);
if (s.startsWith$S("1.2.840.10008.1.2.4.9")) isJP2K=true;
 else if (s.startsWith$S("1.2.840.10008.1.2.4")) isJPEG=true;
 else if (s.startsWith$S("1.2.840.10008.1.2.5")) isRLE=true;
 else if (s.equals$O("1.2.8.10008.1.2.1.99")) isDeflate=true;
 else if (s.contains$CharSequence("1.2.4") || s.contains$CharSequence("1.2.5") ) {
throw Clazz.new_(Clazz.load('io.scif.UnsupportedCompressionException').c$$S,["Sorry, compression type " + s + " not supported" ]);
}if (s.contains$CharSequence("1.2.840.10008.1.2.2")) {
bigEndianTransferSyntax=true;
}break;
case 2621448:
s=this.getSource$().readString$I(tag.getElementLength$());
p$1.addInfo$io_scif_formats_DICOMFormat_Metadata$io_scif_formats_DICOMFormat_DICOMTag$S.apply(this, [meta, tag, s]);
var frames=Double.parseDouble$S(s);
if (frames > 1.0 ) imagesPerFile=(frames|0);
break;
case 2621442:
p$1.addInfo$io_scif_formats_DICOMFormat_Metadata$io_scif_formats_DICOMFormat_DICOMTag$I.apply(this, [meta, tag, this.getSource$().readShort$()]);
break;
case 2621446:
var configuration=this.getSource$().readShort$();
interleaved=configuration == 0;
if (interleaved) {
iMeta.setAxisTypes$net_imagej_axis_AxisTypeA([$I$(5).CHANNEL, $I$(5).X, $I$(5).Y]);
iMeta.setPlanarAxisCount$I(3);
}p$1.addInfo$io_scif_formats_DICOMFormat_Metadata$io_scif_formats_DICOMFormat_DICOMTag$I.apply(this, [meta, tag, configuration]);
break;
case 2621456:
if (sizeY == 0) {
sizeY=this.getSource$().readShort$();
iMeta.addAxis$net_imagej_axis_AxisType$J($I$(5).Y, sizeY);
} else this.getSource$().skipBytes$I(2);
p$1.addInfo$io_scif_formats_DICOMFormat_Metadata$io_scif_formats_DICOMFormat_DICOMTag$I.apply(this, [meta, tag, sizeY]);
break;
case 2621457:
if (sizeX == 0) {
sizeX=this.getSource$().readShort$();
iMeta.addAxis$net_imagej_axis_AxisType$J($I$(5).X, sizeX);
} else this.getSource$().skipBytes$I(2);
p$1.addInfo$io_scif_formats_DICOMFormat_Metadata$io_scif_formats_DICOMFormat_DICOMTag$I.apply(this, [meta, tag, sizeX]);
break;
case 2621444:
case 2621488:
case 1573000:
case 2625618:
case 2625616:
case 2625619:
p$1.addInfo$io_scif_formats_DICOMFormat_Metadata$io_scif_formats_DICOMFormat_DICOMTag$S.apply(this, [meta, tag, this.getSource$().readString$I(tag.getElementLength$())]);
break;
case 2621696:
if (bitsPerPixel == 0) bitsPerPixel=this.getSource$().readShort$();
 else this.getSource$().skipBytes$I(2);
p$1.addInfo$io_scif_formats_DICOMFormat_Metadata$io_scif_formats_DICOMFormat_DICOMTag$I.apply(this, [meta, tag, bitsPerPixel]);
break;
case 2621699:
ss=this.getSource$().readShort$();
signed=ss == 1;
p$1.addInfo$io_scif_formats_DICOMFormat_Metadata$io_scif_formats_DICOMFormat_DICOMTag$I.apply(this, [meta, tag, ss]);
break;
case 2625601:
ss=this.getSource$().readShort$();
p$1.addInfo$io_scif_formats_DICOMFormat_Metadata$io_scif_formats_DICOMFormat_DICOMTag$I.apply(this, [meta, tag, ss]);
break;
case 537262910:
case 2625617:
var t=this.getSource$().readString$I(tag.getElementLength$());
if (t.trim$().length$() == 0) maxPixelValue=-1;
 else {
try {
maxPixelValue= new Double(t.trim$()).intValue$();
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
maxPixelValue=-1;
} else {
throw e;
}
}
}p$1.addInfo$io_scif_formats_DICOMFormat_Metadata$io_scif_formats_DICOMFormat_DICOMTag$S.apply(this, [meta, tag, t]);
break;
case 2145386512:
case -73728:
case 268361728:
if (tag.getElementLength$() != 0) {
baseOffset=this.getSource$().offset$();
p$1.addInfo$io_scif_formats_DICOMFormat_Metadata$io_scif_formats_DICOMFormat_DICOMTag$I.apply(this, [meta, tag, location]);
decodingTags=false;
} else p$1.addInfo$io_scif_formats_DICOMFormat_Metadata$io_scif_formats_DICOMFormat_DICOMTag$S.apply(this, [meta, tag, null]);
break;
case 2139619344:
if (tag.getElementLength$() != 0) {
baseOffset=location + 4;
decodingTags=false;
}break;
case 2145386496:
this.getSource$().skipBytes$I(tag.getElementLength$());
break;
case 0:
this.getSource$().seek$J(this.getSource$().offset$() - 4);
break;
default:
var oldfp=this.getSource$().offset$();
p$1.addInfo$io_scif_formats_DICOMFormat_Metadata$io_scif_formats_DICOMFormat_DICOMTag$S.apply(this, [meta, tag, s]);
this.getSource$().seek$J(oldfp + tag.getElementLength$());
}
if (this.getSource$().offset$() >= (this.getSource$().length$() - 4)) {
decodingTags=false;
}}
if (imagesPerFile == 0) imagesPerFile=1;
var bpp=bitsPerPixel;
while (bitsPerPixel % 8 != 0)bitsPerPixel++;

if (bitsPerPixel == 24 || bitsPerPixel == 48 ) {
bitsPerPixel=(bitsPerPixel/(3)|0);
bpp=(bpp/(3)|0);
}var pixelType=$I$(7).pixelTypeFromBytes$I$Z$Z((bitsPerPixel/8|0), signed, false);
iMeta.setBitsPerPixel$I(bpp);
iMeta.setPixelType$I(pixelType);
var bytesPerPixel=$I$(7).getBytesPerPixel$I(pixelType);
var planeSize=sizeX * sizeY * ((meta.getColorTable$I$J(0, 0) == null  ? meta.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(5).CHANNEL) : 1)|0) * bytesPerPixel ;
meta.setJP2K$Z(isJP2K);
meta.setJPEG$Z(isJPEG);
meta.setImagesPerFile$I(imagesPerFile);
meta.setRLE$Z(isRLE);
meta.setDeflate$Z(isDeflate);
meta.setMaxPixelValue$I(maxPixelValue);
meta.setOddLocations$Z(oddLocations);
this.log$().info$O("Calculating image offsets");
this.getSource$().seek$J(baseOffset - 12);
var len=this.getSource$().readInt$();
if (len >= 0 && len + this.getSource$().offset$() < this.getSource$().length$() ) {
this.getSource$().skipBytes$I(len);
var check=this.getSource$().readShort$() & 65535;
if (check == 65534) {
baseOffset=this.getSource$().offset$() + 2;
}}offsets=Clazz.array(Long.TYPE, [imagesPerFile]);
meta.setOffsets$JA(offsets);
for (var i=0; i < imagesPerFile; i++) {
if (isRLE) {
if (i == 0) this.getSource$().seek$J(baseOffset);
 else {
this.getSource$().seek$J(offsets[i - 1]);
var options=Clazz.new_($I$(11,1));
options.maxBytes=(planeSize/bytesPerPixel|0);
for (var q=0; q < bytesPerPixel; q++) {
var codec=this.codecService.getCodec$Class(Clazz.getClass($I$(12)));
codec.decompress$org_scijava_io_handle_DataHandle$io_scif_codec_CodecOptions(this.getSource$(), options);
while (this.getSource$().read$() == 0){
}
this.getSource$().seek$J(this.getSource$().offset$() - 1);
}
}this.getSource$().skipBytes$I(i == 0 ? 64 : 53);
while (this.getSource$().read$() == 0){
}
offsets[i]=this.getSource$().offset$() - 1;
} else if (isJPEG || isJP2K ) {
if (i == 0) offsets[i]=baseOffset;
 else offsets[i]=offsets[i - 1] + 3;
var secondCheck=($b$[0] = isJPEG ? (-40|0) : (79|0), $b$[0]);
this.getSource$().seek$J(offsets[i]);
var buf=Clazz.array(Byte.TYPE, [8192]);
var n=this.getSource$().read$BA(buf);
var found=false;
while (!found){
for (var q=0; q < n - 2; q++) {
if (buf[q] == -1 && buf[q + 1] == secondCheck  && buf[q + 2] == -1 ) {
if (isJPEG || (isJP2K && buf[q + 3] == 81 ) ) {
found=true;
offsets[i]=this.getSource$().offset$() + q - n;
break;
}}}
if (!found) {
for (var q=0; q < 4; q++) {
buf[q]=(buf[buf.length + q - 4]|0);
}
n=this.getSource$().read$BA$I$I(buf, 4, buf.length - 4) + 4;
}}
} else offsets[i]=baseOffset + planeSize * i;
}
p$1.makeFileList$io_scif_config_SCIFIOConfig.apply(this, [config]);
});

Clazz.newMeth(C$, 'getImageUsedFiles$I$Z', function (imageIndex, noPixels) {
$I$(7).assertId$O$Z$I(this.getSource$(), true, 1);
if (noPixels || this.getMetadata$().getFileList$() == null  ) return null;
var keys=this.getMetadata$().getFileList$().keySet$().toArray$TTA(Clazz.array(Integer, [0]));
$I$(4).sort$OA(keys);
var files=this.getMetadata$().getFileList$().get$O(keys[imageIndex]);
for (var f, $f = this.getMetadata$().getCompanionFiles$().iterator$(); $f.hasNext$()&&((f=($f.next$())),1);) {
files.add$TE(f);
}
return files == null  ? null : files.toArray$TTA(Clazz.array($I$(13), [files.size$()]));
});

Clazz.newMeth(C$, 'makeFileList$io_scif_config_SCIFIOConfig', function (config) {
this.log$().info$O("Building file list");
if (this.getMetadata$().getFileList$() == null  && this.getMetadata$().getOriginalInstance$() != null   && this.getMetadata$().getOriginalDate$() != null   && this.getMetadata$().getOriginalTime$() != null   && config.groupableIsGroupFiles$() ) {
var fileList=Clazz.new_(1,{K:"Integer",V:"java.util.List"},$I$(14,1));
var s=new Integer(this.getMetadata$().getOriginalSeries$());
fileList.put$TK$TV(s, Clazz.new_(1,{E:"org.scijava.io.location.BrowsableLocation"},$I$(1,1)));
var instanceNumber=Integer.parseInt$S(this.getMetadata$().getOriginalInstance$()) - 1;
if (instanceNumber == 0) fileList.get$O(s).add$TE(this.asBrowsableLocation$org_scijava_io_handle_DataHandle(this.getSource$()));
 else {
while (instanceNumber > fileList.get$O(s).size$()){
fileList.get$O(s).add$TE(null);
}
fileList.get$O(s).add$TE(this.asBrowsableLocation$org_scijava_io_handle_DataHandle(this.getSource$()));
}var currentFile=this.asBrowsableLocation$org_scijava_io_handle_DataHandle(this.getSource$());
var directory=currentFile.parent$();
p$1.scanDirectory$java_util_Map$org_scijava_io_location_BrowsableLocation$Z.apply(this, [fileList, directory, false]);
directory=directory.parent$();
var subdirs=directory.children$();
if (subdirs != null ) {
for (var subdir, $subdir = subdirs.iterator$(); $subdir.hasNext$()&&((subdir=($subdir.next$())),1);) {
if (!subdir.isDirectory$()) continue;
p$1.scanDirectory$java_util_Map$org_scijava_io_location_BrowsableLocation$Z.apply(this, [fileList, subdir, true]);
}
}var keys=fileList.keySet$().toArray$TTA(Clazz.array(Integer, [0]));
$I$(4).sort$OA(keys);
for (var key, $key = 0, $$key = keys; $key<$$key.length&&((key=($$key[$key])),1);$key++) {
for (var j=0; j < fileList.get$O(key).size$(); j++) {
if (fileList.get$O(key).get$I(j) == null ) {
fileList.get$O(key).remove$I(j);
j--;
}}
}
this.getMetadata$().setFileList$java_util_Map(fileList);
} else if (this.getMetadata$().getFileList$() == null ) {
var fileList=Clazz.new_(1,{K:"Integer",V:"java.util.List"},$I$(14,1));
var locationList=Clazz.new_(1,{E:"org.scijava.io.location.BrowsableLocation"},$I$(1,1));
locationList.add$TE(this.asBrowsableLocation$org_scijava_io_handle_DataHandle(this.getSource$()));
fileList.put$TK$TV(new Integer(0), locationList);
this.getMetadata$().setFileList$java_util_Map(fileList);
}}, p$1);

Clazz.newMeth(C$, 'attachCompanionFiles$java_util_List', function (companionFiles) {
var parent=this.asBrowsableLocation$org_scijava_io_handle_DataHandle(this.getSource$()).parent$();
var grandparent=parent.parent$();
var mifSibling=parent.sibling$S(parent.getName$() + ".mif");
if (this.dataHandleService.exists$org_scijava_io_location_Location(mifSibling)) {
var list=grandparent.children$();
for (var f, $f = list.iterator$(); $f.hasNext$()&&((f=($f.next$())),1);) {
if (!f.isDirectory$()) {
companionFiles.add$TE(f);
}}
}}, p$1);

Clazz.newMeth(C$, 'scanDirectory$java_util_Map$org_scijava_io_location_BrowsableLocation$Z', function (fileList, dir, checkSeries) {
var currentFile=this.asBrowsableLocation$org_scijava_io_handle_DataHandle(this.getSource$());
var pattern=Clazz.new_($I$(15,1).c$$io_scif_services_FilePatternService$org_scijava_io_location_BrowsableLocation$org_scijava_io_location_BrowsableLocation$org_scijava_io_handle_DataHandleService,[this.filePatternService, currentFile, dir, this.dataHandleService]);
var patternFiles=pattern.getFiles$();
if (patternFiles == null ) patternFiles=Clazz.array($I$(13), [0]);
$I$(4).sort$OA(patternFiles);
var files=dir.children$();
if (files == null ) return;
for (var f, $f = files.iterator$(); $f.hasNext$()&&((f=($f.next$())),1);) {
this.log$().debug$O("Checking file " + f);
if (!f.equals$O(this.getSourceLocation$()) && this.getFormat$().createChecker$().isFormat$org_scijava_io_location_Location(f) && p$1.arrayContains$org_scijava_io_location_BrowsableLocation$org_scijava_io_location_LocationA.apply(this, [f, patternFiles])  ) {
p$1.addFileToList$java_util_Map$org_scijava_io_location_BrowsableLocation$Z.apply(this, [fileList, f, checkSeries]);
}}
}, p$1);

Clazz.newMeth(C$, 'arrayContains$org_scijava_io_location_BrowsableLocation$org_scijava_io_location_LocationA', function (f, patternFiles) {
for (var location, $location = 0, $$location = patternFiles; $location<$$location.length&&((location=($$location[$location])),1);$location++) {
if (location.getURI$().equals$O(f.getURI$())) {
return true;
}}
return false;
}, p$1);

Clazz.newMeth(C$, 'addFileToList$java_util_Map$org_scijava_io_location_BrowsableLocation$Z', function (fileList, file, checkSeries) {
try {
var stream=this.dataHandleService.create$TD(file);
/*try*/ {
if (!this.getFormat$().createChecker$().isFormat$org_scijava_io_handle_DataHandle(stream)) {
return;
}stream.setOrder$org_scijava_io_handle_DataHandle_ByteOrder($I$(16).LITTLE_ENDIAN);
stream.seek$J(128);
if (!"DICM".equals$O(stream.readString$I(4))) stream.seek$J(0);
var fileSeries=-1;
var date=null;
var time=null;
var instance=null;
while (date == null  || time == null   || instance == null   || (checkSeries && fileSeries < 0 ) ){
var fp=stream.offset$();
if (fp + 4 >= stream.length$() || fp < 0 ) break;
var tag=$I$(8).getNextTag$org_scijava_io_handle_DataHandle(stream);
var key=$I$(9).TYPES.name$I(tag.get$());
if ("Instance Number".equals$O(key)) {
instance=stream.readString$I(tag.getElementLength$()).trim$();
if (instance.length$() == 0) instance=null;
} else if ("Acquisition Time".equals$O(key)) {
time=stream.readString$I(tag.getElementLength$());
} else if ("Acquisition Date".equals$O(key)) {
date=stream.readString$I(tag.getElementLength$());
} else if ("Series Number".equals$O(key)) {
fileSeries=Integer.parseInt$S(stream.readString$I(tag.getElementLength$()).trim$());
} else stream.skipBytes$I(tag.getElementLength$());
}
if (date == null  || time == null   || instance == null   || (checkSeries && fileSeries == this.getMetadata$().getOriginalSeries$() ) ) {
return;
}var stamp=0;
try {
stamp=Integer.parseInt$S(time);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
var timestamp=0;
try {
timestamp=Integer.parseInt$S(this.getMetadata$().getOriginalTime$());
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
if (date.equals$O(this.getMetadata$().getOriginalDate$()) && (Math.abs(stamp - timestamp) < 150) ) {
var position=Integer.parseInt$S(instance) - 1;
if (position < 0) position=0;
if (fileList.get$O(new Integer(fileSeries)) == null ) {
fileList.put$TK$TV(new Integer(fileSeries), Clazz.new_(1,{E:"org.scijava.io.location.BrowsableLocation"},$I$(1,1)));
}if (position < fileList.get$O(new Integer(fileSeries)).size$()) {
while (position < fileList.get$O(new Integer(fileSeries)).size$() && fileList.get$O(new Integer(fileSeries)).get$I(position) != null  ){
position++;
}
if (position < fileList.get$O(new Integer(fileSeries)).size$()) {
fileList.get$O(new Integer(fileSeries)).set$I$TE(position, file);
} else fileList.get$O(new Integer(fileSeries)).add$TE(file);
} else {
while (position > fileList.get$O(new Integer(fileSeries)).size$()){
fileList.get$O(new Integer(fileSeries)).add$TE(null);
}
fileList.get$O(new Integer(fileSeries)).add$TE(file);
}}}
}finally{/*res*/
try{stream&&stream.close$&&stream.close$()}catch(_){}}
}, p$1);

Clazz.newMeth(C$, 'addInfo$io_scif_formats_DICOMFormat_Metadata$io_scif_formats_DICOMFormat_DICOMTag$S', function (meta, tag, value) {
var oldValue=value;
var info=p$1.getHeaderInfo$io_scif_formats_DICOMFormat_DICOMTag$S.apply(this, [tag, value]);
if (info != null  && tag.get$() != -73728 ) {
info=info.trim$();
if (info.equals$O("")) info=oldValue == null  ? "" : oldValue.trim$();
var key=$I$(9).TYPES.name$I(tag.get$());
if (key == null ) {
key=p$1.formatTag$I.apply(this, [tag.get$()]);
}if (key.equals$O("Samples per pixel")) {
var sizeC=Integer.parseInt$S(info);
if (sizeC > 1) {
meta.get$I(0).setAxisLength$net_imagej_axis_AxisType$J($I$(5).CHANNEL, sizeC);
meta.get$I(0).setPlanarAxisCount$I(2);
}} else if (key.equals$O("Photometric Interpretation")) {
if (info.equals$O("PALETTE COLOR")) {
meta.get$I(0).setIndexed$Z(true);
meta.get$I(0).setAxisLength$net_imagej_axis_AxisType$J($I$(5).CHANNEL, 1);
meta.lut=Clazz.array(Byte.TYPE, [3, null]);
meta.shortLut=Clazz.array(Short.TYPE, [3, null]);
} else if (info.startsWith$S("MONOCHROME")) {
meta.setInverted$Z(info.endsWith$S("1"));
}} else if (key.equals$O("Acquisition Date")) meta.setOriginalDate$S(info);
 else if (key.equals$O("Acquisition Time")) meta.setOriginalTime$S(info);
 else if (key.equals$O("Instance Number")) {
if (info.trim$().length$() > 0) {
meta.setOriginalInstance$S(info);
}} else if (key.equals$O("Series Number")) {
try {
meta.setOriginalSeries$I(Integer.parseInt$S(info));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
} else {
throw e;
}
}
} else if (key.contains$CharSequence("Palette Color LUT Data")) {
var color=key.substring$I$I(0, key.indexOf$S(" ")).trim$();
var ndx=color.equals$O("Red") ? 0 : color.equals$O("Green") ? 1 : 2;
var fp=this.getSource$().offset$();
this.getSource$().seek$J(this.getSource$().offset$() - tag.getElementLength$() + 1);
meta.shortLut[ndx]=Clazz.array(Short.TYPE, [(tag.getElementLength$()/2|0)]);
meta.lut[ndx]=Clazz.array(Byte.TYPE, [(tag.getElementLength$()/2|0)]);
for (var i=0; i < meta.lut[ndx].length; i++) {
meta.shortLut[ndx][i]=this.getSource$().readShort$();
meta.lut[ndx][i]=(((meta.shortLut[ndx][i] & 255)|0)|0);
}
this.getSource$().seek$J(fp);
} else if (key.equals$O("Content Time")) meta.setTime$S(info);
 else if (key.equals$O("Content Date")) meta.setDate$S(info);
 else if (key.equals$O("Image Type")) meta.setImageType$S(info);
 else if (key.equals$O("Rescale Intercept")) {
meta.setRescaleIntercept$D(Double.parseDouble$S(info));
} else if (key.equals$O("Rescale Slope")) {
meta.setRescaleSlope$D(Double.parseDouble$S(info));
} else if (key.equals$O("Pixel Spacing")) {
meta.setPixelSizeX$S(info.substring$I$I(0, info.indexOf$S("\\")));
meta.setPixelSizeY$S(info.substring$I(info.lastIndexOf$S("\\") + 1));
} else if (key.equals$O("Spacing Between Slices")) {
meta.setPixelSizeZ$Double( new Double(info));
}if (((tag.get$() & -65536) >> 16) != 32736) {
key=p$1.formatTag$I.apply(this, [tag.get$()]) + " " + key ;
var imageIndex=meta.getImageCount$() - 1;
var v;
if ((v=meta.get$I(imageIndex).getTable$().get$O(key)) != null ) {
meta.get$I(imageIndex).getTable$().remove$O(key);
meta.get$I(imageIndex).getTable$().putList$S$O(key, v);
meta.get$I(imageIndex).getTable$().putList$S$O(key, info);
} else {
meta.get$I(imageIndex).getTable$().put$TK$TV(key, info);
}}}}, p$1);

Clazz.newMeth(C$, 'formatTag$I', function (tag) {
var s=Integer.toHexString$I(tag);
while (s.length$() < 8){
s="0" + s;
}
return s.substring$I$I(0, 4) + "," + s.substring$I(4) ;
}, p$1);

Clazz.newMeth(C$, 'addInfo$io_scif_formats_DICOMFormat_Metadata$io_scif_formats_DICOMFormat_DICOMTag$I', function (meta, tag, value) {
p$1.addInfo$io_scif_formats_DICOMFormat_Metadata$io_scif_formats_DICOMFormat_DICOMTag$S.apply(this, [meta, tag, Integer.toString$I(value)]);
}, p$1);

Clazz.newMeth(C$, 'getHeaderInfo$io_scif_formats_DICOMFormat_DICOMTag$S', function (tag, value) {
if (tag.get$() == -73715 || tag.get$() == -73507 ) {
tag.setInSequence$Z(false);
}var id=$I$(9).TYPES.name$I(tag.get$());
var vr=tag.getVR$();
if (id != null ) {
if (vr == 11565) {
var vrName=$I$(9).TYPES.vr$I(tag.get$());
vr=((vrName.charCodeAt$I(0)) << 8) + (vrName.charCodeAt$I(1));
tag.setVR$I(vr);
}if (id.length$() > 2) id=id.substring$I(2);
}if (tag.get$() == -73728) return id != null  ? id : null;
if (value != null ) return value;
var skip=false;
switch (vr) {
case 16709:
case 16723:
case 16724:
var bytes=Clazz.array(Byte.TYPE, [tag.getElementLength$()]);
this.getSource$().readFully$BA(bytes);
if (tag.littleEndian) {
for (var i=0; i < (bytes.length/2|0); ++i) {
var t=($b$[0] = bytes[2 * i], $b$[0]);
bytes[2 * i]=(bytes[2 * i + 1]|0);
bytes[2 * i + 1]=(t|0);
}
}value=$I$(17).hex$BA(bytes);
break;
case 17235:
case 17473:
case 17491:
case 17492:
case 18771:
case 19535:
case 19540:
case 20558:
case 21320:
case 21332:
case 21581:
case 21833:
value=this.getSource$().readString$I(tag.getElementLength$());
break;
case 21843:
if (tag.getElementLength$() == 2) value=Integer.toString$I(this.getSource$().readShort$());
 else {
value="";
var n=(tag.getElementLength$()/2|0);
for (var i=0; i < n; i++) {
value += Integer.toString$I(this.getSource$().readShort$()) + " ";
}
}break;
case 11565:
value=this.getSource$().readString$I(tag.getElementLength$());
if (tag.getElementLength$() <= 4 || tag.getElementLength$() > 44 ) value=null;
break;
case 21329:
value="";
var privateTag=((tag.getElementLength$() >> 16) & 1) != 0;
if (tag.get$() == 8913408 || privateTag ) skip=true;
break;
default:
skip=true;
}
if (skip) {
var skipCount=tag.getElementLength$();
if (this.getSource$().offset$() + skipCount <= this.getSource$().length$()) {
this.getSource$().skipBytes$I((skipCount|0));
}tag.addLocation$I(tag.getElementLength$());
value="";
}if (value != null  && id == null   && !value.equals$O("") ) return value;
 else if (id == null ) return null;
 else return value;
}, p$1);
var $b$ = new Int8Array(1);
C$.$getAnn$ = function(){ return [
[['codecService','io.scif.codec.CodecService',null,['org.scijava.plugin.Parameter']],['']],
  [['dataHandleService','org.scijava.io.handle.DataHandleService',null,['org.scijava.plugin.Parameter']],['']],
  [['filePatternService','io.scif.services.FilePatternService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DICOMFormat, "Reader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.ByteArrayReader');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['initializeService','io.scif.services.InitializeService','codecService','io.scif.codec.CodecService']]]

Clazz.newMeth(C$, 'createDomainArray$', function () {
return Clazz.array(String, -1, ["Medical Imaging"]);
});

Clazz.newMeth(C$, 'hasCompanionFiles$', function () {
return true;
});

Clazz.newMeth(C$, ['openPlane$I$J$io_scif_ByteArrayPlane$net_imglib2_Interval$io_scif_config_SCIFIOConfig','openPlane$I$J$TP$net_imglib2_Interval$io_scif_config_SCIFIOConfig'], function (imageIndex, planeIndex, plane, bounds, config) {
var meta=this.getMetadata$();
plane.setColorTable$net_imglib2_display_ColorTable(meta.getColorTable$I$J(imageIndex, planeIndex));
$I$(7).checkPlaneForReading$io_scif_Metadata$I$J$I$net_imglib2_Interval(meta, imageIndex, planeIndex, plane.getData$().length, bounds);
var xAxis=meta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(5).X);
var yAxis=meta.get$I(imageIndex).getAxisIndex$net_imagej_axis_AxisType($I$(5).Y);
var x=(bounds.min$I(xAxis)|0);
var y=(bounds.min$I(yAxis)|0);
var w=(bounds.dimension$I(xAxis)|0);
var h=(bounds.dimension$I(yAxis)|0);
var fileList=meta.getFileList$();
var keys=fileList.keySet$().toArray$TTA(Clazz.array(Integer, [0]));
$I$(4).sort$OA(keys);
if (fileList.get$O(keys[imageIndex]).size$() > 1) {
var fileNumber=(((planeIndex/meta.getImagesPerFile$()|0))|0);
planeIndex=planeIndex % meta.getImagesPerFile$();
var file=fileList.get$O(keys[imageIndex]).get$I(fileNumber);
var r=this.initializeService.initializeReader$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(file, Clazz.new_($I$(6,1)).checkerSetOpen$Z(true));
return r.openPlane$I$J$io_scif_Plane$net_imglib2_Interval$io_scif_config_SCIFIOConfig(imageIndex, planeIndex, plane, bounds, config);
}var ec=meta.get$I(0).isIndexed$() ? 1 : (meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(5).CHANNEL)|0);
var bpp=$I$(7).getBytesPerPixel$I(meta.get$I(imageIndex).getPixelType$());
var bytes=((meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(5).X) * meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(5).Y) * bpp * ec )|0);
var handle=this.getHandle$();
handle.seek$J(meta.getOffsets$()[(planeIndex|0)]);
if (meta.isRLE$()) {
var options=Clazz.new_($I$(11,1));
options.maxBytes=((meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(5).X) * meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(5).Y))|0);
var codec=this.codecService.getCodec$Class(Clazz.getClass($I$(12)));
for (var c=0; c < ec; c++) {
var t=null;
if (bpp > 1) {
var tmp=Clazz.array(Byte.TYPE, [bpp, null]);
for (var i=0; i < bpp; i++) {
tmp[i]=codec.decompress$org_scijava_io_handle_DataHandle$io_scif_codec_CodecOptions(handle, options);
if (planeIndex < meta.getImagesPerFile$() - 1 || i < bpp - 1 ) {
while (handle.read$() == 0){
}
handle.seek$J(handle.offset$() - 1);
}}
t=Clazz.array(Byte.TYPE, [(bytes/ec|0)]);
for (var i=0; i < planeIndex; i++) {
for (var j=0; j < bpp; j++) {
var byteIndex=meta.get$I(imageIndex).isLittleEndian$() ? bpp - j - 1  : j;
if (i < tmp[byteIndex].length) {
t[i * bpp + j]=(tmp[byteIndex][i]|0);
}}
}
} else {
t=codec.decompress$org_scijava_io_handle_DataHandle$io_scif_codec_CodecOptions(handle, options);
if (t.length < ((bytes/ec|0))) {
var tmp=t;
t=Clazz.array(Byte.TYPE, [(bytes/ec|0)]);
System.arraycopy$O$I$O$I$I(tmp, 0, t, 0, tmp.length);
}if (planeIndex < meta.getImagesPerFile$() - 1 || c < ec - 1 ) {
while (handle.read$() == 0){
}
handle.seek$J(handle.offset$() - 1);
}}var rowLen=w * bpp;
var srcRowLen=(meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(5).X)|0) * bpp;
for (var row=0; row < h; row++) {
var src=(row + y) * srcRowLen + x * bpp;
var dest=(h * c + row) * rowLen;
var len=Math.min(rowLen, t.length - src - 1 );
if (len < 0) break;
System.arraycopy$O$I$O$I$I(t, src, plane.getBytes$(), dest, len);
}
}
} else if (meta.isJPEG$() || meta.isJP2K$() ) {
var end=planeIndex < meta.getOffsets$().length - 1 ? meta.getOffsets$()[(planeIndex|0) + 1] : handle.length$();
var b=Clazz.array(Byte.TYPE, [((end - handle.offset$())|0)]);
handle.read$BA(b);
if (b[2] != -1) {
var tmp=Clazz.array(Byte.TYPE, [b.length + 1]);
tmp[0]=(b[0]|0);
tmp[1]=(b[1]|0);
tmp[2]=(-1|0);
System.arraycopy$O$I$O$I$I(b, 2, tmp, 3, b.length - 2);
b=tmp;
}if ((b[3] & 255) >= 240) {
b[3]=(b[3]-(48)|0);
}var pt=b.length - 2;
while (pt >= 0 && b[pt] != -1  || b[pt + 1] != -39 ){
pt--;
}
if (pt < b.length - 2) {
var tmp=b;
b=Clazz.array(Byte.TYPE, [pt + 2]);
System.arraycopy$O$I$O$I$I(tmp, 0, b, 0, b.length);
}var options=Clazz.new_($I$(11,1));
options.littleEndian=meta.get$I(imageIndex).isLittleEndian$();
options.interleaved=meta.get$I(imageIndex).getInterleavedAxisCount$() > 0;
var codec=meta.isJPEG$() ? this.codecService.getCodec$Class(Clazz.getClass($I$(18))) : this.codecService.getCodec$Class(Clazz.getClass($I$(19)));
b=codec.decompress$BA$io_scif_codec_CodecOptions(b, options);
var rowLen=w * bpp;
var srcRowLen=(meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(5).X)|0) * bpp;
var srcPlane=(meta.get$I(imageIndex).getAxisLength$net_imagej_axis_AxisType($I$(5).Y)|0) * srcRowLen;
for (var c=0; c < ec; c++) {
for (var row=0; row < h; row++) {
System.arraycopy$O$I$O$I$I(b, c * srcPlane + (row + y) * srcRowLen + x * bpp, plane.getBytes$(), h * rowLen * c  + row * rowLen, rowLen);
}
}
} else if (meta.isDeflate$()) {
throw Clazz.new_(Clazz.load('io.scif.UnsupportedCompressionException').c$$S,["Deflate data is not supported."]);
} else {
this.readPlane$org_scijava_io_handle_DataHandle$I$net_imglib2_Interval$TP(this.getHandle$(), imageIndex, bounds, plane);
}return plane;
});
C$.$getAnn$ = function(){ return [
[['initializeService','io.scif.services.InitializeService',null,['org.scijava.plugin.Parameter']],['']],
  [['codecService','io.scif.codec.CodecService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DICOMFormat, "DICOMUtils", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getNextTag$org_scijava_io_handle_DataHandle', function (handle) {
return C$.getNextTag$org_scijava_io_handle_DataHandle$Z(handle, false);
}, 1);

Clazz.newMeth(C$, 'getNextTag$org_scijava_io_handle_DataHandle$Z', function (handle, bigEndianTransferSyntax) {
return C$.getNextTag$org_scijava_io_handle_DataHandle$Z$Z(handle, bigEndianTransferSyntax, false);
}, 1);

Clazz.newMeth(C$, 'getNextTag$org_scijava_io_handle_DataHandle$Z$Z', function (handle, bigEndianTransferSyntax, isOddLocations) {
var fp=handle.offset$();
var groupWord=handle.readShort$() & 65535;
var diTag=Clazz.new_($I$(20,1));
var littleEndian=true;
if (groupWord == 2048 && bigEndianTransferSyntax ) {
littleEndian=false;
groupWord=8;
handle.setOrder$org_scijava_io_handle_DataHandle_ByteOrder($I$(16).BIG_ENDIAN);
} else if (groupWord == 65279 || groupWord == 65534 ) {
handle.skipBytes$I(6);
return C$.getNextTag$org_scijava_io_handle_DataHandle$Z(handle, bigEndianTransferSyntax);
}var elementWord=handle.readShort$();
var tag=((groupWord << 16) & -65536) | (elementWord & 65535);
diTag.setElementLength$I(C$.getLength$org_scijava_io_handle_DataHandle$io_scif_formats_DICOMFormat_DICOMTag(handle, diTag));
if (diTag.getElementLength$() > handle.length$()) {
handle.seek$J(fp);
littleEndian=!littleEndian;
handle.setLittleEndian$Z(littleEndian);
groupWord=handle.readShort$() & 65535;
elementWord=handle.readShort$();
tag=((groupWord << 16) & -65536) | (elementWord & 65535);
diTag.setElementLength$I(C$.getLength$org_scijava_io_handle_DataHandle$io_scif_formats_DICOMFormat_DICOMTag(handle, diTag));
if (diTag.getElementLength$() > handle.length$()) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Invalid tag length " + diTag.getElementLength$()]);
}diTag.setTagValue$I(tag);
return diTag;
}if (diTag.getElementLength$() < 0 && groupWord == 32736 ) {
handle.skipBytes$I(12);
diTag.setElementLength$I(handle.readInt$());
if (diTag.getElementLength$() < 0) diTag.setElementLength$I(handle.readInt$());
}if (diTag.getElementLength$() == 0 && (groupWord == 32736 || tag == 2691092 ) ) {
diTag.setElementLength$I(C$.getLength$org_scijava_io_handle_DataHandle$io_scif_formats_DICOMFormat_DICOMTag(handle, diTag));
} else if (diTag.getElementLength$() == 0) {
handle.seek$J(handle.offset$() - 4);
var v=handle.readString$I(2);
if (v.equals$O("UT")) {
handle.skipBytes$I(2);
diTag.setElementLength$I(handle.readInt$());
} else handle.skipBytes$I(2);
}if (!isOddLocations && (diTag.getElementLength$() % 2) == 1 ) diTag.incrementElementLength$();
if (diTag.getElementLength$() == -1) {
diTag.setElementLength$I(0);
diTag.setInSequence$Z(true);
}diTag.setTagValue$I(tag);
diTag.setLittleEndian$Z(littleEndian);
return diTag;
}, 1);

Clazz.newMeth(C$, 'getLength$org_scijava_io_handle_DataHandle$io_scif_formats_DICOMFormat_DICOMTag', function (handle, tag) {
var b=Clazz.array(Byte.TYPE, [4]);
handle.read$BA(b);
var vr=((b[0] & 255) << 8) | (b[1] & 255);
tag.setVR$I(vr);
switch (vr) {
case 20290:
case 20311:
case 21329:
case 21838:
if ((b[2] == 0) || (b[3] == 0) ) {
return handle.readInt$();
}tag.setVR$I(11565);
return $I$(21).toInt$BA$Z(b, handle.isLittleEndian$());
case 16709:
case 16723:
case 16724:
case 17235:
case 17473:
case 17491:
case 17492:
case 17988:
case 17996:
case 18771:
case 19535:
case 19540:
case 20558:
case 21320:
case 21324:
case 21331:
case 21332:
case 21581:
case 21833:
case 21836:
case 21843:
case 21844:
case 16191:
if (tag.get$() == 2633734) {
return $I$(21).toInt$BA$I$I$Z(b, 2, 2, handle.isLittleEndian$());
}var n1=$I$(21).toShort$BA$I$I$Z(b, 2, 2, handle.isLittleEndian$());
var n2=$I$(21).toShort$BA$I$I$Z(b, 2, 2, !handle.isLittleEndian$());
n1&=65535;
n2&=65535;
if (n1 < 0 || n1 + handle.offset$() > handle.length$() ) return n2;
if (n2 < 0 || n2 + handle.offset$() > handle.length$() ) return n1;
return n1;
case 65535:
tag.setVR$I(11565);
return 8;
default:
tag.setVR$I(11565);
var len=$I$(21).toInt$BA$Z(b, handle.isLittleEndian$());
if (len + handle.offset$() > handle.length$() || len < 0 ) {
len=$I$(21).toInt$BA$I$I$Z(b, 2, 2, handle.isLittleEndian$());
len&=65535;
}return len;
}
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.DICOMFormat, "DICOMTag", function(){
Clazz.newInstance(this, arguments[0],false,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.elementLength=0;
this.vr=0;
this.inSequence=false;
this.location=0;
}, 1);

C$.$fields$=[['Z',['inSequence','littleEndian'],'I',['elementLength','tagValue','vr','location']]]

Clazz.newMeth(C$, 'getLocation$', function () {
return this.location;
});

Clazz.newMeth(C$, 'setLocation$I', function (location) {
this.location=location;
});

Clazz.newMeth(C$, 'addLocation$I', function (offset) {
this.location+=offset;
});

Clazz.newMeth(C$, 'getVR$', function () {
return this.vr;
});

Clazz.newMeth(C$, 'setVR$I', function (vr) {
this.vr=vr;
});

Clazz.newMeth(C$, 'getElementLength$', function () {
return this.elementLength;
});

Clazz.newMeth(C$, 'setElementLength$I', function (elementLength) {
this.elementLength=elementLength;
});

Clazz.newMeth(C$, 'incrementElementLength$', function () {
this.elementLength++;
});

Clazz.newMeth(C$, 'get$', function () {
return this.tagValue;
});

Clazz.newMeth(C$, 'setTagValue$I', function (tagValue) {
this.tagValue=tagValue;
});

Clazz.newMeth(C$, 'isInSequence$', function () {
return this.inSequence;
});

Clazz.newMeth(C$, 'setInSequence$Z', function (inSequence) {
this.inSequence=inSequence;
});

Clazz.newMeth(C$, 'isLittleEndian$', function () {
return this.littleEndian;
});

Clazz.newMeth(C$, 'setLittleEndian$Z', function (littleEndian) {
this.littleEndian=littleEndian;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:39 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
