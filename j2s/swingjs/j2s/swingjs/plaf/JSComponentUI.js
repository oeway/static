(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},I$=[[0,'swingjs.JSUtil','java.awt.Insets','java.awt.Color','swingjs.api.js.DOMNode','swingjs.JSToolkit','swingjs.plaf.JSPopupMenuUI','javax.swing.ToolTipManager','swingjs.JSFocusPeer','java.awt.JSComponent','java.awt.Cursor','java.awt.Dimension',['java.awt.Component','.BaselineResizeBehavior'],'javax.swing.UIManager','javajs.util.PT','java.awt.Rectangle','swingjs.plaf.HTML5LookAndFeel','java.awt.event.KeyEvent','java.awt.Point','java.awt.Toolkit']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JSComponentUI", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'javax.swing.plaf.ComponentUI', ['swingjs.plaf.JSEventHandler', 'java.beans.PropertyChangeListener', 'javax.swing.event.ChangeListener', 'java.awt.dnd.peer.DropTargetPeer']);
C$.$classes$=[['Embeddable',9]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.frameZ=19000;
C$.jquery=$I$(1).getJQuery$();
C$.zeroInsets=Clazz.new_($I$(2,1).c$$I$I$I$I,[0, 0, 0, 0]);
}

Clazz.newMeth(C$, '$init$', function () {
this.J2S=$I$(1).J2S;
this.isTainted=true;
this.dropTarget=this;
this.mnemonicIndex=-1;
this.currentGap=2147483647;
this.colorUNKNOWN=Clazz.new_($I$(3,1));
this.inactiveForeground=this.colorUNKNOWN;
this.inactiveBackground=this.colorUNKNOWN;
this.enabled=true;
this.allowTextAlignment=true;
this.allowPaintedBackground=true;
}, 1);

C$.$fields$=[['Z',['isNull','draggable','isAWT','isDummyFrame','isTainted','isPaintedOnly','inPaintPath','boundsSet','isMenuItem','isMenuSep','isMenu','isSimpleButton','isLabel','isContainer','isWindow','isRootPane','isPopupMenu','isContentPane','isLayeredPane','isPanel','isDesktop','isTable','needPreferred','enabled','isHTML','allowTextAlignment','j2sDoPropagate','notImplemented','keysEnabled','layingOut','isDisposed','isUIDisabled','allowPaintedBackground','imagePersists','allowDivOverflow','ignoreFocus','isSticky','isFullyCentered','alignmentDisabled','isLaidOut','modalBlocked','isTextView'],'I',['iconHeight','num','x','y','jsActualWidth','jsActualHeight','actionItemOffset','mnemonicIndex','currentGap','width','height','menuTimer','mnemonic','cellWidth','cellHeight','actualHeight','actualWidth'],'S',['id','textAlign','currentText','classID'],'O',['J2S','swingjs.api.js.J2SInterface','c','java.awt.JSComponent','jc','javax.swing.JComponent','label','javax.swing.JLabel','targetParent','javax.swing.JComponent','menu','javax.swing.JPopupMenu','outerNode','swingjs.api.js.DOMNode','+innerNode','+domNode','+centeringNode','+imageNode','+actionNode','+buttonNode','+enableNode','enableNodes','swingjs.api.js.DOMNode[]','iconNode','swingjs.api.js.DOMNode','+textNode','+accelNode','+valueNode','+focusNode','+itemNode','+containerNode','buttonListener','swingjs.plaf.ButtonListener','menuAnchorNode','swingjs.api.js.DOMNode','preferredSize','java.awt.Dimension','dropTarget','java.lang.Object','parent','swingjs.plaf.JSComponentUI','currentIcon','javax.swing.ImageIcon','scrollPaneUI','swingjs.plaf.JSScrollPaneUI','body','swingjs.api.js.DOMNode','applet','swingjs.api.js.HTML5Applet','waitImage','swingjs.api.js.DOMNode','colorUNKNOWN','java.awt.Color','+inactiveForeground','+inactiveBackground','awttop','java.awt.Container','awtPeerBG','java.awt.Color','+awtPeerFG','cellComponent','javax.swing.JComponent','embeddingNode','swingjs.api.js.DOMNode','insets','java.awt.Insets','icon','javax.swing.Icon','viewR','java.awt.Rectangle','+iconR','+textR','preferredDim','java.awt.Dimension','myCursor','java.awt.Cursor','backgroundColor','java.awt.Color']]
,['Z',['debugging','isMenuOpen'],'I',['incr','frameZ'],'O',['jquery','swingjs.api.js.JQuery','tempDiv','swingjs.api.js.DOMNode','zeroInsets','java.awt.Insets']]]

Clazz.newMeth(C$, 'setTargetParent$javax_swing_JComponent', function (table) {
this.targetParent=table;
});

Clazz.newMeth(C$, 'getTargetParent$', function () {
return this.targetParent;
});

Clazz.newMeth(C$, 'saveCellNodes$swingjs_api_js_DOMNode$Z', function (td, isHeader) {
this.outerNode=null;
this.reInit$Z(true);
var nodes=Clazz.array($I$(4), -1, [this.domNode, this.innerNode, this.centeringNode, this.iconNode, this.textNode, this.accelNode, this.buttonNode, this.enableNode, (this.enableNodes == null  ? null : this.enableNodes[0]), (this.enableNodes == null  ? null : this.enableNodes[1]), (this.enableNodes == null  ? null : this.enableNodes[2]), this.focusNode, this.actionNode, this.valueNode]);
$I$(4).setAttr(td, "data-nodes", nodes);
p$1.updateTableCell$swingjs_api_js_DOMNode$Z.apply(this, [td, isHeader]);
});

Clazz.newMeth(C$, 'updateTableCell$swingjs_api_js_DOMNode$Z', function (td, andAdd) {
var node=$I$(4).firstChild(td);
if (node !== this.domNode ) {
this.$$O(td).empty();
node=null;
td.appendChild(this.domNode);
node=this.domNode;
$I$(4).setAttr(td, "domNode", node);
}this.domNode=this.outerNode=null;
}, p$1);

Clazz.newMeth(C$, 'restoreCellNodes$swingjs_api_js_DOMNode', function (td) {
var nodes=$I$(4).getAttr(td, "data-nodes");
if (nodes == null ) return;
this.domNode=nodes[0];
this.innerNode=nodes[1];
this.centeringNode=nodes[2];
this.iconNode=nodes[3];
this.textNode=nodes[4];
this.accelNode=nodes[5];
this.buttonNode=nodes[6];
this.enableNode=nodes[7];
if (nodes[8] != null ) {
this.enableNodes[0]=nodes[8];
this.enableNodes[1]=nodes[9];
this.enableNodes[2]=nodes[10];
}this.focusNode=nodes[11];
this.actionNode=nodes[12];
this.valueNode=nodes[13];
});

Clazz.newMeth(C$, 'setDraggable$javajs_api_JSFunction', function (f) {
this.draggable=true;
this.J2S.setDraggable(this.getDOMNode$(), f);
});

Clazz.newMeth(C$, 'setDoPropagate$', function () {
this.j2sDoPropagate=true;
});

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.setDoc$();
}, 1);

Clazz.newMeth(C$, 'setDoc$', function () {
this.body=document.body ||null;
C$.debugging=$I$(1).debugging;
});

Clazz.newMeth(C$, 'installJS$', function () {
{
this.c.addChangeListener$javax_swing_event_ChangeListener && this.c.addChangeListener$javax_swing_event_ChangeListener(this);
}
if (this.buttonListener == null ) this.c.addPropertyChangeListener$java_beans_PropertyChangeListener(this);
});

Clazz.newMeth(C$, 'uninstallJS', function () {

this.c && this.c.removeChangeListener$javax_swing_event_ChangeListener && this.c.removeChangeListener$javax_swing_event_ChangeListener(this);
if (this.c != null ) this.c.removePropertyChangeListener$java_beans_PropertyChangeListener(this);
if (this.outerNode != null ) {
$I$(4).dispose(this.outerNode);
this.outerNode=null;
}}, p$1);

Clazz.newMeth(C$, '$$O', function (node) {
return C$.jquery.$(node);
});

Clazz.newMeth(C$, 'setComponent$javax_swing_JComponent', function (comp) {
this.c=this.jc=comp;
this.setUIDisabled$Z(comp == null );
}, p$1);

Clazz.newMeth(C$, 'set$javax_swing_JComponent', function (target) {
p$1.setComponent$javax_swing_JComponent.apply(this, [target]);
this.isAWT=this.jc.秘isAWT$();
this.applet=$I$(5).getHTML5Applet$java_awt_Component(this.c);
this.newID$Z(false);
this.installUI$javax_swing_JComponent(target);
this.installJS$();
if (this.needPreferred) this.getHTMLSizePreferred$swingjs_api_js_DOMNode$Z(this.updateDOMNode$(), false);
return this;
});

Clazz.newMeth(C$, 'newID$Z', function (forceNew) {
this.classID=this.c.getUIClassID$();
this.notImplemented=(this.classID == "ComponentUI");
if (this.id == null  || forceNew ) {
this.num=++C$.incr;
this.id=this.c.getHTMLName$S(this.classID) + "_" + this.num ;
}});

Clazz.newMeth(C$, 'getListNode$', function () {
var node=this.reInit$Z(true);
this.reInit$Z(false);
return node;
});

Clazz.newMeth(C$, 'reInit$Z', function (getNew) {
this.setTainted$();
if (this.domNode != null ) $I$(4).dispose(this.domNode);
this.domNode=null;
this.keysEnabled=false;
this.newID$Z(true);
return (getNew ? this.getDOMNode$() : null);
});

Clazz.newMeth(C$, 'setDataComponent$swingjs_api_js_DOMNode', function (button) {
$I$(4).setAttr(button, "data-component", this.c);
});

