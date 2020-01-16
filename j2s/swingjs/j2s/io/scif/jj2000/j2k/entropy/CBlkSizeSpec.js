(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.entropy"),p$1={},I$=[[0,'java.util.StringTokenizer','io.scif.jj2000.j2k.util.MathUtil']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CBlkSizeSpec", null, 'io.scif.jj2000.j2k.ModuleSpec');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.defaultValue="64 64";
this.maxCBlkWidth=0;
this.maxCBlkHeight=0;
}, 1);

C$.$fields$=[['I',['maxCBlkWidth','maxCBlkHeight'],'S',['defaultValue']]]

Clazz.newMeth(C$, 'c$$I$I$B', function (nt, nc, type) {
;C$.superclazz.c$$I$I$B.apply(this,[nt, nc, ($b$[0] = type, $b$[0])]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$B$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$S', function (nt, nc, type, wp, values) {
;C$.superclazz.c$$I$I$B.apply(this,[nt, nc, ($b$[0] = type, $b$[0])]);C$.$init$.apply(this);
var firstVal=true;
this.specified=values;
var param=values;
if (param == null ) param=this.defaultValue;
var stk=Clazz.new_($I$(1,1).c$$S,[param]);
var curSpecType=($b$[0] = 0, $b$[0]);
var tileSpec=null;
var compSpec=null;
var i;
var xIdx;
var ci;
var ti;
var word=null;
var errMsg=null;
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
}var dim=Clazz.array(Integer, [2]);
try {
dim[0]= new Integer(word);
if (dim[0].intValue$() > 1024) {
errMsg="\'Cblksiz\' option : the code-block\'s width cannot be greater than 1024";
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[errMsg]);
}if (dim[0].intValue$() < 4) {
errMsg="\'Cblksiz\' option : the code-block\'s width cannot be less than 4";
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[errMsg]);
}if (dim[0].intValue$() != (1 << $I$(2).log2$I(dim[0].intValue$()))) {
errMsg="\'Cblksiz\' option : the code-block\'s width must be a power of 2";
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[errMsg]);
}} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
errMsg="\'Cblksiz\' option : the code-block\'s width could not be parsed.";
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[errMsg]);
} else {
throw e;
}
}
try {
word=stk.nextToken$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.util.NoSuchElementException")){
errMsg="\'Cblksiz\' option : could not parse the code-block\'s height";
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[errMsg]);
} else {
throw e;
}
}
try {
dim[1]= new Integer(word);
if (dim[1].intValue$() > 1024) {
errMsg="\'Cblksiz\' option : the code-block\'s height cannot be greater than 1024";
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[errMsg]);
}if (dim[1].intValue$() < 4) {
errMsg="\'Cblksiz\' option : the code-block\'s height cannot be less than 4";
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[errMsg]);
}if (dim[1].intValue$() != (1 << $I$(2).log2$I(dim[1].intValue$()))) {
errMsg="\'Cblksiz\' option : the code-block\'s height must be a power of 2";
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[errMsg]);
}if (dim[0].intValue$() * dim[1].intValue$() > 4096) {
errMsg="\'Cblksiz\' option : The code-block\'s area (i.e. width*height) cannot be greater than 4096";
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[errMsg]);
}} catch (e) {
if (Clazz.exceptionOf(e,"NumberFormatException")){
errMsg="\'Cblksiz\' option : the code-block\'s height could not be parsed.";
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,[errMsg]);
} else {
throw e;
}
}
if (dim[0].intValue$() > this.maxCBlkWidth) {
this.maxCBlkWidth=dim[0].intValue$();
}if (dim[1].intValue$() > this.maxCBlkHeight) {
this.maxCBlkHeight=dim[1].intValue$();
}if (firstVal) {
this.setDefault$O(dim);
firstVal=false;
}switch (curSpecType) {
case 0:
this.setDefault$O(dim);
break;
case 2:
for (ti=tileSpec.length - 1; ti >= 0; ti--) {
if (tileSpec[ti]) {
this.setTileDef$I$O(ti, dim);
}}
break;
case 1:
for (ci=compSpec.length - 1; ci >= 0; ci--) {
if (compSpec[ci]) {
this.setCompDef$I$O(ci, dim);
}}
break;
default:
for (ti=tileSpec.length - 1; ti >= 0; ti--) {
for (ci=compSpec.length - 1; ci >= 0; ci--) {
if (tileSpec[ti] && compSpec[ci] ) {
this.setTileCompVal$I$I$O(ti, ci, dim);
}}
}
break;
}
}
}
}, 1);

Clazz.newMeth(C$, 'getMaxCBlkWidth$', function () {
return this.maxCBlkWidth;
});

Clazz.newMeth(C$, 'getMaxCBlkHeight$', function () {
return this.maxCBlkHeight;
});

Clazz.newMeth(C$, 'getCBlkWidth$B$I$I', function (type, t, c) {
var dim=null;
switch (type) {
case 0:
dim=this.getDefault$();
break;
case 1:
dim=this.getCompDef$I(c);
break;
case 2:
dim=this.getTileDef$I(t);
break;
case 3:
dim=this.getTileCompVal$I$I(t, c);
}
return dim[0].intValue$();
});

Clazz.newMeth(C$, 'getCBlkHeight$B$I$I', function (type, t, c) {
var dim=null;
switch (type) {
case 0:
dim=this.getDefault$();
break;
case 1:
dim=this.getCompDef$I(c);
break;
case 2:
dim=this.getTileDef$I(t);
break;
case 3:
dim=this.getTileCompVal$I$I(t, c);
}
return dim[1].intValue$();
});

Clazz.newMeth(C$, 'setDefault$O', function (value) {
C$.superclazz.prototype.setDefault$O.apply(this, [value]);
p$1.storeHighestDims$IntegerA.apply(this, [value]);
});

Clazz.newMeth(C$, 'setTileDef$I$O', function (t, value) {
C$.superclazz.prototype.setTileDef$I$O.apply(this, [t, value]);
p$1.storeHighestDims$IntegerA.apply(this, [value]);
});

Clazz.newMeth(C$, 'setCompDef$I$O', function (c, value) {
C$.superclazz.prototype.setCompDef$I$O.apply(this, [c, value]);
p$1.storeHighestDims$IntegerA.apply(this, [value]);
});

Clazz.newMeth(C$, 'setTileCompVal$I$I$O', function (t, c, value) {
C$.superclazz.prototype.setTileCompVal$I$I$O.apply(this, [t, c, value]);
p$1.storeHighestDims$IntegerA.apply(this, [value]);
});

Clazz.newMeth(C$, 'storeHighestDims$IntegerA', function (dim) {
if (dim[0].intValue$() > this.maxCBlkWidth) {
this.maxCBlkWidth=dim[0].intValue$();
}if (dim[1].intValue$() > this.maxCBlkHeight) {
this.maxCBlkHeight=dim[1].intValue$();
}}, p$1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:15 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
