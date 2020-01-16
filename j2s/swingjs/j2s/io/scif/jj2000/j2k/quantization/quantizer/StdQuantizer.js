(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.quantization.quantizer"),p$1={},I$=[[0,'io.scif.jj2000.j2k.wavelet.analysis.CBlkWTDataInt']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StdQuantizer", null, 'io.scif.jj2000.j2k.quantization.quantizer.Quantizer');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.log2=Math.log(2);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['qts','io.scif.jj2000.j2k.quantization.QuantTypeSpec','qsss','io.scif.jj2000.j2k.quantization.QuantStepSizeSpec','gbs','io.scif.jj2000.j2k.quantization.GuardBitsSpec','infblk','io.scif.jj2000.j2k.wavelet.analysis.CBlkWTDataFloat']]
,['D',['log2']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTDataSrc$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava', function (src, wp) {
;C$.superclazz.c$$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTDataSrc.apply(this,[src]);C$.$init$.apply(this);
this.qts=wp.getQuantizationType$();
this.qsss=wp.getQuantizationStep$();
this.gbs=wp.getGuardBits$();
}, 1);

Clazz.newMeth(C$, 'getQuantTypeSpec$', function () {
return this.qts;
});

Clazz.newMeth(C$, 'getNumGuardBits$I$I', function (t, c) {
return (this.gbs.getTileCompVal$I$I(t, c)).intValue$();
});

Clazz.newMeth(C$, 'isReversible$I$I', function (t, c) {
return this.qts.isReversible$I$I(t, c);
});

Clazz.newMeth(C$, 'isDerived$I$I', function (t, c) {
return this.qts.isDerived$I$I(t, c);
});

Clazz.newMeth(C$, 'getNextCodeBlock$I$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTData', function (c, cblk) {
return this.getNextInternCodeBlock$I$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTData(c, cblk);
});

Clazz.newMeth(C$, 'getNextInternCodeBlock$I$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTData', function (c, cblk) {
var k;
var j;
var tmp;
var shiftBits;
var jmin;
var w;
var h;
var outarr;
var infarr=null;
var infblk;
var invstep;
var intq;
var sb;
var stepUDR;
var g=(this.gbs.getTileCompVal$I$I(this.tIdx, c)).intValue$();
intq=(this.src.getDataType$I$I(this.tIdx, c) == 3);
if (cblk == null ) {
cblk=Clazz.new_($I$(1,1));
}infblk=this.infblk;
if (intq) {
cblk=this.src.getNextCodeBlock$I$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTData(c, cblk);
if (cblk == null ) {
return null;
}outarr=cblk.getData$();
} else {
infblk=this.src.getNextInternCodeBlock$I$io_scif_jj2000_j2k_wavelet_analysis_CBlkWTData(c, infblk);
if (infblk == null ) {
this.infblk.setData$O(null);
return null;
}this.infblk=infblk;
infarr=infblk.getData$();
outarr=cblk.getData$();
if (outarr == null  || outarr.length < infblk.w * infblk.h ) {
outarr=Clazz.array(Integer.TYPE, [infblk.w * infblk.h]);
cblk.setData$O(outarr);
}cblk.m=infblk.m;
cblk.n=infblk.n;
cblk.sb=infblk.sb;
cblk.ulx=infblk.ulx;
cblk.uly=infblk.uly;
cblk.w=infblk.w;
cblk.h=infblk.h;
cblk.wmseScaling=infblk.wmseScaling;
cblk.offset=0;
cblk.scanw=cblk.w;
}w=cblk.w;
h=cblk.h;
sb=cblk.sb;
if (this.isReversible$I$I(this.tIdx, c)) {
cblk.magbits=g - 1 + this.src.getNomRangeBits$I(c) + sb.anGainExp;
shiftBits=31 - cblk.magbits;
cblk.convertFactor=(1 << shiftBits);
for (j=w * h - 1; j >= 0; j--) {
tmp=(outarr[j] << shiftBits);
outarr[j]=((tmp < 0) ? (-2147483648) | (-tmp) : tmp);
}
} else {
var baseStep=(this.qsss.getTileCompVal$I$I(this.tIdx, c)).floatValue$();
if (this.isDerived$I$I(this.tIdx, c)) {
cblk.magbits=g - 1 + sb.level - (Math.floor(Math.log(baseStep) / C$.log2)|0);
stepUDR=baseStep / (1 << sb.level);
} else {
cblk.magbits=g - 1 - (Math.floor(Math.log(baseStep / (sb.l2Norm * (1 << sb.anGainExp))) / C$.log2)|0) ;
stepUDR=baseStep / (sb.l2Norm * (1 << sb.anGainExp));
}shiftBits=31 - cblk.magbits;
stepUDR=C$.convertFromExpMantissa$I(C$.convertToExpMantissa$F(stepUDR));
invstep=1.0 / ((1 << (this.src.getNomRangeBits$I(c) + sb.anGainExp)) * stepUDR);
invstep *= (1 << (shiftBits - this.src.getFixedPoint$I(c)));
cblk.convertFactor=invstep;
cblk.stepSize=((1 << (this.src.getNomRangeBits$I(c) + sb.anGainExp)) * stepUDR);
if (intq) {
for (j=w * h - 1; j >= 0; j--) {
tmp=((outarr[j] * invstep)|0);
outarr[j]=((tmp < 0) ? (-2147483648) | (-tmp) : tmp);
}
} else {
for (j=w * h - 1, k=infblk.offset + (h - 1) * infblk.scanw + w - 1, jmin=w * (h - 1); j >= 0; jmin-=w) {
for (; j >= jmin; k--, j--) {
tmp=((infarr[k] * invstep)|0);
outarr[j]=((tmp < 0) ? (-2147483648) | (-tmp) : tmp);
}
k-=infblk.scanw - w;
}
}}return cblk;
});