Clazz.newMeth(C$, 'setDataKeyComponent$swingjs_api_js_DOMNode', function (node) {
$I$(4).setAttr(node, "data-keycomponent", this.c);
});

Clazz.newMeth(C$, 'setDataShadowKeyComponent$swingjs_api_js_DOMNode$java_awt_Component', function (node, c) {
$I$(4).setAttr(node, "data-shadowkeycomponent", c);
});

Clazz.newMeth(C$, 'setDataFocusComponent$swingjs_api_js_DOMNode', function (node) {
$I$(4).setAttr(node, "data-focuscomponent", this.c);
});

Clazz.newMeth(C$, 'ignoreAllMouseEvents$swingjs_api_js_DOMNode', function (node) {
this.addClass$swingjs_api_js_DOMNode$S(node, "swingjs-ui");
});

Clazz.newMeth(C$, 'hideMenusAndToolTip$', function () {
if (C$.isMenuOpen) $I$(6).closeAllMenus$();
if (javax.swing.ToolTipManager ||false) $I$(7).j2sHideToolTip$();
}, 1);

Clazz.newMeth(C$, 'addClass$swingjs_api_js_DOMNode$S', function (node, cl) {
this.$$O(node).addClass(cl);
});

Clazz.newMeth(C$, 'removeClass$swingjs_api_js_DOMNode$S', function (node, cl) {
this.$$O(node).removeClass(cl);
});

Clazz.newMeth(C$, 'setDataUI$swingjs_api_js_DOMNode', function (node) {
$I$(4).setAttr(node, "data-ui", this);
this.addClass$swingjs_api_js_DOMNode$S(node, "data-ui");
});

Clazz.newMeth(C$, 'setMenuItem$swingjs_api_js_DOMNode', function (node) {
if (node == null ) return;
this.addClass$swingjs_api_js_DOMNode$S(node, "ui-j2smenu-node");
this.setDataComponent$swingjs_api_js_DOMNode(node);
});

Clazz.newMeth(C$, 'setJ2sMouseHandler$', function () {
this.J2S.unsetMouse(this.domNode);
if (this.domNode == null ) this.updateDOMNode$();
$I$(4).setAttrs(this.domNode, ["applet", this.applet, "_frameViewer", this.jc.getFrameViewer$()]);
this.J2S.setMouse(this.domNode, true);
});

Clazz.newMeth(C$, 'enableJSKeys$Z', function (on) {
if (this.isUIDisabled) return;
if (!on) {
p$1.setTabIndex$I.apply(this, [-2147483648]);
} else if (this.keysEnabled) {
p$1.setTabIndex$I.apply(this, [-1]);
} else {
this.addFocusHandler$();
}});

Clazz.newMeth(C$, 'addFocusHandler$', function () {
if (this.focusNode == null  && (this.focusNode=this.domNode) == null  ) return;
this.keysEnabled=true;
$I$(4).setAttrs(this.focusNode, ["applet", this.applet, "_frameViewer", this.jc.getFrameViewer$()]);
this.setDataKeyComponent$swingjs_api_js_DOMNode(this.focusNode);
this.J2S.setKeyListener(this.focusNode);
p$1.setTabIndex$I.apply(this, [-1]);
});

Clazz.newMeth(C$, 'setTabIndex$I', function (i) {
if (this.focusNode == null ) return;
if (i == -2147483648) {
this.focusNode.removeAttribute("tabindex");
$I$(4).setAttr(this.focusNode, "ui", null);
} else {
this.focusNode.setAttribute("tabindex", "" + i);
$I$(4).setAttr(this.focusNode, "ui", this);
}}, p$1);

Clazz.newMeth(C$, 'isFocusable$', function () {
return false;
});

Clazz.newMeth(C$, 'setFocusable$', function () {
if (this.focusNode == null ) this.addFocusHandler$();
if (this.focusNode != null ) this.addJQueryFocusCallbacks$();
return (this.focusNode != null );
});

Clazz.newMeth(C$, 'hasFocus$', function () {
return document.activeElement == this.focusNode||false;
});

Clazz.newMeth(C$, 'requestFocus$java_awt_Component$Z$Z$J$sun_awt_CausedFocusEvent_Cause', function (lightweightChild, temporary, focusedWindowChangeAllowed, time, cause) {
if (lightweightChild == null ) return this.focus$();
if (!this.jc.isFocusable$()) return false;
this.setFocusable$();
return $I$(5).requestFocus$java_awt_Component(lightweightChild);
});

Clazz.newMeth(C$, 'focus$', function () {
if (this.focusNode == null  || this.isUIDisabled ) return false;
$I$(8).focus$swingjs_api_js_DOMNode(this.focusNode);
return true;
});

Clazz.newMeth(C$, 'setComponentFocus$', function () {
this.jc.requestFocus$();
var c=this.jc.getFocusTraversalPolicy$().getDefaultComponent$java_awt_Container(this.jc);
if (c != null ) c.requestFocus$();
});

Clazz.newMeth(C$, 'addJQueryFocusCallbacks$', function () {
if (this.focusNode == null ) this.focusNode=this.domNode;
p$1.setTabIndex$I.apply(this, [-1]);
var node=this.$$O(this.focusNode);
node.unbind("focus blur");
var me=this;
{
node.focus(function(e) { //System.out.println("JSSCUI node.focus() callback " + me.id + "  " + document.activeElement.id);
if (!me.ignoreFocus) me.handleJSFocus$O$O$Z(me.jc, e.relatedTarget, true);
me.ignoreFocus = false;
//System.out.println("JSSCUI focus " + me.id);
});
node.blur(function(e) { try{ //System.out.println("JSSCUI node.blur() callback " + me.id + "  " + document.activeElement.id);
me.handleJSFocus$O$O$Z(me.jc, e.relatedTarget, false);
//System.out.println("JSSCUI focus blur " + me.id + "  " + document.activeElement.id);
}catch(e){ //System.out.println("JSSCUI focus error blur " + me.id);
} });
}
});

Clazz.newMeth(C$, 'handleJSFocus$O$O$Z', function (jco, related, focusGained) {
$I$(8).handleJSFocus$O$O$Z(jco, related, focusGained);
});

Clazz.newMeth(C$, 'abstractButtonFocusHack$', function () {
var focused=$I$(5).getCurrentFocusOwner$O(null);
var focusedUI=focused && focused.ui ||null;
if (focusedUI != null  && focusedUI !== this  ) {
focusedUI.handleJSFocus$O$O$Z(this.jc, null, false);
this.handleJSFocus$O$O$Z(this.jc, null, true);
}});

Clazz.newMeth(C$, 'bindJSKeyEvents$swingjs_api_js_DOMNode$Z', function (node, addFocus) {
this.setDataUI$swingjs_api_js_DOMNode(node);
this.keysEnabled=true;
this.bindJQueryEvents$swingjs_api_js_DOMNode$S$I(node, "keydown keypress keyup" + (addFocus ? " focusout" : ""), -2);
if (addFocus) {
this.addJQueryFocusCallbacks$();
}});

Clazz.newMeth(C$, 'setIgnoreEvent$O', function (jqevent) {

jqevent.originalEvent.xhandled = true;
});

Clazz.newMeth(C$, 'bindJQueryEvents$swingjs_api_js_DOMNode$S$I', function (node, eventList, eventID) {
var me=this;
var f=null;
this.setDataUI$swingjs_api_js_DOMNode(node);
this.addClass$swingjs_api_js_DOMNode$S(node, "ui-events");
{
f = function(jqevent) { return me.handleJSEvent$O$I$O(node, eventID, jqevent) }
}
this.$$O(node).bind(eventList, f);
});

Clazz.newMeth(C$, ['handleJSEvent$O$I$O','handleJSEvent$'], function (target, eventType, jQueryEvent) {
return true;
});

Clazz.newMeth(C$, 'revalidate$', function () {
this.jc.revalidate$();
});

Clazz.newMeth(C$, 'setTainted$', function () {
this.setTainted$Z(true);
});

Clazz.newMeth(C$, 'setTainted$Z', function (tf) {
this.isTainted=tf;
});

Clazz.newMeth(C$, ['stateChanged$javax_swing_event_ChangeEvent','stateChanged$'], function (e) {
});

Clazz.newMeth(C$, 'updatePropertyAncestor$Z', function (fromButtonListener) {
if (fromButtonListener) {
this.setTainted$();
this.setHTMLElement$();
}var p=this.jc.getParent$();
while (p != null ){
var parentui=(p == null  ? null : p.秘getUI$());
if (parentui != null ) {
parentui.setTainted$();
if (fromButtonListener) {
parentui.setHTMLElement$();
if (parentui.menu != null ) {
(parentui).updateMenu$Z(false);
} else if (parentui.isPopupMenu && p.getParent$() == null  ) {
p=(p).getInvoker$();
continue;
}}}p=p.getParent$();
}
}, p$1);

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (e) {
if (this.isUIDisabled || this.domNode == null  ) return;
var prop=e.getPropertyName$();
var value=e.getNewValue$();
if (prop == "ancestor") {
if (this.isAWT) p$1.setAWTFontAndColor$java_awt_Container.apply(this, [value]);
if (this.cellComponent != null ) return;
p$1.updatePropertyAncestor$Z.apply(this, [false]);
if (value == null ) return;
if (this.isDisposed && this.c.visible && e.getNewValue$() != null   ) this.setVisible$Z(true);
}this.propertyChangedCUI$java_beans_PropertyChangeEvent$S(e, prop);
});

Clazz.newMeth(C$, 'setAWTFontAndColor$java_awt_Container', function (value) {
var top=$I$(9).秘getTopInvokableAncestor$java_awt_Component$Z(value, false);
if (top === this.awttop  || (this.awttop=top) == null  ) {
if (top == null ) {
this.awtPeerBG=this.awtPeerFG=null;
}return;
}this.setBackgroundImpl$java_awt_Color(this.awtPeerBG=this.getBackground$());
this.setForegroundFor$swingjs_api_js_DOMNode$java_awt_Color(this.domNode, this.awtPeerFG=this.getForeground$());
this.setFont$java_awt_Font(this.c.getFont$());
}, p$1);

