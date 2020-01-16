(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.entropy"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "CodedCBlk");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['n','m','skipMSBP'],'O',['data','byte[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$BA', function (m, n, skipMSBP, data) {
;C$.$init$.apply(this);
this.m=m;
this.n=n;
this.skipMSBP=skipMSBP;
this.data=data;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return "m= " + this.m + ", n= " + this.n + ", skipMSBP= " + this.skipMSBP + ", data.length= " + ((this.data != null ) ? "" + this.data.length : "(null)") ;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:15 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
