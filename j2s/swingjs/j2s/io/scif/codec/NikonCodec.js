(function(){var P$=Clazz.newPackage("io.scif.codec"),I$=[[0,'io.scif.codec.HuffmanCodecOptions','io.scif.codec.HuffmanCodec','io.scif.codec.BitBuffer','io.scif.codec.BitWriter','java.util.Arrays']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "NikonCodec", null, 'io.scif.codec.AbstractCodec');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.DEFAULT_LINEARIZATION_TABLE=Clazz.array(Integer.TYPE, -1, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133, 134, 135, 136, 137, 138, 139, 140, 141, 142, 143, 144, 145, 146, 147, 148, 149, 150, 151, 152, 153, 154, 155, 156, 157, 158, 159, 160, 161, 162, 163, 164, 165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177, 178, 179, 180, 181, 182, 183, 184, 185, 186, 187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 197, 198, 199, 200, 201, 202, 203, 204, 205, 206, 207, 208, 209, 210, 211, 212, 213, 214, 215, 217, 218, 219, 220, 221, 222, 223, 224, 225, 226, 227, 228, 230, 231, 232, 233, 234, 235, 236, 238, 239, 240, 241, 242, 243, 245, 246, 247, 248, 249, 251, 252, 253, 254, 255, 257, 258, 259, 261, 262, 263, 264, 266, 267, 268, 270, 271, 272, 274, 275, 276, 278, 279, 280, 282, 283, 285, 286, 287, 289, 290, 292, 293, 295, 296, 298, 300, 303, 307, 311, 315, 319, 323, 328, 332, 336, 341, 345, 349, 354, 358, 362, 367, 371, 376, 381, 385, 390, 394, 399, 404, 409, 413, 418, 423, 428, 433, 437, 442, 447, 452, 457, 462, 467, 472, 477, 483, 488, 493, 498, 503, 508, 514, 519, 524, 530, 535, 540, 546, 551, 557, 562, 568, 574, 579, 585, 590, 596, 602, 608, 613, 619, 625, 631, 637, 642, 648, 654, 660, 666, 672, 679, 685, 691, 697, 703, 709, 716, 722, 728, 735, 741, 747, 754, 760, 767, 773, 780, 786, 793, 799, 806, 813, 819, 826, 833, 840, 846, 853, 860, 867, 874, 881, 888, 895, 902, 909, 916, 923, 930, 937, 944, 952, 959, 966, 973, 981, 988, 995, 1003, 1010, 1017, 1025, 1032, 1040, 1047, 1055, 1063, 1070, 1078, 1085, 1093, 1101, 1109, 1116, 1124, 1132, 1140, 1148, 1156, 1164, 1172, 1180, 1188, 1196, 1204, 1212, 1220, 1228, 1237, 1245, 1253, 1261, 1270, 1278, 1287, 1295, 1303, 1312, 1320, 1329, 1337, 1346, 1355, 1363, 1372, 1381, 1389, 1398, 1407, 1416, 1424, 1433, 1442, 1451, 1460, 1469, 1478, 1487, 1496, 1505, 1514, 1523, 1532, 1541, 1551, 1560, 1569, 1578, 1588, 1597, 1606, 1616, 1625, 1634, 1644, 1653, 1663, 1672, 1682, 1691, 1701, 1711, 1720, 1730, 1740, 1750, 1759, 1769, 1779, 1789, 1799, 1809, 1819, 1829, 1839, 1849, 1859, 1869, 1879, 1889, 1899, 1909, 1920, 1930, 1940, 1951, 1961, 1971, 1982, 1992, 2003, 2013, 2024, 2034, 2045, 2055, 2066, 2077, 2087, 2098, 2109, 2119, 2130, 2141, 2152, 2163, 2174, 2185, 2196, 2207, 2218, 2229, 2240, 2251, 2262, 2273, 2284, 2295, 2306, 2318, 2329, 2340, 2351, 2363, 2374, 2385, 2397, 2408, 2420, 2431, 2443, 2454, 2466, 2478, 2489, 2501, 2513, 2524, 2536, 2548, 2560, 2571, 2583, 2595, 2607, 2619, 2631, 2643, 2655, 2667, 2679, 2691, 2703, 2716, 2728, 2740, 2752, 2765, 2777, 2789, 2802, 2814, 2826, 2839, 2851, 2864, 2876, 2889, 2902, 2914, 2927, 2939, 2952, 2965, 2978, 2990, 3003, 3016, 3029, 3042, 3055, 3068, 3081, 3094, 3107, 3120, 3133, 3146, 3159, 3172, 3185, 3198, 3212, 3225, 3238, 3251, 3265, 3278, 3291, 3305, 3318, 3332, 3345, 3359, 3372, 3386, 3400, 3413, 3427, 3440, 3454, 3468, 3482, 3495, 3509, 3523, 3537, 3551, 3565, 3579, 3593, 3607, 3621, 3635, 3649, 3663, 3677, 3692, 3706, 3720, 3734, 3749, 3763, 3777, 3792, 3806, 3821, 3835, 3850, 3864, 3879, 3893, 3908, 3923, 3937, 3952, 3967, 3981, 3996, 4011, 4026, 4041, 4055, 4070, 4085, 4095]);
C$.LOSSY_DECODER_CONFIGURATION_12=Clazz.array(Short.TYPE, -1, [0, 1, 5, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 5, 4, 3, 6, 2, 7, 1, 0, 8, 9, 11, 10, 12]);
C$.SPLIT_LOSSY_DECODER_CONFIGURATION_12=Clazz.array(Short.TYPE, -1, [0, 1, 5, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 57, 90, 56, 39, 22, 5, 4, 3, 2, 1, 0, 11, 12, 12]);
C$.LOSSLESS_DECODER_CONFIGURATION_12=Clazz.array(Short.TYPE, -1, [0, 1, 4, 2, 3, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 4, 6, 3, 7, 2, 8, 1, 9, 0, 10, 11, 12]);
C$.LOSSY_DECODER_CONFIGURATION_14=Clazz.array(Short.TYPE, -1, [0, 1, 4, 3, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 0, 5, 6, 4, 7, 8, 3, 9, 2, 1, 0, 10, 11, 12, 13, 14]);
C$.SPLIT_LOSSY_DECODER_CONFIGURATION_14=Clazz.array(Short.TYPE, -1, [0, 1, 5, 1, 1, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0, 8, 92, 75, 58, 41, 7, 6, 5, 4, 3, 2, 1, 0, 13, 14]);
C$.LOSSLESS_DECODER_CONFIGURATION_14=Clazz.array(Short.TYPE, -1, [0, 1, 4, 2, 2, 3, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 7, 6, 8, 5, 9, 4, 10, 3, 11, 12, 2, 0, 1, 13, 14]);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['codecService','io.scif.codec.CodecService']]
,['O',['DEFAULT_LINEARIZATION_TABLE','int[]','LOSSY_DECODER_CONFIGURATION_12','short[]','+SPLIT_LOSSY_DECODER_CONFIGURATION_12','+LOSSLESS_DECODER_CONFIGURATION_12','+LOSSY_DECODER_CONFIGURATION_14','+SPLIT_LOSSY_DECODER_CONFIGURATION_14','+LOSSLESS_DECODER_CONFIGURATION_14']]]

