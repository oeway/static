(function(){var P$=Clazz.newPackage("org.scijava.thread"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "ThreadService", function(){
}, null, ['org.scijava.service.SciJavaService', 'java.util.concurrent.ThreadFactory']);
C$.$classes$=[['ThreadContext',25]];

C$.$clinit$=2;
;
(function(){/*e*/var C$=Clazz.newClass(P$.ThreadService, "ThreadContext", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "SAME", 0, []);
Clazz.newEnumConst($vals, C$.c$, "OTHER", 1, []);
Clazz.newEnumConst($vals, C$.c$, "NONE", 2, []);
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