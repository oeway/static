(function(){var P$=Clazz.newPackage("org.bushe.swing.event"),p$1={},I$=[[0,'org.bushe.swing.event.CleanupEvent',['org.bushe.swing.event.CleanupEvent','.Status'],'org.bushe.swing.event.ThreadSafeEventService','java.util.ArrayList','org.bushe.swing.event.Logger','org.bushe.swing.event.EventService',['org.bushe.swing.event.ThreadSafeEventService','.PrioritizedSubscriberComparator'],'java.util.HashMap','org.bushe.swing.event.SubscriberTimingEvent',['org.bushe.swing.event.Logger','.Level'],'java.lang.ref.WeakReference',['org.bushe.swing.event.ThreadSafeEventService','.PatternWrapper'],'org.bushe.swing.event.annotation.ReferenceStrength','org.bushe.swing.event.PublicationStatus','java.util.Collections','java.util.LinkedList','java.util.Timer',['org.bushe.swing.event.ThreadSafeEventService','.CleanupTimerTask']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ThreadSafeEventService", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, 'org.bushe.swing.event.EventService');
C$.$classes$=[['CleanupTimerTask',0],['PrioritizedSubscriberComparator',10],['PatternWrapper',2]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.CLEANUP_START_THRESHOLD_DEFAULT=new Integer(250);
C$.CLEANUP_STOP_THRESHOLD_DEFAULT=new Integer(100);
C$.CLEANUP_PERIOD_MS_DEFAULT=new Long(1200000);
C$.LOG=$I$(5).getLogger$S(Clazz.getClass($I$(6),['clearAllSubscribers$','clearCache$Class','clearCache$S','clearCache$java_util_regex_Pattern','clearCache$','getCacheSizeForEventClass$Class','getCacheSizeForTopic$S','getCachedEvents$Class','getCachedTopicData$S','getDefaultCacheSizePerClassOrTopic$','getLastEvent$Class','getLastTopicData$S','getSubscribers$Class','getSubscribers$reflect_Type','getSubscribers$S','getSubscribers$java_util_regex_Pattern','getSubscribersByPattern$S','getSubscribersToClass$Class','getSubscribersToExactClass$Class','getSubscribersToTopic$S','getVetoEventListeners$S','getVetoSubscribers$Class','getVetoSubscribers$java_util_regex_Pattern','getVetoSubscribers$S','getVetoSubscribersByPattern$S','getVetoSubscribersToClass$Class','getVetoSubscribersToExactClass$Class','getVetoSubscribersToTopic$S','publish$O','publish$reflect_Type$O','publish$S$O','setCacheSizeForEventClass$Class$I','setCacheSizeForTopic$S$I','setCacheSizeForTopic$java_util_regex_Pattern$I','setDefaultCacheSizePerClassOrTopic$I','subscribe$Class$org_bushe_swing_event_EventSubscriber','subscribe$reflect_Type$org_bushe_swing_event_EventSubscriber','subscribe$S$org_bushe_swing_event_EventTopicSubscriber','subscribe$java_util_regex_Pattern$org_bushe_swing_event_EventTopicSubscriber','subscribeExactly$Class$org_bushe_swing_event_EventSubscriber','subscribeExactlyStrongly$Class$org_bushe_swing_event_EventSubscriber','subscribeStrongly$Class$org_bushe_swing_event_EventSubscriber','subscribeStrongly$S$org_bushe_swing_event_EventTopicSubscriber','subscribeStrongly$java_util_regex_Pattern$org_bushe_swing_event_EventTopicSubscriber','subscribeVetoListener$Class$org_bushe_swing_event_VetoEventListener','subscribeVetoListener$S$org_bushe_swing_event_VetoTopicEventListener','subscribeVetoListener$java_util_regex_Pattern$org_bushe_swing_event_VetoTopicEventListener','subscribeVetoListenerExactly$Class$org_bushe_swing_event_VetoEventListener','subscribeVetoListenerExactlyStrongly$Class$org_bushe_swing_event_VetoEventListener','subscribeVetoListenerStrongly$Class$org_bushe_swing_event_VetoEventListener','subscribeVetoListenerStrongly$S$org_bushe_swing_event_VetoTopicEventListener','subscribeVetoListenerStrongly$java_util_regex_Pattern$org_bushe_swing_event_VetoTopicEventListener','unsubscribe$Class$org_bushe_swing_event_EventSubscriber','unsubscribe$S$org_bushe_swing_event_EventTopicSubscriber','unsubscribe$java_util_regex_Pattern$org_bushe_swing_event_EventTopicSubscriber','unsubscribe$Class$O','unsubscribe$S$O','unsubscribe$java_util_regex_Pattern$O','unsubscribeExactly$Class$org_bushe_swing_event_EventSubscriber','unsubscribeExactly$Class$O','unsubscribeVeto$Class$O','unsubscribeVeto$S$O','unsubscribeVeto$java_util_regex_Pattern$O','unsubscribeVetoExactly$Class$O','unsubscribeVetoListener$Class$org_bushe_swing_event_VetoEventListener','unsubscribeVetoListener$S$org_bushe_swing_event_VetoTopicEventListener','unsubscribeVetoListener$java_util_regex_Pattern$org_bushe_swing_event_VetoTopicEventListener','unsubscribeVetoListenerExactly$Class$org_bushe_swing_event_VetoEventListener']).getName$());
C$.PRIORITIZED_SUBSCRIBER_COMPARATOR=Clazz.new_($I$(7,1));
}

Clazz.newMeth(C$, '$init$', function () {
this.subscribersByEventType=Clazz.new_($I$(8,1));
this.subscribersByEventClass=Clazz.new_($I$(8,1));
this.subscribersByExactEventClass=Clazz.new_($I$(8,1));
this.subscribersByTopic=Clazz.new_($I$(8,1));
this.subscribersByTopicPattern=Clazz.new_($I$(8,1));
this.vetoListenersByClass=Clazz.new_($I$(8,1));
this.vetoListenersByExactClass=Clazz.new_($I$(8,1));
this.vetoListenersByTopic=Clazz.new_($I$(8,1));
this.vetoListenersByTopicPattern=Clazz.new_($I$(8,1));
this.listenerLock= Clazz.new_();
this.cacheLock= Clazz.new_();
this.cacheByEvent=Clazz.new_(1,{K:"Class",V:"java.util.List"},$I$(8,1));
this.defaultCacheSizePerClassOrTopic=0;
this.cacheByTopic=Clazz.new_(1,{K:"String",V:"java.util.List"},$I$(8,1));
}, 1);

C$.$fields$=[['Z',['rawCacheSizesForEventClassChanged','rawCacheSizesForTopicChanged','rawCacheSizesForPatternChanged','hasEverUsedPrioritized'],'I',['defaultCacheSizePerClassOrTopic','weakRefPlusProxySubscriberCount'],'O',['subscribersByEventType','java.util.Map','+subscribersByEventClass','+subscribersByExactEventClass','+subscribersByTopic','+subscribersByTopicPattern','+vetoListenersByClass','+vetoListenersByExactClass','+vetoListenersByTopic','+vetoListenersByTopicPattern','listenerLock','java.lang.Object','+cacheLock','timeThresholdForEventTimingEventPublication','Long','cacheByEvent','java.util.Map','+cacheSizesForEventClass','+rawCacheSizesForEventClass','+cacheByTopic','+cacheSizesForTopic','+rawCacheSizesForTopic','+rawCacheSizesForPattern','cleanupStartThreshhold','Integer','+cleanupStopThreshold','cleanupPeriodMS','Long','cleanupTimer','java.util.Timer','cleanupTimerTask','java.util.TimerTask']]
,['O',['CLEANUP_START_THRESHOLD_DEFAULT','Integer','+CLEANUP_STOP_THRESHOLD_DEFAULT','CLEANUP_PERIOD_MS_DEFAULT','Long','LOG','org.bushe.swing.event.Logger','PRIORITIZED_SUBSCRIBER_COMPARATOR','java.util.Comparator']]]

Clazz.newMeth(C$, 'c$', function () {
C$.c$$Long$Z$Integer$Integer$Long.apply(this, [null, false, null, null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$Long', function (timeThresholdForEventTimingEventPublication) {
C$.c$$Long$Z$Integer$Integer$Long.apply(this, [timeThresholdForEventTimingEventPublication, false, null, null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$Long$Z', function (timeThresholdForEventTimingEventPublication, subscribeTimingEventsInternally) {
C$.c$$Long$Z$Integer$Integer$Long.apply(this, [timeThresholdForEventTimingEventPublication, subscribeTimingEventsInternally, null, null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$Integer$Integer$Long', function (cleanupStartThreshold, cleanupStopThreshold, cleanupPeriodMS) {
C$.c$$Long$Z$Integer$Integer$Long.apply(this, [null, false, cleanupStartThreshold, cleanupStopThreshold, cleanupPeriodMS]);
}, 1);

Clazz.newMeth(C$, 'c$$Long$Z$Integer$Integer$Long', function (timeThresholdForEventTimingEventPublication, subscribeTimingEventsInternally, cleanupStartThreshold, cleanupStopThreshold, cleanupPeriodMS) {
;C$.$init$.apply(this);
if (timeThresholdForEventTimingEventPublication == null  && subscribeTimingEventsInternally ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["null, true in constructor is not valid.  If you want to send timing messages for all events and subscribe them internally, pass 0, true"]);
}this.timeThresholdForEventTimingEventPublication=timeThresholdForEventTimingEventPublication;
if (subscribeTimingEventsInternally) {
this.subscribeStrongly$Class$org_bushe_swing_event_EventSubscriber(Clazz.getClass($I$(9)), ((P$.ThreadSafeEventService$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ThreadSafeEventService$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'org.bushe.swing.event.EventSubscriber', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['onEvent$O','onEvent$','onEvent$TT'], function (event) {
this.b$['org.bushe.swing.event.ThreadSafeEventService'].subscribeTiming$org_bushe_swing_event_SubscriberTimingEvent.apply(this.b$['org.bushe.swing.event.ThreadSafeEventService'], [event]);
});
})()
), Clazz.new_(P$.ThreadSafeEventService$1.$init$, [this, null])));
}if (cleanupStartThreshold == null ) {
this.cleanupStartThreshhold=C$.CLEANUP_START_THRESHOLD_DEFAULT;
} else {
this.cleanupStartThreshhold=cleanupStartThreshold;
}if (cleanupStopThreshold == null ) {
this.cleanupStopThreshold=C$.CLEANUP_STOP_THRESHOLD_DEFAULT;
} else {
this.cleanupStopThreshold=cleanupStopThreshold;
}if (cleanupPeriodMS == null ) {
this.cleanupPeriodMS=C$.CLEANUP_PERIOD_MS_DEFAULT;
} else {
this.cleanupPeriodMS=cleanupPeriodMS;
}}, 1);

Clazz.newMeth(C$, 'getCleanupStartThreshhold$', function () {
{
return this.cleanupStartThreshhold;
}});

Clazz.newMeth(C$, 'setCleanupStartThreshhold$Integer', function (cleanupStartThreshhold) {
{
this.cleanupStartThreshhold=cleanupStartThreshhold;
}});

Clazz.newMeth(C$, 'getCleanupStopThreshold$', function () {
{
return this.cleanupStopThreshold;
}});

Clazz.newMeth(C$, 'setCleanupStopThreshold$Integer', function (cleanupStopThreshold) {
{
this.cleanupStopThreshold=cleanupStopThreshold;
}});

Clazz.newMeth(C$, 'getCleanupPeriodMS$', function () {
{
return this.cleanupPeriodMS;
}});

Clazz.newMeth(C$, 'setCleanupPeriodMS$Long', function (cleanupPeriodMS) {
{
this.cleanupPeriodMS=cleanupPeriodMS;
}});

Clazz.newMeth(C$, 'subscribe$Class$org_bushe_swing_event_EventSubscriber', function (cl, eh) {
if (cl == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Event class must not be null"]);
}if (eh == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Event subscriber must not be null"]);
}if (C$.LOG.isLoggable$org_bushe_swing_event_Logger_Level($I$(10).DEBUG)) {
C$.LOG.debug$S("Subscribing by class, class:" + cl + ", subscriber:" + eh );
}return this.subscribe$O$java_util_Map$O(cl, this.subscribersByEventClass, Clazz.new_(1,{T:"org.bushe.swing.event.EventSubscriber"},$I$(11,1).c$$TT,[eh]));
});

Clazz.newMeth(C$, 'subscribe$reflect_Type$org_bushe_swing_event_EventSubscriber', function (type, eh) {
return this.subscribe$O$java_util_Map$O(type, this.subscribersByEventType, Clazz.new_(1,{T:"org.bushe.swing.event.EventSubscriber"},$I$(11,1).c$$TT,[eh]));
});

Clazz.newMeth(C$, 'subscribeExactly$Class$org_bushe_swing_event_EventSubscriber', function (cl, eh) {
if (cl == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Event class must not be null"]);
}if (eh == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Event subscriber must not be null"]);
}if (C$.LOG.isLoggable$org_bushe_swing_event_Logger_Level($I$(10).DEBUG)) {
C$.LOG.debug$S("Subscribing by class, class:" + cl + ", subscriber:" + eh );
}return this.subscribe$O$java_util_Map$O(cl, this.subscribersByExactEventClass, Clazz.new_(1,{T:"org.bushe.swing.event.EventSubscriber"},$I$(11,1).c$$TT,[eh]));
});

Clazz.newMeth(C$, 'subscribe$S$org_bushe_swing_event_EventTopicSubscriber', function (topic, eh) {
if (topic == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Topic must not be null"]);
}if (eh == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Event topic subscriber must not be null"]);
}if (C$.LOG.isLoggable$org_bushe_swing_event_Logger_Level($I$(10).DEBUG)) {
C$.LOG.debug$S("Subscribing by topic name, name:" + topic + ", subscriber:" + eh );
}return this.subscribe$O$java_util_Map$O(topic, this.subscribersByTopic, Clazz.new_(1,{T:"org.bushe.swing.event.EventTopicSubscriber"},$I$(11,1).c$$TT,[eh]));
});

Clazz.newMeth(C$, 'subscribe$java_util_regex_Pattern$org_bushe_swing_event_EventTopicSubscriber', function (pat, eh) {
if (pat == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Pattern must not be null"]);
}if (eh == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Event subscriber must not be null"]);
}if (C$.LOG.isLoggable$org_bushe_swing_event_Logger_Level($I$(10).DEBUG)) {
C$.LOG.debug$S("Subscribing by pattern, pattern:" + pat + ", subscriber:" + eh );
}var patternWrapper=Clazz.new_($I$(12,1).c$$java_util_regex_Pattern, [this, null, pat]);
return this.subscribe$O$java_util_Map$O(patternWrapper, this.subscribersByTopicPattern, Clazz.new_(1,{T:"org.bushe.swing.event.EventTopicSubscriber"},$I$(11,1).c$$TT,[eh]));
});

Clazz.newMeth(C$, 'subscribeStrongly$Class$org_bushe_swing_event_EventSubscriber', function (cl, eh) {
if (C$.LOG.isLoggable$org_bushe_swing_event_Logger_Level($I$(10).DEBUG)) {
C$.LOG.debug$S("Subscribing weakly by class, class:" + cl + ", subscriber:" + eh );
}if (eh == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Subscriber cannot be null."]);
}return this.subscribe$O$java_util_Map$O(cl, this.subscribersByEventClass, eh);
});

Clazz.newMeth(C$, 'subscribeExactlyStrongly$Class$org_bushe_swing_event_EventSubscriber', function (cl, eh) {
if (cl == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Event class must not be null"]);
}if (eh == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Event subscriber must not be null"]);
}if (C$.LOG.isLoggable$org_bushe_swing_event_Logger_Level($I$(10).DEBUG)) {
C$.LOG.debug$S("Subscribing by class, class:" + cl + ", subscriber:" + eh );
}return this.subscribe$O$java_util_Map$O(cl, this.subscribersByExactEventClass, eh);
});

Clazz.newMeth(C$, 'subscribeStrongly$S$org_bushe_swing_event_EventTopicSubscriber', function (name, eh) {
if (C$.LOG.isLoggable$org_bushe_swing_event_Logger_Level($I$(10).DEBUG)) {
C$.LOG.debug$S("Subscribing weakly by topic name, name:" + name + ", subscriber:" + eh );
}if (eh == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Subscriber cannot be null."]);
}return this.subscribe$O$java_util_Map$O(name, this.subscribersByTopic, eh);
});

Clazz.newMeth(C$, 'subscribeStrongly$java_util_regex_Pattern$org_bushe_swing_event_EventTopicSubscriber', function (pat, eh) {
if (pat == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Pattern must not be null"]);
}if (eh == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Event subscriber must not be null"]);
}if (C$.LOG.isLoggable$org_bushe_swing_event_Logger_Level($I$(10).DEBUG)) {
C$.LOG.debug$S("Subscribing by pattern, pattern:" + pat + ", subscriber:" + eh );
}var patternWrapper=Clazz.new_($I$(12,1).c$$java_util_regex_Pattern, [this, null, pat]);
return this.subscribe$O$java_util_Map$O(patternWrapper, this.subscribersByTopicPattern, eh);
});

Clazz.newMeth(C$, 'clearAllSubscribers$', function () {
{
p$1.unsubscribeAllInMap$java_util_Map.apply(this, [this.subscribersByEventType]);
p$1.unsubscribeAllInMap$java_util_Map.apply(this, [this.subscribersByEventClass]);
p$1.unsubscribeAllInMap$java_util_Map.apply(this, [this.subscribersByExactEventClass]);
p$1.unsubscribeAllInMap$java_util_Map.apply(this, [this.subscribersByTopic]);
p$1.unsubscribeAllInMap$java_util_Map.apply(this, [this.subscribersByTopicPattern]);
p$1.unsubscribeAllInMap$java_util_Map.apply(this, [this.vetoListenersByClass]);
p$1.unsubscribeAllInMap$java_util_Map.apply(this, [this.vetoListenersByExactClass]);
p$1.unsubscribeAllInMap$java_util_Map.apply(this, [this.vetoListenersByTopic]);
p$1.unsubscribeAllInMap$java_util_Map.apply(this, [this.vetoListenersByTopicPattern]);
}});

Clazz.newMeth(C$, 'unsubscribeAllInMap$java_util_Map', function (subscriberMap) {
{
var subscriptionKeys=subscriberMap.keySet$();
for (var key, $key = subscriptionKeys.iterator$(); $key.hasNext$()&&((key=($key.next$())),1);) {
var subscribers=subscriberMap.get$O(key);
while (!subscribers.isEmpty$()){
this.unsubscribe$O$java_util_Map$O(key, subscriberMap, subscribers.get$I(0));
}
}
}}, p$1);

Clazz.newMeth(C$, 'subscribeVetoListener$Class$org_bushe_swing_event_VetoEventListener', function (eventClass, vetoListener) {
if (vetoListener == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["VetoEventListener cannot be null."]);
}if (eventClass == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["eventClass cannot be null."]);
}return this.subscribeVetoListener$O$java_util_Map$O(eventClass, this.vetoListenersByClass, Clazz.new_(1,{T:"org.bushe.swing.event.VetoEventListener"},$I$(11,1).c$$TT,[vetoListener]));
});

Clazz.newMeth(C$, 'subscribeVetoListenerExactly$Class$org_bushe_swing_event_VetoEventListener', function (eventClass, vetoListener) {
if (vetoListener == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["VetoEventListener cannot be null."]);
}if (eventClass == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["eventClass cannot be null."]);
}return this.subscribeVetoListener$O$java_util_Map$O(eventClass, this.vetoListenersByExactClass, Clazz.new_(1,{T:"org.bushe.swing.event.VetoEventListener"},$I$(11,1).c$$TT,[vetoListener]));
});

Clazz.newMeth(C$, 'subscribeVetoListener$S$org_bushe_swing_event_VetoTopicEventListener', function (topic, vetoListener) {
if (vetoListener == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["VetoEventListener cannot be null."]);
}if (topic == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["topic cannot be null."]);
}return this.subscribeVetoListener$O$java_util_Map$O(topic, this.vetoListenersByTopic, Clazz.new_(1,{T:"org.bushe.swing.event.VetoTopicEventListener"},$I$(11,1).c$$TT,[vetoListener]));
});

