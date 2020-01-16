(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.roi.encoder"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SubbandRectROIMask", null, 'io.scif.jj2000.j2k.roi.encoder.SubbandROIMask');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['ulxs','int[]','+ulys','+lrxs','+lrys']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_wavelet_Subband$IA$IA$IA$IA$I', function (sb, ulxs, ulys, lrxs, lrys, nr) {
;C$.superclazz.c$$I$I$I$I.apply(this,[sb.ulx, sb.uly, sb.w, sb.h]);C$.$init$.apply(this);
this.ulxs=ulxs;
this.ulys=ulys;
this.lrxs=lrxs;
this.lrys=lrys;
var r;
if (sb.isNode) {
this.isNode=true;
var horEvenLow=sb.ulcx % 2;
var verEvenLow=sb.ulcy % 2;
var hFilter=sb.getHorWFilter$();
var vFilter=sb.getVerWFilter$();
var hlnSup=hFilter.getSynLowNegSupport$();
var hhnSup=hFilter.getSynHighNegSupport$();
var hlpSup=hFilter.getSynLowPosSupport$();
var hhpSup=hFilter.getSynHighPosSupport$();
var vlnSup=vFilter.getSynLowNegSupport$();
var vhnSup=vFilter.getSynHighNegSupport$();
var vlpSup=vFilter.getSynLowPosSupport$();
var vhpSup=vFilter.getSynHighPosSupport$();
var x;
var y;
var lulxs=Clazz.array(Integer.TYPE, [nr]);
var lulys=Clazz.array(Integer.TYPE, [nr]);
var llrxs=Clazz.array(Integer.TYPE, [nr]);
var llrys=Clazz.array(Integer.TYPE, [nr]);
var hulxs=Clazz.array(Integer.TYPE, [nr]);
var hulys=Clazz.array(Integer.TYPE, [nr]);
var hlrxs=Clazz.array(Integer.TYPE, [nr]);
var hlrys=Clazz.array(Integer.TYPE, [nr]);
for (r=nr - 1; r >= 0; r--) {
x=ulxs[r];
if (horEvenLow == 0) {
lulxs[r]=((x + 1 - hlnSup)/2|0);
hulxs[r]=((x - hhnSup)/2|0);
} else {
lulxs[r]=((x - hlnSup)/2|0);
hulxs[r]=((x + 1 - hhnSup)/2|0);
}y=ulys[r];
if (verEvenLow == 0) {
lulys[r]=((y + 1 - vlnSup)/2|0);
hulys[r]=((y - vhnSup)/2|0);
} else {
lulys[r]=((y - vlnSup)/2|0);
hulys[r]=((y + 1 - vhnSup)/2|0);
}x=lrxs[r];
if (horEvenLow == 0) {
llrxs[r]=((x + hlpSup)/2|0);
hlrxs[r]=((x - 1 + hhpSup)/2|0);
} else {
llrxs[r]=((x - 1 + hlpSup)/2|0);
hlrxs[r]=((x + hhpSup)/2|0);
}y=lrys[r];
if (verEvenLow == 0) {
llrys[r]=((y + vlpSup)/2|0);
hlrys[r]=((y - 1 + vhpSup)/2|0);
} else {
llrys[r]=((y - 1 + vlpSup)/2|0);
hlrys[r]=((y + vhpSup)/2|0);
}}
this.hh=Clazz.new_(C$.c$$io_scif_jj2000_j2k_wavelet_Subband$IA$IA$IA$IA$I,[sb.getHH$(), hulxs, hulys, hlrxs, hlrys, nr]);
this.lh=Clazz.new_(C$.c$$io_scif_jj2000_j2k_wavelet_Subband$IA$IA$IA$IA$I,[sb.getLH$(), lulxs, hulys, llrxs, hlrys, nr]);
this.hl=Clazz.new_(C$.c$$io_scif_jj2000_j2k_wavelet_Subband$IA$IA$IA$IA$I,[sb.getHL$(), hulxs, lulys, hlrxs, llrys, nr]);
this.ll=Clazz.new_(C$.c$$io_scif_jj2000_j2k_wavelet_Subband$IA$IA$IA$IA$I,[sb.getLL$(), lulxs, lulys, llrxs, llrys, nr]);
}}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
