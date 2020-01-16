(function(){var P$=Clazz.newPackage("io.scif.media.imageio.plugins.bmp"),I$=[[0,'io.scif.media.imageioimpl.plugins.bmp.BMPConstants']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BMPImageWriteParam", null, 'javax.imageio.ImageWriteParam');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.topDown=false;
}, 1);

C$.$fields$=[['Z',['topDown']]]

Clazz.newMeth(C$, 'c$$java_util_Locale', function (locale) {
;C$.superclazz.c$$java_util_Locale.apply(this,[locale]);C$.$init$.apply(this);
this.compressionTypes=$I$(1).compressionTypeNames;
this.canWriteCompressed=true;
this.compressionMode=3;
this.compressionType=this.compressionTypes[0];
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$java_util_Locale.apply(this, [null]);
}, 1);

Clazz.newMeth(C$, 'getVersion$', function () {
return 1;
});

Clazz.newMeth(C$, 'setTopDown$Z', function (topDown) {
this.topDown=topDown;
});

Clazz.newMeth(C$, 'isTopDown$', function () {
return this.topDown;
});

Clazz.newMeth(C$, 'setCompressionType$S', function (compressionType) {
C$.superclazz.prototype.setCompressionType$S.apply(this, [compressionType]);
if (!(compressionType.equals$O("BI_RGB")) && !(compressionType.equals$O("BI_BITFIELDS")) && this.topDown == true   ) {
this.topDown=false;
}});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
