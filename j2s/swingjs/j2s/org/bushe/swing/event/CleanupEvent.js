(function(){var P$=Clazz.newPackage("org.bushe.swing.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CleanupEvent", function(){
Clazz.newInstance(this, arguments,0,C$);
});
C$.$classes$=[['Status',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['totalWeakRefsAndProxies'],'O',['status','org.bushe.swing.event.CleanupEvent.Status','numStaleSubscribersCleaned','Integer']]]

Clazz.newMeth(C$, 'c$$org_bushe_swing_event_CleanupEvent_Status$I$Integer', function (status, totalWeakRefsAndProxies, numStaleSubscribersCleaned) {
;C$.$init$.apply(this);
this.status=status;
this.totalWeakRefsAndProxies=totalWeakRefsAndProxies;
this.numStaleSubscribersCleaned=numStaleSubscribersCleaned;
}, 1);

Clazz.newMeth(C$, 'getStatus$', function () {
return this.status;
});

Clazz.newMeth(C$, 'getTotalWeakRefsAndProxies$', function () {
return this.totalWeakRefsAndProxies;
});

Clazz.newMeth(C$, 'getNumStaleSubscribersCleaned$', function () {
return this.numStaleSubscribersCleaned;
});
;
(function(){/*e*/var C$=Clazz.newClass(P$.CleanupEvent, "Status", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "STARTING", 0, []);
Clazz.newEnumConst($vals, C$.c$, "OVER_STOP_THRESHOLD_CLEANING_BEGUN", 1, []);
Clazz.newEnumConst($vals, C$.c$, "UNDER_STOP_THRESHOLD_CLEANING_CANCELLED", 2, []);
Clazz.newEnumConst($vals, C$.c$, "FINISHED_CLEANING", 3, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
