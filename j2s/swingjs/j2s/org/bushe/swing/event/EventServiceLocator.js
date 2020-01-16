(function(){var P$=Clazz.newPackage("org.bushe.swing.event"),I$=[[0,'java.util.HashMap','org.bushe.swing.event.SwingEventService','org.bushe.swing.event.EventService']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EventServiceLocator");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.EVENT_SERVICES=Clazz.new_($I$(1,1));
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['EVENT_BUS_SERVICE','org.bushe.swing.event.EventService','+SWING_EVENT_SERVICE','EVENT_SERVICES','java.util.Map']]]

Clazz.newMeth(C$, 'getEventBusService$', function () {
if (C$.EVENT_BUS_SERVICE == null ) {
C$.EVENT_BUS_SERVICE=C$.getEventService$S$org_bushe_swing_event_EventService("org.bushe.swing.event.eventBusClass", C$.getSwingEventService$());
C$.EVENT_SERVICES.put$TK$TV("EventBus", C$.EVENT_BUS_SERVICE);
}return C$.EVENT_BUS_SERVICE;
}, 1);

Clazz.newMeth(C$, 'getSwingEventService$', function () {
if (C$.SWING_EVENT_SERVICE == null ) {
C$.SWING_EVENT_SERVICE=C$.getEventService$S$org_bushe_swing_event_EventService("org.bushe.swing.event.swingEventServiceClass", Clazz.new_($I$(2,1)));
C$.EVENT_SERVICES.put$TK$TV("SwingEventService", C$.SWING_EVENT_SERVICE);
}return C$.SWING_EVENT_SERVICE;
}, 1);

Clazz.newMeth(C$, 'getEventService$S', function (serviceName) {
var es=C$.EVENT_SERVICES.get$O(serviceName);
if (es == null ) {
if ("EventBus".equals$O(serviceName)) {
es=C$.getEventBusService$();
} else if ("SwingEventService".equals$O(serviceName)) {
es=C$.getSwingEventService$();
}}return es;
}, 1);

Clazz.newMeth(C$, 'setEventService$S$org_bushe_swing_event_EventService', function (serviceName, es) {
if (C$.EVENT_SERVICES.get$O(serviceName) != null  && es != null  ) {
throw Clazz.new_(Clazz.load('org.bushe.swing.event.EventServiceExistsException').c$$S,["An event service by the name " + serviceName + "already exists.  Perhaps multiple threads tried to create a service about the same time?" ]);
} else {
C$.EVENT_SERVICES.put$TK$TV(serviceName, es);
if ("EventBus".equals$O(serviceName)) {
C$.EVENT_BUS_SERVICE=es;
} else if ("SwingEventService".equals$O(serviceName)) {
C$.SWING_EVENT_SERVICE=es;
}}}, 1);

Clazz.newMeth(C$, 'clearAll$', function () {
C$.EVENT_SERVICES.clear$();
C$.EVENT_BUS_SERVICE=null;
C$.SWING_EVENT_SERVICE=null;
}, 1);

Clazz.newMeth(C$, 'getEventService$S$org_bushe_swing_event_EventService', function (eventServiceClassPropertyName, defaultService) {
var result;
var eventServiceClassName=System.getProperty$S(eventServiceClassPropertyName);
if (eventServiceClassName != null ) {
var sesClass;
try {
sesClass=Clazz.forName(eventServiceClassName);
} catch (e) {
if (Clazz.exceptionOf(e,"ClassNotFoundException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,["Could not find class specified in the property " + eventServiceClassPropertyName + ".  Class=" + eventServiceClassName , e]);
} else {
throw e;
}
}
var service;
try {
service=sesClass.newInstance$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"InstantiationException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,["InstantiationException creating instance of class set from Java property" + eventServiceClassPropertyName + ".  Class=" + eventServiceClassName , e]);
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,["IllegalAccessException creating instance of class set from Java property" + eventServiceClassPropertyName + ".  Class=" + eventServiceClassName , e]);
}
} else {
throw e$$;
}
}
try {
result=service;
} catch (ex) {
if (Clazz.exceptionOf(ex,"ClassCastException")){
throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,["ClassCastException casting to " + Clazz.getClass($I$(3),['clearAllSubscribers$','clearCache$Class','clearCache$S','clearCache$java_util_regex_Pattern','clearCache$','getCacheSizeForEventClass$Class','getCacheSizeForTopic$S','getCachedEvents$Class','getCachedTopicData$S','getDefaultCacheSizePerClassOrTopic$','getLastEvent$Class','getLastTopicData$S','getSubscribers$Class','getSubscribers$reflect_Type','getSubscribers$S','getSubscribers$java_util_regex_Pattern','getSubscribersByPattern$S','getSubscribersToClass$Class','getSubscribersToExactClass$Class','getSubscribersToTopic$S','getVetoEventListeners$S','getVetoSubscribers$Class','getVetoSubscribers$java_util_regex_Pattern','getVetoSubscribers$S','getVetoSubscribersByPattern$S','getVetoSubscribersToClass$Class','getVetoSubscribersToExactClass$Class','getVetoSubscribersToTopic$S','publish$O','publish$reflect_Type$O','publish$S$O','setCacheSizeForEventClass$Class$I','setCacheSizeForTopic$S$I','setCacheSizeForTopic$java_util_regex_Pattern$I','setDefaultCacheSizePerClassOrTopic$I','subscribe$Class$org_bushe_swing_event_EventSubscriber','subscribe$reflect_Type$org_bushe_swing_event_EventSubscriber','subscribe$S$org_bushe_swing_event_EventTopicSubscriber','subscribe$java_util_regex_Pattern$org_bushe_swing_event_EventTopicSubscriber','subscribeExactly$Class$org_bushe_swing_event_EventSubscriber','subscribeExactlyStrongly$Class$org_bushe_swing_event_EventSubscriber','subscribeStrongly$Class$org_bushe_swing_event_EventSubscriber','subscribeStrongly$S$org_bushe_swing_event_EventTopicSubscriber','subscribeStrongly$java_util_regex_Pattern$org_bushe_swing_event_EventTopicSubscriber','subscribeVetoListener$Class$org_bushe_swing_event_VetoEventListener','subscribeVetoListener$S$org_bushe_swing_event_VetoTopicEventListener','subscribeVetoListener$java_util_regex_Pattern$org_bushe_swing_event_VetoTopicEventListener','subscribeVetoListenerExactly$Class$org_bushe_swing_event_VetoEventListener','subscribeVetoListenerExactlyStrongly$Class$org_bushe_swing_event_VetoEventListener','subscribeVetoListenerStrongly$Class$org_bushe_swing_event_VetoEventListener','subscribeVetoListenerStrongly$S$org_bushe_swing_event_VetoTopicEventListener','subscribeVetoListenerStrongly$java_util_regex_Pattern$org_bushe_swing_event_VetoTopicEventListener','unsubscribe$Class$org_bushe_swing_event_EventSubscriber','unsubscribe$S$org_bushe_swing_event_EventTopicSubscriber','unsubscribe$java_util_regex_Pattern$org_bushe_swing_event_EventTopicSubscriber','unsubscribe$Class$O','unsubscribe$S$O','unsubscribe$java_util_regex_Pattern$O','unsubscribeExactly$Class$org_bushe_swing_event_EventSubscriber','unsubscribeExactly$Class$O','unsubscribeVeto$Class$O','unsubscribeVeto$S$O','unsubscribeVeto$java_util_regex_Pattern$O','unsubscribeVetoExactly$Class$O','unsubscribeVetoListener$Class$org_bushe_swing_event_VetoEventListener','unsubscribeVetoListener$S$org_bushe_swing_event_VetoTopicEventListener','unsubscribeVetoListener$java_util_regex_Pattern$org_bushe_swing_event_VetoTopicEventListener','unsubscribeVetoListenerExactly$Class$org_bushe_swing_event_VetoEventListener']) + " from instance of class set from Java property" + eventServiceClassPropertyName + ".  Class=" + eventServiceClassName , ex]);
} else {
throw ex;
}
}
} else {
result=defaultService;
}return result;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
