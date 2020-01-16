(function(){var P$=Clazz.newPackage("swingjs.plaf"),p$1={},I$=[[0,'javax.swing.text.JTextComponent','sun.swing.DefaultLookup',['javax.swing.text.JTextComponent','.KeyBinding'],'javax.swing.plaf.InputMapUIResource','swingjs.api.js.DOMNode','javajs.util.SB','javajs.util.PT','swingjs.JSToolkit','javax.swing.text.StyleConstants','java.awt.Color','java.awt.Dimension','Boolean','swingjs.plaf.JSTextUI','swingjs.JSKeyEvent']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JSEditorPaneUI", null, 'swingjs.plaf.JSTextUI');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['isStyled','fbold','fital','isPressConsumed'],'I',['fsize'],'S',['currentHTML','mytext','ffamily','stemp'],'O',['fback','java.awt.Color','+ffore','lastRange','Object[]','xyTemp','int[]']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
this.isEditorPane=this.isTextView=true;
}, 1);

Clazz.newMeth(C$, 'installUI$javax_swing_JComponent', function (jc) {
C$.superclazz.prototype.installUI$javax_swing_JComponent.apply(this, [jc]);
if (this.getPropertyPrefix$() == "TextPane") return;
var doc=this.editor.getDocument$();
if (doc == null ) {
this.editor.setDocument$javax_swing_text_Document(this.getEditorKit$javax_swing_text_JTextComponent(this.editor).createDefaultDocument$());
} else {
}});

Clazz.newMeth(C$, 'installKeyboardActions$', function () {
this.editor.setKeymap$javax_swing_text_Keymap(this.createKeymap$());
C$.superclazz.prototype.installKeyboardActions$.apply(this, []);
});

Clazz.newMeth(C$, 'createKeymap$', function () {
var nm=this.getKeymapName$();
var map=$I$(1).getKeymap$S(nm);
if (map == null ) {
var parent=$I$(1).getKeymap$S("default");
map=$I$(1).addKeymap$S$javax_swing_text_Keymap(nm, parent);
var prefix=this.getPropertyPrefix$();
var o=$I$(2).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.editor, this, prefix + ".keyBindings");
if ((o != null ) && (Clazz.instanceOf(o, Clazz.array($I$(3), -1))) ) {
var bindings=o;
$I$(1).loadKeymap$javax_swing_text_Keymap$javax_swing_text_JTextComponent_KeyBindingA$javax_swing_ActionA(map, bindings, this.getComponent$().getActions$());
}}return map;
});

Clazz.newMeth(C$, 'getKeymapName$', function () {
var nm=this.getClass$().getName$();
var index=nm.lastIndexOf$I(".");
if (index >= 0) {
nm=nm.substring$I$I(index + 1, nm.length$());
}return nm;
});

Clazz.newMeth(C$, 'getInputMap$', function () {
var map=Clazz.new_($I$(4,1));
var shared=$I$(2).get$javax_swing_JComponent$javax_swing_plaf_ComponentUI$S(this.editor, this, this.getPropertyPrefix$() + ".focusInputMap");
if (shared != null ) {
map.setParent$javax_swing_InputMap(shared);
}return map;
});

Clazz.newMeth(C$, 'updateDOMNode$', function () {
if (this.domNode == null ) {
this.domNode=P$.JSComponentUI.newDOMObject$S$S$SA("div", this.id, []);
$I$(5).setStyles(this.domNode, []);
this.$$O(this.domNode).addClass("swingjs-doc");
this.allowPaintedBackground=false;
this.focusNode=this.enableNode=this.textNode=this.domNode;
$I$(5).setStyles(this.domNode, ["resize", "none", "margin", "0px", "padding", "1px"]);
$I$(5).setStyles(this.domNode, ["box-sizing", "border-box"]);
this.bindJSKeyEvents$swingjs_api_js_DOMNode$Z(this.focusNode, true);
}this.textListener.checkDocument$();
this.setCssFont$swingjs_api_js_DOMNode$java_awt_Font(this.domNode, this.c.getFont$());
$I$(5).setAttrs(this.domNode, ["contentEditable", "TRUE", "spellcheck", "FALSE"]);
if (this.jc.getTopLevelAncestor$() != null ) {
if (this.editor.getText$() != this.mytext) {
this.setText$S(null);
}}return this.updateDOMNodeCUI$();
});

