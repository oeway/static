(function(){var P$=Clazz.newPackage("java.util.concurrent"),p$1={},I$=[[0,'java.util.concurrent.FutureTask','java.util.concurrent.LinkedBlockingQueue',['java.util.concurrent.ExecutorCompletionService','.QueueingFuture']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ExecutorCompletionService", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'java.util.concurrent.CompletionService');
C$.$classes$=[['QueueingFuture',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['executor','java.util.concurrent.Executor','aes','java.util.concurrent.AbstractExecutorService','completionQueue','java.util.concurrent.BlockingQueue']]]

Clazz.newMeth(C$, 'newTaskFor$java_util_concurrent_Callable', function (task) {
if (this.aes == null ) return Clazz.new_(1,{V:"Object"},$I$(1,1).c$$java_util_concurrent_Callable,[task]);
 else return this.aes.newTaskFor$java_util_concurrent_Callable(task);
}, p$1);

Clazz.newMeth(C$, ['newTaskFor$Runnable$TV'], function (task, result) {
if (this.aes == null ) return Clazz.new_(1,{V:"Object"},$I$(1,1).c$$Runnable$TV,[task, result]);
 else return this.aes.newTaskFor$Runnable$TT(task, result);
}, p$1);

Clazz.newMeth(C$, 'c$$java_util_concurrent_Executor', function (executor) {
;C$.$init$.apply(this);
if (executor == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.executor=executor;
this.aes=(Clazz.instanceOf(executor, "java.util.concurrent.AbstractExecutorService")) ? executor : null;
this.completionQueue=Clazz.new_(1,{E:"java.util.concurrent.Future"},$I$(2,1));
}, 1);

Clazz.newMeth(C$, 'c$$java_util_concurrent_Executor$java_util_concurrent_BlockingQueue', function (executor, completionQueue) {
;C$.$init$.apply(this);
if (executor == null  || completionQueue == null  ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.executor=executor;
this.aes=(Clazz.instanceOf(executor, "java.util.concurrent.AbstractExecutorService")) ? executor : null;
this.completionQueue=completionQueue;
}, 1);

Clazz.newMeth(C$, 'submit$java_util_concurrent_Callable', function (task) {
if (task == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var f=p$1.newTaskFor$java_util_concurrent_Callable.apply(this, [task]);
this.executor.execute$(Clazz.new_($I$(3,1).c$$java_util_concurrent_RunnableFuture, [this, null, f]));
return f;
});

Clazz.newMeth(C$, ['submit$Runnable$TV'], function (task, result) {
if (task == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
var f=p$1.newTaskFor$Runnable$TV.apply(this, [task, result]);
this.executor.execute$(Clazz.new_($I$(3,1).c$$java_util_concurrent_RunnableFuture, [this, null, f]));
return f;
});

Clazz.newMeth(C$, 'take$', function () {
return this.completionQueue.take$();
});

Clazz.newMeth(C$, 'poll$', function () {
return this.completionQueue.poll$();
});

Clazz.newMeth(C$, 'poll$J$java_util_concurrent_TimeUnit', function (timeout, unit) {
return this.completionQueue.poll$J$java_util_concurrent_TimeUnit(timeout, unit);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.ExecutorCompletionService, "QueueingFuture", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.concurrent.FutureTask');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['task','java.util.concurrent.Future']]]

Clazz.newMeth(C$, 'c$$java_util_concurrent_RunnableFuture', function (task) {
;C$.superclazz.c$$Runnable$TV.apply(this,[task, null]);C$.$init$.apply(this);
this.task=task;
}, 1);

Clazz.newMeth(C$, 'done$', function () {
this.this$0.completionQueue.add$TE(this.task);
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:01 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
