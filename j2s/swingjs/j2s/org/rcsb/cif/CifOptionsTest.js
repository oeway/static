(function(){var P$=Clazz.newPackage("org.rcsb.cif"),p$1={},I$=[[0,'org.rcsb.cif.CifOptions','org.rcsb.cif.CifIO','org.rcsb.cif.TestHelper','java.io.ByteArrayInputStream','org.rcsb.cif.binary.codec.Codec']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CifOptionsTest");
C$.BLACKLIST_OPTIONS=null;
C$.WHITELIST_OPTIONS=null;

C$.$clinit$=1;

C$.$static$ = function() {C$.$static$=0;
C$.BLACKLIST_OPTIONS=$I$(1).builder$().categoryBlacklist$SA(["entry"]).columnBlacklist$SA(["atom_site.Cartn_x"]).columnBlacklist$SA(["atom_site.Cartn_y"]).columnBlacklist$SA(["atom_site.Cartn_z"]).build$();
C$.WHITELIST_OPTIONS=$I$(1).builder$().categoryWhitelist$SA(["entry"]).columnWhitelist$SA(["atom_site.Cartn_x"]).columnWhitelist$SA(["atom_site.Cartn_y"]).columnWhitelist$SA(["atom_site.Cartn_z"]).build$();
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'testEncodingBehavior$', function () {
var textCifFile=$I$(2).readFromInputStream$java_io_InputStream($I$(3).getInputStream$S("cif/1acj.cif"));
var binary1=$I$(2).writeBinary$org_rcsb_cif_api_CifFile$org_rcsb_cif_CifOptions(textCifFile, $I$(1).builder$().encodingStrategyHint$S( String.instantialize($I$(3).getBytes$S("encoding-hint/hint1.json"))).build$());
var binaryCifFile1=$I$(2).readFromInputStream$java_io_InputStream(Clazz.new_($I$(4,1).c$$BA,[binary1]));
var atomSite1=binaryCifFile1.getFirstBlock$().getAtomSite$();
atomSite1.getCartnX$().values$().map$java_util_function_DoubleUnaryOperator(/*addLambdaReuse org.rcsb.cif.CifOptionsTest$lambda1*/(P$.CifOptionsTest$lambda1$||(P$.CifOptionsTest$lambda1$=(((P$.CifOptionsTest$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "CifOptionsTest$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleUnaryOperator', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'applyAsDouble$', function (d) { return (d * 10);});
})()
), Clazz.new_(P$.CifOptionsTest$lambda1.$init$, [this, null])))))).forEach$java_util_function_DoubleConsumer(/*addLambdaReuse org.rcsb.cif.CifOptionsTest$lambda2*/(P$.CifOptionsTest$lambda2$||(P$.CifOptionsTest$lambda2$=(((P$.CifOptionsTest$lambda2||
(function(){/*m*/var C$=Clazz.newClass(P$, "CifOptionsTest$lambda2", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleConsumer', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$', function (d) { return (org.junit.Assert.assertEquals$D$D$D(Math.round(d), d, 0.001));});
})()
), Clazz.new_(P$.CifOptionsTest$lambda2.$init$, [this, null]))))));
atomSite1.getCartnY$().values$().map$java_util_function_DoubleUnaryOperator(/*addLambdaReuse org.rcsb.cif.CifOptionsTest$lambda3*/(P$.CifOptionsTest$lambda3$||(P$.CifOptionsTest$lambda3$=(((P$.CifOptionsTest$lambda3||
(function(){/*m*/var C$=Clazz.newClass(P$, "CifOptionsTest$lambda3", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleUnaryOperator', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'applyAsDouble$', function (d) { return (d * 100);});
})()
), Clazz.new_(P$.CifOptionsTest$lambda3.$init$, [this, null])))))).forEach$java_util_function_DoubleConsumer(/*addLambdaReuse org.rcsb.cif.CifOptionsTest$lambda4*/(P$.CifOptionsTest$lambda4$||(P$.CifOptionsTest$lambda4$=(((P$.CifOptionsTest$lambda4||
(function(){/*m*/var C$=Clazz.newClass(P$, "CifOptionsTest$lambda4", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleConsumer', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$', function (d) { return (org.junit.Assert.assertEquals$D$D$D(Math.round(d), d, 0.001));});
})()
), Clazz.new_(P$.CifOptionsTest$lambda4.$init$, [this, null]))))));
atomSite1.getCartnZ$().values$().map$java_util_function_DoubleUnaryOperator(/*addLambdaReuse org.rcsb.cif.CifOptionsTest$lambda5*/(P$.CifOptionsTest$lambda5$||(P$.CifOptionsTest$lambda5$=(((P$.CifOptionsTest$lambda5||
(function(){/*m*/var C$=Clazz.newClass(P$, "CifOptionsTest$lambda5", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleUnaryOperator', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'applyAsDouble$', function (d) { return (d * 1000);});
})()
), Clazz.new_(P$.CifOptionsTest$lambda5.$init$, [this, null])))))).forEach$java_util_function_DoubleConsumer(/*addLambdaReuse org.rcsb.cif.CifOptionsTest$lambda6*/(P$.CifOptionsTest$lambda6$||(P$.CifOptionsTest$lambda6$=(((P$.CifOptionsTest$lambda6||
(function(){/*m*/var C$=Clazz.newClass(P$, "CifOptionsTest$lambda6", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleConsumer', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$', function (d) { return (org.junit.Assert.assertEquals$D$D$D(Math.round(d), d, 0.001));});
})()
), Clazz.new_(P$.CifOptionsTest$lambda6.$init$, [this, null]))))));
var binary2=$I$(2).writeBinary$org_rcsb_cif_api_CifFile$org_rcsb_cif_CifOptions(textCifFile, $I$(1).builder$().encodingStrategyHint$S( String.instantialize($I$(3).getBytes$S("encoding-hint/hint2.json"))).build$());
var binaryCifFile2=$I$(2).readFromInputStream$java_io_InputStream(Clazz.new_($I$(4,1).c$$BA,[binary2]));
var atomSite2=binaryCifFile2.getFirstBlock$().getAtomSite$();
atomSite2.getCartnX$().values$().map$java_util_function_DoubleUnaryOperator(/*addLambdaReuse org.rcsb.cif.CifOptionsTest$lambda7*/(P$.CifOptionsTest$lambda7$||(P$.CifOptionsTest$lambda7$=(((P$.CifOptionsTest$lambda7||
(function(){/*m*/var C$=Clazz.newClass(P$, "CifOptionsTest$lambda7", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleUnaryOperator', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'applyAsDouble$', function (d) { return (d * 10);});
})()
), Clazz.new_(P$.CifOptionsTest$lambda7.$init$, [this, null])))))).forEach$java_util_function_DoubleConsumer(/*addLambdaReuse org.rcsb.cif.CifOptionsTest$lambda8*/(P$.CifOptionsTest$lambda8$||(P$.CifOptionsTest$lambda8$=(((P$.CifOptionsTest$lambda8||
(function(){/*m*/var C$=Clazz.newClass(P$, "CifOptionsTest$lambda8", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleConsumer', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$', function (d) { return (org.junit.Assert.assertEquals$D$D$D(Math.round(d), d, 0.001));});
})()
), Clazz.new_(P$.CifOptionsTest$lambda8.$init$, [this, null]))))));
atomSite2.getCartnY$().values$().map$java_util_function_DoubleUnaryOperator(/*addLambdaReuse org.rcsb.cif.CifOptionsTest$lambda9*/(P$.CifOptionsTest$lambda9$||(P$.CifOptionsTest$lambda9$=(((P$.CifOptionsTest$lambda9||
(function(){/*m*/var C$=Clazz.newClass(P$, "CifOptionsTest$lambda9", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleUnaryOperator', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'applyAsDouble$', function (d) { return (d * 1000);});
})()
), Clazz.new_(P$.CifOptionsTest$lambda9.$init$, [this, null])))))).forEach$java_util_function_DoubleConsumer(/*addLambdaReuse org.rcsb.cif.CifOptionsTest$lambda10*/(P$.CifOptionsTest$lambda10$||(P$.CifOptionsTest$lambda10$=(((P$.CifOptionsTest$lambda10||
(function(){/*m*/var C$=Clazz.newClass(P$, "CifOptionsTest$lambda10", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleConsumer', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$', function (d) { return (org.junit.Assert.assertEquals$D$D$D(Math.round(d), d, 0.001));});
})()
), Clazz.new_(P$.CifOptionsTest$lambda10.$init$, [this, null]))))));
atomSite2.getCartnZ$().values$().map$java_util_function_DoubleUnaryOperator(/*addLambdaReuse org.rcsb.cif.CifOptionsTest$lambda11*/(P$.CifOptionsTest$lambda11$||(P$.CifOptionsTest$lambda11$=(((P$.CifOptionsTest$lambda11||
(function(){/*m*/var C$=Clazz.newClass(P$, "CifOptionsTest$lambda11", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleUnaryOperator', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'applyAsDouble$', function (d) { return (d * 100000);});
})()
), Clazz.new_(P$.CifOptionsTest$lambda11.$init$, [this, null])))))).forEach$java_util_function_DoubleConsumer(/*addLambdaReuse org.rcsb.cif.CifOptionsTest$lambda12*/(P$.CifOptionsTest$lambda12$||(P$.CifOptionsTest$lambda12$=(((P$.CifOptionsTest$lambda12||
(function(){/*m*/var C$=Clazz.newClass(P$, "CifOptionsTest$lambda12", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.DoubleConsumer', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'accept$', function (d) { return (org.junit.Assert.assertEquals$D$D$D(Math.round(d), d, 0.001));});
})()
), Clazz.new_(P$.CifOptionsTest$lambda12.$init$, [this, null]))))));
});

Clazz.newMeth(C$, 'testEncoder$', function () {
var encoderName="yet-another-cif-encoder";
var cifFile=$I$(2).readFromInputStream$java_io_InputStream($I$(3).getInputStream$S("bcif/1acj.bcif"));
var bytes=$I$(2).writeBinary$org_rcsb_cif_api_CifFile$org_rcsb_cif_CifOptions(cifFile, $I$(1).builder$().encoder$S(encoderName).build$());
var map=$I$(5).MESSAGE_PACK_CODEC.decode$java_io_InputStream(Clazz.new_($I$(4,1).c$$BA,[bytes]));
org.junit.Assert.assertEquals$O$O(encoderName, map.get$O("encoder"));
});

Clazz.newMeth(C$, 'testFetchUrlText$', function () {
var cifFile=$I$(2).readById$S$org_rcsb_cif_CifOptions("1acj", $I$(1).builder$().fetchUrl$S("https://files.rcsb.org/download/%s.cif").build$());
org.junit.Assert.assertTrue$Z(Clazz.instanceOf(cifFile, "org.rcsb.cif.api.TextFile"));
});

Clazz.newMeth(C$, 'testFetchUrlBinary$', function () {
var cifFile=$I$(2).readById$S$org_rcsb_cif_CifOptions("1acj", $I$(1).builder$().fetchUrl$S("https://models.rcsb.org/%s.bcif").build$());
org.junit.Assert.assertTrue$Z(Clazz.instanceOf(cifFile, "org.rcsb.cif.api.BinaryFile"));
});

Clazz.newMeth(C$, 'testFilteringBehavior$', function () {
for (var id, $id = $I$(3).TEST_CASES.keySet$().iterator$(); $id.hasNext$()&&((id=($id.next$())),1);) {
p$1.testFilteringBehavior$S.apply(this, [id]);
}
});

Clazz.newMeth(C$, 'testFilteringBehavior$S', function (testCase) {
var file=$I$(2).readFromInputStream$java_io_InputStream($I$(3).getInputStream$S("bcif/" + testCase + ".bcif" ));
org.junit.Assert.assertEquals$O$O(testCase.toUpperCase$(), file.getFirstBlock$().getEntry$().getId$().get$I(0));
var blacklistTextFile=$I$(2).readFromInputStream$java_io_InputStream(Clazz.new_($I$(4,1).c$$BA,[$I$(2).writeText$org_rcsb_cif_api_CifFile$org_rcsb_cif_CifOptions(file, C$.BLACKLIST_OPTIONS)]));
org.junit.Assert.assertTrue$Z(blacklistTextFile.getFirstBlock$().getCategoryNames$().size$() > 0);
org.junit.Assert.assertFalse$Z(blacklistTextFile.getFirstBlock$().getEntry$().isDefined$());
org.junit.Assert.assertTrue$Z(blacklistTextFile.getFirstBlock$().getAtomSite$().isDefined$());
org.junit.Assert.assertTrue$Z(blacklistTextFile.getFirstBlock$().getAtomSite$().getGroupPDB$().isDefined$());
org.junit.Assert.assertFalse$Z(blacklistTextFile.getFirstBlock$().getAtomSite$().getCartnX$().isDefined$());
org.junit.Assert.assertFalse$Z(blacklistTextFile.getFirstBlock$().getAtomSite$().getCartnY$().isDefined$());
org.junit.Assert.assertFalse$Z(blacklistTextFile.getFirstBlock$().getAtomSite$().getCartnZ$().isDefined$());
var whitelistTextFile=$I$(2).readFromInputStream$java_io_InputStream(Clazz.new_($I$(4,1).c$$BA,[$I$(2).writeText$org_rcsb_cif_api_CifFile$org_rcsb_cif_CifOptions(file, C$.WHITELIST_OPTIONS)]));
org.junit.Assert.assertTrue$Z(whitelistTextFile.getFirstBlock$().getCategoryNames$().size$() > 0);
org.junit.Assert.assertTrue$Z(whitelistTextFile.getFirstBlock$().getEntry$().isDefined$());
org.junit.Assert.assertTrue$Z(whitelistTextFile.getFirstBlock$().getAtomSite$().isDefined$());
org.junit.Assert.assertFalse$Z(whitelistTextFile.getFirstBlock$().getAtomSite$().getGroupPDB$().isDefined$());
org.junit.Assert.assertTrue$Z(whitelistTextFile.getFirstBlock$().getAtomSite$().getCartnX$().isDefined$());
org.junit.Assert.assertTrue$Z(whitelistTextFile.getFirstBlock$().getAtomSite$().getCartnY$().isDefined$());
org.junit.Assert.assertTrue$Z(whitelistTextFile.getFirstBlock$().getAtomSite$().getCartnZ$().isDefined$());
var blacklistBinaryFile=$I$(2).readFromInputStream$java_io_InputStream(Clazz.new_($I$(4,1).c$$BA,[$I$(2).writeBinary$org_rcsb_cif_api_CifFile$org_rcsb_cif_CifOptions(file, C$.BLACKLIST_OPTIONS)]));
org.junit.Assert.assertTrue$Z(blacklistBinaryFile.getFirstBlock$().getCategoryNames$().size$() > 0);
org.junit.Assert.assertFalse$Z(blacklistBinaryFile.getFirstBlock$().getEntry$().isDefined$());
org.junit.Assert.assertTrue$Z(blacklistBinaryFile.getFirstBlock$().getAtomSite$().isDefined$());
org.junit.Assert.assertTrue$Z(blacklistBinaryFile.getFirstBlock$().getAtomSite$().getGroupPDB$().isDefined$());
org.junit.Assert.assertFalse$Z(blacklistBinaryFile.getFirstBlock$().getAtomSite$().getCartnX$().isDefined$());
org.junit.Assert.assertFalse$Z(blacklistBinaryFile.getFirstBlock$().getAtomSite$().getCartnY$().isDefined$());
org.junit.Assert.assertFalse$Z(blacklistBinaryFile.getFirstBlock$().getAtomSite$().getCartnZ$().isDefined$());
var whitelistBinaryFile=$I$(2).readFromInputStream$java_io_InputStream(Clazz.new_($I$(4,1).c$$BA,[$I$(2).writeBinary$org_rcsb_cif_api_CifFile$org_rcsb_cif_CifOptions(file, C$.WHITELIST_OPTIONS)]));
org.junit.Assert.assertTrue$Z(whitelistBinaryFile.getFirstBlock$().getCategoryNames$().size$() > 0);
org.junit.Assert.assertTrue$Z(whitelistBinaryFile.getFirstBlock$().getEntry$().isDefined$());
org.junit.Assert.assertTrue$Z(whitelistBinaryFile.getFirstBlock$().getAtomSite$().isDefined$());
org.junit.Assert.assertFalse$Z(whitelistBinaryFile.getFirstBlock$().getAtomSite$().getGroupPDB$().isDefined$());
org.junit.Assert.assertTrue$Z(whitelistBinaryFile.getFirstBlock$().getAtomSite$().getCartnX$().isDefined$());
org.junit.Assert.assertTrue$Z(whitelistBinaryFile.getFirstBlock$().getAtomSite$().getCartnY$().isDefined$());
org.junit.Assert.assertTrue$Z(whitelistBinaryFile.getFirstBlock$().getAtomSite$().getCartnZ$().isDefined$());
}, p$1);

Clazz.newMeth(C$, 'testGzipWritingBehavior$', function () {
for (var id, $id = $I$(3).TEST_CASES.keySet$().iterator$(); $id.hasNext$()&&((id=($id.next$())),1);) {
p$1.testGzipWritingBehavior$S.apply(this, [id]);
}
});

Clazz.newMeth(C$, 'testGzipWritingBehavior$S', function (testCase) {
var file=$I$(2).readFromInputStream$java_io_InputStream($I$(3).getInputStream$S("bcif/" + testCase + ".bcif" ));
org.junit.Assert.assertEquals$O$O(testCase.toUpperCase$(), file.getFirstBlock$().getEntry$().getId$().get$I(0));
var binaryGz=$I$(2).writeText$org_rcsb_cif_api_CifFile$org_rcsb_cif_CifOptions(file, $I$(1).builder$().gzip$Z(true).build$());
org.junit.Assert.assertEquals$J$J(35615, (binaryGz[0] & 255 | ((binaryGz[1] << 8) & 65280)));
var binary=$I$(2).writeText$org_rcsb_cif_api_CifFile$org_rcsb_cif_CifOptions(file, $I$(1).builder$().gzip$Z(false).build$());
org.junit.Assert.assertNotEquals$J$J(35615, (binary[0] & 255 | ((binary[1] << 8) & 65280)));
var textGz=$I$(2).writeText$org_rcsb_cif_api_CifFile$org_rcsb_cif_CifOptions(file, $I$(1).builder$().gzip$Z(true).build$());
org.junit.Assert.assertEquals$J$J(35615, (textGz[0] & 255 | ((textGz[1] << 8) & 65280)));
var text=$I$(2).writeText$org_rcsb_cif_api_CifFile$org_rcsb_cif_CifOptions(file, $I$(1).builder$().gzip$Z(false).build$());
org.junit.Assert.assertNotEquals$J$J(35615, (text[0] & 255 | ((text[1] << 8) & 65280)));
}, p$1);
C$.__ANN__ = [[['M:testEncodingBehavior','void'],['@Test']],
  [['M:testEncoder','.'],['@Test']],
  [['M:testFetchUrlText','.'],['@Test']],
  [['M:testFetchUrlBinary','.'],['@Test']],
  [['M:testFilteringBehavior','.'],['@Test']],
  [['M:testGzipWritingBehavior','.'],['@Test']]];

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:53 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
