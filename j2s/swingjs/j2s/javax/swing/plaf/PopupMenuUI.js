(function(){var P$=Clazz.newPackage("javax.swing.plaf"),I$=[[0,'javax.swing.PopupFactory']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PopupMenuUI", null, 'javax.swing.plaf.ComponentUI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'isPopupTrigger$java_awt_event_MouseEvent', function (e) {
return e.isPopupTrigger$();
});

Clazz.newMeth(C$, 'getPopup$javax_swing_JPopupMenu$I$I', function (popup, x, y) {
var popupFactory=$I$(1).getSharedInstance$();
return popupFactory.getPopup$java_awt_Component$java_awt_Component$I$I(popup.getInvoker$(), popup, x, y);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:50:34 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
