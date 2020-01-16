(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.decoder"),I$=[[0,'Error','io.scif.jj2000.j2k.quantization.QuantTypeSpec','io.scif.jj2000.j2k.quantization.QuantStepSizeSpec','io.scif.jj2000.j2k.quantization.GuardBitsSpec','io.scif.jj2000.j2k.wavelet.synthesis.SynWTFilterSpec','io.scif.jj2000.j2k.IntegerSpec','io.scif.jj2000.j2k.image.CompTransfSpec','io.scif.jj2000.j2k.ModuleSpec','io.scif.jj2000.j2k.entropy.CBlkSizeSpec','io.scif.jj2000.j2k.entropy.PrecinctSizeSpec']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DecoderSpecs", null, null, 'Cloneable');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['iccs','io.scif.jj2000.j2k.ModuleSpec','rois','io.scif.jj2000.j2k.roi.MaxShiftSpec','qts','io.scif.jj2000.j2k.quantization.QuantTypeSpec','qsss','io.scif.jj2000.j2k.quantization.QuantStepSizeSpec','gbs','io.scif.jj2000.j2k.quantization.GuardBitsSpec','wfs','io.scif.jj2000.j2k.wavelet.synthesis.SynWTFilterSpec','dls','io.scif.jj2000.j2k.IntegerSpec','+nls','+pos','ecopts','io.scif.jj2000.j2k.ModuleSpec','cts','io.scif.jj2000.j2k.image.CompTransfSpec','pcs','io.scif.jj2000.j2k.ModuleSpec','+ers','pss','io.scif.jj2000.j2k.entropy.PrecinctSizeSpec','sops','io.scif.jj2000.j2k.ModuleSpec','+ephs','cblks','io.scif.jj2000.j2k.entropy.CBlkSizeSpec','pphs','io.scif.jj2000.j2k.ModuleSpec']]]

Clazz.newMeth(C$, 'getCopy$', function () {
var decSpec2;
try {
decSpec2=this.clone$();
} catch (e) {
if (Clazz.exceptionOf(e,"CloneNotSupportedException")){
throw Clazz.new_($I$(1,1).c$$S,["Cannot clone the DecoderSpecs instance"]);
} else {
throw e;
}
}
decSpec2.qts=this.qts.getCopy$();
decSpec2.qsss=this.qsss.getCopy$();
decSpec2.gbs=this.gbs.getCopy$();
decSpec2.wfs=this.wfs.getCopy$();
decSpec2.dls=this.dls.getCopy$();
decSpec2.cts=this.cts.getCopy$();
if (this.rois != null ) {
decSpec2.rois=this.rois.getCopy$();
}return decSpec2;
});

Clazz.newMeth(C$, 'c$$I$I', function (nt, nc) {
;C$.$init$.apply(this);
this.qts=Clazz.new_($I$(2,1).c$$I$I$B,[nt, nc, ($b$[0] = 2, $b$[0])]);
this.qsss=Clazz.new_($I$(3,1).c$$I$I$B,[nt, nc, ($b$[0] = 2, $b$[0])]);
this.gbs=Clazz.new_($I$(4,1).c$$I$I$B,[nt, nc, ($b$[0] = 2, $b$[0])]);
this.wfs=Clazz.new_($I$(5,1).c$$I$I$B,[nt, nc, ($b$[0] = 2, $b$[0])]);
this.dls=Clazz.new_($I$(6,1).c$$I$I$B,[nt, nc, ($b$[0] = 2, $b$[0])]);
this.cts=Clazz.new_($I$(7,1).c$$I$I$B,[nt, nc, ($b$[0] = 2, $b$[0])]);
this.ecopts=Clazz.new_($I$(8,1).c$$I$I$B,[nt, nc, ($b$[0] = 2, $b$[0])]);
this.ers=Clazz.new_($I$(8,1).c$$I$I$B,[nt, nc, ($b$[0] = 2, $b$[0])]);
this.cblks=Clazz.new_($I$(9,1).c$$I$I$B,[nt, nc, ($b$[0] = 2, $b$[0])]);
this.pss=Clazz.new_($I$(10,1).c$$I$I$B$io_scif_jj2000_j2k_IntegerSpec,[nt, nc, ($b$[0] = 2, $b$[0]), this.dls]);
this.nls=Clazz.new_($I$(6,1).c$$I$I$B,[nt, nc, ($b$[0] = 1, $b$[0])]);
this.pos=Clazz.new_($I$(6,1).c$$I$I$B,[nt, nc, ($b$[0] = 1, $b$[0])]);
this.pcs=Clazz.new_($I$(8,1).c$$I$I$B,[nt, nc, ($b$[0] = 1, $b$[0])]);
this.sops=Clazz.new_($I$(8,1).c$$I$I$B,[nt, nc, ($b$[0] = 1, $b$[0])]);
this.ephs=Clazz.new_($I$(8,1).c$$I$I$B,[nt, nc, ($b$[0] = 1, $b$[0])]);
this.pphs=Clazz.new_($I$(8,1).c$$I$I$B,[nt, nc, ($b$[0] = 1, $b$[0])]);
this.iccs=Clazz.new_($I$(8,1).c$$I$I$B,[nt, nc, ($b$[0] = 1, $b$[0])]);
this.pphs.setDefault$O( Boolean.from(false));
}, 1);
var $b$ = new Int8Array(1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:15 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
