(function(){var P$=Clazz.newPackage("javax.swing"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "SortOrder", null, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "ASCENDING", 0, []);
Clazz.newEnumConst($vals, C$.c$, "DESCENDING", 1, []);
Clazz.newEnumConst($vals, C$.c$, "UNSORTED", 2, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
