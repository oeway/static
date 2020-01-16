(function(){var P$=Clazz.newPackage("io.scif.config"),I$=[[0,['io.scif.config.SCIFIOConfig','.ImgMode'],'io.scif.img.Range']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SCIFIOConfig", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'java.util.HashMap');
C$.$classes$=[['ImgMode',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.openDataset=true;
this.bufferedReading=true;
this.writeSequential=false;
this.model=null;
this.fps=10;
this.compression=null;
this.options=null;
this.group=false;
this.imgModes=Clazz.array($I$(1), -1, [$I$(1).AUTO]);
this.openAll=false;
this.range=Clazz.new_($I$(2,1).c$$S,["0"]);
this.region=null;
this.computeMinMax=false;
this.planeConverter=null;
this.imgFactoryHeuristic=null;
this.writeRGB=true;
}, 1);

C$.$fields$=[['Z',['openDataset','bufferedReading','filterMetadata','saveOriginalMetadata','writeSequential','group','openAll','computeMinMax','writeRGB'],'I',['fps'],'S',['compression'],'O',['level','io.scif.MetadataLevel','model','java.awt.image.ColorModel','options','io.scif.codec.CodecOptions','imgModes','io.scif.config.SCIFIOConfig.ImgMode[]','range','io.scif.img.Range','region','io.scif.img.ImageRegion','planeConverter','io.scif.img.converters.PlaneConverter','imgFactoryHeuristic','io.scif.img.ImgFactoryHeuristic']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$io_scif_config_SCIFIOConfig', function (config) {
;C$.superclazz.c$$java_util_Map.apply(this,[config]);C$.$init$.apply(this);
this.openDataset=config.openDataset;
this.level=config.level;
this.filterMetadata=config.filterMetadata;
this.saveOriginalMetadata=config.saveOriginalMetadata;
this.writeSequential=config.writeSequential;
this.model=config.model;
this.fps=config.fps;
this.compression=config.compression;
this.options=config.options;
this.group=config.group;
this.imgModes=config.imgModes;
this.range=config.range;
this.region=config.region;
this.computeMinMax=config.computeMinMax;
this.planeConverter=config.planeConverter;
this.imgFactoryHeuristic=config.imgFactoryHeuristic;
this.writeRGB=config.writeRGB;
this.bufferedReading=config.bufferedReading;
}, 1);

Clazz.newMeth(C$, 'enableBufferedReading$Z', function (enabled) {
this.bufferedReading=enabled;
return this;
});

Clazz.newMeth(C$, 'bufferedReadingEnabled$', function () {
return this.bufferedReading;
});

Clazz.newMeth(C$, 'checkerSetOpen$Z', function (open) {
this.openDataset=open;
return this;
});

Clazz.newMeth(C$, 'checkerIsOpen$', function () {
return this.openDataset;
});

Clazz.newMeth(C$, 'parserGetLevel$', function () {
return this.level;
});

Clazz.newMeth(C$, 'parserSetLevel$io_scif_MetadataLevel', function (level) {
this.level=level;
return this;
});

Clazz.newMeth(C$, 'parserIsFiltered$', function () {
return this.filterMetadata;
});

Clazz.newMeth(C$, 'parserSetFiltered$Z', function (filterMetadata) {
this.filterMetadata=filterMetadata;
return this;
});

Clazz.newMeth(C$, 'parserIsSaveOriginalMetadata$', function () {
return this.saveOriginalMetadata;
});

Clazz.newMeth(C$, 'parserSetSaveOriginalMetadata$Z', function (saveOriginalMetadata) {
this.saveOriginalMetadata=saveOriginalMetadata;
return this;
});

Clazz.newMeth(C$, 'writerSetSequential$Z', function (sequential) {
this.writeSequential=sequential;
return this;
});

Clazz.newMeth(C$, 'writerIsSequential$', function () {
return this.writeSequential;
});

Clazz.newMeth(C$, 'writerSetColorModel$java_awt_image_ColorModel', function (cm) {
this.model=cm;
return this;
});

Clazz.newMeth(C$, 'writerGetColorModel$', function () {
return this.model;
});

Clazz.newMeth(C$, 'writerSetFramesPerSecond$I', function (rate) {
this.fps=rate;
return this;
});

Clazz.newMeth(C$, 'writerGetFramesPerSecond$', function () {
return this.fps;
});

Clazz.newMeth(C$, 'writerSetCompression$S', function (compress) {
this.compression=compress;
return this;
});

Clazz.newMeth(C$, 'writerGetCompression$', function () {
return this.compression;
});

Clazz.newMeth(C$, 'writerSetCodecOptions$io_scif_codec_CodecOptions', function (options) {
this.options=options;
return this;
});

Clazz.newMeth(C$, 'writerGetCodecOptions$', function () {
return this.options;
});

Clazz.newMeth(C$, 'groupableSetGroupFiles$Z', function (groupFiles) {
this.group=groupFiles;
return this;
});

Clazz.newMeth(C$, 'groupableIsGroupFiles$', function () {
return this.group;
});

Clazz.newMeth(C$, 'imgOpenerGetImgModes$', function () {
return this.imgModes;
});

Clazz.newMeth(C$, 'imgOpenerSetImgModes$io_scif_config_SCIFIOConfig_ImgModeA', function (imgModes) {
this.imgModes=imgModes;
return this;
});

Clazz.newMeth(C$, 'imgOpenerIsComputeMinMax$', function () {
return this.computeMinMax;
});

Clazz.newMeth(C$, 'imgOpenerSetComputeMinMax$Z', function (computeMinMax) {
this.computeMinMax=computeMinMax;
return this;
});

Clazz.newMeth(C$, 'imgOpenerGetRegion$', function () {
return this.region;
});

Clazz.newMeth(C$, 'imgOpenerSetRegion$io_scif_img_ImageRegion', function (region) {
this.region=region;
return this;
});

Clazz.newMeth(C$, 'imgOpenerGetPlaneConverter$', function () {
return this.planeConverter;
});

Clazz.newMeth(C$, 'imgOpenerSetPlaneConverter$io_scif_img_converters_PlaneConverter', function (planeConverter) {
this.planeConverter=planeConverter;
return this;
});

Clazz.newMeth(C$, 'imgOpenerGetImgFactoryHeuristic$', function () {
return this.imgFactoryHeuristic;
});

Clazz.newMeth(C$, 'imgOpenerSetImgFactoryHeuristic$io_scif_img_ImgFactoryHeuristic', function (imgFactoryHeuristic) {
this.imgFactoryHeuristic=imgFactoryHeuristic;
return this;
});

Clazz.newMeth(C$, 'imgOpenerIsOpenAllImages$', function () {
return this.openAll;
});

Clazz.newMeth(C$, 'imgOpenerSetOpenAllImages$Z', function (openAll) {
this.openAll=openAll;
return this;
});

Clazz.newMeth(C$, 'imgOpenerGetRange$', function () {
return this.range;
});

Clazz.newMeth(C$, 'imgOpenerSetIndex$I', function (index) {
return this.imgOpenerSetRange$io_scif_img_Range(Clazz.new_($I$(2,1).c$$Long,[ new Long(index)]));
});

Clazz.newMeth(C$, 'imgOpenerSetRange$S', function (range) {
return this.imgOpenerSetRange$io_scif_img_Range(Clazz.new_($I$(2,1).c$$S,[range]));
});

Clazz.newMeth(C$, 'imgOpenerSetRange$io_scif_img_Range', function (range) {
this.range=range;
return this;
});

Clazz.newMeth(C$, 'imgSaverGetWriteRGB$', function () {
return this.writeRGB;
});

Clazz.newMeth(C$, 'imgSaverSetWriteRGB$Z', function (rgb) {
this.writeRGB=rgb;
return this;
});

Clazz.newMeth(C$, 'clone$', function () {
return Clazz.new_(C$.c$$io_scif_config_SCIFIOConfig,[this]);
});
;
(function(){/*e*/var C$=Clazz.newClass(P$.SCIFIOConfig, "ImgMode", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "ARRAY", 0, []);
Clazz.newEnumConst($vals, C$.c$, "AUTO", 1, []);
Clazz.newEnumConst($vals, C$.c$, "CELL", 2, []);
Clazz.newEnumConst($vals, C$.c$, "PLANAR", 3, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:38 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