Clazz.newMeth(C$, ['propertyChange$java_beans_PropertyChangeEvent','propertyChange$'], function (e) {
var prop=e.getPropertyName$();
switch (prop) {
case "text":
this.setCurrentText$();
return;
}
C$.superclazz.prototype.propertyChange$java_beans_PropertyChangeEvent.apply(this, [e]);
});

Clazz.newMeth(C$, 'getJSDocOffset$swingjs_api_js_DOMNode', function (node) {
var pt=0;
while (node !== this.domNode ){
var sib=$I$(5).getPreviousSibling(node);
while (sib != null ){
pt+=p$1.getJSCharCount$swingjs_api_js_DOMNode.apply(this, [sib]);
sib=$I$(5).getPreviousSibling(sib);
}
node=$I$(5).getParent(node);
}
return pt;
}, p$1);

Clazz.newMeth(C$, 'getJSCharCount$swingjs_api_js_DOMNode', function (sib) {
var n=0;
switch (sib.tagName ||"") {
case "BR":
return 1;
case "DIV":
n=1;
break;
case "SPAN":
if (C$.isJSTAB$O(sib)) return 1;
break;
}
return n + (sib.textContent && sib.textContent.length ||0);
}, p$1);

Clazz.newMeth(C$, 'setText$S', function (text) {
var sb=Clazz.new_($I$(6,1));
var d=this.editor.getDocument$();
if (d == null ) return;
if (text == null ) text=this.editor.getText$();
this.mytext=text;
this.isStyled=Clazz.instanceOf((this.editor).getEditorKit$(), "javax.swing.text.StyledEditorKit");
p$1.fromJava$S$javajs_util_SB$javax_swing_text_Element$Z$javax_swing_text_AttributeSet.apply(this, [text, sb, d.getRootElements$()[0], true, null]);
var html=sb.toString() + "<div style='height:5px'><br></div>";
if (html == this.currentHTML) return;
text=this.fixText$S(this.currentText=text);
$I$(5).setAttr(this.domNode, "innerHTML", this.currentHTML=html);
p$1.updateDataUI.apply(this, []);
var me=this;
{
setTimeout(function(){me.updateJSCursor$S("editortext")},10);
}
});

Clazz.newMeth(C$, 'updateDataUI', function () {
var divs=this.$$O(this.domNode).find("*");
for (var i=divs.length; --i >= 0; ) this.setDataUI$swingjs_api_js_DOMNode(divs[i]);

}, p$1);

