(function(){var P$=Clazz.newPackage("java.awt"),p$1={},I$=[[0,'java.awt.GraphicsEnvironment','java.awt.Toolkit']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SystemColor", null, 'java.awt.Color', 'java.io.Serializable');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.systemColors=Clazz.array(Integer.TYPE, -1, [-16753572, -16777088, -1, -4144960, -8355712, -4144960, -4144960, -1, -16777216, -16777216, -4144960, -16777216, -4144960, -16777216, -16777088, -1, -8355712, -4144960, -16777216, -1, -2039584, -8355712, -16777216, -2039584, -2039808, -16777216]);
C$.desktop=Clazz.new_(C$.c$$B,[($b$[0] = 0, $b$[0])]);
C$.activeCaption=Clazz.new_(C$.c$$B,[($b$[0] = 1, $b$[0])]);
C$.activeCaptionText=Clazz.new_(C$.c$$B,[($b$[0] = 2, $b$[0])]);
C$.activeCaptionBorder=Clazz.new_(C$.c$$B,[($b$[0] = 3, $b$[0])]);
C$.inactiveCaption=Clazz.new_(C$.c$$B,[($b$[0] = 4, $b$[0])]);
C$.inactiveCaptionText=Clazz.new_(C$.c$$B,[($b$[0] = 5, $b$[0])]);
C$.inactiveCaptionBorder=Clazz.new_(C$.c$$B,[($b$[0] = 6, $b$[0])]);
C$.window=Clazz.new_(C$.c$$B,[($b$[0] = 7, $b$[0])]);
C$.windowBorder=Clazz.new_(C$.c$$B,[($b$[0] = 8, $b$[0])]);
C$.windowText=Clazz.new_(C$.c$$B,[($b$[0] = 9, $b$[0])]);
C$.menu=Clazz.new_(C$.c$$B,[($b$[0] = 10, $b$[0])]);
C$.menuText=Clazz.new_(C$.c$$B,[($b$[0] = 11, $b$[0])]);
C$.text=Clazz.new_(C$.c$$B,[($b$[0] = 12, $b$[0])]);
C$.textText=Clazz.new_(C$.c$$B,[($b$[0] = 13, $b$[0])]);
C$.textHighlight=Clazz.new_(C$.c$$B,[($b$[0] = 14, $b$[0])]);
C$.textHighlightText=Clazz.new_(C$.c$$B,[($b$[0] = 15, $b$[0])]);
C$.textInactiveText=Clazz.new_(C$.c$$B,[($b$[0] = 16, $b$[0])]);
C$.control=Clazz.new_(C$.c$$B,[($b$[0] = 17, $b$[0])]);
C$.controlText=Clazz.new_(C$.c$$B,[($b$[0] = 18, $b$[0])]);
C$.controlHighlight=Clazz.new_(C$.c$$B,[($b$[0] = 19, $b$[0])]);
C$.controlLtHighlight=Clazz.new_(C$.c$$B,[($b$[0] = 20, $b$[0])]);
C$.controlShadow=Clazz.new_(C$.c$$B,[($b$[0] = 21, $b$[0])]);
C$.controlDkShadow=Clazz.new_(C$.c$$B,[($b$[0] = 22, $b$[0])]);
C$.scrollbar=Clazz.new_(C$.c$$B,[($b$[0] = 23, $b$[0])]);
C$.info=Clazz.new_(C$.c$$B,[($b$[0] = 24, $b$[0])]);
C$.infoText=Clazz.new_(C$.c$$B,[($b$[0] = 25, $b$[0])]);
C$.systemColorObjects=Clazz.array(C$, -1, [C$.desktop, C$.activeCaption, C$.activeCaptionText, C$.activeCaptionBorder, C$.inactiveCaption, C$.inactiveCaptionText, C$.inactiveCaptionBorder, C$.window, C$.windowBorder, C$.windowText, C$.menu, C$.menuText, C$.text, C$.textText, C$.textHighlight, C$.textHighlightText, C$.textInactiveText, C$.control, C$.controlText, C$.controlHighlight, C$.controlLtHighlight, C$.controlShadow, C$.controlDkShadow, C$.scrollbar, C$.info, C$.infoText]);
{
C$.updateSystemColors$();
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['index']]
,['O',['systemColors','int[]','desktop','java.awt.SystemColor','+activeCaption','+activeCaptionText','+activeCaptionBorder','+inactiveCaption','+inactiveCaptionText','+inactiveCaptionBorder','+window','+windowBorder','+windowText','+menu','+menuText','+text','+textText','+textHighlight','+textHighlightText','+textInactiveText','+control','+controlText','+controlHighlight','+controlLtHighlight','+controlShadow','+controlDkShadow','+scrollbar','+info','+infoText','systemColorObjects','java.awt.SystemColor[]']]]

Clazz.newMeth(C$, 'updateSystemColors$', function () {
if (!$I$(1).isHeadless$()) {
$I$(2).getDefaultToolkit$().loadSystemColors$IA(C$.systemColors);
}for (var i=0; i < C$.systemColors.length; i++) {
C$.systemColorObjects[i].value=C$.systemColors[i];
}
}, 1);

Clazz.newMeth(C$, 'c$$B', function (index) {
;C$.superclazz.c$$I.apply(this,[C$.systemColors[index]]);C$.$init$.apply(this);
this.index=index;
}, 1);

Clazz.newMeth(C$, 'toString', function () {
return this.getClass$().getName$() + "[i=" + (this.index) + "]" ;
});

Clazz.newMeth(C$, 'readResolve', function () {
return C$.systemColorObjects[this.value];
}, p$1);

Clazz.newMeth(C$, 'writeReplace', function () {
var color=Clazz.new_(C$.c$$B,[($b$[0] = (this.index|0), $b$[0])]);
color.value=this.index;
return color;
}, p$1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:22 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
