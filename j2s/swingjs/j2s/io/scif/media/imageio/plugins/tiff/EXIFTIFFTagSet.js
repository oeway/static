(function(){var P$=Clazz.newPackage("io.scif.media.imageio.plugins.tiff"),I$=[[0,'io.scif.media.imageio.plugins.tiff.EXIFInteroperabilityTagSet','java.util.ArrayList',['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.EXIFVersion'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.FlashPixVersion'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.ColorSpace'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.ComponentsConfiguration'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.CompressedBitsPerPixel'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.PixelXDimension'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.PixelYDimension'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.MakerNote'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.UserComment'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.RelatedSoundFile'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.DateTimeOriginal'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.DateTimeDigitized'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.SubSecTime'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.SubSecTimeOriginal'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.SubSecTimeDigitized'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.ExposureTime'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.FNumber'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.ExposureProgram'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.SpectralSensitivity'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.ISOSpeedRatings'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.OECF'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.ShutterSpeedValue'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.ApertureValue'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.BrightnessValue'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.ExposureBiasValue'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.MaxApertureValue'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.SubjectDistance'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.MeteringMode'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.LightSource'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.Flash'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.FocalLength'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.SubjectArea'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.FlashEnergy'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.SpatialFrequencyResponse'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.FocalPlaneXResolution'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.FocalPlaneYResolution'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.FocalPlaneResolutionUnit'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.SubjectLocation'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.ExposureIndex'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.SensingMethod'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.FileSource'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.SceneType'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.CFAPattern'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.CustomRendered'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.ExposureMode'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.WhiteBalance'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.DigitalZoomRatio'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.FocalLengthIn35mmFilm'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.SceneCaptureType'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.GainControl'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.Contrast'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.Saturation'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.Sharpness'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.DeviceSettingDescription'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.SubjectDistanceRange'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.ImageUniqueID'],['io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','.InteroperabilityIFD']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EXIFTIFFTagSet", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTagSet');
C$.$classes$=[['EXIFVersion',8],['FlashPixVersion',8],['ColorSpace',8],['ComponentsConfiguration',8],['CompressedBitsPerPixel',8],['PixelXDimension',8],['PixelYDimension',8],['MakerNote',8],['UserComment',8],['RelatedSoundFile',8],['DateTimeOriginal',8],['DateTimeDigitized',8],['SubSecTime',8],['SubSecTimeOriginal',8],['SubSecTimeDigitized',8],['ExposureTime',8],['FNumber',8],['ExposureProgram',8],['SpectralSensitivity',8],['ISOSpeedRatings',8],['OECF',8],['ShutterSpeedValue',8],['ApertureValue',8],['BrightnessValue',8],['ExposureBiasValue',8],['MaxApertureValue',8],['SubjectDistance',8],['MeteringMode',8],['LightSource',8],['Flash',8],['FocalLength',8],['SubjectArea',8],['FlashEnergy',8],['SpatialFrequencyResponse',8],['FocalPlaneXResolution',8],['FocalPlaneYResolution',8],['FocalPlaneResolutionUnit',8],['SubjectLocation',8],['ExposureIndex',8],['SensingMethod',8],['FileSource',8],['SceneType',8],['CFAPattern',8],['CustomRendered',8],['ExposureMode',8],['WhiteBalance',8],['DigitalZoomRatio',8],['FocalLengthIn35mmFilm',8],['SceneCaptureType',8],['GainControl',8],['Contrast',8],['Saturation',8],['Sharpness',8],['DeviceSettingDescription',8],['SubjectDistanceRange',8],['ImageUniqueID',8],['InteroperabilityIFD',8]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.theInstance=null;
C$.EXIF_VERSION_2_1=Clazz.array(Byte.TYPE, -1, ["0", "2", "1", "0"]);
C$.EXIF_VERSION_2_2=Clazz.array(Byte.TYPE, -1, ["0", "2", "2", "0"]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['theInstance','io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','EXIF_VERSION_2_1','byte[]','+EXIF_VERSION_2_2','tags','java.util.List']]]

Clazz.newMeth(C$, 'initTags$', function () {
C$.tags=Clazz.new_($I$(2,1).c$$I,[42]);
C$.tags.add$TE(Clazz.new_($I$(3,1)));
C$.tags.add$TE(Clazz.new_($I$(4,1)));
C$.tags.add$TE(Clazz.new_($I$(5,1)));
C$.tags.add$TE(Clazz.new_($I$(6,1)));
C$.tags.add$TE(Clazz.new_($I$(7,1)));
C$.tags.add$TE(Clazz.new_($I$(8,1)));
C$.tags.add$TE(Clazz.new_($I$(9,1)));
C$.tags.add$TE(Clazz.new_($I$(10,1)));
C$.tags.add$TE(Clazz.new_($I$(11,1)));
C$.tags.add$TE(Clazz.new_($I$(12,1)));
C$.tags.add$TE(Clazz.new_($I$(13,1)));
C$.tags.add$TE(Clazz.new_($I$(14,1)));
C$.tags.add$TE(Clazz.new_($I$(15,1)));
C$.tags.add$TE(Clazz.new_($I$(16,1)));
C$.tags.add$TE(Clazz.new_($I$(17,1)));
C$.tags.add$TE(Clazz.new_($I$(18,1)));
C$.tags.add$TE(Clazz.new_($I$(19,1)));
C$.tags.add$TE(Clazz.new_($I$(20,1)));
C$.tags.add$TE(Clazz.new_($I$(21,1)));
C$.tags.add$TE(Clazz.new_($I$(22,1)));
C$.tags.add$TE(Clazz.new_($I$(23,1)));
C$.tags.add$TE(Clazz.new_($I$(24,1)));
C$.tags.add$TE(Clazz.new_($I$(25,1)));
C$.tags.add$TE(Clazz.new_($I$(26,1)));
C$.tags.add$TE(Clazz.new_($I$(27,1)));
C$.tags.add$TE(Clazz.new_($I$(28,1)));
C$.tags.add$TE(Clazz.new_($I$(29,1)));
C$.tags.add$TE(Clazz.new_($I$(30,1)));
C$.tags.add$TE(Clazz.new_($I$(31,1)));
C$.tags.add$TE(Clazz.new_($I$(32,1)));
C$.tags.add$TE(Clazz.new_($I$(33,1)));
C$.tags.add$TE(Clazz.new_($I$(34,1)));
C$.tags.add$TE(Clazz.new_($I$(35,1)));
C$.tags.add$TE(Clazz.new_($I$(36,1)));
C$.tags.add$TE(Clazz.new_($I$(37,1)));
C$.tags.add$TE(Clazz.new_($I$(38,1)));
C$.tags.add$TE(Clazz.new_($I$(39,1)));
C$.tags.add$TE(Clazz.new_($I$(40,1)));
C$.tags.add$TE(Clazz.new_($I$(41,1)));
C$.tags.add$TE(Clazz.new_($I$(42,1)));
C$.tags.add$TE(Clazz.new_($I$(43,1)));
C$.tags.add$TE(Clazz.new_($I$(44,1)));
C$.tags.add$TE(Clazz.new_($I$(45,1)));
C$.tags.add$TE(Clazz.new_($I$(46,1)));
C$.tags.add$TE(Clazz.new_($I$(47,1)));
C$.tags.add$TE(Clazz.new_($I$(48,1)));
C$.tags.add$TE(Clazz.new_($I$(49,1)));
C$.tags.add$TE(Clazz.new_($I$(50,1)));
C$.tags.add$TE(Clazz.new_($I$(51,1)));
C$.tags.add$TE(Clazz.new_($I$(52,1)));
C$.tags.add$TE(Clazz.new_($I$(53,1)));
C$.tags.add$TE(Clazz.new_($I$(54,1)));
C$.tags.add$TE(Clazz.new_($I$(55,1)));
C$.tags.add$TE(Clazz.new_($I$(56,1)));
C$.tags.add$TE(Clazz.new_($I$(57,1)));
C$.tags.add$TE(Clazz.new_($I$(58,1)));
C$.tags.add$TE(Clazz.new_($I$(59,1)));
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$java_util_List.apply(this,[C$.tags]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getInstance$', function () {
if (C$.theInstance == null ) {
C$.initTags$();
C$.theInstance=Clazz.new_(C$);
C$.tags=null;
}return C$.theInstance;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "EXIFVersion", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["EXIFversion", 36864, 128]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "FlashPixVersion", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["FlashPixVersion", 40960, 128]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "ColorSpace", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["ColorSpace", 40961, 8]);C$.$init$.apply(this);
this.addValueName$I$S(1, "sRGB");
this.addValueName$I$S(65535, "Uncalibrated");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "ComponentsConfiguration", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["ComponentsConfiguration", 37121, 128]);C$.$init$.apply(this);
this.addValueName$I$S(0, "DoesNotExist");
this.addValueName$I$S(1, "Y");
this.addValueName$I$S(2, "Cb");
this.addValueName$I$S(3, "Cr");
this.addValueName$I$S(4, "R");
this.addValueName$I$S(5, "G");
this.addValueName$I$S(6, "B");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "CompressedBitsPerPixel", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["CompressedBitsPerPixel", 37122, 32]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "PixelXDimension", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["PixelXDimension", 40962, 24]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "PixelYDimension", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["PixelYDimension", 40963, 24]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "MakerNote", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["MakerNote", 37500, 128]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "UserComment", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["UserComment", 37510, 128]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "RelatedSoundFile", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["RelatedSoundFile", 40964, 4]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "DateTimeOriginal", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["DateTimeOriginal", 36867, 4]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "DateTimeDigitized", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["DateTimeDigitized", 36868, 4]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "SubSecTime", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["SubSecTime", 37520, 4]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "SubSecTimeOriginal", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["SubSecTimeOriginal", 37521, 4]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "SubSecTimeDigitized", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["SubSecTimeDigitized", 37522, 4]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "ExposureTime", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["ExposureTime", 33434, 32]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "FNumber", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["FNumber", 33437, 32]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "ExposureProgram", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["ExposureProgram", 34850, 8]);C$.$init$.apply(this);
this.addValueName$I$S(0, "Not Defined");
this.addValueName$I$S(1, "Manual");
this.addValueName$I$S(2, "Normal Program");
this.addValueName$I$S(3, "Aperture Priority");
this.addValueName$I$S(4, "Shutter Priority");
this.addValueName$I$S(5, "Creative Program");
this.addValueName$I$S(6, "Action Program");
this.addValueName$I$S(7, "Portrait Mode");
this.addValueName$I$S(8, "Landscape Mode");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "SpectralSensitivity", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["SpectralSensitivity", 34852, 4]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "ISOSpeedRatings", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["ISOSpeedRatings", 34855, 8]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "OECF", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["OECF", 34856, 128]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "ShutterSpeedValue", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["ShutterSpeedValue", 37377, 1024]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "ApertureValue", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["ApertureValue", 37378, 32]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "BrightnessValue", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["BrightnessValue", 37379, 1024]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "ExposureBiasValue", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["ExposureBiasValue", 37380, 1024]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "MaxApertureValue", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["MaxApertureValue", 37381, 32]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "SubjectDistance", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["SubjectDistance", 37382, 32]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "MeteringMode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["MeteringMode", 37383, 8]);C$.$init$.apply(this);
this.addValueName$I$S(0, "Unknown");
this.addValueName$I$S(1, "Average");
this.addValueName$I$S(2, "CenterWeightedAverage");
this.addValueName$I$S(3, "Spot");
this.addValueName$I$S(4, "MultiSpot");
this.addValueName$I$S(5, "Pattern");
this.addValueName$I$S(6, "Partial");
this.addValueName$I$S(255, "Other");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "LightSource", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["LightSource", 37384, 8]);C$.$init$.apply(this);
this.addValueName$I$S(0, "Unknown");
this.addValueName$I$S(1, "Daylight");
this.addValueName$I$S(2, "Fluorescent");
this.addValueName$I$S(3, "Tungsten");
this.addValueName$I$S(17, "Standard Light A");
this.addValueName$I$S(18, "Standard Light B");
this.addValueName$I$S(19, "Standard Light C");
this.addValueName$I$S(20, "D55");
this.addValueName$I$S(21, "D65");
this.addValueName$I$S(22, "D75");
this.addValueName$I$S(255, "Other");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "Flash", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["Flash", 37385, 8]);C$.$init$.apply(this);
this.addValueName$I$S(0, "Flash Did Not Fire");
this.addValueName$I$S(1, "Flash Fired");
this.addValueName$I$S(5, "Strobe Return Light Not Detected");
this.addValueName$I$S(7, "Strobe Return Light Detected");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "FocalLength", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["FocalLength", 37386, 32]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "SubjectArea", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["SubjectArea", 37396, 8]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "FlashEnergy", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["FlashEnergy", 41483, 32]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "SpatialFrequencyResponse", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["SpatialFrequencyResponse", 41484, 128]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "FocalPlaneXResolution", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["FocalPlaneXResolution", 41486, 32]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "FocalPlaneYResolution", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["FocalPlaneYResolution", 41487, 32]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "FocalPlaneResolutionUnit", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["FocalPlaneResolutionUnit", 41488, 8]);C$.$init$.apply(this);
this.addValueName$I$S(1, "None");
this.addValueName$I$S(2, "Inch");
this.addValueName$I$S(3, "Centimeter");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "SubjectLocation", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["SubjectLocation", 41492, 8]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "ExposureIndex", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["ExposureIndex", 41493, 32]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "SensingMethod", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["SensingMethod", 41495, 8]);C$.$init$.apply(this);
this.addValueName$I$S(1, "Not Defined");
this.addValueName$I$S(2, "One-chip color area sensor");
this.addValueName$I$S(3, "Two-chip color area sensor");
this.addValueName$I$S(4, "Three-chip color area sensor");
this.addValueName$I$S(5, "Color sequential area sensor");
this.addValueName$I$S(7, "Trilinear sensor");
this.addValueName$I$S(8, "Color sequential linear sensor");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "FileSource", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["FileSource", 41728, 128]);C$.$init$.apply(this);
this.addValueName$I$S(3, "DSC");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "SceneType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["SceneType", 41729, 128]);C$.$init$.apply(this);
this.addValueName$I$S(1, "A directly photographed image");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "CFAPattern", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["CFAPattern", 41730, 128]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "CustomRendered", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["CustomRendered", 41985, 8]);C$.$init$.apply(this);
this.addValueName$I$S(0, "Normal process");
this.addValueName$I$S(1, "Custom process");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "ExposureMode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["ExposureMode", 41986, 8]);C$.$init$.apply(this);
this.addValueName$I$S(0, "Auto exposure");
this.addValueName$I$S(1, "Manual exposure");
this.addValueName$I$S(2, "Auto bracket");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "WhiteBalance", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["WhiteBalance", 41987, 8]);C$.$init$.apply(this);
this.addValueName$I$S(0, "Auto white balance");
this.addValueName$I$S(1, "Manual white balance");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "DigitalZoomRatio", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["DigitalZoomRatio", 41988, 32]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "FocalLengthIn35mmFilm", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["FocalLengthIn35mmFilm", 41989, 8]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "SceneCaptureType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["SceneCaptureType", 41990, 8]);C$.$init$.apply(this);
this.addValueName$I$S(0, "Standard");
this.addValueName$I$S(1, "Landscape");
this.addValueName$I$S(2, "Portrait");
this.addValueName$I$S(3, "Night scene");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "GainControl", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GainControl", 41991, 8]);C$.$init$.apply(this);
this.addValueName$I$S(0, "None");
this.addValueName$I$S(1, "Low gain up");
this.addValueName$I$S(2, "High gain up");
this.addValueName$I$S(3, "Low gain down");
this.addValueName$I$S(4, "High gain down");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "Contrast", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["Contrast", 41992, 8]);C$.$init$.apply(this);
this.addValueName$I$S(0, "Normal");
this.addValueName$I$S(1, "Soft");
this.addValueName$I$S(2, "Hard");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "Saturation", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["Saturation", 41993, 8]);C$.$init$.apply(this);
this.addValueName$I$S(0, "Normal");
this.addValueName$I$S(1, "Low saturation");
this.addValueName$I$S(2, "High saturation");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "Sharpness", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["Sharpness", 41994, 8]);C$.$init$.apply(this);
this.addValueName$I$S(0, "Normal");
this.addValueName$I$S(1, "Soft");
this.addValueName$I$S(2, "Hard");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "DeviceSettingDescription", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["DeviceSettingDescription", 41995, 128]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "SubjectDistanceRange", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["SubjectDistanceRange", 41996, 8]);C$.$init$.apply(this);
this.addValueName$I$S(0, "unknown");
this.addValueName$I$S(1, "Macro");
this.addValueName$I$S(2, "Close view");
this.addValueName$I$S(3, "Distant view");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "ImageUniqueID", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["ImageUniqueID", 42016, 4]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFTIFFTagSet, "InteroperabilityIFD", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I$io_scif_media_imageio_plugins_tiff_TIFFTagSet.apply(this,["InteroperabilityIFD", 40965, 16, $I$(1).getInstance$()]);C$.$init$.apply(this);
}, 1);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
