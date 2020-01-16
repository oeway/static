(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k"),I$=[[0,'java.util.StringTokenizer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "IntegerSpec", null, 'io.scif.jj2000.j2k.ModuleSpec');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.MAX_INT=2147483647;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['I',['MAX_INT']]]

Clazz.newMeth(C$, 'c$$I$I$B', function (nt, nc, type) {
;C$.superclazz.c$$I$I$B.apply(this,[nt, nc, ($b$[0] = type, $b$[0])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$B$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$S$S', function (nt, nc, type, wp, values, defaultValue) {
;C$.superclazz.c$$I$I$B.apply(this,[nt, nc, ($b$[0] = type, $b$[0])]);C$.$init$.apply(this);
if (values == null ) {
try {
this.setDefault$O( new Integer(defaultValue));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Non recognized value" + " for option -" + ": " + defaultValue ]);
} else {
throw e;
}
}
return;
}var value;
var stk=Clazz.new_($I$(1,1).c$$S,[values]);
var word;
var curSpecType=($b$[0] = 0, $b$[0]);
var tileSpec=null;
var compSpec=null;
while (stk.hasMoreTokens$()){
word=stk.nextToken$();
switch ((word.charCodeAt$I(0))) {
case 116:
tileSpec=P$.ModuleSpec.parseIdx$S$I(word, this.nTiles);
if (curSpecType == 1) curSpecType=($b$[0] = 3, $b$[0]);
 else curSpecType=($b$[0] = 2, $b$[0]);
break;
case 99:
compSpec=P$.ModuleSpec.parseIdx$S$I(word, this.nComp);
if (curSpecType == 2) curSpecType=($b$[0] = 3, $b$[0]);
 else curSpecType=($b$[0] = 1, $b$[0]);
break;
default:
try {
value= new Integer(word);
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Non recognized value" + " for option -: " + word ]);
} else {
throw e;
}
}
if (curSpecType == 0) {
this.setDefault$O(value);
} else if (curSpecType == 2) {
for (var i=tileSpec.length - 1; i >= 0; i--) if (tileSpec[i]) {
this.setTileDef$I$O(i, value);
}
} else if (curSpecType == 1) {
for (var i=compSpec.length - 1; i >= 0; i--) if (compSpec[i]) {
this.setCompDef$I$O(i, value);
}
} else {
for (var i=tileSpec.length - 1; i >= 0; i--) {
for (var j=compSpec.length - 1; j >= 0; j--) {
if (tileSpec[i] && compSpec[j] ) {
this.setTileCompVal$I$I$O(i, j, value);
}}
}
}curSpecType=($b$[0] = 0, $b$[0]);
tileSpec=null;
compSpec=null;
break;
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
try {
this.setDefault$O( new Integer(defaultValue));
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Non recognized value" + " for option - : " + defaultValue ]);
} else {
throw e;
}
}
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

Clazz.newMeth(C$, 'getMax$', function () {
var max=(this.def).intValue$();
var tmp;
for (var t=0; t < this.nTiles; t++) {
for (var c=0; c < this.nComp; c++) {
tmp=(this.getSpec$I$I(t, c)).intValue$();
if (max < tmp) max=tmp;
}
}
return max;
});

Clazz.newMeth(C$, 'getMin$', function () {
var min=(this.def).intValue$();
var tmp;
for (var t=0; t < this.nTiles; t++) {
for (var c=0; c < this.nComp; c++) {
tmp=(this.getSpec$I$I(t, c)).intValue$();
if (min > tmp) min=tmp;
}
}
return min;
});

Clazz.newMeth(C$, 'getMaxInComp$I', function (c) {
var max=0;
var tmp;
for (var t=0; t < this.nTiles; t++) {
tmp=(this.getSpec$I$I(t, c)).intValue$();
if (max < tmp) max=tmp;
}
return max;
});

Clazz.newMeth(C$, 'getMinInComp$I', function (c) {
var min=C$.MAX_INT;
var tmp;
for (var t=0; t < this.nTiles; t++) {
tmp=(this.getSpec$I$I(t, c)).intValue$();
if (min > tmp) min=tmp;
}
return min;
});

Clazz.newMeth(C$, 'getMaxInTile$I', function (t) {
var max=0;
var tmp;
for (var c=0; c < this.nComp; c++) {
tmp=(this.getSpec$I$I(t, c)).intValue$();
if (max < tmp) max=tmp;
}
return max;
});

Clazz.newMeth(C$, 'getMinInTile$I', function (t) {
var min=C$.MAX_INT;
var tmp;
for (var c=0; c < this.nComp; c++) {
tmp=(this.getSpec$I$I(t, c)).intValue$();
if (min > tmp) min=tmp;
}
return min;
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:14 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
