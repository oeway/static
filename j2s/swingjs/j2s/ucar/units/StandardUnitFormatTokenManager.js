(function(){var P$=Clazz.newPackage("ucar.units"),p$1={},I$=[[0,'Error','ucar.units.TokenMgrError','ucar.units.Token']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "StandardUnitFormatTokenManager", null, null, 'ucar.units.StandardUnitFormatConstants');

C$.$clinit$=2;

C$.$static$ = function() {C$.$static$=0;
C$.jjnextStates=Clazz.array(Integer.TYPE, -1, [12, 13, 17, 18, 5, 19, 25, 29, 19, 25, 29, 36, 42, 48, 2, 3, 32, 33, 38, 39, 44, 45]);
C$.jjstrLiteralImages=Clazz.array(String, -1, ["", null, "+", "-", ":", null, null, null, "(", ")", null, "^", ".", "*", null, null, null, null, null, null, null, null]);
C$.lexStateNames=Clazz.array(String, -1, ["DEFAULT"]);
}

Clazz.newMeth(C$, '$init$', function () {
this.debugStream=System.out;
this.jjrounds=Clazz.array(Integer.TYPE, [49]);
this.jjstateSet=Clazz.array(Integer.TYPE, [98]);
this.curLexState=0;
this.defaultLexState=0;
}, 1);

C$.$fields$=[['C',['curChar'],'I',['curLexState','defaultLexState','jjnewStateCnt','jjround','jjmatchedPos','jjmatchedKind'],'O',['debugStream','java.io.PrintStream','input_stream','ucar.units.SimpleCharStream','jjrounds','int[]','+jjstateSet']]
,['O',['jjnextStates','int[]','jjstrLiteralImages','String[]','+lexStateNames']]]

Clazz.newMeth(C$, 'setDebugStream$java_io_PrintStream', function (ds) {
this.debugStream=ds;
});

Clazz.newMeth(C$, 'jjStopStringLiteralDfa_0$I$J', function (pos, active0) {
switch (pos) {
default:
return -1;
}
}, p$1);

Clazz.newMeth(C$, 'jjStartNfa_0$I$J', function (pos, active0) {
return p$1.jjMoveNfa_0$I$I.apply(this, [p$1.jjStopStringLiteralDfa_0$I$J.apply(this, [pos, active0]), pos + 1]);
}, p$1);

Clazz.newMeth(C$, 'jjStopAtPos$I$I', function (pos, kind) {
this.jjmatchedKind=kind;
this.jjmatchedPos=pos;
return pos + 1;
}, p$1);

Clazz.newMeth(C$, 'jjMoveStringLiteralDfa0_0', function () {
switch (this.curChar.$c()) {
case 40:
return p$1.jjStopAtPos$I$I.apply(this, [0, 8]);
case 41:
return p$1.jjStopAtPos$I$I.apply(this, [0, 9]);
case 42:
return p$1.jjStopAtPos$I$I.apply(this, [0, 13]);
case 43:
return p$1.jjStopAtPos$I$I.apply(this, [0, 2]);
case 45:
return p$1.jjStopAtPos$I$I.apply(this, [0, 3]);
case 46:
return p$1.jjStopAtPos$I$I.apply(this, [0, 12]);
case 58:
return p$1.jjStopAtPos$I$I.apply(this, [0, 4]);
case 84:
return p$1.jjStartNfaWithStates_0$I$I$I.apply(this, [0, 17, 49]);
case 94:
return p$1.jjStopAtPos$I$I.apply(this, [0, 11]);
case 116:
return p$1.jjStartNfaWithStates_0$I$I$I.apply(this, [0, 17, 49]);
default:
return p$1.jjMoveNfa_0$I$I.apply(this, [1, 0]);
}
}, p$1);

Clazz.newMeth(C$, 'jjStartNfaWithStates_0$I$I$I', function (pos, kind, state) {
this.jjmatchedKind=kind;
this.jjmatchedPos=pos;
try {
this.curChar=this.input_stream.readChar$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return pos + 1;
} else {
throw e;
}
}
return p$1.jjMoveNfa_0$I$I.apply(this, [state, pos + 1]);
}, p$1);

Clazz.newMeth(C$, 'jjMoveNfa_0$I$I', function (startState, curPos) {
var startsAt=0;
this.jjnewStateCnt=49;
var i=1;
this.jjstateSet[0]=startState;
var kind=2147483647;
for (; ; ) {
if (++this.jjround == 2147483647) p$1.ReInitRounds.apply(this, []);
if (this.curChar.$c() < 64 ) {
var l=1 << this.curChar.$c();
do {
switch (this.jjstateSet[--i]) {
case 1:
if ((287948901175001088 & l) != 0) {
if (kind > 5) kind=5;
p$1.jjCheckNAdd$I.apply(this, [0]);
} else if ((4294977024 & l) != 0) {
if (kind > 1) kind=1;
p$1.jjCheckNAddStates$I$I.apply(this, [0, 7]);
} else if ((704374636544 & l) != 0) {
if (kind > 16) kind=16;
} else if (this.curChar.$c() == 47 ) {
if (kind > 14) kind=14;
}break;
case 49:
case 9:
if ((287948901175001088 & l) != 0) p$1.jjCheckNAddTwoStates$I$I.apply(this, [9, 10]);
break;
case 0:
if ((287948901175001088 & l) == 0) break;
if (kind > 5) kind=5;
p$1.jjCheckNAdd$I.apply(this, [0]);
break;
case 2:
if ((43980465111040 & l) != 0) p$1.jjCheckNAdd$I.apply(this, [3]);
break;
case 3:
if ((287948901175001088 & l) == 0) break;
if (kind > 10) kind=10;
p$1.jjCheckNAdd$I.apply(this, [3]);
break;
case 4:
if (this.curChar.$c() == 47 ) kind=14;
break;
case 6:
if ((4294977024 & l) == 0) break;
if (kind > 15) kind=15;
this.jjstateSet[this.jjnewStateCnt++]=6;
break;
case 7:
if ((704374636544 & l) != 0) kind=16;
break;
case 11:
if ((4294977024 & l) == 0) break;
if (kind > 1) kind=1;
p$1.jjCheckNAddStates$I$I.apply(this, [0, 7]);
break;
case 12:
if ((4294977024 & l) == 0) break;
if (kind > 1) kind=1;
p$1.jjCheckNAdd$I.apply(this, [12]);
break;
case 13:
if ((4294977024 & l) != 0) p$1.jjCheckNAddTwoStates$I$I.apply(this, [13, 17]);
break;
case 15:
if ((4294977024 & l) == 0) break;
if (kind > 14) kind=14;
this.jjstateSet[this.jjnewStateCnt++]=15;
break;
case 18:
if ((4294977024 & l) != 0) p$1.jjCheckNAddTwoStates$I$I.apply(this, [18, 5]);
break;
case 19:
if ((4294977024 & l) != 0) p$1.jjCheckNAddStates$I$I.apply(this, [8, 10]);
break;
case 21:
if ((4294977024 & l) == 0) break;
if (kind > 15) kind=15;
this.jjstateSet[this.jjnewStateCnt++]=21;
break;
case 32:
if (this.curChar.$c() != 58 ) break;
if (kind > 19) kind=19;
p$1.jjCheckNAdd$I.apply(this, [33]);
break;
case 33:
if ((4294977024 & l) == 0) break;
if (kind > 19) kind=19;
p$1.jjCheckNAdd$I.apply(this, [33]);
break;
case 35:
if (this.curChar.$c() == 40 ) this.jjstateSet[this.jjnewStateCnt++]=34;
break;
case 38:
if (this.curChar.$c() != 58 ) break;
if (kind > 20) kind=20;
p$1.jjCheckNAdd$I.apply(this, [39]);
break;
case 39:
if ((4294977024 & l) == 0) break;
if (kind > 20) kind=20;
p$1.jjCheckNAdd$I.apply(this, [39]);
break;
case 41:
if (this.curChar.$c() == 40 ) this.jjstateSet[this.jjnewStateCnt++]=40;
break;
case 44:
if (this.curChar.$c() != 58 ) break;
if (kind > 21) kind=21;
p$1.jjCheckNAdd$I.apply(this, [45]);
break;
case 45:
if ((4294977024 & l) == 0) break;
if (kind > 21) kind=21;
p$1.jjCheckNAdd$I.apply(this, [45]);
break;
case 47:
if (this.curChar.$c() == 40 ) this.jjstateSet[this.jjnewStateCnt++]=46;
break;
default:
break;
}
} while (i != startsAt);
} else if (this.curChar.$c() < 128 ) {
var l=1 << (this.curChar.$c() & 63);
do {
switch (this.jjstateSet[--i]) {
case 1:
if ((576460745995190270 & l) != 0) {
if (kind > 18) kind=18;
p$1.jjCheckNAddTwoStates$I$I.apply(this, [8, 9]);
} else if (this.curChar.$c() == 64 ) {
if (kind > 15) kind=15;
this.jjstateSet[this.jjnewStateCnt++]=6;
}if ((17592186048512 & l) != 0) p$1.jjAddStates$I$I.apply(this, [11, 13]);
 else if ((137438953504 & l) != 0) p$1.jjAddStates$I$I.apply(this, [14, 15]);
break;
case 49:
case 8:
if ((576460745995190270 & l) == 0) break;
if (kind > 18) kind=18;
p$1.jjCheckNAddTwoStates$I$I.apply(this, [8, 9]);
break;
case 5:
if (this.curChar.$c() != 64 ) break;
kind=15;
this.jjstateSet[this.jjnewStateCnt++]=6;
break;
case 10:
if ((576460745995190270 & l) == 0) break;
if (kind > 18) kind=18;
this.jjstateSet[this.jjnewStateCnt++]=10;
break;
case 14:
if ((1125899907104768 & l) != 0) this.jjstateSet[this.jjnewStateCnt++]=15;
break;
case 16:
if ((137438953504 & l) != 0) this.jjstateSet[this.jjnewStateCnt++]=14;
break;
case 17:
if ((281474976776192 & l) != 0) this.jjstateSet[this.jjnewStateCnt++]=16;
break;
case 20:
if ((137438953504 & l) != 0) p$1.jjCheckNAdd$I.apply(this, [21]);
break;
case 22:
if ((34359738376 & l) != 0) this.jjstateSet[this.jjnewStateCnt++]=20;
break;
case 23:
if ((70368744194048 & l) != 0) this.jjstateSet[this.jjnewStateCnt++]=22;
break;
case 24:
if ((2199023256064 & l) != 0) this.jjstateSet[this.jjnewStateCnt++]=23;
break;
case 25:
if ((2251799814209536 & l) != 0) this.jjstateSet[this.jjnewStateCnt++]=24;
break;
case 26:
if ((35184372097024 & l) != 0) p$1.jjCheckNAdd$I.apply(this, [21]);
break;
case 27:
if ((140737488388096 & l) != 0) this.jjstateSet[this.jjnewStateCnt++]=26;
break;
case 28:
if ((1125899907104768 & l) != 0) this.jjstateSet[this.jjnewStateCnt++]=27;
break;
case 29:
if ((274877907008 & l) != 0) this.jjstateSet[this.jjnewStateCnt++]=28;
break;
case 30:
if ((17592186048512 & l) != 0) p$1.jjAddStates$I$I.apply(this, [11, 13]);
break;
case 31:
if ((137438953504 & l) == 0) break;
if (kind > 19) kind=19;
p$1.jjAddStates$I$I.apply(this, [16, 17]);
break;
case 34:
if ((1125899907104768 & l) != 0) this.jjstateSet[this.jjnewStateCnt++]=31;
break;
case 36:
if ((17179869188 & l) != 0) this.jjstateSet[this.jjnewStateCnt++]=35;
break;
case 37:
if ((137438953504 & l) == 0) break;
if (kind > 20) kind=20;
p$1.jjAddStates$I$I.apply(this, [18, 19]);
break;
case 40:
if ((1125899907104768 & l) != 0) this.jjstateSet[this.jjnewStateCnt++]=37;
break;
case 42:
if ((70368744194048 & l) != 0) this.jjstateSet[this.jjnewStateCnt++]=41;
break;
case 43:
if ((137438953504 & l) == 0) break;
if (kind > 21) kind=21;
p$1.jjAddStates$I$I.apply(this, [20, 21]);
break;
case 46:
if ((1125899907104768 & l) != 0) this.jjstateSet[this.jjnewStateCnt++]=43;
break;
case 48:
if ((549755814016 & l) != 0) this.jjstateSet[this.jjnewStateCnt++]=47;
break;
default:
break;
}
} while (i != startsAt);
} else {
var i2=(this.curChar.$c() & 255) >> 6;
var l2=1 << (this.curChar.$c() & 63);
do {
switch (this.jjstateSet[--i]) {
default:
break;
}
} while (i != startsAt);
}if (kind != 2147483647) {
this.jjmatchedKind=kind;
this.jjmatchedPos=curPos;
kind=2147483647;
}++curPos;
if ((i=this.jjnewStateCnt) == (startsAt=49 - (this.jjnewStateCnt=startsAt))) return curPos;
try {
this.curChar=this.input_stream.readChar$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
return curPos;
} else {
throw e;
}
}
}
}, p$1);

