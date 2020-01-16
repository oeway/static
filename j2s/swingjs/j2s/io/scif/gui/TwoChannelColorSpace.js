(function(){var P$=Clazz.newPackage("io.scif.gui"),I$=[[0,'java.awt.color.ColorSpace']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TwoChannelColorSpace", null, 'java.awt.color.ColorSpace');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (type, components) {
;C$.superclazz.c$$I$I.apply(this,[type, components]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'fromCIEXYZ$FA', function (color) {
var rgb=$I$(1).getInstance$I(1000);
return rgb.fromCIEXYZ$FA(this.toRGB$FA(color));
});

Clazz.newMeth(C$, 'fromRGB$FA', function (rgb) {
return Clazz.array(Float.TYPE, -1, [rgb[0], rgb[1]]);
});

Clazz.newMeth(C$, 'getInstance$I', function (colorSpace) {
if (colorSpace == -1) {
return Clazz.new_(C$.c$$I$I,[12, 2]);
}return $I$(1).getInstance$I(colorSpace);
}, 1);

Clazz.newMeth(C$, 'getName$I', function (idx) {
return idx == 0 ? "Red" : "Green";
});

Clazz.newMeth(C$, 'getNumComponents$', function () {
return 2;
});

Clazz.newMeth(C$, 'getType$', function () {
return 12;
});

Clazz.newMeth(C$, 'isCS_sRGB$', function () {
return false;
});

Clazz.newMeth(C$, 'toCIEXYZ$FA', function (color) {
var rgb=$I$(1).getInstance$I(1000);
return rgb.toCIEXYZ$FA(this.toRGB$FA(color));
});

Clazz.newMeth(C$, 'toRGB$FA', function (color) {
return Clazz.array(Float.TYPE, -1, [color[0], color[1], 0]);
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:42 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
