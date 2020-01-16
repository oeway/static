(function(){var P$=Clazz.newPackage("io.scif.commands"),I$=[[0,'java.util.HashMap','java.io.File','io.scif.commands.SaveAsImage']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SaveImage", null, 'org.scijava.command.ContextCommand');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['commandService','org.scijava.command.CommandService','dataset','net.imagej.Dataset']]]

Clazz.newMeth(C$, 'run$', function () {
var inputMap=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(1,1));
inputMap.put$TK$TV("dataset", this.dataset);
var img=this.dataset.getImgPlus$();
var source=img.getSource$();
var sourceFile=source.isEmpty$() ? null : Clazz.new_($I$(2,1).c$$S,[source]);
if (sourceFile != null  && sourceFile.isFile$() ) {
inputMap.put$TK$TV("outputFile", Clazz.new_($I$(2,1).c$$S,[source]));
}this.commandService.run$Class$Z$java_util_Map(Clazz.getClass($I$(3)), true, inputMap);
});

Clazz.newMeth(C$, 'setDataset$net_imagej_Dataset', function (d) {
this.dataset=d;
});

Clazz.newMeth(C$, 'getDataset$', function () {
return this.dataset;
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.commands.SaveImage',null,['org.scijava.plugin.Plugin']],['type="org.scijava.command.Command.class" menu={"@Menu(label = File, weight = 0.0, mnemonic = f)"  "@Menu(label = Save, weight = 20, mnemonic = s, accelerator = ^S)"  } attrs={"@Attr(name = no-legacy)"  } ']],
  [['commandService','org.scijava.command.CommandService',null,['org.scijava.plugin.Parameter']],['']],
  [['dataset','net.imagej.Dataset',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:38 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
