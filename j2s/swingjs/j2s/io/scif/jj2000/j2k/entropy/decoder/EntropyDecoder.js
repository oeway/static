(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.entropy.decoder"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "EntropyDecoder", null, 'io.scif.jj2000.j2k.wavelet.synthesis.MultiResImgDataAdapter', 'io.scif.jj2000.j2k.quantization.dequantizer.CBlkQuantDataSrcDec');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.pinfo=Clazz.array(String, -2, [Clazz.array(String, -1, ["Cverber", "[true|false]", "Specifies if the entropy decoder should be verbose about detected errors. If \'true\' a message is printed whenever an error is detected.", "true"]), Clazz.array(String, -1, ["Cer", "[true|false]", "Specifies if error detection should be performed by the entropy decoder engine. If errors are detected they will be concealed and the resulting distortion will be less important. Note that errors can only be detected if the encoder that generated the data included error resilience information.", "true"])]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['src','io.scif.jj2000.j2k.entropy.decoder.CodedCBlkDataSrcDec']]
,['O',['pinfo','String[][]']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_entropy_decoder_CodedCBlkDataSrcDec', function (src) {
;C$.superclazz.c$$io_scif_jj2000_j2k_wavelet_synthesis_MultiResImgData.apply(this,[src]);C$.$init$.apply(this);
this.src=src;
}, 1);

Clazz.newMeth(C$, 'getSynSubbandTree$I$I', function (t, c) {
return this.src.getSynSubbandTree$I$I(t, c);
});

Clazz.newMeth(C$, 'getCbULX$', function () {
return this.src.getCbULX$();
});

Clazz.newMeth(C$, 'getCbULY$', function () {
return this.src.getCbULY$();
});

Clazz.newMeth(C$, 'getParameterInfo$', function () {
return C$.pinfo;
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:15 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
