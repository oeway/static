(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.util"),p$1={},I$=[[0,'io.scif.jj2000.j2k.util.FacilityManager','Thread','io.scif.jj2000.j2k.util.NativeServices',['io.scif.jj2000.j2k.util.ThreadPool','.ThreadPoolThread']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ThreadPool", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['ThreadPoolThread',0]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['nidle','poolPriority'],'S',['poolName'],'O',['idle','io.scif.jj2000.j2k.util.ThreadPool.ThreadPoolThread[]','targetE','Error','targetRE','RuntimeException']]]

Clazz.newMeth(C$, 'c$$I$I$S', function (size, priority, name) {
;C$.$init$.apply(this);
var i;
var t;
var prop;
var clevel;
if (size <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Pool must be of positive size"]);
}if (priority < 1) {
this.poolPriority=$I$(2).currentThread$().getPriority$();
} else {
this.poolPriority=(priority < 10) ? priority : 10;
}if (name == null ) {
this.poolName="Anonymous ThreadPool";
} else {
this.poolName=name;
}prop=null;
try {
prop=System.getProperty$S("io.scif.jj2000.j2k.util.ThreadPool.concurrency");
} catch (se) {
if (Clazz.exceptionOf(se,"SecurityException")){
} else {
throw se;
}
}
if (prop == null ) {
} else {
try {
clevel=Integer.parseInt$S(prop);
if (clevel < 0) throw Clazz.new_(Clazz.load('NumberFormatException'));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid concurrency level in property io.scif.jj2000.j2k.util.ThreadPool.concurrency"]);
} else {
throw e;
}
}
if ($I$(3).loadLibrary$()) {
$I$(1).getMsgLogger$().printmsg$I$S(1, "Changing thread concurrency level from " + $I$(3).getThreadConcurrency$() + " to " + clevel + "." );
$I$(3).setThreadConcurrency$I(clevel);
} else {
$I$(1).getMsgLogger$().printmsg$I$S(2, "Native library to set thread concurrency level as specified by the io.scif.jj2000.j2k.util.ThreadPool.concurrency property not found. Thread concurrency unchanged.");
}}this.idle=Clazz.array($I$(4), [size]);
this.nidle=0;
for (i=0; i < size; i++) {
t=Clazz.new_($I$(4,1).c$$I$S, [this, null, i, this.poolName + "-" + i ]);
t.start$();
}
}, 1);

Clazz.newMeth(C$, 'getSize$', function () {
return this.idle.length;
});

Clazz.newMeth(C$, 'runTarget$Runnable$O', function (t, l) {
return this.runTarget$Runnable$O$Z$Z(t, l, false, false);
});

Clazz.newMeth(C$, 'runTarget$Runnable$O$Z', function (t, l, async) {
return this.runTarget$Runnable$O$Z$Z(t, l, async, false);
});

Clazz.newMeth(C$, 'runTarget$Runnable$O$Z$Z', function (t, l, async, notifyAll) {
var runner;
runner=p$1.getIdle$Z.apply(this, [async]);
if (runner == null ) return false;
runner.setTarget$Runnable$O$Z(t, l, notifyAll);
return true;
});

Clazz.newMeth(C$, 'checkTargetErrors$', function () {
if (this.targetE != null ) throw this.targetE;
if (this.targetRE != null ) throw this.targetRE;
});

Clazz.newMeth(C$, 'clearTargetErrors$', function () {
this.targetE=null;
this.targetRE=null;
});

Clazz.newMeth(C$, 'putInIdleList$io_scif_jj2000_j2k_util_ThreadPool_ThreadPoolThread', function (t) {
{
this.idle[this.nidle]=t;
this.nidle++;
if (this.nidle == 1) this.idle.notify$();
}}, p$1);

Clazz.newMeth(C$, 'getIdle$Z', function (async) {
{
if (async) {
if (this.nidle == 0) return null;
} else {
while (this.nidle == 0){
try {
this.idle.wait$();
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
return null;
} else {
throw e;
}
}
}
}this.nidle--;
return this.idle[this.nidle];
}}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ThreadPool, "ThreadPoolThread", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'Thread');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['doNotifyAll'],'O',['$target','Runnable','lock','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$I$S', function (idx, name) {
;C$.superclazz.c$$S.apply(this,[name]);C$.$init$.apply(this);
this.setDaemon$Z(true);
this.setPriority$I(this.this$0.poolPriority);
}, 1);

Clazz.newMeth(C$, 'run$', function () {
p$1.putInIdleList$io_scif_jj2000_j2k_util_ThreadPool_ThreadPoolThread.apply(this.this$0, [this]);
{
while (true){
while (this.$target == null ){
try {
this.wait$();
} catch (e) {
if (Clazz.exceptionOf(e,"InterruptedException")){
} else {
throw e;
}
}
}
try {
this.$target.run$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ThreadDeath")){
var td = e$$;
{
$I$(1).getMsgLogger$().printmsg$I$S(2, "Thread.stop() called on a ThreadPool thread or ThreadDeath thrown. This is deprecated. Lock-up might occur.");
throw td;
}
} else if (Clazz.exceptionOf(e$$,"Error")){
var e = e$$;
{
this.this$0.targetE=e;
}
} else if (Clazz.exceptionOf(e$$,"RuntimeException")){
var re = e$$;
{
this.this$0.targetRE=re;
}
} else {
var ue = e$$;
{
this.this$0.targetRE=Clazz.new_(Clazz.load('RuntimeException').c$$S,["Unchecked exception thrown by target\'s run() method in pool " + this.this$0.poolName + "." ]);
}
}
}
p$1.putInIdleList$io_scif_jj2000_j2k_util_ThreadPool_ThreadPoolThread.apply(this.this$0, [this]);
this.$target=null;
if (this.lock != null ) {
{
if (this.doNotifyAll) {
this.lock.notifyAll$();
} else {
this.lock.notify$();
}}}}
}});

Clazz.newMeth(C$, 'setTarget$Runnable$O$Z', function (target, lock, notifyAll) {
this.$target=target;
this.lock=lock;
this.doNotifyAll=notifyAll;
this.notify$();
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
