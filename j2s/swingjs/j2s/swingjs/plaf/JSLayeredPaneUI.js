(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "JSLayeredPaneUI", null, 'swingjs.plaf.JSLightweightUI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.isContainer=this.isLayeredPane=true;
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$', function () {
if (this.domNode == null ) {
this.containerNode=this.domNode=P$.JSComponentUI.newDOMObject$S$S$SA("div", this.id, []);
}return this.domNode;
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent', function (jc) {
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent', function (jc) {
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:51:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
