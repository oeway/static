(function(){var P$=Clazz.newPackage("io.scif.img"),I$=[[0,'net.imglib2.type.numeric.real.FloatType','net.imglib2.type.numeric.real.DoubleType','net.imglib2.type.numeric.integer.UnsignedByteType','io.scif.img.ImgSaver','io.scif.img.ImgOpener','org.scijava.log.LogService','org.scijava.io.location.LocationService']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IO");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['logService','org.scijava.log.LogService']]]

Clazz.newMeth(C$, 'open$org_scijava_io_location_Location', function (source) {
var opener=C$.opener$();
var imgPlus=null;
try {
imgPlus=opener.openImgs$org_scijava_io_location_Location(source);
C$.register$java_util_List$io_scif_img_AbstractImgIOComponent(imgPlus, opener);
} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.img.ImgIOException")){
C$.openError$org_scijava_io_location_Location$Exception(source, e);
} else {
throw e;
}
}
return imgPlus;
}, 1);

Clazz.newMeth(C$, 'open$S', function (source) {
return C$.open$org_scijava_io_location_Location(C$.resolve$S(source));
}, 1);

Clazz.newMeth(C$, 'openFloat$org_scijava_io_location_Location', function (source) {
var opener=C$.opener$();
var imgPlus=null;
try {
imgPlus=opener.openImgs$org_scijava_io_location_Location$TT(source, Clazz.new_($I$(1,1)));
C$.register$java_util_List$io_scif_img_AbstractImgIOComponent(imgPlus, opener);
} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.img.ImgIOException")){
C$.openError$org_scijava_io_location_Location$Exception(source, e);
} else {
throw e;
}
}
return imgPlus;
}, 1);

Clazz.newMeth(C$, 'openFloat$S', function (source) {
return C$.openFloat$org_scijava_io_location_Location(C$.resolve$S(source));
}, 1);

Clazz.newMeth(C$, 'openDouble$org_scijava_io_location_Location', function (source) {
var opener=C$.opener$();
var imgPlus=null;
try {
imgPlus=opener.openImgs$org_scijava_io_location_Location$TT(source, Clazz.new_($I$(2,1)));
C$.register$java_util_List$io_scif_img_AbstractImgIOComponent(imgPlus, opener);
} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.img.ImgIOException")){
C$.openError$org_scijava_io_location_Location$Exception(source, e);
} else {
throw e;
}
}
return imgPlus;
}, 1);

Clazz.newMeth(C$, 'openDouble$S', function (source) {
return C$.openDouble$org_scijava_io_location_Location(C$.resolve$S(source));
}, 1);

Clazz.newMeth(C$, 'openUnsignedByte$org_scijava_io_location_Location', function (source) {
var opener=C$.opener$();
var imgPlus=null;
try {
imgPlus=opener.openImgs$org_scijava_io_location_Location$TT(source, Clazz.new_($I$(3,1)));
C$.register$java_util_List$io_scif_img_AbstractImgIOComponent(imgPlus, opener);
} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.img.ImgIOException")){
C$.openError$org_scijava_io_location_Location$Exception(source, e);
} else {
throw e;
}
}
return imgPlus;
}, 1);

Clazz.newMeth(C$, 'openUnsignedByte$S', function (source) {
return C$.openUnsignedByte$org_scijava_io_location_Location(C$.resolve$S(source));
}, 1);

Clazz.newMeth(C$, 'open$org_scijava_io_location_Location$TT', function (source, type) {
var opener=C$.opener$();
var imgPlus=null;
try {
imgPlus=opener.openImgs$org_scijava_io_location_Location$TT(source, type);
C$.register$java_util_List$io_scif_img_AbstractImgIOComponent(imgPlus, opener);
} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.img.ImgIOException")){
C$.openError$org_scijava_io_location_Location$Exception(source, e);
} else {
throw e;
}
}
return imgPlus;
}, 1);

Clazz.newMeth(C$, 'open$S$TT', function (source, type) {
return C$.open$org_scijava_io_location_Location$TT(C$.resolve$S(source), type);
}, 1);

Clazz.newMeth(C$, 'open$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig', function (source, config) {
var opener=C$.opener$();
var imgPlus=null;
try {
imgPlus=opener.openImgs$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(source, config);
C$.register$java_util_List$io_scif_img_AbstractImgIOComponent(imgPlus, opener);
} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.img.ImgIOException")){
C$.openError$org_scijava_io_location_Location$Exception(source, e);
} else {
throw e;
}
}
return imgPlus;
}, 1);

Clazz.newMeth(C$, 'open$org_scijava_io_location_Location$TT$io_scif_config_SCIFIOConfig', function (source, type, config) {
var opener=C$.opener$();
var imgPlus=null;
try {
imgPlus=opener.openImgs$org_scijava_io_location_Location$TT$io_scif_config_SCIFIOConfig(source, type, config);
C$.register$java_util_List$io_scif_img_AbstractImgIOComponent(imgPlus, opener);
} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.img.ImgIOException")){
C$.openError$org_scijava_io_location_Location$Exception(source, e);
} else {
throw e;
}
}
return imgPlus;
}, 1);

Clazz.newMeth(C$, 'open$org_scijava_io_location_Location$net_imglib2_img_ImgFactory', function (source, imgFactory) {
var opener=C$.opener$();
var imgPlus=null;
try {
imgPlus=opener.openImgs$org_scijava_io_location_Location$net_imglib2_img_ImgFactory(source, imgFactory);
C$.register$java_util_List$io_scif_img_AbstractImgIOComponent(imgPlus, opener);
} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.img.ImgIOException")){
C$.openError$org_scijava_io_location_Location$Exception(source, e);
} else {
throw e;
}
}
return imgPlus;
}, 1);

