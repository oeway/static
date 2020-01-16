(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "JSRootPaneUI", null, 'swingjs.plaf.JSLightweightUI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['resizer','swingjs.plaf.Resizer']]]

Clazz.newMeth(C$, 'setResizer$swingjs_plaf_Resizer', function (resizer) {
this.resizer=resizer;
});

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.isRootPane=this.isContainer=true;
this.setDoc$();
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$', function () {
if (this.domNode == null ) {
this.domNode=P$.JSComponentUI.newDOMObject$S$S$SA("div", this.id, []);
this.addFocusHandler$();
}this.checkAllowDivOverflow$();
return this.domNode;
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent', function (jc) {
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent', function (jc) {
});

Clazz.newMeth(C$, 'getPreferredSize$javax_swing_JComponent', function (jc) {
return null;
});

Clazz.newMeth(C$, 'setInnerComponentBounds$I$I', function (width, height) {
var resizer=this.jc.getFrameViewer$().getResizer$();
if (resizer != null ) resizer.setPosition$I$I(0, 0);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:51:18 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
