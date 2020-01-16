(function(){var P$=Clazz.newPackage("org.scijava.module.process"),I$=[[0,'org.scijava.log.Logger']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "LoggerPreprocessor", null, 'org.scijava.module.process.AbstractPreprocessorPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['logService','org.scijava.log.LogService','moduleService','org.scijava.module.ModuleService']]]

Clazz.newMeth(C$, ['process$org_scijava_module_Module','process$'], function (module) {
if (this.logService == null  || this.moduleService == null  ) return;
var loggerInput=this.moduleService.getSingleInput$org_scijava_module_Module$Class(module, Clazz.getClass($I$(1),['addLogListener$org_scijava_log_LogListener','alwaysLog$I$O$Throwable','debug$O','debug$Throwable','debug$O$Throwable','error$O','error$Throwable','error$O$Throwable','getLevel$','getName$','getSource$','info$O','info$Throwable','info$O$Throwable','isDebug$','isError$','isInfo$','isLevel$I','isTrace$','isWarn$','log$I$O','log$I$Throwable','log$I$O$Throwable','notifyListeners$org_scijava_log_LogMessage','removeLogListener$org_scijava_log_LogListener','subLogger$S','subLogger$S$I','trace$O','trace$Throwable','trace$O$Throwable','warn$O','warn$Throwable','warn$O$Throwable']));
if (loggerInput == null  || !loggerInput.isAutoFill$() ) return;
var loggerName=loggerInput.getLabel$();
if (loggerName == null  || loggerName.isEmpty$() ) loggerName=module.getDelegateObject$().getClass$().getSimpleName$();
var logger=this.logService.subLogger$S(loggerName);
var name=loggerInput.getName$();
module.setInput$S$O(name, logger);
module.resolveInput$S(name);
});
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.module.process.LoggerPreprocessor',null,['org.scijava.plugin.Plugin']],['type="org.scijava.module.process.PreprocessorPlugin.class" ']],
  [['logService','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['required="false" ']],
  [['moduleService','org.scijava.module.ModuleService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:27 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
