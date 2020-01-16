(function(){var P$=Clazz.newPackage("net.imagej.render"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "TextRenderer", function(){
});
C$.$classes$=[['FontFamily',25],['FontStyle',25],['TextJustification',25]];
;
(function(){/*e*/var C$=Clazz.newClass(P$.TextRenderer, "FontFamily", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "MONOSPACED", 0, []);
Clazz.newEnumConst($vals, C$.c$, "SERIF", 1, []);
Clazz.newEnumConst($vals, C$.c$, "SANS_SERIF", 2, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*e*/var C$=Clazz.newClass(P$.TextRenderer, "FontStyle", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "PLAIN", 0, []);
Clazz.newEnumConst($vals, C$.c$, "BOLD", 1, []);
Clazz.newEnumConst($vals, C$.c$, "ITALIC", 2, []);
Clazz.newEnumConst($vals, C$.c$, "BOLD_ITALIC", 3, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
;
(function(){/*e*/var C$=Clazz.newClass(P$.TextRenderer, "TextJustification", function(){
Clazz.newInstance(this, arguments[0],false,C$);
}, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "LEFT", 0, []);
Clazz.newEnumConst($vals, C$.c$, "CENTER", 1, []);
Clazz.newEnumConst($vals, C$.c$, "RIGHT", 2, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:02 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
