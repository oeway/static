(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k"),I$=[[0,'Error','java.util.Hashtable','java.awt.Point']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ModuleSpec", null, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.nTiles=0;
this.nComp=0;
this.def=null;
this.compDef=null;
this.tileDef=null;
}, 1);

C$.$fields$=[['I',['specType','nTiles','nComp'],'S',['specified'],'O',['specValType','byte[][]','def','java.lang.Object','compDef','Object[]','+tileDef','tileCompVal','java.util.Hashtable']]]

Clazz.newMeth(C$, 'getCopy$', function () {
return this.clone$();
});

Clazz.newMeth(C$, 'c$$I$I$B', function (nt, nc, type) {
;C$.$init$.apply(this);
this.nTiles=nt;
this.nComp=nc;
this.specValType=Clazz.array(Byte.TYPE, [nt, nc]);
switch (type) {
case 1:
this.specType=1;
break;
case 0:
this.specType=0;
break;
case 2:
this.specType=2;
break;
}
}, 1);

Clazz.newMeth(C$, 'clone$', function () {
var ms;
try {
ms=Clazz.clone(this);
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(1,1).c$$S,["Error when cloning ModuleSpec instance"]);
} else {
throw e;
}
}
ms.specValType=Clazz.array(Byte.TYPE, [this.nTiles, this.nComp]);
for (var t=0; t < this.nTiles; t++) {
for (var c=0; c < this.nComp; c++) {
ms.specValType[t][c]=(this.specValType[t][c]|0);
}
}
if (this.tileDef != null ) {
ms.tileDef=Clazz.array(java.lang.Object, [this.nTiles]);
for (var t=0; t < this.nTiles; t++) {
ms.tileDef[t]=this.tileDef[t];
}
}if (this.tileCompVal != null ) {
ms.tileCompVal=Clazz.new_($I$(2,1));
var tmpKey;
var tmpVal;
for (var e=this.tileCompVal.keys$(); e.hasMoreElements$(); ) {
tmpKey=e.nextElement$();
tmpVal=this.tileCompVal.get$O(tmpKey);
ms.tileCompVal.put$TK$TV(tmpKey, tmpVal);
}
}return ms;
});

Clazz.newMeth(C$, 'rotate90$java_awt_Point', function (anT) {
var tmpsvt=Clazz.array(Byte.TYPE, [this.nTiles, null]);
var ax;
var ay;
var bnT=Clazz.new_($I$(3,1).c$$I$I,[anT.y, anT.x]);
for (var by=0; by < bnT.y; by++) {
for (var bx=0; bx < bnT.x; bx++) {
ay=bx;
ax=bnT.y - by - 1 ;
tmpsvt[ay * anT.x + ax]=this.specValType[by * bnT.x + bx];
}
}
this.specValType=tmpsvt;
if (this.tileDef != null ) {
var tmptd=Clazz.array(java.lang.Object, [this.nTiles]);
for (var by=0; by < bnT.y; by++) {
for (var bx=0; bx < bnT.x; bx++) {
ay=bx;
ax=bnT.y - by - 1 ;
tmptd[ay * anT.x + ax]=this.tileDef[by * bnT.x + bx];
}
}
this.tileDef=tmptd;
}if (this.tileCompVal != null  && this.tileCompVal.size$() > 0 ) {
var tmptcv=Clazz.new_($I$(2,1));
var tmpKey;
var tmpVal;
var btIdx;
var atIdx;
var i1;
var i2;
var bx;
var by;
for (var e=this.tileCompVal.keys$(); e.hasMoreElements$(); ) {
tmpKey=e.nextElement$();
tmpVal=this.tileCompVal.get$O(tmpKey);
i1=tmpKey.indexOf$I("t");
i2=tmpKey.indexOf$I("c");
btIdx=( new Integer(tmpKey.substring$I$I(i1 + 1, i2))).intValue$();
bx=btIdx % bnT.x;
by=(btIdx/bnT.x|0);
ay=bx;
ax=bnT.y - by - 1 ;
atIdx=ax + ay * anT.x;
tmptcv.put$TK$TV("t" + atIdx + tmpKey.substring$I(i2) , tmpVal);
}
this.tileCompVal=tmptcv;
}});

Clazz.newMeth(C$, 'setDefault$O', function (value) {
this.def=value;
});

Clazz.newMeth(C$, 'getDefault$', function () {
return this.def;
});

Clazz.newMeth(C$, 'setCompDef$I$O', function (c, value) {
if (this.specType == 1) {
var errMsg="Option whose value is '" + value + "' cannot be " + "specified for components as it is a 'tile only' specific " + "option" ;
throw Clazz.new_($I$(1,1).c$$S,[errMsg]);
}if (this.compDef == null ) this.compDef=Clazz.array(java.lang.Object, [this.nComp]);
for (var i=0; i < this.nTiles; i++) {
if (this.specValType[i][c] < 1) {
this.specValType[i][c]=(1|0);
}}
this.compDef[c]=value;
});

