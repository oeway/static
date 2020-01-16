(function(){var P$=Clazz.newPackage("org.scijava.util"),p$1={},I$=[[0,'org.scijava.util.Colors']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ColorRGB", null, null, 'java.io.Serializable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['red','green','blue']]]

Clazz.newMeth(C$, 'c$$I$I$I', function (red, green, blue) {
;C$.$init$.apply(this);
this.red=red;
this.green=green;
this.blue=blue;
}, 1);

Clazz.newMeth(C$, 'c$$S', function (s) {
;C$.$init$.apply(this);
var result=C$.fromHTMLColor$S(s);
if (result != null ) {
this.red=result.red;
this.green=result.green;
this.blue=result.blue;
} else {
var tokens=s.split$S(",");
this.red=p$1.parse$SA$I.apply(this, [tokens, 0]);
this.green=p$1.parse$SA$I.apply(this, [tokens, 1]);
this.blue=p$1.parse$SA$I.apply(this, [tokens, 2]);
}}, 1);

Clazz.newMeth(C$, 'getRed$', function () {
return this.red;
});

Clazz.newMeth(C$, 'getGreen$', function () {
return this.green;
});

Clazz.newMeth(C$, 'getBlue$', function () {
return this.blue;
});

Clazz.newMeth(C$, 'getAlpha$', function () {
return 255;
});

Clazz.newMeth(C$, 'getARGB$', function () {
var a=this.getAlpha$();
var r=this.getRed$();
var g=this.getGreen$();
var b=this.getBlue$();
return (a << 24) | (r << 16) | (g << 8) | b ;
});

Clazz.newMeth(C$, 'toHTMLColor$', function () {
var preset=$I$(1).getName$org_scijava_util_ColorRGB(this);
if (preset != null ) return preset;
var r=this.getRed$();
var g=this.getGreen$();
var b=this.getBlue$();
return String.format$S$OA("#%02x%02x%02x", [new Integer(r), new Integer(g), new Integer(b)]);
});

Clazz.newMeth(C$, 'toString', function () {
return this.red + "," + this.green + "," + this.blue ;
});

Clazz.newMeth(C$, 'equals$O', function (obj) {
if (!(Clazz.instanceOf(obj, "org.scijava.util.ColorRGB"))) return C$.superclazz.prototype.equals$O.apply(this, [obj]);
var other=obj;
return this.getRed$() == other.getRed$() && this.getGreen$() == other.getGreen$()  && this.getBlue$() == other.getBlue$()  && this.getAlpha$() == other.getAlpha$() ;
});

Clazz.newMeth(C$, 'hashCode$', function () {
return this.getARGB$();
});

Clazz.newMeth(C$, 'fromHTMLColor$S', function (color) {
if (color.startsWith$S("#")) {
var hexColor;
if (color.length$() == 4) {
hexColor= String.instantialize(Clazz.array(Character.TYPE, -1, [color.charAt$I(0), color.charAt$I(1), color.charAt$I(1), color.charAt$I(2), color.charAt$I(2), color.charAt$I(3), color.charAt$I(3)]));
} else hexColor=color;
var red=Integer.parseInt$S$I(hexColor.substring$I$I(1, 3), 16);
var green=Integer.parseInt$S$I(hexColor.substring$I$I(3, 5), 16);
var blue=Integer.parseInt$S$I(hexColor.substring$I$I(5, 7), 16);
return Clazz.new_(C$.c$$I$I$I,[red, green, blue]);
}return $I$(1).getColor$S(color);
}, 1);

Clazz.newMeth(C$, 'fromHSVColor$D$D$D', function (h, s, v) {
return C$.hsvToRgb$D$D$D(h, s, v);
}, 1);

Clazz.newMeth(C$, 'parse$SA$I', function (s, index) {
if (s == null  || index >= s.length ) return 0;
try {
return Integer.parseInt$S(s[index]);
} catch (exc) {
if (Clazz.exceptionOf(exc,"NumberFormatException")){
return 0;
} else {
throw exc;
}
}
}, p$1);

Clazz.newMeth(C$, 'hsvToRgb$D$D$D', function (h, s, v) {
var r01=0;
var g01=0;
var b01=0;
var i=(Math.floor(h * 6)|0);
var f=h * 6 - i;
var p=v * (1 - s);
var q=v * (1 - f * s);
var t=v * (1 - (1 - f) * s);
switch (i % 6) {
case 0:
r01=v;
g01=t;
b01=p;
break;
case 1:
r01=q;
g01=v;
b01=p;
break;
case 2:
r01=p;
g01=v;
b01=t;
break;
case 3:
r01=p;
g01=q;
b01=v;
break;
case 4:
r01=t;
g01=p;
b01=v;
break;
case 5:
r01=v;
g01=p;
b01=q;
break;
}
var r255=(Math.round(r01 * 255)|0);
var g255=(Math.round(g01 * 255)|0);
var b255=(Math.round(b01 * 255)|0);
return Clazz.new_(C$.c$$I$I$I,[r255, g255, b255]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
