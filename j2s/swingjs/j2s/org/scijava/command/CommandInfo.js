(function(){var P$=Clazz.newPackage("org.scijava.command"),p$1={},I$=[[0,'java.util.ArrayList','java.util.HashMap','org.scijava.command.Command','org.scijava.command.CommandModule','org.scijava.util.StringMaker','java.util.Collections','org.scijava.module.Module','org.scijava.command.Interactive','org.scijava.command.Previewable','org.scijava.Cancelable','org.scijava.module.event.ModulesUpdatedEvent','StringBuilder','java.lang.reflect.Modifier','org.scijava.ValidityProblem','org.scijava.util.ClassUtils','org.scijava.plugin.Parameter','org.scijava.ItemVisibility','org.scijava.ItemIO','org.scijava.command.CommandModuleItem','org.scijava.util.Types']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CommandInfo", null, 'org.scijava.plugin.PluginInfo', 'org.scijava.module.ModuleInfo');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.problems=Clazz.new_(1,{E:"org.scijava.ValidityProblem"},$I$(1,1));
this.inputMap=Clazz.new_(1,{K:"String",V:"org.scijava.module.ModuleItem"},$I$(2,1));
this.outputMap=Clazz.new_(1,{K:"String",V:"org.scijava.module.ModuleItem"},$I$(2,1));
this.inputList=Clazz.new_(1,{E:"org.scijava.module.ModuleItem"},$I$(1,1));
this.outputList=Clazz.new_(1,{E:"org.scijava.module.ModuleItem"},$I$(1,1));
}, 1);

C$.$fields$=[['Z',['paramsParsed'],'O',['info','org.scijava.plugin.PluginInfo','presets','java.util.Map','problems','java.util.List','inputMap','java.util.Map','+outputMap','inputList','java.util.List','+outputList']]]

Clazz.newMeth(C$, 'c$$S', function (className) {
C$.c$$org_scijava_plugin_PluginInfo$S$Class$org_scijava_plugin_Plugin.apply(this, [null, className, null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$S$org_scijava_plugin_Plugin', function (className, annotation) {
C$.c$$org_scijava_plugin_PluginInfo$S$Class$org_scijava_plugin_Plugin.apply(this, [null, className, null, annotation]);
}, 1);

Clazz.newMeth(C$, 'c$$Class', function (commandClass) {
C$.c$$org_scijava_plugin_PluginInfo$S$Class$org_scijava_plugin_Plugin.apply(this, [null, null, commandClass, null]);
}, 1);

Clazz.newMeth(C$, 'c$$Class$org_scijava_plugin_Plugin', function (commandClass, annotation) {
C$.c$$org_scijava_plugin_PluginInfo$S$Class$org_scijava_plugin_Plugin.apply(this, [null, null, commandClass, annotation]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_plugin_PluginInfo', function (info) {
C$.c$$org_scijava_plugin_PluginInfo$S$Class$org_scijava_plugin_Plugin.apply(this, [info, null, null, info.getAnnotation$()]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_plugin_PluginInfo$S$Class$org_scijava_plugin_Plugin', function (info, className, commandClass, annotation) {
;C$.superclazz.c$$S$Class$Class$org_scijava_plugin_Plugin$ClassLoader.apply(this,[className, commandClass, Clazz.getClass($I$(3),[]), annotation, null]);C$.$init$.apply(this);
this.info=info;
this.setPresets$java_util_Map(null);
}, 1);

Clazz.newMeth(C$, 'setPresets$java_util_Map', function (presets) {
if (presets == null ) {
this.presets=Clazz.new_(1,{K:"String",V:"java.lang.Object"},$I$(2,1));
} else {
this.presets=presets;
}});

Clazz.newMeth(C$, 'getPresets$', function () {
return this.presets;
});

Clazz.newMeth(C$, 'createModule$org_scijava_command_Command', function (commandInstance) {
if (Clazz.instanceOf(commandInstance, "org.scijava.module.Module")) return commandInstance;
return Clazz.new_($I$(4,1).c$$org_scijava_command_CommandInfo$org_scijava_command_Command,[this, commandInstance]);
});

Clazz.newMeth(C$, 'setPluginClass$Class', function (pluginClass) {
if (this.info == null ) C$.superclazz.prototype.setPluginClass$Class.apply(this, [pluginClass]);
 else this.info.setPluginClass$Class(pluginClass);
});

Clazz.newMeth(C$, 'getPluginClass$', function () {
return this.info == null  ? C$.superclazz.prototype.getPluginClass$.apply(this, []) : this.info.getPluginClass$();
});

Clazz.newMeth(C$, 'getIconURL$', function () {
return this.info == null  ? C$.superclazz.prototype.getIconURL$.apply(this, []) : this.info.getIconURL$();
});

Clazz.newMeth(C$, 'toString', function () {
var sm=Clazz.new_($I$(5,1).c$$S,[C$.superclazz.prototype.toString.apply(this, [])]);
for (var key, $key = this.presets.keySet$().iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var value=this.presets.get$O(key);
sm.append$S$O(key, value);
}
return sm.toString();
});

Clazz.newMeth(C$, 'getClassName$', function () {
return this.info == null  ? C$.superclazz.prototype.getClassName$.apply(this, []) : this.info.getClassName$();
});

Clazz.newMeth(C$, 'loadClass$', function () {
return this.info == null  ? C$.superclazz.prototype.loadClass$.apply(this, []) : this.info.loadClass$();
});

Clazz.newMeth(C$, 'createInstance$', function () {
return this.info == null  ? C$.superclazz.prototype.createInstance$.apply(this, []) : this.info.createInstance$();
});

Clazz.newMeth(C$, 'getInput$S', function (name) {
p$1.parseParams.apply(this, []);
return this.inputMap.get$O(name);
});

Clazz.newMeth(C$, 'getInput$S$Class', function (name, type) {
return p$1.castItem$org_scijava_command_CommandModuleItem$Class.apply(this, [this.getInput$S(name), type]);
});

Clazz.newMeth(C$, 'getOutput$S', function (name) {
p$1.parseParams.apply(this, []);
return this.outputMap.get$O(name);
});

Clazz.newMeth(C$, 'getOutput$S$Class', function (name, type) {
return p$1.castItem$org_scijava_command_CommandModuleItem$Class.apply(this, [this.getOutput$S(name), type]);
});

Clazz.newMeth(C$, 'inputs$', function () {
p$1.parseParams.apply(this, []);
return $I$(6).unmodifiableList$java_util_List(this.inputList);
});

Clazz.newMeth(C$, 'outputs$', function () {
p$1.parseParams.apply(this, []);
return $I$(6).unmodifiableList$java_util_List(this.outputList);
});

Clazz.newMeth(C$, 'getDelegateClassName$', function () {
return this.getClassName$();
});

Clazz.newMeth(C$, 'loadDelegateClass$', function () {
try {
return this.loadClass$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"org.scijava.InstantiableException")){
throw Clazz.new_(Clazz.load('ClassNotFoundException').c$$S$Throwable,[null, exc]);
} else {
throw exc;
}
}
});

Clazz.newMeth(C$, 'createModule$', function () {
try {
var commandClass=this.loadClass$();
if (Clazz.getClass($I$(7),['cancel$','getDelegateObject$','getInfo$','getInput$S','getInputs$','getOutput$S','getOutputs$','initialize$','isInputResolved$S','isOutputResolved$S','isResolved$S','preview$','resolveInput$S','resolveOutput$S','setInput$S$O','setInputs$java_util_Map','setOutput$S$O','setOutputs$java_util_Map','setResolved$S$Z','unresolveInput$S','unresolveOutput$S']).isAssignableFrom$Class(commandClass)) {
return commandClass.newInstance$();
}} catch (e$$) {
if (Clazz.exceptionOf(e$$,"org.scijava.InstantiableException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('org.scijava.module.ModuleException').c$$Throwable,[e]);
}
} else if (Clazz.exceptionOf(e$$,"InstantiationException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('org.scijava.module.ModuleException').c$$Throwable,[e]);
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('org.scijava.module.ModuleException').c$$Throwable,[e]);
}
} else {
throw e$$;
}
}
return Clazz.new_($I$(4,1).c$$org_scijava_command_CommandInfo,[this]);
});

Clazz.newMeth(C$, 'isInteractive$', function () {
var commandClass=p$1.loadCommandClass.apply(this, []);
if (commandClass == null ) return false;
return Clazz.getClass($I$(8),[]).isAssignableFrom$Class(commandClass);
});

Clazz.newMeth(C$, 'canPreview$', function () {
var commandClass=p$1.loadCommandClass.apply(this, []);
if (commandClass == null ) return false;
return Clazz.getClass($I$(9),['cancel$','preview$']).isAssignableFrom$Class(commandClass);
});

Clazz.newMeth(C$, 'canCancel$', function () {
var commandClass=p$1.loadCommandClass.apply(this, []);
if (commandClass == null ) return false;
return Clazz.getClass($I$(10),['cancel$S','getCancelReason$','isCanceled$']).isAssignableFrom$Class(commandClass);
});

Clazz.newMeth(C$, 'canRunHeadless$', function () {
return this.getAnnotation$() == null  ? false : this.getAnnotation$().headless$();
});

Clazz.newMeth(C$, 'getInitializer$', function () {
return this.getAnnotation$() == null  ? null : this.getAnnotation$().initializer$();
});

Clazz.newMeth(C$, 'update$org_scijava_event_EventService', function (eventService) {
eventService.publish$TE(Clazz.new_($I$(11,1).c$$org_scijava_module_ModuleInfo,[this]));
});

Clazz.newMeth(C$, 'getTitle$', function () {
var title=C$.superclazz.prototype.getTitle$.apply(this, []);
if (!title.equals$O(this.getClass$().getSimpleName$())) return title;
var className=this.getDelegateClassName$();
var dot=className.lastIndexOf$S(".");
return dot < 0 ? className : className.substring$I(dot + 1);
});

Clazz.newMeth(C$, 'isValid$', function () {
p$1.parseParams.apply(this, []);
return this.problems.isEmpty$();
});

Clazz.newMeth(C$, 'getProblems$', function () {
p$1.parseParams.apply(this, []);
return $I$(6).unmodifiableList$java_util_List(this.problems);
});

Clazz.newMeth(C$, 'getIdentifier$', function () {
var sb=Clazz.new_($I$(12,1));
sb.append$S("command:" + this.getDelegateClassName$());
var pre=this.getPresets$();
if (!pre.isEmpty$()) {
sb.append$S("(");
var first=true;
for (var name, $name = pre.keySet$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
var value=pre.get$O(name);
var sValue=value == null  ? "" : value.toString().replaceAll$S$S("[^\\w]", "_");
if (first) {
sb.append$S(", ");
first=false;
}sb.append$S(name + " = " + sValue );
}
sb.append$S(")");
}return sb.toString();
});

Clazz.newMeth(C$, 'parseParams', function () {
if (!this.paramsParsed) p$1.initParams.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'initParams', function () {
if (this.paramsParsed) return;
p$1.checkFields$Class.apply(this, [p$1.loadCommandClass.apply(this, [])]);
this.paramsParsed=true;
}, p$1);

Clazz.newMeth(C$, 'checkFields$Class', function (type) {
if (type == null ) return;
if ($I$(13).isAbstract$I(type.getModifiers$())) {
this.problems.add$TE(Clazz.new_($I$(14,1).c$$S,["Delegate class is abstract"]));
}var fields=$I$(15).getAnnotatedFields$Class$Class(type, Clazz.getClass($I$(16),['attrs','autoFill','callback','choices','columns','description','initializer','label','max','min','persist','persistKey','required','stepSize','style','type','validater','visibility']));
for (var f, $f = fields.iterator$(); $f.hasNext$()&&((f=($f.next$())),1);) {
f.setAccessible$Z(true);
var param=f.getAnnotation$Class(Clazz.getClass($I$(16),['attrs','autoFill','callback','choices','columns','description','initializer','label','max','min','persist','persistKey','required','stepSize','style','type','validater','visibility']));
var valid=true;
var isFinal=$I$(13).isFinal$I(f.getModifiers$());
var isMessage=param.visibility$() === $I$(17).MESSAGE ;
if (isFinal && !isMessage ) {
var error="Invalid final parameter: " + f;
this.problems.add$TE(Clazz.new_($I$(14,1).c$$S,[error]));
valid=false;
}var name=f.getName$();
if (this.inputMap.containsKey$O(name) || this.outputMap.containsKey$O(name) ) {
var error="Invalid duplicate parameter: " + f;
this.problems.add$TE(Clazz.new_($I$(14,1).c$$S,[error]));
valid=false;
}if (param.type$() === $I$(18).BOTH  && p$1.isImmutable$Class.apply(this, [f.getType$()]) ) {
var error="Immutable BOTH parameter: " + f;
this.problems.add$TE(Clazz.new_($I$(14,1).c$$S,[error]));
valid=false;
}if (!valid) {
continue;
}var isPreset=this.presets.containsKey$O(name);
var item=Clazz.new_(1,{T:"java.lang.Object"},$I$(19,1).c$$org_scijava_module_ModuleInfo$reflect_Field,[this, f]);
if (item.isInput$()) {
this.inputMap.put$TK$TV(name, item);
if (!isPreset) this.inputList.add$TE(item);
}if (item.isOutput$()) {
this.outputMap.put$TK$TV(name, item);
if (!isPreset) this.outputList.add$TE(item);
}}
}, p$1);

Clazz.newMeth(C$, 'isImmutable$Class', function (type) {
return $I$(20).isNumber$Class(type) || $I$(20).isText$Class(type) || $I$(20).isBoolean$Class(type)  ;
}, p$1);

Clazz.newMeth(C$, 'loadCommandClass', function () {
try {
return this.loadClass$();
} catch (e) {
if (Clazz.exceptionOf(e,"org.scijava.InstantiableException")){
var error="Could not initialize command class: " + this.getClassName$();
this.problems.add$TE(Clazz.new_($I$(14,1).c$$S$Throwable,[error, e]));
} else {
throw e;
}
}
return null;
}, p$1);

Clazz.newMeth(C$, 'castItem$org_scijava_command_CommandModuleItem$Class', function (item, type) {
var itemType=item.getType$();
if (!type.isAssignableFrom$Class(itemType)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Type " + type.getName$() + " is incompatible with item of type " + itemType.getName$() ]);
}var typedItem=item;
return typedItem;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:22 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
