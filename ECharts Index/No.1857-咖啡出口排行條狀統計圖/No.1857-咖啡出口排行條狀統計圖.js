var years = [1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018];
     var jdData =[['Angola', 'Benin', 'Bolivia', 'Brazil', 'Burundi', 'Cameroon', 'Central African Republic', 'Colombia', 'Congo, Dem. Rep.', 'Congo, Rep.', 'Costa Rica', 'Cote d\'Ivoire', 'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'Equatorial Guinea', 'Ethiopia', 'Gabon', 'Ghana', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'India', 'Indonesia', 'Jamaica', 'Kenya', 'Lao PDR', 'Liberia', 'Madagascar', 'Malawi', 'Mexico', 'Nepal', 'Nicaragua', 'Nigeria', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Rwanda', 'Sierra Leone', 'Sri Lanka', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Trinidad and Tobago', 'Uganda', 'Venezuela, RB', 'Vietnam', 'Yemen, Rep.', 'Zambia', 'Zimbabwe'],
     ['Angola', 'Benin', 'Bolivia', 'Brazil', 'Burundi', 'Cameroon', 'Central African Republic', 'Colombia', 'Congo, Dem. Rep.', 'Congo, Rep.', 'Costa Rica', 'Cote d\'Ivoire', 'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'Equatorial Guinea', 'Ethiopia', 'Gabon', 'Ghana', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'India', 'Indonesia', 'Jamaica', 'Kenya', 'Lao PDR', 'Liberia', 'Madagascar', 'Malawi', 'Mexico', 'Nepal', 'Nicaragua', 'Nigeria', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Rwanda', 'Sierra Leone', 'Sri Lanka', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Trinidad and Tobago', 'Uganda', 'Venezuela, RB', 'Vietnam', 'Yemen, Rep.', 'Zambia', 'Zimbabwe'],
     ['Angola', 'Benin', 'Bolivia', 'Brazil', 'Burundi', 'Cameroon', 'Central African Republic', 'Colombia', 'Congo, Dem. Rep.', 'Congo, Rep.', 'Costa Rica', 'Cote d\'Ivoire', 'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'Equatorial Guinea', 'Ethiopia', 'Gabon', 'Ghana', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'India', 'Indonesia', 'Jamaica', 'Kenya', 'Lao PDR', 'Liberia', 'Madagascar', 'Malawi', 'Mexico', 'Nepal', 'Nicaragua', 'Nigeria', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Rwanda', 'Sierra Leone', 'Sri Lanka', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Trinidad and Tobago', 'Uganda', 'Venezuela, RB', 'Vietnam', 'Yemen, Rep.', 'Zambia', 'Zimbabwe'],
     ['Angola', 'Benin', 'Bolivia', 'Brazil', 'Burundi', 'Cameroon', 'Central African Republic', 'Colombia', 'Congo, Dem. Rep.', 'Congo, Rep.', 'Costa Rica', 'Cote d\'Ivoire', 'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'Equatorial Guinea', 'Ethiopia', 'Gabon', 'Ghana', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'India', 'Indonesia', 'Jamaica', 'Kenya', 'Lao PDR', 'Liberia', 'Madagascar', 'Malawi', 'Mexico', 'Nepal', 'Nicaragua', 'Nigeria', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Rwanda', 'Sierra Leone', 'Sri Lanka', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Trinidad and Tobago', 'Uganda', 'Venezuela, RB', 'Vietnam', 'Yemen, Rep.', 'Zambia', 'Zimbabwe'],
     ['Angola', 'Benin', 'Bolivia', 'Brazil', 'Burundi', 'Cameroon', 'Central African Republic', 'Colombia', 'Congo, Dem. Rep.', 'Congo, Rep.', 'Costa Rica', 'Cote d\'Ivoire', 'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'Equatorial Guinea', 'Ethiopia', 'Gabon', 'Ghana', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'India', 'Indonesia', 'Jamaica', 'Kenya', 'Lao PDR', 'Liberia', 'Madagascar', 'Malawi', 'Mexico', 'Nepal', 'Nicaragua', 'Nigeria', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Rwanda', 'Sierra Leone', 'Sri Lanka', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Trinidad and Tobago', 'Uganda', 'Venezuela, RB', 'Vietnam', 'Yemen, Rep.', 'Zambia', 'Zimbabwe'],
     ['Angola', 'Benin', 'Bolivia', 'Brazil', 'Burundi', 'Cameroon', 'Central African Republic', 'Colombia', 'Congo, Dem. Rep.', 'Congo, Rep.', 'Costa Rica', 'Cote d\'Ivoire', 'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'Equatorial Guinea', 'Ethiopia', 'Gabon', 'Ghana', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'India', 'Indonesia', 'Jamaica', 'Kenya', 'Lao PDR', 'Liberia', 'Madagascar', 'Malawi', 'Mexico', 'Nepal', 'Nicaragua', 'Nigeria', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Rwanda', 'Sierra Leone', 'Sri Lanka', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Trinidad and Tobago', 'Uganda', 'Venezuela, RB', 'Vietnam', 'Yemen, Rep.', 'Zambia', 'Zimbabwe'],
     ['Angola', 'Benin', 'Bolivia', 'Brazil', 'Burundi', 'Cameroon', 'Central African Republic', 'Colombia', 'Congo, Dem. Rep.', 'Congo, Rep.', 'Costa Rica', 'Cote d\'Ivoire', 'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'Equatorial Guinea', 'Ethiopia', 'Gabon', 'Ghana', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'India', 'Indonesia', 'Jamaica', 'Kenya', 'Lao PDR', 'Liberia', 'Madagascar', 'Malawi', 'Mexico', 'Nepal', 'Nicaragua', 'Nigeria', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Rwanda', 'Sierra Leone', 'Sri Lanka', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Trinidad and Tobago', 'Uganda', 'Venezuela, RB', 'Vietnam', 'Yemen, Rep.', 'Zambia', 'Zimbabwe'],
     ['Angola', 'Benin', 'Bolivia', 'Brazil', 'Burundi', 'Cameroon', 'Central African Republic', 'Colombia', 'Congo, Dem. Rep.', 'Congo, Rep.', 'Costa Rica', 'Cote d\'Ivoire', 'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'Equatorial Guinea', 'Ethiopia', 'Gabon', 'Ghana', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'India', 'Indonesia', 'Jamaica', 'Kenya', 'Lao PDR', 'Liberia', 'Madagascar', 'Malawi', 'Mexico', 'Nepal', 'Nicaragua', 'Nigeria', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Rwanda', 'Sierra Leone', 'Sri Lanka', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Trinidad and Tobago', 'Uganda', 'Venezuela, RB', 'Vietnam', 'Yemen, Rep.', 'Zambia', 'Zimbabwe'],
     ['Angola', 'Benin', 'Bolivia', 'Brazil', 'Burundi', 'Cameroon', 'Central African Republic', 'Colombia', 'Congo, Dem. Rep.', 'Congo, Rep.', 'Costa Rica', 'Cote d\'Ivoire', 'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'Equatorial Guinea', 'Ethiopia', 'Gabon', 'Ghana', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'India', 'Indonesia', 'Jamaica', 'Kenya', 'Lao PDR', 'Liberia', 'Madagascar', 'Malawi', 'Mexico', 'Nepal', 'Nicaragua', 'Nigeria', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Rwanda', 'Sierra Leone', 'Sri Lanka', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Trinidad and Tobago', 'Uganda', 'Venezuela, RB', 'Vietnam', 'Yemen, Rep.', 'Zambia', 'Zimbabwe'],
     ['Angola', 'Benin', 'Bolivia', 'Brazil', 'Burundi', 'Cameroon', 'Central African Republic', 'Colombia', 'Congo, Dem. Rep.', 'Congo, Rep.', 'Costa Rica', 'Cote d\'Ivoire', 'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'Equatorial Guinea', 'Ethiopia', 'Gabon', 'Ghana', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'India', 'Indonesia', 'Jamaica', 'Kenya', 'Lao PDR', 'Liberia', 'Madagascar', 'Malawi', 'Mexico', 'Nepal', 'Nicaragua', 'Nigeria', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Rwanda', 'Sierra Leone', 'Sri Lanka', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Trinidad and Tobago', 'Uganda', 'Venezuela, RB', 'Vietnam', 'Yemen, Rep.', 'Zambia', 'Zimbabwe'],
     ['Angola', 'Benin', 'Bolivia', 'Brazil', 'Burundi', 'Cameroon', 'Central African Republic', 'Colombia', 'Congo, Dem. Rep.', 'Congo, Rep.', 'Costa Rica', 'Cote d\'Ivoire', 'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'Equatorial Guinea', 'Ethiopia', 'Gabon', 'Ghana', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'India', 'Indonesia', 'Jamaica', 'Kenya', 'Lao PDR', 'Liberia', 'Madagascar', 'Malawi', 'Mexico', 'Nepal', 'Nicaragua', 'Nigeria', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Rwanda', 'Sierra Leone', 'Sri Lanka', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Trinidad and Tobago', 'Uganda', 'Venezuela, RB', 'Vietnam', 'Yemen, Rep.', 'Zambia', 'Zimbabwe'],
     ['Angola', 'Benin', 'Bolivia', 'Brazil', 'Burundi', 'Cameroon', 'Central African Republic', 'Colombia', 'Congo, Dem. Rep.', 'Congo, Rep.', 'Costa Rica', 'Cote d\'Ivoire', 'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'Equatorial Guinea', 'Ethiopia', 'Gabon', 'Ghana', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'India', 'Indonesia', 'Jamaica', 'Kenya', 'Lao PDR', 'Liberia', 'Madagascar', 'Malawi', 'Mexico', 'Nepal', 'Nicaragua', 'Nigeria', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Rwanda', 'Sierra Leone', 'Sri Lanka', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Trinidad and Tobago', 'Uganda', 'Venezuela, RB', 'Vietnam', 'Yemen, Rep.', 'Zambia', 'Zimbabwe'],
     ['Angola', 'Benin', 'Bolivia', 'Brazil', 'Burundi', 'Cameroon', 'Central African Republic', 'Colombia', 'Congo, Dem. Rep.', 'Congo, Rep.', 'Costa Rica', 'Cote d\'Ivoire', 'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'Equatorial Guinea', 'Ethiopia', 'Gabon', 'Ghana', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'India', 'Indonesia', 'Jamaica', 'Kenya', 'Lao PDR', 'Liberia', 'Madagascar', 'Malawi', 'Mexico', 'Nepal', 'Nicaragua', 'Nigeria', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Rwanda', 'Sierra Leone', 'Sri Lanka', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Trinidad and Tobago', 'Uganda', 'Venezuela, RB', 'Vietnam', 'Yemen, Rep.', 'Zambia', 'Zimbabwe'],
     ['Angola', 'Benin', 'Bolivia', 'Brazil', 'Burundi', 'Cameroon', 'Central African Republic', 'Colombia', 'Congo, Dem. Rep.', 'Congo, Rep.', 'Costa Rica', 'Cote d\'Ivoire', 'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'Equatorial Guinea', 'Ethiopia', 'Gabon', 'Ghana', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'India', 'Indonesia', 'Jamaica', 'Kenya', 'Lao PDR', 'Liberia', 'Madagascar', 'Malawi', 'Mexico', 'Nepal', 'Nicaragua', 'Nigeria', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Rwanda', 'Sierra Leone', 'Sri Lanka', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Trinidad and Tobago', 'Uganda', 'Venezuela, RB', 'Vietnam', 'Yemen, Rep.', 'Zambia', 'Zimbabwe'],
     ['Angola', 'Benin', 'Bolivia', 'Brazil', 'Burundi', 'Cameroon', 'Central African Republic', 'Colombia', 'Congo, Dem. Rep.', 'Congo, Rep.', 'Costa Rica', 'Cote d\'Ivoire', 'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'Equatorial Guinea', 'Ethiopia', 'Gabon', 'Ghana', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'India', 'Indonesia', 'Jamaica', 'Kenya', 'Lao PDR', 'Liberia', 'Madagascar', 'Malawi', 'Mexico', 'Nepal', 'Nicaragua', 'Nigeria', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Rwanda', 'Sierra Leone', 'Sri Lanka', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Trinidad and Tobago', 'Uganda', 'Venezuela, RB', 'Vietnam', 'Yemen, Rep.', 'Zambia', 'Zimbabwe'],
     ['Angola', 'Benin', 'Bolivia', 'Brazil', 'Burundi', 'Cameroon', 'Central African Republic', 'Colombia', 'Congo, Dem. Rep.', 'Congo, Rep.', 'Costa Rica', 'Cote d\'Ivoire', 'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'Equatorial Guinea', 'Ethiopia', 'Gabon', 'Ghana', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'India', 'Indonesia', 'Jamaica', 'Kenya', 'Lao PDR', 'Liberia', 'Madagascar', 'Malawi', 'Mexico', 'Nepal', 'Nicaragua', 'Nigeria', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Rwanda', 'Sierra Leone', 'Sri Lanka', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Trinidad and Tobago', 'Uganda', 'Venezuela, RB', 'Vietnam', 'Yemen, Rep.', 'Zambia', 'Zimbabwe'],
     ['Angola', 'Benin', 'Bolivia', 'Brazil', 'Burundi', 'Cameroon', 'Central African Republic', 'Colombia', 'Congo, Dem. Rep.', 'Congo, Rep.', 'Costa Rica', 'Cote d\'Ivoire', 'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'Equatorial Guinea', 'Ethiopia', 'Gabon', 'Ghana', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'India', 'Indonesia', 'Jamaica', 'Kenya', 'Lao PDR', 'Liberia', 'Madagascar', 'Malawi', 'Mexico', 'Nepal', 'Nicaragua', 'Nigeria', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Rwanda', 'Sierra Leone', 'Sri Lanka', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Trinidad and Tobago', 'Uganda', 'Venezuela, RB', 'Vietnam', 'Yemen, Rep.', 'Zambia', 'Zimbabwe'],
     ['Angola', 'Benin', 'Bolivia', 'Brazil', 'Burundi', 'Cameroon', 'Central African Republic', 'Colombia', 'Congo, Dem. Rep.', 'Congo, Rep.', 'Costa Rica', 'Cote d\'Ivoire', 'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'Equatorial Guinea', 'Ethiopia', 'Gabon', 'Ghana', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'India', 'Indonesia', 'Jamaica', 'Kenya', 'Lao PDR', 'Liberia', 'Madagascar', 'Malawi', 'Mexico', 'Nepal', 'Nicaragua', 'Nigeria', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Rwanda', 'Sierra Leone', 'Sri Lanka', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Trinidad and Tobago', 'Uganda', 'Venezuela, RB', 'Vietnam', 'Yemen, Rep.', 'Zambia', 'Zimbabwe'],
     ['Angola', 'Benin', 'Bolivia', 'Brazil', 'Burundi', 'Cameroon', 'Central African Republic', 'Colombia', 'Congo, Dem. Rep.', 'Congo, Rep.', 'Costa Rica', 'Cote d\'Ivoire', 'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'Equatorial Guinea', 'Ethiopia', 'Gabon', 'Ghana', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'India', 'Indonesia', 'Jamaica', 'Kenya', 'Lao PDR', 'Liberia', 'Madagascar', 'Malawi', 'Mexico', 'Nepal', 'Nicaragua', 'Nigeria', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Rwanda', 'Sierra Leone', 'Sri Lanka', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Trinidad and Tobago', 'Uganda', 'Venezuela, RB', 'Vietnam', 'Yemen, Rep.', 'Zambia', 'Zimbabwe'],
     ['Angola', 'Benin', 'Bolivia', 'Brazil', 'Burundi', 'Cameroon', 'Central African Republic', 'Colombia', 'Congo, Dem. Rep.', 'Congo, Rep.', 'Costa Rica', 'Cote d\'Ivoire', 'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'Equatorial Guinea', 'Ethiopia', 'Gabon', 'Ghana', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'India', 'Indonesia', 'Jamaica', 'Kenya', 'Lao PDR', 'Liberia', 'Madagascar', 'Malawi', 'Mexico', 'Nepal', 'Nicaragua', 'Nigeria', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Rwanda', 'Sierra Leone', 'Sri Lanka', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Trinidad and Tobago', 'Uganda', 'Venezuela, RB', 'Vietnam', 'Yemen, Rep.', 'Zambia', 'Zimbabwe'],
     ['Angola', 'Benin', 'Bolivia', 'Brazil', 'Burundi', 'Cameroon', 'Central African Republic', 'Colombia', 'Congo, Dem. Rep.', 'Congo, Rep.', 'Costa Rica', 'Cote d\'Ivoire', 'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'Equatorial Guinea', 'Ethiopia', 'Gabon', 'Ghana', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'India', 'Indonesia', 'Jamaica', 'Kenya', 'Lao PDR', 'Liberia', 'Madagascar', 'Malawi', 'Mexico', 'Nepal', 'Nicaragua', 'Nigeria', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Rwanda', 'Sierra Leone', 'Sri Lanka', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Trinidad and Tobago', 'Uganda', 'Venezuela, RB', 'Vietnam', 'Yemen, Rep.', 'Zambia', 'Zimbabwe'],
     ['Angola', 'Benin', 'Bolivia', 'Brazil', 'Burundi', 'Cameroon', 'Central African Republic', 'Colombia', 'Congo, Dem. Rep.', 'Congo, Rep.', 'Costa Rica', 'Cote d\'Ivoire', 'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'Equatorial Guinea', 'Ethiopia', 'Gabon', 'Ghana', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'India', 'Indonesia', 'Jamaica', 'Kenya', 'Lao PDR', 'Liberia', 'Madagascar', 'Malawi', 'Mexico', 'Nepal', 'Nicaragua', 'Nigeria', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Rwanda', 'Sierra Leone', 'Sri Lanka', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Trinidad and Tobago', 'Uganda', 'Venezuela, RB', 'Vietnam', 'Yemen, Rep.', 'Zambia', 'Zimbabwe'],
     ['Angola', 'Benin', 'Bolivia', 'Brazil', 'Burundi', 'Cameroon', 'Central African Republic', 'Colombia', 'Congo, Dem. Rep.', 'Congo, Rep.', 'Costa Rica', 'Cote d\'Ivoire', 'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'Equatorial Guinea', 'Ethiopia', 'Gabon', 'Ghana', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'India', 'Indonesia', 'Jamaica', 'Kenya', 'Lao PDR', 'Liberia', 'Madagascar', 'Malawi', 'Mexico', 'Nepal', 'Nicaragua', 'Nigeria', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Rwanda', 'Sierra Leone', 'Sri Lanka', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Trinidad and Tobago', 'Uganda', 'Venezuela, RB', 'Vietnam', 'Yemen, Rep.', 'Zambia', 'Zimbabwe'],
     ['Angola', 'Benin', 'Bolivia', 'Brazil', 'Burundi', 'Cameroon', 'Central African Republic', 'Colombia', 'Congo, Dem. Rep.', 'Congo, Rep.', 'Costa Rica', 'Cote d\'Ivoire', 'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'Equatorial Guinea', 'Ethiopia', 'Gabon', 'Ghana', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'India', 'Indonesia', 'Jamaica', 'Kenya', 'Lao PDR', 'Liberia', 'Madagascar', 'Malawi', 'Mexico', 'Nepal', 'Nicaragua', 'Nigeria', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Rwanda', 'Sierra Leone', 'Sri Lanka', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Trinidad and Tobago', 'Uganda', 'Venezuela, RB', 'Vietnam', 'Yemen, Rep.', 'Zambia', 'Zimbabwe'],
     ['Angola', 'Benin', 'Bolivia', 'Brazil', 'Burundi', 'Cameroon', 'Central African Republic', 'Colombia', 'Congo, Dem. Rep.', 'Congo, Rep.', 'Costa Rica', 'Cote d\'Ivoire', 'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'Equatorial Guinea', 'Ethiopia', 'Gabon', 'Ghana', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'India', 'Indonesia', 'Jamaica', 'Kenya', 'Lao PDR', 'Liberia', 'Madagascar', 'Malawi', 'Mexico', 'Nepal', 'Nicaragua', 'Nigeria', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Rwanda', 'Sierra Leone', 'Sri Lanka', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Trinidad and Tobago', 'Uganda', 'Venezuela, RB', 'Vietnam', 'Yemen, Rep.', 'Zambia', 'Zimbabwe'],
     ['Angola', 'Benin', 'Bolivia', 'Brazil', 'Burundi', 'Cameroon', 'Central African Republic', 'Colombia', 'Congo, Dem. Rep.', 'Congo, Rep.', 'Costa Rica', 'Cote d\'Ivoire', 'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'Equatorial Guinea', 'Ethiopia', 'Gabon', 'Ghana', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'India', 'Indonesia', 'Jamaica', 'Kenya', 'Lao PDR', 'Liberia', 'Madagascar', 'Malawi', 'Mexico', 'Nepal', 'Nicaragua', 'Nigeria', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Rwanda', 'Sierra Leone', 'Sri Lanka', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Trinidad and Tobago', 'Uganda', 'Venezuela, RB', 'Vietnam', 'Yemen, Rep.', 'Zambia', 'Zimbabwe'],
     ['Angola', 'Benin', 'Bolivia', 'Brazil', 'Burundi', 'Cameroon', 'Central African Republic', 'Colombia', 'Congo, Dem. Rep.', 'Congo, Rep.', 'Costa Rica', 'Cote d\'Ivoire', 'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'Equatorial Guinea', 'Ethiopia', 'Gabon', 'Ghana', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'India', 'Indonesia', 'Jamaica', 'Kenya', 'Lao PDR', 'Liberia', 'Madagascar', 'Malawi', 'Mexico', 'Nepal', 'Nicaragua', 'Nigeria', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Rwanda', 'Sierra Leone', 'Sri Lanka', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Trinidad and Tobago', 'Uganda', 'Venezuela, RB', 'Vietnam', 'Yemen, Rep.', 'Zambia', 'Zimbabwe'],
     ['Angola', 'Benin', 'Bolivia', 'Brazil', 'Burundi', 'Cameroon', 'Central African Republic', 'Colombia', 'Congo, Dem. Rep.', 'Congo, Rep.', 'Costa Rica', 'Cote d\'Ivoire', 'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'Equatorial Guinea', 'Ethiopia', 'Gabon', 'Ghana', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'India', 'Indonesia', 'Jamaica', 'Kenya', 'Lao PDR', 'Liberia', 'Madagascar', 'Malawi', 'Mexico', 'Nepal', 'Nicaragua', 'Nigeria', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Rwanda', 'Sierra Leone', 'Sri Lanka', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Trinidad and Tobago', 'Uganda', 'Venezuela, RB', 'Vietnam', 'Yemen, Rep.', 'Zambia', 'Zimbabwe'],
     ['Angola', 'Benin', 'Bolivia', 'Brazil', 'Burundi', 'Cameroon', 'Central African Republic', 'Colombia', 'Congo, Dem. Rep.', 'Congo, Rep.', 'Costa Rica', 'Cote d\'Ivoire', 'Cuba', 'Dominican Republic', 'Ecuador', 'El Salvador', 'Equatorial Guinea', 'Ethiopia', 'Gabon', 'Ghana', 'Guatemala', 'Guinea', 'Guyana', 'Haiti', 'Honduras', 'India', 'Indonesia', 'Jamaica', 'Kenya', 'Lao PDR', 'Liberia', 'Madagascar', 'Malawi', 'Mexico', 'Nepal', 'Nicaragua', 'Nigeria', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Rwanda', 'Sierra Leone', 'Sri Lanka', 'Tanzania', 'Thailand', 'Timor-Leste', 'Togo', 'Trinidad and Tobago', 'Uganda', 'Venezuela, RB', 'Vietnam', 'Yemen, Rep.', 'Zambia', 'Zimbabwe'],
 
         ]
     var data =[
     [91495.11146, 0, 169693.8735, 18370382.62, 634307.8935, 2832453.27, 213359.8747, 15125025.96, 1994382.996, 1822.309274, 2457561.948, 4645658.589, 197177.1174, 580543.2616, 1934810.838, 2722479.074, 7666.715445, 1165085.841, 2510.014083, 11785.35135, 3514606.543, 132004.6127, 216.9407125, 207661.9041, 1882069.086, 2146797.472, 7487984.869, 16253.26276, 2136156.489, 106662.5812, 24309.38877, 936146.3069, 134670.8248, 3995092.012, 0, 728038.5878, 3885.423702, 142806.134, 1139723.201, 284737.9934, 1198686.838, 182536.8161, 845150.1612, 151581.4209, 20758.0551, 1105373.756, 1086264.456, 0, 259069.4657, 32792.88894, 2551970.585, 301326.4314, 1242244.37, 54235.39527, 26423.48447, 272014.3698],
     [71416.13097, 0, 74477.35773, 21457722.05, 696779.579, 1774922.979, 142779.587, 12762727.42, 1436362.645, 935.9938868, 2430788.28, 3854120.959, 123005.1966, 482445.0829, 1434769.226, 2176094.619, 3364.107898, 852249.7844, 3381.328565, 15905.81819, 2868745.29, 62244.60645, 427.4752964, 152628.7954, 1463111.405, 1749780.805, 6250895.382, 16921.83743, 1577749.384, 99609.40056, 0, 595286.0341, 100827.0038, 3576651.447, 0, 397142.0035, 933.967926, 125812.1653, 798586.1348, 121642.7381, 1055390.847, 104362.3056, 480132.4486, 105168.6378, 22455.74944, 882640.208, 547958.577, 0, 156843.8068, 7771.583276, 2122288.139, 129549.05, 1216540.834, 72597.26297, 29577.00163, 242430.5205],
     [64923.81677, 0, 77830.91433, 15202058.7, 522511.7315, 1331525.592, 80881.72687, 13400898.73, 771989.891, 271.8305599, 1967001.529, 3678100.473, 131635.5667, 298906.0169, 1030233.778, 1715195.82, 2237.748002, 594193.2883, 814.6826603, 26086.83454, 2692407.267, 46534.803, 436.0599052, 134277.8245, 1585735.707, 1469455.331, 3724479.945, 18143.88045, 1119918.445, 82398.63848, 0, 595766.8313, 103572.2975, 2695686.222, 0, 514492.73, 9215.541394, 101454.2844, 742011.6722, 32659.30963, 858404.5024, 33425.45048, 521433.3085, 38040.098, 11912.00347, 669695.0351, 941517.5056, 0, 253366.3073, 1982.906852, 1586514.792, 109879.4145, 1567565.128, 29924.82445, 24686.42174, 131318.431],
     [36334.62328, 1686.917923, 44223.41784, 16670812.64, 390289.2559, 658440.0468, 128221.65, 12680727.45, 859352.4387, 471.0286057, 2209273.694, 3769263.427, 108593.589, 309749.9067, 1494082.177, 2754275.285, 2301.871936, 1090448.045, 2035.516475, 44375.75447, 3505319.183, 14457.02679, 49.53202238, 148170.2722, 1593756.128, 1964107.977, 5291683.021, 22760.77466, 1344673.585, 132399.2248, 0, 586713.792, 96798.24763, 3050112.092, 7.7726262, 445295.8647, 9629.918161, 120828.1832, 985640.4412, 54618.7573, 724299.9393, 32484.15116, 449276.243, 38304.71911, 13517.77332, 969436.6823, 917554.3783, 0, 204003.9845, 9106.552669, 1709423.558, 490656.6671, 1936298.598, 47526.22781, 21562.64284, 65259.89182],
     [16926.53697, 101.9425257, 171917.9146, 35217365.87, 1035334.408, 1112986.069, 278661.9329, 23993374.31, 1551585.63, 2073.510973, 4291715.09, 4982936.386, 276722.9863, 677536.5319, 4373846.104, 4267222.379, 1730.984087, 3007967.135, 10273.76774, 22050.16831, 6675337.265, 102894.6691, 821.6510486, 210955.785, 3503122.371, 5089144.186, 9388152.243, 32268.88607, 2769596.966, 311944.1287, 0, 888166.1, 159986.561, 5686447.873, 0, 1271251.839, 16051.8701, 155943.5205, 2358617.712, 112108.2338, 2155099.654, 256222.3425, 61214.44785, 126253.7793, 96557.92152, 1288834.885, 2316227.972, 0, 338031.2211, 11009.78972, 6868408.254, 786988.1434, 5547530.792, 189286.8899, 48838.62523, 64721.27073],
     [85135.49436, 0, 197222.8306, 30370007.35, 1108724.041, 854879.2537, 486018.951, 20600520.56, 2206923.43, 40194.76766, 4338765.83, 5234925.062, 256686.9055, 946710.7281, 3232487.185, 3794034.266, 7105.294717, 2678639.434, 6183.810409, 80083.07357, 7768326.817, 318115.6944, 54.57370115, 318611.0707, 3769821.688, 5178903.436, 8284091.448, 55253.37517, 3043723.54, 346832.8379, 0, 1228340.68, 192342.532, 7612199.243, 524.763273, 1429830.884, 31886.71552, 378948.3519, 2103360.349, 29401.43561, 3695313.7, 120326.1207, 658890.6665, 150029.8198, 45960.8665, 1563066.181, 2538852.993, 0, 420473.9192, 8522.152195, 6463532.323, 203087.585, 7444092.381, 161362.6133, 43538.55923, 329498.8591],
     [80225.47207, 0, 191071.6252, 23605319.34, 346831.1026, 872276.9108, 152194.8297, 16389069.77, 1364504.783, 19555.25871, 3761429.403, 4257460.286, 173621.4126, 700707.9188, 2382743.42, 3581901.478, 2567.84662, 2845265.377, 2601.898836, 6746.982168, 6158804.44, 50196.06142, 522.4815628, 242185.5485, 3188154.162, 4803182.642, 9968445.588, 42232.48692, 2943324.923, 223145.7153, 0, 1111416.334, 93103.40087, 7171856.307, 128.9856135, 1272865.627, 10717.16109, 214525.8625, 1687250.134, 22898.5673, 2599382.067, 41840.88551, 410648.0503, 44131.67139, 17855.74359, 1500831.279, 1350767.809, 0, 132323.8141, 5815.186164, 7204369.98, 765504.6411, 5849884.288, 65019.61309, 55449.38958, 232734.5108],
     [102536.2344, 0, 225312.0748, 34117676.06, 1073740.83, 2778006.195, 411773.5285, 22172517.46, 1105193.75, 5421.866875, 4262844.344, 9570472.281, 216596.4745, 623366.4525, 2122002.946, 5629250.237, 2274.341161, 4020168.08, 0, 60247.70349, 8617888.853, 232193.9872, 656.4443077, 204641.9686, 3497778.314, 5361172.428, 11686616.77, 60274.10229, 2353729.882, 223541.3367, 0, 975190.7846, 122184.9175, 9142900.205, 135.3775177, 1449898.583, 14021.71939, 252019.3379, 2118867.605, 19703.51056, 3345988.379, 62806.33628, 442580.6979, 95325.35477, 42920.06677, 1330422.565, 2165152.478, 0, 635875.3287, 8025.172803, 7111259.673, 212279.287, 12545091.21, 162024.4769, 78972.43549, 221358.3761],
     [89099.2771, 0, 160323.8469, 29977412.6, 617644.7338, 1232044.628, 169048.8982, 18603191.86, 1057991.34, 0, 3377934.69, 7212149.406, 251030.6748, 593959.3849, 1745367.092, 2782643.665, 2757.453197, 3167289.385, 2916.060451, 29386.95028, 5851703.943, 376989.6169, 377.1908498, 210329.7404, 3848330.76, 5760797.208, 9248838.367, 28055.31087, 1390273.537, 184526.3221, 5359.603458, 1315310.132, 96816.5113, 5615731.045, 55.07190813, 1553994.221, 16351.41643, 239766.2555, 2228709.482, 68177.989, 3220477.337, 34700.29263, 354011.391, 69167.63218, 45047.76413, 1226405.809, 1285430.838, 0, 273929.5971, 8622.615295, 5429013.958, 442056.5903, 10684035.76, 116957.9794, 55030.10851, 253223.0897],
     [65135.10871, 0, 160789.3835, 30087917.67, 531265.6227, 1499959.628, 253298.2904, 12991291.93, 633118.3516, 0, 2852810.928, 3127184.478, 100616.6775, 208727.6515, 1284175.699, 2456265.824, 1346.529366, 2363038.161, 3249.346925, 122705.7378, 6083558.586, 390953.6234, 1831.798923, 93374.53296, 2582064.939, 4707600.534, 6648198.9, 31490.07092, 1447999.971, 248686.8162, 19767.72695, 603576.5891, 70588.81259, 5663774.16, 0, 1279195.098, 11146.55969, 153344.4798, 1715847.537, 6657.261979, 3128900.133, 11171.2546, 408142.6688, 29822.50607, 22433.49078, 836192.1372, 641296.3093, 0, 417060.1765, 3856.32337, 4992032.768, 603185.3679, 10043098.37, 88387.4353, 66525.82919, 170814.2686],
     [20949.30201, 0, 103598.9501, 17550713.1, 432762.6052, 1173827.238, 197575.1517, 8939532.242, 274058.3695, 0, 1914204.153, 5951738.883, 110001.1074, 150865.1827, 678648.4546, 2471026.683, 174.3745668, 1930644.031, 568.9092013, 88291.14262, 4726224.734, 284603.647, 500.3426863, 70975.3195, 2804176.833, 4119514.244, 5219156.316, 28168.73055, 1293984.115, 248020.0574, 3490.413816, 210644.4768, 59899.12495, 5166640.816, 64.94332332, 1331309.293, 6569.732187, 70172.612, 1016201.524, 1852.851543, 2300542.169, 4868.07031, 263177.0069, 38767.6551, 2368.181577, 721217.5922, 945257.2212, 1164.120712, 275297.5005, 3016.971962, 2448328.024, 37375.61027, 11318152.27, 56602.56812, 62883.94994, 114032.472],
     [9851.651381, 0, 48086.4289, 16020158.51, 209591.9819, 777871.8748, 65204.79661, 6874468.507, 91986.07879, 0, 1395337.434, 2830723.039, 75097.23728, 67326.53266, 522924.9645, 1059770.83, 0, 951332.1475, 1399.280168, 39084.43924, 2841684.989, 245985.7104, 793.1063994, 59917.39803, 1653427.194, 2578506.246, 3624996.359, 19489.67686, 757631.3978, 136968.3723, 4996.342774, 60324.59962, 44046.90616, 2304364.169, 46.08913621, 943402.432, 4739.162822, 39360.28548, 757305.7746, 414.8063739, 1840907.922, 2083.710685, 192728.0288, 24821.32207, 2864.237735, 598815.8642, 793518.3714, 21891.15308, 133654.0704, 1963.416491, 2115348.659, 17929.31445, 9752404.117, 45545.74089, 79466.53109, 72292.45492],
     [6765.28815, 0, 57298.98625, 20257378.64, 208936.2779, 463100.4436, 69089.91702, 7437418.983, 129746.5712, 0, 1291546.719, 2355156.437, 41569.05784, 84570.08604, 409239.4828, 1109882.986, 0, 1487478.729, 180.9868419, 18139.94919, 2527537.715, 98288.16217, 774.577061, 29813.60049, 1962809.54, 2570107.267, 3102715.347, 19092.66421, 532610.9741, 201305.8726, 4180.796047, 105210.547, 31831.96575, 1914593.921, 84.46033316, 691660.7623, 3844.160449, 59868.27545, 765251.4604, 4456.619415, 2019425.12, 5073.422934, 238865.71, 58249.52914, 2108.134372, 359151.7366, 183375.8681, 21736.9784, 72533.0107, 1552.866452, 2430904.496, 138926.2238, 8521850.151, 44159.34196, 71993.66991, 86214.16812],
     [13614.06529, 0, 57578.41393, 20235210.36, 374611.0995, 640911.7554, 31347.45177, 8062655.89, 166747.5084, 0, 1339379.101, 2082995.277, 39461.7432, 119186.4313, 489102.8853, 1026312.265, 0, 1754405.038, 747.6796178, 19697.93025, 3007088.72, 279118.2457, 612.60067, 29137.4683, 1908737.13, 2917576.517, 3773594.124, 19288.3889, 723729.4721, 183102.8033, 5197.553891, 93617.35847, 38471.65798, 2042812.612, 1463.090013, 797449.1081, 7066.752778, 67764.17134, 902856.9806, 23468.22294, 1969958.711, 9704.881282, 193157.9136, 26738.67621, 4703.411802, 694684.874, 142165.376, 36130.516, 56318.37694, 1410.206791, 1984993.368, 204589.9569, 9154046.977, 43543.92453, 102056.6938, 76678.87356],
     [5343.782464, 0, 87911.34756, 24955063.64, 319425.3036, 692076.377, 60242.42947, 9607795.72, 238053.7279, 0, 1342015.098, 2424714.432, 23408.97158, 42942.52316, 663421.6409, 1251154.774, 0, 2347630.135, 0, 20834.95544, 3119167.709, 279160.3269, 603.9854897, 30211.69129, 2619291.26, 3437490.818, 5141716.801, 27511.04607, 710240.5251, 251701.2583, 0, 119725.2313, 24256.24855, 2226040.067, 1372.858335, 1235902.845, 5295.896141, 93440.79583, 987388.6978, 20010.33262, 3000870.314, 27155.27344, 424528.1743, 21625.82592, 6515.553322, 521025.3878, 395660.4391, 21145.34608, 139994.8485, 2060.634617, 2475868.662, 160063.3645, 14004094.45, 42060.43404, 97785.56429, 106506.2021],
     [6321.489003, 0, 114117.1059, 35500690.12, 503335.5191, 954518.2797, 63094.57536, 14731504.43, 213467.1303, 0, 2005986.634, 2376621.389, 32093.92187, 56598.11716, 1346260.372, 1734351.832, 0, 3299734.599, 0, 23773.40595, 4696457.526, 378632.1223, 715.2232934, 34011.37286, 3241244.023, 3833454.494, 9138845.791, 20751.06994, 912164.4389, 321020.523, 1056.969222, 130110.2011, 28276.63688, 2689584.182, 1549.317546, 1358534.946, 11325.69867, 122465.4785, 1625619.626, 31343.74935, 3210798.52, 46634.75804, 319257.7795, 27623.22419, 3399.808174, 964493.7212, 507572.8815, 24935.26541, 222231.7765, 1048.593012, 3209787.873, 29904.85392, 18201597.51, 105519.6803, 143371.6867, 96055.08109],
     [7855.261122, 0, 134373.2247, 39739347.79, 407902.9466, 1073192.623, 23983.50902, 15891808.11, 200510.7431, 0, 1902642.12, 2542534.493, 23135.02655, 181022.3342, 1473448.381, 1877152.741, 0, 4262401.172, 1584.120127, 12806.27292, 4809146.558, 753470.1496, 2482.808317, 34538.32022, 4208466.219, 5195616.483, 7667134.027, 35725.09002, 867030.6173, 174041.7146, 647.5871461, 259499.495, 25293.65042, 3731720.847, 2013.274241, 2098564.803, 40585.21238, 155280.0797, 1232458.835, 14771.70456, 5635207.513, 55301.86521, 564776.5264, 74026.78685, 10787.45804, 1062189.205, 784217.6049, 71585.29866, 171182.2327, 1149.559676, 3155011.18, 94188.47437, 20189476.04, 87939.79071, 113176.9373, 78757.68015],
     [6394.436936, 0, 137240.6117, 46020961.76, 581498.5994, 1176701.721, 199115.2984, 18452458.49, 326559.97, 0, 2227031.106, 3585198.014, 25538.55814, 127088.0373, 1618391.472, 1976394.91, 0, 4252085.02, 658.0587552, 36124.89466, 6084458.536, 711445.0587, 3124.47244, 33993.27466, 5408179.236, 5420257.966, 6775572.321, 37120.96946, 1334840.343, 410981.112, 3813.366229, 162394.1581, 30820.99008, 4755497.887, 3134.997951, 2056387.201, 15370.41257, 177815.1374, 1483890.249, 51424.55938, 4701926.619, 52944.9607, 417264.3114, 83424.84236, 6946.942904, 1318155.642, 596735.2843, 51032.08269, 252949.1038, 1241.655141, 4397705.421, 114922.954, 29288053.83, 117962.1392, 87657.34515, 52911.62537],
     [11502.88146, 0, 128413.7807, 55602527.96, 472359.0597, 992989.712, 61486.24581, 20886388.01, 382870.9443, 0, 2713366.301, 2807862.738, 7254.069388, 153776.2499, 1636322.242, 2709838.751, 0, 5373514.963, 793.237198, 67999.52077, 7117636.74, 392236.9834, 2861.494287, 32409.4126, 6141379.84, 6362230.857, 10816426.13, 39144.40113, 1146386.022, 486313.9643, 3259.62079, 369651.194, 38727.30966, 4612459.146, 1953.063974, 3061990.874, 3556.690005, 214706.1276, 2064906.406, 1581.807863, 7032805.199, 8277.082908, 614369.6708, 48445.48694, 3204.047082, 1541133.95, 329810.6012, 93469.20768, 227342.3462, 2373.651714, 6237840.213, 236437.9649, 30337784.41, 125447.5424, 91355.42613, 43525.53817],
     [12146.88981, 0, 144901.0346, 53284909.12, 506626.1638, 1083585.071, 108018.7391, 13846448.95, 282407.2655, 0, 2167400.076, 3168760.84, 13088.82192, 179609.7854, 1905294.307, 2296420.567, 0, 3247644.123, 1183.99287, 41528.12595, 6126631.598, 769657.8112, 2398.379275, 27917.45453, 5409861.33, 5273701.509, 13869859.94, 43554.30417, 920441.3191, 462830.3137, 15997.05922, 69526.05516, 30827.6662, 4978201.422, 2645.668026, 2410081.738, 1126.964581, 103480.7505, 1801375.567, 32.37931078, 5391251.017, 11807.11455, 533790.0402, 181955.0711, 1139.120066, 2029353.81, 325181.5521, 75770.68105, 266098.0707, 251.216099, 5287363.098, 31891.54431, 29909825.24, 69046.6917, 57090.67452, 32412.57818],
     [9757.348668, 0, 174757.0309, 74054573.49, 685736.1, 1772500.906, 212549.4392, 17464168.19, 361958.7848, 0, 2679324.667, 4269238.469, 11744.54325, 91836.91075, 2682830.412, 2415371.658, 0, 7422065.812, 1808.570348, 14785.47455, 7743556.222, 905532.2579, 1791.825666, 19515.40871, 7478544.758, 10376462.74, 12256184.58, 34463.1569, 1185825.223, 642729.8004, 16111.90483, 164300.5859, 18130.11348, 5576514.52, 2314.580422, 3822147.857, 6796.992527, 145880.9062, 2075035.741, 437.2147367, 8521874.162, 14215.24192, 660826.8943, 128556.9451, 3695.833155, 1240996.167, 825305.4294, 151918.2744, 442335.4469, 1116.570249, 5931521.282, 42611.50448, 31769627.61, 97194.85802, 39903.1648, 16599.5856],
     [24167.53239, 0, 237077.5372, 107855818.5, 695022.4962, 1564215.432, 248671.9442, 24673615.69, 420068.6158, 0, 3965899.834, 2463787.139, 31122.67703, 282665.6708, 4888562.528, 5826710.225, 0, 8535745.96, 2400.269227, 229943.2577, 11794475.24, 1226797.625, 1883.247384, 27505.06479, 12593090.64, 17273039.73, 12506153.67, 51237.89585, 1943494.545, 1343063.617, 25138.43294, 459137.5577, 82483.17517, 9273050.512, 11958.65112, 4682630.245, 20910.09806, 169376.4171, 3906757.922, 63.62394029, 14985687.56, 32944.65469, 883149.2153, 119280.8205, 7510.501449, 2546284.619, 774490.3048, 123537.3071, 494785.6927, 956.6185693, 10024376.58, 1490.193976, 56526166.48, 112547.9217, 28723.47117, 14555.41435],
     [19855.43938, 0, 148591.6597, 67684942.69, 929369.5008, 1474192.997, 184192.095, 16999108.87, 347046.8434, 0, 3256688.369, 4058251.753, 36301.67018, 325707.4815, 3744892.201, 2475080.708, 0, 7592702.015, 0, 72231.27407, 8890762.043, 894273.6827, 4189.247826, 26224.99771, 13058323.71, 11958218.54, 19454159.94, 35371.01598, 1903481.78, 852923.0488, 6664.236287, 187097.4394, 46301.69733, 8431640.911, 3386.852418, 4711493.409, 3940.289777, 119945.4233, 2192823.106, 15.52636089, 10218976.87, 7328.118253, 594702.0263, 154742.2094, 362.6354773, 1792848.539, 829114.2297, 132473.2385, 349433.0841, 3433.480576, 6366156.473, 5487.868241, 54337909.94, 148534.3248, 16775.12412, 9491.582338],
     [10003.86685, 0, 99405.33184, 57360148.08, 352882.5672, 492852.1293, 1812.294719, 17524722.06, 253948.4016, 0, 2435636.363, 3555850.489, 22499.63894, 117297.7164, 2287344.122, 1998496.086, 0, 5201422.216, 0, 40976.9124, 6478974.276, 243349.738, 2012.355202, 15004.84121, 7584668.926, 9120624.23, 16772438.45, 27281.78451, 1476190.615, 724285.5956, 6414.315049, 301091.833, 52066.69646, 5676197.155, 2211.637123, 3009405.974, 1307.152181, 87985.43631, 1469648.941, 17.2651881, 6770870.768, 11040.75134, 460806.2825, 103285.6437, 507.7210711, 1694123.643, 89360.08922, 127295.4297, 164477.586, 4505.21262, 6654526.921, 10445.10625, 35734400.32, 100308.9442, 18584.88245, 3952.258667],
     [22072.69879, 0, 145388.4917, 87902722.56, 593733.2304, 882987.688, 176645.1597, 25791291.31, 354521.6816, 0, 2846303.345, 3506089.044, 31174.89116, 105558.7611, 2658530.453, 1086916.453, 0, 7338001.894, 0, 62255.55345, 7165536.221, 56790.53616, 29524.23636, 7396.351585, 10010590.86, 12080333.35, 14538102.92, 24129.73917, 1880539.289, 870491.5511, 3168.266212, 324461.8248, 60120.86896, 5837850.496, 2031.682325, 4474900.959, 3372.252323, 120133.8567, 1899626.937, 171.3267576, 6403766.336, 28341.43542, 601984.7191, 56581.35055, 5505.478952, 1690373.036, 64441.59633, 261487.5831, 315418.5909, 5031.699479, 8104744.186, 193.2645481, 61443669.58, 134176.2174, 12347.02601, 26610.12167],
     [19879.05865, 0, 57245.93845, 71014173.43, 435181.3301, 737581.5452, 81697.92112, 24040870.82, 242528.2966, 0, 2132892.207, 2681499.109, 24191.48155, 36192.49118, 1642973.465, 1088695.708, 0, 5643222.963, 0, 75662.49485, 5597636.663, 286781.537, 3735.876691, 5031.01088, 9508801.275, 9948592.374, 15840268.39, 22448.27035, 1346172.663, 762209.9972, 6654.711216, 112157.437, 33763.6211, 4646947.847, 3827.545525, 3314421.902, 5412.345105, 93986.86687, 1345087.437, 0, 5274310.594, 28038.72218, 496614.5217, 102164.4573, 912.2455587, 1340229.428, 1093355.923, 127963.2969, 336714.7977, 3653.046524, 6797649.305, 952.1530289, 39048237.53, 98747.61859, 5557.345776, 20926.43757],
     [21130.16375, 0, 43353.69368, 66159228.54, 504450.9175, 542741.0782, 154480.8993, 24771986.04, 330042.4108, 0, 1943952.58, 2764670.239, 29734.93788, 37380.86436, 1781201.062, 957552.6374, 0, 5793129.19, 0, 51742.76754, 5774588.525, 482700.5223, 3797.701067, 2465.381209, 10243550.68, 11749721.94, 12636382.43, 21668.79199, 1403612.686, 744777.4414, 5704.854625, 102905.496, 42759.72429, 4310810.313, 3998.761187, 3790624.552, 2703.892204, 107311.1766, 2187691.681, 3.828913089, 7644280.466, 24988.3716, 471708.3895, 49822.1596, 2798.103389, 1746781.414, 252814.005, 130996.0268, 144555.4818, 3406.594188, 6840221.086, 0, 53222416.45, 73171.2948, 18902.50856, 23721.14809],
     [17396.23915, 0, 50181.07349, 59411505.01, 324440.8482, 470720.7463, 34797.6015, 24945680.05, 170252.585, 0, 1896496.766, 1641875.654, 29061.55042, 46869.07585, 1335497.65, 1012653.392, 0, 7249373.714, 0, 32382.63272, 6498693.542, 414381.051, 1559.106667, 3623.741319, 14103045.49, 12567367.93, 15748973.75, 19658.2411, 1363339.199, 740781.3396, 21155.33819, 122308.1668, 24249.83001, 5591867.793, 1872.206311, 4704261.847, 4956.323976, 96329.90335, 1525605.785, 20.08012055, 7580616.732, 16423.43473, 472496.2067, 67190.9267, 3245.450253, 1275812.553, 271128.371, 165754.9179, 52503.34193, 3458.114329, 9171752.598, 0, 43109945.09, 89184.97764, 24147.21218, 4513.211507],
     [15414.45438, 0, 37132.71124, 58498294.15, 333514.1208, 475186.1795, 63698.68379, 21175534.63, 310821.5148, 0, 1997108.314, 2517092.585, 55132.70028, 53241.79837, 798051.0835, 944740.471, 95.89323657, 5933804.893, 27.79658588, 20501.61018, 5501368.133, 258751.1161, 1949.160711, 3338.236261, 11811047.5, 9865665.312, 7504102.827, 16122.35494, 1244992.684, 596880.2672, 12785.58847, 10706.44147, 19971.96938, 4774988.249, 3050.772474, 3802668.299, 4981.283199, 77529.4632, 1438289.403, 22.37968473, 6718945.798, 6601.206298, 439200.6562, 43889.31071, 2542.649323, 1415239.224, 426774.6627, 212728.7161, 183590.6078, 4745.936832, 6982224.221, 118662.9307, 46071338.8, 69634.27885, 43265.41974, 7944.661271]
     ];
    
     option = {
               
         baseOption: {
              timeline: {
             data: years,
             axisType: 'category',
             autoPlay: true,
             playInterval: 5000,
             left: '10%',
             right: '10%',
             bottom: '0%',
             width: '80%',
             //  height: null,
             label: {
                 normal: {
                     textStyle: {
                         
                         color: '#ff8800',
                     }
                 },
                 emphasis: {
                     textStyle: {
                         color: 'white'
                     }
                 }
             },
             symbolSize: 10,
             lineStyle: {
                 color: '#555'
             },
             checkpointStyle: {
                 borderColor: '#777',
                 borderWidth: 2
             },
             controlStyle: {
                 showNextBtn: true,
                 showPrevBtn: true,
                 normal: {
                     color: '#ff8800',
                     borderColor: '#ff8800'
                 },
                 emphasis: {
                     color: '#aaa',
                     borderColor: '#aaa'
                 }
             },

         },
             title: {
                 text: '',
                 right: '2%',
                 bottom: '8%',
                 textStyle: {
                     fontSize: 50,
                     color: '#666'
                 }
             },
             tooltip: {
                 'trigger': 'axis'
             },
             calculable: true,
             grid: {
                 left: '8%',
                 right: '2%',
                 bottom: '6%',
                 top:'0%',
                 containLabel: true
             },
             label:{
                 normal:{
                     textStyle:{
                         color:'white'
                     }
                 }
             },
             yAxis: [{
                   offset: '37',
                 'type': 'category',
                 data: '',
                 nameTextStyle:{
                     color:'white'
                 },
                 axisLabel:{
                     //rotate:45,
                     textStyle:{
                         fontSize:12,
                         color:'white',
                     },
                     interval: 0
                 },
                 axisLine:{

                     lineStyle:{
                         color:'#333'
                     },
                 },
                 splitLine:{
                     show:false,
                     lineStyle:{
                         color:'#333'
                     }
                 },

             }],
             xAxis: [{
                 'type': 'value',
                 'name': '',
                
                 splitNumber:8,
                 nameTextStyle:{
                     color:'#333'
                 },
                 axisLine:{
                     lineStyle:{
                         color:'#333'
                     }
                 },
                 axisLabel: {
                     formatter: '{value} '
                 },
                 splitLine:{
                     show:true,
                     lineStyle:{
                         color:'#ccc'
                     }
                 },
             }],
             series: [{
                 'name': '',
                 'type': 'bar',
                 markLine : {
                     label:{
                         normal:{
                             show:false
                         }
                     },
                     lineStyle:{
                         normal:{
                             color:'red',
                             width:3
                         }
                     },
                 },
                 barWidth:'50%',
                 label: {
                     normal: {
                         show: true,
                         position: 'inside',
                         formatter: '{c}'
                     }
                 },
                 itemStyle: {
                     normal: {
                         color: function(params) {
                             // build a color map as your need.
                             var colorList = [
                             '#0048BA',
'#B0BF1A',
'#7CB9E8',
'#C0E8D5',
'#B284BE',
'#72A0C1',
'#EDEAE0',
'#F0F8FF',
'#C46210',
'#EFDECD',
'#E52B50',
'#9F2B68',
'#F19CBB',
'#AB274F',
'#D3212D',
'#3B7A57',
'#FFBF00',
'#FF7E00',
'#9966CC',
'#A4C639',
'#CD9575',
'#665D1E',
'#915C83',
'#841B2D',
'#FAEBD7',
'#008000',
'#8DB600',
'#FBCEB1',
'#00FFFF',
'#7FFFD4',
'#D0FF14',
'#4B5320',
'#8F9779',
'#E9D66B',
'#B2BEB5',
'#87A96B',
'#FF9966',
'#A52A2A',
'#FDEE00',
'#568203',
'#007FFF',
'#F0FFFF',
'#89CFF0',
'#A1CAF1',
'#F4C2C2',
'#FEFEFA',
'#FF91AF',
'#FAE7B5',
];

                             return colorList[params.dataIndex]
                         },

                     }
                 },
             }],
             animationDurationUpdate: 2000,
             animationEasingUpdate: 'quinticInOut'
         },
         options: []
     };
     for (var n = 0; n < years.length; n++) {
         
                var res = [];
    //alert(jdData.length);
        for(j=0;j<data[n].length;j++){
             res.push({
             name: jdData[n][j],
             value: data[n][j]
         });
      
}

res.sort(function(a, b) {
     return b.value - a.value;
 }).slice(0, 6);

res.sort(function(a, b) {
 return a.value - b.value;
});
var res1=[];
var res2=[];
   //console.log(res);
   for(t=0;t<res.length;t++){
       res1[t]=res[t].name;
         res2[t]=res[t].value;
   }
     console.log(res1);
     console.log("----------------");
       console.log(jdData[n]);
         option.options.push({
             title: {
                 text: years[n]
             },
             yAxis:{
                 data:res1,
             },
             series: [{
                 data: res2
             }]
         });
     }  