Clazz.newMeth(C$, 'fromJava$S$javajs_util_SB$javax_swing_text_Element$Z$javax_swing_text_AttributeSet', function (text, sb, node, allowBR, currAttr) {
p$1.setEditorAttrs.apply(this, []);
var start=node.getStartOffset$();
var end=node.getEndOffset$();
if (end == start) return;
var isDiv=(start >= text.length$() || text.charAt$I(end - 1) == "\n" );
if (isDiv && start + 1 == end ) {
if (allowBR) {
sb.append$S("<br>");
}return;
}var isBranch=(Clazz.instanceOf(node, "javax.swing.text.AbstractDocument.BranchElement"));
var isPara=(this.isStyled && node.getName$() == "paragraph" );
var a=node.getAttributes$();
var style=p$1.getCSSStyle$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet.apply(this, [a, currAttr]);
var haveStyle=(style.length$() > 0);
if (haveStyle) style=" style=\"" + style + "\"" ;
sb.append$S(allowBR && (isDiv || isPara )  ? "<div" + style + ">"  : haveStyle ? "<span" + style + ">"  : "");
var isSub=p$1.checkAttr$I$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet.apply(this, [4, a, null]);
var isSup=!isSub && p$1.checkAttr$I$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet.apply(this, [8, a, null]) ;
if (isSub) sb.append$S("<sub>");
 else if (isSup) sb.append$S("<sup>");
if (isBranch) {
for (var i=0, n=node.getElementCount$(); i < n; i++) {
p$1.fromJava$S$javajs_util_SB$javax_swing_text_Element$Z$javax_swing_text_AttributeSet.apply(this, [text, sb, node.getElement$I(i), !isDiv && !isPara , a]);
}
} else {
var t=text.substring$I$I(start, isDiv ? end - 1 : end);
if (t.indexOf$I(" ") >= 0) t=t.replace$C$C(" ", "\u00a0");
if (t.indexOf$I("\t") >= 0) {
t=$I$(7).rep$S$S$S(t, "\t", "<span class=\'j2stab\'>&nbsp;&nbsp;&nbsp;&nbsp;</span>");
}sb.append$S(t);
}if (isSup) sb.append$S("</sup>");
 else if (isSub) sb.append$S("</sub>");
sb.append$S(allowBR && (isDiv || isPara )  ? "</div>" : haveStyle ? "</span>" : "");
}, p$1);

Clazz.newMeth(C$, 'getCSSStyle$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet', function (a, currAttr) {
var style="";
if (p$1.checkAttr$I$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet.apply(this, [128, a, currAttr])) style += "background:" + $I$(8).getCSSColor$java_awt_Color(p$1.getBackground$javax_swing_text_AttributeSet.apply(this, [a])) + ";" ;
if (p$1.checkAttr$I$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet.apply(this, [64, a, currAttr])) style += "color:" + $I$(8).getCSSColor$java_awt_Color(p$1.getForeground$javax_swing_text_AttributeSet.apply(this, [a])) + ";" ;
if (p$1.checkAttr$I$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet.apply(this, [1, a, currAttr])) style += "font-weight:" + (p$1.isBold$javax_swing_text_AttributeSet.apply(this, [a]) ? "bold;" : "normal;");
if (p$1.checkAttr$I$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet.apply(this, [2, a, currAttr])) style += "font-style:" + (p$1.isItalic$javax_swing_text_AttributeSet.apply(this, [a]) ? "italic;" : "normal;");
if (p$1.checkAttr$I$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet.apply(this, [32, a, currAttr])) style += "font-family:" + $I$(8).getCSSFontFamilyName$S(p$1.getFontFamily$javax_swing_text_AttributeSet.apply(this, [a])) + ";" ;
if (p$1.checkAttr$I$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet.apply(this, [16, a, currAttr])) style += "font-size:" + p$1.getFontSize$javax_swing_text_AttributeSet.apply(this, [a]) + "px;" ;
return style;
}, p$1);

Clazz.newMeth(C$, 'setEditorAttrs', function () {
this.ffamily=this.editor.getFont$().getFamily$();
this.fsize=this.editor.getFont$().getSize$();
this.fback=this.editor.getBackground$();
this.ffore=this.editor.getForeground$();
this.fbold=this.editor.getFont$().isBold$();
this.fital=this.editor.getFont$().isItalic$();
}, p$1);

Clazz.newMeth(C$, 'getFontFamily$javax_swing_text_AttributeSet', function (a) {
var f=a.getAttribute$O($I$(9).Family);
return (f == null  ? this.ffamily : f);
}, p$1);

Clazz.newMeth(C$, 'getFontSize$javax_swing_text_AttributeSet', function (a) {
var f=a.getAttribute$O($I$(9).Size);
return (f == null  ? this.fsize : f.intValue$());
}, p$1);

