(function(){var P$=Clazz.newPackage("org.bushe.swing.event.annotation"),I$=[[0,'org.bushe.swing.event.Logger','org.bushe.swing.event.EventService',['org.bushe.swing.event.Logger','.Level'],'java.util.Arrays','org.bushe.swing.event.annotation.EventSubscriber','org.bushe.swing.event.annotation.EventTopicSubscriber','org.bushe.swing.event.annotation.EventTopicPatternSubscriber','org.bushe.swing.event.annotation.RuntimeTopicEventSubscriber','org.bushe.swing.event.annotation.RuntimeTopicPatternEventSubscriber','org.bushe.swing.event.annotation.VetoSubscriber','org.bushe.swing.event.annotation.VetoTopicSubscriber','org.bushe.swing.event.annotation.VetoTopicPatternSubscriber','org.bushe.swing.event.annotation.VetoRuntimeTopicSubscriber','org.bushe.swing.event.annotation.VetoRuntimeTopicPatternSubscriber','java.util.regex.Pattern','org.bushe.swing.event.annotation.ProxyTopicPatternSubscriber','org.bushe.swing.event.annotation.ProxyTopicSubscriber','org.bushe.swing.event.annotation.UseTheClassOfTheAnnotatedMethodsParameter','org.bushe.swing.event.annotation.BaseProxySubscriber','org.bushe.swing.event.EventServiceLocator']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AnnotationProcessor");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.LOG=$I$(1).getLogger$S(Clazz.getClass($I$(2),['clearAllSubscribers$','clearCache$Class','clearCache$S','clearCache$java_util_regex_Pattern','clearCache$','getCacheSizeForEventClass$Class','getCacheSizeForTopic$S','getCachedEvents$Class','getCachedTopicData$S','getDefaultCacheSizePerClassOrTopic$','getLastEvent$Class','getLastTopicData$S','getSubscribers$Class','getSubscribers$reflect_Type','getSubscribers$S','getSubscribers$java_util_regex_Pattern','getSubscribersByPattern$S','getSubscribersToClass$Class','getSubscribersToExactClass$Class','getSubscribersToTopic$S','getVetoEventListeners$S','getVetoSubscribers$Class','getVetoSubscribers$java_util_regex_Pattern','getVetoSubscribers$S','getVetoSubscribersByPattern$S','getVetoSubscribersToClass$Class','getVetoSubscribersToExactClass$Class','getVetoSubscribersToTopic$S','publish$O','publish$reflect_Type$O','publish$S$O','setCacheSizeForEventClass$Class$I','setCacheSizeForTopic$S$I','setCacheSizeForTopic$java_util_regex_Pattern$I','setDefaultCacheSizePerClassOrTopic$I','subscribe$Class$org_bushe_swing_event_EventSubscriber','subscribe$reflect_Type$org_bushe_swing_event_EventSubscriber','subscribe$S$org_bushe_swing_event_EventTopicSubscriber','subscribe$java_util_regex_Pattern$org_bushe_swing_event_EventTopicSubscriber','subscribeExactly$Class$org_bushe_swing_event_EventSubscriber','subscribeExactlyStrongly$Class$org_bushe_swing_event_EventSubscriber','subscribeStrongly$Class$org_bushe_swing_event_EventSubscriber','subscribeStrongly$S$org_bushe_swing_event_EventTopicSubscriber','subscribeStrongly$java_util_regex_Pattern$org_bushe_swing_event_EventTopicSubscriber','subscribeVetoListener$Class$org_bushe_swing_event_VetoEventListener','subscribeVetoListener$S$org_bushe_swing_event_VetoTopicEventListener','subscribeVetoListener$java_util_regex_Pattern$org_bushe_swing_event_VetoTopicEventListener','subscribeVetoListenerExactly$Class$org_bushe_swing_event_VetoEventListener','subscribeVetoListenerExactlyStrongly$Class$org_bushe_swing_event_VetoEventListener','subscribeVetoListenerStrongly$Class$org_bushe_swing_event_VetoEventListener','subscribeVetoListenerStrongly$S$org_bushe_swing_event_VetoTopicEventListener','subscribeVetoListenerStrongly$java_util_regex_Pattern$org_bushe_swing_event_VetoTopicEventListener','unsubscribe$Class$org_bushe_swing_event_EventSubscriber','unsubscribe$S$org_bushe_swing_event_EventTopicSubscriber','unsubscribe$java_util_regex_Pattern$org_bushe_swing_event_EventTopicSubscriber','unsubscribe$Class$O','unsubscribe$S$O','unsubscribe$java_util_regex_Pattern$O','unsubscribeExactly$Class$org_bushe_swing_event_EventSubscriber','unsubscribeExactly$Class$O','unsubscribeVeto$Class$O','unsubscribeVeto$S$O','unsubscribeVeto$java_util_regex_Pattern$O','unsubscribeVetoExactly$Class$O','unsubscribeVetoListener$Class$org_bushe_swing_event_VetoEventListener','unsubscribeVetoListener$S$org_bushe_swing_event_VetoTopicEventListener','unsubscribeVetoListener$java_util_regex_Pattern$org_bushe_swing_event_VetoTopicEventListener','unsubscribeVetoListenerExactly$Class$org_bushe_swing_event_VetoEventListener']).getName$());
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['LOG','org.bushe.swing.event.Logger']]]

Clazz.newMeth(C$, 'process$O', function (obj) {
C$.processOrUnprocess$O$Z(obj, true);
}, 1);

Clazz.newMeth(C$, 'unprocess$O', function (obj) {
C$.processOrUnprocess$O$Z(obj, false);
}, 1);

Clazz.newMeth(C$, 'processOrUnprocess$O$Z', function (obj, add) {
if (obj == null ) {
return;
}var cl=obj.getClass$();
var methods=cl.getMethods$();
if (C$.LOG.isLoggable$org_bushe_swing_event_Logger_Level($I$(3).DEBUG)) {
C$.LOG.debug$S("Looking for EventBus annotations for class " + cl + ", methods:" + $I$(4).toString$OA(methods) );
}for (var method, $method = 0, $$method = methods; $method<$$method.length&&((method=($$method[$method])),1);$method++) {
var classAnnotation=method.getAnnotation$Class(Clazz.getClass($I$(5),['autoCreateEventServiceClass','eventClass','eventServiceName','exact','priority','referenceStrength']));
if (classAnnotation != null ) {
if (C$.LOG.isLoggable$org_bushe_swing_event_Logger_Level($I$(3).DEBUG)) {
C$.LOG.debug$S("Found EventSubscriber:" + classAnnotation + " on method:" + method );
}C$.process$org_bushe_swing_event_annotation_EventSubscriber$O$reflect_Method$Z(classAnnotation, obj, method, add);
}var topicAnnotation=method.getAnnotation$Class(Clazz.getClass($I$(6),['autoCreateEventServiceClass','eventServiceName','priority','referenceStrength','topic']));
if (topicAnnotation != null ) {
if (C$.LOG.isLoggable$org_bushe_swing_event_Logger_Level($I$(3).DEBUG)) {
C$.LOG.debug$S("Found EventTopicSubscriber: " + topicAnnotation + "  on method:" + method );
}C$.process$org_bushe_swing_event_annotation_EventTopicSubscriber$O$reflect_Method$Z(topicAnnotation, obj, method, add);
}var topicPatternAnnotation=method.getAnnotation$Class(Clazz.getClass($I$(7),['autoCreateEventServiceClass','eventServiceName','exact','priority','referenceStrength','topicPattern']));
if (topicPatternAnnotation != null ) {
if (C$.LOG.isLoggable$org_bushe_swing_event_Logger_Level($I$(3).DEBUG)) {
C$.LOG.debug$S("Found EventTopicPatternSubscriber: " + topicPatternAnnotation + " on method:" + method );
}C$.process$org_bushe_swing_event_annotation_EventTopicPatternSubscriber$O$reflect_Method$Z(topicPatternAnnotation, obj, method, add);
}var runtimeTopicAnnotation=method.getAnnotation$Class(Clazz.getClass($I$(8),['autoCreateEventServiceClass','eventServiceName','methodName','priority','referenceStrength']));
if (runtimeTopicAnnotation != null ) {
if (C$.LOG.isLoggable$org_bushe_swing_event_Logger_Level($I$(3).DEBUG)) {
C$.LOG.debug$S("Found RuntimeTopicEventSubscriber: " + runtimeTopicAnnotation + " on method:" + method );
}C$.process$org_bushe_swing_event_annotation_RuntimeTopicEventSubscriber$O$reflect_Method$Z(runtimeTopicAnnotation, obj, method, add);
}var annotation=method.getAnnotation$Class(Clazz.getClass($I$(9),['autoCreateEventServiceClass','eventServiceName','exact','methodName','priority','referenceStrength']));
if (annotation != null ) {
if (C$.LOG.isLoggable$org_bushe_swing_event_Logger_Level($I$(3).DEBUG)) {
C$.LOG.debug$S("Found RuntimeTopicPatternEventSubscriber:" + annotation + " on method:" + method );
}C$.process$org_bushe_swing_event_annotation_RuntimeTopicPatternEventSubscriber$O$reflect_Method$Z(annotation, obj, method, add);
}var vetoClassAnnotation=method.getAnnotation$Class(Clazz.getClass($I$(10),['autoCreateEventServiceClass','eventClass','eventServiceName','exact','priority','referenceStrength']));
if (vetoClassAnnotation != null ) {
if (C$.LOG.isLoggable$org_bushe_swing_event_Logger_Level($I$(3).DEBUG)) {
C$.LOG.debug$S("Found VetoSubscriber:" + vetoClassAnnotation + " on method:" + method );
}C$.process$org_bushe_swing_event_annotation_VetoSubscriber$O$reflect_Method$Z(vetoClassAnnotation, obj, method, add);
}var vetoTopicAnnotation=method.getAnnotation$Class(Clazz.getClass($I$(11),['autoCreateEventServiceClass','eventServiceName','priority','referenceStrength','topic']));
if (vetoTopicAnnotation != null ) {
if (C$.LOG.isLoggable$org_bushe_swing_event_Logger_Level($I$(3).DEBUG)) {
C$.LOG.debug$S("Found VetoTopicSubscriber: " + vetoTopicAnnotation + "  on method:" + method );
}C$.process$org_bushe_swing_event_annotation_VetoTopicSubscriber$O$reflect_Method$Z(vetoTopicAnnotation, obj, method, add);
}var vetoTopicPatternAnnotation=method.getAnnotation$Class(Clazz.getClass($I$(12),['autoCreateEventServiceClass','eventServiceName','priority','referenceStrength','topicPattern']));
if (vetoTopicPatternAnnotation != null ) {
if (C$.LOG.isLoggable$org_bushe_swing_event_Logger_Level($I$(3).DEBUG)) {
C$.LOG.debug$S("Found VetoTopicPatternSubscriber: " + vetoTopicPatternAnnotation + " on method:" + method );
}C$.process$org_bushe_swing_event_annotation_VetoTopicPatternSubscriber$O$reflect_Method$Z(vetoTopicPatternAnnotation, obj, method, add);
}var vetoRuntimeTopicAnnotation=method.getAnnotation$Class(Clazz.getClass($I$(13),['autoCreateEventServiceClass','eventServiceName','methodName','priority','referenceStrength']));
if (vetoRuntimeTopicAnnotation != null ) {
if (C$.LOG.isLoggable$org_bushe_swing_event_Logger_Level($I$(3).DEBUG)) {
C$.LOG.debug$S("Found VetoRuntimeTopicSubscriber: " + vetoRuntimeTopicAnnotation + " on method:" + method );
}C$.process$org_bushe_swing_event_annotation_VetoRuntimeTopicSubscriber$O$reflect_Method$Z(vetoRuntimeTopicAnnotation, obj, method, add);
}var vetoAnnotation=method.getAnnotation$Class(Clazz.getClass($I$(14),['autoCreateEventServiceClass','eventServiceName','exact','methodName','priority','referenceStrength']));
if (vetoAnnotation != null ) {
if (C$.LOG.isLoggable$org_bushe_swing_event_Logger_Level($I$(3).DEBUG)) {
C$.LOG.debug$S("Found VetoRuntimeTopicPatternSubscriber:" + vetoAnnotation + " on method:" + method );
}C$.process$org_bushe_swing_event_annotation_VetoRuntimeTopicPatternSubscriber$O$reflect_Method$Z(vetoAnnotation, obj, method, add);
}}
}, 1);

Clazz.newMeth(C$, 'process$org_bushe_swing_event_annotation_EventTopicPatternSubscriber$O$reflect_Method$Z', function (topicPatternAnnotation, obj, method, add) {
var topicPattern=topicPatternAnnotation.topicPattern$();
if (topicPattern == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Topic pattern cannot be null for EventTopicPatternSubscriber annotation"]);
}var eventServiceClass=topicPatternAnnotation.autoCreateEventServiceClass$();
var eventServiceName=topicPatternAnnotation.eventServiceName$();
var eventService=C$.getEventServiceFromAnnotation$S$Class(eventServiceName, eventServiceClass);
var priority=topicPatternAnnotation.priority$();
var pattern=$I$(15).compile$S(topicPattern);
if (add) {
var subscriber=Clazz.new_($I$(16,1).c$$O$reflect_Method$org_bushe_swing_event_annotation_ReferenceStrength$I$org_bushe_swing_event_EventService$S$java_util_regex_Pattern$Z,[obj, method, topicPatternAnnotation.referenceStrength$(), priority, eventService, topicPattern, pattern, false]);
eventService.subscribeStrongly$java_util_regex_Pattern$org_bushe_swing_event_EventTopicSubscriber(pattern, subscriber);
} else {
eventService.unsubscribe$java_util_regex_Pattern$O(pattern, obj);
}}, 1);

Clazz.newMeth(C$, 'process$org_bushe_swing_event_annotation_EventTopicSubscriber$O$reflect_Method$Z', function (topicAnnotation, obj, method, add) {
var topic=topicAnnotation.topic$();
if (topic == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Topic cannot be null for EventTopicSubscriber annotation"]);
}var eventServiceClass=topicAnnotation.autoCreateEventServiceClass$();
var eventServiceName=topicAnnotation.eventServiceName$();
var eventService=C$.getEventServiceFromAnnotation$S$Class(eventServiceName, eventServiceClass);
var priority=topicAnnotation.priority$();
if (add) {
var subscriber=Clazz.new_($I$(17,1).c$$O$reflect_Method$org_bushe_swing_event_annotation_ReferenceStrength$I$org_bushe_swing_event_EventService$S$Z,[obj, method, topicAnnotation.referenceStrength$(), priority, eventService, topic, false]);
eventService.subscribeStrongly$S$org_bushe_swing_event_EventTopicSubscriber(topic, subscriber);
} else {
eventService.unsubscribe$S$O(topic, obj);
}}, 1);

Clazz.newMeth(C$, 'process$org_bushe_swing_event_annotation_EventSubscriber$O$reflect_Method$Z', function (annotation, obj, method, add) {
var eventClass=annotation.eventClass$();
if (eventClass == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Event class cannot be null for EventSubscriber annotation"]);
} else if (Clazz.getClass($I$(18)).equals$O(eventClass)) {
var params=method.getParameterTypes$();
if (params.length < 1) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Expected annotated method to have one parameter."]);
} else {
eventClass=params[0];
}}var eventServiceClass=annotation.autoCreateEventServiceClass$();
var eventServiceName=annotation.eventServiceName$();
var eventService=C$.getEventServiceFromAnnotation$S$Class(eventServiceName, eventServiceClass);
if (add) {
var priority=annotation.priority$();
var subscriber=Clazz.new_($I$(19,1).c$$O$reflect_Method$org_bushe_swing_event_annotation_ReferenceStrength$I$org_bushe_swing_event_EventService$Class$Z,[obj, method, annotation.referenceStrength$(), priority, eventService, eventClass, false]);
if (annotation.exact$()) {
eventService.subscribeExactlyStrongly$Class$org_bushe_swing_event_EventSubscriber(eventClass, subscriber);
} else {
eventService.subscribeStrongly$Class$org_bushe_swing_event_EventSubscriber(eventClass, subscriber);
}} else {
if (annotation.exact$()) {
eventService.unsubscribeExactly$Class$O(eventClass, obj);
} else {
eventService.unsubscribe$Class$O(eventClass, obj);
}}}, 1);

