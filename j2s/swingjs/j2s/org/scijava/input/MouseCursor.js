(function(){var P$=Clazz.newPackage("org.scijava.input"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "MouseCursor", null, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "DEFAULT", 0, []);
Clazz.newEnumConst($vals, C$.c$, "OFF", 1, []);
Clazz.newEnumConst($vals, C$.c$, "CUSTOM", 2, []);
Clazz.newEnumConst($vals, C$.c$, "CROSSHAIR", 3, []);
Clazz.newEnumConst($vals, C$.c$, "HAND", 4, []);
Clazz.newEnumConst($vals, C$.c$, "MOVE", 5, []);
Clazz.newEnumConst($vals, C$.c$, "TEXT", 6, []);
Clazz.newEnumConst($vals, C$.c$, "WAIT", 7, []);
Clazz.newEnumConst($vals, C$.c$, "N_RESIZE", 8, []);
Clazz.newEnumConst($vals, C$.c$, "S_RESIZE", 9, []);
Clazz.newEnumConst($vals, C$.c$, "W_RESIZE", 10, []);
Clazz.newEnumConst($vals, C$.c$, "E_RESIZE", 11, []);
Clazz.newEnumConst($vals, C$.c$, "NW_RESIZE", 12, []);
Clazz.newEnumConst($vals, C$.c$, "NE_RESIZE", 13, []);
Clazz.newEnumConst($vals, C$.c$, "SW_RESIZE", 14, []);
Clazz.newEnumConst($vals, C$.c$, "SE_RESIZE", 15, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:25 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