Clazz.newMeth(C$, 'isItalic$javax_swing_text_AttributeSet', function (a) {
var f=a.getAttribute$O($I$(9).Italic);
return (f == null  ? this.fital : f.booleanValue$());
}, p$1);

Clazz.newMeth(C$, 'isBold$javax_swing_text_AttributeSet', function (a) {
var f=a.getAttribute$O($I$(9).Bold);
return (f == null  ? this.fbold : f.booleanValue$());
}, p$1);

Clazz.newMeth(C$, 'getForeground$javax_swing_text_AttributeSet', function (a) {
var f=a.getAttribute$O($I$(9).Foreground);
return (f == null  ? this.ffore : f);
}, p$1);

Clazz.newMeth(C$, 'getBackground$javax_swing_text_AttributeSet', function (a) {
var f=a.getAttribute$O($I$(9).Background);
return (f == null  ? this.fback : f);
}, p$1);

Clazz.newMeth(C$, 'checkAttr$I$javax_swing_text_AttributeSet$javax_swing_text_AttributeSet', function (attr, a, currAttr) {
switch (attr) {
case 1:
return (currAttr == null  || p$1.isBold$javax_swing_text_AttributeSet.apply(this, [a]) != p$1.isBold$javax_swing_text_AttributeSet.apply(this, [currAttr])  );
case 2:
return (currAttr == null  || p$1.isItalic$javax_swing_text_AttributeSet.apply(this, [a]) != p$1.isItalic$javax_swing_text_AttributeSet.apply(this, [currAttr])  );
case 4:
return $I$(9).isSubscript$javax_swing_text_AttributeSet(a);
case 8:
return $I$(9).isSuperscript$javax_swing_text_AttributeSet(a);
case 16:
return (currAttr == null  || p$1.getFontSize$javax_swing_text_AttributeSet.apply(this, [a]) != p$1.getFontSize$javax_swing_text_AttributeSet.apply(this, [currAttr]) );
case 32:
return (currAttr == null  || p$1.getFontFamily$javax_swing_text_AttributeSet.apply(this, [a]) != p$1.getFontFamily$javax_swing_text_AttributeSet.apply(this, [currAttr]) );
case 64:
var f=p$1.getForeground$javax_swing_text_AttributeSet.apply(this, [a]);
return f !== $I$(10).none  && (currAttr == null  || !f.equals$O(p$1.getForeground$javax_swing_text_AttributeSet.apply(this, [currAttr])) ) ;
case 128:
var b=p$1.getBackground$javax_swing_text_AttributeSet.apply(this, [a]);
return b !== $I$(10).none  && (currAttr == null  || !b.equals$O(p$1.getBackground$javax_swing_text_AttributeSet.apply(this, [currAttr])) ) ;
}
return false;
}, p$1);

Clazz.newMeth(C$, 'getCSSAdjustment$Z', function (addingCSS) {
return Clazz.new_($I$(11,1).c$$I$I,[0, 0]);
});

Clazz.newMeth(C$, 'getPropertyPrefix$', function () {
return "EditorPane";
});

Clazz.newMeth(C$, 'getJSNodePt$swingjs_api_js_DOMNode$I$Z', function (node, pt, isRoot) {
pt=Math.max(0, pt);
if (isRoot) {
this.lastRange=null;
}var isTAB=C$.isJSTAB$O(node);
{
this.lastRange = [node, 0];
if (isTAB) { return (pt == 0 ? this.lastRange : [null, pt - 1]);
} var nodes = node.childNodes;
var tag = node.tagName;
var n = nodes.length;
if (tag == "BR" || n == 1 && nodes[0].tagName == "BR") { return (pt == 0 ? [node, 0] : [null, pt - 1]);
} var nlen = 0;
var i1 = (tag == "DIV" || tag == "P" ? 1 : 0);
for (var i = 0; i < n; i++) { node = nodes[i];
if (node.innerText) { var ret=this.getJSNodePt$swingjs_api_js_DOMNode$I$Z(node, pt, false);
if (ret[0] != null) return ret;
pt = ret[1];
} else if (node.tagName == "BR") { if (pt == 0) return [node.parentNode, i];
pt -= (isRoot ? 1 : 0);
} else { nlen = node.length;
if (nlen >= pt) return this.lastRange = [node, pt];
this.lastRange = [node, nlen];
pt -= nlen;
} } if (!isRoot) return [null, Math.max(0, pt - i1)];
var r = this.lastRange;
this.lastRange = null;
return r;
}
});

