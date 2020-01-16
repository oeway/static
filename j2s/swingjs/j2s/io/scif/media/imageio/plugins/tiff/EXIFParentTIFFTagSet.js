(function(){var P$=Clazz.newPackage("io.scif.media.imageio.plugins.tiff"),I$=[[0,'io.scif.media.imageio.plugins.tiff.EXIFTIFFTagSet','io.scif.media.imageio.plugins.tiff.EXIFGPSTagSet','java.util.ArrayList',['io.scif.media.imageio.plugins.tiff.EXIFParentTIFFTagSet','.EXIFIFDPointer'],['io.scif.media.imageio.plugins.tiff.EXIFParentTIFFTagSet','.GPSInfoIFDPointer']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EXIFParentTIFFTagSet", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTagSet');
C$.$classes$=[['EXIFIFDPointer',8],['GPSInfoIFDPointer',8]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.theInstance=null;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['theInstance','io.scif.media.imageio.plugins.tiff.EXIFParentTIFFTagSet','tags','java.util.List']]]

Clazz.newMeth(C$, 'initTags$', function () {
C$.tags=Clazz.new_($I$(3,1).c$$I,[1]);
C$.tags.add$TE(Clazz.new_($I$(4,1)));
C$.tags.add$TE(Clazz.new_($I$(5,1)));
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
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFParentTIFFTagSet, "EXIFIFDPointer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I$io_scif_media_imageio_plugins_tiff_TIFFTagSet.apply(this,["EXIFIFDPointer", 34665, 16, $I$(1).getInstance$()]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.EXIFParentTIFFTagSet, "GPSInfoIFDPointer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I$io_scif_media_imageio_plugins_tiff_TIFFTagSet.apply(this,["GPSInfoIFDPointer", 34853, 16, $I$(2).getInstance$()]);C$.$init$.apply(this);
}, 1);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
