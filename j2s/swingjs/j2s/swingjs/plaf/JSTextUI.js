(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},I$=[[0,'Error','javax.swing.text.DefaultEditorKit','java.awt.Point',['javax.swing.text.Position','.Bias'],['swingjs.plaf.JSTextUI','.RootView'],'swingjs.JSToolkit','swingjs.JSKeyEvent','javax.swing.UIManager','javax.swing.text.DefaultCaret','javax.swing.SwingUtilities','javax.swing.plaf.InputMapUIResource','javax.swing.plaf.ActionMapUIResource','swingjs.plaf.TextListener','swingjs.api.js.DOMNode','swingjs.plaf.JSComponentUI','Boolean']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JSTextUI", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'swingjs.plaf.JSLightweightUI');
C$.$classes$=[['RootView',0],['TextActionWrapper',0],['FocusAction',0]];

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.defaultKit=Clazz.new_($I$(2,1));
C$.overflows=Clazz.array(String, -1, ["auto", "hidden", "scroll"]);
C$.markDot=Clazz.new_($I$(3,1));
C$.discardBias=Clazz.array($I$(4), [1]);
}

Clazz.newMeth(C$, '$init$', function () {
this.editable=true;
this.rootView=Clazz.new_($I$(5,1), [this, null]);
this.useRootView=false;
}, 1);

C$.$fields$=[['Z',['editable','isEditorPane','useRootView'],'O',['editor','javax.swing.text.JTextComponent','rootView','swingjs.plaf.JSTextUI.RootView','textListener','swingjs.plaf.TextListener']]
,['O',['defaultKit','javax.swing.text.EditorKit','overflows','String[]','markDot','java.awt.Point','discardBias','javax.swing.text.Position.Bias[]']]]

Clazz.newMeth(C$, 'updateDOMNode$', function () {
if (this.editor.isOpaque$() && this.editor.isEnabled$() ) this.setBackgroundImpl$java_awt_Color(this.getBackground$());
this.setEditable$Z(this.editable);
return this.updateDOMNodeCUI$();
});

Clazz.newMeth(C$, ['handleJSEvent$O$I$O','handleJSEvent$'], function (target, eventType, jQueryEvent) {
if ($I$(6).isMouseEvent$I(eventType)) {
return false;
}var b=this.checkAllowEvent$O(jQueryEvent);
if (b != null ) return b.booleanValue$();
var keyCode=jQueryEvent.keyCode ||0;
var keyEvent=null;
var ret=false;
switch (eventType) {
case -2:
keyEvent=$I$(7).newJSKeyEvent$javax_swing_JComponent$O$I$Z(this.editor, jQueryEvent, 0, false);
if (keyEvent == null ) return true;
switch (keyCode) {
case 18:

jQueryEvent.preventDefault(); jQueryEvent.stopPropagation();
case 17:
ret=true;
break;
}
eventType=keyEvent.getID$();
break;
}
if (keyEvent != null ) {
if (eventType == 402) {
this.handleJSTextEvent$I$O$I$Z(eventType, jQueryEvent, keyCode, false);
ret=true;
}this.editor.dispatchEvent$java_awt_AWTEvent(keyEvent);
if (keyEvent.isConsumed$()) {

jQueryEvent.preventDefault(); jQueryEvent.stopPropagation();
return true;
}}if (ret != true ) this.handleJSTextEvent$I$O$I$Z(eventType, jQueryEvent, keyCode, false);
return true;
});

Clazz.newMeth(C$, 'handleJSTextEvent$I$O$I$Z', function (eventType, jQueryEvent, keyCode, trigger) {
this.textListener.handleJSTextEvent$swingjs_plaf_JSTextUI$I$O(this, eventType, jQueryEvent);
});

Clazz.newMeth(C$, 'checkStopPropagation$O$Z', function (ev, handled) {
return false;
});

Clazz.newMeth(C$, 'undisposeUI$swingjs_api_js_DOMNode', function (node) {
C$.superclazz.prototype.undisposeUI$swingjs_api_js_DOMNode.apply(this, [node]);
this.bindJSKeyEvents$swingjs_api_js_DOMNode$Z(this.focusNode, true);
});