Clazz.newMeth(C$, 'process$org_bushe_swing_event_annotation_RuntimeTopicEventSubscriber$O$reflect_Method$Z', function (annotation, subscriber, method, add) {
var eventTopicSubscriber=((P$.AnnotationProcessor$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationProcessor$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.bushe.swing.event.annotation.EventTopicSubscriber', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'autoCreateEventServiceClass$', function () {
return this.$finals$.annotation.autoCreateEventServiceClass$();
});

Clazz.newMeth(C$, 'eventServiceName$', function () {
return this.$finals$.annotation.eventServiceName$();
});

Clazz.newMeth(C$, 'referenceStrength$', function () {
return this.$finals$.annotation.referenceStrength$();
});

Clazz.newMeth(C$, 'priority$', function () {
return this.$finals$.annotation.priority$();
});

Clazz.newMeth(C$, 'topic$', function () {
return P$.AnnotationProcessor.getTopic$S$O$reflect_Method(this.$finals$.annotation.methodName$(), this.$finals$.subscriber, this.$finals$.method);
});

Clazz.newMeth(C$, 'annotationType$', function () {
return this.$finals$.annotation.annotationType$();
});
})()
), Clazz.new_(P$.AnnotationProcessor$1.$init$, [this, {subscriber:subscriber,annotation:annotation,method:method}]));
C$.process$org_bushe_swing_event_annotation_EventTopicSubscriber$O$reflect_Method$Z(eventTopicSubscriber, subscriber, method, add);
}, 1);

