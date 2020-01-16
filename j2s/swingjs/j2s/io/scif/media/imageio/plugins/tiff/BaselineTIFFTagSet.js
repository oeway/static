(function(){var P$=Clazz.newPackage("io.scif.media.imageio.plugins.tiff"),I$=[[0,'java.util.ArrayList',['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.Artist'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.BitsPerSample'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.CellLength'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.CellWidth'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.ColorMap'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.Compression'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.Copyright'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.DateTime'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.DocumentName'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.DotRange'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.ExtraSamples'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.FillOrder'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.FreeByteCounts'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.FreeOffsets'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.GrayResponseCurve'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.GrayResponseUnit'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.HalftoneHints'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.HostComputer'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.ImageDescription'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.ICCProfile'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.ImageLength'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.ImageWidth'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.InkNames'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.InkSet'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.JPEGACTables'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.JPEGDCTables'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.JPEGInterchangeFormat'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.JPEGInterchangeFormatLength'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.JPEGLosslessPredictors'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.JPEGPointTransforms'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.JPEGProc'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.JPEGQTables'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.JPEGRestartInterval'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.JPEGTables'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.Make'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.MaxSampleValue'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.MinSampleValue'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.Model'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.NewSubfileType'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.NumberOfInks'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.Orientation'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.PageName'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.PageNumber'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.PhotometricInterpretation'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.PlanarConfiguration'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.Predictor'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.PrimaryChromaticities'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.ReferenceBlackWhite'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.ResolutionUnit'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.RowsPerStrip'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.SampleFormat'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.SamplesPerPixel'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.SMaxSampleValue'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.SMinSampleValue'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.Software'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.StripByteCounts'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.StripOffsets'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.SubfileType'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.T4Options'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.T6Options'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.TargetPrinter'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.Threshholding'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.TileByteCounts'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.TileOffsets'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.TileLength'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.TileWidth'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.TransferFunction'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.TransferRange'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.WhitePoint'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.XPosition'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.XResolution'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.YCbCrCoefficients'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.YCbCrPositioning'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.YCbCrSubSampling'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.YPosition'],['io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','.YResolution']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BaselineTIFFTagSet", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTagSet');
C$.$classes$=[['Artist',8],['BitsPerSample',8],['CellLength',8],['CellWidth',8],['ColorMap',8],['Compression',8],['Copyright',8],['DateTime',8],['DocumentName',8],['DotRange',8],['ExtraSamples',8],['FillOrder',8],['FreeByteCounts',8],['FreeOffsets',8],['GrayResponseCurve',8],['GrayResponseUnit',8],['HalftoneHints',8],['HostComputer',8],['ImageDescription',8],['ImageLength',8],['ImageWidth',8],['InkNames',8],['InkSet',8],['JPEGTables',8],['JPEGACTables',8],['JPEGDCTables',8],['JPEGInterchangeFormat',8],['JPEGInterchangeFormatLength',8],['JPEGLosslessPredictors',8],['JPEGPointTransforms',8],['JPEGProc',8],['JPEGQTables',8],['JPEGRestartInterval',8],['Make',8],['MaxSampleValue',8],['MinSampleValue',8],['Model',8],['NewSubfileType',8],['NumberOfInks',8],['Orientation',8],['PageName',8],['PageNumber',8],['PhotometricInterpretation',8],['PlanarConfiguration',8],['Predictor',8],['PrimaryChromaticities',8],['ReferenceBlackWhite',8],['ResolutionUnit',8],['RowsPerStrip',8],['SampleFormat',8],['SamplesPerPixel',8],['SMaxSampleValue',8],['SMinSampleValue',8],['Software',8],['StripByteCounts',8],['StripOffsets',8],['SubfileType',8],['T4Options',8],['T6Options',8],['TargetPrinter',8],['Threshholding',8],['TileByteCounts',8],['TileOffsets',8],['TileLength',8],['TileWidth',8],['TransferFunction',8],['TransferRange',8],['WhitePoint',8],['XPosition',8],['XResolution',8],['YCbCrCoefficients',8],['YCbCrPositioning',8],['YCbCrSubSampling',8],['YPosition',8],['YResolution',8],['ICCProfile',8]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.theInstance=null;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['theInstance','io.scif.media.imageio.plugins.tiff.BaselineTIFFTagSet','tags','java.util.List']]]

Clazz.newMeth(C$, 'initTags$', function () {
C$.tags=Clazz.new_($I$(1,1).c$$I,[76]);
C$.tags.add$TE(Clazz.new_($I$(2,1)));
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
C$.tags.add$TE(Clazz.new_($I$(60,1)));
C$.tags.add$TE(Clazz.new_($I$(61,1)));
C$.tags.add$TE(Clazz.new_($I$(62,1)));
C$.tags.add$TE(Clazz.new_($I$(63,1)));
C$.tags.add$TE(Clazz.new_($I$(64,1)));
C$.tags.add$TE(Clazz.new_($I$(65,1)));
C$.tags.add$TE(Clazz.new_($I$(66,1)));
C$.tags.add$TE(Clazz.new_($I$(67,1)));
C$.tags.add$TE(Clazz.new_($I$(68,1)));
C$.tags.add$TE(Clazz.new_($I$(69,1)));
C$.tags.add$TE(Clazz.new_($I$(70,1)));
C$.tags.add$TE(Clazz.new_($I$(71,1)));
C$.tags.add$TE(Clazz.new_($I$(72,1)));
C$.tags.add$TE(Clazz.new_($I$(73,1)));
C$.tags.add$TE(Clazz.new_($I$(74,1)));
C$.tags.add$TE(Clazz.new_($I$(75,1)));
C$.tags.add$TE(Clazz.new_($I$(76,1)));
C$.tags.add$TE(Clazz.new_($I$(77,1)));
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
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "Artist", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["Artist", 315, 4]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "BitsPerSample", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["BitsPerSample", 258, 8]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "CellLength", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["CellLength", 265, 8]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "CellWidth", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["CellWidth", 264, 8]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "ColorMap", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["ColorMap", 320, 8]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "Compression", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["Compression", 259, 8]);C$.$init$.apply(this);
this.addValueName$I$S(1, "Uncompressed");
this.addValueName$I$S(2, "CCITT RLE");
this.addValueName$I$S(3, "CCITT T.4");
this.addValueName$I$S(4, "CCITT T.6");
this.addValueName$I$S(5, "LZW");
this.addValueName$I$S(6, "Old JPEG");
this.addValueName$I$S(7, "JPEG");
this.addValueName$I$S(8, "ZLib");
this.addValueName$I$S(32773, "PackBits");
this.addValueName$I$S(32946, "Deflate");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "Copyright", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["Copyright", 33432, 4]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "DateTime", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["DateTime", 306, 4]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "DocumentName", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["DocumentName", 269, 4]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "DotRange", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["DotRange", 336, 10]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "ExtraSamples", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["ExtraSamples", 338, 8]);C$.$init$.apply(this);
this.addValueName$I$S(0, "Unspecified");
this.addValueName$I$S(1, "Associated Alpha");
this.addValueName$I$S(2, "Unassociated Alpha");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "FillOrder", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["FillOrder", 266, 8]);C$.$init$.apply(this);
this.addValueName$I$S(1, "LeftToRight");
this.addValueName$I$S(2, "RightToLeft");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "FreeByteCounts", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["FreeByteCounts", 289, 16]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "FreeOffsets", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["FreeOffsets", 288, 16]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "GrayResponseCurve", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GrayResponseCurve", 291, 8]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "GrayResponseUnit", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GrayResponseUnit", 290, 8]);C$.$init$.apply(this);
this.addValueName$I$S(1, "Tenths");
this.addValueName$I$S(2, "Hundredths");
this.addValueName$I$S(3, "Thousandths");
this.addValueName$I$S(4, "Ten-Thousandths");
this.addValueName$I$S(5, "Hundred-Thousandths");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "HalftoneHints", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["HalftoneHints", 321, 8]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "HostComputer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["HostComputer", 316, 4]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "ImageDescription", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["ImageDescription", 270, 4]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "ImageLength", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["ImageLength", 257, 24]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "ImageWidth", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["ImageWidth", 256, 24]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "InkNames", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["InkNames", 333, 4]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "InkSet", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["InkSet", 332, 8]);C$.$init$.apply(this);
this.addValueName$I$S(1, "CMYK");
this.addValueName$I$S(2, "Not CMYK");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "JPEGTables", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["JPEGTables", 347, 128]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "JPEGACTables", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["JPEGACTables", 521, 16]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "JPEGDCTables", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["JPEGDCTables", 520, 16]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "JPEGInterchangeFormat", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["JPEGInterchangeFormat", 513, 16]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "JPEGInterchangeFormatLength", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["JPEGInterchangeFormatLength", 514, 16]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "JPEGLosslessPredictors", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["JPEGLosslessPredictors", 517, 8]);C$.$init$.apply(this);
this.addValueName$I$S(1, "A");
this.addValueName$I$S(2, "B");
this.addValueName$I$S(3, "C");
this.addValueName$I$S(4, "A+B-C");
this.addValueName$I$S(5, "A+((B-C)/2)");
this.addValueName$I$S(6, "B+((A-C)/2)");
this.addValueName$I$S(7, "(A+B)/2");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "JPEGPointTransforms", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["JPEGPointTransforms", 518, 8]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "JPEGProc", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["JPEGProc", 512, 8]);C$.$init$.apply(this);
this.addValueName$I$S(1, "Baseline sequential process");
this.addValueName$I$S(14, "Lossless process with Huffman coding");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "JPEGQTables", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["JPEGQTables", 519, 16]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "JPEGRestartInterval", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["JPEGRestartInterval", 515, 8]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "Make", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["Make", 271, 4]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "MaxSampleValue", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["MaxSampleValue", 281, 8]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "MinSampleValue", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["MinSampleValue", 280, 8]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "Model", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["Model", 272, 4]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "NewSubfileType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["NewSubfileType", 254, 16]);C$.$init$.apply(this);
this.addValueName$I$S(0, "Default");
this.addValueName$I$S(1, "ReducedResolution");
this.addValueName$I$S(2, "SinglePage");
this.addValueName$I$S(3, "SinglePage+ReducedResolution");
this.addValueName$I$S(4, "Transparency");
this.addValueName$I$S(5, "Transparency+ReducedResolution");
this.addValueName$I$S(6, "Transparency+SinglePage");
this.addValueName$I$S(7, "Transparency+SinglePage+ReducedResolution");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "NumberOfInks", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["NumberOfInks", 334, 8]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "Orientation", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["Orientation", 274, 8]);C$.$init$.apply(this);
this.addValueName$I$S(1, "Row 0=Top, Column 0=Left");
this.addValueName$I$S(2, "Row 0=Top, Column 0=Right");
this.addValueName$I$S(3, "Row 0=Bottom, Column 0=Right");
this.addValueName$I$S(4, "Row 0=Bottom, Column 0=Left");
this.addValueName$I$S(5, "Row 0=Left, Column 0=Top");
this.addValueName$I$S(6, "Row 0=Right, Column 0=Top");
this.addValueName$I$S(7, "Row 0=Right, Column 0=Bottom");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "PageName", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["PageName", 285, 4]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "PageNumber", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["PageNumber", 297, 8]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "PhotometricInterpretation", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["PhotometricInterpretation", 262, 8]);C$.$init$.apply(this);
this.addValueName$I$S(0, "WhiteIsZero");
this.addValueName$I$S(1, "BlackIsZero");
this.addValueName$I$S(2, "RGB");
this.addValueName$I$S(3, "Palette Color");
this.addValueName$I$S(4, "Transparency Mask");
this.addValueName$I$S(5, "CMYK");
this.addValueName$I$S(6, "YCbCr");
this.addValueName$I$S(8, "CIELAB");
this.addValueName$I$S(9, "ICCLAB");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "PlanarConfiguration", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["PlanarConfiguration", 284, 8]);C$.$init$.apply(this);
this.addValueName$I$S(1, "Chunky");
this.addValueName$I$S(2, "Planar");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "Predictor", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["Predictor", 317, 8]);C$.$init$.apply(this);
this.addValueName$I$S(1, "None");
this.addValueName$I$S(2, "Horizontal Differencing");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "PrimaryChromaticities", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["PrimaryChromaticities", 319, 32]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "ReferenceBlackWhite", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["ReferenceBlackWhite", 532, 32]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "ResolutionUnit", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["ResolutionUnit", 296, 8]);C$.$init$.apply(this);
this.addValueName$I$S(1, "None");
this.addValueName$I$S(2, "Inch");
this.addValueName$I$S(3, "Centimeter");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "RowsPerStrip", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["RowsPerStrip", 278, 24]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "SampleFormat", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["SampleFormat", 339, 8]);C$.$init$.apply(this);
this.addValueName$I$S(1, "Unsigned Integer");
this.addValueName$I$S(2, "Signed Integer");
this.addValueName$I$S(3, "Floating Point");
this.addValueName$I$S(4, "Undefined");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "SamplesPerPixel", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["SamplesPerPixel", 277, 8]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "SMaxSampleValue", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["SMaxSampleValue", 341, 8058]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "SMinSampleValue", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["SMinSampleValue", 340, 8058]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "Software", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["Software", 305, 4]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "StripByteCounts", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["StripByteCounts", 279, 24]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "StripOffsets", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["StripOffsets", 273, 24]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "SubfileType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["SubfileType", 255, 8]);C$.$init$.apply(this);
this.addValueName$I$S(1, "FullResolution");
this.addValueName$I$S(2, "ReducedResolution");
this.addValueName$I$S(3, "SinglePage");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "T4Options", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["T4Options", 292, 16]);C$.$init$.apply(this);
this.addValueName$I$S(0, "Default 1DCoding");
this.addValueName$I$S(1, "2DCoding");
this.addValueName$I$S(2, "Uncompressed");
this.addValueName$I$S(3, "2DCoding+Uncompressed");
this.addValueName$I$S(4, "EOLByteAligned");
this.addValueName$I$S(5, "2DCoding+EOLByteAligned");
this.addValueName$I$S(6, "Uncompressed+EOLByteAligned");
this.addValueName$I$S(7, "2DCoding+Uncompressed+EOLByteAligned");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "T6Options", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["T6Options", 293, 16]);C$.$init$.apply(this);
this.addValueName$I$S(0, "Default");
this.addValueName$I$S(2, "Uncompressed");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "TargetPrinter", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["TargetPrinter", 337, 4]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "Threshholding", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["Threshholding", 263, 8]);C$.$init$.apply(this);
this.addValueName$I$S(1, "None");
this.addValueName$I$S(2, "OrderedDither");
this.addValueName$I$S(3, "RandomizedDither");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "TileByteCounts", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["TileByteCounts", 325, 24]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "TileOffsets", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["TileOffsets", 324, 16]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "TileLength", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["TileLength", 323, 24]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "TileWidth", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["TileWidth", 322, 24]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "TransferFunction", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["TransferFunction", 301, 8]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "TransferRange", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["TransferRange", 342, 8]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "WhitePoint", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["WhitePoint", 318, 32]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "XPosition", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["XPosition", 286, 32]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "XResolution", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["XResolution", 282, 32]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "YCbCrCoefficients", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["YCbCrCoefficients", 529, 32]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "YCbCrPositioning", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["YCbCrPositioning", 531, 8]);C$.$init$.apply(this);
this.addValueName$I$S(1, "Centered");
this.addValueName$I$S(2, "Cosited");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "YCbCrSubSampling", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["YCbCrSubSampling", 530, 8]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "YPosition", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["YPosition", 287, 32]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "YResolution", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["YResolution", 283, 32]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.BaselineTIFFTagSet, "ICCProfile", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["ICC Profile", 34675, 128]);C$.$init$.apply(this);
}, 1);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
