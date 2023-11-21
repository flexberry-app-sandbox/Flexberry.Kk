



CREATE TABLE [Сотрудники] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Email] VARCHAR(255)  NULL,

	 [IDдолжности] INT  NULL,

	 [IDсотрудника] INT  NULL,

	 [Адрес] VARCHAR(255)  NULL,

	 [Телефон] INT  NULL,

	 [ФИО] VARCHAR(255)  NULL,

	 [Должности] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ТЧквитанции] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [IDтарифа] INT  NULL,

	 [ВсегоНачисЗаРП] INT  NULL,

	 [ИтогоКОплЗаРП] INT  NULL,

	 [ОбъемКУ] INT  NULL,

	 [РазмПлатЗаКУ] INT  NULL,

	 [Услуга] VARCHAR(17)  NULL,

	 [Тариф] UNIQUEIDENTIFIER  NOT NULL,

	 [Квитанция] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Тариф] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [IDтарифа] INT  NULL,

	 [Наименование] VARCHAR(17)  NULL,

	 [Стоимость] INT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Должности] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [IDдолжности] INT  NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Квитанция] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [IDжильца] INT  NULL,

	 [IDорганизация] INT  NULL,

	 [IDсотрудника] INT  NULL,

	 [РасчетныйПериод] INT  NULL,

	 [СуммаКОплате] INT  NULL,

	 [Жилец] UNIQUEIDENTIFIER  NOT NULL,

	 [Организация] UNIQUEIDENTIFIER  NOT NULL,

	 [Сотрудники] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [БазаДанныхЛС] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [IDжильца] INT  NULL,

	 [Дата] DATETIME  NULL,

	 [ДатаФормЛС] DATETIME  NULL,

	 [ДоляСобст] INT  NULL,

	 [КолПрожив] INT  NULL,

	 [НомерЛицСчет] INT  NULL,

	 [Жилец] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Организация] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Email] VARCHAR(255)  NULL,

	 [IDорганизация] INT  NULL,

	 [Адрес] VARCHAR(255)  NULL,

	 [Банк] VARCHAR(255)  NULL,

	 [БИК] INT  NULL,

	 [ИНН] INT  NULL,

	 [КорреСчет] INT  NULL,

	 [КПП] INT  NULL,

	 [Наименование] VARCHAR(255)  NULL,

	 [РасчетныйСчет] INT  NULL,

	 [Телефон] INT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ТЧПерерасчетаКУ] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [МесяцНачис] DATETIME  NULL,

	 [НомерЛицСчет] INT  NULL,

	 [СуммаКоррек] INT  NULL,

	 [СуммаНачис] INT  NULL,

	 [ТипНачис] VARCHAR(255)  NULL,

	 [Услуга] VARCHAR(17)  NULL,

	 [БазаДанныхЛС] UNIQUEIDENTIFIER  NOT NULL,

	 [ПерерасчетКУ] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ПерерасчетКУ] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [IDжильца] INT  NULL,

	 [IDорганизация] INT  NULL,

	 [IDсотрудника] INT  NULL,

	 [ДатаНач] DATETIME  NULL,

	 [ДатаОкон] DATETIME  NULL,

	 [ДатаФорДок] DATETIME  NULL,

	 [ДнейПерер] INT  NULL,

	 [Номер] INT  NULL,

	 [ОсновПерер] VARCHAR(255)  NULL,

	 [ЧасовПерер] INT  NULL,

	 [Жилец] UNIQUEIDENTIFIER  NOT NULL,

	 [Организация] UNIQUEIDENTIFIER  NOT NULL,

	 [Сотрудники] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Жилец] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [IDжильца] INT  NULL,

	 [Адрес] VARCHAR(255)  NULL,

	 [Телефон] INT  NULL,

	 [ФИО] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMNETLOCKDATA] (

	 [LockKey] VARCHAR(300)  NOT NULL,

	 [UserName] VARCHAR(300)  NOT NULL,

	 [LockDate] DATETIME  NULL,

	 PRIMARY KEY ([LockKey]))


CREATE TABLE [STORMSETTINGS] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Module] varchar(1000)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [User] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMAdvLimit] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [User] varchar(255)  NULL,

	 [Published] bit  NULL,

	 [Module] varchar(255)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [HotKeyData] int  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERSETTING] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMWEBSEARCH] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [Order] INT  NOT NULL,

	 [PresentView] varchar(255)  NOT NULL,

	 [DetailedView] varchar(255)  NOT NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERDETAIL] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Caption] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 [ConnectMasterProp] varchar(255)  NOT NULL,

	 [OwnerConnectProp] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERLOOKUP] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [DataObjectType] varchar(255)  NOT NULL,

	 [Container] varchar(255)  NULL,

	 [ContainerTag] varchar(255)  NULL,

	 [FieldsToView] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [UserSetting] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [AppName] varchar(256)  NULL,

	 [UserName] varchar(512)  NULL,

	 [UserGuid] uniqueidentifier  NULL,

	 [ModuleName] varchar(1024)  NULL,

	 [ModuleGuid] uniqueidentifier  NULL,

	 [SettName] varchar(256)  NULL,

	 [SettGuid] uniqueidentifier  NULL,

	 [SettLastAccessTime] DATETIME  NULL,

	 [StrVal] varchar(256)  NULL,

	 [TxtVal] varchar(max)  NULL,

	 [IntVal] int  NULL,

	 [BoolVal] bit  NULL,

	 [GuidVal] uniqueidentifier  NULL,

	 [DecimalVal] decimal(20,10)  NULL,

	 [DateTimeVal] DATETIME  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ApplicationLog] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Category] varchar(64)  NULL,

	 [EventId] INT  NULL,

	 [Priority] INT  NULL,

	 [Severity] varchar(32)  NULL,

	 [Title] varchar(256)  NULL,

	 [Timestamp] DATETIME  NULL,

	 [MachineName] varchar(32)  NULL,

	 [AppDomainName] varchar(512)  NULL,

	 [ProcessId] varchar(256)  NULL,

	 [ProcessName] varchar(512)  NULL,

	 [ThreadName] varchar(512)  NULL,

	 [Win32ThreadId] varchar(128)  NULL,

	 [Message] varchar(2500)  NULL,

	 [FormattedMessage] varchar(max)  NULL,

	 PRIMARY KEY ([primaryKey]))




