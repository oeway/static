(function(){var P$=Clazz.newPackage("java.time.format"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "FormatStyle", null, 'Enum');

C$.$clinit$=1;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "FULL", 0, []);
Clazz.newEnumConst($vals, C$.c$, "LONG", 1, []);
Clazz.newEnumConst($vals, C$.c$, "MEDIUM", 2, []);
Clazz.newEnumConst($vals, C$.c$, "SHORT", 3, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.5-v3');//Created 2019-12-13 10:18:57 Java2ScriptVisitor version 3.2.5-v3 net.sf.j2s.core.jar version 3.2.5-v3
