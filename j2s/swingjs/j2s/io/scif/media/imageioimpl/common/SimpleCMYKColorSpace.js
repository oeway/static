(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.common"),I$=[[0,'java.awt.color.ColorSpace']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "SimpleCMYKColorSpace", null, 'java.awt.color.ColorSpace');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.theInstance=null;
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['+csRGB']]
,['O',['theInstance','java.awt.color.ColorSpace']]]

Clazz.newMeth(C$, 'getInstance$', function () {
if (C$.theInstance == null ) {
C$.theInstance=Clazz.new_(C$);
}return C$.theInstance;
}, 1);

Clazz.newMeth(C$, 'c$', function () {
;C$.superclazz.c$$I$I.apply(this,[9, 4]);C$.$init$.apply(this);
this.csRGB=$I$(1).getInstance$I(1004);
}, 1);

Clazz.newMeth(C$, 'equals$O', function (o) {
return o != null  && Clazz.instanceOf(o, "io.scif.media.imageioimpl.common.SimpleCMYKColorSpace") ;
});

Clazz.newMeth(C$, 'toRGB$FA', function (colorvalue) {
var C=colorvalue[0];
var M=colorvalue[1];
var Y=colorvalue[2];
var K=colorvalue[3];
var K1=1.0 - K;
var rgbvalue=Clazz.array(Float.TYPE, -1, [K1 * (1.0 - C), K1 * (1.0 - M), K1 * (1.0 - Y)]);
for (var i=0; i < 3; i++) {
var v=rgbvalue[i];
if (v < 0.0 ) v=0.0;
if (v < 0.0031308 ) {
rgbvalue[i]=12.92 * v;
} else {
if (v > 1.0 ) v=1.0;
rgbvalue[i]=(1.055 * Math.pow(v, 0.4166666666666667) - 0.055);
}}
return rgbvalue;
});

Clazz.newMeth(C$, 'fromRGB$FA', function (rgbvalue) {
for (var i=0; i < 3; i++) {
if (rgbvalue[i] < 0.040449936 ) {
rgbvalue[i] /= 12.92;
} else {
rgbvalue[i]=(Math.pow((rgbvalue[i] + 0.055) / 1.055, 2.4));
}}
var C=1.0 - rgbvalue[0];
var M=1.0 - rgbvalue[1];
var Y=1.0 - rgbvalue[2];
var K=Math.min(C, Math.min(M, Y));
if (K != 1.0 ) {
var K1=1.0 - K;
C=(C - K) / K1;
M=(M - K) / K1;
Y=(Y - K) / K1;
} else {
C=M=Y=0.0;
}return Clazz.array(Float.TYPE, -1, [C, M, Y, K]);
});

Clazz.newMeth(C$, 'toCIEXYZ$FA', function (colorvalue) {
return this.csRGB.toCIEXYZ$FA(this.toRGB$FA(colorvalue));
});

Clazz.newMeth(C$, 'fromCIEXYZ$FA', function (xyzvalue) {
return this.fromRGB$FA(this.csRGB.fromCIEXYZ$FA(xyzvalue));
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:18 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
