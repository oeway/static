(function(){var P$=Clazz.newPackage("javax.swing.colorchooser"),p$1={},p$2={},I$=[[0,'java.awt.GridBagLayout','java.awt.GridBagConstraints','javax.swing.JPanel','javax.swing.colorchooser.MainSwatchPanel','javax.swing.colorchooser.RecentSwatchPanel',['javax.swing.colorchooser.DefaultSwatchChooserPanel','.MainSwatchListener'],['javax.swing.colorchooser.DefaultSwatchChooserPanel','.RecentSwatchListener'],'java.awt.BorderLayout','javax.swing.border.CompoundBorder','javax.swing.border.LineBorder','java.awt.Color','java.awt.Insets','javax.swing.JLabel','java.awt.Dimension','javax.swing.UIManager']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MainSwatchPanel", null, 'javax.swing.colorchooser.SwatchPanel');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'initValues$', function () {
this.swatchSize=$I$(15).getDimension$O("ColorChooser.swatchesSwatchSize");
this.numSwatches=Clazz.new_($I$(14,1).c$$I$I,[31, 9]);
this.gap=Clazz.new_($I$(14,1).c$$I$I,[1, 1]);
});

Clazz.newMeth(C$, 'initColors$', function () {
var rawValues=p$2.initRawValues.apply(this, []);
var numColors=(rawValues.length/3|0);
this.colors=Clazz.array($I$(11), [numColors]);
for (var i=0; i < numColors; i++) {
this.colors[i]=Clazz.new_($I$(11,1).c$$I$I$I,[rawValues[(i * 3)], rawValues[(i * 3) + 1], rawValues[(i * 3) + 2]]);
}
});

Clazz.newMeth(C$, 'initRawValues', function () {
var rawValues=Clazz.array(Integer.TYPE, -1, [255, 255, 255, 204, 255, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 255, 204, 255, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 255, 204, 204, 204, 204, 153, 255, 255, 153, 204, 255, 153, 153, 255, 153, 153, 255, 153, 153, 255, 153, 153, 255, 153, 153, 255, 153, 153, 255, 153, 153, 255, 204, 153, 255, 255, 153, 255, 255, 153, 204, 255, 153, 153, 255, 153, 153, 255, 153, 153, 255, 153, 153, 255, 153, 153, 255, 153, 153, 255, 153, 153, 255, 204, 153, 255, 255, 153, 204, 255, 153, 153, 255, 153, 153, 255, 153, 153, 255, 153, 153, 255, 153, 153, 255, 153, 153, 255, 153, 153, 255, 153, 153, 255, 204, 204, 204, 204, 102, 255, 255, 102, 204, 255, 102, 153, 255, 102, 102, 255, 102, 102, 255, 102, 102, 255, 102, 102, 255, 102, 102, 255, 153, 102, 255, 204, 102, 255, 255, 102, 255, 255, 102, 204, 255, 102, 153, 255, 102, 102, 255, 102, 102, 255, 102, 102, 255, 102, 102, 255, 102, 102, 255, 153, 102, 255, 204, 102, 255, 255, 102, 204, 255, 102, 153, 255, 102, 102, 255, 102, 102, 255, 102, 102, 255, 102, 102, 255, 102, 102, 255, 102, 102, 255, 153, 102, 255, 204, 153, 153, 153, 51, 255, 255, 51, 204, 255, 51, 153, 255, 51, 102, 255, 51, 51, 255, 51, 51, 255, 51, 51, 255, 102, 51, 255, 153, 51, 255, 204, 51, 255, 255, 51, 255, 255, 51, 204, 255, 51, 153, 255, 51, 102, 255, 51, 51, 255, 51, 51, 255, 51, 51, 255, 102, 51, 255, 153, 51, 255, 204, 51, 255, 255, 51, 204, 255, 51, 153, 255, 51, 102, 255, 51, 51, 255, 51, 51, 255, 51, 51, 255, 51, 51, 255, 102, 51, 255, 153, 51, 255, 204, 153, 153, 153, 0, 255, 255, 0, 204, 255, 0, 153, 255, 0, 102, 255, 0, 51, 255, 0, 0, 255, 51, 0, 255, 102, 0, 255, 153, 0, 255, 204, 0, 255, 255, 0, 255, 255, 0, 204, 255, 0, 153, 255, 0, 102, 255, 0, 51, 255, 0, 0, 255, 51, 0, 255, 102, 0, 255, 153, 0, 255, 204, 0, 255, 255, 0, 204, 255, 0, 153, 255, 0, 102, 255, 0, 51, 255, 0, 0, 255, 0, 0, 255, 51, 0, 255, 102, 0, 255, 153, 0, 255, 204, 102, 102, 102, 0, 204, 204, 0, 204, 204, 0, 153, 204, 0, 102, 204, 0, 51, 204, 0, 0, 204, 51, 0, 204, 102, 0, 204, 153, 0, 204, 204, 0, 204, 204, 0, 204, 204, 0, 204, 204, 0, 153, 204, 0, 102, 204, 0, 51, 204, 0, 0, 204, 51, 0, 204, 102, 0, 204, 153, 0, 204, 204, 0, 204, 204, 0, 204, 204, 0, 153, 204, 0, 102, 204, 0, 51, 204, 0, 0, 204, 0, 0, 204, 51, 0, 204, 102, 0, 204, 153, 0, 204, 204, 102, 102, 102, 0, 153, 153, 0, 153, 153, 0, 153, 153, 0, 102, 153, 0, 51, 153, 0, 0, 153, 51, 0, 153, 102, 0, 153, 153, 0, 153, 153, 0, 153, 153, 0, 153, 153, 0, 153, 153, 0, 153, 153, 0, 102, 153, 0, 51, 153, 0, 0, 153, 51, 0, 153, 102, 0, 153, 153, 0, 153, 153, 0, 153, 153, 0, 153, 153, 0, 153, 153, 0, 102, 153, 0, 51, 153, 0, 0, 153, 0, 0, 153, 51, 0, 153, 102, 0, 153, 153, 0, 153, 153, 51, 51, 51, 0, 102, 102, 0, 102, 102, 0, 102, 102, 0, 102, 102, 0, 51, 102, 0, 0, 102, 51, 0, 102, 102, 0, 102, 102, 0, 102, 102, 0, 102, 102, 0, 102, 102, 0, 102, 102, 0, 102, 102, 0, 102, 102, 0, 51, 102, 0, 0, 102, 51, 0, 102, 102, 0, 102, 102, 0, 102, 102, 0, 102, 102, 0, 102, 102, 0, 102, 102, 0, 102, 102, 0, 51, 102, 0, 0, 102, 0, 0, 102, 51, 0, 102, 102, 0, 102, 102, 0, 102, 102, 0, 0, 0, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 0, 51, 0, 0, 51, 51, 0, 51, 51, 0, 51, 51, 0, 51, 51, 51, 51, 51]);
return rawValues;
}, p$2);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1