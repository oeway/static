(function(){var P$=Clazz.newPackage("org.scijava.console"),p$1={},p$2={},I$=[[0,['org.scijava.thread.ThreadService','.ThreadContext'],'Thread','org.scijava.console.OutputEvent','java.util.LinkedList','java.util.ArrayList',['org.scijava.console.DefaultConsoleService','.OutputStreamReporter'],['org.scijava.console.OutputEvent','.Source'],'java.util.concurrent.CopyOnWriteArrayList','org.scijava.console.MultiPrintStream']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultConsoleService", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.scijava.plugin.AbstractHandlerService', 'org.scijava.console.ConsoleService');
C$.$classes$=[['OutputStreamReporter',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['threadService','org.scijava.thread.ThreadService','$log','org.scijava.log.LogService','sysout','org.scijava.console.MultiPrintStream','+syserr','out','org.scijava.console.DefaultConsoleService.OutputStreamReporter','+err','listeners','java.util.List']]]

Clazz.newMeth(C$, 'processArgs$SA', function (args) {
this.$log.debug$O("Received command line arguments:");
var argList=Clazz.new_(1,{E:"String"},$I$(4,1));
for (var arg, $arg = 0, $$arg = args; $arg<$$arg.length&&((arg=($$arg[$arg])),1);$arg++) {
this.$log.debug$O("\t" + arg);
argList.add$TE(arg);
}
var previousArgs=Clazz.new_(1,{E:"String"},$I$(5,1));
while (!argList.isEmpty$()){
var handler=this.getHandler$TDT(argList);
if (handler == null ) {
var arg=argList.removeFirst$();
this.$log.warn$O("Ignoring invalid argument: " + arg);
continue;
}previousArgs.clear$();
previousArgs.addAll$java_util_Collection(argList);
handler.handle$java_util_LinkedList(argList);
if (p$2.sameElements$java_util_List$java_util_List.apply(this, [previousArgs, argList])) {
var arg=argList.removeFirst$();
this.$log.warn$O("Plugin '" + handler.getClass$().getName$() + "' failed to handle argument: " + arg );
}}
});

Clazz.newMeth(C$, 'addOutputListener$org_scijava_console_OutputListener', function (l) {
if (this.listeners == null ) p$2.initListeners.apply(this, []);
this.listeners.add$TE(l);
});

Clazz.newMeth(C$, 'removeOutputListener$org_scijava_console_OutputListener', function (l) {
if (this.listeners == null ) p$2.initListeners.apply(this, []);
this.listeners.remove$O(l);
});

Clazz.newMeth(C$, 'notifyListeners$org_scijava_console_OutputEvent', function (event) {
if (this.listeners == null ) p$2.initListeners.apply(this, []);
for (var l, $l = this.listeners.iterator$(); $l.hasNext$()&&((l=($l.next$())),1);) l.outputOccurred$(event);

});

Clazz.newMeth(C$, 'dispose$', function () {
if (this.out != null ) this.sysout.getParent$().removeOutputStream$java_io_OutputStream(this.out);
if (this.err != null ) this.syserr.getParent$().removeOutputStream$java_io_OutputStream(this.err);
});

Clazz.newMeth(C$, 'initListeners', function () {
if (this.listeners != null ) return;
this.sysout=p$2.multiPrintStream$java_io_PrintStream.apply(this, [System.out]);
if (System.out !== this.sysout ) System.setOut$java_io_PrintStream(this.sysout);
this.out=Clazz.new_($I$(6,1).c$$org_scijava_console_OutputEvent_Source, [this, null, $I$(7).STDOUT]);
this.sysout.getParent$().addOutputStream$java_io_OutputStream(this.out);
this.syserr=p$2.multiPrintStream$java_io_PrintStream.apply(this, [System.err]);
if (System.err !== this.syserr ) System.setErr$java_io_PrintStream(this.syserr);
this.err=Clazz.new_($I$(6,1).c$$org_scijava_console_OutputEvent_Source, [this, null, $I$(7).STDERR]);
this.syserr.getParent$().addOutputStream$java_io_OutputStream(this.err);
this.listeners=Clazz.new_(1,{E:"org.scijava.console.OutputListener"},$I$(8,1));
}, p$2);

Clazz.newMeth(C$, 'multiPrintStream$java_io_PrintStream', function (ps) {
if (Clazz.instanceOf(ps, "org.scijava.console.MultiPrintStream")) return ps;
return Clazz.new_($I$(9,1).c$$java_io_OutputStream,[ps]);
}, p$2);

Clazz.newMeth(C$, 'sameElements$java_util_List$java_util_List', function (l1, l2) {
if (l1.size$() != l2.size$()) return false;
for (var i=0; i < l1.size$(); i++) {
if (l1.get$I(i) != l2.get$I(i)) return false;
}
return true;
}, p$2);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.console.DefaultConsoleService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['threadService','org.scijava.thread.ThreadService',null,['org.scijava.plugin.Parameter']],['']],
  [['$log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultConsoleService, "OutputStreamReporter", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.io.OutputStream');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['source','org.scijava.console.OutputEvent.Source']]]

Clazz.newMeth(C$, 'c$$org_scijava_console_OutputEvent_Source', function (source) {
Clazz.super_(C$, this);
this.source=source;
}, 1);

Clazz.newMeth(C$, 'write$I', function (b) {
var relevance=p$1.getRelevance.apply(this, []);
if (relevance === $I$(1).OTHER ) return;
p$1.publish$org_scijava_thread_ThreadService_ThreadContext$S.apply(this, [relevance, "" + b]);
});

Clazz.newMeth(C$, 'write$BA$I$I', function (buf, off, len) {
var relevance=p$1.getRelevance.apply(this, []);
if (relevance === $I$(1).OTHER ) return;
p$1.publish$org_scijava_thread_ThreadService_ThreadContext$S.apply(this, [relevance,  String.instantialize(buf, off, len)]);
});

Clazz.newMeth(C$, 'getRelevance', function () {
return this.this$0.threadService.getThreadContext$Thread($I$(2).currentThread$());
}, p$1);

Clazz.newMeth(C$, 'publish$org_scijava_thread_ThreadService_ThreadContext$S', function (relevance, output) {
var context=this.b$['org.scijava.service.AbstractService'].getContext$.apply(this.b$['org.scijava.service.AbstractService'], []);
var contextual=relevance === $I$(1).SAME ;
var event=Clazz.new_($I$(3,1).c$$org_scijava_Context$org_scijava_console_OutputEvent_Source$S$Z,[context, this.source, output, contextual]);
this.this$0.notifyListeners$org_scijava_console_OutputEvent.apply(this.this$0, [event]);
}, p$1);

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:23 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
