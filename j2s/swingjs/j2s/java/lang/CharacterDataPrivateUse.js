(function(){var P$=java.lang,I$=[];
/*c*/var C$=Clazz.newClass(P$, "CharacterDataPrivateUse", null, 'CharacterData');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.instance=Clazz.new_(C$);
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[[]
,['O',['instance','CharacterData']]]

Clazz.newMeth(C$, 'getProperties$I', function (ch) {
return 0;
});

Clazz.newMeth(C$, 'getType$I', function (ch) {
return (ch & 65534) == 65534 ? ($b$[0] = 0, $b$[0]) : ($b$[0] = 18, $b$[0]);
});

Clazz.newMeth(C$, 'isJavaIdentifierStart$I', function (ch) {
return false;
});

Clazz.newMeth(C$, 'isJavaIdentifierPart$I', function (ch) {
return false;
});

Clazz.newMeth(C$, 'isUnicodeIdentifierStart$I', function (ch) {
return false;
});

Clazz.newMeth(C$, 'isUnicodeIdentifierPart$I', function (ch) {
return false;
});

Clazz.newMeth(C$, 'isIdentifierIgnorable$I', function (ch) {
return false;
});

Clazz.newMeth(C$, 'toLowerCase$I', function (ch) {
return ch;
});

Clazz.newMeth(C$, 'toUpperCase$I', function (ch) {
return ch;
});

Clazz.newMeth(C$, 'toTitleCase$I', function (ch) {
return ch;
});

Clazz.newMeth(C$, 'digit$I$I', function (ch, radix) {
return -1;
});

Clazz.newMeth(C$, 'getNumericValue$I', function (ch) {
return -1;
});

Clazz.newMeth(C$, 'isWhitespace$I', function (ch) {
return false;
});

Clazz.newMeth(C$, 'getDirectionality$I', function (ch) {
return $b$[0] = (ch & 65534) == 65534 ? (-1|0) : (0|0), $b$[0];
});

Clazz.newMeth(C$, 'isMirrored$I', function (ch) {
return false;
});

Clazz.newMeth(C$, 'c$', function () {
Clazz.super_(C$, this);
}, 1);
var $b$ = new Int8Array(1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
