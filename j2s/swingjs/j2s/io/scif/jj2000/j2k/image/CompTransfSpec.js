(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.image"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CompTransfSpec", null, 'io.scif.jj2000.j2k.ModuleSpec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$B', function (nt, nc, type) {
;C$.superclazz.c$$I$I$B.apply(this,[nt, nc, ($b$[0] = type, $b$[0])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'isCompTransfUsed$', function () {
if ((this.def).intValue$() != 0) {
return true;
}if (this.tileDef != null ) {
for (var t=this.nTiles - 1; t >= 0; t--) {
if (this.tileDef[t] != null  && ((this.tileDef[t]).intValue$() != 0) ) {
return true;
}}
}return false;
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
