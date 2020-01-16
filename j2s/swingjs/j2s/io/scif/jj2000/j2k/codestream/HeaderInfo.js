(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.codestream"),I$=[[0,'Error','java.util.Hashtable',['io.scif.jj2000.j2k.codestream.HeaderInfo','.SIZ'],['io.scif.jj2000.j2k.codestream.HeaderInfo','.SOT'],['io.scif.jj2000.j2k.codestream.HeaderInfo','.COD'],['io.scif.jj2000.j2k.codestream.HeaderInfo','.COC'],['io.scif.jj2000.j2k.codestream.HeaderInfo','.RGN'],['io.scif.jj2000.j2k.codestream.HeaderInfo','.QCD'],['io.scif.jj2000.j2k.codestream.HeaderInfo','.QCC'],['io.scif.jj2000.j2k.codestream.HeaderInfo','.POC'],['io.scif.jj2000.j2k.codestream.HeaderInfo','.CRG'],['io.scif.jj2000.j2k.codestream.HeaderInfo','.COM']]],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "HeaderInfo", function(){
Clazz.newInstance(this, arguments,0,C$);
}, null, ['io.scif.jj2000.j2k.codestream.Markers', 'io.scif.jj2000.j2k.codestream.ProgressionType', 'io.scif.jj2000.j2k.wavelet.FilterTypes', 'Cloneable']);
C$.$classes$=[['SIZ',1],['SOT',1],['COD',1],['COC',1],['RGN',1],['QCD',1],['QCC',1],['POC',1],['CRG',1],['COM',1]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.sot=Clazz.new_($I$(2,1));
this.cod=Clazz.new_($I$(2,1));
this.coc=Clazz.new_($I$(2,1));
this.rgn=Clazz.new_($I$(2,1));
this.qcd=Clazz.new_($I$(2,1));
this.qcc=Clazz.new_($I$(2,1));
this.poc=Clazz.new_($I$(2,1));
this.com=Clazz.new_($I$(2,1));
this.ncom=0;
}, 1);

C$.$fields$=[['I',['ncom'],'O',['siz','io.scif.jj2000.j2k.codestream.HeaderInfo.SIZ','sot','java.util.Hashtable','+cod','+coc','+rgn','+qcd','+qcc','+poc','crg','io.scif.jj2000.j2k.codestream.HeaderInfo.CRG','com','java.util.Hashtable']]]

Clazz.newMeth(C$, 'getNewSIZ$', function () {
return Clazz.new_($I$(3,1), [this, null]);
});

Clazz.newMeth(C$, 'getNewSOT$', function () {
return Clazz.new_($I$(4,1), [this, null]);
});

Clazz.newMeth(C$, 'getNewCOD$', function () {
return Clazz.new_($I$(5,1), [this, null]);
});

Clazz.newMeth(C$, 'getNewCOC$', function () {
return Clazz.new_($I$(6,1), [this, null]);
});

Clazz.newMeth(C$, 'getNewRGN$', function () {
return Clazz.new_($I$(7,1), [this, null]);
});

Clazz.newMeth(C$, 'getNewQCD$', function () {
return Clazz.new_($I$(8,1), [this, null]);
});

Clazz.newMeth(C$, 'getNewQCC$', function () {
return Clazz.new_($I$(9,1), [this, null]);
});

Clazz.newMeth(C$, 'getNewPOC$', function () {
return Clazz.new_($I$(10,1), [this, null]);
});

Clazz.newMeth(C$, 'getNewCRG$', function () {
return Clazz.new_($I$(11,1), [this, null]);
});

Clazz.newMeth(C$, 'getNewCOM$', function () {
this.ncom++;
return Clazz.new_($I$(12,1), [this, null]);
});

Clazz.newMeth(C$, 'getNumCOM$', function () {
return this.ncom;
});

