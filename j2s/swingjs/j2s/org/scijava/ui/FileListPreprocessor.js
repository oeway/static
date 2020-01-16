(function(){var P$=Clazz.newPackage("org.scijava.ui"),p$1={},I$=[[0,'java.io.File']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "FileListPreprocessor", null, 'org.scijava.module.process.AbstractPreprocessorPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['uiService','org.scijava.ui.UIService']]]

Clazz.newMeth(C$, ['process$org_scijava_module_Module','process$'], function (module) {
if (this.uiService == null ) return;
var fileInput=p$1.getFilesInput$org_scijava_module_Module.apply(this, [module]);
if (fileInput == null ) return;
var files=fileInput.getValue$org_scijava_module_Module(module);
var result=this.uiService.chooseFiles$java_io_File$java_io_FileA$java_io_FileFilter$S(null, files, null, fileInput.getWidgetStyle$());
if (result == null ) {
this.cancel$S("");
return;
}fileInput.setValue$org_scijava_module_Module$TT(module, result);
module.resolveInput$S(fileInput.getName$());
});

Clazz.newMeth(C$, 'getFilesInput$org_scijava_module_Module', function (module) {
var result=null;
for (var input, $input = module.getInfo$().inputs$().iterator$(); $input.hasNext$()&&((input=($input.next$())),1);) {
if (module.isInputResolved$S(input.getName$())) continue;
var type=input.getType$();
if (!Clazz.array($I$(1), -1).isAssignableFrom$Class(type)) {
return null;
}if (result != null ) {
return null;
}var fileInput=input;
result=fileInput;
}
return result;
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.ui.FileListPreprocessor',null,['org.scijava.plugin.Plugin']],['type="org.scijava.module.process.PreprocessorPlugin.class" priority="-9999.0" ']],
  [['uiService','org.scijava.ui.UIService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