Clazz.newMeth(C$, 'subscribeVetoListener$java_util_regex_Pattern$org_bushe_swing_event_VetoTopicEventListener', function (topicPattern, vetoListener) {
if (vetoListener == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["VetoEventListener cannot be null."]);
}if (topicPattern == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["topicPattern cannot be null."]);
}var patternWrapper=Clazz.new_($I$(12,1).c$$java_util_regex_Pattern, [this, null, topicPattern]);
return this.subscribeVetoListener$O$java_util_Map$O(patternWrapper, this.vetoListenersByTopicPattern, Clazz.new_(1,{T:"org.bushe.swing.event.VetoTopicEventListener"},$I$(11,1).c$$TT,[vetoListener]));
});

Clazz.newMeth(C$, 'subscribeVetoListenerStrongly$Class$org_bushe_swing_event_VetoEventListener', function (eventClass, vetoListener) {
if (vetoListener == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["VetoEventListener cannot be null."]);
}if (eventClass == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["eventClass cannot be null."]);
}return this.subscribeVetoListener$O$java_util_Map$O(eventClass, this.vetoListenersByClass, vetoListener);
});

Clazz.newMeth(C$, 'subscribeVetoListenerExactlyStrongly$Class$org_bushe_swing_event_VetoEventListener', function (eventClass, vetoListener) {
if (vetoListener == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["VetoEventListener cannot be null."]);
}if (eventClass == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["eventClass cannot be null."]);
}return this.subscribeVetoListener$O$java_util_Map$O(eventClass, this.vetoListenersByExactClass, vetoListener);
});