Clazz.newMeth(C$, 'installDefaults$', function () {
var prefix=this.getPropertyPrefix$();
var f=this.editor.getFont$();
if ((f == null  && !this.isAWT ) || (Clazz.instanceOf(f, "javax.swing.plaf.UIResource")) ) {
this.editor.setFont$java_awt_Font($I$(8).getFont$O(prefix + ".font"));
}this.setColors$S(prefix);
var margin=this.editor.getMargin$();
if (margin == null  || Clazz.instanceOf(margin, "javax.swing.plaf.UIResource") ) {
this.editor.setMargin$java_awt_Insets($I$(8).getInsets$O(prefix + ".margin"));
}});

Clazz.newMeth(C$, 'setColors$S', function (prefix) {
var bg=this.editor.getBackground$();
if ((bg == null ) || (Clazz.instanceOf(bg, "javax.swing.plaf.UIResource")) ) {
this.editor.setBackground$java_awt_Color($I$(8).getColor$O(prefix + ".background"));
}if (!this.isAWT) {
var fg=this.editor.getForeground$();
if ((fg == null ) || (Clazz.instanceOf(fg, "javax.swing.plaf.UIResource")) ) {
this.editor.setForeground$java_awt_Color($I$(8).getColor$O(prefix + ".foreground"));
}}var dfg=this.editor.getDisabledTextColor$();
if ((dfg == null ) || (Clazz.instanceOf(dfg, "javax.swing.plaf.UIResource")) ) {
this.editor.setDisabledTextColor$java_awt_Color($I$(8).getColor$O(prefix + ".inactiveForeground"));
}dfg=$I$(8).getColor$O(this.isAWT ? "control" : prefix + ".inactiveBackground");
if (dfg != null ) this.inactiveBackground=dfg;
});

Clazz.newMeth(C$, 'installDefaults2$', function () {
var caret=this.editor.getCaret$();
if (caret == null  || Clazz.instanceOf(caret, "javax.swing.plaf.UIResource") ) {
this.editor.setCaret$javax_swing_text_Caret(((P$.JSTextUI$1||
(function(){/*a*/var C$=Clazz.newClass(P$, "JSTextUI$1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, Clazz.load('javax.swing.text.DefaultCaret'), null, 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'paint$java_awt_Graphics', function (g) {
});

Clazz.newMeth(C$, 'isVisible$', function () {
return true;
});

Clazz.newMeth(C$, 'setVisible$Z', function (v) {
});

Clazz.newMeth(C$, 'isSelectionVisible$', function () {
return true;
});

Clazz.newMeth(C$, 'setSelectionVisible$Z', function (v) {
});

Clazz.newMeth(C$, 'setBlinkRate$I', function (rate) {
});

Clazz.newMeth(C$, 'getBlinkRate$', function () {
return 0;
});

Clazz.newMeth(C$, 'toString', function () {
return "caret[" + this.dot + "," + this.mark + "]" ;
});
})()
), Clazz.new_($I$(9,1), [this, null],P$.JSTextUI$1)));
}});

Clazz.newMeth(C$, 'uninstallDefaults$', function () {
if (Clazz.instanceOf(this.editor.getCaretColor$(), "javax.swing.plaf.UIResource")) {
this.editor.setCaretColor$java_awt_Color(null);
}if (Clazz.instanceOf(this.editor.getSelectionColor$(), "javax.swing.plaf.UIResource")) {
this.editor.setSelectionColor$java_awt_Color(null);
}if (Clazz.instanceOf(this.editor.getDisabledTextColor$(), "javax.swing.plaf.UIResource")) {
this.editor.setDisabledTextColor$java_awt_Color(null);
}if (Clazz.instanceOf(this.editor.getSelectedTextColor$(), "javax.swing.plaf.UIResource")) {
this.editor.setSelectedTextColor$java_awt_Color(null);
}if (Clazz.instanceOf(this.editor.getBorder$(), "javax.swing.plaf.UIResource")) {
this.editor.setBorder$javax_swing_border_Border(null);
}if (Clazz.instanceOf(this.editor.getMargin$(), "javax.swing.plaf.UIResource")) {
this.editor.setMargin$java_awt_Insets(null);
}});

Clazz.newMeth(C$, 'installKeyboardActions$', function () {
var km=this.getInputMap$();
if (km != null ) {
$I$(10).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.editor, 0, km);
}var map=this.getActionMap$();
if (map != null ) {
$I$(10).replaceUIActionMap$javax_swing_JComponent$javax_swing_ActionMap(this.editor, map);
}});

