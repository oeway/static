(function(){var P$=Clazz.newPackage("org.rcsb.cif.binary.codec"),I$=[[0,'org.rcsb.cif.binary.data.EncodedDataFactory','org.rcsb.cif.binary.encoding.StringArrayEncoding','java.util.stream.IntStream','java.util.regex.Pattern']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StringArrayCodecTest");

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'testForward$', function () {
var plainArray=$I$(1).stringArray$SA(Clazz.array(String, -1, ["a", "AB", "a"]));
var stringArrayEncoding=Clazz.new_($I$(2,1));
var encodedData=plainArray.encode$org_rcsb_cif_binary_encoding_StringArrayEncoding(stringArrayEncoding);
var decodedArray=encodedData.decode$org_rcsb_cif_binary_encoding_StringArrayEncoding(stringArrayEncoding);
org.junit.Assert.assertArrayEquals$OA$OA(plainArray.getData$(), decodedArray.getData$());
});

Clazz.newMeth(C$, 'testRoundtrip$', function () {
var plainArray=$I$(1).stringArray$SA($I$(3).range$I$I(0, 536).mapToObj$java_util_function_IntFunction(/*addLambdaReuse org.rcsb.cif.binary.codec.StringArrayCodecTest$lambda1*/(P$.StringArrayCodecTest$lambda1$||(P$.StringArrayCodecTest$lambda1$=(((P$.StringArrayCodecTest$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "StringArrayCodecTest$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$', function (i) { return ("n");});
})()
), Clazz.new_(P$.StringArrayCodecTest$lambda1.$init$, [this, null])))))).toArray$java_util_function_IntFunction(((P$.StringArrayCodecTest$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "StringArrayCodecTest$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.array(String, [t.intValue()])});
})()
), Clazz.new_(P$.StringArrayCodecTest$lambda2.$init$, [this, null]))));
var stringArrayEncoding=Clazz.new_($I$(2,1));
var encodedData=plainArray.encode$org_rcsb_cif_binary_encoding_StringArrayEncoding(stringArrayEncoding);
var decodedArray=encodedData.decode$org_rcsb_cif_binary_encoding_StringArrayEncoding(stringArrayEncoding);
org.junit.Assert.assertArrayEquals$OA$OA(plainArray.getData$(), decodedArray.getData$());
});

Clazz.newMeth(C$, 'testNullAndEmpty$', function () {
var plainArray=$I$(1).stringArray$SA(Clazz.array(String, -1, ["a", "AB", null, null, "", "a", ""]));
var expected=Clazz.array(String, -1, ["a", "AB", "", "", "", "a", ""]);
var stringArrayEncoding=Clazz.new_($I$(2,1));
var encodedData=plainArray.encode$org_rcsb_cif_binary_encoding_StringArrayEncoding(stringArrayEncoding);
var decodedArray=encodedData.decode$org_rcsb_cif_binary_encoding_StringArrayEncoding(stringArrayEncoding);
org.junit.Assert.assertArrayEquals$OA$OA(expected, decodedArray.getData$());
});

Clazz.newMeth(C$, 'testChaining$', function () {
var plainArray=$I$(1).stringArray$SA($I$(4).compile$S(", ").splitAsStream$CharSequence("L-peptide linking, L-peptide linking, L-peptide linking, L-peptide linking, L-peptide linking, L-peptide linking, L-peptide linking, peptide linking, L-peptide linking, non-polymer, L-peptide linking, L-peptide linking, L-peptide linking, L-peptide linking, L-peptide linking, L-peptide linking, L-peptide linking, non-polymer, L-peptide linking, L-peptide linking, L-peptide linking, L-peptide linking").toArray$java_util_function_IntFunction(((P$.StringArrayCodecTest$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "StringArrayCodecTest$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.IntFunction', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_C*/
Clazz.newMeth(C$, 'apply$', function (t) { return Clazz.array(String, [t.intValue()])});
})()
), Clazz.new_(P$.StringArrayCodecTest$lambda3.$init$, [this, null]))));
var stringArrayEncoding=Clazz.new_($I$(2,1));
var encodedData=plainArray.encode$org_rcsb_cif_binary_encoding_StringArrayEncoding(stringArrayEncoding);
var decodedArray=encodedData.decode$org_rcsb_cif_binary_encoding_StringArrayEncoding(stringArrayEncoding);
org.junit.Assert.assertArrayEquals$OA$OA(plainArray.getData$(), decodedArray.getData$());
});
C$.__ANN__ = [[['M:testForward','void'],['@Test']],
  [['M:testRoundtrip','.'],['@Test']],
  [['M:testNullAndEmpty','.'],['@Test']],
  [['M:testChaining','.'],['@Test']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:54 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
