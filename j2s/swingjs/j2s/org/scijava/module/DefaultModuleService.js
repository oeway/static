(function(){var P$=Clazz.newPackage("org.scijava.module"),p$1={},I$=[[0,'org.scijava.module.event.ModulesAddedEvent','org.scijava.module.event.ModulesRemovedEvent','org.scijava.Priority','org.scijava.module.ModuleRunner','java.util.Objects','org.scijava.module.ModuleIndex','org.scijava.module.process.PreprocessorPlugin','org.scijava.module.process.PostprocessorPlugin','org.scijava.util.Types','org.scijava.module.Module','java.util.HashMap','java.util.HashSet']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultModuleService", null, 'org.scijava.service.AbstractService', 'org.scijava.module.ModuleService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['log','org.scijava.log.LogService','eventService','org.scijava.event.EventService','pluginService','org.scijava.plugin.PluginService','objectService','org.scijava.object.ObjectService','threadService','org.scijava.thread.ThreadService','prefService','org.scijava.prefs.PrefService','convertService','org.scijava.convert.ConvertService','moduleIndex','org.scijava.module.ModuleIndex']]]

Clazz.newMeth(C$, 'getIndex$', function () {
return this.moduleIndex;
});

Clazz.newMeth(C$, 'addModule$org_scijava_module_ModuleInfo', function (module) {
if (this.moduleIndex.add$TE(module)) {
this.eventService.publish$TE(Clazz.new_($I$(1,1).c$$org_scijava_module_ModuleInfo,[module]));
}});

Clazz.newMeth(C$, 'removeModule$org_scijava_module_ModuleInfo', function (module) {
if (this.moduleIndex.remove$O(module)) {
this.eventService.publish$TE(Clazz.new_($I$(2,1).c$$org_scijava_module_ModuleInfo,[module]));
}});

Clazz.newMeth(C$, 'addModules$java_util_Collection', function (modules) {
if (this.moduleIndex.addAll$java_util_Collection(modules)) {
this.eventService.publish$TE(Clazz.new_($I$(1,1).c$$java_util_Collection,[modules]));
}});

Clazz.newMeth(C$, 'removeModules$java_util_Collection', function (modules) {
if (this.moduleIndex.removeAll$java_util_Collection(modules)) {
this.eventService.publish$TE(Clazz.new_($I$(2,1).c$$java_util_Collection,[modules]));
}});

Clazz.newMeth(C$, 'getModules$', function () {
return this.moduleIndex.getAll$();
});

Clazz.newMeth(C$, 'getModuleById$S', function (id) {
for (var info, $info = this.getModules$().iterator$(); $info.hasNext$()&&((info=($info.next$())),1);) {
var infoID=info.getIdentifier$();
if (id.equals$O(infoID)) return info;
}
return null;
});

Clazz.newMeth(C$, 'getModuleForAccelerator$org_scijava_input_Accelerator', function (acc) {
for (var info, $info = this.getModules$().iterator$(); $info.hasNext$()&&((info=($info.next$())),1);) {
var menuPath=info.getMenuPath$();
if (menuPath == null  || menuPath.isEmpty$() ) continue;
if (acc.equals$O(menuPath.getLeaf$().getAccelerator$())) return info;
}
return null;
});

Clazz.newMeth(C$, 'createModule$org_scijava_module_ModuleInfo', function (info) {
var existing=p$1.getRegisteredModuleInstance$org_scijava_module_ModuleInfo.apply(this, [info]);
if (existing != null ) return existing;
try {
var module=info.createModule$();
this.getContext$().inject$O(module);
$I$(3).inject$O$D(module, info.getPriority$());
return module;
} catch (exc) {
if (Clazz.exceptionOf(exc,"org.scijava.module.ModuleException")){
this.log.error$O$Throwable("Cannot create module: " + info.getDelegateClassName$(), exc);
} else {
throw exc;
}
}
return null;
});

Clazz.newMeth(C$, 'run$org_scijava_module_ModuleInfo$Z$OA', function (info, process, inputs) {
return this.run$org_scijava_module_ModuleInfo$java_util_List$java_util_List$OA(info, p$1.pre$Z.apply(this, [process]), p$1.post$Z.apply(this, [process]), inputs);
});

Clazz.newMeth(C$, 'run$org_scijava_module_ModuleInfo$Z$java_util_Map', function (info, process, inputMap) {
return this.run$org_scijava_module_ModuleInfo$java_util_List$java_util_List$java_util_Map(info, p$1.pre$Z.apply(this, [process]), p$1.post$Z.apply(this, [process]), inputMap);
});

Clazz.newMeth(C$, 'run$org_scijava_module_ModuleInfo$java_util_List$java_util_List$OA', function (info, pre, post, inputs) {
return this.run$org_scijava_module_ModuleInfo$java_util_List$java_util_List$java_util_Map(info, pre, post, p$1.createMap$OA.apply(this, [inputs]));
});

Clazz.newMeth(C$, 'run$org_scijava_module_ModuleInfo$java_util_List$java_util_List$java_util_Map', function (info, pre, post, inputMap) {
var module=this.createModule$org_scijava_module_ModuleInfo(info);
if (module == null ) return null;
return this.run$TM$java_util_List$java_util_List$java_util_Map(module, pre, post, inputMap);
});

Clazz.newMeth(C$, 'run$TM$Z$OA', function (module, process, inputs) {
return this.run$TM$java_util_List$java_util_List$OA(module, p$1.pre$Z.apply(this, [process]), p$1.post$Z.apply(this, [process]), inputs);
});

Clazz.newMeth(C$, 'run$TM$Z$java_util_Map', function (module, process, inputMap) {
return this.run$TM$java_util_List$java_util_List$java_util_Map(module, p$1.pre$Z.apply(this, [process]), p$1.post$Z.apply(this, [process]), inputMap);
});

Clazz.newMeth(C$, 'run$TM$java_util_List$java_util_List$OA', function (module, pre, post, inputs) {
return this.run$TM$java_util_List$java_util_List$java_util_Map(module, pre, post, p$1.createMap$OA.apply(this, [inputs]));
});

Clazz.newMeth(C$, 'run$TM$java_util_List$java_util_List$java_util_Map', function (module, pre, post, inputMap) {
p$1.assignInputs$org_scijava_module_Module$java_util_Map.apply(this, [module, inputMap]);
var runner=Clazz.new_($I$(4,1).c$$org_scijava_Context$org_scijava_module_Module$java_util_List$java_util_List,[this.getContext$(), module, pre, post]);
var callable=runner;
var future=this.threadService.run$java_util_concurrent_Callable(callable);
return future;
});

Clazz.newMeth(C$, 'waitFor$java_util_concurrent_Future', function (future) {
try {
return future.get$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"InterruptedException")){
var e = e$$;
{
this.log.error$O$Throwable("Module execution interrupted", e);
}
} else if (Clazz.exceptionOf(e$$,"java.util.concurrent.ExecutionException")){
var e = e$$;
{
this.log.error$O$Throwable("Error during module execution", e);
}
} else {
throw e$$;
}
}
return null;
});

Clazz.newMeth(C$, 'getSingleInput$org_scijava_module_Module$Class', function (module, type) {
return p$1.getTypedSingleItem$org_scijava_module_Module$Class$Iterable.apply(this, [module, type, module.getInfo$().inputs$()]);
});

Clazz.newMeth(C$, 'getSingleOutput$org_scijava_module_Module$Class', function (module, type) {
return p$1.getTypedSingleItem$org_scijava_module_Module$Class$Iterable.apply(this, [module, type, module.getInfo$().outputs$()]);
});

Clazz.newMeth(C$, 'getSingleInput$org_scijava_module_Module$java_util_Collection', function (module, types) {
return p$1.getSingleItem$org_scijava_module_Module$java_util_Collection$Iterable.apply(this, [module, types, module.getInfo$().inputs$()]);
});

Clazz.newMeth(C$, 'getSingleOutput$org_scijava_module_Module$java_util_Collection', function (module, types) {
return p$1.getSingleItem$org_scijava_module_Module$java_util_Collection$Iterable.apply(this, [module, types, module.getInfo$().outputs$()]);
});

Clazz.newMeth(C$, 'save$org_scijava_module_ModuleItem$TT', function (item, value) {
if (!item.isPersisted$()) return;
if ($I$(5).equals$O$O(item.getDefaultValue$(), value)) {
this.prefService.remove$Class$S(p$1.prefClass$org_scijava_module_ModuleItem.apply(this, [item]), p$1.prefKey$org_scijava_module_ModuleItem.apply(this, [item]));
return;
}var sValue=value == null  ? "" : this.convertService.convert$O$Class(value, Clazz.getClass(String));
if (!this.convertService.supports$O$Class(sValue, item.getType$())) return;
this.prefService.put$Class$S$S(p$1.prefClass$org_scijava_module_ModuleItem.apply(this, [item]), p$1.prefKey$org_scijava_module_ModuleItem.apply(this, [item]), sValue);
});

Clazz.newMeth(C$, 'load$org_scijava_module_ModuleItem', function (item) {
if (!item.isPersisted$()) return null;
var sValue=this.prefService.get$Class$S(p$1.prefClass$org_scijava_module_ModuleItem.apply(this, [item]), p$1.prefKey$org_scijava_module_ModuleItem.apply(this, [item]));
if (sValue == null ) return null;
return this.convertService.convert$O$Class(sValue, item.getType$());
});

Clazz.newMeth(C$, 'getDefaultValue$org_scijava_module_ModuleItem', function (item) {
var defaultValue=item.getDefaultValue$();
if (defaultValue != null ) return defaultValue;
var min=item.getMinimumValue$();
if (min != null ) return min;
var softMin=item.getSoftMinimum$();
if (softMin != null ) return softMin;
var max=item.getMaximumValue$();
if (max != null ) return max;
var softMax=item.getSoftMaximum$();
if (softMax != null ) return softMax;
if (Clazz.getClass(Number).isAssignableFrom$Class(item.getType$())) {
var zero=this.convertService.convert$O$Class("0", item.getType$());
if (zero != null ) return zero;
}return null;
});

Clazz.newMeth(C$, 'initialize$', function () {
this.moduleIndex=Clazz.new_($I$(6,1));
});

Clazz.newMeth(C$, 'pre$Z', function (process) {
if (!process) return null;
return this.pluginService.createInstancesOfType$Class(Clazz.getClass($I$(7),[]));
}, p$1);

Clazz.newMeth(C$, 'post$Z', function (process) {
if (!process) return null;
return this.pluginService.createInstancesOfType$Class(Clazz.getClass($I$(8),[]));
}, p$1);

Clazz.newMeth(C$, 'getRegisteredModuleInstance$org_scijava_module_ModuleInfo', function (info) {
var type=$I$(9).load$S(info.getDelegateClassName$());
if (type == null  || !Clazz.getClass($I$(10),['cancel$','getDelegateObject$','getInfo$','getInput$S','getInputs$','getOutput$S','getOutputs$','initialize$','isInputResolved$S','isOutputResolved$S','isResolved$S','preview$','resolveInput$S','resolveOutput$S','setInput$S$O','setInputs$java_util_Map','setOutput$S$O','setOutputs$java_util_Map','setResolved$S$Z','unresolveInput$S','unresolveOutput$S']).isAssignableFrom$Class(type) ) return null;
var moduleType=type;
var objects=this.objectService.getObjects$Class(moduleType);
if (objects == null  || objects.isEmpty$() ) {
return null;
}if (objects.size$() > 1) {
this.log.warn$O("Ignoring multiple candidate module instances for class: " + type.getName$());
return null;
}return objects.get$I(0);
}, p$1);

Clazz.newMeth(C$, 'createMap$OA', function (values) {
if (values == null  || values.length == 0 ) return null;
var inputMap=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(11,1));
if (values.length == 1 && Clazz.instanceOf(values[0], "java.util.Map") ) {
var valueMap=values[0];
for (var key, $key = valueMap.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
if (!(Clazz.instanceOf(key, "java.lang.String"))) {
this.log.error$O("Invalid input name: " + key);
continue;
}var name=key;
var value=valueMap.get$O(key);
inputMap.put$TK$TV(name, value);
}
return inputMap;
}if (values.length % 2 != 0) {
this.log.error$O("Ignoring extraneous argument: " + values[values.length - 1]);
}var numPairs=(values.length/2|0);
for (var i=0; i < numPairs; i++) {
var key=values[2 * i];
var value=values[2 * i + 1];
if (!(Clazz.instanceOf(key, "java.lang.String"))) {
this.log.error$O("Invalid input name: " + key);
continue;
}var name=key;
inputMap.put$TK$TV(name, value);
}
return inputMap;
}, p$1);

