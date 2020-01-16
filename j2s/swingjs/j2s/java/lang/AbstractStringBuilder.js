(function(){var P$=java.lang,p$1={},I$=[[0,'org.apache.harmony.luni.util.Msg']],$I$=function(i,n){return(i=(I$[i]||(I$[i]=Clazz.load(I$[0][i])))),!n&&i.$load$&&Clazz.load(i,2),i};
/*c*/var C$=Clazz.newClass(P$, "AbstractStringBuilder");

C$.$clinit$=2;

Clazz.newMeth(C$, '$init$', function () {
}, 1);

C$.$fields$=[['Z',['shared'],'I',['count'],'O',['value','char[]']]]

Clazz.newMeth(C$, 'getValue$', function () {
return this.value;
});

Clazz.newMeth(C$, 'shareValue$', function () {
this.shared=true;
return this.value;
});

Clazz.newMeth(C$, 'set$CA$I', function (val, len) {
if (val == null ) val=Clazz.array(Character.TYPE, [0]);
if (val.length < len) throw Clazz.new_(Clazz.load('java.io.InvalidObjectException').c$$S,[$I$(1).getString$S("K0199")]);
this.shared=false;
this.value=val;
this.count=len;
});

Clazz.newMeth(C$, 'c$', function () {
;C$.$init$.apply(this);
this.value=Clazz.array(Character.TYPE, [16]);
}, 1);

Clazz.newMeth(C$, 'c$$I', function (capacity) {
;C$.$init$.apply(this);
if (capacity < 0) throw Clazz.new_(Clazz.load('NegativeArraySizeException'));
this.value=Clazz.array(Character.TYPE, [capacity]);
}, 1);

Clazz.newMeth(C$, 'c$$S', function (string) {
;C$.$init$.apply(this);
if (string == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.count=string.length$();
this.shared=false;
this.value=Clazz.array(Character.TYPE, [this.count + 16]);
string.getChars$I$I$CA$I(0, this.count, this.value, 0);
}, 1);

Clazz.newMeth(C$, 'enlargeBuffer$I', function (min) {
var twice=(this.value.length << 1) + 2;
var newData=Clazz.array(Character.TYPE, [min > twice ? min : twice]);
System.arraycopy$O$I$O$I$I(this.value, 0, newData, 0, this.count);
this.value=newData;
this.shared=false;
}, p$1);

Clazz.newMeth(C$, 'appendNull$', function () {
var newSize=this.count + 4;
if (newSize > this.value.length) {
p$1.enlargeBuffer$I.apply(this, [newSize]);
} else if (this.shared) {
this.value=this.value.clone$();
this.shared=false;
}this.value[this.count++]="n";
this.value[this.count++]="u";
this.value[this.count++]="l";
this.value[this.count++]="l";
});

Clazz.newMeth(C$, 'append0$CA', function (chars) {
var newSize=this.count + chars.length;
if (newSize > this.value.length) {
p$1.enlargeBuffer$I.apply(this, [newSize]);
} else if (this.shared) {
this.value=this.value.clone$();
this.shared=false;
}System.arraycopy$O$I$O$I$I(chars, 0, this.value, this.count, chars.length);
this.count=newSize;
});

Clazz.newMeth(C$, 'append0$CA$I$I', function (chars, start, length) {
if (chars == null ) {
throw Clazz.new_(Clazz.load('NullPointerException'));
}if (start >= 0 && 0 <= length  && length <= chars.length - start ) {
var newSize=this.count + length;
if (newSize > this.value.length) {
p$1.enlargeBuffer$I.apply(this, [newSize]);
} else if (this.shared) {
this.value=this.value.clone$();
this.shared=false;
}System.arraycopy$O$I$O$I$I(chars, start, this.value, this.count, length);
this.count=newSize;
} else {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException'));
}});

Clazz.newMeth(C$, 'append0$C', function (ch) {
if (this.count == this.value.length) {
p$1.enlargeBuffer$I.apply(this, [this.count + 1]);
}if (this.shared) {
this.value=this.value.clone$();
this.shared=false;
}this.value[this.count++]=ch;
});

Clazz.newMeth(C$, 'append0$S', function (string) {
if (string == null ) {
this.appendNull$();
return;
}var adding=string.length$();
var newSize=this.count + adding;
if (newSize > this.value.length) {
p$1.enlargeBuffer$I.apply(this, [newSize]);
} else if (this.shared) {
this.value=this.value.clone$();
this.shared=false;
}string.getChars$I$I$CA$I(0, adding, this.value, this.count);
this.count=newSize;
});

Clazz.newMeth(C$, 'append0$CharSequence$I$I', function (s, start, end) {
if (s == null ) s="null";
if (start < 0 || end < 0  || start > end  || end > s.length$() ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
this.append0$S(s.subSequence$I$I(start, end).toString());
});

Clazz.newMeth(C$, 'capacity$', function () {
return this.value.length;
});

Clazz.newMeth(C$, 'charAt$I', function (index) {
if (index < 0 || index >= this.count ) throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[index]);
return this.value[index];
});

Clazz.newMeth(C$, 'delete0$I$I', function (start, end) {
if (start >= 0) {
if (end > this.count) {
end=this.count;
}if (end == start) {
return;
}if (end > start) {
var length=this.count - end;
if (length > 0) {
if (!this.shared) {
System.arraycopy$O$I$O$I$I(this.value, end, this.value, start, length);
} else {
var newData=Clazz.array(Character.TYPE, [this.value.length]);
System.arraycopy$O$I$O$I$I(this.value, 0, newData, 0, start);
System.arraycopy$O$I$O$I$I(this.value, end, newData, start, length);
this.value=newData;
this.shared=false;
}}this.count-=end - start;
return;
}}throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException'));
});

Clazz.newMeth(C$, 'deleteCharAt0$I', function (location) {
if (0 > location || location >= this.count ) throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[location]);
var length=this.count - location - 1 ;
if (length > 0) {
if (!this.shared) {
System.arraycopy$O$I$O$I$I(this.value, location + 1, this.value, location, length);
} else {
var newData=Clazz.array(Character.TYPE, [this.value.length]);
System.arraycopy$O$I$O$I$I(this.value, 0, newData, 0, location);
System.arraycopy$O$I$O$I$I(this.value, location + 1, newData, location, length);
this.value=newData;
this.shared=false;
}}this.count--;
});

Clazz.newMeth(C$, 'ensureCapacity$I', function (min) {
if (min > this.value.length) {
p$1.enlargeBuffer$I.apply(this, [min]);
}});

Clazz.newMeth(C$, 'getChars$I$I$CA$I', function (start, end, dest, destStart) {
if (start > this.count || end > this.count  || start > end ) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException'));
}System.arraycopy$O$I$O$I$I(this.value, start, dest, destStart, end - start);
});

Clazz.newMeth(C$, 'insert0$I$CA', function (index, chars) {
if (0 > index || index > this.count ) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[index]);
}if (chars.length != 0) {
p$1.move$I$I.apply(this, [chars.length, index]);
System.arraycopy$O$I$O$I$I(chars, 0, this.value, index, chars.length);
this.count+=chars.length;
}});

