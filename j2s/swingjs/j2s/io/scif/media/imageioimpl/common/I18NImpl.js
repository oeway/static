(function(){var P$=Clazz.newPackage("io.scif.media.imageioimpl.common"),I$=[[0,'java.util.PropertyResourceBundle']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "I18NImpl");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'getString$S$S', function (className, key) {
var bundle=null;
try {
var stream=Clazz.forName(className).getResourceAsStream$S("properties");
bundle=Clazz.new_($I$(1,1).c$$java_io_InputStream,[stream]);
} catch (e) {
throw Clazz.new_(Clazz.load('RuntimeException').c$$Throwable,[e]);
}
return bundle.handleGetObject$S(key);
}, 1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:18 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