Clazz.newMeth(C$, 'calcSbParams$io_scif_jj2000_j2k_wavelet_analysis_SubbandAn$I', function (sb, c) {
var baseStep;
if (sb.stepWMSE > 0.0 ) return;
if (!sb.isNode) {
if (this.isReversible$I$I(this.tIdx, c)) {
sb.stepWMSE=Math.pow(2, -(this.src.getNomRangeBits$I(c) << 1)) * sb.l2Norm * sb.l2Norm ;
} else {
baseStep=(this.qsss.getTileCompVal$I$I(this.tIdx, c)).floatValue$();
if (this.isDerived$I$I(this.tIdx, c)) {
sb.stepWMSE=baseStep * baseStep * Math.pow(2, (sb.anGainExp - sb.level) << 1) * sb.l2Norm * sb.l2Norm ;
} else {
sb.stepWMSE=baseStep * baseStep;
}}} else {
this.calcSbParams$io_scif_jj2000_j2k_wavelet_analysis_SubbandAn$I(sb.getLL$(), c);
this.calcSbParams$io_scif_jj2000_j2k_wavelet_analysis_SubbandAn$I(sb.getHL$(), c);
this.calcSbParams$io_scif_jj2000_j2k_wavelet_analysis_SubbandAn$I(sb.getLH$(), c);
this.calcSbParams$io_scif_jj2000_j2k_wavelet_analysis_SubbandAn$I(sb.getHH$(), c);
sb.stepWMSE=1.0;
}});

Clazz.newMeth(C$, 'convertToExpMantissa$F', function (step) {
var exp;
exp=(Math.ceil(-Math.log(step) / C$.log2)|0);
if (exp > 31) {
return (63488);
}return (exp << 11) | ((((-step * (-1 << exp) - 1.0) * (2048) + 0.5)|0));
}, 1);

Clazz.newMeth(C$, 'convertFromExpMantissa$I', function (ems) {
return (-1.0 - ((ems & 2047)) / (2048.0)) / (-1 << ((ems >> 11) & 31));
}, 1);

Clazz.newMeth(C$, 'getMaxMagBits$I', function (c) {
var sb=this.getAnSubbandTree$I$I(this.tIdx, c);
if (this.isReversible$I$I(this.tIdx, c)) {
return p$1.getMaxMagBitsRev$io_scif_jj2000_j2k_wavelet_Subband$I.apply(this, [sb, c]);
} else {
if (this.isDerived$I$I(this.tIdx, c)) {
return p$1.getMaxMagBitsDerived$io_scif_jj2000_j2k_wavelet_Subband$I$I.apply(this, [sb, this.tIdx, c]);
} else {
return p$1.getMaxMagBitsExpounded$io_scif_jj2000_j2k_wavelet_Subband$I$I.apply(this, [sb, this.tIdx, c]);
}}});

