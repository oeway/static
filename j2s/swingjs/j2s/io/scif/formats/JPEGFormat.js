(function(){var P$=Clazz.newPackage("io.scif.formats"),I$=[[0,'io.scif.util.FormatTools','net.imagej.axis.Axes','java.io.ByteArrayOutputStream','org.scijava.util.Bytes','org.scijava.io.location.BytesLocation']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JPEGFormat", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'io.scif.formats.ImageIOFormat');
C$.$classes$=[['Metadata',9],['Checker',9],['Parser',9],['Reader',9],['Writer',9]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'makeSuffixArray$', function () {
return Clazz.array(String, -1, ["jpg", "jpeg", "jpe"]);
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.formats.JPEGFormat',null,['org.scijava.plugin.Plugin']],['type="io.scif.Format.class" name="JPEG" ']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.JPEGFormat, "Metadata", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['io.scif.formats.ImageIOFormat','.Metadata']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'close$Z', function (fileOnly) {
C$.superclazz.prototype.close$Z.apply(this, [fileOnly]);
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JPEGFormat, "Checker", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'io.scif.AbstractChecker');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'suffixNecessary$', function () {
return false;
});

Clazz.newMeth(C$, 'suffixSufficient$', function () {
return false;
});

Clazz.newMeth(C$, 'isFormat$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig', function (name, config) {
if (config.checkerIsOpen$()) {
return C$.superclazz.prototype.isFormat$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig.apply(this, [name, config]);
}return $I$(1).checkSuffix$S$SA(name.getName$(), this.getFormat$().getSuffixes$());
});

Clazz.newMeth(C$, 'isFormat$org_scijava_io_handle_DataHandle', function (stream) {
var blockLen=4;
if (!$I$(1).validStream$org_scijava_io_handle_DataHandle$I$Z(stream, 4, false)) return false;
var signature=Clazz.array(Byte.TYPE, [4]);
stream.read$BA(signature);
if (signature[0] != -1 || signature[1] != -40  || signature[2] != -1  || (signature[3] & 240) == 0 ) {
stream.seek$J(0);
return false;
}try {
stream.seek$J(0);
var m=this.getFormat$().createParser$().parse$org_scijava_io_handle_DataHandle(stream);
stream.seek$J(0);
if (m.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(2).X) > 8192 && m.get$I(0).getAxisLength$net_imagej_axis_AxisType($I$(2).Y) > 8192 ) {
return false;
}} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.FormatException")){
this.log$().error$O$Throwable("Failed to parse JPEG data", e);
return false;
} else {
throw e;
}
}
return true;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JPEGFormat, "Parser", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['io.scif.formats.ImageIOFormat','.Parser']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['dataHandleService','org.scijava.io.handle.DataHandleService']]]

Clazz.newMeth(C$, ['typedParse$org_scijava_io_handle_DataHandle$io_scif_formats_JPEGFormat_Metadata$io_scif_config_SCIFIOConfig','typedParse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig'], function (handle, meta, config) {
var name=handle.get$().getName$();
try {
C$.superclazz.prototype.typedParse$org_scijava_io_handle_DataHandle$TM$io_scif_config_SCIFIOConfig.apply(this, [handle, meta, config]);
} catch (e) {
if (Clazz.exceptionOf(e,"java.awt.color.CMMException")){
var v=Clazz.new_($I$(3,1));
var tag=Clazz.array(Byte.TYPE, [2]);
handle.read$BA(tag);
v.write$BA(tag);
handle.read$BA(tag);
var tagValue=$I$(4).toShort$BA$Z(tag, false) & 65535;
var appNoteFound=false;
while (tagValue != 65499){
if (!appNoteFound || (tagValue < 65504 && tagValue >= 65520 ) ) {
v.write$BA(tag);
handle.read$BA(tag);
var len=$I$(4).toShort$BA$Z(tag, false) & 65535;
var tagContents=Clazz.array(Byte.TYPE, [len - 2]);
handle.read$BA(tagContents);
v.write$BA(tag);
v.write$BA(tagContents);
} else {
handle.read$BA(tag);
var len=$I$(4).toShort$BA$Z(tag, false) & 65535;
handle.skipBytes$I(len - 2);
}if (tagValue >= 65504 && tagValue < 65520  && !appNoteFound ) {
appNoteFound=true;
}handle.read$BA(tag);
tagValue=$I$(4).toShort$BA$Z(tag, false) & 65535;
}
v.write$BA(tag);
var remainder=Clazz.array(Byte.TYPE, [((handle.length$() - handle.offset$())|0)]);
handle.read$BA(remainder);
v.write$BA(remainder);
var bytes=this.dataHandleService.create$TD(Clazz.new_($I$(5,1).c$$BA,[v.toByteArray$()]));
C$.superclazz.prototype.parse$org_scijava_io_handle_DataHandle$TM.apply(this, [bytes, meta]);
} else {
throw e;
}
}
this.getMetadata$().setDatasetName$S(name);
});
C$.$getAnn$ = function(){ return [
[['dataHandleService','org.scijava.io.handle.DataHandleService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JPEGFormat, "Reader", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['io.scif.formats.ImageIOFormat','.Reader']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JPEGFormat, "Writer", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, ['io.scif.formats.ImageIOFormat','.Writer']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$S.apply(this,["jpeg"]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getPixelTypes$S', function (codec) {
return Clazz.array(Integer.TYPE, -1, [1]);
});
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:40 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
