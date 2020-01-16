(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.wavelet.synthesis"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SynWTFilterSpec", null, 'io.scif.jj2000.j2k.ModuleSpec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$B', function (nt, nc, type) {
;C$.superclazz.c$$I$I$B.apply(this,[nt, nc, ($b$[0] = type, $b$[0])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getWTDataType$I$I', function (t, c) {
var an=this.getSpec$I$I(t, c);
return an[0][0].getDataType$();
});

Clazz.newMeth(C$, 'getHFilters$I$I', function (t, c) {
var an=this.getSpec$I$I(t, c);
return an[0];
});

Clazz.newMeth(C$, 'getVFilters$I$I', function (t, c) {
var an=this.getSpec$I$I(t, c);
return an[1];
});

Clazz.newMeth(C$, 'toString', function () {
var str="";
var an;
str += "nTiles=" + this.nTiles + "\nnComp=" + this.nComp + "\n\n" ;
for (var t=0; t < this.nTiles; t++) {
for (var c=0; c < this.nComp; c++) {
an=this.getSpec$I$I(t, c);
str += "(t:" + t + ",c:" + c + ")\n" ;
str += "\tH:";
for (var i=0; i < an[0].length; i++) str += " " + an[0][i];

str += "\n\tV:";
for (var i=0; i < an[1].length; i++) str += " " + an[1][i];

str += "\n";
}
}
return str;
});

Clazz.newMeth(C$, 'isReversible$I$I', function (t, c) {
var hfilter=this.getHFilters$I$I(t, c);
var vfilter=this.getVFilters$I$I(t, c);
for (var i=hfilter.length - 1; i >= 0; i--) if (!hfilter[i].isReversible$() || !vfilter[i].isReversible$() ) return false;

return true;
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
