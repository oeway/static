(function(){var P$=Clazz.newPackage("io.scif.commands"),p$1={},I$=[[0,'io.scif.config.SCIFIOConfig','java.util.HashMap','net.imagej.axis.Axes','io.scif.img.Range','io.scif.img.ImageRegion',['io.scif.config.SCIFIOConfig','.ImgMode'],['org.scijava.ui.DialogPrompt','.MessageType']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "OpenDataset", null, 'org.scijava.command.ContextCommand');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.x=new Integer(0);
this.y=new Integer(0);
this.w=new Integer(0);
this.h=new Integer(0);
this.mode="Auto";
}, 1);

C$.$fields$=[['S',['range','mode'],'O',['datasetIOService','io.scif.services.DatasetIOService','logService','org.scijava.log.LogService','uiService','org.scijava.ui.UIService','source','java.io.File','crop','Boolean','+autoscale','+computeMinMax','x','Integer','+y','+w','+h','groupFiles','Boolean','dataset','net.imagej.Dataset']]]

Clazz.newMeth(C$, 'run$', function () {
var config=Clazz.new_($I$(1,1));
if (this.range != null  && !this.range.isEmpty$() ) {
try {
config.imgOpenerSetRange$S(this.range);
} catch (e) {
if (Clazz.exceptionOf(e,"IllegalArgumentException")){
this.logService.warn$O("Ignoring bad range: " + this.range);
} else {
throw e;
}
}
}if (this.crop != null  && (this.crop).valueOf() ) {
if (p$1.validRange.apply(this, [])) {
var region=Clazz.new_(1,{K:"net.imagej.axis.AxisType",V:"io.scif.img.Range"},$I$(2,1));
region.put$TK$TV($I$(3).X, Clazz.new_($I$(4,1).c$$Long$Long,[ new Long((this.x).valueOf()),  new Long((this.x).valueOf() + (this.w).valueOf() - 1)]));
region.put$TK$TV($I$(3).Y, Clazz.new_($I$(4,1).c$$Long$Long,[ new Long((this.y).valueOf()),  new Long((this.y).valueOf() + (this.h).valueOf() - 1)]));
config.imgOpenerSetRegion$io_scif_img_ImageRegion(Clazz.new_($I$(5,1).c$$java_util_Map,[region]));
} else {
this.logService.warn$O("ignoring bad crop region: " + this.x + ", " + this.y + ", " + this.w + ", " + this.h );
}}if (this.computeMinMax != null ) {
config.imgOpenerSetComputeMinMax$Z((this.computeMinMax).valueOf());
}if (this.groupFiles != null ) {
config.groupableSetGroupFiles$Z((this.groupFiles).valueOf());
}if (this.mode.equals$O("Planar")) config.imgOpenerSetImgModes$io_scif_config_SCIFIOConfig_ImgModeA([$I$(6).PLANAR]);
 else if (this.mode.equals$O("Cell")) config.imgOpenerSetImgModes$io_scif_config_SCIFIOConfig_ImgModeA([$I$(6).CELL]);
try {
this.dataset=this.datasetIOService.open$S$io_scif_config_SCIFIOConfig(this.source.getAbsolutePath$(), config);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.logService.error$Throwable(e);
p$1.error$S.apply(this, [e.getMessage$()]);
} else {
throw e;
}
}
if (this.autoscale != null  && (this.autoscale).valueOf() ) {
for (var c=0; c < this.dataset.getCompositeChannelCount$(); c++) {
this.dataset.setChannelMinimum$I$D(c, NaN);
this.dataset.setChannelMaximum$I$D(c, NaN);
}
}});

Clazz.newMeth(C$, 'validRange', function () {
return (this.x != null  && this.y != null   && this.w != null   && this.h != null  ) && ((this.x).valueOf() >= 0  && (this.y).valueOf() >= 0   && (this.w).valueOf() >= 0   && (this.h).valueOf() >= 0  ) ;
}, p$1);

Clazz.newMeth(C$, 'error$S', function (message) {
this.uiService.showDialog$S$org_scijava_ui_DialogPrompt_MessageType(message, $I$(7).ERROR_MESSAGE);
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'io.scif.commands.OpenDataset',null,['org.scijava.plugin.Plugin']],['type="org.scijava.command.Command.class" menu={"@Menu(label = File, weight = 0.0)"  "@Menu(label = Import)"  "@Menu(label = Image... )"  } ']],
  [['datasetIOService','io.scif.services.DatasetIOService',null,['org.scijava.plugin.Parameter']],['']],
  [['logService','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']],
  [['uiService','org.scijava.ui.UIService',null,['org.scijava.plugin.Parameter']],['']],
  [['source','java.io.File',null,['org.scijava.plugin.Parameter']],['label="File to open" ']],
  [['crop','Boolean',null,['org.scijava.plugin.Parameter']],['required="false" ']],
  [['autoscale','.',null,['org.scijava.plugin.Parameter']],['label="Autoscale" required="false" ']],
  [['computeMinMax','.',null,['org.scijava.plugin.Parameter']],['label="Compute min/max values" required="false" ']],
  [['x','Integer',null,['org.scijava.plugin.Parameter']],['required="false" min="0" ']],
  [['y','.',null,['org.scijava.plugin.Parameter']],['required="false" min="0" ']],
  [['w','.',null,['org.scijava.plugin.Parameter']],['required="false" min="0" ']],
  [['h','.',null,['org.scijava.plugin.Parameter']],['required="false" min="0" ']],
  [['range','String',null,['org.scijava.plugin.Parameter']],['required="false" label="Image indices" ']],
  [['groupFiles','Boolean',null,['org.scijava.plugin.Parameter']],['required="false" label="Group similar files" ']],
  [['mode','String',null,['org.scijava.plugin.Parameter']],['required="false" label="Image mode" choices={"Auto"  "Planar"  "Cell"  } ']],
  [['dataset','net.imagej.Dataset',null,['org.scijava.plugin.Parameter']],['type="org.scijava.ItemIO.OUTPUT" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:38 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