Clazz.newMeth(C$, 'process$org_bushe_swing_event_annotation_RuntimeTopicPatternEventSubscriber$O$reflect_Method$Z', function (annotation, subscriber, method, add) {
var eventTopicPatternSubscriber=((P$.AnnotationProcessor$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationProcessor$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.bushe.swing.event.annotation.EventTopicPatternSubscriber', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'autoCreateEventServiceClass$', function () {
return this.$finals$.annotation.autoCreateEventServiceClass$();
});

Clazz.newMeth(C$, 'eventServiceName$', function () {
return this.$finals$.annotation.eventServiceName$();
});

Clazz.newMeth(C$, 'referenceStrength$', function () {
return this.$finals$.annotation.referenceStrength$();
});

Clazz.newMeth(C$, 'priority$', function () {
return this.$finals$.annotation.priority$();
});

Clazz.newMeth(C$, 'exact$', function () {
return this.$finals$.annotation.exact$();
});

Clazz.newMeth(C$, 'topicPattern$', function () {
return P$.AnnotationProcessor.getTopic$S$O$reflect_Method(this.$finals$.annotation.methodName$(), this.$finals$.subscriber, this.$finals$.method);
});

Clazz.newMeth(C$, 'annotationType$', function () {
return this.$finals$.annotation.annotationType$();
});
})()
), Clazz.new_(P$.AnnotationProcessor$2.$init$, [this, {method:method,annotation:annotation,subscriber:subscriber}]));
C$.process$org_bushe_swing_event_annotation_EventTopicPatternSubscriber$O$reflect_Method$Z(eventTopicPatternSubscriber, subscriber, method, add);
}, 1);

