(function(){var P$=Clazz.newPackage("org.scijava.display"),I$=[[0,'org.scijava.display.Display']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ActiveDisplayPreprocessor", null, 'org.scijava.module.process.AbstractPreprocessorPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['displayService','org.scijava.display.DisplayService','moduleService','org.scijava.module.ModuleService']]]

Clazz.newMeth(C$, ['process$org_scijava_module_Module','process$'], function (module) {
if (this.displayService == null  || this.moduleService == null  ) return;
var displayInput=this.moduleService.getSingleInput$org_scijava_module_Module$Class(module, Clazz.getClass($I$(1),['canDisplay$Class','canDisplay$O','close$','display$O','isDisplaying$O','update$']));
if (displayInput == null  || !displayInput.isAutoFill$() ) return;
var displayType=displayInput.getType$();
var activeDisplay=this.displayService.getActiveDisplay$Class(displayType);
if (activeDisplay == null ) return;
var name=displayInput.getName$();
module.setInput$S$O(name, activeDisplay);
module.resolveInput$S(name);
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.display.ActiveDisplayPreprocessor',null,['org.scijava.plugin.Plugin']],['type="org.scijava.module.process.PreprocessorPlugin.class" priority="10000.0" ']],
  [['displayService','org.scijava.display.DisplayService',null,['org.scijava.plugin.Parameter']],['required="false" ']],
  [['moduleService','org.scijava.module.ModuleService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:24 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
