(function(){var P$=Clazz.newPackage("org.scijava.module"),p$1={},I$=[[0,'org.scijava.module.event.ModulePreprocessEvent','org.scijava.module.event.ModulePostprocessEvent','org.scijava.module.event.ModuleStartedEvent','org.scijava.module.event.ModuleExecutingEvent','org.scijava.module.event.ModuleExecutedEvent','org.scijava.module.event.ModuleFinishedEvent','org.scijava.module.event.ModuleCanceledEvent']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ModuleRunner", null, 'org.scijava.AbstractContextual', ['java.util.concurrent.Callable', 'Runnable']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['module','org.scijava.module.Module','pre','java.util.List','+post','es','org.scijava.event.EventService','ss','org.scijava.app.StatusService','log','org.scijava.log.LogService']]]

Clazz.newMeth(C$, 'c$$org_scijava_Context$org_scijava_module_Module$java_util_List$java_util_List', function (context, module, pre, post) {
Clazz.super_(C$, this);
this.setContext$org_scijava_Context(context);
this.module=module;
this.pre=pre;
this.post=post;
}, 1);

Clazz.newMeth(C$, 'preProcess$', function () {
if (this.pre == null ) return null;
for (var p, $p = this.pre.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
p.process$(this.module);
if (this.es != null ) this.es.publish$TE(Clazz.new_($I$(1,1).c$$org_scijava_module_Module$org_scijava_module_process_ModulePreprocessor,[this.module, p]));
if (p.isCanceled$()) return p;
}
return null;
});

Clazz.newMeth(C$, 'postProcess$', function () {
if (this.post == null ) return;
for (var p, $p = this.post.iterator$(); $p.hasNext$()&&((p=($p.next$())),1);) {
p.process$(this.module);
if (this.es != null ) this.es.publish$TE(Clazz.new_($I$(2,1).c$$org_scijava_module_Module$org_scijava_module_process_ModulePostprocessor,[this.module, p]));
}
});

Clazz.newMeth(C$, 'call$', function () {
try {
this.run$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"RuntimeException")){
var exc = e$$;
{
if (this.log != null ) this.log.error$O$Throwable("Module threw exception", exc);
throw exc;
}
} else if (Clazz.exceptionOf(e$$,"Error")){
var err = e$$;
{
if (this.log != null ) this.log.error$O$Throwable("Module threw error", err);
throw err;
}
} else {
throw e$$;
}
}
return this.module;
});

Clazz.newMeth(C$, 'run$', function () {
if (this.module == null ) return;
var title=this.module.getInfo$().getTitle$();
if (this.ss != null ) this.ss.showStatus$S("Running command: " + title);
if (this.es != null ) this.es.publish$TE(Clazz.new_($I$(3,1).c$$org_scijava_module_Module,[this.module]));
var canceler=this.preProcess$();
if (canceler != null ) {
var reason=canceler.getCancelReason$();
p$1.cancel$S.apply(this, [reason]);
p$1.cleanupAndBroadcastCancelation$S$S.apply(this, [title, reason]);
return;
}if (this.es != null ) this.es.publish$TE(Clazz.new_($I$(4,1).c$$org_scijava_module_Module,[this.module]));
this.module.run$();
if (p$1.isCanceled.apply(this, [])) {
p$1.cleanupAndBroadcastCancelation$S$S.apply(this, [title, p$1.getCancelReason.apply(this, [])]);
return;
}if (this.es != null ) this.es.publish$TE(Clazz.new_($I$(5,1).c$$org_scijava_module_Module,[this.module]));
this.postProcess$();
if (this.es != null ) this.es.publish$TE(Clazz.new_($I$(6,1).c$$org_scijava_module_Module,[this.module]));
if (this.ss != null ) this.ss.showStatus$S("Command finished: " + title);
});

Clazz.newMeth(C$, 'cleanupAndBroadcastCancelation$S$S', function (title, reason) {
if (this.ss != null ) this.ss.showStatus$S("Canceling command: " + title);
this.module.cancel$();
if (this.es != null ) this.es.publish$TE(Clazz.new_($I$(7,1).c$$org_scijava_module_Module$S,[this.module, reason]));
if (this.ss != null ) {
this.ss.showStatus$S("Command canceled: " + title);
if (reason != null ) this.ss.warn$S(reason);
}}, p$1);

Clazz.newMeth(C$, 'isCanceled', function () {
return Clazz.instanceOf(this.module, "org.scijava.Cancelable") && (this.module).isCanceled$() ;
}, p$1);

Clazz.newMeth(C$, 'getCancelReason', function () {
return Clazz.instanceOf(this.module, "org.scijava.Cancelable") ? (this.module).getCancelReason$() : null;
}, p$1);

Clazz.newMeth(C$, 'cancel$S', function (reason) {
if (!(Clazz.instanceOf(this.module, "org.scijava.Cancelable"))) return;
(this.module).cancel$S(reason);
}, p$1);
C$.$getAnn$ = function(){ return [
[['es','org.scijava.event.EventService',null,['org.scijava.plugin.Parameter']],['required="false" ']],
  [['ss','org.scijava.app.StatusService',null,['org.scijava.plugin.Parameter']],['required="false" ']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['required="false" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:27 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