Clazz.newMeth(C$, 'subscribeVetoListenerStrongly$S$org_bushe_swing_event_VetoTopicEventListener', function (topic, vetoListener) {
if (vetoListener == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["VetoListener cannot be null."]);
}if (topic == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["topic cannot be null."]);
}return this.subscribeVetoListener$O$java_util_Map$O(topic, this.vetoListenersByTopic, vetoListener);
});

Clazz.newMeth(C$, 'subscribeVetoListenerStrongly$java_util_regex_Pattern$org_bushe_swing_event_VetoTopicEventListener', function (topicPattern, vetoListener) {
if (vetoListener == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["VetoTopicEventListener cannot be null."]);
}if (topicPattern == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["topicPattern cannot be null."]);
}var patternWrapper=Clazz.new_($I$(12,1).c$$java_util_regex_Pattern, [this, null, topicPattern]);
return this.subscribeVetoListener$O$java_util_Map$O(patternWrapper, this.vetoListenersByTopicPattern, vetoListener);
});

Clazz.newMeth(C$, 'subscribeVetoListener$O$java_util_Map$O', function (subscription, vetoListenerMap, vetoListener) {
if (C$.LOG.isLoggable$org_bushe_swing_event_Logger_Level($I$(10).DEBUG)) {
C$.LOG.debug$S("subscribeVetoListener(" + subscription + "," + vetoListener + ")" );
}if (vetoListener == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can't subscribe null veto listener to " + subscription]);
}if (subscription == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can\'t subscribe veto listener to null."]);
}return this.subscribe$O$java_util_Map$O(subscription, vetoListenerMap, vetoListener);
});

Clazz.newMeth(C$, 'subscribe$O$java_util_Map$O', function (classTopicOrPatternWrapper, subscriberMap, subscriber) {
if (classTopicOrPatternWrapper == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can\'t subscribe to null."]);
}if (subscriber == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can't subscribe null subscriber to " + classTopicOrPatternWrapper]);
}var alreadyExists=false;
var realSubscriber=subscriber;
var isWeakRef=Clazz.instanceOf(subscriber, "java.lang.ref.WeakReference");
if (isWeakRef) {
realSubscriber=(subscriber).get$();
}if (Clazz.instanceOf(realSubscriber, "org.bushe.swing.event.Prioritized")) {
this.hasEverUsedPrioritized=true;
}var isWeakProxySubscriber=false;
if (Clazz.instanceOf(subscriber, "org.bushe.swing.event.ProxySubscriber")) {
var proxySubscriber=subscriber;
if (Clazz.instanceOf(proxySubscriber, "org.bushe.swing.event.Prioritized")) {
this.hasEverUsedPrioritized=true;
}isWeakProxySubscriber=proxySubscriber.getReferenceStrength$() === $I$(13).WEAK ;
if (isWeakProxySubscriber) {
realSubscriber=(subscriber).getProxiedSubscriber$();
}}if (isWeakRef && isWeakProxySubscriber ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["ProxySubscribers should always be subscribed strongly."]);
}if (realSubscriber == null ) {
return false;
}{
var currentSubscribers=subscriberMap.get$O(classTopicOrPatternWrapper);
if (currentSubscribers == null ) {
if (C$.LOG.isLoggable$org_bushe_swing_event_Logger_Level($I$(10).DEBUG)) {
C$.LOG.debug$S("Creating new subscriber map for:" + classTopicOrPatternWrapper);
}currentSubscribers=Clazz.new_($I$(4,1));
subscriberMap.put$TK$TV(classTopicOrPatternWrapper, currentSubscribers);
} else {
for (var iterator=currentSubscribers.iterator$(); iterator.hasNext$(); ) {
var currentSubscriber=iterator.next$();
var realCurrentSubscriber=this.getRealSubscriberAndCleanStaleSubscriberIfNecessary$java_util_Iterator$O(iterator, currentSubscriber);
if (realSubscriber.equals$O(realCurrentSubscriber)) {
iterator.remove$();
alreadyExists=true;
}}
}currentSubscribers.add$TE(subscriber);
if (isWeakProxySubscriber || isWeakRef ) {
this.incWeakRefPlusProxySubscriberCount$();
}return !alreadyExists;
}});

Clazz.newMeth(C$, 'unsubscribe$Class$org_bushe_swing_event_EventSubscriber', function (cl, eh) {
return this.unsubscribe$O$java_util_Map$O(cl, this.subscribersByEventClass, eh);
});

Clazz.newMeth(C$, 'unsubscribeExactly$Class$org_bushe_swing_event_EventSubscriber', function (cl, eh) {
return this.unsubscribe$O$java_util_Map$O(cl, this.subscribersByExactEventClass, eh);
});

Clazz.newMeth(C$, 'unsubscribe$S$org_bushe_swing_event_EventTopicSubscriber', function (name, eh) {
return this.unsubscribe$O$java_util_Map$O(name, this.subscribersByTopic, eh);
});

Clazz.newMeth(C$, 'unsubscribe$java_util_regex_Pattern$org_bushe_swing_event_EventTopicSubscriber', function (topicPattern, eh) {
var patternWrapper=Clazz.new_($I$(12,1).c$$java_util_regex_Pattern, [this, null, topicPattern]);
return this.unsubscribe$O$java_util_Map$O(patternWrapper, this.subscribersByTopicPattern, eh);
});

Clazz.newMeth(C$, 'unsubscribe$Class$O', function (eventClass, subscribedByProxy) {
var subscriber=p$1.getProxySubscriber$Class$O.apply(this, [eventClass, subscribedByProxy]);
if (subscriber == null ) {
return false;
} else {
return this.unsubscribe$Class$org_bushe_swing_event_EventSubscriber(eventClass, subscriber);
}});

Clazz.newMeth(C$, 'unsubscribeExactly$Class$O', function (eventClass, subscribedByProxy) {
var subscriber=p$1.getProxySubscriber$Class$O.apply(this, [eventClass, subscribedByProxy]);
if (subscriber == null ) {
return false;
} else {
return this.unsubscribeExactly$Class$org_bushe_swing_event_EventSubscriber(eventClass, subscriber);
}});

Clazz.newMeth(C$, 'unsubscribe$S$O', function (topic, subscribedByProxy) {
var subscriber=p$1.getProxySubscriber$S$O.apply(this, [topic, subscribedByProxy]);
if (subscriber == null ) {
return false;
} else {
return this.unsubscribe$S$org_bushe_swing_event_EventTopicSubscriber(topic, subscriber);
}});

Clazz.newMeth(C$, 'unsubscribe$java_util_regex_Pattern$O', function (pattern, subscribedByProxy) {
var subscriber=p$1.getProxySubscriber$java_util_regex_Pattern$O.apply(this, [pattern, subscribedByProxy]);
if (subscriber == null ) {
return false;
} else {
return this.unsubscribe$java_util_regex_Pattern$org_bushe_swing_event_EventTopicSubscriber(pattern, subscriber);
}});

Clazz.newMeth(C$, 'unsubscribe$O$java_util_Map$O', function (o, subscriberMap, subscriber) {
if (C$.LOG.isLoggable$org_bushe_swing_event_Logger_Level($I$(10).DEBUG)) {
C$.LOG.debug$S("unsubscribe(" + o + "," + subscriber + ")" );
}if (o == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can\'t unsubscribe to null."]);
}if (subscriber == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can't unsubscribe null subscriber to " + o]);
}{
return p$1.removeFromSetResolveWeakReferences$java_util_Map$O$O.apply(this, [subscriberMap, o, subscriber]);
}});

Clazz.newMeth(C$, 'unsubscribeVeto$Class$O', function (eventClass, subscribedByProxy) {
var subscriber=p$1.getVetoProxySubscriber$Class$O.apply(this, [eventClass, subscribedByProxy]);
if (subscriber == null ) {
return false;
} else {
return this.unsubscribeVetoListener$Class$org_bushe_swing_event_VetoEventListener(eventClass, subscriber);
}});

