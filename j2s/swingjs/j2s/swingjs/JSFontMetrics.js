(function(){var P$=Clazz.newPackage("swingjs"),I$=[[0,'swingjs.JSToolkit']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "JSFontMetrics", null, 'java.awt.FontMetrics');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.FIRST_PRINTABLE=32;
}, 1);

C$.$fields$=[['I',['FIRST_PRINTABLE'],'O',['fwidths','float[]','iwidths','int[]']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$java_awt_Font.apply(this,[null]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'setFont$java_awt_Font', function (f) {
this.font=f;
});

Clazz.newMeth(C$, 'getLeading$', function () {
return (this.font.getSize$()/20|0) + 1;
});

Clazz.newMeth(C$, 'getAscent$', function () {
return this.font.getSize$();
});

Clazz.newMeth(C$, 'getDescent$', function () {
return (this.font.getSize$()/4|0) + 1;
});

Clazz.newMeth(C$, 'charWidth$C', function (pt) {
return (pt.$c() < 256  ? (this.getWidthsFloat$()[pt.$c()]|0) : this.stringWidth$S("" + pt));
});

Clazz.newMeth(C$, 'charWidth$I', function (pt) {
{
var spt;
return ((pt + 0 == pt ? pt : (pt = (spt = pt).charCodeAt(0))) < 256 ? (this.getWidthsFloat$()[pt] | 0) : this.stringWidth$S(isChar ? spt : String.fromCharCode(pt)));
}
});

Clazz.newMeth(C$, 'stringWidth$S', function (s) {
return ($I$(1).getStringWidth$swingjs_api_js_HTML5CanvasContext2D$java_awt_Font$S(null, this.font, s)|0);
});

Clazz.newMeth(C$, 'getWidths$', function () {
if (this.iwidths != null ) return this.iwidths;
this.iwidths=Clazz.array(Integer.TYPE, [256]);
this.getWidthsFloat$();
for (var ch=this.FIRST_PRINTABLE; ch < 256; ch++) {
this.iwidths[ch]=(this.fwidths[ch]|0);
}
return this.iwidths;
});

Clazz.newMeth(C$, 'getWidthsFloat$', function () {
if (this.fwidths != null ) return this.fwidths;
this.fwidths=Clazz.array(Float.TYPE, [256]);
for (var ch=this.FIRST_PRINTABLE; ch < 256; ch++) {
this.fwidths[ch]=$I$(1).getStringWidth$swingjs_api_js_HTML5CanvasContext2D$java_awt_Font$S(null, this.font, "" + String.fromCharCode(ch));
}
return this.fwidths;
});

Clazz.newMeth(C$, 'getLineMetrics$S$java_awt_Graphics', function (str, context) {
return this.font.getLineMetrics$S$O(str, null);
});

Clazz.newMeth(C$, 'getLineMetrics$S$I$I$java_awt_Graphics', function (str, beginIndex, limit, context) {
return this.font.getLineMetrics$S$I$I$O(str, beginIndex, limit, null);
});

Clazz.newMeth(C$, 'getLineMetrics$CA$I$I$java_awt_Graphics', function (chars, beginIndex, limit, context) {
return this.font.getLineMetrics$CA$I$I$O(chars, beginIndex, limit, null);
});

Clazz.newMeth(C$, 'getLineMetrics$java_text_CharacterIterator$I$I$java_awt_Graphics', function (ci, beginIndex, limit, context) {
return this.font.getLineMetrics$java_text_CharacterIterator$I$I$O(ci, beginIndex, limit, null);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:51:08 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
