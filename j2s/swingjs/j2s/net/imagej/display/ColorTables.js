(function(){var P$=Clazz.newPackage("net.imagej.display"),I$=[[0,'org.scijava.util.ColorRGB','net.imglib2.display.ColorTable8']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ColorTables");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.FIRE=C$.fire$();
C$.ICE=C$.ice$();
C$.SPECTRUM=C$.spectrum$();
C$.RGB332=C$.rgb332$();
C$.RED=C$.primary$I(4);
C$.GREEN=C$.primary$I(2);
C$.BLUE=C$.primary$I(1);
C$.CYAN=C$.primary$I(3);
C$.MAGENTA=C$.primary$I(5);
C$.YELLOW=C$.primary$I(6);
C$.GRAYS=C$.primary$I(7);
C$.REDGREEN=C$.redGreen$();
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['FIRE','net.imglib2.display.ColorTable8','+ICE','+SPECTRUM','+RGB332','+RED','+GREEN','+BLUE','+CYAN','+MAGENTA','+YELLOW','+GRAYS','+REDGREEN']]]

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getDefaultColorTable$I', function (c) {
switch (c) {
case 0:
return C$.RED;
case 1:
return C$.GREEN;
case 2:
return C$.BLUE;
case 3:
return C$.CYAN;
case 4:
return C$.MAGENTA;
case 5:
return C$.YELLOW;
default:
return C$.GRAYS;
}
}, 1);

Clazz.newMeth(C$, 'isGrayColorTable$net_imglib2_display_ColorTable', function (table) {
if (table === C$.GRAYS ) return true;
var numChannels=table.getComponentCount$();
var tableLen=table.getLength$();
for (var i=0; i < tableLen; i++) {
var value=table.get$I$I(0, i);
for (var c=1; c < numChannels; c++) if ((table.get$I$I(c, i)) != value) return false;

}
return true;
}, 1);

Clazz.newMeth(C$, 'fire$', function () {
var v=Clazz.array(Integer.TYPE, -2, [Clazz.array(Integer.TYPE, -1, [0, 0, 1, 25, 49, 73, 98, 122, 146, 162, 173, 184, 195, 207, 217, 229, 240, 252, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255]), Clazz.array(Integer.TYPE, -1, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 14, 35, 57, 79, 101, 117, 133, 147, 161, 175, 190, 205, 219, 234, 248, 255, 255, 255, 255]), Clazz.array(Integer.TYPE, -1, [0, 61, 96, 130, 165, 192, 220, 227, 210, 181, 151, 122, 93, 64, 35, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 35, 98, 160, 223, 255])]);
return C$.custom$IAA(v);
}, 1);

Clazz.newMeth(C$, 'ice$', function () {
var v=Clazz.array(Integer.TYPE, -2, [Clazz.array(Integer.TYPE, -1, [0, 0, 0, 0, 0, 0, 19, 29, 50, 48, 79, 112, 134, 158, 186, 201, 217, 229, 242, 250, 250, 250, 250, 251, 250, 250, 250, 250, 251, 251, 243, 230]), Clazz.array(Integer.TYPE, -1, [156, 165, 176, 184, 190, 196, 193, 184, 171, 162, 146, 125, 107, 93, 81, 87, 92, 97, 95, 93, 93, 90, 85, 69, 64, 54, 47, 35, 19, 0, 4, 0]), Clazz.array(Integer.TYPE, -1, [140, 147, 158, 166, 170, 176, 209, 220, 234, 225, 236, 246, 250, 251, 250, 250, 245, 230, 230, 222, 202, 180, 163, 142, 123, 114, 106, 94, 84, 64, 26, 27])]);
return C$.custom$IAA(v);
}, 1);

Clazz.newMeth(C$, 'spectrum$', function () {
var r=Clazz.array(Byte.TYPE, [256]);
var g=Clazz.array(Byte.TYPE, [256]);
var b=Clazz.array(Byte.TYPE, [256]);
for (var i=0; i < 256; i++) {
var c=$I$(1).fromHSVColor$D$D$D(i / 255.0, 1.0, 1.0);
r[i]=((c.getRed$()|0)|0);
g[i]=((c.getGreen$()|0)|0);
b[i]=((c.getBlue$()|0)|0);
}
return Clazz.new_($I$(2,1).c$$BAA,[[r, g, b]]);
}, 1);

Clazz.newMeth(C$, 'rgb332$', function () {
var r=Clazz.array(Byte.TYPE, [256]);
var g=Clazz.array(Byte.TYPE, [256]);
var b=Clazz.array(Byte.TYPE, [256]);
for (var i=0; i < 256; i++) {
r[i]=(((i & 224)|0)|0);
g[i]=((((i << 3) & 224)|0)|0);
b[i]=((((i << 6) & 192)|0)|0);
}
return Clazz.new_($I$(2,1).c$$BAA,[[r, g, b]]);
}, 1);

Clazz.newMeth(C$, 'redGreen$', function () {
var values=Clazz.array(Byte.TYPE, [3, 256]);
for (var i=0; i < 128; i++) {
values[0][i]=(((i * 2)|0)|0);
values[1][i]=(0|0);
values[2][i]=(0|0);
}
for (var i=128; i < 256; i++) {
values[0][i]=(0|0);
values[1][i]=(((i * 2)|0)|0);
values[2][i]=(0|0);
}
return Clazz.new_($I$(2,1).c$$BAA,[values]);
}, 1);

Clazz.newMeth(C$, 'primary$I', function (color) {
var r=Clazz.array(Byte.TYPE, [256]);
var g=Clazz.array(Byte.TYPE, [256]);
var b=Clazz.array(Byte.TYPE, [256]);
for (var i=0; i < 256; i++) {
if ((color & 4) != 0) r[i]=((i|0)|0);
if ((color & 2) != 0) g[i]=((i|0)|0);
if ((color & 1) != 0) b[i]=((i|0)|0);
}
return Clazz.new_($I$(2,1).c$$BAA,[[r, g, b]]);
}, 1);

Clazz.newMeth(C$, 'custom$IAA', function (v) {
var values=Clazz.array(Byte.TYPE, [v.length, null]);
for (var j=0; j < v.length; j++) {
values[j]=Clazz.array(Byte.TYPE, [v[j].length]);
for (var i=0; i < v[j].length; i++) {
values[j][i]=((v[j][i]|0)|0);
}
}
var lut=Clazz.new_($I$(2,1).c$$BAA,[values]);
return C$.interpolate$net_imglib2_display_ColorTable8$I(lut, 256);
}, 1);

Clazz.newMeth(C$, 'interpolate$net_imglib2_display_ColorTable8$I', function (inTable, outLength) {
var inValues=inTable.getValues$();
var componentCount=inValues.length;
var inLength=inValues[0].length;
var outValues=Clazz.array(Byte.TYPE, [componentCount, outLength]);
for (var i=0; i < outLength; i++) {
var q=inLength * i / outLength;
var i1=(q|0);
var fraction=q - i1;
var i2=i1 + 1;
if (i2 == inLength) i2=inLength - 1;
for (var j=0; j < componentCount; j++) {
outValues[j][i]=((((1.0 - fraction) * (inValues[j][i1] & 255) + fraction * (inValues[j][i2] & 255))|0)|0);
}
}
return Clazz.new_($I$(2,1).c$$BAA,[outValues]);
}, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:58 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