Clazz.newMeth(C$, 'propertyChangedFromListener$java_beans_PropertyChangeEvent$S', function (e, prop) {
if (this.isUIDisabled) return;
switch (prop) {
case "ancestor":
if (this.cellComponent != null ) return;
p$1.updatePropertyAncestor$Z.apply(this, [true]);
break;
}
this.propertyChangedCUI$java_beans_PropertyChangeEvent$S(e, prop);
});

Clazz.newMeth(C$, 'propertyChangedCUI$java_beans_PropertyChangeEvent$S', function (e, prop) {
if (!this.isMenu && this.cellComponent == null  ) this.getDOMNode$();
switch (prop) {
case "preferredSize":
this.preferredSize=e.getNewValue$();
return;
case "background":
this.setBackground$java_awt_Color(this.c.getBackground$());
return;
case "foreground":
this.setForeground$java_awt_Color(this.c.getForeground$());
return;
case "focusable":
this.setFocusable$();
return;
case "opaque":
this.setBackground$java_awt_Color(this.c.getBackground$());
return;
case "inverted":
this.updateDOMNode$();
return;
case "text":
var val=(this.c).getText$();
if (val == null  ? this.currentText != null  : !val.equals$O(this.currentText)) this.setIconAndText$S$javax_swing_Icon$I$S(prop, this.currentIcon, this.currentGap, val);
return;
case "iconTextGap":
if (this.iconNode != null ) {
var gap=(this.c).getIconTextGap$();
if (this.currentGap != gap) this.setIconAndText$S$javax_swing_Icon$I$S(prop, this.currentIcon, gap, this.currentText);
}return;
case "icon":
if (this.centeringNode != null ) {
var icon=p$1.getIcon$java_awt_JSComponent$javax_swing_Icon.apply(this, [this.c, null]);
if (icon == null  ? this.currentIcon != null  : !icon.equals$O(this.currentIcon)) this.setIconAndText$S$javax_swing_Icon$I$S(prop, icon, this.currentGap, this.currentText);
}return;
case "mnemonic":
var newValue=(e.getNewValue$()).intValue$();
this.setMnemonic$I(newValue);
this.setIconAndText$S$javax_swing_Icon$I$S(prop, this.currentIcon, this.currentGap, this.currentText);
return;
case "displayedMnemonicIndex":
this.mnemonicIndex=(e.getNewValue$()).intValue$();
this.setIconAndText$S$javax_swing_Icon$I$S(prop, this.currentIcon, this.currentGap, this.currentText);
return;
default:
if (C$.debugging) System.out.println$S("JSComponentUI: unrecognized prop: " + this.id + " " + prop );
}
});

Clazz.newMeth(C$, 'setMnemonic$I', function (newValue) {
if (newValue == this.mnemonic || this.domNode == null  ) return;
if (newValue < 0) {
newValue=(this.isLabel ? (this.label == null  ? -1 : this.label.getDisplayedMnemonic$()) : this.jc.getMnemonic$ && this.jc.getMnemonic$() ||-1);
}var node=(this.menuAnchorNode == null  ? this.domNode : this.menuAnchorNode);
if (this.mnemonic > 0 && newValue != this.mnemonic ) this.removeClass$swingjs_api_js_DOMNode$S(node, "ui-mnem-" + Character.toLowerCase$I(this.mnemonic));
if (newValue > 0) this.addClass$swingjs_api_js_DOMNode$S(node, "ui-mnem-" + Character.toLowerCase$I(newValue));
this.mnemonic=newValue;
});

Clazz.newMeth(C$, 'setUIDisabled$Z', function (b) {
return this.isUIDisabled=b;
});

Clazz.newMeth(C$, 'checkAllowDivOverflow$', function () {
var root=this.jc.getRootPane$();
this.allowDivOverflow=(root != null  && "false".equals$O(root.getClientProperty$O("swingjs.overflow.hidden")) );
});

Clazz.newMeth(C$, 'setAllowPaintedBackground$Z', function (TF) {
this.allowPaintedBackground=TF;
});

Clazz.newMeth(C$, 'getDOMNode$', function () {
return (this.isUIDisabled ? null : this.updateDOMNode$());
});

Clazz.newMeth(C$, 'updateDOMNode$', function () {
if (this.domNode == null ) {
if (this.notImplemented) {
this.notImplemented=false;
var s=this.jc.getClass$().getName$();
if (!s.equals$O("javax.swing.Box$Filler")) System.out.println$S("Swingjs WARNING: default JSComponentUI.updateDOMNode() is being used for " + s);
}this.domNode=$I$(4).createElement("div", this.id);
}return this.domNode;
});

Clazz.newMeth(C$, 'updateDOMNodeCUI$', function () {
if (this.myCursor !== p$1.getCursor.apply(this, []) ) this.setCursor$();
return this.domNode;
});

Clazz.newMeth(C$, 'updateCursorImmediately$', function () {
if (this.isUIDisabled) return;
this.setHTMLElement$();
this.setCursor$();
});

Clazz.newMeth(C$, 'setCursor$', function () {
this.myCursor=p$1.getCursor.apply(this, []);
var curs=$I$(5).getCursorName$java_awt_Cursor(this.myCursor);
$I$(4).setStyles(this.outerNode, ["cursor", curs]);
$I$(4).setStyles(this.domNode, ["cursor", curs]);
this.setWaitImage$Z(curs == "wait");
});

Clazz.newMeth(C$, 'getCursor', function () {
var cur=this.c.getCursor$();
return (cur === $I$(10).getDefaultCursor$()  ? null : cur);
}, p$1);

Clazz.newMeth(C$, 'setWaitImage$Z', function (doShow) {
if (this.waitImage == null ) {
if (!doShow) return;
var path=(this.applet._j2sPath ||null) + "/img/cursor_wait.gif";
this.waitImage=C$.newDOMObject$S$S$SA("image", this.id + "_waitImage", ["src", path]);
}if (doShow) this.$$O(this.waitImage).show();
 else this.$$O(this.waitImage).hide();
});

Clazz.newMeth(C$, 'setCssFont$swingjs_api_js_DOMNode$java_awt_Font', function (obj, font) {
if (font != null ) {
var istyle=font.getStyle$();
$I$(4).setStyles(obj, ["font-family", $I$(5).getCSSFontFamilyName$S(font.getFamily$()), "font-size", font.getSize$() + "px", "font-style", ((istyle & 2) == 0 ? "normal" : "italic"), "font-weight", ((istyle & 1) == 0 ? "normal" : "bold")]);
}this.enabled=!this.c.isEnabled$();
this.setEnabled$Z(this.c.isEnabled$());
return obj;
});

Clazz.newMeth(C$, 'newDOMObject$S$S$SA', function (key, id, attr) {
var obj=$I$(4).createElement(key, id);
for (var i=0; i < attr.length; ) $I$(4).setAttr(obj, attr[i++], attr[i++]);

return obj;
}, 1);

Clazz.newMeth(C$, 'wrap$S$S$swingjs_api_js_DOMNodeA', function (type, id, elements) {
var obj=C$.newDOMObject$S$S$SA(type, id + type, []);
for (var i=0; i < elements.length; i++) {
obj.appendChild(elements[i]);
}
return obj;
}, 1);

Clazz.newMeth(C$, 'debugDump$swingjs_api_js_DOMNode', function (d) {
System.out.println$O($I$(4).getAttr(d, "outerHTML"));
});

Clazz.newMeth(C$, 'getHTMLSizePreferred$swingjs_api_js_DOMNode$Z', function (obj, addCSS) {
return this.setHTMLSize1$swingjs_api_js_DOMNode$Z$Z(this.centeringNode == null  || obj !== this.domNode   ? obj : this.centeringNode, addCSS, true);
});

Clazz.newMeth(C$, 'getHTMLSize$swingjs_api_js_DOMNode', function (obj) {
return this.setHTMLSize1$swingjs_api_js_DOMNode$Z$Z(obj, false, false);
});

Clazz.newMeth(C$, 'getIconSize$javax_swing_AbstractButton', function (b) {
return (this.iconNode == null  || this.imageNode == null   || b.getIcon$() == null   ? null : this.getHTMLSize$swingjs_api_js_DOMNode(this.iconNode));
}, p$1);

Clazz.newMeth(C$, 'getTextSize$javax_swing_AbstractButton', function (b) {
if (this.textNode == null ) return null;
$I$(4).setStyles(this.textNode, ["padding", "0"]);
var t=b.getText$();
if (this.isAWT && t == "" ) t="\u00a0";
return (t == null  || t == ""  ? null : this.getHTMLSize$swingjs_api_js_DOMNode(this.textNode));
}, p$1);

