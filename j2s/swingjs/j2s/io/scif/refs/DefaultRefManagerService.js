(function(){var P$=Clazz.newPackage("io.scif.refs"),p$1={},I$=[[0,'java.util.WeakHashMap','java.util.HashSet','io.scif.refs.RefProvider',['io.scif.refs.DefaultRefManagerService','.RefCleaner'],'java.lang.ref.ReferenceQueue']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultRefManagerService", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.scijava.service.AbstractService', 'io.scif.refs.RefManagerService');
C$.$classes$=[['RefCleaner',10]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.disposed=Clazz.array(Boolean.TYPE, [1]);
this.managed=Clazz.new_(1,{K:"java.lang.Object",V:"java.util.Set"},$I$(1,1));
this.knownRefs=Clazz.new_(1,{E:"java.lang.ref.Reference"},$I$(2,1));
}, 1);

C$.$fields$=[['O',['threadService','org.scijava.thread.ThreadService','pluginService','org.scijava.plugin.PluginService','logService','org.scijava.log.LogService','disposed','boolean[]','managed','java.util.Map','knownRefs','java.util.Set','queue','java.lang.ref.ReferenceQueue']]]

Clazz.newMeth(C$, 'manage$O$OA', function (toManage, params) {
for (var refProvider, $refProvider = this.pluginService.createInstancesOfType$Class(Clazz.getClass($I$(3),['handles$O$OA','makeRef$O$ref_ReferenceQueue$OA'])).iterator$(); $refProvider.hasNext$()&&((refProvider=($refProvider.next$())),1);) {
if (!p$1.isManaged$O$Class.apply(this, [toManage, refProvider.getClass$()]) && refProvider.handles$O$OA(toManage, params) ) {
var ref=refProvider.makeRef$O$ref_ReferenceQueue$OA(toManage, this.queue, params);
{
var refs=this.managed.get$O(toManage);
if (refs == null ) {
refs=Clazz.new_(1,{E:"Class"},$I$(2,1));
this.managed.put$TK$TV(toManage, refs);
}refs.add$TE(ref.getClass$());
}{
this.knownRefs.add$TE(ref);
if (this.knownRefs.size$() == 1) {
this.threadService.run$Runnable(Clazz.new_($I$(4,1).c$$ref_ReferenceQueue$java_util_Set$org_scijava_log_LogService$ZA,[this.queue, this.knownRefs, this.logService, this.disposed]));
}}}}
});

Clazz.newMeth(C$, 'dispose$', function () {
this.disposed[0]=false;
});

Clazz.newMeth(C$, 'initialize$', function () {
this.queue=Clazz.new_($I$(5,1));
this.disposed[0]=true;
});

Clazz.newMeth(C$, 'isManaged$O$Class', function (referent, pClass) {
{
var refs=this.managed.get$O(referent);
if (refs != null  && refs.contains$O(pClass) ) return true;
}return false;
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'io.scif.refs.DefaultRefManagerService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['threadService','org.scijava.thread.ThreadService',null,['org.scijava.plugin.Parameter']],['']],
  [['pluginService','org.scijava.plugin.PluginService',null,['org.scijava.plugin.Parameter']],['']],
  [['logService','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultRefManagerService, "RefCleaner", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'Runnable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['queue','java.lang.ref.ReferenceQueue','refs','java.util.Set','logService','org.scijava.log.LogService','run','boolean[]']]]

Clazz.newMeth(C$, 'c$$ref_ReferenceQueue$java_util_Set$org_scijava_log_LogService$ZA', function (queue, refs, log, runFlag) {
;C$.$init$.apply(this);
this.queue=queue;
this.refs=refs;
this.logService=log;
this.run=runFlag;
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var size=this.refs.size$();
while (size > 0 && this.run[0] ){
var cleaningRef=null;
try {
cleaningRef=this.queue.remove$J(50);
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
this.logService.error$O$Throwable("RefCleaner: interrupted while polling queue", e);
} else {
throw e;
}
}
{
if (cleaningRef != null ) {
cleaningRef.cleanup$();
this.refs.remove$O(cleaningRef);
}size=this.refs.size$();
}}
if (!this.run[0]) {
for (var ref, $ref = this.refs.iterator$(); $ref.hasNext$()&&((ref=($ref.next$())),1);) {
var cleaningRef=ref;
cleaningRef.cleanup$();
}
}});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:45 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
