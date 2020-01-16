(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.wavelet.analysis"),p$1={},I$=[[0,'java.util.StringTokenizer','io.scif.jj2000.j2k.wavelet.analysis.AnWTFilter','io.scif.jj2000.j2k.wavelet.analysis.AnWTFilterIntLift5x3','io.scif.jj2000.j2k.wavelet.analysis.AnWTFilterFloatLift9x7']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AnWTFilterSpec", null, 'io.scif.jj2000.j2k.ModuleSpec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$B$io_scif_jj2000_j2k_quantization_QuantTypeSpec$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$S', function (nt, nc, type, qts, wp, values) {
;C$.superclazz.c$$I$I$B.apply(this,[nt, nc, ($b$[0] = type, $b$[0])]);C$.$init$.apply(this);
this.specified=values;
var param=this.specified;
var isFilterSpecified=true;
if (values == null ) {
isFilterSpecified=false;
if (wp.getLossless$()) {
this.setDefault$O(p$1.parseFilters$S.apply(this, ["w5x3"]));
return;
}for (var t=nt - 1; t >= 0; t--) {
for (var c=nc - 1; c >= 0; c--) {
switch (qts.getSpecValType$I$I(t, c)) {
case 0:
if (this.getDefault$() == null ) {
if (wp.getLossless$()) this.setDefault$O(p$1.parseFilters$S.apply(this, ["w5x3"]));
if ((qts.getDefault$()).equals$O("reversible")) {
this.setDefault$O(p$1.parseFilters$S.apply(this, ["w5x3"]));
} else {
this.setDefault$O(p$1.parseFilters$S.apply(this, ["w9x7"]));
}}this.specValType[t][c]=(0|0);
break;
case 1:
if (!this.isCompSpecified$I(c)) {
if ((qts.getCompDef$I(c)).equals$O("reversible")) {
this.setCompDef$I$O(c, p$1.parseFilters$S.apply(this, ["w5x3"]));
} else {
this.setCompDef$I$O(c, p$1.parseFilters$S.apply(this, ["w9x7"]));
}}this.specValType[t][c]=(1|0);
break;
case 2:
if (!this.isTileSpecified$I(t)) {
if ((qts.getTileDef$I(t)).equals$O("reversible")) {
this.setTileDef$I$O(t, p$1.parseFilters$S.apply(this, ["w5x3"]));
} else {
this.setTileDef$I$O(t, p$1.parseFilters$S.apply(this, ["w9x7"]));
}}this.specValType[t][c]=(2|0);
break;
case 3:
if (!this.isTileCompSpecified$I$I(t, c)) {
if ((qts.getTileCompVal$I$I(t, c)).equals$O("reversible")) {
this.setTileCompVal$I$I$O(t, c, p$1.parseFilters$S.apply(this, ["w5x3"]));
} else {
this.setTileCompVal$I$I$O(t, c, p$1.parseFilters$S.apply(this, ["w9x7"]));
}}this.specValType[t][c]=(3|0);
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Unsupported specification type"]);
}
}
}
return;
}var stk=Clazz.new_($I$(1,1).c$$S,[param]);
var word;
var curSpecType=($b$[0] = 0, $b$[0]);
var tileSpec=null;
var compSpec=null;
var filter;
while (stk.hasMoreTokens$()){
word=stk.nextToken$();
switch ((word.charCodeAt$I(0))) {
case 116:
case 84:
tileSpec=io.scif.jj2000.j2k.ModuleSpec.parseIdx$S$I(word, this.nTiles);
if (curSpecType == 1) curSpecType=($b$[0] = 3, $b$[0]);
 else curSpecType=($b$[0] = 2, $b$[0]);
break;
case 99:
case 67:
compSpec=io.scif.jj2000.j2k.ModuleSpec.parseIdx$S$I(word, this.nComp);
if (curSpecType == 2) curSpecType=($b$[0] = 3, $b$[0]);
 else curSpecType=($b$[0] = 1, $b$[0]);
break;
case 119:
case 87:
if (wp.getLossless$() && word.equalsIgnoreCase$S("w9x7") ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot use non reversible wavelet transform with \'-lossless\' option"]);
}filter=p$1.parseFilters$S.apply(this, [word]);
if (curSpecType == 0) {
this.setDefault$O(filter);
} else if (curSpecType == 2) {
for (var i=tileSpec.length - 1; i >= 0; i--) if (tileSpec[i]) {
this.setTileDef$I$O(i, filter);
}
} else if (curSpecType == 1) {
for (var i=compSpec.length - 1; i >= 0; i--) if (compSpec[i]) {
this.setCompDef$I$O(i, filter);
}
} else {
for (var i=tileSpec.length - 1; i >= 0; i--) {
for (var j=compSpec.length - 1; j >= 0; j--) {
if (tileSpec[i] && compSpec[j] ) {
this.setTileCompVal$I$I$O(i, j, filter);
}}
}
}curSpecType=($b$[0] = 0, $b$[0]);
tileSpec=null;
compSpec=null;
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Bad construction for " + "parameter: " + word ]);
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
if ((qts.getDefault$()).equals$O("reversible")) this.setDefault$O(p$1.parseFilters$S.apply(this, ["w5x3"]));
 else this.setDefault$O(p$1.parseFilters$S.apply(this, ["w9x7"]));
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
}}for (var t=nt - 1; t >= 0; t--) {
for (var c=nc - 1; c >= 0; c--) {
if ((qts.getTileCompVal$I$I(t, c)).equals$O("reversible")) {
if (this.isReversible$I$I(t, c)) continue;
if (!isFilterSpecified) {
this.setTileCompVal$I$I$O(t, c, p$1.parseFilters$S.apply(this, ["w5x3"]));
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Filter of tile-component (" + t + "," + c + ") does" + " not allow " + "reversible " + "quantization. " + "Specify '-Qtype " + "expounded' or " + "'-Qtype derived'" + "in " + "the command line." ]);
}} else {
if (!this.isReversible$I$I(t, c)) continue;
if (!isFilterSpecified) {
this.setTileCompVal$I$I$O(t, c, p$1.parseFilters$S.apply(this, ["w9x7"]));
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Filter of tile-component (" + t + "," + c + ") does" + " not allow " + "non-reversible " + "quantization. " + "Specify '-Qtype " + "reversible' in " + "the command line" ]);
}}}
}
}, 1);

Clazz.newMeth(C$, 'parseFilters$S', function (word) {
var filt=Clazz.array($I$(2), [2, 1]);
if (word.equalsIgnoreCase$S("w5x3")) {
filt[0][0]=Clazz.new_($I$(3,1));
filt[1][0]=Clazz.new_($I$(3,1));
return filt;
} else if (word.equalsIgnoreCase$S("w9x7")) {
filt[0][0]=Clazz.new_($I$(4,1));
filt[1][0]=Clazz.new_($I$(4,1));
return filt;
} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Non JPEG 2000 part I filter: " + word]);
}}, p$1);

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