Clazz.newMeth(C$, 'setHTMLSize1$swingjs_api_js_DOMNode$Z$Z', function (node, addCSS, usePreferred) {
if (node == null ) return null;
addCSS&=!this.isMenuItem;
var h;
var w;
var w0=null;
var h0=null;
var w0i=null;
var h0i=null;
var position=null;
var parentNode=null;
var hasFocus=false;
if (this.scrollPaneUI != null ) {
w=this.scrollPaneUI.c.getWidth$();
h=this.scrollPaneUI.c.getHeight$();
} else if (usePreferred && this.preferredSize != null  ) {
w=this.preferredSize.width;
h=this.preferredSize.height;
position=node.style.position ||null;
} else if (usePreferred && this.preferredDim != null  ) {
w=this.preferredDim.width;
h=this.preferredDim.height;
position=node.style.position ||null;
} else {
hasFocus=this.hasFocus$();
if (!this.isMenuItem) {
var simpleButton=this.isSimpleButton;
var centerNode=this.centeringNode;
var dnode=this.domNode;
{
w0 = node.style.width; h0 = node.style.height; position = node.style.position;
if (node == centerNode && simpleButton) { w0i = dNode.style.width;
h0i = dNode.style.height; }
}
}$I$(4).setStyles(node, ["position", null, "width", null, "height", null]);
if (this.innerNode != null ) $I$(4).setStyles(this.innerNode, ["width", null, "height", null]);
if (node === this.centeringNode ) {
if (!this.isHTML) {
$I$(4).setStyles(node, ["position", null]);
$I$(4).setStyles(this.textNode, ["position", null]);
$I$(4).setStyles(this.iconNode, ["position", null]);
}}if (C$.tempDiv == null ) {
C$.tempDiv=$I$(4).createElement("div", "_temp");
$I$(4).setTopLeftAbsolute(C$.tempDiv, 0, -100000);
this.$$O(this.body).after(C$.tempDiv);
}parentNode=$I$(4).transferTo(node, null);
C$.tempDiv.appendChild(node);
var r=C$.tempDiv.getBoundingClientRect();
C$.tempDiv.removeChild(node);
w=(Math.max(0, Math.ceil(r.width))|0);
h=(Math.max(0, Math.ceil(r.height))|0);
if (!usePreferred) {
this.actualWidth=w;
this.actualHeight=h;
}}var dim=this.getCSSAdjustment$Z(addCSS);
dim.width+=w;
dim.height+=h;
$I$(4).setStyles(node, ["position", null]);
if (w0 != null ) {
$I$(4).setStyles(node, ["width", (this.isHTML && this.isLabel  ? "inherit" : w0), "height", h0]);
}if (position != null ) {
$I$(4).setStyles(node, ["position", position]);
}if (w0i != null ) {
$I$(4).setStyles(this.domNode, ["width", w0i, "height", h0i]);
}if (parentNode != null ) {
parentNode.appendChild(node);
if (hasFocus) {
this.ignoreFocus=true;
node.focus();
}}return dim;
});

Clazz.newMeth(C$, 'getCSSAdjustment$Z', function (addingCSS) {
return Clazz.new_($I$(11,1).c$$I$I,[0, 0]);
});

Clazz.newMeth(C$, 'setHTMLElement$', function () {
return this.setHTMLElementCUI$();
});

Clazz.newMeth(C$, 'setHTMLElementCUI$', function () {
if (this.isUIDisabled || !this.isTainted ) return this.outerNode;
if (this.isDummyFrame) {
this.isTainted=false;
return (this.outerNode=$I$(4).createElement("div", "dummyFrame"));
}this.updateDOMNode$();
p$1.checkTransparent.apply(this, []);
var children=this.getChildren$();
var n=this.getChildCount$();
if (this.isMenuItem) {
this.outerNode=this.domNode;
if (n == 0) return this.outerNode;
}if (this.outerNode == null ) this.outerNode=C$.wrap$S$S$swingjs_api_js_DOMNodeA("div", this.id, [this.domNode]);
{
this.outerNode.setAttribute("name", this.jc.__CLASS_NAME__);
}
p$1.setOuterLocationFromComponent.apply(this, []);
if (n > 0 && this.containerNode == null  ) this.containerNode=this.outerNode;
if (this.isContainer || n > 0 ) {
if (this.isContainer && !this.isMenuItem && !this.isTable  ) {
var w=this.getContainerWidth$();
var h=this.getContainerHeight$();
$I$(4).setSize(this.outerNode, w, h);
if (this.isPanel || this.isContentPane || this.isRootPane  ) {
$I$(4).setStyles(this.outerNode, ["overflow", this.allowDivOverflow ? "visible" : "hidden"]);
if (this.isRootPane) {
if (this.jc.getFrameViewer$().isApplet) {
var cdiv=$I$(5).getHTML5Applet$java_awt_Component(this.jc)._getContentLayer();
$I$(4).appendChildSafely(cdiv, this.outerNode);
}}}}if (n > 0) this.addChildrenToDOM$java_awt_ComponentA$I(children, n);
if (this.isWindow && this.jc.getWidth$() > 0  && this.isFrameIndependent$()  && !this.isSticky ) {
$I$(4).transferTo(this.outerNode, this.body);
$I$(4).setStyles(this.outerNode, ["position", "absolute"]);
}} else {
$I$(4).setStyles(this.outerNode, ["overflow", "hidden"]);
}this.isTainted=false;
if (this.embeddingNode != null ) {
$I$(4).detachAll(this.embeddingNode);
$I$(4).appendChildSafely(this.embeddingNode, this.outerNode);
}return this.outerNode;
});

Clazz.newMeth(C$, 'isFrameIndependent$', function () {
return true;
});

Clazz.newMeth(C$, 'getChildren$', function () {
return $I$(9).秘getChildArray$java_awt_Container(this.jc);
});

Clazz.newMeth(C$, 'getChildCount$', function () {
return this.jc.getComponentCount$();
});

Clazz.newMeth(C$, 'getContainerNode$I', function (i) {
return this.containerNode;
});

Clazz.newMeth(C$, 'addChildrenToDOM$java_awt_ComponentA$I', function (children, n) {
for (var i=0; i < n; i++) {
if (!this.isTable && children[i] == null  ) break;
var ui=$I$(5).getUI$java_awt_Component$Z(children[i], false);
if (ui == null  || ui.isNull  || ui.isPaintedOnly ) {
continue;
}ui.parent=this;
if (ui.getOuterNode$() == null ) {
System.out.println$S("JSCUI addChildren no outer node for " + ui.id);
} else {
if (ui.domNode !== ui.outerNode  && $I$(4).getParent(ui.domNode) == null  ) ui.outerNode.appendChild(ui.domNode);
if (ui.embeddingNode == null  && (!ui.isWindow || !ui.isFrameIndependent$() ) ) $I$(4).appendChildSafely(this.getContainerNode$I(i), ui.outerNode);
}}
});

Clazz.newMeth(C$, 'getContainerWidth$', function () {
return this.width=this.c.getWidth$();
});

Clazz.newMeth(C$, 'getContainerHeight$', function () {
return this.height=this.c.getHeight$();
});

Clazz.newMeth(C$, 'update$java_awt_Graphics$javax_swing_JComponent', function (g, c) {
if (this.isUIDisabled) return;
if (this.cellComponent == null ) {
this.setHTMLElement$();
if (this.allowTextAlignment && this.centeringNode != null  ) this.setAlignments$javax_swing_AbstractButton$Z(this.jc, false);
}this.paint$java_awt_Graphics$javax_swing_JComponent(g, c);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
this.update$java_awt_Graphics$javax_swing_JComponent(g, this.jc);
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$javax_swing_JComponent', function (g, c) {
this.setOverflow$();
if (this.imageNode != null  && !this.imagePersists ) {
$I$(4).setStyles(this.imageNode, ["visibility", "hidden"]);
}});

Clazz.newMeth(C$, 'setOverflow$', function () {
if (this.textNode != null ) $I$(4).setStyles(this.textNode, ["overflow", "hidden"]);
});

Clazz.newMeth(C$, 'repaint$J$I$I$I$I', function (tm, x, y, width, height) {
});

Clazz.newMeth(C$, 'print$java_awt_Graphics', function (g) {
$I$(1).notImplemented$S("");
});

Clazz.newMeth(C$, 'getMinimumSize$', function () {
return this.getMinimumSize$javax_swing_JComponent(this.jc);
});

Clazz.newMeth(C$, 'getPreferredSize$', function () {
return this.getPreferredSize$javax_swing_JComponent(this.jc);
});

Clazz.newMeth(C$, 'getPreferredSize$javax_swing_JComponent', function (jc) {
return this.getHTMLSizePreferred$swingjs_api_js_DOMNode$Z(this.updateDOMNode$(), false);
});

Clazz.newMeth(C$, 'contains$javax_swing_JComponent$I$I', function (c, x, y) {
return c.inside$I$I(x, y);
});

Clazz.newMeth(C$, 'createUI$javax_swing_JComponent', function (c) {
return null;
}, 1);

Clazz.newMeth(C$, 'getBaseline$javax_swing_JComponent$I$I', function (c, width, height) {
if (c == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Component must be non-null"]);
}if (width < 0 || height < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Width and height must be >= 0"]);
}return -1;
});

Clazz.newMeth(C$, 'getBaselineResizeBehavior$javax_swing_JComponent', function (c) {
if (c == null ) {
throw Clazz.new_(Clazz.load('NullPointerException').c$$S,["Component must be non-null"]);
}return $I$(12).OTHER;
});

Clazz.newMeth(C$, 'getJSTextValue$', function () {
return $I$(4).getAttr(this.domNode, this.valueNode == null  ? "innerText" : "value");
});

Clazz.newMeth(C$, 'getOuterNode$', function () {
return (this.outerNode == null  && !this.isUIDisabled  ? this.setHTMLElement$() : this.outerNode);
});

Clazz.newMeth(C$, 'setJSText$swingjs_api_js_DOMNode$S$S', function (obj, prop, val) {
return $I$(4).setAttr(obj, prop, val);
});

Clazz.newMeth(C$, 'isObscured$', function () {
$I$(1).notImplemented$S("");
return false;
});

Clazz.newMeth(C$, 'canDetermineObscurity$', function () {
$I$(1).notImplemented$S("");
return false;
});

Clazz.newMeth(C$, 'setVisible$Z', function (b) {
this.setVisible$swingjs_api_js_DOMNode$Z(this.getOuterNode$(), b);
});

Clazz.newMeth(C$, 'setVisible$swingjs_api_js_DOMNode$Z', function (node, b) {
if (this.isPaintedOnly) b=false;
if (!b && this.cellComponent != null  ) return;
if (node == null ) node=this.domNode;
$I$(4).setVisible(node, b);
if (b) {
if (this.isDisposed) this.undisposeUI$swingjs_api_js_DOMNode(node);
}});

