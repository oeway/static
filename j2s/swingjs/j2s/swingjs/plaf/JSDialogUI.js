(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'swingjs.plaf.JSComponentUI','javax.swing.LookAndFeel']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JSDialogUI", null, 'swingjs.plaf.JSFrameUI', 'java.awt.peer.DialogPeer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.z=$I$(1).frameZ + 500;
this.zModal=this.z - 1;
this.isFrame=true;
this.isDialog=true;
this.defaultWidth=500;
this.defaultHeight=300;
this.setDoc$();
}, 1);

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent', function (jc) {
this.frame=this.c;
this.isModal=(this.c).isModal$();
$I$(2).installColors$javax_swing_JComponent$S$S(jc, "Frame.background", "Frame.foreground");
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent', function (jc) {
});

Clazz.newMeth(C$, 'blockWindows$java_util_List', function (windows) {
});

Clazz.newMeth(C$, 'setVisible$Z', function (b) {
C$.superclazz.prototype.setVisible$Z.apply(this, [b]);
if (b) {
this.setComponentFocus$();
}});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:51:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
