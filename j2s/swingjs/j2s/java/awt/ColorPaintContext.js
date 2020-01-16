(function(){var P$=Clazz.newPackage("java.awt"),I$=[[0,'java.awt.image.ColorModel']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ColorPaintContext", null, null, 'java.awt.PaintContext');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['color']]]

Clazz.newMeth(C$, 'c$$I$java_awt_image_ColorModel', function (color, cm) {
;C$.$init$.apply(this);
this.color=color;
}, 1);

Clazz.newMeth(C$, 'dispose$', function () {
});

Clazz.newMeth(C$, 'getRGB$', function () {
return this.color;
});

Clazz.newMeth(C$, 'getColorModel$', function () {
return $I$(1).getRGBdefault$();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
