(function(){var P$=Clazz.newPackage("io.scif.media.imageio.plugins.tiff"),I$=[[0,'java.util.ArrayList',['io.scif.media.imageio.plugins.tiff.FaxTIFFTagSet','.BadFaxLines'],['io.scif.media.imageio.plugins.tiff.FaxTIFFTagSet','.CleanFaxData'],['io.scif.media.imageio.plugins.tiff.FaxTIFFTagSet','.ConsecutiveBadFaxLines']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FaxTIFFTagSet", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTagSet');
C$.$classes$=[['BadFaxLines',8],['CleanFaxData',8],['ConsecutiveBadFaxLines',8]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.theInstance=null;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['theInstance','io.scif.media.imageio.plugins.tiff.FaxTIFFTagSet','tags','java.util.List']]]

Clazz.newMeth(C$, 'initTags$', function () {
C$.tags=Clazz.new_($I$(1,1).c$$I,[42]);
C$.tags.add$TE(Clazz.new_($I$(2,1)));
C$.tags.add$TE(Clazz.new_($I$(3,1)));
C$.tags.add$TE(Clazz.new_($I$(4,1)));
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
(function(){/*c*/var C$=Clazz.newClass(P$.FaxTIFFTagSet, "BadFaxLines", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["BadFaxLines", 326, 24]);C$.$init$.apply(this);
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.FaxTIFFTagSet, "CleanFaxData", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["CleanFaxData", 327, 8]);C$.$init$.apply(this);
this.addValueName$I$S(0, "No errors");
this.addValueName$I$S(1, "Errors corrected");
this.addValueName$I$S(2, "Errors uncorrected");
}, 1);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.FaxTIFFTagSet, "ConsecutiveBadFaxLines", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.media.imageio.plugins.tiff.TIFFTag');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S$I$I.apply(this,["ConsecutiveBadFaxLines", 328, 24]);C$.$init$.apply(this);
}, 1);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1