Clazz.newMeth(C$, 'unsubscribeVetoExactly$Class$O', function (eventClass, subscribedByProxy) {
var subscriber=p$1.getVetoProxySubscriber$Class$O.apply(this, [eventClass, subscribedByProxy]);
if (subscriber == null ) {
return false;
} else {
return this.unsubscribeVetoListenerExactly$Class$org_bushe_swing_event_VetoEventListener(eventClass, subscriber);
}});

Clazz.newMeth(C$, 'unsubscribeVeto$S$O', function (topic, subscribedByProxy) {
var subscriber=p$1.getVetoProxySubscriber$S$O.apply(this, [topic, subscribedByProxy]);
if (subscriber == null ) {
return false;
} else {
return this.unsubscribeVetoListener$S$org_bushe_swing_event_VetoTopicEventListener(topic, subscriber);
}});

Clazz.newMeth(C$, 'unsubscribeVeto$java_util_regex_Pattern$O', function (pattern, subscribedByProxy) {
var subscriber=p$1.getVetoProxySubscriber$java_util_regex_Pattern$O.apply(this, [pattern, subscribedByProxy]);
if (subscriber == null ) {
return false;
} else {
return this.unsubscribeVetoListener$java_util_regex_Pattern$org_bushe_swing_event_VetoTopicEventListener(pattern, subscriber);
}});

Clazz.newMeth(C$, 'unsubscribeVetoListener$Class$org_bushe_swing_event_VetoEventListener', function (eventClass, vetoListener) {
return this.unsubscribeVetoListener$O$java_util_Map$O(eventClass, this.vetoListenersByClass, vetoListener);
});

Clazz.newMeth(C$, 'unsubscribeVetoListenerExactly$Class$org_bushe_swing_event_VetoEventListener', function (eventClass, vetoListener) {
return this.unsubscribeVetoListener$O$java_util_Map$O(eventClass, this.vetoListenersByExactClass, vetoListener);
});

Clazz.newMeth(C$, 'unsubscribeVetoListener$S$org_bushe_swing_event_VetoTopicEventListener', function (topic, vetoListener) {
return this.unsubscribeVetoListener$O$java_util_Map$O(topic, this.vetoListenersByTopic, vetoListener);
});

Clazz.newMeth(C$, 'unsubscribeVetoListener$java_util_regex_Pattern$org_bushe_swing_event_VetoTopicEventListener', function (topicPattern, vetoListener) {
var patternWrapper=Clazz.new_($I$(12,1).c$$java_util_regex_Pattern, [this, null, topicPattern]);
return this.unsubscribeVetoListener$O$java_util_Map$O(patternWrapper, this.vetoListenersByTopicPattern, vetoListener);
});

Clazz.newMeth(C$, 'unsubscribeVetoListener$O$java_util_Map$O', function (o, vetoListenerMap, vl) {
if (C$.LOG.isLoggable$org_bushe_swing_event_Logger_Level($I$(10).DEBUG)) {
C$.LOG.debug$S("unsubscribeVetoListener(" + o + "," + vl + ")" );
}if (o == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can\'t unsubscribe veto listener to null."]);
}if (vl == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can't unsubscribe null veto listener to " + o]);
}{
return p$1.removeFromSetResolveWeakReferences$java_util_Map$O$O.apply(this, [vetoListenerMap, o, vl]);
}});

Clazz.newMeth(C$, 'getProxySubscriber$Class$O', function (eventClass, subscribedByProxy) {
var subscribers=this.getSubscribers$Class(eventClass);
return p$1.getProxySubscriber$java_util_List$O.apply(this, [subscribers, subscribedByProxy]);
}, p$1);

Clazz.newMeth(C$, 'getProxySubscriber$S$O', function (topic, subscribedByProxy) {
var subscribers=this.getSubscribers$S(topic);
return p$1.getProxySubscriber$java_util_List$O.apply(this, [subscribers, subscribedByProxy]);
}, p$1);

Clazz.newMeth(C$, 'getProxySubscriber$java_util_regex_Pattern$O', function (pattern, subscribedByProxy) {
var subscribers=this.getSubscribersToPattern$java_util_regex_Pattern(pattern);
return p$1.getProxySubscriber$java_util_List$O.apply(this, [subscribers, subscribedByProxy]);
}, p$1);

Clazz.newMeth(C$, 'getVetoProxySubscriber$Class$O', function (eventClass, subscribedByProxy) {
var subscribers=this.getVetoSubscribers$Class(eventClass);
return p$1.getProxySubscriber$java_util_List$O.apply(this, [subscribers, subscribedByProxy]);
}, p$1);

Clazz.newMeth(C$, 'getVetoProxySubscriber$S$O', function (topic, subscribedByProxy) {
var subscribers=this.getVetoSubscribers$S(topic);
return p$1.getProxySubscriber$java_util_List$O.apply(this, [subscribers, subscribedByProxy]);
}, p$1);

Clazz.newMeth(C$, 'getVetoProxySubscriber$java_util_regex_Pattern$O', function (pattern, subscribedByProxy) {
var subscribers=this.getVetoSubscribers$java_util_regex_Pattern(pattern);
return p$1.getProxySubscriber$java_util_List$O.apply(this, [subscribers, subscribedByProxy]);
}, p$1);

Clazz.newMeth(C$, 'getProxySubscriber$java_util_List$O', function (subscribers, subscribedByProxy) {
for (var iter=subscribers.iterator$(); iter.hasNext$(); ) {
var subscriber=iter.next$();
if (Clazz.instanceOf(subscriber, "java.lang.ref.WeakReference")) {
var wr=subscriber;
subscriber=wr.get$();
}if (Clazz.instanceOf(subscriber, "org.bushe.swing.event.ProxySubscriber")) {
var proxy=subscriber;
subscriber=proxy.getProxiedSubscriber$();
if (subscriber === subscribedByProxy ) {
return proxy;
}}}
return null;
}, p$1);

Clazz.newMeth(C$, 'publish$O', function (event) {
if (event == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot publish null event."]);
}this.publish$O$S$O$java_util_List$java_util_List$StackTraceElementA(event, null, null, this.getSubscribers$Class(event.getClass$()), this.getVetoSubscribers$Class(event.getClass$()), null);
});

Clazz.newMeth(C$, 'publish$reflect_Type$O', function (genericType, event) {
if (genericType == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["genericType must not be null."]);
}if (event == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot publish null event."]);
}this.publish$O$S$O$java_util_List$java_util_List$StackTraceElementA(event, null, null, this.getSubscribers$reflect_Type(genericType), null, null);
});

Clazz.newMeth(C$, 'publish$S$O', function (topicName, eventObj) {
this.publish$O$S$O$java_util_List$java_util_List$StackTraceElementA(null, topicName, eventObj, this.getSubscribers$S(topicName), this.getVetoEventListeners$S(topicName), null);
});

Clazz.newMeth(C$, 'publish$O$S$O$java_util_List$java_util_List$StackTraceElementA', function (event, topic, eventObj, subscribers, vetoSubscribers, callingStack) {
if (event == null  && topic == null  ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can\'t publish to null topic/event."]);
}this.setStatus$org_bushe_swing_event_PublicationStatus$O$S$O($I$(14).Initiated, event, topic, eventObj);
p$1.logEvent$O$S$O.apply(this, [event, topic, eventObj]);
if (p$1.checkVetoSubscribers$O$S$O$java_util_List$StackTraceElementA.apply(this, [event, topic, eventObj, vetoSubscribers, callingStack])) {
this.setStatus$org_bushe_swing_event_PublicationStatus$O$S$O($I$(14).Vetoed, event, topic, eventObj);
return;
} else {
this.setStatus$org_bushe_swing_event_PublicationStatus$O$S$O($I$(14).Queued, event, topic, eventObj);
}this.addEventToCache$O$S$O(event, topic, eventObj);
if (subscribers == null  || subscribers.isEmpty$() ) {
if (C$.LOG.isLoggable$org_bushe_swing_event_Logger_Level($I$(10).DEBUG)) {
C$.LOG.debug$S("No subscribers for event or topic. Event:" + event + ", Topic:" + topic );
}} else {
if (C$.LOG.isLoggable$org_bushe_swing_event_Logger_Level($I$(10).DEBUG)) {
C$.LOG.debug$S("Publishing to subscribers:" + subscribers);
}this.setStatus$org_bushe_swing_event_PublicationStatus$O$S$O($I$(14).Publishing, event, topic, eventObj);
for (var i=0; i < subscribers.size$(); i++) {
var eh=subscribers.get$I(i);
if (event != null ) {
var eventSubscriber=eh;
var start=System.currentTimeMillis$();
try {
eventSubscriber.onEvent$(event);
p$1.checkTimeLimit$J$O$org_bushe_swing_event_EventSubscriber$org_bushe_swing_event_VetoEventListener.apply(this, [start, event, eventSubscriber, null]);
} catch (e) {
p$1.checkTimeLimit$J$O$org_bushe_swing_event_EventSubscriber$org_bushe_swing_event_VetoEventListener.apply(this, [start, event, eventSubscriber, null]);
this.handleException$O$Throwable$StackTraceElementA$org_bushe_swing_event_EventSubscriber(event, e, callingStack, eventSubscriber);
}
} else {
var eventTopicSubscriber=eh;
try {
eventTopicSubscriber.onEvent$(topic, eventObj);
} catch (e) {
this.onEventException$S$O$Throwable$StackTraceElementA$org_bushe_swing_event_EventTopicSubscriber(topic, eventObj, e, callingStack, eventTopicSubscriber);
}
}}
}this.setStatus$org_bushe_swing_event_PublicationStatus$O$S$O($I$(14).Completed, event, topic, eventObj);
});

Clazz.newMeth(C$, 'setStatus$org_bushe_swing_event_PublicationStatus$O$S$O', function (status, event, topic, eventObj) {
if (Clazz.instanceOf(event, "org.bushe.swing.event.PublicationStatusTracker")) {
(event).setPublicationStatus$org_bushe_swing_event_PublicationStatus(status);
}if (Clazz.instanceOf(eventObj, "org.bushe.swing.event.PublicationStatusTracker")) {
(eventObj).setPublicationStatus$org_bushe_swing_event_PublicationStatus(status);
}});

