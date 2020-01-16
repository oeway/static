(function(){var P$=Clazz.newPackage("ucar.units"),p$1={},I$=[[0,'Error','java.io.InputStreamReader']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ASCII_CharStream");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.bufpos=-1;
this.column=0;
this.line=1;
this.prevCharIsCR=false;
this.prevCharIsLF=false;
this.maxNextCharInd=0;
this.inBuf=0;
}, 1);

C$.$fields$=[['Z',['prevCharIsCR','prevCharIsLF'],'I',['bufsize','available','tokenBegin','bufpos','column','line','maxNextCharInd','inBuf'],'O',['bufline','int[]','+bufcolumn','inputStream','java.io.Reader','buffer','char[]']]]

Clazz.newMeth(C$, 'ExpandBuff$Z', function (wrapAround) {
var newbuffer=Clazz.array(Character.TYPE, [this.bufsize + 2048]);
var newbufline=Clazz.array(Integer.TYPE, [this.bufsize + 2048]);
var newbufcolumn=Clazz.array(Integer.TYPE, [this.bufsize + 2048]);
try {
if (wrapAround) {
System.arraycopy$O$I$O$I$I(this.buffer, this.tokenBegin, newbuffer, 0, this.bufsize - this.tokenBegin);
System.arraycopy$O$I$O$I$I(this.buffer, 0, newbuffer, this.bufsize - this.tokenBegin, this.bufpos);
this.buffer=newbuffer;
System.arraycopy$O$I$O$I$I(this.bufline, this.tokenBegin, newbufline, 0, this.bufsize - this.tokenBegin);
System.arraycopy$O$I$O$I$I(this.bufline, 0, newbufline, this.bufsize - this.tokenBegin, this.bufpos);
this.bufline=newbufline;
System.arraycopy$O$I$O$I$I(this.bufcolumn, this.tokenBegin, newbufcolumn, 0, this.bufsize - this.tokenBegin);
System.arraycopy$O$I$O$I$I(this.bufcolumn, 0, newbufcolumn, this.bufsize - this.tokenBegin, this.bufpos);
this.bufcolumn=newbufcolumn;
this.maxNextCharInd=(this.bufpos+=(this.bufsize - this.tokenBegin));
} else {
System.arraycopy$O$I$O$I$I(this.buffer, this.tokenBegin, newbuffer, 0, this.bufsize - this.tokenBegin);
this.buffer=newbuffer;
System.arraycopy$O$I$O$I$I(this.bufline, this.tokenBegin, newbufline, 0, this.bufsize - this.tokenBegin);
this.bufline=newbufline;
System.arraycopy$O$I$O$I$I(this.bufcolumn, this.tokenBegin, newbufcolumn, 0, this.bufsize - this.tokenBegin);
this.bufcolumn=newbufcolumn;
this.maxNextCharInd=(this.bufpos-=this.tokenBegin);
}} catch (t) {
throw Clazz.new_($I$(1,1).c$$S,[t.getMessage$()]);
}
this.bufsize+=2048;
this.available=this.bufsize;
this.tokenBegin=0;
}, p$1);

Clazz.newMeth(C$, 'FillBuff', function () {
if (this.maxNextCharInd == this.available) {
if (this.available == this.bufsize) {
if (this.tokenBegin > 2048) {
this.bufpos=this.maxNextCharInd=0;
this.available=this.tokenBegin;
} else if (this.tokenBegin < 0) this.bufpos=this.maxNextCharInd=0;
 else p$1.ExpandBuff$Z.apply(this, [false]);
} else if (this.available > this.tokenBegin) this.available=this.bufsize;
 else if ((this.tokenBegin - this.available) < 2048) p$1.ExpandBuff$Z.apply(this, [true]);
 else this.available=this.tokenBegin;
}var i;
try {
if ((i=this.inputStream.read$CA$I$I(this.buffer, this.maxNextCharInd, this.available - this.maxNextCharInd)) == -1) {
this.inputStream.close$();
throw Clazz.new_(Clazz.load('java.io.IOException'));
} else this.maxNextCharInd+=i;
return;
} catch (e) {
if (Clazz.exceptionOf(e,"java.io.IOException")){
--this.bufpos;
this.backup$I(0);
if (this.tokenBegin == -1) this.tokenBegin=this.bufpos;
throw e;
} else {
throw e;
}
}
}, p$1);

Clazz.newMeth(C$, 'BeginToken$', function () {
this.tokenBegin=-1;
var c=this.readChar$();
this.tokenBegin=this.bufpos;
return c;
});

Clazz.newMeth(C$, 'UpdateLineColumn$C', function (c) {
this.column++;
if (this.prevCharIsLF) {
this.prevCharIsLF=false;
this.line+=(this.column=1);
} else if (this.prevCharIsCR) {
this.prevCharIsCR=false;
if (c == "\n") {
this.prevCharIsLF=true;
} else this.line+=(this.column=1);
}switch (c.$c()) {
case 13:
this.prevCharIsCR=true;
break;
case 10:
this.prevCharIsLF=true;
break;
case 9:
this.column--;
this.column+=(8 - (this.column & 7));
break;
default:
break;
}
this.bufline[this.bufpos]=this.line;
this.bufcolumn[this.bufpos]=this.column;
}, p$1);

Clazz.newMeth(C$, 'readChar$', function () {
if (this.inBuf > 0) {
--this.inBuf;
return String.fromCharCode((255 & (this.buffer[(this.bufpos == this.bufsize - 1) ? (this.bufpos=0) : ++this.bufpos]).$c()));
}if (++this.bufpos >= this.maxNextCharInd) p$1.FillBuff.apply(this, []);
var c=String.fromCharCode((255 & (this.buffer[this.bufpos]).$c()));
p$1.UpdateLineColumn$C.apply(this, [c]);
return (c);
});

Clazz.newMeth(C$, 'getColumn$', function () {
return this.bufcolumn[this.bufpos];
});

Clazz.newMeth(C$, 'getLine$', function () {
return this.bufline[this.bufpos];
});

Clazz.newMeth(C$, 'getEndColumn$', function () {
return this.bufcolumn[this.bufpos];
});

Clazz.newMeth(C$, 'getEndLine$', function () {
return this.bufline[this.bufpos];
});

Clazz.newMeth(C$, 'getBeginColumn$', function () {
return this.bufcolumn[this.tokenBegin];
});

Clazz.newMeth(C$, 'getBeginLine$', function () {
return this.bufline[this.tokenBegin];
});

Clazz.newMeth(C$, 'backup$I', function (amount) {
this.inBuf+=amount;
if ((this.bufpos-=amount) < 0) this.bufpos+=this.bufsize;
});

Clazz.newMeth(C$, 'c$$java_io_Reader$I$I$I', function (dstream, startline, startcolumn, buffersize) {
;C$.$init$.apply(this);
this.inputStream=dstream;
this.line=startline;
this.column=startcolumn - 1;
this.available=this.bufsize=buffersize;
this.buffer=Clazz.array(Character.TYPE, [buffersize]);
this.bufline=Clazz.array(Integer.TYPE, [buffersize]);
this.bufcolumn=Clazz.array(Integer.TYPE, [buffersize]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_Reader$I$I', function (dstream, startline, startcolumn) {
C$.c$$java_io_Reader$I$I$I.apply(this, [dstream, startline, startcolumn, 4096]);
}, 1);

Clazz.newMeth(C$, 'ReInit$java_io_Reader$I$I$I', function (dstream, startline, startcolumn, buffersize) {
this.inputStream=dstream;
this.line=startline;
this.column=startcolumn - 1;
if (this.buffer == null  || buffersize != this.buffer.length ) {
this.available=this.bufsize=buffersize;
this.buffer=Clazz.array(Character.TYPE, [buffersize]);
this.bufline=Clazz.array(Integer.TYPE, [buffersize]);
this.bufcolumn=Clazz.array(Integer.TYPE, [buffersize]);
}this.prevCharIsLF=this.prevCharIsCR=false;
this.tokenBegin=this.inBuf=this.maxNextCharInd=0;
this.bufpos=-1;
});

Clazz.newMeth(C$, 'ReInit$java_io_Reader$I$I', function (dstream, startline, startcolumn) {
this.ReInit$java_io_Reader$I$I$I(dstream, startline, startcolumn, 4096);
});

Clazz.newMeth(C$, 'c$$java_io_InputStream$I$I$I', function (dstream, startline, startcolumn, buffersize) {
C$.c$$java_io_Reader$I$I$I.apply(this, [Clazz.new_($I$(2,1).c$$java_io_InputStream,[dstream]), startline, startcolumn, 4096]);
}, 1);

Clazz.newMeth(C$, 'c$$java_io_InputStream$I$I', function (dstream, startline, startcolumn) {
C$.c$$java_io_InputStream$I$I$I.apply(this, [dstream, startline, startcolumn, 4096]);
}, 1);

Clazz.newMeth(C$, 'ReInit$java_io_InputStream$I$I$I', function (dstream, startline, startcolumn, buffersize) {
this.ReInit$java_io_Reader$I$I$I(Clazz.new_($I$(2,1).c$$java_io_InputStream,[dstream]), startline, startcolumn, 4096);
});

Clazz.newMeth(C$, 'ReInit$java_io_InputStream$I$I', function (dstream, startline, startcolumn) {
this.ReInit$java_io_InputStream$I$I$I(dstream, startline, startcolumn, 4096);
});

Clazz.newMeth(C$, 'GetImage$', function () {
if (this.bufpos >= this.tokenBegin) return  String.instantialize(this.buffer, this.tokenBegin, this.bufpos - this.tokenBegin + 1);
 else return  String.instantialize(this.buffer, this.tokenBegin, this.bufsize - this.tokenBegin) +  String.instantialize(this.buffer, 0, this.bufpos + 1);
});

Clazz.newMeth(C$, 'GetSuffix$I', function (len) {
var ret=Clazz.array(Character.TYPE, [len]);
if ((this.bufpos + 1) >= len) System.arraycopy$O$I$O$I$I(this.buffer, this.bufpos - len + 1, ret, 0, len);
 else {
System.arraycopy$O$I$O$I$I(this.buffer, this.bufsize - (len - this.bufpos - 1 ), ret, 0, len - this.bufpos - 1 );
System.arraycopy$O$I$O$I$I(this.buffer, 0, ret, len - this.bufpos - 1 , this.bufpos + 1);
}return ret;
});

Clazz.newMeth(C$, 'Done$', function () {
this.buffer=null;
this.bufline=null;
this.bufcolumn=null;
});

Clazz.newMeth(C$, 'adjustBeginLineColumn$I$I', function (newLine, newCol) {
var start=this.tokenBegin;
var len;
if (this.bufpos >= this.tokenBegin) {
len=this.bufpos - this.tokenBegin + this.inBuf + 1;
} else {
len=this.bufsize - this.tokenBegin + this.bufpos + 1 + this.inBuf;
}var i=0;
var j=0;
var k=0;
var nextColDiff=0;
var columnDiff=0;
while (i < len && this.bufline[j=start % this.bufsize] == this.bufline[k=++start % this.bufsize] ){
this.bufline[j]=newLine;
nextColDiff=columnDiff + this.bufcolumn[k] - this.bufcolumn[j];
this.bufcolumn[j]=newCol + columnDiff;
columnDiff=nextColDiff;
i++;
}
if (i < len) {
this.bufline[j]=newLine++;
this.bufcolumn[j]=newCol + columnDiff;
while (i++ < len){
if (this.bufline[j=start % this.bufsize] != this.bufline[++start % this.bufsize]) this.bufline[j]=newLine++;
 else this.bufline[j]=newLine;
}
}this.line=this.bufline[j];
this.column=this.bufcolumn[j];
});

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:20:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
