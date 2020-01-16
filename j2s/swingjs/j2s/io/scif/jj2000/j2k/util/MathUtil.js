(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.util"),I$=[[0,'Error']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MathUtil");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'log2$I', function (x) {
var y;
var v;
if (x <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["" + x + " <= 0" ]);
}v=x;
y=-1;
while (v > 0){
v>>=1;
y++;
}
return y;
}, 1);

Clazz.newMeth(C$, 'lcm$I$I', function (x1, x2) {
if (x1 <= 0 || x2 <= 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot compute the least common multiple of two numbers if one, at least,is negative."]);
}var max;
var min;
if (x1 > x2) {
max=x1;
min=x2;
} else {
max=x2;
min=x1;
}for (var i=1; i <= min; i++) {
if ((max * i) % min == 0) {
return i * max;
}}
throw Clazz.new_($I$(1,1).c$$S,["Cannot find the least common multiple of numbers " + x1 + " and " + x2 ]);
}, 1);

Clazz.newMeth(C$, 'lcm$IA', function (x) {
if (x.length < 2) {
throw Clazz.new_($I$(1,1).c$$S,["Do not use this method if there are less than two numbers."]);
}var tmp=C$.lcm$I$I(x[x.length - 1], x[x.length - 2]);
for (var i=x.length - 3; i >= 0; i--) {
if (x[i] <= 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot compute the least common multiple of several numbers where one, at least,is negative."]);
}tmp=C$.lcm$I$I(tmp, x[i]);
}
return tmp;
}, 1);

Clazz.newMeth(C$, 'gcd$I$I', function (x1, x2) {
if (x1 < 0 || x2 < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot compute the GCD if one integer is negative."]);
}var a;
var b;
var g;
var z;
if (x1 > x2) {
a=x1;
b=x2;
} else {
a=x2;
b=x1;
}if (b == 0) return 0;
g=b;
while (g != 0){
z=a % g;
a=g;
g=z;
}
return a;
}, 1);

Clazz.newMeth(C$, 'gcd$IA', function (x) {
if (x.length < 2) {
throw Clazz.new_($I$(1,1).c$$S,["Do not use this method if there are less than two numbers."]);
}var tmp=C$.gcd$I$I(x[x.length - 1], x[x.length - 2]);
for (var i=x.length - 3; i >= 0; i--) {
if (x[i] < 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Cannot compute the least common multiple of several numbers where one, at least,is negative."]);
}tmp=C$.gcd$I$I(tmp, x[i]);
}
return tmp;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
