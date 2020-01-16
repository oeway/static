(function(){var P$=Clazz.newPackage("org.scijava.script"),I$=[];
/*c*/var C$=Clazz.newClass(P$, "AutoCompletionResult");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['startIndex'],'O',['matches','java.util.List']]]

Clazz.newMeth(C$, 'c$$java_util_List', function (matches) {
C$.c$$java_util_List$I.apply(this, [matches, 0]);
}, 1);

Clazz.newMeth(C$, 'c$$java_util_List$I', function (matches, startIndex) {
;C$.$init$.apply(this);
this.matches=matches;
this.startIndex=startIndex;
}, 1);

Clazz.newMeth(C$, 'getStartIndex$', function () {
return this.startIndex;
});

Clazz.newMeth(C$, 'getMatches$', function () {
return this.matches;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:29 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