Clazz.newMeth(C$, 'toStringMainHeader$', function () {
var nc=this.siz.csiz;
var str="" + this.siz;
if (this.cod.get$O("main") != null ) {
str += "" + this.cod.get$O("main");
}for (var c=0; c < nc; c++) {
if (this.coc.get$O("main_c" + c) != null ) {
str += "" + this.coc.get$O("main_c" + c);
}}
if (this.qcd.get$O("main") != null ) {
str += "" + this.qcd.get$O("main");
}for (var c=0; c < nc; c++) {
if (this.qcc.get$O("main_c" + c) != null ) {
str += "" + this.qcc.get$O("main_c" + c);
}}
for (var c=0; c < nc; c++) {
if (this.rgn.get$O("main_c" + c) != null ) {
str += "" + this.rgn.get$O("main_c" + c);
}}
if (this.poc.get$O("main") != null ) {
str += "" + this.poc.get$O("main");
}if (this.crg != null ) {
str += "" + this.crg;
}for (var i=0; i < this.ncom; i++) {
if (this.com.get$O("main_" + i) != null ) {
str += "" + this.com.get$O("main_" + i);
}}
return str;
});

Clazz.newMeth(C$, 'toStringTileHeader$I$I', function (t, ntp) {
var nc=this.siz.csiz;
var str="";
for (var i=0; i < ntp; i++) {
str += "Tile-part " + i + ", tile " + t + ":\n" ;
str += "" + this.sot.get$O("t" + t + "_tp" + i );
}
if (this.cod.get$O("t" + t) != null ) {
str += "" + this.cod.get$O("t" + t);
}for (var c=0; c < nc; c++) {
if (this.coc.get$O("t" + t + "_c" + c ) != null ) {
str += "" + this.coc.get$O("t" + t + "_c" + c );
}}
if (this.qcd.get$O("t" + t) != null ) {
str += "" + this.qcd.get$O("t" + t);
}for (var c=0; c < nc; c++) {
if (this.qcc.get$O("t" + t + "_c" + c ) != null ) {
str += "" + this.qcc.get$O("t" + t + "_c" + c );
}}
for (var c=0; c < nc; c++) {
if (this.rgn.get$O("t" + t + "_c" + c ) != null ) {
str += "" + this.rgn.get$O("t" + t + "_c" + c );
}}
if (this.poc.get$O("t" + t) != null ) {
str += "" + this.poc.get$O("t" + t);
}return str;
});

Clazz.newMeth(C$, 'toStringThNoSOT$I$I', function (t, ntp) {
var nc=this.siz.csiz;
var str="";
if (this.cod.get$O("t" + t) != null ) {
str += "" + this.cod.get$O("t" + t);
}for (var c=0; c < nc; c++) {
if (this.coc.get$O("t" + t + "_c" + c ) != null ) {
str += "" + this.coc.get$O("t" + t + "_c" + c );
}}
if (this.qcd.get$O("t" + t) != null ) {
str += "" + this.qcd.get$O("t" + t);
}for (var c=0; c < nc; c++) {
if (this.qcc.get$O("t" + t + "_c" + c ) != null ) {
str += "" + this.qcc.get$O("t" + t + "_c" + c );
}}
for (var c=0; c < nc; c++) {
if (this.rgn.get$O("t" + t + "_c" + c ) != null ) {
str += "" + this.rgn.get$O("t" + t + "_c" + c );
}}
if (this.poc.get$O("t" + t) != null ) {
str += "" + this.poc.get$O("t" + t);
}return str;
});

Clazz.newMeth(C$, 'getCopy$I', function (nt) {
var nhi=null;
try {
nhi=this.clone$();
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(1,1).c$$S,["Cannot clone HeaderInfo instance"]);
} else {
throw e;
}
}
nhi.siz=this.siz.getCopy$();
if (this.cod.get$O("main") != null ) {
var ms=this.cod.get$O("main");
nhi.cod.put$TK$TV("main", ms.getCopy$());
}for (var t=0; t < nt; t++) {
if (this.cod.get$O("t" + t) != null ) {
var ms=this.cod.get$O("t" + t);
nhi.cod.put$TK$TV("t" + t, ms.getCopy$());
}}
return nhi;
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.HeaderInfo, "SIZ", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.compWidth=null;
this.maxCompWidth=-1;
this.compHeight=null;
this.maxCompHeight=-1;
this.numTiles=-1;
this.origSigned=null;
this.origBitDepth=null;
}, 1);