Clazz.newMeth(C$, 'getMaxMagBitsRev$io_scif_jj2000_j2k_wavelet_Subband$I', function (sb, c) {
var tmp;
var max=0;
var g=(this.gbs.getTileCompVal$I$I(this.tIdx, c)).intValue$();
if (!sb.isNode) return g - 1 + this.src.getNomRangeBits$I(c) + sb.anGainExp;
max=p$1.getMaxMagBitsRev$io_scif_jj2000_j2k_wavelet_Subband$I.apply(this, [sb.getLL$(), c]);
tmp=p$1.getMaxMagBitsRev$io_scif_jj2000_j2k_wavelet_Subband$I.apply(this, [sb.getLH$(), c]);
if (tmp > max) max=tmp;
tmp=p$1.getMaxMagBitsRev$io_scif_jj2000_j2k_wavelet_Subband$I.apply(this, [sb.getHL$(), c]);
if (tmp > max) max=tmp;
tmp=p$1.getMaxMagBitsRev$io_scif_jj2000_j2k_wavelet_Subband$I.apply(this, [sb.getHH$(), c]);
if (tmp > max) max=tmp;
return max;
}, p$1);

Clazz.newMeth(C$, 'getMaxMagBitsDerived$io_scif_jj2000_j2k_wavelet_Subband$I$I', function (sb, t, c) {
var tmp;
var max=0;
var g=(this.gbs.getTileCompVal$I$I(t, c)).intValue$();
if (!sb.isNode) {
var baseStep=(this.qsss.getTileCompVal$I$I(t, c)).floatValue$();
return g - 1 + sb.level - (Math.floor(Math.log(baseStep) / C$.log2)|0);
}max=p$1.getMaxMagBitsDerived$io_scif_jj2000_j2k_wavelet_Subband$I$I.apply(this, [sb.getLL$(), t, c]);
tmp=p$1.getMaxMagBitsDerived$io_scif_jj2000_j2k_wavelet_Subband$I$I.apply(this, [sb.getLH$(), t, c]);
if (tmp > max) max=tmp;
tmp=p$1.getMaxMagBitsDerived$io_scif_jj2000_j2k_wavelet_Subband$I$I.apply(this, [sb.getHL$(), t, c]);
if (tmp > max) max=tmp;
tmp=p$1.getMaxMagBitsDerived$io_scif_jj2000_j2k_wavelet_Subband$I$I.apply(this, [sb.getHH$(), t, c]);
if (tmp > max) max=tmp;
return max;
}, p$1);

Clazz.newMeth(C$, 'getMaxMagBitsExpounded$io_scif_jj2000_j2k_wavelet_Subband$I$I', function (sb, t, c) {
var tmp;
var max=0;
var g=(this.gbs.getTileCompVal$I$I(t, c)).intValue$();
if (!sb.isNode) {
var baseStep=(this.qsss.getTileCompVal$I$I(t, c)).floatValue$();
return g - 1 - (Math.floor(Math.log(baseStep / ((sb).l2Norm * (1 << sb.anGainExp))) / C$.log2)|0) ;
}max=p$1.getMaxMagBitsExpounded$io_scif_jj2000_j2k_wavelet_Subband$I$I.apply(this, [sb.getLL$(), t, c]);
tmp=p$1.getMaxMagBitsExpounded$io_scif_jj2000_j2k_wavelet_Subband$I$I.apply(this, [sb.getLH$(), t, c]);
if (tmp > max) max=tmp;
tmp=p$1.getMaxMagBitsExpounded$io_scif_jj2000_j2k_wavelet_Subband$I$I.apply(this, [sb.getHL$(), t, c]);
if (tmp > max) max=tmp;
tmp=p$1.getMaxMagBitsExpounded$io_scif_jj2000_j2k_wavelet_Subband$I$I.apply(this, [sb.getHH$(), t, c]);
if (tmp > max) max=tmp;
return max;
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:16 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