Clazz.newMeth(C$, 'getCompDef$I', function (c) {
if (this.specType == 1) {
throw Clazz.new_($I$(1,1).c$$S,["Illegal use of ModuleSpec class"]);
}if (this.compDef == null  || this.compDef[c] == null  ) {
return this.getDefault$();
} else return this.compDef[c];
});

Clazz.newMeth(C$, 'setTileDef$I$O', function (t, value) {
if (this.specType == 0) {
var errMsg="Option whose value is '" + value + "' cannot be " + "specified for tiles as it is a 'component only' specific " + "option" ;
throw Clazz.new_($I$(1,1).c$$S,[errMsg]);
}if (this.tileDef == null ) this.tileDef=Clazz.array(java.lang.Object, [this.nTiles]);
for (var i=0; i < this.nComp; i++) {
if (this.specValType[t][i] < 2) {
this.specValType[t][i]=(2|0);
}}
this.tileDef[t]=value;
});

Clazz.newMeth(C$, 'getTileDef$I', function (t) {
if (this.specType == 0) {
throw Clazz.new_($I$(1,1).c$$S,["Illegal use of ModuleSpec class"]);
}if (this.tileDef == null  || this.tileDef[t] == null  ) {
return this.getDefault$();
} else return this.tileDef[t];
});

Clazz.newMeth(C$, 'setTileCompVal$I$I$O', function (t, c, value) {
if (this.specType != 2) {
var errMsg="Option whose value is '" + value + "' cannot be " + "specified for " ;
switch (this.specType) {
case 1:
errMsg += "components as it is a 'tile only' specific option";
break;
case 0:
errMsg += "tiles as it is a 'component only' specific option";
break;
}
throw Clazz.new_($I$(1,1).c$$S,[errMsg]);
}if (this.tileCompVal == null ) this.tileCompVal=Clazz.new_($I$(2,1));
this.specValType[t][c]=(3|0);
this.tileCompVal.put$TK$TV("t" + t + "c" + c , value);
});

Clazz.newMeth(C$, 'getTileCompVal$I$I', function (t, c) {
if (this.specType != 2) {
throw Clazz.new_($I$(1,1).c$$S,["Illegal use of ModuleSpec class"]);
}return this.getSpec$I$I(t, c);
});

Clazz.newMeth(C$, 'getSpec$I$I', function (t, c) {
switch (this.specValType[t][c]) {
case 0:
return this.getDefault$();
case 1:
return this.getCompDef$I(c);
case 2:
return this.getTileDef$I(t);
case 3:
return this.tileCompVal.get$O("t" + t + "c" + c );
default:
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Not recognized spec type"]);
}
});

Clazz.newMeth(C$, 'getSpecValType$I$I', function (t, c) {
return $b$[0] = this.specValType[t][c], $b$[0];
});

Clazz.newMeth(C$, 'isCompSpecified$I', function (c) {
if (this.compDef == null  || this.compDef[c] == null  ) return false;
 else return true;
});

Clazz.newMeth(C$, 'isTileSpecified$I', function (t) {
if (this.tileDef == null  || this.tileDef[t] == null  ) return false;
 else return true;
});

Clazz.newMeth(C$, 'isTileCompSpecified$I$I', function (t, c) {
if (this.tileCompVal == null  || this.tileCompVal.get$O("t" + t + "c" + c ) == null  ) return false;
 else return true;
});

Clazz.newMeth(C$, 'parseIdx$S$I', function (word, maxIdx) {
var nChar=word.length$();
var c=word.charAt$I(0);
var idx=-1;
var lastIdx=-1;
var isDash=false;
var idxSet=Clazz.array(Boolean.TYPE, [maxIdx]);
var i=1;
while (i < nChar){
c=word.charAt$I(i);
if (Character.isDigit$C(c)) {
if (idx == -1) idx=0;
idx=idx * 10 + (c.$c() - 48);
} else {
if (idx == -1 || (c != "," && c != "-" ) ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Bad construction for " + "parameter: " + word ]);
}if (idx < 0 || idx >= maxIdx ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Out of range index in parameter `" + word + "' : " + +idx ]);
}if (c == ",") {
if (isDash) {
for (var j=lastIdx + 1; j < idx; j++) {
idxSet[j]=true;
}
}isDash=false;
} else isDash=true;
idxSet[idx]=true;
lastIdx=idx;
idx=-1;
}i++;
}
if (idx < 0 || idx >= maxIdx ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Out of range index in parameter `" + word + "' : " + idx ]);
}if (isDash) for (var j=lastIdx + 1; j < idx; j++) {
idxSet[j]=true;
}
idxSet[idx]=true;
return idxSet;
}, 1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:14 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
