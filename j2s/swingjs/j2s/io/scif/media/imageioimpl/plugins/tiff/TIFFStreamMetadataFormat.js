(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),I$=[[0,'io.scif.media.imageioimpl.plugins.tiff.TIFFElementInfo','io.scif.media.imageioimpl.plugins.tiff.TIFFAttrInfo']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TIFFStreamMetadataFormat", null, 'io.scif.media.imageioimpl.plugins.tiff.TIFFMetadataFormat');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.theInstance=null;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['theInstance','io.scif.media.imageioimpl.plugins.tiff.TIFFStreamMetadataFormat']]]

Clazz.newMeth(C$, 'canNodeAppear$S$javax_imageio_ImageTypeSpecifier', function (elementName, imageType) {
return false;
});

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.resourceBaseName="io.scif.media.imageioimpl.plugins.tiff.TIFFStreamMetadataFormatResources";
this.rootName="com_sun_media_imageio_plugins_tiff_stream_1.0";
var einfo;
var ainfo;
var empty=Clazz.array(String, [0]);
var childNames;
var attrNames;
childNames=Clazz.array(String, -1, ["ByteOrder"]);
einfo=Clazz.new_($I$(1,1).c$$SA$SA$I,[childNames, empty, 1]);
this.elementInfoMap.put$TK$TV("com_sun_media_imageio_plugins_tiff_stream_1.0", einfo);
childNames=empty;
attrNames=Clazz.array(String, -1, ["value"]);
einfo=Clazz.new_($I$(1,1).c$$SA$SA$I,[childNames, attrNames, 0]);
this.elementInfoMap.put$TK$TV("ByteOrder", einfo);
ainfo=Clazz.new_($I$(2,1));
ainfo.dataType=0;
ainfo.isRequired=true;
this.attrInfoMap.put$TK$TV("ByteOrder/value", ainfo);
}, 1);

Clazz.newMeth(C$, 'getInstance$', function () {
if (C$.theInstance == null ) {
C$.theInstance=Clazz.new_(C$);
}return C$.theInstance;
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
