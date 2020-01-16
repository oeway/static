(function(){var P$=Clazz.newPackage("io.scif.media.imageio.plugins.tiff"),I$=[[0,'java.util.ArrayList',['io.scif.media.imageio.plugins.tiff.GeoTIFFTagSet','.ModelPixelScale'],['io.scif.media.imageio.plugins.tiff.GeoTIFFTagSet','.ModelTransformation'],['io.scif.media.imageio.plugins.tiff.GeoTIFFTagSet','.ModelTiePoint'],['io.scif.media.imageio.plugins.tiff.GeoTIFFTagSet','.GeoKeyDirectory'],['io.scif.media.imageio.plugins.tiff.GeoTIFFTagSet','.GeoDoubleParams'],['io.scif.media.imageio.plugins.tiff.GeoTIFFTagSet','.GeoAsciiParams']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "GeoTIFFTagSet", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTagSet');
C$.$classes$=[['ModelPixelScale',8],['ModelTransformation',8],['ModelTiePoint',8],['GeoKeyDirectory',8],['GeoDoubleParams',8],['GeoAsciiParams',8]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.theInstance=null;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['theInstance','io.scif.media.imageio.plugins.tiff.GeoTIFFTagSet','tags','java.util.List']]]

Clazz.newMeth(C$, 'initTags$', function () {
C$.tags=Clazz.new_($I$(1,1).c$$I,[42]);
C$.tags.add$TE(Clazz.new_($I$(2,1)));
C$.tags.add$TE(Clazz.new_($I$(3,1)));
C$.tags.add$TE(Clazz.new_($I$(4,1)));
C$.tags.add$TE(Clazz.new_($I$(5,1)));
C$.tags.add$TE(Clazz.new_($I$(6,1)));
C$.tags.add$TE(Clazz.new_($I$(7,1)));
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
(function(){/*c*/var C$=Clazz.newClass(P$.GeoTIFFTagSet, "ModelPixelScale", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["ModelPixelScaleTag", 33550, 4096]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GeoTIFFTagSet, "ModelTransformation", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["ModelTransformationTag", 34264, 4096]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GeoTIFFTagSet, "ModelTiePoint", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["ModelTiePointTag", 33922, 4096]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GeoTIFFTagSet, "GeoKeyDirectory", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GeoKeyDirectory", 34735, 8]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GeoTIFFTagSet, "GeoDoubleParams", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GeoDoubleParams", 34736, 4096]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.GeoTIFFTagSet, "GeoAsciiParams", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["GeoAsciiParams", 34737, 4]);C$.$init$.apply(this);
}, 1);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
