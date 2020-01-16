(function(){var P$=Clazz.newPackage("net.imagej.options"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "OptionsFont", null, 'org.scijava.options.OptionsPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.font="SansSerif";
this.fontSize=18;
this.fontStyle="Plain";
this.fontSmooth=true;
}, 1);

C$.$fields$=[['Z',['fontSmooth'],'I',['fontSize'],'S',['font','fontStyle']]]

Clazz.newMeth(C$, 'getFont$', function () {
return this.font;
});

Clazz.newMeth(C$, 'getFontSize$', function () {
return this.fontSize;
});

Clazz.newMeth(C$, 'getFontStyle$', function () {
return this.fontStyle;
});

Clazz.newMeth(C$, 'isFontSmooth$', function () {
return this.fontSmooth;
});

Clazz.newMeth(C$, 'setFont$S', function (font) {
this.font=font;
});

Clazz.newMeth(C$, 'setFontSize$I', function (fontSize) {
this.fontSize=fontSize;
});

Clazz.newMeth(C$, 'setFontStyle$S', function (fontStyle) {
this.fontStyle=fontStyle;
});

Clazz.newMeth(C$, 'setFontSmooth$Z', function (fontSmooth) {
this.fontSmooth=fontSmooth;
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.options.OptionsFont',null,['org.scijava.plugin.Plugin']],['type="org.scijava.options.OptionsPlugin.class" menu={"@Menu(label = Edit, weight = 1.0, mnemonic = e)"  "@Menu(label = Options, mnemonic = o)"  "@Menu(label = Fonts..., weight = 3)"  } attrs={"@Attr(name = no-legacy)"  } ']],
  [['font','String',null,['org.scijava.plugin.Parameter']],['label="Font" ']],
  [['fontSize','int',null,['org.scijava.plugin.Parameter']],['label="Size" min="8" max="72" ']],
  [['fontStyle','String',null,['org.scijava.plugin.Parameter']],['label="Style" choices={"Plain"  "Bold"  "Italic"  "Bold + Italic"  } ']],
  [['fontSmooth','boolean',null,['org.scijava.plugin.Parameter']],['label="Smooth" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:01 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
