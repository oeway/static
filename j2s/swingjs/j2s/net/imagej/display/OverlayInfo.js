(function(){var P$=Clazz.newPackage("net.imagej.display"),I$=[[0,'StringBuilder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "OverlayInfo");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['selected'],'O',['overlay','net.imagej.overlay.Overlay']]]

Clazz.newMeth(C$, 'c$$net_imagej_overlay_Overlay', function (o) {
C$.c$$net_imagej_overlay_Overlay$Z.apply(this, [o, false]);
}, 1);

Clazz.newMeth(C$, 'c$$net_imagej_overlay_Overlay$Z', function (overlay, selected) {
;C$.$init$.apply(this);
this.overlay=overlay;
this.selected=selected;
}, 1);

Clazz.newMeth(C$, 'getOverlay$', function () {
return this.overlay;
});

Clazz.newMeth(C$, 'isSelected$', function () {
return this.selected;
});

Clazz.newMeth(C$, 'setSelected$Z', function (b) {
this.selected=b;
});

Clazz.newMeth(C$, 'toString', function () {
if (this.overlay.getName$() != null ) return this.overlay.getName$();
var xVal=String.format$S$OA("x=%07.1f", [new Double(this.overlay.realMin$I(0))]);
var yVal=String.format$S$OA("y=%07.1f", [new Double(this.overlay.realMin$I(1))]);
var builder=Clazz.new_($I$(1,1));
builder.append$S(xVal);
builder.append$S(", ");
builder.append$S(yVal);
return builder.toString();
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:59 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
