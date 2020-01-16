(function(){var P$=Clazz.newPackage("org.rcsb.cif.model.properties"),I$=[[0,'java.util.Objects','java.io.BufferedReader','java.io.InputStreamReader','java.util.stream.Collectors','java.io.FileOutputStream','java.io.File','StringBuffer']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "CreateProperties");

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'main$SA', function (args) {
try {
var inputStream=Clazz.new_(C$).getClass$().getResourceAsStream$S("all.txt");
$I$(1).requireNonNull$TT$S(inputStream, "could not load all.txt");
var lookupReader=Clazz.new_($I$(2,1).c$$java_io_Reader,[Clazz.new_($I$(3,1).c$$java_io_InputStream,[inputStream])]);
var lines=lookupReader.lines$().map$java_util_function_Function(/*addLambdaReuse org.rcsb.cif.model.properties.CreateProperties$lambda1*/(P$.CreateProperties$lambda1$||(P$.CreateProperties$lambda1$=(((P$.CreateProperties$lambda1||
(function(){/*m*/var C$=Clazz.newClass(P$, "CreateProperties$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=1;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_E*/
Clazz.newMeth(C$, 'apply$', function (line) { return (line.split$S("\t"));});
})()
), Clazz.new_(P$.CreateProperties$lambda1.$init$, [this, null])))))).collect$java_util_stream_Collector($I$(4).toList$());
lookupReader.close$();
var lastPrimary=null;
var f=null;
var out=null;
var sb=null;
for (var i=1, n=lines.size$(); i < n; i++) {
var prop=(i == n ? Clazz.array(String, -1, ["", ""]) : lines.get$I(i));
if (prop.length == 0) break;
var primary=prop[0];
var property=prop[1];
if (!primary.equals$O(lastPrimary)) {
lastPrimary=primary;
if (f != null ) {
out=Clazz.new_($I$(5,1).c$$java_io_File,[f]);
out.write$BA(sb.toString().getBytes$());
out.close$();
System.out.println$S("created " + f);
}if (primary.length$() == 0) break;
f=Clazz.new_($I$(6,1).c$$S,["c:/temp/properties/" + primary + ".properties" ]);
sb=Clazz.new_($I$(7,1));
}sb.append$S(property).append$S("\n");
}
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
e.printStackTrace$();
} else {
throw e;
}
}
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:53 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