Clazz.newMeth(C$, 'assignInputs$org_scijava_module_Module$java_util_Map', function (module, inputMap) {
if (inputMap == null ) return;
for (var name, $name = inputMap.keySet$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
var input=module.getInfo$().getInput$S(name);
var value=inputMap.get$O(name);
var converted;
if (input == null ) {
if (!name.startsWith$S(".")) {
this.log.warn$O("Unmatched input: " + name);
}converted=value;
} else {
var type=input.getType$();
converted=this.convertService.convert$O$Class(value, type);
if (value != null  && converted == null  ) {
this.log.error$O("For input " + name + ": incompatible object " + value.getClass$().getName$() + " for type " + type.getName$() );
continue;
}}module.setInput$S$O(name, converted);
module.resolveInput$S(name);
}
}, p$1);

Clazz.newMeth(C$, 'getTypedSingleItem$org_scijava_module_Module$Class$Iterable', function (module, type, items) {
var types=Clazz.new_(1,{E:"Class"},$I$(12,1));
types.add$TE(type);
var result=p$1.getSingleItem$org_scijava_module_Module$java_util_Collection$Iterable.apply(this, [module, types, items]);
return result;
}, p$1);

Clazz.newMeth(C$, 'getSingleItem$org_scijava_module_Module$java_util_Collection$Iterable', function (module, types, items) {
var result=null;
for (var item, $item = items.iterator$(); $item.hasNext$()&&((item=($item.next$())),1);) {
var name=item.getName$();
var resolved=module.isInputResolved$S(name);
if (resolved) continue;
if (!item.isAutoFill$()) continue;
var itemType=item.getType$();
for (var type, $type = types.iterator$(); $type.hasNext$()&&((type=($type.next$())),1);) {
if (type.isAssignableFrom$Class(itemType)) {
if (result != null ) return null;
result=item;
break;
}}
}
return result;
}, p$1);