Clazz.newMeth(C$, 'getJSTextValue$', function () {
var s=C$.getInnerTextSafely$swingjs_api_js_DOMNode$Z$javajs_util_SB(this.domNode, false, null).toString().replace$C$C("\u00a0", " ");
return s;
});

Clazz.newMeth(C$, 'getInnerTextSafely$swingjs_api_js_DOMNode$Z$javajs_util_SB', function (node, isLast, sb) {
var isRoot=(sb == null );
if (isRoot) sb=Clazz.new_($I$(6,1));
var ret;
var tagName=$I$(5).getAttr(node, "tagName");
if (tagName == null ) {
sb.append$S($I$(5).getAttr(node, "data"));
ret=$I$(12).TRUE;
} else {
ret=$I$(12).FALSE;
var nodes=$I$(5).getAttr(node, "childNodes");
if (tagName == "BR" || nodes.length == 1 && $I$(5).getAttr(nodes[0], "tagName") === "BR"   ) {
sb.append$S("\n");
} else if (tagName == "SPAN" && C$.isJSTAB$O(node) ) {
sb.append$S("\t");
} else {
for (var i=0, n=nodes.length; i < n; i++) ret=C$.getInnerTextSafely$swingjs_api_js_DOMNode$Z$javajs_util_SB(nodes[i], i == n - 1, sb);

if ((!isRoot || isLast ) && ret === $I$(12).TRUE  ) {
switch (tagName) {
case "DIV":
case "BR":
case "P":
sb.append$S("\n");
break;
}
}}}return (isRoot ? sb.toString() : ret);
}, 1);

Clazz.newMeth(C$, 'isJSTAB$O', function (node) {
return node != null  && (node.nodeType != 3 && ("" + node.getAttribute("class")).indexOf("j2stab") >= 0 &&true) ;
}, 1);

Clazz.newMeth(C$, 'setJSSelection$I$I$Z', function (mark, dot, andScroll) {
C$.superclazz.prototype.setJSSelection$I$I$Z.apply(this, [Math.min(mark, dot), Math.max(mark, dot), andScroll]);
});

Clazz.newMeth(C$, 'jsSelect$OA$OA$Z', function (r1, r2, andScroll) {
p$1.fixTabRange$OA.apply(this, [r1]);
if (r1 !== r2 ) p$1.fixTabRange$OA.apply(this, [r2]);
andScroll|=(this.jc.秘keyAction != null );

var range = document.createRange();
range.setStart(r1[0], r1[1] || 0);
range.setEnd(r2[0], r2[1] || 0);
var sel = window.getSelection();
sel.removeAllRanges();
sel.addRange(range);
if (andScroll) {
p$1.scrollAsNeeded$O.apply(this, [r2[0]]);
}});

Clazz.newMeth(C$, 'scrollAsNeeded$O', function (node) {
var isAtEnd=(this.editor.getCaret$().getDot$() >= this.editor.getText$().lastIndexOf$I("\n"));

if (isAtEnd) { this.domNode.scrollTop = this.domNode.scrollHeight;
return;
} var h = 0; node.getBoundingClientRect || (node =  node.parentElement);
//
var od = $(this.domNode).offset();
var on = $(node).offset();
var hn = $(node).height();
var hd = $(this.domNode).height();
//
var top =       this.domNode.scrollTop;
var off = on.top + top -od.top;
//xxe = this.domNode;
//System.out.println([node.innerText,"top",top, "[",off |0, (off+hn)|0, "]bottom",(top+hd)|0]);
if (off < top) { //
this.domNode.scrollTop = off;
//
} else if (off+ hn + 20 > top + hd) { //
this.domNode.scrollTop = off + hn - hd +20;
//
} var top =       this.domNode.scrollTop;
//System.out.println([node.innerText,"top",top, "[",off |0, (off+hn)|0, "]bottom",(top+hd)|0]);
}, p$1);