Clazz.newMeth(C$, 'c$$ucar_units_SimpleCharStream', function (stream) {
;C$.$init$.apply(this);
if (false) throw Clazz.new_($I$(1,1).c$$S,["ERROR: Cannot use a static CharStream class with a non-static lexical analyzer."]);
this.input_stream=stream;
}, 1);

Clazz.newMeth(C$, 'c$$ucar_units_SimpleCharStream$I', function (stream, lexState) {
C$.c$$ucar_units_SimpleCharStream.apply(this, [stream]);
this.SwitchTo$I(lexState);
}, 1);

Clazz.newMeth(C$, 'ReInit$ucar_units_SimpleCharStream', function (stream) {
this.jjmatchedPos=this.jjnewStateCnt=0;
this.curLexState=this.defaultLexState;
this.input_stream=stream;
p$1.ReInitRounds.apply(this, []);
});

Clazz.newMeth(C$, 'ReInitRounds', function () {
var i;
this.jjround=-2147483647;
for (i=49; i-- > 0; ) this.jjrounds[i]=-2147483648;

}, p$1);

Clazz.newMeth(C$, 'ReInit$ucar_units_SimpleCharStream$I', function (stream, lexState) {
this.ReInit$ucar_units_SimpleCharStream(stream);
this.SwitchTo$I(lexState);
});

