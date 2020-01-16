(function(){var P$=Clazz.newPackage("org.scijava.io.handle"),p$1={},I$=[[0,'java.util.ArrayDeque','java.util.Arrays','java.util.ArrayList','java.util.HashMap',['org.scijava.io.handle.ReadBufferDataHandle','.LRUReplacementStrategy'],'org.scijava.io.handle.DataHandles']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "ReadBufferDataHandle", function(){
Clazz.newInstance(this, arguments,0,C$);
}, 'org.scijava.io.handle.AbstractHigherOrderHandle');
C$.$classes$=[['LRUReplacementStrategy',2]];

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
this.offset=0;
this.currentPageID=-1;
}, 1);

C$.$fields$=[['I',['pageSize','currentPageID'],'L',['offset'],'O',['pages','java.util.List','slotToPage','int[]','replacementStrategy','org.scijava.io.handle.ReadBufferDataHandle.LRUReplacementStrategy','pageToSlot','java.util.Map','currentPage','byte[]']]]

Clazz.newMeth(C$, 'c$$org_scijava_io_handle_DataHandle', function (handle) {
C$.c$$org_scijava_io_handle_DataHandle$I.apply(this, [handle, 10000]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_io_handle_DataHandle$I', function (handle, pageSize) {
C$.c$$org_scijava_io_handle_DataHandle$I$I.apply(this, [handle, pageSize, 10]);
}, 1);

Clazz.newMeth(C$, 'c$$org_scijava_io_handle_DataHandle$I$I', function (handle, pageSize, numPages) {
;C$.superclazz.c$$org_scijava_io_handle_DataHandle.apply(this,[handle]);C$.$init$.apply(this);
this.pageSize=pageSize;
this.slotToPage=Clazz.array(Integer.TYPE, [numPages]);
$I$(2).fill$IA$I(this.slotToPage, -1);
this.pages=Clazz.new_(1,{E:"byte[]"},$I$(3,1).c$$I,[numPages]);
for (var i=0; i < numPages; i++) {
this.pages.add$TE(null);
}
this.pageToSlot=Clazz.new_(1,{K:"Integer",V:"Integer"},$I$(4,1));
this.replacementStrategy=Clazz.new_($I$(5,1).c$$I, [this, null, numPages]);
}, 1);

Clazz.newMeth(C$, 'ensureBuffered$J', function (globalOffset) {
this.ensureOpen$();
var pageID=(((globalOffset/this.pageSize|0))|0);
if (pageID == this.currentPageID) return;
var slotID=(this.pageToSlot.computeIfAbsent$TK$java_util_function_Function(new Integer(pageID), (function($$){((
(function(){/*m*/var C$=Clazz.newClass(P$, "ReadBufferDataHandle$lambda1", function(){Clazz.newInstance(this, arguments[0],1,C$);}, null, 'java.util.function.Function', 1);

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);
/*lambda_M*/
Clazz.newMeth(C$, ['apply$'], function (t) { return $$.pickVictim$I.apply($$,[t])});
})()
)); return Clazz.new_(1,{T:"? super java.lang.Integer",R:"? extends java.lang.Integer"},P$.ReadBufferDataHandle$lambda1.$init$, [this, null])})(this.replacementStrategy))).valueOf();
var inSlotID=this.slotToPage[slotID];
if (inSlotID != pageID) {
this.slotToPage[slotID]=pageID;
this.pageToSlot.put$TK$TV(new Integer(pageID), new Integer(slotID));
this.pageToSlot.put$TK$TV(new Integer(inSlotID), null);
this.currentPage=p$1.readPage$I$I.apply(this, [pageID, slotID]);
} else {
this.currentPage=this.pages.get$I(slotID);
}this.replacementStrategy.accessed$I(slotID);
this.currentPageID=pageID;
}, p$1);

Clazz.newMeth(C$, 'readPage$I$I', function (pageID, slotID) {
this.replacementStrategy.accessed$I(slotID);
var page=this.pages.get$I(slotID);
if (page == null ) {
page=Clazz.array(Byte.TYPE, [this.pageSize]);
this.pages.set$I$TE(slotID, page);
}var startOfPage=pageID * this.pageSize;
if (this.handle$().offset$() != startOfPage) {
this.handle$().seek$J(startOfPage);
}var off=0;
while (off < this.pageSize){
var read=this.handle$().read$BA$I$I(page, off, this.pageSize - off);
if (read == -1) {
break;
}off+=read;
}
return page;
}, p$1);

Clazz.newMeth(C$, 'globalToLocalOffset$J', function (off) {
return (off|0) % this.pageSize;
}, p$1);

Clazz.newMeth(C$, 'seek$J', function (pos) {
this.offset=pos;
});

Clazz.newMeth(C$, 'read$BA$I$I', function (b, targetOffset, len) {
if (len == 0) return 0;
var endPos=this.offset + len;
var readLength=((endPos < this.length$() ? len : this.length$() - this.offset)|0);
var read=0;
var localTargetOff=targetOffset;
while (read < readLength){
p$1.ensureBuffered$J.apply(this, [this.offset]);
var pageOffset=p$1.globalToLocalOffset$J.apply(this, [this.offset]);
var localLength=this.pageSize - pageOffset;
if (read + localLength > readLength) {
localLength=readLength - read;
}System.arraycopy$O$I$O$I$I(this.currentPage, pageOffset, b, localTargetOff, localLength);
read+=localLength;
this.offset+=localLength;
localTargetOff+=localLength;
}
return read != 0 ? read : -1;
});

Clazz.newMeth(C$, 'readByte$', function () {
p$1.ensureBuffered$J.apply(this, [this.offset]);
return $b$[0] = this.currentPage[p$1.globalToLocalOffset$J.apply(this, [this.offset++])], $b$[0];
});

Clazz.newMeth(C$, 'isReadable$', function () {
return true;
});

Clazz.newMeth(C$, 'offset$', function () {
return this.offset;
});

Clazz.newMeth(C$, 'cleanup$', function () {
this.pages.clear$();
this.currentPage=null;
});

Clazz.newMeth(C$, 'write$I', function (b) {
throw $I$(6).readOnlyException$();
});

Clazz.newMeth(C$, 'write$BA$I$I', function (b, off, len) {
throw $I$(6).readOnlyException$();
});

Clazz.newMeth(C$, 'setLength$J', function (length) {
throw $I$(6).readOnlyException$();
});
var $b$ = new Int8Array(1);
;
(function(){/*c*/var C$=Clazz.newClass(P$.ReadBufferDataHandle, "LRUReplacementStrategy", function(){
Clazz.newInstance(this, arguments[0],true,C$);
});

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['O',['queue','java.util.Deque']]]

Clazz.newMeth(C$, 'c$$I', function (numSlots) {
;C$.$init$.apply(this);
this.queue=Clazz.new_(1,{E:"Integer"},$I$(1,1).c$$I,[numSlots]);
for (var i=0; i < numSlots; i++) {
this.queue.add$TE(new Integer(i));
}
}, 1);

Clazz.newMeth(C$, 'accessed$I', function (slotID) {
this.queue.remove$O(new Integer(slotID));
this.queue.add$TE(new Integer(slotID));
});

Clazz.newMeth(C$, 'pickVictim$I', function (pageID) {
return (this.queue.peek$()).valueOf();
});

Clazz.newMeth(C$);
})()

Clazz.newMeth(C$);
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 11:21:25 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
