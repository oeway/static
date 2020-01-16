(function(){var P$=Clazz.newPackage("org.rcsb.cif.generator"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "EnumCol", null, 'org.rcsb.cif.generator.Col');

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.values=null;
this.subType=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List$S$S', function (values, subType, description) {
;C$.superclazz.c$$S$S.apply(this, ["enum", description]);C$.$init$.apply(this);
this.values=values;
this.subType=subType;
}, 1);

Clazz.newMeth(C$, 'getValues$', function () {
return this.values;
});

Clazz.newMeth(C$, 'getSubType$', function () {
return this.subType;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:27 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