Clazz.newMeth(C$, 'sortSubscribers$java_util_List', function (subscribers) {
if (subscribers == null ) {
return null;
}var prioritizedSubscribers=null;
var iterator=subscribers.iterator$();
while (iterator.hasNext$()){
var subscriber=iterator.next$();
if (Clazz.instanceOf(subscriber, "org.bushe.swing.event.Prioritized")) {
var prioritized=(subscriber);
if (prioritized.getPriority$() != 0) {
iterator.remove$();
if (prioritizedSubscribers == null ) {
prioritizedSubscribers=Clazz.new_(1,{E:"org.bushe.swing.event.Prioritized"},$I$(4,1));
}prioritizedSubscribers.add$TE(prioritized);
}}}
if (prioritizedSubscribers == null ) {
return subscribers;
} else {
var result=Clazz.new_($I$(4,1).c$$I,[prioritizedSubscribers.size$() + subscribers.size$()]);
$I$(15).sort$java_util_List$java_util_Comparator(prioritizedSubscribers, C$.PRIORITIZED_SUBSCRIBER_COMPARATOR);
var haveAddedFIFOSubscribers=false;
for (var prioritizedSubscriber, $prioritizedSubscriber = prioritizedSubscribers.iterator$(); $prioritizedSubscriber.hasNext$()&&((prioritizedSubscriber=($prioritizedSubscriber.next$())),1);) {
if (prioritizedSubscriber.getPriority$() > 0 && !haveAddedFIFOSubscribers ) {
for (var subscriber, $subscriber = subscribers.iterator$(); $subscriber.hasNext$()&&((subscriber=($subscriber.next$())),1);) {
result.add$TE(subscriber);
}
haveAddedFIFOSubscribers=true;
}result.add$TE(prioritizedSubscriber);
}
if (!haveAddedFIFOSubscribers) {
for (var subscriber, $subscriber = subscribers.iterator$(); $subscriber.hasNext$()&&((subscriber=($subscriber.next$())),1);) {
result.add$TE(subscriber);
}
}return result;
}}, p$1);

Clazz.newMeth(C$, 'checkVetoSubscribers$O$S$O$java_util_List$StackTraceElementA', function (event, topic, eventObj, vetoSubscribers, callingStack) {
if (vetoSubscribers != null  && !vetoSubscribers.isEmpty$() ) {
for (var vlIter=vetoSubscribers.iterator$(); vlIter.hasNext$(); ) {
var vetoer=vlIter.next$();
var vl=null;
var vtl=null;
if (event == null ) {
vtl=vetoer;
} else {
vl=vetoer;
}var start=System.currentTimeMillis$();
try {
var shouldVeto=false;
if (event == null ) {
shouldVeto=vtl.shouldVeto$(topic, eventObj);
} else {
shouldVeto=vl.shouldVeto$(event);
}if (shouldVeto) {
this.handleVeto$org_bushe_swing_event_VetoEventListener$O$org_bushe_swing_event_VetoTopicEventListener$S$O(vl, event, vtl, topic, eventObj);
p$1.checkTimeLimit$J$O$org_bushe_swing_event_EventSubscriber$org_bushe_swing_event_VetoEventListener.apply(this, [start, event, null, vl]);
if (C$.LOG.isLoggable$org_bushe_swing_event_Logger_Level($I$(10).DEBUG)) {
C$.LOG.debug$S("Publication vetoed. Event:" + event + ", Topic:" + topic + ", veto subscriber:" + vl );
}return true;
}} catch (ex) {
p$1.checkTimeLimit$J$O$org_bushe_swing_event_EventSubscriber$org_bushe_swing_event_VetoEventListener.apply(this, [start, event, null, vl]);
this.subscribeVetoException$O$S$O$Throwable$StackTraceElementA$org_bushe_swing_event_VetoEventListener(event, topic, eventObj, ex, callingStack, vl);
}
}
}return false;
}, p$1);

Clazz.newMeth(C$, 'logEvent$O$S$O', function (event, topic, eventObj) {
if (C$.LOG.isLoggable$org_bushe_swing_event_Logger_Level($I$(10).DEBUG)) {
if (event != null ) {
C$.LOG.debug$S("Publishing event: class=" + event.getClass$() + ", event=" + event );
} else if (topic != null ) {
C$.LOG.debug$S("Publishing event: topic=" + topic + ", eventObj=" + eventObj );
}}}, p$1);

Clazz.newMeth(C$, 'addEventToCache$O$S$O', function (event, topic, eventObj) {
{
if (event != null ) {
var cacheSizeForEventClass=this.getCacheSizeForEventClass$Class(event.getClass$());
var eventClassCache=this.cacheByEvent.get$O(event.getClass$());
if (cacheSizeForEventClass <= 0) {
if (eventClassCache != null ) {
this.cacheByEvent.remove$O(event.getClass$());
}} else {
if (eventClassCache == null ) {
eventClassCache=Clazz.new_($I$(16,1));
this.cacheByEvent.put$TK$TV(event.getClass$(), eventClassCache);
}eventClassCache.add$I$TE(0, event);
while (eventClassCache.size$() > cacheSizeForEventClass){
eventClassCache.remove$I(eventClassCache.size$() - 1);
}
}} else {
var cacheSizeForTopic=this.getCacheSizeForTopic$S(topic);
var topicCache=this.cacheByTopic.get$O(topic);
if (cacheSizeForTopic <= 0) {
if (topicCache != null ) {
topicCache.remove$O(topic);
}} else {
if (topicCache == null ) {
topicCache=Clazz.new_($I$(16,1));
this.cacheByTopic.put$TK$TV(topic, topicCache);
}topicCache.add$I$TE(0, eventObj);
while (topicCache.size$() > cacheSizeForTopic){
topicCache.remove$I(topicCache.size$() - 1);
}
}}}});

Clazz.newMeth(C$, 'getSubscribers$Class', function (eventClass) {
var hierarchyMatches;
var exactMatches;
{
hierarchyMatches=this.getSubscribersToClass$Class(eventClass);
exactMatches=this.getSubscribersToExactClass$Class(eventClass);
}var result=Clazz.new_($I$(4,1));
if (exactMatches != null ) {
result.addAll$java_util_Collection(exactMatches);
}if (hierarchyMatches != null ) {
result.addAll$java_util_Collection(hierarchyMatches);
}if (this.hasEverUsedPrioritized) {
result=p$1.sortSubscribers$java_util_List.apply(this, [result]);
}return result;
});

Clazz.newMeth(C$, 'getSubscribersToClass$Class', function (eventClass) {
{
var classMap=this.subscribersByEventClass;
var result=p$1.getEventOrVetoSubscribersToClass$java_util_Map$Class.apply(this, [classMap, eventClass]);
if (this.hasEverUsedPrioritized) {
result=p$1.sortSubscribers$java_util_List.apply(this, [result]);
}return result;
}});

Clazz.newMeth(C$, 'getSubscribersToExactClass$Class', function (eventClass) {
{
return p$1.getSubscribers$O$java_util_Map.apply(this, [eventClass, this.subscribersByExactEventClass]);
}});

Clazz.newMeth(C$, 'getSubscribers$reflect_Type', function (eventType) {
var result;
{
result=p$1.getEventOrVetoSubscribersToType$java_util_Map$reflect_Type.apply(this, [this.subscribersByEventType, eventType]);
}if (this.hasEverUsedPrioritized) {
result=p$1.sortSubscribers$java_util_List.apply(this, [result]);
}return result;
});

Clazz.newMeth(C$, 'getSubscribers$S', function (topic) {
var result=Clazz.new_($I$(4,1));
var exactMatches;
var patternMatches;
{
exactMatches=this.getSubscribersToTopic$S(topic);
patternMatches=this.getSubscribersByPattern$S(topic);
}if (exactMatches != null ) {
result.addAll$java_util_Collection(exactMatches);
}if (patternMatches != null ) {
result.addAll$java_util_Collection(patternMatches);
}if (this.hasEverUsedPrioritized) {
result=p$1.sortSubscribers$java_util_List.apply(this, [result]);
}return result;
});

Clazz.newMeth(C$, 'getSubscribersToTopic$S', function (topic) {
{
return p$1.getSubscribers$O$java_util_Map.apply(this, [topic, this.subscribersByTopic]);
}});

Clazz.newMeth(C$, 'getSubscribers$java_util_regex_Pattern', function (pattern) {
{
return p$1.getSubscribers$O$java_util_Map.apply(this, [pattern, this.subscribersByTopicPattern]);
}});

Clazz.newMeth(C$, 'getSubscribersByPattern$S', function (topic) {
return p$1.getSubscribersByPattern$S$java_util_Map.apply(this, [topic, this.subscribersByTopicPattern]);
});

Clazz.newMeth(C$, 'getVetoSubscribers$Class', function (eventClass) {
var result=Clazz.new_($I$(4,1));
var exactMatches;
var hierarchyMatches;
{
exactMatches=this.getVetoSubscribersToClass$Class(eventClass);
hierarchyMatches=this.getVetoSubscribersToExactClass$Class(eventClass);
}if (exactMatches != null ) {
result.addAll$java_util_Collection(exactMatches);
}if (hierarchyMatches != null ) {
result.addAll$java_util_Collection(hierarchyMatches);
}if (this.hasEverUsedPrioritized) {
result=p$1.sortSubscribers$java_util_List.apply(this, [result]);
}return result;
});

Clazz.newMeth(C$, 'getVetoSubscribersToClass$Class', function (eventClass) {
var result;
{
var classMap=this.vetoListenersByClass;
result=p$1.getEventOrVetoSubscribersToClass$java_util_Map$Class.apply(this, [classMap, eventClass]);
}if (this.hasEverUsedPrioritized) {
result=p$1.sortSubscribers$java_util_List.apply(this, [result]);
}return result;
});