Clazz.newMeth(C$, 'process$org_bushe_swing_event_annotation_VetoTopicPatternSubscriber$O$reflect_Method$Z', function (topicPatternAnnotation, obj, method, add) {
var topicPattern=topicPatternAnnotation.topicPattern$();
if (topicPattern == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Topic pattern cannot be null for VetoTopicPatternSubscriber annotation"]);
}var eventServiceClass=topicPatternAnnotation.autoCreateEventServiceClass$();
var eventServiceName=topicPatternAnnotation.eventServiceName$();
var eventService=C$.getEventServiceFromAnnotation$S$Class(eventServiceName, eventServiceClass);
var priority=topicPatternAnnotation.priority$();
var pattern=$I$(15).compile$S(topicPattern);
var subscriber=Clazz.new_($I$(16,1).c$$O$reflect_Method$org_bushe_swing_event_annotation_ReferenceStrength$I$org_bushe_swing_event_EventService$S$java_util_regex_Pattern$Z,[obj, method, topicPatternAnnotation.referenceStrength$(), priority, eventService, topicPattern, pattern, true]);
if (add) {
eventService.subscribeVetoListenerStrongly$java_util_regex_Pattern$org_bushe_swing_event_VetoTopicEventListener(pattern, subscriber);
} else {
eventService.unsubscribeVeto$java_util_regex_Pattern$O(pattern, obj);
}}, 1);

