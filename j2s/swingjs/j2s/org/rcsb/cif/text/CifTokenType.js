(function(){var P$=Clazz.newPackage("org.rcsb.cif.text"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "CifTokenType", null, 'Enum');

C$.$clinit$=1;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "DATA", 0, []);
Clazz.newEnumConst($vals, C$.c$, "SAVE", 1, []);
Clazz.newEnumConst($vals, C$.c$, "LOOP", 2, []);
Clazz.newEnumConst($vals, C$.c$, "VALUE", 3, []);
Clazz.newEnumConst($vals, C$.c$, "COLUMN_NAME", 4, []);
Clazz.newEnumConst($vals, C$.c$, "COMMENT", 5, []);
Clazz.newEnumConst($vals, C$.c$, "END", 6, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:53 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
