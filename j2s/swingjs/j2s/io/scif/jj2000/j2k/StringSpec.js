(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k"),I$=[[0,'java.util.StringTokenizer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StringSpec", null, 'io.scif.jj2000.j2k.ModuleSpec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['$specified']]]

Clazz.newMeth(C$, 'c$$I$I$B', function (nt, nc, type) {
;C$.superclazz.c$$I$I$B.apply(this,[nt, nc, ($b$[0] = type, $b$[0])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$B$S$SA$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$S', function (nt, nc, type, defaultValue, list, wp, values) {
;C$.superclazz.c$$I$I$B.apply(this,[nt, nc, ($b$[0] = type, $b$[0])]);C$.$init$.apply(this);
this.$specified=values;
var recognized=false;
var param=values;
if (values == null ) {
for (var i=list.length - 1; i >= 0; i--) if (defaultValue.equalsIgnoreCase$S(list[i])) recognized=true;

if (!recognized) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Default parameter of " + "option - not" + " recognized: " + defaultValue ]);
this.setDefault$O(defaultValue);
return;
}var stk=Clazz.new_($I$(1,1).c$$S,[this.$specified]);
var word;
var curSpecType=($b$[0] = 0, $b$[0]);
var tileSpec=null;
var compSpec=null;
var value;
while (stk.hasMoreTokens$()){
word=stk.nextToken$();
if (word.matches$S("t[0-9]*")) {
tileSpec=P$.ModuleSpec.parseIdx$S$I(word, this.nTiles);
if (curSpecType == 1) {
curSpecType=($b$[0] = 3, $b$[0]);
} else {
curSpecType=($b$[0] = 2, $b$[0]);
}} else if (word.matches$S("c[0-9]*")) {
compSpec=P$.ModuleSpec.parseIdx$S$I(word, this.nComp);
if (curSpecType == 2) {
curSpecType=($b$[0] = 3, $b$[0]);
} else curSpecType=($b$[0] = 1, $b$[0]);
} else {
recognized=false;
for (var i=list.length - 1; i >= 0; i--) if (word.equalsIgnoreCase$S(list[i])) recognized=true;

if (!recognized) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Default parameter of " + "option not" + " recognized: " + word ]);
if (curSpecType == 0) {
this.setDefault$O(word);
} else if (curSpecType == 2) {
for (var i=tileSpec.length - 1; i >= 0; i--) if (tileSpec[i]) {
this.setTileDef$I$O(i, word);
}
} else if (curSpecType == 1) {
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
}curSpecType=($b$[0] = 0, $b$[0]);
tileSpec=null;
compSpec=null;
}}
if (this.getDefault$() == null ) {
var ndefspec=0;
for (var t=nt - 1; t >= 0; t--) {
for (var c=nc - 1; c >= 0; c--) {
if (this.specValType[t][c] == 0) {
ndefspec++;
}}
}
if (ndefspec != 0) {
param=defaultValue;
for (var i=list.length - 1; i >= 0; i--) if (param.equalsIgnoreCase$S(list[i])) recognized=true;

if (!recognized) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Default parameter of " + "option not" + " recognized: " + this.$specified ]);
this.setDefault$O(param);
} else {
this.setDefault$O(this.getSpec$I$I(0, 0));
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

Clazz.newMeth(C$, 'getSpecified$', function () {
return this.$specified;
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:14 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
