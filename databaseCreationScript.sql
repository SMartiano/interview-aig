USE [AigExam]
GO
/****** Object:  Table [dbo].[Category]    Script Date: 03/01/2023 15:58:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Category](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[CategoryName] [nvarchar](50) NULL,
 CONSTRAINT [PK_CategoryID] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  View [dbo].[V_getCategory]    Script Date: 03/01/2023 15:58:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- OPDATE ARTICLE TO FAVORITE
-- GET ALL FAVORITE
-- GET ALL
-- GET CATEGORIES
-- GET ARTICLE BY CATEGORIES


create view  [dbo].[V_getCategory]  as 
select * from category
 
GO
/****** Object:  Table [dbo].[Articles]    Script Date: 03/01/2023 15:58:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Articles](
	[ID] [int] IDENTITY(1,1) NOT NULL,
	[Title] [nvarchar](250) NULL,
	[Description] [nvarchar](250) NULL,
	[Image] [nvarchar](200) NULL,
	[Category] [int] NOT NULL,
 CONSTRAINT [PK_ArticleID] PRIMARY KEY CLUSTERED 
(
	[ID] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  View [dbo].[V_getAllArticles]    Script Date: 03/01/2023 15:58:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- OPDATE ARTICLE TO FAVORITE
-- GET ALL FAVORITE
-- GET ALL
-- GET CATEGORIES
-- GET ARTICLE BY CATEGORIES


  

create view [dbo].[V_getAllArticles] as
select * from Articles
 
GO
ALTER TABLE [dbo].[Articles]  WITH CHECK ADD  CONSTRAINT [FK_Articles_categoryID] FOREIGN KEY([Category])
REFERENCES [dbo].[Category] ([ID])
GO
ALTER TABLE [dbo].[Articles] CHECK CONSTRAINT [FK_Articles_categoryID]
GO
/****** Object:  StoredProcedure [dbo].[P_getArticlesByCategory]    Script Date: 03/01/2023 15:58:37 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- OPDATE ARTICLE TO FAVORITE
-- GET ALL FAVORITE
-- GET ALL
-- GET CATEGORIES
-- GET ARTICLE BY CATEGORIES


  

CREATE PROCEDURE [dbo].[P_getArticlesByCategory]   
    @categoryID int   
AS   

    SET NOCOUNT ON;  
    SELECT * from Articles where category = @categoryID  
GO
