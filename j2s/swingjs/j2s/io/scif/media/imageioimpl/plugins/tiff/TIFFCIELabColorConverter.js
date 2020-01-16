(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.plugins.tiff"),p$1={};
/*c*/var C$=Clazz.newClass(P$, "TIFFCIELabColorConverter", null, 'io.scif.media.imageio.plugins.tiff.TIFFColorConverter');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.THRESHOLD=Math.pow(0.008856, 0.3333333333333333);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['F',['THRESHOLD']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'clamp$F', function (x) {
if (x < 0.0 ) {
return 0.0;
} else if (x > 100.0 ) {
return 255.0;
} else {
return x * (2.55);
}}, p$1);

Clazz.newMeth(C$, 'clamp2$F', function (x) {
if (x < 0.0 ) {
return 0.0;
} else if (x > 255.0 ) {
return 255.0;
} else {
return x;
}}, p$1);

Clazz.newMeth(C$, 'fromRGB$F$F$F$FA', function (r, g, b, result) {
var X=0.412453 * r + 0.35758 * g + 0.180423 * b;
var Y=0.212671 * r + 0.71516 * g + 0.072169 * b;
var Z=0.019334 * r + 0.119193 * g + 0.950227 * b;
var YYn=Y / 100.0;
var XXn=X / 95.047;
var ZZn=Z / 108.883;
if (YYn < 0.008856 ) {
YYn=7.787 * YYn + 0.13793103;
} else {
YYn=Math.pow(YYn, 0.3333333333333333);
}if (XXn < 0.008856 ) {
XXn=7.787 * XXn + 0.13793103;
} else {
XXn=Math.pow(XXn, 0.3333333333333333);
}if (ZZn < 0.008856 ) {
ZZn=7.787 * ZZn + 0.13793103;
} else {
ZZn=Math.pow(ZZn, 0.3333333333333333);
}var LStar=116.0 * YYn - 16.0;
var aStar=500.0 * (XXn - YYn);
var bStar=200.0 * (YYn - ZZn);
LStar *= 2.55;
if (aStar < 0.0 ) {
aStar += 256.0;
}if (bStar < 0.0 ) {
bStar += 256.0;
}result[0]=p$1.clamp2$F.apply(this, [LStar]);
result[1]=p$1.clamp2$F.apply(this, [aStar]);
result[2]=p$1.clamp2$F.apply(this, [bStar]);
});

Clazz.newMeth(C$, 'toRGB$F$F$F$FA', function (x0, x1, x2, rgb) {
var LStar=x0 * 100.0 / 255.0;
var aStar=(x1 > 128.0 ) ? (x1 - 256.0) : x1;
var bStar=(x2 > 128.0 ) ? (x2 - 256.0) : x2;
var YYn;
var fY;
if (LStar < 8.0 ) {
YYn=LStar / 903.3;
fY=7.787 * YYn + 0.13793103;
} else {
var YYn_cubeRoot=(LStar + 16.0) / 116.0;
YYn=YYn_cubeRoot * YYn_cubeRoot * YYn_cubeRoot ;
fY=Math.pow(YYn, 0.3333333333333333);
}var Y=YYn * 100.0;
var fX=fY + (aStar / 500.0);
var X;
if (fX <= C$.THRESHOLD ) {
X=95.047 * (fX - 0.13793103) / 7.787;
} else {
X=95.047 * fX * fX * fX ;
}var fZ=fY - bStar / 200.0;
var Z;
if (fZ <= C$.THRESHOLD ) {
Z=108.883 * (fZ - 0.13793103) / 7.787;
} else {
Z=108.883 * fZ * fZ * fZ ;
}var R=3.240479 * X - 1.53715 * Y - 0.498535 * Z;
var G=-0.969256 * X + 1.875992 * Y + 0.041556 * Z;
var B=0.055648 * X - 0.204043 * Y + 1.057311 * Z;
rgb[0]=p$1.clamp$F.apply(this, [R]);
rgb[1]=p$1.clamp$F.apply(this, [G]);
rgb[2]=p$1.clamp$F.apply(this, [B]);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:19 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
