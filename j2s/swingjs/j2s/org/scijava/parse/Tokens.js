(function(){var P$=Clazz.newPackage("org.scijava.parse");
/*c*/var C$=Clazz.newClass(P$, "Tokens");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isNumber$O', function (o) {
return Clazz.instanceOf(o, "java.lang.Number");
}, 1);

Clazz.newMeth(C$, 'isGroup$O', function (o) {
return Clazz.instanceOf(o, "org.scijava.parse.Group");
}, 1);

Clazz.newMeth(C$, 'isVariable$O', function (o) {
return Clazz.instanceOf(o, "org.scijava.parse.Variable");
}, 1);

Clazz.newMeth(C$, 'isOperator$O', function (o) {
return Clazz.instanceOf(o, "org.scijava.parse.Operator");
}, 1);

Clazz.newMeth(C$, 'isComma$O', function (o) {
return C$.isCharacter$O$Character(o, new Character(','));
}, 1);

Clazz.newMeth(C$, 'isCharacter$O$Character', function (o, c) {
return Clazz.instanceOf(o, "java.lang.Character") && (o).equals$O(c) ;
}, 1);

Clazz.newMeth(C$, 'isMatchingGroup$O$org_scijava_parse_Group', function (o, g) {
return C$.isGroup$O(o) && (o).matches$org_scijava_parse_Group(g) ;
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:21 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
