(function(){var P$=Clazz.newPackage("net.imagej.options"),I$=[[0,'org.scijava.util.Colors']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "OptionsAppearance", null, 'org.scijava.options.OptionsPlugin');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.selectionColor=$I$(1).YELLOW;
this.interpZoomedImages=false;
this.fullZoomImages=false;
this.blackCanvas=false;
this.noImageBorder=false;
this.useInvertingLUT=false;
this.antialiasedToolIcons=true;
this.menuFontSize=0;
this.displayFractionalScales=false;
}, 1);

C$.$fields$=[['Z',['interpZoomedImages','fullZoomImages','blackCanvas','noImageBorder','useInvertingLUT','antialiasedToolIcons','displayFractionalScales'],'I',['menuFontSize'],'O',['selectionColor','org.scijava.util.ColorRGB']]]

Clazz.newMeth(C$, 'getSelectionColor$', function () {
return this.selectionColor;
});

Clazz.newMeth(C$, 'isInterpZoomedImages$', function () {
return this.interpZoomedImages;
});

Clazz.newMeth(C$, 'isFullZoomImages$', function () {
return this.fullZoomImages;
});

Clazz.newMeth(C$, 'isBlackCanvas$', function () {
return this.blackCanvas;
});

Clazz.newMeth(C$, 'isNoImageBorder$', function () {
return this.noImageBorder;
});

Clazz.newMeth(C$, 'isUseInvertingLUT$', function () {
return this.useInvertingLUT;
});

Clazz.newMeth(C$, 'isAntialiasedToolIcons$', function () {
return this.antialiasedToolIcons;
});

Clazz.newMeth(C$, 'getMenuFontSize$', function () {
return this.menuFontSize;
});

Clazz.newMeth(C$, 'isDisplayFractionalScales$', function () {
return this.displayFractionalScales;
});

Clazz.newMeth(C$, 'setSelectionColor$org_scijava_util_ColorRGB', function (c) {
this.selectionColor=c;
});

Clazz.newMeth(C$, 'setInterpZoomedImages$Z', function (interpZoomedImages) {
this.interpZoomedImages=interpZoomedImages;
});

Clazz.newMeth(C$, 'setFullZoomImages$Z', function (fullZoomImages) {
this.fullZoomImages=fullZoomImages;
});

Clazz.newMeth(C$, 'setBlackCanvas$Z', function (blackCanvas) {
this.blackCanvas=blackCanvas;
});

Clazz.newMeth(C$, 'setNoImageBorder$Z', function (noImageBorder) {
this.noImageBorder=noImageBorder;
});

Clazz.newMeth(C$, 'setUseInvertingLUT$Z', function (useInvertingLUT) {
this.useInvertingLUT=useInvertingLUT;
});

Clazz.newMeth(C$, 'setAntialiasedToolIcons$Z', function (antialiasedToolIcons) {
this.antialiasedToolIcons=antialiasedToolIcons;
});

Clazz.newMeth(C$, 'setMenuFontSize$I', function (menuFontSize) {
this.menuFontSize=menuFontSize;
});

Clazz.newMeth(C$, 'setDisplayFractionalScales$Z', function (displayFractionalScales) {
this.displayFractionalScales=displayFractionalScales;
});
C$.$getAnn$ = function(){ return [
[[null,'net.imagej.options.OptionsAppearance',null,['org.scijava.plugin.Plugin']],['type="org.scijava.options.OptionsPlugin.class" menu={"@Menu(label = Edit, weight = 1.0, mnemonic = e)"  "@Menu(label = Options, mnemonic = o)"  "@Menu(label = Appearance..., weight = 10)"  } attrs={"@Attr(name = no-legacy)"  } ']],
  [['selectionColor','org.scijava.util.ColorRGB',null,['org.scijava.plugin.Parameter']],['label="Selection color" ']],
  [['interpZoomedImages','boolean',null,['org.scijava.plugin.Parameter']],['label="Interpolate zoomed images" ']],
  [['fullZoomImages','.',null,['org.scijava.plugin.Parameter']],['label="Open images at 100%" ']],
  [['blackCanvas','.',null,['org.scijava.plugin.Parameter']],['label="Black canvas" ']],
  [['noImageBorder','.',null,['org.scijava.plugin.Parameter']],['label="No image border" ']],
  [['useInvertingLUT','.',null,['org.scijava.plugin.Parameter']],['label="Use inverting lookup table" ']],
  [['antialiasedToolIcons','.',null,['org.scijava.plugin.Parameter']],['label="Antialiased tool icons" ']],
  [['menuFontSize','int',null,['org.scijava.plugin.Parameter']],['label="Menu font size (points)" min="0" ']],
  [['displayFractionalScales','boolean',null,['org.scijava.plugin.Parameter']],['label="Display fractional scales" ']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:00 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
