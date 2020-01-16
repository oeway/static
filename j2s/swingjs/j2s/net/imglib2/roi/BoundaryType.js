(function(){var P$=Clazz.newPackage("net.imglib2.roi"),I$=[];
/*e*/var C$=Clazz.newClass(P$, "BoundaryType", null, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$, "CLOSED", 0, []);
Clazz.newEnumConst($vals, C$.c$, "OPEN", 1, []);
Clazz.newEnumConst($vals, C$.c$, "UNSPECIFIED", 2, []);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'and$net_imglib2_roi_BoundaryType', function (that) {
return this === that  ? this : C$.UNSPECIFIED;
});

Clazz.newMeth(C$, 'or$net_imglib2_roi_BoundaryType', function (that) {
return this === that  ? this : C$.UNSPECIFIED;
});

Clazz.newMeth(C$, 'negate$', function () {
return this === C$.OPEN  ? C$.CLOSED : this === C$.CLOSED  ? C$.OPEN : C$.UNSPECIFIED;
});

Clazz.newMeth(C$, 'minus$net_imglib2_roi_BoundaryType', function (that) {
return this !== that  && that !== C$.UNSPECIFIED   ? this : C$.UNSPECIFIED;
});

Clazz.newMeth(C$, 'xor$net_imglib2_roi_BoundaryType', function (that) {
return C$.UNSPECIFIED;
});

Clazz.newMeth(C$, 'of$java_util_function_Predicate', function (predicate) {
if (Clazz.instanceOf(predicate, "net.imglib2.roi.MaskPredicate")) return (predicate).boundaryType$();
return C$.UNSPECIFIED;
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:52 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
