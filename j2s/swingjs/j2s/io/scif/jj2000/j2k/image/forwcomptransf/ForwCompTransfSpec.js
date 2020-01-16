(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.image.forwcomptransf"),p$1={},I$=[[0,'java.util.StringTokenizer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ForwCompTransfSpec", null, 'io.scif.jj2000.j2k.image.CompTransfSpec', 'io.scif.jj2000.j2k.wavelet.FilterTypes');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.defaultValue=null;
}, 1);

C$.$fields$=[['S',['defaultValue']]]

Clazz.newMeth(C$, 'c$$I$I$B$io_scif_jj2000_j2k_wavelet_analysis_AnWTFilterSpec$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$S', function (nt, nc, type, wfs, wp, values) {
;C$.superclazz.c$$I$I$B.apply(this,[nt, nc, ($b$[0] = type, $b$[0])]);C$.$init$.apply(this);
var param=values;
this.specified=values;
if (values == null ) {
if (nc < 3) {
this.setDefault$O("none");
return;
} else if (wp.getLossless$()) {
this.setDefault$O("rct");
return;
} else {
var anfilt;
var filtType=Clazz.array(Integer.TYPE, [this.nComp]);
for (var c=0; c < 3; c++) {
anfilt=wfs.getCompDef$I(c);
filtType[c]=anfilt[0][0].getFilterType$();
}
var reject=false;
for (var c=1; c < 3; c++) {
if (filtType[c] != filtType[0]) reject=true;
}
if (reject) {
this.setDefault$O("none");
} else {
anfilt=wfs.getCompDef$I(0);
if (anfilt[0][0].getFilterType$() == 0) {
this.setDefault$O("ict");
} else {
this.setDefault$O("rct");
}}}for (var t=0; t < nt; t++) {
var anfilt;
var filtType=Clazz.array(Integer.TYPE, [this.nComp]);
for (var c=0; c < 3; c++) {
anfilt=wfs.getTileCompVal$I$I(t, c);
filtType[c]=anfilt[0][0].getFilterType$();
}
var reject=false;
for (var c=1; c < this.nComp; c++) {
if (filtType[c] != filtType[0]) reject=true;
}
if (reject) {
this.setTileDef$I$O(t, "none");
} else {
anfilt=wfs.getTileCompVal$I$I(t, 0);
if (anfilt[0][0].getFilterType$() == 0) {
this.setTileDef$I$O(t, "ict");
} else {
this.setTileDef$I$O(t, "rct");
}}}
return;
}if (param.equalsIgnoreCase$S("true")) param="on";
var stk=Clazz.new_($I$(1,1).c$$S,[param]);
var word;
var curSpecType=($b$[0] = 0, $b$[0]);
var tileSpec=null;
var value;
while (stk.hasMoreTokens$()){
word=stk.nextToken$();
switch ((word.charCodeAt$I(0))) {
case 116:
tileSpec=io.scif.jj2000.j2k.ModuleSpec.parseIdx$S$I(word, this.nTiles);
if (curSpecType == 1) {
curSpecType=($b$[0] = 3, $b$[0]);
} else {
curSpecType=($b$[0] = 2, $b$[0]);
}break;
case 99:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Component specific  parameters not allowed with \'-Mct\' option"]);
default:
if (word.equals$O("off")) {
if (curSpecType == 0) {
this.setDefault$O("none");
} else if (curSpecType == 2) {
for (var i=tileSpec.length - 1; i >= 0; i--) if (tileSpec[i]) {
this.setTileDef$I$O(i, "none");
}
}} else if (word.equals$O("on")) {
if (nc < 3) {
this.setDefault$O("none");
break;
}if (curSpecType == 0) {
this.setDefault$O("rct");
} else if (curSpecType == 2) {
for (var i=tileSpec.length - 1; i >= 0; i--) {
if (tileSpec[i]) {
if (p$1.getFilterType$I$io_scif_jj2000_j2k_wavelet_analysis_AnWTFilterSpec.apply(this, [i, wfs]) == 1) {
this.setTileDef$I$O(i, "rct");
} else {
this.setTileDef$I$O(i, "ict");
}}}
}} else {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Default parameter of " + "option Mct not" + " recognized: " + param ]);
}curSpecType=($b$[0] = 0, $b$[0]);
tileSpec=null;
break;
}
}
if (this.getDefault$() == null ) {
this.setDefault$O("none");
for (var t=0; t < nt; t++) {
if (this.isTileSpecified$I(t)) {
continue;
}var anfilt;
var filtType=Clazz.array(Integer.TYPE, [this.nComp]);
for (var c=0; c < 3; c++) {
anfilt=wfs.getTileCompVal$I$I(t, c);
filtType[c]=anfilt[0][0].getFilterType$();
}
var reject=false;
for (var c=1; c < this.nComp; c++) {
if (filtType[c] != filtType[0]) reject=true;
}
if (reject) {
this.setTileDef$I$O(t, "none");
} else {
anfilt=wfs.getTileCompVal$I$I(t, 0);
if (anfilt[0][0].getFilterType$() == 0) {
this.setTileDef$I$O(t, "ict");
} else {
this.setTileDef$I$O(t, "rct");
}}}
}for (var t=nt - 1; t >= 0; t--) {
if ((this.getTileDef$I(t)).equals$O("none")) {
continue;
} else if ((this.getTileDef$I(t)).equals$O("rct")) {
var filterType=p$1.getFilterType$I$io_scif_jj2000_j2k_wavelet_analysis_AnWTFilterSpec.apply(this, [t, wfs]);
switch (filterType) {
case 1:
break;
case 0:
if (this.isTileSpecified$I(t)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot use RCT " + "with 9x7 filter " + "in tile " + t ]);
} else {
this.setTileDef$I$O(t, "ict");
}break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Default filter is not JPEG 2000 part I compliant"]);
}
} else {
var filterType=p$1.getFilterType$I$io_scif_jj2000_j2k_wavelet_analysis_AnWTFilterSpec.apply(this, [t, wfs]);
switch (filterType) {
case 1:
if (this.isTileSpecified$I(t)) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot use ICT " + "with filter 5x3 " + "in tile " + t ]);
} else {
this.setTileDef$I$O(t, "rct");
}break;
case 0:
break;
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Default filter is not JPEG 2000 part I compliant"]);
}
}}
}, 1);

Clazz.newMeth(C$, 'getFilterType$I$io_scif_jj2000_j2k_wavelet_analysis_AnWTFilterSpec', function (t, wfs) {
var anfilt;
var filtType=Clazz.array(Integer.TYPE, [this.nComp]);
for (var c=0; c < this.nComp; c++) {
if (t == -1) anfilt=wfs.getCompDef$I(c);
 else anfilt=wfs.getTileCompVal$I$I(t, c);
filtType[c]=anfilt[0][0].getFilterType$();
}
var reject=false;
for (var c=1; c < this.nComp; c++) {
if (filtType[c] != filtType[0]) reject=true;
}
if (reject) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Can not use component transformation when components do not use the same filters"]);
}return filtType[0];
}, p$1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
