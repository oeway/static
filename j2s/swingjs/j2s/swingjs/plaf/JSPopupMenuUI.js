(function(){var P$=Clazz.newPackage("swingjs.plaf"),I$=[[0,'swingjs.plaf.JSPopupMenuUI','javax.swing.MenuSelectionManager','swingjs.jquery.JQueryUI','swingjs.JSUtil','swingjs.api.js.DOMNode','javax.swing.LookAndFeel',['swingjs.plaf.JSPopupMenuUI','.JSMenuKeyListener'],'javax.swing.UIManager','swingjs.plaf.JSComponentUI','swingjs.JSMouse']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JSPopupMenuUI", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'swingjs.plaf.JSPanelUI', 'java.awt.event.ContainerListener');
C$.$classes$=[['JSMenuKeyListener',2]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
{
var jqueryui=Clazz.getClass($I$(3));
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['popupMenu','javax.swing.JPopupMenu','menuKeyListener','swingjs.plaf.JSPopupMenuUI.JSMenuKeyListener']]
,['O',['j2sSwingMenu','swingjs.api.js.JSSwingMenu']]]

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (e) {
var prop=e.getPropertyName$();
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
if (C$.j2sSwingMenu == null ) {
$I$(4).loadStaticResource$S("swingjs/jquery/j2sMenu.js");
C$.j2sSwingMenu=this.J2S.getSwing();
}this.isContainer=true;
this.isMenuItem=true;
this.isPopupMenu=true;
this.setDoc$();
}, 1);

Clazz.newMeth(C$, 'updateDOMNode$', function () {
if (this.domNode == null ) {
this.containerNode=this.domNode=P$.JSComponentUI.newDOMObject$S$S$SA("ul", this.id, []);
this.bindJQueryEvents$swingjs_api_js_DOMNode$S$I(this.domNode, "mouseenter", -1);
}return this.updateDOMNodeCUI$();
});

Clazz.newMeth(C$, 'componentAdded$java_awt_event_ContainerEvent', function (e) {
$I$(5).detachAll(this.outerNode);
this.setTainted$();
this.setHTMLElement$();
var child=e.getChild$();
if (Clazz.instanceOf(child, "javax.swing.JMenuItem")) (e.getChild$()).addMenuKeyListener$javax_swing_event_MenuKeyListener(this.menuKeyListener);
});

Clazz.newMeth(C$, 'componentRemoved$java_awt_event_ContainerEvent', function (e) {
$I$(5).detachAll(this.outerNode);
this.setTainted$();
this.setHTMLElement$();
var child=e.getChild$();
if (Clazz.instanceOf(child, "javax.swing.JMenuItem")) (e.getChild$()).removeMenuKeyListener$javax_swing_event_MenuKeyListener(this.menuKeyListener);
});

Clazz.newMeth(C$, ['handleJSEvent$O$I$O','handleJSEvent$'], function (target, eventType, jQueryEvent) {
this.checkStopPopupMenuTimer$O$I$O(target, eventType, jQueryEvent);
return C$.superclazz.prototype.handleJSEvent$O$I$O.apply(this, [target, eventType, jQueryEvent]);
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent', function (jc) {
this.installDefaults$();
this.installListeners$();
});

Clazz.newMeth(C$, 'installDefaults$', function () {
this.popupMenu=this.jc;
(this.jc).addContainerListener$java_awt_event_ContainerListener(this);
$I$(6).installColorsAndFont$javax_swing_JComponent$S$S$S(this.jc, "PopupMenu.background", "PopupMenu.foreground", "PopupMenu.font");
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent', function (jc) {
(jc).removeContainerListener$java_awt_event_ContainerListener(this);
this.uninstallListeners$();
});

Clazz.newMeth(C$, 'uninstallListeners$', function () {
if (this.menuKeyListener != null ) {
this.popupMenu.removeMenuKeyListener$javax_swing_event_MenuKeyListener(this.menuKeyListener);
}});

Clazz.newMeth(C$, 'setVisible$Z', function (b) {
P$.JSComponentUI.hideMenusAndToolTip$();
if (b) {
if (this.isTainted || this.menu == null   || this.outerNode == null   || $I$(5).firstChild(this.outerNode) == null  ) {
if (this.menu == null ) {
this.setTainted$();
this.setHTMLElement$();
this.menu=this.jc;
C$.j2sSwingMenu.setMenu(this.menu);
this.isTainted=false;
} else {
this.updateMenu$Z(true);
}}var x=this.menu.desiredLocationX ||0;
var y=this.menu.desiredLocationY ||0;
this.setZ$I(P$.JSComponentUI.getInheritedZ$javax_swing_JComponent(this.menu.getInvoker$()) + 2);
C$.j2sSwingMenu.showMenu(this.menu, x, y);
}});

Clazz.newMeth(C$, 'dispose$', function () {
$I$(5).dispose(this.domNode);
$I$(5).dispose(this.outerNode);
if (this.menu != null ) C$.j2sSwingMenu.disposeMenu(this.menu);
});

Clazz.newMeth(C$, 'getPreferredSize$javax_swing_JComponent', function (jc) {
return null;
});

Clazz.newMeth(C$, 'updateMenu$Z', function (andShow) {
this.setTainted$();
this.setHTMLElement$();
C$.j2sSwingMenu.updateMenu(this.menu, andShow);
});

Clazz.newMeth(C$, 'installListeners$', function () {
if (this.menuKeyListener == null ) {
this.menuKeyListener=Clazz.new_($I$(7,1), [this, null]);
}this.popupMenu.addMenuKeyListener$javax_swing_event_MenuKeyListener(this.menuKeyListener);
if (Clazz.instanceOf(this.popupMenu.getInvoker$(), "javax.swing.JRootPane")) {
this.popupMenu.getInvoker$().addKeyListener$java_awt_event_KeyListener(this.menuKeyListener);
}});

Clazz.newMeth(C$, 'getLastPopup$', function () {
var msm=$I$(2).defaultManager$();
var p=msm.getSelectedPath$();
var popup=null;
for (var i=p.length - 1; popup == null  && i >= 0 ; i--) {
if (Clazz.instanceOf(p[i], "javax.swing.JPopupMenu")) popup=p[i];
}
return popup;
}, 1);

Clazz.newMeth(C$, 'nextEnabledChild$javax_swing_MenuElementA$I$I', function (e, fromIndex, toIndex) {
for (var i=fromIndex; i <= toIndex; i++) {
if (e[i] != null ) {
var comp=e[i].getComponent$();
if (comp != null  && (comp.isEnabled$() || $I$(8).getBoolean$O("MenuItem.disabledAreNavigable") )  && comp.isVisible$() ) {
return e[i];
}}}
return null;
}, 1);

Clazz.newMeth(C$, 'previousEnabledChild$javax_swing_MenuElementA$I$I', function (e, fromIndex, toIndex) {
for (var i=fromIndex; i >= toIndex; i--) {
if (e[i] != null ) {
var comp=e[i].getComponent$();
if (comp != null  && (comp.isEnabled$() || $I$(8).getBoolean$O("MenuItem.disabledAreNavigable") )  && comp.isVisible$() ) {
return e[i];
}}}
return null;
}, 1);

Clazz.newMeth(C$, 'getInputMap$javax_swing_JPopupMenu$javax_swing_JComponent', function (popup, rootPane) {
var windowInputMap=null;
var bindings=$I$(8).get$O("PopupMenu.selectedWindowInputMapBindings");
if (bindings != null ) {
windowInputMap=$I$(6).makeComponentInputMap$javax_swing_JComponent$OA(rootPane, bindings);
if (!popup.getComponentOrientation$().isLeftToRight$()) {
var km=$I$(8).get$O("PopupMenu.selectedWindowInputMapBindings.RightToLeft");
if (km != null ) {
var rightToLeftInputMap=$I$(6).makeComponentInputMap$javax_swing_JComponent$OA(rootPane, km);
rightToLeftInputMap.setParent$javax_swing_InputMap(windowInputMap);
windowInputMap=rightToLeftInputMap;
}}}return windowInputMap;
}, 1);

Clazz.newMeth(C$, 'findEnabledChild$javax_swing_MenuElementA$I$Z', function (e, fromIndex, forward) {
var result;
if (forward) {
result=C$.nextEnabledChild$javax_swing_MenuElementA$I$I(e, fromIndex + 1, e.length - 1);
if (result == null ) result=C$.nextEnabledChild$javax_swing_MenuElementA$I$I(e, 0, fromIndex - 1);
} else {
result=C$.previousEnabledChild$javax_swing_MenuElementA$I$I(e, fromIndex - 1, 0);
if (result == null ) result=C$.previousEnabledChild$javax_swing_MenuElementA$I$I(e, e.length - 1, fromIndex + 1);
}return result;
}, 1);

Clazz.newMeth(C$, 'findEnabledChild$javax_swing_MenuElementA$javax_swing_MenuElement$Z', function (e, elem, forward) {
for (var i=0; i < e.length; i++) {
if (e[i] === elem ) {
return C$.findEnabledChild$javax_swing_MenuElementA$I$Z(e, i, forward);
}}
return null;
}, 1);

Clazz.newMeth(C$, 'isJSPopupVisible$', function () {
return this.menu != null  && this.menu.haveLoc  && $I$(5).getStyle(this.domNode, "display") != "none" ;
});

Clazz.newMeth(C$, 'processJ2SMenuCmd$OA', function (data) {
var trigger=data[0];
var j2smenu=data[1];
var e=data[2];
var t=data[3];
var n=data[4];
var m=j2smenu.activeMenu;
var mid=(m == null  ? null : m.attr("id"));
var base=(t == null  ? null : t === e  ? $I$(5).getAttr(e, "target") : t.get(0));
var id=(base == null  ? null : $I$(5).getAttr(base, "id"));
var c=(base == null  ? null : $I$(5).getAttr(base, "data-component"));
var tui=(base == null  ? null : $I$(5).getAttr(base, "data-ui"));
var menu=null;
var eventID=0;
switch (trigger) {
case "clearOut":
case "collapse":
case "expand":
case "keyActivate":
case "noclickout":
case "onblur":
case "onclick":
case "onclick_out":
case "onfocus":
case "onleave":
case "onmovep":
case "onoutn":
case "onovern":
case "onoverp":
case "onpress":
case "onrelease":
case "refresh":
case "select":
case "_activate":
case "_hide":
case "_hidePopupMenu":
case "_move":
case "_show":
case "_startOpening":
break;
case "collapseAll":
P$.JSComponentUI.hideMenusAndToolTip$();
$I$(9).isMenuOpen=false;
j2smenu.options.jPopupMenu.visible=false;
(j2smenu.options.jPopupMenu.getInvoker$()).getRootPane$().requestFocus$();
break;
case "setFocus":
$I$(9).isMenuOpen=true;
eventID=504;
break;
case "onmoven":
eventID=503;
break;
case "unsetFocus":
eventID=505;
break;
case "_openSubmenu":
C$.updateMenuSelection$O$Z(t, true);
break;
case "_closeSubmenus":
C$.updateMenuSelection$O$Z(t, false);
break;
case "_hideAllMenus":
C$.updateMenuSelection$O$Z(t, false);
break;
default:
System.err.println$S("JSPopupMenu not processing " + trigger);
break;
}
if (e != null  && eventID != 0  && c != null  ) {
$I$(10).retargetMouseEvent$O$swingjs_api_js_DOMNode$javax_swing_JComponent$javax_swing_JComponent$I(e, base, c, c, eventID);
}}, 1);

Clazz.newMeth(C$, 'updateMenuSelection$O$Z', function (t, isOpen) {
for (var i=t.length ||0; --i >= 0; ) {
var p=t[i]["data-component"] ||null;
if (p.isSelected$() != isOpen ) p.setSelected$Z(isOpen);
}
}, 1);

Clazz.newMeth(C$, 'isPopupTrigger$java_awt_event_MouseEvent', function (e) {
return e.isPopupTrigger$();
});

Clazz.newMeth(C$, 'closeAllMenus$', function () {
$I$(4).jQuery.$(".ui-j2smenu").hide();
$I$(4).jQuery.$(".ui-j2smenu-node").removeClass("ui-state-active").removeClass("ui-state-focus");
}, 1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSPopupMenuUI, "JSMenuKeyListener", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, null, ['javax.swing.event.MenuKeyListener', 'java.awt.event.KeyListener']);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'menuKeyTyped$javax_swing_event_MenuKeyEvent', function (e) {
});

Clazz.newMeth(C$, 'menuKeyPressed$javax_swing_event_MenuKeyEvent', function (e) {
var path=e.getPath$();
var item=(path.length == 0 ? null : path[path.length - 1]);
if (Clazz.instanceOf(item, "javax.swing.JMenu")) {
$I$(1).j2sSwingMenu.getInstance(this.this$0.menu)._keydown(e.bdata.jqevent ||null);
e.consume$();
} else if (Clazz.instanceOf(item, "javax.swing.JMenuItem")) {
(item).doClick$();
e.consume$();
P$.JSComponentUI.hideMenusAndToolTip$();
}});

Clazz.newMeth(C$, 'menuKeyReleased$javax_swing_event_MenuKeyEvent', function (e) {
});

Clazz.newMeth(C$, 'keyTyped$java_awt_event_KeyEvent', function (e) {
});

Clazz.newMeth(C$, 'keyPressed$java_awt_event_KeyEvent', function (e) {
$I$(2).defaultManager$().processKeyEvent$java_awt_event_KeyEvent(e);
});

Clazz.newMeth(C$, 'keyReleased$java_awt_event_KeyEvent', function (e) {
});

Clazz.newMeth(C$);
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:51:18 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