Clazz.newMeth(C$, 'getInputMap$', function () {
var map=Clazz.new_($I$(11,1));
return map;
});

Clazz.newMeth(C$, 'getActionMap$', function () {
var mapName=this.classID + ".actionMap";
var map=$I$(8).get$O(mapName);
if (map == null ) {
map=this.createActionMap$();
if (map != null ) {
$I$(8).getLookAndFeelDefaults$().put$O$O(mapName, map);
}}return map;
});

Clazz.newMeth(C$, 'createActionMap$', function () {
var map=Clazz.new_($I$(12,1));
var actions=this.editor.getActions$();
if (actions == null ) actions=this.getEditorKit$javax_swing_text_JTextComponent(this.editor).getActions$();
var n=(actions == null  ? 0 : actions.length);
for (var i=0; i < n; i++) {
var a=actions[i];
map.put$O$javax_swing_Action(a.getValue$S("Name"), a);
}
return map;
});

Clazz.newMeth(C$, 'uninstallKeyboardActions$', function () {
this.editor.setKeymap$javax_swing_text_Keymap(null);
$I$(10).replaceUIInputMap$javax_swing_JComponent$I$javax_swing_InputMap(this.editor, 2, null);
$I$(10).replaceUIActionMap$javax_swing_JComponent$javax_swing_ActionMap(this.editor, null);
});

Clazz.newMeth(C$, 'getComponent$', function () {
return this.editor;
});

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent', function (jc) {
this.editor=jc;
this.textListener=Clazz.new_($I$(13,1).c$$swingjs_plaf_JSTextUI$javax_swing_text_JTextComponent,[this, this.editor]);
this.installDefaults$();
this.installDefaults2$();
this.installListeners$javax_swing_text_JTextComponent(this.editor);
this.installKeyboardActions$();
});

Clazz.newMeth(C$, 'uninstallUI$javax_swing_JComponent', function (jc) {
this.uninstallDefaults$();
jc.removeAll$();
var lm=jc.getLayout$();
if (Clazz.instanceOf(lm, "javax.swing.plaf.UIResource")) {
jc.setLayout$java_awt_LayoutManager(null);
}this.uninstallKeyboardActions$();
this.uninstallListeners$javax_swing_text_JTextComponent(this.editor);
this.editor=null;
this.textListener=null;
});

Clazz.newMeth(C$, 'installListeners$javax_swing_text_JTextComponent', function (b) {
var listener=this.textListener;
b.addKeyListener$java_awt_event_KeyListener(this.textListener);
b.addFocusListener$java_awt_event_FocusListener(listener);
b.addPropertyChangeListener$java_beans_PropertyChangeListener(listener);
b.addCaretListener$javax_swing_event_CaretListener(listener);
});

Clazz.newMeth(C$, 'uninstallListeners$javax_swing_text_JTextComponent', function (b) {
var listener=this.textListener;
b.removeKeyListener$java_awt_event_KeyListener(this.textListener);
b.removeFocusListener$java_awt_event_FocusListener(listener);
b.removePropertyChangeListener$java_beans_PropertyChangeListener(listener);
b.getDocument$().removeDocumentListener$javax_swing_event_DocumentListener(listener);
});

Clazz.newMeth(C$, 'updateRootView$', function () {
});

Clazz.newMeth(C$, 'getMinimumSize$javax_swing_JComponent', function (jc) {
var d=this.getPreferredSize$javax_swing_JComponent(jc);
var i=jc.getInsets$();
d.width+=i.left + i.right;
d.height+=i.top + i.bottom;
return d;
});

Clazz.newMeth(C$, 'getRootView$javax_swing_text_JTextComponent', function (tc) {
return this.rootView;
});

Clazz.newMeth(C$, 'create$javax_swing_text_Element', function (elem) {
return null;
});