Clazz.newMeth(C$, 'insert0$I$CA$I$I', function (index, chars, start, length) {
if (0 <= index && index <= this.count ) {
if (start >= 0 && 0 <= length  && length <= chars.length - start ) {
if (length != 0) {
p$1.move$I$I.apply(this, [length, index]);
System.arraycopy$O$I$O$I$I(chars, start, this.value, index, length);
this.count+=length;
}return;
}throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$S,["offset " + start + ", len " + length + ", array.length " + chars.length ]);
}throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[index]);
});

Clazz.newMeth(C$, 'insert0$I$C', function (index, ch) {
if (0 > index || index > this.count ) {
throw Clazz.new_(Clazz.load('ArrayIndexOutOfBoundsException').c$$I,[index]);
}p$1.move$I$I.apply(this, [1, index]);
this.value[index]=ch;
this.count++;
});

Clazz.newMeth(C$, 'insert0$I$S', function (index, string) {
if (0 <= index && index <= this.count ) {
if (string == null ) string="null";
var min=string.length$();
if (min != 0) {
p$1.move$I$I.apply(this, [min, index]);
string.getChars$I$I$CA$I(0, min, this.value, index);
this.count+=min;
}} else {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[index]);
}});

Clazz.newMeth(C$, 'insert0$I$CharSequence$I$I', function (index, s, start, end) {
if (s == null ) s="null";
if (index < 0 || index > this.count  || start < 0  || end < 0  || start > end  || end > s.length$() ) throw Clazz.new_(Clazz.load('IndexOutOfBoundsException'));
this.insert0$I$S(index, s.subSequence$I$I(start, end).toString());
});

