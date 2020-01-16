(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.entropy"),I$=[[0,'java.util.Vector','java.util.StringTokenizer','io.scif.jj2000.j2k.util.MathUtil']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PrecinctSizeSpec", null, 'io.scif.jj2000.j2k.ModuleSpec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['dls','io.scif.jj2000.j2k.IntegerSpec']]]

Clazz.newMeth(C$, 'c$$I$I$B$io_scif_jj2000_j2k_IntegerSpec', function (nt, nc, type, dls) {
;C$.superclazz.c$$I$I$B.apply(this,[nt, nc, ($b$[0] = type, $b$[0])]);C$.$init$.apply(this);
this.dls=dls;
}, 1);

Clazz.newMeth(C$, 'c$$I$I$B$io_scif_jj2000_j2k_image_BlkImgDataSrc$io_scif_jj2000_j2k_IntegerSpec$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$S', function (nt, nc, type, imgsrc, dls, wp, values) {
;C$.superclazz.c$$I$I$B.apply(this,[nt, nc, ($b$[0] = type, $b$[0])]);C$.$init$.apply(this);
this.dls=dls;
var wasReadingPrecinctSize=false;
var param=values;
var tmpv=Clazz.array($I$(1), [2]);
tmpv[0]=Clazz.new_($I$(1,1));
tmpv[0].addElement$TE( new Integer(65535));
tmpv[1]=Clazz.new_($I$(1,1));
tmpv[1].addElement$TE( new Integer(65535));
this.setDefault$O(tmpv);
if (param == null ) {
return;
}var stk=Clazz.new_($I$(2,1).c$$S,[param]);
var curSpecType=($b$[0] = 0, $b$[0]);
var tileSpec=null;
var compSpec=null;
var i;
var xIdx;
var ci;
var ti;
var endOfParamList=false;
var word=null;
var w;
var h;
var errMsg=null;
while ((stk.hasMoreTokens$() || wasReadingPrecinctSize ) && !endOfParamList ){
var v=Clazz.array($I$(1), [2]);
if (!wasReadingPrecinctSize) {
word=stk.nextToken$();
}wasReadingPrecinctSize=false;
switch ((word.charCodeAt$I(0))) {
case 116:
tileSpec=io.scif.jj2000.j2k.ModuleSpec.parseIdx$S$I(word, this.nTiles);
if (curSpecType == 1) {
curSpecType=($b$[0] = 3, $b$[0]);
} else {
curSpecType=($b$[0] = 2, $b$[0]);
}break;
case 99:
compSpec=io.scif.jj2000.j2k.ModuleSpec.parseIdx$S$I(word, this.nComp);
if (curSpecType == 2) {
curSpecType=($b$[0] = 3, $b$[0]);
} else {
curSpecType=($b$[0] = 1, $b$[0]);
}break;
default:
if (!Character.isDigit$C(word.charAt$I(0))) {
errMsg="Bad construction for parameter: " + word;
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[errMsg]);
}v[0]=Clazz.new_($I$(1,1));
v[1]=Clazz.new_($I$(1,1));
while (true){
try {
w= new Integer(word);
try {
word=stk.nextToken$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.util.NoSuchElementException")){
errMsg="\'Cpp\' option : could not parse the precinct\'s width";
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[errMsg]);
} else {
throw e;
}
}
h= new Integer(word);
if (w.intValue$() != (1 << $I$(3).log2$I(w.intValue$())) || h.intValue$() != (1 << $I$(3).log2$I(h.intValue$())) ) {
errMsg="Precinct dimensions must be powers of 2";
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[errMsg]);
}} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
errMsg="'" + "Cpp" + "' option : the argument '" + word + "' could not be parsed." ;
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[errMsg]);
} else {
throw e;
}
}
v[0].addElement$TE(w);
v[1].addElement$TE(h);
if (stk.hasMoreTokens$()) {
word=stk.nextToken$();
if (!Character.isDigit$C(word.charAt$I(0))) {
wasReadingPrecinctSize=true;
if (curSpecType == 0) {
this.setDefault$O(v);
} else if (curSpecType == 2) {
for (ti=tileSpec.length - 1; ti >= 0; ti--) {
if (tileSpec[ti]) {
this.setTileDef$I$O(ti, v);
}}
} else if (curSpecType == 1) {
for (ci=compSpec.length - 1; ci >= 0; ci--) {
if (compSpec[ci]) {
this.setCompDef$I$O(ci, v);
}}
} else {
for (ti=tileSpec.length - 1; ti >= 0; ti--) {
for (ci=compSpec.length - 1; ci >= 0; ci--) {
if (tileSpec[ti] && compSpec[ci] ) {
this.setTileCompVal$I$I$O(ti, ci, v);
}}
}
}curSpecType=($b$[0] = 0, $b$[0]);
tileSpec=null;
compSpec=null;
break;
} else {
}} else {
if (curSpecType == 0) {
this.setDefault$O(v);
} else if (curSpecType == 2) {
for (ti=tileSpec.length - 1; ti >= 0; ti--) {
if (tileSpec[ti]) {
this.setTileDef$I$O(ti, v);
}}
} else if (curSpecType == 1) {
for (ci=compSpec.length - 1; ci >= 0; ci--) {
if (compSpec[ci]) {
this.setCompDef$I$O(ci, v);
}}
} else {
for (ti=tileSpec.length - 1; ti >= 0; ti--) {
for (ci=compSpec.length - 1; ci >= 0; ci--) {
if (tileSpec[ti] && compSpec[ci] ) {
this.setTileCompVal$I$I$O(ti, ci, v);
}}
}
}endOfParamList=true;
break;
}}
break;
}
}
}, 1);