Clazz.newMeth(C$, 'getPreferredSize$javax_swing_JComponent', function (c) {
if (!this.useRootView) return C$.superclazz.prototype.getPreferredSize$javax_swing_JComponent.apply(this, [c]);
var i=c.getInsets$();
var d=c.getSize$();
if ((d.width > (i.left + i.right)) && (d.height > (i.top + i.bottom)) ) {
this.rootView.setSize$F$F(d.width - i.left - i.right , d.height - i.top - i.bottom );
} else if (d.width == 0 && d.height == 0 ) {
this.rootView.setSize$F$F(2147483647, 2147483647);
}d.width=(Math.min((this.rootView.getPreferredSpan$I(0)|0) + i.left + i.right , 2147483647)|0);
d.height=(Math.min((this.rootView.getPreferredSpan$I(1)|0) + i.top + i.bottom , 2147483647)|0);
return d;
});

Clazz.newMeth(C$, 'getEditorKit$javax_swing_text_JTextComponent', function (tc) {
return C$.defaultKit;
});

Clazz.newMeth(C$, 'handleEnter$', function () {
return false;
});

Clazz.newMeth(C$, 'setEditable$Z', function (editable) {
this.editable=editable;
if (this.focusNode == null ) return;
this.setEditableCSS$();
if (this.jc.isOpaque$()) {
var bg=this.getBackground$();
this.setBackgroundImpl$java_awt_Color(editable || !(Clazz.instanceOf(bg, "javax.swing.plaf.UIResource")) || this.inactiveBackground === this.colorUNKNOWN    ? bg : this.inactiveBackground);
}});

Clazz.newMeth(C$, 'setEditableCSS$', function () {
$I$(14).setAttr(this.focusNode, "readOnly", this.editable ? null : "TRUE");
});

Clazz.newMeth(C$, 'getInactiveTextColor$java_awt_Color', function (fg) {
return (!this.editor.isEnabled$() ? this.editor.getDisabledTextColor$() : !this.editor.isEditable$() ? this.inactiveForeground : fg);
});

Clazz.newMeth(C$, 'setCurrentText$', function () {
return (this.editor.getDocument$() == null  ? null : (this.currentText=this.editor.getText$()));
});

Clazz.newMeth(C$, 'checkNewEditorTextValue$', function () {
var val=this.getJSTextValue$();
if (val.equals$O(this.fixText$S(this.currentText))) return false;
this.editor.setTextFromUI$S(val);
this.setCurrentText$();
return true;
});

Clazz.newMeth(C$, 'setJSText$', function () {
this.updateDOMNode$();
});

Clazz.newMeth(C$, 'focus$', function () {
if (!this.editor.isEditable$() || !C$.superclazz.prototype.focus$.apply(this, []) ) return false;
if (this.haveFocus$()) {
} else {
this.updateJSCursor$S("focus");
}return true;
});

Clazz.newMeth(C$, 'haveFocus$', function () {
return $I$(15).jquery.contains(this.focusNode, document.activeElement ||null);
});

Clazz.newMeth(C$, 'updateJSCursor$S', function (why) {
if (this.domNode == null  || this.editor.getDocument$() == null   || this.editor.getText$().length$() == 0 ) return;
if (this.isAWT && why != "focus"  && why != "default" ) return;
var start=this.editor.getCaret$().getMark$();
var end=this.editor.getCaret$().getDot$();
this.setJSSelection$I$I$Z(start, end, start == end && why == "default" );
});

Clazz.newMeth(C$, 'setJSSelection$I$I$Z', function (mark, dot, andScroll) {
var r1=this.getJSNodePt$swingjs_api_js_DOMNode$I$Z(this.focusNode, mark, true);
var r2=(r1 == null  || dot == mark  ? r1 : this.getJSNodePt$swingjs_api_js_DOMNode$I$Z(this.focusNode, dot, true));
if (r1 != null  && r2 != null  ) this.jsSelect$OA$OA$Z(r1, r2, andScroll);
});

Clazz.newMeth(C$, 'getJSNodePt$swingjs_api_js_DOMNode$I$Z', function (node, pt, isRoot) {
{
return [null, pt];
}
});

Clazz.newMeth(C$, 'jsSelect$OA$OA$Z', function (r1, r2, andScroll) {
this.setJSMarkAndDot$I$I$Z(r1[1] ||0, r2[1] ||0, andScroll);
});

Clazz.newMeth(C$, 'setJSMarkAndDot$I$I$Z', function (mark, dot, andScroll) {
try {
this.focusNode.setSelectionRange(Math.min(mark, dot), Math.max(mark, dot), (mark == dot ? "none" : mark < dot ? "forward" : "backward"));
} catch (e) {
}
});

