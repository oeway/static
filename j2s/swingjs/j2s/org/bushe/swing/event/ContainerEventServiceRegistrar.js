(function(){var P$=Clazz.newPackage("org.bushe.swing.event"),I$=[[0,'org.bushe.swing.event.ContainerEventServiceFinder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ContainerEventServiceRegistrar");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['jComp','javax.swing.JComponent','eventSubscriber','org.bushe.swing.event.EventSubscriber','eventClasses','Class[]','eventTopicSubscriber','org.bushe.swing.event.EventTopicSubscriber','topics','String[]','containerEventService','org.bushe.swing.event.EventService']]]

Clazz.newMeth(C$, 'c$$javax_swing_JComponent', function (jComp) {
C$.c$$javax_swing_JComponent$org_bushe_swing_event_EventSubscriber$ClassA$org_bushe_swing_event_EventTopicSubscriber$SA.apply(this, [jComp, null, null, null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JComponent$org_bushe_swing_event_EventSubscriber$Class', function (jComp, eventSubscriber, eventClass) {
C$.c$$javax_swing_JComponent$org_bushe_swing_event_EventSubscriber$ClassA$org_bushe_swing_event_EventTopicSubscriber$SA.apply(this, [jComp, eventSubscriber, Clazz.array(Class, -1, [eventClass]), null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JComponent$org_bushe_swing_event_EventTopicSubscriber$S', function (jComp, eventTopicSubscriber, topic) {
C$.c$$javax_swing_JComponent$org_bushe_swing_event_EventSubscriber$ClassA$org_bushe_swing_event_EventTopicSubscriber$SA.apply(this, [jComp, null, null, eventTopicSubscriber, Clazz.array(String, -1, [topic])]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JComponent$org_bushe_swing_event_EventSubscriber$ClassA', function (jComp, eventSubscriber, eventClasses) {
C$.c$$javax_swing_JComponent$org_bushe_swing_event_EventSubscriber$ClassA$org_bushe_swing_event_EventTopicSubscriber$SA.apply(this, [jComp, eventSubscriber, eventClasses, null, null]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JComponent$org_bushe_swing_event_EventTopicSubscriber$SA', function (jComp, eventTopicSubscriber, topics) {
C$.c$$javax_swing_JComponent$org_bushe_swing_event_EventSubscriber$ClassA$org_bushe_swing_event_EventTopicSubscriber$SA.apply(this, [jComp, null, null, eventTopicSubscriber, topics]);
}, 1);

Clazz.newMeth(C$, 'c$$javax_swing_JComponent$org_bushe_swing_event_EventSubscriber$ClassA$org_bushe_swing_event_EventTopicSubscriber$SA', function (jComp, eventSubscriber, eventClasses, eventTopicSubscriber, topics) {
;C$.$init$.apply(this);
this.jComp=jComp;
this.eventSubscriber=eventSubscriber;
this.eventClasses=eventClasses;
this.eventTopicSubscriber=eventTopicSubscriber;
this.topics=topics;
if (jComp == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["JComponent is null"]);
}this.updateContainerEventService$();
jComp.addHierarchyListener$java_awt_event_HierarchyListener(((P$.ContainerEventServiceRegistrar$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "ContainerEventServiceRegistrar$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.HierarchyListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['hierarchyChanged$java_awt_event_HierarchyEvent','hierarchyChanged$'], function (e) {
this.b$['org.bushe.swing.event.ContainerEventServiceRegistrar'].updateContainerEventService$.apply(this.b$['org.bushe.swing.event.ContainerEventServiceRegistrar'], []);
});
})()
), Clazz.new_(P$.ContainerEventServiceRegistrar$1.$init$, [this, null])));
jComp.addContainerListener$java_awt_event_ContainerListener(((P$.ContainerEventServiceRegistrar$2||
(function(){/*a*/var C$=Clazz.newClass(P$, "ContainerEventServiceRegistrar$2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.awt.event.ContainerListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'componentAdded$java_awt_event_ContainerEvent', function (e) {
this.b$['org.bushe.swing.event.ContainerEventServiceRegistrar'].updateContainerEventService$.apply(this.b$['org.bushe.swing.event.ContainerEventServiceRegistrar'], []);
});

Clazz.newMeth(C$, 'componentRemoved$java_awt_event_ContainerEvent', function (e) {
this.b$['org.bushe.swing.event.ContainerEventServiceRegistrar'].updateContainerEventService$.apply(this.b$['org.bushe.swing.event.ContainerEventServiceRegistrar'], []);
});
})()
), Clazz.new_(P$.ContainerEventServiceRegistrar$2.$init$, [this, null])));
jComp.addAncestorListener$javax_swing_event_AncestorListener(((P$.ContainerEventServiceRegistrar$3||
(function(){/*a*/var C$=Clazz.newClass(P$, "ContainerEventServiceRegistrar$3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'javax.swing.event.AncestorListener', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'ancestorAdded$javax_swing_event_AncestorEvent', function (event) {
this.b$['org.bushe.swing.event.ContainerEventServiceRegistrar'].updateContainerEventService$.apply(this.b$['org.bushe.swing.event.ContainerEventServiceRegistrar'], []);
});

Clazz.newMeth(C$, 'ancestorMoved$javax_swing_event_AncestorEvent', function (event) {
});

Clazz.newMeth(C$, 'ancestorRemoved$javax_swing_event_AncestorEvent', function (event) {
this.b$['org.bushe.swing.event.ContainerEventServiceRegistrar'].updateContainerEventService$.apply(this.b$['org.bushe.swing.event.ContainerEventServiceRegistrar'], []);
});
})()
), Clazz.new_(P$.ContainerEventServiceRegistrar$3.$init$, [this, null])));
}, 1);

Clazz.newMeth(C$, 'updateContainerEventService$', function () {
if (this.containerEventService != null ) {
if (this.eventClasses != null ) {
for (var i=0; i < this.eventClasses.length; i++) {
var eventClass=this.eventClasses[i];
this.containerEventService.unsubscribe$Class$org_bushe_swing_event_EventSubscriber(eventClass, this.eventSubscriber);
}
}if (this.topics != null ) {
for (var i=0; i < this.topics.length; i++) {
var topic=this.topics[i];
this.containerEventService.unsubscribe$S$org_bushe_swing_event_EventTopicSubscriber(topic, this.eventTopicSubscriber);
}
}}this.containerEventService=$I$(1).getEventService$java_awt_Component(this.jComp);
if (this.containerEventService != null ) {
if (this.eventClasses != null ) {
for (var i=0; i < this.eventClasses.length; i++) {
var eventClass=this.eventClasses[i];
this.containerEventService.subscribe$Class$org_bushe_swing_event_EventSubscriber(eventClass, this.eventSubscriber);
}
}if (this.topics != null ) {
for (var i=0; i < this.topics.length; i++) {
var topic=this.topics[i];
this.containerEventService.subscribe$S$org_bushe_swing_event_EventTopicSubscriber(topic, this.eventTopicSubscriber);
}
}}});

Clazz.newMeth(C$, 'getContainerEventService$', function () {
if (this.containerEventService != null ) {
return this.containerEventService;
} else {
this.updateContainerEventService$();
return this.containerEventService;
}});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