C$.$fields$=[['I',['lsiz','rsiz','xsiz','ysiz','x0siz','y0siz','xtsiz','ytsiz','xt0siz','yt0siz','csiz','maxCompWidth','maxCompHeight','numTiles'],'O',['ssiz','int[]','+xrsiz','+yrsiz','+compWidth','+compHeight','origSigned','boolean[]','origBitDepth','int[]']]]

Clazz.newMeth(C$, 'getCompImgWidth$I', function (c) {
if (this.compWidth == null ) {
this.compWidth=Clazz.array(Integer.TYPE, [this.csiz]);
for (var cc=0; cc < this.csiz; cc++) {
this.compWidth[cc]=((Math.ceil((this.xsiz) / this.xrsiz[cc]) - Math.ceil(this.x0siz / this.xrsiz[cc]))|0);
}
}return this.compWidth[c];
});

Clazz.newMeth(C$, 'getMaxCompWidth$', function () {
if (this.compWidth == null ) {
this.compWidth=Clazz.array(Integer.TYPE, [this.csiz]);
for (var cc=0; cc < this.csiz; cc++) {
this.compWidth[cc]=((Math.ceil((this.xsiz) / this.xrsiz[cc]) - Math.ceil(this.x0siz / this.xrsiz[cc]))|0);
}
}if (this.maxCompWidth == -1) {
for (var c=0; c < this.csiz; c++) {
if (this.compWidth[c] > this.maxCompWidth) {
this.maxCompWidth=this.compWidth[c];
}}
}return this.maxCompWidth;
});

Clazz.newMeth(C$, 'getCompImgHeight$I', function (c) {
if (this.compHeight == null ) {
this.compHeight=Clazz.array(Integer.TYPE, [this.csiz]);
for (var cc=0; cc < this.csiz; cc++) {
this.compHeight[cc]=((Math.ceil((this.ysiz) / this.yrsiz[cc]) - Math.ceil(this.y0siz / this.yrsiz[cc]))|0);
}
}return this.compHeight[c];
});

Clazz.newMeth(C$, 'getMaxCompHeight$', function () {
if (this.compHeight == null ) {
this.compHeight=Clazz.array(Integer.TYPE, [this.csiz]);
for (var cc=0; cc < this.csiz; cc++) {
this.compHeight[cc]=((Math.ceil((this.ysiz) / this.yrsiz[cc]) - Math.ceil(this.y0siz / this.yrsiz[cc]))|0);
}
}if (this.maxCompHeight == -1) {
for (var c=0; c < this.csiz; c++) {
if (this.compHeight[c] != this.maxCompHeight) {
this.maxCompHeight=this.compHeight[c];
}}
}return this.maxCompHeight;
});

Clazz.newMeth(C$, 'getNumTiles$', function () {
if (this.numTiles == -1) {
this.numTiles=(((this.xsiz - this.xt0siz + this.xtsiz - 1)/this.xtsiz|0)) * (((this.ysiz - this.yt0siz + this.ytsiz - 1)/this.ytsiz|0));
}return this.numTiles;
});

Clazz.newMeth(C$, 'isOrigSigned$I', function (c) {
if (this.origSigned == null ) {
this.origSigned=Clazz.array(Boolean.TYPE, [this.csiz]);
for (var cc=0; cc < this.csiz; cc++) {
this.origSigned[cc]=((this.ssiz[cc] >>> 7) == 1);
}
}return this.origSigned[c];
});

