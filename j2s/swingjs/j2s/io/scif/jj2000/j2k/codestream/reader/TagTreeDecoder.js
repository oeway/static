(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.codestream.reader"),I$=[[0,'io.scif.jj2000.j2k.util.ArrayUtil']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TagTreeDecoder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['w','h','lvls'],'O',['treeV','int[][]','+treeS']]]

Clazz.newMeth(C$, 'c$$I$I', function (h, w) {
;C$.$init$.apply(this);
var i;
if (w < 0 || h < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}this.w=w;
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
$I$(1).intArraySet$IA$I(this.treeV[i], 2147483647);
this.treeS[i]=Clazz.array(Integer.TYPE, [h * w]);
w=(w + 1) >> 1;
h=(h + 1) >> 1;
}
}, 1);

Clazz.newMeth(C$, 'getWidth$', function () {
return this.w;
});

Clazz.newMeth(C$, 'getHeight$', function () {
return this.h;
});

Clazz.newMeth(C$, 'update$I$I$I$io_scif_jj2000_j2k_codestream_reader_PktHeaderBitReader', function (m, n, t, $in) {
var k;
var tmin;
var idx;
var ts;
var tv;
if (m >= this.h || n >= this.w  || t < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}k=this.lvls - 1;
tmin=this.treeS[k][0];
idx=(m >> k) * ((this.w + (1 << k) - 1) >> k) + (n >> k);
while (true){
ts=this.treeS[k][idx];
tv=this.treeV[k][idx];
if (ts < tmin) {
ts=tmin;
}while (t > ts){
if (tv >= ts) {
if ($in.readBit$() == 0) {
ts++;
} else {
tv=ts++;
}} else {
ts=t;
break;
}}
this.treeS[k][idx]=ts;
this.treeV[k][idx]=tv;
if (k > 0) {
tmin=ts < tv ? ts : tv;
k--;
idx=(m >> k) * ((this.w + (1 << k) - 1) >> k) + (n >> k);
} else {
return tv;
}}
});

Clazz.newMeth(C$, 'getValue$I$I', function (m, n) {
if (m >= this.h || n >= this.w ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}return this.treeV[0][m * this.w + n];
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:15 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