Clazz.newMeth(C$, 'process$org_bushe_swing_event_annotation_VetoTopicSubscriber$O$reflect_Method$Z', function (topicAnnotation, obj, method, add) {
var topic=topicAnnotation.topic$();
if (topic == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Topic cannot be null for VetoTopicSubscriber annotation"]);
}var eventServiceClass=topicAnnotation.autoCreateEventServiceClass$();
var eventServiceName=topicAnnotation.eventServiceName$();
var eventService=C$.getEventServiceFromAnnotation$S$Class(eventServiceName, eventServiceClass);
var priority=topicAnnotation.priority$();
var subscriber=Clazz.new_($I$(17,1).c$$O$reflect_Method$org_bushe_swing_event_annotation_ReferenceStrength$I$org_bushe_swing_event_EventService$S$Z,[obj, method, topicAnnotation.referenceStrength$(), priority, eventService, topic, true]);
if (add) {
eventService.subscribeVetoListenerStrongly$S$org_bushe_swing_event_VetoTopicEventListener(topic, subscriber);
} else {
eventService.unsubscribeVeto$S$O(topic, obj);
}}, 1);

Clazz.newMeth(C$, 'process$org_bushe_swing_event_annotation_VetoSubscriber$O$reflect_Method$Z', function (annotation, obj, method, add) {
var eventClass=annotation.eventClass$();
if (eventClass == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Event class cannot be null for VetoSubscriber annotation"]);
} else if (Clazz.getClass($I$(18)).equals$O(eventClass)) {
var params=method.getParameterTypes$();
if (params.length < 1) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$S,["Expected annotated method to have one parameter."]);
} else {
eventClass=params[0];
}}var eventServiceClass=annotation.autoCreateEventServiceClass$();
var eventServiceName=annotation.eventServiceName$();
var eventService=C$.getEventServiceFromAnnotation$S$Class(eventServiceName, eventServiceClass);
var priority=annotation.priority$();
var subscriber=Clazz.new_($I$(19,1).c$$O$reflect_Method$org_bushe_swing_event_annotation_ReferenceStrength$I$org_bushe_swing_event_EventService$Class$Z,[obj, method, annotation.referenceStrength$(), priority, eventService, eventClass, true]);
if (add) {
if (annotation.exact$()) {
eventService.subscribeVetoListenerExactlyStrongly$Class$org_bushe_swing_event_VetoEventListener(eventClass, subscriber);
} else {
eventService.subscribeVetoListenerStrongly$Class$org_bushe_swing_event_VetoEventListener(eventClass, subscriber);
}} else {
if (annotation.exact$()) {
eventService.unsubscribeVetoExactly$Class$O(eventClass, obj);
} else {
eventService.unsubscribeVeto$Class$O(eventClass, obj);
}}}, 1);

