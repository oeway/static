(function(){var P$=Clazz.newPackage("org.scijava.command"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ModuleCommand", null, 'org.scijava.module.AbstractModule', ['org.scijava.Cancelable', 'org.scijava.command.Command', 'org.scijava.Contextual']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['cancelReason'],'O',['context','org.scijava.Context','commandService','org.scijava.command.CommandService','info','org.scijava.command.CommandInfo']]]

Clazz.newMeth(C$, 'getInfo$', function () {
if (this.info == null ) {
this.info=this.commandService.getCommand$Class(this.getClass$());
}return this.info;
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
C$.$getAnn$ = function(){ return [
[['context','org.scijava.Context',null,['org.scijava.plugin.Parameter']],['']],
  [['commandService','org.scijava.command.CommandService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:22 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
