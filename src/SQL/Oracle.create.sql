



CREATE TABLE "Сотрудники"
(

	"primaryKey" RAW(16) NOT NULL,

	"IDсотрудника" NUMBER(10) NULL,

	"IDдолжности" NUMBER(10) NULL,

	"Телефон" NUMBER(10) NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"Email" NVARCHAR2(255) NULL,

	"Адрес" NVARCHAR2(255) NULL,

	"Должности" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТЧквитанции"
(

	"primaryKey" RAW(16) NOT NULL,

	"Услуга" NVARCHAR2(17) NULL,

	"ОбъемКУ" NUMBER(10) NULL,

	"ИтогоКОплЗаРП" NUMBER(10) NULL,

	"IDтарифа" NUMBER(10) NULL,

	"РазмПлатЗаКУ" NUMBER(10) NULL,

	"ВсегоНачисЗаРП" NUMBER(10) NULL,

	"Тариф" RAW(16) NOT NULL,

	"Квитанция" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Тариф"
(

	"primaryKey" RAW(16) NOT NULL,

	"IDтарифа" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(17) NULL,

	"Стоимость" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Должности"
(

	"primaryKey" RAW(16) NOT NULL,

	"IDдолжности" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Квитанция"
(

	"primaryKey" RAW(16) NOT NULL,

	"IDжильца" NUMBER(10) NULL,

	"IDорганизация" NUMBER(10) NULL,

	"РасчетныйПериод" NUMBER(10) NULL,

	"СуммаКОплате" NUMBER(10) NULL,

	"IDсотрудника" NUMBER(10) NULL,

	"Организация" RAW(16) NOT NULL,

	"Сотрудники" RAW(16) NOT NULL,

	"Жилец" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "БазаДанныхЛС"
(

	"primaryKey" RAW(16) NOT NULL,

	"ДоляСобст" NUMBER(10) NULL,

	"НомерЛицСчет" NUMBER(10) NULL,

	"Дата" DATE NULL,

	"IDжильца" NUMBER(10) NULL,

	"ДатаФормЛС" DATE NULL,

	"КолПрожив" NUMBER(10) NULL,

	"Жилец" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Организация"
(

	"primaryKey" RAW(16) NOT NULL,

	"IDорганизация" NUMBER(10) NULL,

	"Наименование" NVARCHAR2(255) NULL,

	"Адрес" NVARCHAR2(255) NULL,

	"Телефон" NUMBER(10) NULL,

	"Email" NVARCHAR2(255) NULL,

	"РасчетныйСчет" NUMBER(10) NULL,

	"Банк" NVARCHAR2(255) NULL,

	"ИНН" NUMBER(10) NULL,

	"БИК" NUMBER(10) NULL,

	"КПП" NUMBER(10) NULL,

	"КорреСчет" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ТЧПерерасчетаКУ"
(

	"primaryKey" RAW(16) NOT NULL,

	"НомерЛицСчет" NUMBER(10) NULL,

	"МесяцНачис" DATE NULL,

	"Услуга" NVARCHAR2(17) NULL,

	"СуммаНачис" NUMBER(10) NULL,

	"ТипНачис" NVARCHAR2(255) NULL,

	"СуммаКоррек" NUMBER(10) NULL,

	"БазаДанныхЛС" RAW(16) NOT NULL,

	"ПерерасчетКУ" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ПерерасчетКУ"
(

	"primaryKey" RAW(16) NOT NULL,

	"Номер" NUMBER(10) NULL,

	"ДатаФорДок" DATE NULL,

	"IDжильца" NUMBER(10) NULL,

	"ДатаНач" DATE NULL,

	"ДатаОкон" DATE NULL,

	"IDорганизация" NUMBER(10) NULL,

	"ОсновПерер" NVARCHAR2(255) NULL,

	"ДнейПерер" NUMBER(10) NULL,

	"ЧасовПерер" NUMBER(10) NULL,

	"IDсотрудника" NUMBER(10) NULL,

	"Сотрудники" RAW(16) NOT NULL,

	"Организация" RAW(16) NOT NULL,

	"Жилец" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "Жилец"
(

	"primaryKey" RAW(16) NOT NULL,

	"IDжильца" NUMBER(10) NULL,

	"ФИО" NVARCHAR2(255) NULL,

	"Адрес" NVARCHAR2(255) NULL,

	"Телефон" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMNETLOCKDATA"
(

	"LockKey" NVARCHAR2(300) NOT NULL,

	"UserName" NVARCHAR2(300) NOT NULL,

	"LockDate" DATE NULL,

	 PRIMARY KEY ("LockKey")
) ;


CREATE TABLE "STORMSETTINGS"
(

	"primaryKey" RAW(16) NOT NULL,

	"Module" nvarchar2(1000) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"User" nvarchar2(255) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMAdvLimit"
(

	"primaryKey" RAW(16) NOT NULL,

	"User" nvarchar2(255) NULL,

	"Published" NUMBER(1) NULL,

	"Module" nvarchar2(255) NULL,

	"Name" nvarchar2(255) NULL,

	"Value" CLOB NULL,

	"HotKeyData" NUMBER(10) NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERSETTING"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMWEBSEARCH"
(

	"primaryKey" RAW(16) NOT NULL,

	"Name" nvarchar2(255) NOT NULL,

	"Order" NUMBER(10) NOT NULL,

	"PresentView" nvarchar2(255) NOT NULL,

	"DetailedView" nvarchar2(255) NOT NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERDETAIL"
(

	"primaryKey" RAW(16) NOT NULL,

	"Caption" nvarchar2(255) NOT NULL,

	"DataObjectView" nvarchar2(255) NOT NULL,

	"ConnectMasterProp" nvarchar2(255) NOT NULL,

	"OwnerConnectProp" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "STORMFILTERLOOKUP"
(

	"primaryKey" RAW(16) NOT NULL,

	"DataObjectType" nvarchar2(255) NOT NULL,

	"Container" nvarchar2(255) NULL,

	"ContainerTag" nvarchar2(255) NULL,

	"FieldsToView" nvarchar2(255) NULL,

	"FilterSetting_m0" RAW(16) NOT NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "UserSetting"
(

	"primaryKey" RAW(16) NOT NULL,

	"AppName" nvarchar2(256) NULL,

	"UserName" nvarchar2(512) NULL,

	"UserGuid" RAW(16) NULL,

	"ModuleName" nvarchar2(1024) NULL,

	"ModuleGuid" RAW(16) NULL,

	"SettName" nvarchar2(256) NULL,

	"SettGuid" RAW(16) NULL,

	"SettLastAccessTime" DATE NULL,

	"StrVal" nvarchar2(256) NULL,

	"TxtVal" CLOB NULL,

	"IntVal" NUMBER(10) NULL,

	"BoolVal" NUMBER(1) NULL,

	"GuidVal" RAW(16) NULL,

	"DecimalVal" NUMBER(20,10) NULL,

	"DateTimeVal" DATE NULL,

	 PRIMARY KEY ("primaryKey")
) ;


CREATE TABLE "ApplicationLog"
(

	"primaryKey" RAW(16) NOT NULL,

	"Category" nvarchar2(64) NULL,

	"EventId" NUMBER(10) NULL,

	"Priority" NUMBER(10) NULL,

	"Severity" nvarchar2(32) NULL,

	"Title" nvarchar2(256) NULL,

	"Timestamp" DATE NULL,

	"MachineName" nvarchar2(32) NULL,

	"AppDomainName" nvarchar2(512) NULL,

	"ProcessId" nvarchar2(256) NULL,

	"ProcessName" nvarchar2(512) NULL,

	"ThreadName" nvarchar2(512) NULL,

	"Win32ThreadId" nvarchar2(128) NULL,

	"Message" nvarchar2(2000) NULL,

	"FormattedMessage" nvarchar2(2000) NULL,

	 PRIMARY KEY ("primaryKey")
) ;



ALTER TABLE "Сотрудники"
	ADD CONSTRAINT "Сотрудники_FД_4635" FOREIGN KEY ("Должности") REFERENCES "Должности" ("primaryKey");

CREATE INDEX "Сотрудники_IД_6967" on "Сотрудники" ("Должности");

ALTER TABLE "ТЧквитанции"
	ADD CONSTRAINT "ТЧквитанции_FТ_238" FOREIGN KEY ("Тариф") REFERENCES "Тариф" ("primaryKey");

CREATE INDEX "ТЧквитанции_I_6517" on "ТЧквитанции" ("Тариф");

ALTER TABLE "ТЧквитанции"
	ADD CONSTRAINT "ТЧквитанции_F_9142" FOREIGN KEY ("Квитанция") REFERENCES "Квитанция" ("primaryKey");

CREATE INDEX "ТЧквитанции_I_2070" on "ТЧквитанции" ("Квитанция");

ALTER TABLE "Квитанция"
	ADD CONSTRAINT "Квитанция_FОр_7823" FOREIGN KEY ("Организация") REFERENCES "Организация" ("primaryKey");

CREATE INDEX "Квитанция_IОр_5206" on "Квитанция" ("Организация");

ALTER TABLE "Квитанция"
	ADD CONSTRAINT "Квитанция_FСо_8055" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "Квитанция_IСо_8212" on "Квитанция" ("Сотрудники");

ALTER TABLE "Квитанция"
	ADD CONSTRAINT "Квитанция_FЖи_6107" FOREIGN KEY ("Жилец") REFERENCES "Жилец" ("primaryKey");

CREATE INDEX "Квитанция_IЖилец" on "Квитанция" ("Жилец");

ALTER TABLE "БазаДанныхЛС"
	ADD CONSTRAINT "БазаДанныхЛС__6839" FOREIGN KEY ("Жилец") REFERENCES "Жилец" ("primaryKey");

CREATE INDEX "БазаДанныхЛС__2622" on "БазаДанныхЛС" ("Жилец");

ALTER TABLE "ТЧПерерасчетаКУ"
	ADD CONSTRAINT "ТЧПерерасчет_8695" FOREIGN KEY ("БазаДанныхЛС") REFERENCES "БазаДанныхЛС" ("primaryKey");

CREATE INDEX "ТЧПерерасчет_7402" on "ТЧПерерасчетаКУ" ("БазаДанныхЛС");

ALTER TABLE "ТЧПерерасчетаКУ"
	ADD CONSTRAINT "ТЧПерерасчет_2453" FOREIGN KEY ("ПерерасчетКУ") REFERENCES "ПерерасчетКУ" ("primaryKey");

CREATE INDEX "ТЧПерерасчет_3813" on "ТЧПерерасчетаКУ" ("ПерерасчетКУ");

ALTER TABLE "ПерерасчетКУ"
	ADD CONSTRAINT "ПерерасчетКУ__3436" FOREIGN KEY ("Сотрудники") REFERENCES "Сотрудники" ("primaryKey");

CREATE INDEX "ПерерасчетКУ__2733" on "ПерерасчетКУ" ("Сотрудники");

ALTER TABLE "ПерерасчетКУ"
	ADD CONSTRAINT "ПерерасчетКУ__3963" FOREIGN KEY ("Организация") REFERENCES "Организация" ("primaryKey");

CREATE INDEX "ПерерасчетКУ__6427" on "ПерерасчетКУ" ("Организация");

ALTER TABLE "ПерерасчетКУ"
	ADD CONSTRAINT "ПерерасчетКУ__2382" FOREIGN KEY ("Жилец") REFERENCES "Жилец" ("primaryKey");

CREATE INDEX "ПерерасчетКУ__9292" on "ПерерасчетКУ" ("Жилец");

ALTER TABLE "STORMWEBSEARCH"
	ADD CONSTRAINT "STORMWEBSEARCH_FSTORMFILT_6521" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERDETAIL"
	ADD CONSTRAINT "STORMFILTERDETAIL_FSTORMF_2900" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");

ALTER TABLE "STORMFILTERLOOKUP"
	ADD CONSTRAINT "STORMFILTERLOOKUP_FSTORMF_1583" FOREIGN KEY ("FilterSetting_m0") REFERENCES "STORMFILTERSETTING" ("primaryKey");