Clazz.newMeth(C$, 'fixTabRange$OA', function (r) {
var node=r[0];
var isStart=r[1] == 0||false;
if (C$.isJSTAB$O(node)) {
System.out.println$S("fixtab");
if (isStart) {
} else {
}}}, p$1);

Clazz.newMeth(C$, 'caretUpdatedByProgram$javax_swing_event_CaretEvent', function (e) {
this.updateJSCursor$S("noscroll");
});

Clazz.newMeth(C$, 'getJSMarkAndDot$java_awt_Point$I', function (pt, keycode) {
var dot=0;
var mark=0;
var apt=0;
var fpt=0;
var anode=null;
var fnode=null;
var apar=null;
var fpar=null;
var atag=null;
var ftag=null;
var alen=0;
var flen=0;
var toEnd=(keycode == 39 || keycode == 227 );
var toStart=(keycode == 37 || keycode == 226 );

//System.out.println("getJSMandD " + [toEnd,toStart]);
var s = window.getSelection(); anode = s.anchorNode; apt = s.anchorOffset; if (anode.tagName) { anode = anode.childNodes[apt]; apt = 0; } else { alen = anode.length; apar = anode.parentElement; } fnode = s.focusNode; fpt = s.focusOffset;
if (fnode.tagName) { fnode = fnode.childNodes[fpt]; fpt = 0; } else { flen = fnode.length; fpar = fnode.parentElement; }
if (anode == null  || fnode == null  ) {
System.out.println$S("JSEditorPaneUI anode or fnode is null ");
return false;
}var isAInTab=(alen == 4 && apt != 0  && C$.isJSTAB$O(apar) );
var isFInTab=(flen == 4 && fpt != 0  && C$.isJSTAB$O(fpar) );
var updateJS=false;
if (isAInTab) apt=(apt == 4 || (updateJS=toEnd)  ? 1 : 0);
if (isFInTab) fpt=(fpt == 4 || (updateJS=toEnd)  ? 1 : 0);
if (toStart && (isAInTab && apt == 0  || isFInTab && fpt == 0  ) ) updateJS=true;
mark=p$1.getJSDocOffset$swingjs_api_js_DOMNode.apply(this, [anode]);
dot=(anode === fnode  ? mark : p$1.getJSDocOffset$swingjs_api_js_DOMNode.apply(this, [fnode])) + fpt;
mark+=apt;
pt.x=mark;
pt.y=dot;
if (updateJS) this.setJSSelection$I$I$Z(mark, dot, false);
return true;
});

Clazz.newMeth(C$, 'setJSMarkAndDot$I$I$Z', function (mark, dot, andScroll) {
this.editor.getCaret$().setDot$I(dot);
p$1.updateDataUI.apply(this, []);
});

Clazz.newMeth(C$, 'isFocusable$', function () {
return false;
});

