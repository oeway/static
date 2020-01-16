(function(){var P$=Clazz.newPackage("org.rcsb.cif.binary.codec"),I$=[[0,'java.util.LinkedHashMap','org.rcsb.cif.binary.codec.Codec','java.util.HashMap','java.io.ByteArrayInputStream','org.rcsb.cif.TestHelper']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "MessagePackCodecTest");

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'encodeString$', function () {
var expected=org.rcsb.cif.TestHelper.convertToIntArray$S("82 a2 53 31 a0 a2 53 32 ab 4c 6f 72 65 6d 20 69 70 73 75 6d");
var originalMap=Clazz.new_($I$(1,1));
originalMap.put$TK$TV("S1", "");
originalMap.put$TK$TV("S2", "Lorem ipsum");
var actual=org.rcsb.cif.TestHelper.convertToIntArray$BA($I$(2).MESSAGE_PACK_CODEC.encode$java_util_Map(originalMap));
org.junit.Assert.assertArrayEquals$IA$IA(expected, actual);
});

Clazz.newMeth(C$, 'encodeNumbers$', function () {
var expected=org.rcsb.cif.TestHelper.convertToIntArray$S("82 a2 49 31 11 a2 44 31 cb c0 50 6c cc cc cc cc cd");
var originalMap=Clazz.new_($I$(1,1));
originalMap.put$TK$TV("I1", new Integer(17));
originalMap.put$TK$TV("D1", new Double(-65.7));
var actual=org.rcsb.cif.TestHelper.convertToIntArray$BA($I$(2).MESSAGE_PACK_CODEC.encode$java_util_Map(originalMap));
org.junit.Assert.assertArrayEquals$IA$IA(expected, actual);
});

Clazz.newMeth(C$, 'encodeNull$', function () {
var expected=org.rcsb.cif.TestHelper.convertToIntArray$S("81 a4 6e 75 6c 6c c0");
var originalMap=Clazz.new_($I$(1,1));
originalMap.put$TK$TV("null", null);
var actual=org.rcsb.cif.TestHelper.convertToIntArray$BA($I$(2).MESSAGE_PACK_CODEC.encode$java_util_Map(originalMap));
org.junit.Assert.assertArrayEquals$IA$IA(expected, actual);
});

Clazz.newMeth(C$, 'encodeBoolean$', function () {
var expected=org.rcsb.cif.TestHelper.convertToIntArray$S("82 a4 74 72 75 65 c3 a5 66 61 6c 73 65 c2");
var originalMap=Clazz.new_($I$(1,1));
originalMap.put$TK$TV("true", new Boolean(true));
originalMap.put$TK$TV("false", new Boolean(false));
var actual=org.rcsb.cif.TestHelper.convertToIntArray$BA($I$(2).MESSAGE_PACK_CODEC.encode$java_util_Map(originalMap));
org.junit.Assert.assertArrayEquals$IA$IA(expected, actual);
});

Clazz.newMeth(C$, 'encodeEmptyMap$', function () {
var expected=org.rcsb.cif.TestHelper.convertToIntArray$S("81 a3 6f 62 6a 80");
var originalMap=Clazz.new_($I$(1,1));
originalMap.put$TK$TV("obj", Clazz.new_($I$(1,1)));
var actual=org.rcsb.cif.TestHelper.convertToIntArray$BA($I$(2).MESSAGE_PACK_CODEC.encode$java_util_Map(originalMap));
org.junit.Assert.assertArrayEquals$IA$IA(expected, actual);
});

Clazz.newMeth(C$, 'encodeMap$', function () {
var expected=org.rcsb.cif.TestHelper.convertToIntArray$S("81 a3 6f 62 6a 83 a2 53 31 a3 73 74 72 a2 49 31 f4 a2 44 31 cb 40 5f d4 b0 f2 7b b2 ff");
var originalMap=Clazz.new_($I$(1,1));
var internal=Clazz.new_($I$(1,1));
internal.put$TK$TV("S1", "str");
internal.put$TK$TV("I1", new Integer(-12));
internal.put$TK$TV("D1", new Double(127.3233));
originalMap.put$TK$TV("obj", internal);
var actual=org.rcsb.cif.TestHelper.convertToIntArray$BA($I$(2).MESSAGE_PACK_CODEC.encode$java_util_Map(originalMap));
org.junit.Assert.assertArrayEquals$IA$IA(expected, actual);
});

Clazz.newMeth(C$, 'encodeEmptyArray$', function () {
var expected=org.rcsb.cif.TestHelper.convertToIntArray$S("81 a3 61 72 72 90");
var originalMap=Clazz.new_($I$(3,1));
originalMap.put$TK$TV("arr", Clazz.array(java.lang.Object, [0]));
var actual=org.rcsb.cif.TestHelper.convertToIntArray$BA($I$(2).MESSAGE_PACK_CODEC.encode$java_util_Map(originalMap));
org.junit.Assert.assertArrayEquals$IA$IA(expected, actual);
});

Clazz.newMeth(C$, 'testForward$', function () {
var originalMap=Clazz.new_($I$(1,1));
originalMap.put$TK$TV("S1", "Lorem");
originalMap.put$TK$TV("S2", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.");
originalMap.put$TK$TV("S3", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.");
originalMap.put$TK$TV("S4", "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.");
originalMap.put$TK$TV("null", null);
var packed=$I$(2).MESSAGE_PACK_CODEC.encode$java_util_Map(originalMap);
var unpacked=$I$(2).MESSAGE_PACK_CODEC.decode$java_io_InputStream(Clazz.new_($I$(4,1).c$$BA,[packed]));
org.junit.Assert.assertEquals$O$O(originalMap, unpacked);
});

Clazz.newMeth(C$, 'testNegFixInt$', function () {
var originalMap=Clazz.new_($I$(1,1));
originalMap.put$TK$TV("entry", new Integer(-5));
var packed=$I$(2).MESSAGE_PACK_CODEC.encode$java_util_Map(originalMap);
var unpacked=$I$(2).MESSAGE_PACK_CODEC.decode$java_io_InputStream(Clazz.new_($I$(4,1).c$$BA,[packed]));
org.junit.Assert.assertEquals$O$O(originalMap, unpacked);
org.junit.Assert.assertEquals$O$O(new Integer(-5), unpacked.get$O("entry"));
});

Clazz.newMeth(C$, 'testBackward$', function () {
var inputStream=$I$(5).getInputStream$S("bcif/1pga.bcif");
var unpacked=$I$(2).MESSAGE_PACK_CODEC.decode$java_io_InputStream(inputStream);
var packed=$I$(2).MESSAGE_PACK_CODEC.encode$java_util_Map(unpacked);
org.junit.Assert.assertArrayEquals$BA$BA($I$(5).getBytes$S("bcif/1pga.bcif"), packed);
});
C$.__ANN__ = [[['M:encodeString','void'],['@Test']],
  [['M:encodeNumbers','.'],['@Test']],
  [['M:encodeNull','.'],['@Test']],
  [['M:encodeBoolean','.'],['@Test']],
  [['M:encodeEmptyMap','.'],['@Test']],
  [['M:encodeMap','.'],['@Test']],
  [['M:encodeEmptyArray','.'],['@Test']],
  [['M:testForward','.'],['@Test']],
  [['M:testNegFixInt','.'],['@Test']],
  [['M:testBackward','.'],['@Test']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:54 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