Clazz.newMeth(C$, 'getPPX$I$I$I', function (t, c, rl) {
var mrl;
var idx;
var v=null;
var tileSpecified=(t != -1 ? true : false);
var compSpecified=(c != -1 ? true : false);
if (tileSpecified && compSpecified ) {
mrl=(this.dls.getTileCompVal$I$I(t, c)).intValue$();
v=this.getTileCompVal$I$I(t, c);
} else if (tileSpecified && !compSpecified ) {
mrl=(this.dls.getTileDef$I(t)).intValue$();
v=this.getTileDef$I(t);
} else if (!tileSpecified && compSpecified ) {
mrl=(this.dls.getCompDef$I(c)).intValue$();
v=this.getCompDef$I(c);
} else {
mrl=(this.dls.getDefault$()).intValue$();
v=this.getDefault$();
}idx=mrl - rl;
if (v[0].size$() > idx) {
return (v[0].elementAt$I(idx)).intValue$();
} else {
return (v[0].elementAt$I(v[0].size$() - 1)).intValue$();
}});

Clazz.newMeth(C$, 'getPPY$I$I$I', function (t, c, rl) {
var mrl;
var idx;
var v=null;
var tileSpecified=(t != -1 ? true : false);
var compSpecified=(c != -1 ? true : false);
if (tileSpecified && compSpecified ) {
mrl=(this.dls.getTileCompVal$I$I(t, c)).intValue$();
v=this.getTileCompVal$I$I(t, c);
} else if (tileSpecified && !compSpecified ) {
mrl=(this.dls.getTileDef$I(t)).intValue$();
v=this.getTileDef$I(t);
} else if (!tileSpecified && compSpecified ) {
mrl=(this.dls.getCompDef$I(c)).intValue$();
v=this.getCompDef$I(c);
} else {
mrl=(this.dls.getDefault$()).intValue$();
v=this.getDefault$();
}idx=mrl - rl;
if (v[1].size$() > idx) {
return (v[1].elementAt$I(idx)).intValue$();
} else {
return (v[1].elementAt$I(v[1].size$() - 1)).intValue$();
}});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:15 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
