(function(){var P$=Clazz.newPackage("org.ejml.ops"),I$=[[0,'java.awt.image.BufferedImage','java.awt.Dimension','org.ejml.ops.CommonOps']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MatrixComponent", null, 'javax.swing.JPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['image','java.awt.image.BufferedImage']]]

Clazz.newMeth(C$, 'c$$I$I', function (width, height) {
Clazz.super_(C$, this);
this.image=Clazz.new_($I$(1,1).c$$I$I$I,[width, height, 1]);
this.setPreferredSize$java_awt_Dimension(Clazz.new_($I$(2,1).c$$I$I,[width, height]));
this.setMinimumSize$java_awt_Dimension(Clazz.new_($I$(2,1).c$$I$I,[width, height]));
}, 1);

Clazz.newMeth(C$, 'setMatrix$org_ejml_data_D1Matrix64F', function (A) {
var maxValue=$I$(3).elementMaxAbs$org_ejml_data_D1Matrix64F(A);
C$.renderMatrix$org_ejml_data_D1Matrix64F$java_awt_image_BufferedImage$D(A, this.image, maxValue);
this.repaint$();
});

Clazz.newMeth(C$, 'renderMatrix$org_ejml_data_D1Matrix64F$java_awt_image_BufferedImage$D', function (M, image, maxValue) {
var w=image.getWidth$();
var h=image.getHeight$();
var widthStep=M.numCols / image.getWidth$();
var heightStep=M.numRows / image.getHeight$();
for (var i=0; i < h; i++) {
for (var j=0; j < w; j++) {
var value=M.get$I$I(((i * heightStep)|0), ((j * widthStep)|0));
if (value == 0 ) {
image.setRGB$I$I$I(j, i, -16777216);
} else if (value > 0 ) {
var p=255 - ((255.0 * (value / maxValue))|0);
var rgb=-65536 | p << 8 | p;
image.setRGB$I$I$I(j, i, rgb);
} else {
var p=255 + ((255.0 * (value / maxValue))|0);
var rgb=-16777216 | p << 16 | p << 8 | 255;
image.setRGB$I$I$I(j, i, rgb);
}}
}
}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
g.drawImage$java_awt_Image$I$I$java_awt_image_ImageObserver(this.image, 0, 0, this);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