Clazz.newMeth(C$, 'SwitchTo$I', function (lexState) {
if (lexState >= 1 || lexState < 0 ) throw Clazz.new_($I$(2,1).c$$S$I,["Error: Ignoring invalid lexical state : " + lexState + ". State unchanged." , 2]);
 else this.curLexState=lexState;
});

Clazz.newMeth(C$, 'jjFillToken$', function () {
var t;
var curTokenImage;
var beginLine;
var endLine;
var beginColumn;
var endColumn;
var im=C$.jjstrLiteralImages[this.jjmatchedKind];
curTokenImage=(im == null ) ? this.input_stream.GetImage$() : im;
beginLine=this.input_stream.getBeginLine$();
beginColumn=this.input_stream.getBeginColumn$();
endLine=this.input_stream.getEndLine$();
endColumn=this.input_stream.getEndColumn$();
t=$I$(3).newToken$I$S(this.jjmatchedKind, curTokenImage);
t.beginLine=beginLine;
t.endLine=endLine;
t.beginColumn=beginColumn;
t.endColumn=endColumn;
return t;
});

Clazz.newMeth(C$, 'getNextToken$', function () {
var matchedToken;
var curPos=0;
 EOFLoop : for (; ; ) {
try {
this.curChar=this.input_stream.BeginToken$();
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
this.jjmatchedKind=0;
matchedToken=this.jjFillToken$();
return matchedToken;
} else {
throw e;
}
}
this.jjmatchedKind=2147483647;
this.jjmatchedPos=0;
curPos=p$1.jjMoveStringLiteralDfa0_0.apply(this, []);
if (this.jjmatchedKind != 2147483647) {
if (this.jjmatchedPos + 1 < curPos) this.input_stream.backup$I(curPos - this.jjmatchedPos - 1 );
matchedToken=this.jjFillToken$();
return matchedToken;
}var error_line=this.input_stream.getEndLine$();
var error_column=this.input_stream.getEndColumn$();
var error_after=null;
var EOFSeen=false;
try {
this.input_stream.readChar$();
this.input_stream.backup$I(1);
} catch (e1) {
if (Clazz.exceptionOf(e1,"java.io.IOException")){
EOFSeen=true;
error_after=curPos <= 1 ? "" : this.input_stream.GetImage$();
if (this.curChar == "\n" || this.curChar == "\r" ) {
error_line++;
error_column=0;
} else error_column++;
} else {
throw e1;
}
}
if (!EOFSeen) {
this.input_stream.backup$I(1);
error_after=curPos <= 1 ? "" : this.input_stream.GetImage$();
}throw Clazz.new_($I$(2,1).c$$Z$I$I$I$S$C$I,[EOFSeen, this.curLexState, error_line, error_column, error_after, this.curChar, 0]);
}
});

Clazz.newMeth(C$, 'jjCheckNAdd$I', function (state) {
if (this.jjrounds[state] != this.jjround) {
this.jjstateSet[this.jjnewStateCnt++]=state;
this.jjrounds[state]=this.jjround;
}}, p$1);

Clazz.newMeth(C$, 'jjAddStates$I$I', function (start, end) {
do {
this.jjstateSet[this.jjnewStateCnt++]=C$.jjnextStates[start];
} while (start++ != end);
}, p$1);

Clazz.newMeth(C$, 'jjCheckNAddTwoStates$I$I', function (state1, state2) {
p$1.jjCheckNAdd$I.apply(this, [state1]);
p$1.jjCheckNAdd$I.apply(this, [state2]);
}, p$1);

Clazz.newMeth(C$, 'jjCheckNAddStates$I$I', function (start, end) {
do {
p$1.jjCheckNAdd$I.apply(this, [C$.jjnextStates[start]]);
} while (start++ != end);
}, p$1);

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:33 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
