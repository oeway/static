(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.wavelet"),I$=[[0,'io.scif.jj2000.j2k.NotImplementedError','Error']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "WTDecompSpec");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['mainDefDecompType','mainDefLevels'],'O',['specValType','byte[]','compMainDefDecompType','int[]','+compMainDefLevels']]]

Clazz.newMeth(C$, 'c$$I$I$I', function (nc, dec, lev) {
;C$.$init$.apply(this);
this.mainDefDecompType=dec;
this.mainDefLevels=lev;
this.specValType=Clazz.array(Byte.TYPE, [nc]);
}, 1);

Clazz.newMeth(C$, 'setMainCompDefDecompType$I$I$I', function (n, dec, lev) {
if (dec < 0 && lev < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}this.specValType[n]=(1|0);
if (this.compMainDefDecompType == null ) {
this.compMainDefDecompType=Clazz.array(Integer.TYPE, [this.specValType.length]);
this.compMainDefLevels=Clazz.array(Integer.TYPE, [this.specValType.length]);
}this.compMainDefDecompType[n]=(dec >= 0) ? dec : this.mainDefDecompType;
this.compMainDefLevels[n]=(lev >= 0) ? lev : this.mainDefLevels;
throw Clazz.new_($I$(1,1).c$$S,["Currently, in JJ2000, all components and tiles must have the same decomposition type and number of levels"]);
});

Clazz.newMeth(C$, 'getDecSpecType$I', function (n) {
return $b$[0] = this.specValType[n], $b$[0];
});

Clazz.newMeth(C$, 'getMainDefDecompType$', function () {
return this.mainDefDecompType;
});

Clazz.newMeth(C$, 'getMainDefLevels$', function () {
return this.mainDefLevels;
});

Clazz.newMeth(C$, 'getDecompType$I', function (n) {
switch (this.specValType[n]) {
case 0:
return this.mainDefDecompType;
case 1:
return this.compMainDefDecompType[n];
case 2:
throw Clazz.new_($I$(1,1));
case 3:
throw Clazz.new_($I$(1,1));
default:
throw Clazz.new_($I$(2,1).c$$S,["Internal JJ2000 error"]);
}
});

Clazz.newMeth(C$, 'getLevels$I', function (n) {
switch (this.specValType[n]) {
case 0:
return this.mainDefLevels;
case 1:
return this.compMainDefLevels[n];
case 2:
throw Clazz.new_($I$(1,1));
case 3:
throw Clazz.new_($I$(1,1));
default:
throw Clazz.new_($I$(2,1).c$$S,["Internal JJ2000 error"]);
}
});
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