Clazz.newMeth(C$, 'open$org_scijava_io_location_Location$net_imglib2_img_ImgFactory$io_scif_config_SCIFIOConfig', function (source, imgFactory, config) {
var opener=C$.opener$();
var imgPlus=null;
try {
imgPlus=opener.openImgs$org_scijava_io_location_Location$net_imglib2_img_ImgFactory$io_scif_config_SCIFIOConfig(source, imgFactory, config);
C$.register$java_util_List$io_scif_img_AbstractImgIOComponent(imgPlus, opener);
} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.img.ImgIOException")){
C$.openError$org_scijava_io_location_Location$Exception(source, e);
} else {
throw e;
}
}
return imgPlus;
}, 1);

Clazz.newMeth(C$, 'open$org_scijava_io_location_Location$net_imglib2_img_ImgFactory$TT', function (source, imgFactory, type) {
var opener=C$.opener$();
var imgPlus=null;
try {
imgPlus=opener.openImgs$org_scijava_io_location_Location$net_imglib2_img_ImgFactory(source, imgFactory);
C$.register$java_util_List$io_scif_img_AbstractImgIOComponent(imgPlus, opener);
} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.img.ImgIOException")){
C$.openError$org_scijava_io_location_Location$Exception(source, e);
} else {
throw e;
}
}
return imgPlus;
}, 1);

Clazz.newMeth(C$, 'open$io_scif_Reader$TT$io_scif_config_SCIFIOConfig', function (reader, type, config) {
var opener=C$.opener$();
var imgPlus=null;
try {
imgPlus=opener.openImgs$io_scif_Reader$TT$io_scif_config_SCIFIOConfig(reader, type, config);
C$.register$java_util_List$io_scif_img_AbstractImgIOComponent(imgPlus, opener);
} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.img.ImgIOException")){
C$.openError$org_scijava_io_location_Location$Exception(reader.getMetadata$().getSourceLocation$(), e);
} else {
throw e;
}
}
return imgPlus;
}, 1);

Clazz.newMeth(C$, 'open$io_scif_Reader$TT$net_imglib2_img_ImgFactory$io_scif_config_SCIFIOConfig', function (reader, type, imgFactory, config) {
var opener=C$.opener$();
var imgPlus=null;
try {
imgPlus=opener.openImgs$io_scif_Reader$net_imglib2_img_ImgFactory$io_scif_config_SCIFIOConfig(reader, imgFactory.imgFactory$TS(type), config);
C$.register$java_util_List$io_scif_img_AbstractImgIOComponent(imgPlus, opener);
} catch (e) {
if (Clazz.exceptionOf(e,"io.scif.img.ImgIOException")){
C$.openError$org_scijava_io_location_Location$Exception(reader.getMetadata$().getSourceLocation$(), e);
} else {
throw e;
}
}
return imgPlus;
}, 1);

Clazz.newMeth(C$, 'save$org_scijava_io_location_Location$net_imglib2_img_Img', function (dest, img) {
try {
Clazz.new_($I$(4,1)).saveImg$org_scijava_io_location_Location$net_imglib2_img_Img(dest, img);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"net.imglib2.exception.IncompatibleTypeException")){
var e = e$$;
{
C$.saveError$org_scijava_io_location_Location$Exception(dest, e);
}
} else if (Clazz.exceptionOf(e$$,"io.scif.img.ImgIOException")){
var e = e$$;
{
C$.saveError$org_scijava_io_location_Location$Exception(dest, e);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'save$org_scijava_io_location_Location$io_scif_img_SCIFIOImgPlus$I', function (dest, imgPlus, imageIndex) {
try {
Clazz.new_($I$(4,1)).saveImg$org_scijava_io_location_Location$io_scif_img_SCIFIOImgPlus$I(dest, imgPlus, imageIndex);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"net.imglib2.exception.IncompatibleTypeException")){
var e = e$$;
{
C$.saveError$org_scijava_io_location_Location$Exception(dest, e);
}
} else if (Clazz.exceptionOf(e$$,"io.scif.img.ImgIOException")){
var e = e$$;
{
C$.saveError$org_scijava_io_location_Location$Exception(dest, e);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'register$java_util_List$io_scif_img_AbstractImgIOComponent', function (imgPlus, component) {
{
return;
}
}, 1);

Clazz.newMeth(C$, 'opener$', function () {
var opener=Clazz.new_($I$(5,1));
if (C$.logService == null ) {
{
if (C$.logService == null ) {
C$.logService=opener.getContext$().getService$Class(Clazz.getClass($I$(6),['setLevel$I','setLevel$S$I','setLevelForLogger$S$I']));
}}}return opener;
}, 1);

Clazz.newMeth(C$, 'resolve$S', function (source) {
var loc=C$.opener$().context$().getService$Class(Clazz.getClass($I$(7),['getPluginType$','getResolver$java_net_URI','getType$','resolve$S','resolve$java_net_URI']));
var location=null;
try {
location=loc.resolve$S(source);
} catch (e) {
if (Clazz.exceptionOf(e,"java.net.URISyntaxException")){
C$.resolveError$S$Exception(source, e);
} else {
throw e;
}
}
return location;
}, 1);

Clazz.newMeth(C$, 'openError$org_scijava_io_location_Location$Exception', function (source, e) {
C$.logService.error$O$Throwable("Failed to open ImgPlus for source: " + source, e);
}, 1);

Clazz.newMeth(C$, 'saveError$org_scijava_io_location_Location$Exception', function (dest, e) {
C$.logService.error$O$Throwable("Failed to save ImgPlus to id: " + dest, e);
}, 1);

Clazz.newMeth(C$, 'resolveError$S$Exception', function (source, e) {
C$.logService.error$O$Throwable("Failed to resolve source string: " + source, e);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:43 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