Clazz.newMeth(C$, 'getVetoSubscribersToExactClass$Class', function (eventClass) {
{
return p$1.getSubscribers$O$java_util_Map.apply(this, [eventClass, this.vetoListenersByExactClass]);
}});

Clazz.newMeth(C$, 'getVetoEventListeners$S', function (topicOrPattern) {
var result=Clazz.new_($I$(4,1));
var exactMatches;
var patternMatches;
{
exactMatches=this.getVetoSubscribersToTopic$S(topicOrPattern);
patternMatches=this.getVetoSubscribersByPattern$S(topicOrPattern);
}if (exactMatches != null ) {
result.addAll$java_util_Collection(exactMatches);
}if (patternMatches != null ) {
result.addAll$java_util_Collection(patternMatches);
}if (this.hasEverUsedPrioritized) {
result=p$1.sortSubscribers$java_util_List.apply(this, [result]);
}return result;
});

Clazz.newMeth(C$, 'getVetoSubscribersToTopic$S', function (topic) {
{
return p$1.getSubscribers$O$java_util_Map.apply(this, [topic, this.vetoListenersByTopic]);
}});

Clazz.newMeth(C$, 'getVetoSubscribers$S', function (topic) {
{
return this.getVetoSubscribersToTopic$S(topic);
}});

Clazz.newMeth(C$, 'getVetoSubscribers$java_util_regex_Pattern', function (topicPattern) {
{
var patternWrapper=Clazz.new_($I$(12,1).c$$java_util_regex_Pattern, [this, null, topicPattern]);
return p$1.getSubscribers$O$java_util_Map.apply(this, [patternWrapper, this.vetoListenersByTopicPattern]);
}});

Clazz.newMeth(C$, 'getVetoSubscribersByPattern$S', function (pattern) {
return p$1.getSubscribersByPattern$S$java_util_Map.apply(this, [pattern, this.vetoListenersByTopicPattern]);
});

Clazz.newMeth(C$, 'getSubscribersByPattern$S$java_util_Map', function (topic, subscribersByTopicPattern) {
var result=Clazz.new_($I$(4,1));
{
var keys=subscribersByTopicPattern.keySet$();
for (var iterator=keys.iterator$(); iterator.hasNext$(); ) {
var patternKey=iterator.next$();
if (patternKey.matches$CharSequence(topic)) {
if (C$.LOG.isLoggable$org_bushe_swing_event_Logger_Level($I$(10).DEBUG)) {
C$.LOG.debug$S("Pattern " + patternKey + " matched topic name " + topic );
}var subscribers=subscribersByTopicPattern.get$O(patternKey);
result.addAll$java_util_Collection(p$1.createCopyOfContentsRemoveWeakRefs$java_util_Collection.apply(this, [subscribers]));
}}
if (this.hasEverUsedPrioritized) {
result=p$1.sortSubscribers$java_util_List.apply(this, [result]);
}return result;
}}, p$1);

Clazz.newMeth(C$, 'getSubscribersToPattern$java_util_regex_Pattern', function (topicPattern) {
{
var patternWrapper=Clazz.new_($I$(12,1).c$$java_util_regex_Pattern, [this, null, topicPattern]);
return p$1.getSubscribers$O$java_util_Map.apply(this, [patternWrapper, this.subscribersByTopicPattern]);
}});

Clazz.newMeth(C$, 'getSubscribers$O$java_util_Map', function (classOrTopic, subscriberMap) {
var result;
{
var subscribers=subscriberMap.get$O(classOrTopic);
result=p$1.createCopyOfContentsRemoveWeakRefs$java_util_Collection.apply(this, [subscribers]);
}if (this.hasEverUsedPrioritized) {
result=p$1.sortSubscribers$java_util_List.apply(this, [result]);
}return result;
}, p$1);

Clazz.newMeth(C$, 'getEventOrVetoSubscribersToClass$java_util_Map$Class', function (classMap, eventClass) {
var result=Clazz.new_($I$(4,1));
var keys=classMap.keySet$();
for (var iterator=keys.iterator$(); iterator.hasNext$(); ) {
var cl=iterator.next$();
if (cl.isAssignableFrom$Class(eventClass)) {
if (C$.LOG.isLoggable$org_bushe_swing_event_Logger_Level($I$(10).DEBUG)) {
C$.LOG.debug$S("Hierarchical match " + cl + " matched event of class " + eventClass );
}var subscribers=classMap.get$O(cl);
result.addAll$java_util_Collection(p$1.createCopyOfContentsRemoveWeakRefs$java_util_Collection.apply(this, [subscribers]));
}}
return result;
}, p$1);

Clazz.newMeth(C$, 'getEventOrVetoSubscribersToType$java_util_Map$reflect_Type', function (typeMap, eventType) {
var result=Clazz.new_($I$(4,1));
var mapKeySet=typeMap.keySet$();
for (var mapKey, $mapKey = mapKeySet.iterator$(); $mapKey.hasNext$()&&((mapKey=($mapKey.next$())),1);) {
var subscriberType=mapKey;
if (Clazz.instanceOf(eventType, "java.lang.reflect.ParameterizedType") && Clazz.instanceOf(subscriberType, "java.lang.reflect.ParameterizedType") ) {
var subscriberPT=subscriberType;
var eventPT=eventType;
if (eventPT.getRawType$().equals$O(subscriberPT.getRawType$())) {
var mapTypeArgs=subscriberPT.getActualTypeArguments$();
var eventTypeArgs=eventPT.getActualTypeArguments$();
if (mapTypeArgs == null  || eventTypeArgs == null   || mapTypeArgs.length != eventTypeArgs.length ) {
continue;
}var parameterArgsMatch=true;
for (var argCount=0; argCount < mapTypeArgs.length; argCount++) {
var eventTypeArg=eventTypeArgs[argCount];
if (Clazz.instanceOf(eventTypeArg, "java.lang.reflect.WildcardType")) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Only simple Class parameterized types can be published, not wildcards, etc.  Published attempt made for:" + eventTypeArg]);
}var subscriberTypeArg=mapTypeArgs[argCount];
if (Clazz.instanceOf(subscriberTypeArg, "java.lang.reflect.WildcardType")) {
var wildcardSubscriberTypeArg=subscriberTypeArg;
var upperBound=wildcardSubscriberTypeArg.getUpperBounds$();
var lowerBound=wildcardSubscriberTypeArg.getLowerBounds$();
if (upperBound != null  && upperBound.length > 0 ) {
if (Clazz.instanceOf(upperBound[0], "java.lang.Class")) {
var upper=upperBound[0];
if (Clazz.instanceOf(eventTypeArg, "java.lang.Class")) {
if (!upper.isAssignableFrom$Class(eventTypeArg)) {
parameterArgsMatch=false;
break;
}} else {
parameterArgsMatch=false;
break;
}} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Only Class and Interface types are supported as types of wildcard subscriptions.  Type:" + upperBound[0]]);
}}if (lowerBound != null  && lowerBound.length > 0 ) {
if (Clazz.instanceOf(lowerBound[0], "java.lang.Class")) {
var lower=lowerBound[0];
if (Clazz.instanceOf(eventTypeArg, "java.lang.Class")) {
if (!(eventTypeArg).isAssignableFrom$Class(lower)) {
parameterArgsMatch=false;
break;
}} else {
parameterArgsMatch=false;
break;
}} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Only Class and Interface types are supported as types of wildcard subscriptions.  Type:" + upperBound[0]]);
}}} else if (!subscriberTypeArg.equals$O(eventTypeArg)) {
parameterArgsMatch=false;
break;
}}
if (parameterArgsMatch) {
if (C$.LOG.isLoggable$org_bushe_swing_event_Logger_Level($I$(10).DEBUG)) {
C$.LOG.debug$S("Exact parameterized subscriberType match for event subscriberType " + eventType);
}var subscribers=typeMap.get$O(subscriberType);
if (subscribers != null ) {
result.addAll$java_util_Collection(p$1.createCopyOfContentsRemoveWeakRefs$java_util_Collection.apply(this, [subscribers]));
}}}}}
return result;
}, p$1);

Clazz.newMeth(C$, 'checkTimeLimit$J$O$org_bushe_swing_event_EventSubscriber$org_bushe_swing_event_VetoEventListener', function (start, event, subscriber, l) {
if (this.timeThresholdForEventTimingEventPublication == null ) {
return;
}var end=System.currentTimeMillis$();
if (end - start > this.timeThresholdForEventTimingEventPublication.longValue$()) {
this.publish$O(Clazz.new_($I$(9,1).c$$O$Long$Long$Long$O$org_bushe_swing_event_EventSubscriber$org_bushe_swing_event_VetoEventListener,[this,  new Long(start),  new Long(end), this.timeThresholdForEventTimingEventPublication, event, subscriber, l]));
}}, p$1);

Clazz.newMeth(C$, 'subscribeTiming$org_bushe_swing_event_SubscriberTimingEvent', function (event) {
C$.LOG.log$org_bushe_swing_event_Logger_Level$S($I$(10).INFO, event + "");
});

Clazz.newMeth(C$, 'handleVeto$org_bushe_swing_event_VetoEventListener$O$org_bushe_swing_event_VetoTopicEventListener$S$O', function (vl, event, vtl, topic, eventObj) {
if (C$.LOG.isLoggable$org_bushe_swing_event_Logger_Level($I$(10).DEBUG)) {
if (event != null ) {
C$.LOG.debug$S("Vetoing event: class=" + event.getClass$() + ", event=" + event + ", vetoer:" + vl );
} else {
C$.LOG.debug$S("Vetoing event: topic=" + topic + ", eventObj=" + eventObj + ", vetoer:" + vtl );
}}});

