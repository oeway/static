(function(){var P$=Clazz.newPackage("org.apache.log4j"),I$=[[0,'org.apache.logging.log4j.util.Strings']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "Layout");

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.LINE_SEP=$I$(1).LINE_SEPARATOR;
C$.LINE_SEP_LEN=$I$(1).LINE_SEPARATOR.length$();
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['I',['LINE_SEP_LEN'],'S',['LINE_SEP']]]

Clazz.newMeth(C$, 'getContentType$', function () {
return "text/plain";
});

Clazz.newMeth(C$, 'getHeader$', function () {
return null;
});

Clazz.newMeth(C$, 'getFooter$', function () {
return null;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v0');//Created 2019-12-22 13:24:47 Java2ScriptVisitor version 3.2.6-v0 net.sf.j2s.core.jar version 3.2.6-v0
