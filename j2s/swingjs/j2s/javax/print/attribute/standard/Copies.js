(function(){var P$=Clazz.newPackage("javax.print.attribute.standard"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Copies", null, 'javax.print.attribute.IntegerSyntax', ['javax.print.attribute.PrintRequestAttribute', 'javax.print.attribute.PrintJobAttribute']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I', function (value) {
;C$.superclazz.c$$I$I$I.apply(this,[value, 1, 2147483647]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'equals$O', function (object) {
return C$.superclazz.prototype.equals$O.apply(this, [object]) && Clazz.instanceOf(object, "javax.print.attribute.standard.Copies") ;
});

Clazz.newMeth(C$, 'getCategory$', function () {
return Clazz.getClass(C$);
});

Clazz.newMeth(C$, 'getName$', function () {
return "copies";
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
