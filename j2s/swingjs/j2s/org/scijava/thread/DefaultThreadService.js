(function(){var P$=Clazz.newPackage("org.scijava.thread"),p$1={},I$=[[0,'java.util.WeakHashMap','java.awt.EventQueue','Thread',['org.scijava.thread.ThreadService','.ThreadContext'],'java.util.HashMap','java.util.concurrent.Executors','org.scijava.thread.DefaultThreadService']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultThreadService", null, 'org.scijava.service.AbstractService', 'org.scijava.thread.ThreadService');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.parents=Clazz.new_(1,{K:"Thread",V:"Thread"},$I$(1,1));
}

Clazz.newMeth(C$, '$init$', function () {
this.nextThread=0;
}, 1);

C$.$fields$=[['Z',['disposed'],'I',['nextThread'],'O',['log','org.scijava.log.LogService','executor','java.util.concurrent.ExecutorService','queues','java.util.Map']]
,['O',['parents','java.util.WeakHashMap']]]

Clazz.newMeth(C$, 'run$java_util_concurrent_Callable', function (code) {
if (this.disposed) return null;
return p$1.executor.apply(this, []).submit$java_util_concurrent_Callable(p$1.wrap$java_util_concurrent_Callable.apply(this, [code]));
});

Clazz.newMeth(C$, 'run$Runnable', function (code) {
if (this.disposed) return null;
return p$1.executor.apply(this, []).submit$Runnable(p$1.wrap$Runnable.apply(this, [code]));
});

Clazz.newMeth(C$, 'getExecutorService$', function () {
return p$1.executor.apply(this, []);
});

Clazz.newMeth(C$, 'setExecutorService$java_util_concurrent_ExecutorService', function (executor) {
this.executor=executor;
});

Clazz.newMeth(C$, 'isDispatchThread$', function () {
return $I$(2).isDispatchThread$();
});

Clazz.newMeth(C$, 'invoke$Runnable', function (code) {
if (this.isDispatchThread$()) {
code.run$();
} else {
$I$(2).invokeAndWait$Runnable(p$1.wrap$Runnable.apply(this, [code]));
}});

Clazz.newMeth(C$, 'queue$Runnable', function (code) {
$I$(2).invokeLater$Runnable(p$1.wrap$Runnable.apply(this, [code]));
});

Clazz.newMeth(C$, 'queue$S$Runnable', function (id, code) {
return p$1.executor$S.apply(this, [id]).submit$Runnable(p$1.wrap$Runnable.apply(this, [code]));
});

Clazz.newMeth(C$, 'queue$S$java_util_concurrent_Callable', function (id, code) {
return p$1.executor$S.apply(this, [id]).submit$java_util_concurrent_Callable(p$1.wrap$java_util_concurrent_Callable.apply(this, [code]));
});

Clazz.newMeth(C$, 'getParent$Thread', function (thread) {
return C$.parents.get$O(thread != null  ? thread : $I$(3).currentThread$());
});

Clazz.newMeth(C$, 'getThreadContext$Thread', function (thread) {
var name=thread.getName$();
if (name.startsWith$S(p$1.contextThreadPrefix.apply(this, []))) return $I$(4).SAME;
if (name.startsWith$S("SciJava-")) return $I$(4).OTHER;
var parent=this.getParent$Thread(thread);
if (parent === thread  || parent == null  ) return $I$(4).NONE;
return this.getThreadContext$Thread(parent);
});

Clazz.newMeth(C$, 'dispose$', function () {
this.disposed=true;
if (this.executor != null ) {
this.executor.shutdown$();
this.executor=null;
}if (this.queues != null ) {
for (var queue, $queue = this.queues.values$().iterator$(); $queue.hasNext$()&&((queue=($queue.next$())),1);) {
queue.shutdown$();
}
}});

Clazz.newMeth(C$, ['newThread$Runnable','newThread$'], function (r) {
var threadName=p$1.contextThreadPrefix.apply(this, []) + this.nextThread++;
return Clazz.new_($I$(3,1).c$$Runnable$S,[r, threadName]);
});

Clazz.newMeth(C$, 'executor', function () {
if (this.executor == null ) p$1.initExecutor.apply(this, []);
return this.executor;
}, p$1);

Clazz.newMeth(C$, 'executor$S', function (id) {
if (this.disposed) return null;
if (this.queues == null ) this.queues=Clazz.new_(1,{K:"String",V:"java.util.concurrent.ExecutorService"},$I$(5,1));
if (!this.queues.containsKey$O(id)) {
var factory=((P$.DefaultThreadService$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DefaultThreadService$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.concurrent.ThreadFactory', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['newThread$Runnable','newThread$'], function (r) {
var threadName=p$1.contextThreadPrefix.apply(this.b$['org.scijava.thread.DefaultThreadService'], []) + this.$finals$.id;
return Clazz.new_($I$(3,1).c$$Runnable$S,[r, threadName]);
});
})()
), Clazz.new_(P$.DefaultThreadService$1.$init$, [this, {id:id}]));
var queue=$I$(6).newSingleThreadExecutor$java_util_concurrent_ThreadFactory(factory);
this.queues.put$TK$TV(id, queue);
}return this.queues.get$O(id);
}, p$1);

Clazz.newMeth(C$, 'initExecutor', function () {
if (this.executor != null ) return;
this.executor=$I$(6).newCachedThreadPool$java_util_concurrent_ThreadFactory(this);
}, p$1);

Clazz.newMeth(C$, 'wrap$Runnable', function (r) {
var parent=$I$(3).currentThread$();
return ((P$.DefaultThreadService$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DefaultThreadService$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
var thread=$I$(3).currentThread$();
try {
if (this.$finals$.parent !== thread ) $I$(7).parents.put$TK$TV(thread, this.$finals$.parent);
this.$finals$.r.run$();
} finally {
if (this.$finals$.parent !== thread ) $I$(7).parents.remove$O(thread);
}
});
})()
), Clazz.new_(P$.DefaultThreadService$2.$init$, [this, {r:r,parent:parent}]));
}, p$1);

Clazz.newMeth(C$, 'wrap$java_util_concurrent_Callable', function (c) {
var parent=$I$(3).currentThread$();
return ((P$.DefaultThreadService$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "DefaultThreadService$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.concurrent.Callable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'call$', function () {
var thread=$I$(3).currentThread$();
try {
if (this.$finals$.parent !== thread ) $I$(7).parents.put$TK$TV(thread, this.$finals$.parent);
return this.$finals$.c.call$();
} finally {
if (this.$finals$.parent !== thread ) $I$(7).parents.remove$O(thread);
}
});
})()
), Clazz.new_(P$.DefaultThreadService$3.$init$, [this, {c:c,parent:parent}]));
}, p$1);

Clazz.newMeth(C$, 'contextThreadPrefix', function () {
var contextHash=Integer.toHexString$I(this.context$().hashCode$());
return "SciJava-" + contextHash + "-Thread-" ;
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.thread.DefaultThreadService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" ']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
