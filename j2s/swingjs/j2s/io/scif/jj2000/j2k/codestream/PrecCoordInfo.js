(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.codestream"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "PrecCoordInfo", null, 'io.scif.jj2000.j2k.codestream.CoordInfo');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['xref','yref']]]

Clazz.newMeth(C$, 'c$$I$I$I$I$I$I', function (ulx, uly, w, h, xref, yref) {
;C$.superclazz.c$$I$I$I$I.apply(this,[ulx, uly, w, h]);C$.$init$.apply(this);
this.xref=xref;
this.yref=yref;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$.apply(this,[]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return C$.superclazz.prototype.toString.apply(this, []) + ", xref=" + this.xref + ", yref=" + this.yref ;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:14 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