Clazz.newMeth(C$, 'setEnabled$Z', function (b) {
if (b == this.enabled ) return;
this.enabled=b;
if (this.enableNode != null ) this.enableNode$swingjs_api_js_DOMNode$Z(this.enableNode, b);
 else if (this.enableNodes != null ) for (var i=0; i < this.enableNodes.length; i++) this.enableNode$swingjs_api_js_DOMNode$Z(this.enableNodes[i], b);

});

Clazz.newMeth(C$, 'enableNode$swingjs_api_js_DOMNode$Z', function (node, b) {
if (node == null ) return;
$I$(4).setAttr(node, "disabled", (b ? "FALSE" : "TRUE"));
if (!b && this.inactiveForeground === this.colorUNKNOWN  ) this.getDisabledColors$S(this.buttonNode == null  ? this.getPropertyPrefix$() : "Button");
if (this.jc.isOpaque$()) {
var bg=this.getBackground$();
this.setBackgroundImpl$java_awt_Color(b || !(Clazz.instanceOf(bg, "javax.swing.plaf.UIResource")) || this.inactiveBackground == null    ? bg : this.inactiveBackground);
}var fg=this.getForeground$();
this.setForegroundFor$swingjs_api_js_DOMNode$java_awt_Color(this.domNode, b ? fg : this.getInactiveTextColor$java_awt_Color(fg));
});

Clazz.newMeth(C$, 'getBackground$', function () {
return (this.awtPeerBG == null  ? this.c.getBackground$() : this.awtPeerBG);
});

Clazz.newMeth(C$, 'getForeground$', function () {
return (this.awtPeerFG == null  ? this.c.getForeground$() : this.awtPeerFG);
});

Clazz.newMeth(C$, 'getInactiveTextColor$java_awt_Color', function (fg) {
return (this.inactiveForeground == null  ? fg : this.inactiveForeground);
});

Clazz.newMeth(C$, 'getDisabledColors$S', function (pp) {
this.inactiveBackground=$I$(13).getColor$O(pp + ".inactiveBackground");
this.inactiveForeground=$I$(13).getColor$O(pp + ".inactiveForeground");
});

Clazz.newMeth(C$, 'setBounds$I$I$I$I$I', function (x, y, width, height, op) {
if (this.isUIDisabled) return;
var isBounded=(width > 0 && height > 0 );
if (isBounded && !this.boundsSet ) {
if (this.c.visible && this.cellComponent == null  ) this.setVisible$Z(true);
this.boundsSet=true;
}switch (op) {
case 3:
case 1:
x=this.c.getX$();
y=this.c.getY$();
if (this.embeddingNode == null  && (this.x != x || this.y != y ) ) {
this.x=x;
this.y=y;
}p$1.setOuterLocationFromComponent.apply(this, []);
if (op == 1) break;
case 4:
case 2:
if (this.scrollPaneUI != null ) {
width=Math.min(width, this.scrollPaneUI.c.getWidth$());
height=Math.min(height, this.scrollPaneUI.c.getHeight$());
}if (width > 0 && height > 0 ) p$1.setSizeFromComponent$I$I$I.apply(this, [width, height, op]);
break;
}
});

Clazz.newMeth(C$, 'setOuterLocationFromComponent', function () {
if (this.outerNode != null  && !this.isMenuItem ) {
if (this.parent == null  && this.jc.getParent$() != null   && (this.parent=this.jc.getParent$().秘getUI$()) != null   && this.parent.outerNode != null  ) $I$(4).appendChildSafely(this.parent.outerNode, this.outerNode);
$I$(4).setPositionAbsolute(this.outerNode);
$I$(4).setStyles(this.outerNode, ["left", (this.x=this.c.getX$()) + "px", "top", (this.y=this.c.getY$()) + "px"]);
}}, p$1);

Clazz.newMeth(C$, 'setSizeFromComponent$I$I$I', function (width, height, op) {
var size=this.getCSSAdjustment$Z(true);
this.width=width;
this.height=height;
if (this.domNode == null ) {
this.alignmentDisabled=true;
this.updateDOMNode$();
this.alignmentDisabled=false;
}this.setJSDimensions$I$I(width + size.width, height + size.height);
this.setInnerComponentBounds$I$I(width, height);
}, p$1);

Clazz.newMeth(C$, 'setJSDimensions$I$I', function (width, height) {
if (this.jsActualWidth > 0) width=this.jsActualWidth;
if (this.jsActualHeight > 0) height=this.jsActualHeight;
$I$(4).setSize(this.domNode, width, height);
if (this.outerNode != null ) {
$I$(4).setSize(this.outerNode, width, height);
}});

Clazz.newMeth(C$, 'setInnerComponentBounds$I$I', function (width, height) {
});

Clazz.newMeth(C$, 'getIcon$java_awt_JSComponent$javax_swing_Icon', function (c, icon) {
return (c == null  || icon == null  && (icon=(c).getIcon$()) == null    ? null : icon.getIconWidth$() <= 0 || icon.getIconHeight$() <= 0  ? null : (Clazz.instanceOf(icon, "javax.swing.ImageIcon")) ? icon : $I$(5).createImageIcon$java_awt_Component$javax_swing_Icon$S(this.jc, icon, this.id + "tmpIcon"));
}, p$1);

Clazz.newMeth(C$, 'fixText$S', function (t) {
if (t != null ) {
if (this.isHTML) {
} else if (this.valueNode == null ) {
t=(t.indexOf$S("\u0000") >= 0 ? $I$(14).rep$S$S$S(t, "\u0000", "") : t).replace$C$C(" ", "\u00a0");
}}return t;
});

Clazz.newMeth(C$, 'setIconAndText$S$javax_swing_Icon$I$S', function (prop, icon, gap, text) {
if (this.iconNode == null  && this.textNode == null  ) return;
this.setMnemonic$I(-1);
this.actualWidth=this.actualHeight=0;
text=this.fixText$S(this.currentText=text);
this.currentGap=gap;
this.currentIcon=null;
this.imageNode=null;
if (this.iconNode != null ) {
icon=this.currentIcon=p$1.getIcon$java_awt_JSComponent$javax_swing_Icon.apply(this, [this.jc, icon]);
this.$$O(this.iconNode).empty();
if (this.currentIcon != null ) {
this.imageNode=$I$(4).getImageNode(this.currentIcon.getImage$());
this.iconNode.appendChild(this.imageNode);
this.iconHeight=icon.getIconHeight$();
$I$(4).setStyles(this.imageNode, ["visibility", (this.isLabel ? "hidden" : null)]);
$I$(4).setStyles(this.iconNode, ["height", this.iconHeight + "px", "width", icon.getIconWidth$() + "px"]);
}}if (text == null ) {
text="";
} else if (text == "") {
if (this.isAWT) text="\u00a0";
}if (text != "") {
if (text == "\u0000") {
this.isPaintedOnly=true;
}if (!this.isHTML || !this.isLabel ) $I$(4).setStyles(this.textNode, ["white-space", "nowrap"]);
if (icon == null ) {
if (this.iconNode != null  && this.allowTextAlignment  && this.isMenuItem  && this.actionNode == null   && text != null  ) {
$I$(4).addHorizontalGap(this.iconNode, gap + 11);
}} else {
if (gap == 2147483647) gap=this.getDefaultIconTextGap$();
if (gap != 0 && text != null  ) $I$(4).addHorizontalGap(this.iconNode, gap);
}this.isHTML=false;
if (text.indexOf$S("<html>") == 0) {
this.isHTML=true;
text=$I$(14).rep$S$S$S(text.substring$I(6), "</br>", "");
text=$I$(14).rep$S$S$S(text, "</html>", "");
text=$I$(14).rep$S$S$S(text, "href=", "target=_blank href=");
} else if (this.jc.getClientProperty$O("html") != null ) {
this.isHTML=true;
} else if (this.mnemonicIndex >= 0) {
var i=this.mnemonicIndex;
this.isHTML=true;
if (i < text.length$()) text=text.substring$I$I(0, i) + "<u>" + text.substring$I$I(i, i + 1) + "</u>" + text.substring$I(i + 1) ;
}}var obj=null;
if (this.textNode != null ) {
prop="innerHTML";
obj=this.textNode;
this.setCssFont$swingjs_api_js_DOMNode$java_awt_Font(this.domNode, this.getFont$());
this.setCssFont$swingjs_api_js_DOMNode$java_awt_Font(this.textNode, this.getFont$());
if (!this.isHTML) text=$I$(14).rep$S$S$S(text, "<", "&lt;").replace$C$C(" ", "\u00a0");
} else if (this.valueNode != null ) {
prop="value";
obj=this.valueNode;
if (this.iconNode != null ) $I$(4).setVisible(obj, text != null );
}if (obj != null ) {
this.setJSText$swingjs_api_js_DOMNode$S$S(obj, prop, text);
}if (this.valueNode != null ) {
this.setBackgroundImpl$java_awt_Color(this.c.getBackground$());
}});

Clazz.newMeth(C$, 'getDefaultIconTextGap$', function () {
return 0;
});

Clazz.newMeth(C$, 'getJSInsets$', function () {
if (this.insets == null ) this.insets=Clazz.new_($I$(2,1).c$$I$I$I$I,[0, 0, 0, 0]);
this.insets=this.jc.getInsets$java_awt_Insets(this.insets);
});

Clazz.newMeth(C$, 'setButtonRectangles$Z', function (isPreferred) {
if (this.iconR == null ) {
this.iconR=Clazz.new_($I$(15,1));
this.textR=Clazz.new_($I$(15,1));
this.viewR=Clazz.new_($I$(15,1));
}this.getJSInsets$();
if (isPreferred) {
this.viewR.width=32767;
this.viewR.height=32767;
} else {
this.viewR.x=0;
this.viewR.y=0;
this.viewR.width=this.width - this.insets.right - this.insets.left ;
this.viewR.height=this.height - this.insets.bottom - this.insets.top ;
}this.iconR.width=-1;
if (this.isMenuItem && this.actionNode != null  ) {
this.iconR.width=this.iconR.height=15;
} else if (this.icon == null  && this.iconNode != null  ) {
var d=this.getHTMLSize$swingjs_api_js_DOMNode(this.iconNode);
this.iconR.width=d.width;
this.iconR.height=d.height;
}this.iconR.x=this.iconR.y=this.textR.x=this.textR.y=0;
});

