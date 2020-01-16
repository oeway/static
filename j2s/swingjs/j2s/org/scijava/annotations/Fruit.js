(function(){var P$=Clazz.newPackage("org.scijava.annotations"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "Fruit", null, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "Apple", 0, []);
Clazz.newEnumConst($vals, C$.c$, "Orange", 1, []);
Clazz.newEnumConst($vals, C$.c$, "Banana", 2, []);
Clazz.newEnumConst($vals, C$.c$, "Pear", 3, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-29 13:41:38 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