Clazz.newMeth(C$, 'process$org_bushe_swing_event_annotation_VetoRuntimeTopicSubscriber$O$reflect_Method$Z', function (annotation, subscriber, method, add) {
var eventTopicSubscriber=((P$.AnnotationProcessor$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationProcessor$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.bushe.swing.event.annotation.VetoTopicSubscriber', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'autoCreateEventServiceClass$', function () {
return this.$finals$.annotation.autoCreateEventServiceClass$();
});

Clazz.newMeth(C$, 'eventServiceName$', function () {
return this.$finals$.annotation.eventServiceName$();
});

Clazz.newMeth(C$, 'referenceStrength$', function () {
return this.$finals$.annotation.referenceStrength$();
});

Clazz.newMeth(C$, 'priority$', function () {
return this.$finals$.annotation.priority$();
});

Clazz.newMeth(C$, 'topic$', function () {
return P$.AnnotationProcessor.getTopic$S$O$reflect_Method(this.$finals$.annotation.methodName$(), this.$finals$.subscriber, this.$finals$.method);
});

Clazz.newMeth(C$, 'annotationType$', function () {
return this.$finals$.annotation.annotationType$();
});
})()
), Clazz.new_(P$.AnnotationProcessor$3.$init$, [this, {annotation:annotation,method:method,subscriber:subscriber}]));
C$.process$org_bushe_swing_event_annotation_VetoTopicSubscriber$O$reflect_Method$Z(eventTopicSubscriber, subscriber, method, add);
}, 1);