Clazz.newMeth(C$, 'action$S$I', function (what, data) {
var p=-1;
switch (what) {
case "paste":
this.setText$S(null);
break;
case "delete":
try {
var doc=this.editor.getDocument$();
var caret=this.editor.getCaret$();
var dot=caret.getDot$();
var mark=caret.getMark$();
p=Math.min(dot, mark);
if (dot != mark) {
doc.remove$I$I(p, Math.abs(dot - mark));
} else {
var len=doc.getLength$();
if (data < 0 && dot == 0  || data > 0 && dot == len   || data == 0 ) return;
var delChars=1;
if (data < 0) dot-=2;
if (dot > 1 && dot < len - 1 ) {
var dotChars=doc.getText$I$I(dot, 2);
var c0=dotChars.charAt$I(0);
var c1=dotChars.charAt$I(1);
if (c0 >= "\ud800" && c0 <= "\udbff"  && c1 >= "\udc00"  && c1 <= "\udfff" ) {
delChars=2;
}}if (data < 0) {
if (delChars == 1) dot++;
p=dot;
}doc.remove$I$I(dot, delChars);
}} catch (bl) {
if (Clazz.exceptionOf(bl,"javax.swing.text.BadLocationException")){
} else {
throw bl;
}
}
break;
}
if (p >= 0) {
this.setText$S(null);
this.setJSMarkAndDot$I$I$Z(p, p, false);
}});

Clazz.newMeth(C$, 'handleTab$O', function (jqEvent) {
p$1.replaceText$S$I.apply(this, ["\t", -1]);
return false;
});

Clazz.newMeth(C$, 'replaceText$S$I', function (s, x) {
try {
if (x < 0) {
var xy=p$1.getJavaMarkAndDot.apply(this, []);
x=xy[0];
if (xy[1] > x) this.editor.getDocument$().remove$I$I(x, xy[1] - x);
}if (s != null ) this.editor.getDocument$().insertString$I$S$javax_swing_text_AttributeSet(x, s, null);
} catch (e) {
if (Clazz.exceptionOf(e,"javax.swing.text.BadLocationException")){
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'getJavaMarkAndDot', function () {
var x=this.editor.getCaret$().getMark$();
var y=this.editor.getCaret$().getDot$();
return Clazz.array(Integer.TYPE, -1, [Math.min(x, y), Math.max(x, y)]);
}, p$1);

Clazz.newMeth(C$, 'handleCtrlV$I', function (mode) {
this.getJSMarkAndDot$java_awt_Point$I($I$(13).markDot, 0);
var s=$I$(5).getAttr(this.domNode, "innerText");
if (mode == 401) {
this.stemp=s;
this.xyTemp=p$1.getJavaMarkAndDot.apply(this, []);
return false;
}var x=this.xyTemp[0];
var n=s.length$() - this.stemp.length$() + this.xyTemp[1] - x;
if (n <= 0) return false;
try {
x+=(3) * p$1.tabCount$S.apply(this, [this.editor.getDocument$().getText$I$I(0, x)]);
if (x < 0) return false;
s=s.substring$I$I(x, x + n);
if (this.xyTemp[0] != this.xyTemp[1]) this.editor.getDocument$().remove$I$I(this.xyTemp[0], this.xyTemp[1] - this.xyTemp[0]);
this.editor.getDocument$().insertString$I$S$javax_swing_text_AttributeSet(this.xyTemp[0], s, null);
} catch (bl) {
if (Clazz.exceptionOf(bl,"javax.swing.text.BadLocationException")){
} else {
throw bl;
}
}
return true;
});

Clazz.newMeth(C$, 'tabCount$S', function (s) {
var n=0;
for (var i=s.length$(); --i >= 0; ) if (s.charAt$I(i) == "\t") n++;

return n;
}, p$1);

Clazz.newMeth(C$, 'setJSText$', function () {
this.mytext=null;
this.updateDOMNode$();
});

Clazz.newMeth(C$, ['handleJSEvent$O$I$O','handleJSEvent$'], function (target, eventType, jQueryEvent) {
var b=this.checkAllowEvent$O(jQueryEvent);
if (b != null ) return (b).valueOf();
switch (eventType) {
default:
return false;
case -2:
$I$(14).dispatchKeyEvent$javax_swing_JComponent$I$O$J(this.jc, 0, jQueryEvent, System.currentTimeMillis$());

jQueryEvent.preventDefault();
jQueryEvent.stopPropagation();
this.setIgnoreEvent$O(jQueryEvent);
return true;
}
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:51:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
