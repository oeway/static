(function(){var P$=Clazz.newPackage("io.scif.services"),p$1={},I$=[[0,'io.scif.config.SCIFIOConfig','io.scif.DefaultReader','io.scif.filters.ReaderFilter']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultInitializeService", null, 'org.scijava.service.AbstractService', 'io.scif.services.InitializeService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['pluginService','org.scijava.plugin.PluginService','formatService','io.scif.services.FormatService','translatorService','io.scif.services.TranslatorService']]]

Clazz.newMeth(C$, 'initializeReader$org_scijava_io_location_Location', function (id) {
return this.initializeReader$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(id, Clazz.new_($I$(1,1)).checkerSetOpen$Z(false));
});

Clazz.newMeth(C$, 'initializeReader$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig', function (id, config) {
var r=this.formatService.getFormat$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(id, config).createReader$();
if (r.getClass$() === Clazz.getClass($I$(2)) ) {
throw Clazz.new_(Clazz.load('java.io.IOException').c$$S,["Format is write-only!"]);
}r.setSource$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(id, config);
return Clazz.new_($I$(3,1).c$$io_scif_Reader,[r]);
});

Clazz.newMeth(C$, 'initializeWriter$org_scijava_io_location_Location$org_scijava_io_location_Location', function (source, destination) {
return this.initializeWriter$org_scijava_io_location_Location$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(source, destination, Clazz.new_($I$(1,1)).checkerSetOpen$Z(false));
});

Clazz.newMeth(C$, 'initializeWriter$org_scijava_io_location_Location$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig', function (source, destination, config) {
var sFormat=this.formatService.getFormat$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(source, config);
var parser=sFormat.createParser$();
var sourceMeta=parser.parse$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(source, config);
return this.initializeWriter$io_scif_Metadata$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(sourceMeta, destination, config);
});

Clazz.newMeth(C$, 'initializeWriter$io_scif_Metadata$org_scijava_io_location_Location', function (sourceMeta, destination) {
return this.initializeWriter$io_scif_Metadata$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(sourceMeta, destination, Clazz.new_($I$(1,1)).checkerSetOpen$Z(false));
});

Clazz.newMeth(C$, 'initializeWriter$io_scif_Metadata$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig', function (sourceMeta, destination, config) {
var sFormat=sourceMeta.getFormat$();
var dFormat=this.formatService.getWriterForLocation$org_scijava_io_location_Location(destination).getFormat$();
var destMeta=dFormat.createMetadata$();
if (sFormat === dFormat ) {
destMeta=p$1.castMeta$TN$Class.apply(this, [sourceMeta, destMeta.getClass$()]);
} else {
destMeta=dFormat.createMetadata$();
this.translatorService.translate$io_scif_Metadata$io_scif_Metadata$Z(sourceMeta, destMeta, false);
}destMeta.setDatasetName$S(destination.getName$());
var writer=dFormat.createWriter$();
writer.setMetadata$io_scif_Metadata(destMeta);
writer.setDest$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(destination, config);
return writer;
});

Clazz.newMeth(C$, 'parseMetadata$org_scijava_io_location_Location', function (id) {
return this.parseMetadata$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(id, Clazz.new_($I$(1,1)).checkerSetOpen$Z(false));
});

Clazz.newMeth(C$, 'parseMetadata$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig', function (id, config) {
var format=this.formatService.getFormat$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(id, config);
return format.createParser$().parse$org_scijava_io_location_Location$io_scif_config_SCIFIOConfig(id, config);
});

Clazz.newMeth(C$, 'castMeta$TN$Class', function (metadata, endType) {
var meta=metadata;
return meta;
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'io.scif.services.DefaultInitializeService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" priority="-100.0" ']],
  [['pluginService','org.scijava.plugin.PluginService',null,['org.scijava.plugin.Parameter']],['']],
  [['formatService','io.scif.services.FormatService',null,['org.scijava.plugin.Parameter']],['']],
  [['translatorService','io.scif.services.TranslatorService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:45 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