Clazz.newMeth(C$, 'getOrigBitDepth$I', function (c) {
if (this.origBitDepth == null ) {
this.origBitDepth=Clazz.array(Integer.TYPE, [this.csiz]);
for (var cc=0; cc < this.csiz; cc++) {
this.origBitDepth[cc]=(this.ssiz[cc] & (127)) + 1;
}
}return this.origBitDepth[c];
});

Clazz.newMeth(C$, 'getCopy$', function () {
var ms=null;
try {
ms=this.clone$();
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(1,1).c$$S,["Cannot clone SIZ marker segment"]);
} else {
throw e;
}
}
return ms;
});

Clazz.newMeth(C$, 'toString', function () {
var str="\n --- SIZ (" + this.lsiz + " bytes) ---\n" ;
str += " Capabilities : " + this.rsiz + "\n" ;
str += " Image dim.   : " + (this.xsiz - this.x0siz) + "x" + (this.ysiz - this.y0siz) + ", (off=" + this.x0siz + "," + this.y0siz + ")\n" ;
str += " Tile dim.    : " + this.xtsiz + "x" + this.ytsiz + ", (off=" + this.xt0siz + "," + this.yt0siz + ")\n" ;
str += " Component(s) : " + this.csiz + "\n" ;
str += " Orig. depth  : ";
for (var i=0; i < this.csiz; i++) {
str += this.getOrigBitDepth$I(i) + " ";
}
str += "\n";
str += " Orig. signed : ";
for (var i=0; i < this.csiz; i++) {
str += this.isOrigSigned$I(i) + " ";
}
str += "\n";
str += " Subs. factor : ";
for (var i=0; i < this.csiz; i++) {
str += this.xrsiz[i] + "," + this.yrsiz[i] + " " ;
}
str += "\n";
return str;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HeaderInfo, "SOT", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['lsot','isot','psot','tpsot','tnsot']]]

Clazz.newMeth(C$, 'toString', function () {
var str="\n --- SOT (" + this.lsot + " bytes) ---\n" ;
str += "Tile index         : " + this.isot + "\n" ;
str += "Tile-part length   : " + this.psot + " bytes\n" ;
str += "Tile-part index    : " + this.tpsot + "\n" ;
str += "Num. of tile-parts : " + this.tnsot + "\n" ;
str += "\n";
return str;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HeaderInfo, "COD", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.spcod_t=Clazz.array(Integer.TYPE, [1]);
}, 1);

C$.$fields$=[['I',['lcod','scod','sgcod_po','sgcod_nl','sgcod_mct','spcod_ndl','spcod_cw','spcod_ch','spcod_cs'],'O',['spcod_t','int[]','+spcod_ps']]]

Clazz.newMeth(C$, 'getCopy$', function () {
var ms=null;
try {
ms=this.clone$();
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(1,1).c$$S,["Cannot clone SIZ marker segment"]);
} else {
throw e;
}
}
return ms;
});

