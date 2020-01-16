(function(){var P$=Clazz.newPackage("org.scijava.event"),p$1={},I$=[[0,'org.bushe.swing.event.annotation.ReferenceStrength','java.util.HashMap','java.util.HashSet','java.util.WeakHashMap','Thread','org.scijava.util.ClassUtils','org.scijava.event.EventHandler','java.util.Collections','java.util.ArrayList','org.scijava.event.DefaultEventBus',['org.scijava.event.DefaultEventService','.ProxySubscriber'],'org.scijava.event.SciJavaEvent']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DefaultEventService", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.scijava.service.AbstractService', 'org.scijava.event.EventService');
C$.$classes$=[['ProxySubscriber',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.eventClasses=Clazz.new_(1,{K:"java.lang.reflect.Method",V:"Class"},$I$(2,1));
this.keys=Clazz.new_(1,{E:"String"},$I$(3,1));
this.keepEm=Clazz.new_(1,{K:"java.lang.Object",V:"java.util.List"},$I$(4,1));
}, 1);

C$.$fields$=[['O',['log','org.scijava.log.LogService','threadService','org.scijava.thread.ThreadService','eventBus','org.scijava.event.DefaultEventBus','eventClasses','java.util.Map','keys','java.util.HashSet','keepEm','java.util.WeakHashMap']]]

Clazz.newMeth(C$, 'publish$TE', function (e) {
e.setContext$org_scijava_Context(this.getContext$());
e.setCallingThread$Thread($I$(5).currentThread$());
this.eventBus.publishNow$O(e);
});

Clazz.newMeth(C$, 'publishLater$TE', function (e) {
e.setContext$org_scijava_Context(this.getContext$());
e.setCallingThread$Thread($I$(5).currentThread$());
this.eventBus.publishLater$O(e);
});

Clazz.newMeth(C$, 'subscribe$O', function (o) {
var eventHandlers=$I$(6).getAnnotatedMethods$Class$Class(o.getClass$(), Clazz.getClass($I$(7),['key']));
if (eventHandlers.isEmpty$()) return $I$(8).emptyList$();
var subscribers=Clazz.new_(1,{E:"org.scijava.event.EventSubscriber"},$I$(9,1));
for (var m, $m = eventHandlers.iterator$(); $m.hasNext$()&&((m=($m.next$())),1);) {
var eventClass=p$1.getEventClass$reflect_Method.apply(this, [m]);
if (eventClass == null ) {
this.log.warn$O("Invalid EventHandler method: " + m);
continue;
}var key=m.getAnnotation$Class(Clazz.getClass($I$(7),['key'])).key$();
if (!key.isEmpty$()) {
{
if (this.keys.contains$O(key)) continue;
this.keys.add$TE(key);
}}subscribers.add$TE(p$1.subscribe$Class$O$reflect_Method.apply(this, [eventClass, o, m]));
}
return subscribers;
});

Clazz.newMeth(C$, 'unsubscribe$java_util_Collection', function (subscribers) {
for (var subscriber, $subscriber = subscribers.iterator$(); $subscriber.hasNext$()&&((subscriber=($subscriber.next$())),1);) {
p$1.unsubscribe$org_scijava_event_EventSubscriber.apply(this, [subscriber]);
}
});

Clazz.newMeth(C$, 'getSubscribers$Class', function (c) {
var list=this.eventBus.getSubscribers$Class(c);
var typedList=list;
return typedList;
});

Clazz.newMeth(C$, 'initialize$', function () {
this.eventBus=Clazz.new_($I$(10,1).c$$org_scijava_thread_ThreadService$org_scijava_log_LogService,[this.threadService, this.log]);
C$.superclazz.prototype.initialize$.apply(this, []);
});

Clazz.newMeth(C$, 'dispose$', function () {
this.eventBus.clearAllSubscribers$();
});

Clazz.newMeth(C$, 'subscribe$Class$org_scijava_event_EventSubscriber', function (c, subscriber) {
this.eventBus.subscribe$Class$org_bushe_swing_event_EventSubscriber(c, subscriber);
}, p$1);

Clazz.newMeth(C$, 'unsubscribe$org_scijava_event_EventSubscriber', function (subscriber) {
p$1.unsubscribe$Class$org_scijava_event_EventSubscriber.apply(this, [subscriber.getEventClass$(), subscriber]);
}, p$1);

Clazz.newMeth(C$, 'unsubscribe$Class$org_scijava_event_EventSubscriber', function (c, subscriber) {
this.eventBus.unsubscribe$Class$org_bushe_swing_event_EventSubscriber(c, subscriber);
}, p$1);

Clazz.newMeth(C$, 'subscribe$Class$O$reflect_Method', function (c, o, m) {
var subscriber=Clazz.new_(1,{E:"Object"},$I$(11,1).c$$Class$O$reflect_Method, [this, null, c, o, m]);
p$1.subscribe$Class$org_scijava_event_EventSubscriber.apply(this, [c, subscriber]);
return subscriber;
}, p$1);

Clazz.newMeth(C$, 'getEventClass$reflect_Method', function (m) {
var eventClass=this.eventClasses.get$O(m);
if (eventClass == null ) {
var c=m.getParameterTypes$();
if (c == null  || c.length != 1 ) return null;
if (!Clazz.getClass($I$(12)).isAssignableFrom$Class(c[0])) return null;
eventClass=c[0];
this.eventClasses.put$TK$TV(m, eventClass);
}var typedClass=eventClass;
return typedClass;
}, p$1);

Clazz.newMeth(C$, 'keepIt$O$org_scijava_event_DefaultEventService_ProxySubscriber', function (o, subscriber) {
var list=this.keepEm.get$O(o);
if (list == null ) {
list=Clazz.new_(1,{E:"org.scijava.event.DefaultEventService.ProxySubscriber"},$I$(9,1));
this.keepEm.put$TK$TV(o, list);
}list.add$TE(subscriber);
}, p$1);
C$.$getAnn$ = function(){ return [
[[null,'org.scijava.event.DefaultEventService',null,['org.scijava.plugin.Plugin']],['type="org.scijava.service.Service.class" priority="100000.0" ']],
  [['log','org.scijava.log.LogService',null,['org.scijava.plugin.Parameter']],['']],
  [['threadService','org.scijava.thread.ThreadService',null,['org.scijava.plugin.Parameter']],['']]]}
;
(function(){/*c*/var C$=Clazz.newClass(P$.DefaultEventService, "ProxySubscriber", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'org.bushe.swing.event.annotation.AbstractProxySubscriber', 'org.scijava.event.EventSubscriber');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['c','Class']]]

Clazz.newMeth(C$, 'c$$Class$O$reflect_Method', function (c, o, m) {
;C$.superclazz.c$$O$reflect_Method$org_bushe_swing_event_annotation_ReferenceStrength$org_bushe_swing_event_EventService$Z.apply(this,[o, m, $I$(1).WEAK, this.this$0.eventBus, false]);C$.$init$.apply(this);
p$1.keepIt$O$org_scijava_event_DefaultEventService_ProxySubscriber.apply(this.this$0, [o, this]);
this.c=c;
m.setAccessible$Z(true);
}, 1);

Clazz.newMeth(C$, ['onEvent$TE','onEvent$','onEvent$TT'], function (event) {
try {
var obj=this.getProxiedSubscriber$();
if (obj == null ) return;
this.getSubscriptionMethod$().invoke$O$OA(obj, [event]);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var exc = e$$;
{
this.this$0.log.error$O$Throwable("Exception during event handling:\n\t[Event] " + event.getClass$().getName$() + ":" + event + "\n\t[Subscriber] " + this.getProxiedSubscriber$() + "\n\t[Method] " + this.getSubscriptionMethod$() , exc);
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var exc = e$$;
{
this.this$0.log.error$O$Throwable("Exception during event handling:\n\t[Event] " + event.getClass$().getName$() + event + "\n\t[Subscriber] " + this.getProxiedSubscriber$() + "\n\t[Method] " + this.getSubscriptionMethod$() , exc.getCause$());
}
} else {
throw e$$;
}
}
});

Clazz.newMeth(C$, 'getEventClass$', function () {
return this.c;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:25 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