Clazz.newMeth(C$, 'delegateClass$org_scijava_module_ModuleItem', function (item) {
try {
return item.getInfo$().loadDelegateClass$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"ClassNotFoundException")){
throw Clazz.new_(Clazz.load('IllegalStateException').c$$Throwable,[exc]);
} else {
throw exc;
}
}
}, p$1);

Clazz.newMeth(C$, 'prefClass$org_scijava_module_ModuleItem', function (item) {
var persistKey=item.getPersistKey$();
return persistKey == null  || persistKey.isEmpty$()  ? p$1.delegateClass$org_scijava_module_ModuleItem.apply(this, [item]) : null;
}, p$1);

Clazz.newMeth(C$, 'prefKey$org_scijava_module_ModuleItem', function (item) {
var persistKey=item.getPersistKey$();
return persistKey == null  || persistKey.isEmpty$()  ? item.getName$() : persistKey;
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.module.DefaultModuleService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']],
  [['eventService','org.scijava.event.EventService',null,['org.scijava.plugin.Parameter']],['']],
  [['pluginService','org.scijava.plugin.PluginService',null,['org.scijava.plugin.Parameter']],['']],
  [['objectService','org.scijava.object.ObjectService',null,['org.scijava.plugin.Parameter']],['']],
  [['threadService','org.scijava.thread.ThreadService',null,['org.scijava.plugin.Parameter']],['']],
  [['prefService','org.scijava.prefs.PrefService',null,['org.scijava.plugin.Parameter']],['']],
  [['convertService','org.scijava.convert.ConvertService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:27 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