Clazz.newMeth(C$, 'process$org_bushe_swing_event_annotation_VetoRuntimeTopicPatternSubscriber$O$reflect_Method$Z', function (annotation, subscriber, method, add) {
var eventTopicPatternSubscriber=((P$.AnnotationProcessor$4||
(function(){/*a*/var C$=Clazz.newClass(P$, "AnnotationProcessor$4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.bushe.swing.event.annotation.VetoTopicPatternSubscriber', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'autoCreateEventServiceClass$', function () {
return this.$finals$.annotation.autoCreateEventServiceClass$();
});

Clazz.newMeth(C$, 'eventServiceName$', function () {
return this.$finals$.annotation.eventServiceName$();
});

Clazz.newMeth(C$, 'referenceStrength$', function () {
return this.$finals$.annotation.referenceStrength$();
});

Clazz.newMeth(C$, 'priority$', function () {
return this.$finals$.annotation.priority$();
});

Clazz.newMeth(C$, 'exact$', function () {
return this.$finals$.annotation.exact$();
});

Clazz.newMeth(C$, 'topicPattern$', function () {
return P$.AnnotationProcessor.getTopic$S$O$reflect_Method(this.$finals$.annotation.methodName$(), this.$finals$.subscriber, this.$finals$.method);
});

Clazz.newMeth(C$, 'annotationType$', function () {
return this.$finals$.annotation.annotationType$();
});
})()
), Clazz.new_(P$.AnnotationProcessor$4.$init$, [this, {annotation:annotation,subscriber:subscriber,method:method}]));
C$.process$org_bushe_swing_event_annotation_VetoTopicPatternSubscriber$O$reflect_Method$Z(eventTopicPatternSubscriber, subscriber, method, add);
}, 1);

Clazz.newMeth(C$, 'getTopic$S$O$reflect_Method', function (methodName, subscriber, method) {
try {
var runtimeEvalMethod=subscriber.getClass$().getMethod$S$ClassA(methodName, Clazz.array(Class, [0]));
runtimeEvalMethod.setAccessible$Z(true);
return runtimeEvalMethod.invoke$O$OA(subscriber, Clazz.array(java.lang.Object, [0])).toString();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"SecurityException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,["Could not retrieve method for subscription. Method: " + methodName, e]);
}
} else if (Clazz.exceptionOf(e$$,"NoSuchMethodException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,["Could not retrieve method for subscription. Method: " + methodName, e]);
}
} else if (Clazz.exceptionOf(e$$,"java.lang.reflect.InvocationTargetException")){
var e = e$$;
{
e.getTargetException$().printStackTrace$();
throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,["Could not invoke method for subscription. Method: " + methodName, e]);
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,["Could not invoke method for subscription. Method: " + methodName, e]);
}
} else {
throw e$$;
}
}
}, 1);

Clazz.newMeth(C$, 'getEventServiceFromAnnotation$S$Class', function (eventServiceName, eventServiceClass) {
var eventService=$I$(20).getEventService$S(eventServiceName);
if (eventService == null ) {
if ("EventBus".equals$O(eventServiceName)) {
eventService=$I$(20).getSwingEventService$();
} else {
try {
eventService=eventServiceClass.newInstance$();
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"InstantiationException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,["Could not instance of create EventService class " + eventServiceClass, e]);
}
} else if (Clazz.exceptionOf(e$$,"IllegalAccessException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('RuntimeException').c$$S$Throwable,["Could not instance of create EventService class " + eventServiceClass, e]);
}
} else {
throw e$$;
}
}
try {
$I$(20).setEventService$S$org_bushe_swing_event_EventService(eventServiceName, eventService);
} catch (e) {
if (Clazz.exceptionOf(e,"org.bushe.swing.event.EventServiceExistsException")){
eventService=$I$(20).getEventService$S(eventServiceName);
} else {
throw e;
}
}
}}return eventService;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
