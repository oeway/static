(function(){var P$=Clazz.newPackage("org.rcsb.cif.binary.codec"),I$=[[0,'org.rcsb.cif.binary.data.EncodedDataFactory','org.rcsb.cif.binary.encoding.DeltaEncoding']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "DeltaCodecTest");

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'testForward$', function () {
var plainArray=$I$(1).int8Array$IA(Clazz.array(Integer.TYPE, -1, [1, 2, 3, 4, 5, 6]));
var deltaEncoding=Clazz.new_($I$(2,1));
var encodedData=plainArray.encode$org_rcsb_cif_binary_encoding_DeltaEncoding(deltaEncoding);
var decodedArray=encodedData.decode$org_rcsb_cif_binary_encoding_DeltaEncoding(deltaEncoding);
org.junit.Assert.assertArrayEquals$IA$IA(plainArray.getData$(), decodedArray.getData$());
});

Clazz.newMeth(C$, 'honorSrcType$', function () {
var plainArray=$I$(1).int8Array$IA(Clazz.array(Integer.TYPE, -1, [1, 2, 3, 4, 5, 6]));
var deltaEncoding=Clazz.new_($I$(2,1));
var encodedData=plainArray.encode$org_rcsb_cif_binary_encoding_DeltaEncoding(deltaEncoding);
var decodedArray=encodedData.decode$org_rcsb_cif_binary_encoding_DeltaEncoding(deltaEncoding);
org.junit.Assert.assertNotNull$O(decodedArray);
});

Clazz.newMeth(C$, 'emptyCase$', function () {
var plainArray=$I$(1).int8Array$IA(Clazz.array(Integer.TYPE, [0]));
var deltaEncoding=Clazz.new_($I$(2,1));
var encodedData=plainArray.encode$org_rcsb_cif_binary_encoding_DeltaEncoding(deltaEncoding);
org.junit.Assert.assertEquals$J$J(0, encodedData.length$());
var decodedArray=encodedData.decode$org_rcsb_cif_binary_encoding_DeltaEncoding(deltaEncoding);
org.junit.Assert.assertEquals$J$J(0, decodedArray.length$());
});
C$.__ANN__ = [[['M:testForward','void'],['@Test']],
  [['M:honorSrcType','.'],['@Test']],
  [['M:emptyCase','.'],['@Test']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:53 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
