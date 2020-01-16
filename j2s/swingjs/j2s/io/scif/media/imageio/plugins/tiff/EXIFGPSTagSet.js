(function(){var P$=Clazz.newPackage("io.scif.media.imageio.plugins.tiff"),I$=[[0,'io.scif.media.imageio.plugins.tiff.EXIFGPSTagSet','java.util.ArrayList',['io.scif.media.imageio.plugins.tiff.EXIFGPSTagSet','.GPSVersionID'],['io.scif.media.imageio.plugins.tiff.EXIFGPSTagSet','.GPSLatitudeRef'],['io.scif.media.imageio.plugins.tiff.EXIFGPSTagSet','.GPSLatitude'],['io.scif.media.imageio.plugins.tiff.EXIFGPSTagSet','.GPSLongitudeRef'],['io.scif.media.imageio.plugins.tiff.EXIFGPSTagSet','.GPSLongitude'],['io.scif.media.imageio.plugins.tiff.EXIFGPSTagSet','.GPSAltitudeRef'],['io.scif.media.imageio.plugins.tiff.EXIFGPSTagSet','.GPSAltitude'],['io.scif.media.imageio.plugins.tiff.EXIFGPSTagSet','.GPSTimeStamp'],['io.scif.media.imageio.plugins.tiff.EXIFGPSTagSet','.GPSSatellites'],['io.scif.media.imageio.plugins.tiff.EXIFGPSTagSet','.GPSStatus'],['io.scif.media.imageio.plugins.tiff.EXIFGPSTagSet','.GPSMeasureMode'],['io.scif.media.imageio.plugins.tiff.EXIFGPSTagSet','.GPSDOP'],['io.scif.media.imageio.plugins.tiff.EXIFGPSTagSet','.GPSSpeedRef'],['io.scif.media.imageio.plugins.tiff.EXIFGPSTagSet','.GPSSpeed'],['io.scif.media.imageio.plugins.tiff.EXIFGPSTagSet','.GPSTrackRef'],['io.scif.media.imageio.plugins.tiff.EXIFGPSTagSet','.GPSTrack'],['io.scif.media.imageio.plugins.tiff.EXIFGPSTagSet','.GPSImgDirectionRef'],['io.scif.media.imageio.plugins.tiff.EXIFGPSTagSet','.GPSImgDirection'],['io.scif.media.imageio.plugins.tiff.EXIFGPSTagSet','.GPSMapDatum'],['io.scif.media.imageio.plugins.tiff.EXIFGPSTagSet','.GPSDestLatitudeRef'],['io.scif.media.imageio.plugins.tiff.EXIFGPSTagSet','.GPSDestLatitude'],['io.scif.media.imageio.plugins.tiff.EXIFGPSTagSet','.GPSDestLongitudeRef'],['io.scif.media.imageio.plugins.tiff.EXIFGPSTagSet','.GPSDestLongitude'],['io.scif.media.imageio.plugins.tiff.EXIFGPSTagSet','.GPSDestBearingRef'],['io.scif.media.imageio.plugins.tiff.EXIFGPSTagSet','.GPSDestBearing'],['io.scif.media.imageio.plugins.tiff.EXIFGPSTagSet','.GPSDestDistanceRef'],['io.scif.media.imageio.plugins.tiff.EXIFGPSTagSet','.GPSDestDistance'],['io.scif.media.imageio.plugins.tiff.EXIFGPSTagSet','.GPSProcessingMethod'],['io.scif.media.imageio.plugins.tiff.EXIFGPSTagSet','.GPSAreaInformation'],['io.scif.media.imageio.plugins.tiff.EXIFGPSTagSet','.GPSDateStamp'],['io.scif.media.imageio.plugins.tiff.EXIFGPSTagSet','.GPSDifferential']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EXIFGPSTagSet", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTagSet');
C$.$classes$=[['GPSVersionID',8],['GPSLatitudeRef',8],['GPSLatitude',8],['GPSLongitudeRef',8],['GPSLongitude',8],['GPSAltitudeRef',8],['GPSAltitude',8],['GPSTimeStamp',8],['GPSSatellites',8],['GPSStatus',8],['GPSMeasureMode',8],['GPSDOP',8],['GPSSpeedRef',8],['GPSSpeed',8],['GPSTrackRef',8],['GPSTrack',8],['GPSImgDirectionRef',8],['GPSImgDirection',8],['GPSMapDatum',8],['GPSDestLatitudeRef',8],['GPSDestLatitude',8],['GPSDestLongitudeRef',8],['GPSDestLongitude',8],['GPSDestBearingRef',8],['GPSDestBearing',8],['GPSDestDistanceRef',8],['GPSDestDistance',8],['GPSProcessingMethod',8],['GPSAreaInformation',8],['GPSDateStamp',8],['GPSDifferential',8]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.theInstance=null;
C$.GPS_VERSION_2_2=Clazz.array(Byte.TYPE, -1, ["2", "2", "0", "0"]);
C$.DIFFERENTIAL_CORRECTION_NONE=0;
C$.DIFFERENTIAL_CORRECTION_APPLIED=1;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['I',['DIFFERENTIAL_CORRECTION_NONE','DIFFERENTIAL_CORRECTION_APPLIED'],'O',['theInstance','io.scif.media.imageio.plugins.tiff.EXIFGPSTagSet','GPS_VERSION_2_2','byte[]']]]

Clazz.newMeth(C$, 'initTags$', function () {
var tags=Clazz.new_($I$(2,1).c$$I,[31]);
tags.add$TE(Clazz.new_($I$(3,1)));
tags.add$TE(Clazz.new_($I$(4,1)));
tags.add$TE(Clazz.new_($I$(5,1)));
tags.add$TE(Clazz.new_($I$(6,1)));
tags.add$TE(Clazz.new_($I$(7,1)));
tags.add$TE(Clazz.new_($I$(8,1)));
tags.add$TE(Clazz.new_($I$(9,1)));
tags.add$TE(Clazz.new_($I$(10,1)));
tags.add$TE(Clazz.new_($I$(11,1)));
tags.add$TE(Clazz.new_($I$(12,1)));
tags.add$TE(Clazz.new_($I$(13,1)));
tags.add$TE(Clazz.new_($I$(14,1)));
tags.add$TE(Clazz.new_($I$(15,1)));
tags.add$TE(Clazz.new_($I$(16,1)));
tags.add$TE(Clazz.new_($I$(17,1)));
tags.add$TE(Clazz.new_($I$(18,1)));
tags.add$TE(Clazz.new_($I$(19,1)));
tags.add$TE(Clazz.new_($I$(20,1)));
tags.add$TE(Clazz.new_($I$(21,1)));
tags.add$TE(Clazz.new_($I$(22,1)));
tags.add$TE(Clazz.new_($I$(23,1)));
tags.add$TE(Clazz.new_($I$(24,1)));
tags.add$TE(Clazz.new_($I$(25,1)));
tags.add$TE(Clazz.new_($I$(26,1)));
tags.add$TE(Clazz.new_($I$(27,1)));
tags.add$TE(Clazz.new_($I$(28,1)));
tags.add$TE(Clazz.new_($I$(29,1)));
tags.add$TE(Clazz.new_($I$(30,1)));
tags.add$TE(Clazz.new_($I$(31,1)));
tags.add$TE(Clazz.new_($I$(32,1)));
tags.add$TE(Clazz.new_($I$(33,1)));
return tags;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$java_util_List.apply(this,[C$.initTags$()]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getInstance$', function () {
if (C$.theInstance == null ) {
C$.theInstance=Clazz.new_(C$);
}return C$.theInstance;
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFGPSTagSet, "GPSVersionID", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GPSVersionID", 0, 2]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFGPSTagSet, "GPSLatitudeRef", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GPSLatitudeRef", 1, 4]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFGPSTagSet, "GPSLatitude", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GPSLatitude", 2, 32]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFGPSTagSet, "GPSLongitudeRef", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GPSLongitudeRef", 3, 4]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFGPSTagSet, "GPSLongitude", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GPSLongitude", 4, 32]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFGPSTagSet, "GPSAltitudeRef", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GPSAltitudeRef", 5, 2]);C$.$init$.apply(this);
this.addValueName$I$S(0, "Sea level");
this.addValueName$I$S(1, "Sea level reference (negative value)");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFGPSTagSet, "GPSAltitude", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GPSAltitude", 6, 32]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFGPSTagSet, "GPSTimeStamp", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GPSTimeStamp", 7, 32]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFGPSTagSet, "GPSSatellites", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GPSSatellites", 8, 4]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFGPSTagSet, "GPSStatus", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GPSStatus", 9, 4]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFGPSTagSet, "GPSMeasureMode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GPSMeasureMode", 10, 4]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFGPSTagSet, "GPSDOP", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GPSDOP", 11, 32]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFGPSTagSet, "GPSSpeedRef", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GPSSpeedRef", 12, 4]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFGPSTagSet, "GPSSpeed", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GPSSpeed", 13, 32]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFGPSTagSet, "GPSTrackRef", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GPSTrackRef", 14, 4]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFGPSTagSet, "GPSTrack", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GPSTrack", 15, 32]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFGPSTagSet, "GPSImgDirectionRef", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GPSImgDirectionRef", 16, 4]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFGPSTagSet, "GPSImgDirection", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GPSImgDirection", 17, 32]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFGPSTagSet, "GPSMapDatum", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GPSMapDatum", 18, 4]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFGPSTagSet, "GPSDestLatitudeRef", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GPSDestLatitudeRef", 19, 4]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFGPSTagSet, "GPSDestLatitude", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GPSDestLatitude", 20, 32]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFGPSTagSet, "GPSDestLongitudeRef", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GPSDestLongitudeRef", 21, 4]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFGPSTagSet, "GPSDestLongitude", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GPSDestLongitude", 22, 32]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFGPSTagSet, "GPSDestBearingRef", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GPSDestBearingRef", 23, 4]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFGPSTagSet, "GPSDestBearing", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GPSDestBearing", 24, 32]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFGPSTagSet, "GPSDestDistanceRef", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GPSDestDistanceRef", 25, 4]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFGPSTagSet, "GPSDestDistance", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GPSDestDistance", 26, 32]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFGPSTagSet, "GPSProcessingMethod", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GPSProcessingMethod", 27, 128]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFGPSTagSet, "GPSAreaInformation", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GPSAreaInformation", 28, 128]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFGPSTagSet, "GPSDateStamp", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GPSDateStamp", 29, 4]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFGPSTagSet, "GPSDifferential", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GPSDifferential", 30, 8]);C$.$init$.apply(this);
this.addValueName$I$S($I$(1).DIFFERENTIAL_CORRECTION_NONE, "Measurement without differential correction");
this.addValueName$I$S($I$(1).DIFFERENTIAL_CORRECTION_APPLIED, "Differential correction applied");
}, 1);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
