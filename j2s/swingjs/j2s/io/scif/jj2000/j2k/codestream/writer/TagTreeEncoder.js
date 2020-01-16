(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.codestream.writer"),p$1={},I$=[[0,'io.scif.jj2000.j2k.util.ArrayUtil']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TagTreeEncoder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['saved'],'I',['w','h','lvls'],'O',['treeV','int[][]','+treeS','+treeVbak','+treeSbak']]]

Clazz.newMeth(C$, 'c$$I$I', function (h, w) {
;C$.$init$.apply(this);
var k;
if (w < 0 || h < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}p$1.init$I$I.apply(this, [w, h]);
for (k=this.treeV.length - 1; k >= 0; k--) {
$I$(1).intArraySet$IA$I(this.treeV[k], 2147483647);
}
}, 1);

Clazz.newMeth(C$, 'c$$I$I$IA', function (h, w, val) {
;C$.$init$.apply(this);
var k;
if (w < 0 || h < 0  || val.length < w * h ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}p$1.init$I$I.apply(this, [w, h]);
for (k=w * h - 1; k >= 0; k--) {
this.treeV[0][k]=val[k];
}
p$1.recalcTreeV.apply(this, []);
}, 1);

Clazz.newMeth(C$, 'getWidth$', function () {
return this.w;
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.h;
});

Clazz.newMeth(C$, 'init$I$I', function (w, h) {
var i;
this.w=w;
this.h=h;
if (w == 0 || h == 0 ) {
this.lvls=0;
} else {
this.lvls=1;
while (h != 1 || w != 1 ){
w=(w + 1) >> 1;
h=(h + 1) >> 1;
this.lvls++;
}
}this.treeV=Clazz.array(Integer.TYPE, [this.lvls, null]);
this.treeS=Clazz.array(Integer.TYPE, [this.lvls, null]);
w=this.w;
h=this.h;
for (i=0; i < this.lvls; i++) {
this.treeV[i]=Clazz.array(Integer.TYPE, [h * w]);
this.treeS[i]=Clazz.array(Integer.TYPE, [h * w]);
w=(w + 1) >> 1;
h=(h + 1) >> 1;
}
}, p$1);

Clazz.newMeth(C$, 'recalcTreeV', function () {
var m;
var n;
var bi;
var lw;
var tm1;
var tm2;
var lh;
var k;
for (k=0; k < this.lvls - 1; k++) {
lw=(this.w + (1 << k) - 1) >> k;
lh=(this.h + (1 << k) - 1) >> k;
for (m=((lh >> 1) << 1) - 2; m >= 0; m-=2) {
for (n=((lw >> 1) << 1) - 2; n >= 0; n-=2) {
bi=m * lw + n;
tm1=(this.treeV[k][bi] < this.treeV[k][bi + 1]) ? this.treeV[k][bi] : this.treeV[k][bi + 1];
tm2=(this.treeV[k][bi + lw] < this.treeV[k][bi + lw + 1 ]) ? this.treeV[k][bi + lw] : this.treeV[k][bi + lw + 1 ];
this.treeV[k + 1][(m >> 1) * ((lw + 1) >> 1) + (n >> 1)]=tm1 < tm2 ? tm1 : tm2;
}
if (lw % 2 != 0) {
n=((lw >> 1) << 1);
bi=m * lw + n;
this.treeV[k + 1][(m >> 1) * ((lw + 1) >> 1) + (n >> 1)]=(this.treeV[k][bi] < this.treeV[k][bi + lw]) ? this.treeV[k][bi] : this.treeV[k][bi + lw];
}}
if (lh % 2 != 0) {
m=((lh >> 1) << 1);
for (n=((lw >> 1) << 1) - 2; n >= 0; n-=2) {
bi=m * lw + n;
this.treeV[k + 1][(m >> 1) * ((lw + 1) >> 1) + (n >> 1)]=(this.treeV[k][bi] < this.treeV[k][bi + 1]) ? this.treeV[k][bi] : this.treeV[k][bi + 1];
}
if (lw % 2 != 0) {
n=((lw >> 1) << 1);
this.treeV[k + 1][(m >> 1) * ((lw + 1) >> 1) + (n >> 1)]=this.treeV[k][m * lw + n];
}}}
}, p$1);

Clazz.newMeth(C$, 'setValue$I$I$I', function (m, n, v) {
var k;
var idx;
if (this.lvls == 0 || n < 0  || n >= this.w  || v < this.treeS[this.lvls - 1][0]  || this.treeV[0][m * this.w + n] < this.treeS[this.lvls - 1][0] ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}this.treeV[0][m * this.w + n]=v;
for (k=1; k < this.lvls; k++) {
idx=(m >> k) * ((this.w + (1 << k) - 1) >> k) + (n >> k);
if (v < this.treeV[k][idx]) {
this.treeV[k][idx]=v;
} else {
break;
}}
});

Clazz.newMeth(C$, 'setValues$IA', function (val) {
var i;
var maxt;
if (this.lvls == 0) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}maxt=this.treeS[this.lvls - 1][0];
for (i=this.w * this.h - 1; i >= 0; i--) {
if ((this.treeV[0][i] < maxt || val[i] < maxt ) && this.treeV[0][i] != val[i] ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}this.treeV[0][i]=val[i];
}
p$1.recalcTreeV.apply(this, []);
});

