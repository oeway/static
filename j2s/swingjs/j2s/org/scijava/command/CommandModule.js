(function(){var P$=Clazz.newPackage("org.scijava.command"),p$1={},I$=[[0,'org.scijava.util.ClassUtils']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CommandModule", null, 'org.scijava.module.AbstractModule', ['org.scijava.Cancelable', 'org.scijava.Contextual']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['cancelReason'],'O',['info','org.scijava.command.CommandInfo','command','org.scijava.command.Command','context','org.scijava.Context']]]

Clazz.newMeth(C$, 'c$$org_scijava_command_CommandInfo', function (info) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.info=info;
this.command=p$1.instantiateCommand.apply(this, []);
p$1.assignPresets.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_command_CommandInfo$org_scijava_command_Command', function (info, command) {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
this.info=info;
this.command=command;
p$1.assignPresets.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'getCommand$', function () {
return this.command;
});

Clazz.newMeth(C$, 'preview$', function () {
if (!(Clazz.instanceOf(this.command, "org.scijava.command.Previewable"))) return;
var previewPlugin=this.command;
previewPlugin.preview$();
});

Clazz.newMeth(C$, 'cancel$', function () {
if (!(Clazz.instanceOf(this.command, "org.scijava.command.Previewable"))) return;
var previewPlugin=this.command;
previewPlugin.cancel$();
});

Clazz.newMeth(C$, 'getInfo$', function () {
return this.info;
});

Clazz.newMeth(C$, 'getDelegateObject$', function () {
return this.command;
});

Clazz.newMeth(C$, 'getInput$S', function (name) {
var item=this.info.getInput$S(name);
return item == null  ? null : $I$(1).getValue$reflect_Field$O(item.getField$(), this.command);
});

Clazz.newMeth(C$, 'getOutput$S', function (name) {
var item=this.info.getOutput$S(name);
return item == null  ? null : $I$(1).getValue$reflect_Field$O(item.getField$(), this.command);
});

Clazz.newMeth(C$, 'setInput$S$O', function (name, value) {
var item=this.info.getInput$S(name);
if (item == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No such input: " + name]);
}$I$(1).setValue$reflect_Field$O$O(item.getField$(), this.command, value);
});

Clazz.newMeth(C$, 'setOutput$S$O', function (name, value) {
var item=this.info.getOutput$S(name);
if (item == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["No such output: " + name]);
}$I$(1).setValue$reflect_Field$O$O(item.getField$(), this.command, value);
});

Clazz.newMeth(C$, 'toString', function () {
return this.command.getClass$().getName$();
});

Clazz.newMeth(C$, 'run$', function () {
this.command.run$();
});

Clazz.newMeth(C$, 'isCanceled$', function () {
if (Clazz.instanceOf(this.command, "org.scijava.Cancelable")) {
return (this.command).isCanceled$();
}return this.cancelReason != null ;
});

Clazz.newMeth(C$, 'cancel$S', function (reason) {
if (Clazz.instanceOf(this.command, "org.scijava.Cancelable")) {
(this.command).cancel$S(reason);
return;
}this.cancelReason=reason == null  ? "" : reason;
});

Clazz.newMeth(C$, 'getCancelReason$', function () {
if (Clazz.instanceOf(this.command, "org.scijava.Cancelable")) {
return (this.command).getCancelReason$();
}return this.cancelReason;
});

Clazz.newMeth(C$, 'context$', function () {
if (this.context == null ) throw Clazz.new_(Clazz.load('org.scijava.NullContextException'));
return this.context;
});

Clazz.newMeth(C$, 'getContext$', function () {
return this.context;
});

Clazz.newMeth(C$, 'setContext$org_scijava_Context', function (context) {
context.inject$O(this);
});

Clazz.newMeth(C$, 'instantiateCommand', function () {
try {
return this.info.createInstance$();
} catch (exc) {
if (Clazz.exceptionOf(exc,"org.scijava.InstantiableException")){
throw Clazz.new_(Clazz.load('org.scijava.module.ModuleException').c$$Throwable,[exc]);
} else {
throw exc;
}
}
}, p$1);

Clazz.newMeth(C$, 'assignPresets', function () {
var presets=this.info.getPresets$();
for (var name, $name = presets.keySet$().iterator$(); $name.hasNext$()&&((name=($name.next$())),1);) {
var value=presets.get$O(name);
this.setInput$S$O(name, value);
this.resolveInput$S(name);
}
}, p$1);
C$.$getAnn$ = function(){ return [
[['command','org.scijava.command.Command',null,['org.scijava.plugin.Parameter']],['']],
  [['context','org.scijava.Context',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:22 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
