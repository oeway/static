(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.wavelet"),I$=[[0,'Error']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Subband");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.numCb=null;
this.sbandIdx=0;
}, 1);

C$.$fields$=[['Z',['isNode'],'I',['orientation','level','resLvl','anGainExp','sbandIdx','ulcx','ulcy','ulx','uly','w','h','nomCBlkW','nomCBlkH'],'O',['numCb','java.awt.Point']]]

Clazz.newMeth(C$, 'initChilds$', function () {
var subb_LL=this.getLL$();
var subb_HL=this.getHL$();
var subb_LH=this.getLH$();
var subb_HH=this.getHH$();
subb_LL.level=this.level + 1;
subb_LL.ulcx=(this.ulcx + 1) >> 1;
subb_LL.ulcy=(this.ulcy + 1) >> 1;
subb_LL.ulx=this.ulx;
subb_LL.uly=this.uly;
subb_LL.w=((this.ulcx + this.w + 1 ) >> 1) - subb_LL.ulcx;
subb_LL.h=((this.ulcy + this.h + 1 ) >> 1) - subb_LL.ulcy;
subb_LL.resLvl=(this.orientation == 0) ? this.resLvl - 1 : this.resLvl;
subb_LL.anGainExp=this.anGainExp;
subb_LL.sbandIdx=(this.sbandIdx << 2);
subb_HL.orientation=1;
subb_HL.level=subb_LL.level;
subb_HL.ulcx=this.ulcx >> 1;
subb_HL.ulcy=subb_LL.ulcy;
subb_HL.ulx=this.ulx + subb_LL.w;
subb_HL.uly=this.uly;
subb_HL.w=((this.ulcx + this.w) >> 1) - subb_HL.ulcx;
subb_HL.h=subb_LL.h;
subb_HL.resLvl=this.resLvl;
subb_HL.anGainExp=this.anGainExp + 1;
subb_HL.sbandIdx=(this.sbandIdx << 2) + 1;
subb_LH.orientation=2;
subb_LH.level=subb_LL.level;
subb_LH.ulcx=subb_LL.ulcx;
subb_LH.ulcy=this.ulcy >> 1;
subb_LH.ulx=this.ulx;
subb_LH.uly=this.uly + subb_LL.h;
subb_LH.w=subb_LL.w;
subb_LH.h=((this.ulcy + this.h) >> 1) - subb_LH.ulcy;
subb_LH.resLvl=this.resLvl;
subb_LH.anGainExp=this.anGainExp + 1;
subb_LH.sbandIdx=(this.sbandIdx << 2) + 2;
subb_HH.orientation=3;
subb_HH.level=subb_LL.level;
subb_HH.ulcx=subb_HL.ulcx;
subb_HH.ulcy=subb_LH.ulcy;
subb_HH.ulx=subb_HL.ulx;
subb_HH.uly=subb_LH.uly;
subb_HH.w=subb_HL.w;
subb_HH.h=subb_LH.h;
subb_HH.resLvl=this.resLvl;
subb_HH.anGainExp=this.anGainExp + 2;
subb_HH.sbandIdx=(this.sbandIdx << 2) + 3;
});

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$I$io_scif_jj2000_j2k_wavelet_WaveletFilterA$io_scif_jj2000_j2k_wavelet_WaveletFilterA', function (w, h, ulcx, ulcy, lvls, hfilters, vfilters) {
;C$.$init$.apply(this);
var i;
var hi;
var vi;
var cur;
this.w=w;
this.h=h;
this.ulcx=ulcx;
this.ulcy=ulcy;
this.resLvl=lvls;
cur=this;
for (i=0; i < lvls; i++) {
hi=(cur.resLvl <= hfilters.length) ? cur.resLvl - 1 : hfilters.length - 1;
vi=(cur.resLvl <= vfilters.length) ? cur.resLvl - 1 : vfilters.length - 1;
cur=cur.split$io_scif_jj2000_j2k_wavelet_WaveletFilter$io_scif_jj2000_j2k_wavelet_WaveletFilter(hfilters[hi], vfilters[vi]);
}
}, 1);

Clazz.newMeth(C$, 'nextSubband$', function () {
var sb;
if (this.isNode) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}switch (this.orientation) {
case 0:
sb=this.getParent$();
if (sb == null  || sb.resLvl != this.resLvl ) {
return null;
} else {
return sb.getHL$();
}case 1:
return this.getParent$().getLH$();
case 2:
return this.getParent$().getHH$();
case 3:
sb=this;
while (sb.orientation == 3){
sb=sb.getParent$();
}
switch (sb.orientation) {
case 0:
sb=sb.getParent$();
if (sb == null  || sb.resLvl != this.resLvl ) {
return null;
} else {
sb=sb.getHL$();
}break;
case 1:
sb=sb.getParent$().getLH$();
break;
case 2:
sb=sb.getParent$().getHH$();
break;
default:
throw Clazz.new_($I$(1,1).c$$S,["You have found a bug in JJ2000"]);
}
while (sb.isNode){
sb=sb.getLL$();
}
return sb;
default:
throw Clazz.new_($I$(1,1).c$$S,["You have found a bug in JJ2000"]);
}
});

Clazz.newMeth(C$, 'getNextResLevel$', function () {
var sb;
if (this.level == 0) {
return null;
}sb=this;
do {
sb=sb.getParent$();
if (sb == null ) {
return null;
}} while (sb.resLvl == this.resLvl);
sb=sb.getHL$();
while (sb.isNode){
sb=sb.getLL$();
}
return sb;
});

Clazz.newMeth(C$, 'getSubbandByIdx$I$I', function (rl, sbi) {
var sb=this;
if (rl > sb.resLvl || rl < 0 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Resolution level index out of range"]);
}if (rl == sb.resLvl && sbi == sb.sbandIdx ) return sb;
if (sb.sbandIdx != 0) sb=sb.getParent$();
while (sb.resLvl > rl)sb=sb.getLL$();

while (sb.resLvl < rl)sb=sb.getParent$();

switch (sbi) {
case 0:
default:
return sb;
case 1:
return sb.getHL$();
case 2:
return sb.getLH$();
case 3:
return sb.getHH$();
}
});

Clazz.newMeth(C$, 'getSubband$I$I', function (x, y) {
var cur;
var hhs;
if (x < this.ulx || y < this.uly  || x >= this.ulx + this.w  || y >= this.uly + this.h ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}cur=this;
while (cur.isNode){
hhs=cur.getHH$();
if (x < hhs.ulx) {
if (y < hhs.uly) {
cur=cur.getLL$();
} else {
cur=cur.getLH$();
}} else {
if (y < hhs.uly) {
cur=cur.getHL$();
} else {
cur=cur.getHH$();
}}}
return cur;
});

Clazz.newMeth(C$, 'toString', function () {
var string="w=" + this.w + ", h=" + this.h + ", ulx=" + this.ulx + ", uly=" + this.uly + ", ulcx= " + this.ulcx + ", ulcy=" + this.ulcy + ", idx=" + this.sbandIdx + "\norient=" + this.orientation + ", node=" + this.isNode + ", level=" + this.level + ", resLvl=" + this.resLvl + ", nomCBlkW=" + this.nomCBlkW + ", nomCBlkH=" + this.nomCBlkH ;
return string;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