Clazz.newMeth(C$, 'encode$I$I$I$io_scif_jj2000_j2k_codestream_writer_BitOutputBuffer', function (m, n, t, out) {
var k;
var ts;
var idx;
var tmin;
if (m >= this.h || n >= this.w  || t < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}k=this.lvls - 1;
tmin=this.treeS[k][0];
while (true){
idx=(m >> k) * ((this.w + (1 << k) - 1) >> k) + (n >> k);
ts=this.treeS[k][idx];
if (ts < tmin) {
ts=tmin;
}while (t > ts){
if (this.treeV[k][idx] > ts) {
out.writeBit$I(0);
} else if (this.treeV[k][idx] == ts) {
out.writeBit$I(1);
} else {
ts=t;
break;
}ts++;
}
this.treeS[k][idx]=ts;
if (k > 0) {
tmin=ts < this.treeV[k][idx] ? ts : this.treeV[k][idx];
k--;
} else {
return;
}}
});

Clazz.newMeth(C$, 'save$', function () {
var k;
var i;
if (this.treeVbak == null ) {
this.treeVbak=Clazz.array(Integer.TYPE, [this.lvls, null]);
this.treeSbak=Clazz.array(Integer.TYPE, [this.lvls, null]);
for (k=this.lvls - 1; k >= 0; k--) {
this.treeVbak[k]=Clazz.array(Integer.TYPE, [this.treeV[k].length]);
this.treeSbak[k]=Clazz.array(Integer.TYPE, [this.treeV[k].length]);
}
}for (k=this.treeV.length - 1; k >= 0; k--) {
System.arraycopy$O$I$O$I$I(this.treeV[k], 0, this.treeVbak[k], 0, this.treeV[k].length);
System.arraycopy$O$I$O$I$I(this.treeS[k], 0, this.treeSbak[k], 0, this.treeS[k].length);
}
this.saved=true;
});

Clazz.newMeth(C$, 'restore$', function () {
var k;
var i;
if (!this.saved) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}for (k=this.lvls - 1; k >= 0; k--) {
System.arraycopy$O$I$O$I$I(this.treeVbak[k], 0, this.treeV[k], 0, this.treeV[k].length);
System.arraycopy$O$I$O$I$I(this.treeSbak[k], 0, this.treeS[k], 0, this.treeS[k].length);
}
});

Clazz.newMeth(C$, 'reset$', function () {
var k;
for (k=this.lvls - 1; k >= 0; k--) {
$I$(1).intArraySet$IA$I(this.treeV[k], 2147483647);
$I$(1).intArraySet$IA$I(this.treeS[k], 0);
}
this.saved=false;
});

Clazz.newMeth(C$, 'reset$IA', function (val) {
var k;
for (k=this.w * this.h - 1; k >= 0; k--) {
this.treeV[0][k]=val[k];
}
p$1.recalcTreeV.apply(this, []);
for (k=this.lvls - 1; k >= 0; k--) {
$I$(1).intArraySet$IA$I(this.treeS[k], 0);
}
this.saved=false;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:15 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
