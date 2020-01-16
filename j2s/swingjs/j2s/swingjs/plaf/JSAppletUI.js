(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'javax.swing.LookAndFeel']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JSAppletUI", null, 'swingjs.plaf.JSLightweightUI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$', function () {
if (this.domNode == null ) {
this.containerNode=this.domNode=P$.JSComponentUI.newDOMObject$S$S$SA("div", this.id, []);
this.addClass$swingjs_api_js_DOMNode$S(this.domNode, "swingjs-window");
}return this.updateDOMNodeCUI$();
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent', function (jc) {
$I$(1).installColorsAndFont$javax_swing_JComponent$S$S$S(jc, null, null, "Panel.font");
});

Clazz.newMeth(C$, 'setVisible$Z', function (b) {
C$.superclazz.prototype.setVisible$Z.apply(this, [b]);
});

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (e) {
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:51:14 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
