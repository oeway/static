(function(){var P$=Clazz.newPackage("org.bushe.swing.event"),I$=[[0,'org.bushe.swing.event.EventServiceLocator']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EventBus");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getGlobalEventService$', function () {
return $I$(1).getEventBusService$();
}, 1);

Clazz.newMeth(C$, 'publish$O', function (event) {
if (event == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can\'t publish null."]);
}$I$(1).getEventBusService$().publish$O(event);
}, 1);

Clazz.newMeth(C$, 'publish$S$O', function (topic, o) {
if (topic == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can\'t publish to null topic."]);
}$I$(1).getEventBusService$().publish$S$O(topic, o);
}, 1);

Clazz.newMeth(C$, 'publish$reflect_Type$O', function (genericType, o) {
if (genericType == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can\'t publish to null type."]);
}$I$(1).getEventBusService$().publish$reflect_Type$O(genericType, o);
}, 1);

Clazz.newMeth(C$, 'subscribe$Class$org_bushe_swing_event_EventSubscriber', function (eventClass, subscriber) {
return $I$(1).getEventBusService$().subscribe$Class$org_bushe_swing_event_EventSubscriber(eventClass, subscriber);
}, 1);

Clazz.newMeth(C$, 'subscribe$reflect_Type$org_bushe_swing_event_EventSubscriber', function (genericType, subscriber) {
return $I$(1).getEventBusService$().subscribe$reflect_Type$org_bushe_swing_event_EventSubscriber(genericType, subscriber);
}, 1);

Clazz.newMeth(C$, 'subscribeExactly$Class$org_bushe_swing_event_EventSubscriber', function (eventClass, subscriber) {
return $I$(1).getEventBusService$().subscribeExactly$Class$org_bushe_swing_event_EventSubscriber(eventClass, subscriber);
}, 1);

Clazz.newMeth(C$, 'subscribe$S$org_bushe_swing_event_EventTopicSubscriber', function (topic, subscriber) {
return $I$(1).getEventBusService$().subscribe$S$org_bushe_swing_event_EventTopicSubscriber(topic, subscriber);
}, 1);

Clazz.newMeth(C$, 'subscribe$java_util_regex_Pattern$org_bushe_swing_event_EventTopicSubscriber', function (topicPattern, subscriber) {
return $I$(1).getEventBusService$().subscribe$java_util_regex_Pattern$org_bushe_swing_event_EventTopicSubscriber(topicPattern, subscriber);
}, 1);

Clazz.newMeth(C$, 'subscribeStrongly$Class$org_bushe_swing_event_EventSubscriber', function (eventClass, subscriber) {
return $I$(1).getEventBusService$().subscribeStrongly$Class$org_bushe_swing_event_EventSubscriber(eventClass, subscriber);
}, 1);

Clazz.newMeth(C$, 'subscribeExactlyStrongly$Class$org_bushe_swing_event_EventSubscriber', function (eventClass, subscriber) {
return $I$(1).getEventBusService$().subscribeExactlyStrongly$Class$org_bushe_swing_event_EventSubscriber(eventClass, subscriber);
}, 1);

Clazz.newMeth(C$, 'subscribeStrongly$S$org_bushe_swing_event_EventTopicSubscriber', function (topic, subscriber) {
return $I$(1).getEventBusService$().subscribeStrongly$S$org_bushe_swing_event_EventTopicSubscriber(topic, subscriber);
}, 1);

Clazz.newMeth(C$, 'subscribeStrongly$java_util_regex_Pattern$org_bushe_swing_event_EventTopicSubscriber', function (topicPattern, subscriber) {
return $I$(1).getEventBusService$().subscribeStrongly$java_util_regex_Pattern$org_bushe_swing_event_EventTopicSubscriber(topicPattern, subscriber);
}, 1);

Clazz.newMeth(C$, 'unsubscribe$Class$org_bushe_swing_event_EventSubscriber', function (eventClass, subscriber) {
return $I$(1).getEventBusService$().unsubscribe$Class$org_bushe_swing_event_EventSubscriber(eventClass, subscriber);
}, 1);

Clazz.newMeth(C$, 'unsubscribeExactly$Class$org_bushe_swing_event_EventSubscriber', function (eventClass, subscriber) {
return $I$(1).getEventBusService$().unsubscribeExactly$Class$org_bushe_swing_event_EventSubscriber(eventClass, subscriber);
}, 1);

Clazz.newMeth(C$, 'unsubscribe$S$org_bushe_swing_event_EventTopicSubscriber', function (topic, subscriber) {
return $I$(1).getEventBusService$().unsubscribe$S$org_bushe_swing_event_EventTopicSubscriber(topic, subscriber);
}, 1);

Clazz.newMeth(C$, 'unsubscribe$java_util_regex_Pattern$org_bushe_swing_event_EventTopicSubscriber', function (topicPattern, subscriber) {
return $I$(1).getEventBusService$().unsubscribe$java_util_regex_Pattern$org_bushe_swing_event_EventTopicSubscriber(topicPattern, subscriber);
}, 1);

Clazz.newMeth(C$, 'unsubscribe$Class$O', function (eventClass, object) {
return $I$(1).getEventBusService$().unsubscribe$Class$O(eventClass, object);
}, 1);

Clazz.newMeth(C$, 'unsubscribeExactly$Class$O', function (eventClass, subscriber) {
return $I$(1).getEventBusService$().unsubscribeExactly$Class$O(eventClass, subscriber);
}, 1);

Clazz.newMeth(C$, 'unsubscribe$S$O', function (topic, subscriber) {
return $I$(1).getEventBusService$().unsubscribe$S$O(topic, subscriber);
}, 1);

Clazz.newMeth(C$, 'unsubscribe$java_util_regex_Pattern$O', function (topicPattern, subscriber) {
return $I$(1).getEventBusService$().unsubscribe$java_util_regex_Pattern$O(topicPattern, subscriber);
}, 1);

Clazz.newMeth(C$, 'subscribeVetoListener$Class$org_bushe_swing_event_VetoEventListener', function (eventClass, vetoListener) {
return $I$(1).getEventBusService$().subscribeVetoListener$Class$org_bushe_swing_event_VetoEventListener(eventClass, vetoListener);
}, 1);

Clazz.newMeth(C$, 'subscribeVetoListenerExactly$Class$org_bushe_swing_event_VetoEventListener', function (eventClass, vetoListener) {
return $I$(1).getEventBusService$().subscribeVetoListenerExactly$Class$org_bushe_swing_event_VetoEventListener(eventClass, vetoListener);
}, 1);

Clazz.newMeth(C$, 'subscribeVetoListener$S$org_bushe_swing_event_VetoTopicEventListener', function (topic, vetoListener) {
return $I$(1).getEventBusService$().subscribeVetoListener$S$org_bushe_swing_event_VetoTopicEventListener(topic, vetoListener);
}, 1);

Clazz.newMeth(C$, 'subscribeVetoListener$java_util_regex_Pattern$org_bushe_swing_event_VetoTopicEventListener', function (topicPattern, vetoListener) {
return $I$(1).getEventBusService$().subscribeVetoListener$java_util_regex_Pattern$org_bushe_swing_event_VetoTopicEventListener(topicPattern, vetoListener);
}, 1);

Clazz.newMeth(C$, 'subscribeVetoListenerStrongly$Class$org_bushe_swing_event_VetoEventListener', function (eventClass, vetoListener) {
return $I$(1).getEventBusService$().subscribeVetoListenerStrongly$Class$org_bushe_swing_event_VetoEventListener(eventClass, vetoListener);
}, 1);

Clazz.newMeth(C$, 'subscribeVetoListenerExactlyStrongly$Class$org_bushe_swing_event_VetoEventListener', function (eventClass, vetoListener) {
return $I$(1).getEventBusService$().subscribeVetoListenerExactlyStrongly$Class$org_bushe_swing_event_VetoEventListener(eventClass, vetoListener);
}, 1);

Clazz.newMeth(C$, 'subscribeVetoListenerStrongly$S$org_bushe_swing_event_VetoTopicEventListener', function (topic, vetoListener) {
return $I$(1).getEventBusService$().subscribeVetoListenerStrongly$S$org_bushe_swing_event_VetoTopicEventListener(topic, vetoListener);
}, 1);

Clazz.newMeth(C$, 'subscribeVetoListenerStrongly$java_util_regex_Pattern$org_bushe_swing_event_VetoTopicEventListener', function (topicPattern, vetoListener) {
return $I$(1).getEventBusService$().subscribeVetoListenerStrongly$java_util_regex_Pattern$org_bushe_swing_event_VetoTopicEventListener(topicPattern, vetoListener);
}, 1);

Clazz.newMeth(C$, 'unsubscribeVetoListener$Class$org_bushe_swing_event_VetoEventListener', function (eventClass, vetoListener) {
return $I$(1).getEventBusService$().unsubscribeVetoListener$Class$org_bushe_swing_event_VetoEventListener(eventClass, vetoListener);
}, 1);

Clazz.newMeth(C$, 'unsubscribeVetoListenerExactly$Class$org_bushe_swing_event_VetoEventListener', function (eventClass, vetoListener) {
return $I$(1).getEventBusService$().unsubscribeVetoListenerExactly$Class$org_bushe_swing_event_VetoEventListener(eventClass, vetoListener);
}, 1);

Clazz.newMeth(C$, 'unsubscribeVetoListener$S$org_bushe_swing_event_VetoTopicEventListener', function (topic, vetoListener) {
return $I$(1).getEventBusService$().unsubscribeVetoListener$S$org_bushe_swing_event_VetoTopicEventListener(topic, vetoListener);
}, 1);

Clazz.newMeth(C$, 'unsubscribeVetoListener$java_util_regex_Pattern$org_bushe_swing_event_VetoTopicEventListener', function (topicPattern, vetoListener) {
return $I$(1).getEventBusService$().unsubscribeVetoListener$java_util_regex_Pattern$org_bushe_swing_event_VetoTopicEventListener(topicPattern, vetoListener);
}, 1);

Clazz.newMeth(C$, 'getSubscribers$Class', function (eventClass) {
return $I$(1).getEventBusService$().getSubscribers$Class(eventClass);
}, 1);

Clazz.newMeth(C$, 'getSubscribersToClass$Class', function (eventClass) {
return $I$(1).getEventBusService$().getSubscribersToClass$Class(eventClass);
}, 1);

Clazz.newMeth(C$, 'getSubscribersToExactClass$Class', function (eventClass) {
return $I$(1).getEventBusService$().getSubscribersToExactClass$Class(eventClass);
}, 1);

Clazz.newMeth(C$, 'getSubscribers$reflect_Type', function (type) {
return $I$(1).getEventBusService$().getSubscribers$reflect_Type(type);
}, 1);

Clazz.newMeth(C$, 'getSubscribers$S', function (topic) {
return $I$(1).getEventBusService$().getSubscribers$S(topic);
}, 1);

Clazz.newMeth(C$, 'getSubscribersToTopic$S', function (topic) {
return $I$(1).getEventBusService$().getSubscribersToTopic$S(topic);
}, 1);

Clazz.newMeth(C$, 'getSubscribers$java_util_regex_Pattern', function (pattern) {
return $I$(1).getEventBusService$().getSubscribers$java_util_regex_Pattern(pattern);
}, 1);

Clazz.newMeth(C$, 'getSubscribersByPattern$S', function (topic) {
return $I$(1).getEventBusService$().getSubscribersByPattern$S(topic);
}, 1);

Clazz.newMeth(C$, 'getVetoSubscribers$Class', function (eventClass) {
return $I$(1).getEventBusService$().getVetoSubscribers$Class(eventClass);
}, 1);

Clazz.newMeth(C$, 'getVetoSubscribersToClass$Class', function (eventClass) {
return $I$(1).getEventBusService$().getVetoSubscribersToClass$Class(eventClass);
}, 1);

Clazz.newMeth(C$, 'getVetoSubscribersToExactClass$Class', function (eventClass) {
return $I$(1).getEventBusService$().getVetoSubscribersToExactClass$Class(eventClass);
}, 1);

Clazz.newMeth(C$, 'getVetoSubscribers$S', function (topic) {
return $I$(1).getEventBusService$().getVetoSubscribers$S(topic);
}, 1);

Clazz.newMeth(C$, 'getVetoEventListeners$S', function (topic) {
return $I$(1).getEventBusService$().getVetoEventListeners$S(topic);
}, 1);

Clazz.newMeth(C$, 'getVetoSubscribers$java_util_regex_Pattern', function (pattern) {
return $I$(1).getEventBusService$().getVetoSubscribers$java_util_regex_Pattern(pattern);
}, 1);

Clazz.newMeth(C$, 'getVetoSubscribersToTopic$S', function (topic) {
return $I$(1).getEventBusService$().getVetoSubscribersToTopic$S(topic);
}, 1);

Clazz.newMeth(C$, 'getVetoSubscribersByPattern$S', function (topic) {
return $I$(1).getEventBusService$().getVetoSubscribersByPattern$S(topic);
}, 1);

Clazz.newMeth(C$, 'unsubscribeVeto$Class$O', function (eventClass, subscribedByProxy) {
return $I$(1).getEventBusService$().unsubscribeVeto$Class$O(eventClass, subscribedByProxy);
}, 1);

Clazz.newMeth(C$, 'unsubscribeVetoExactly$Class$O', function (eventClass, subscribedByProxy) {
return $I$(1).getEventBusService$().unsubscribeVetoExactly$Class$O(eventClass, subscribedByProxy);
}, 1);

Clazz.newMeth(C$, 'unsubscribeVeto$S$O', function (topic, subscribedByProxy) {
return $I$(1).getEventBusService$().unsubscribeVeto$S$O(topic, subscribedByProxy);
}, 1);

Clazz.newMeth(C$, 'unsubscribeVeto$java_util_regex_Pattern$O', function (pattern, subscribedByProxy) {
return $I$(1).getEventBusService$().unsubscribeVeto$java_util_regex_Pattern$O(pattern, subscribedByProxy);
}, 1);

Clazz.newMeth(C$, 'clearAllSubscribers$', function () {
$I$(1).getEventBusService$().clearAllSubscribers$();
}, 1);

Clazz.newMeth(C$, 'setDefaultCacheSizePerClassOrTopic$I', function (defaultCacheSizePerClassOrTopic) {
$I$(1).getEventBusService$().setDefaultCacheSizePerClassOrTopic$I(defaultCacheSizePerClassOrTopic);
}, 1);

Clazz.newMeth(C$, 'getDefaultCacheSizePerClassOrTopic$', function () {
return $I$(1).getEventBusService$().getDefaultCacheSizePerClassOrTopic$();
}, 1);

Clazz.newMeth(C$, 'setCacheSizeForEventClass$Class$I', function (eventClass, cacheSize) {
$I$(1).getEventBusService$().setCacheSizeForEventClass$Class$I(eventClass, cacheSize);
}, 1);

Clazz.newMeth(C$, 'getCacheSizeForEventClass$Class', function (eventClass) {
return $I$(1).getEventBusService$().getCacheSizeForEventClass$Class(eventClass);
}, 1);

Clazz.newMeth(C$, 'setCacheSizeForTopic$S$I', function (topicName, cacheSize) {
$I$(1).getEventBusService$().setCacheSizeForTopic$S$I(topicName, cacheSize);
}, 1);

Clazz.newMeth(C$, 'setCacheSizeForTopic$java_util_regex_Pattern$I', function (pattern, cacheSize) {
$I$(1).getEventBusService$().setCacheSizeForTopic$java_util_regex_Pattern$I(pattern, cacheSize);
}, 1);

Clazz.newMeth(C$, 'getCacheSizeForTopic$S', function (topic) {
return $I$(1).getEventBusService$().getCacheSizeForTopic$S(topic);
}, 1);

Clazz.newMeth(C$, 'getLastEvent$Class', function (eventClass) {
return $I$(1).getEventBusService$().getLastEvent$Class(eventClass);
}, 1);

Clazz.newMeth(C$, 'getCachedEvents$Class', function (eventClass) {
return $I$(1).getEventBusService$().getCachedEvents$Class(eventClass);
}, 1);

Clazz.newMeth(C$, 'getLastTopicData$S', function (topic) {
return $I$(1).getEventBusService$().getLastTopicData$S(topic);
}, 1);

Clazz.newMeth(C$, 'getCachedTopicData$S', function (topic) {
return $I$(1).getEventBusService$().getCachedTopicData$S(topic);
}, 1);

Clazz.newMeth(C$, 'clearCache$Class', function (eventClass) {
$I$(1).getEventBusService$().clearCache$Class(eventClass);
}, 1);

Clazz.newMeth(C$, 'clearCache$S', function (topic) {
$I$(1).getEventBusService$().clearCache$S(topic);
}, 1);

Clazz.newMeth(C$, 'clearCache$java_util_regex_Pattern', function (pattern) {
$I$(1).getEventBusService$().clearCache$java_util_regex_Pattern(pattern);
}, 1);

Clazz.newMeth(C$, 'clearCache$', function () {
$I$(1).getEventBusService$().clearCache$();
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
