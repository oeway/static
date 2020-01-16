(function(){var P$=Clazz.newPackage("io.scif.commands"),p$1={},I$=[[0,'org.scijava.io.location.FileLocation',['org.scijava.ui.DialogPrompt','.MessageType'],'java.io.File']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SaveAsImage", null, 'org.scijava.command.ContextCommand');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['log','org.scijava.log.LogService','datasetIOService','io.scif.services.DatasetIOService','imageDisplayService','net.imagej.display.ImageDisplayService','uiService','org.scijava.ui.UIService','outputFile','java.io.File','display','net.imagej.display.ImageDisplay']]]

Clazz.newMeth(C$, 'run$', function () {
var dataset=p$1.dataset.apply(this, []);
try {
this.datasetIOService.save$net_imagej_Dataset$org_scijava_io_location_Location(dataset, Clazz.new_($I$(1,1).c$$S,[this.outputFile.getAbsolutePath$()]));
} catch (exc) {
if (Clazz.exceptionOf(exc,"java.io.IOException")){
this.log.error$Throwable(exc);
this.uiService.showDialog$S$S$org_scijava_ui_DialogPrompt_MessageType(exc.getMessage$(), "Error Saving Image", $I$(2).ERROR_MESSAGE);
return;
} else {
throw exc;
}
}
this.display.setName$S(dataset.getName$());
});

Clazz.newMeth(C$, 'initOutputFile$', function () {
var dataset=p$1.dataset.apply(this, []);
if (dataset == null ) return;
this.outputFile=Clazz.new_($I$(3,1).c$$S,[dataset.getSource$()]);
});

Clazz.newMeth(C$, 'dataset', function () {
return this.imageDisplayService.getActiveDataset$net_imagej_display_ImageDisplay(this.display);
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'io.scif.commands.SaveAsImage',null,['org.scijava.plugin.Plugin']],['type="org.scijava.command.Command.class" menu={"@Menu(label = File, weight = 0.0, mnemonic = f)"  "@Menu(label = Save As..., weight = 21, accelerator = shift ^S)"  } attrs={"@Attr(name = no-legacy)"  } ']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']],
  [['datasetIOService','io.scif.services.DatasetIOService',null,['org.scijava.plugin.Parameter']],['']],
  [['imageDisplayService','net.imagej.display.ImageDisplayService',null,['org.scijava.plugin.Parameter']],['']],
  [['uiService','org.scijava.ui.UIService',null,['org.scijava.plugin.Parameter']],['']],
  [['outputFile','java.io.File',null,['org.scijava.plugin.Parameter']],['label="File to save" style="save" initializer="initOutputFile" persist="false" ']],
  [['display','net.imagej.display.ImageDisplay',null,['org.scijava.plugin.Parameter']],['type="org.scijava.ItemIO.BOTH" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:38 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