Clazz.newMeth(C$, 'removeFromSetResolveWeakReferences$java_util_Map$O$O', function (map, key, toRemove) {
var subscribers=map.get$O(key);
if (subscribers == null ) {
return false;
}if (subscribers.remove$O(toRemove)) {
if (Clazz.instanceOf(toRemove, "java.lang.ref.WeakReference")) {
this.decWeakRefPlusProxySubscriberCount$();
}if (Clazz.instanceOf(toRemove, "org.bushe.swing.event.ProxySubscriber")) {
(toRemove).proxyUnsubscribed$();
this.decWeakRefPlusProxySubscriberCount$();
}return true;
}for (var iter=subscribers.iterator$(); iter.hasNext$(); ) {
var existingSubscriber=iter.next$();
if (Clazz.instanceOf(existingSubscriber, "org.bushe.swing.event.ProxySubscriber")) {
var proxy=existingSubscriber;
existingSubscriber=proxy.getProxiedSubscriber$();
if (existingSubscriber === toRemove ) {
this.removeProxySubscriber$org_bushe_swing_event_ProxySubscriber$java_util_Iterator(proxy, iter);
return true;
}}if (Clazz.instanceOf(existingSubscriber, "java.lang.ref.WeakReference")) {
var wr=existingSubscriber;
var realRef=wr.get$();
if (realRef == null ) {
iter.remove$();
this.decWeakRefPlusProxySubscriberCount$();
return true;
} else if (realRef === toRemove ) {
iter.remove$();
this.decWeakRefPlusProxySubscriberCount$();
return true;
} else if (Clazz.instanceOf(realRef, "org.bushe.swing.event.ProxySubscriber")) {
var proxy=realRef;
existingSubscriber=proxy.getProxiedSubscriber$();
if (existingSubscriber === toRemove ) {
this.removeProxySubscriber$org_bushe_swing_event_ProxySubscriber$java_util_Iterator(proxy, iter);
return true;
}}}}
return false;
}, p$1);

Clazz.newMeth(C$, 'createCopyOfContentsRemoveWeakRefs$java_util_Collection', function (subscribersOrVetoListeners) {
if (subscribersOrVetoListeners == null ) {
return null;
}var copyOfSubscribersOrVetolisteners=Clazz.new_($I$(4,1).c$$I,[subscribersOrVetoListeners.size$()]);
for (var iter=subscribersOrVetoListeners.iterator$(); iter.hasNext$(); ) {
var elem=iter.next$();
if (Clazz.instanceOf(elem, "org.bushe.swing.event.ProxySubscriber")) {
var proxy=elem;
elem=proxy.getProxiedSubscriber$();
if (elem == null ) {
this.removeProxySubscriber$org_bushe_swing_event_ProxySubscriber$java_util_Iterator(proxy, iter);
} else {
copyOfSubscribersOrVetolisteners.add$TE(proxy);
}} else if (Clazz.instanceOf(elem, "java.lang.ref.WeakReference")) {
var hardRef=(elem).get$();
if (hardRef == null ) {
iter.remove$();
this.decWeakRefPlusProxySubscriberCount$();
} else {
copyOfSubscribersOrVetolisteners.add$TE(hardRef);
}} else {
copyOfSubscribersOrVetolisteners.add$TE(elem);
}}
return copyOfSubscribersOrVetolisteners;
}, p$1);

Clazz.newMeth(C$, 'setDefaultCacheSizePerClassOrTopic$I', function (defaultCacheSizePerClassOrTopic) {
{
this.defaultCacheSizePerClassOrTopic=defaultCacheSizePerClassOrTopic;
}});

Clazz.newMeth(C$, 'getDefaultCacheSizePerClassOrTopic$', function () {
{
return this.defaultCacheSizePerClassOrTopic;
}});

Clazz.newMeth(C$, 'setCacheSizeForEventClass$Class$I', function (eventClass, cacheSize) {
{
if (this.rawCacheSizesForEventClass == null ) {
this.rawCacheSizesForEventClass=Clazz.new_($I$(8,1));
}this.rawCacheSizesForEventClass.put$TK$TV(eventClass,  new Integer(cacheSize));
this.rawCacheSizesForEventClassChanged=true;
}});

Clazz.newMeth(C$, 'getCacheSizeForEventClass$Class', function (eventClass) {
if (eventClass == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["eventClass must not be null."]);
}{
if (this.rawCacheSizesForEventClass == null  || this.rawCacheSizesForEventClass.size$() == 0 ) {
return this.getDefaultCacheSizePerClassOrTopic$();
}if (this.cacheSizesForEventClass == null ) {
this.cacheSizesForEventClass=Clazz.new_($I$(8,1));
}if (this.rawCacheSizesForEventClassChanged) {
this.cacheSizesForEventClass.clear$();
this.cacheSizesForEventClass.putAll$java_util_Map(this.rawCacheSizesForEventClass);
this.rawCacheSizesForEventClassChanged=false;
}var size=this.cacheSizesForEventClass.get$O(eventClass);
if (size != null ) {
return size.intValue$();
} else {
var parent=eventClass.getSuperclass$();
while (parent != null ){
var parentSize=this.cacheSizesForEventClass.get$O(parent);
if (parentSize != null ) {
this.cacheSizesForEventClass.put$TK$TV(eventClass, parentSize);
return parentSize.intValue$();
}parent=parent.getSuperclass$();
}
var interfaces=eventClass.getInterfaces$();
for (var i=0; i < interfaces.length; i++) {
var anInterface=interfaces[i];
var interfaceSize=this.cacheSizesForEventClass.get$O(anInterface);
if (interfaceSize != null ) {
this.cacheSizesForEventClass.put$TK$TV(eventClass, interfaceSize);
return interfaceSize.intValue$();
}}
}return this.getDefaultCacheSizePerClassOrTopic$();
}});

Clazz.newMeth(C$, 'setCacheSizeForTopic$S$I', function (topicName, cacheSize) {
{
if (this.rawCacheSizesForTopic == null ) {
this.rawCacheSizesForTopic=Clazz.new_($I$(8,1));
}this.rawCacheSizesForTopic.put$TK$TV(topicName,  new Integer(cacheSize));
this.rawCacheSizesForTopicChanged=true;
}});

Clazz.newMeth(C$, 'setCacheSizeForTopic$java_util_regex_Pattern$I', function (pattern, cacheSize) {
{
if (this.rawCacheSizesForPattern == null ) {
this.rawCacheSizesForPattern=Clazz.new_($I$(8,1));
}var patternWrapper=Clazz.new_($I$(12,1).c$$java_util_regex_Pattern, [this, null, pattern]);
this.rawCacheSizesForPattern.put$TK$TV(patternWrapper,  new Integer(cacheSize));
this.rawCacheSizesForPatternChanged=true;
}});

Clazz.newMeth(C$, 'getCacheSizeForTopic$S', function (topic) {
if (topic == null ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["topic must not be null."]);
}{
if ((this.rawCacheSizesForTopic == null  || (this.rawCacheSizesForTopic != null  && this.rawCacheSizesForTopic.size$() == 0 ) ) && (this.rawCacheSizesForPattern == null  || (this.rawCacheSizesForPattern != null  && this.rawCacheSizesForPattern.size$() == 0 ) ) ) {
return this.getDefaultCacheSizePerClassOrTopic$();
}if (this.cacheSizesForTopic == null ) {
this.cacheSizesForTopic=Clazz.new_($I$(8,1));
}if (this.rawCacheSizesForTopicChanged || this.rawCacheSizesForPatternChanged ) {
this.cacheSizesForTopic.clear$();
this.cacheSizesForTopic.putAll$java_util_Map(this.rawCacheSizesForTopic);
this.rawCacheSizesForTopicChanged=false;
this.rawCacheSizesForPatternChanged=false;
}var size=this.cacheSizesForTopic.get$O(topic);
if (size != null ) {
return (size).valueOf();
} else {
if (this.rawCacheSizesForPattern != null ) {
var patterns=this.rawCacheSizesForPattern.keySet$();
for (var iterator=patterns.iterator$(); iterator.hasNext$(); ) {
var pattern=iterator.next$();
if (pattern.matches$CharSequence(topic)) {
size=this.rawCacheSizesForPattern.get$O(pattern);
this.cacheSizesForTopic.put$TK$TV(topic, size);
return (size).valueOf();
}}
}}return this.getDefaultCacheSizePerClassOrTopic$();
}});

Clazz.newMeth(C$, 'getLastEvent$Class', function (eventClass) {
if (eventClass.isInterface$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Interfaces are not accepted in get last event, use a specific event class."]);
}{
var eventCache=this.cacheByEvent.get$O(eventClass);
if (eventCache == null  || eventCache.size$() == 0 ) {
return null;
}return eventCache.get$I(0);
}});

Clazz.newMeth(C$, 'getCachedEvents$Class', function (eventClass) {
if (eventClass.isInterface$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Interfaces are not accepted in get last event, use a specific event class."]);
}{
var eventCache=this.cacheByEvent.get$O(eventClass);
if (eventCache == null  || eventCache.size$() == 0 ) {
return null;
}return eventCache;
}});

Clazz.newMeth(C$, 'getLastTopicData$S', function (topic) {
{
var topicCache=this.cacheByTopic.get$O(topic);
if (topicCache == null  || topicCache.size$() == 0 ) {
return null;
}return topicCache.get$I(0);
}});

Clazz.newMeth(C$, 'getCachedTopicData$S', function (topic) {
{
var topicCache=this.cacheByTopic.get$O(topic);
if (topicCache == null  || topicCache.size$() == 0 ) {
return null;
}return topicCache;
}});

Clazz.newMeth(C$, 'clearCache$Class', function (eventClassToClear) {
{
var classes=this.cacheByEvent.keySet$();
for (var iterator=classes.iterator$(); iterator.hasNext$(); ) {
var cachedClass=iterator.next$();
if (eventClassToClear.isAssignableFrom$Class(cachedClass)) {
iterator.remove$();
}}
}});

Clazz.newMeth(C$, 'clearCache$S', function (topic) {
{
this.cacheByTopic.remove$O(topic);
}});

Clazz.newMeth(C$, 'clearCache$java_util_regex_Pattern', function (pattern) {
{
var classes=this.cacheByTopic.keySet$();
for (var iterator=classes.iterator$(); iterator.hasNext$(); ) {
var cachedTopic=iterator.next$();
if (pattern.matcher$CharSequence(cachedTopic).matches$()) {
iterator.remove$();
}}
}});