Clazz.newMeth(C$, 'length$', function () {
return this.count;
});

Clazz.newMeth(C$, 'move$I$I', function (size, index) {
var newSize;
if (this.value.length - this.count >= size) {
if (!this.shared) {
System.arraycopy$O$I$O$I$I(this.value, index, this.value, index + size, this.count - index);
return;
}newSize=this.value.length;
} else {
var a=this.count + size;
var b=(this.value.length << 1) + 2;
newSize=a > b ? a : b;
}var newData=Clazz.array(Character.TYPE, [newSize]);
System.arraycopy$O$I$O$I$I(this.value, 0, newData, 0, index);
System.arraycopy$O$I$O$I$I(this.value, index, newData, index + size, this.count - index);
this.value=newData;
this.shared=false;
}, p$1);

Clazz.newMeth(C$, 'replace0$I$I$S', function (start, end, string) {
if (start >= 0) {
if (end > this.count) end=this.count;
if (end > start) {
var stringLength=string.length$();
var diff=end - start - stringLength ;
if (diff > 0) {
if (!this.shared) {
System.arraycopy$O$I$O$I$I(this.value, end, this.value, start + stringLength, this.count - end);
} else {
var newData=Clazz.array(Character.TYPE, [this.value.length]);
System.arraycopy$O$I$O$I$I(this.value, 0, newData, 0, start);
System.arraycopy$O$I$O$I$I(this.value, end, newData, start + stringLength, this.count - end);
this.value=newData;
this.shared=false;
}} else if (diff < 0) {
p$1.move$I$I.apply(this, [-diff, end]);
} else if (this.shared) {
this.value=this.value.clone$();
this.shared=false;
}string.getChars$I$I$CA$I(0, stringLength, this.value, start);
this.count-=diff;
return;
}if (start == end) {
if (string == null ) throw Clazz.new_(Clazz.load('NullPointerException'));
this.insert0$I$S(start, string);
return;
}}throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException'));
});

Clazz.newMeth(C$, 'reverse0$', function () {
if (this.count < 2) {
return;
}if (!this.shared) {
for (var i=0, end=this.count, mid=(this.count/2|0); i < mid; i++) {
var temp=this.value[--end];
this.value[end]=this.value[i];
this.value[i]=temp;
}
} else {
var newData=Clazz.array(Character.TYPE, [this.value.length]);
for (var i=0, end=this.count; i < this.count; i++) {
newData[--end]=this.value[i];
}
this.value=newData;
this.shared=false;
}});

Clazz.newMeth(C$, 'setCharAt$I$C', function (index, ch) {
if (0 > index || index >= this.count ) {
throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[index]);
}if (this.shared) {
this.value=this.value.clone$();
this.shared=false;
}this.value[index]=ch;
});

Clazz.newMeth(C$, 'setLength$I', function (length) {
if (length < 0) throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[length]);
if (this.count < length) {
if (length > this.value.length) {
p$1.enlargeBuffer$I.apply(this, [length]);
} else {
if (this.shared) {
var newData=Clazz.array(Character.TYPE, [this.value.length]);
System.arraycopy$O$I$O$I$I(this.value, 0, newData, 0, this.count);
this.value=newData;
this.shared=false;
} else {
for (var i=this.count; i < length; i++) {
this.value[i]=String.fromCharCode(0);
}
}}}this.count=length;
});

