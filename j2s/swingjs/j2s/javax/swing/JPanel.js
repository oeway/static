(function(){var P$=Clazz.newPackage("javax.swing"),I$=[[0,'java.awt.FlowLayout','Boolean']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JPanel", null, 'javax.swing.JComponent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_LayoutManager$Z', function (layout, isDoubleBuffered) {
C$.c$$java_awt_LayoutManager$Z$Z.apply(this, [layout, isDoubleBuffered, false]);
}, 1);

Clazz.newMeth(C$, 'getUIClassID$', function () {
return "PanelUI";
});

Clazz.newMeth(C$, 'c$$java_awt_LayoutManager', function (layout) {
C$.c$$java_awt_LayoutManager$Z.apply(this, [layout, true]);
}, 1);

Clazz.newMeth(C$, 'c$$Z', function (isDoubleBuffered) {
C$.c$$Z$Z.apply(this, [isDoubleBuffered, false]);
}, 1);

Clazz.newMeth(C$, 'c$', function () {
C$.c$$Z$Z.apply(this, [true, false]);
}, 1);

Clazz.newMeth(C$, 'c$$Z$Z', function (isDoubleBuffered, isAWTContainer) {
C$.c$$java_awt_LayoutManager$Z$Z.apply(this, [Clazz.new_($I$(1,1)), true, isAWTContainer]);
}, 1);

Clazz.newMeth(C$, 'c$$java_awt_LayoutManager$Z$Z', function (layout, isDoubleBuffered, isAWTContainer) {
Clazz.super_(C$, this);
this.setLayout$java_awt_LayoutManager(layout);
if (isAWTContainer) this.秘setIsAWT$();
this.setUIProperty$S$O("opaque", $I$(2).TRUE);
this.updateUI$();
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:24 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