Clazz.newMeth(C$, 'addCentering$swingjs_api_js_DOMNode', function (node) {
if (this.iconNode == null ) this.iconNode=C$.newDOMObject$S$S$SA("span", this.id + "_icon", []);
this.textNode=C$.newDOMObject$S$S$SA("span", this.id + "_txt", []);
this.centeringNode=C$.newDOMObject$S$S$SA("span", this.id + "_ctr", []);
this.centeringNode.appendChild(this.iconNode);
this.centeringNode.appendChild(this.textNode);
node.appendChild(this.centeringNode);
});

Clazz.newMeth(C$, 'updateCenteringNode$', function () {
if (this.jc.秘paintsSelfEntirely$()) {
$I$(4).setStyles(this.centeringNode, ["visibility", "hidden"]);
$I$(4).setStyles(this.domNode, ["border", "none"]);
$I$(4).setStyles(this.domNode, ["background", "none"]);
}});

Clazz.newMeth(C$, 'setAlignments$javax_swing_AbstractButton$Z', function (b, justGetPreferred) {
if (this.alignmentDisabled) return;
var hTextPos=b.getHorizontalTextPosition$();
var hAlign=b.getHorizontalAlignment$();
var vAlign=b.getVerticalAlignment$();
var vTextPos=b.getVerticalTextPosition$();
this.getJSInsets$();
var dimIcon=p$1.getIconSize$javax_swing_AbstractButton.apply(this, [b]);
var dimText=p$1.getTextSize$javax_swing_AbstractButton.apply(this, [b]);
var wIcon=(this.actionNode != null  ? (this.isMenuItem ? 15 : 20) : dimIcon == null  ? 0 : Math.max(0, dimIcon.width));
var wText=(dimText == null  ? 0 : dimText.width);
var gap=(wText == 0 || wIcon == 0  ? 0 : b.getIconTextGap$());
var w0=this.cellComponent != null  ? this.cellWidth : this.$$O(this.domNode).width();
var w=w0;
if (w < wIcon + wText) {
w=wIcon + wText;
}var alignVCenter=(vAlign == 0);
var margins=(this.isLabel ? (this.isAWT ? b.getInsets$() : this.insets) : p$1.getButtonMargins$javax_swing_AbstractButton$Z.apply(this, [b, justGetPreferred]));
if (margins == null ) margins=C$.zeroInsets;
var myInsets=(this.isLabel || !this.isSimpleButton || justGetPreferred   ? C$.zeroInsets : this.getButtonOuterInsets$javax_swing_AbstractButton(b));
var h=(dimText == null  ? 0 : dimText.height);
var ih=(dimIcon == null  ? 0 : dimIcon.height);
var hCtr=Math.max(h, ih);
var wCtr=wIcon + gap + wText ;
var wAccel=0;
var ltr=this.jc.getComponentOrientation$().isLeftToRight$();
var alignLeft;
var alignRight;
var alignHCenter;
var textRight;
if (this.menuAnchorNode == null ) {
alignLeft=(w == 0 || hAlign == 2  || hAlign == (ltr ? 10 : 11) );
alignRight=w != 0 && (hAlign == 4 || hAlign == (ltr ? 11 : 10) ) ;
alignHCenter=(!alignLeft && !alignRight );
textRight=(hTextPos == 4 || hTextPos == (ltr ? 11 : 10) );
} else {
alignLeft=ltr;
alignRight=!ltr;
alignHCenter=false;
textRight=ltr;
if (!this.isMenu) {
var accel=p$1.getAccelStr$javax_swing_JMenuItem.apply(this, [b]);
var accelNode=this.menuAnchorNode;
accelNode=accelNode.children[1] ||null;
if ((accelNode == null ) != (accel == null ) ) {
if (accel == null ) {
$I$(4).remove(accelNode);
} else {
this.menuAnchorNode.appendChild(accelNode=$I$(4).createElement("span", this.id + "_acc"));
this.addClass$swingjs_api_js_DOMNode$S(accelNode, "ui-j2smenu-accel");
$I$(4).setAttr(accelNode, "role", "menuitem");
$I$(4).setStyles(accelNode, ["font-size", "10px"]);
this.setMenuItem$swingjs_api_js_DOMNode(accelNode);
}}if (accel != null ) {
$I$(4).setStyles(accelNode, ["float", null]);
$I$(4).setAttr(accelNode, "innerHTML", accel);
wAccel=this.getHTMLSize$swingjs_api_js_DOMNode(accelNode).width;
$I$(4).setStyles(accelNode, ["float", ltr ? "right" : "left", "text-align", ltr ? "right" : "left", "margin", "0px 5px", "transform", "translateY(15%)"]);
}}$I$(4).setStyles(this.menuAnchorNode, ["width", "95%", "min-width", new Double(Math.max(75, (wCtr + wAccel + margins.left + margins.right ) * 1.1)).toString() + "px"]);
}if (alignHCenter) {
switch (hTextPos) {
case 1:
case 3:
hCtr=ih + gap + h ;
case 0:
wCtr=Math.max(wIcon, wText);
if (w0 > 0 && w0 < w ) w=w0;
break;
}
}if (justGetPreferred) {
if (this.preferredDim == null ) this.preferredDim=Clazz.new_($I$(11,1));
this.preferredDim.width=wCtr + margins.left + margins.right ;
this.preferredDim.height=hCtr + margins.top + margins.bottom ;
return;
}this.preferredDim=null;
var cssCtr=C$.getJSObject$();
var cssTxt=C$.getJSObject$();
var cssIcon=C$.getJSObject$();
C$.addJSKeyVal$O$SA(cssCtr, ["position", "absolute", "top", null, "left", null, "transform", null, "width", (this.isHTML && this.isLabel  ? "inherit" : wCtr + "px"), "height", hCtr + "px"]);
C$.addJSKeyVal$O$SA(cssIcon, ["position", "absolute", "top", null, "left", null, "transform", null]);
C$.addJSKeyVal$O$SA(cssTxt, ["position", "absolute", "top", null, "left", null, "transform", null]);
this.isFullyCentered=(alignHCenter && alignVCenter && wIcon == 0   || wText == 0 && margins.left == margins.right  && margins.top == margins.bottom  && myInsets.left == myInsets.right  && myInsets.top == myInsets.bottom  );
if (this.isFullyCentered) {
p$1.fullyCenter$O$Z.apply(this, [cssCtr, this.isSimpleButton || this.isLabel ]);
p$1.fullyCenter$O$Z.apply(this, [cssIcon, this.isSimpleButton]);
p$1.fullyCenter$O$Z.apply(this, [cssTxt, this.isSimpleButton]);
} else {
var left=-1;
if (this.menuAnchorNode == null ) {
if (alignHCenter) {
switch (hTextPos) {
case 1:
case 3:
case 0:
C$.addJSKeyVal$O$SA(cssTxt, ["left", (((wCtr - wText)/2|0)) + "px"]);
C$.addJSKeyVal$O$SA(cssIcon, ["left", (((wCtr - wIcon)/2|0)) + "px"]);
break;
default:
var off=(wCtr/2|0);
if (textRight) {
C$.addJSKeyVal$O$SA(cssIcon, ["left", "0px"]);
C$.addJSKeyVal$O$SA(cssTxt, ["left", (gap + wIcon) + "px"]);
} else {
C$.addJSKeyVal$O$SA(cssTxt, ["left", off + "px"]);
C$.addJSKeyVal$O$SA(cssIcon, ["left", (gap + wText) + "px"]);
}break;
}
left=((w - wCtr + margins.left - margins.right + myInsets.left - myInsets.right)/2|0);
} else if (alignRight) {
left=w - wCtr - margins.right - myInsets.right - (this.cellComponent == null  ? 0 : 2) ;
if (textRight) {
C$.addJSKeyVal$O$SA(cssTxt, ["left", (wCtr - wText) + "px"]);
C$.addJSKeyVal$O$SA(cssIcon, ["left", "0px"]);
} else {
C$.addJSKeyVal$O$SA(cssTxt, ["left", "0px"]);
C$.addJSKeyVal$O$SA(cssIcon, ["left", (wCtr - wIcon) + "px"]);
}} else {
left=margins.left + myInsets.left - (this.cellComponent == null  ? 0 : 1);
if (textRight) {
var off=(!this.isMenuItem || ltr || this.actionNode != null    ? 0 : this.actionItemOffset);
C$.addJSKeyVal$O$SA(cssIcon, ["left", off + "px"]);
C$.addJSKeyVal$O$SA(cssTxt, ["left", (wIcon + gap) + "px"]);
} else {
C$.addJSKeyVal$O$SA(cssTxt, ["left", (!this.isMenuItem ? 0 : ltr ? this.actionItemOffset : -3) + "px"]);
C$.addJSKeyVal$O$SA(cssIcon, ["left", (wText + gap) + "px"]);
}}C$.addJSKeyVal$O$SA(cssCtr, ["left", left + "px"]);
} else {
if (alignRight) {
$I$(4).setStyles(this.itemNode, ["text-align", "right"]);
C$.addJSKeyVal$O$SA(cssCtr, ["right", "0px"]);
C$.addJSKeyVal$O$SA(cssTxt, ["right", "23px"]);
C$.addJSKeyVal$O$SA(cssIcon, ["right", "0px"]);
} else {
$I$(4).setStyles(this.itemNode, ["text-align", "left"]);
C$.addJSKeyVal$O$SA(cssCtr, ["left", "0px"]);
C$.addJSKeyVal$O$SA(cssIcon, ["left", "0px"]);
C$.addJSKeyVal$O$SA(cssTxt, ["left", "23px"]);
}}h=this.c.getHeight$();
if (h == 0) {
h=16;
}if (this.menuAnchorNode == null ) {
var top;
switch (vAlign) {
case 1:
top=margins.top + myInsets.top;
break;
case 3:
top=h - margins.bottom - myInsets.bottom - hCtr ;
break;
default:
case 0:
top=((h - hCtr + margins.top - margins.bottom + myInsets.top - myInsets.bottom)/2|0);
break;
}
C$.addJSKeyVal$O$SA(cssCtr, ["top", top + "px"]);
var itop;
var yoff=null;
var iscale=null;
switch (vTextPos) {
case 1:
top=itop=0;
break;
case 3:
top=itop=100;
break;
default:
case 0:
top=itop=50;
if (this.iconNode === this.actionNode ) {
itop=70;
iscale="scale(0.8,0.8)";
}yoff="-50%";
break;
}
C$.addJSKeyVal$O$SA(cssTxt, ["top", top + "%", "transform", "translateY(" + (yoff == null  ? "-" + top + "%"  : yoff + ")")]);
C$.addJSKeyVal$O$SA(cssIcon, ["top", top + "%", "transform", "translateY(-" + itop + "%)" + (iscale == null  ? "" : iscale) ]);
} else {
$I$(4).setStyles(this.menuAnchorNode, ["height", h + "px"]);
C$.addJSKeyVal$O$SA(cssIcon, ["top", "50%", "transform", "translateY(-80%) scale(0.6,0.6)"]);
}}p$1.setCSS$O$swingjs_api_js_DOMNode.apply(this, [cssCtr, this.centeringNode]);
p$1.setCSS$O$swingjs_api_js_DOMNode.apply(this, [cssIcon, this.iconNode]);
p$1.setCSS$O$swingjs_api_js_DOMNode.apply(this, [cssTxt, this.textNode]);
if (this.cellComponent != null ) this.updateCellNode$();
});

