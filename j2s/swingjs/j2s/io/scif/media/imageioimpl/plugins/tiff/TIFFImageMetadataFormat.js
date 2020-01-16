(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),I$=[[0,'io.scif.media.imageioimpl.plugins.tiff.TIFFElementInfo','io.scif.media.imageioimpl.plugins.tiff.TIFFAttrInfo']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFImageMetadataFormat", null, 'io.scif.media.imageioimpl.plugins.tiff.TIFFMetadataFormat');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.theInstance=null;
{
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['theInstance','io.scif.media.imageioimpl.plugins.tiff.TIFFImageMetadataFormat']]]

Clazz.newMeth(C$, 'canNodeAppear$S$javax_imageio_ImageTypeSpecifier', function (elementName, imageType) {
return false;
});

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.resourceBaseName="io.scif.media.imageioimpl.plugins.tiff.TIFFImageMetadataFormatResources";
this.rootName="com_sun_media_imageio_plugins_tiff_image_1.0";
var einfo;
var ainfo;
var empty=Clazz.array(String, [0]);
var childNames;
var attrNames;
childNames=Clazz.array(String, -1, ["TIFFIFD"]);
einfo=Clazz.new_($I$(1,1).c$$SA$SA$I,[childNames, empty, 4]);
this.elementInfoMap.put$TK$TV("com_sun_media_imageio_plugins_tiff_image_1.0", einfo);
childNames=Clazz.array(String, -1, ["TIFFField", "TIFFIFD"]);
attrNames=Clazz.array(String, -1, ["tagSets", "parentTagNumber", "parentTagName"]);
einfo=Clazz.new_($I$(1,1).c$$SA$SA$I,[childNames, attrNames, 4]);
this.elementInfoMap.put$TK$TV("TIFFIFD", einfo);
ainfo=Clazz.new_($I$(2,1));
ainfo.dataType=0;
ainfo.isRequired=true;
this.attrInfoMap.put$TK$TV("TIFFIFD/tagSets", ainfo);
ainfo=Clazz.new_($I$(2,1));
ainfo.dataType=2;
ainfo.isRequired=false;
this.attrInfoMap.put$TK$TV("TIFFIFD/parentTagNumber", ainfo);
ainfo=Clazz.new_($I$(2,1));
ainfo.dataType=0;
ainfo.isRequired=false;
this.attrInfoMap.put$TK$TV("TIFFIFD/parentTagName", ainfo);
var types=Clazz.array(String, -1, ["TIFFByte", "TIFFAscii", "TIFFShort", "TIFFSShort", "TIFFLong", "TIFFSLong", "TIFFRational", "TIFFSRational", "TIFFFloat", "TIFFDouble", "TIFFUndefined"]);
attrNames=Clazz.array(String, -1, ["value", "description"]);
var attrNamesValueOnly=Clazz.array(String, -1, ["value"]);
var ainfoValue=Clazz.new_($I$(2,1));
var ainfoDescription=Clazz.new_($I$(2,1));
for (var i=0; i < types.length; i++) {
if (!types[i].equals$O("TIFFUndefined")) {
childNames=Clazz.array(String, [1]);
childNames[0]=types[i];
einfo=Clazz.new_($I$(1,1).c$$SA$SA$I,[childNames, empty, 4]);
this.elementInfoMap.put$TK$TV(types[i] + "s", einfo);
}var hasDescription=!types[i].equals$O("TIFFUndefined") && !types[i].equals$O("TIFFAscii") && !types[i].equals$O("TIFFRational") && !types[i].equals$O("TIFFSRational") && !types[i].equals$O("TIFFFloat") && !types[i].equals$O("TIFFDouble")  ;
var anames=hasDescription ? attrNames : attrNamesValueOnly;
einfo=Clazz.new_($I$(1,1).c$$SA$SA$I,[empty, anames, 0]);
this.elementInfoMap.put$TK$TV(types[i], einfo);
this.attrInfoMap.put$TK$TV(types[i] + "/value", ainfoValue);
if (hasDescription) {
this.attrInfoMap.put$TK$TV(types[i] + "/description", ainfoDescription);
}}
childNames=Clazz.array(String, [2 * types.length - 1]);
for (var i=0; i < types.length; i++) {
childNames[2 * i]=types[i];
if (!types[i].equals$O("TIFFUndefined")) {
childNames[2 * i + 1]=types[i] + "s";
}}
attrNames=Clazz.array(String, -1, ["number", "name"]);
einfo=Clazz.new_($I$(1,1).c$$SA$SA$I,[childNames, attrNames, 3]);
this.elementInfoMap.put$TK$TV("TIFFField", einfo);
ainfo=Clazz.new_($I$(2,1));
ainfo.isRequired=true;
this.attrInfoMap.put$TK$TV("TIFFField/number", ainfo);
ainfo=Clazz.new_($I$(2,1));
this.attrInfoMap.put$TK$TV("TIFFField/name", ainfo);
}, 1);

Clazz.newMeth(C$, 'getInstance$', function () {
if (C$.theInstance == null ) {
C$.theInstance=Clazz.new_(C$);
}return C$.theInstance;
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