Clazz.newMeth(C$, 'getJSMarkAndDot$java_awt_Point$I', function (pt, keyCode) {
var node=this.focusNode;
var start=node.selectionStart ||0;
var end=node.selectionEnd ||1;
pt.x=start;
pt.y=end;
return true;
});

Clazz.newMeth(C$, 'checkAllowEvent$O', function (jQueryEvent) {
var b=true;
var checkEditable=false;
var type=jQueryEvent.type ||"";
switch (type) {
case "drop":
checkEditable=true;
break;
case "focusout":
case "dragover":
break;
case "keydown":
case "keypress":
case "keyup":
var isCTRL=jQueryEvent.ctrlKey ||false;
switch (jQueryEvent.keyCode ||0) {
case 86:
if (!isCTRL) return null;
if (!this.isEditorPane) p$1.allowKeyEvent$O.apply(this, [jQueryEvent]);
if (type == "keydown") this.handleCtrlV$I(401);
 else if (type == "keyup") this.handleCtrlV$I(402);
return new Boolean(true);
case 67:
if (!isCTRL) return null;
p$1.allowKeyEvent$O.apply(this, [jQueryEvent]);
return new Boolean(true);
case 9:
return (type == "keydown" && this.handleTab$O(jQueryEvent) == true   ? null : $I$(16).valueOf$Z(false));
case 38:
case 40:
case 37:
case 39:
case 33:
case 34:
case 224:
case 225:
case 226:
case 227:
return (jQueryEvent.altKey ||isCTRL ? new Boolean(false) : null);
default:
checkEditable=true;
break;
}
break;
default:
return null;
}
if (checkEditable) {
if (this.editor.isEditable$() && !(Clazz.instanceOf(this.editor.getDocument$(), "javax.swing.text.html.HTMLDocument")) ) return null;
b=false;
}return new Boolean(b);
});

Clazz.newMeth(C$, 'allowKeyEvent$O', function (jQueryEvent) {

jQueryEvent.originalEvent.xallowKeyEvent = true;
}, p$1);

Clazz.newMeth(C$, 'handleCtrlV$I', function (mode) {
switch (mode) {
case 401:
break;
case 402:
var val=this.getJSTextValue$();
var pt=Clazz.new_($I$(3,1));
this.getJSMarkAndDot$java_awt_Point$I(pt, 0);
this.editor.setTextFromUI$S(val);
this.setJSMarkAndDot$I$I$Z(pt.x, pt.x, false);
this.setJavaMarkAndDot$java_awt_Point(pt);
break;
}
return true;
});

Clazz.newMeth(C$, 'handleTab$O', function (jQueryEvent) {
return true;
});

Clazz.newMeth(C$, 'viewToModel$javax_swing_text_JTextComponent$java_awt_Point$javax_swing_text_Position_BiasA', function (t, pt, biasReturn) {
pt.x=2147483647;
this.getJSMarkAndDot$java_awt_Point$I(pt, 0);
return pt.y;
});

Clazz.newMeth(C$, 'setJavaMarkAndDot$java_awt_Point', function (markDot) {
var mark=markDot.x;
var dot=markDot.y;
var c=this.editor.getCaret$();
if (c.getMark$() == mark && c.getDot$() == dot ) return;
if (c.getMark$() != mark) c.setDot$I(mark);
if (c.getDot$() != dot) c.moveDot$I(dot);
});

Clazz.newMeth(C$, 'getNewCaretPosition$I$I', function (eventType, keyCode) {
var pt=C$.markDot;
pt.x=0;
this.getJSMarkAndDot$java_awt_Point$I(pt, keyCode);
var mark=pt.x;
var dot=pt.y;
var oldMark=this.editor.getCaret$().getMark$();
var oldDot=this.editor.getCaret$().getDot$();
if (dot != mark && oldMark == dot ) {
dot=mark;
mark=oldMark;
}pt.x=(dot == oldDot && mark == oldMark  ? -2147483648 : mark);
pt.y=dot;
return pt;
});

Clazz.newMeth(C$, 'updateJSCursorFromCaret$', function () {
});

Clazz.newMeth(C$, 'caretUpdatedByProgram$javax_swing_event_CaretEvent', function (e) {
});

