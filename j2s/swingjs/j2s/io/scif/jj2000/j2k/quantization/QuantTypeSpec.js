(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.quantization"),I$=[[0,'java.util.StringTokenizer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "QuantTypeSpec", null, 'io.scif.jj2000.j2k.ModuleSpec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$B', function (nt, nc, type) {
;C$.superclazz.c$$I$I$B.apply(this,[nt, nc, ($b$[0] = type, $b$[0])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$B$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$S', function (nt, nc, type, wp, values) {
;C$.superclazz.c$$I$I$B.apply(this,[nt, nc, ($b$[0] = type, $b$[0])]);C$.$init$.apply(this);
if (values == null ) {
if (wp.getLossless$()) this.setDefault$O("reversible");
 else this.setDefault$O("expounded");
return;
}this.specified=values;
var param=values;
var stk=Clazz.new_($I$(1,1).c$$S,[param]);
var word;
var curSpecValType=($b$[0] = 0, $b$[0]);
var tileSpec=null;
var compSpec=null;
while (stk.hasMoreTokens$()){
word=stk.nextToken$().toLowerCase$();
switch ((word.charCodeAt$I(0))) {
case 116:
tileSpec=io.scif.jj2000.j2k.ModuleSpec.parseIdx$S$I(word, this.nTiles);
if (curSpecValType == 1) {
curSpecValType=($b$[0] = 3, $b$[0]);
} else {
curSpecValType=($b$[0] = 2, $b$[0]);
}break;
case 99:
compSpec=io.scif.jj2000.j2k.ModuleSpec.parseIdx$S$I(word, this.nComp);
if (curSpecValType == 2) {
curSpecValType=($b$[0] = 3, $b$[0]);
} else curSpecValType=($b$[0] = 1, $b$[0]);
break;
case 114:
case 100:
case 101:
if (!word.equalsIgnoreCase$S("reversible") && !word.equalsIgnoreCase$S("derived") && !word.equalsIgnoreCase$S("expounded")  ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown parameter " + "for " + "'-Qtype' option: " + word ]);
if (wp.getLossless$() && (word.equalsIgnoreCase$S("derived") || word.equalsIgnoreCase$S("expounded") ) ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot use non reversible quantization with \'-lossless\' option"]);
if (curSpecValType == 0) {
this.setDefault$O(word);
} else if (curSpecValType == 2) {
for (var i=tileSpec.length - 1; i >= 0; i--) if (tileSpec[i]) {
this.setTileDef$I$O(i, word);
}
} else if (curSpecValType == 1) {
for (var i=compSpec.length - 1; i >= 0; i--) if (compSpec[i]) {
this.setCompDef$I$O(i, word);
}
} else {
for (var i=tileSpec.length - 1; i >= 0; i--) {
for (var j=compSpec.length - 1; j >= 0; j--) {
if (tileSpec[i] && compSpec[j] ) {
this.setTileCompVal$I$I$O(i, j, word);
}}
}
}curSpecValType=($b$[0] = 0, $b$[0]);
tileSpec=null;
compSpec=null;
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unknown parameter for " + "'-Qtype' option: " + word ]);
}
}
if (this.getDefault$() == null ) {
var ndefspec=0;
for (var t=nt - 1; t >= 0; t--) {
for (var c=nc - 1; c >= 0; c--) {
if (this.specValType[t][c] == 0) {
ndefspec++;
}}
}
if (ndefspec != 0) {
if (wp.getLossless$()) this.setDefault$O("reversible");
 else this.setDefault$O("expounded");
} else {
this.setDefault$O(this.getTileCompVal$I$I(0, 0));
switch (this.specValType[0][0]) {
case 2:
for (var c=nc - 1; c >= 0; c--) {
if (this.specValType[0][c] == 2) this.specValType[0][c]=(0|0);
}
this.tileDef[0]=null;
break;
case 1:
for (var t=nt - 1; t >= 0; t--) {
if (this.specValType[t][0] == 1) this.specValType[t][0]=(0|0);
}
this.compDef[0]=null;
break;
case 3:
this.specValType[0][0]=(0|0);
this.tileCompVal.put$TK$TV("t0c0", null);
break;
}
}}}, 1);

Clazz.newMeth(C$, 'isDerived$I$I', function (t, c) {
if ((this.getTileCompVal$I$I(t, c)).equals$O("derived")) return true;
 else return false;
});

Clazz.newMeth(C$, 'isReversible$I$I', function (t, c) {
if ((this.getTileCompVal$I$I(t, c)).equals$O("reversible")) return true;
 else return false;
});

Clazz.newMeth(C$, 'isFullyReversible$', function () {
if ((this.getDefault$()).equals$O("reversible")) {
for (var t=this.nTiles - 1; t >= 0; t--) for (var c=this.nComp - 1; c >= 0; c--) if (this.specValType[t][c] != 0) return false;


return true;
}return false;
});

Clazz.newMeth(C$, 'isFullyNonReversible$', function () {
for (var t=this.nTiles - 1; t >= 0; t--) for (var c=this.nComp - 1; c >= 0; c--) if ((this.getSpec$I$I(t, c)).equals$O("reversible")) return false;


return true;
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
