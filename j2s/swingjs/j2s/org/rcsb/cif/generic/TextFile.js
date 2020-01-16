(function(){var P$=Clazz.newPackage("org.rcsb.cif.generic"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "TextFile", null, null, 'org.rcsb.cif.generic.CifFile');

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.blocks=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List', function (blocks) {
;C$.$init$.apply(this);
this.blocks=blocks;
}, 1);

Clazz.newMeth(C$, 'getBlocks$', function () {
return this.blocks;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:31 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
