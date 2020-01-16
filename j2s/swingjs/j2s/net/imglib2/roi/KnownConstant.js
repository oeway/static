(function(){var P$=Clazz.newPackage("net.imglib2.roi"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "KnownConstant", null, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "ALL_TRUE", 0, []);
Clazz.newEnumConst($vals, C$.c$, "ALL_FALSE", 1, []);
Clazz.newEnumConst($vals, C$.c$, "UNKNOWN", 2, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'and$net_imglib2_roi_KnownConstant', function (that) {
if (this === C$.ALL_TRUE  && that === C$.ALL_TRUE  ) return C$.ALL_TRUE;
if (this === C$.ALL_FALSE  || that === C$.ALL_FALSE  ) return C$.ALL_FALSE;
return C$.UNKNOWN;
});

Clazz.newMeth(C$, 'or$net_imglib2_roi_KnownConstant', function (that) {
if (this === C$.ALL_TRUE  || that === C$.ALL_TRUE  ) return C$.ALL_TRUE;
if (this === C$.ALL_FALSE  && that === C$.ALL_FALSE  ) return C$.ALL_FALSE;
return C$.UNKNOWN;
});

Clazz.newMeth(C$, 'negate$', function () {
if (this === C$.ALL_FALSE ) return C$.ALL_TRUE;
if (this === C$.ALL_TRUE ) return C$.ALL_FALSE;
return C$.UNKNOWN;
});

Clazz.newMeth(C$, 'minus$net_imglib2_roi_KnownConstant', function (that) {
if (this === C$.ALL_FALSE  || that === C$.ALL_TRUE  ) return C$.ALL_FALSE;
if (that === C$.ALL_FALSE ) return this;
return C$.UNKNOWN;
});

Clazz.newMeth(C$, 'xor$net_imglib2_roi_KnownConstant', function (that) {
if (this === C$.UNKNOWN  || that === C$.UNKNOWN  ) return C$.UNKNOWN;
return this === that  ? C$.ALL_FALSE : C$.ALL_TRUE;
});

Clazz.newMeth(C$, 'of$java_util_function_Predicate', function (predicate) {
if (Clazz.instanceOf(predicate, "net.imglib2.roi.MaskPredicate")) return (predicate).knownConstant$();
return C$.UNKNOWN;
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:52 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
