(function(){var P$=Clazz.newPackage("org.rcsb.cif.generator"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "Table");

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.description=null;
this.categoryKeyNames=null;
this.columns=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S$java_util_Set$java_util_Map', function (description, categoryKeyNames, columns) {
;C$.$init$.apply(this);
this.description=description;
this.categoryKeyNames=categoryKeyNames;
this.columns=columns;
}, 1);

Clazz.newMeth(C$, 'getDescription$', function () {
return this.description;
});

Clazz.newMeth(C$, 'getCategoryKeyNames$', function () {
return this.categoryKeyNames;
});

Clazz.newMeth(C$, 'getColumns$', function () {
return this.columns;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:28 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