Clazz.newMeth(C$, 'toString', function () {
var str="\n --- COD (" + this.lcod + " bytes) ---\n" ;
str += " Coding style   : ";
if (this.scod == 0) {
str += "Default";
} else {
if ((this.scod & 1) != 0) str += "Precints ";
if ((this.scod & 2) != 0) str += "SOP ";
if ((this.scod & 4) != 0) str += "EPH ";
var cb0x=((this.scod & 8) != 0) ? 1 : 0;
var cb0y=((this.scod & 16) != 0) ? 1 : 0;
if (cb0x != 0 || cb0y != 0 ) {
str += "Code-blocks offset";
str += "\n Cblk partition : " + cb0x + "," + cb0y ;
}}str += "\n";
str += " Cblk style     : ";
if (this.spcod_cs == 0) {
str += "Default";
} else {
if ((this.spcod_cs & 1) != 0) str += "Bypass ";
if ((this.spcod_cs & 2) != 0) str += "Reset ";
if ((this.spcod_cs & 4) != 0) str += "Terminate ";
if ((this.spcod_cs & 8) != 0) str += "Vert_causal ";
if ((this.spcod_cs & 16) != 0) str += "Predict ";
if ((this.spcod_cs & 32) != 0) str += "Seg_symb ";
}str += "\n";
str += " Num. of levels : " + this.spcod_ndl + "\n" ;
switch (this.sgcod_po) {
case 0:
str += " Progress. type : LY_RES_COMP_POS_PROG\n";
break;
case 1:
str += " Progress. type : RES_LY_COMP_POS_PROG\n";
break;
case 2:
str += " Progress. type : RES_POS_COMP_LY_PROG\n";
break;
case 3:
str += " Progress. type : POS_COMP_RES_LY_PROG\n";
break;
case 4:
str += " Progress. type : COMP_POS_RES_LY_PROG\n";
break;
}
str += " Num. of layers : " + this.sgcod_nl + "\n" ;
str += " Cblk dimension : " + (1 << (this.spcod_cw + 2)) + "x" + (1 << (this.spcod_ch + 2)) + "\n" ;
switch (this.spcod_t[0]) {
case 0:
str += " Filter         : 9-7 irreversible\n";
break;
case 1:
str += " Filter         : 5-3 reversible\n";
break;
}
str += " Multi comp tr. : " + (this.sgcod_mct == 1) + "\n" ;
if (this.spcod_ps != null ) {
str += " Precincts      : ";
for (var i=0; i < this.spcod_ps.length; i++) {
str += (1 << (this.spcod_ps[i] & 15)) + "x" + (1 << (((this.spcod_ps[i] & 240) >> 4))) + " " ;
}
}str += "\n";
return str;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HeaderInfo, "COC", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.spcoc_t=Clazz.array(Integer.TYPE, [1]);
}, 1);

C$.$fields$=[['I',['lcoc','ccoc','scoc','spcoc_ndl','spcoc_cw','spcoc_ch','spcoc_cs'],'O',['spcoc_t','int[]','+spcoc_ps']]]

Clazz.newMeth(C$, 'toString', function () {
var str="\n --- COC (" + this.lcoc + " bytes) ---\n" ;
str += " Component      : " + this.ccoc + "\n" ;
str += " Coding style   : ";
if (this.scoc == 0) {
str += "Default";
} else {
if ((this.scoc & 1) != 0) str += "Precints ";
if ((this.scoc & 2) != 0) str += "SOP ";
if ((this.scoc & 4) != 0) str += "EPH ";
}str += "\n";
str += " Cblk style     : ";
if (this.spcoc_cs == 0) {
str += "Default";
} else {
if ((this.spcoc_cs & 1) != 0) str += "Bypass ";
if ((this.spcoc_cs & 2) != 0) str += "Reset ";
if ((this.spcoc_cs & 4) != 0) str += "Terminate ";
if ((this.spcoc_cs & 8) != 0) str += "Vert_causal ";
if ((this.spcoc_cs & 16) != 0) str += "Predict ";
if ((this.spcoc_cs & 32) != 0) str += "Seg_symb ";
}str += "\n";
str += " Num. of levels : " + this.spcoc_ndl + "\n" ;
str += " Cblk dimension : " + (1 << (this.spcoc_cw + 2)) + "x" + (1 << (this.spcoc_ch + 2)) + "\n" ;
switch (this.spcoc_t[0]) {
case 0:
str += " Filter         : 9-7 irreversible\n";
break;
case 1:
str += " Filter         : 5-3 reversible\n";
break;
}
if (this.spcoc_ps != null ) {
str += " Precincts      : ";
for (var i=0; i < this.spcoc_ps.length; i++) {
str += (1 << (this.spcoc_ps[i] & 15)) + "x" + (1 << (((this.spcoc_ps[i] & 240) >> 4))) + " " ;
}
}str += "\n";
return str;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HeaderInfo, "RGN", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['lrgn','crgn','srgn','sprgn']]]

