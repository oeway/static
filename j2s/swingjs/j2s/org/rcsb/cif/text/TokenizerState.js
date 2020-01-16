(function(){var P$=Clazz.newPackage("org.rcsb.cif.text"),p$1={},I$=[[0,'org.rcsb.cif.text.CifTokenType','org.rcsb.cif.Platform','org.rcsb.cif.model.ModelFactory','java.util.ArrayList','org.rcsb.cif.text.FrameContext']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "TokenizerState");

C$.$clinit$=1;

Clazz.newMeth(C$, '$init0$', function () {
var c;if((c = C$.superclazz) && (c = c.$init0$))c.apply(this);
this.data=null;
this.length=0;
this.position=0;
this.isEscaped=false;
this.lineNumber=0;
this.tokenType=null;
this.tokenStart=0;
this.tokenEnd=0;
this.reader=null;
}, 1);

Clazz.newMeth(C$, '$init$', function () {
}, 1);

Clazz.newMeth(C$, 'c$$org_rcsb_cif_text_TextReader$S', function (reader, data) {
;C$.$init$.apply(this);
this.reader=reader;
this.data=data;
this.position=0;
this.length=data.length$();
this.tokenStart=0;
this.tokenEnd=0;
this.tokenType=$I$(1).END;
this.lineNumber=1;
this.isEscaped=false;
}, 1);

Clazz.newMeth(C$, 'getTokenType$', function () {
return this.tokenType;
});

Clazz.newMeth(C$, 'getLineNumber$', function () {
return this.lineNumber;
});

Clazz.newMeth(C$, 'getTokenStart$', function () {
return this.tokenStart;
});

Clazz.newMeth(C$, 'getTokenEnd$', function () {
return this.tokenEnd;
});

Clazz.newMeth(C$, 'getData$', function () {
return this.data;
});

Clazz.newMeth(C$, 'eatValue', function () {
while (this.position < this.length){
switch ((this.data.charCodeAt$I(this.position))) {
case 9:
case 10:
case 13:
case 32:
this.tokenEnd=this.position;
return;
default:
this.position++;
break;
}
}
this.tokenEnd=this.position;
}, p$1);

Clazz.newMeth(C$, 'eatEscaped$I', function (esc) {
this.position++;
while (this.position < this.length){
var c=this.data.charAt$I(this.position).$c();
if (c == esc) {
if (this.position + 1 >= this.length) {
this.tokenStart++;
this.tokenEnd=this.position;
this.isEscaped=true;
this.position++;
return;
}var next=this.data.charAt$I(this.position + 1).$c();
if (next == 9  || next == 10   || next == 13   || next == 32  ) {
this.tokenStart++;
this.tokenEnd=this.position;
this.isEscaped=true;
this.position++;
return;
}this.position++;
} else {
if (c == 13  || c == 10  ) {
this.tokenEnd=this.position;
return;
}this.position++;
}}
this.tokenEnd=this.position;
}, p$1);

Clazz.newMeth(C$, 'eatMultiline', function () {
var prev=";".$c();
var pos=this.position + 1;
while (pos < this.length){
var c=this.data.charAt$I(pos).$c();
if (c == 59  && (prev == 10  || prev == 13  ) ) {
this.position=pos + 1;
this.tokenStart++;
pos--;
c=this.data.charAt$I(pos).$c();
while (c == 10  || c == 13  ){
pos--;
c=this.data.charAt$I(pos).$c();
}
this.tokenEnd=pos + 1;
this.isEscaped=true;
return;
} else {
if (c == 13 ) {
this.lineNumber++;
} else if (c == 10  && prev != 13  ) {
this.lineNumber++;
}prev=c;
pos++;
}}
this.position=pos;
}, p$1);

Clazz.newMeth(C$, 'skipCommentLine', function () {
while (this.position < this.length){
var c=this.data.charAt$I(this.position).$c();
if (c == 13  || c == 10  ) {
return;
}this.position++;
}
}, p$1);

Clazz.newMeth(C$, 'skipWhitespace', function () {
var prev="\n".$c();
while (this.position < this.length){
var c=this.data.charAt$I(this.position).$c();
switch (c) {
case 9:
case 32:
prev=c;
this.position++;
break;
case 10:
if (prev != 13 ) {
this.lineNumber++;
}prev=c;
this.position++;
break;
case 13:
prev=c;
this.position++;
this.lineNumber++;
break;
default:
return prev;
}
}
return prev;
}, p$1);

Clazz.newMeth(C$, 'isData', function () {
return "data".equalsIgnoreCase$S(this.data.substring$I$I(this.tokenStart, this.tokenStart + 4));
}, p$1);

Clazz.newMeth(C$, 'isSave', function () {
return "save".equalsIgnoreCase$S(this.data.substring$I$I(this.tokenStart, this.tokenStart + 4));
}, p$1);

Clazz.newMeth(C$, 'isLoop', function () {
return "loop".equalsIgnoreCase$S(this.data.substring$I$I(this.tokenStart, this.tokenStart + 4));
}, p$1);

Clazz.newMeth(C$, 'isNamespace$I$I', function (start, end) {
var i;
var nsLen=end - start;
var offset=this.tokenStart - start;
var tokenLen=this.tokenEnd - this.tokenStart;
if (tokenLen < nsLen) {
return false;
}for (i=start; i < end; i++) {
if (this.data.charAt$I(i) != this.data.charAt$I(i + offset)) {
return false;
}}
if (nsLen == tokenLen) {
return true;
}return this.data.charAt$I(i + offset) == ".";
}, p$1);

Clazz.newMeth(C$, 'getNamespaceEnd', function () {
return this.data.substring$I$I(this.tokenStart, this.tokenEnd).indexOf$S(".") + this.tokenStart;
}, p$1);

Clazz.newMeth(C$, 'getNamespace$I', function (endIndex) {
return this.data.substring$I$I(this.tokenStart, endIndex);
}, p$1);

Clazz.newMeth(C$, 'getTokenString', function () {
return this.data.substring$I$I(this.tokenStart, this.tokenEnd);
}, p$1);

Clazz.newMeth(C$, 'moveNext', function () {
var prev=p$1.skipWhitespace.apply(this, []);
if (this.position >= this.length) {
this.tokenType=$I$(1).END;
return;
}this.tokenStart=this.position;
this.tokenEnd=this.position;
this.isEscaped=false;
var c=this.data.charAt$I(this.position).$c();
switch (c) {
case 35:
p$1.skipCommentLine.apply(this, []);
this.tokenType=$I$(1).COMMENT;
break;
case 34:
case 39:
p$1.eatEscaped$I.apply(this, [c]);
this.tokenType=$I$(1).VALUE;
break;
case 59:
if (prev == 10  || prev == 13  ) {
p$1.eatMultiline.apply(this, []);
} else {
p$1.eatValue.apply(this, []);
}this.tokenType=$I$(1).VALUE;
break;
default:
p$1.eatValue.apply(this, []);
if (this.isEscaped) {
this.tokenType=$I$(1).VALUE;
} else if (this.data.charAt$I(this.tokenStart) == "_") {
this.tokenType=$I$(1).COLUMN_NAME;
} else if (this.tokenEnd - this.tokenStart >= 5 && this.data.charAt$I(this.tokenStart + 4) == "_" ) {
if (p$1.isData.apply(this, [])) {
this.tokenType=$I$(1).DATA;
} else if (p$1.isSave.apply(this, [])) {
this.tokenType=$I$(1).SAVE;
} else if (p$1.isLoop.apply(this, [])) {
this.tokenType=$I$(1).LOOP;
} else {
this.tokenType=$I$(1).VALUE;
}} else {
this.tokenType=$I$(1).VALUE;
}}
}, p$1);

Clazz.newMeth(C$, 'moveNextNoComment', function () {
do {
p$1.moveNext.apply(this, []);
} while (this.tokenType === $I$(1).COMMENT );
}, p$1);

Clazz.newMeth(C$, 'handleSingle$org_rcsb_cif_text_FrameContext', function (ctx) {
var nsStart=this.tokenStart;
var nsEnd=p$1.getNamespaceEnd.apply(this, []);
var name=p$1.getNamespace$I.apply(this, [nsEnd]);
var fields=$I$(2).getMap$();
var categoryName=name.substring$I(1).toLowerCase$();
$I$(3).ensureModelPropertiesLoaded$S(categoryName);
while (this.tokenType === $I$(1).COLUMN_NAME  && p$1.isNamespace$I$I.apply(this, [nsStart, nsEnd]) ){
var columnName=p$1.getTokenString.apply(this, []).substring$I(name.length$() + 1).toLowerCase$();
p$1.moveNextNoComment.apply(this, []);
if (this.tokenType !== $I$(1).VALUE ) {
throw Clazz.new_(Clazz.load('org.rcsb.cif.ParsingException').c$$S$I,["Expected value.", this.lineNumber]);
}var cifColumn=$I$(3).createColumnText$S$S$S$I$I(categoryName, columnName, this.data, this.tokenStart, this.tokenEnd);
fields.put$TK$TV(columnName, cifColumn);
p$1.moveNextNoComment.apply(this, []);
}
ctx.getCategories$().put$TK$TV(categoryName, this.reader.createCategory$S$java_util_Map(categoryName, fields));
}, p$1);

Clazz.newMeth(C$, 'handleLoop$org_rcsb_cif_text_FrameContext', function (ctx) {
var loopLine=this.lineNumber;
p$1.moveNextNoComment.apply(this, []);
var name=p$1.getNamespace$I.apply(this, [p$1.getNamespaceEnd.apply(this, [])]);
var columnCountEstimate=32;
var rowCountEstimate="_atom_site".equals$O(name) ? (this.data.length$()/100|0) : 32;
var columnNamesEncoded=Clazz.new_($I$(4,1).c$$I,[columnCountEstimate]);
var columnNamesLC=Clazz.new_($I$(4,1).c$$I,[columnCountEstimate]);
var start=Clazz.new_($I$(4,1).c$$I,[columnCountEstimate]);
var end=Clazz.new_($I$(4,1).c$$I,[columnCountEstimate]);
var categoryName=name.substring$I(1).toLowerCase$();
$I$(3).ensureModelPropertiesLoaded$S(categoryName);
while (this.tokenType === $I$(1).COLUMN_NAME ){
var colName=p$1.getTokenString.apply(this, []).substring$I(name.length$() + 1);
columnNamesEncoded.add$TE(colName);
columnNamesLC.add$TE(colName.toLowerCase$());
p$1.moveNextNoComment.apply(this, []);
start.add$TE(Clazz.new_($I$(4,1).c$$I,[rowCountEstimate]));
end.add$TE(Clazz.new_($I$(4,1).c$$I,[rowCountEstimate]));
}
var colCount=start.size$();
var iToken=0;
while (this.tokenType === $I$(1).VALUE ){
var i=iToken++ % columnNamesLC.size$();
start.get$I(i).add$TE(new Integer(this.tokenStart));
end.get$I(i).add$TE(new Integer(this.tokenEnd));
p$1.moveNextNoComment.apply(this, []);
}
if (colCount % columnNamesLC.size$() != 0) {
throw Clazz.new_(Clazz.load('org.rcsb.cif.ParsingException').c$$S,["The number of values for loop starting at line " + loopLine + " is not a multiple of the number of columns." ]);
}var columns=$I$(2).getMap$();
var nRows=(colCount == 0 ? 0 : start.get$I(0).size$());
for (var i=0; i < colCount; i++) {
var cifColumn=$I$(3).createColumnText$S$S$S$IA$IA(categoryName, columnNamesEncoded.get$I(i), this.data, p$1.toArray$java_util_List$IA.apply(this, [start.get$I(i), Clazz.array(Integer.TYPE, [nRows])]), p$1.toArray$java_util_List$IA.apply(this, [end.get$I(i), Clazz.array(Integer.TYPE, [nRows])]));
columns.put$TK$TV(columnNamesLC.get$I(i), cifColumn);
}
ctx.getCategories$().put$TK$TV(categoryName, this.reader.createCategory$S$java_util_Map(categoryName, columns));
}, p$1);

Clazz.newMeth(C$, 'toArray$java_util_List$IA', function (list, a) {
for (var i=a.length; --i >= 0; ) a[i]=list.get$I(i).intValue$();

return a;
}, p$1);

Clazz.newMeth(C$, 'getDataBlocks$java_util_List', function (dataBlocks) {
var blockCtx=Clazz.new_($I$(5,1));
var blockHeader="";
var inSaveFrame=false;
var saveFrames=Clazz.new_($I$(4,1));
var saveCtx=Clazz.new_($I$(5,1));
var saveFrame=this.reader.createBlock$java_util_Map$S(saveCtx.getCategories$(), "");
p$1.moveNextNoComment.apply(this, []);
while (this.getTokenType$() !== $I$(1).END ){
var token=this.getTokenType$();
if (token === $I$(1).DATA ) {
if (inSaveFrame) {
throw Clazz.new_(Clazz.load('org.rcsb.cif.ParsingException').c$$S$I,["Unexpected data block inside a save frame.", this.getLineNumber$()]);
}if (blockCtx.getCategories$().size$() > 0) {
var block=this.reader.createBlock$java_util_Map$S(blockCtx.getCategories$(), blockHeader);
this.reader.addBlock$org_rcsb_cif_model_Block$java_util_List$java_util_List(block, dataBlocks, saveFrames);
}blockHeader=this.getData$().substring$I$I(this.getTokenStart$() + 5, this.getTokenEnd$());
blockCtx=Clazz.new_($I$(5,1));
saveFrames.clear$();
p$1.moveNextNoComment.apply(this, []);
} else if (this.getTokenType$() === $I$(1).SAVE ) {
var saveHeader=this.getData$().substring$I$I(this.getTokenStart$() + 5, this.getTokenEnd$());
if (saveHeader.isEmpty$()) {
if (saveCtx.getCategories$().size$() > 0) {
saveFrames.add$TE(saveFrame);
}inSaveFrame=false;
} else {
if (inSaveFrame) {
throw Clazz.new_(Clazz.load('org.rcsb.cif.ParsingException').c$$S$I,["Save frames cannot be nested.", this.getLineNumber$()]);
}inSaveFrame=true;
var safeHeader=this.getData$().substring$I$I(this.getTokenStart$() + 5, this.getTokenEnd$());
saveCtx=Clazz.new_($I$(5,1));
saveFrame=this.reader.createBlock$java_util_Map$S(saveCtx.getCategories$(), safeHeader);
}p$1.moveNextNoComment.apply(this, []);
} else if (token === $I$(1).LOOP ) {
p$1.handleLoop$org_rcsb_cif_text_FrameContext.apply(this, [inSaveFrame ? saveCtx : blockCtx]);
} else if (token === $I$(1).COLUMN_NAME ) {
p$1.handleSingle$org_rcsb_cif_text_FrameContext.apply(this, [inSaveFrame ? saveCtx : blockCtx]);
} else {
throw Clazz.new_(Clazz.load('org.rcsb.cif.ParsingException').c$$S$I,["Unexpected token (" + token + "). Expected data_, loop_, or data name." , this.getLineNumber$()]);
}}
if (inSaveFrame) {
throw Clazz.new_(Clazz.load('org.rcsb.cif.ParsingException').c$$S$I,["Unfinished save frame (" + saveFrame.getBlockHeader$() + ")." , this.getLineNumber$()]);
}if (blockCtx.getCategories$().size$() > 0 || saveFrames.size$() > 0 ) {
var block=this.reader.createBlock$java_util_Map$S(blockCtx.getCategories$(), blockHeader);
this.reader.addBlock$org_rcsb_cif_model_Block$java_util_List$java_util_List(block, dataBlocks, saveFrames);
}return dataBlocks;
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.5-v2');//Created 2019-12-07 15:26:53 Java2ScriptVisitor version 3.2.5-v2 net.sf.j2s.core.jar version 3.2.5-v2