Clazz.newMeth(C$, 'substring$I', function (start) {
if (0 <= start && start <= this.count ) {
if (start == this.count) return "";
this.shared=true;
return  String.instantialize(this.value, start, this.count - start);
}throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[start]);
});

Clazz.newMeth(C$, 'substring$I$I', function (start, end) {
if (0 <= start && start <= end  && end <= this.count ) {
if (start == end) return "";
this.shared=true;
return  String.instantialize(this.value, start, end - start);
}throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException'));
});

Clazz.newMeth(C$, 'toString', function () {
if (this.count == 0) return "";
if (this.count >= 256 && this.count <= (this.value.length >> 1) ) return  String.instantialize(this.value, 0, this.count);
this.shared=true;
return  String.instantialize(this.value, 0, this.count);
});

Clazz.newMeth(C$, 'subSequence$I$I', function (start, end) {
return this.substring$I$I(start, end);
});

Clazz.newMeth(C$, 'indexOf$S', function (string) {
return this.indexOf$S$I(string, 0);
});

Clazz.newMeth(C$, 'indexOf$S$I', function (subString, start) {
if (start < 0) start=0;
var subCount=subString.length$();
if (subCount > 0) {
if (subCount + start > this.count) return -1;
var firstChar=subString.charAt$I(0);
while (true){
var i=start;
var found=false;
for (; i < this.count; i++) if (this.value[i] == firstChar) {
found=true;
break;
}
if (!found || subCount + i > this.count ) return -1;
var o1=i;
var o2=0;
while (++o2 < subCount && this.value[++o1] == subString.charAt$I(o2) ){
}
if (o2 == subCount) return i;
start=i + 1;
}
}return (start < this.count || start == 0 ) ? start : this.count;
});

Clazz.newMeth(C$, 'lastIndexOf$S', function (string) {
return this.lastIndexOf$S$I(string, this.count);
});

Clazz.newMeth(C$, 'lastIndexOf$S$I', function (subString, start) {
var subCount=subString.length$();
if (subCount <= this.count && start >= 0 ) {
if (subCount > 0) {
if (start > this.count - subCount) start=this.count - subCount;
var firstChar=subString.charAt$I(0);
while (true){
var i=start;
var found=false;
for (; i >= 0; --i) if (this.value[i] == firstChar) {
found=true;
break;
}
if (!found) return -1;
var o1=i;
var o2=0;
while (++o2 < subCount && this.value[++o1] == subString.charAt$I(o2) ){
}
if (o2 == subCount) return i;
start=i - 1;
}
}return start < this.count ? start : this.count;
}return -1;
});

Clazz.newMeth(C$, 'trimToSize$', function () {
if (this.count < this.value.length) {
var newValue=Clazz.array(Character.TYPE, [this.count]);
System.arraycopy$O$I$O$I$I(this.value, 0, newValue, 0, this.count);
this.value=newValue;
this.shared=false;
}});

Clazz.newMeth(C$, 'codePointAt$I', function (index) {
if (index < 0 || index >= this.count ) throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[index]);
return Character.codePointAt$CA$I$I(this.value, index, this.count);
});

Clazz.newMeth(C$, 'codePointBefore$I', function (index) {
if (index < 1 || index > this.count ) throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException').c$$I,[index]);
return Character.codePointBefore$CA$I(this.value, index);
});

Clazz.newMeth(C$, 'codePointCount$I$I', function (beginIndex, endIndex) {
if (beginIndex < 0 || endIndex > this.count  || beginIndex > endIndex ) throw Clazz.new_(Clazz.load('StringIndexOutOfBoundsException'));
return Character.codePointCount$CA$I$I(this.value, beginIndex, endIndex - beginIndex);
});

Clazz.newMeth(C$, 'offsetByCodePoints$I$I', function (index, codePointOffset) {
return Character.offsetByCodePoints$CA$I$I$I$I(this.value, 0, this.count, index, codePointOffset);
});
})();
;Clazz.setTVer('3.2.6-v1');//Created 2020-01-04 08:49:32 Java2ScriptVisitor version 3.2.6-v1 net.sf.j2s.core.jar version 3.2.6-v1
