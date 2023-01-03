using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using DataLayer;
using System.Web.Http.Cors;

namespace AigExam.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    public class ValuesController : ApiController
    {
        private DAL dal = new DAL();

        [HttpGet]
        [Route("api/Categories")]
        public List<V_getCategory> GetCategories()
        {
            return dal.GetCategories();
        }

        [HttpGet]
        [Route("api/ArticlesByCategory")]
        public List<P_getArticlesByCategory_Result> GetArticlesByCategory(int categoryID)
        {
            return dal.GetArticlesByCategory(categoryID);
        }

        [HttpGet]
        [Route("api/FavoritesArticles")]
        public List<V_getAllArticles> GetFavoritesArticles(string favorites)
        {
            char seperator = ',';
            string[] favoritesArr = favorites.Split(seperator);
            return dal.GetFavorites(favoritesArr);
        }
    }
}
