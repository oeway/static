(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.codestream"),I$=[[0,'java.awt.Point']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CBlkCoordInfo", null, 'io.scif.jj2000.j2k.codestream.CoordInfo');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['idx','java.awt.Point']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.idx=Clazz.new_($I$(1,1));
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (m, n) {
Clazz.super_(C$, this);
this.idx=Clazz.new_($I$(1,1).c$$I$I,[n, m]);
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []) + ", idx=" + this.idx ;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:14 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
