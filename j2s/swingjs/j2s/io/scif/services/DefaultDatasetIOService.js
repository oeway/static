(function(){var P$=Clazz.newPackage("io.scif.services"),p$1={},I$=[[0,'io.scif.config.SCIFIOConfig',['io.scif.config.SCIFIOConfig','.ImgMode'],'io.scif.img.ImgOpener','java.util.ArrayList','io.scif.img.ImgSaver','net.imagej.axis.Axes']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultDatasetIOService", null, 'org.scijava.service.AbstractService', 'io.scif.services.DatasetIOService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['formatService','io.scif.services.FormatService','datasetService','net.imagej.DatasetService','locationService','org.scijava.io.location.LocationService','log','org.scijava.log.LogService']]]

Clazz.newMeth(C$, 'canOpen$org_scijava_io_location_Location', function (source) {
try {
return this.formatService.getFormat$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(source, Clazz.new_($I$(1,1)).checkerSetOpen$Z(true)) != null ;
} catch (exc) {
if (Clazz.exceptionOf(exc,"io.scif.FormatException")){
this.log.error$Throwable(exc);
} else {
throw exc;
}
}
return false;
});

Clazz.newMeth(C$, 'canOpen$S', function (source) {
try {
return this.canOpen$org_scijava_io_location_Location(this.locationService.resolve$S(source));
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.net.URISyntaxException")){
return false;
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'canSave$org_scijava_io_location_Location', function (destination) {
try {
return this.formatService.getWriterForLocation$org_scijava_io_location_Location(destination) != null ;
} catch (exc) {
if (Clazz.exceptionOf(exc,"io.scif.FormatException")){
var message=exc.getMessage$();
if (message != null  && message.startsWith$S("No compatible output format found for extension") ) {
this.log.debug$Throwable(exc);
} else this.log.error$Throwable(exc);
} else {
throw exc;
}
}
return false;
});

Clazz.newMeth(C$, 'open$org_scijava_io_location_Location', function (source) {
var config=Clazz.new_($I$(1,1));
config.imgOpenerSetIndex$I(0);
config.imgOpenerSetComputeMinMax$Z(false);
config.imgOpenerSetImgModes$io_scif_config_SCIFIOConfig_ImgModeA([$I$(2).PLANAR]);
return this.open$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(source, config);
});

Clazz.newMeth(C$, 'open$S', function (source) {
return this.open$org_scijava_io_location_Location(p$1.resolve$S.apply(this, [source]));
});

Clazz.newMeth(C$, 'open$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig', function (source, config) {
var imageOpener=Clazz.new_($I$(3,1).c$$org_scijava_Context,[this.getContext$()]);
try {
var imgPlus=imageOpener.openImgs$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(source, config).get$I(0);
var dataset=this.datasetService.create$net_imagej_ImgPlus(imgPlus);
var imageMeta=imgPlus.getImageMetadata$();
p$1.updateDataset$net_imagej_Dataset$io_scif_ImageMetadata.apply(this, [dataset, imageMeta]);
return dataset;
} catch (exc) {
if (Clazz.exceptionOf(exc,"io.scif.img.ImgIOException")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$Throwable,[exc]);
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'open$S$io_scif_config_SCIFIOConfig', function (source, config) {
return this.open$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(p$1.resolve$S.apply(this, [source]), config);
});

Clazz.newMeth(C$, 'openAll$org_scijava_io_location_Location', function (source) {
var config=Clazz.new_($I$(1,1));
config.imgOpenerSetImgModes$io_scif_config_SCIFIOConfig_ImgModeA([$I$(2).PLANAR]);
return this.openAll$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(source, config);
});

Clazz.newMeth(C$, 'openAll$S', function (source) {
return this.openAll$org_scijava_io_location_Location(p$1.resolve$S.apply(this, [source]));
});

Clazz.newMeth(C$, 'openAll$S$io_scif_config_SCIFIOConfig', function (source, config) {
return this.openAll$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(p$1.resolve$S.apply(this, [source]), config);
});

Clazz.newMeth(C$, 'openAll$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig', function (source, config) {
var datasetList=Clazz.new_(1,{E:"net.imagej.Dataset"},$I$(4,1));
var imageOpener=Clazz.new_($I$(3,1).c$$org_scijava_Context,[this.getContext$()]);
try {
var openImgs=imageOpener.openImgs$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(source, config);
for (var imgId=0; imgId != openImgs.size$(); imgId++) {
var imgPlus=openImgs.get$I(imgId);
var dataset=this.datasetService.create$net_imagej_ImgPlus(imgPlus);
var imageMeta=imgPlus.getImageMetadata$();
p$1.updateDataset$net_imagej_Dataset$io_scif_ImageMetadata.apply(this, [dataset, imageMeta]);
datasetList.add$TE(dataset);
}
} catch (exc) {
if (Clazz.exceptionOf(exc,"io.scif.img.ImgIOException")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$Throwable,[exc]);
} else {
throw exc;
}
}
return datasetList;
});

Clazz.newMeth(C$, 'save$net_imagej_Dataset$S', function (dataset, destination) {
return this.save$net_imagej_Dataset$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(dataset, p$1.resolve$S.apply(this, [destination]), Clazz.new_($I$(1,1)));
});

Clazz.newMeth(C$, 'save$net_imagej_Dataset$org_scijava_io_location_Location', function (dataset, destination) {
return this.save$net_imagej_Dataset$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(dataset, destination, Clazz.new_($I$(1,1)));
});

Clazz.newMeth(C$, 'save$net_imagej_Dataset$S$io_scif_config_SCIFIOConfig', function (dataset, destination, config) {
return this.save$net_imagej_Dataset$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(dataset, p$1.resolve$S.apply(this, [destination]), config);
});

Clazz.newMeth(C$, 'save$net_imagej_Dataset$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig', function (dataset, destination, config) {
var img=dataset.getImgPlus$();
var metadata;
var imageSaver=Clazz.new_($I$(5,1).c$$org_scijava_Context,[this.getContext$()]);
try {
metadata=imageSaver.saveImg$org_scijava_io_location_Location$net_imglib2_img_Img$io_scif_config_SCIFIOConfig(destination, img, config);
} catch (exc) {
if (Clazz.exceptionOf(exc,"io.scif.img.ImgIOException") || Clazz.exceptionOf(exc,"net.imglib2.exception.IncompatibleTypeException")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$Throwable,[exc]);
} else {
throw exc;
}
}
var name=destination.getName$();
dataset.setName$S(name);
dataset.setDirty$Z(false);
return metadata;
});

Clazz.newMeth(C$, 'updateDataset$net_imagej_Dataset$io_scif_ImageMetadata', function (dataset, imageMeta) {
var rgbMerged=false;
for (var axis, $axis = imageMeta.getAxesPlanar$().iterator$(); $axis.hasNext$()&&((axis=($axis.next$())),1);) {
if (axis.type$().equals$O($I$(6).CHANNEL)) rgbMerged=true;
}
dataset.setRGBMerged$Z(rgbMerged);
}, p$1);

Clazz.newMeth(C$, 'resolve$S', function (source) {
try {
var location=this.locationService.resolve$S(source);
if (location == null ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Unresolvable source: " + source]);
}return location;
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.net.URISyntaxException")){
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Invalid source string: " + source]);
} else {
throw exc;
}
}
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'io.scif.services.DefaultDatasetIOService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['formatService','io.scif.services.FormatService',null,['org.scijava.plugin.Parameter']],['']],
  [['datasetService','net.imagej.DatasetService',null,['org.scijava.plugin.Parameter']],['']],
  [['locationService','org.scijava.io.location.LocationService',null,['org.scijava.plugin.Parameter']],['']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:45 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
