var subject = require('./subject.js')
var mock = require('mock-fs');
var faker = require('faker');
subject.inc('',undefined);
subject.inc('','');
subject.inc(0,'');
subject.inc(-1,'');
subject.inc(01,'');
subject.inc(01,'');
subject.fileTest('path/fileExists','');
subject.fileTest('path/fileExists','path/fileExists');
subject.fileTest('path/fileExists','pathContent/file1');
mock({});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file2":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file1":"text content"}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
mock({"path/fileExists":{},"pathContent":{"file1":""}});
	subject.fileTest('path/fileExists','pathContent/file1');
mock.restore();
subject.normalize('809-093-6338');
subject.format('1122122112','(NNN) NNN-NNNN','');
subject.format('1122122112','(NNN) NNN-NNNN',{"normalize": true});
subject.format('1-534-388-3076 x8525','494-010-2350','');
subject.blackListNumber('022.080.7520 x4738');
subject.blackListNumber('2121111111');
