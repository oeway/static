(function(){var P$=Clazz.newPackage("javax.swing");
/*c*/var C$=Clazz.newClass(P$, "JToolTip", null, 'javax.swing.JComponent');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['S',['tipText'],'O',['$component','javax.swing.JComponent']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.setOpaque$Z(true);
this.updateUI$();
}, 1);

Clazz.newMeth(C$, 'getUIClassID$', function () {
return "ToolTipUI";
});

Clazz.newMeth(C$, 'setTipText$S', function (tipText) {
var oldValue=this.tipText;
this.tipText=tipText;
this.firePropertyChange$S$O$O("tiptext", oldValue, tipText);
});

Clazz.newMeth(C$, 'getTipText$', function () {
return this.tipText;
});

Clazz.newMeth(C$, 'setComponent$javax_swing_JComponent', function (c) {
var oldValue=this.$component;
this.$component=c;
this.firePropertyChange$S$O$O("component", oldValue, c);
});

Clazz.newMeth(C$, 'getComponent$', function () {
return this.$component;
});

Clazz.newMeth(C$, 'alwaysOnTop$', function () {
return true;
});

Clazz.newMeth(C$, 'paramString$', function () {
var tipTextString=(this.tipText != null  ? this.tipText : "");
return C$.superclazz.prototype.paramString$.apply(this, []) + ",tipText=" + tipTextString ;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:27 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