Clazz.newMeth(C$, 'fullyCenter$O$Z', function (css, noOffsets) {
if (noOffsets) C$.addJSKeyVal$O$SA(css, ["width", null, "position", null, "padding", "0", "margin", "0 auto"]);
 else C$.addJSKeyVal$O$SA(css, ["width", null, "top", "50%", "left", "50%", "transform", "translateX(-50%)translateY(-50%)translateY(0.5px)translateX(0.5px)", "position", "absolute"]);
}, p$1);

Clazz.newMeth(C$, 'getJSObject$', function () {
return {} ||null;
}, 1);

Clazz.newMeth(C$, 'addJSKeyVal$O$SA', function (o, kv) {
for (var i=0, n=kv.length; i < n; i++) {

o[kv[i++]] = kv[i];
}
}, 1);

Clazz.newMeth(C$, 'setCSS$O$swingjs_api_js_DOMNode', function (css, node) {
if (node == null ) return;

for (var a in css)node.style[a] = css[a];
}, p$1);

Clazz.newMeth(C$, 'updateCellNode$', function () {
if (this.cellWidth == 0 || this.cellHeight == 0 ) {
return;
}if (this.allowPaintedBackground) $I$(4).setStyles(this.domNode, ["background", "transparent"]);
if (Clazz.instanceOf(this.cellComponent, "javax.swing.JTable.BooleanRenderer") || this.cellComponent.getClientProperty$O("_jsBooleanEditor") != null  ) {
$I$(4).setStyles(this.centeringNode, ["width", "100%", "height", "100%"]);
$I$(4).setStyles(this.buttonNode, ["width", "100%", "height", "100%"]);
$I$(4).setStyles(this.actionNode, ["position", "absolute", "width", "14px", "height", "14px", "top", ((this.cellHeight/2|0)) + "px"]);
var textAlign=(this.cellComponent).getHorizontalAlignment$();
var width=this.cellWidth;
switch (textAlign) {
case 4:
case 11:
$I$(4).setStyles(this.actionNode, ["left", width + "px", "transform", "scale(0.75,0.75) translate(-25px,-20px)"]);
break;
case 2:
case 10:
$I$(4).setStyles(this.actionNode, ["left", "0px", "transform", "scale(0.75,0.75) translate(-5px,-20px)"]);
break;
case 0:
$I$(4).setStyles(this.actionNode, ["left", ((width/2|0)) + "px", "transform", "scale(0.75,0.75) translate(-15px,-15px)"]);
break;
}
}});

Clazz.newMeth(C$, 'getButtonMargins$javax_swing_AbstractButton$Z', function (b, includeOuter) {
return (includeOuter ? b.getInsets$() : Clazz.instanceOf(b.getBorder$(), "javax.swing.border.CompoundBorder") ? (b.getBorder$()).getInsideBorder$().getBorderInsets$java_awt_Component(b) : null);
}, p$1);

Clazz.newMeth(C$, 'getButtonOuterInsets$javax_swing_AbstractButton', function (b) {
if (Clazz.instanceOf(b.getBorder$(), "javax.swing.border.CompoundBorder")) {
return (b.getBorder$()).getOutsideBorder$().getBorderInsets$java_awt_Component(b);
}return b.getInsets$();
});

Clazz.newMeth(C$, 'getFont$', function () {
var f=this.c.getFont$();
return (f == null  ? $I$(16).dialogPlain12 : f);
});

Clazz.newMeth(C$, 'getAccelStr$javax_swing_JMenuItem', function (b) {
var ks=b.getAccelerator$();
if (ks != null ) {
var k=$I$(17).getKeyText$I(ks.getKeyCode$());
if (k == "Escape") k="Esc";
var s=$I$(17).getKeyModifiersText$I(ks.getModifiers$());
return s + (s == "" ? "" : "-") + k ;
}return null;
}, p$1);

Clazz.newMeth(C$, 'handleEvent$java_awt_AWTEvent', function (e) {
});

Clazz.newMeth(C$, 'coalescePaintEvent$java_awt_event_PaintEvent', function (e) {
});

Clazz.newMeth(C$, 'getLocationOnScreen$', function () {
var offset=this.$$O(this.outerNode == null  ? this.jc.getParent$().秘getUI$().outerNode : this.outerNode).offset();
return Clazz.new_($I$(18,1).c$$I$I,[offset.left, offset.top]);
});

Clazz.newMeth(C$, 'getColorModel$', function () {
return $I$(19).getDefaultToolkit$().getColorModel$();
});

Clazz.newMeth(C$, 'getToolkit$', function () {
return $I$(19).getDefaultToolkit$();
});

Clazz.newMeth(C$, 'getGraphics$', function () {
return null;
});

Clazz.newMeth(C$, 'getFontMetrics$java_awt_Font', function (font) {
return null;
});

Clazz.newMeth(C$, 'dispose$', function () {
if (this.isUIDisabled) return;
if (this.cellComponent != null ) {
$I$(4).setVisible(this.domNode, false);
return;
}this.isDisposed=true;
$I$(4).dispose(this.domNode);
if (this.domNode !== this.outerNode ) $I$(4).dispose(this.outerNode);
});

Clazz.newMeth(C$, 'undisposeUI$swingjs_api_js_DOMNode', function (node) {
var parent=this.c.getParent$();
if (node != null  && parent != null  ) {
var ui=this.c.getParent$().秘getUI$();
if (ui.containerNode != null ) ui.containerNode.appendChild(node);
}if (this.outerNode != null  && this.domNode != null   && this.domNode !== this.outerNode  ) {
this.outerNode.appendChild(this.domNode);
}this.isDisposed=false;
});

Clazz.newMeth(C$, 'setForegroundCUI$java_awt_Color', function (c) {
this.setForegroundFor$swingjs_api_js_DOMNode$java_awt_Color(this.domNode, c);
});

Clazz.newMeth(C$, 'setForegroundFor$swingjs_api_js_DOMNode$java_awt_Color', function (node, color) {
if (node != null ) $I$(4).setStyles(node, ["color", (color == null  ? "rgba(0,0,0,0)" : $I$(5).getCSSColor$java_awt_Color(color == null  ? $I$(3).black : color))]);
});

Clazz.newMeth(C$, 'setFont$java_awt_Font', function (f) {
});

Clazz.newMeth(C$, 'createImage$java_awt_image_ImageProducer', function (producer) {
$I$(1).notImplemented$S("");
return null;
});

Clazz.newMeth(C$, 'createImage$I$I', function (width, height) {
$I$(1).notImplemented$S("");
return null;
});

Clazz.newMeth(C$, 'createVolatileImage$I$I', function (width, height) {
$I$(1).notImplemented$S("");
return null;
});

Clazz.newMeth(C$, 'prepareImage$java_awt_Image$I$I$java_awt_image_ImageObserver', function (img, w, h, o) {
$I$(1).notImplemented$S("");
return false;
});

Clazz.newMeth(C$, 'checkImage$java_awt_Image$I$I$java_awt_image_ImageObserver', function (img, w, h, o) {
$I$(1).notImplemented$S("");
return 0;
});

Clazz.newMeth(C$, 'getGraphicsConfiguration$', function () {
$I$(1).notImplemented$S("");
return null;
});

Clazz.newMeth(C$, 'handlesWheelScrolling$', function () {
$I$(1).notImplemented$S("");
return false;
});

Clazz.newMeth(C$, 'getBackBuffer$', function () {
$I$(1).notImplemented$S("");
return null;
});

Clazz.newMeth(C$, 'destroyBuffers$', function () {
$I$(1).notImplemented$S("");
});

Clazz.newMeth(C$, 'reparent$java_awt_peer_ContainerPeer', function (newContainer) {
$I$(1).notImplemented$S("");
});

Clazz.newMeth(C$, 'isReparentSupported$', function () {
$I$(1).notImplemented$S("");
return false;
});

Clazz.newMeth(C$, 'layout$', function () {
});

