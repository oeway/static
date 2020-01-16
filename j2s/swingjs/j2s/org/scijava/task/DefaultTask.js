(function(){var P$=Clazz.newPackage("org.scijava.task"),p$1={},I$=[[0,'org.scijava.task.event.TaskEvent']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultTask", null, null, 'org.scijava.task.Task');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['canceled'],'L',['step','max'],'S',['cancelReason','status','name'],'O',['threadService','org.scijava.thread.ThreadService','eventService','org.scijava.event.EventService','future','java.util.concurrent.Future']]]

Clazz.newMeth(C$, 'c$$org_scijava_thread_ThreadService$org_scijava_event_EventService', function (threadService, eventService) {
;C$.$init$.apply(this);
this.threadService=threadService;
this.eventService=eventService;
}, 1);

Clazz.newMeth(C$, 'run$Runnable', function (r) {
if (r == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
p$1.future$Runnable.apply(this, [r]);
});

Clazz.newMeth(C$, 'waitFor$', function () {
p$1.future.apply(this, []).get$();
});

Clazz.newMeth(C$, 'isDone$', function () {
return this.future != null  && this.future.isDone$() ;
});

Clazz.newMeth(C$, 'getStatusMessage$', function () {
return this.status;
});

Clazz.newMeth(C$, 'getProgressValue$', function () {
return this.step;
});

Clazz.newMeth(C$, 'getProgressMaximum$', function () {
return this.max;
});

Clazz.newMeth(C$, 'setStatusMessage$S', function (status) {
this.status=status;
p$1.fireTaskEvent.apply(this, []);
});

Clazz.newMeth(C$, 'setProgressValue$J', function (step) {
this.step=step;
p$1.fireTaskEvent.apply(this, []);
});

Clazz.newMeth(C$, 'setProgressMaximum$J', function (max) {
this.max=max;
p$1.fireTaskEvent.apply(this, []);
});

Clazz.newMeth(C$, 'isCanceled$', function () {
return this.canceled;
});

Clazz.newMeth(C$, 'cancel$S', function (reason) {
this.canceled=true;
this.cancelReason=reason;
});

Clazz.newMeth(C$, 'getCancelReason$', function () {
return this.cancelReason;
});

Clazz.newMeth(C$, 'getName$', function () {
return this.name;
});

Clazz.newMeth(C$, 'setName$S', function (name) {
this.name=name;
});

Clazz.newMeth(C$, 'future', function () {
return p$1.future$Runnable.apply(this, [null]);
}, p$1);

Clazz.newMeth(C$, 'future$Runnable', function (r) {
if (this.future == null ) p$1.initFuture$Runnable.apply(this, [r]);
return this.future;
}, p$1);

Clazz.newMeth(C$, 'initFuture$Runnable', function (r) {
if (this.future != null ) return;
if (r == null ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Must call run first"]);
this.future=this.threadService.run$Runnable(r);
}, p$1);

Clazz.newMeth(C$, 'fireTaskEvent', function () {
if (this.eventService != null ) this.eventService.publish$TE(Clazz.new_($I$(1,1).c$$org_scijava_task_Task,[this]));
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
