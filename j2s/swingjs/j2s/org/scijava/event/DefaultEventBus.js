(function(){var P$=Clazz.newPackage("org.scijava.event"),p$1={},I$=[[0,'java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultEventBus", null, 'org.bushe.swing.event.ThreadSafeEventService');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['threadService','org.scijava.thread.ThreadService','log','org.scijava.log.LogService']]]

Clazz.newMeth(C$, 'c$$org_scijava_thread_ThreadService$org_scijava_log_LogService', function (threadService, log) {
;C$.superclazz.c$$Long$Z$Integer$Integer$Long.apply(this,[new Long(200), false, null, null, null]);C$.$init$.apply(this);
this.threadService=threadService;
this.log=log;
}, 1);

Clazz.newMeth(C$, 'publishNow$O', function (event) {
if (event == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot publish null event."]);
}p$1.publishNow$O$S$O$java_util_List$java_util_List$StackTraceElementA.apply(this, [event, null, null, this.getSubscribers$Class(event.getClass$()), this.getVetoSubscribers$Class(event.getClass$()), null]);
});

Clazz.newMeth(C$, 'publishNow$reflect_Type$O', function (genericType, event) {
if (genericType == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["genericType must not be null."]);
}if (event == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot publish null event."]);
}p$1.publishNow$O$S$O$java_util_List$java_util_List$StackTraceElementA.apply(this, [event, null, null, this.getSubscribers$reflect_Type(genericType), null, null]);
});

Clazz.newMeth(C$, 'publishNow$S$O', function (topicName, eventObj) {
p$1.publishNow$O$S$O$java_util_List$java_util_List$StackTraceElementA.apply(this, [null, topicName, eventObj, this.getSubscribers$S(topicName), this.getVetoEventListeners$S(topicName), null]);
});

Clazz.newMeth(C$, 'publishLater$O', function (event) {
if (event == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot publish null event."]);
}p$1.publishLater$O$S$O$java_util_List$java_util_List$StackTraceElementA.apply(this, [event, null, null, this.getSubscribers$Class(event.getClass$()), this.getVetoSubscribers$Class(event.getClass$()), null]);
});

Clazz.newMeth(C$, 'publishLater$reflect_Type$O', function (genericType, event) {
if (genericType == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["genericType must not be null."]);
}if (event == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot publish null event."]);
}p$1.publishLater$O$S$O$java_util_List$java_util_List$StackTraceElementA.apply(this, [event, null, null, this.getSubscribers$reflect_Type(genericType), null, null]);
});

Clazz.newMeth(C$, 'publishLater$S$O', function (topicName, eventObj) {
p$1.publishLater$O$S$O$java_util_List$java_util_List$StackTraceElementA.apply(this, [null, topicName, eventObj, this.getSubscribers$S(topicName), this.getVetoEventListeners$S(topicName), null]);
});

Clazz.newMeth(C$, 'publish$O', function (event) {
if (Clazz.instanceOf(event, "org.bushe.swing.event.CleanupEvent")) {
this.publishLater$O(event);
return;
}this.publishNow$O(event);
});

Clazz.newMeth(C$, 'publish$reflect_Type$O', function (genericType, event) {
this.publishNow$reflect_Type$O(genericType, event);
});

Clazz.newMeth(C$, 'publish$S$O', function (topicName, eventObj) {
this.publishNow$S$O(topicName, eventObj);
});

Clazz.newMeth(C$, 'publish$O$S$O$java_util_List$java_util_List$StackTraceElementA', function (event, topic, eventObj, subscribers, vetoSubscribers, callingStack) {
p$1.publishNow$O$S$O$java_util_List$java_util_List$StackTraceElementA.apply(this, [event, topic, eventObj, subscribers, vetoSubscribers, callingStack]);
});

Clazz.newMeth(C$, 'publishNow$O$S$O$java_util_List$java_util_List$StackTraceElementA', function (event, topic, eventObj, subscribers, vetoSubscribers, callingStack) {
if (subscribers == null  || subscribers.isEmpty$() ) return;
try {
this.threadService.invoke$Runnable(((P$.DefaultEventBus$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "DefaultEventBus$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['org.scijava.event.DefaultEventBus'].log.debug$O("publish(" + this.$finals$.event + "," + this.$finals$.topic + "," + this.$finals$.eventObj + "), called from non-EDT Thread:" + $I$(1).toString$OA(this.$finals$.callingStack) );
P$.DefaultEventBus.prototype.publish$O$S$O$java_util_List$java_util_List$StackTraceElementA.apply(this, [this.$finals$.event, this.$finals$.topic, this.$finals$.eventObj, this.$finals$.subscribers, this.$finals$.vetoSubscribers, this.$finals$.callingStack]);
});
})()
), Clazz.new_(P$.DefaultEventBus$1.$init$, [this, {event:event,vetoSubscribers:vetoSubscribers,topic:topic,eventObj:eventObj,callingStack:callingStack,subscribers:subscribers}])));
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"InterruptedException")){
var exc = e$$;
{
this.log.error$Throwable(exc);
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var exc = e$$;
{
this.log.error$Throwable(exc);
}
} else {
throw e$$;
}
}
}, p$1);

Clazz.newMeth(C$, 'publishLater$O$S$O$java_util_List$java_util_List$StackTraceElementA', function (event, topic, eventObj, subscribers, vetoSubscribers, callingStack) {
if (subscribers == null  || subscribers.isEmpty$() ) return;
this.threadService.run$Runnable(((P$.DefaultEventBus$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "DefaultEventBus$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'Runnable', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
this.b$['org.scijava.event.DefaultEventBus'].log.debug$O("publish(" + this.$finals$.event + "," + this.$finals$.topic + "," + this.$finals$.eventObj + "), called from non-EDT Thread:" + $I$(1).toString$OA(this.$finals$.callingStack) );
P$.DefaultEventBus.prototype.publish$O$S$O$java_util_List$java_util_List$StackTraceElementA.apply(this, [this.$finals$.event, this.$finals$.topic, this.$finals$.eventObj, this.$finals$.subscribers, this.$finals$.vetoSubscribers, this.$finals$.callingStack]);
});
})()
), Clazz.new_(P$.DefaultEventBus$2.$init$, [this, {eventObj:eventObj,callingStack:callingStack,topic:topic,subscribers:subscribers,event:event,vetoSubscribers:vetoSubscribers}])));
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:24 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
