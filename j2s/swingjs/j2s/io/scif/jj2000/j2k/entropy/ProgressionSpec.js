(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.entropy"),p$1={},I$=[[0,'Error','io.scif.jj2000.j2k.entropy.Progression','java.util.StringTokenizer','java.util.Vector']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ProgressionSpec", null, 'io.scif.jj2000.j2k.ModuleSpec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I$B', function (nt, nc, type) {
;C$.superclazz.c$$I$I$B.apply(this,[nt, nc, ($b$[0] = type, $b$[0])]);C$.$init$.apply(this);
if (type != 1) {
throw Clazz.new_($I$(1,1).c$$S,["Illegal use of class ProgressionSpec !"]);
}}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$io_scif_jj2000_j2k_IntegerSpec$B$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$S', function (nt, nc, nl, dls, type, wp, values) {
;C$.superclazz.c$$I$I$B.apply(this,[nt, nc, ($b$[0] = type, $b$[0])]);C$.$init$.apply(this);
this.specified=values;
var param=values;
var prog;
var mode=-1;
if (values == null ) {
if (wp.getROIs$() == null ) {
mode=p$1.checkProgMode$S.apply(this, ["res"]);
} else {
mode=p$1.checkProgMode$S.apply(this, ["layer"]);
}if (mode == -1) {
var errMsg="Unknown progression type : '" + param + "'" ;
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[errMsg]);
}prog=Clazz.array($I$(2), [1]);
prog[0]=Clazz.new_($I$(2,1).c$$I$I$I$I$I$I,[mode, 0, nc, 0, dls.getMax$() + 1, nl]);
this.setDefault$O(prog);
return;
}var stk=Clazz.new_($I$(3,1).c$$S,[param]);
var curSpecType=($b$[0] = 0, $b$[0]);
var tileSpec=null;
var word=null;
var errMsg=null;
var needInteger=false;
var intType=0;
var progression=Clazz.new_($I$(4,1));
var tmp=0;
var curProg=null;
while (stk.hasMoreTokens$()){
word=stk.nextToken$();
switch ((word.charCodeAt$I(0))) {
case 116:
if (progression.size$() > 0) {
curProg.ce=nc;
curProg.lye=nl;
curProg.re=dls.getMax$() + 1;
prog=Clazz.array($I$(2), [progression.size$()]);
progression.copyInto$OA(prog);
if (curSpecType == 0) {
this.setDefault$O(prog);
} else if (curSpecType == 2) {
for (var i=tileSpec.length - 1; i >= 0; i--) if (tileSpec[i]) {
this.setTileDef$I$O(i, prog);
}
}}progression.removeAllElements$();
intType=-1;
needInteger=false;
tileSpec=io.scif.jj2000.j2k.ModuleSpec.parseIdx$S$I(word, this.nTiles);
curSpecType=($b$[0] = 2, $b$[0]);
break;
default:
if (needInteger) {
try {
tmp=( new Integer(word)).intValue$();
} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Progression " + "order" + " specification " + "has missing " + "parameters: " + param ]);
} else {
throw e;
}
}
switch (intType) {
case 0:
if (tmp < 0 || tmp > dls.getMax$() + 1 ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid comp_start in \'-Aptype\' option"]);
curProg.cs=tmp;
break;
case 1:
if (tmp < 0 || tmp > nc ) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid res_start in \'-Aptype\' option"]);
curProg.rs=tmp;
break;
case 2:
if (tmp < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid layer_end in \'-Aptype\' option"]);
if (tmp > nl) {
tmp=nl;
}curProg.lye=tmp;
break;
case 3:
if (tmp < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid comp_end in \'-Aptype\' option"]);
if (tmp > (dls.getMax$() + 1)) {
tmp=dls.getMax$() + 1;
}curProg.ce=tmp;
break;
case 4:
if (tmp < 0) throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid res_end in \'-Aptype\' option"]);
if (tmp > nc) {
tmp=nc;
}curProg.re=tmp;
break;
}
if (intType < 4) {
intType++;
needInteger=true;
break;
} else if (intType == 4) {
intType=0;
needInteger=false;
break;
} else {
throw Clazz.new_($I$(1,1).c$$S,["Error in usage of 'Aptype' " + "option: " + param ]);
}}if (!needInteger) {
mode=p$1.checkProgMode$S.apply(this, [word]);
if (mode == -1) {
errMsg="Unknown progression type : '" + word + "'" ;
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[errMsg]);
}needInteger=true;
intType=0;
if (progression.size$() == 0) curProg=Clazz.new_($I$(2,1).c$$I$I$I$I$I$I,[mode, 0, nc, 0, dls.getMax$() + 1, nl]);
 else {
curProg=Clazz.new_($I$(2,1).c$$I$I$I$I$I$I,[mode, 0, nc, 0, dls.getMax$() + 1, nl]);
}progression.addElement$TE(curProg);
}}
}
if (progression.size$() == 0) {
if (wp.getROIs$() == null ) {
mode=p$1.checkProgMode$S.apply(this, ["res"]);
} else {
mode=p$1.checkProgMode$S.apply(this, ["layer"]);
}if (mode == -1) {
errMsg="Unknown progression type : '" + param + "'" ;
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[errMsg]);
}prog=Clazz.array($I$(2), [1]);
prog[0]=Clazz.new_($I$(2,1).c$$I$I$I$I$I$I,[mode, 0, nc, 0, dls.getMax$() + 1, nl]);
this.setDefault$O(prog);
return;
}curProg.ce=nc;
curProg.lye=nl;
curProg.re=dls.getMax$() + 1;
prog=Clazz.array($I$(2), [progression.size$()]);
progression.copyInto$OA(prog);
if (curSpecType == 0) {
this.setDefault$O(prog);
} else if (curSpecType == 2) {
for (var i=tileSpec.length - 1; i >= 0; i--) if (tileSpec[i]) {
this.setTileDef$I$O(i, prog);
}
}if (this.getDefault$() == null ) {
var ndefspec=0;
for (var t=nt - 1; t >= 0; t--) {
for (var c=nc - 1; c >= 0; c--) {
if (this.specValType[t][c] == 0) {
ndefspec++;
}}
}
if (ndefspec != 0) {
if (wp.getROIs$() == null ) {
mode=p$1.checkProgMode$S.apply(this, ["res"]);
} else {
mode=p$1.checkProgMode$S.apply(this, ["layer"]);
}if (mode == -1) {
errMsg="Unknown progression type : '" + param + "'" ;
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[errMsg]);
}prog=Clazz.array($I$(2), [1]);
prog[0]=Clazz.new_($I$(2,1).c$$I$I$I$I$I$I,[mode, 0, nc, 0, dls.getMax$() + 1, nl]);
this.setDefault$O(prog);
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

Clazz.newMeth(C$, 'checkProgMode$S', function (mode) {
if (mode.equals$O("res")) {
return 1;
} else if (mode.equals$O("layer")) {
return 0;
} else if (mode.equals$O("pos-comp")) {
return 3;
} else if (mode.equals$O("comp-pos")) {
return 4;
} else if (mode.equals$O("res-pos")) {
return 2;
} else {
return -1;
}}, p$1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:15 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
