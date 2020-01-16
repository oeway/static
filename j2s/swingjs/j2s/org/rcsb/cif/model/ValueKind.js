(function(){var P$=Clazz.newPackage("org.rcsb.cif.model"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "ValueKind", null, 'Enum');

C$.$clinit$=1;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "PRESENT", 0, []);
Clazz.newEnumConst($vals, C$.c$, "NOT_PRESENT", 1, []);
Clazz.newEnumConst($vals, C$.c$, "UNKNOWN", 2, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:31 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
