(function(){var P$=Clazz.newPackage("org.scijava.display.event"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "DisplayUpdatedEvent", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.scijava.display.event.DisplayEvent');
C$.$classes$=[['DisplayUpdateLevel',25]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['level','org.scijava.display.event.DisplayUpdatedEvent.DisplayUpdateLevel']]]

Clazz.newMeth(C$, 'c$$org_scijava_display_Display$org_scijava_display_event_DisplayUpdatedEvent_DisplayUpdateLevel', function (display, level) {
;C$.superclazz.c$$org_scijava_display_Display.apply(this,[display]);C$.$init$.apply(this);
this.level=level;
}, 1);

Clazz.newMeth(C$, 'getLevel$', function () {
return this.level;
});
;
(function(){/*e*/var C$=Clazz.newClass(P$.DisplayUpdatedEvent, "DisplayUpdateLevel", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "UPDATE", 0, []);
Clazz.newEnumConst($vals, C$.c$, "REBUILD", 1, []);
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
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:24 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
