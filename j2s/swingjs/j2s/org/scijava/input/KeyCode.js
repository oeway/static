(function(){var P$=Clazz.newPackage("org.scijava.input"),I$=[[0,'java.util.HashMap']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*e*/var C$=Clazz.newClass(P$, "KeyCode", null, 'Enum');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
$vals=Clazz.array(C$,[0]);
Clazz.newEnumConst($vals, C$.c$$I, "ENTER", 0, [10]);
Clazz.newEnumConst($vals, C$.c$$I, "BACK_SPACE", 1, [8]);
Clazz.newEnumConst($vals, C$.c$$I, "TAB", 2, [9]);
Clazz.newEnumConst($vals, C$.c$$I, "CANCEL", 3, [3]);
Clazz.newEnumConst($vals, C$.c$$I, "CLEAR", 4, [12]);
Clazz.newEnumConst($vals, C$.c$$I, "SHIFT", 5, [16]);
Clazz.newEnumConst($vals, C$.c$$I, "CONTROL", 6, [17]);
Clazz.newEnumConst($vals, C$.c$$I, "ALT", 7, [18]);
Clazz.newEnumConst($vals, C$.c$$I, "PAUSE", 8, [19]);
Clazz.newEnumConst($vals, C$.c$$I, "CAPS_LOCK", 9, [20]);
Clazz.newEnumConst($vals, C$.c$$I, "ESCAPE", 10, [27]);
Clazz.newEnumConst($vals, C$.c$$I, "SPACE", 11, [32]);
Clazz.newEnumConst($vals, C$.c$$I, "PAGE_UP", 12, [33]);
Clazz.newEnumConst($vals, C$.c$$I, "PAGE_DOWN", 13, [34]);
Clazz.newEnumConst($vals, C$.c$$I, "END", 14, [35]);
Clazz.newEnumConst($vals, C$.c$$I, "HOME", 15, [36]);
Clazz.newEnumConst($vals, C$.c$$I, "LEFT", 16, [37]);
Clazz.newEnumConst($vals, C$.c$$I, "UP", 17, [38]);
Clazz.newEnumConst($vals, C$.c$$I, "RIGHT", 18, [39]);
Clazz.newEnumConst($vals, C$.c$$I, "DOWN", 19, [40]);
Clazz.newEnumConst($vals, C$.c$$I, "COMMA", 20, [44]);
Clazz.newEnumConst($vals, C$.c$$I, "MINUS", 21, [45]);
Clazz.newEnumConst($vals, C$.c$$I, "PERIOD", 22, [46]);
Clazz.newEnumConst($vals, C$.c$$I, "SLASH", 23, [47]);
Clazz.newEnumConst($vals, C$.c$$I, "NUM0", 24, [48]);
Clazz.newEnumConst($vals, C$.c$$I, "NUM1", 25, [49]);
Clazz.newEnumConst($vals, C$.c$$I, "NUM2", 26, [50]);
Clazz.newEnumConst($vals, C$.c$$I, "NUM3", 27, [51]);
Clazz.newEnumConst($vals, C$.c$$I, "NUM4", 28, [52]);
Clazz.newEnumConst($vals, C$.c$$I, "NUM5", 29, [53]);
Clazz.newEnumConst($vals, C$.c$$I, "NUM6", 30, [54]);
Clazz.newEnumConst($vals, C$.c$$I, "NUM7", 31, [55]);
Clazz.newEnumConst($vals, C$.c$$I, "NUM8", 32, [56]);
Clazz.newEnumConst($vals, C$.c$$I, "NUM9", 33, [57]);
Clazz.newEnumConst($vals, C$.c$$I, "SEMICOLON", 34, [59]);
Clazz.newEnumConst($vals, C$.c$$I, "EQUALS", 35, [61]);
Clazz.newEnumConst($vals, C$.c$$I, "A", 36, [65]);
Clazz.newEnumConst($vals, C$.c$$I, "B", 37, [66]);
Clazz.newEnumConst($vals, C$.c$$I, "C", 38, [67]);
Clazz.newEnumConst($vals, C$.c$$I, "D", 39, [68]);
Clazz.newEnumConst($vals, C$.c$$I, "E", 40, [69]);
Clazz.newEnumConst($vals, C$.c$$I, "F", 41, [70]);
Clazz.newEnumConst($vals, C$.c$$I, "G", 42, [71]);
Clazz.newEnumConst($vals, C$.c$$I, "H", 43, [72]);
Clazz.newEnumConst($vals, C$.c$$I, "I", 44, [73]);
Clazz.newEnumConst($vals, C$.c$$I, "J", 45, [74]);
Clazz.newEnumConst($vals, C$.c$$I, "K", 46, [75]);
Clazz.newEnumConst($vals, C$.c$$I, "L", 47, [76]);
Clazz.newEnumConst($vals, C$.c$$I, "M", 48, [77]);
Clazz.newEnumConst($vals, C$.c$$I, "N", 49, [78]);
Clazz.newEnumConst($vals, C$.c$$I, "O", 50, [79]);
Clazz.newEnumConst($vals, C$.c$$I, "P", 51, [80]);
Clazz.newEnumConst($vals, C$.c$$I, "Q", 52, [81]);
Clazz.newEnumConst($vals, C$.c$$I, "R", 53, [82]);
Clazz.newEnumConst($vals, C$.c$$I, "S", 54, [83]);
Clazz.newEnumConst($vals, C$.c$$I, "T", 55, [84]);
Clazz.newEnumConst($vals, C$.c$$I, "U", 56, [85]);
Clazz.newEnumConst($vals, C$.c$$I, "V", 57, [86]);
Clazz.newEnumConst($vals, C$.c$$I, "W", 58, [87]);
Clazz.newEnumConst($vals, C$.c$$I, "X", 59, [88]);
Clazz.newEnumConst($vals, C$.c$$I, "Y", 60, [89]);
Clazz.newEnumConst($vals, C$.c$$I, "Z", 61, [90]);
Clazz.newEnumConst($vals, C$.c$$I, "OPEN_BRACKET", 62, [91]);
Clazz.newEnumConst($vals, C$.c$$I, "BACK_SLASH", 63, [92]);
Clazz.newEnumConst($vals, C$.c$$I, "CLOSE_BRACKET", 64, [93]);
Clazz.newEnumConst($vals, C$.c$$I, "NUMPAD_0", 65, [96]);
Clazz.newEnumConst($vals, C$.c$$I, "NUMPAD_1", 66, [97]);
Clazz.newEnumConst($vals, C$.c$$I, "NUMPAD_2", 67, [98]);
Clazz.newEnumConst($vals, C$.c$$I, "NUMPAD_3", 68, [99]);
Clazz.newEnumConst($vals, C$.c$$I, "NUMPAD_4", 69, [100]);
Clazz.newEnumConst($vals, C$.c$$I, "NUMPAD_5", 70, [101]);
Clazz.newEnumConst($vals, C$.c$$I, "NUMPAD_6", 71, [102]);
Clazz.newEnumConst($vals, C$.c$$I, "NUMPAD_7", 72, [103]);
Clazz.newEnumConst($vals, C$.c$$I, "NUMPAD_8", 73, [104]);
Clazz.newEnumConst($vals, C$.c$$I, "NUMPAD_9", 74, [105]);
Clazz.newEnumConst($vals, C$.c$$I, "NUMPAD_ASTERISK", 75, [106]);
Clazz.newEnumConst($vals, C$.c$$I, "NUMPAD_PLUS", 76, [107]);
Clazz.newEnumConst($vals, C$.c$$I, "NUMPAD_SEPARATOR", 77, [108]);
Clazz.newEnumConst($vals, C$.c$$I, "NUMPAD_MINUS", 78, [109]);
Clazz.newEnumConst($vals, C$.c$$I, "NUMPAD_PERIOD", 79, [110]);
Clazz.newEnumConst($vals, C$.c$$I, "NUMPAD_SLASH", 80, [111]);
Clazz.newEnumConst($vals, C$.c$$I, "DELETE", 81, [127]);
Clazz.newEnumConst($vals, C$.c$$I, "NUM_LOCK", 82, [144]);
Clazz.newEnumConst($vals, C$.c$$I, "SCROLL_LOCK", 83, [145]);
Clazz.newEnumConst($vals, C$.c$$I, "F1", 84, [112]);
Clazz.newEnumConst($vals, C$.c$$I, "F2", 85, [113]);
Clazz.newEnumConst($vals, C$.c$$I, "F3", 86, [114]);
Clazz.newEnumConst($vals, C$.c$$I, "F4", 87, [115]);
Clazz.newEnumConst($vals, C$.c$$I, "F5", 88, [116]);
Clazz.newEnumConst($vals, C$.c$$I, "F6", 89, [117]);
Clazz.newEnumConst($vals, C$.c$$I, "F7", 90, [118]);
Clazz.newEnumConst($vals, C$.c$$I, "F8", 91, [119]);
Clazz.newEnumConst($vals, C$.c$$I, "F9", 92, [120]);
Clazz.newEnumConst($vals, C$.c$$I, "F10", 93, [121]);
Clazz.newEnumConst($vals, C$.c$$I, "F11", 94, [122]);
Clazz.newEnumConst($vals, C$.c$$I, "F12", 95, [123]);
Clazz.newEnumConst($vals, C$.c$$I, "F13", 96, [61440]);
Clazz.newEnumConst($vals, C$.c$$I, "F14", 97, [61441]);
Clazz.newEnumConst($vals, C$.c$$I, "F15", 98, [61442]);
Clazz.newEnumConst($vals, C$.c$$I, "F16", 99, [61443]);
Clazz.newEnumConst($vals, C$.c$$I, "F17", 100, [61444]);
Clazz.newEnumConst($vals, C$.c$$I, "F18", 101, [61445]);
Clazz.newEnumConst($vals, C$.c$$I, "F19", 102, [61446]);
Clazz.newEnumConst($vals, C$.c$$I, "F20", 103, [61447]);
Clazz.newEnumConst($vals, C$.c$$I, "F21", 104, [61448]);
Clazz.newEnumConst($vals, C$.c$$I, "F22", 105, [61449]);
Clazz.newEnumConst($vals, C$.c$$I, "F23", 106, [61450]);
Clazz.newEnumConst($vals, C$.c$$I, "F24", 107, [61451]);
Clazz.newEnumConst($vals, C$.c$$I, "PRINTSCREEN", 108, [154]);
Clazz.newEnumConst($vals, C$.c$$I, "INSERT", 109, [155]);
Clazz.newEnumConst($vals, C$.c$$I, "HELP", 110, [156]);
Clazz.newEnumConst($vals, C$.c$$I, "META", 111, [157]);
Clazz.newEnumConst($vals, C$.c$$I, "BACK_QUOTE", 112, [192]);
Clazz.newEnumConst($vals, C$.c$$I, "QUOTE", 113, [222]);
Clazz.newEnumConst($vals, C$.c$$I, "KP_UP", 114, [224]);
Clazz.newEnumConst($vals, C$.c$$I, "KP_DOWN", 115, [225]);
Clazz.newEnumConst($vals, C$.c$$I, "KP_LEFT", 116, [226]);
Clazz.newEnumConst($vals, C$.c$$I, "KP_RIGHT", 117, [227]);
Clazz.newEnumConst($vals, C$.c$$I, "DEAD_GRAVE", 118, [128]);
Clazz.newEnumConst($vals, C$.c$$I, "DEAD_ACUTE", 119, [129]);
Clazz.newEnumConst($vals, C$.c$$I, "DEAD_CIRCUMFLEX", 120, [130]);
Clazz.newEnumConst($vals, C$.c$$I, "DEAD_TILDE", 121, [131]);
Clazz.newEnumConst($vals, C$.c$$I, "DEAD_MACRON", 122, [132]);
Clazz.newEnumConst($vals, C$.c$$I, "DEAD_BREVE", 123, [133]);
Clazz.newEnumConst($vals, C$.c$$I, "DEAD_ABOVEDOT", 124, [134]);
Clazz.newEnumConst($vals, C$.c$$I, "DEAD_DIAERESIS", 125, [135]);
Clazz.newEnumConst($vals, C$.c$$I, "DEAD_ABOVERING", 126, [136]);
Clazz.newEnumConst($vals, C$.c$$I, "DEAD_DOUBLEACUTE", 127, [137]);
Clazz.newEnumConst($vals, C$.c$$I, "DEAD_CARON", 128, [138]);
Clazz.newEnumConst($vals, C$.c$$I, "DEAD_CEDILLA", 129, [139]);
Clazz.newEnumConst($vals, C$.c$$I, "DEAD_OGONEK", 130, [140]);
Clazz.newEnumConst($vals, C$.c$$I, "DEAD_IOTA", 131, [141]);
Clazz.newEnumConst($vals, C$.c$$I, "DEAD_VOICED_SOUND", 132, [142]);
Clazz.newEnumConst($vals, C$.c$$I, "DEAD_SEMIVOICED_SOUND", 133, [143]);
Clazz.newEnumConst($vals, C$.c$$I, "AMPERSAND", 134, [150]);
Clazz.newEnumConst($vals, C$.c$$I, "ASTERISK", 135, [151]);
Clazz.newEnumConst($vals, C$.c$$I, "QUOTEDBL", 136, [152]);
Clazz.newEnumConst($vals, C$.c$$I, "LESS", 137, [153]);
Clazz.newEnumConst($vals, C$.c$$I, "GREATER", 138, [160]);
Clazz.newEnumConst($vals, C$.c$$I, "BRACELEFT", 139, [161]);
Clazz.newEnumConst($vals, C$.c$$I, "BRACERIGHT", 140, [162]);
Clazz.newEnumConst($vals, C$.c$$I, "AT", 141, [512]);
Clazz.newEnumConst($vals, C$.c$$I, "COLON", 142, [513]);
Clazz.newEnumConst($vals, C$.c$$I, "CIRCUMFLEX", 143, [514]);
Clazz.newEnumConst($vals, C$.c$$I, "DOLLAR", 144, [515]);
Clazz.newEnumConst($vals, C$.c$$I, "EURO_SIGN", 145, [516]);
Clazz.newEnumConst($vals, C$.c$$I, "EXCLAMATION_MARK", 146, [517]);
Clazz.newEnumConst($vals, C$.c$$I, "INVERTED_EXCLAMATION_MARK", 147, [518]);
Clazz.newEnumConst($vals, C$.c$$I, "LEFT_PARENTHESIS", 148, [519]);
Clazz.newEnumConst($vals, C$.c$$I, "NUMBER_SIGN", 149, [520]);
Clazz.newEnumConst($vals, C$.c$$I, "PLUS", 150, [521]);
Clazz.newEnumConst($vals, C$.c$$I, "RIGHT_PARENTHESIS", 151, [522]);
Clazz.newEnumConst($vals, C$.c$$I, "UNDERSCORE", 152, [523]);
Clazz.newEnumConst($vals, C$.c$$I, "WINDOWS", 153, [524]);
Clazz.newEnumConst($vals, C$.c$$I, "CONTEXT_MENU", 154, [525]);
Clazz.newEnumConst($vals, C$.c$$I, "FINAL", 155, [24]);
Clazz.newEnumConst($vals, C$.c$$I, "CONVERT", 156, [28]);
Clazz.newEnumConst($vals, C$.c$$I, "NONCONVERT", 157, [29]);
Clazz.newEnumConst($vals, C$.c$$I, "ACCEPT", 158, [30]);
Clazz.newEnumConst($vals, C$.c$$I, "MODECHANGE", 159, [31]);
Clazz.newEnumConst($vals, C$.c$$I, "KANA", 160, [21]);
Clazz.newEnumConst($vals, C$.c$$I, "KANJI", 161, [25]);
Clazz.newEnumConst($vals, C$.c$$I, "ALPHANUMERIC", 162, [240]);
Clazz.newEnumConst($vals, C$.c$$I, "KATAKANA", 163, [241]);
Clazz.newEnumConst($vals, C$.c$$I, "HIRAGANA", 164, [242]);
Clazz.newEnumConst($vals, C$.c$$I, "FULL_WIDTH", 165, [243]);
Clazz.newEnumConst($vals, C$.c$$I, "HALF_WIDTH", 166, [244]);
Clazz.newEnumConst($vals, C$.c$$I, "ROMAN_CHARACTERS", 167, [245]);
Clazz.newEnumConst($vals, C$.c$$I, "ALL_CANDIDATES", 168, [256]);
Clazz.newEnumConst($vals, C$.c$$I, "PREVIOUS_CANDIDATE", 169, [257]);
Clazz.newEnumConst($vals, C$.c$$I, "CODE_INPUT", 170, [258]);
Clazz.newEnumConst($vals, C$.c$$I, "JAPANESE_KATAKANA", 171, [259]);
Clazz.newEnumConst($vals, C$.c$$I, "JAPANESE_HIRAGANA", 172, [260]);
Clazz.newEnumConst($vals, C$.c$$I, "JAPANESE_ROMAN", 173, [261]);
Clazz.newEnumConst($vals, C$.c$$I, "KANA_LOCK", 174, [262]);
Clazz.newEnumConst($vals, C$.c$$I, "INPUT_METHOD_ON_OFF", 175, [263]);
Clazz.newEnumConst($vals, C$.c$$I, "CUT", 176, [65489]);
Clazz.newEnumConst($vals, C$.c$$I, "COPY", 177, [65485]);
Clazz.newEnumConst($vals, C$.c$$I, "PASTE", 178, [65487]);
Clazz.newEnumConst($vals, C$.c$$I, "UNDO", 179, [65483]);
Clazz.newEnumConst($vals, C$.c$$I, "AGAIN", 180, [65481]);
Clazz.newEnumConst($vals, C$.c$$I, "FIND", 181, [65488]);
Clazz.newEnumConst($vals, C$.c$$I, "PROPS", 182, [65482]);
Clazz.newEnumConst($vals, C$.c$$I, "STOP", 183, [65480]);
Clazz.newEnumConst($vals, C$.c$$I, "COMPOSE", 184, [65312]);
Clazz.newEnumConst($vals, C$.c$$I, "ALT_GRAPH", 185, [65406]);
Clazz.newEnumConst($vals, C$.c$$I, "BEGIN", 186, [65368]);
Clazz.newEnumConst($vals, C$.c$$I, "UNDEFINED", 187, [0]);
C$.CODES=Clazz.new_(1,{K:"Integer",V:"org.scijava.input.KeyCode"},$I$(1,1));
C$.NAMES=Clazz.new_(1,{K:"String",V:"org.scijava.input.KeyCode"},$I$(1,1));
{
for (var keyCode, $keyCode = 0, $$keyCode = C$.values$(); $keyCode<$$keyCode.length&&((keyCode=($$keyCode[$keyCode])),1);$keyCode++) {
C$.CODES.put$TK$TV(new Integer(keyCode.getCode$()), keyCode);
C$.NAMES.put$TK$TV(keyCode.name$(), keyCode);
}
};
}

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['I',['code']]
,['O',['CODES','java.util.Map','+NAMES']]]

Clazz.newMeth(C$, 'c$$I', function (code) {
;C$.$init$.apply(this);
this.code=code;
}, 1);

Clazz.newMeth(C$, 'getCode$', function () {
return this.code;
});

Clazz.newMeth(C$, 'get$I', function (code) {
var keyCode=C$.CODES.get$O(new Integer(code));
if (keyCode == null ) return C$.UNDEFINED;
return keyCode;
}, 1);

Clazz.newMeth(C$, 'get$S', function (name) {
var keyCode=C$.NAMES.get$O(name);
if (keyCode == null ) return C$.UNDEFINED;
return keyCode;
}, 1);

Clazz.newMeth(C$);
var $vals=[];
Clazz.newMeth(C$, 'values$', function() { return $vals }, 1);
Clazz.newMeth(C$, 'valueOf$S', function(name) { for (var val in $vals){ if ($vals[val].name == name) return $vals[val]} return null }, 1);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:25 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