Clazz.newMeth(C$, 'toString', function () {
var str="\n --- RGN (" + this.lrgn + " bytes) ---\n" ;
str += " Component : " + this.crgn + "\n" ;
if (this.srgn == 0) {
str += " ROI style : Implicit\n";
} else {
str += " ROI style : Unsupported\n";
}str += " ROI shift : " + this.sprgn + "\n" ;
str += "\n";
return str;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HeaderInfo, "QCD", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.qType=-1;
this.gb=-1;
}, 1);

C$.$fields$=[['I',['lqcd','sqcd','qType','gb'],'O',['spqcd','int[][]']]]

Clazz.newMeth(C$, 'getQuantType$', function () {
if (this.qType == -1) {
this.qType=this.sqcd & ~(224);
}return this.qType;
});

Clazz.newMeth(C$, 'getNumGuardBits$', function () {
if (this.gb == -1) {
this.gb=(this.sqcd >> 5) & 7;
}return this.gb;
});

Clazz.newMeth(C$, 'toString', function () {
var str="\n --- QCD (" + this.lqcd + " bytes) ---\n" ;
str += " Quant. type    : ";
var qt=this.getQuantType$();
if (qt == 0) str += "No quantization \n";
 else if (qt == 1) str += "Scalar derived\n";
 else if (qt == 2) str += "Scalar expounded\n";
str += " Guard bits     : " + this.getNumGuardBits$() + "\n" ;
if (qt == 0) {
str += " Exponents   :\n";
var exp;
for (var i=0; i < this.spqcd.length; i++) {
for (var j=0; j < this.spqcd[i].length; j++) {
if (i == 0 && j == 0 ) {
exp=(this.spqcd[0][0] >> 3) & 31;
str += "\tr=0 : " + exp + "\n" ;
} else if (i != 0 && j > 0 ) {
exp=(this.spqcd[i][j] >> 3) & 31;
str += "\tr=" + i + ",s=" + j + " : " + exp + "\n" ;
}}
}
} else {
str += " Exp / Mantissa : \n";
var exp;
var mantissa;
for (var i=0; i < this.spqcd.length; i++) {
for (var j=0; j < this.spqcd[i].length; j++) {
if (i == 0 && j == 0 ) {
exp=(this.spqcd[0][0] >> 11) & 31;
mantissa=(-1.0 - ((this.spqcd[0][0] & 2047)) / (2048)) / (-1 << exp);
str += "\tr=0 : " + exp + " / " + new Double(mantissa).toString() + "\n" ;
} else if (i != 0 && j > 0 ) {
exp=(this.spqcd[i][j] >> 11) & 31;
mantissa=(-1.0 - ((this.spqcd[i][j] & 2047)) / (2048)) / (-1 << exp);
str += "\tr=" + i + ",s=" + j + " : " + exp + " / " + new Double(mantissa).toString() + "\n" ;
}}
}
}str += "\n";
return str;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HeaderInfo, "QCC", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.qType=-1;
this.gb=-1;
}, 1);

C$.$fields$=[['I',['lqcc','cqcc','sqcc','qType','gb'],'O',['spqcc','int[][]']]]

Clazz.newMeth(C$, 'getQuantType$', function () {
if (this.qType == -1) {
this.qType=this.sqcc & ~(224);
}return this.qType;
});

Clazz.newMeth(C$, 'getNumGuardBits$', function () {
if (this.gb == -1) {
this.gb=(this.sqcc >> 5) & 7;
}return this.gb;
});

