(function(){var P$=Clazz.newPackage("org.scijava.ui"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "Arrangeable", function(){
});
C$.$classes$=[['Arrangement',25]];
;
(function(){/*e*/var C$=Clazz.newClass(P$.Arrangeable, "Arrangement", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "VERTICAL", 0, []);
Clazz.newEnumConst($vals, C$.c$, "HORIZONTAL", 1, []);
Clazz.newEnumConst($vals, C$.c$, "CASCADE", 2, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1