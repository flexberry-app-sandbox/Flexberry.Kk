




CREATE TABLE Сотрудники (
 primaryKey UUID NOT NULL,
 IDсотрудника INT NULL,
 IDдолжности INT NULL,
 Телефон INT NULL,
 ФИО VARCHAR(255) NULL,
 Email VARCHAR(255) NULL,
 Адрес VARCHAR(255) NULL,
 Должности UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТЧквитанции (
 primaryKey UUID NOT NULL,
 Услуга VARCHAR(17) NULL,
 ОбъемКУ INT NULL,
 ИтогоКОплЗаРП INT NULL,
 IDтарифа INT NULL,
 РазмПлатЗаКУ INT NULL,
 ВсегоНачисЗаРП INT NULL,
 Тариф UUID NOT NULL,
 Квитанция UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Тариф (
 primaryKey UUID NOT NULL,
 IDтарифа INT NULL,
 Наименование VARCHAR(17) NULL,
 Стоимость INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Должности (
 primaryKey UUID NOT NULL,
 IDдолжности INT NULL,
 Наименование VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Квитанция (
 primaryKey UUID NOT NULL,
 IDжильца INT NULL,
 IDорганизация INT NULL,
 РасчетныйПериод INT NULL,
 СуммаКОплате INT NULL,
 IDсотрудника INT NULL,
 Организация UUID NOT NULL,
 Сотрудники UUID NOT NULL,
 Жилец UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE БазаДанныхЛС (
 primaryKey UUID NOT NULL,
 ДоляСобст INT NULL,
 НомерЛицСчет INT NULL,
 Дата TIMESTAMP(3) NULL,
 IDжильца INT NULL,
 ДатаФормЛС TIMESTAMP(3) NULL,
 КолПрожив INT NULL,
 Жилец UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Организация (
 primaryKey UUID NOT NULL,
 IDорганизация INT NULL,
 Наименование VARCHAR(255) NULL,
 Адрес VARCHAR(255) NULL,
 Телефон INT NULL,
 Email VARCHAR(255) NULL,
 РасчетныйСчет INT NULL,
 Банк VARCHAR(255) NULL,
 ИНН INT NULL,
 БИК INT NULL,
 КПП INT NULL,
 КорреСчет INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ТЧПерерасчетаКУ (
 primaryKey UUID NOT NULL,
 НомерЛицСчет INT NULL,
 МесяцНачис TIMESTAMP(3) NULL,
 Услуга VARCHAR(17) NULL,
 СуммаНачис INT NULL,
 ТипНачис VARCHAR(255) NULL,
 СуммаКоррек INT NULL,
 БазаДанныхЛС UUID NOT NULL,
 ПерерасчетКУ UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ПерерасчетКУ (
 primaryKey UUID NOT NULL,
 Номер INT NULL,
 ДатаФорДок TIMESTAMP(3) NULL,
 IDжильца INT NULL,
 ДатаНач TIMESTAMP(3) NULL,
 ДатаОкон TIMESTAMP(3) NULL,
 IDорганизация INT NULL,
 ОсновПерер VARCHAR(255) NULL,
 ДнейПерер INT NULL,
 ЧасовПерер INT NULL,
 IDсотрудника INT NULL,
 Сотрудники UUID NOT NULL,
 Организация UUID NOT NULL,
 Жилец UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Жилец (
 primaryKey UUID NOT NULL,
 IDжильца INT NULL,
 ФИО VARCHAR(255) NULL,
 Адрес VARCHAR(255) NULL,
 Телефон INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE Сотрудники ADD CONSTRAINT FKe5ecf5036053539899cbfb65cf7383292844b1ec FOREIGN KEY (Должности) REFERENCES Должности; 
CREATE INDEX Indexe5ecf5036053539899cbfb65cf7383292844b1ec on Сотрудники (Должности); 

 ALTER TABLE ТЧквитанции ADD CONSTRAINT FK3cf25951ebb6ef236168da0ffbdb069afe9c087f FOREIGN KEY (Тариф) REFERENCES Тариф; 
CREATE INDEX Index3cf25951ebb6ef236168da0ffbdb069afe9c087f on ТЧквитанции (Тариф); 

 ALTER TABLE ТЧквитанции ADD CONSTRAINT FKa0118b0c4c8731711dc1f1873f69331ee361bfe7 FOREIGN KEY (Квитанция) REFERENCES Квитанция; 
CREATE INDEX Indexa0118b0c4c8731711dc1f1873f69331ee361bfe7 on ТЧквитанции (Квитанция); 

 ALTER TABLE Квитанция ADD CONSTRAINT FK2b55b22fad780d887b04ca30988437e6a3bcfa69 FOREIGN KEY (Организация) REFERENCES Организация; 
CREATE INDEX Index2b55b22fad780d887b04ca30988437e6a3bcfa69 on Квитанция (Организация); 

 ALTER TABLE Квитанция ADD CONSTRAINT FKa9cfccda617d0fe05e4571443960c610f25d1a05 FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Indexa9cfccda617d0fe05e4571443960c610f25d1a05 on Квитанция (Сотрудники); 

 ALTER TABLE Квитанция ADD CONSTRAINT FK5e1b38c246f544dc98fcc292b7badcfbea221f6a FOREIGN KEY (Жилец) REFERENCES Жилец; 
CREATE INDEX Index5e1b38c246f544dc98fcc292b7badcfbea221f6a on Квитанция (Жилец); 

 ALTER TABLE БазаДанныхЛС ADD CONSTRAINT FK2a6366fc3f0dd7341415de8f336f739b683db64a FOREIGN KEY (Жилец) REFERENCES Жилец; 
CREATE INDEX Index2a6366fc3f0dd7341415de8f336f739b683db64a on БазаДанныхЛС (Жилец); 

 ALTER TABLE ТЧПерерасчетаКУ ADD CONSTRAINT FK1c4d905526d95432447653f3fe20daddad04de4c FOREIGN KEY (БазаДанныхЛС) REFERENCES БазаДанныхЛС; 
CREATE INDEX Index1c4d905526d95432447653f3fe20daddad04de4c on ТЧПерерасчетаКУ (БазаДанныхЛС); 

 ALTER TABLE ТЧПерерасчетаКУ ADD CONSTRAINT FKd7e20b64324b20e5fe88de307e78ab6838b224c0 FOREIGN KEY (ПерерасчетКУ) REFERENCES ПерерасчетКУ; 
CREATE INDEX Indexd7e20b64324b20e5fe88de307e78ab6838b224c0 on ТЧПерерасчетаКУ (ПерерасчетКУ); 

 ALTER TABLE ПерерасчетКУ ADD CONSTRAINT FK4345e6c0a11e6880763df4dd977cae4dab222739 FOREIGN KEY (Сотрудники) REFERENCES Сотрудники; 
CREATE INDEX Index4345e6c0a11e6880763df4dd977cae4dab222739 on ПерерасчетКУ (Сотрудники); 

 ALTER TABLE ПерерасчетКУ ADD CONSTRAINT FK7f21b010d4c4fe6ae29b7b05d3ca2e9bcc26573e FOREIGN KEY (Организация) REFERENCES Организация; 
CREATE INDEX Index7f21b010d4c4fe6ae29b7b05d3ca2e9bcc26573e on ПерерасчетКУ (Организация); 

 ALTER TABLE ПерерасчетКУ ADD CONSTRAINT FK60938b37fb2400b65ebb141fec31ee51be536697 FOREIGN KEY (Жилец) REFERENCES Жилец; 
CREATE INDEX Index60938b37fb2400b65ebb141fec31ee51be536697 on ПерерасчетКУ (Жилец); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