Clazz.newMeth(C$, 'getVisibleEditorRect$', function () {
var alloc=this.editor.getBounds$();
if ((alloc.width > 0) && (alloc.height > 0) ) {
alloc.x=alloc.y=0;
var insets=this.editor.getInsets$();
alloc.x+=insets.left;
alloc.y+=insets.top;
alloc.width-=insets.left + insets.right;
alloc.height-=insets.top + insets.bottom;
return alloc;
}return null;
});

Clazz.newMeth(C$, 'modelToView$javax_swing_text_JTextComponent$I', function (tc, pos) {
return this.modelToView$javax_swing_text_JTextComponent$I$javax_swing_text_Position_Bias(tc, pos, $I$(4).Forward);
});

Clazz.newMeth(C$, 'modelToView$javax_swing_text_JTextComponent$I$javax_swing_text_Position_Bias', function (tc, pos, bias) {
var alloc=this.getVisibleEditorRect$();
return alloc;
});

Clazz.newMeth(C$, 'viewToModel$javax_swing_text_JTextComponent$java_awt_Point', function (tc, pt) {
return this.viewToModel$javax_swing_text_JTextComponent$java_awt_Point$javax_swing_text_Position_BiasA(tc, pt, C$.discardBias);
});

Clazz.newMeth(C$, 'getNextVisualPositionFrom$javax_swing_text_JTextComponent$I$javax_swing_text_Position_Bias$I$javax_swing_text_Position_BiasA', function (t, pos, b, direction, biasRet) {
var dot=this.editor.getCaretPosition$();
switch (direction) {
case 5:
dot=this.editor.getText$().indexOf$I$I("\n", dot + 1);
if (dot >= 0) return dot;
dot=2147483647;
case 3:
var len=this.editor.getDocument$().getLength$() - (this.isEditorPane ? 0 : 1);
dot=(dot >= len ? len : ++dot);
return dot;
case 1:
dot=this.editor.getText$().lastIndexOf$I$I("\n", dot - 1);
if (dot >= 0) return dot;
dot=-1;
case 7:
return (dot <= 0 ? 0 : --dot);
}
return -1;
});

Clazz.newMeth(C$, 'isFocusable$', function () {
return true;
});

Clazz.newMeth(C$, 'action$S$I', function (what, data) {
});

Clazz.newMeth(C$, 'setCaretFromJS$', function () {
var pt=Clazz.new_($I$(3,1));
this.getJSMarkAndDot$java_awt_Point$I(pt, 0);
this.setJavaMarkAndDot$java_awt_Point(pt);
});

Clazz.newMeth(C$, 'setOverflow$', function () {
if (this.textNode == null ) return;
var scroller=this.jc.getParent$();
if (this.isAWT) {
scroller=this.jc;
} else if (!(Clazz.instanceOf(scroller, "javax.swing.JViewport")) || !(Clazz.instanceOf((scroller=scroller.getParent$()), "javax.swing.JScrollPane")) ) {
$I$(14).setStyles(this.domNode, ["overflow", "hidden", "overflow-x", null, "overflow-y", null]);
return;
}var sp=scroller;
$I$(14).setStyles(this.domNode, ["overflow", null]);
$I$(14).setStyles(this.domNode, ["overflow-x", C$.overflows[sp.getHorizontalScrollBarPolicy$() % 10]]);
$I$(14).setStyles(this.domNode, ["overflow-y", C$.overflows[sp.getVerticalScrollBarPolicy$() % 10]]);
});
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTextUI, "RootView", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.text.View');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['view','javax.swing.text.View']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$javax_swing_text_Element.apply(this,[null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getDocument$', function () {
return this.this$0.editor.getDocument$();
});

Clazz.newMeth(C$, 'getStartOffset$', function () {
if (this.view != null ) {
return this.view.getStartOffset$();
}return this.getElement$().getStartOffset$();
});

Clazz.newMeth(C$, 'getEndOffset$', function () {
if (this.view != null ) {
return this.view.getEndOffset$();
}return this.getElement$().getEndOffset$();
});

Clazz.newMeth(C$, 'getElement$', function () {
if (this.view != null ) {
return this.view.getElement$();
}return this.this$0.editor.getDocument$().getDefaultRootElement$();
});

Clazz.newMeth(C$, 'setSize$F$F', function (width, height) {
if (this.view != null ) {
this.view.setSize$F$F(width, height);
}});

