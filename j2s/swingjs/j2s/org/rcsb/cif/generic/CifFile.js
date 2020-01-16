(function(){var P$=Clazz.newPackage("org.rcsb.cif.generic"),I$=[];
/*i*/var C$=Clazz.newInterface(P$, "CifFile");
C$.$defaults$ = function(C$){

Clazz.newMeth(C$, 'getFirstBlock$', function () {
return this.getBlocks$().get$I(0);
});

Clazz.newMeth(C$, 'blocks$', function () {
return this.getBlocks$().stream$();
});
};})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:31 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
