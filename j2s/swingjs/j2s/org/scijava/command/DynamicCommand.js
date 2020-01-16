(function(){var P$=Clazz.newPackage("org.scijava.command"),I$=[[0,'org.scijava.command.DynamicCommandInfo','org.scijava.util.ClassUtils']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DynamicCommand", null, 'org.scijava.module.DefaultMutableModule', ['org.scijava.Cancelable', 'org.scijava.command.Command', 'org.scijava.Contextual']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['cancelReason'],'O',['context','org.scijava.Context','commandService','org.scijava.command.CommandService','$info','org.scijava.command.DynamicCommandInfo']]]

Clazz.newMeth(C$, 'getInfo$', function () {
if (this.$info == null ) {
var commandInfo=this.commandService.getCommand$Class(this.getClass$());
this.$info=Clazz.new_($I$(1,1).c$$org_scijava_command_CommandInfo$Class,[commandInfo, this.getClass$()]);
}return this.$info;
});

Clazz.newMeth(C$, 'getInput$S', function (name) {
var field=this.getInfo$().getInputField$S(name);
if (field == null ) return C$.superclazz.prototype.getInput$S.apply(this, [name]);
return $I$(2).getValue$reflect_Field$O(field, this);
});

Clazz.newMeth(C$, 'getOutput$S', function (name) {
var field=this.getInfo$().getOutputField$S(name);
if (field == null ) return C$.superclazz.prototype.getInput$S.apply(this, [name]);
return $I$(2).getValue$reflect_Field$O(field, this);
});

Clazz.newMeth(C$, 'setInput$S$O', function (name, value) {
var field=this.getInfo$().getInputField$S(name);
if (field == null ) C$.superclazz.prototype.setInput$S$O.apply(this, [name, value]);
 else $I$(2).setValue$reflect_Field$O$O(field, this, value);
});

Clazz.newMeth(C$, 'setOutput$S$O', function (name, value) {
var field=this.getInfo$().getOutputField$S(name);
if (field == null ) C$.superclazz.prototype.setOutput$S$O.apply(this, [name, value]);
 else $I$(2).setValue$reflect_Field$O$O(field, this, value);
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

Clazz.newMeth(C$, 'isCanceled$', function () {
return this.cancelReason != null ;
});

Clazz.newMeth(C$, 'cancel$S', function (reason) {
this.cancelReason=reason == null  ? "" : reason;
});

Clazz.newMeth(C$, 'getCancelReason$', function () {
return this.cancelReason;
});

Clazz.newMeth(C$, 'uncancel$', function () {
this.cancelReason=null;
});
C$.$getAnn$ = function(){ return [
[['context','org.scijava.Context',null,['org.scijava.plugin.Parameter']],['']],
  [['commandService','org.scijava.command.CommandService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:22 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
