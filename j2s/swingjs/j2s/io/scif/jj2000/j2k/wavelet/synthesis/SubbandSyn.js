(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.wavelet.synthesis"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "SubbandSyn", null, 'io.scif.jj2000.j2k.wavelet.Subband');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.magbits=0;
}, 1);

C$.$fields$=[['I',['magbits'],'O',['parent','io.scif.jj2000.j2k.wavelet.synthesis.SubbandSyn','+subb_LL','+subb_HL','+subb_LH','+subb_HH','hFilter','io.scif.jj2000.j2k.wavelet.synthesis.SynWTFilter','+vFilter']]]

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);

Clazz.newMeth(C$, 'c$$I$I$I$I$I$io_scif_jj2000_j2k_wavelet_WaveletFilterA$io_scif_jj2000_j2k_wavelet_WaveletFilterA', function (w, h, ulcx, ulcy, lvls, hfilters, vfilters) {
;C$.superclazz.c$$I$I$I$I$I$io_scif_jj2000_j2k_wavelet_WaveletFilterA$io_scif_jj2000_j2k_wavelet_WaveletFilterA.apply(this,[w, h, ulcx, ulcy, lvls, hfilters, vfilters]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'getParent$', function () {
return this.parent;
});

Clazz.newMeth(C$, 'getLL$', function () {
return this.subb_LL;
});

Clazz.newMeth(C$, 'getHL$', function () {
return this.subb_HL;
});

Clazz.newMeth(C$, 'getLH$', function () {
return this.subb_LH;
});

Clazz.newMeth(C$, 'getHH$', function () {
return this.subb_HH;
});

Clazz.newMeth(C$, 'split$io_scif_jj2000_j2k_wavelet_WaveletFilter$io_scif_jj2000_j2k_wavelet_WaveletFilter', function (hfilter, vfilter) {
if (this.isNode) {
throw Clazz.new_(Clazz.load('IllegalArgumentException'));
}this.isNode=true;
this.hFilter=hfilter;
this.vFilter=vfilter;
this.subb_LL=Clazz.new_(C$);
this.subb_LH=Clazz.new_(C$);
this.subb_HL=Clazz.new_(C$);
this.subb_HH=Clazz.new_(C$);
this.subb_LL.parent=this;
this.subb_HL.parent=this;
this.subb_LH.parent=this;
this.subb_HH.parent=this;
this.initChilds$();
return this.subb_LL;
});

Clazz.newMeth(C$, 'getHorWFilter$', function () {
return this.hFilter;
});

Clazz.newMeth(C$, 'getVerWFilter$', function () {
return this.hFilter;
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:17 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