Clazz.newMeth(C$, 'compress$BA$io_scif_codec_CodecOptions', function (data, options) {
throw Clazz.new_(Clazz.load('io.scif.UnsupportedCompressionException').c$$S,["Nikon Compression not currently supported"]);
});

Clazz.newMeth(C$, 'decompress$org_scijava_io_handle_DataHandle$io_scif_codec_CodecOptions', function ($in, options) {
if (options == null  || !(Clazz.instanceOf(options, "io.scif.codec.NikonCodecOptions")) ) {
throw Clazz.new_(Clazz.load('io.scif.FormatException').c$$S,["Options must be an instanceof loci.formats.codec.NikonCodecOptions."]);
}var nikon=options;
var huffman=Clazz.new_($I$(1,1));
huffman.bitsPerSample=nikon.bitsPerSample;
huffman.maxBytes=nikon.maxBytes;
if (!nikon.lossless) {
if (nikon.bitsPerSample == 12) {
huffman.table=C$.LOSSY_DECODER_CONFIGURATION_12;
} else huffman.table=C$.LOSSY_DECODER_CONFIGURATION_14;
} else {
if (nikon.bitsPerSample == 12) {
huffman.table=C$.LOSSLESS_DECODER_CONFIGURATION_12;
} else huffman.table=C$.LOSSLESS_DECODER_CONFIGURATION_14;
}if (nikon.vPredictor == null ) {
nikon.vPredictor=Clazz.array(Integer.TYPE, -1, [0, 0, 0, 0]);
}var huffmanCodec=this.codecService.getCodec$Class(Clazz.getClass($I$(2)));
var pix=Clazz.array(Byte.TYPE, [nikon.maxBytes]);
$in.read$BA(pix);
var bb=Clazz.new_($I$(3,1).c$$BA,[pix]);
var out=Clazz.new_($I$(4,1));
var hPredictor=Clazz.array(Integer.TYPE, [2]);
var table=nikon.curve == null  ? C$.DEFAULT_LINEARIZATION_TABLE : nikon.curve;
for (var row=0; row < nikon.height; row++) {
if (row == nikon.split) {
if (!nikon.lossless) {
if (nikon.bitsPerSample == 12) {
huffman.table=C$.SPLIT_LOSSY_DECODER_CONFIGURATION_12;
} else huffman.table=C$.SPLIT_LOSSY_DECODER_CONFIGURATION_14;
$I$(5).fill$IA$I(hPredictor, 0);
}}for (var col=0; col < nikon.width; col++) {
var cfaIndex=(2 * (row & 1)) + (col & 1);
var diff=huffmanCodec.getSample$io_scif_codec_BitBuffer$io_scif_codec_CodecOptions(bb, huffman);
if (col < 2) {
nikon.vPredictor[cfaIndex]+=diff;
hPredictor[col & 1]=nikon.vPredictor[cfaIndex];
} else {
hPredictor[col & 1]+=diff;
}var index=hPredictor[col & 1];
if (index < 0) index=0;
if (index >= table.length) {
index=table.length - 1;
}out.write$I$I(table[index], options.bitsPerSample);
}
}
return out.toByteArray$();
});
C$.$getAnn$ = function(){ return [
[[null,'io.scif.codec.NikonCodec',null,['org.scijava.plugin.Plugin']],['type="io.scif.codec.Codec.class" ']],
  [['codecService','io.scif.codec.CodecService',null,['org.scijava.plugin.Parameter']],['']]]}

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:38 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
