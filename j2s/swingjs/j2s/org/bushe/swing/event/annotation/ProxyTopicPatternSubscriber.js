(function(){var P$=Clazz.newPackage("org.bushe.swing.event.annotation"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ProxyTopicPatternSubscriber", null, 'org.bushe.swing.event.annotation.ProxyTopicSubscriber');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['pattern','java.util.regex.Pattern']]]

Clazz.newMeth(C$, 'c$$O$reflect_Method$org_bushe_swing_event_annotation_ReferenceStrength$org_bushe_swing_event_EventService$S$java_util_regex_Pattern$Z', function (proxiedSubscriber, subscriptionMethod, referenceStrength, es, patternString, pattern, veto) {
C$.c$$O$reflect_Method$org_bushe_swing_event_annotation_ReferenceStrength$I$org_bushe_swing_event_EventService$S$java_util_regex_Pattern$Z.apply(this, [proxiedSubscriber, subscriptionMethod, referenceStrength, 0, es, patternString, pattern, veto]);
}, 1);

Clazz.newMeth(C$, 'c$$O$reflect_Method$org_bushe_swing_event_annotation_ReferenceStrength$I$org_bushe_swing_event_EventService$S$java_util_regex_Pattern$Z', function (proxiedSubscriber, subscriptionMethod, referenceStrength, priority, es, patternString, pattern, veto) {
;C$.superclazz.c$$O$reflect_Method$org_bushe_swing_event_annotation_ReferenceStrength$I$org_bushe_swing_event_EventService$S$Z.apply(this,[proxiedSubscriber, subscriptionMethod, referenceStrength, priority, es, patternString, veto]);C$.$init$.apply(this);
this.pattern=pattern;
}, 1);

Clazz.newMeth(C$, 'unsubscribe$S', function (topic) {
if (this.veto) {
this.getEventService$().unsubscribeVetoListener$java_util_regex_Pattern$org_bushe_swing_event_VetoTopicEventListener(this.pattern, this);
} else {
this.getEventService$().unsubscribe$java_util_regex_Pattern$org_bushe_swing_event_EventTopicSubscriber(this.pattern, this);
}this.pattern=null;
});

Clazz.newMeth(C$, 'equals$O', function (o) {
if (this === o ) {
return true;
}if (o == null  || this.getClass$() !== o.getClass$()  ) {
return false;
}if (!C$.superclazz.prototype.equals$O.apply(this, [o])) {
return false;
}var that=o;
if (this.pattern != null  ? !this.pattern.equals$O(that.pattern) : that.pattern != null ) {
return false;
}return true;
});

Clazz.newMeth(C$, 'toString', function () {
return "ProxyTopicPatternSubscriber{pattern=" + this.pattern + "veto=" + this.veto + "realSubscriber=" + this.getProxiedSubscriber$() + ", subscriptionMethod=" + this.getSubscriptionMethod$() + ", referenceStrength=" + this.getReferenceStrength$() + ", eventService=" + this.getEventService$() + '}' ;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
