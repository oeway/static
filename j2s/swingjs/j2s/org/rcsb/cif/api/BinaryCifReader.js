(function(){var P$=Clazz.newPackage("org.rcsb.cif.api"),p$1={},I$=[[0,'org.rcsb.cif.binary.codec.Codec','java.util.stream.Stream','org.rcsb.cif.Platform','org.rcsb.cif.api.BaseBlock','java.util.Collections','java.util.stream.Collectors','org.rcsb.cif.api.BinaryFile','org.rcsb.cif.model.ProxyCategory']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "BinaryCifReader");

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.options=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_rcsb_cif_CifOptions', function (options) {
;C$.$init$.apply(this);
this.options=options;
}, 1);

Clazz.newMeth(C$, 'read$java_io_InputStream', function (inputStream) {
var unpacked;
try {
unpacked=$I$(1).MESSAGE_PACK_CODEC.decode$java_io_InputStream(inputStream);
} catch (e$$) {
if (Clazz.exceptionOf(e$$,"ClassCastException")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('org.rcsb.cif.ParsingException').c$$S$Exception,["File seems to not be in binary CIF format. Encountered unexpected cast.", e]);
}
} else if (Clazz.exceptionOf(e$$,"Exception")){
var e = e$$;
{
throw Clazz.new_(Clazz.load('org.rcsb.cif.ParsingException').c$$S$Exception,["Parsing failed.", e]);
}
} else {
throw e$$;
}
} finally {
inputStream.close$();
}
var versionString=$I$(1).getStringFromBytes$BA(unpacked.get$O("version"));
if (!versionString.startsWith$S("0.3")) {
throw Clazz.new_(Clazz.load('org.rcsb.cif.ParsingException').c$$S,["Unsupported format version. Current " + versionString + ", required " + "0.3" + "." ]);
}var encoder=$I$(1).getStringFromBytes$BA(unpacked.get$O("encoder"));
var dataBlocks=$I$(2).of$TTA((unpacked.get$O("dataBlocks"))).map$java_util_function_Function(/*addLambdaReuse org.rcsb.cif.api.BinaryCifReader$lambda1*/(P$.BinaryCifReader$lambda1$||(P$.BinaryCifReader$lambda1$=(((P$.BinaryCifReader$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "BinaryCifReader$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$', function (entry) {
var map=entry;
var header=$I$(1).getStringFromBytes$BA(map.get$O("header"));
var categories=$I$(3).getMap$();
try {
for (var o, $o = 0, $$o = map.get$O("categories"); $o<$$o.length&&((o=($$o[$o])),1);$o++) {
var cat=o;
var name=$I$(1).getStringFromBytes$BA(cat.get$O("name"));
categories.put$TK$TV(name.substring$I(1), p$1.createProxyCategory$java_util_Map.apply(this.b$['org.rcsb.cif.api.BinaryCifReader'], [cat]));
}
return Clazz.new_($I$(4,1).c$$java_util_Map$S,[categories, header]);
} catch (e) {
if (Clazz.exceptionOf(e,"NullPointerException")){
return Clazz.new_($I$(4,1).c$$java_util_Map$S,[$I$(5).emptyMap$(), header]);
} else {
throw e;
}
}
});
})()
), Clazz.new_(P$.BinaryCifReader$lambda1.$init$, [this, null])))))).collect$java_util_stream_Collector($I$(6).toList$());
return Clazz.new_($I$(7,1).c$$java_util_List$S$S,[dataBlocks, versionString, encoder]);
});

Clazz.newMeth(C$, 'createProxyCategory$java_util_Map', function (encodedCategory) {
return Clazz.new_($I$(8,1).c$$S$I$OA,[($I$(1).getStringFromBytes$BA(encodedCategory.get$O("name"))).substring$I(1), ((encodedCategory.get$O("rowCount")).objectValue$()|0), encodedCategory.get$O("columns")]);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:25 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
