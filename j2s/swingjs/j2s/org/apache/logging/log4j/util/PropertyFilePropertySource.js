(function(){var P$=Clazz.newPackage("org.apache.logging.log4j.util"),I$=[[0,'java.util.Properties','org.apache.logging.log4j.util.LoaderUtil','org.apache.logging.log4j.util.LowLevelLogUtil']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "PropertyFilePropertySource", null, 'org.apache.logging.log4j.util.PropertiesPropertySource');

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$S', function (fileName) {
;C$.superclazz.c$$java_util_Properties.apply(this, [C$.loadPropertiesFile$S(fileName)]);C$.$init$.apply(this);
}, 1);

Clazz.newMeth(C$, 'loadPropertiesFile$S', function (fileName) {
var props=Clazz.new_($I$(1,1));
for (var url, $url = $I$(2).findResources$S(fileName).iterator$(); $url.hasNext$()&&((url=($url.next$())),1);) {
try {
var $in=url.openStream$();
try {
props.load$java_io_InputStream($in);
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
$I$(3).logException$S$Throwable("Unable to read " + url, e);
} else {
throw e;
}
}
}finally{/*res*/
try{$in&&$in.close$&&$in.close$()}catch(_){}}
}
return props;
}, 1);

Clazz.newMeth(C$, 'getPriority$', function () {
return 0;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:30:53 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
