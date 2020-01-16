(function(){var P$=Clazz.newPackage("io.scif.jj2000.j2k.entropy.encoder"),I$=[[0,'io.scif.jj2000.j2k.entropy.encoder.StdEntropyCoder']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "EntropyCoder", null, 'io.scif.jj2000.j2k.image.ImgDataAdapter', ['io.scif.jj2000.j2k.entropy.encoder.CodedCBlkDataSrcEnc', 'io.scif.jj2000.j2k.entropy.StdEntropyCoderOptions']);

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.pinfo=Clazz.array(String, -2, [Clazz.array(String, -1, ["Cblksiz", "[<tile-component idx>] <width> <height> [[<tile-component idx>] <width> <height>]", "Specifies the maximum code-block size to use for tile-component. The maximum width and height is 1024, however the surface area (i.e. width x height) must not exceed 4096. The minimum width and height is 4.", "64 64"]), Clazz.array(String, -1, ["Cbypass", "[<tile-component idx>] true|false[ [<tile-component idx>] true|false ...]", "Uses the lazy coding mode with the entropy coder. This will bypass the MQ coder for some of the coding passes, where the distribution is often close to uniform. Since the MQ codeword will be terminated at least once per lazy pass, it is important to use an efficient termination algorithm, see the \'Cterm\' option.\'true\' enables, \'false\' disables it.", "false"]), Clazz.array(String, -1, ["CresetMQ", "[<tile-component idx>] true|false[ [<tile-component idx>] true|false ...]", "If this is enabled the probability estimates of the MQ coder are reset after each arithmetically coded (i.e. non-lazy) coding pass. \'true\' enables, \'false\' disables it.", "false"]), Clazz.array(String, -1, ["Creg_term", "[<tile-component idx>] true|false[ [<tile-component idx>] true|false ...]", "If this is enabled the codeword (raw or MQ) is terminated on a byte boundary after each coding pass. In this case it is important to use an efficient termination algorithm, see the \'Cterm\' option. \'true\' enables, \'false\' disables it.", "false"]), Clazz.array(String, -1, ["Ccausal", "[<tile-component idx>] true|false[ [<tile-component idx>] true|false ...]", "Uses vertically stripe causal context formation. If this is enabled the context formation process in one stripe is independant of the next stripe (i.e. the one below it). \'true\' enables, \'false\' disables it.", "false"]), Clazz.array(String, -1, ["Cseg_symbol", "[<tile-component idx>] true|false[ [<tile-component idx>] true|false ...]", "Inserts an error resilience segmentation symbol in the MQ codeword at the end of each bit-plane (cleanup pass). Decoders can use this information to detect and conceal errors.\'true\' enables, \'false\' disables it.", "false"]), Clazz.array(String, -1, ["Cterm", "[<tile-component idx>] near_opt|easy|predict|full[ [<tile-component idx>] near_opt|easy|predict|full ...]", "Specifies the algorithm used to terminate the MQ codeword. The most efficient one is \'near_opt\', which delivers a codeword which in almost all cases is the shortest possible. The \'easy\' is a simpler algorithm that delivers a codeword length that is close to the previous one (in average 1 bit longer). The \'predict\' is almost the same as the \'easy\' but it leaves error resilient information on the spare least significant bits (in average 3.5 bits), which can be used by a decoder to detect errors. The \'full\' algorithm performs a full flush of the MQ coder and is highly inefficient.\nIt is important to use a good termination policy since the MQ codeword can be terminated quite often, specially if the \'Cbypass\' or \'Creg_term\' options are enabled (in the normal case it would be terminated once per code-block, while if \'Creg_term\' is specified it will be done almost 3 times per bit-plane in each code-block).", "near_opt"]), Clazz.array(String, -1, ["Clen_calc", "[<tile-component idx>] near_opt|lazy_good|lazy[ [<tile-component idx>] ...]", "Specifies the algorithm to use in calculating the necessary MQ length for each decoding pass. The best one is \'near_opt\', which performs a rather sophisticated calculation and provides the best results. The \'lazy_good\' and \'lazy\' are very simple algorithms that provide rather conservative results, \'lazy_good\' one being slightly better. Do not change this option unless you want to experiment the effect of different length calculation algorithms.", "near_opt"]), Clazz.array(String, -1, ["Cpp", "[<tile-component idx>] <dim> <dim> [<dim> <dim>] [ [<tile-component idx>] ...]", "Specifies precinct partition dimensions for tile-component. The first two values apply to the highest resolution and the following ones (if any) apply to the remaining resolutions in decreasing order. If less values than the number of decomposition levels are specified, then the last two values are used for the remaining resolutions.", null])]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['src','io.scif.jj2000.j2k.quantization.quantizer.CBlkQuantDataSrcEnc']]
,['O',['pinfo','String[][]']]]

Clazz.newMeth(C$, 'c$$io_scif_jj2000_j2k_quantization_quantizer_CBlkQuantDataSrcEnc', function (src) {
;C$.superclazz.c$$io_scif_jj2000_j2k_image_ImgData.apply(this,[src]);C$.$init$.apply(this);
this.src=src;
}, 1);

Clazz.newMeth(C$, 'isReversible$I$I', function (t, c) {
return this.src.isReversible$I$I(t, c);
});

Clazz.newMeth(C$, 'getAnSubbandTree$I$I', function (t, c) {
return this.src.getAnSubbandTree$I$I(t, c);
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

Clazz.newMeth(C$, 'createInstance$io_scif_jj2000_j2k_quantization_quantizer_CBlkQuantDataSrcEnc$io_scif_media_imageioimpl_plugins_jpeg2000_J2KImageWriteParamJava$io_scif_jj2000_j2k_entropy_CBlkSizeSpec$io_scif_jj2000_j2k_entropy_PrecinctSizeSpec$io_scif_jj2000_j2k_StringSpec$io_scif_jj2000_j2k_StringSpec$io_scif_jj2000_j2k_StringSpec$io_scif_jj2000_j2k_StringSpec$io_scif_jj2000_j2k_StringSpec$io_scif_jj2000_j2k_StringSpec$io_scif_jj2000_j2k_StringSpec', function (src, wp, cblks, pss, bms, mqrs, rts, css, sss, lcs, tts) {
return Clazz.new_($I$(1,1).c$$io_scif_jj2000_j2k_quantization_quantizer_CBlkQuantDataSrcEnc$io_scif_jj2000_j2k_entropy_CBlkSizeSpec$io_scif_jj2000_j2k_entropy_PrecinctSizeSpec$io_scif_jj2000_j2k_StringSpec$io_scif_jj2000_j2k_StringSpec$io_scif_jj2000_j2k_StringSpec$io_scif_jj2000_j2k_StringSpec$io_scif_jj2000_j2k_StringSpec$io_scif_jj2000_j2k_StringSpec$io_scif_jj2000_j2k_StringSpec,[src, cblks, pss, bms, mqrs, rts, css, sss, lcs, tts]);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:15 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
