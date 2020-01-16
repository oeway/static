(function(){var P$=Clazz.newPackage("org.scijava.ui"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "ARGBPlane");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['width','height'],'O',['data','int[]']]]

Clazz.newMeth(C$, 'c$$I$I$IA', function (width, height, data) {
;C$.$init$.apply(this);
this.width=width;
this.height=height;
this.data=data;
if (width < 1 || height < 1 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Both width and height must be greater than zero"]);
}if (width * height > 2147483647) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Plane is too large"]);
}if (data.length != width * height) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Data size mismatch"]);
}}, 1);

Clazz.newMeth(C$, 'c$$I$I', function (width, height) {
C$.c$$I$I$IA.apply(this, [width, height, Clazz.array(Integer.TYPE, [width * height])]);
}, 1);

Clazz.newMeth(C$, 'getWidth$', function () {
return this.width;
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.height;
});

Clazz.newMeth(C$, 'getData$', function () {
return this.data;
});

Clazz.newMeth(C$, 'getARGB$I$I', function (x, y) {
return this.data[p$1.index$I$I.apply(this, [x, y])];
});

Clazz.newMeth(C$, 'getAlpha$I$I', function (x, y) {
return p$1.alpha$I.apply(this, [this.data[p$1.index$I$I.apply(this, [x, y])]]);
});

Clazz.newMeth(C$, 'getRed$I$I', function (x, y) {
return p$1.red$I.apply(this, [this.data[p$1.index$I$I.apply(this, [x, y])]]);
});

Clazz.newMeth(C$, 'getGreen$I$I', function (x, y) {
return p$1.green$I.apply(this, [this.data[p$1.index$I$I.apply(this, [x, y])]]);
});

Clazz.newMeth(C$, 'getBlue$I$I', function (x, y) {
return p$1.blue$I.apply(this, [this.data[p$1.index$I$I.apply(this, [x, y])]]);
});

Clazz.newMeth(C$, 'setARGB$I$I$I', function (x, y, argb) {
this.data[p$1.index$I$I.apply(this, [x, y])]=argb;
});

Clazz.newMeth(C$, 'setAlpha$I$I$I', function (x, y, v) {
var argb=this.data[p$1.index$I$I.apply(this, [x, y])];
var component=v & 255;
argb&=~-16777216;
argb|=(component << 24);
this.data[p$1.index$I$I.apply(this, [x, y])]=argb;
});

Clazz.newMeth(C$, 'setRed$I$I$I', function (x, y, v) {
var argb=this.data[p$1.index$I$I.apply(this, [x, y])];
var component=v & 255;
argb&=~16711680;
argb|=(component << 16);
this.data[p$1.index$I$I.apply(this, [x, y])]=argb;
});

Clazz.newMeth(C$, 'setGreen$I$I$I', function (x, y, v) {
var argb=this.data[p$1.index$I$I.apply(this, [x, y])];
var component=v & 255;
argb&=~65280;
argb|=(component << 8);
this.data[p$1.index$I$I.apply(this, [x, y])]=argb;
});

Clazz.newMeth(C$, 'setBlue$I$I$I', function (x, y, v) {
var argb=this.data[p$1.index$I$I.apply(this, [x, y])];
var component=v & 255;
argb&=~255;
argb|=(component << 0);
this.data[p$1.index$I$I.apply(this, [x, y])]=argb;
});

Clazz.newMeth(C$, 'index$I$I', function (x, y) {
return y * this.width + x;
}, p$1);

Clazz.newMeth(C$, 'alpha$I', function (argb) {
return (argb >> 24) & 255;
}, p$1);

Clazz.newMeth(C$, 'red$I', function (argb) {
return (argb >> 16) & 255;
}, p$1);

Clazz.newMeth(C$, 'green$I', function (argb) {
return (argb >> 8) & 255;
}, p$1);

Clazz.newMeth(C$, 'blue$I', function (argb) {
return (argb >> 0) & 255;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:31 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