Clazz.newMeth(C$, 'getContainer$', function () {
return this.this$0.editor;
});

Clazz.newMeth(C$, 'setView$javax_swing_text_View', function (v) {
var oldView=this.view;
this.view=null;
if (oldView != null ) {
oldView.setParent$javax_swing_text_View(null);
}if (v != null ) {
v.setParent$javax_swing_text_View(this);
}this.view=v;
});

Clazz.newMeth(C$, 'getAttributes$', function () {
return null;
});

Clazz.newMeth(C$, 'getPreferredSpan$I', function (axis) {
switch (axis) {
case 0:
return (this.view == null  ? 10 : this.view.getPreferredSpan$I(axis));
default:
case 1:
var area=this.this$0.editor;
var h=this.b$['swingjs.plaf.JSComponentUI'].getFont$.apply(this.b$['swingjs.plaf.JSComponentUI'], []).getFontMetrics$().getHeight$();
var r=area.getRows$();
return h * (r > 0 ? r : this.this$0.isAWT ? 10 : 6);
}
});

Clazz.newMeth(C$, 'getMinimumSpan$I', function (axis) {
if (this.view != null ) {
return this.view.getMinimumSpan$I(axis);
}return 10;
});

Clazz.newMeth(C$, 'getMaximumSpan$I', function (axis) {
return 2147483647;
});

Clazz.newMeth(C$, 'preferenceChanged$javax_swing_text_View$Z$Z', function (child, width, height) {
this.this$0.editor.revalidate$();
});

Clazz.newMeth(C$, 'getAlignment$I', function (axis) {
if (this.view != null ) {
return this.view.getAlignment$I(axis);
}return 0;
});

Clazz.newMeth(C$, 'paint$java_awt_Graphics$java_awt_Shape', function (g, allocation) {
if (this.view != null ) {
var alloc=(Clazz.instanceOf(allocation, "java.awt.Rectangle")) ? allocation : allocation.getBounds$();
this.setSize$F$F(alloc.width, alloc.height);
this.view.paint$java_awt_Graphics$java_awt_Shape(g, allocation);
}});

Clazz.newMeth(C$, 'setParent$javax_swing_text_View', function (parent) {
throw Clazz.new_($I$(1,1).c$$S,["Can\'t set parent on root view"]);
});

Clazz.newMeth(C$, 'getViewCount$', function () {
return 1;
});

Clazz.newMeth(C$, 'getView$I', function (n) {
return this.view;
});

Clazz.newMeth(C$, 'getViewIndex$I$javax_swing_text_Position_Bias', function (pos, b) {
return 0;
});

Clazz.newMeth(C$, 'getChildAllocation$I$java_awt_Shape', function (index, a) {
return a;
});

Clazz.newMeth(C$, 'modelToView$I$java_awt_Shape$javax_swing_text_Position_Bias', function (pos, a, b) {
return null;
});

Clazz.newMeth(C$, 'viewToModel$F$F$java_awt_Shape$javax_swing_text_Position_BiasA', function (x, y, a, biasReturn) {
return 0;
});
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTextUI, "TextActionWrapper", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.text.TextAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.action=null;
}, 1);

C$.$fields$=[['O',['action','javax.swing.text.TextAction']]]

Clazz.newMeth(C$, 'c$$javax_swing_text_TextAction', function (action) {
;C$.superclazz.c$$S.apply(this,[action.getValue$S("Name")]);C$.$init$.apply(this);
this.action=action;
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.action.actionPerformed$(e);
});

Clazz.newMeth(C$, 'isEnabled$', function () {
return (this.this$0.editor == null  || this.this$0.editor.isEditable$() ) ? this.action.isEnabled$() : false;
});

Clazz.newMeth(C$);
})()
;
(function(){/*c*/var C$=Clazz.newClass(P$.JSTextUI, "FocusAction", function(){
Clazz.newInstance(this, arguments[0],true,C$);
}, 'javax.swing.AbstractAction');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, ['actionPerformed$java_awt_event_ActionEvent','actionPerformed$'], function (e) {
this.this$0.editor.requestFocus$();
});

Clazz.newMeth(C$, 'isEnabled$', function () {
return this.this$0.editor.isEditable$();
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:51:20 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