Clazz.newMeth(C$, 'getBounds$', function () {
$I$(1).notImplemented$S("");
return null;
});

Clazz.newMeth(C$, 'getInheritedZ$javax_swing_JComponent', function (c) {
return c.秘getUI$().getInheritedZ$();
}, 1);

Clazz.newMeth(C$, 'getInheritedZ$', function () {
var node=this.domNode;
var base=9000;
var z=0;

while (node && !node.style["z-index"]) node = node.parentElement;
!(z = +(node && node.style["z-index"])) && (z = base);
return z;
});

Clazz.newMeth(C$, 'setZ$I', function (z) {
$I$(4).setPositionAbsolute(this.domNode);
$I$(4).setZ(this.domNode, z);
$I$(4).setZ(this.outerNode, z);
});

Clazz.newMeth(C$, 'containerToFront$javax_swing_JComponent', function (c) {
var root=c.getRootPane$();
var w=(root == null  ? null : root.getParent$());
if (Clazz.instanceOf(w, "java.awt.Window")) (w).toFront$();
}, 1);

Clazz.newMeth(C$, 'getInsets$', function () {
return null;
});

Clazz.newMeth(C$, 'beginValidate$', function () {
});

Clazz.newMeth(C$, 'endValidate$', function () {
});

Clazz.newMeth(C$, 'beginLayout$', function () {
if (!this.boundsSet && !this.isContainer ) this.setVisible$Z(false);
this.isLaidOut=false;
this.layingOut=true;
});

Clazz.newMeth(C$, 'endLayout$', function () {
this.layingOut=false;
this.isLaidOut=true;
});

Clazz.newMeth(C$, 'getId$', function () {
return this.id;
});

Clazz.newMeth(C$, 'dumpEvent$java_util_EventObject', function (e) {
return e.toString();
});

Clazz.newMeth(C$, 'toCSSString$java_awt_Color', function (c) {
var opacity=c.getAlpha$();
if (opacity == 255) return "#" + C$.toRGBHexString$java_awt_Color(c);
var rgb=c.getRGB$();
return "rgba(" + ((rgb >> 16) & 255) + "," + ((rgb >> 8) & 255) + "," + (rgb & 255) + "," + new Float(opacity / 255.0).toString()  + ")";
}, 1);

Clazz.newMeth(C$, 'toRGBHexString$java_awt_Color', function (c) {
var rgb=c.getRGB$();
if (rgb == 0) return "000000";
var r="00" + Integer.toHexString$I((rgb >> 16) & 255);
r=r.substring$I(r.length$() - 2);
var g="00" + Integer.toHexString$I((rgb >> 8) & 255);
g=g.substring$I(g.length$() - 2);
var b="00" + Integer.toHexString$I(rgb & 255);
b=b.substring$I(b.length$() - 2);
return r + g + b ;
}, 1);

Clazz.newMeth(C$, 'updateSceneGraph$javax_swing_JComponent$javax_swing_JComponent$swingjs_JSGraphics2D', function (comp, owner, g) {
var node=(comp.ui).outerNode;
var x=0;
var y=0;
{
x = g.$transform.m02; y = g.$transform.m12;
if (x == node.lastSceneX && y == node.lastSceneY) return;
node.lastSceneX = x; node.lastSceneY = y;
}
$I$(4).setStyles(node, ["left", x + "px", "top", y + "px"]);
{
if (node.parentElement == null) owner.ui.outerNode.appendChild(node);
}
}, 1);

Clazz.newMeth(C$, 'getPropertyPrefix$', function () {
var s=this.jc.getUIClassID$();
return (s == null  ? null : s.substring$I$I(0, s.length$() - 2));
});

Clazz.newMeth(C$, 'setPadding$java_awt_Insets', function (padding) {
$I$(4).setStyles(this.domNode, ["padding", padding == null  ? "0px" : padding.top + "px " + padding.left + "px " + padding.bottom + "px " + padding.right + "px" ]);
});

Clazz.newMeth(C$, 'addDropTarget$java_awt_dnd_DropTarget', function (t) {
if (this.dropTarget === t ) return;
this.dropTarget=t;
p$1.setDropTarget$Z.apply(this, [true]);
});

Clazz.newMeth(C$, 'removeDropTarget$java_awt_dnd_DropTarget', function (t) {
if (this.dropTarget !== t ) return;
p$1.setDropTarget$Z.apply(this, [false]);
this.dropTarget=null;
});

Clazz.newMeth(C$, 'setDropTarget$Z', function (adding) {
if (this.dropTarget === this ) return;
this.J2S.setDragDropTarget(this.c, this.getDOMNode$(), this.dropTarget != null );
}, p$1);

Clazz.newMeth(C$, 'invalidate$', function () {
this.setTainted$();
});

Clazz.newMeth(C$, 'checkStopPopupMenuTimer$O$I$O', function (target, eventType, jQueryEvent) {
if (target === this.domNode  && eventType == -1 ) {
var type=(jQueryEvent.type ||"");
if (type.equals$O("mouseenter")) {
this.stopPopupMenuTimer$();
}}});

Clazz.newMeth(C$, 'startPopupMenuTimer$', function () {
var ui=(this.jc).getPopupMenu$().getUI$();
ui.menuTimer=setTimeout(function() { ui.hideMenu$()},1000) ||0;
});

Clazz.newMeth(C$, 'stopPopupMenuTimer$', function () {
var ui=(this.isPopupMenu ? this : this.jc.getParent$().getUI$());
var timer=ui.menuTimer;
if (timer != 0) {

clearTimeout(timer);
ui.menuTimer=0;
}});

Clazz.newMeth(C$, 'setRenderer$java_awt_JSComponent$I$I$swingjs_api_js_DOMNode', function (rendererComponent, width, height, td) {
p$1.setComponent$javax_swing_JComponent.apply(this, [rendererComponent]);
if (this.isUIDisabled) {
p$1.updateTableCell$swingjs_api_js_DOMNode$Z.apply(this, [td, true]);
return;
}this.cellComponent=rendererComponent;
if (width == 0) return;
this.cellWidth=width;
this.cellHeight=height;
});

Clazz.newMeth(C$, 'reinstallUI$javax_swing_JComponent$javax_swing_JComponent', function (oldC, newC) {
this.uninstallUI$javax_swing_JComponent(oldC);
p$1.uninstallJS.apply(this, []);
if (newC == null ) {
} else {
this.installJS$();
this.installUI$javax_swing_JComponent(newC);
}});

Clazz.newMeth(C$, 'setForeground$java_awt_Color', function (c) {
this.awtPeerFG=null;
this.setForegroundFor$swingjs_api_js_DOMNode$java_awt_Color(this.domNode, c);
});

Clazz.newMeth(C$, 'setBackground$java_awt_Color', function (c) {
this.awtPeerBG=null;
this.setBackgroundImpl$java_awt_Color(c);
});

Clazz.newMeth(C$, 'setBackgroundImpl$java_awt_Color', function (color) {
if (this.domNode == null  || this.isMenuItem  || this.isUIDisabled ) return;
this.backgroundColor=color;
if ((this.jc.秘paintsSelf$() || (this.isContentPane || this.isLayeredPane ) && this.jc.秘setPaintsSelf$I(1) == 1  ) && this.jc.isOpaque$() ) {
this.clearPaintPath$();
}this.paintBackground$swingjs_JSGraphics2D(this.jc.秘gtemp);
});

Clazz.newMeth(C$, 'checkTransparent', function () {
if (this.inPaintPath || this.domNode != null  && (this.cellComponent != null  || !this.c.isOpaque$() )  ) p$1.setTransparent.apply(this, []);
}, p$1);

Clazz.newMeth(C$, 'setTransparent', function () {
if (this.allowPaintedBackground) $I$(4).setStyles(this.domNode, ["background", "transparent"]);
}, p$1);

Clazz.newMeth(C$, 'paintBackground$swingjs_JSGraphics2D', function (g) {
var isOpaque=this.c.isOpaque$();
var paintsSelf=this.jc.秘paintsSelf$();
var color=(this.backgroundColor == null  ? this.getBackground$() : this.backgroundColor);
if (g == null ) {
if (!paintsSelf) this.setBackgroundDOM$swingjs_api_js_DOMNode$java_awt_Color(this.domNode, color);
} else if (this.allowPaintedBackground && isOpaque ) {
g.setBackground$java_awt_Color(color);
g.clearRect$I$I$I$I(0, 0, this.c.getWidth$(), this.c.getHeight$());
isOpaque=this.cellComponent == null  && !this.jc.秘paintsSelf$() ;
if (!isOpaque && this.isWindow ) {
var c=this.jc.getRootPane$().getContentPane$();
c.秘setPaintsSelf$I(1);
p$1.setTransparent.apply((c.ui), []);
}}if (this.allowPaintedBackground && !isOpaque ) p$1.setTransparent.apply(this, []);
 else p$1.checkTransparent.apply(this, []);
});

Clazz.newMeth(C$, 'setBackgroundDOM$swingjs_api_js_DOMNode$java_awt_Color', function (node, color) {
$I$(4).setStyles(node, ["background-color", color == null  ? null : $I$(5).getCSSColor$java_awt_Color(color)]);
});

Clazz.newMeth(C$, 'clearPaintPath$', function () {
var c=this.jc;
while (c != null ){
(c.ui).inPaintPath=true;
c.秘setPaintsSelf$I(2);
p$1.setTransparent.apply((c.ui), []);
c=c.getParent$();
}
});

Clazz.newMeth(C$, 'isModalBlocked$', function () {
return $I$(9).秘getTopInvokableAncestor$java_awt_Component$Z(this.jc, false).秘getUI$().modalBlocked;
});

Clazz.newMeth(C$, 'processKeyEvent$java_awt_event_KeyEvent', function (e) {
return false;
});
;
(function(){/*i*/var C$=Clazz.newInterface(P$.JSComponentUI, "Embeddable", function(){
});
})()
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:51:15 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
