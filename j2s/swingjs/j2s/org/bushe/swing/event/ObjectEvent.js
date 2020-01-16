(function(){var P$=Clazz.newPackage("org.bushe.swing.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "ObjectEvent", null, 'org.bushe.swing.event.AbstractEventServiceEvent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['eventObject','java.lang.Object']]]

Clazz.newMeth(C$, 'c$$O$O', function (sourceObject, payload) {
;C$.superclazz.c$$O.apply(this,[sourceObject]);C$.$init$.apply(this);
this.eventObject=payload;
}, 1);

Clazz.newMeth(C$, 'getEventObject$', function () {
return this.eventObject;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
