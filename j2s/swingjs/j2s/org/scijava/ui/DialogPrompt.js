(function(){var P$=Clazz.newPackage("org.scijava.ui"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "DialogPrompt", function(){
});
C$.$classes$=[['MessageType',25],['OptionType',25],['Result',25]];
;
(function(){/*e*/var C$=Clazz.newClass(P$.DialogPrompt, "MessageType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "ERROR_MESSAGE", 0, []);
Clazz.newEnumConst($vals, C$.c$, "INFORMATION_MESSAGE", 1, []);
Clazz.newEnumConst($vals, C$.c$, "WARNING_MESSAGE", 2, []);
Clazz.newEnumConst($vals, C$.c$, "QUESTION_MESSAGE", 3, []);
Clazz.newEnumConst($vals, C$.c$, "PLAIN_MESSAGE", 4, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*e*/var C$=Clazz.newClass(P$.DialogPrompt, "OptionType", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "DEFAULT_OPTION", 0, []);
Clazz.newEnumConst($vals, C$.c$, "YES_NO_OPTION", 1, []);
Clazz.newEnumConst($vals, C$.c$, "YES_NO_CANCEL_OPTION", 2, []);
Clazz.newEnumConst($vals, C$.c$, "OK_CANCEL_OPTION", 3, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*e*/var C$=Clazz.newClass(P$.DialogPrompt, "Result", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "YES_OPTION", 0, []);
Clazz.newEnumConst($vals, C$.c$, "NO_OPTION", 1, []);
Clazz.newEnumConst($vals, C$.c$, "CANCEL_OPTION", 2, []);
Clazz.newEnumConst($vals, C$.c$, "OK_OPTION", 3, []);
Clazz.newEnumConst($vals, C$.c$, "CLOSED_OPTION", 4, []);
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