Clazz.newMeth(C$, 'toString', function () {
var str="\n --- QCC (" + this.lqcc + " bytes) ---\n" ;
str += " Component      : " + this.cqcc + "\n" ;
str += " Quant. type    : ";
var qt=this.getQuantType$();
if (qt == 0) str += "No quantization \n";
 else if (qt == 1) str += "Scalar derived\n";
 else if (qt == 2) str += "Scalar expounded\n";
str += " Guard bits     : " + this.getNumGuardBits$() + "\n" ;
if (qt == 0) {
str += " Exponents   :\n";
var exp;
for (var i=0; i < this.spqcc.length; i++) {
for (var j=0; j < this.spqcc[i].length; j++) {
if (i == 0 && j == 0 ) {
exp=(this.spqcc[0][0] >> 3) & 31;
str += "\tr=0 : " + exp + "\n" ;
} else if (i != 0 && j > 0 ) {
exp=(this.spqcc[i][j] >> 3) & 31;
str += "\tr=" + i + ",s=" + j + " : " + exp + "\n" ;
}}
}
} else {
str += " Exp / Mantissa : \n";
var exp;
var mantissa;
for (var i=0; i < this.spqcc.length; i++) {
for (var j=0; j < this.spqcc[i].length; j++) {
if (i == 0 && j == 0 ) {
exp=(this.spqcc[0][0] >> 11) & 31;
mantissa=(-1.0 - ((this.spqcc[0][0] & 2047)) / (2048)) / (-1 << exp);
str += "\tr=0 : " + exp + " / " + new Double(mantissa).toString() + "\n" ;
} else if (i != 0 && j > 0 ) {
exp=(this.spqcc[i][j] >> 11) & 31;
mantissa=(-1.0 - ((this.spqcc[i][j] & 2047)) / (2048)) / (-1 << exp);
str += "\tr=" + i + ",s=" + j + " : " + exp + " / " + new Double(mantissa).toString() + "\n" ;
}}
}
}str += "\n";
return str;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HeaderInfo, "POC", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['lpoc'],'O',['rspoc','int[]','+cspoc','+lyepoc','+repoc','+cepoc','+ppoc']]]

Clazz.newMeth(C$, 'toString', function () {
var str="\n --- POC (" + this.lpoc + " bytes) ---\n" ;
str += " Chg_idx RSpoc CSpoc LYEpoc REpoc CEpoc Ppoc\n";
for (var chg=0; chg < this.rspoc.length; chg++) {
str += "   " + chg + "      " + this.rspoc[chg] + "     " + this.cspoc[chg] + "     " + this.lyepoc[chg] + "      " + this.repoc[chg] + "     " + this.cepoc[chg] ;
switch (this.ppoc[chg]) {
case 0:
str += "  LY_RES_COMP_POS_PROG\n";
break;
case 1:
str += "  RES_LY_COMP_POS_PROG\n";
break;
case 2:
str += "  RES_POS_COMP_LY_PROG\n";
break;
case 3:
str += "  POS_COMP_RES_LY_PROG\n";
break;
case 4:
str += "  COMP_POS_RES_LY_PROG\n";
break;
}
}
str += "\n";
return str;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HeaderInfo, "CRG", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['lcrg'],'O',['xcrg','int[]','+ycrg']]]

Clazz.newMeth(C$, 'toString', function () {
var str="\n --- CRG (" + this.lcrg + " bytes) ---\n" ;
for (var c=0; c < this.xcrg.length; c++) {
str += " Component " + c + " offset : " + this.xcrg[c] + "," + this.ycrg[c] + "\n" ;
}
str += "\n";
return str;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.HeaderInfo, "COM", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['lcom','rcom'],'O',['ccom','byte[]']]]

Clazz.newMeth(C$, 'toString', function () {
var str="\n --- COM (" + this.lcom + " bytes) ---\n" ;
if (this.rcom == 0) {
str += " Registration : General use (binary values)\n";
} else if (this.rcom == 1) {
str += " Registration : General use (IS 8859-15:1999 (Latin) values)\n";
str += " Text         : " + ( String.instantialize(this.ccom)) + "\n" ;
} else {
str += " Registration : Unknown\n";
}str += "\n";
return str;
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:14 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
