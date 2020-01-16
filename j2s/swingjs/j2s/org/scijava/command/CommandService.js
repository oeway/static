(function(){var P$=Clazz.newPackage("org.scijava.command"),I$=[[0,'org.scijava.event.EventService','org.scijava.module.ModuleService']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*i*/var C$=Clazz.newInterface(P$, "CommandService", null, null, ['org.scijava.plugin.PTService', 'org.scijava.service.SciJavaService']);

C$.$clinit$=2;
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'eventService$', function () {
return this.context$().getService$Class(Clazz.getClass($I$(1),['getSubscribers$Class','publish$TE','publishLater$TE','subscribe$O','unsubscribe$java_util_Collection']));
});

Clazz.newMeth(C$, 'moduleService$', function () {
return this.context$().getService$Class(Clazz.getClass($I$(2),['addModule$org_scijava_module_ModuleInfo','addModules$java_util_Collection','createModule$org_scijava_module_ModuleInfo','getDefaultValue$org_scijava_module_ModuleItem','getIndex$','getModuleById$S','getModuleForAccelerator$org_scijava_input_Accelerator','getModules$','getSingleInput$org_scijava_module_Module$Class','getSingleInput$org_scijava_module_Module$java_util_Collection','getSingleOutput$org_scijava_module_Module$Class','getSingleOutput$org_scijava_module_Module$java_util_Collection','load$org_scijava_module_ModuleItem','removeModule$org_scijava_module_ModuleInfo','removeModules$java_util_Collection','run$org_scijava_module_ModuleInfo$Z$OA','run$org_scijava_module_ModuleInfo$Z$java_util_Map','run$org_scijava_module_ModuleInfo$java_util_List$java_util_List$OA','run$org_scijava_module_ModuleInfo$java_util_List$java_util_List$java_util_Map','run$TM$Z$OA','run$TM$Z$java_util_Map','run$TM$java_util_List$java_util_List$OA','run$TM$java_util_List$java_util_List$java_util_Map','save$org_scijava_module_ModuleItem$TT','waitFor$java_util_concurrent_Future']));
});

Clazz.newMeth(C$, 'getEventService$', function () {
return this.eventService$();
});

Clazz.newMeth(C$, 'getModuleService$', function () {
return this.moduleService$();
});
};})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:22 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
