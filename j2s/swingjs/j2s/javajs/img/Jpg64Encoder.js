(function(){var P$=Clazz.newPackage("javajs.img"),I$=[[0,'javajs.util.Base64']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Jpg64Encoder", null, 'javajs.img.JpgEncoder');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['outTemp','javajs.util.OC']]]

Clazz.newMeth(C$, 'setParams$java_util_Map', function (params) {
this.defaultQuality=75;
this.outTemp=params.remove$O("outputChannelTemp");
C$.superclazz.prototype.setParams$java_util_Map.apply(this, [params]);
});

Clazz.newMeth(C$, 'generate$', function () {
var out0=this.out;
this.out=this.outTemp;
C$.superclazz.prototype.generate$.apply(this, []);
var bytes=$I$(1).getBytes64$BA(this.out.toByteArray$());
this.outTemp=null;
this.out=out0;
this.out.write$BA$I$I(bytes, 0, bytes.length);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:12 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
