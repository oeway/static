(function(){var P$=Clazz.newPackage("swingjs"),I$=[[0,'java.awt.GraphicsEnvironment','swingjs.api.Interface','java.awt.image.ColorModel','java.awt.image.WritableRaster','java.util.Hashtable','swingjs.JSUtil','java.awt.Rectangle']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JSGraphicsConfiguration", null, 'java.awt.GraphicsConfiguration');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
System.out.println$S("JSGraphicsConfiguration initialized");
}, 1);

Clazz.newMeth(C$, 'getDevice$', function () {
return $I$(1).getLocalGraphicsEnvironment$().getDefaultScreenDevice$();
});

Clazz.newMeth(C$, 'createCompatibleImage$I$I', function (width, height) {
var cm=this.getColorModel$();
var wr=cm.createCompatibleWritableRaster$I$I(width, height);
return this.newBufferedImage$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable(cm, wr, false, null);
});

Clazz.newMeth(C$, 'newBufferedImage$java_awt_image_ColorModel$java_awt_image_WritableRaster$Z$java_util_Hashtable', function (cm, wr, alphaPremultiplied, properties) {
return $I$(2).getInstanceWithParams$S$ClassA$OA("java.awt.image.BufferedImage", Clazz.array(Class, -1, [Clazz.getClass($I$(3)), Clazz.getClass($I$(4)), Boolean.TYPE, Clazz.getClass($I$(5))]), Clazz.array(java.lang.Object, -1, [cm, wr, new Boolean(alphaPremultiplied), properties]));
});

Clazz.newMeth(C$, 'getColorModel$', function () {
return $I$(3).getRGBdefault$();
});

Clazz.newMeth(C$, 'getColorModel$I', function (transparency) {
return this.getColorModel$();
});

Clazz.newMeth(C$, 'getDefaultTransform$', function () {
return $I$(2).getInstance$S$Z("java.awt.geom.AffineTransform", true);
});

Clazz.newMeth(C$, 'getNormalizingTransform$', function () {
return this.getDefaultTransform$();
});

Clazz.newMeth(C$, 'getBounds$', function () {
var doc=document ||null;
var d=$I$(6).jQuery.$(doc);
return Clazz.new_($I$(7,1).c$$I$I,[d.width(), d.height()]);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:51:08 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