Clazz.newMeth(C$, 'clearCache$', function () {
{
this.cacheByEvent.clear$();
this.cacheByTopic.clear$();
}});

Clazz.newMeth(C$, 'subscribeVetoException$O$S$O$Throwable$StackTraceElementA$org_bushe_swing_event_VetoEventListener', function (event, topic, eventObj, e, callingStack, vetoer) {
var str="EventService veto event listener r:" + vetoer;
if (vetoer != null ) {
str=str + ".  Vetoer class:" + vetoer.getClass$() ;
}this.handleException$S$O$S$O$Throwable$StackTraceElementA$S("vetoing", event, topic, eventObj, e, callingStack, str);
});

Clazz.newMeth(C$, 'onEventException$S$O$Throwable$StackTraceElementA$org_bushe_swing_event_EventTopicSubscriber', function (topic, eventObj, e, callingStack, eventTopicSubscriber) {
var str="EventService topic subscriber:" + eventTopicSubscriber;
if (eventTopicSubscriber != null ) {
str=str + ".  Subscriber class:" + eventTopicSubscriber.getClass$() ;
}this.handleException$S$O$S$O$Throwable$StackTraceElementA$S("handling event", null, topic, eventObj, e, callingStack, str);
});

Clazz.newMeth(C$, 'handleException$O$Throwable$StackTraceElementA$org_bushe_swing_event_EventSubscriber', function (event, e, callingStack, eventSubscriber) {
var str="EventService subscriber:" + eventSubscriber;
if (eventSubscriber != null ) {
str=str + ".  Subscriber class:" + eventSubscriber.getClass$() ;
}this.handleException$S$O$S$O$Throwable$StackTraceElementA$S("handling event topic", event, null, null, e, callingStack, str);
});

Clazz.newMeth(C$, 'handleException$S$O$S$O$Throwable$StackTraceElementA$S', function (action, event, topic, eventObj, e, callingStack, sourceString) {
var eventClassString=(event == null  ? "none" : event.getClass$().getName$());
var eventString=event + "";
var contextMsg="Exception " + action + " event class=" + eventClassString + ", event=" + eventString + ", topic=" + topic + ", eventObj=" + eventObj ;
var clientEx=Clazz.new_(Clazz.load('org.bushe.swing.exception.SwingException').c$$S$Throwable$StackTraceElementA,[contextMsg, e, callingStack]);
var msg="Exception thrown by;" + sourceString;
C$.LOG.log$org_bushe_swing_event_Logger_Level$S$Throwable($I$(10).WARN, msg, clientEx);
});

Clazz.newMeth(C$, 'getRealSubscriberAndCleanStaleSubscriberIfNecessary$java_util_Iterator$O', function (iterator, existingSubscriber) {
var existingProxySubscriber=null;
if (Clazz.instanceOf(existingSubscriber, "java.lang.ref.WeakReference")) {
existingSubscriber=(existingSubscriber).get$();
if (existingSubscriber == null ) {
iterator.remove$();
this.decWeakRefPlusProxySubscriberCount$();
}}if (Clazz.instanceOf(existingSubscriber, "org.bushe.swing.event.ProxySubscriber")) {
existingProxySubscriber=existingSubscriber;
existingSubscriber=existingProxySubscriber.getProxiedSubscriber$();
if (existingProxySubscriber == null ) {
this.removeProxySubscriber$org_bushe_swing_event_ProxySubscriber$java_util_Iterator(existingProxySubscriber, iterator);
}}return existingSubscriber;
});

Clazz.newMeth(C$, 'removeProxySubscriber$org_bushe_swing_event_ProxySubscriber$java_util_Iterator', function (proxy, iter) {
iter.remove$();
proxy.proxyUnsubscribed$();
this.decWeakRefPlusProxySubscriberCount$();
});

Clazz.newMeth(C$, 'incWeakRefPlusProxySubscriberCount$', function () {
{
this.weakRefPlusProxySubscriberCount++;
if (this.cleanupStartThreshhold == null  || this.cleanupPeriodMS == null  ) {
return;
}if (this.weakRefPlusProxySubscriberCount >= (this.cleanupStartThreshhold).valueOf() ) {
p$1.startCleanup.apply(this, []);
}}});

Clazz.newMeth(C$, 'decWeakRefPlusProxySubscriberCount$', function () {
{
this.weakRefPlusProxySubscriberCount--;
if (this.weakRefPlusProxySubscriberCount < 0) {
this.weakRefPlusProxySubscriberCount=0;
}}});

Clazz.newMeth(C$, 'startCleanup', function () {
{
if (this.cleanupTimer == null ) {
this.cleanupTimer=Clazz.new_($I$(17,1));
}if (this.cleanupTimerTask == null ) {
this.cleanupTimerTask=Clazz.new_($I$(18,1), [this, null]);
this.cleanupTimer.schedule$java_util_TimerTask$J$J(this.cleanupTimerTask, 0, (this.cleanupPeriodMS).valueOf());
}}}, p$1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ThreadSafeEventService, "CleanupTimerTask", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'java.util.TimerTask');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'run$', function () {
{
this.this$0.publish$O.apply(this.this$0, [Clazz.new_($I$(1,1).c$$org_bushe_swing_event_CleanupEvent_Status$I$Integer,[$I$(2).STARTING, this.this$0.weakRefPlusProxySubscriberCount, null])]);
if (this.this$0.weakRefPlusProxySubscriberCount <= (this.this$0.cleanupStopThreshold).valueOf() ) {
this.cancel$();
this.this$0.cleanupTimer=null;
this.this$0.cleanupTimerTask=null;
$I$(3).LOG.debug$S("Cancelled scheduled weak reference and proxy cleanup.");
this.this$0.publish$O.apply(this.this$0, [Clazz.new_($I$(1,1).c$$org_bushe_swing_event_CleanupEvent_Status$I$Integer,[$I$(2).UNDER_STOP_THRESHOLD_CLEANING_CANCELLED, this.this$0.weakRefPlusProxySubscriberCount, null])]);
return;
}$I$(3).LOG.debug$S("Starting a weak reference and proxy cleanup.");
this.this$0.publish$O.apply(this.this$0, [Clazz.new_($I$(1,1).c$$org_bushe_swing_event_CleanupEvent_Status$I$Integer,[$I$(2).OVER_STOP_THRESHOLD_CLEANING_BEGUN, this.this$0.weakRefPlusProxySubscriberCount, null])]);
var allSubscriberMaps=Clazz.new_(1,{E:"java.util.Map"},$I$(4,1));
allSubscriberMaps.add$TE(this.this$0.subscribersByEventType);
allSubscriberMaps.add$TE(this.this$0.subscribersByEventClass);
allSubscriberMaps.add$TE(this.this$0.subscribersByExactEventClass);
allSubscriberMaps.add$TE(this.this$0.subscribersByTopic);
allSubscriberMaps.add$TE(this.this$0.subscribersByTopicPattern);
allSubscriberMaps.add$TE(this.this$0.vetoListenersByClass);
allSubscriberMaps.add$TE(this.this$0.vetoListenersByExactClass);
allSubscriberMaps.add$TE(this.this$0.vetoListenersByTopic);
allSubscriberMaps.add$TE(this.this$0.vetoListenersByTopicPattern);
var staleCount=0;
for (var subscriberMap, $subscriberMap = allSubscriberMaps.iterator$(); $subscriberMap.hasNext$()&&((subscriberMap=($subscriberMap.next$())),1);) {
var subscriptions=subscriberMap.keySet$();
for (var subscription, $subscription = subscriptions.iterator$(); $subscription.hasNext$()&&((subscription=($subscription.next$())),1);) {
var subscribers=subscriberMap.get$O(subscription);
for (var iter=subscribers.iterator$(); iter.hasNext$(); ) {
var subscriber=iter.next$();
var realSubscriber=this.this$0.getRealSubscriberAndCleanStaleSubscriberIfNecessary$java_util_Iterator$O.apply(this.this$0, [iter, subscriber]);
if (realSubscriber == null ) {
staleCount++;
}}
}
}
this.this$0.publish$O.apply(this.this$0, [Clazz.new_($I$(1,1).c$$org_bushe_swing_event_CleanupEvent_Status$I$Integer,[$I$(2).FINISHED_CLEANING, this.this$0.weakRefPlusProxySubscriberCount, new Integer(staleCount)])]);
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ThreadSafeEventService, "PrioritizedSubscriberComparator", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, null, 'java.util.Comparator');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['compare$org_bushe_swing_event_Prioritized$org_bushe_swing_event_Prioritized','compare$','compare$TT$TT'], function (prioritized1, prioritized2) {
if (prioritized1 == null ) {
return -1;
}if (prioritized2 == null ) {
return 1;
}if (prioritized1.getPriority$() < prioritized2.getPriority$()) {
return -1;
} else if (prioritized1.getPriority$() > prioritized2.getPriority$()) {
return 1;
} else {
return 0;
}});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.ThreadSafeEventService, "PatternWrapper", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['pattern','java.util.regex.Pattern']]]

Clazz.newMeth(C$, 'c$$java_util_regex_Pattern', function (pat) {
;C$.$init$.apply(this);
this.pattern=pat;
}, 1);

Clazz.newMeth(C$, 'matches$CharSequence', function (input) {
return this.pattern.matcher$CharSequence(input).matches$();
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (this === o ) {
return true;
}if (o == null  || this.getClass$() !== o.getClass$()  ) {
return false;
}var that=o;
if (this.pattern != null ) {
if (!this.pattern.equals$O(that.pattern)) {
return this.pattern.pattern$() != null  && this.pattern.pattern$().equals$O(this.pattern.pattern$()) ;
}} else {
if (that.pattern != null ) {
return false;
}}return true;
});

Clazz.newMeth(C$, 'hashCode$', function () {
if (this.pattern != null  && this.pattern.pattern$() != null  ) {
return this.pattern.pattern$().hashCode$();
}return (this.pattern != null  ? this.pattern.hashCode$() : 0);
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
