(function(){var P$=Clazz.newPackage("io.scif"),I$=[[0,'org.scijava.Context','org.scijava.service.SciJavaService','io.scif.SCIFIOService','io.scif.codec.CodecService','io.scif.services.DatasetIOService','io.scif.services.FilePatternService','io.scif.services.FormatService','io.scif.gui.GUIService','io.scif.img.ImgUtilityService','io.scif.services.InitializeService','io.scif.MetadataService','org.scijava.io.nio.NIOService','io.scif.img.converters.PlaneConverterService','io.scif.formats.qt.QTJavaService','io.scif.formats.tiff.TiffService','io.scif.services.TranslatorService','io.scif.xml.XMLService']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SCIFIO", null, 'org.scijava.AbstractGateway');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$org_scijava_Context.apply(this, [Clazz.new_($I$(1,1).c$$ClassA,[[Clazz.getClass($I$(2),[]), Clazz.getClass($I$(3),[])]])]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_Context', function (context) {
;C$.superclazz.c$$S$org_scijava_Context.apply(this,["SCIFIO", context]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'codec$', function () {
return this.get$Class(Clazz.getClass($I$(4),['getCodec$Class']));
});

Clazz.newMeth(C$, 'datasetIO$', function () {
return this.get$Class(Clazz.getClass($I$(5),['canOpen$org_scijava_io_location_Location','canOpen$S','canSave$org_scijava_io_location_Location','open$org_scijava_io_location_Location','open$S','open$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig','open$S$io_scif_config_SCIFIOConfig','openAll$org_scijava_io_location_Location','openAll$S','openAll$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig','openAll$S$io_scif_config_SCIFIOConfig','save$net_imagej_Dataset$org_scijava_io_location_Location','save$net_imagej_Dataset$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig','save$net_imagej_Dataset$S']));
});

Clazz.newMeth(C$, 'filePattern$', function () {
return this.get$Class(Clazz.getClass($I$(6),['findImagePatterns$org_scijava_io_location_BrowsableLocation','findImagePatterns$org_scijava_io_location_BrowsableLocation$org_scijava_io_location_BrowsableLocation$java_util_Collection','findPattern$S','findPattern$org_scijava_io_location_BrowsableLocation','findPattern$org_scijava_io_location_BrowsableLocation$org_scijava_io_location_BrowsableLocation','findPattern$org_scijava_io_location_BrowsableLocation$org_scijava_io_location_BrowsableLocation$java_util_Collection','findPattern$org_scijava_io_location_BrowsableLocation$org_scijava_io_location_BrowsableLocation$java_util_Collection$IA','findPattern$SA']));
});

Clazz.newMeth(C$, 'format$', function () {
return this.get$Class(Clazz.getClass($I$(7),['addComponents$io_scif_Format','addFormat$io_scif_Format','getAllFormats$','getFormat$org_scijava_io_location_Location','getFormat$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig','getFormat$org_scijava_io_handle_DataHandle','getFormat$org_scijava_io_handle_DataHandle$io_scif_config_SCIFIOConfig','getFormatFromChecker$Class','getFormatFromClass$Class','getFormatFromComponent$Class','getFormatFromMetadata$Class','getFormatFromParser$Class','getFormatFromReader$Class','getFormatFromWriter$Class','getFormatList$org_scijava_io_location_Location','getFormatList$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig$Z','getFormatList$org_scijava_io_handle_DataHandle','getFormatList$org_scijava_io_handle_DataHandle$io_scif_config_SCIFIOConfig$Z','getOutputFormats$','getSuffixes$','getWriterForLocation$org_scijava_io_location_Location','removeComponents$io_scif_Format','removeFormat$io_scif_Format']));
});

Clazz.newMeth(C$, 'gui$', function () {
return this.get$Class(Clazz.getClass($I$(8),['buildFileChooser$java_util_Collection','buildFileChooser$java_util_Collection$Z','buildFileChooser$javax_swing_filechooser_FileFilterA','buildFileChooser$javax_swing_filechooser_FileFilterA$Z','buildFileFilters$java_util_Collection']));
});

Clazz.newMeth(C$, 'imgUtil$', function () {
return this.get$Class(Clazz.getClass($I$(9),['decodeWord$BA$I$I$Z','getArrayAccess$net_imagej_ImgPlus','getConstrainedLengths$io_scif_Metadata$I$io_scif_config_SCIFIOConfig','getDimLengths$io_scif_Metadata$I$io_scif_config_SCIFIOConfig','getImageCount$org_scijava_io_location_Location','getPlanarAccess$net_imagej_ImgPlus','guessDimOrder$net_imagej_axis_CalibratedAxisA$JA$JA','isCompressible$net_imglib2_img_Img','isCompressible$net_imagej_ImgPlus','makeArray$O','makeSCIFIOImgPlus$net_imglib2_img_Img','makeType$I','makeType$O']));
});

Clazz.newMeth(C$, 'initializer$', function () {
return this.get$Class(Clazz.getClass($I$(10),['initializeReader$org_scijava_io_location_Location','initializeReader$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig','initializeWriter$org_scijava_io_location_Location$org_scijava_io_location_Location','initializeWriter$org_scijava_io_location_Location$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig','initializeWriter$io_scif_Metadata$org_scijava_io_location_Location','initializeWriter$io_scif_Metadata$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig','parseMetadata$org_scijava_io_location_Location','parseMetadata$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig']));
});

Clazz.newMeth(C$, 'metadata$', function () {
return this.get$Class(Clazz.getClass($I$(11),['parse$S','parse$S$S','populate$O$java_util_Map']));
});

Clazz.newMeth(C$, 'nio$', function () {
return this.get$Class(Clazz.getClass($I$(12),['allocate$java_nio_channels_FileChannel$java_nio_channels_FileChannel_MapMode$J$I']));
});

Clazz.newMeth(C$, 'planeConverter$', function () {
return this.get$Class(Clazz.getClass($I$(13),['getArrayConverter$','getDefaultConverter$','getPlanarConverter$','getPlaneConverter$S','getPlaneConverterNames$','getPlaneConverters$']));
});

Clazz.newMeth(C$, 'qtJava$', function () {
return this.get$Class(Clazz.getClass($I$(14),['canDoQT$','checkQTLibrary$','getPictDimensions$BA','getQTVersion$','getUniverse$','isJVM64Bit$','isQTExpired$','pictToImage$BA']));
});

Clazz.newMeth(C$, 'tiff$', function () {
return this.get$Class(Clazz.getClass($I$(15),['difference$BA$io_scif_formats_tiff_IFD','undifference$BA$io_scif_formats_tiff_IFD']));
});

Clazz.newMeth(C$, 'translator$', function () {
return this.get$Class(Clazz.getClass($I$(16),['findTranslator$io_scif_Metadata$io_scif_Metadata$Z','findTranslator$Class$Class$Z','translate$io_scif_Metadata$io_scif_Metadata$Z']));
});

Clazz.newMeth(C$, 'xml$', function () {
return this.get$Class(Clazz.getClass($I$(17),['avoidUndeclaredNamespaces$S','escapeXML$S','getStylesheet$S$Class','getXML$org_w3c_dom_Document','indentXML$S','indentXML$S$I','indentXML$S$Z','indentXML$S$I$Z','parseDOM$java_io_File','parseDOM$S','parseDOM$java_io_InputStream','parseXML$S','parseXML$S$org_xml_sax_helpers_DefaultHandler','parseXML$org_scijava_io_handle_DataHandle$org_xml_sax_helpers_DefaultHandler','parseXML$BA$org_xml_sax_helpers_DefaultHandler','parseXML$java_io_InputStream$org_xml_sax_helpers_DefaultHandler','sanitizeXML$S','transformXML$S$javax_xml_transform_Templates','transformXML$javax_xml_transform_Source$javax_xml_transform_Templates','validateXML$S','validateXML$S$S']));
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.SCIFIO',null,['org.scijava.plugin.Plugin']],['type="org.scijava.Gateway.class" ']]]}
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:36 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
