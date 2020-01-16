(function(){var P$=Clazz.newPackage("java.time.format"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "TextStyle", null, 'Enum');

C$.$clinit$=1;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$S$I, "FULL", 0, [, 0]);
Clazz.newEnumConst($vals, C$.c$$S$I, "FULL_STANDALONE", 1, [, 0]);
Clazz.newEnumConst($vals, C$.c$$S$I, "SHORT", 2, [, 1]);
Clazz.newEnumConst($vals, C$.c$$S$I, "SHORT_STANDALONE", 3, [, 1]);
Clazz.newEnumConst($vals, C$.c$$S$I, "NARROW", 4, [, 1]);
Clazz.newEnumConst($vals, C$.c$$S$I, "NARROW_STANDALONE", 5, [, 1]);
}

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.calendarStyle=0;
this.zoneNameStyleIndex=0;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (calendarStyle, zoneNameStyleIndex) {
;C$.$init$.apply(this);
this.calendarStyle=calendarStyle;
this.zoneNameStyleIndex=zoneNameStyleIndex;
}, 1);

Clazz.newMeth(C$, 'isStandalone$', function () {
return (this.ordinal$() & 1) == 1;
});

Clazz.newMeth(C$, 'asStandalone$', function () {
return C$.values$()[this.ordinal$() | 1];
});

Clazz.newMeth(C$, 'asNormal$', function () {
return C$.values$()[this.ordinal$() & ~1];
});

Clazz.newMeth(C$, 'toCalendarStyle$', function () {
return this.calendarStyle;
});

Clazz.newMeth(C$, 'zoneNameStyleIndex$', function () {
return this.zoneNameStyleIndex;
});

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.5-v3');//Created 2019-12-13 10:18:57 Java2ScriptVisitor version 3.2.5-v3 net.sf.j2s.core.jar version 3.2.5-v3
