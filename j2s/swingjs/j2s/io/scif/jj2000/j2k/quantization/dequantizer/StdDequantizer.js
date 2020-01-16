(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.quantization.dequantizer"),I$=[[0,'io.scif.jj2000.j2k.image.DataBlkFloat']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StdDequantizer", null, 'io.scif.jj2000.j2k.quantization.dequantizer.Dequantizer');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['outdtype'],'O',['qts','io.scif.jj2000.j2k.quantization.QuantTypeSpec','qsss','io.scif.jj2000.j2k.quantization.QuantStepSizeSpec','gbs','io.scif.jj2000.j2k.quantization.GuardBitsSpec','params','io.scif.jj2000.j2k.quantization.dequantizer.StdDequantizerParams','inblk','io.scif.jj2000.j2k.image.DataBlkInt']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_quantization_dequantizer_CBlkQuantDataSrcDec$IA$io_scif_jj2000_j2k_decoder_DecoderSpecs', function (src, utrb, decSpec) {
;C$.superclazz.c$$io_scif_jj2000_j2k_quantization_dequantizer_CBlkQuantDataSrcDec$IA$io_scif_jj2000_j2k_decoder_DecoderSpecs.apply(this,[src, utrb, decSpec]);C$.$init$.apply(this);
if (utrb.length != src.getNumComps$()) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Invalid rb argument"]);
}this.qsss=decSpec.qsss;
this.qts=decSpec.qts;
this.gbs=decSpec.gbs;
}, 1);

Clazz.newMeth(C$, 'getFixedPoint$I', function (c) {
return 0;
});

Clazz.newMeth(C$, 'getCodeBlock$I$I$I$io_scif_jj2000_j2k_wavelet_synthesis_SubbandSyn$io_scif_jj2000_j2k_image_DataBlk', function (c, m, n, sb, cblk) {
return this.getInternCodeBlock$I$I$I$io_scif_jj2000_j2k_wavelet_synthesis_SubbandSyn$io_scif_jj2000_j2k_image_DataBlk(c, m, n, sb, cblk);
});

Clazz.newMeth(C$, 'getInternCodeBlock$I$I$I$io_scif_jj2000_j2k_wavelet_synthesis_SubbandSyn$io_scif_jj2000_j2k_image_DataBlk', function (c, m, n, sb, cblk) {
var j;
var jmin;
var k;
var temp;
var step;
var shiftBits;
var magBits;
var outiarr;
var inarr;
var outfarr;
var w;
var h;
var reversible=this.qts.isReversible$I$I(this.tIdx, c);
var derived=this.qts.isDerived$I$I(this.tIdx, c);
var params=this.qsss.getTileCompVal$I$I(this.tIdx, c);
var G=(this.gbs.getTileCompVal$I$I(this.tIdx, c)).intValue$();
this.outdtype=cblk.getDataType$();
if (reversible && this.outdtype != 3 ) {
throw Clazz.new_(Clazz.load('IllegalArgumentException').c$$S,["Reversible quantizations must use int data"]);
}outiarr=null;
outfarr=null;
inarr=null;
switch (this.outdtype) {
case 3:
cblk=this.src.getCodeBlock$I$I$I$io_scif_jj2000_j2k_wavelet_synthesis_SubbandSyn$io_scif_jj2000_j2k_image_DataBlk(c, m, n, sb, cblk);
outiarr=cblk.getData$();
break;
case 4:
this.inblk=this.src.getInternCodeBlock$I$I$I$io_scif_jj2000_j2k_wavelet_synthesis_SubbandSyn$io_scif_jj2000_j2k_image_DataBlk(c, m, n, sb, this.inblk);
inarr=this.inblk.getDataInt$();
if (cblk == null ) {
cblk=Clazz.new_($I$(1,1));
}cblk.ulx=this.inblk.ulx;
cblk.uly=this.inblk.uly;
cblk.w=this.inblk.w;
cblk.h=this.inblk.h;
cblk.offset=0;
cblk.scanw=cblk.w;
cblk.progressive=this.inblk.progressive;
outfarr=cblk.getData$();
if (outfarr == null  || outfarr.length < cblk.w * cblk.h ) {
outfarr=Clazz.array(Float.TYPE, [cblk.w * cblk.h]);
cblk.setData$O(outfarr);
}break;
}
magBits=sb.magbits;
if (reversible) {
shiftBits=31 - magBits;
for (j=outiarr.length - 1; j >= 0; j--) {
temp=outiarr[j];
outiarr[j]=(temp >= 0) ? (temp >> shiftBits) : -((temp & 2147483647) >> shiftBits);
}
} else {
if (derived) {
var mrl=this.src.getSynSubbandTree$I$I(this.getTileIdx$(), c).resLvl;
step=params.nStep[0][0] * (1 << (this.rb[c] + sb.anGainExp + mrl  - sb.level));
} else {
step=params.nStep[sb.resLvl][sb.sbandIdx] * (1 << (this.rb[c] + sb.anGainExp));
}shiftBits=31 - magBits;
step /= (1 << shiftBits);
switch (this.outdtype) {
case 3:
for (j=outiarr.length - 1; j >= 0; j--) {
temp=outiarr[j];
outiarr[j]=(((((temp >= 0) ? temp : -(temp & 2147483647))) * step)|0);
}
break;
case 4:
w=cblk.w;
h=cblk.h;
for (j=w * h - 1, k=this.inblk.offset + (h - 1) * this.inblk.scanw + w - 1, jmin=w * (h - 1); j >= 0; jmin-=w) {
for (; j >= jmin; k--, j--) {
temp=inarr[k];
outfarr[j]=(((temp >= 0) ? temp : -(temp & 2147483647))) * step;
}
k-=this.inblk.scanw - w;
}
break;
}
}return cblk;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
